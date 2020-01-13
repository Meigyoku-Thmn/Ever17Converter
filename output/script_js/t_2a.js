varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 2`);
varop(`(28 0a a4) b2 := (00) 2`);
setDialogBoxColor(GREEN);
setSceneTitle({ index: 9 });
chapterCutin({ name: `00000000` });
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG28A3R`, transition: 20 });
clock(`5:29`);
playSFX({ name: `SE01_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Yaaaaaaaaawn."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm sleepy..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lack of sleep made the echo of the shoes 
scraping the ground seem louder than usual.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I walked down the emergency corridor, I 
stretched.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and the Kid trailed a little way behind 
us.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A000`); appendText; 
   You`"And you slept so hard..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, but what time do you think it is right 
now?"`;
   waitForClick; clearText; marker; sound(`T2A001`); appendText; 
   You`"5:30 a.m."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's right. So that means that I only 
slept four and a half hours."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A002`); appendText; 
   You`"Not ONLY. You slept that much!"`;
   waitForClick; clearText; marker; sound(`T2A003`); appendText; 
   You`"I don't know how you could sleep like that 
given our situation..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's because it is this kinda situation that 
we've gotta sleep."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Our minds have to be sharp. We have to be 
ready for anything, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A004`); appendText; 
   You`"So your mind is sharp right now?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Well, I'm still a bit sleep deprived, so not 
all my pistons are firing..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But I think I'm doing about as good as the 
next guy..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next thing I noticed, You was no longer 
next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped and looked back.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I saw the kid and Coco disappearing down a 
side pathway to the right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurried after the three of them.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A005`); appendText; 
   You`"And? How is sleeping beauty...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You spoke to me sarcastically once I'd caught 
up.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I just told you. I'm not running at full 
power."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A006`); appendText; 
   You`"*sigh*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You let out an exasperated sigh and shrugged 
her shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She also arched an eyebrow as if annoyed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A007`); appendText; 
   You`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T2A008`); appendText; 
   You`"You know, I think you'd better take a look 
in the mirror."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Mirror?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A009`); appendText; 
   You`"You'd...really better wash your face."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_07`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We entered the emergency stairs from the 
emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had just been rousted from sleep by Sora 
and the four of us shuffled to the Control 
Room on the third floor, Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We seemed to have passed through the 
decompression process without a hitch as no 
one had any complaints.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even Coco who had seemed to be having such a 
rough time was...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A010`); appendText; 
   Coco`"Sunny, sunny, Sunday"`;
   waitForClick; clearText; marker; sound(`T2A011`); appendText; 
   Coco`"Windy, windy, Wednesday"`;
   waitForClick; clearText; marker; sound(`T2A012`); appendText; 
   Coco`"Pretty, pretty Pipi today"`;
   waitForClick; clearText; marker; sound(`PIPI_02`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even the dog seemed in high spirits.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They looked even happier than the day before.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The water on the corridor floor splashed and 
sprayed as we walked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You walking next to me had clammed up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder what she is peeved about...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slowed down my pace to walk with the kid.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, you got any idea what You's all miffed 
about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A013`); appendText; 
   Kid`"Who knows?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kid answered grinning.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, what're you laughing about? Do you know 
something that I don't?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A014`); appendText; 
   Kid`"You sure you don't have any ideas what it 
could be?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If I did, I wouldn't be asking you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You told me to 'look in the mirror,' but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A015`); appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T2A016`); appendText; 
   Kid`"That's no fun..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid kept glancing at my face and trying 
not to smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(My face...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wiped the palm of my hand on my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like black ink was smeared there.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to wipe it off with my shirt collar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it wouldn't come off.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A017`); appendText; 
   Kid`"Ha, ha..."`;
   waitForClick; clearText; marker; sound(`T2A018`); appendText; 
   Kid`"Oh, there's a toilet over there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The faucet was broken and the sink was 
overflowing with water.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I hurriedly washed my hands and then my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The mirror in front of me was shattered into 
so many shards it was useless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But most of the black had come off of my 
hands, so I thought my face was probably 
alright.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That girl..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said it disgustedly and hurried out of the 
bathroom.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went up to You again.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, you! What did you write on my face?"`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A019`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"While I was asleep you scribbled all over my 
face, didn't you?"`;
   waitForClick; clearText; marker; sound(`T2A020`); appendText; 
   You`"Scribble?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she walked You gaped at my face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A021`); appendText; 
   You`"What is this guy talking about...?"`;
   waitForClick; clearText; marker; sound(`T2A022`); appendText; 
   You`"You're probably still asleep."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't play dumb with me, You!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You were just talking about a mirror."`;
   waitForClick; clearText; marker; sound(`T2A023`); appendText; 
   You`"Oh, was I? A mirror?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You said it. I know you said it."`;
   waitForClick; clearText; marker; sound(`T2A024`); appendText; 
   You`"Are you sure your ears aren't playing tricks 
on you? I'm pretty sure you are still half 
asleep."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Then what's this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I showed her my shirt collar where I had 
wiped the ink.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A025`); appendText; 
   You`"Hmmm, what...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You mumbled this so I stepped closer...`;
   waitForClick; clearText; marker; sound(`T2A026`); appendText; 
   You`"Well..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly she grabbed my hand and stared at my 
palm intently.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A027`); appendText; 
   You`"Oh! Your palm has an interesting future 
for you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Palm reading? Is that what you're into now?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A028`); appendText; 
   You`"Your palm tells me that your fate diverges 
into two distinctly different futures."`;
   waitForClick; clearText; marker; sound(`T2A029`); appendText; 
   You`"It's kind of an all or nothing outcome."`;
   waitForClick; clearText; marker; sound(`T2A030`); appendText; 
   You`"You will either acquire or lose everything..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2A031`); appendText; 
   You`"One path will put you on the road to riches, 
a good job, an encounter with a beautiful 
woman and bless you with a strong home and 
offspring."`;
   waitForClick; clearText; marker; sound(`T2A032`); appendText; 
   You`"And you will be as healthy as possible..."`;
   waitForClick; clearText; marker; sound(`T2A033`); appendText; 
   You`"You will live to a ripe old age that will 
make those around you jealous."`;
   waitForClick; clearText; marker; sound(`T2A034`); appendText; 
   You`"HOWEVER! HOWEVER!"`;
   waitForClick; clearText; marker; sound(`T2A035`); appendText; 
   You`"If you take the other path...you will be in 
dire straits."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"D-dire...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A036`); appendText; 
   You`"Yes...but I can tell you no more."`;
   waitForClick; clearText; marker; sound(`T2A037`); appendText; 
   You`"You should take a good look at the middle of 
your lifeline."`;
   waitForClick; clearText; marker; sound(`T2A038`); appendText; 
   You`"Because that is where the answer can be 
found."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A039`); appendText; 
   You`"Hee, heee, heee..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked down at the palm of my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My eyes traced a line down my lifeline.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wide-eyed, I scrutinized each wrinkle and line.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't see an answer anywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was still black ink in the creases of 
my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Black ink...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Black ink...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Black ink!?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered what I was angry about. Forget 
fortune telling!`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-you! You're trying to trick me..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...What? Hey -"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next thing I knew, You was no longer 
beside me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped and looked back.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I saw the Kid and Coco vanish into a small 
side corridor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Whoa! Geez! I don't believe these guys!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly chased after the three of them.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG15B1`, transition: 20 });
clock(`5:36`);
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was in front of the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was leaning against the wall, 
her arms folded and facing down.`;
   waitForClick; 
});
choice(
   `Talk to her`
   `Wait and see what she says`
);
switch (choice) {
   case 0: goto(lbl_000003f6);
   case 1: goto(lbl_00000457);
}
let lbl_000003f6;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered where she could have run off to 
the day before...but decided not to ask.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to shower her with the cheeriest 
greeting I could muster.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"GOOD MORNING!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How are you feeling? If you aren't feeling 
good, you should probably get to the 
decompression chamber!"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi didn't budge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stood there with her mouth half open only 
blinking her eyes a couple of times.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's the matter? You tired? Low blood 
pressure?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I didn't exactly sleep like a baby 
either. That damn room was so small I ended 
up sitting on the floor all night..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I yawned and rubbed my eyes with both hands 
as I spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But then Tsugumi's eyes narrowed into slits 
and she leveled a steely glare at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the kind of look that could kill. `;
   waitForClick; clearText; marker; sound(`T2A040`); appendText; 
   Tsugumi`"You..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A041`); appendText; 
   Tsugumi`"...are the absolute worst."`;
   waitForClick; clearText; 
});
goto(lbl_000004d2);
let lbl_00000457;
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I peered at Tsugumi's face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was curious where she had gone off to the 
day before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She could at least have given me a hint.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi didn't budge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stood there with her mouth half open only 
blinking her eyes a couple of times.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A042`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi finally spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A043`); appendText; 
   Tsugumi`"You gotta problem?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she scowled.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Oh...good...morning..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Did you get a good sleep last night? I 
didn't. That damn room was so small I ended 
up sitting on the floor all night..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I yawned and rubbed my eyes with both hands 
as I spoke.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, what did you do after that yesterday?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But then Tsugumi's eyes narrowed into slits 
and she leveled a steely glare at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the kind of look that could kill.`;
   waitForClick; clearText; marker; sound(`T2A044`); appendText; 
   Tsugumi`"Your face is..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A045`); appendText; 
   Tsugumi`"...the absolute worst."`;
   waitForClick; clearText; 
});
let lbl_000004d2;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi shook her head as if she were fed up 
with me and vanished inside the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...A-absolute worst?)`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! Hold on a sec!"`;
   waitForClick; clearText; marker; sound(`T2A046`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's voice came from behind me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A047`); appendText; 
   Sora`"What are you doing there?"`;
   waitForClick; clearText; marker; sound(`T2A048`); appendText; 
   Sora`"Please hurry inside."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But..."`;
   waitForClick; clearText; marker; sound(`T2A049`); appendText; 
   Sora`"Just please...go inside."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The expression on her face appeared more 
stressed than the day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed as if her face said...that something 
serious were unfolding...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
stopBGM();
playBGM({ num: 14, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
clock(`5:40`);
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A050`); appendText; 
   Sora`"I'm sorry that I had to have you gather 
so early. There was no other way."`;
   waitForClick; clearText; marker; sound(`T2A051`); appendText; 
   Sora`"Actually, everyone, there is something 
I need to tell you right away."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora paused for a second.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked over all five of us...You, Coco, 
the Kid, Tsugumi, and finally me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cooling fan whirred away in the silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Occasionally the sound of metal on metal 
would ring through the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The five of us waited on Sora's next words.`;
   waitForClick; clearText; marker; sound(`T2A052`); appendText; 
   Sora`"Last night, after the four of you, apart from 
Tsugumi, entered the pressurization chamber..."`;
   waitForClick; clearText; marker; sound(`T2A053`); appendText; 
   Sora`"I was in the Control Room here thinking 
about ways to escape or contact the outside."`;
   waitForClick; clearText; marker; sound(`T2A054`); appendText; 
   Sora`"And..."`;
   waitForClick; clearText; marker; sound(`T2A055`); appendText; 
   Sora`"While I was checking the internal status of 
LeMU I discovered something."`;
   waitForClick; clearText; marker; sound(`T2A056`); appendText; 
   You`"You found a way to escape?!"`;
   waitForClick; clearText; marker; sound(`T2A057`); appendText; 
   Sora`"No."`;
   waitForClick; clearText; marker; sound(`T2A058`); appendText; 
   Kid`"Then a way to contact the outside?"`;
   waitForClick; clearText; marker; sound(`T2A059`); appendText; 
   Sora`"No yet."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Then what did you figure out?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A060`); appendText; 
   Sora`"Actually..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A061`); appendText; 
   Sora`"I discovered the strength of pressure the 
bulkheads can withstand...I found their 
limits."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, Sora turned her eyes to the side 
of the console.`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the darkness, a three-dimensional image of 
LeMU sprung up.`;
   waitForClick; clearText; 
});
bgload({ name: `IMG01B`, transition: 20 });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T2A062`); appendText; 
   Coco`"What's the...pressure bulkhead thingy...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco held Pipi tightly as she asked.`;
   waitForClick; clearText; marker; sound(`T2A063`); appendText; 
   Sora`"I mean LeMU's walls. The partitions between 
the outer seawater and the inner air."`;
   waitForClick; clearText; marker; sound(`T2A064`); appendText; 
   Kid`"What do you mean...when you say you found the 
limit?"`;
   waitForClick; clearText; marker; sound(`T2A065`); appendText; 
   Sora`"Like I said yesterday, LeMU is a structure 
basically constructed on a saturation diving 
specification design."`;
   waitForClick; clearText; marker; sound(`T2A066`); appendText; 
   Sora`"In other words, the internal air pressure 
equals or is greater than the external water 
pressure."`;
   waitForClick; clearText; marker; sound(`T2A067`); appendText; 
   Sora`"However, the complex's internal air pressure 
is currently at 1 atmosphere..."`;
   waitForClick; clearText; marker; sound(`T2A068`); appendText; 
   Sora`"Therefore..."`;
   waitForClick; clearText; marker; sound(`T2A069`); appendText; 
   You`"LeMU's outer shell is constantly being 
subjected to severe water pressure."`;
   waitForClick; clearText; marker; sound(`T2A070`); appendText; 
   Sora`"Correct."`;
   waitForClick; clearText; marker; sound(`T2A071`); appendText; 
   You`"But LeMU is not constructed to endure this 
situation for a long period of time."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2A072`); appendText; 
   You`"Inevitably it will, at some point, reach its 
limit..."`;
   waitForClick; clearText; marker; sound(`T2A073`); appendText; 
   Sora`"Well put, You."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So...when is this limit...?"`;
   waitForClick; clearText; marker; sound(`T2A074`); appendText; 
   Sora`"According to LeMMIH's calculations, 119 
hours from now..."`;
   waitForClick; clearText; marker; sound(`T2A075`); appendText; 
   Tsugumi`"119 hours..."`;
   waitForClick; clearText; marker; sound(`T2A076`); appendText; 
   Tsugumi`"Five days, huh?"`;
   waitForClick; clearText; marker; sound(`T2A077`); appendText; 
   Sora`"The estimated time of implosion is 
approximately May 7 at 4:30 a.m."`;
   waitForClick; clearText; marker; sound(`T2A078`); appendText; 
   Sora`"Of course, it is only a calculation and 
there is a margin of error."`;
   waitForClick; clearText; marker; sound(`T2A079`); appendText; 
   Tsugumi`"What is the margin of error?"`;
   waitForClick; clearText; marker; sound(`T2A080`); appendText; 
   Sora`"Plus or minus 12 hours."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone went silent, lost in thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's talk had made it clear that we were in 
a crisis.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I still didn't know what to make of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if five days was a long time, 
or a short one.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't have a schedule...but if we could 
find a way out, I didn't figure we'd be 
sticking around five days.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if we didn't call anyone, a rescue team 
might be on its way anyway...`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A081`); appendText; 
   Coco`"Hey, hey! Ms. Sora?"`;
   waitForClick; clearText; marker; sound(`T2A082`); appendText; 
   Coco`"I'm not very smart so I'm not sure I 
understand.... What does all that mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A083`); appendText; 
   Sora`"?"`;
   waitForClick; clearText; marker; sound(`T2A084`); appendText; 
   Coco`"Does that mean at 4:30 a.m. on May 7 LeMU 
will get squashed like a pancake?"`;
   waitForClick; clearText; marker; sound(`T2A085`); appendText; 
   Coco`"But that might happen at around 4:30 p.m., 
on the sixth or at 4:30 p.m. on the seventh."`;
   waitForClick; clearText; marker; sound(`T2A086`); appendText; 
   Coco`"Is that good so far?"`;
   waitForClick; clearText; marker; sound(`T2A087`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T2A088`); appendText; 
   Coco`"So doesn't that mean the opposite is also 
true?"`;
   waitForClick; clearText; marker; sound(`T2A089`); appendText; 
   Coco`"I mean, at the worst LeMU will last until 
4:30 p.m. on May 6."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A090`); appendText; 
   Coco`"So we're fine until then. There's nothing to 
worry about. Hooray!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A091`); appendText; 
   Coco`"Right? Is that what it means?"`;
   waitForClick; clearText; marker; sound(`T2A092`); appendText; 
   Sora`"We can't be absolutely certain that we will 
be safe..."`;
   waitForClick; clearText; marker; sound(`T2A093`); appendText; 
   Sora`"But judging from the results of LeMMIH's 
calculations, that would appear to be the case."`;
   waitForClick; clearText; marker; sound(`T2A094`); appendText; 
   Coco`"Oh, goodie. Then no problem."`;
   waitForClick; clearText; marker; sound(`T2A095`); appendText; 
   Coco`"Ms. Sora, you looked all serious and so I 
got kind of scared."`;
   waitForClick; clearText; marker; sound(`PIPI_28`); appendText; 
   Pipi`"Bow-wow! Wooooooof!"`;
   waitForClick; clearText; marker; sound(`T2A096`); appendText; 
   Coco`"'Geez, don't scare me, babe.' I think that's 
what Pipi's trying to say."`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `YU15BDS`, name2: `SO01ADS`, name3: `CO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2A097`); appendText; 
   You`"I see.... If you had said 'We only have one 
more day,' or something I might have burst 
out crying."`;
   waitForClick; clearText; marker; sound(`T2A098`); appendText; 
   You`"So we still have lots of time.... Someone 
will surely come to help us before that."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid, standing next to You, agreed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He nodded rhythmically as if answering a 
question.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The tension in the air gave way and smiles 
returned to the faces around the room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even Tsugumi, who didn't smile, looked 
relieved.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was 5:50 a.m.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave a large yawn.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
setSceneTitle({ index: 10 });
clock(`6:14`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Alright, all done!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"1, 2, 3, 4, 5, 6...that's all of them."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was in the narrow space of the chicken 
sandwich stand where the cooking equipment was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was wrapping and placing the freshly made 
breakfast sandwiches on a tray.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why is it that I have to make breakfast for 
everyone?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Complaining, I took the tray in both hands and 
opened the small door of the stand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A099`); appendText; 
   You`"That's the way it goes. We decided it 
democratically, you know."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was waiting in front of the shop and 
snatched a sandwich from the tray.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She peeled back the wrapping and opened up her 
mouth.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Democracy...is overrated..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It just means the majority rules."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A100`); appendText; 
   You`"You got it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said it flatly as she munched on her 
sandwich.`;
   waitForClick; clearText; marker; sound(`T2A101`); appendText; 
   You`"It is a reflection of the majority of the 
people's will."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was true that it had been an overwhelming 
vote.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had only been appointed breakfast chief 
minutes before....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't even run for the office.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know that you're the one in the shadows 
running this conspiracy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A102`); appendText; 
   You`"Whoa, that's low! I wouldn't do that!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU12BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A103`); appendText; 
   You`"I'm pretty sure it's just because everyone 
sincerely thought that you would be the best 
cook."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...You're sure full of it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A104`); appendText; 
   You`"Tee, heeeee..."`;
   waitForClick; clearText; marker; sound(`T2A105`); appendText; 
   You`"Thanks for the sandwich!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You already ate it? That's so fast..."`;
   waitForClick; clearText; marker; sound(`T2A106`); appendText; 
   You`"Yummy. I'll have another..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsk!`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I slapped away You's outstretched hand.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've only made one for each person."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you want another one, you make it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A107`); appendText; 
   You`"Hey..."`;
   waitForClick; clearText; marker; sound(`T2A108`); appendText; 
   You`"Come on. Be a pal and make me one more.... 
Pretty pleeeeeeease!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`First I wanted to get away from You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the remaining four sandwiches over to 
the rest area to hand them out.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Breakfast is ready! Come and get it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I called out I set the tray on a bench.`;
   waitForClick; clearText; marker; sound(`T2A109`); appendText; 
   Coco`"Yeah! Yeah! Food, glorious food!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco came running and splashing toward me. 
Pipi the dog paddled along behind her.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopSFX()
multifgload2({ id1: 1, id2: 2, name1: `KA02ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A110`); appendText; 
   Kid`"Oh this looks good!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the sudden I noticed the Kid beside me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey. Where are Tsugumi and Sora?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A111`); appendText; 
   Kid`"Sora went back to the Control Room."`;
   waitForClick; clearText; marker; sound(`T2A112`); appendText; 
   Kid`"She said there was still stuff she had to 
look into..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, that again..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A113`); appendText; 
   Coco`"Hmmm. I think Tsugumi took off somewhere..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Same old, same old..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned my eyes to the three chicken 
sandwiches left on the tray.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What to do...)`;
   waitForClick; 
});
choice(
   `Look for Tsugumi`
   `Go see Sora in the Control Room`
);
switch (choice) {
   case 0: goto(lbl_000008bc);
   case 1: goto(lbl_00000bfc);
}
let lbl_000008bc;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`First I decided to go look for Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I would go see Sora after that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took their sandwiches in hand and left the 
room.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3R`, transition: 20 });
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey, Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out as I walked corridors at random.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Choooowww tiiiimmmme!" `;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew she wasn't the type to answer to that...`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B1`, transition: 20 });
fgload({ id: 1, name: `TU15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally...`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the end of a corridor I spied Tsugumi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Oh, there she is."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`'HIMMEL' was written on the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi wasn't really doing anything. She just 
stood in front of the door.`;
   waitForClick; clearText; marker; sound(`T2A114`); appendText; 
   Tsugumi`"Nothing..."`;
   waitForClick; clearText; marker; sound(`T2A115`); appendText; 
   Tsugumi`"It's none of your business..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"None of my business, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sure...whatever."`;
   waitForClick; clearText; marker; sound(`T2A116`); appendText; 
   Tsugumi`"What are YOU doing here?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held out one of the chicken sandwiches to 
Tsugumi.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A117`); appendText; 
   Tsugumi`"What's this?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Breakfast."`;
   waitForClick; clearText; marker; sound(`T2A118`); appendText; 
   Tsugumi`"Hmmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're not gonna eat?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi tilted her head a little and stared 
at the sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you don't want it, I'll give it to You."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A119`); appendText; 
   Tsugumi`"I didn't say I don't want it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi indifferently took the sandwich from 
me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Good. I went to a lot of pain to make that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you said you didn't want it, I don't know 
what I'd..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi began to walk away without listening 
as I was talking.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey! Hold on a second!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I suddenly grabbed Tsugumi's shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You should at least say thanks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi didn't try to turn around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She shook my hand off of her shoulder 
effortlessly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A120`); appendText; 
   Tsugumi`"*sigh*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She let go an annoyed sigh.`;
   waitForClick; clearText; marker; sound(`T2A121`); appendText; 
   Tsugumi`"Don't...touch me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said it in a low voice without turning 
around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My shrugged off hand floated in the air with 
nowhere to go.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A122`); appendText; 
   Tsugumi`"Don't..."`;
   waitForClick; clearText; marker; sound(`T2A123`); appendText; 
   Tsugumi`"Touch me..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi repeated the same words again and 
silently started walking away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Down the water covered floor of the corridor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rings rippled out slowly from where Tsugumi 
stepped as she walked away.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 90 });
varop(`(28 0a a2) 4f := (00) 153`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then, the lights in the corridor began to 
flicker uneasily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I instinctively glanced up at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A dull growl-like sound shook the floor....`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"W-what...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What is happening....? It couldn't be..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tiny waves formed in the water pooled on the 
floor `;
   waitForClick; clearText; marker; appendText; 
   Narr`The walls and ceiling trembled slightly. Metal 
screeched on metal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see Tsugumi's back down the corridor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lights clicked and flickered. Tsugumi 
turned and looked back at me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As if she wanted to say something to me...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
playSFX({ name: `SE03_09`, a1: 0, volume: 100 });
bgload({ name: `BG26B4L`, transition: 20 });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Darkness blanketed us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The vibrations and sound died away. Only an 
eerie silence enveloped us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the emergency lights showed weakly.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"...Is this a blackout?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kicked up water as I ran.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran to where Tsugumi, shouting.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopSFX()
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Tsugumi! It's a blackout! A blackout!"`;
   waitForClick; clearText; marker; sound(`T2A124`); appendText; 
   Tsugumi`"I know..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What should we do?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A125`); appendText; 
   Tsugumi`"Why're you asking me...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh yeah...right..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, what should we do?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know! First we should go to where everyone 
is."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG07B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We cut through a nearby door and came out in 
front of the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You wasn't there.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sprinted to the room next door. There was 
no sign of anyone there either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scanned the area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My eyes weren't used to the darkness yet and I 
couldn't see into the corners of the room.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! Coco! Kid! You!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The echo of my voice was swallowed, vanishing 
into the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where could they have gone?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My eyes stopped on the bench.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On top of the tray I'd left there was one 
chicken sandwich remaining.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still had one of the sandwiches in my 
hand....`;
   waitForClick; clearText; marker; appendText; 
   Narr`The emergency didn't seem to faze Tsugumi who 
was stuffing her face with the sandwich I'd 
given her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A126`); appendText; 
   Tsugumi`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`T2A127`); appendText; 
   Tsugumi`"This..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi handed me something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the balled up sandwich wrapper.`;
   waitForClick; clearText; marker; sound(`T2A128`); appendText; 
   Tsugumi`"...needs to be thrown away."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, Tsugumi left the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Geez. I can't believe that girl...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the crumpled up wrapper and put it 
back on the tray and soon followed after 
Tsugumi.`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- In front of the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the far darkness I could just make out 
three familiar outlines.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2A129`); appendText; 
   You`"Hey, Takeshi!"`;
   waitForClick; clearText; marker; sound(`T2A130`); appendText; 
   Coco`"Tsugumi!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splashing through the water the three of them 
walked over.`;
   waitForClick; clearText; 
});
hideTextbox();
multifgload3({ name1: `KA08ADS`, name2: `YU03ADS`, name3: `CO06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`T2A131`); appendText; 
   Kid`"Hey, have you seen Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She shook her head.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wasn't she in the Control Room?"`;
   waitForClick; clearText; marker; sound(`T2A132`); appendText; 
   You`"It's empty now."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You sure? Let's check..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I pushed the panel next to the door, but the 
button remained lifeless.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, how do you open this? Does the 
electricity have to be on?" `;
   waitForClick; clearText; marker; sound(`T2A133`); appendText; 
   You`"Oh, there is an emergency mechanism for 
opening the door near the bottom of it..."`;
   waitForClick; clearText; 
});
goto(lbl_00000e48);
let lbl_00000bfc;
varop(`(28 0a a4) b8 += (00) 2`);
varop(`(28 0a a4) e9 := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to look in on Sora first.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd look for Tsugumi later.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took their sandwiches in hand and left the 
room.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3R`, transition: 20 });
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Which way was it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd gone as far as the corner before I 
realized that I didn't know the route.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe it's this way..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally...`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I found a room where the corridor played out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'HIMMEL' was written on the door.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, this isn't it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I retraced my route.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3L`, transition: 20 });
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Alright, here it is..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora! It's time for dinner!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I pushed the open button next to the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the door didn't open.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora! Open up! I brought you food! Time 
to eat!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I shouted into the interphone as I pushed the 
button to talk.`;
   waitForClick; clearText; marker; sound(`T2A134`); appendText; 
   Sora`"Eat?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She replied to me through the speaker.`;
   waitForClick; clearText; marker; sound(`T2A135`); appendText; 
   Sora`"Thanks for going to the trouble, but I don't 
need any food...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't? Don't say that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, have you been eating okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You have to eat or you're not going to have 
any energy."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T2A136`); appendText; 
   Sora`"I'm sorry, but I'm occupied at the moment."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered that we had had the same 
exchange the day before.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hurry it up. These sandwiches are gonna get 
cold."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Besides, I made them special, for you..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Listen...I just wanna give these to you, so 
will you open the door?"`;
   waitForClick; clearText; marker; sound(`T2A137`); appendText; 
   Sora`"I really can't..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"C'mon. Please, just open the door, Sora."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...I'll throw in a coupon for a beer if you 
want."`;
   waitForClick; clearText; marker; sound(`T2A138`); appendText; 
   Sora`"I'm sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We kept arguing through the speaker.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright then! I'm only going to wait out 
here for one more minute!"`;
   waitForClick; clearText; marker; sound(`T2A139`); appendText; 
   Sora`"One more minute? You're giving me a hard 
time..."`;
   waitForClick; clearText; marker; sound(`T2A140`); appendText; 
   Sora`"I have to go somewhere..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Somewhere where?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora, where are you going? Hello? Hello?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I pushed the button again and again, shouting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora didn't answer.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 90 });
varop(`(28 0a a2) 4f := (00) 153`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then, the lights in the corridor began to 
flicker uneasily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I instinctively glanced up at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I strained to hear as a dull growl-like sound 
shook the floor....`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"W-what...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What is happening....? It couldn't be..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tiny waves formed in the water pooled on the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The walls and ceiling trembled slightly. Metal 
screeched on metal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if they were trying to say something to 
me...`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
stopBGM();
playSFX({ name: `SE03_09`, a1: 0, volume: 100 });
bgload({ name: `BG15B2`, transition: 20 });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Darkness blanketed me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The vibrations and sound died away. Only an 
eerie silence enveloped us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the other emergency lights glowed dimly.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"...Is this a blackout?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder what happened to Sora?)`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora! Answer me!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang, bang!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pounded the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought she might not be able to hear me 
inside....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang, bang!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then I tapped the interphone button.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was no response.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh...I wonder if the interphone needs 
electricity to work...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no clue what was happening on the other 
side of the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I figured the only thing I could do was get 
the door open...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard footsteps approaching from the 
darkened corridor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Who's there?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the far darkness I could just make out four 
familiar outlines.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2A141`); appendText; 
   You`"Oh, Takeshi!"`;
   waitForClick; clearText; marker; sound(`T2A142`); appendText; 
   Coco`"Takepyon!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splashing through the water the three of them 
walked over.`;
   waitForClick; clearText; 
});
hideTextbox();
multifgload3({ name1: `TU13ADS`, name2: `YU03ADS`, name3: `CO06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A143`); appendText; 
   Kid`"Hey, have you seen Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, but she was inside here until just a bit 
ago. But now she won't answer. And it seems 
like the door is locked..."`;
   waitForClick; clearText; marker; sound(`T2A144`); appendText; 
   You`"What happened?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I dunno. Anyway, let's get inside. How do we 
get this open?"`;
   waitForClick; clearText; marker; sound(`T2A145`); appendText; 
   You`"Oh, there is an emergency mechanism for 
opening the door near the bottom of it..."`;
   waitForClick; clearText; 
});
let lbl_00000e48;
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE00_10`, a1: 0, volume: 95 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Pulling on the lever I pushed the door over 
to the side.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door opened just wide enough for a person 
to squeeze through.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I peeked inside the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was pitch black. I couldn't see a thing.`;
   waitForClick; clearText; marker; sound(`T2A146`); appendText; 
   Kid`"Do you want a flashlight?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, thanks."`;
   waitForClick; clearText; 
});
goto(lbl_00000eb4).if(var_e9 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I gave the Kid the sandwich and took the 
flashlight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned it on and stepped into the room.`;
   waitForClick; clearText; 
});
goto(lbl_00000eb9);
let lbl_00000eb4;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Taking the flashlight, I turned it on and 
stepped into the room.`;
   waitForClick; clearText; 
});
let lbl_00000eb9;
bgload({ name: `BG16A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A white circle of light appeared on the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swung the light left and right and shined 
it in the corners of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The electricity was completely down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like an abandoned castle, there was no sign of 
warmth left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was clearly nobody there.`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B2`, transition: 20 });
multifgload3({ name1: `KA08ADS`, name2: `YU03ADS`, name3: `CO06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Well...what should we do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I joined everyone and said this calmly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been one crisis after another since 
the day before....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I guess we were already used to the situation 
because nobody had lost it.`;
   waitForClick; clearText; marker; sound(`T2A147`); appendText; 
   You`"I can't believe Sora would take off without 
saying anything first."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You tilted her head as she said this.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hmmm?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking at her then I noticed something.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You, when did you change clothes?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `YU01ADS`, name2: `CO11ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A148`); appendText; 
   You`"Huh? Oh, this...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was wearing clothes I hadn't remembered 
seeing.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A149`); appendText; 
   You`"I spilled sauce all over my uniform..."`;
   waitForClick; clearText; marker; sound(`T2A150`); appendText; 
   You`"I had one change of clothes in the changing 
room. These are my everyday clothes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm. I see...so you had a change of clothes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Spilling sauce on your uniform? That's pretty 
clumsy."`;
   waitForClick; clearText; marker; sound(`T2A151`); appendText; 
   You`"Ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You scratched her head as if to offset her 
embarrassment.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, we should be thinking about Sora."`;
   waitForClick; clearText; marker; sound(`T2A152`); appendText; 
   Coco`"Yeah. For now..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `CO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A153`); appendText; 
   Coco`"Let's everybody split up and look for Sora."`;
   waitForClick; clearText; marker; sound(`T2A154`); appendText; 
   Coco`"Without Sora around we won't know why there 
was the blackout or anything..."`;
   waitForClick; clearText; marker; sound(`T2A155`); appendText; 
   Kid`"Yeah. Sora knows more about LeMU than anyone."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm.... Alright, let's do this."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You and the Kid, you guys check this floor. 
Tsugumi, Coco and I will hit the second 
floor..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A156`); appendText; 
   You`"Huh? Alright."`;
   waitForClick; clearText; marker; sound(`T2A157`); appendText; 
   Kid`"Roger that."`;
   waitForClick; clearText; marker; sound(`T2A158`); appendText; 
   Coco`"Uh...um...what about Pipi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course, he'll go with you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I petted Pipi's head.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, let's go search!"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG26A4L`, transition: 20 });
clock(`6:31`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora! Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The three people and one mutt - myself, 
Tsugumi, Coco and Pipi - split up once we 
reached Zweite stock.`;
   waitForClick; clearText; 
});
bgload({ name: `BG23A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- The entrance to the neutral buoyancy elevator`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- Inside the infirmary`;
   waitForClick; clearText; 
});
bgload({ name: `BG12A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- The changing room`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- The Security Office`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- The merry-go-round`;
   waitForClick; clearText; 
});
bgload({ name: `BG03A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We searched everything - even the Jellyfish 
Gondola...`;
   waitForClick; clearText; 
});
bgload({ name: `BG08A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then we retraced our way back to in front of 
the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; marker; sound(`T2A159`); appendText; 
   Coco`"Takepyon! Takepyon!"`;
   waitForClick; clearText; marker; sound(`PIPI_27`); appendText; 
   Pipi`"Woo woof! Woof!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco was shaking the flashlight and signaling 
to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had handed it to her before we started 
searching.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How'd it go? Any luck?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco used the flashlight to make a big X, 
signifying nothing found.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A160`); appendText; 
   Coco`"How about you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nothing. She's not on this floor."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What about Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T2A161`); appendText; 
   Coco`"Tsugumi just passed by in front of me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Passed by?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A162`); appendText; 
   Coco`"She went that way...toward the entrance to 
EI the egg elevator."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The neutral buoyancy elevator, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A163`); appendText; 
   Coco`"Yeah."`;
   waitForClick; clearText; marker; sound(`T2A164`); appendText; 
   Coco`"She was carrying something big."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something big?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like Tsugumi was up to something 
solo again....`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll go check it out."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and I moved to the room next door.`;
   waitForClick; clearText; 
});
bgload({ name: `BG23A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There were signs of someone there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ahead in the pitch darkness was something 
rustling around.`;
   waitForClick; clearText; marker; sound(`T2A165`); appendText; 
   Coco`"Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Calling out, Coco shined the light on the 
shadow.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A166`); appendText; 
   Tsugumi`"...Hey, that's bright."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As expected, it was Tsugumi. She held out the 
palms of her hands as she stood up.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco hurried to turn off the flashlight and 
rushed over by Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed her over with Pipi.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A167`); appendText; 
   Coco`"What are you doing here?"`;
   waitForClick; clearText; marker; sound(`T2A168`); appendText; 
   Tsugumi`"Huh? Hmph..."`;
   waitForClick; clearText; marker; sound(`T2A169`); appendText; 
   Coco`" I don't understand what you mean by 'Hmph'."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"..."`;
   waitForClick; clearText; marker; sound(`T2A170`); appendText; 
   Coco`"Hey, what were you doing?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A171`); appendText; 
   Tsugumi`"Looking into something."`;
   waitForClick; clearText; marker; sound(`T2A172`); appendText; 
   Coco`"What?"`;
   waitForClick; clearText; marker; sound(`T2A173`); appendText; 
   Tsugumi`"This elevator."`;
   waitForClick; clearText; marker; sound(`T2A174`); appendText; 
   Coco`"EI the egg elevator?"`;
   waitForClick; clearText; marker; sound(`T2A175`); appendText; 
   Tsugumi`"Yes..."`;
   waitForClick; clearText; marker; sound(`T2A176`); appendText; 
   Coco`"What do you need this big thing to 
investigate for?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco pointed down by Tsugumi's feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There lay a massive plastic case.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure I'd seen it...in the warehouse the 
day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like a toolbox, but....`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A177`); appendText; 
   Tsugumi`"I'm gonna need this later."`;
   waitForClick; clearText; marker; sound(`T2A178`); appendText; 
   Tsugumi`"Right now I'm just checking the status of the 
elevator."`;
   waitForClick; clearText; marker; sound(`T2A179`); appendText; 
   Tsugumi`"Whether it'll move or the doors open 
manually..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was loads more talkative than usual.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her attitude toward Coco was much nicer than 
the one she had toward me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to me that Coco's unique 
personality kept even Tsugumi off balance.`;
   waitForClick; clearText; marker; sound(`T2A180`); appendText; 
   Coco`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`T2A181`); appendText; 
   Coco`"So how about it? Does it look like the 
elevator will move?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A182`); appendText; 
   Tsugumi`"Maybe."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi glanced at me as she said this.`;
   waitForClick; clearText; marker; sound(`T2A183`); appendText; 
   Coco`"Hey, but what good would using the elevator 
do you?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A184`); appendText; 
   Tsugumi`"I thought we'd go down to the third floor..."`;
   waitForClick; clearText; marker; sound(`T2A185`); appendText; 
   Coco`"Third floor? Why don't we just use the 
emergency stairs like we always do?"`;
   waitForClick; clearText; marker; sound(`T2A186`); appendText; 
   Tsugumi`"Because those stairs won't get us where we 
need to go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A187`); appendText; 
   Coco`"Huh?"`;
   waitForClick; clearText; marker; sound(`T2A188`); appendText; 
   Tsugumi`"They won't get us to the Generator Room."`;
   waitForClick; clearText; marker; sound(`T2A189`); appendText; 
   Coco`"Generator Room?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That reminded me of what You had said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU didn't receive any power from the 
outside, but had an in-house generating system.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd said that the facility pumped up hot 
water from a thermal seafloor vent using heat 
from it to operate the power generator....`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A190`); appendText; 
   Coco`"But why do you need to go there?"`;
   waitForClick; clearText; marker; sound(`T2A191`); appendText; 
   Tsugumi`"Because it's a pain with the lights off."`;
   waitForClick; clearText; marker; sound(`T2A192`); appendText; 
   Coco`"Huh?"`;
   waitForClick; clearText; marker; sound(`T2A193`); appendText; 
   Tsugumi`"To make repairs."`;
   waitForClick; clearText; marker; sound(`T2A194`); appendText; 
   Tsugumi`"I think the cause of the blackout is the 
generator."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A195`); appendText; 
   Coco`"Oh, I see!"`;
   waitForClick; clearText; marker; sound(`T2A196`); appendText; 
   Coco`"So that's why you need this big box?"`;
   waitForClick; clearText; marker; sound(`T2A197`); appendText; 
   Tsugumi`"Yes."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A198`); appendText; 
   Coco`"Oh, I get it now.... That makes sense."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was finally freed from Coco's barrage 
of questions.`;
   waitForClick; clearText; marker; sound(`T2A199`); appendText; 
   Tsugumi`"Alright. I'm going down..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A200`); appendText; 
   Tsugumi`"Takeshi...could you come along?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without thinking, I shot a question back at 
her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her question was pretty sudden and caught me 
off balance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Besides, I thought that it was the first time 
that she had called me by my name.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"First there is one thing that I want to ask 
you..."`;
   waitForClick; clearText; marker; sound(`T2A201`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You just said something about the emergency 
stairs not leading to the Generator Room, 
right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah...so what?"`;
   waitForClick; clearText; marker; sound(`T2A202`); appendText; 
   Tsugumi`"Don't you remember the map of LeMU that we 
saw yesterday?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Map? Map...map..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pressed on my temples with my fingers 
trying to tease out a buried memory.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 7 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; sound(`T2A203`); appendText; 
   Tsugumi`"The map of the third floor was divided into 
two areas."`;
   waitForClick; clearText; marker; sound(`T2A204`); appendText; 
   Tsugumi`"Do you remember?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't say I remember it exactly...
but kinda, yeah."`;
   waitForClick; clearText; marker; sound(`T2A205`); appendText; 
   Tsugumi`"And what was between those two areas?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Between them? How am I supposed to know...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There wasn't anything there."`;
   waitForClick; clearText; marker; sound(`T2A206`); appendText; 
   Tsugumi`"Exactly."`;
   waitForClick; clearText; marker; sound(`T2A207`); appendText; 
   Tsugumi`"Which means?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The two areas are divided by a block 
which is now under water...?"`;
   waitForClick; clearText; marker; sound(`T2A208`); appendText; 
   Tsugumi`"Which means?"`;
   waitForClick; clearText; 
});
hideTextbox();
setMapCommentToDisplay({ slot: 1 });
pickMapComment2({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"We can't move directly from the Control Room 
area to the Generator Room area."`;
   waitForClick; clearText; marker; sound(`T2A209`); appendText; 
   Tsugumi`"So?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, I see..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"To get to the Generator Room's area, 
we have to access the second floor..."`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
bgload({ name: `MAP2F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 4 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"And the only way we can do that is by 
using the neutral buoyancy elevator."`;
   waitForClick; clearText; marker; sound(`T2A210`); appendText; 
   Tsugumi`"Could you...help me out?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But do you think it's alright? I mean, we 
haven't asked Sora's opinion..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And we don't know if the cause of the 
blackout is really the generator..."`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG23A2`, transition: 20 });
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A211`); appendText; 
   Tsugumi`"I don't think that'd do any good."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T2A212`); appendText; 
   Tsugumi`"I don't think you're going to find Sora."`;
   waitForClick; clearText; marker; sound(`T2A213`); appendText; 
   Tsugumi`"Because of the blackout..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A214`); appendText; 
   Tsugumi`"The Control Room computer is going to be 
down."`;
   waitForClick; clearText; marker; sound(`T2A215`); appendText; 
   Tsugumi`"Even if Sora were around, she wouldn't be 
able to contact LeMMIH."`;
   waitForClick; clearText; marker; sound(`T2A216`); appendText; 
   Tsugumi`"So the only thing that we can do is go check 
out the generator...right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I suppose so, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A217`); appendText; 
   Tsugumi`"So what're you going to do?"`;
   waitForClick; clearText; marker; sound(`T2A218`); appendText; 
   Tsugumi`"Will you come along?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A219`); appendText; 
   Tsugumi`"Takeshi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A220`); appendText; 
   Tsugumi`"I really...need...you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Those words shocked me. I thought my heart 
stopped for a second.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I really...need...you...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were not words that I ever expected to 
hear from Tsugumi's mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stared straight at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her intense gaze made me uncomfortable.`;
   waitForClick; clearText; marker; sound(`T2A221`); appendText; 
   Tsugumi`"Please..."`;
   waitForClick; 
});
choice(
   `Help Tsugumi`
   `Look for Sora first`
);
switch (choice) {
   case 0: goto(lbl_000013c3);
   case 1: goto(lbl_00001431);
}
let lbl_000013c3;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"A-alright..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll go with you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stared back in Tsugumi's eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think about going against her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi nodded.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A222`); appendText; 
   Coco`"Hey, what about Coco?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A223`); appendText; 
   Tsugumi`"I've got another job I want Coco to do."`;
   waitForClick; clearText; marker; sound(`T2A224`); appendText; 
   Coco`"Another job? What's that?"`;
   waitForClick; clearText; marker; sound(`T2A225`); appendText; 
   Tsugumi`"I want you to tell You and the Kid what I 
just told you."`;
   waitForClick; clearText; marker; sound(`T2A226`); appendText; 
   Tsugumi`"I mean, tell them that Takeshi and I are 
going to the Generator Room..."`;
   waitForClick; clearText; marker; sound(`T2A227`); appendText; 
   Coco`"Oh, that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A228`); appendText; 
   Coco`"Roger! Ten-four that!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco clicked her heals together and gave a 
kind of salute.`;
   waitForClick; clearText; 
});
goto(lbl_000015a5);
let lbl_00001431;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"N-no..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't want to go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned my face to avoid Tsugumi's eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want her eyes to drag me in.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We've got to look for Sora first. This isn't 
a time to be acting selfishly."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADL`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A229`); appendText; 
   Tsugumi`"...I see."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi scowled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She gave me that look that could kill again.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A230`); appendText; 
   Coco`"Hey, hey. Do you want me to go instead?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco asked the question innocently.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A231`); appendText; 
   Tsugumi`"Uh...let's see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's expression soon returned to normal.`;
   waitForClick; clearText; marker; sound(`T2A232`); appendText; 
   Tsugumi`"But I don't think it is possible with just 
you alone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A233`); appendText; 
   Tsugumi`"First I want to ask you to do another job."`;
   waitForClick; clearText; marker; sound(`T2A234`); appendText; 
   Coco`"Another job? What's that?"`;
   waitForClick; clearText; marker; sound(`T2A235`); appendText; 
   Tsugumi`"I want you to tell You and the Kid that I'm 
going to the Generator Room."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A236`); appendText; 
   Tsugumi`"And...that Takeshi put me in a difficult spot 
because he was scared and wouldn't come along 
with me..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, hold on! When did I say I was scared?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I jumped in between Coco and Tsugumi.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO06ADM`, name2: `TU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A237`); appendText; 
   Tsugumi`"'No. I don't want to go' That sounds pretty 
scared to me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! Who do you think you're calling scared? 
I just think that we should do something else 
first."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A238`); appendText; 
   Tsugumi`"See what I mean. Something happens and you 
start whining like a baby..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A239`); appendText; 
   Tsugumi`"You are a gutless man..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A240`); appendText; 
   Tsugumi`"Or maybe you're not even a man yet...?"`;
   waitForClick; clearText; marker; sound(`T2A241`); appendText; 
   Tsugumi`"Coco, hurry and get You and the Kid. Takeshi 
isn't going to be any use."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi! You don't have to talk like that!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was peeved.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A242`); appendText; 
   Tsugumi`"So how do you want me to say it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without hesitating, Tsugumi shot the question 
right back at me. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For one moment I thought I'd grab her by her 
collar and show her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I dropped my hand....`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, okay. Fine. I'll go with you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll go with you because you are too scared 
to go alone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A243`); appendText; 
   Tsugumi`"....Hmmph."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi laughed through her nose.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A244`); appendText; 
   Coco`"So what am I supposed to do?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A245`); appendText; 
   Tsugumi`"...Just tell You that I am going to the 
Generator Room."`;
   waitForClick; clearText; marker; sound(`T2A246`); appendText; 
   Tsugumi`"And I'm taking Takeshi along."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2A247`); appendText; 
   Coco`"Roger! Ten-four that!"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco clicked her heals together and gave a 
kind of salute.`;
   waitForClick; clearText; 
});
let lbl_000015a5;
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 120 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_2B`);
