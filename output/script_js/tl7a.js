if (l_choice == 1) goto(lbl_00000391);
setDialogBoxColor(GREEN);
showTextbox();
text(() => {
   marker; appendText; 
   `I couldn't see Sora.`;
   waitForClick; clearText; marker; appendText; 
   `I immediately pressed the key with my other 
hand.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Clack!`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(17);
fadeOutMonoColorOverlay();
unSkippableDelay(4);
showTextbox();
text(() => {
   marker; appendText; 
   `Hisss...!!`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A1`, transition: 30, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ow! Oouch! That's hot!"`;
   waitForClick; clearText; marker; appendText; 
   `The smell of burned hair from the hand I had 
used to shield my eye filled the air.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Fuuu....Fuuuu..Fuuuu..."`;
   waitForClick; clearText; marker; appendText; 
   `I blew on my hand, trying futilely to cool it 
down.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You scared the heck outta me..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't do this, Sora!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L303`); appendText; 
   Sora`"No, Takeshi, YOU don't do this..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `GRoooanaaan...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L304`); appendText; 
   Sora`"You've really done it."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_12`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `CCREeeeeaaaaak....`;
   waitForClick; clearText; 
});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   `The floor started shaking.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't stay on my feet with the violent 
shaking.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c6_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 2;
showTextbox();
text(() => {
   marker; appendText; 
   `I wobbled as I moved, but ran swiftly to the 
entrance of HIMMEL.`;
   waitForClick; clearText; marker; appendText; 
   `I tried to close the heavy door with the full 
force of my weight.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn..."`;
   waitForClick; clearText; marker; appendText; 
   `But my hands wouldn't move like I wanted.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 95 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
bgload({ name: `EV_SO10A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Gaagh, *cough* *cough*..."`;
   waitForClick; clearText; marker; appendText; 
   `I suddenly felt terribly dizzy, a burning 
sensation in my chest and collapsed to the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   `My hands slipped.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't stand up.`;
   waitForClick; clearText; marker; appendText; 
   `In this crucial moment...my condition 
couldn't have been worse...`;
   waitForClick; clearText; marker; sound(`T6L305`); appendText; 
   Sora`"T-Takeshi!"`;
   waitForClick; clearText; marker; sound(`T6L306`); appendText; 
   Sora`"Hang on tight!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I...I'm okay!"`;
   waitForClick; clearText; marker; appendText; 
   `But I wasn't.`;
   waitForClick; clearText; marker; appendText; 
   `A terrible fatigue and sluggishness struck me.`;
   waitForClick; clearText; marker; appendText; 
   `A flow of dirty water had swallowing the path 
to HIMMEL and was on the verge of reaching 
the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   `(No! I've got to get the door closed...!)`;
   waitForClick; clearText; marker; appendText; 
   `But my hand couldn't reach the lever.`;
   waitForClick; clearText; marker; appendText; 
   `My sight was fading and body was shaking.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
showTextbox();
text(() => {
   marker; sound(`T6L307`); appendText; 
   Sora`"Takeshi...no..."`;
   waitForClick; clearText; marker; sound(`T6L308`); appendText; 
   Sora`"We...can't...any longer..."`;
   waitForClick; clearText; marker; sound(`T6L309`); appendText; 
   Sora`"We won't...make it..."`;
   waitForClick; clearText; marker; appendText; 
   `The stream of water had become a giant snake, 
raging as it approached.`;
   waitForClick; clearText; 
});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 7;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ha..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Come on! You bastard water! Bring it!"`;
   waitForClick; clearText; marker; appendText; 
   `I screamed back over my shoulder.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
playSFX({ name: `SE09_00L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Trying to cover Sora, I put my back against 
the open door to HIMMEL.`;
   waitForClick; clearText; marker; appendText; 
   `I was determined to block the entrance.`;
   waitForClick; clearText; marker; appendText; 
   `I was going to fight it off.`;
   waitForClick; clearText; marker; appendText; 
   `I wasn't going to run away.`;
   waitForClick; clearText; marker; appendText; 
   `I would...`;
   waitForClick; clearText; marker; appendText; 
   `I would save her...no matter what!!`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 62 });
stopSFX()
dimOff_ac = 1;
closeDimOverlay();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   `Just then.`;
   waitForClick; clearText; marker; appendText; 
   `I heard a terrifying roar behind me.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgload({ name: `EV_SO10B`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `The watertight door had been sealed shut by 
compressed air from the water pressure.`;
   waitForClick; clearText; marker; appendText; 
   `Seawater pounded against the door again and 
again, like a stampeding herd of wild animals.`;
   waitForClick; clearText; marker; appendText; 
   `But the sound was coming from far away.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; sound(`T6L310`); appendText; 
   Sora`"Takeshi"`;
   waitForClick; clearText; marker; sound(`T6L311`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, I can hear you..."`;
   waitForClick; clearText; marker; appendText; 
   `I had a ringing in my ears.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How long will it hold?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T6L312`); appendText; 
   Sora`"I don't know..."`;
   waitForClick; clearText; marker; sound(`T6L313`); appendText; 
   Sora`"The door behind you...is locked...you are 
shut in."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Thanks..."`;
   waitForClick; clearText; marker; sound(`T6L314`); appendText; 
   Sora`"In order to delay the destruction of LeMU, 
I'm releasing all the watertight doors at 
Dritte stock."`;
   waitForClick; clearText; marker; sound(`T6L315`); appendText; 
   Sora`"Dritte stock has been flooded entirely. Its 
structural integrity is failing..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I see. Thanks..."`;
   waitForClick; clearText; marker; appendText; 
   `On the other side of the door was 6 
atmospheres of pressure.`;
   waitForClick; clearText; marker; appendText; 
   `The walls on all four side of the room I was 
in had already surpassed their limits...`;
   waitForClick; clearText; marker; appendText; 
   `But luckily, there was still power somehow.`;
   waitForClick; clearText; marker; appendText; 
   `Emergency power must have kicked in.`;
   waitForClick; clearText; marker; appendText; 
   `The lights went slightly dim.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO10C`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T6L316`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   `Sora bit on her lip.`;
   waitForClick; clearText; marker; sound(`T6L317`); appendText; 
   Sora`"Please don't..."`;
   waitForClick; clearText; marker; sound(`T6L318`); appendText; 
   Sora`"Don't thank me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6L319`); appendText; 
   Sora`"I was only......"`;
   waitForClick; clearText; marker; appendText; 
   `Something gleamed in the dark.`;
   waitForClick; clearText; marker; appendText; 
   `Her silhouette.`;
   waitForClick; clearText; marker; appendText; 
   `Sora was staring at me.`;
   waitForClick; clearText; marker; appendText; 
   `Her tears.`;
   waitForClick; clearText; marker; appendText; 
   `Her tears fell quietly.`;
   waitForClick; clearText; marker; appendText; 
   `They sparkled then disappeared.`;
   waitForClick; clearText; marker; sound(`T6L320`); appendText; 
   Sora`"Listen, I..."`;
   waitForClick; clearText; marker; sound(`T6L321`); appendText; 
   Sora`"What shall I do...tell me."`;
   waitForClick; clearText; marker; appendText; 
   `I reached out to catch the tears.`;
   waitForClick; clearText; marker; appendText; 
   `The grain of the light winked and disappeared 
in an instant.`;
   waitForClick; clearText; marker; appendText; 
   `The light disappeared as it reached my hands.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't worry."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You are doing fine. Don't do anything, Sora."`;
   waitForClick; clearText; marker; appendText; 
   `I wouldn't erase it.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't afford to lose her.`;
   waitForClick; clearText; marker; appendText; 
   `I opened my eyes as wide as I could and tried 
to burn her image into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Listen..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The main thing is that..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You are safe..."`;
   waitForClick; clearText; marker; appendText; 
   `My eyelids were becoming heavier.`;
   waitForClick; clearText; marker; appendText; 
   `Before I could even ask her if she could 
forgive me,`;
   waitForClick; clearText; marker; appendText; 
   `I collapsed, pitching forward onto the 
floor......`;
   waitForClick; clearText; marker; appendText; 
   `And fell into a deep sleep.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
let lbl_00000391;
setSceneTitle({ index: 46 });
setDialogBoxColor(GREEN);
l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
playBGM({ num: 14, volume: 100 });
removeBG({ mode: WHITE, transition: 0 });
openSnowFallingAnim();
showTextbox();
text(() => {
   marker; appendText; 
   `A soft warmness surrounded me.`;
   waitForClick; clearText; marker; appendText; 
   `Light.`;
   waitForClick; clearText; marker; appendText; 
   `I felt that I had overcome an immense distance.`;
   waitForClick; clearText; marker; appendText; 
   `The end of darkness.`;
   waitForClick; clearText; marker; appendText; 
   `A soft, white light surrounded me.`;
   waitForClick; clearText; marker; appendText; 
   `There was nothing else for me to look at.`;
   waitForClick; clearText; marker; appendText; 
   `There was nothing below me.`;
   waitForClick; clearText; marker; appendText; 
   `Nothing there to support me.`;
   waitForClick; clearText; marker; appendText; 
   `But for some reason I was at peace.`;
   waitForClick; clearText; marker; appendText; 
   `I was floating.`;
   waitForClick; clearText; marker; appendText; 
   `Floating steadfast.`;
   waitForClick; clearText; marker; appendText; 
   `I was swaying freely in the center...`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `In the center of gently drifting water.`;
   waitForClick; clearText; marker; appendText; 
   `I could hear something faintly.`;
   waitForClick; clearText; marker; appendText; 
   `The first sound I had heard in my life—`;
   waitForClick; clearText; marker; appendText; 
   `Yes, it was the sound of a heart beating.`;
   waitForClick; clearText; marker; appendText; 
   `I remembered.`;
   waitForClick; clearText; marker; appendText; 
   `I was surrounded by the gentle sound of a 
beating heart.`;
   waitForClick; clearText; marker; appendText; 
   `There was no greater feeling of peace than 
what I felt then.`;
   waitForClick; clearText; marker; appendText; 
   `How long would I be able to stay there?`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know.`;
   waitForClick; clearText; marker; appendText; 
   `I knew that I would have to leave the place 
at some point.`;
   waitForClick; clearText; marker; appendText; 
   `I would have to let go of that fragile bond 
soon.`;
   waitForClick; clearText; marker; appendText; 
   `But I wasn't sad.`;
   waitForClick; clearText; marker; appendText; 
   `If that time must come...`;
   waitForClick; clearText; marker; appendText; 
   `Darkness cleared again and out of it would 
come...`;
   waitForClick; clearText; marker; appendText; 
   `A new world, where I would resolve to be 
reborn.`;
   waitForClick; clearText; marker; appendText; 
   `..............................`;
   waitForClick; clearText; marker; appendText; 
   `...............`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
monoColorOverlay({ interval: 12, color: WHITE });
closeSnowFallingAnim();
stopBGM();
bgloadCrop({ name: `BG31A2`, transition: 26, x: 0, y: 0, hx: 800, hy: 600 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
l_ce = 0;
tweenZoom({ x: 400, y: 0, hx: 800, hy: 600, duration: 120 });
tweenZoom({ x: 240, y: 0, hx: 800, hy: 600, duration: 120 });
bgloadCrop({ name: `BG31A2`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
delay({ interval: 30 });
showTextbox();
text(() => {
   marker; sound(`T7L000`); appendText; 
   Sora`"Good morning!"`;
   waitForClick; clearText; marker; appendText; 
   `I woke with the warmth of the light.`;
   waitForClick; clearText; marker; appendText; 
   `I was sleeping on a cold floor.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora was floating right in front of me.`;
   waitForClick; clearText; marker; appendText; 
   `It was like a dream, yet it was not a dream.`;
   waitForClick; clearText; marker; appendText; 
   `It felt strange.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
chapterCutin({ name: `00000000` });
playBGM({ num: 19, volume: 100 });
monoColorOverlay({ interval: 0, color: BLACK });
bgloadCrop({ name: `BG31A2`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Morning..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"'Good morning' is such a fantastic word, 
isn't it?"`;
   waitForClick; clearText; marker; sound(`T7L001`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It makes me feel like I need to get up and 
get to work."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L002`); appendText; 
   Sora`"Ha, ha.... That's right."`;
   waitForClick; clearText; marker; appendText; 
   `Sora smiled softly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What time is it?"`;
   waitForClick; clearText; marker; sound(`T7L003`); appendText; 
   Sora`"I don't know."`;
   waitForClick; clearText; marker; sound(`T7L004`); appendText; 
   Sora`"It seems that the timer has is broken."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   `I took my PDA from my pocket and pressed the 
button to turn it on.`;
   waitForClick; clearText; marker; appendText; 
   `The battery was dead. Nothing showed on the 
screen.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L005`); appendText; 
   Sora`"It seems that we have lost all way to tell 
the time, haven't we?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah."`;
   waitForClick; clearText; marker; sound(`T7L006`); appendText; 
   Sora`"The connection between myself and the 
terminals at LeMMIH was been severed just a 
little while ago, and all of the sensors in 
LeMU itself are no longer operational..."`;
   waitForClick; clearText; marker; sound(`T7L007`); appendText; 
   Sora`"But according to my previous calculations, 
we can expect this area to hold out another..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop!"`;
   waitForClick; clearText; marker; appendText; 
   `I put my hand in front of Sora's mouth.`;
   waitForClick; clearText; marker; appendText; 
   `And then, slowly let my hand fall.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Time doesn't matter any more."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't need to know. There's no need to 
worry about it anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"............"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L008`); appendText; 
   Sora`"Yes, you are right."`;
   waitForClick; clearText; marker; appendText; 
   `It may have been difficult for someone as 
conscientious as Sora to just 'stop thinking.'`;
   waitForClick; clearText; marker; appendText; 
   `Still, Sora smiled for me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She looked around, and then spoke as if she 
had just remembered something.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L009`); appendText; 
   Sora`"Oh, some good news arrived while you were 
sleeping, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Good news?"`;
   waitForClick; clearText; marker; sound(`T7L010`); appendText; 
   Sora`"I discovered that communications were still 
operational in IBF, so I analysed the weak 
signals going through the outer wall of LeMU."`;
   waitForClick; clearText; marker; sound(`T7L011`); appendText; 
   Sora`"According to my results, everyone on IBF was 
rescued by a salvage vessel and made it 
safely to Insel null."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wow, that's great news!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I realize just how much I was worried about 
them."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I looked up at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   `They were all there.`;
   waitForClick; clearText; marker; appendText; 
   `You, Tsugumi, Coco, the Kid...`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't see them, of course, but I knew 
somehow.`;
   waitForClick; clearText; marker; appendText; 
   `As if she understood what I was thinking, Sora 
looked up at the ceiling, her face smiling 
compassionately.`;
   waitForClick; clearText; marker; appendText; 
   `I looked back.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She looked at me.`;
   waitForClick; clearText; marker; appendText; 
   `Straight into my eyes.`;
   waitForClick; clearText; marker; appendText; 
   `Deep within her pupils was a faint light 
shining.`;
   waitForClick; clearText; marker; sound(`T7L012`); appendText; 
   Sora`"Takeshi...why did you come back 'here'?"`;
   waitForClick; clearText; marker; appendText; 
   `Sora murmured quietly in the darkness. The 
only light to illuminate us was coming from 
the emergency lights.`;
   waitForClick; clearText; marker; appendText; 
   `Her tone was peaceful.`;
   waitForClick; clearText; marker; sound(`T7L013`); appendText; 
   Sora`"Would you tell me the real reason one more 
time?"`;
   waitForClick; clearText; marker; appendText; 
   `A calm smile spread on her lips...`;
   waitForClick; clearText; marker; appendText; 
   `Sora was holding back tears that threatened 
to burst forth at any moment.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Right...I'll tell you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I have..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Someone that I want to protect, even if it 
costs me my life."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She isn't something tangible."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Other people may think I'm stupid."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But, to me, she was the most valuable thing 
in the world."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I may not be able to see her with my eyes 
closed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I may not be able to hear her if I plug my 
ears."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But, that doesn't mean she will disappear."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know that she still exists."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And I realized...just how important she is 
to me."`;
   waitForClick; clearText; marker; sound(`T7L014`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   `She nodded quietly.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Well...now....hmppphh."`;
   waitForClick; clearText; marker; appendText; 
   `Using my hands to support me, I got up.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I forgot. I had some unfinished business."`;
   waitForClick; clearText; marker; appendText; 
   `I went over to the HIMMEL console.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L015`); appendText; 
   Sora`"Unfinished business? What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   `She smiled softly and said.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is LeMMIH still in maintenance mode?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L016`); appendText; 
   Sora`"Yes, but none of the functions related to 
LeMU are operational any longer."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, it doesn't matter."`;
   waitForClick; clearText; marker; appendText; 
   `(Which pocket was it...?)`;
   waitForClick; clearText; marker; appendText; 
   `I finally found what I was looking for and 
dug it out of my pocket.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
bgload({ name: `IT09A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `It was the case holding the polycarbonate 
disk that I had taken from the Control Room 
earlier.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T7L017`); appendText; 
   Sora`"Is that...a terabyte disk?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's right."`;
   waitForClick; clearText; marker; appendText; 
   `I nodded and inserted the terabyte disk into 
the console disk drive.`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A2`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I hit the necessary keys.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `With the little knowledge I had, I needed to 
find the file.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `"LM-RSDS-4913A Sora Akanegasaki"`;
   waitForClick; clearText; marker; appendText; 
   `I chose 'Copy to Disk' from the menu.`;
   waitForClick; clearText; marker; appendText; 
   `There was no guarantee that this would be 
successful, but I was going to try.`;
   waitForClick; clearText; marker; appendText; 
   `I felt I had probably exhausted my allotment 
of luck in life, but it was worth a shot.`;
   waitForClick; clearText; marker; appendText; 
   `If something malfunctioned, or there wasn't 
enough space on the disk, we were finished...`;
   waitForClick; clearText; marker; appendText; 
   `I thought it was probably the last gamble in 
my lifetime.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Keep it simple."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I hit the 'Enter' key and the data began 
copying.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, remember to shout 'Keep it simple.' 
when you hit a button."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L018`); appendText; 
   Sora`"Yes, professor."`;
   waitForClick; clearText; marker; appendText; 
   `Sora smiled shyly.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `We stared at the console monitor.`;
   waitForClick; clearText; marker; appendText; 
   `The copy slowly progressed.`;
   waitForClick; clearText; marker; appendText; 
   `All of her memories were being burned on to 
the disk.`;
   waitForClick; clearText; marker; sound(`T7L019`); appendText; 
   Sora`"Professor...about my homework."`;
   waitForClick; clearText; marker; appendText; 
   `Sora murmured as she looked at the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Homework?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Did I give you homework?"`;
   waitForClick; clearText; marker; sound(`T7L020`); appendText; 
   Sora`"No, we students did it voluntarily. Would you 
please listen?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yes, of course. Fire away."`;
   waitForClick; clearText; marker; sound(`T7L021`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; marker; sound(`T7L022`); appendText; 
   Sora`"I realized..."`;
   waitForClick; clearText; marker; sound(`T7L023`); appendText; 
   Sora`"The reason why I was born."`;
   waitForClick; clearText; marker; sound(`T7L024`); appendText; 
   Sora`"I was meant to be just like any other 
human..."`;
   waitForClick; clearText; marker; sound(`T7L025`); appendText; 
   Sora`"I was born to fall in love."`;
   waitForClick; clearText; marker; sound(`T7L026`); appendText; 
   Sora`"That is why I am truly happy now."`;
   waitForClick; clearText; marker; sound(`T7L027`); appendText; 
   Sora`"Because I know what love is now."`;
   waitForClick; clearText; marker; sound(`T7L028`); appendText; 
   Sora`"And love is..."`;
   waitForClick; clearText; marker; sound(`T7L029`); appendText; 
   Sora`"It doesn't matter if your method is 
primitive."`;
   waitForClick; clearText; marker; sound(`T7L030`); appendText; 
   Sora`"It isn't necessary seek a meaning for it or 
an objective."`;
   waitForClick; clearText; marker; sound(`T7L031`); appendText; 
   Sora`"The only thing you need to do is to love - 
just that and nothing else."`;
   waitForClick; clearText; marker; sound(`T7L032`); appendText; 
   Sora`"That is what I realized."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really..."`;
   waitForClick; clearText; marker; appendText; 
   `Sora brought her face close to mine.`;
   waitForClick; clearText; marker; appendText; 
   `And she brought her lips near my cheek.`;
   waitForClick; clearText; marker; sound(`T7L033`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T7L034`); appendText; 
   Sora`"I love you..."`;
   waitForClick; clearText; marker; sound(`T7L035`); appendText; 
   Sora`"I am so grateful to be in love with you..."`;
   waitForClick; clearText; marker; appendText; 
   `I touch my cheek where she kissed.`;
   waitForClick; clearText; marker; appendText; 
   `I felt a gentle warmth there.`;
   waitForClick; clearText; marker; appendText; 
   `Was it the afterglow of her lips?`;
   waitForClick; clearText; marker; appendText; 
   `Or was my cheek simply blushing?`;
   waitForClick; clearText; marker; sound(`T7L036`); appendText; 
   Sora`"There have been times when I've disliked you."`;
   waitForClick; clearText; marker; sound(`T7L037`); appendText; 
   Sora`"I've even hated you, too."`;
   waitForClick; clearText; marker; sound(`T7L038`); appendText; 
   Sora`"But, even with all of that..."`;
   waitForClick; clearText; marker; sound(`T7L039`); appendText; 
   Sora`"I love every bit of you!"`;
   waitForClick; clearText; marker; sound(`T7L040`); appendText; 
   Sora`"Whatever I'm going through, all it takes is 
to think of you and I am so happy."`;
   waitForClick; clearText; marker; appendText; 
   `She was strong.`;
   waitForClick; clearText; marker; appendText; 
   `Her mind and heart had grown so much stronger 
in the past few days, match the maturity of 
her age or, more likely, transcending it.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   `The disk continued to copy.`;
   waitForClick; clearText; marker; appendText; 
   `Her memory being etched on to its surface.`;
   waitForClick; clearText; marker; appendText; 
   `It was being etched into me, too.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you want to do when you get out of 
here?"`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L041`); appendText; 
   Sora`"What?"`;
   waitForClick; clearText; marker; appendText; 
   `It was an empty wish.`;
   waitForClick; clearText; marker; appendText; 
   `We knew it was impossible.`;
   waitForClick; clearText; marker; appendText; 
   `But it didn't feel strange to me to be 
talking about it with Sora.`;
   waitForClick; clearText; marker; appendText; 
   `Sora, who really existed right in front of me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L042`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; marker; sound(`T7L043`); appendText; 
   Sora`"If I could get out of here..."`;
   waitForClick; clearText; marker; sound(`T7L044`); appendText; 
   Sora`"Well..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L045`); appendText; 
   Sora`"I would like to travel the world."`;
   waitForClick; clearText; marker; appendText; 
   `She winked and smiled.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L046`); appendText; 
   Sora`"And, if I could, I'd like to go on a date 
with you."`;
   waitForClick; clearText; marker; sound(`T7L047`); appendText; 
   Sora`"I would go out with you for about two or 
three years, then get married at the age of 
26 or 27."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L048`); appendText; 
   Sora`"That's what young ladies hope for, isn't it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L049`); appendText; 
   Sora`"...Isn't that right?"`;
   waitForClick; clearText; marker; appendText; 
   `Sora became a little blurry.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah...that's right..."`;
   waitForClick; clearText; marker; appendText; 
   `My eyes misted over.`;
   waitForClick; clearText; marker; appendText; 
   `I was having difficulty seeing clearly.`;
   waitForClick; clearText; marker; appendText; 
   `Was it an RSD malfunction?`;
   waitForClick; clearText; marker; appendText; 
   `Or perhaps I was short of oxygen?`;
   waitForClick; clearText; marker; appendText; 
   `No...that wasn't it.`;
   waitForClick; clearText; marker; appendText; 
   `No.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `I...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
playBGM({ num: 21, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Do you know the legend of Pygmalion?"`;
   waitForClick; clearText; marker; appendText; 
   `I was crying. The tears were falling down my 
face.`;
   waitForClick; clearText; marker; appendText; 
   `Sora's figure wavered.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"He was the master sculptor in Greek myths... 
He's been called the King of Cyprus..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"One day he created a beautiful sculpture of 
the woman of his dreams."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And, because it was so beautiful, he fell in 
love with the statue."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"He kept on thinking to himself 'If only it 
were a real woman.'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Aphrodite, the goddess of love, took pity on 
him and brought this sculpture to life."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"They married and even had children."`;
   waitForClick; clearText; marker; sound(`T7L050`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't think I'll ever be the King of 
Cyprus..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But...I love you...more than anyone."`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I reached out for her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I brought her face to mine and kissed her on 
the lips.`;
   waitForClick; clearText; marker; appendText; 
   `I ran my fingers through her hair.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Her hair fell through my fingers as if it 
were a stream of silk.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I could even sense a sweet smell.`;
   waitForClick; clearText; marker; appendText; 
   `Even though I couldn't touch her...it was real.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
removeFG({ id: 1, useAnim: true });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `IT09A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   `The console spit the terabyte disk out.`;
   waitForClick; clearText; marker; appendText; 
   `Copy complete.`;
   waitForClick; clearText; marker; appendText; 
   `There was no guarantee that the procedure had 
been a success...`;
   waitForClick; clearText; marker; appendText; 
   `All of the data about Sora in front of me...`;
   waitForClick; clearText; marker; appendText; 
   `All of the images Sora had seen, the sounds 
she had heard, things she had felt and 
thought...`;
   waitForClick; clearText; marker; appendText; 
   `Every strand of her memory was written on 
that disk.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showDimOverlay();
bgloadCrop({ name: `BG31A2`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `...Memory.`;
   waitForClick; clearText; marker; appendText; 
   `What was memory?`;
   waitForClick; clearText; marker; appendText; 
   `I wondered.`;
   waitForClick; clearText; marker; appendText; 
   `What if I input the contents of this terabyte 
disk onto the Sora at Insel null...?`;
   waitForClick; clearText; marker; appendText; 
   `Would that make her just like the Sora I knew?`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L051`); appendText; 
   Sora`"Takeshi"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, what can I do for ya?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L052`); appendText; 
   Sora`"Ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   `Every time I played the fool, it never failed 
to make her laugh.`;
   waitForClick; clearText; marker; appendText; 
   `We were holding back tears, which threatened 
to spill down our faces.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L053`); appendText; 
   Sora`"I suppose that what we just talked about 
while the disk was copying won't be on that 
disk."`;
   waitForClick; clearText; marker; sound(`T7L054`); appendText; 
   Sora`"It's kind of too bad."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nah, the memory's right here."`;
   waitForClick; clearText; marker; appendText; 
   `I pointed to my head.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I will remember..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And the next time that we meet, I'll tell 
you about it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7L055`); appendText; 
   Sora`"Really? Okay let's promise, then."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, it's a promise."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   `We crossed our hearts.`;
   waitForClick; clearText; marker; appendText; 
   `Promise.`;
   waitForClick; clearText; marker; appendText; 
   `When would that promise be fulfilled?`;
   waitForClick; clearText; marker; appendText; 
   `...I didn't know.`;
   waitForClick; clearText; marker; appendText; 
   `But, I didn't have to know.`;
   waitForClick; clearText; marker; appendText; 
   `The mind is not as simple as black or white.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 1;
closeDimOverlay();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE07_12`, a1: 0, volume: 90 });
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   `Soon HIMMEL began to shake.`;
   waitForClick; clearText; marker; appendText; 
   `Large cracks ran down the walls.`;
   waitForClick; clearText; marker; appendText; 
   `Through the holes, a large amount of mist 
spurted into the room.`;
   waitForClick; clearText; marker; appendText; 
   `Heaven, heaven had finally cracked open...`;
   waitForClick; clearText; marker; appendText; 
   `The mist quickly became raging streams and 
soon water was filling the room.`;
   waitForClick; clearText; marker; appendText; 
   `I squeezed the terabyte disk into my pocket 
and stood in front of Sora.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO13A`, transition: 0 });
showTextbox();
text(() => {
   marker; appendText; 
   `The water had gone higher than my ankles, 
past my knees and it was almost reaching my 
waist.`;
   waitForClick; clearText; marker; appendText; 
   `But for some reason, I didn't feel any fear.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's a promise..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's going to be okay, Sora."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I won't die."`;
   waitForClick; clearText; marker; appendText; 
   `It was just like the time we stood facing 
each other through the glass window.`;
   waitForClick; clearText; marker; appendText; 
   `Sora and I put our hands together.`;
   waitForClick; clearText; marker; appendText; 
   `If miracles truly do exist...`;
   waitForClick; clearText; marker; appendText; 
   `Then that was surely a miracle.`;
   waitForClick; clearText; marker; appendText; 
   `I could sense everything about Sora.`;
   waitForClick; clearText; marker; sound(`T7L056`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T7L057`); appendText; 
   Sora`"Thank you!"`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't help it and embraced Sora.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `EV_SO13B`, transition: 0 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   `The warmth of her hands.`;
   waitForClick; clearText; marker; appendText; 
   `The softness of her skin.`;
   waitForClick; clearText; marker; appendText; 
   `Her smell.`;
   waitForClick; clearText; marker; appendText; 
   `Her breath.`;
   waitForClick; clearText; marker; appendText; 
   `Her heartbeat.`;
   waitForClick; clearText; marker; appendText; 
   `Her memory.`;
   waitForClick; clearText; marker; appendText; 
   `Her existence.`;
   waitForClick; clearText; marker; appendText; 
   `I swore I wouldn't forget.`;
   waitForClick; clearText; marker; appendText; 
   `I swore I would never...`;
   waitForClick; clearText; marker; appendText; 
   `In all eternity...forget.... `;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 0 });
showTextbox();
text(() => {
   marker; appendText; 
   `All around us was a world of deep, deep blue.`;
   waitForClick; clearText; marker; appendText; 
   `We embraced in the cold seawater and became 
one.`;
   waitForClick; clearText; marker; appendText; 
   `My body began to float gently to the place 
where the heavens and the ocean fused into one.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
removeBG({ mode: BLACK, transition: 0 });
stopBGM();
delay({ interval: 150 });
g_sora_gd_cleared = 1;
g__sora_gd_cleared = 1;
l_ending = `sora_gd`;
l_choice = 0;
jump(`Y_ED`);
