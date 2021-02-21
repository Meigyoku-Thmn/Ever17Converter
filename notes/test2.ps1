set /A l_b0 = 5
set /A l_dayA = 1
set /A l_dayB = 1
$l_dayB = 1
$env:Path = "SomeRandomPath";  
delay 120
removeBG WHITE --transition 2
setSceneTitle 0
setDialogBoxColor GRAY
delay 119

showTextbox
print 'He was in the middle of a blue world.'
clean
hideTextbox

playSFX SE10_26 -a1 1 --volume 100
waitForSFX
playSFX SE09_01L -a1 0 --volume 100
monoColorOverlay --interval 0 WHITE
bgLoadCrop BG41A1 --transition 26 -x 12 -y 12 -hx 775 -hx 581
setKomoreType 0
showKomoreAnim

showTextbox
print "As far as the eye could see, a sheet of water
reached into the distance."
clean
print "The May sun shimmered on its surface."
clean
print @"
Above, high above, stretched a clear blue sky.
"@
clean
print @"
The fresh, new sky looked so glossy and vivid
that it might spill down to earth at any
moment.
"@
clean
print "That was all that was reflected in his eyes."
clean
print "The straight line of the horizon stretched
into the distance, dividing the sea from the
heavens."
clean

showTextbox
Takeshi --sound EOP000 @"
"So tranquil..."
"@
clean
print 'He muttered.'
clean
print 'A solitary seagull traced a gentle arc in the
sky as the wind carried it away.'
clean
print 'The wind, full of the smell of the ocean, blew^
by him gently.'
clean
print 'The din of people could be heard in the^
background.'
clean
print 'The merry sound of children''s voices echoed^
brighter than the sunlight pouring down.'
clean
Takeshi --sound EOP001 @"
"So peaceful..."
"@
print 'It was like being inside a dream.'

# ========================

Coco --sound EOP119 @"
"Makes you wanna hear it, right? Want me to^
tell you?"
"@
clean

choice -1 "Listen to the joke" `
       -2 "Listen to the staffer's explanation"

switch ($choice) {
   1 { goto 00000001 }
   2 { goto 00000002 }
}

label 00000001
showTextbox

Takeshi --sound EOP120 @"
"Yeah, I guess I'll listen to it."
"@
clean
goto 00000003

:00000002
Takeshi --sound EOP138 @"
"Well, I suppose it could be worse, but....I'll
talk to you later."
"@
clean
Coco --sound EOP139 @"
"Huh."
"@
clean
print "Patting the little dog's head, he turned back to
listen to the explanation."

# =====

Kid --sound EOP232 @"
"Aaagh!"$(delay 0)
"@

