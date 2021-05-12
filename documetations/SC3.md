# About the SC3 file format
The file format of all [script](https://en.wikipedia.org/wiki/Scripting_language) files extracted from `script.dat`.

This is a fairly complicated format. It specifies pretty much the entire content of Ever17, even the behavior of menu screens.

In short, the visual novel engine of Ever17 is essentially a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine), similar to the [Javascript virtual machines](https://en.wikipedia.org/wiki/JavaScript_engine) in every web browsers, but compared to them, this visual novel engine uses very few [opcodes](https://en.wikipedia.org/wiki/Opcode). The engine parses opcodes in script files, then reacts accordingly.

An opcode, with or without arguments, is corresponding to an [instruction](https://en.wikipedia.org/wiki/Instruction_set_architecture). The engine executes instructions.

For example, a script file can has instructions like this (pseudocode as example, not the actual code in the game):

```js
/* 1 */ yield ShowBackground('bg.bmp');
/* 2 */ yield Pause(60);
/* 3 */ yield ShowMessageBox();
/* 4 */ yield AppendText('Hello world! ');
/* 5 */ yield Pause(60);
/* 6 */ yield AppendText('Welcome to the basic of scripting programming!');
/* 7 */ yield WaitForInteraction();
/* 8 */ yield Exit();
```

The engine can parse these instructions and does exactly:
1. Load the background image from `bg.bmp`;
2. Spend 60 video frames doing nothing;
3. Show a typical visual novel text box;
4. Append a text string into the text box;
5. Spend 60 video frames doing nothing;
6. Append another text string into the text box;
7. Wait for an interaction from the reader/player;
8. Exit the game.

Pretty much a kind of [coroutine](https://en.wikipedia.org/wiki/Coroutine).

There are 2 sets of opcodes: the main opcodes, and the textual opcodes.

The textual opcodes together make subroutines that the main opcodes can call into.

This page will document about how opcodes/instructions are stored in this file format, and how this file format is supposed to be read.

Main opcodes and textual opcodes and how they works are documented separately in [SC3.Opcode.md](./SC3.Opcode.md) and [SC3.TextualOpcode.md](./SC3.TextualOpcode.md).

# Sequential Layout
| No. | Name of segment            | Note |
| -   | -                          | - |
| 1   | Header                     | |
| 2   | Main script index table    | The first index is the entry point of a script file |
| 3   | Main script                | A sequence of main opcodes, indexed by No. 2 |
| 4   | Textual script index table | |
| 5   | Background index table     | |
| 6   | Textual script             | A sequence of textual opcodes, indexed by No. 4 |
| 7   | Background names           | A sequence of null-terminated background file names, pointed by No. 5 |


# File format

## Header
The file format begins by a header with this structure:
```c
struct Header {
   char magic[4];
   uint32_t textualScriptOffset;
   uint32_t backgroundOffset;
}
```
- `magic` must be `"SC3\0"`;
- `textualScriptOffset` is the absolute offset that points to the textual opcode index table;
- `backgroundOffset` is the absolute offset that points to the background index table.

(Not done yet)

## Main script index table
No. 2 is the main script index table, this is an array of offset

# Understanding about the idea of this file format
*(I don't know how to do this properly, so I just leave critical points)*

The virtual machine of this game is a stackless machine and the script itself is [non-structured](https://en.wikipedia.org/wiki/Non-structured_programming), it just execute instructions, so don't worry about a complexity level as high as the x86 CPU or whatnot.

I will not discuss about some system scripts that control the menus in the game. They are not necessary to be understood to re-implement this (which is the end goal).

`op00.scr` is the entry script that is executed when you start a new game.

When execution bumps into a cross-script jump instruction, it can switch to another script file and continues to execute at the entry point of that script file.

When you load a save, the game will resume the execution at a position last time you save, with every flags/variables last time it accumulated.

This game has 2 sets of opcode: the main opcodes and the textual opcodes.
- The main opcodes control almost everything except text box displaying;
- The textual opcodes control how text is displayed, play associated voice clip,... (anything related to displaying on text box).

The textual opcodes have to be inside subroutines that are called into by the main opcodes. When subroutine ends, the execution returns to the next main opcode.

The main script segment (No. 3) is really a sequence of main opcodes, while the main script index table (No. 2) serves as a "[label](https://en.wikipedia.org/wiki/Label_(computer_science))" table, each offset of it is a label that points to a specific opcode on the main script.

A few opcodes of main script has the same effect as a "[goto](https://en.wikipedia.org/wiki/Goto)" statment that can jump to other opcodes on the main script. They accept an ordinal number that point to a label, the game can read the label to know where to jump to (relative jump by [jump table](https://en.wikipedia.org/wiki/Branch_table));

This game also uses a background segment (No. 7), it's a sequence of [null-terminated strings](https://en.wikipedia.org/wiki/Null-terminated_string), each string is a background file name pointed by a corresponding index in (No. 5).

Somewhat similar to label, some opcodes access and load background image by accepting an ordinal number that points to a background index that points to a background name. You can say that (No. 7) is a [string pool](https://en.wikipedia.org/wiki/String_interning), it exists because backgrounds are reused a lot in scripts.

(Maybe not done yet)