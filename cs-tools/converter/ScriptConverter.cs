using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace converter
{
    class ScriptConverter
    {
        static internal string InputEncoding = "shift_jis";
        static void Main(string[] args)
        {
            var scriptFile = new DirectoryInfo(args[0]);
            var dstFolder = new DirectoryInfo(args[1]);
            InputEncoding = args.ElementAtOrDefault(2) ?? InputEncoding;
            try
            {
                Log.Reset();
                var sc = new ScriptConverter(scriptFile, dstFolder);
                sc.ConvertFolder();
            }
            finally
            {
                Log.Close();
            }
        }

        protected readonly DirectoryInfo srcF;
        protected readonly DirectoryInfo dstF;
        protected readonly DirectoryInfo scriptF;

        private readonly StringCommandReader stringCommandReader;
        protected readonly HashSet<int> unsupportedOpCodes;

        private BinaryReader input;
        private int[] jumpTable;
        private int[] textTable;
        private int[] graphicsTable;

        private string pos;

        private HashSet<int> textCoveragePool = new HashSet<int>();
        private HashSet<int> imageCoveragePool = new HashSet<int>();

        private string currentFileName = "";
        private long currentOpcodeOffset = 0;

        private string NewLine = "\r\n";

        public ScriptConverter(DirectoryInfo srcF, DirectoryInfo dstF)
        {
            this.srcF = srcF;
            this.dstF = dstF;

            stringCommandReader = new StringCommandReader();
            stringCommandReader.SetNewLine(NewLine);

            scriptF = new DirectoryInfo(Path.Combine(dstF.FullName, "script"));
            scriptF.Create();

            unsupportedOpCodes = new HashSet<int>();

        }

        public void ConvertFolder()
        {
            var scriptFiles = srcF
               .GetFiles("*.scr", SearchOption.TopDirectoryOnly)
               .Where(e => e.Name != "startup.scr" && e.Name != "system.scr")
               .OrderBy(e => e.Name)
               ;
            foreach (var scriptFile in scriptFiles)
            {
                ConvertFile(scriptFile);
            }
        }

        protected void ConvertFile(FileInfo file)
        {
            Log.Write("[Info] Converting script: " + file.Name);
            currentFileName = file.Name;
            unsupportedOpCodes.Clear();
            input = new BinaryReader(new MemoryStream(File.ReadAllBytes(file.FullName)));
            input.BaseStream.SetUpPolyfill(limit: input.BaseStream.Length);

            int magic = input.ReadInt32();
            if (magic != 0x00334353)
            {
                char[] str = new char[] {
               (char) (magic & 0xFF),
               (char) ((magic >> 8) & 0xFF),
               (char) ((magic >> 16) & 0xFF),
               (char) ((magic >> 24) & 0xFF)};
                throw new IOException(
                   "Invalid magic, expected: 0x00334353 (SC3\\0)" +
                   ", got " + magic.ToString("0x{0:x8}") + " (" + new string(str) +
                   ") in file: " + file.FullName);
            }
            int textTableOffset = input.ReadInt32();
            int graphicsTableOffset = input.ReadInt32();
            int headerSize = input.ReadInt32();

            jumpTable = new int[(headerSize - 12) / 4];
            jumpTable[0] = headerSize;
            for (int t = 1; t < jumpTable.Length; t++)
            {
                jumpTable[t] = input.ReadInt32();
            }

            input.BaseStream.Position = textTableOffset;
            int textTableBytes = graphicsTableOffset - textTableOffset;
            textTable = new int[textTableBytes / 4];
            for (int t = 0; t < textTable.Length; t++)
            {
                textTable[t] = input.ReadInt32();
            }

            input.BaseStream.Position = graphicsTableOffset;
            long graphicsTableBytes = (textTable.Length > 0 ? textTable[0] : input.BaseStream.Limit()) - graphicsTableOffset;
            graphicsTable = new int[graphicsTableBytes / 4];
            for (int t = 0; t < graphicsTable.Length; t++)
            {
                graphicsTable[t] = input.ReadInt32();
            }

            // Read opcodes						
            var decF = new FileInfo(
               Path.Combine(scriptF.FullName, Path.GetFileNameWithoutExtension(file.Name)) + ".dec");
            input.BaseStream.Position = jumpTable[0]; // entry point
            input.BaseStream.Limit(Math.Min(textTableOffset, graphicsTableOffset));
            if (graphicsTableOffset < textTableOffset)
            {
                Log.Write("graphicsTableOffset < textTableOffset");
            }
            try
            {
                Decode(input, decF);
            }
            finally
            {
                input.BaseStream.Rewind();
                input.BaseStream.Limit(input.BaseStream.Length);
            }
        }

        protected void Decode(BinaryReader inp, FileInfo dstF)
        {
            textCoveragePool.Clear();
            imageCoveragePool.Clear();
            using var pout = new StreamWriter(dstF.FullName, false, new UTF8Encoding(true));
            pout.NewLine = NewLine;
            bool commandMode = false;
            while (inp.BaseStream.HasRemaining())
            {
                pout.Write("[{0:x8}]", inp.BaseStream.Position);
                pos = dstF.FullName + ":" + inp.BaseStream.Position.ToString("x");
                currentOpcodeOffset = inp.BaseStream.Position;

                int opcode = inp.ReadByte() & 0xFF;
                long lastPosition = inp.BaseStream.Position;
                string GetRemainingByteCodes()
                {
                    long remainingByteLength = inp.BaseStream.Position - lastPosition;
                    inp.BaseStream.Position = lastPosition;
                    byte[] remainingBytes = new byte[remainingByteLength];
                    inp.BaseStream.Read(remainingBytes, 0, (int)remainingByteLength);
                    return string.Join(" ", remainingBytes.Select(e => e.ToString("x2")));
                }

                if (WorkAround.Make(currentOpcodeOffset, currentFileName, inp, jumpTable, pout))
                {
                    continue;
                }
                else
                {
                    pout.Write("{0:x2}", opcode);
                }
                if (commandMode)
                {
                    commandMode = false;
                    Opcode op = Opcode.Get(opcode);
                    if (op == null)
                    {
                        if (unsupportedOpCodes.Add(opcode))
                        {
                            Log.Write(string.Format("  [Unknown] Unsupported opcode: {0:x2} ({1}) at {2:x8}", opcode, opcode, currentOpcodeOffset));
                        }
                        pout.Write(": unsupported {0} ", opcode);
                    }
                    else
                    {
                        string result = null;
                        try
                        {
                            result = DecodeOp(op);
                            var remaining = GetRemainingByteCodes();
                            pout.Write(remaining.Length == 0 ? remaining : (" " + remaining));
                            pout.Write(": ");
                            if (result != null)
                            {
                                pout.Write(result);
                            }
                        }
                        catch (Exception re)
                        {
                            Log.Write($"  [Error] Exception while decoding opcode ({op}) {dstF.FullName}:{inp.BaseStream.Position}");
                            Log.Write(re.ToString());
                        }
                    }
                }
                else if (opcode == 0x10)
                {
                    pout.Write(": ");
                    commandMode = true;
                }
                else
                {
                    Opcode op = Opcode.Get(opcode);
                    if (op == Opcode.end
                     || op == Opcode.waitForSFX
                     || op == Opcode.gotoif
                     || op == Opcode._switch
                     || op == Opcode.varop
                     || op == Opcode.text
                     || Opcode.rest.ContainsKey(opcode))
                    {
                        string result = null;
                        try
                        {
                            if (Opcode.rest.ContainsKey(opcode))
                            {
                                result = DecodeOpRest(opcode);
                            }
                            else
                            {
                                result = DecodeOp(op);
                            }
                            var remaining = GetRemainingByteCodes();
                            pout.Write(remaining.Length == 0 ? remaining : (" " + remaining));
                            pout.Write(": ");
                            if (result != null)
                            {
                                pout.Write(result);
                            }
                        }
                        catch (Exception re)
                        {
                            Log.Write("  [Error] Exception while decoding opcode (" +
                               $"{(op == null ? opcode.ToString() : op.ToString())}) " + pos);
                            Log.Write(re.ToString());
                        }
                    }
                    else
                    {
                        pout.Write(": unsupported");
                    }
                }
                pout.WriteLine();
            }

            if (textCoveragePool.Count < textTable.Length)
            {
                Log.Write("  [Warn] Text coverage not covered all texts! (" + textCoveragePool.Count + "/" + textTable.Length + ")");
            }
            if (imageCoveragePool.Count < graphicsTable.Length)
            {
                Log.Write("  [Warn] Graphics coverage not covered all images! (" + imageCoveragePool.Count + "/" + graphicsTable.Length + ")");
                var unusedImages = new List<string>();
                for (var i = 0; i < graphicsTable.Length; i++)
                {
                    if (!imageCoveragePool.Contains(i))
                    {
                        unusedImages.Add(ReadText(input, graphicsTable[i]));
                    }
                }
                Log.Write("  [Warn] Unused images: " + string.Join(" ", unusedImages));
            }
        }

        protected string DecodeOpRest(int opcode)
        {
            switch (opcode)
            {
                case 0x05:
                    {
                        string arg0 = ReadExpr();
                        return $"{Opcode.rest[opcode]} {arg0}";
                    }
                case 0x27:
                    {
                        int a1 = Read();
                        int a2 = Read();
                        return Opcode.rest[opcode];
                    }
                case 0x28:
                    {
                        return Opcode.rest[opcode];
                    }
                case 0x19:
                    {
                        string arg0 = ReadExpr();
                        string arg1 = ReadExpr();
                        return $"{Opcode.rest[opcode]} {arg0} {arg1}";
                    }
                case 0x12:
                    {
                        string arg0 = ReadExpr();
                        return $"{Opcode.rest[opcode]} {arg0}";
                    }
                case 0x13:
                    {
                        string arg0 = ReadExpr();
                        return $"{Opcode.rest[opcode]} {arg0}";
                    }
                case 0x15:
                    {
                        int arg0 = Read();
                        string arg1 = ReadExpr();
                        string arg2 = ReadExpr();
                        int arg3 = ReadShort();
                        return $"{Opcode.rest[opcode]} {arg0} {arg1} {arg2} {arg3}";
                    }
                case 0x6:
                    {
                        return Opcode.rest[opcode];
                    }
                case 0x0d:
                    {
                        string arg0 = ReadExpr();
                        int arg1 = Read();
                        int arg2 = Read();
                        return string.Format("{0} {1} {2:x2} {3:x2}", Opcode.rest[opcode], arg0, arg1, arg2);
                    }
            }
            return "unkOp";
        }

        protected string DecodeOp(Opcode op)
        {
            if (op == Opcode.end)
            {
                return null;
            }
            else if (op == Opcode.removeFG)
            {
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                return $"{op} {arg0} {arg1}";
            }
            else if (op == Opcode.jump)
            {
                string jumpAddress = ReadCString();
                return $"{op} {jumpAddress}";
            }
            else if (op == Opcode.bgload)
            {
                int arg0 = ReadInt();
                int imageIndex = ReadShort();
                string num1 = ReadExpr();
                string num2 = ReadExpr();

                string filename = ReadText(input, graphicsTable[imageIndex]);
                imageCoveragePool.Add(imageIndex);

                return string.Format("bgload {0:x8} {1} {2} {3}",
                        arg0, filename, num1, num2);
            }
            else if (op == Opcode.removeBG)
            {
                string num1 = ReadExpr();
                string num2 = ReadExpr();
                string num3 = ReadExpr();
                return $"removeBG {num1} {num2} {num3}";
            }
            else if (op == Opcode.fgload)
            {
                string num1 = ReadExpr();
                int arg0 = ReadInt();
                int imageIndex = ReadShort();
                string x = ReadExpr();
                string num3 = ReadExpr();

                string filename = ReadText(input, graphicsTable[imageIndex]);
                imageCoveragePool.Add(imageIndex);

                return string.Format("fgload {0} {1:x8} {2} {3} {4}",
                        num1, arg0, filename, x, num3);
            }
            else if (op == Opcode.multifgload2)
            {
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                int arg2 = ReadInt();
                int imageIndex1 = ReadShort();
                int arg4 = ReadInt();
                int imageIndex2 = ReadShort();
                string x1 = ReadExpr();
                string x2 = ReadExpr();
                string arg8 = ReadExpr();

                string filename1 = ReadText(input, graphicsTable[imageIndex1]);
                imageCoveragePool.Add(imageIndex1);
                string filename2 = ReadText(input, graphicsTable[imageIndex2]);
                imageCoveragePool.Add(imageIndex2);
                return string.Format("{0} {1} {2} {3:x8} {4} {5:x8} {6} {7} {8} {9}",
                        op, arg0, arg1, arg2, filename1, arg4, filename2, x1, x2, arg8);
            }
            else if (op == Opcode.multifgload3)
            {
                int arg0 = ReadInt();
                int imageIndex1 = ReadShort();
                int arg1 = ReadInt();
                int imageIndex2 = ReadShort();
                int arg2 = ReadInt();
                int imageIndex3 = ReadShort();
                string arg3 = ReadExpr();
                string arg4 = ReadExpr();
                string arg5 = ReadExpr();
                string arg6 = ReadExpr();

                string filename1 = ReadText(input, graphicsTable[imageIndex1]);
                imageCoveragePool.Add(imageIndex1);
                string filename2 = ReadText(input, graphicsTable[imageIndex2]);
                imageCoveragePool.Add(imageIndex2);
                string filename3 = ReadText(input, graphicsTable[imageIndex3]);
                imageCoveragePool.Add(imageIndex3);
                return string.Format("{0} {1:x8} {2} {3:x8} {4} {5:x8} {6} {7} {8} {9} {10}",
                        op, arg0, filename1, arg1, filename2, arg2, filename3,
                        arg3, arg4, arg5, arg6);
            }
            else if (op == Opcode.multiremoveFG)
            {
                int arg0 = Read();
                int arg1 = Read();
                int arg2 = Read();
                string arg3 = ReadExpr();
                string interpretedFuncName = arg3 == "3" ? "multiremoveFG_Anim" : "multiremoveFG_Sta";
                return arg0 switch {
                    0x87 => $"{interpretedFuncName} 1 2 4",
                    0x83 => $"{interpretedFuncName} 1 2 0",
                    0x85 => $"{interpretedFuncName} 1 4 0",
                    0x86 => $"{interpretedFuncName} 2 4 0",
                    _ => string.Format("{0} {1:x2} {2:x2} {3:x2} {4}", op, arg0, arg1, arg2, arg3),
                };
            }
            else if (op == Opcode.setFGOrder_Unk)
            {
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                string arg2 = ReadExpr();
                string combinedStr = arg0 + ' ' + arg1 + ' ' + arg2;
                string interpretedFuncName = "setFGOrder";
                return combinedStr switch {
                    "0 1 2" => $"{interpretedFuncName} 4 2 1",
                    "0 2 1" => $"{interpretedFuncName} 2 4 1",
                    "1 0 2" => $"{interpretedFuncName} 4 1 2",
                    "1 2 0" => $"{interpretedFuncName} 1 4 2",
                    "2 0 1" => $"{interpretedFuncName} 2 1 4",
                    "2 1 0" => $"{interpretedFuncName} 1 2 4",
                    "0 1 255" => $"{interpretedFuncName} 4 2 1",
                    "1 0 255" => $"{interpretedFuncName} 4 1 2",
                    _ => $"{op} {arg0} {arg1} {arg2}",
                };
            }
            else if (op == Opcode.clock)
            {
                string hours = ReadExpr();
                string minutes = ReadExpr();
                return $"clock {hours}:{minutes}";
            }
            else if (op == Opcode.text)
            {
                int index = ReadShort();
                string str = "***";
                if (index >= 0 && index < textTable.Length)
                {
                    str = ReadText(input, textTable[index]);
                    textCoveragePool.Add(index);
                }
                else
                {
                    Log.Write("  [Unknown] Text table index is out of bounds at "
                       + string.Format("{0:x8}", currentOpcodeOffset) + ": " + index);
                }
                return string.Format("{0} {1:x2}{3}{2}{3}", op, index, str, NewLine);
            }
            else if (op == Opcode.hideTextbox)
            {
                return "hideTextbox";
            }
            else if (op == Opcode.showTextbox)
            {
                return "showTextbox";
            }
            else if (op == Opcode.playBGM)
            {
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                return $"playBGM {arg0} {arg1}";
            }
            else if (op == Opcode.stopBGM)
            {
                return "stopBGM";
            }
            else if (op == Opcode.playSFX)
            {
                string filename = ReadCString();
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                return $"playSFX {filename} {arg0} {arg1}";
            }
            else if (op == Opcode.stopSFX)
            {
                return "stopSFX";
            }
            else if (op == Opcode.gotoif)
            {
                int arg0 = Read();
                int arg1 = Read();
                int arg2 = Read();
                int arg3 = Read();
                int var = Read();
                string @operator = GetComparisonOperator(ReadShort());
                int arg4 = Read();

                string val;
                int v = Peek();
                if (v >= 0x80 && v <= 0x8f)
                {
                    v = Read();
                    val = (v - 0x80).ToString();
                }
                else if (v >= 0xA0 && v <= 0xAF)
                {
                    v = Read();
                    int v2 = Read();
                    val = (256 * (v - 0xa0) + v2).ToString();
                }
                else
                {
                    var wkarRs = WorkAround.CollectASpecialGotoIfThatNotActuallyGotoIf(input, currentOpcodeOffset);
                    if (wkarRs != null) return wkarRs;
                    Log.Write(string.Format("  [Unknown] Unexpected val in {0} at {1:x8}", v, currentOpcodeOffset));
                    val = "00";
                }

                int arg7 = ReadShort();
                int jumpTableIndex = ReadShort();
                uint jumpTarget = 0xFFFFFFFF;
                if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.Length)
                {
                    jumpTarget = (uint)jumpTable[jumpTableIndex];
                }
                else
                {
                    Log.Write("  [Unknown] Invalid jump in " + op + " at " + string.Format("{0:x8}", currentOpcodeOffset) + ": " + jumpTableIndex);
                }

                string result = string.Format("{0} {1} ({2:x2} {3:x2} {4:x2}) {5:x2} "
                        + "{6} ({7:x2}) {8} ({9:x4}) -> {10:x8} ({11:x8})",
                        op, arg0, arg1, arg2, arg3, var, @operator,
                        arg4, val, arg7, jumpTarget, jumpTableIndex);
                return result;
            }
            else if (op == Opcode.choiceId)
            { //Choice related?
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                return $"{op} {arg0} {arg1}";
            }
            else if (op == Opcode._switch)
            {
                StringBuilder sb = new StringBuilder();
                sb.Append($"{op}{NewLine}");

                //Conditional?
                int condOp2 = Peek();
                if (condOp2 != Opcode._switch3.id)
                {
                    Log.Write($"  [Unknown] Unexpectedly came across a weird opcode ({condOp2}) during a {op} at " + string.Format("{0:x8}", currentOpcodeOffset));
                }

                StringBuilder varopBuffer = new StringBuilder();
                varopBuffer.Append("switch_varop ");
                {
                    int arg0 = Read();
                    int arg1 = Read();
                    int arg2 = Read();
                    int var = Read();
                    int @operator = ReadShort();

                    int nil = Read();

                    varopBuffer.Append(string.Format("({0:x2} {1:x2} {2:x2}) {3:x2} {4:x4} ({5:x2})",
                            arg0, arg1, arg2, var, @operator, nil));
                }

                sb.Append(varopBuffer);
                sb.Append(NewLine);

                //Cases
                while (Peek() != 0x26)
                {
                    int subop = Read();
                    if (subop != 0x27)
                    {
                        Log.Write($"  [Unknown] Unexpected subop in {op}, expected 0x27, got {subop} at " + string.Format("{0:x8}", currentOpcodeOffset));
                    }

                    string subarg0 = ReadExpr();
                    int jumpTableIndex = ReadShort();
                    uint jumpTarget = 0xFFFFFFFF;
                    if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.Length)
                    {
                        jumpTarget = (uint)jumpTable[jumpTableIndex];
                    }
                    else
                    {
                        Log.Write("  [Unknown] Invalid jump in switch case at " + string.Format("{0:x8}", currentOpcodeOffset) + ": " + jumpTableIndex);
                    }
                    sb.Append(string.Format("{0:x2} -> {1} {2:x8} ({3:x8}){4}", subop, subarg0, jumpTarget, jumpTableIndex, NewLine));

                    if (Peek() == 0)
                    {
                        Read();
                    }
                    else
                    {
                        break;
                    }
                }

                return sb.ToString();
            }
            else if (op == Opcode.bgload_keepFg)
            {
                int arg0 = ReadInt();
                int imageIndex = ReadShort();
                string filename = ReadText(input, graphicsTable[imageIndex]);
                imageCoveragePool.Add(imageIndex);
                string arg2 = ReadExpr();
                string arg3 = ReadExpr();

                return string.Format("{0} {1:x8} {2} {3} {4}", op, arg0, filename, arg2, arg3);
            }
            else if (op == Opcode.bgloadCrop)
            {
                int arg0 = ReadInt();
                int imageIndex = ReadShort();
                string arg2 = ReadExpr();
                string arg3 = ReadExpr();
                string arg4 = ReadExpr();
                string arg5 = ReadExpr();
                string arg6 = ReadExpr();
                string arg7 = ReadExpr();

                string filename = ReadText(input, graphicsTable[imageIndex]);
                imageCoveragePool.Add(imageIndex);
                return string.Format("{0} {1:x8} {2} {3} {4} {5} {6} {7} {8}", op, arg0, filename,
                        arg2, arg3, arg4, arg5, arg6, arg7);
            }
            else if (op == Opcode.tweenZoom)
            {
                string x = ReadExpr();
                string y = ReadExpr();
                string w = ReadExpr();
                string h = ReadExpr();
                string duration = ReadExpr();
                return $"{op} {x} {y} {w} {h} {duration}";
            }
            else if (op == Opcode.waitForSFX)
            {
                input.BaseStream.Position -= 2;
                if (input.ReadByte() != 0x10)
                {
                    input.BaseStream.Position += 1;
                    int jumpTableIndex = ReadShort();
                    uint jumpTarget = 0xFFFFFFFF;
                    if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.Length)
                    {
                        jumpTarget = (uint)jumpTable[jumpTableIndex];
                        return string.Format("goto {0:x8} ({1:x8})", jumpTarget, jumpTableIndex);
                    }
                    else
                    {
                        Log.Write($"  [Unknown] Invalid jump in {op} at " + string.Format("{0:x8}", currentOpcodeOffset) + ": " + jumpTableIndex);
                        return string.Format("goto {0:x8} ({1:x8})", jumpTarget, jumpTableIndex);
                    }
                }
                input.BaseStream.Position += 1;
                return op.ToString();
            }
            else if (op == Opcode.varop)
            {
                int arg0 = Read();
                int arg1 = Read();
                int arg2 = Read();
                int arg3 = Read();
                string @operator = GetVaropOperator(ReadShort());
                int arg4 = Read();
                string arg5 = ReadExpr();

                // hardcode workaround
                if (arg0 == 0x28 && arg1 == 0x0a)
                {
                    switch (arg2)
                    {
                        case 0xa0:
                            switch (arg3)
                            {
                                case 0xab:
                                    return "setMonoColorOverlayFadeOutDuration " + arg5;
                            }
                            break;
                        case 0xa2:
                            switch (arg3)
                            {
                                case 0x38:
                                    return "setKomoreType " + arg5;
                                case 0x3a:
                                    return "setChangePerspectiveDirection " + arg5;
                                case 0x44:
                                    return "setNumberOfFlash " + arg5;
                                case 0x43:
                                    return "setFlashBrightness " + arg5;
                                case 0x13:
                                    if (arg5 == "1")
                                    {
                                        return "turnOnFullscreenTextMode";
                                    }
                                    else if (arg5 == "0")
                                    {
                                        return "turnOffFullscreenTextMode";
                                    }
                                    break;
                                case 0x45:
                                    return "setMapCommentSlotToDisplay " + arg5;
                                case 0x46:
                                    return "pickMapCommentByIndex " + arg5;
                                case 0x4a:
                                    return "pickMapCommentByIndex2 " + arg5;
                            }
                            break;
                        case 0xa4:
                            switch (arg3)
                            {
                                case 0xfa:
                                    return "setSceneTitleByIndex " + arg5;
                            }
                            break;
                    }
                }

                string result = string.Format("{0} ({1:x2} {2:x2} {3:x2}) {4:x2} {5} ({6:x2}) {7}",
                        op, arg0, arg1, arg2, arg3, @operator, arg4, arg5);
                return result;
            }
            else if (op == Opcode.chapterCutin)
            {
                int arg0 = ReadInt();
                int imageIndex = ReadShort();
                string filename = ReadText(input, graphicsTable[imageIndex]);
                imageCoveragePool.Add(imageIndex);
                return string.Format("{0} {1:x8} {2}", op, arg0, filename);
            }
            else if (op == Opcode.unlockCG)
            {
                int arg0 = ReadInt();
                int imageIndex = ReadShort();
                string filename = ReadText(input, graphicsTable[imageIndex]);
                imageCoveragePool.Add(imageIndex);
                return $"{op} {filename}";
            }
            else if (op == Opcode.playVoice)
            {
                string fileName = ReadCString();
                return $"{op} {fileName}";
            }
            else if (op == Opcode.openAnim)
            {
                // this seems to be an instruction to show overlay anim
                // some case has seperate param instruction
                string arg0 = ReadExpr();
                // hardcode workaround
                switch (arg0)
                {
                    case "4":
                        return "shakeScreenHard";
                    case "5":
                        return "shakeScreen";
                    case "12":
                        return "openShakeScreenAnim";
                    case "19":
                        return "showFog2";
                    case "27":
                        return "showKomoreAnim";
                    case "32":
                        return "showFilter2";
                    case "41":
                        return "openSnowFallingAnim";
                    case "44":
                        return "showDimOverlay";
                    case "45":
                        return "showDimInAndOutAnim";
                    case "46":
                        return "triggerFlash";
                    case "47":
                        return "triggerChangePerspectiveAnim";
                    case "48":
                        return "openMapCommentAnim";
                    case "49":
                        return "show_map_root_image_blinking_Anim";
                    case "18":
                        return "openCherryBlossomAnim";
                    default:
                        break;
                }
                return $"{op} {arg0}";
            }
            else if (op == Opcode.closeAnim)
            {
                // this seems to be an instruction to close anim
                // some case has seperate param instruction
                string arg0 = ReadExpr();
                switch (arg0)
                {
                    case "0":
                        return "closeFog2";
                    case "7":
                        return "closeKomoreAnim";
                    case "11":
                        return "closeShakeScreenAnim";
                    case "12":
                        return "closeCherryBlossomAnim";
                    case "13":
                        return "closeDimInAndOutAndFilterAnim";
                    case "14":
                        return "closeSnowFallingAnim";
                    case "15":
                        return "closeMapIndicatorAnim";
                    case "16":
                        return "closeDimOverlay";
                }
                return $"{op} {arg0}";
            }
            else if (op == Opcode.delay)
            {
                string arg0 = ReadExpr();
                if (arg0 == "VAR_c1_34464_0")
                {
                    return "waitForClick";
                }
                return $"{op} {arg0}";
            }
            else if (op == Opcode.scriptLocationId)
            {
                string arg0 = ReadExpr();
                return $"{op} {arg0}";
            }
            else if (op == Opcode.setDialogBoxColor)
            {
                string arg0 = ReadExpr();
                switch (arg0)
                {
                    case "2":
                        arg0 = "gray";
                        break;
                    case "0":
                        arg0 = "blue";
                        break;
                    case "1":
                        arg0 = "green";
                        break;
                }
                return $"{op} {arg0}";
            }
            else if (op == Opcode.monoColorOverlay)
            {
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                return $"{op} {arg0} {arg1}";
            }
            else if (op == Opcode.playMovie)
            {
                string fileName = ReadCString();
                return $"{op} {fileName}";
            }
            else if (op == Opcode.unknown09 || op == Opcode.unknown3a || op == Opcode.unknown3c)
            {
                return op.ToString();
            }
            else if (op == Opcode.makeFGSomething)
            {
                string arg0 = ReadExpr();
                string arg1 = ReadExpr();
                string targetId = arg0 == "0" ? "1" : "2";
                switch (arg1)
                {
                    case "8":
                        return $"makeFGTransparent {targetId}";
                    case "16":
                    case "15":
                        return $"makeFGNormal {targetId}";
                    case "17":
                        return $"makeFGHasYellowAmbient {targetId}";
                    default:
                        break;
                }
                return $"{op} {arg0} {arg1}";
            }
            else if (op == Opcode.unknown2b || op == Opcode.unknown3b || op == Opcode.unknown43)
            {
                string arg0 = ReadExpr();
                return $"{op} {arg0}";
            }
            else
            {
                if (op.args > 0)
                {
                    Log.Write(string.Format(
                       "  [Unknown] Unhandled opcode ({0:x2}) with {1} args at {2:x8}",
                       op.id, op.args, currentOpcodeOffset));
                }
                return null;
            }
        }

        protected int Peek()
        {
            if (input.BaseStream.Remaining() == 0)
            {
                return 0;
            }
            int rs = input.ReadByte() & 0xFF;
            input.BaseStream.Position -= 1;
            return rs;
        }
        protected int Read()
        {
            return input.ReadByte() & 0xFF;
        }

        protected int ReadShort()
        {
            return input.ReadInt16() & 0xFFFF;
        }

        protected int ReadInt()
        {
            return input.ReadInt32();
        }

        protected string ReadCString()
        {
            return KIDUtil.ReadCString(input);
        }

        protected string ReadExpr()
        {
            return Ever17Util.ReadExpr(input, currentOpcodeOffset);
        }

        protected static string GetVaropOperator(int c)
        {
            return c switch {
                0x1414 => ":=",
                0x1714 => "+=",
                _ => string.Format("{0:x4}", c),
            };
        }

        protected static string GetComparisonOperator(int c)
        {
            return c switch {
                0x0c14 => "==",
                0x0d14 => "!=",
                0x0e14 => "<=",
                0x0f14 => ">=",
                0x1014 => "< ",
                0x1114 => "> ",
                _ => string.Format("{0:x4}", c),
            };
        }


        protected string ReadText(BinaryReader buf, int offset)
        {
            long oldlimit = buf.BaseStream.Limit();
            long oldpos = buf.BaseStream.Position;
            try
            {
                buf.BaseStream.Limit(buf.BaseStream.Length);
                buf.BaseStream.Position = offset;
                return ReadText(buf);
            }
            finally
            {
                buf.BaseStream.Position = oldpos;
                buf.BaseStream.Limit(oldlimit);
            }
        }

        protected string ReadText(BinaryReader buf)
        {
            return stringCommandReader.Parse(buf);
        }
    }
}