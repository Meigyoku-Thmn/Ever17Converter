setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
setSceneTitle({ index: 69 });
bgload({ name: `BG29A1`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playSFX({ name: `SE01_07`, a1: 0, volume: 100 });
clock(`6:57`);
showTextbox();
text(() => {
   `We quickly climbed the stairs.`;
   `We were told that it wasn't urgent, but we still couldn't afford to be careless.`;
   `Tsugumi quietly shouldered the heavy toolbox, climbing higher and higher.`;
   `Sara and I followed her while Takeshi and Sora lagged behind.`;
   Kid`"Hey, Tsugumi."`;
   `I called out to Tsugumi up ahead.`;
   Tsugumi(S3B000)`"What?"`;
   `Tsugumi responded without looking back.`;
   Kid`"There is something that has been bugging me."`;
   Tsugumi(S3B001)`"What?"`;
   Kid`"Why were you eating a hotdog?"`;
   `I still couldn't figure it out...Tsugumi's behavior was incomprehensible to me.`;
   `Then I hit upon it. It was like she had been showing off.`;
   `But what she said was...`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B002)`"Because I wanted to eat a hotdog."`;
   Kid`"That's it?"`;
   Tsugumi(S3B003)`"Is that wrong?"`;
   Kid`"I don't think it's wrong, but..."`;
   Sara(S3B004)`"But didn't you think that it might make Takeshi angry?"`;
   `Sara chimed in with a question of her own.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B005)`"How could I know what he is thinking?"`;
   Sara`"........."`;
   Kid`"I suppose you're right. We didn't know about them until right before, either."`;
   `After that we fell into silence.`;
   `It looked like Takeshi and Sora were having a low-key conversation behind us.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B006)`"Well..."`;
   `Tsugumi started to speak suddenly.`;
   Tsugumi(S3B007)`"Maybe I did want to play a trick on him just a little bit."`;
   Kid`"?"`;
   Sara(S3B008)`"?"`;
   `For a second, I didn't know what she was talking about.`;
   `Then I realized she meant the whole hotdog thing.`;

});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B009)`"Hee, hee...he's even more stubborn than I thought."`;
   `Tsugumi gave a rare laugh.`;
   `But it was the kind of laugh that would raise the hair on the back of your neck.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
bgload({ name: `BG26A3R`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `We finally arrived at Zweite stock.`;
   `Looking around the floor, everything seemed normal, but we could hear a hissing sound coming from somewhere.`;
   `We walked toward the sound.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `KB08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B010)`"Yesterday everything was fine here."`;
   Takeshi(S3B011)`"Why do you think something would go wrong all of a sudden?"`;
   Sora(S3B012)`"Well, not everything goes as forecasted..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B013)`"It's probably because you were all running around like lunatics."`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Huh?"`;
   Tsugumi(S3B014)`"You guys were making such a fuss..."`;
   Tsugumi(S3B015)`"It probably threw LeMU off its axis."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Everyone`"..."`;
   Tsugumi(S3B016)`"Just kidding."`;

});
stopBGM();
showTextbox();
text(() => {
   Everyone`"........."`;
   `Tsugumi's flippant remark had tensed the atmosphere around us.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B017)`"What's wrong? If you don't hurry I'll leave you behind."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi walked briskly ahead.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"H-hey...what's the matter with her?"`;
   Sara(S3B018)`"How would I know?"`;

});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B019)`"She probably fell on her head."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B020)`"She really is quite unpredictable..."`;
   `For a while all we could do is stand around not knowing what to say.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG25A3`, transition: 26 });
playBGM({ num: 3, volume: 97 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We had arrived in front of the room making the strange noise.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B021)`"So it is coming from inside the warehouse."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B022)`"I will run a scan to determine the situation inside."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that Sora disappeared.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B023)`"The steam in there isn't going to explode, if we open the door, right?"`;
   `Tsugumi fixed her eyes on the door.`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B024)`"Hmmm..."`;
   Tsugumi(S3B025)`"It's probably fine."`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B026)`"How would you know? Do you...?"`;
   Tsugumi(S3B027)`"I'm just saying what you want to hear."`;
   `Sora appeared in front of the door.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B028)`"I have finished the diagnostic."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B029)`"Atmospheric pressure is normal. No traces of toxic gas detected, however, the temperature and humidity of the room are slightly elevated."`;
   Sora(S3B030)`"An area of the pipe has ruptured, and there is a slight water leak. The water is about four inches at its deepest point."`;

});
fgload({ id: 1, name: `TU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B031)`"*sigh*...Exactly as I thought."`;

});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B032)`"What?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B033)`"Nothing. If that's all that's wrong, it should be no problem."`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B034)`"No, I suppose not..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B035)`"Let's go in. If we fix it, there won't be a problem, right?"`;
   Sora(S3B036)`"Yes. Please hurry."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
bgload({ name: `BG13B1`, transition: 26 });
showFog2();
playBGM({ num: 4, volume: 100 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We opened the door.`;
   `We looked toward the wall that was making the hissing sound.`;
   `There was a faint crack in the pressure-regulating pipe and water was dancing out of it in a fine mist.`;

});
multifgload3({ name1: `SA03ADS`, name2: `KB05ADS`, name3: `TU08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Sara(S3B037)`"Are...are you sure this is okay?"`;
   Takeshi(S3B038)`"Maybe..."`;
   Tsugumi(S3B039)`"Sure. Something small like this we can fix in a second."`;
   `Tsugumi opened up the toolbox and started taking out tools.`;

});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B040)`"What should I do?"`;
   Tsugumi(S3B041)`"The pipe bit bent...I'm going to reset the metal fitting, would you support the pipe for me?"`;
   Takeshi(S3B042)`"Roger that!"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3B043)`"What should I do?"`;

});
fgload({ id: 4, name: `TU12ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B044)`"Over there...there is a valve connecting to this pipe. You see it? I want you to loosen that a bit."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3B045)`"At your service!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid`"And what about me?"`;

});
fgload({ id: 4, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B046)`"I'll tell you which tools I need and you pass them to me."`;
   Kid`"Got it."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `We started to work.`;
   `We opened and closed a number of valves, connected and repaired pipes, and welded shut cracks...`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B047)`"You're good at this."`;
   Tsugumi(S3B048)`"At what?"`;
   Takeshi(S3B049)`"Welding. Where did you learn to weld?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B050)`"You really want to know?"`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B051)`"No. I mean...uh..."`;
   Tsugumi(S3B052)`"You know, asking meaningless questions is a bad habit of yours."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B053)`"Satisfied?"`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B054)`"Huh? What does that mean?"`;
   Tsugumi`"........."`;
   Takeshi(S3B055)`"Alright. I won't ask anymore."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   `Every once in a while I felt that Tsugumi's words seemed out of place.`;
   `I stole glances at Tsugumi's expression as I gave and took back tools.`;
   `Of course, her face didn't really tell me anything...`;
   `Sora watched us for a while from the side.`;

});
playSFX({ name: `SE03_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `After a while an intercom in the corner of the room sounded.`;

});
hideTextbox();
stopSFX()
multifgload3({ name1: `SO01ADS`, name2: `KB07ADS`, name3: `SA08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi(S3B056)`"What's that? Somebody calling?"`;
   Sora(S3B057)`"It's from You. It appears that she is in the Security Office."`;

});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3B058)`"So Nakkyu is alright?"`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"That's a relief."`;

});
fgload({ id: 1, name: `SO03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B059)`"Excuse me everyone, but You is calling me. I must be going."`;

});
showTextbox();
text(() => {
   Takeshi(S3B060)`"Okay, go for it. We should be able to handle the rest ourselves."`;

});
fgload({ id: 1, name: `SO01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3B061)`"Okay. I'll leave the rest to you."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora approached the intercom and disappeared as if it had sucked her in.`;
   `We knew she could travel instantly, but...it was still an odd sight.`;

});
fgload({ id: 1, name: `TU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B062)`"Kid? I'm all set here, so please work on the valves for me."`;
   Kid`"What? Sure. No problem."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `I moved over to the area by the pipes that she indicated.`;
   Tsugumi(S3B063)`"First that blue valve..."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setNumberOfFlash(2);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   `(What?)`;

});
playBGM({ num: 12, volume: 97 });
showTextbox();
text(() => {
   `(Oh, what was that?.)`;
   `For a second I saw something.`;
   Tsugumi(S3B064)`"Now twist the blue valve..."`;
   `The intercom continued to ring and the hissing sound of the steam persisted.`;
   `(That feeling I just had...that was like before...)`;
   `(I know! It was like when I was going to the Conference Room from the kiosk this morning.)`;
   Tsugumi(S3B065)`"Now Sara. Hold right there for me."`;
   Sara(S3B066)`"Okey-dokey. All set."`;
   Tsugumi(S3B067)`"Kid, do the valve in the order that I just told you."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B068)`"Hey, Kid. Are you listening?"`;
   Kid`"Huh? Yeah, I got it. Sorry. The blue and then the red, right?"`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B069)`"Right. Loosen it and then close it."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I started on the blue valve in front of me.`;
   `I needed to loosen it...`;
   `And right then it happened again!`;

});
hideTextbox();
setNumberOfFlash(3);
setFlashRGBColor(255, 255, 255);
triggerFlash();
monoColorOverlay({ interval: 12, color: WHITE });
closeFog2();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Inside my head went all white.`;
   `It felt like my consciousness was whisked off somewhere else.`;
   `(Wh...what was that?)`;
   `An image flashed at the back of my mind, and it felt that my brain was being hammered by light.`;
   `It would stop and start, stop and start.`;
   `Boxes falling, and shattering to the floor.`;
   `Massive amounts of water cascading down.`;
   `And then...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `EV_TU07C`, transition: 26, x: 200, y: 150, hx: 300, hy: 225 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `EV_TU07C`, transition: 26, x: 150, y: 112, hx: 425, hy: 318 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `EV_TU07C`, transition: 26, x: 100, y: 75, hx: 550, hy: 412 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `EV_TU07C`, transition: 26, x: 50, y: 37, hx: 675, hy: 506 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `EV_TU07C`, transition: 26, x: 0, y: 0, hx: 800, hy: 600 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
delay({ interval: 30 });
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `BG13B1`, transition: 26 });
showFog2();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   Kid`"........."`;
   `I remember losing all power to stand and crumpling right there on the spot.`;
   `(That was...)`;
   `(That was.........)`;
   `(It can't be.......!)`;

});
showTextbox();
text(() => {
   Takeshi(S3B070)`"Hey! What's the matter? Hey!"`;
   `Takeshi shook my shoulders, bringing me back from wherever I'd been.`;

});
hideTextbox();
showTextbox();
text(() => {
   Kid`"Takeshi...?"`;

});
fgload({ id: 1, name: `KB05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B071)`"It's me, Kid. You okay?"`;
   Kid`"Takeshi...trouble..."`;

});
fgload({ id: 1, name: `KB06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B072)`"Huh?"`;
   Kid`"If we stay here, there's going to be trouble...we have to escape...now..."`;
   `I coughed the words out deliriously.`;
   Kid`"Things are going to fall...and water will flood in...and someone will get really hurt..."`;

});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3B073)`"What're you talking about...? You aren't making sense."`;
   Kid`"Right now...we have to escape!"`;
   `I felt like I was filling up with fear and panic.`;
   Takeshi(S3B074)`"Calm down! Just calm down!"`;
   Tsugumi(S3B075)`"Outta the way."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: false });
stopBGM();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   Kid`"........."`;
   `My left cheek burned, like it had been scalded.`;

});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B076)`"Calm down."`;
   Kid`"......"`;
   `Pressing my hand on my hurting face I stood up.`;
   `The pounding of my heart finally got under control.`;

});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B077)`"You've done enough."`;
   `Saying that Tsugumi pointed to a corner of the room.`;
   Tsugumi(S3B078)`"Go over there and sit quietly."`;
   Kid`"What?"`;

});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B079)`"You don't get it? I'm saying you're in the way."`;
   Kid`"........."`;
   Takeshi(S3B080)`"Hey, that's a little harsh don't you think? I mean, he's probably tired is all."`;

});
fgload({ id: 1, name: `TU18ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B081)`"You be quiet."`;
   Tsugumi(S3B082)`"Listen. At times like this, people like him are a liability."`;
   Tsugumi(S3B083)`"He's going to make a costly mistake."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `TU15ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B084)`"You don't want to cause an accident here, do you?"`;
   Takeshi(S3B085)`"Well, that makes sense, but..."`;

});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3B086)`"Now you know what I mean. Get outta the way. We'll get somebody else to do this."`;
   Kid`"Alright..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I walked meekly to the corner.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeFog2();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `....`;
   `After that, the work went smoothly...and finally we succeeded in getting everything back to normal.`;
   `What I had seen hadn't been real.`;
   `Thankfully, my predictions had been off.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
delay({ interval: 90 });
setSceneTitle({ index: 70 });
bgload({ name: `BG13A1`, transition: 26 });
playBGM({ num: 13, volume: 97 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`8:19`);
showTextbox();
text(() => {
   `With the repairs finished, everyone left the room and I was in the warehouse alone.`;
   `I wondered what had been going on in my mind before.`;
   `While everything had all turned out alright, it bothered me to no end.`;
   `Yesterday in the Generator Room and then this. I wondered what was wrong with me.`;
   `I was still without my memory.`;
   `I couldn't even find any of the pieces.`;
   `(But maybe...)`;
   `I thought that maybe these crazy flashes that kept occurring had something to do with my lost memory.`;
   `(Maybe I'm closer to getting my memory back...?)`;
   `I floated around the warehouse thinking about it.`;
   `Suddenly, I noticed that deeper in the corner of the room there was another door.`;
   `There appeared to be another room on the other side of the wall.`;
   `The door was open, as if it were inviting me in.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG14A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `It was a tiny, tiny room.`;
   `Inside the room was dimly lit and it smelled damp and moldy.`;
   `The lights were off and closing the door made it even darker. I could just make out the interior of the room.`;
   `The wall looked cold and sturdy. The room was covered with cables and pipes.`;
   `I imagined that the room was used for storing equipment used in the warehouse.`;
   `The far wall had a small, square window.`;
   `...My mind felt all foggy.`;
   `Maybe I was just fatigued like Takeshi said.`;
   `A lot had happened over the last three days. I had heard a lot and thought about a lot of things.`;
   `(I don't know what it is...but I feel so sluggish...)`;

});
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   `I sat down in a corner of the room and hugged my knees.`;
   `Looking up, I saw moonlight streaming in through the window.`;
   `It was warm, full light.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
bgload({ name: `BG37A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I noticed that the walls of the room were made of concrete.`;
   `As I sat with my back against the cold wall, I stared up at the full moon shining in from outside the window.`;
   `The moon was far away.`;
   `The broad night sky was contained in that little square space.`;
   `The bluish shadows of the moonlight crawled slowly across the gray walls.`;
   `I looked at the moon and its shadows, and let out a sigh in the darkness.`;
   `I didn't want to think about anything.`;
   `I pretended not to notice the freezing coldness.`;
   `The room had a very small bed.`;
   `The sheets were pulled tight. There wasn't a single wrinkle or even a speck of dust.`;
   `Next to the bed lay a chair with all of the sharp edges rounded off.`;
   `One of the chair's legs was bent off in an unnatural direction.`;
   `The door was closed. It was a steel door with no knob.  `;

});
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   `I felt eyes upon me from the corner of the ceiling.`;
   `A sharp, intense pair of eyes boring into my body.`;
   `I couldn't see the body belonging to the eyes, but a harsh laugh rang loudly in my ears.`;
   `Next to a lens a red light was on.`;
   `The red light shown on the ceiling as if it would was cutting off the room's corners into darkness.`;
   `Suddenly, I heard the sobbing voice of someone behind me.`;
   `Someone was crying on the other side of the wall.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B087)}



${noWait}`;
   Append`                ${nextPage(0)}Ouch....ouch...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `The small voice of a girl echoed in the darkness.`;
   `And then I heard...`;

});
playSFX({ name: `SE05_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Whack!`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B088)}



${noWait}`;
   Append`             ${nextPage(0)}Shut up! Quit whining!${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `It was the gruff voice of a man ringing out.`;
   `I suspected that the girl had been hit. It sounded like she had fallen on the hard concrete and was crying even harder.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B089)}



${noWait}`;
   Append`                ${nextPage(0)}Owwww! It hurts!${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${voice(S3B090)}



${noWait}`;
   Append`               ${nextPage(0)}Help....Someone...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I covered my ears with my hands and shook my head.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B091)}



${noWait}`;
   Append`              ${nextPage(0)}I'm sorry, I'm sorry - ${noWait}`;
   `         I'm sorry, I'm sorry, I'm sorry -${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Still the girl's cries of pain didn't stop.`;
   `As if trying to escape, I crawled across the floor to the opposite corner of the room and curled up.`;
   `The moon's light was bright.`;
   `I covered myself with a blanket as if to hide and closed my eyes.`;
   `The girl just cried and cried.`;

});
playSFX({ name: `SE05_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Gong! Gong!`;

});
playSFX({ name: `SE05_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Gong! Gong!`;

});
playSFX({ name: `SE05_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Thud!`;
   `....I wondered what that sound could be.`;
   `I didn't want to think about it anymore.`;
   `Even if I closed my eyes, even if I plugged my ears, the image of the girl struggling on the floor jumped back into my mind.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B092)}



${noWait}`;
   Append`                ${nextPage(0)}Ouch...Owwwww...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `The voice gradually got weaker and faded.`;
   `Finally it disappeared completely...`;
   `In the silence, only a muffled sob echoed hollowly.`;
   `The air in the room was so dank and stale that it felt heavy and strange on the skin.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B093)}



${noWait}`;
   Append`                   ${nextPage(0)}Help me...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I heard a feeble voice. `;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B094)}



${noWait}`;
   Append`               ${nextPage(0)}Help...help me...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${voice(S3B095)}



${noWait}`;
   Append`              It's all your fault!${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `The sudden curses of the man drowned out the girl's voice.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B096)}

${noWait}`;
   Append(S3B097)`   All of this is just the way you wanted it.${waitVoice} ${noWait}`;
   Append(S3B098)`     Right? You best fess up to all of it.${waitVoice} ${noWait}`;
   Append`            You knew from the start ${noWait}`;
   `    that things would turn out like this...${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"NO! I didn't know!"`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B099)}



${noWait}`;
   Append`         Liar! So why did you run away?${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"I didn't run away!"`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B100)}


${noWait}`;
   Append(S3B101)`                 You ran away.${waitVoice} ${noWait}`;
   Append`        You left that girl and ran away.${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"No...I...I promised..."`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B102)}

${noWait}`;
   Append(S3B103)`               And you broke it.${waitVoice} ${noWait}`;
   Append` Or maybe you meant to break it from the start?${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"No..."`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B104)}


${noWait}`;
   Append`       You bought happiness for yourself. ${noWait}`;
   `     You traded it for that girl's life... ${noWait}`;
   `                A, HA, HA, HA...${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"No..no...no...no...no...no... no...no...no...no...no...no...no."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `${voice(S3B105)}



${noWait}`;
   Append`                ${nextPage(0)}Yeah, I promise.${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${voice(S3B106)}



${noWait}`;
   Append` ${nextPage(0)}To wait like a good kid until you come for me.${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${voice(S3B107)}



${noWait}`;
   Append`        ${nextPage(0)}I'll wait...like a good girl....${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${voice(S3B108)}



${noWait}`;
   Append`            ${nextPage(0)}I'll wait....forever...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
bgload({ name: `BG14A3`, transition: 26 });
playBGM({ num: 17, volume: 100 });
hideTextbox();
ADV_Mode();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   Kid`"...NO!"`;
   `I shouted and grabbed the chair lying on the floor with both hands.`;
   `I took the chair, as if to scare away a ghost, and pounded it on the wall.`;

});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Thud!`;
   `Wildly I put all of my limited strength into it...over and over...`;

});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Thud!`;

});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Thud!`;

});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Thud!`;
   `The chair bent awkwardly and scraped against the dented wall.`;
   `Outside the window...the moonlight shined far away...`;
   Kid`"Damn you!"`;
   `I took the chair and with all my strength, threw it at the moon.`;

});
removeBG({ mode: WHITE, transition: 62 });
hideTextbox();
playSFX({ name: `SE07_04`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE07_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Crash!`;
   `The moon scattered like fireworks, shattering to pieces.`;

});
bgload({ name: `BG14A2`, transition: 10 });
showTextbox();
text(() => {
   Kid`"I'll kill you."`;
   `Saying this I threw my body into the steel door.`;

});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Bang...bang......bang......bang......bang...`;
   `The door wouldn't budge.`;
   `But I didn't give up.`;
   `If I had to pulverize my body, I was still going to open that door.`;

});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Bang...bang......bang......bang......bang...`;

});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Bang...bang......bang......bang......bang...`;

});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Bang...bang......bang......bang......bang...`;
   `I hurled myself against the door again and again.`;
   `The rage I felt made my blood boil and my body shake with fury.`;
   `Something hot and sticky flowed from near my temple.`;
   `Every time I crashed into the door a shock of pain ran through my body.`;
   `I thought that my shoulder might already be broken.`;

});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Bang...bang......bang......bang......bang...`;
   `A dull sound echoed in the darkness endlessly.`;

});
removeBG({ mode: WHITE, transition: 62 });
stopBGM();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   //??
   Unk(S3B109)`"What are you doing?"`;
   `Suddenly the door opened...`;
   `White light poured into my eyes.`;
   Kid`"Ah...ah...ungh..."`;
   `Tears swelled my eyes, overflowing.`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Through my blurred vision I could make out Sara.`;
   `Sara stood surrounded by the bright light, her hands outstretched to me.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Finally my consciousness was sucked into the light.`;
   `Powerless, I slumped to the floor, lying there.`;
   `My body felt heavy like lead and like it would sink into the floor.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
makeFGNormal({ id: 1 });
delay({ interval: 120 });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`11:48`);
showTextbox();
text(() => {
   `The next thing I knew, I was on a bed.`;
   `The ceiling was so white it was slightly blinding...`;
   `It smelled of disinfectant...`;
   `Was this the...infirmary?`;
   //??
   Unk(S3B110)`"Are you awake now?"`;
   `A shadow passed above me on the bed.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `It was You.`;
   `Deja vu...`;
   `No, this was something that I had actually experienced before.`;
   `Two days before, on the first day, when I woke up You was at my side then...`;
   Kid`"Where is Sara...?"`;
   You(S3B111)`"Who knows? Probably resting somewhere."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B112)`"I just replaced her a little bit ago. She looked after you the whole time until then."`;
   Kid`"I see..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I took both hands out from the blanket and stared dreamily at my palms.`;
   `The countless wrinkles etched there...intertwining, reaching out like the branches of a tree in complicated patterns...`;
   `The pinkish skin...and buried deeper the slightly blue veins...`;
   `And...five fingers...`;
   `Five on the left, five on the right and 10 in total - the same as always.`;
   `My lost finger still hadn't come back to me yet.`;
   `There was still the deep scar on my left thumb.`;
   `Like always, I ran my pinky over the scar gently.`;
   `Like always?`;
   `(I see. Maybe this is a habit of mine.)`;
   `Strangely that fact had penetrated naturally into my mind.`;
   `But...`;
   `I wondered when, where and how I had injured my thumb.`;
   `Just maybe, the scar held some kind of clue to help me remember my past.`;
   `As I traced the wound with my pinky it caused a slight stinging pain that tickled a little bit.`;
   `I was finally feeling completely calmed down.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B113)`"What happened?"`;
   `You poured me a cup of freshly brewed coffee, handed it to me and sat down next to my bed.`;
   `I took the coffee. After a sip, I started to explain.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `..........`;
   `.......`;
   `....`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: false });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(S3B114)`"I see..."`;
   You(S3B115)`"So that little room and the room that you were in before were similar somehow?"`;
   Kid`"Probably."`;
   You(S3B116)`"Listening to that it sounds like a sickroom or isolation ward somewhere."`;
   Kid`"Sickroom?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B117)`"You've probably been hospitalized before somewhere."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B118)`"Maybe I shouldn't say this, but..."`;
   You(S3B119)`"Kid, maybe you have had the same...."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B120)`"I mean, maybe you've lost your memory or had violent fits repeatedly before."`;
   You(S3B121)`"So maybe you were detained in a sickroom with a tiny window like that..."`;
   `You touched on the harsh reality of the situation, yet chose her words with care.`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B122)`"Of course, it's not for sure or anything. It's just one possibility."`;
   You(S3B123)`"You probably had a waking dream... that is a possibility, too."`;
   Kid`"I...I was dreaming."`;
   You(S3B124)`"While you were awake though."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `Finally You gave me an easy to understand explanation about the connectedness of memories and dreams.`;
   `According to You, dreams and memory are clearly deeply related, but not everything you see in a dream is something experienced in reality.`;
   `In other words, something had set off my hallucination, but...`;
   `That alone didn't mean that I really had been held in a sickroom.`;
   `Dreams could often appear as symbols of something else.`;
   `So what I had seen earlier might have been caused by my repressed memories.`;
   `In any case, there was no way to be sure of anything.`;
   `And I still hadn't gotten my memory back.`;
   `I felt that my experience in a sickroom or somewhere was as unreal as a strange small animal that might appear in a dream.`;
   `(Maybe it was just a dream.)`;
   `At some point I had become sure of it.`;
   `I felt sure that it was probably just my mind playing a nasty trick on me.`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `You stood from beside the bed.`;

});
fgload({ id: 1, name: `YU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B125)`"Okay. For now, shall we go to check it out one more time?"`;
   Kid`"Go check what?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B126)`"That little room. To set the record straight."`;
   `You held out her hands out to me.`;
   You(S3B127)`"You might find a clue to help you jog your mind and get your memory back."`;
   Kid`"..."`;
   `I thought that was unlikely.`;
   `(I know that was just my mind playing tricks on me.)`;
   `I was convinced that there was no connection between that room and my memory.`;
   `Even so, I had to agree to go.`;
   `If she were willing to take me, I couldn't turn her down.`;
   `I took You's hands and got up from the bed.`;
   `It only made sense, but her hands felt a lot different from Sara's.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG14A1`, transition: 26 });
playBGM({ num: 16, volume: 100 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`12:22`);
showTextbox();
text(() => {
   `The inside of the little room was in shambles.`;
   `I was amazed that I could have made this much of a mess - that is how miserable it was.`;
   `I didn't think that even if you compressed all of the world's poltergeists into this itty-bitty space they could have done much more.`;
   `All I could do was stand there with my jaw on the floor as You said - `;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B128)`"You did this?"`;
   `She was saying it as if to make sure.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B129)`"And? What was it we were going to...?"`;
   Kid`"Huh?"`;
   You(S3B130)`"If I remember correctly...you came into the room and sat on the floor, right?"`;
   Kid`"Y-yeah..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B131)`"Whereabouts?"`;
   Kid`"About here, I think."`;
   `I pointed to the area around You's feet.`;
   You(S3B132)`"What about the door?"`;
   Kid`"The door?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B133)`"I'm asking whether the door was shut or not."`;
   Kid`"Uh...I shut it, I think."`;
   Kid`"After the door shut, I wanted to escape and started throwing myself against the door..."`;
   `I closed the door as I answered.`;

});
hideTextbox();
monoColorOverlay({ interval: 3, color: BLACK });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG14A2`, transition: 26 });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   `Just like before, the room was thrown into darkness.`;
   `The only source of light was the moonlight pouring through the little window...`;
   `(What? Moonlight?)`;
   You(S3B134)`"I can't see anything like this."`;
   `You grasped around in the dark with her hands.`;
   `I could see everything perfectly.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B135)`"Where's the light switch?"`;
   `You walked along the wall looking for the switch, sometimes tripping on plastic boxes scattered on the floor.`;
   `You's body gave off a faint light.`;
   `Every time she took a step, a faint streak-like image followed her.`;
   `It was like the flame of a candle flickering in a thick mist.`;

});
hideTextbox();
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG14A1`, transition: 26 });
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   `Light shone down from the ceiling.`;
   You(S3B136)`"Geez. Can you believe they are still using electronic fossils like this these days?"`;
   `You muttered this as she stared at the light switch.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B137)`"They should spend money on places like this even if the customers won't see them."`;
   You(S3B138)`"It's because they cut corners in places like this that they get accidents..."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B139)`"But who cares about that?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You whipped around.`;
   `And scouring the room she said - `;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B140)`"By the way..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B141)`"...where's the window?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `There wasn't a single window in the whole room.`;
   `Thinking about it, it made sense.`;
   `Nobody would fork over the cash for a little window with special pressure-resistant glass in a little storage room stuck on the side of a warehouse.`;
   `I looked around for moonlight that had been there until a second ago.`;
   `There was no moon.`;
   `I wondered if it was because I had shattered it.`;
   `But that wasn't it.`;
   `What I had mistaken for a window was...just a little square hole.`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B142)`"Is this the window?"`;
   You(S3B143)`"You are saying you thought this was a window?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You followed my eyes and went and stood in front of the square hole.`;
   `I went over beside her and looked up at the hole.`;
   `The hole was bordered by a steel frame.`;
   `It was about the same size as a coin locker.`;
   `It was about 20 inches on each side.`;
   `There was a door on the hole.`;
   `I might have broken it but the door was bent completely and hung loose at a hinge on the side of the hole.`;
   `The hole was more than an empty space.`;
   `A bunch of colored wiring, something like an integrated circuit board, some kind of plug and something like a small lever were all packed into the hole.`;
   Kid`"What is this?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I had no idea what it was.`;
   You(S3B144)`"It's probably an inverter unit or something."`;
   Kid`"Inverter unit?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B145)`"To change the AC power that comes from the generator into DC..."`;
   You(S3B146)`"It's a mechanism for changing the electrical current into one that the tools in this warehouse can use."`;
   You(S3B147)`"That means this device controls those functions."`;
   Kid`"I see..."`;
   `Everything she was saying was like gibberish to me, but I nodded.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B148)`"Or to be more precise, it WAS anyway."`;
   Kid`"Huh?"`;
   You(S3B149)`"That WAS the inverter unit."`;
   You(S3B150)`"It looks broken now..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3B151)`"I have no idea who broke it, but..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You said it straight faced and without looking at me.`;
   `I reached out to touch the inverter unit thing.`;
   `It was a little bit warm.`;
   `Or maybe I had it backwards.`;
   `Maybe I knew that it was warm before I touched it.`;
   `So I had wanted to make sure by touching it...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `In the end, we really didn't learn anything.`;
   `No...but...`;
   `But it did seem like something was trying to move...at least to me.`;
   `It felt like...`;
   `It felt like someone inside me was tossing and turning in his sleep.`;

});
l_choice = 0;
jump(`S_3D`);
