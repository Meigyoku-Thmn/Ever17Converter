if (l_choice == 1) goto(lbl_000008d9);
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GRAY);
removeBG({ mode: BLACK, transition: 2 });
setSceneTitle({ index: 106 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In this world, where the boundaries between 
light and shadow blended, there was no sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The motion of white waves of darkness surged 
forward, permeating my skin and shaking my 
whole body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something...like a hard shell, began to 
resonate and to emit a black light from inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign that the waves would stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rather, they seemed to be getting stronger and 
stronger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A crack ran down the outer husk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It began to spread like the strands of a web, 
and soon covered the entire shell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pieces began to fall away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dropping...to the floor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was able to glimpse what lay beyond the shed 
husk...it was dazzling..`;
   waitForClick; clearText; marker; appendText; 
   Narr`Particles of light, whiter than white, filled 
the air and began to collect into one another.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light formed a vague image.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The image jumped into my field of view...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A fragment of a scene familiar to me.`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GRAY);
monoColorOverlay({ interval: 0, color: WHITE });
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 26 });
setDialogBoxColor(GREEN);
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I woke up in the middle of the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"—Eh!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"'Me!?'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why did I feel at such unease with 'me'?`;
   waitForClick; clearText; marker; appendText; 
   Narr`If you stare at something for a long time, it 
can seem to warp and change...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The unnaturalness I felt right then seemed a 
lot like that phenomenon.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As though I was taking something for granted 
that I shouldn't. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably just my mind playing tricks 
on me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And not thinking any more about it...I shook 
Coco's shoulder. She was next to me, asleep 
head down on the table.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, get up. It's morning."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A013`); appendText; 
   Coco`"Funyuu... hmmmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rubbing her eyes, Coco got up slowly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A014`); appendText; 
   Coco`"Oh, good morning...Brother..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, yeah. Coco, you have a brother? But, hey, 
you got the two of us mixed up..."`;
   waitForClick; clearText; marker; sound(`T3A015`); appendText; 
   Coco`"No...brother..."`;
   waitForClick; clearText; marker; sound(`T3A016`); appendText; 
   Coco`"We need to get ready or we'll be late for 
school..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was still half in dreamland.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Late for school?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about?"`;
   waitForClick; clearText; marker; sound(`T3A017`); appendText; 
   Coco`"Well, that's just the setting it is..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, listen..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop messing around, we're going to eat."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A018`); appendText; 
   Coco`"Ah... ... Okay, Takepyon."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When Coco and I made it to the kiosk, 
everyone had gathered there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi, Sora, You, and the Kid... all of them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I made my way into the submarine, and opened 
the door of the refrigerator in the sandwich 
shop.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spotted sausages hidden in the back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So, I decided to make everyone hotdogs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon after I'd made breakfast for everyone I 
leaned out over the counter and said...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, whoever wants to eat, get in line!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A027`); appendText; 
   Coco`"I'm first!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh!? Well, here ya go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A028`); appendText; 
   Coco`"Thank you!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Help yourself to ketchup and mustard."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A029`); appendText; 
   Kid`"Uh, I'd like one too..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A030`); appendText; 
   You`"Hey, wait in line! The next person is M-E-!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This was probably the way things usually were 
at this shop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There still wasn't any schedule as to when we 
might get out of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But in the meantime, we'd stopped thinking 
about the difficult and negative things.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A031`); appendText; 
   Kid`"I'm not sure why, but you look like you're 
having fun."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Who, me? You think so? Fun...I guess maybe..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `CO02ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A032`); appendText; 
   Coco`"Yeah, you look like might even be enjoying 
your life here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I wonder how that'd feel... I guess it'd be 
kind of fun, owning a stand like this!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A033`); appendText; 
   Kid`"Owning...a stand..."`;
   waitForClick; clearText; marker; sound(`T3A034`); appendText; 
   Coco`"Takepyon, you really do look like you work 
here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hot dogs, get your hotdogs! They're on the 
house!"`;
   waitForClick; clearText; marker; sound(`T3A035`); appendText; 
   Coco`"You don't think, that maybe you could have 
sold hotdogs in a past life?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Aw shucks, ma'am, you're just sayin' that..."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A036`); appendText; 
   You`"No, Coco, I don't think he was a hotdog man, 
I think he was..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A037`); appendText; 
   You`"... a sandwich man?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, come on, You!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A038`); appendText; 
   You`"A ha, ha, ha, ha..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The three of them took their hotdogs and 
laughing walked a short distance from the 
stand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And as if they had traded places, Tsugumi 
came up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A047`); appendText; 
   Tsugumi`"What just happened?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, everyone was eating hotdogs. Hey, I've 
got one for you too."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi took it without so much as a thank 
you, and went to the corner of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was talking with the Kid.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was a bit sad that I couldn't make anything 
for her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still leaning over I stuffed my hotdog 
greedily into my mouth, and watched everyone 
from where I was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was May 3rd—`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been three days since we'd been trapped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But everyone was bright, and showed no 
feeling of fatigue or sadness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Especially Coco—`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to believe that she had suffered 
so much that first night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For no reason, Coco was playing with Pipi's 
tail.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking at her smiling face, I suddenly 
remembered how we had bumped into each other 
again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After I got her out of the elevator, I seemed 
to remember...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `EV_CO02A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C1T024`); appendText; 
   Coco`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah!"`;
   waitForClick; clearText; marker; sound(`C1T025`); appendText; 
   Coco`"You're that guy from before!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're that girl from before!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl and I pointed at each 
other and froze.`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spotted the scruffy face of a dog circling 
around her feet.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Popo..."`;
   waitForClick; clearText; marker; sound(`C1T026`); appendText; 
   Coco`"His name's not 'Popo'..."`;
   waitForClick; clearText; marker; sound(`C1T027`); appendText; 
   Coco`"This little guy's name is Pipi, and my name's 
Coco....Try not to mix them up, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But...what are you doing here?"`;
   waitForClick; clearText; marker; sound(`C1T028`); appendText; 
   Coco`"Well, what do you expect me to say 
to that...?"`;
   waitForClick; clearText; marker; sound(`C1T029`); appendText; 
   Coco`"I was trying to go to one of the lower 
levels, and all of a sudden this escalator 
stopped, and..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It isn't an escalator, it's an elevator, 
alright?"`;
   waitForClick; clearText; marker; sound(`C1T030`); appendText; 
   Coco`"Ha, ha, oops.... I mean e-ve-lator, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, NOT e-ve-lator, E-LE-VA-TOR."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you're on a moving staircase, that's 
called an escalator, and if you're in a box 
that goes up and DOWN, now that's an 
elevator. Try not to mix them up."`;
   waitForClick; clearText; marker; appendText; 
   Coco`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; sound(`C1T031`); appendText; 
   Coco`"Does it really matter?"`;
   waitForClick; clearText; marker; sound(`C1T032`); appendText; 
   Coco`"Anyways, I don't know why, but all of a 
sudden I was trapped in this box."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really..."`;
   waitForClick; clearText; marker; sound(`C1T033`); appendText; 
   Coco`"Hey?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm?"`;
   waitForClick; clearText; marker; sound(`C1T034`); appendText; 
   Coco`"I'd kind of like to get out of here...soon..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, aah, I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said that and got down on my stomach from 
atop the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I leaned down from the small hole, and stuck 
my hand out to Coco.`;
   waitForClick; clearText; marker; sound(`C1T035`); appendText; 
   Coco`"Please, help Pipi first."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco held up Pipi to me, stretching as far as 
she could to make him reach.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed onto Pipi's front legs, and pulled 
him out from the hole in the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, next it's your turn, Coco."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stuck out my hand again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T036`); appendText; 
   Coco`"Aia! Wah! Ayah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco jumped over and over, reaching out for 
my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But... Either she was too short, or just had a 
terrible jump, because she didn't even reach 
my fingertips.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T044`); appendText; 
   Coco`"Toriiyaa!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T045`); appendText; 
   Coco`"Uuuriya!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T046`); appendText; 
   Coco`"Eeeiii!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T047`); appendText; 
   Coco`"Yaah!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T048`); appendText; 
   Coco`"Waachooo!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next I looked over to where Sora was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was standing next to 'The Kid,' and 
talking with Tsugumi about something. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't hear what they were talking about 
from where I was, behind the counter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora Akanegasaki——.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to believe she was only an 
illusion generated by RSD...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stared at her again, from a distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about what we'd talked about the day 
before......`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG15B1`, transition: 26 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`C2T008`); appendText; 
   Sora`"By the way, Takeshi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T009`); appendText; 
   Sora`"Takeshi...have you ever seen the moon?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ha, ha, ha! Yeah, are you kidding?"`;
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
   Takeshi`"I don't know what your point is, but...even 
if everyone in the world closed their eyes, 
the moon wouldn't disappear."`;
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
   Sora`"My question was whether there is any way of 
measuring whether or not the moon exists, if 
someone closes their eyes."`;
   waitForClick; clearText; marker; sound(`C2T017`); appendText; 
   Sora`"When you close your eyes, do you think this 
world still exists?"`;
   waitForClick; clearText; marker; sound(`C2T018`); appendText; 
   Sora`"What if I told you that not only myself, but 
all of LeMU was nothing but an RSD-generated 
illusion.....what would you do then?"`;
   waitForClick; clearText; marker; sound(`C2T019`); appendText; 
   Sora`"Can you prove that the walls, the ceiling 
and all of the scenery that you are 
witnessing actually exist?"`;
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
   Sora`"You sounded so full of confidence when 
you answered...I thought I would tease 
you just a bit."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T023`); appendText; 
   Sora`"However, I can say this."`;
   waitForClick; clearText; marker; sound(`C2T024`); appendText; 
   Sora`"For humans to know the world around them 
they must use one of their five senses."`;
   waitForClick; clearText; marker; sound(`C2T025`); appendText; 
   Sora`"If they lose all of these, they lose the 
ability to tell whether this world exists, or 
not."`;
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
but hearing, smell, taste, touch - all of 
the senses."`;
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
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her existence disappeared when I close my 
eyes...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I felt that Sora had just as much as, no, 
maybe even more human warmth, and caring than 
the rest of us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then again, there was Tsugumi's coldness...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG22A3`, transition: 26 });
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`T1C121`); appendText; 
   Tsugumi`"Hmmm...? I guess you're not as dumb as you 
look."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean by that?"`;
   waitForClick; clearText; marker; sound(`T1C122`); appendText; 
   Tsugumi`"I mean exactly what I said."`;
   waitForClick; clearText; marker; sound(`T1C123`); appendText; 
   Tsugumi`"You don't look that smart."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C124`); appendText; 
   Tsugumi`"This is a trap."`;
   waitForClick; clearText; marker; sound(`T1C125`); appendText; 
   Tsugumi`"And you probably aren't going to get out."`;
   waitForClick; clearText; marker; sound(`T1C126`); appendText; 
   Tsugumi`"No, not just you, but everyone else as well, 
all four of them."`;
   waitForClick; clearText; marker; sound(`T1C127`); appendText; 
   Tsugumi`"You're all the same."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, what about you then, Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C128`); appendText; 
   Tsugumi`"I......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C129`); appendText; 
   Tsugumi`"Yeah. I suppose I could die in a place like 
this."`;
   waitForClick; clearText; marker; sound(`T1C130`); appendText; 
   Tsugumi`"It wouldn't be bad at all, I guess."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I couldn't forget the cold smile that she had 
on her face as she said those words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was thinking this and looking at her. I 
wasn't sure if she could feel my gaze, but 
she turned to look over at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason I felt like she could see 
what I was thinking and I avoided her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next person to jump into my field of view 
was You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had finished eating her hotdog and 
dancing, hand in hand, with Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it were some kind of folk dance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled so wide it seemed her face might 
split, and laughed boisterously.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes shone so brightly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I knew...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Behind those eyes was hidden a past filled 
with sadness......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her father had disappeared 17 years earlier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about the talk I'd had with You the 
day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe the reason she carried that album 
around with her was she wanted something to 
connect her with the memories of her father.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I'd bumped into You and Coco in front of the 
Ruins of Lemuria yesterday (May 2nd).`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the palm of You's hand was... some kind of 
journal or notebook. She had it opened and was 
staring at a page.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was standing next to her, busily peering 
over her shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What'cha looking at?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T032`); appendText; 
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
   Narr`One small enough to fit in the palm of my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was already open, and had several pictures 
taken from an instant camera stuffed between 
the pages.`;
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
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
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
   Coco`"These are from when Nakkyu was a litte bitty 
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
show my freshman year in high school."`;
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
   You`"And of course the graduation 
ceremony...There was one more... uuummm..."`;
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
   You`"A history album.... Well, I've never called 
it that before..."`;
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
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T060`); appendText; 
   You`"I wonder what everyone is doing right about 
now...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You murmured softly to herself as she flipped 
through the pages.`;
   waitForClick; clearText; marker; sound(`C2T061`); appendText; 
   You`"Do any of these people ever worry about me?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T062`); appendText; 
   Coco`"Oh, yeah..."`;
   waitForClick; clearText; marker; sound(`C2T063`); appendText; 
   Coco`"Do you live with your mom and dad, Takepyon?"`;
   waitForClick; clearText; marker; sound(`C2T064`); appendText; 
   Coco`"Or do you live by yourself?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco threw the question at me abruptly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before answering I tossed the question back.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How about you, Coco? You're probably still 
living with your parents, aren't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T070`); appendText; 
   Coco`"Well, I'm 14 aren't I? Of course I am."`;
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
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2T072`); appendText; 
   Coco`"Because he's on a 'business trip,' that's 
why."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, I see."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And what about you, You? Are you living with 
your parents or..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh! Duh! Why did I ask that!?) ? I realized 
it'd been a mistake to ask that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's dad was missing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't seem as if she cared one way or 
another.`;
   waitForClick; clearText; marker; sound(`C2T073`); appendText; 
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
thinker... She isn't the type to really let 
herself get caught up in things."`;
   waitForClick; clearText; marker; sound(`C2T077`); appendText; 
   You`"She doesn't care if I stay out all night..."`;
   waitForClick; clearText; marker; sound(`C2T078`); appendText; 
   You`"I've been living with her for 18 years... 
but she's never raised her voice at me once."`;
   waitForClick; clearText; marker; sound(`C2T079`); appendText; 
   You`"I grew up pretty much doing whatever I 
wanted."`;
   waitForClick; clearText; marker; sound(`C2T080`); appendText; 
   You`"I suppose that's why I turned out the way I 
did."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You showed me a page from her album that she'd 
turned to.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was You with putting the hurt on some 
wrestler.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the guy looked like a bulky jock of sorts.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coming out of my reveries, I noticed the 
scene had changed a bit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and the kid had taken off somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe they'd gone to the rest area next door.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's only been two days and so much 
has happened..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just being trapped here is an unusual 
state of affairs..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said these words to myself without thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then——!`;
   waitForClick; clearText; 
});
stopBGM();
goto(lbl_0000091d);
let lbl_000008d9;
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boooom.....`;
   waitForClick; clearText; marker; appendText; 
   Narr`BOOOOooooooom.....`;
   waitForClick; clearText; marker; appendText; 
   Narr`BOOOOOOOOOOOooooooooooom.....`;
   waitForClick; clearText; marker; appendText; 
   Narr`BOOOOOOOOOOOOOOOOOOOOOOOOOOOM.....`;
   waitForClick; clearText; marker; appendText; 
   Narr`BAM.`;
   waitForClick; clearText; 
});
bgload({ name: `BG07B1`, transition: 20 });
setDialogBoxColor(GREEN);
let lbl_0000091d;
setSceneTitle({ index: 107 });
clock(`6:43`);
playSFX({ name: `SE06_04`, a1: 0, volume: 92 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`BABOOOOMM!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, a low metallic sound reverberated 
throughout the installation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a dull, muffled sound.`;
   waitForClick; clearText; 
});
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Wh-what was that!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A061`); appendText; 
   Tsugumi`"This whole place just shook...a little."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A001`); appendText; 
   Coco`"Sora! Sora!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco ran over to Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Clutched to her chest was Pipi...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was hugging him so hard he seemed about 
to rupture.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO17ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A003`); appendText; 
   Coco`"Hey, did something just happen? There was an 
awful sound just now."`;
   waitForClick; clearText; marker; sound(`C3A004`); appendText; 
   Sora`"One of the shafts that supports this floor 
has started to bend out of alignment."`;
   waitForClick; clearText; marker; sound(`C3A005`); appendText; 
   Sora`"It appears as if the ocean currents may have 
caused it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How dangerous are we talking about here?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A071`); appendText; 
   Sora`"Well, it should be within the margin of error 
but...no, wait a second."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A007`); appendText; 
   Sora`"There is an anomaly in one the of 
pressure-regulating pipelines, at 
Zweite stock's warehouse."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are pressure-regulating pipes?"`;
   waitForClick; clearText; marker; sound(`C3A008`); appendText; 
   Sora`"These pipelines are responsible for adjusting 
the pressure inside the multi-layered 
bulkheads comprising LeMU."`;
   waitForClick; clearText; marker; sound(`C3A010`); appendText; 
   Sora`"The anomaly is only slight, so you shouldn't 
have to hurry, but...I think it is best if 
someone goes to check on it. Would you 
please go for me?"`;
   waitForClick; clearText; marker; sound(`C3A009`); appendText; 
   Sora`"If any of them should rupture, for whatever 
reason, I am incapable of repairing them."`;
   waitForClick; clearText; marker; sound(`C3A011`); appendText; 
   Sora`"Would you please go for me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sure, leave it to me."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A076`); appendText; 
   Tsugumi`"I'll go too."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi? You sure?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A077`); appendText; 
   Tsugumi`"Well, if we're going to fix something, 
we'll need tools, right? I know my way 
around a workshop."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright.... Let's go."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A015`); appendText; 
   Coco`"I'll help too!"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   Pipi`"Woof."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, you can come too Coco..." `;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"By the way, does anyone know where You and 
the kid went?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A016`); appendText; 
   Sora`"You and the kid are in the Security Office."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the heck are they doing there...?"`;
   waitForClick; clearText; marker; sound(`C3A017`); appendText; 
   Sora`"They are trying to make contact with LeMMIH."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"With LeMMIH...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What am I thinking? I've got other things to 
worry about."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, the three of us are going to the 
warehouse..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora? Give You and the kid an update of the 
situation, will you?"`;
   waitForClick; clearText; marker; sound(`C3A018`); appendText; 
   Sora`"Understood."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG13B1`, transition: 26 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showFog2();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We opened up the door to the storage room to 
find the floor covered in water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water level came up to the tops of my 
shoes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the back of the room, we could hear a 
hissing sound coming from somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound drew our attention.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a faint crack in the 
pressure-regulating pipe, and water was 
dancing out of it in a fine mist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If that's all it was, it didn't seem like we 
had anything to worry about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like we'd be able to fix it in no 
time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi had opened up the toolbox that was in 
the corner of the room and started spreading 
a few tools out in front of her.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do we need to do?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A116`); appendText; 
   Tsugumi`"The pipe is bent a little bit...I'm going to 
clamp a metal sleeve on it, would you support 
the pipe for me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Roger that!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A020`); appendText; 
   Coco`"What should I do?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A118`); appendText; 
   Tsugumi`"On the other side of this...there should be 
a valve attached to this pipe. You see it? I 
want you to loosen that a bit."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A022`); appendText; 
   Coco`"Okaaaay, gotcha."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In this way, the three of us started working 
in unison.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We opened and closed the valves on a number 
of pipes, re-attached pipes and welded shut 
cracks...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`......`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`T3A125`); appendText; 
   Tsugumi`"Takeshi? Don't just stand there, on to the 
next pipe."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Oh, okay."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A126`); appendText; 
   Tsugumi`"First take that blue valve and..."`;
   waitForClick; clearText; marker; sound(`T3A127`); appendText; 
   Tsugumi`"After that I want you to turn the red 
valve..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We'd fixed a number of pipes, but the sound of 
escaping steam still hadn't stopped.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A128`); appendText; 
   Tsugumi`"Alright Coco, wait just a bit."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C3A027`); appendText; 
   Coco`"Okay, I'm ready."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A130`); appendText; 
   Tsugumi`"Takeshi, move the valves in the order I told 
you. Now."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A131`); appendText; 
   Tsugumi`"Hey, you listening Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Yeah, alright, alright. I'm sorry. Blue, 
then red, right?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A132`); appendText; 
   Tsugumi`"Yeah. Loosen then and shut them again."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I set myself upon the blue valve in front of 
me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was supposed to loosen this...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'm supposed to turn this counter-clockwise, 
yeah...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned the blue valve with all of my 
strength.`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sound of rushing steam grew softer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Alright, next close the red valve...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The steam dancing from the pipe grew weaker.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Alright, that does it.)`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A133`); appendText; 
   Tsugumi`"Coco, hold on just a little longer."`;
   waitForClick; clearText; marker; sound(`C3A032`); appendText; 
   Coco`"Okay."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Holding up her left hand to shield her face, 
Tsugumi operated the welding torch with her 
right hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The crack in the pipe closed visibly.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A138`); appendText; 
   Tsugumi`"Takeshi, after I weld this on, I want you to 
return the valves to their original positions 
right away."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi finished welding.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A139`); appendText; 
   Tsugumi`"Now turn it back! Fast!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright! Geez!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I quickly turned the valves in the opposite 
direction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel the steam flowing through the 
valve.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A140`); appendText; 
   Tsugumi`"Coco, this pipe's done. Go on to the next 
one."`;
   waitForClick; clearText; marker; sound(`C3A036`); appendText; 
   Coco`"Okay, where is it?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A142`); appendText; 
   Tsugumi`"Hmmm... hold on just a second."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The water underfoot still hadn't gone down at 
all and was swirling around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air conditioner on the wall was sucking 
in water and gurgling it out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It appeared it had also shorted out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see blue-white sparks jumping around 
inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I hope it doesn't shock me...)`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as I thought this...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setNumberOfFlash(2);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam!`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like the air conditioner was about 
to break apart.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Smoke started pouring out from the exhaust 
vent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And from the intake port, murky water started 
gurgling out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The area around my legs was quickly getting 
grimy.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A038`); appendText; 
   Tsugumi`"Water..."`;
   waitForClick; clearText; marker; sound(`C3A039`); appendText; 
   Tsugumi`"The water that was in the suction pipe is 
starting to backflow. Be careful."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Wagh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My leg got caught up in the jet of muddy 
water and I lost my balance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out to grab something...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I caught on to a stack of crates and old 
containers lying nearby.`;
   waitForClick; clearText; marker; appendText; 
   Narr`GR-OOAAN`;
   waitForClick; clearText; marker; appendText; 
   Narr`It made an ominous sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body draped awkwardly over the containers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my gaze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The top of the stack was wobbling precariously.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked to Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our eyes met. She was frozen in place, 
holding her breath.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I shot a glance over at Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had her back turned to me, and was 
grabbing on to a pipe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up at the ceiling again.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 1 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It all happened in an instant...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The containers, having lost their balance, 
started to rain down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chunks of metal...rusted pipes...thick iron 
cylinders...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sound. I perceived everything in 
vivid slow motion. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Countless pieces of metal, all pouring down 
quietly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although my mind was spinning, my body 
couldn't catch up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't talk. I couldn't move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Crashing metal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A raging monster...`;
   waitForClick; clearText; marker; appendText; 
   Narr`With its sight fixed on that small frame...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pouncing, devouring.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of it headed—`;
   waitForClick; clearText; marker; appendText; 
   Narr`for—`;
   waitForClick; clearText; marker; sound(`C3A040`); appendText; 
   Tsugumi`"—Co, Cocoo!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"COCOoo!!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C3A041`); appendText; 
   Coco`"Huh?"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_00`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 3, color: BLACK });
closeFog2();
waitForSFX();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sight that flashed before me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was a mountain of metal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The old pipes broke apart into thousands of 
pieces.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The containers splintered apart, their sharp 
corners flashing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I landed in the water - I'd thrown myself out 
of the way, arms and legs flailing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pipes on the wall were cracked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They had been damaged from the shock...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And out of the cracks, water was gushing out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And fallen nearby was`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fallen was...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU07A`, transition: 26 });
playBGM({ num: 12, volume: 100 });
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
eff_41 = 42;
eff_42 = 4;
eff_50 = 0;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"—Tsugumi!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran over to where she was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco looked around at the spectacle and 
hugged Pipi to her tightly, her hands 
trembling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes...I had seen it all...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just before the metallic objects had crashed 
down on Coco's back, Tsugumi had thrust her 
out of the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd protected her... while risking her own 
life...`;
   waitForClick; clearText; marker; sound(`C3A042`); appendText; 
   Tsugumi`"Agh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A metal shard had dug deeply into Tsugumi's 
right thigh. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like she could move.`;
   waitForClick; clearText; marker; sound(`C3A043`); appendText; 
   Tsugumi`"I guess I messed up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grimaced and pushed down on the wound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was losing a lot of blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The murky water was getting redder by the 
moment...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, you okay!?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A149`); appendText; 
   Tsugumi`"Heh, heh, does this LOOK okay to you?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A150`); appendText; 
   Tsugumi`"Always asking stupid questions."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"S-stop laughing! I'm going to get that stuff 
off you, just wait!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to lift the metal off of her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, no matter how hard I tried, the heavy 
chunk wouldn't budge.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn it!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A151`); appendText; 
   Tsugumi`"Looks like it's no use..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the meantime, the water level had risen 
from ankle to knee height.`;
   waitForClick; clearText; marker; sound(`C3A047`); appendText; 
   Coco`"Tsugumiii!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco started to rush over to Tsugumi.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A153`); appendText; 
   Tsugumi`"Get away from me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stung by Tsugumi's cold words, Coco 
stiffened and stopped.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A154`); appendText; 
   Tsugumi`"Get out of here, Coco!"`;
   waitForClick; clearText; marker; sound(`T3A155`); appendText; 
   Tsugumi`"You too Takeshi, get out while you can..."`;
   waitForClick; clearText; marker; sound(`T3A156`); appendText; 
   Tsugumi`"At this rate, this room's partitions won't 
last."`;
   waitForClick; clearText; marker; sound(`T3A157`); appendText; 
   Tsugumi`"You'll all die if you stay."`;
   waitForClick; clearText; marker; sound(`T3A158`); appendText; 
   Tsugumi`"So, hurry..."`;
   waitForClick; clearText; marker; sound(`T3A159`); appendText; 
   Tsugumi`"Get out of here."`;
   waitForClick; clearText; marker; appendText; 
   Coco`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"....But-"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stupid idiot!! You think I can just leave 
you!?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A160`); appendText; 
   Tsugumi`"There's nothing you can do, right? I'm stuck 
here."`;
   waitForClick; clearText; marker; sound(`T3A161`); appendText; 
   Tsugumi`"And with this injury, you can't help me 
anyway——"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I roared out.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I won't let you give up on me now, dammit!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey Coco! What are you standing there for!?"`;
   waitForClick; clearText; marker; sound(`C3A057`); appendText; 
   Coco`"Wah! Y-yes!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Get on that intercom and contact the others!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With all her might Coco moved her trembling 
legs to get closer to the intercom.`;
   waitForClick; clearText; marker; sound(`C3A058`); appendText; 
   Coco`"It's no use.... It's broken! I pushed the 
button, but nothing happens!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So run up and tell the others to get over 
here!"`;
   waitForClick; clearText; marker; sound(`C3A059`); appendText; 
   Coco`"O-okay, I'm going!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although she looked flustered, Coco nodded 
and ran off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door to the warehouse closed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon, water came up to the bottom of the door.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU07B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water continued to rise.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From her waist down, Tsugumi was almost 
completely underwater.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water level was almost over my knees.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A165`); appendText; 
   Tsugumi`"What are you trying to prove..."`;
   waitForClick; clearText; marker; sound(`T3A166`); appendText; 
   Tsugumi`"It doesn't mean anything... just leave. I 
don't want you here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wouldn't be here if there wasn't a reason."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't just leave you here."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A167`); appendText; 
   Tsugumi`"Why not?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've taken nothing but abuse from you, and 
you still haven't thanked me properly yet."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A168`); appendText; 
   Tsugumi`"Oh, really...heh, heh. Well, that's reason 
enough I suppose. "`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi laughed weakly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her lips were trembling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The murky water was spreading.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A169`); appendText; 
   Tsugumi`"It's gotten cold in here..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright Tsugumi...I need you to stay with me, 
now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I chose my words as carefully as possible.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A170`); appendText; 
   Tsugumi`"I'm perfectly sane."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You'll be okay. The wound isn't that deep, so 
don't worry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was lying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even I could tell that her wound was 
life-threatening.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's white femur had broken through and 
protruded from her flesh..`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A171`); appendText; 
   Tsugumi`"'You'll be okay', what makes you think that?"`;
   waitForClick; clearText; marker; sound(`T3A172`); appendText; 
   Tsugumi`"You're the one who's crazy..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm sorry, it's all my fault. I wasn't paying 
attention, and you got hurt..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopSFX()
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The water level was rising up to Tsugumi's 
head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A section of the partitioning had broken and 
seawater was rushing in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water was ice cold.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water volume increased mercilessly.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face contorted with pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In agony, she labored for breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There wasn't any time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Making up my mind, I dove into the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't open my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was search the bottom using my 
intuition.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(aaaaaAAAAGGGH!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(DAMN IT!!!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Using all of my strength, I heaved up the 
large mass of metal sticking into Tsugumi's 
leg.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Aided slightly by the buoyancy of the water, 
the metal hunk moved slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi pulled her leg out at once.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
eff_4f = 0;
eff_3b = 20;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 30;
eff_3f = VAR_cc_0_6;
eff_40 = 1;
openShakeScreenAnim();
bgloadCrop({ name: `EV_TU09A`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I lifted my face out of the water, gulping 
greedily for air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flooding wouldn't stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water level was already above my shoulders.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A173`); appendText; 
   Tsugumi`"You are..."`;
   waitForClick; clearText; marker; sound(`T3A174`); appendText; 
   Tsugumi`"Such a stubborn idiot..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up and just keep quiet."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With her leg injured, there was no way 
Tsugumi could swim.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding onto her, I headed for the exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the door was already under water.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A175`); appendText; 
   Tsugumi`"Look, there's no way you can save me..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I told you to keep quiet!"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's got to be another exit. I'll look for 
that."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"....."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It'll be okay. We'll find a way out of this."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A176`); appendText; 
   Tsugumi`"There you go again, saying 'It'll be 
okay'...you're so irresponsible..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Would you keep quiet!?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I probably could have forced open the door if 
I had tried, but it would have put the second 
floor in danger of flooding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I searched desperately for an emergency exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My legs wouldn't touch the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hardly breathe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was at my limit.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's a ladder! In the corner of the room, 
there's a ladder. We can use it to get to the 
emergency passage."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We're going to make it, Tsugumi!!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I burst into the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I set the injured Tsugumi down on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was no longer conscious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd lost so much blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had to take emergency measures immediately.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, what are we going to do!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A072`); appendText; 
   You`"Get out of the way!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, who'd been waiting in the room, pushed 
me out of the way.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A tourniquet was taken out from a rack of 
medical instruments on the wall, and fastened 
around Tsugumi's thigh.`;
   waitForClick; clearText; marker; sound(`C3A073`); appendText; 
   You`"This is bad..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's the status? How bad is it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Can't we use that scanner to check it out?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed to the 'L-MRI.'`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A074`); appendText; 
   You`"It doesn't work."`;
   waitForClick; clearText; marker; sound(`C3A075`); appendText; 
   You`"Sora already told us, it's broken!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh... yeah..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Well, what can we do... what are we..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A076`); appendText; 
   Sora`"I'll have a look."`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
playSFX({ name: `SE03_02`, a1: 1, volume: 90 });
waitForSFX();
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora put her hand on Tsugumi. A holographic 
window appeared in the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A small sensor, or camera started moving on 
the ceiling.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A077`); appendText; 
   Sora`"Well, this is just a bio scan, so I can't 
tell for certain, but..."`;
   waitForClick; clearText; marker; sound(`C3A078`); appendText; 
   Sora`"Her femur is fractured. And it looks like it 
might be compound."`;
   waitForClick; clearText; marker; sound(`C3A079`); appendText; 
   Sora`"That and the artery is severed. She'll need 
sutures."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A080`); appendText; 
   You`"I've stitched up my finger before. It was 
with a survival kit, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A081`); appendText; 
   Sora`"Well, You, do you think you can assist me?"`;
   waitForClick; clearText; marker; sound(`C3A082`); appendText; 
   You`"I'll do my best! Do we have anesthetic?"`;
   waitForClick; clearText; marker; sound(`C3A083`); appendText; 
   Sora`"I'll get it ready. The laser scalpel, 
forceps, and sutures ... everything we need 
is already in the room."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora moved the electric wagon, and used its 
robotic arm to gather the necessary surgical 
tools.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You flipped up Tsugumi's skirt, and fearlessly 
plunged her hand into the wound.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A084`); appendText; 
   You`"Takeshi!!"`;
   waitForClick; clearText; marker; sound(`C3A085`); appendText; 
   You`"You're in the way!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You pointed angrily at the exit.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, yeah, sorry...take care of her, okay!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A086`); appendText; 
   You`"Leave it to me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked determined to show us all what she 
was capable of.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
stopBGM();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as I left the tense atmosphere of the 
emergency room, my fatigue hit me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"*sigh*...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I set myself down on a nearby chair.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A087`); appendText; 
   Coco`"Is Tsugumi going to be..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was holding onto Pipi, but looked as if 
she was having a hard time relaxing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You let them know right away so... she 
should be fine."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A088`); appendText; 
   Coco`"Really...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's eyes were moist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to tell, but she had probably 
been crying moments earlier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even still, she tried to smile.`;
   waitForClick; clearText; marker; sound(`C3A089`); appendText; 
   Coco`"Hey, you think Tsugumi's..."`;
   waitForClick; clearText; marker; sound(`C3A090`); appendText; 
   Coco`"Tsugumi's...gonna be okay, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still looking worried, she tilted her head as 
she asked me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. She'll be fine."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Absolutely okay...?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco put her head on my shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held Coco close, and patted her head softly.`;
   waitForClick; clearText; marker; sound(`C3A091`); appendText; 
   Coco`"She's going to be okay right? Right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her body trembling, she asked me this over 
and over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought maybe she had been trying not to 
cry until that moment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco, head pressed against my chest started 
crying.`;
   waitForClick; clearText; marker; sound(`C3A092`); appendText; 
   Coco`"Aaaagh, waaaaaah, waaaaah!"`;
   waitForClick; clearText; marker; sound(`C3A093`); appendText; 
   Coco`"Aaaagh, waaaaaah, waaaaah!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG08A1`, transition: 26 });
setDialogBoxColor(BLUE);
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`7:25`);
showTextbox();
text(() => {
   marker; sound(`C3A094`); appendText; 
   //??
   Unk`"Aaaagh, waaaaaah, waaaaah"`;
   waitForClick; clearText; marker; sound(`C3A095`); appendText; 
   //??
   Unk`"waaaaaah, waaaaah"`;
   waitForClick; clearText; marker; sound(`C3A096`); appendText; 
   //??
   Unk`"waaaaaah, waaaaah"`;
   waitForClick; clearText; 
});
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A097`); appendText; 
   Sara`"...Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A098`); appendText; 
   Sara`"Kid, what are you crying about?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`".................Huh?"`;
   waitForClick; clearText; marker; sound(`C3A099`); appendText; 
   Sara`"Did someone pick on you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A100`); appendText; 
   Sara`"I know. It's Takeshi, isn't it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head back and forth.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A101`); appendText; 
   Sara`"So, it's Nakkyu then."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept shaking my head.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A102`); appendText; 
   Sara`"Alright then, Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Again, I shook my head back and forth.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A103`); appendText; 
   Sara`"Eh? Well, it couldn't be...Sora!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, nobody is picking on me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A104`); appendText; 
   Sara`"So why are you crying then?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's...it's..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was looking wildly around in all directions.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were in front of the emergency room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was standing right in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't see anyone else.`;
   waitForClick; clearText; marker; sound(`C3A105`); appendText; 
   Sara`"Hmmm?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I said nothing, but ran into the room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No one was there......`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wasn't lying on the examination table.`;
   waitForClick; clearText; 
});
playBGM({ num: 13, volume: 100 });
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A106`); appendText; 
   Sara`"Hey, why'd you run away!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's eyebrows were raised questioningly. `;
   waitForClick; clearText; marker; appendText; 
   Kid`"I didn't run away..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I just...wanted to check something is all...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A107`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood to the side of the table, and slid my 
hand across its surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no warmth.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; sound(`C3A078`); appendText; 
   Sora`"Her femur is fractured. And it looks like it 
might be compound."`;
   waitForClick; clearText; marker; sound(`C3A079`); appendText; 
   Sora`"That and the artery is severed. She'll need 
sutures."`;
   waitForClick; clearText; marker; sound(`C3A082`); appendText; 
   You`"I'll do my best! Do we have anesthetic?"`;
   waitForClick; clearText; marker; sound(`C3A083`); appendText; 
   Sora`"I'll get it ready. The laser scalpel, 
forceps, and sutures ...everything we need 
is already in the room."`;
   waitForClick; clearText; marker; sound(`C3A084`); appendText; 
   You`"Takeshi!!"`;
   waitForClick; clearText; marker; sound(`C3A085`); appendText; 
   You`"You're in the way!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All these voices jumped back and forth in my 
head...voices...voices...voices...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I twisted my head and turned, looking around 
the inside of the emergency room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The noise from before seemed like a dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Seemed???`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Ha, ha, what am I thinking...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It was only a 'dream'—Just a 'dream'.....)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A108`); appendText; 
   Sara`"Hey? Tell me."`;
   waitForClick; clearText; marker; sound(`C3A109`); appendText; 
   Sara`"What did you want to check?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked straight into Sara's eyes and 
answered.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wanted to see if.....it was real or a 
dream."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A110`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I had a terrible dream."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A111`); appendText; 
   Sara`"What about?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi hurt her leg really bad."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There was flooding in the storage area and, 
when she went to fix it, a big chunk of metal 
fell on her."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And then Tsugumi...um...her leg got trapped 
by the metal."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And she got a huge gash on her right thigh, 
I could see the yellow of her fat, the red 
color of her muscle, and white bone."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Her artery, lymph nodes, even nerve endings 
all hanging out and pulsating like rubber 
tubes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The whole area was covered in a sea of 
blood......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A112`); appendText; 
   Sara`"Eeeewww..."`;
   waitForClick; clearText; marker; sound(`C3A113`); appendText; 
   Sara`"Makes me feel sick just hearing about it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A114`); appendText; 
   Sara`"How can you talk about that kind of dream so 
calmly?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well it's not as if I WANTED to see it..."`;
   waitForClick; clearText; marker; sound(`C3A115`); appendText; 
   Sara`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`C3A116`); appendText; 
   Sara`"So that's why you decided to run into here 
all of a sudden?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A117`); appendText; 
   Sara`"Well, I guess it's possible that you'd start 
bawling your head off after seeing a dream 
like that......"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Bawling? ...Was I crying?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A118`); appendText; 
   Sara`"Of course you were! Like a hysteric three 
year old."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's when I realized.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On my cheeks and chin, there was something 
that felt cold...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a small drop of moisture sparkling 
on my eyelash......`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly wiped away my tears.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So...I had been crying...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had all happened while I was sleeping, so 
I had no idea why I'd been crying.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A119`); appendText; 
   Sara`"Hey, kid?"`;
   waitForClick; clearText; marker; sound(`C3A120`); appendText; 
   Sara`"Something bothers me..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`C3A121`); appendText; 
   Sara`"You just said 'The warehouse started 
flooding,' right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; marker; sound(`C3A122`); appendText; 
   Sara`"That actually happened."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...What?"`;
   waitForClick; clearText; marker; sound(`C3A123`); appendText; 
   Sara`"When you were sleeping, a pipe burst in the 
storage room and water started flooding in."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"When I was...sleeping...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was that supposed to mean?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't fully grasp what was going on from 
what I'd heard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind froze.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A124`); appendText; 
   Sara`"But, don't worry, okay? It got fixed without 
any hitches."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think it was possible, but I asked 
anyway.`;
   waitForClick; clearText; marker; sound(`C3A125`); appendText; 
   Sara`"She's fine, of course!"`;
   waitForClick; clearText; marker; sound(`C3A126`); appendText; 
   Sara`"She did most of the repairing."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Really...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason I felt relieved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it was because my dream had 
been so real?`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No, wait...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dream...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why would I have a dream about the warehouse 
flooding?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sleeping...`;
   waitForClick; clearText; marker; appendText; 
   Narr`As though she had read my thoughts, Sara 
said...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A127`); appendText; 
   Sara`"But, still, it's kind of strange, you know?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A128`); appendText; 
   Sara`"You didn't have an out-of-body experience, 
did you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said as if she were making fun of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But honestly, Sara probably didn't take the 
possibility seriously.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind was turning slowly, but hadn't started 
working normally again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was preventing me from thinking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Out-of-body experience..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If I could do that, I could peep down girl's 
underwear all I wanted..."`;
   waitForClick; clearText; 
});
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I made a stab at a joke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fact that I could do so surprised me 
somewhat.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A129`); appendText; 
   Sara`"Moron."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Moron.`;
   waitForClick; clearText; marker; sound(`C3A130`); appendText; 
   Sara`"Even if you could look up somebody's skirt, 
you don't look down people's underwear!!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`SMACK.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara whacked me on the head a couple of times.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thinking the whole situation odd, I started to 
laugh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A131`); appendText; 
   Sara`"But you seem like you're doing better."`;
   waitForClick; clearText; marker; sound(`C3A132`); appendText; 
   Sara`"I was really worried last night that you 
were going to die or something..."`;
   waitForClick; clearText; marker; sound(`C3A133`); appendText; 
   Sara`"But you seem just fine now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A134`); appendText; 
   Sara`"What? You don't remember?"`;
   waitForClick; clearText; marker; sound(`C3A135`); appendText; 
   Sara`"You fell over and were foaming at the mouth."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`C3A136`); appendText; 
   Sara`"Yeah, and you were flailing around on the 
ground like an upside down crab. Snip, snip."`;
   waitForClick; clearText; marker; sound(`C3A137`); appendText; 
   Sara`"By the time Takeshi called us all together, 
you were already like that."`;
   waitForClick; clearText; marker; sound(`C3A138`); appendText; 
   Sara`"So all we could do was pick you up..."`;
   waitForClick; clearText; marker; sound(`C3A139`); appendText; 
   Sara`"And carry you into this infirmary."`;
   waitForClick; clearText; marker; sound(`C3A140`); appendText; 
   Sara`"Got it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I got...it..."`;
   waitForClick; clearText; marker; sound(`C3A141`); appendText; 
   Sara`"You probably don't remember but...it was 
really intense."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A142`); appendText; 
   Sara`"You really had us worried there."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara slapped me gently on the cheek.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head turned to the side with the force.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And from that position, I asked...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey...? Where was I passed out...?"`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`C3A143`); appendText; 
   Sara`"In the changing room, in front of the mirror."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG12A1`, transition: 26 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
hideTextbox();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—The changing room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a rectangular room...and stuck to the 
back wall was a large mirror.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The bench had been returned to its original 
position.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked up to the mirror.`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
bgload({ name: `EV_ET01B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't recognize my face...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't recognize this kid...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I touched my eyebrow with my right hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He touched his eyebrow with his left hand.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A, B, C, D, E..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sounds that I uttered came to my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kid in the mirror mouthed the exact same 
words, but of course I couldn't hear his voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out my left hand to touch him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He put out his right hand and did the same 
thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My nails hit the hard surface of the glass 
with a 'click.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't reach him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking closely, I could see a face floating 
over his left shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two pairs of eyes stared intensely at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had to be an evil spirit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe he was even being possessed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That's so sad, he's been taken over by a 
demon...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`And as soon as I said that to myself, I 
realized that HE was looking at ME.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...What???...I'm being possessed???)`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`C3A144`); appendText; 
   Sara`"Hey."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Aaaah! Sa-Sa-Ssarah!"`;
   waitForClick; clearText; 
});
playBGM({ num: 6, volume: 100 });
bgload({ name: `BG12A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I jumped about three feet in the air, bending 
backwards as I leapt.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W-w-when'd you get here!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A145`); appendText; 
   Sara`"Heh, heh, heh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A146`); appendText; 
   Sara`"'Tis but a simple thing, to conceal the 
pitter patter of my steps."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Really..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently, the person who'd been looking 
over my shoulder was Sara.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A147`); appendText; 
   Sara`"Well, you didn't say anything, you just took 
off."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you went and followed me?"`;
   waitForClick; clearText; marker; sound(`C3A148`); appendText; 
   Sara`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara had grabbed on to her tied-up hair with 
both hands and was swinging it back and forth.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A149`); appendText; 
   Sara`"So? What's with the mirror?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She pointed to the mirror with the tip of her 
hair.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, uh..."`;
   waitForClick; clearText; marker; sound(`C3A150`); appendText; 
   Sara`"Well, what?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I pulled Sara by the arm over to stand in 
front of the mirror.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET01C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Both of our images were reflected on the 
mirror's surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The left and right side of her face was 
reflected back in reverse, but there was no 
mistaking it was her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My face on the other hand...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey? Who's that reflected in the mirror?"`;
   waitForClick; clearText; marker; sound(`C3A151`); appendText; 
   Sara`"...H-huh?...I don't understand the question."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The kid standing next to you..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who is he?"`;
   waitForClick; clearText; marker; sound(`C3A152`); appendText; 
   Sara`"Haa...we've started with this again eh...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Come on...I'm being serious."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is this...really my face?"`;
   waitForClick; clearText; marker; sound(`C3A153`); appendText; 
   Sara`"Well, if it isn't your face, whose face is 
it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I guess you're right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew the answer, but I still had needed to 
check.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This kid was...me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The face reflected in the mirror was mine.`;
   waitForClick; clearText; marker; sound(`C3A154`); appendText; 
   Sara`"Are you okay?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, I'm fine."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But I'm also not fine."`;
   waitForClick; clearText; marker; sound(`C3A155`); appendText; 
   Sara`"Which one is it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A pouting Sara was in the mirror.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at her figure in the reflection.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked back at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our gazes intersected and overlapped at the 
same space at the same time.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I couldn't remember my own face."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I couldn't remember...and I still can't 
remember it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Of course, I understand that the person 
reflected in the mirror is 'me.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...how can I say it...? It doesn't feel 
real..."`;
   waitForClick; clearText; marker; sound(`C3A156`); appendText; 
   Sara`"I see."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's why I passed out in front of the 
mirror last night."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The face reflecting back at me in the 
mirror, felt like someone else, someone I 
didn't know..."`;
   waitForClick; clearText; marker; sound(`C3A157`); appendText; 
   Sara`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`C3A158`); appendText; 
   Sara`"But that shouldn't be enough to make you 
foam at the mouth, don't you think?"`;
   waitForClick; clearText; marker; sound(`C3A159`); appendText; 
   Sara`"I mean if you looked into the mirror and 
suddenly were hopelessly ugly, even I would 
faint, but..."`;
   waitForClick; clearText; marker; sound(`C3A160`); appendText; 
   Sara`"Your face...isn't that bad..."`;
   waitForClick; clearText; marker; sound(`C3A161`); appendText; 
   Sara`"I mean you'd think that you'd be relieved and 
think, 'You know I've got a pretty nice 
looking face.'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara glanced at the mirror, and took a good 
look at my face. `;
   waitForClick; clearText; marker; sound(`C3A162`); appendText; 
   Sara`"I mean, if I had to say one way or the 
other, I like your face."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And, so saying, Sara pointed the tip of her 
hair at me.`;
   waitForClick; clearText; marker; sound(`C3A163`); appendText; 
   Sara`"Do you want to know why?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C3A164`); appendText; 
   Sara`"I think you look a little like me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...L-look like? ...I look like you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stared intently at Sara's face.`;
   waitForClick; clearText; marker; sound(`C3A165`); appendText; 
   Sara`"You don't think so?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, a vast whirling pattern came into 
my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It spun round and round, round and round, 
paralyzing my ability to think.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...d-don't think so."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It took all my will to mumble just that.`;
   waitForClick; clearText; marker; sound(`C3A166`); appendText; 
   Sara`"Reeeally? I think our eyes look the same."`;
   waitForClick; clearText; marker; appendText; 
   Kid`".............."`;
   waitForClick; clearText; marker; sound(`C3A167`); appendText; 
   Sara`"Hey, why are you making such a sour face?"`;
   waitForClick; clearText; marker; sound(`C3A168`); appendText; 
   Sara`"I'm giving you a compliment."`;
   waitForClick; clearText; marker; sound(`C3A169`); appendText; 
   Sara`"Or maybe, I guess you could say I'm giving 
myself a compliment..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara started smiling shyly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then, all of a sudden she tickled my nose 
with the tip of her hair.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! What're you doing!?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG12A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I jumped back away from her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A170`); appendText; 
   Sara`"Ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara smiled mischievously.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smell of her hair seeped into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a smell somehow so familiar, almost 
animal and private.`;
   waitForClick; clearText; 
});
l_choice = 0;
jump(`YC3A2`);
