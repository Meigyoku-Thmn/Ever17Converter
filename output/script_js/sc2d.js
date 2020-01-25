l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S218)`"Someone sees me."`;
   Sora(C2S219)`"That action allows me to manifest myself for the first time."`;
   Sora(C2S220)`"On that eye, that visual point."`;
   Sora(C2S221)`"That someone's eye actually creates me."`;
   Sora(C2S222)`"Kid..."`;
   Sora(C2S223)`"When you close your eyes, I disappear."`;

});
choice(
   `Try it`,
   `Don't do anything`,
);
switch (l_choice) {
   case 0: goto(lbl_000000c5);
   case 1: goto(lbl_0000007d);
}
let lbl_0000007d;
showTextbox();
text(() => {
   Kid`"..."`;
   `I didn't say or do anything.`;
   `No, it would be better to say that I couldn't say or do anything.`;

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
   `Eventually we reached the Conference Room.`;
   `Sora's face was one big smile.`;
   `But somewhere in her smile seemed a hint of sadness.`;
   `At least...it appeared that way to me.`;

});
goto(lbl_00000241);
let lbl_000000c5;
l_coco_point += 1;
showTextbox();
text(() => {
   Kid`"When I close my eyes...?"`;
   `I decided to test it and covered my eyes with one hand.`;

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
   `Instantly, Sora vanished.`;
   `If Sora did exist, I should have been able to see her head above my hand and her feet below.`;
   `But Sora wasn't there.`;
   `My hand kept the laser from reaching my eye, so I couldn't see Sora.`;
   `Something about it made her seem fragile and temporary. It scared me.`;
   `I quickly put down my hand.`;

});
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Her beautiful image appeared without a sound.`;
   `She smiled gently.`;
   Kid`"Sora...?"`;
   Sora(C2S224)`"Yes...?"`;
   `There was no real meaning in my question.`;
   `Maybe it was just that I wanted to see whether or not she would answer me.`;
   `Given her fragile existence, there seemed to be a danger that she might slip away at any moment...`;
   `I was uneasy about it, and at the same time felt a sort of awe about the mystery of it.`;
   `I felt drawn to her.`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S225)`"Is there anything else? Please don't stare at me like that."`;
   `Sora was blushing.`;
   Kid`"Oh...no. Nothing else."`;
   `Sora pinched her lips closed, as if she were slightly embarrassed.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S226)`"By the way, Kid..."`;
   Kid`"Yeah?"`;
   Sora(C2S227)`"Kid...have you ever seen the moon?"`;
   `The question came out of nowhere.`;
   `My mind switched tracks and starting looking for an appropriate answer.`;
   Kid`"Uh...the moon, huh...?"`;
   Kid`"I don't suppose this is a question I should have to think about, but..."`;
   Kid`"But having lost my memory and all..."`;
   Kid`"I can't say for sure that I've seen it."`;
   Kid`"But...I know what the moon is...and I'm pretty sure that I have seen it."`;
   Sora(C2S228)`"I see."`;

});
showTextbox();
text(() => {
   Sora(C2S229)`"Well, now let's say that you have seen a full moon."`;

});
showTextbox();
text(() => {
   Sora(C2S230)`"And let's say that you closed your eyes. Do you think that moon would still be there?"`;
   Kid`"Ha, ha. That's easy."`;
   Kid`"Of course it would."`;

});
showTextbox();
text(() => {
   Sora(C2S231)`"And how about if everyone in the world closed their eyes all at the same time?"`;
   Kid`"I don't know what you are getting at, but..."`;
   Kid`"Even if everyone in the world closed their eyes, the moon wouldn't disappear."`;

});
showTextbox();
text(() => {
   Sora(C2S232)`"Really?"`;
   Kid`"Yes."`;
   Sora(C2S233)`"How can you be sure?"`;
   Kid`"Just open your eyes and you can tell, right?"`;

});
showTextbox();
text(() => {
   Sora(C2S234)`"That goes against the purpose of this exercise."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S235)`"My question was whether there is anyway of measuring whether or not the moon exists, if someone closes their eyes."`;
   Kid`"?"`;
   Sora(C2S236)`"When you close your eyes, do you think this world still exists?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S237)`"What if I told you that not only myself, but all of LeMU was nothing but an RSD ?generated illusion.....what would you do then?"`;
   Kid`"...Huh?"`;
   Sora(C2S238)`"Can you prove that the walls, the ceiling and all of the scenery that you are witnessing actually exist?"`;
   `(Is everything I'm looking at...is it RSD...???)`;
   `I panicked, glancing around at my surroundings.`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S239)`"Ha, ha, I'm sorry, I was only joking."`;
   Kid`"That was a joke?"`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S240)`"Yes, LeMU really does exist."`;
   Sora(C2S241)`"You sounded so full of confidence when you answered...I thought I would tease you just a bit."`;
   `Sora giggled, covering her mouth.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S242)`"However, I can say this..."`;
   Sora(C2S243)`"For humans to know the world around them they must use one of their five senses."`;
   Sora(C2S244)`"If they lose all of these, they lose the ability to tell whether this world exists, or not."`;
   Sora(C2S245)`"Another way of putting it might be to say that the perspective is in the eye of the beholder."`;
   Sora(C2S246)`"In this instance, I don't mean just sight, but hearing, smell, taste , touch ? all of the senses."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S247)`"The point at which we perceive the world ? that is perspective."`;
   Sora(C2S248)`"And I..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2S249)`"I...I am the same as the moon."`;
   Sora(C2S250)`"Do you understand?"`;
   `I felt like I had been able to get the gist of what she meant.`;
   `Still...I didn't know exactly what she meant by...'I am the same as the moon.'`;
   `I mustered an image of a silvery blue moon, its light piercing through the dark night.`;
   `(I see...that's what she means.)`;
   `The answer came to me surprisingly quickly.`;
   `The moon didn't bark like a dog, it didn't smell, and it didn't taste tart like an apple ? at least not as far as I knew.`;
   `The only way to be sure of the existence of the moon was through its small gravitational pull and its blue-white light.`;
   `Thinking of it in that way, the mysterious charm of the moon and its transience were things that Sora shared.`;
   `I believed the moon was there, so it was there...`;
   `I believed that Sora was there, and she was there...`;
   `Maybe that was what Sora wanted to say.`;
   Kid`"Yeah. I understand."`;
   `That was what I answered.`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora's eyes lit up and her cheeks wrinkled into a big smile.`;
   `And, it may have been my imagination, but from somewhere I thought I smelled the tart scent of an apple.`;

});
let lbl_00000241;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
l_choice = 0;
jump(`S_2D`);
