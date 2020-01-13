showTextbox();
text(() => {
   marker; sound(`C1T000`); appendText; 
   Girl`"It doesn't do us any good just standing 
around here, how about you take us somewhere?"`;
   waitForClick; clearText; marker; sound(`C1T001`); appendText; 
   //Park staff
   Park_staff`"Certainly. There is a relatively safe place 
nearby. I will take you there..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(RELATIVELY safe...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was about the same as saying that 
everywhere else was dangerous.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We turned around and started heading back the 
corridor we'd been washed down. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at a panel and finally realized that 
we were in Zweite stock—basement level two.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A short time later...`;
   waitForClick; clearText; marker; appendText; 
   Narr`After walking a few dozen feet a strange sound 
caught my attention.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam, bam, bam...`;
   waitForClick; 
});
choice(
   `(That could be my imagination, but...)`
   `(Did I just hear something?)`
);
switch (choice) {
   case 0: goto(lbl_0000007d);
   case 1: goto(lbl_000000b8);
}
let lbl_0000007d;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(That sounded like a pounding noise...?)`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, did you just hear something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T005`); appendText; 
   //Park staff
   Park_staff`"Sure you aren't imagining things?"`;
   waitForClick; clearText; marker; sound(`C1T006`); appendText; 
   //Park staff
   Park_staff`"Due to all of the water pressure here at 
LeMU, it isn't uncommon for the metal 
partitions to rattle occasionally."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Yeah. It must have just been my imagination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was just like Sora said, and LeMU's 
partitions were only creaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shaking it off, we kept trudging forward.`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 1`);
jump(`T_1B`);
let lbl_000000b8;
varop(`(28 0a a4) ba += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey, did you just hear something?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped and asked the two of them.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU06ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T002`); appendText; 
   Girl`"?"`;
   waitForClick; clearText; marker; sound(`C1T003`); appendText; 
   //Park staff
   Park_staff`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You didn't just hear a kind of pounding 
noise?"`;
   waitForClick; clearText; marker; sound(`C1T004`); appendText; 
   Girl`"No."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T005`); appendText; 
   //Park staff
   Park_staff`"Are you sure you aren't mistaken?"`;
   waitForClick; clearText; marker; sound(`C1T006`); appendText; 
   //Park staff
   Park_staff`"Due to all of the water pressure here at 
LeMU, it isn't uncommon for the metal 
partitions to rattle occasionally."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nah, it didn't sound like that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It sounded like someone pounding on something 
with their hand."`;
   waitForClick; clearText; marker; sound(`C1T007`); appendText; 
   Girl`"?"`;
   waitForClick; clearText; marker; sound(`C1T008`); appendText; 
   //Park staff
   Park_staff`"?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm going to go check."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T009`); appendText; 
   //Park staff
   Park_staff`"Alright, we'll go with you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl didn't say anything. She just 
silently tagged along with us.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—In front of the Jellyfish Gondola.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam, bam, bam....bam, bam, bam, bam`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_13`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"There. You can hear it, right?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T010`); appendText; 
   //Park staff
   Park_staff`"Yeah..."`;
   waitForClick; clearText; marker; sound(`C1T011`); appendText; 
   Girl`"So there's someone else trapped here too...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We strained our ears to find where the sound 
was coming from.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to come from the elevator area right 
behind us.`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The three of us, myself and the other two 
girls, ran as fast as we could over to the 
area.`;
   waitForClick; clearText; 
});
bgload({ name: `BG22A3`, transition: 20 });
playSFX({ name: `SE00_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T012`); appendText; 
   //??
   Unk`"Heeey! Somebodyyyy!"`;
   waitForClick; clearText; marker; sound(`C1T013`); appendText; 
   //??
   Unk`"Somebodyyyy!"`;
   waitForClick; clearText; marker; sound(`C1T014`); appendText; 
   //??
   Unk`"Is anyone thereee?"`;
   waitForClick; clearText; marker; sound(`C1T015`); appendText; 
   //??
   Unk`"Anyooooone?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two female voices were coming from inside the 
elevator.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU01ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The three of us looked at each other and 
nodded.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey! Can you hear us!?"`;
   waitForClick; clearText; marker; sound(`C1T016`); appendText; 
   //??
   Unk`"Ah! Y-y-yeah! I can hear you!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hang on! We'll get you out!"`;
   waitForClick; clearText; marker; sound(`C1T017`); appendText; 
   //??
   Unk`"Please!"`;
   waitForClick; clearText; marker; sound(`C1T018`); appendText; 
   //??
   Unk`"Aah... Thank goodness..."`;
   waitForClick; clearText; marker; sound(`C1T019`); appendText; 
   //??
   Unk`"I didn't think anyone would come to help..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The voice that had answered seemed to be in 
good spirits.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Whoever it was didn't sound like they were 
weak, or injured.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I placed both of my hands firmly on the door 
and pried it apart with all my strength.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door opened.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the other side of the door there 
was...nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lift (or at least the part people ride in) 
hadn't stopped directly on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked down at my feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spotted a circular floor, slightly below in 
the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No. I realized that wasn't the floor, it was 
the roof of the trapped elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a little more than six feet, from where 
I was standing`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next, I....`;
   waitForClick; 
});
choice(
   `I stepped forward`
   `Looked up`
);
switch (choice) {
   case 0: goto(lbl_00000270);
   case 1: goto(lbl_00000279);
}
let lbl_00000270;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stepped forward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And fell...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I should have known.`;
   waitForClick; clearText; 
});
goto(lbl_0000027e);
let lbl_00000279;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thick pipes extended vertically with what 
looked like four rails attached to their side.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that the elevator used these rails 
to move up and down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Come to think of it, I didn't see any trace of 
cables or wires that you might expect in an 
elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which meant that the elevator wasn't using 
pulleys to go up and down...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Craning my head to get a better look, I gazed 
further up the shaft to see where the pipe 
went.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There wasn't any lighting, but enough light 
poured through from behind me, that I could 
get a vague sense of the outline.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pipes ended partway up, as did the rails.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where they ended they were covered by some 
kind of heavy partition.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Partition....?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe it's a watertight door...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`A section of the pipe had been closed off to 
probably to prevent seawater from flooding in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't notice anything else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not even a ladder attached to the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Meaning...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The only way down is to jump...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I leapt out into the void.`;
   waitForClick; clearText; 
});
let lbl_0000027e;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Landing impressively...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...at least, that was my INTENTION...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—WHAM!`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Agh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I struck my knee painfully.`;
   waitForClick; clearText; marker; sound(`C1T020`); appendText; 
   //??
   Unk`"Are you alriiight?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard a voice from below.`;
   waitForClick; clearText; marker; sound(`C1T021`); appendText; 
   //Park staff
   Park_staff`"Did you hurt yourself?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then a voice from above......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking up, from the other side of the square 
frame of the elevator doors, the female park 
employee had a worried expression on her face. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, sure, I'm fine, just fine..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I replied, while rubbing my knee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been a long time since I'd jumped down 
from a height greater than my own.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe not since elementary school.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And as I stood there thinking that...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hold on. I'll get you out of there."`;
   waitForClick; clearText; marker; sound(`C1T022`); appendText; 
   //??
   Unk`"Okaaaay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened up the small door set into the 
ceiling of the elevator.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_09`, a1: 0, volume: 100 });
stopBGM();
removeBG({ mode: WHITE, transition: 02 });
playBGM({ num: 9, volume: 100 });
bgload({ name: `EV_CO02A`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`C1T023`); appendText; 
   //??
   Unk`"Oh, thank you so much!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked to the girl inside`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face was one big smile. She was clearly 
happy she was about to be freed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I think I've seen this girl...somewhere 
before...)`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah!"`;
   waitForClick; clearText; marker; sound(`C1T024`); appendText; 
   //??
   Unk`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're that girl from before!"`;
   waitForClick; clearText; marker; sound(`C1T025`); appendText; 
   //??
   Unk`"You're that guy from before!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl and I pointed at each other and froze.`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   //??
   Unk`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spotted the scruffy face of a dog circling 
around her feet.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Popo..."`;
   waitForClick; clearText; marker; sound(`C1T026`); appendText; 
   //??
   Unk`"His name's not 'Popo'..."`;
   waitForClick; clearText; marker; sound(`C1T027`); appendText; 
   Coco`"This little guy's name is Pipi, and my name's 
Coco.... Try not to mix them up, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi and Coco...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's right...`;
   waitForClick; clearText; marker; appendText; 
   Narr`This was the dog that had clamped onto that 
mascot Myumyun's tail, up at the floating 
island, and his owner.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But...what are you doing here?"`;
   waitForClick; clearText; marker; sound(`C1T028`); appendText; 
   Coco`"Well what do you expect me to say to that...?"`;
   waitForClick; clearText; marker; sound(`C1T029`); appendText; 
   Coco`"I was trying to go to one of the lower 
levels, and all of a sudden this 
escalator stopped, and..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It isn't an escalator, it's an elevator, 
alright?"`;
   waitForClick; clearText; marker; sound(`C1T030`); appendText; 
   Coco`"Ha, ha, oops.... I mean evelator, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, NOT e-ve-lator, E-LE-VA-TOR."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you're on a moving staircase, that's 
called an escalator, and if you're in 
a box that goes up and DOWN, now that's 
an elevator. Try not to mix them up."`;
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
   waitForClick; clearText; marker; appendText; 
   Narr`It had been the same with me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had only been a little earlier that I had 
been trapped in another elevator...`;
   waitForClick; clearText; marker; sound(`C1T033`); appendText; 
   Coco`"Hey?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm?"`;
   waitForClick; clearText; marker; sound(`C1T034`); appendText; 
   Coco`"I'd kind of like to get out of here...soon..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco gave me an imploring look.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, aah, I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said that and got down on my stomach 
from atop the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I leaned down from the small hole, and stuck 
my hand out to Coco.`;
   waitForClick; clearText; marker; sound(`C1T035`); appendText; 
   Coco`"Please, help Pipi first."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco held up Pipi to me, stretching as far as 
she could to make him reach.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed onto Pipi's front legs and pulled 
him out from the hole in the ceiling.`;
   waitForClick; clearText; marker; sound(`PIPI_08`); appendText; 
   Pipi`"*whine*... *whine*...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi sniffed for my scent.`;
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
   Narr`Coco jumped over and over, reaching out for my 
hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But... Either she was too short, or just 
had a terrible jump, because she didn't 
even reach my fingertips.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, that reminds me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the position I was in, arms hanging down, 
I looked around the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized that nobody was in there but Coco. 
There was no mistake.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh? That's strange...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I could have sworn I heard two people in 
there...)`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`C1T037`); appendText; 
   Coco`"Aaii! Haiya! Awwww, just a little bit 
further..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was still jumping.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Coco?"`;
   waitForClick; clearText; marker; sound(`C1T038`); appendText; 
   Coco`"Yeah?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Pipi can't speak, uh, English, right?"`;
   waitForClick; clearText; marker; sound(`C1T039`); appendText; 
   Coco`"Of course not!"`;
   waitForClick; clearText; marker; sound(`C1T040`); appendText; 
   Coco`"He only speaks Piplish!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Woof woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi barked into my ear.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's what I thought..."`;
   waitForClick; clearText; marker; sound(`C1T041`); appendText; 
   Coco`"...Why do you ask?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, well earlier? I could have sworn I heard 
two voices coming from this elevator..."`;
   waitForClick; clearText; marker; sound(`C1T042`); appendText; 
   Coco`"Two?"`;
   waitForClick; clearText; marker; sound(`C1T043`); appendText; 
   Coco`"This whole time it's only been Pipi and me in 
here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uhhh.... Yeah, I can tell that from looking."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe the next elevator over?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco looked puzzled.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, well. Whatever."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, before I take care of that, we gotta 
get you out of here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco started jumping again.`;
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
   waitForClick; clearText; marker; appendText; 
   Narr`..........`;
   waitForClick; clearText; marker; appendText; 
   Narr`.......`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG22A3`, transition: 20 });
clock(`16:36`);
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T049`); appendText; 
   Coco`"Wheeew! That was close."`;
   waitForClick; clearText; marker; sound(`C1T050`); appendText; 
   Coco`"Thank you so much."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco shook my hand profusely.`;
   waitForClick; clearText; marker; sound(`C1T051`); appendText; 
   Coco`"Um, by the way? Who are these people...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco looked back and forth between the faces 
of the female park employee, and the girl in 
black clothing.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(1, 2, 4);
multifgload3({ name1: `TU17ADS`, name2: `CO15ADS`, name3: `SO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`C1T052`); appendText; 
   Sora`"My name is Sora Akanegasaki."`;
   waitForClick; clearText; marker; sound(`C1T053`); appendText; 
   Sora`"Do you remember me?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T054`); appendText; 
   Coco`"Aaah! You're that lady who was giving 
explanations at the entrance!"`;
   waitForClick; clearText; marker; sound(`C1T055`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T056`); appendText; 
   Coco`"Ummm, uuuuhhh, my name is..."`;
   waitForClick; clearText; marker; sound(`C1T057`); appendText; 
   Sora`"I know."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T058`); appendText; 
   Sora`"Coco Yagami, correct?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T059`); appendText; 
   Coco`"Huh? How'd you know?"`;
   waitForClick; clearText; marker; sound(`C1T060`); appendText; 
   Sora`"Because you were so enthusiastic when you 
replied to me, 'I'M CO-CO YA-GA-MI!'"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T061`); appendText; 
   Coco`"Oh, yeah..."`;
   waitForClick; clearText; marker; sound(`C1T062`); appendText; 
   Coco`"You remembered?"`;
   waitForClick; clearText; marker; sound(`C1T063`); appendText; 
   Sora`"I have a good memory."`;
   waitForClick; clearText; marker; sound(`C1T064`); appendText; 
   Sora`"I also remember your dog's name. Pipi, wasn't 
it?"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T065`); appendText; 
   Coco`"And...you are...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco turned to the girl in black clothing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Girl`"........."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`PIPI_11`); appendText; 
   Pipi`"Woof woof! Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shaking his tail excitedly, for some reason 
Pipi latched on to the girl's skirt. `;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T067`); appendText; 
   Coco`"Huh?"`;
   waitForClick; clearText; marker; sound(`C1T068`); appendText; 
   Coco`"Um, wait a second...you wouldn't happen to 
be...that person who was wearing the Lemur 
costume?"`;
   waitForClick; clearText; marker; appendText; 
   Girl`"........."`;
   waitForClick; clearText; marker; sound(`C1T069`); appendText; 
   Coco`"Hey, you are, aren't you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T070`); appendText; 
   Coco`"I know it! You've got to be!"`;
   waitForClick; clearText; marker; sound(`C1T071`); appendText; 
   Coco`"I remember your voice!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T072`); appendText; 
   Girl`"Whatever. I don't really care about that, but 
can you do something about this mutt?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl dropped her cutting gaze to Pipi who 
was busily gnawing on the edge of her skirt.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T073`); appendText; 
   Coco`"Ah, aah, I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco scooped up Pipi, and rapped him lightly 
on the head.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T074`); appendText; 
   Coco`"Bad dog, you know better than to do that."`;
   waitForClick; clearText; marker; sound(`PIPI_07`); appendText; 
   Pipi`"*whine* *whimper*..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey? How about my name? You don't want to 
know?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked, as I twirled Pipi's tail around my 
finger. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T075`); appendText; 
   Coco`"I already know what it is."`;
   waitForClick; clearText; marker; sound(`C1T076`); appendText; 
   Coco`"Takeshi Kuranari...right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco said this with a grin on her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh? When did I introduce myself?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It bugged me that she knew, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...oh well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't really a big deal...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T077`); appendText; 
   Coco`"By the way...I've got something I want to 
ask..."`;
   waitForClick; clearText; marker; sound(`C1T078`); appendText; 
   Sora`"?"`;
   waitForClick; clearText; marker; sound(`C1T079`); appendText; 
   Girl`"?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`C1T080`); appendText; 
   Coco`"Where did everyone else go?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`While we were walking, Sora gave Coco a brief 
explanation of the chain of events leading up 
to here.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The power failure. The alarms going off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How we all failed to get out in time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And of course the flooding. Everything.`;
   waitForClick; clearText; marker; sound(`C1T081`); appendText; 
   Coco`"F-flooooding!?"`;
   waitForClick; clearText; marker; sound(`C1T082`); appendText; 
   Coco`"You mean, water from the ocean came gushing 
into LeMU!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Taken off guard, Coco looked as if she'd been 
gut-punched.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it wasn't surprising.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not many people would calmly reply 'Oh, 
really,' when notified they had just missed a 
massive flood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, the fact that our group was able to 
act as calmly as it did seemed fairly unusual.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Humans may be surprisingly resilient animals.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When one's life was on the line, people who 
had the ability to keep levelheaded and think 
the situation through to the next step.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From time immemorial, only people with these 
traits survived to see their children and 
children's children.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It occurred to me then.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And at the same time, for some reason my chest 
was pounding as I looked at the three girls.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'm the only guy here. The rest are girls)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(So, I can't mess things up. I've got to keep 
it together no matter what)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(As the only man here, it's my responsibility 
to protect the three of them)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a simple, old-fashioned, and maybe 
moldy, petrified way of thinking. But at that 
moment, it was simply how I felt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Men protect women—`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was able to keep rational precisely because 
that sense of righteousness drove my actions 
to an almost embarrassing degree.`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`While I was thinking about these trivial 
things, we'd changed location completely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`—The Dolphin Carousel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T083`); appendText; 
   Sora`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora raised her voice in alarm.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T084`); appendText; 
   Sora`"Someone's coming this way."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...What?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B005`); appendText; 
   //Park staff
   Park_staff`"*Sigh*"`;
   waitForClick; clearText; marker; sound(`T1B006`); appendText; 
   //Park staff
   Park_staff`"For a while I wondered what 
was going to happen to us, but..." `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was one of the female employees that I'd 
met once before.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B007`); appendText; 
   //Park staff
   Park_staff`"I'm glad we survived..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B008`); appendText; 
   //Park staff
   Park_staff`"Hey, aren't you...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl finally noticed us.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I didn't think there'd be anybody 
else here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B009`); appendText; 
   //Park staff
   Park_staff`"Yeah. How are you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"About as good as I look, I suppose."`;
   waitForClick; clearText; marker; sound(`T1B010`); appendText; 
   //Park staff
   Park_staff`"Seems like you had a rough 
time of it, too..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, lucky guess..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Relaxing a bit, I returned her smile.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Behind her was someone else.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01BDM`, name2: `KA09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B013`); appendText; 
   Kid`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was that kid who we'd taken to the 
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His expression looked darker somehow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If he'd become super upbeat all of the sudden 
that would have been weird too, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason it bothered me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is something wrong with him? 
He doesn't look so hot."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B014`); appendText; 
   //Park staff
   Park_staff`"Oh, he's, a bit..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The attendant hesitated.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B015`); appendText; 
   //Park staff
   Park_staff`"By the way..."`;
   waitForClick; clearText; marker; sound(`T1B016`); appendText; 
   //Park staff
   Park_staff`"Hey, Sora, do you have any idea what our 
situation is?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl asked Sora.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B017`); appendText; 
   Sora`"Well, the communication lines are down.... 
I've been investigating ways to restore our 
connection, but it's going to take some time."`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 2`);
jump(`T_1B`);
