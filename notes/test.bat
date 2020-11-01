set /A l_b0 = 5
set /A l_dayA = 1
set /A l_dayB = 1
delay 120
removeBG WHITE --transition 2
setSceneTitle 0
setDialogBoxColor GRAY
delay 119

showTextbox
echo He was in the middle of a blue world.
cls
hideTextbox

playSFX SE10_26 -a1 1 --volume 100
waitForSFX
playSFX SE09_01L -a1 0 --volume 100
monoColorOverlay --interval 0 WHITE
bgLoadCrop BG41A1 --transition 26 -x 12 -y 12 -hx 775 -hx 581
setKomoreType 0
showKomoreAnim

showTextbox
echo As far as the eye could see, a sheet of water^
reached into the distance.
cls
echo The May sun shimmered on its surface.
cls
echo Above, high above, stretched a clear blue sky.
cls
echo The fresh, new sky looked so glossy and vivid^
that it might spill down to earth at any^
moment.
cls
echo That was all that was reflected in his eyes.
cls
echo The straight line of the horizon stretched^
into the distance, dividing the sea from the^
heavens.
cls

showTextbox
echo --sound EOP000 [Takeshi]^
"So tranquil..."
cls
echo He muttered.
cls
echo A solitary seagull traced a gentle arc in the^
sky as the wind carried it away.
cls
echo The wind, full of the smell of the ocean, blew^
by him gently.
cls
echo The din of people could be heard in the^
background.
cls
echo The merry sound of children's voices echoed^
brighter than the sunlight pouring down.
cls
echo --sound EOP001 [Takeshi]^
"So peaceful..."
echo It was like being inside a dream.

REM ========================

echo --sound EOP119 [Coco]^
"Makes you wanna hear it, right? Want me to^
tell you?"
cls

choice -1 Listen to the joke^
       -2 Listen to the staffer's explanation
switch -1 goto 00000001^
       -2 goto 00000002

:00000001
showTextbox
echo --sound EOP120 [Takeshi]^
"Yeah, I guess I'll listen to it."
cls
goto 00000003

:00000002
echo --sound EOP138 [Takeshi]^
"Well, I suppose it could be worse, but....I'll^
talk to you later."
cls
echo --sound EOP139 [Coco]^
"Huh."
cls
echo Patting the little dog's head, he turned back to^
listen to the explanation.

REM =====

echo --sound EOP232 [Kid]^
"Aaagh!"{delay 0}