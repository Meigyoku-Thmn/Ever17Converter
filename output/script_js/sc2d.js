varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 2`);
varop(`(28 0a a4) b2 := (00) 2`);
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S218`); appendText; 
   Sora`"Someone sees me."`;
   waitForClick; clearText; marker; sound(`C2S219`); appendText; 
   Sora`"That action allows me to manifest myself for 
the first time."`;
   waitForClick; clearText; marker; sound(`C2S220`); appendText; 
   Sora`"On that eye, that visual point."`;
   waitForClick; clearText; marker; sound(`C2S221`); appendText; 
   Sora`"That someone's eye actually creates me."`;
   waitForClick; clearText; marker; sound(`C2S222`); appendText; 
   Sora`"Kid..."`;
   waitForClick; clearText; marker; sound(`C2S223`); appendText; 
   Sora`"When you close your eyes, I disappear."`;
   waitForClick; 
});
choice(
   `Try it`
   `Don't do anything`
);
switch (choice) {
   case 0: goto(lbl_000000c5);
   case 1: goto(lbl_0000007d);
}
let lbl_0000007d;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't say or do anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, it would be better to say that I couldn't 
say or do anything.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Eventually we reached the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's face was one big smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somewhere in her smile seemed a hint of 
sadness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least...it appeared that way to me.`;
   waitForClick; clearText; 
});
goto(lbl_00000241);
let lbl_000000c5;
varop(`(28 0a a4) ba += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"When I close my eyes...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to test it and covered my eyes with 
one hand.`;
   waitForClick; clearText; 
});
setFGRenderOrder(4, 1, 2);
hideTextbox();
makeFGTransparent({ id: 2 });
fgload({ id: 2, name: `SO01ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
delay({ interval: 60 });
removeFG({ id: 2, useAnim: true });
makeFGNormal({ id: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Instantly, Sora vanished.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If Sora did exist, I should have been able to 
see her head above my hand and her feet below.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My hand kept the laser from reaching my eye, 
so I couldn't see Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something about it made her seem fragile and 
temporary. It scared me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I quickly put down my hand.`;
   waitForClick; clearText; 
});
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her beautiful image appeared without a sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled gently.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora...?"`;
   waitForClick; clearText; marker; sound(`C2S224`); appendText; 
   Sora`"Yes...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no real meaning in my question.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was just that I wanted to see whether 
or not she would answer me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Given her fragile existence, there seemed to 
be a danger that she might slip away at any 
moment...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was uneasy about it, and at the same time 
felt a sort of awe about the mystery of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt drawn to her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S225`); appendText; 
   Sora`"Is there anything else? Please don't stare at 
me like that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was blushing.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...no. Nothing else."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora pinched her lips closed, as if she were 
slightly embarrassed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S226`); appendText; 
   Sora`"By the way, Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah?"`;
   waitForClick; clearText; marker; sound(`C2S227`); appendText; 
   Sora`"Kid...have you ever seen the moon?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The question came out of nowhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind switched tracks and starting looking 
for an appropriate answer.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...the moon, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't suppose this is a question I should 
have to think about, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But having lost my memory and all..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can't say for sure that I've seen it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...I know what the moon is...and I'm 
pretty sure that I have seen it."`;
   waitForClick; clearText; marker; sound(`C2S228`); appendText; 
   Sora`"I see."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C2S229`); appendText; 
   Sora`"Well, now let's say that you have seen a full 
moon."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C2S230`); appendText; 
   Sora`"And let's say that you closed your eyes. 
Do you think that moon would still be there?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ha, ha. That's easy."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Of course it would."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C2S231`); appendText; 
   Sora`"And how about if everyone in the world closed 
their eyes all at the same time?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know what you are getting at, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Even if everyone in the world closed their 
eyes, the moon wouldn't disappear."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C2S232`); appendText; 
   Sora`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yes."`;
   waitForClick; clearText; marker; sound(`C2S233`); appendText; 
   Sora`"How can you be sure?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just open your eyes and you can tell, right?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C2S234`); appendText; 
   Sora`"That goes against the purpose of this 
exercise."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S235`); appendText; 
   Sora`"My question was whether there is anyway of 
measuring whether or not the moon exists, if 
someone closes their eyes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`C2S236`); appendText; 
   Sora`"When you close your eyes, do you think 
this world still exists?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S237`); appendText; 
   Sora`"What if I told you that not only myself, but 
all of LeMU was nothing but an RSD ?generated 
illusion.....what would you do then?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; sound(`C2S238`); appendText; 
   Sora`"Can you prove that the walls, the ceiling and 
all of the scenery that you are witnessing 
actually exist?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is everything I'm looking at...is it 
RSD...???)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I panicked, glancing around at my surroundings.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S239`); appendText; 
   Sora`"Ha, ha, I'm sorry, I was only joking."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That was a joke?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S240`); appendText; 
   Sora`"Yes, LeMU really does exist."`;
   waitForClick; clearText; marker; sound(`C2S241`); appendText; 
   Sora`"You sounded so full of confidence when you 
answered...I thought I would tease you just 
a bit."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora giggled, covering her mouth.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S242`); appendText; 
   Sora`"However, I can say this..."`;
   waitForClick; clearText; marker; sound(`C2S243`); appendText; 
   Sora`"For humans to know the world around them they 
must use one of their five senses."`;
   waitForClick; clearText; marker; sound(`C2S244`); appendText; 
   Sora`"If they lose all of these, they lose the 
ability to tell whether this world exists, 
or not."`;
   waitForClick; clearText; marker; sound(`C2S245`); appendText; 
   Sora`"Another way of putting it might be to say 
that the perspective is in the eye of the 
beholder."`;
   waitForClick; clearText; marker; sound(`C2S246`); appendText; 
   Sora`"In this instance, I don't mean just sight, 
but hearing, smell, taste , touch ? all of 
the senses."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S247`); appendText; 
   Sora`"The point at which we perceive the world ? 
that is perspective."`;
   waitForClick; clearText; marker; sound(`C2S248`); appendText; 
   Sora`"And I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S249`); appendText; 
   Sora`"I...I am the same as the moon."`;
   waitForClick; clearText; marker; sound(`C2S250`); appendText; 
   Sora`"Do you understand?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I had been able to get the gist of 
what she meant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still...I didn't know exactly what she 
meant by...'I am the same as the moon.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mustered an image of a silvery blue moon, 
its light piercing through the dark night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I see...that's what she means.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The answer came to me surprisingly quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The moon didn't bark like a dog, it didn't 
smell, and it didn't taste tart like an 
apple ? at least not as far as I knew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only way to be sure of the existence of 
the moon was through its small gravitational 
pull and its blue-white light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking of it in that way, the mysterious 
charm of the moon and its transience were 
things that Sora shared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I believed the moon was there, so it was 
there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I believed that Sora was there, and 
she was there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe that was what Sora wanted to say.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. I understand."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I answered.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora's eyes lit up and her cheeks wrinkled 
into a big smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And, it may have been my imagination, but from 
somewhere I thought I smelled the tart scent 
of an apple.`;
   waitForClick; clearText; 
});
let lbl_00000241;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`S_2D`);
