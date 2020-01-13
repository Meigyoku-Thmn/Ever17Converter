showTextbox();
text(() => {
   marker; sound(`C2T000`); appendText; 
   Sora`"Someone sees me."`;
   waitForClick; clearText; marker; sound(`C2T001`); appendText; 
   Sora`"That action allows me to manifest myself for 
the first time."`;
   waitForClick; clearText; marker; sound(`C2T002`); appendText; 
   Sora`"On that eye, that visual point."`;
   waitForClick; clearText; marker; sound(`C2T003`); appendText; 
   Sora`"That someone's eye actually creates me."`;
   waitForClick; clearText; marker; sound(`C2T004`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`C2T005`); appendText; 
   Sora`"When you close your eyes, I disappear."`;
   waitForClick; 
});
l_d0 = 1;
if (l_is_coco_route == 0) goto(lbl_0000008c);
if (l_coco_point != 3) goto(lbl_0000008c);
goto(lbl_00000097);
let lbl_0000008c;
l_d0 = 0;
let lbl_00000097;
choice(
   cond(l_d0 != 0)`Try it.`,
   `......`
);
switch (l_choice) {
   case 0: goto(lbl_000000ba);
   case 1: goto(lbl_000000c9);
}
let lbl_000000ba;
l_coco_point += 1;
goto(lbl_0000012b);
let lbl_000000c9;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"......."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said nothing, and nothing happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, it would be better to say that I couldn't 
say or do anything more.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard for me to grasp the meaning of 
Sora's words.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A3`, transition: 20 });
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Going into the room, I could hear the beeping 
of the console, indicating someone was 
calling. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C238`); appendText; 
   Sora`"Well, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T2C239`); appendText; 
   Sora`"LeMMIH is calling for me, so I will leave 
and then come back shortly."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And saying that, Sora disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the three-dimensional hologram 
depicting LeMU hovered silently in the 
darkness.`;
   waitForClick; clearText; 
});
goto(lbl_00000311);
let lbl_0000012b;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"When I close my eyes...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried closing my eyelids halfway.`;
   waitForClick; clearText; 
});
hideTextbox();
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
delay({ interval: 60 });
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
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
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And suddenly, without a sound, Sora returned.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled gently.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora...?"`;
   waitForClick; clearText; marker; sound(`C2T006`); appendText; 
   Sora`"Yes...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no real meaning in my question.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was just that I wanted to see 
whether or not she would answer me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Given her fragile existence, there seemed to 
be a danger that she might slip away at any 
moment...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was uneasy about it, and at the same time 
felt a sort of awe about the mystery of it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T007`); appendText; 
   Sora`"Is there anything else? Please don't stare 
at me like that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was blushing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh...no. Nothing else."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora pinched her lips closed, as if she were 
slightly embarrassed.`;
   waitForClick; clearText; marker; sound(`C2T008`); appendText; 
   Sora`"By the way, Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T009`); appendText; 
   Sora`"Takeshi...have you ever seen the moon?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The question came out of nowhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was one that caused me to burst out 
laughing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ha, ha, ha! Yeah, of course I have."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I replied, immediately.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T010`); appendText; 
   Sora`"Well, now let's say that you have seen a full 
moon."`;
   waitForClick; clearText; marker; sound(`C2T011`); appendText; 
   Sora`"And let's say that you closed your eyes. Do 
you think that moon would still be there?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why are you asking such obvious questions?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course it would."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T012`); appendText; 
   Sora`"And how about if everyone in the world 
closed their eyes all at the same time?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't know what your point is, but...even if 
everyone in the world closed their eyes, the 
moon wouldn't disappear."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T013`); appendText; 
   Sora`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah."`;
   waitForClick; clearText; marker; sound(`C2T014`); appendText; 
   Sora`"How can you be sure?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just open your eyes and check, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T015`); appendText; 
   Sora`"That goes against the purpose of this 
exercise."`;
   waitForClick; clearText; marker; sound(`C2T016`); appendText; 
   Sora`"My question was whether there is any way 
of measuring whether or not the moon 
exists, if someone closes their eyes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`C2T017`); appendText; 
   Sora`"When you close your eyes, do you think this 
world still exists?"`;
   waitForClick; clearText; marker; sound(`C2T018`); appendText; 
   Sora`"What if I told you that not only myself, but 
all of LeMU was nothing but an RSD-generated 
illusion.....what would you do then?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"... Huh?"`;
   waitForClick; clearText; marker; sound(`C2T019`); appendText; 
   Sora`"Can you prove that the walls, the ceiling 
and all of the scenery that you are 
witnessing actually exist?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is everything I'm looking at...is it 
RSD...???)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I panicked, glancing around at my surroundings.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T020`); appendText; 
   Sora`"Ha, ha, I'm sorry, I was only joking."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's a joke?"`;
   waitForClick; clearText; marker; sound(`C2T021`); appendText; 
   Sora`"Yes, LeMU really does exist."`;
   waitForClick; clearText; marker; sound(`C2T022`); appendText; 
   Sora`"You sounded so full of confidence when you 
answered...I thought I would tease you 
just a bit."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora giggled, covering her mouth.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T023`); appendText; 
   Sora`"However, I can say this..."`;
   waitForClick; clearText; marker; sound(`C2T024`); appendText; 
   Sora`"For humans to know the world around them 
they must use one of their five senses."`;
   waitForClick; clearText; marker; sound(`C2T025`); appendText; 
   Sora`"If they lose all of these, they lose the 
ability to tell whether this world exists, 
or not."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T026`); appendText; 
   Sora`"Another way of putting it might be to say 
that the perspective is in the eye of the 
beholder."`;
   waitForClick; clearText; marker; sound(`C2T027`); appendText; 
   Sora`"In this instance, I don't mean just sight, 
but hearing, smell, taste, touch - all of the 
senses."`;
   waitForClick; clearText; marker; sound(`C2T028`); appendText; 
   Sora`"The point at which we perceive the world - 
that is perspective."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T029`); appendText; 
   Sora`"And I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T030`); appendText; 
   Sora`"I....I am the same as the moon."`;
   waitForClick; clearText; marker; sound(`C2T031`); appendText; 
   Sora`"Do you understand?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I had been able to get the gist 
of what she meant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still...I didn't know exactly what she meant 
by... 'I am the same as the moon.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mustered an image of a silvery blue moon, 
its light piercing through the dark night.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `IMG05C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(I see...that's what she means.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The answer came to me surprisingly quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The moon didn't bark like a dog, it didn't 
smell, and it didn't taste tart like an 
apple - at least not as far as I knew.`;
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
   Narr`I believed that Sora was there, and she was 
there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe that was what Sora wanted to say.`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Aah, I got it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was how I answered.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora's eyes lit up and her cheeks wrinkled 
into a big smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And, it may have been my imagination, 
but from somewhere I thought I smelled 
the tart scent of an apple.`;
   waitForClick; clearText; 
});
let lbl_00000311;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
clock(`19:5`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After seeing Sora off to the Control Room...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have anything in particular to do, 
so I wandered aimlessly down the corridors of 
Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ahead of me I could see the door leading to 
the Lemurian Ruins. The door was open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Walking by, I glanced briefly inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw someone.`;
   waitForClick; clearText; 
});
if (l_is_coco_route == 0) goto(lbl_000003cd);
if (l_coco_point != 4) goto(lbl_000003cd);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Huh? Who's that?)`;
   waitForClick; 
});
choice(
   `I was curious`
   `I didn't really care`
);
switch (l_choice) {
   case 0: goto(lbl_000003b9);
   case 1: goto(lbl_000003d2);
}
let lbl_000003b9;
l_coco_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was curious, so I ducked inside the room 
with the ruins.`;
   waitForClick; clearText; 
});
goto(lbl_000003eb);
let lbl_000003cd;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Hmm. Who is in here?)`;
   waitForClick; clearText; 
});
let lbl_000003d2;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Ah... who cares.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not paying it any more of my attention, I 
quickly passed by the entrance.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And, letting my legs lead the way, I roamed 
without any destination in mind. Eventually I 
ended up resting on a bed in the infirmary 
staring out into the ocean depths...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And before I knew it a few hours had passed...`;
   waitForClick; clearText; 
});
goto(lbl_0000079c);
let lbl_000003eb;
bgload({ name: `BG04B1`, transition: 20 });
setSceneTitle({ index: 104 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It turned out the figures in the room were 
You and Coco.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADS`, name2: `CO12ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You had been leaning up against the stone wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the palm of You's hand was...some kind of 
journal or notebook. She had it opened and 
was staring at a page.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was standing next to her, busily peering 
over her shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of them were flush up against one 
another, speaking in two and three word 
sentences. They looked like they were having 
fun.`;
   waitForClick; clearText; marker; sound(`PIPI_09`); appendText; 
   Pipi`"Wow! Wow! Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`From out of nowhere Pipi appeared and rushed 
up to my legs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted up the sopping wet Pipi, and went 
over to stand by the two girls.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What'cha looking at?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood beside them and asked.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and Coco looked up and noticed me.`;
   waitForClick; clearText; marker; sound(`C2T032`); appendText; 
   Coco`"Um, uh, we were um, looking at these 
pictures."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Pictures?"`;
   waitForClick; clearText; marker; sound(`C2T033`); appendText; 
   You`"You want to see them?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sure."`;
   waitForClick; clearText; marker; sound(`C2T034`); appendText; 
   You`"Okay, I'll show you."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What You handed over to me was neither 
journal, nor notebook - it was a single file.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One small enough to fit in the palm of a hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was already open, and had several pictures 
taken from an instant camera stuffed between 
the pages. `;
   waitForClick; clearText; marker; appendText; 
   Narr`They were baby pictures.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It can't be..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your baby!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T035`); appendText; 
   You`"Nooo stupid!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You rapped me on the head.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T036`); appendText; 
   You`"I'm 18, okay? And I'm single. Single!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, right..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Which means that this baby is...?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T037`); appendText; 
   Coco`"It's Nakkyu, dummy."`;
   waitForClick; clearText; marker; sound(`C2T038`); appendText; 
   Coco`"These are from when Nakkyu was a little bitty 
baby!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So this is what you were laughing about?"`;
   waitForClick; clearText; marker; sound(`C2T039`); appendText; 
   You`"Something wrong with that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T040`); appendText; 
   You`"I mean they're adorable, right? My baby 
pictures."`;
   waitForClick; clearText; marker; sound(`C2T041`); appendText; 
   You`"Uh, and of course, the fact that I'm cute 
hasn't changed a bit, you know."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T042`); appendText; 
   You`"Oh and...um...can you hand those back?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And saying that You snatched the file out of 
my hands...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `CO12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T043`); appendText; 
   You`"This picture is from when I was dressed up 
in a kimono as a kid..."`;
   waitForClick; clearText; marker; sound(`C2T044`); appendText; 
   You`"And in this, I was head cheerleader for an 
all school athletic event."`;
   waitForClick; clearText; marker; sound(`C2T045`); appendText; 
   You`"And.... Oh, this one's from my first day of 
middle school."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You continued to flip through the pages.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T046`); appendText; 
   You`"And here's one that I took at the talent 
show my freshman year in High School."`;
   waitForClick; clearText; marker; sound(`C2T047`); appendText; 
   You`"Here's Keiko, Min-min, Betty, Chi-chan, Beef 
Yamamoto.... Oh, and couldn't forget my 
teacher, right?"`;
   waitForClick; clearText; marker; sound(`C2T048`); appendText; 
   You`"And the firework competition....here's my 
trip to the hot springs... Oh! And one from 
that time I stayed at Ami-chan's!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T049`); appendText; 
   You`"And here we have... Huh? What is this?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T050`); appendText; 
   You`"Oooh, that's riiight. This is when we 
sneaked into school that one night..."`;
   waitForClick; clearText; marker; sound(`C2T051`); appendText; 
   You`"And of course the graduation ceremony.... 
There was one more...uuummm..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T052`); appendText; 
   You`"Here it is, heh, heh, it's hideous, right? 
I'd been crying and crying..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`So much of You's history was there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Smiling faces, sad faces, silly faces, 
surprised faces, even shy faces...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were girlfriends, boyfriends, teachers, 
people, afternoons, nights, good times and 
hard times...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It goes without saying, but shown in those 
photos were people I didn't know, places I 
didn't know, and a You that I didn't know.`;
   waitForClick; clearText; marker; sound(`C2T053`); appendText; 
   You`"Oh, and, and..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked like she had no intention of 
stopping, so I rushed to get a word in.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Um, You? So what is this like your life's 
history album or something?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T054`); appendText; 
   You`"A history album...Well I've never called it 
that before..."`;
   waitForClick; clearText; marker; sound(`C2T055`); appendText; 
   You`"But if you had to label it, I guess you 
could call it that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, so why are you carrying that with you?"`;
   waitForClick; clearText; marker; sound(`C2T056`); appendText; 
   You`"Huh? Why do you even need to ask?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T057`); appendText; 
   Coco`"Takepyon, you don't know? All girls carry 
around things like this. It's normal."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't say?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T058`); appendText; 
   You`"Yeah."`;
   waitForClick; clearText; marker; sound(`C2T059`); appendText; 
   Coco`"Well, all the girls I know carry them around."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Come to think about it, I'd heard rumors of 
something like that before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I wouldn't have expected it to be 
anything more than a fleeting fad. There was 
no way I had any idea it was a deep-rooted 
girl tradition.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This album had probably been in with You's 
things from the changing room.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T060`); appendText; 
   You`You murmured softly to herself as she flipped 
through the pages.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wonder what everyone is doing right about 
now...`;
   waitForClick; clearText; marker; sound(`C2T061`); appendText; 
   You`"Do any of these people ever worry about me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T062`); appendText; 
   Coco`"Oh, yeah..."`;
   waitForClick; clearText; marker; sound(`C2T063`); appendText; 
   Coco`"Do you live with your mom and dad, Takepyon?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Eh?"`;
   waitForClick; clearText; marker; sound(`C2T064`); appendText; 
   Coco`"Or do you live by yourself?"`;
   waitForClick; 
});
choice(
   `I'm living with my parents`
   `I live alone`
);
switch (l_choice) {
   case 0: goto(lbl_0000063e);
   case 1: goto(lbl_00000647);
}
let lbl_0000063e;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I'm living with my parents."`;
   waitForClick; clearText; marker; sound(`C2T065`); appendText; 
   Coco`"So, I'll bet your mom and dad are worried 
about you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, they're parents. Parents worry, it's 
what they're good at..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Buuut, that's only if they know we're stuck 
in here."`;
   waitForClick; clearText; marker; sound(`C2T066`); appendText; 
   Coco`"Well, they've got to know."`;
   waitForClick; clearText; marker; sound(`C2T067`); appendText; 
   Coco`"An accident as big as this? It's probably 
all over the news. They might even be doing a 
huge TV special about it."`;
   waitForClick; clearText; 
});
goto(lbl_00000663);
let lbl_00000647;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I live by myself."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I get a phone call every couple of months 
from home and I don't really call them much 
myself."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So....there's probably no way that my 
parents know that I'm trapped in a place like 
this."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T068`); appendText; 
   You`"That's not true! They've got to know."`;
   waitForClick; clearText; marker; sound(`C2T069`); appendText; 
   You`"An accident as big as this? It's probably 
all over the newspapers and television."`;
   waitForClick; clearText; 
});
let lbl_00000663;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"You think so? I'm not sure about that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You kept flipping through the pages.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't seem like she was very interested 
in what I had to say.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How about you, Coco? You're probably still 
living with your parents, aren't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T070`); appendText; 
   Coco`"Well I'm 14 aren't I? Of course I am."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T071`); appendText; 
   Coco`"Ah, well, right now my dad isn't at home, 
but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm? Why not?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T072`); appendText; 
   Coco`"Because he's on a 'business trip,' that's 
why."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, I see."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"And what about you, You? Are you living with 
your parents or...?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `CO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Oh! Duh! Why did I ask that!?) ? I realized 
it'd been a mistake to ask that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's dad had been missing for 17 years.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked You's expression.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't seem as if she cared one way or 
another.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T073`); appendText; 
   You`"I'm living with my mom."`;
   waitForClick; clearText; marker; sound(`C2T074`); appendText; 
   You`"But I doubt she's really worried about me."`;
   waitForClick; clearText; marker; sound(`C2T075`); appendText; 
   You`"That's just the kind of person she is, my 
mom..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`C2T076`); appendText; 
   You`"I guess you could call her a positive 
thinker.... She isn't the type to really let 
herself get caught up in things."`;
   waitForClick; clearText; marker; sound(`C2T077`); appendText; 
   You`"She doesn't care if I stay out all night..."`;
   waitForClick; clearText; marker; sound(`C2T078`); appendText; 
   You`"I've been living with her for 18 years... but 
she's never raised her voice at me once."`;
   waitForClick; clearText; marker; sound(`C2T079`); appendText; 
   You`"I grew up pretty much doing whatever I 
wanted."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T080`); appendText; 
   You`"I suppose that's why I turned out the way I 
did."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You showed me a page from her album that she'd 
turned to.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was You with putting the hurt on some 
wrestler.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the guy looked like a bulky jock of sorts.`;
   waitForClick; clearText; marker; sound(`C2T081`); appendText; 
   You`"So..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this as she snapped the album shut.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `CO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T082`); appendText; 
   You`"Hey, Coco? You want to go take a nap?"`;
   waitForClick; clearText; marker; sound(`C2T083`); appendText; 
   You`"I don't know why, but....yaaawn....I'm kind 
of tired all of a sudden..."`;
   waitForClick; clearText; marker; sound(`C2T084`); appendText; 
   Coco`"Okay, let's take a nap."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `CO05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T085`); appendText; 
   You`"I wonder why I'm so tired this early?"`;
   waitForClick; clearText; marker; sound(`C2T086`); appendText; 
   You`"Right, Coco?"`;
   waitForClick; clearText; marker; sound(`C2T087`); appendText; 
   Coco`"Right, Nakkyu?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and Coco looked over at me disapprovingly 
and, fighting off yawns...they both left the 
room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding Pipi, I watched the two disappear from 
sight.`;
   waitForClick; clearText; 
});
let lbl_0000079c;
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`T_2D`);
