goto(lbl_00000829).if(var_b3 == 1);
goto(lbl_00000c6b).if(var_b3 == 2);
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 30 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We tried two emergency sets of stairs in 
the area, but both were a waste of effort.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were shut off by thick partitions, making
it impossible to climb up to Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`According to You there were a total of 12 
emergency stairs in LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Three of those were closed off, so that 
left nine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I walked around emergency corridors
searching for those nine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A1L`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We met with a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A1`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A1R`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The watertight doors were completely shut and
there was no way we were getting them open
manually.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We gave up and headed out into the normal
corridors, to see if we could work our way
around using them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And still...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A1L`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We met with a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A1`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A1R`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside the sprawling LeMU complex, there was 
a web of several dozen corridors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We investigated each, only finding closed doors
everywhere. It seemed hopeless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both the normal corridors and the emergency
corridors were sealed .`;
   waitForClick; clearText; marker; appendText; 
   Narr`All were blocked off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only thing left for us to try was...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A184`); appendText; 
   You`"Dritte stock."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A185`); appendText; 
   You`"It looks like the only thing left is to go 
down a floor..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG29A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With the elevators out of action, the emergency
stairs were our only choice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thankfully, one-third of the remaining three
stairways were still operating.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which meant that even if there was no going 
up, we could still go down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I wound around and around the spiral
stairwell until we reached Dritte stock (three
floors underwater.)`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B1`, transition: 20 });
setSceneTitle({ index: 50 });
playSFX({ name: `SE01_03`, a1: 0, volume: 100 });
clock(`17:32`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Wa...water..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I muttered this without thinking when we 
reached the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As far as I could see, the floor was a sheet of
water that had flooded in...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was about up to my ankles.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There's water flooding in from 
somewhere else!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A186`); appendText; 
   You`"No, I don't think so."`;
   waitForClick; clearText; marker; sound(`S1A187`); appendText; 
   You`"The water's not moving, is it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now that she mentioned it, there was not even a
ripple on the water's surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no evidence that the water level was
increasing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around to be sure, but there 
weren't any signs that water was leaking 
from anywhere.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well then, what is this...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A188`); appendText; 
   You`"This must be from the water that washed us 
away earlier."`;
   waitForClick; clearText; marker; sound(`S1A189`); appendText; 
   You`"I figure the seawater that pooled on Zweite 
stock flowed down here."`;
   waitForClick; clearText; marker; sound(`S1A190`); appendText; 
   You`"Maybe via the emergency stairs, or a vent...
I don't know how, but somehow it flowed down 
here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A191`); appendText; 
   You`"Hey, you remember that saying?"`;
   waitForClick; clearText; marker; sound(`S1A192`); appendText; 
   You`"About how water flows downhill...?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We entered the room from a door along the 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room's massive ancient remains were 
steeped in water, making it seem just like 
the seafloor had risen up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As You and I looked around the wide room our 
legs splashed water all over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our drenched clothes were drying so we
didn't really feel the cold.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water on the floor was not as cold as I'd
expected.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somehow walking in the water in shoes was,
well, unpleasant.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3R`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When we turned in to a corridor, we heard an
unexpected sound.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam, bam, bam, bam, bam...
`;
   
});
waitForSFX();
stopSFX()
playSFX({ name: `SE10_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   appendText; 
   Narr`Bam, bam, bam, bam, bam...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A193`); appendText; 
   You`"Hey, did you hear something just now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We stopped and listened.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam, bam, bam, bam, bam...
`;
   
});
waitForSFX();
stopSFX()
playSFX({ name: `SE10_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   appendText; 
   Narr`Bam, bam, bam, bam, bam...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Somebody was hitting something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somewhere nearby...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There are other people here..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A194`); appendText; 
   You`"Other people that were left behind!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We ran at full speed in the direction of 
the sound.`;
   waitForClick; clearText; 
});
bgload({ name: `BG22B1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`S1A195`); appendText; 
   //??
   Unk`"Heeeeey! Somebooooody!"`;
   waitForClick; clearText; marker; sound(`S1A196`); appendText; 
   //??
   Unk`"Somebooooody!"`;
   waitForClick; clearText; marker; sound(`S1A197`); appendText; 
   //??
   Unk`"Is there anybody there?"`;
   waitForClick; clearText; marker; sound(`S1A198`); appendText; 
   //??
   Unk`"Anybody?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two girl's voices could be heard from 
within the elevator.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 12, volume: 97 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and I looked at each other and nodded.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A199`); appendText; 
   You`"Hold on just a little longer!"`;
   waitForClick; clearText; marker; sound(`S1A200`); appendText; 
   You`"We're going to open the door for you!"`;
   waitForClick; clearText; marker; sound(`S1A201`); appendText; 
   //??
   Unk`"Alright! Oh good!"`;
   waitForClick; clearText; marker; sound(`S1A202`); appendText; 
   //??
   Unk`"I was so worried that no one would come."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU12BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The voice from inside sounded well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't sound injured or weak.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A203`); appendText; 
   You`"Still, how are we going to open this?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You placed both of her hands on the door and
pushed left and right.`;
   waitForClick; clearText; marker; sound(`S1A204`); appendText; 
   You`"Uggggh!"`;
   waitForClick; clearText; marker; sound(`S1A205`); appendText; 
   You`"Oh! Why do we keep running into problems like
this?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Won't it open?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A206`); appendText; 
   You`"If you were paying attention, you'd be able to
tell! You give it a try!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I switched places with You and reached out 
to try to open the door.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ummmpphhhhhhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't budge.`;
   waitForClick; clearText; marker; sound(`S1A207`); appendText; 
   You`"Come on! Put some power into it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to put my fingers in the crack in the
door, but my fingernails just barely squeezed
in and there was nothing happening there.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Owwww...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood started oozing from the nail of my index
finger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was the digit next to that that caught
my eye.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The thumb on my left hand.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I noticed a distinct mark on it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the meaty part of the thumb was a deep scar
about a half-inch long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if I had had it for long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The mouth of the cut was swollen and 
milky-white colored.`;
   waitForClick; clearText; marker; sound(`S1A208`); appendText; 
   You`"Are you alright?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her question brought me back to reality.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A209`); appendText; 
   You`"Oh, my! You're bleeding. Let me see."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You grabbed my left hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suddenly bent my thumb under, hiding 
the scar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason I didn't want her to see it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You took an adhesive bandage from her pocket
and put it on the bloody finger.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A210`); appendText; 
   You`"I swear, you need so much looking after."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Th-thanks..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My finger smelled faintly sweet.`;
   waitForClick; clearText; marker; sound(`S1A211`); appendText; 
   //??
   Unk`"Uh, the door still won't open?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A212`); appendText; 
   You`"But it seems there is someone that needs even
more looking after than you do..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What should we do...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A213`); appendText; 
   You`"...Oh, that's right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You muttered...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She searched around in her pocket 
for something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And she took out a...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A214`); appendText; 
   You`"Drum roll please! Rat-tat-tat-tat-tat. Ta-da."`;
   waitForClick; clearText; marker; sound(`S1A215`); appendText; 
   You`"A marker!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just felt-tipped pen.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU12BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A216`); appendText; 
   You`"See this? You take it like this... then do
this... around and around and around..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she said this, You screwed the capped 
end into the space between the doors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A gap appeared.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A217`); appendText; 
   You`"See?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I jabbed my finger into open space gap and 
started forcing the door open.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The box inside (the part where people ride) was
stuck right before arriving at Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Above the door, jutting out some 20 inches or
so was the lower bit of the elevator box.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was at a height where if I stretched my hand
out completely, it would just reach.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If we could get the box open, then it seemed
possible to pull the people trapped inside over
to our side.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A218`); appendText; 
   You`"Shoulder-ride."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's one word said it all.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As she implied, I stood in front of her 
and spread my legs, bracing myself.`;
   waitForClick; clearText; marker; sound(`S1A219`); appendText; 
   You`"Hey! Why do I have to lift you up?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S1A220`); appendText; 
   You`"I meant the opposite way around..."`;
   waitForClick; clearText; marker; sound(`S1A221`); appendText; 
   You`"In this type of situation, it is the stronger
person that is on the bottom, right?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went around behind You, wordlessly squatting
down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was wearing a skirt after all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(One reason I tried to be on top was I thought
I would save her the embarrassment...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I was thinking that, You straddled my 
head with her legs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put both my hands on my knees, supporting
myself, and stood up all at once.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her soft thighs hugged against my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was flush against the back of my neck.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a bit nice...`;
   waitForClick; clearText; marker; sound(`S1A222`); appendText; 
   You`"Wait! Hold on! We're almost there!"`;
   waitForClick; clearText; marker; sound(`S1A223`); appendText; 
   //??
   Unk`"Please help."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You took the marker and started prying it 
between the doors again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stuck her finger in the gap.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then she opened the door with a flourish.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
bgload({ name: `EV_SA01A`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`S1A224`); appendText; 
   //??
   Unk`"Wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With You on my shoulders, I looked up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A girl in a uniform was peeking down.`;
   waitForClick; clearText; marker; sound(`S1A225`); appendText; 
   //??
   Unk`"Whoa!"`;
   waitForClick; clearText; marker; sound(`S1A226`); appendText; 
   You`"Ahhh!"`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Ahhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I don't know why, but all three of us 
exclaimed at once.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA01B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then, I felt something like an electric 
shock run through me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Severe lights went off in my mind and I heard 
the sound of something snapping.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was suddenly dizzy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lost my sense of balance and swayed forward 
and back.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My vision and consciousness were overrun 
by white.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't take any more...`;
   waitForClick; clearText; marker; sound(`S1A227`); appendText; 
   You`"Kyaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I fell to the floor like a marionette with its
strings snipped.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_03`, a1: 0, volume: 100 });
bgload({ name: `EV_SA01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A228`); appendText; 
   You`"Ouch. Geez..."`;
   waitForClick; clearText; marker; sound(`S1A229`); appendText; 
   You`"Why'd you fall like that? You could have hurt
someone!"`;
   waitForClick; clearText; marker; sound(`S1A230`); appendText; 
   You`"Geez. Lazy. Kids these days are so lazy..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA01A`, transition: 00 });
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Things began to fall back into focus.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was lying on my back looking at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights were shining down brightly.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A231`); appendText; 
   //??
   Unk`"Wah-ha-ha-ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girls...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girls were pointing at me and laughing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Their innocent faces were enveloped in
celestial-like light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just like a couple of angels...staring 
down from heaven.`;
   waitForClick; clearText; marker; sound(`S1A232`); appendText; 
   //??
   Unk`"Hey, are you alright?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know why...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a bizarre sense of something-like deja
vu-that came welling up in my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I had seen this all before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The angelic smiling faces somehow made me feel
nostalgic...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like it was a fragment of some familiar 
everyday scenery...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't explain it, but somehow I had that
vague sense about things.`;
   waitForClick; clearText; marker; sound(`S1A233`); appendText; 
   //??
   Unk`"Huh? Why is the floor all wet? Did a water 
pipe burst?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh, they don't know because they've been 
stuck in the elevator.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I was about to answer, the girl cut me off.`;
   waitForClick; clearText; marker; sound(`S1A234`); appendText; 
   //??
   Unk`"But that's so important as..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG22B1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `YU17BWM`, name2: `SA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A235`); appendText; 
   //??
   Unk`"...just what are you doing here, Nakkyu?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl said this as she descended from the
elevator, patting her clothes back into place.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A236`); appendText; 
   You`"I should be asking you that!"`;
   waitForClick; clearText; marker; sound(`S1A237`); appendText; 
   You`"Mayo, what are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mayo? The girl's name was Mayo?`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A238`); appendText; 
   Mayo`"Whaddya mean? If you'd take a look at my 
outfit you'd know."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A239`); appendText; 
   You`"You're on a school trip?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A240`); appendText; 
   Mayo`"That's for seniors."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A241`); appendText; 
   You`"Oh. Right...Mayo, you're still a junior, 
yeah?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A242`); appendText; 
   Mayo`"Right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A243`); appendText; 
   You`"So what then?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A244`); appendText; 
   Mayo`"Have you forgotten everything about your 
old high school already?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A245`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A246`); appendText; 
   Mayo`"Volunteer activities!"`;
   waitForClick; clearText; marker; sound(`S1A247`); appendText; 
   Mayo`"At Kyumeikan, juniors are supposed to go 
out and volunteer somewhere, right?"`;
   waitForClick; clearText; marker; sound(`S1A248`); appendText; 
   Mayo`"Nakkyu, you just graduated this year so you've
gotta remember, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A249`); appendText; 
   You`"Oh, that's right ? the volunteer program!"`;
   waitForClick; clearText; marker; sound(`S1A250`); appendText; 
   You`"The Civil Service Volunteer Program."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A251`); appendText; 
   You`"Well...that was the official name, but it was
really just a glorified field trip."`;
   waitForClick; clearText; marker; sound(`S1A252`); appendText; 
   You`"It's still the same old deal, I bet."`;
   waitForClick; clearText; marker; sound(`S1A253`); appendText; 
   You`"The girls go 'help' out at LeMU for a day, or
something stupid like that."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A254`); appendText; 
   Mayo`"You got it."`;
   waitForClick; clearText; marker; sound(`S1A255`); appendText; 
   You`"When I was there we went to United Land...
but I guess they changed it to LeMU, huh?"`;
   waitForClick; clearText; marker; sound(`S1A256`); appendText; 
   Mayo`"You didn't see any other students,
did you Nakkyu?"`;
   waitForClick; clearText; marker; sound(`S1A257`); appendText; 
   Mayo`"The whole Kyumeikan junior class 
should be here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A258`); appendText; 
   You`"No. I didn't see anyone."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`While the two of them were talking, I decided
to take a peek at the elevator that Mayo was
stuck in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed on to the entrance of the box and
used my momentum to pull myself up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was empty inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I thought I heard two girls inside...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder if my mind was playing tricks on me.)`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I let go of the elevator and dropped to 
the floor.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06BWM`, name2: `SA05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A259`); appendText; 
   You`"Hey? What are you doing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You asked me this when I returned to 
the ground.`;
   waitForClick; 
});
choice(
   `Ask You`
   `Don't ask You`
);
switch (choice) {
   case 0: goto(lbl_00000776);
   case 1: goto(lbl_00000832);
}
let lbl_00000776;
varop(`(28 0a a4) b6 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Well, before...didn't you hear two voices?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A260`); appendText; 
   You`"Two?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You shot the question right back at me and then
looked back at Mayo.`;
   waitForClick; clearText; 
});
goto(lbl_000007fb).if(var_1a == 0);
varop(`(28 0a a4) f1 := (00) 1`);
goto(lbl_000007fb).if(var_f1 == 0);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SC1A`);
let lbl_000007fb;
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A261`); appendText; 
   Mayo`"No. It's just me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A262`); appendText; 
   Mayo`"Nobody else..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; 
});
let lbl_00000829;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I guess it was just my mind playing tricks
on me..."`;
   waitForClick; clearText; 
});
goto(lbl_00000880);
let lbl_00000832;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No...no big deal."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A263`); appendText; 
   You`"No big deal? You suddenly start doing 
chin-ups on the elevator and then you 
say it's no big deal?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It must have just been my imagination. Forget
about it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A264`); appendText; 
   You`"Now, now...why aren't all youngsters as easy
going as you these days?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shrugged her shoulders in an 
exaggerated way.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Mayo`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like Mayo was having a little trouble
deciding how to react to You's behavior.`;
   waitForClick; clearText; 
});
goto(lbl_00000880);
let lbl_00000880;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Mayo would glance at me from time to time,
but when our eyes met, she would look away.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A265`); appendText; 
   Mayo`"Uhh...um..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A266`); appendText; 
   Mayo`"Nakkyu? Who's this...?"`;
   waitForClick; clearText; marker; sound(`S1A267`); appendText; 
   You`"Huh? Oh, this guy?"`;
   waitForClick; clearText; marker; sound(`S1A268`); appendText; 
   You`"He's...just a visitor."`;
   waitForClick; clearText; marker; sound(`S1A269`); appendText; 
   You`"We just met a while ago...but, you know, a lot
has happened since then."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A270`); appendText; 
   Mayo`"Nice to meet you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was something a little off about Mayo's
greeting.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A271`); appendText; 
   You`"And this is Mayo."`;
   waitForClick; clearText; marker; sound(`S1A272`); appendText; 
   You`"She goes to your old high school?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nice to meet you, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But then again, my words were pretty 
stiff as well.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A273`); appendText; 
   You`"But her real name is Sara Matsunaga..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara? So, why Mayo?"`;
   waitForClick; clearText; marker; sound(`S1A274`); appendText; 
   You`"Matsunaga Sara."`;
   waitForClick; clearText; marker; sound(`S1A275`); appendText; 
   You`"Tuna Sara"`;
   waitForClick; clearText; marker; sound(`S1A276`); appendText; 
   You`"A tuna salad is loaded with...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A277`); appendText; 
   Sara`"Mayonnaise...at least for Nakkyu it is."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ha. I see."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said that, but I still didn't really get it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had the feeling that simple salad 
dressing was better suited to tuna salad.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, whatever. It wasn't important.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A278`); appendText; 
   Sara`"By the way...um...your name is...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Na...name..."`;
   waitForClick; clearText; marker; sound(`S1A279`); appendText; 
   Sara`"Yeah. Your name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"My...my...my name is..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A280`); appendText; 
   You`"He says he can't remember."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A281`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A282`); appendText; 
   You`"Amnesia, that's what."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A283`); appendText; 
   Sara`"Amnesia...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A284`); appendText; 
   Sara`"...Really?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ye-yes..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A285`); appendText; 
   Sara`"Oh, wow. Cool."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Wow?"`;
   waitForClick; clearText; marker; sound(`S1A286`); appendText; 
   Sara`"That's kind of cool, isn't it? I mean, like,
amnesia."`;
   waitForClick; clearText; marker; sound(`S1A287`); appendText; 
   Sara`"It sounds kind of like an international man of
mystery, kind of thing."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A288`); appendText; 
   Sara`"Like, maybe...you could be being hunted by an
underground organization or assassins or
something."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Assassins..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I wouldn't kill anybody!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A289`); appendText; 
   You`"I keep trying to tell you not to take 
things so seriously."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A290`); appendText; 
   Sara`"Huh. Amnesia..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A291`); appendText; 
   Sara`"You really do have it? That amnesia thing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara kept staring at me as if I were something
exotic.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like I were an angel...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Replete with a set of wings on my back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The divine and nostalgic feeling from 
before had vanished like an illusion.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 30 });
bgload({ name: `BG26B3R`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`17:49`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The three of us aimed for an exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It goes without saying, but Sara 
couldn't hide her surprise at the 
transformation the complex had undergone.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A292`); appendText; 
   Sara`"What's this?"`;
   waitForClick; clearText; marker; sound(`S1A293`); appendText; 
   Sara`"Why is this whole place flooded?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A294`); appendText; 
   Sara`"And there doesn't seem to be anyone around..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`While we walked, You brought Sara up to speed 
with the situation, while walking next to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She told her that You herself was working at 
LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How I had collapsed in by the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How after falling down, I was hauled to the
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After finishing the story, You went on.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15BWM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A295`); appendText; 
   You`"And then, you know, suddenly the alarm started
ringing..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alarm?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06BWM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A296`); appendText; 
   You`"What? I didn't tell you about this yet?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`".........?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01BWM`, name2: `SA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A297`); appendText; 
   You`"While you were out, they rang the emergency
evacuation alarm."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A298`); appendText; 
   You`"I don't know the why...but it said: 'Anyway,
everyone please escape,' or something like 
that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A299`); appendText; 
   You`"Mayo, you heard it, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A300`); appendText; 
   Sara`"Yes."`;
   waitForClick; clearText; marker; sound(`S1A301`); appendText; 
   Sara`"Suddenly the elevator stopped...and I got 
stuck inside..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A302`); appendText; 
   Sara`"I think it was right after that when 
I heard the alarm."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A303`); appendText; 
   You`"And then there were three other staffers and
myself in the infirmary..."`;
   waitForClick; clearText; marker; sound(`S1A304`); appendText; 
   You`"The other three said they would go out to 
check what was going on and never came back. 
I waited, but nobody returned."`;
   waitForClick; clearText; marker; sound(`S1A305`); appendText; 
   You`"The only two people left in the room were 
me and you..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A306`); appendText; 
   You`"I couldn't just abandon you there..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A307`); appendText; 
   You`"And at that point, I wasn't really even that
worried."`;
   waitForClick; clearText; marker; sound(`S1A308`); appendText; 
   You`"I figured probably some kid had just gone and
pushed the emergency alarm button...that was 
all I thought was going on."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A309`); appendText; 
   Sara`"I figured, even with a prank, it must be 
serious for them to sound the emergency 
evacuation warning..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A310`); appendText; 
   You`"Well, now that you mention it I suppose so..."`;
   waitForClick; clearText; marker; sound(`S1A311`); appendText; 
   You`"But at that time I was just, I don't know..."`;
   waitForClick; clearText; marker; sound(`S1A312`); appendText; 
   You`"I was worried about this kid..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You were worried about me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A313`); appendText; 
   You`"Well, sure..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A314`); appendText; 
   Sara`"And? Then what happened?"`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everything after that was old news to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The closing of the watertight doors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our search for the emergency stairs to the
floating island.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And of course, You also told Sara about how 
we got washed away by flood water..`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
stopBGM();
let lbl_00000c6b;
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I, You and Sara did a complete check of Dritte
stock's corridors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A1L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We met with a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A1`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A1R`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1L`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B1`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And a dead end...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1R`, transition: 27 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After dead end...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG30B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And the final place that we ended up...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was in front of a small door at the end of a
narrow corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the middle the word 'Himmel' was engraved.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What is this...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A315`); appendText; 
   You`"Hmmm. Good question. This is the first 
time I've been here..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, You took hold of the door knob.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't open...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't even budge.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next she started tapping randomly on the 
ten-key display next to the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You should have known that it was a waste of
energy...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `SA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A316`); appendText; 
   You`"Haaaaaa...."`;
   waitForClick; clearText; marker; sound(`S1A317`); appendText; 
   You`"So this is the end..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You punctuated this with a sigh.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A318`); appendText; 
   Sara`"The end...you mean we're..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A319`); appendText; 
   You`"Yup..."`;
   waitForClick; clearText; marker; sound(`S1A320`); appendText; 
   You`"It looks like we're locked in..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_08`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gong.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You weakly kicked the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Following the sound, we went silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The atmosphere around us was heavy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both You and Sara wore tired expressions as if
they couldn't even be bothered to speak 
anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a gloomy silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To try to lighten things up, I said -`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, anyway it doesn't do us any good to just
stand around here!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We've gotta think of something!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A321`); appendText; 
   Sara`"Something?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A way to escape!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A322`); appendText; 
   You`"You have any bright ideas?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, let's see...how about..."`;
   waitForClick; 
});
choice(
   `Try to contact the outside ...`
   `Look for other exits ...`
);
switch (choice) {
   case 0: goto(lbl_00000e22);
   case 1: goto(lbl_00000e7b);
}
let lbl_00000e22;
varop(`(28 0a a4) b6 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"For example, we could try to contact the 
outside or something."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A323`); appendText; 
   Sara`"How? Cell phones don't even work..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Even without a cell phone, LeMU must have 
other means of communicating, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A324`); appendText; 
   You`"Means...of communication...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A325`); appendText; 
   You`"Oh, right! The Control Room!"`;
   waitForClick; clearText; 
});
goto(lbl_00000f0e);
let lbl_00000e7b;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"For example, we could look for other exits or
something."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A326`); appendText; 
   Sara`"Anything else? Hello...you know we are in the
middle of the ocean, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know. I'm not saying we try to escape out
a window or anything."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nothing like that..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If this is the middle of the ocean, then there
must be a duct for outside air. So..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A327`); appendText; 
   Sara`"Oh, I see. So you're saying that we use that
ventilation duct to escape? Like they always 
do in the movies."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. That's what I mean."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A328`); appendText; 
   You`"Sorry, but there's no way that's possible."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Why not?"`;
   waitForClick; clearText; marker; sound(`S1A329`); appendText; 
   You`"The ducts that go to the outside aren't big
enough for people to pass through."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No...no way..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My shoulders slumped in disappointment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's face was also covered in dejection.`;
   waitForClick; clearText; marker; sound(`S1A330`); appendText; 
   Sara`"I wish I could at least contact my friends
outside..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A331`); appendText; 
   You`"Contact outside...?"`;
   waitForClick; clearText; marker; sound(`S1A332`); appendText; 
   Sara`"But cell phones don't even work..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A333`); appendText; 
   You`"Oh, right! The Control Room!"`;
   waitForClick; clearText; 
});
goto(lbl_00000f0e);
let lbl_00000f0e;
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A334`); appendText; 
   You`"Why didn't I think of this until now?"`;
   waitForClick; clearText; marker; sound(`S1A335`); appendText; 
   You`"From there we should at least be able to 
contact someone on the floating island."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's face lit up again.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next, light returned to Sara's eyes as well.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`18:24`);
playSFX({ name: `SE05_04`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crash!`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU09A`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You did a fantastic heel stomp on the console
in the Control Room.`;
   waitForClick; clearText; marker; sound(`S1A336`); appendText; 
   You`"What's this? Why won't it go through?"`;
   waitForClick; clearText; marker; sound(`S1A337`); appendText; 
   You`"What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she were going rant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, she was already ranting...`;
   waitForClick; clearText; marker; sound(`S1A338`); appendText; 
   Sara`"Hey, hey! Nakkyu, wait a second!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, what are you going to do with 
that chair!?"`;
   waitForClick; clearText; marker; sound(`S1A339`); appendText; 
   You`"I'm going smash it into this stupid...
machine!"`;
   waitForClick; clearText; marker; sound(`S1A340`); appendText; 
   You`"I'm going to destroy it! I mean smithereens!
Absolutely pulverize it!"`;
   waitForClick; clearText; marker; sound(`S1A341`); appendText; 
   Sara`"Ta-take it easy! Just calm down!"`;
   waitForClick; clearText; marker; sound(`S1A342`); appendText; 
   You`"How do you expect me to stay calm in a 
situation like this?"`;
   waitForClick; clearText; marker; sound(`S1A343`); appendText; 
   You`"How can all of the communication lines 
be down!"`;
   waitForClick; clearText; marker; sound(`S1A344`); appendText; 
   You`"E-mail, too. Even the emergency line won't go
through!"`;
   waitForClick; clearText; marker; sound(`S1A345`); appendText; 
   You`"Is this possible?"`;
   waitForClick; clearText; marker; sound(`S1A346`); appendText; 
   You`"I don't get it! Something is wrong here!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Still, you don't have to destroy..."`;
   waitForClick; clearText; marker; sound(`S1A347`); appendText; 
   You`"Shut up! I've had...enough! Kyaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I restrained You and dragged her 
outside the control room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `YU10BDM`, name2: `SA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A348`); appendText; 
   You`"Huff, huff, huff..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's eyes were bloodshot like a rabid dog.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow her fantasy-like outfit seemed out of
place.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, if it has come to this, there is nothing
else to do..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Let's just...split up again and look 
for an exit."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU04BDM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A349`); appendText; 
   You`"It's no use! After we already looked 
everywhere?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But we haven't looked inside the rooms."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A350`); appendText; 
   Sara`"I see."`;
   waitForClick; clearText; marker; sound(`S1A351`); appendText; 
   Sara`"There might be something like a secret passage
hidden or something..."`;
   waitForClick; clearText; marker; sound(`S1A352`); appendText; 
   You`"There is no way. This isn't a ninja house
you know."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anyway, let's just...look one more time, 
alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A353`); appendText; 
   Sara`"Because there might be a helpless maiden 
trapped somewhere like I was."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A354`); appendText; 
   Sara`"I'm off."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So with that, the three of us, Sara, You and I,
split up and started searching the complex.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We agreed we'd meet again in an hour...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We decided to meet in front of the Control Room.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
delay({ interval: 30 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`S_1B`);
