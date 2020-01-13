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
   marker; appendText; 
   Narr`We quickly climbed the stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were told that it wasn't urgent, but we 
still couldn't afford to be careless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi quietly shouldered the heavy toolbox, 
climbing higher and higher.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I followed her while Takeshi and Sora 
lagged behind.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out to Tsugumi up ahead.`;
   waitForClick; clearText; marker; sound(`S3B000`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi responded without looking back.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There is something that has been bugging me."`;
   waitForClick; clearText; marker; sound(`S3B001`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why were you eating a hotdog?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still couldn't figure it out...Tsugumi's 
behavior was incomprehensible to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I hit upon it. It was like she had been 
showing off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But what she said was...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B002`); appendText; 
   Tsugumi`"Because I wanted to eat a hotdog."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's it?"`;
   waitForClick; clearText; marker; sound(`S3B003`); appendText; 
   Tsugumi`"Is that wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't think it's wrong, but..."`;
   waitForClick; clearText; marker; sound(`S3B004`); appendText; 
   Sara`"But didn't you think that it might make 
Takeshi angry?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara chimed in with a question of her own.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B005`); appendText; 
   Tsugumi`"How could I know what he is thinking?"`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I suppose you're right. We didn't know about 
them until right before, either."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that we fell into silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like Takeshi and Sora were having a 
low-key conversation behind us.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B006`); appendText; 
   Tsugumi`"Well..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi started to speak suddenly.`;
   waitForClick; clearText; marker; sound(`S3B007`); appendText; 
   Tsugumi`"Maybe I did want to play a trick on him just 
a little bit."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`S3B008`); appendText; 
   Sara`"?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a second, I didn't know what she was 
talking about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I realized she meant the whole hotdog 
thing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B009`); appendText; 
   Tsugumi`"Hee, hee...he's even more stubborn than I 
thought."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi gave a rare laugh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was the kind of laugh that would raise 
the hair on the back of your neck.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We finally arrived at Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking around the floor, everything seemed 
normal, but we could hear a hissing sound 
coming from somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We walked toward the sound.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `KB08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B010`); appendText; 
   Takeshi`"Yesterday everything was fine here."`;
   waitForClick; clearText; marker; sound(`S3B011`); appendText; 
   Takeshi`"Why do you think something would go wrong all 
of a sudden?"`;
   waitForClick; clearText; marker; sound(`S3B012`); appendText; 
   Sora`"Well, not everything goes as forecasted..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B013`); appendText; 
   Tsugumi`"It's probably because you were all running 
around like lunatics."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S3B014`); appendText; 
   Tsugumi`"You guys were making such a fuss..."`;
   waitForClick; clearText; marker; sound(`S3B015`); appendText; 
   Tsugumi`"It probably threw LeMU off its axis."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Everyone`"..."`;
   waitForClick; clearText; marker; sound(`S3B016`); appendText; 
   Tsugumi`"Just kidding."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Everyone`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's flippant remark had tensed the 
atmosphere around us.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B017`); appendText; 
   Tsugumi`"What's wrong? If you don't hurry I'll leave 
you behind."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi walked briskly ahead.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"H-hey...what's the matter with her?"`;
   waitForClick; clearText; marker; sound(`S3B018`); appendText; 
   Sara`"How would I know?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B019`); appendText; 
   Takeshi`"She probably fell on her head."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B020`); appendText; 
   Sora`"She really is quite unpredictable..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a while all we could do is stand around 
not knowing what to say.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We had arrived in front of the room making the 
strange noise.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B021`); appendText; 
   Takeshi`"So it is coming from inside the warehouse."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B022`); appendText; 
   Sora`"I will run a scan to determine the situation 
inside."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that Sora disappeared.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B023`); appendText; 
   Takeshi`"The steam in there isn't going to explode, if 
we open the door, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi fixed her eyes on the door.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B024`); appendText; 
   Tsugumi`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`S3B025`); appendText; 
   Tsugumi`"It's probably fine."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B026`); appendText; 
   Takeshi`"How would you know? Do you...?"`;
   waitForClick; clearText; marker; sound(`S3B027`); appendText; 
   Tsugumi`"I'm just saying what you want to hear."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora appeared in front of the door.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B028`); appendText; 
   Sora`"I have finished the diagnostic."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B029`); appendText; 
   Sora`"Atmospheric pressure is normal. No traces of 
toxic gas detected, however, the temperature 
and humidity of the room are slightly 
elevated."`;
   waitForClick; clearText; marker; sound(`S3B030`); appendText; 
   Sora`"An area of the pipe has ruptured, and there 
is a slight water leak. The water is about 
four inches at its deepest point."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B031`); appendText; 
   Tsugumi`"*sigh*...Exactly as I thought."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B032`); appendText; 
   Sora`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B033`); appendText; 
   Tsugumi`"Nothing. If that's all that's wrong, it 
should be no problem."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B034`); appendText; 
   Sora`"No, I suppose not..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B035`); appendText; 
   Takeshi`"Let's go in. If we fix it, there won't be a 
problem, right?"`;
   waitForClick; clearText; marker; sound(`S3B036`); appendText; 
   Sora`"Yes. Please hurry."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We opened the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We looked toward the wall that was making the 
hissing sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a faint crack in the 
pressure-regulating pipe and water was dancing 
out of it in a fine mist.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA03ADS`, name2: `KB05ADS`, name3: `TU08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S3B037`); appendText; 
   Sara`"Are...are you sure this is okay?"`;
   waitForClick; clearText; marker; sound(`S3B038`); appendText; 
   Takeshi`"Maybe..."`;
   waitForClick; clearText; marker; sound(`S3B039`); appendText; 
   Tsugumi`"Sure. Something small like this we can fix in 
a second."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi opened up the toolbox and started 
taking out tools.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B040`); appendText; 
   Takeshi`"What should I do?"`;
   waitForClick; clearText; marker; sound(`S3B041`); appendText; 
   Tsugumi`"The pipe bit bent...I'm going to reset the 
metal fitting, would you support the pipe for 
me?"`;
   waitForClick; clearText; marker; sound(`S3B042`); appendText; 
   Takeshi`"Roger that!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B043`); appendText; 
   Sara`"What should I do?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU12ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B044`); appendText; 
   Tsugumi`"Over there...there is a valve connecting to 
this pipe. You see it? I want you to loosen 
that a bit."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B045`); appendText; 
   Sara`"At your service!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"And what about me?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B046`); appendText; 
   Tsugumi`"I'll tell you which tools I need and you pass 
them to me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Got it."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We started to work.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We opened and closed a number of valves, 
connected and repaired pipes, and welded shut 
cracks...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B047`); appendText; 
   Takeshi`"You're good at this."`;
   waitForClick; clearText; marker; sound(`S3B048`); appendText; 
   Tsugumi`"At what?"`;
   waitForClick; clearText; marker; sound(`S3B049`); appendText; 
   Takeshi`"Welding. Where did you learn to weld?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B050`); appendText; 
   Tsugumi`"You really want to know?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B051`); appendText; 
   Takeshi`"No. I mean...uh..."`;
   waitForClick; clearText; marker; sound(`S3B052`); appendText; 
   Tsugumi`"You know, asking meaningless questions is a 
bad habit of yours."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B053`); appendText; 
   Tsugumi`"Satisfied?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B054`); appendText; 
   Takeshi`"Huh? What does that mean?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`S3B055`); appendText; 
   Takeshi`"Alright. I won't ask anymore."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Every once in a while I felt that Tsugumi's 
words seemed out of place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stole glances at Tsugumi's expression as I 
gave and took back tools.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, her face didn't really tell me 
anything...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora watched us for a while from the side.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After a while an intercom in the corner of the 
room sounded.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
multifgload3({ name1: `SO01ADS`, name2: `KB07ADS`, name3: `SA08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S3B056`); appendText; 
   Takeshi`"What's that? Somebody calling?"`;
   waitForClick; clearText; marker; sound(`S3B057`); appendText; 
   Sora`"It's from You. It appears that she is in the 
Security Office."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B058`); appendText; 
   Sara`"So Nakkyu is alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"That's a relief."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B059`); appendText; 
   Sora`"Excuse me everyone, but You is calling me. I 
must be going."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3B060`); appendText; 
   Takeshi`"Okay, go for it. We should be able to handle 
the rest ourselves."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B061`); appendText; 
   Sora`"Okay. I'll leave the rest to you."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora approached the intercom and disappeared 
as if it had sucked her in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We knew she could travel instantly, but...it 
was still an odd sight.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B062`); appendText; 
   Tsugumi`"Kid? I'm all set here, so please work on the 
valves for me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? Sure. No problem."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I moved over to the area by the pipes that she 
indicated.`;
   waitForClick; clearText; marker; sound(`S3B063`); appendText; 
   Tsugumi`"First that blue valve..."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`(What?)`;
   waitForClick; clearText; 
});
playBGM({ num: 12, volume: 97 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Oh, what was that?.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a second I saw something.`;
   waitForClick; clearText; marker; sound(`S3B064`); appendText; 
   Tsugumi`"Now twist the blue valve..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The intercom continued to ring and the hissing 
sound of the steam persisted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That feeling I just had...that was like 
before...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I know! It was like when I was going to the 
Conference Room from the kiosk this morning.)`;
   waitForClick; clearText; marker; sound(`S3B065`); appendText; 
   Tsugumi`"Now Sara. Hold right there for me."`;
   waitForClick; clearText; marker; sound(`S3B066`); appendText; 
   Sara`"Okey-dokey. All set."`;
   waitForClick; clearText; marker; sound(`S3B067`); appendText; 
   Tsugumi`"Kid, do the valve in the order that I just 
told you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B068`); appendText; 
   Tsugumi`"Hey, Kid. Are you listening?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Yeah, I got it. Sorry. The blue and then 
the red, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B069`); appendText; 
   Tsugumi`"Right. Loosen it and then close it."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I started on the blue valve in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I needed to loosen it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And right then it happened again!`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Inside my head went all white.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like my consciousness was whisked off 
somewhere else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Wh...what was that?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`An image flashed at the back of my mind, and 
it felt that my brain was being hammered by 
light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It would stop and start, stop and start.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Boxes falling, and shattering to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Massive amounts of water cascading down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remember losing all power to stand and 
crumpling right there on the spot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That was...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That was.........)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It can't be.......!)`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3B070`); appendText; 
   Takeshi`"Hey! What's the matter? Hey!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi shook my shoulders, bringing me back 
from wherever I'd been.`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Takeshi...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B071`); appendText; 
   Takeshi`"It's me, Kid. You okay?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Takeshi...trouble..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B072`); appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If we stay here, there's going to be 
trouble...we have to escape...now..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I coughed the words out deliriously.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Things are going to fall...and water will 
flood in...and someone will get really hurt..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B073`); appendText; 
   Takeshi`"What're you talking about...? You aren't 
making sense."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Right now...we have to escape!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I was filling up with fear and 
panic.`;
   waitForClick; clearText; marker; sound(`S3B074`); appendText; 
   Takeshi`"Calm down! Just calm down!"`;
   waitForClick; clearText; marker; sound(`S3B075`); appendText; 
   Tsugumi`"Outta the way."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: false });
stopBGM();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My left cheek burned, like it had been scalded.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B076`); appendText; 
   Tsugumi`"Calm down."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pressing my hand on my hurting face I stood up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pounding of my heart finally got under 
control.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B077`); appendText; 
   Tsugumi`"You've done enough."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that Tsugumi pointed to a corner of the 
room.`;
   waitForClick; clearText; marker; sound(`S3B078`); appendText; 
   Tsugumi`"Go over there and sit quietly."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B079`); appendText; 
   Tsugumi`"You don't get it? I'm saying you're in the 
way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S3B080`); appendText; 
   Takeshi`"Hey, that's a little harsh don't you think? I 
mean, he's probably tired is all."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B081`); appendText; 
   Tsugumi`"You be quiet."`;
   waitForClick; clearText; marker; sound(`S3B082`); appendText; 
   Tsugumi`"Listen. At times like this, people like him 
are a liability."`;
   waitForClick; clearText; marker; sound(`S3B083`); appendText; 
   Tsugumi`"He's going to make a costly mistake."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B084`); appendText; 
   Tsugumi`"You don't want to cause an accident here, do 
you?"`;
   waitForClick; clearText; marker; sound(`S3B085`); appendText; 
   Takeshi`"Well, that makes sense, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B086`); appendText; 
   Tsugumi`"Now you know what I mean. Get outta the way. 
We'll get somebody else to do this."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I walked meekly to the corner.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that, the work went smoothly...and 
finally we succeeded in getting everything 
back to normal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What I had seen hadn't been real.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thankfully, my predictions had been off.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`With the repairs finished, everyone left the 
room and I was in the warehouse alone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what had been going on in my mind 
before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While everything had all turned out alright, 
it bothered me to no end.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yesterday in the Generator Room and then this. 
I wondered what was wrong with me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was still without my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't even find any of the pieces.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(But maybe...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe these crazy flashes that 
kept occurring had something to do with my 
lost memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe I'm closer to getting my memory 
back...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I floated around the warehouse thinking about 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, I noticed that deeper in the corner 
of the room there was another door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There appeared to be another room on the other 
side of the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door was open, as if it were inviting me 
in.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`It was a tiny, tiny room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside the room was dimly lit and it smelled 
damp and moldy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights were off and closing the door made 
it even darker. I could just make out the 
interior of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wall looked cold and sturdy. The room was 
covered with cables and pipes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I imagined that the room was used for storing 
equipment used in the warehouse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The far wall had a small, square window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...My mind felt all foggy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I was just fatigued like Takeshi said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A lot had happened over the last three days. I 
had heard a lot and thought about a lot of 
things.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I don't know what it is...but I feel so 
sluggish...)`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sat down in a corner of the room and hugged 
my knees.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking up, I saw moonlight streaming in 
through the window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was warm, full light.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
bgload({ name: `BG37A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I noticed that the walls of the room were made 
of concrete.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I sat with my back against the cold wall, I 
stared up at the full moon shining in from 
outside the window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The moon was far away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The broad night sky was contained in that 
little square space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The bluish shadows of the moonlight crawled 
slowly across the gray walls.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the moon and its shadows, and let 
out a sigh in the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to think about anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pretended not to notice the freezing 
coldness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room had a very small bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sheets were pulled tight. There wasn't a 
single wrinkle or even a speck of dust.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next to the bed lay a chair with all of 
the sharp edges rounded off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One of the chair's legs was bent off in an 
unnatural direction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door was closed. It was a steel door with 
no knob.  `;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I felt eyes upon me from the corner of the 
ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sharp, intense pair of eyes boring into my 
body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see the body belonging to the eyes, 
but a harsh laugh rang loudly in my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next to a lens a red light was on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The red light shown on the ceiling as if it 
would was cutting off the room's corners into 
darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, I heard the sobbing voice of someone 
behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Someone was crying on the other side of the 
wall.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B087`); appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`Ouch....ouch...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The small voice of a girl echoed in the 
darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then I heard...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whack!`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B088`); appendText; delay(0); 
   Narr`             `;
   nextPage(00); 
   Narr`Shut up! Quit whining!`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was the gruff voice of a man ringing out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suspected that the girl had been hit. It 
sounded like she had fallen on the hard 
concrete and was crying even harder.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B089`); appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`Owwww! It hurts!`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B090`); appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`Help....Someone...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I covered my ears with my hands and shook my 
head.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B091`); appendText; delay(0); 
   Narr`              `;
   nextPage(00); 
   Narr`I'm sorry, I'm sorry -
`;
   appendText; delay(0); 
   Narr`         I'm sorry, I'm sorry, I'm sorry -`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Still the girl's cries of pain didn't stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if trying to escape, I crawled across the 
floor to the opposite corner of the room and 
curled up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The moon's light was bright.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I covered myself with a blanket as if to hide 
and closed my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl just cried and cried.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gong! Gong!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gong! Gong!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thud!`;
   waitForClick; clearText; marker; appendText; 
   Narr`....I wondered what that sound could be.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to think about it anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if I closed my eyes, even if I plugged my 
ears, the image of the girl struggling on the 
floor jumped back into my mind.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B092`); appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`Ouch...Owwwww...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The voice gradually got weaker and faded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally it disappeared completely...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the silence, only a muffled sob echoed 
hollowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air in the room was so dank and stale that 
it felt heavy and strange on the skin.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B093`); appendText; delay(0); 
   Narr`                   `;
   nextPage(00); 
   Narr`Help me...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard a feeble voice. `;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B094`); appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`Help...help me...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B095`); appendText; delay(0); 
   Narr`              It's all your fault!`;
   waitForSound; clearText; 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sudden curses of the man drowned out the 
girl's voice.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`

`;
   sound(`S3B096`); appendText; delay(0); 
   Narr`   All of this is just the way you wanted it.`;
   waitForSound; 
   Narr`
`;
   sound(`S3B097`); appendText; delay(0); 
   Narr`     Right? You best fess up to all of it.`;
   waitForSound; 
   Narr`
`;
   sound(`S3B098`); appendText; delay(0); 
   Narr`            You knew from the start 
`;
   appendText; delay(0); 
   Narr`    that things would turn out like this...`;
   waitForSound; clearText; 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"NO! I didn't know!"`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B099`); appendText; delay(0); 
   Narr`         Liar! So why did you run away?`;
   waitForSound; clearText; 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I didn't run away!"`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   sound(`S3B100`); appendText; delay(0); 
   Narr`                 You ran away.`;
   waitForSound; 
   Narr`
`;
   sound(`S3B101`); appendText; delay(0); 
   Narr`        You left that girl and ran away.`;
   waitForSound; clearText; 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No...I...I promised..."`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`

`;
   sound(`S3B102`); appendText; delay(0); 
   Narr`               And you broke it.`;
   waitForSound; 
   Narr`
`;
   sound(`S3B103`); appendText; delay(0); 
   Narr` Or maybe you meant to break it from the start?`;
   waitForSound; clearText; 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No..."`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   sound(`S3B104`); appendText; delay(0); 
   Narr`       You bought happiness for yourself. 
`;
   appendText; delay(0); 
   Narr`     You traded it for that girl's life... 
`;
   appendText; delay(0); 
   Narr`                A, HA, HA, HA...`;
   waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No..no...no...no...no...no... 
no...no...no...no...no...no...no."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`



`;
   sound(`S3B105`); appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`Yeah, I promise.`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B106`); appendText; delay(0); 
   Narr` `;
   nextPage(00); 
   Narr`To wait like a good kid until you come for me.`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B107`); appendText; delay(0); 
   Narr`        `;
   nextPage(00); 
   Narr`I'll wait...like a good girl....`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B108`); appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`I'll wait....forever...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
bgload({ name: `BG14A3`, transition: 26 });
playBGM({ num: 17, volume: 100 });
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"...NO!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shouted and grabbed the chair lying on the 
floor with both hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the chair, as if to scare away a ghost, 
and pounded it on the wall.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thud!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wildly I put all of my limited strength into 
it...over and over...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thud!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thud!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thud!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The chair bent awkwardly and scraped against 
the dented wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Outside the window...the moonlight shined far 
away...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Damn you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the chair and with all my strength, 
threw it at the moon.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 62 });
hideTextbox();
playSFX({ name: `SE07_04`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE07_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The moon scattered like fireworks, shattering 
to pieces.`;
   waitForClick; clearText; 
});
bgload({ name: `BG14A2`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I'll kill you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying this I threw my body into the steel 
door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang...bang......bang......bang......bang...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door wouldn't budge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't give up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I had to pulverize my body, I was still 
going to open that door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang...bang......bang......bang......bang...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang...bang......bang......bang......bang...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang...bang......bang......bang......bang...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurled myself against the door again and 
again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The rage I felt made my blood boil and my body 
shake with fury.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something hot and sticky flowed from near my 
temple.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Every time I crashed into the door a shock of 
pain ran through my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that my shoulder might already be 
broken.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_16`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang...bang......bang......bang......bang...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A dull sound echoed in the darkness endlessly.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 62 });
stopBGM();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S3B109`); appendText; 
   //??
   Unk`"What are you doing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly the door opened...`;
   waitForClick; clearText; marker; appendText; 
   Narr`White light poured into my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah...ah...ungh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tears swelled my eyes, overflowing.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Through my blurred vision I could make out 
Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stood surrounded by the bright light, her 
hands outstretched to me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally my consciousness was sucked into the 
light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Powerless, I slumped to the floor, lying there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body felt heavy like lead and like it would 
sink into the floor.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The next thing I knew, I was on a bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ceiling was so white it was slightly 
blinding...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It smelled of disinfectant...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was this the...infirmary?`;
   waitForClick; clearText; marker; sound(`S3B110`); appendText; 
   //??
   Unk`"Are you awake now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A shadow passed above me on the bed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Deja vu...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, this was something that I had actually 
experienced before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two days before, on the first day, when I woke 
up You was at my side then...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where is Sara...?"`;
   waitForClick; clearText; marker; sound(`S3B111`); appendText; 
   You`"Who knows? Probably resting somewhere."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B112`); appendText; 
   You`"I just replaced her a little bit ago. She 
looked after you the whole time until then."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took both hands out from the blanket and 
stared dreamily at my palms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The countless wrinkles etched 
there...intertwining, reaching out like the 
branches of a tree in complicated patterns...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pinkish skin...and buried deeper the 
slightly blue veins...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...five fingers...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Five on the left, five on the right and 10 in 
total - the same as always.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My lost finger still hadn't come back to me 
yet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was still the deep scar on my left thumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like always, I ran my pinky over the scar 
gently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like always?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I see. Maybe this is a habit of mine.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Strangely that fact had penetrated naturally 
into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered when, where and how I had injured 
my thumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just maybe, the scar held some kind of clue to 
help me remember my past.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I traced the wound with my pinky it caused 
a slight stinging pain that tickled a little 
bit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was finally feeling completely calmed down.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B113`); appendText; 
   You`"What happened?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You poured me a cup of freshly brewed coffee, 
handed it to me and sat down next to my bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the coffee. After a sip, I started to 
explain.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`..........`;
   waitForClick; clearText; marker; appendText; 
   Narr`.......`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
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
   marker; sound(`S3B114`); appendText; 
   You`"I see..."`;
   waitForClick; clearText; marker; sound(`S3B115`); appendText; 
   You`"So that little room and the room that you 
were in before were similar somehow?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Probably."`;
   waitForClick; clearText; marker; sound(`S3B116`); appendText; 
   You`"Listening to that it sounds like a sickroom 
or isolation ward somewhere."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sickroom?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B117`); appendText; 
   You`"You've probably been hospitalized before 
somewhere."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B118`); appendText; 
   You`"Maybe I shouldn't say this, but..."`;
   waitForClick; clearText; marker; sound(`S3B119`); appendText; 
   You`"Kid, maybe you have had the same...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B120`); appendText; 
   You`"I mean, maybe you've lost your memory or had 
violent fits repeatedly before."`;
   waitForClick; clearText; marker; sound(`S3B121`); appendText; 
   You`"So maybe you were detained in a sickroom with 
a tiny window like that..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You touched on the harsh reality of the 
situation, yet chose her words with care.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B122`); appendText; 
   You`"Of course, it's not for sure or anything. 
It's just one possibility."`;
   waitForClick; clearText; marker; sound(`S3B123`); appendText; 
   You`"You probably had a waking dream... that is a 
possibility, too."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I was dreaming."`;
   waitForClick; clearText; marker; sound(`S3B124`); appendText; 
   You`"While you were awake though."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally You gave me an easy to understand 
explanation about the connectedness of 
memories and dreams.`;
   waitForClick; clearText; marker; appendText; 
   Narr`According to You, dreams and memory are 
clearly deeply related, but not everything you 
see in a dream is something experienced in 
reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In other words, something had set off my 
hallucination, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That alone didn't mean that I really had been 
held in a sickroom.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dreams could often appear as symbols of 
something else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So what I had seen earlier might have been 
caused by my repressed memories.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In any case, there was no way to be sure of 
anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I still hadn't gotten my memory back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt that my experience in a sickroom or 
somewhere was as unreal as a strange small 
animal that might appear in a dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe it was just a dream.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`At some point I had become sure of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt sure that it was probably just my mind 
playing a nasty trick on me.`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You stood from beside the bed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B125`); appendText; 
   You`"Okay. For now, shall we go to check it out 
one more time?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Go check what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B126`); appendText; 
   You`"That little room. To set the record straight."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You held out her hands out to me.`;
   waitForClick; clearText; marker; sound(`S3B127`); appendText; 
   You`"You might find a clue to help you jog your 
mind and get your memory back."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that was unlikely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I know that was just my mind playing tricks 
on me.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was convinced that there was no connection 
between that room and my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even so, I had to agree to go.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If she were willing to take me, I couldn't 
turn her down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took You's hands and got up from the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It only made sense, but her hands felt a lot 
different from Sara's.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The inside of the little room was in shambles.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was amazed that I could have made this much 
of a mess - that is how miserable it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think that even if you compressed all 
of the world's poltergeists into this 
itty-bitty space they could have done much 
more.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was stand there with my jaw on 
the floor as You said - `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B128`); appendText; 
   You`"You did this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was saying it as if to make sure.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B129`); appendText; 
   You`"And? What was it we were going to...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S3B130`); appendText; 
   You`"If I remember correctly...you came into the 
room and sat on the floor, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y-yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B131`); appendText; 
   You`"Whereabouts?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"About here, I think."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed to the area around You's feet.`;
   waitForClick; clearText; marker; sound(`S3B132`); appendText; 
   You`"What about the door?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The door?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B133`); appendText; 
   You`"I'm asking whether the door was shut or not."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...I shut it, I think."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"After the door shut, I wanted to escape and 
started throwing myself against the door..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I closed the door as I answered.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Just like before, the room was thrown into 
darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only source of light was the moonlight 
pouring through the little window...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What? Moonlight?)`;
   waitForClick; clearText; marker; sound(`S3B134`); appendText; 
   You`"I can't see anything like this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You grasped around in the dark with her hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see everything perfectly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B135`); appendText; 
   You`"Where's the light switch?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You walked along the wall looking for the 
switch, sometimes tripping on plastic boxes 
scattered on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's body gave off a faint light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Every time she took a step, a faint 
streak-like image followed her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like the flame of a candle flickering 
in a thick mist.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Light shone down from the ceiling.`;
   waitForClick; clearText; marker; sound(`S3B136`); appendText; 
   You`"Geez. Can you believe they are still using 
electronic fossils like this these days?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You muttered this as she stared at the light 
switch.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B137`); appendText; 
   You`"They should spend money on places like this 
even if the customers won't see them."`;
   waitForClick; clearText; marker; sound(`S3B138`); appendText; 
   You`"It's because they cut corners in places like 
this that they get accidents..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B139`); appendText; 
   You`"But who cares about that?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You whipped around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And scouring the room she said - `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B140`); appendText; 
   You`"By the way..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B141`); appendText; 
   You`"...where's the window?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There wasn't a single window in the whole room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking about it, it made sense.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody would fork over the cash for a little 
window with special pressure-resistant glass 
in a little storage room stuck on the side of 
a warehouse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around for moonlight that had been 
there until a second ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no moon.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it was because I had shattered 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that wasn't it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What I had mistaken for a window was...just a 
little square hole.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B142`); appendText; 
   You`"Is this the window?"`;
   waitForClick; clearText; marker; sound(`S3B143`); appendText; 
   You`"You are saying you thought this was a window?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You followed my eyes and went and stood in 
front of the square hole.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went over beside her and looked up at the 
hole.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hole was bordered by a steel frame.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was about the same size as a coin locker.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was about 20 inches on each side.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a door on the hole.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I might have broken it but the door was bent 
completely and hung loose at a hinge on the 
side of the hole.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hole was more than an empty space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A bunch of colored wiring, something like an 
integrated circuit board, some kind of plug 
and something like a small lever were all 
packed into the hole.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What is this?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I had no idea what it was.`;
   waitForClick; clearText; marker; sound(`S3B144`); appendText; 
   You`"It's probably an inverter unit or something."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Inverter unit?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B145`); appendText; 
   You`"To change the AC power that comes from the 
generator into DC..."`;
   waitForClick; clearText; marker; sound(`S3B146`); appendText; 
   You`"It's a mechanism for changing the electrical 
current into one that the tools in this 
warehouse can use."`;
   waitForClick; clearText; marker; sound(`S3B147`); appendText; 
   You`"That means this device controls those 
functions."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything she was saying was like gibberish 
to me, but I nodded.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B148`); appendText; 
   You`"Or to be more precise, it WAS anyway."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S3B149`); appendText; 
   You`"That WAS the inverter unit."`;
   waitForClick; clearText; marker; sound(`S3B150`); appendText; 
   You`"It looks broken now..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3B151`); appendText; 
   You`"I have no idea who broke it, but..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You said it straight faced and without looking 
at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out to touch the inverter unit thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a little bit warm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or maybe I had it backwards.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I knew that it was warm before I touched 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I had wanted to make sure by touching it...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`In the end, we really didn't learn anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No...but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it did seem like something was trying to 
move...at least to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like someone inside me was tossing and 
turning in his sleep.`;
   waitForClick; clearText; 
});
l_choice = 0;
jump(`S_3D`);
