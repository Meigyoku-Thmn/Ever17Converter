package nl.weeaboo.kid;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.channels.FileChannel;
import java.util.HashMap;
import java.util.Map;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.FileCollectFilter;
import nl.weeaboo.io.FileUtil;
import nl.weeaboo.io.LittleEndianInputStream;
import nl.weeaboo.vnds.BatchProcess;
import nl.weeaboo.vnds.FileOp;
import nl.weeaboo.vnds.Log;

public class UnDAT {

	private UnDAT() {		
	}
	
	//Functions
	public static void main(String[] args) {
		String src = args[0];
		String dst = args[1];
		
		extractFolder(new File(src), new File(dst));
	}
	
	public static void extractFolder(File srcF, final File dstF, String... ignoreList) {
		Map<String, File> files = new HashMap<String, File>();
		FileUtil.collectFiles(files, srcF, false, false, new FileCollectFilter() {
			public boolean accept(String relpath, File file) {
				if (file.isDirectory()) return true;
				return !relpath.startsWith("save") && (relpath.endsWith(".dat") || relpath.endsWith(".DAT"));
			}
		});
		for (String file : ignoreList) {
			files.remove(file);
		}
		
		Log.v("Extracting resources, this may take a long time...");

		BatchProcess batch = new BatchProcess();
		//batch.setThreads(Runtime.getRuntime().availableProcessors());
		batch.setTaskSize(1); 
		try {
			batch.run(files, new FileOp() {
				public void execute(String relpath, File file) throws IOException {
					extract(file, new File(dstF, StringUtil.stripExtension(relpath)));
				}
			});
		} catch (InterruptedException ie) {
			//Ignore
		}
		
		Log.v("Done extracting files.");
	}
	
	public static void extract(File archive, File dst) throws IOException {
		if (!archive.isFile()) throw new IllegalArgumentException("Archive is not a file");
		dst.mkdirs();
		if (!dst.isDirectory()) throw new IllegalArgumentException("dst is not a folder");
		
		FileInputStream fin = new FileInputStream(archive);
		try {
			
			Record[] records;
			int recordsL;
			{
				LittleEndianInputStream lin = LittleEndianInputStream.wrap(new BufferedInputStream(fin));
				int magic = lin.readInt();
				if (magic != 0x004B4E4C) {
					throw new IOException(String.format("Unknown archive format header: %08x", magic));
				}
				
				recordsL = lin.readInt();
				records = new Record[recordsL];
	
				lin.skip(8);
				
				byte temp[] = new byte[24];
				for (int n = 0; n < recordsL; n++) {
					long rawOffset = lin.readUnsignedInt();
					@SuppressWarnings("unused")
					long unknown = lin.readUnsignedInt();
	
					lin.read(temp, 0, 24);
					int tempL = 0;
					while (tempL < temp.length && temp[tempL] != '\0') {
						tempL++;
					}
					String filename = new String(temp, 0, tempL, "ASCII");
					
					//Offset in file is relative to end of header
					long offset = 16 + 32 * recordsL + rawOffset;
					
					if (n > 0) {
						records[n-1].length = offset - records[n-1].offset;
					}
					records[n] = new Record(offset, filename);
				}
				
				if (recordsL > 0) {
					records[recordsL-1].length = archive.length() - records[recordsL-1].offset;
				}
			}
			
			FileChannel channel = fin.getChannel();
			
			System.out.printf("Extracting %s (%d files)\n", archive.toString(), recordsL);
			for (int n = 0; n < recordsL; n++) {
				File file = new File(dst.getAbsolutePath(), records[n].filename.toLowerCase());
				file.getParentFile().mkdirs();
				
				ByteBuffer lndHeader = ByteBuffer.allocate(16);
				lndHeader.order(ByteOrder.LITTLE_ENDIAN);
								
				FileOutputStream fout = new FileOutputStream(file);
				try {
					FileChannel oc = fout.getChannel();

					long off = records[n].offset;
					long len = records[n].length;

					//System.out.println(off + " " + len);
					channel.read(lndHeader, off);
					lndHeader.rewind();
					
					if (lndHeader.getInt() == 0x00646E6C) {
						//System.out.println("Decompressing LND file: " + file.getName());
						
						//LND compressed
						int ulen = lndHeader.getInt(8);						
						channel.position(off + lndHeader.capacity());

						ByteBuffer buf = ByteBuffer.allocate(ulen);
						decompressLND(buf, ulen, LittleEndianInputStream.wrap(new BufferedInputStream(fin)));
						buf.rewind();
						
						while (true) {
							int w = oc.write(buf);
							if (!buf.hasRemaining()) {
								break;
							}
							buf.position(buf.position() + w);
						}
						buf.rewind();
					} else {					
						while (len > 0) {
							long transferred = channel.transferTo(off, len, oc);
							off += transferred;
							len -= transferred;
							
							//System.out.println(Long.toHexString(off) + " " + Long.toHexString(channel.size()));
						}
					}
				} finally {
					fout.close();
				}				
			}
		} finally {		
			fin.close();
		}
	}
	
	public static void decompressLND(ByteBuffer out, int uncompressedLength, LittleEndianInputStream din)
			throws IOException
	{
		byte[] temp = new byte[16 << 10];
		
		int start = out.position();
		
		int w = 0;
        while (w < uncompressedLength) {
            int b = din.readUnsignedByte();
            if((b & 0x80) != 0) {
                if((b & 0x40) != 0) {
                	//Copy single byte k times
                    int k = (b & 0x1f) + 2;
                    if((b & 0x20) != 0) {
                        k += din.readUnsignedByte() << 5;
                    }

                    b = din.readUnsignedByte();
                    for (int n = 0; n < k && w < uncompressedLength; n++) {
                    	out.put((byte)b);
                    	w++;
                    }
                } else {
                	//Copy previously decompressed bytes to output
                    int offset = ((b & 0x03) << 8) + din.readUnsignedByte() + 1;
                    int count = ((b >> 2) & 0x0f) + 2;
                    int readIndex = w - offset;
                    
                    //Can't copy multiple bytes at a time, readIndex+count may be greater than the initial write pos
                    for (int n = 0; n < count && w < uncompressedLength; n++) {
                    	out.put(out.get(start+readIndex+n));
                    	w++;
                    }
                }
            } else {
                if((b & 0x40) != 0) {
                	//Copy byte sequence k times
                    int count = (b & 0x3f) + 2;
                    int k = din.readUnsignedByte() + 1;

                    din.readFully(temp, 0, count);
                    for (int n = 0; n < k && w < uncompressedLength; n++) {
                    	for (int x = 0; x < count && w < uncompressedLength; x++) {
                    		out.put(temp[x]);
                    		w++;
                    	}
                    }
                } else {
                	//Copy byte sequence
                    int count = (b & 0x1f) + 1;
                    if((b & 0x20) != 0) {
                        count += din.readUnsignedByte() << 5;
                    }

                    for (int n = 0; n < count && w < uncompressedLength; n++) {
                    	out.put(din.readByte());
                    	w++;
                    }
                }
            }
        }
        out.limit(w);
	}
	
	//Getters
	
	//Setters
	
	//Inner Classes
	private static class Record {
		
		public final long offset;
		public final String filename;
		public long length;
		
		public Record(long offset, String filename) {
			this.offset = offset;
			this.filename = filename;
		}
		
	}
}
