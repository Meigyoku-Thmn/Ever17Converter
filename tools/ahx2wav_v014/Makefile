# Makefile
ahx2wav.exe: ahx2wav.obj getopt.obj
	bcc32 -e$* $**
ahx2wav.obj: ahx2wav.c
	bcc32 -c $**
getopt.obj: getopt.c
	bcc32 -c $**
