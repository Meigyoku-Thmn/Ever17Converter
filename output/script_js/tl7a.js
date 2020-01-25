if (l_choice == 1) goto(lbl_00000391);
setDialogBoxColor(GREEN);
showTextbox();
text(() => {
   `I couldn't see Sora.`;
   `I immediately pressed the key with my other hand.`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clack!`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(17);
fadeOutMonoColorOverlay();
unSkippableDelay(4);
showTextbox();
text(() => {
   `Hisss...!!`;

});
bgloadCrop({ name: `BG31A1`, transition: 30, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   Takeshi`"Ow! Oouch! That's hot!"`;
   `The smell of burned hair from the hand I had used to shield my eye filled the air.`;
   Takeshi`"Fuuu....Fuuuu..Fuuuu..."`;
   `I blew on my hand, trying futilely to cool it down.`;
   Takeshi`"You scared the heck outta me..."`;
   Takeshi`"Don't do this, Sora!"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L303)`"No, Takeshi, YOU don't do this..."`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `GRoooanaaan...`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L304)`"You've really done it."`;

});
playSFX({ name: `SE07_12`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `CCREeeeeaaaaak....`;

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
   `The floor started shaking.`;
   `I couldn't stay on my feet with the violent shaking.`;

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
   `I wobbled as I moved, but ran swiftly to the entrance of HIMMEL.`;
   `I tried to close the heavy door with the full force of my weight.`;
   Takeshi`"Damn..."`;
   `But my hands wouldn't move like I wanted.`;

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
   Takeshi`"Gaagh, *cough* *cough*..."`;
   `I suddenly felt terribly dizzy, a burning sensation in my chest and collapsed to the floor.`;
   `My hands slipped.`;
   `I couldn't stand up.`;
   `In this crucial moment...my condition couldn't have been worse...`;
   Sora(T6L305)`"T-Takeshi!"`;
   Sora(T6L306)`"Hang on tight!"`;
   Takeshi`"I...I'm okay!"`;
   `But I wasn't.`;
   `A terrible fatigue and sluggishness struck me.`;
   `A flow of dirty water had swallowing the path to HIMMEL and was on the verge of reaching the ceiling.`;
   `(No! I've got to get the door closed...!)`;
   `But my hand couldn't reach the lever.`;
   `My sight was fading and body was shaking.`;

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
   Sora(T6L307)`"Takeshi...no..."`;
   Sora(T6L308)`"We...can't...any longer..."`;
   Sora(T6L309)`"We won't...make it..."`;
   `The stream of water had become a giant snake, raging as it approached.`;

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
   Takeshi`"Ha..."`;
   Takeshi`"Come on! You bastard water! Bring it!"`;
   `I screamed back over my shoulder.`;

});
hideTextbox();
stopSFX()
playSFX({ name: `SE09_00L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Trying to cover Sora, I put my back against the open door to HIMMEL.`;
   `I was determined to block the entrance.`;
   `I was going to fight it off.`;
   `I wasn't going to run away.`;
   `I would...`;
   `I would save her...no matter what!!`;

});
removeBG({ mode: BLACK, transition: 62 });
stopSFX()
dimOff_ac = 1;
closeDimOverlay();
closeShakeScreenAnim();
showTextbox();
text(() => {
   `Just then.`;
   `I heard a terrifying roar behind me.`;

});
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgload({ name: `EV_SO10B`, transition: 10 });
showTextbox();
text(() => {
   Sora`"........."`;
   Takeshi`"........."`;
   `The watertight door had been sealed shut by compressed air from the water pressure.`;
   `Seawater pounded against the door again and again, like a stampeding herd of wild animals.`;
   `But the sound was coming from far away.`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   Sora(T6L310)`"Takeshi"`;
   Sora(T6L311)`"Takeshi..."`;
   Takeshi`"Okay, I can hear you..."`;
   `I had a ringing in my ears.`;
   Takeshi`"How long will it hold?"`;
   Sora`"........."`;
   Sora(T6L312)`"I don't know..."`;
   Sora(T6L313)`"The door behind you...is locked...you are shut in."`;
   Takeshi`"Thanks..."`;
   Sora(T6L314)`"In order to delay the destruction of LeMU, I'm releasing all the watertight doors at Dritte stock."`;
   Sora(T6L315)`"Dritte stock has been flooded entirely. Its structural integrity is failing..."`;
   Takeshi`"I see. Thanks..."`;
   `On the other side of the door was 6 atmospheres of pressure.`;
   `The walls on all four side of the room I was in had already surpassed their limits...`;
   `But luckily, there was still power somehow.`;
   `Emergency power must have kicked in.`;
   `The lights went slightly dim.`;

});
bgload({ name: `EV_SO10C`, transition: 10 });
showTextbox();
text(() => {
   Sora(T6L316)`"Takeshi..."`;
   `Sora bit on her lip.`;
   Sora(T6L317)`"Please don't..."`;
   Sora(T6L318)`"Don't thank me."`;
   Takeshi`"........."`;
   Sora(T6L319)`"I was only......"`;
   `Something gleamed in the dark.`;
   `Her silhouette.`;
   `Sora was staring at me.`;
   `Her tears.`;
   `Her tears fell quietly.`;
   `They sparkled then disappeared.`;
   Sora(T6L320)`"Listen, I..."`;
   Sora(T6L321)`"What shall I do...tell me."`;
   `I reached out to catch the tears.`;
   `The grain of the light winked and disappeared in an instant.`;
   `The light disappeared as it reached my hands.`;
   Takeshi`"Don't worry."`;
   Takeshi`"You are doing fine. Don't do anything, Sora."`;
   `I wouldn't erase it.`;
   `I couldn't afford to lose her.`;
   `I opened my eyes as wide as I could and tried to burn her image into my mind.`;
   Takeshi`"Listen..."`;
   Takeshi`"The main thing is that..."`;
   Takeshi`"You are safe..."`;
   `My eyelids were becoming heavier.`;
   `Before I could even ask her if she could forgive me,`;
   `I collapsed, pitching forward onto the floor......`;
   `And fell into a deep sleep.`;

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
   `A soft warmness surrounded me.`;
   `Light.`;
   `I felt that I had overcome an immense distance.`;
   `The end of darkness.`;
   `A soft, white light surrounded me.`;
   `There was nothing else for me to look at.`;
   `There was nothing below me.`;
   `Nothing there to support me.`;
   `But for some reason I was at peace.`;
   `I was floating.`;
   `Floating steadfast.`;
   `I was swaying freely in the center...`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `In the center of gently drifting water.`;
   `I could hear something faintly.`;
   `The first sound I had heard in my life—`;
   `Yes, it was the sound of a heart beating.`;
   `I remembered.`;
   `I was surrounded by the gentle sound of a beating heart.`;
   `There was no greater feeling of peace than what I felt then.`;
   `How long would I be able to stay there?`;
   `I didn't know.`;
   `I knew that I would have to leave the place at some point.`;
   `I would have to let go of that fragile bond soon.`;
   `But I wasn't sad.`;
   `If that time must come...`;
   `Darkness cleared again and out of it would come...`;
   `A new world, where I would resolve to be reborn.`;
   `..............................`;
   `...............`;

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
   Sora(T7L000)`"Good morning!"`;
   `I woke with the warmth of the light.`;
   `I was sleeping on a cold floor.`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora was floating right in front of me.`;
   `It was like a dream, yet it was not a dream.`;
   `It felt strange.`;

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
   Takeshi`"Morning..."`;
   Takeshi`"'Good morning' is such a fantastic word, isn't it?"`;
   Sora(T7L001)`"Yes..."`;
   Takeshi`"It makes me feel like I need to get up and get to work."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L002)`"Ha, ha.... That's right."`;
   `Sora smiled softly.`;
   Takeshi`"What time is it?"`;
   Sora(T7L003)`"I don't know."`;
   Sora(T7L004)`"It seems that the timer has is broken."`;
   Takeshi`"Oh..."`;
   `I took my PDA from my pocket and pressed the button to turn it on.`;
   `The battery was dead. Nothing showed on the screen.`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L005)`"It seems that we have lost all way to tell the time, haven't we?"`;
   Takeshi`"Yeah."`;
   Sora(T7L006)`"The connection between myself and the terminals at LeMMIH was been severed just a little while ago, and all of the sensors in LeMU itself are no longer operational..."`;
   Sora(T7L007)`"But according to my previous calculations, we can expect this area to hold out another..."`;
   Takeshi`"Stop!"`;
   `I put my hand in front of Sora's mouth.`;
   `And then, slowly let my hand fall.`;
   Takeshi`"Time doesn't matter any more."`;
   Takeshi`"I don't need to know. There's no need to worry about it anymore..."`;
   Sora`"............"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L008)`"Yes, you are right."`;
   `It may have been difficult for someone as conscientious as Sora to just 'stop thinking.'`;
   `Still, Sora smiled for me.`;

});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She looked around, and then spoke as if she had just remembered something.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L009)`"Oh, some good news arrived while you were sleeping, Takeshi."`;
   Takeshi`"Good news?"`;
   Sora(T7L010)`"I discovered that communications were still operational in IBF, so I analysed the weak signals going through the outer wall of LeMU."`;
   Sora(T7L011)`"According to my results, everyone on IBF was rescued by a salvage vessel and made it safely to Insel null."`;
   Takeshi`"Wow, that's great news!"`;
   Takeshi`"I realize just how much I was worried about them."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked up at the ceiling.`;
   `They were all there.`;
   `You, Tsugumi, Coco, the Kid...`;
   `I couldn't see them, of course, but I knew somehow.`;
   `As if she understood what I was thinking, Sora looked up at the ceiling, her face smiling compassionately.`;
   `I looked back.`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She looked at me.`;
   `Straight into my eyes.`;
   `Deep within her pupils was a faint light shining.`;
   Sora(T7L012)`"Takeshi...why did you come back 'here'?"`;
   `Sora murmured quietly in the darkness. The only light to illuminate us was coming from the emergency lights.`;
   `Her tone was peaceful.`;
   Sora(T7L013)`"Would you tell me the real reason one more time?"`;
   `A calm smile spread on her lips...`;
   `Sora was holding back tears that threatened to burst forth at any moment.`;
   Takeshi`"Right...I'll tell you."`;
   Takeshi`"I have..."`;
   Takeshi`"Someone that I want to protect, even if it costs me my life."`;
   Takeshi`"She isn't something tangible."`;
   Takeshi`"Other people may think I'm stupid."`;
   Takeshi`"But, to me, she was the most valuable thing in the world."`;
   Takeshi`"I may not be able to see her with my eyes closed."`;
   Takeshi`"I may not be able to hear her if I plug my ears."`;
   Takeshi`"But, that doesn't mean she will disappear."`;
   Takeshi`"I know that she still exists."`;
   Takeshi`"And I realized...just how important she is to me."`;
   Sora(T7L014)`"Yes..."`;
   `She nodded quietly.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Well...now....hmppphh."`;
   `Using my hands to support me, I got up.`;
   Takeshi`"I forgot. I had some unfinished business."`;
   `I went over to the HIMMEL console.`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L015)`"Unfinished business? What do you mean?"`;
   `She smiled softly and said.`;
   Takeshi`"Is LeMMIH still in maintenance mode?"`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L016)`"Yes, but none of the functions related to LeMU are operational any longer."`;
   Takeshi`"Well, it doesn't matter."`;
   `(Which pocket was it...?)`;
   `I finally found what I was looking for and dug it out of my pocket.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
bgload({ name: `IT09A`, transition: 20 });
showTextbox();
text(() => {
   `It was the case holding the polycarbonate disk that I had taken from the Control Room earlier.`;

});
showTextbox();
text(() => {
   Sora(T7L017)`"Is that...a terabyte disk?"`;
   Takeshi`"That's right."`;
   `I nodded and inserted the terabyte disk into the console disk drive.`;

});
bgloadCrop({ name: `BG31A2`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I hit the necessary keys.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `With the little knowledge I had, I needed to find the file.`;

});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `"LM-RSDS-4913A Sora Akanegasaki"`;
   `I chose 'Copy to Disk' from the menu.`;
   `There was no guarantee that this would be successful, but I was going to try.`;
   `I felt I had probably exhausted my allotment of luck in life, but it was worth a shot.`;
   `If something malfunctioned, or there wasn't enough space on the disk, we were finished...`;
   `I thought it was probably the last gamble in my lifetime.`;
   Takeshi`"Keep it simple."`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I hit the 'Enter' key and the data began copying.`;
   Takeshi`"Sora, remember to shout 'Keep it simple.' when you hit a button."`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L018)`"Yes, professor."`;
   `Sora smiled shyly.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We stared at the console monitor.`;
   `The copy slowly progressed.`;
   `All of her memories were being burned on to the disk.`;
   Sora(T7L019)`"Professor...about my homework."`;
   `Sora murmured as she looked at the monitor.`;
   Takeshi`"Homework?"`;
   Takeshi`"Did I give you homework?"`;
   Sora(T7L020)`"No, we students did it voluntarily. Would you please listen?"`;
   Takeshi`"Yes, of course. Fire away."`;
   Sora(T7L021)`"I..."`;
   Sora(T7L022)`"I realized..."`;
   Sora(T7L023)`"The reason why I was born."`;
   Sora(T7L024)`"I was meant to be just like any other human..."`;
   Sora(T7L025)`"I was born to fall in love."`;
   Sora(T7L026)`"That is why I am truly happy now."`;
   Sora(T7L027)`"Because I know what love is now."`;
   Sora(T7L028)`"And love is..."`;
   Sora(T7L029)`"It doesn't matter if your method is primitive."`;
   Sora(T7L030)`"It isn't necessary seek a meaning for it or an objective."`;
   Sora(T7L031)`"The only thing you need to do is to love - just that and nothing else."`;
   Sora(T7L032)`"That is what I realized."`;
   Takeshi`"Really..."`;
   `Sora brought her face close to mine.`;
   `And she brought her lips near my cheek.`;
   Sora(T7L033)`"Takeshi..."`;
   Sora(T7L034)`"I love you..."`;
   Sora(T7L035)`"I am so grateful to be in love with you..."`;
   `I touch my cheek where she kissed.`;
   `I felt a gentle warmth there.`;
   `Was it the afterglow of her lips?`;
   `Or was my cheek simply blushing?`;
   Sora(T7L036)`"There have been times when I've disliked you."`;
   Sora(T7L037)`"I've even hated you, too."`;
   Sora(T7L038)`"But, even with all of that..."`;
   Sora(T7L039)`"I love every bit of you!"`;
   Sora(T7L040)`"Whatever I'm going through, all it takes is to think of you and I am so happy."`;
   `She was strong.`;
   `Her mind and heart had grown so much stronger in the past few days, match the maturity of her age or, more likely, transcending it.`;
   Takeshi`"Sora..."`;
   `The disk continued to copy.`;
   `Her memory being etched on to its surface.`;
   `It was being etched into me, too.`;
   Takeshi`"What do you want to do when you get out of here?"`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L041)`"What?"`;
   `It was an empty wish.`;
   `We knew it was impossible.`;
   `But it didn't feel strange to me to be talking about it with Sora.`;
   `Sora, who really existed right in front of me.`;

});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L042)`"I..."`;
   Sora(T7L043)`"If I could get out of here..."`;
   Sora(T7L044)`"Well..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L045)`"I would like to travel the world."`;
   `She winked and smiled.`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L046)`"And, if I could, I'd like to go on a date with you."`;
   Sora(T7L047)`"I would go out with you for about two or three years, then get married at the age of 26 or 27."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L048)`"That's what young ladies hope for, isn't it?"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L049)`"...Isn't that right?"`;
   `Sora became a little blurry.`;
   Takeshi`"Yeah...that's right..."`;
   `My eyes misted over.`;
   `I was having difficulty seeing clearly.`;
   `Was it an RSD malfunction?`;
   `Or perhaps I was short of oxygen?`;
   `No...that wasn't it.`;
   `No.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `I...`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Sora..."`;

});
hideTextbox();
showDimOverlay();
playBGM({ num: 21, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Do you know the legend of Pygmalion?"`;
   `I was crying. The tears were falling down my face.`;
   `Sora's figure wavered.`;
   Takeshi`"He was the master sculptor in Greek myths... He's been called the King of Cyprus..."`;
   Takeshi`"One day he created a beautiful sculpture of the woman of his dreams."`;
   Takeshi`"And, because it was so beautiful, he fell in love with the statue."`;
   Takeshi`"He kept on thinking to himself 'If only it were a real woman.'"`;
   Takeshi`"Aphrodite, the goddess of love, took pity on him and brought this sculpture to life."`;
   Takeshi`"They married and even had children."`;
   Sora(T7L050)`"Yes..."`;
   Takeshi`"I don't think I'll ever be the King of Cyprus..."`;
   Takeshi`"But...I love you...more than anyone."`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I reached out for her.`;

});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I brought her face to mine and kissed her on the lips.`;
   `I ran my fingers through her hair.`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Her hair fell through my fingers as if it were a stream of silk.`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I could even sense a sweet smell.`;
   `Even though I couldn't touch her...it was real.`;

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
   `The console spit the terabyte disk out.`;
   `Copy complete.`;
   `There was no guarantee that the procedure had been a success...`;
   `All of the data about Sora in front of me...`;
   `All of the images Sora had seen, the sounds she had heard, things she had felt and thought...`;
   `Every strand of her memory was written on that disk.`;

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
   `...Memory.`;
   `What was memory?`;
   `I wondered.`;
   `What if I input the contents of this terabyte disk onto the Sora at Insel null...?`;
   `Would that make her just like the Sora I knew?`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L051)`"Takeshi"`;
   Takeshi`"Hey, what can I do for ya?"`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L052)`"Ha, ha, ha..."`;
   `Every time I played the fool, it never failed to make her laugh.`;
   `We were holding back tears, which threatened to spill down our faces.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L053)`"I suppose that what we just talked about while the disk was copying won't be on that disk."`;
   Sora(T7L054)`"It's kind of too bad."`;
   Takeshi`"Nah, the memory's right here."`;
   `I pointed to my head.`;
   Takeshi`"I will remember..."`;
   Takeshi`"And the next time that we meet, I'll tell you about it."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T7L055)`"Really? Okay let's promise, then."`;
   Takeshi`"Alright, it's a promise."`;

});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
showTextbox();
text(() => {
   `We crossed our hearts.`;
   `Promise.`;
   `When would that promise be fulfilled?`;
   `...I didn't know.`;
   `But, I didn't have to know.`;
   `The mind is not as simple as black or white.`;

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
   `Soon HIMMEL began to shake.`;
   `Large cracks ran down the walls.`;
   `Through the holes, a large amount of mist spurted into the room.`;
   `Heaven, heaven had finally cracked open...`;
   `The mist quickly became raging streams and soon water was filling the room.`;
   `I squeezed the terabyte disk into my pocket and stood in front of Sora.`;

});
bgload({ name: `EV_SO13A`, transition: 0 });
showTextbox();
text(() => {
   `The water had gone higher than my ankles, past my knees and it was almost reaching my waist.`;
   `But for some reason, I didn't feel any fear.`;
   Takeshi`"It's a promise..."`;
   Takeshi`"It's going to be okay, Sora."`;
   Takeshi`"I won't die."`;
   `It was just like the time we stood facing each other through the glass window.`;
   `Sora and I put our hands together.`;
   `If miracles truly do exist...`;
   `Then that was surely a miracle.`;
   `I could sense everything about Sora.`;
   Sora(T7L056)`"Takeshi..."`;
   Sora(T7L057)`"Thank you!"`;
   `I couldn't help it and embraced Sora.`;

});
hideTextbox();
bgload({ name: `EV_SO13B`, transition: 0 });
stopSFX()
showTextbox();
text(() => {
   `The warmth of her hands.`;
   `The softness of her skin.`;
   `Her smell.`;
   `Her breath.`;
   `Her heartbeat.`;
   `Her memory.`;
   `Her existence.`;
   `I swore I wouldn't forget.`;
   `I swore I would never...`;
   `In all eternity...forget.... `;

});
bgload({ name: `IMG06A`, transition: 0 });
showTextbox();
text(() => {
   `All around us was a world of deep, deep blue.`;
   `We embraced in the cold seawater and became one.`;
   `My body began to float gently to the place where the heavens and the ocean fused into one.`;

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
