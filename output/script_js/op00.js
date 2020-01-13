varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
delay({ interval: 120 });
removeBG({ mode: WHITE, transition: 02 });
setSceneTitle({ index: 0 });
setDialogBoxColor(GRAY);
delay({ interval: 119 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He was in the middle of a blue world.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_26`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE09_01L`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
setKomoreType(0);
showKomoreAnim();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 20`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 30`);
varop(`(28 0a a2) 3f := (00) VAR_cc_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As far as the eye could see, a sheet of water
reached into the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The May sun shimmered on its surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Above, high above, stretched a clear blue sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fresh, new sky looked so glossy and vivid
that it might spill down to earth at any
moment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was all that was reflected in his eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The straight line of the horizon stretched
into the distance, dividing the sea from the
heavens.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`EOP000`); appendText; 
   Takeshi`"So tranquil..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He muttered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A solitary seagull traced a gentle arc in the
sky as the wind carried it away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wind, full of the smell of the ocean, blew
by him gently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The din of people could be heard in the
background.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The merry sound of children's voices echoed
brighter than the sunlight pouring down.`;
   waitForClick; clearText; marker; sound(`EOP001`); appendText; 
   Takeshi`"So peaceful..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like being inside a dream.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeKomoreAnim();
closeShakeScreenAnim();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
chapterCutin({ name: `00000000` });
stopSFX()
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG38A2`, transition: 10 });
clock(`11:17`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—10 miles from M Island, Komagahara
Archipelago, Tokyo`;
   waitForClick; clearText; marker; appendText; 
   Narr`The man-made island, Insel null, rose above the
waves of the water. It seemed like a place
removed from reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The word 'utopia' might have sprung to mind to
describe it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, a slab of rock on the boat dock of
this floating island were carved the following
words.`;
   waitForClick; clearText; 
});
bgload({ name: `IT06A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Where is heaven?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Above the sky, and at your feet...'`;
   waitForClick; clearText; 
});
bgload({ name: `BG38A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Leaning out over the railing of the island, he
gazed into the ocean depths.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the blue distance, he saw a massive metallic
structure swaying gently.`;
   waitForClick; clearText; marker; sound(`EOP002`); appendText; 
   Takeshi`"Utopia, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He mumbled and looked back casually...`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_CO16A`, transition: 20, x: 0, y: 0, hx: 455, hy: 341 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And there was a tanuki, or raccoon dog.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His eyes met those of the animal's.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a moment they eyed each other in silence.`;
   waitForClick; clearText; marker; sound(`EOP003`); appendText; 
   Takeshi`"Uh...he-hello..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`To clear the air, he nodded his head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The animal turned away, ignoring him.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Upon closer inspection he noticed something
biting the animal from behind.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) ce := (00) 0`);
tweenZoom({ x: 0, y: 0, hx: 680, hy: 510, duration: 60 });
bgloadCrop({ name: `EV_CO16A`, transition: 20, x: 0, y: 0, hx: 680, hy: 510 });
showTextbox();
text(() => {
   marker; sound(`EOP004`); appendText; 
   //??
   Unk`"Grr...grr...grr..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a young girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was shaped like a "person."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking closer revealed that there was
something strange about her as well.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) ce := (00) 0`);
tweenZoom({ x: 0, y: 0, hx: 800, hy: 600, duration: 60 });
bgload({ name: `EV_CO16A`, transition: 26 });
showTextbox();
text(() => {
   marker; sound(`PIPI_24`); appendText; 
   //??
   Unk`"Grr...grr...grr..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Namely, a small tanuki attached to the girl's
backside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'In front of him there was a big tanuki being
bitten by a girl, who was being bitten by an
smaller tanuki'`;
   waitForClick; clearText; marker; appendText; 
   Narr`The scene was enough to make him lose his
sense of reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He rubbed his eyes, rubbed them some more,
and opened his eyes again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even after blinking several times... the
bizarre scene refused to go away.`;
   waitForClick; clearText; marker; sound(`EOP005`); appendText; 
   Tanuki`"Hey."`;
   waitForClick; clearText; marker; sound(`EOP006`); appendText; 
   Tanuki`"Would you do something about this kid?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Whispered the big tanuki.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the words didn't reach his mind, because
it was so busy trying to process the absurd
scene.`;
   waitForClick; clearText; marker; sound(`PIPI_24`); appendText; 
   //??
   Unk`"Grr...grr...grr..."`;
   waitForClick; clearText; marker; sound(`EOP007`); appendText; 
   //??
   Unk`"Grr...grr...grr..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I must be dreaming, right?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`—That was what he was really thinking.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: WHITE, transition: 02 });
setSceneTitle({ index: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A dream—`;
   waitForClick; clearText; marker; appendText; 
   Narr`A dream that would not let him wake up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And whiteness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A cold, white, reality stretching forever.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt the difference in temperature on his
skin...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The shock of it finally forced him to open his
eyes.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_01L`, a1: 0, volume: 90 });
bgload({ name: `BG21A4`, transition: 00 });
clock(`11:34`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered how long he had been sitting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It couldn't have been long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had only been in the park an hour.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He'd been sitting on the bench the whole time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Eating the same ice cream.`;
   waitForClick; clearText; marker; sound(`EOP008`); appendText; 
   Kid`"It's cold."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had melted into a muddy mess.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The melted vanilla ice cream trickled on to his
hand, spilling on his lap.`;
   waitForClick; clearText; marker; sound(`EOP009`); appendText; 
   Kid`"Wooh, that's cold."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ice cream slowly soaked into the fabric of
his pants.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally the coldness of it had spread
completely soaking into his skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had been sitting there a while.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had been sitting so long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the person he was waiting for never came.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign that she would.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder why she hasn't come?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why am I here?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt like he was teetering on the verge of
utter confusion.`;
   waitForClick; clearText; marker; sound(`EOP010`); appendText; 
   Kid`"Oh well..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He shook his head and sighed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't seem his pants would dry anytime
soon.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; sound(`EOP011`); appendText; 
   //Park staff
   Park_staff`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He sensed a slight movement and a girl sat down
next to him.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was sporting the theme park uniform.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A white outfit with a bluish ribbon.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked like a guide.`;
   waitForClick; clearText; marker; sound(`EOP012`); appendText; 
   //Park staff
   Park_staff`"Are you lost?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A beaming, innocent smile appeared on her
shining face.`;
   waitForClick; clearText; marker; sound(`EOP013`); appendText; 
   //Park staff
   Park_staff`"Did you get separated from your friends?"`;
   waitForClick; clearText; marker; sound(`EOP014`); appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; marker; sound(`EOP015`); appendText; 
   Kid`"I've been waiting."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP016`); appendText; 
   //Park staff
   Park_staff`"Waiting?"`;
   waitForClick; clearText; marker; sound(`EOP017`); appendText; 
   Kid`"Well..."`;
   waitForClick; clearText; marker; sound(`EOP018`); appendText; 
   Kid`"I was waiting."`;
   waitForClick; clearText; marker; sound(`EOP019`); appendText; 
   //Park staff
   Park_staff`"You were waiting..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP020`); appendText; 
   //Park staff
   Park_staff`"For me?"`;
   waitForClick; clearText; marker; sound(`EOP021`); appendText; 
   Kid`"N...no..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was flustered as her grinning face peered
into his.`;
   waitForClick; clearText; marker; sound(`EOP022`); appendText; 
   Kid`"I was told to wait here, so..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP023`); appendText; 
   //Park staff
   Park_staff`"I see..."`;
   waitForClick; clearText; marker; sound(`EOP024`); appendText; 
   //Park staff
   Park_staff`"But it looks like they're not coming."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She gave him a sideways glance.`;
   waitForClick; clearText; marker; sound(`EOP025`); appendText; 
   //Park staff
   Park_staff`"Listen, you've obviously been stood up and are
tired of waiting..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP026`); appendText; 
   //Park staff
   Park_staff`"I know!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face suddenly lit up and she clapped her
hands together.`;
   waitForClick; clearText; marker; sound(`EOP027`); appendText; 
   //Park staff
   Park_staff`"Hey, hey, you're alone, right?"`;
   waitForClick; clearText; marker; sound(`EOP028`); appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`EOP029`); appendText; 
   //Park staff
   Park_staff`"Well, you're bored right? How about I give you
a tour of LeMU?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She tugged at his arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without waiting for his reply, she made him
stand.`;
   waitForClick; clearText; marker; sound(`EOP030`); appendText; 
   Kid`"B...but, I'm waiting for someone."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP031`); appendText; 
   //Park staff
   Park_staff`"Waiting? For who?"`;
   waitForClick; clearText; marker; sound(`EOP032`); appendText; 
   Kid`"...Uh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who was it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't think of the name.`;
   waitForClick; clearText; marker; sound(`EOP033`); appendText; 
   //Park staff
   Park_staff`"Well, I dunno who you're waiting for, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP034`); appendText; 
   //Park staff
   Park_staff`"If they haven't showed up yet, don't you think
you've waited long enough?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said this happily, almost prancing around.`;
   waitForClick; clearText; marker; sound(`EOP035`); appendText; 
   //Park staff
   Park_staff`"Whaddya say? How about it?"`;
   waitForClick; clearText; marker; sound(`EOP036`); appendText; 
   Kid`"Al-alright..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He nodded slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl's nametag glittered brightly against
the white fabric of her uniform.`;
   waitForClick; clearText; marker; sound(`EOP037`); appendText; 
   Kid`"Y-O-U...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what it said.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP038`); appendText; 
   You`"I'm You!"`;
   waitForClick; clearText; marker; sound(`EOP039`); appendText; 
   Kid`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'm you...?`;
   waitForClick; clearText; marker; sound(`EOP040`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She nodded.`;
   waitForClick; clearText; marker; sound(`EOP041`); appendText; 
   You`"My name's You..."`;
   waitForClick; clearText; marker; sound(`EOP042`); appendText; 
   You`"My last name is Tanaka..."`;
   waitForClick; clearText; marker; sound(`EOP043`); appendText; 
   Kid`"You...?"`;
   waitForClick; clearText; marker; sound(`EOP044`); appendText; 
   You`"My real name is much longer, though."`;
   waitForClick; clearText; marker; sound(`EOP045`); appendText; 
   Kid`"Longer?"`;
   waitForClick; clearText; marker; sound(`EOP046`); appendText; 
   You`"Long, like, endlessly long. But..."`;
   waitForClick; clearText; marker; sound(`EOP047`); appendText; 
   You`"But, it's such a pain...just call me 'You.'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP048`); appendText; 
   You`"Nice to meet you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that she enthusiastically stuck out her
hand.`;
   waitForClick; clearText; marker; sound(`EOP049`); appendText; 
   Kid`"N-nice to meet you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without thinking he shook her hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And before he had realized it, he'd been sucked
along into her rhythm.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP050`); appendText; 
   You`"So, shall we go?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`They released hands, reluctantly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked again at his hand, which had moments
before connected them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The vanilla ice cream that had spilled on it
had completely melted away.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG39A2`, transition: 20 });
setSceneTitle({ index: 0 });
clock(`11:43`);
setKomoreType(0);
showKomoreAnim();
multifgload2({ id1: 1, id2: 2, name1: `MY19ADS`, name2: `CO11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He noticed that the two tanuki had formed a
line and were proceeding forward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In front of them was a massive, gate, that was
sealed shut.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The gate swung open soundlessly, and the big
tanuki, little tanuki and the girl went inside.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
delay({ interval: 30 });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Finally my turn...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He followed on their heels.`;
   waitForClick; clearText; 
});
hideTextbox();
closeKomoreAnim();
bgload({ name: `BG38A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This was LeMU's only entrance for visitors.`;
   waitForClick; clearText; 
});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Several park employees waited at the gate and
handed over what looked like earphones to the
visitors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that the earphones were to be used at
some point up ahead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered why.`;
   waitForClick; clearText; 
});
bgload({ name: `BG38A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking around skeptically, but obeying
instructions, he stepped into the building.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) ce := (00) 0`);
tweenZoom({ x: 332, y: 185, hx: 200, hy: 150, duration: 45 });
monoColorOverlay({ interval: 18, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He surveyed the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no windows. From the polished round
walls, it was clear that the room was
dome-shaped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Many of the visitors, who had been waiting in
line, headed into the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Among them were friends, amorous couples,
people with their families.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The 'Tanuki family' had, however, split up it
seemed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The big tanuki shoved its way through the crowd
of people and continued through a door on the
other side of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The young girl stayed on the same side of the
room as the little tanuki.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I've got no clue what those tanuki are all
about, but...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I guess my friends aren't here either...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't see any familiar faces around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He figured maybe they had already taken the far
elevator downstairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just 20 minutes earlier, the visitor room had
reached capacity...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the friends he had been waiting with had
gone ahead, leaving him behind to go down with
the next group.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh well. I'm sure I'll find everyone down
below soon enough.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, the gate to the entrance slipped shut
quietly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The big tanuki fiddled with something on the
wall and the room got a shade darker.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
stopBGM();
clock(`11:47`);
showTextbox();
text(() => {
   marker; sound(`EOP051`); appendText; 
   //Park staff
   Park_staff`"Hello everybody!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A park employee emerged out of the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered where she had come from. She was
wearing a flashy dress.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The dim light shining on her made her seem like
a character from some dream.`;
   waitForClick; clearText; 
});
playBGM({ num: 14, volume: 100 });
bgload({ name: `EV_SO04A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Visitors`"..."`;
   waitForClick; clearText; marker; sound(`EOP052`); appendText; 
   //Park staff
   Park_staff`"What? No reaction folks?"`;
   waitForClick; clearText; marker; sound(`EOP053`); appendText; 
   //Park staff
   Park_staff`"I'll try that again..."`;
   waitForClick; clearText; marker; sound(`EOP054`); appendText; 
   //Park staff
   Park_staff`"Hello!"`;
   waitForClick; clearText; marker; sound(`EOP055`); appendText; 
   //Young Girl
   Young_Girl`"Helloooooo!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the girl who, just a little while ago,
had been attached to the rear of the large
tanuki.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP056`); appendText; 
   //Park staff
   Park_staff`"Oh! I've found a girl with some spunk."`;
   waitForClick; clearText; marker; sound(`EOP057`); appendText; 
   //Park staff
   Park_staff`"What's your name?"`;
   waitForClick; clearText; marker; sound(`EOP058`); appendText; 
   //Young Girl
   Young_Girl`"I'M CO-CO YA-GA-MI!"`;
   waitForClick; clearText; marker; sound(`EOP059`); appendText; 
   Coco`"This is my pet dog, Pipi."`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(So that isn't a tanuki, it's a dog.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I thought they didn't let pets in here.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He tilted his head doubtfully.`;
   waitForClick; clearText; marker; sound(`EOP060`); appendText; 
   //Park staff
   Park_staff`"So Coco, how many times have you been to LeMU?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`EOP061`); appendText; 
   Coco`"Uh, well...one,two,three,four,five..."`;
   waitForClick; clearText; marker; sound(`EOP062`); appendText; 
   Coco`"This is my first time!"`;
   waitForClick; clearText; marker; sound(`EOP063`); appendText; 
   //Park staff
   Park_staff`"Hee, hee. Aren't you a funny girl?"`;
   waitForClick; clearText; marker; sound(`EOP064`); appendText; 
   Coco`"I get that a lot."`;
   waitForClick; clearText; marker; sound(`EOP065`); appendText; 
   Coco`"You want me to do something even more funny?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP066`); appendText; 
   //Park staff
   Park_staff`"What?"`;
   waitForClick; clearText; marker; sound(`EOP067`); appendText; 
   Coco`"My friend taught me a good joke the other day!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP068`); appendText; 
   //Park staff
   Park_staff`"O-ooh.... Er...Maybe some other time."`;
   waitForClick; clearText; marker; sound(`EOP069`); appendText; 
   Coco`"Why not?"`;
   waitForClick; clearText; marker; sound(`EOP070`); appendText; 
   //Park staff
   Park_staff`"Because I have to tell everyone something right
now."`;
   waitForClick; clearText; marker; sound(`EOP071`); appendText; 
   Coco`"Oh. Okay then."`;
   waitForClick; clearText; marker; sound(`EOP072`); appendText; 
   Coco`"But it's really funny..."`;
   waitForClick; clearText; marker; sound(`EOP073`); appendText; 
   Coco`"That's too bad, huh Pipi?"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP074`); appendText; 
   //Park staff
   Park_staff`"Ahem. Once again..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP075`); appendText; 
   //Park staff
   Park_staff`"On behalf of the LeMU marine theme park, I'd
like to thank you very much for coming."`;
   waitForClick; clearText; marker; sound(`EOP076`); appendText; 
   //Park staff
   Park_staff`"I am about to give you a brief explanation
about the LeMU theme park and tell you a few
things to watch out for."`;
   waitForClick; clearText; marker; sound(`EOP077`); appendText; 
   Coco`"Hey, who cares? Hurry up and let us inside
already!"`;
   waitForClick; clearText; marker; sound(`EOP078`); appendText; 
   //Park staff
   Park_staff`"I would love to take everyone inside..."`;
   waitForClick; clearText; marker; sound(`EOP079`); appendText; 
   //Park staff
   Park_staff`"But, I'm terribly sorry."`;
   waitForClick; clearText; marker; sound(`EOP080`); appendText; 
   //Park staff
   Park_staff`"Everyone actually will have to stay in this
compression chamber for now."`;
   waitForClick; clearText; marker; sound(`EOP081`); appendText; 
   //Park staff
   Park_staff`"It will only take 17 minutes."`;
   waitForClick; clearText; marker; sound(`EOP082`); appendText; 
   //Park staff
   Park_staff`"So please just bear with me for that long."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP083`); appendText; 
   //Park staff
   Park_staff`"First, let me explain a bit about this room...
it is called a compression chamber."`;
   waitForClick; clearText; marker; sound(`EOP084`); appendText; 
   //Park staff
   Park_staff`"Starting from now, the air pressure in here is
going to rise to 6 atmospheres."`;
   waitForClick; clearText; marker; sound(`EOP085`); appendText; 
   //Park staff
   Park_staff`"Why do you think it is necessary to raise the
air pressure? I'll explain the reason for that
in a moment..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP086`); appendText; 
   //Park staff
   Park_staff`"But before that, let me tell you a few things
you should be aware of."`;
   waitForClick; clearText; marker; sound(`EOP087`); appendText; 
   //Park staff
   Park_staff`"As the air pressure rises, you may start to
feel a strange sensation in your ears."`;
   waitForClick; clearText; marker; sound(`EOP088`); appendText; 
   //Park staff
   Park_staff`"Like when you are descending a mountain or in
an airplane. It's because the increased air
pressure is pressing on your ear drums."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP089`); appendText; 
   //Park staff
   Park_staff`"So if you think your ears feel a bit
strange..."`;
   waitForClick; clearText; marker; sound(`EOP090`); appendText; 
   //Park staff
   Park_staff`"Pinch your nose with your fingers, close your
mouth tight and try to pop your ears."`;
   waitForClick; clearText; marker; sound(`EOP091`); appendText; 
   //Park staff
   Park_staff`"If that doesn't get your ears back to normal,
or you if don't feel well, please raise your
hand and let me know."`;
   waitForClick; clearText; marker; sound(`EOP092`); appendText; 
   //Park staff
   Park_staff`"In the event that happens, we will immediately
stop increasing the air pressure."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP093`); appendText; 
   //Park staff
   Park_staff`"By the way, are there any people here that
don't know how to pop their ears?"`;
   waitForClick; clearText; marker; appendText; 
   //Park staff
   Park_staff`"..."`;
   waitForClick; clearText; marker; sound(`EOP094`); 
   Narr`"Is everything clear then?"`;
   waitForClick; clearText; marker; appendText; 
   //Park staff
   Park_staff`"..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP095`); appendText; 
   //Park staff
   Park_staff`"Alright then. We'll initiate the rise in
pressure."`;
   waitForClick; clearText; marker; sound(`EOP096`); appendText; 
   //Park staff
   Park_staff`"As I said before, the time required to increase
the pressure is 17 minutes."`;
   waitForClick; clearText; marker; sound(`EOP097`); appendText; 
   //Park staff
   Park_staff`"During that time, I will explain to 
everyone about the structure of LeMU."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG01A`, transition: 20 });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP098`); appendText; 
   //Park staff
   Park_staff`"As you all know, LeMU is floating in the
ocean..."`;
   waitForClick; clearText; marker; sound(`EOP099`); appendText; 
   //Park staff
   Park_staff`"At a depth of between 51 and 103 feet..."`;
   waitForClick; clearText; 
});
bgload({ name: `MAP03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP100`); appendText; 
   //Park staff
   Park_staff`"Now, if you look at this chart, you will see
that the structure is divided into four layers."`;
   waitForClick; clearText; marker; sound(`EOP101`); appendText; 
   //Park staff
   Park_staff`"From the top these are called Insel null,
Erste boden, Zweite stock and Dritte
stock..."`;
   waitForClick; clearText; marker; sound(`EOP102`); appendText; 
   //Park staff
   Park_staff`"In terms of a normal building, you might think
of it as a structure with a ground floor
extending down to a three story basement."`;
   waitForClick; clearText; marker; sound(`EOP103`); appendText; 
   //Park staff
   Park_staff`"Insel null, here, is a floating island."`;
   waitForClick; clearText; marker; sound(`EOP104`); appendText; 
   //Park staff
   Park_staff`"It is an immense, man-made island, floating in
the ocean..."`;
   waitForClick; clearText; marker; sound(`EOP105`); appendText; 
   //Park staff
   Park_staff`"In German, 'insel' means 'island' and 'null'
means 'zero.'"`;
   waitForClick; clearText; marker; sound(`EOP106`); appendText; 
   //Park staff
   Park_staff`"In other words, this is floor zero, or the
ground floor."`;
   waitForClick; clearText; marker; sound(`EOP107`); appendText; 
   //Park staff
   Park_staff`"Next is from Erste to Dritte..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then.`;
   waitForClick; clearText; marker; sound(`EOP108`); appendText; 
   Coco`"Hey, hey. Hey, you."`;
   waitForClick; clearText; marker; sound(`EOP109`); appendText; 
   Coco`"Hey, I'm talking to you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As he was listening to the explanation, someone
pulled on him from behind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He turned to look around.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was the girl who had just been talking with
the park staff.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What was her name again...?)`;
   waitForClick; clearText; marker; sound(`EOP110`); appendText; 
   Coco`"Hey. Don't you want to know about my joke?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh, that's right.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Her name was Coco.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(And that animal she's holding is 
Pepe, or Popo, or something...)`;
   waitForClick; clearText; marker; sound(`EOP111`); appendText; 
   Coco`"You wanna know, don't you?"`;
   waitForClick; clearText; marker; sound(`EOP112`); appendText; 
   Takeshi`"Huh? What?"`;
   waitForClick; clearText; marker; sound(`EOP113`); appendText; 
   Coco`"The joke I was just talking about. It's an
Ame-joke."`;
   waitForClick; clearText; marker; sound(`EOP114`); appendText; 
   Takeshi`"An ame..joke?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP115`); appendText; 
   Coco`"You haven't heard about them? They're real
popular now, ya' know."`;
   waitForClick; clearText; marker; sound(`EOP116`); appendText; 
   Takeshi`"No, I haven't.... What are you talking about?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP117`); appendText; 
   Coco`"An Ame-joke is an American joke. Get it?
'Ame-joke.'"`;
   waitForClick; clearText; marker; sound(`EOP118`); appendText; 
   Takeshi`"Oh, really..."`;
   waitForClick; clearText; marker; sound(`EOP119`); appendText; 
   Coco`"Makes you wanna hear it, right? Want me to
tell you?"`;
   waitForClick; clearText; 
});
choice(
   `Listen to the joke`
   `Listen to the staffer's explanation`
);
switch (choice) {
   case 0: goto(lbl_00000765);
   case 1: goto(lbl_000007a5);
}
let lbl_00000765;
varop(`(28 0a a4) dd := (00) 1`);
showTextbox();
text(() => {
   marker; sound(`EOP120`); appendText; 
   Takeshi`"Yeah, I guess I'll listen to it."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`EOP121`); appendText; 
   Coco`"Okay! Here it goes!"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 9, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`EOP122`); appendText; 
   Coco`"Once there was this guy who was talking to the
ghost of his dead grandfather. So he asked him
a question."`;
   waitForClick; clearText; marker; sound(`EOP123`); appendText; 
   Coco`"'How long is a million years to a ghost?' he
wanted to know."`;
   waitForClick; clearText; marker; sound(`EOP124`); appendText; 
   Coco`"And the ghost answered."`;
   waitForClick; clearText; marker; sound(`EOP125`); appendText; 
   Coco`"'A million years is like a second to me.'"`;
   waitForClick; clearText; marker; sound(`EOP126`); appendText; 
   Coco`"Next the man asked..."`;
   waitForClick; clearText; marker; sound(`EOP127`); appendText; 
   Coco`"'How much is a million dollars to a ghost?'"`;
   waitForClick; clearText; marker; sound(`EOP128`); appendText; 
   Coco`"And the ghost answered."`;
   waitForClick; clearText; marker; sound(`EOP129`); appendText; 
   Coco`"'A million dollars? It is but one, small, cent
to me.'"`;
   waitForClick; clearText; marker; sound(`EOP130`); appendText; 
   Coco`"When he heard that, the man pretended to smile
all nice and then said..."`;
   waitForClick; clearText; marker; sound(`EOP131`); appendText; 
   Coco`"'Well then, gramps, how about giving me one of
your cents then?'"`;
   waitForClick; clearText; marker; sound(`EOP132`); appendText; 
   Coco`"Laughing the ghost replied."`;
   waitForClick; clearText; marker; sound(`EOP133`); appendText; 
   Coco`"'Sure. Right away.'"`;
   waitForClick; clearText; marker; sound(`EOP134`); appendText; 
   Coco`"'But can I get you to wait just a second?'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"..."`;
   waitForClick; clearText; marker; sound(`EOP135`); appendText; 
   Coco`"Hee, hee, heee..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP136`); appendText; 
   Coco`"Waaa! Ha, ha, ha!"`;
   waitForClick; clearText; marker; sound(`EOP137`); appendText; 
   Coco`"Well? That's a pretty good joke, huh?"`;
   waitForClick; clearText; 
});
goto(lbl_000007cc);
let lbl_000007a5;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; sound(`EOP138`); appendText; 
   Takeshi`"Well, I suppose it could be worse, but....I'll
talk to you later."`;
   waitForClick; clearText; marker; sound(`EOP139`); appendText; 
   Coco`"Huh."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Patting the little dog's head, he turned back to
listen to the explanation.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP140`); appendText; 
   //Park staff
   Park_staff`"So now you should now have a general
understanding of the layout of each floor."`;
   waitForClick; clearText; marker; sound(`EOP141`); appendText; 
   //Park staff
   Park_staff`"By the way, LeMU was designed with saturation
diving specifications."`;
   waitForClick; clearText; marker; sound(`EOP142`); appendText; 
   //Park staff
   Park_staff`"In other words, the air pressure inside is
equivalent to or greater than the water
pressure outside."`;
   waitForClick; clearText; marker; sound(`EOP143`); appendText; 
   //Park staff
   Park_staff`"As I said at the beginning..."`;
   waitForClick; clearText; marker; sound(`EOP144`); appendText; 
   //Park staff
   Park_staff`"The complex that we're all going to enter is
filled with a mixture of gases at
6 atmospheres."`;
   waitForClick; clearText; marker; sound(`EOP145`); appendText; 
   //Park staff
   Park_staff`"So right now our bodies are adjusting to be
able to handle pressure equivalent to
6 atmospheres."`;
   waitForClick; clearText; marker; sound(`EOP146`); appendText; 
   //Park staff
   Park_staff`"Of course, this mixture of gases is composed of
oxygen, nitrogen and helium and is completely
harmless to people."`;
   waitForClick; clearText; marker; sound(`EOP147`); appendText; 
   //Park staff
   Park_staff`"The reason for raising the air pressure inside
is..."`;
   waitForClick; clearText; marker; sound(`EOP148`); appendText; 
   //Park staff
   Park_staff`"That it is essential to make LeMU safe for
everyone."`;
   waitForClick; clearText; marker; sound(`EOP149`); appendText; 
   //Park staff
   Park_staff`"Okay, everyone, we are now going to enter the
ocean..."`;
   waitForClick; clearText; marker; sound(`EOP150`); appendText; 
   //Park staff
   Park_staff`"Are any of you here feeling just a little bit
nervous?"`;
   waitForClick; clearText; marker; sound(`EOP151`); appendText; 
   //Park staff
   Park_staff`"You might be worrying about what would happen
if seawater started leaking inside, or that you
might be crushed by the water pressure, or us
sinking."`;
   waitForClick; clearText; marker; sound(`EOP152`); appendText; 
   //Park staff
   Park_staff`"However, please relax. There is nothing to
worry about."`;
   waitForClick; clearText; marker; sound(`EOP153`); appendText; 
   //Park staff
   Park_staff`"There is absolutely no way that LeMU could be
crushed by the outside water pressure because
we have raised the air pressure inside."`;
   waitForClick; clearText; 
});
goto(lbl_000007cc);
let lbl_000007cc;
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP154`); appendText; 
   //Park staff
   Park_staff`"By the way, before we entered this
pressurization chamber, we handed out earphones
to everyone, remember?"`;
   waitForClick; clearText; marker; sound(`EOP155`); appendText; 
   //Park staff
   Park_staff`"Yes, that's right, the earphones that everyone
is using right now."`;
   waitForClick; clearText; 
});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP156`); appendText; 
   //Park staff
   Park_staff`"These are not your average earphones. They are
'voice alternators.'"`;
   waitForClick; clearText; marker; sound(`EOP157`); appendText; 
   //Park staff
   Park_staff`"LeMU is pumped full of helium gas, so without
these on your ears, you'll sound like a duck."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He removed his voice alternators, to see what
would happen.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Ha, ha! It's true! People really do sound like
ducks.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Then again, maybe they sound more like aliens
than ducks.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The voices of the people around him jumped to
a strange, higher tone.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP158`); appendText; 
   Takeshi`"Hey, say something."`;
   waitForClick; clearText; marker; sound(`EOP159`); appendText; 
   Coco`"Like what?"`;
   waitForClick; clearText; marker; sound(`EOP160`); appendText; 
   Takeshi`"Ha, ha, ha. Your voice is hilarious."`;
   waitForClick; clearText; marker; sound(`EOP161`); appendText; 
   Coco`"Huh? My voice?"`;
   waitForClick; clearText; 
});
goto(lbl_00000848).if(var_dd == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco hadn't been listening to the explanation.`;
   waitForClick; clearText; marker; sound(`EOP162`); appendText; 
   Takeshi`"Can you tell me that joke one more time?"`;
   waitForClick; clearText; marker; sound(`EOP163`); appendText; 
   Coco`"Why?"`;
   waitForClick; clearText; marker; sound(`EOP164`); appendText; 
   Takeshi`"C'mon, just do it."`;
   waitForClick; clearText; marker; sound(`EOP165`); appendText; 
   Coco`"Once there was this guy who was talking to the
ghost of his dead grandfather. So he asked him
a question."`;
   waitForClick; clearText; marker; sound(`EOP166`); appendText; 
   Coco`"'How long is a million years to a ghost?' he
wanted to know."`;
   waitForClick; clearText; marker; sound(`EOP167`); appendText; 
   Coco`"And the ghost answered."`;
   waitForClick; clearText; marker; sound(`EOP168`); appendText; 
   Takeshi`"Heee...heee..."`;
   waitForClick; clearText; marker; sound(`EOP169`); appendText; 
   Takeshi`"Waaah, Haaaah!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP170`); appendText; 
   Coco`"What? That's weird. You didn't even laugh at
all just a second ago."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He put the voice alternators back in his ears
and looked back at the staffer again.`;
   waitForClick; clearText; 
});
goto(lbl_00000877);
let lbl_00000848;
showTextbox();
text(() => {
   marker; sound(`EOP171`); appendText; 
   Coco`"What's wrong with my voice?"`;
   waitForClick; clearText; marker; sound(`EOP172`); appendText; 
   Takeshi`"Ha, ha, ha. You weren't listening to the
explanation."`;
   waitForClick; clearText; marker; sound(`EOP173`); appendText; 
   Coco`"What are you laughing at? Why are you smiling
like that?"`;
   waitForClick; clearText; marker; sound(`EOP174`); appendText; 
   Coco`"You're acting really weird."`;
   waitForClick; clearText; marker; sound(`EOP175`); appendText; 
   Takeshi`"Well, why don't you try listening to your own
voice?"`;
   waitForClick; clearText; marker; sound(`EOP176`); appendText; 
   Coco`"Huh?"`;
   waitForClick; clearText; marker; sound(`EOP177`); appendText; 
   Takeshi`"It's so funny. You sound like an eight-legged
alien."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP178`); appendText; 
   Coco`"Alien? Alien as in 'Take us to your leader'
...goooba joooba doooba space alien?"`;
   waitForClick; clearText; marker; sound(`EOP179`); appendText; 
   Coco`"Like a Martian or someone for Planet Kuikui,
or something?"`;
   waitForClick; clearText; marker; sound(`EOP180`); appendText; 
   Coco`"A star person? From the far edge of the galaxy,
with lasers...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP181`); appendText; 
   Coco`"My joke was a lot funnier than THAT!"`;
   waitForClick; clearText; marker; sound(`EOP182`); appendText; 
   Takeshi`"Hee...ha, ha..."`;
   waitForClick; clearText; marker; sound(`EOP183`); appendText; 
   Takeshi`"Waaah, Haaaah!"`;
   waitForClick; clearText; marker; sound(`EOP184`); appendText; 
   Takeshi`"That's enough. I can't take anymore of this.
Thanks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He placed the voice alternators back in his
ears again and turned back to watch the
staffer.`;
   waitForClick; clearText; 
});
goto(lbl_00000877);
let lbl_00000877;
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP185`); appendText; 
   //Park staff
   Park_staff`"And that pretty much covers it."`;
   waitForClick; clearText; marker; sound(`EOP186`); appendText; 
   //Park staff
   Park_staff`"In approximately one minute, the door on this
side of the room will open."`;
   waitForClick; clearText; marker; sound(`EOP187`); appendText; 
   //Park staff
   Park_staff`"On the other side of that door is an elevator,
and at the bottom of it a brilliant paradise
awaits."`;
   waitForClick; clearText; marker; sound(`EOP188`); appendText; 
   //Park staff
   Park_staff`"We hope that you enjoy yourself to your hearts
content, here at the marine theme park, LeMU."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP189`); appendText; 
   Takeshi`"So, shall we go...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as he headed for the elevator...`;
   waitForClick; clearText; marker; sound(`EOP190`); appendText; 
   Coco`"So, are you here by yourself?"`;
   waitForClick; clearText; marker; sound(`EOP191`); appendText; 
   Takeshi`"Who, me? No, I got separated from my friends."`;
   waitForClick; clearText; marker; sound(`EOP192`); appendText; 
   Coco`"So you're lost?"`;
   waitForClick; clearText; marker; sound(`EOP193`); appendText; 
   Takeshi`"Not exactly. But something like that."`;
   waitForClick; clearText; marker; sound(`EOP194`); appendText; 
   Takeshi`"I'll head down the elevator and take a look
around."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP195`); appendText; 
   Coco`"How about checking with that girl who was just
talking?"`;
   waitForClick; clearText; marker; sound(`EOP196`); appendText; 
   Takeshi`"Oh, I suppose I could do that. Excuse me..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking back he saw that the employee had
already disappeared.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG07A3`, transition: 20 });
setSceneTitle({ index: 1 });
clock(`11:58`);
showTextbox();
text(() => {
   marker; sound(`EOP197`); appendText; 
   You`"Hmmmm. So you came to LeMU by yourself?"`;
   waitForClick; clearText; marker; sound(`EOP198`); appendText; 
   Kid`"Yup. That's right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP199`); appendText; 
   You`"Even so..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After bending down to wipe away the white stain
on his pants, You stood up.`;
   waitForClick; clearText; marker; sound(`EOP200`); appendText; 
   You`"You don't see that very often, a guy coming to
a park like this alone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was true.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was paradise—an amusement park.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that instant he had almost forgotten even
that.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG04A3`, transition: 20 });
fgload({ id: 1, name: `YU11BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP201`); appendText; 
   You`"So why didn't you go into the park with your
friends?"`;
   waitForClick; clearText; marker; sound(`EOP202`); appendText; 
   You`"Why arrange to meet inside LeMU?"`;
   waitForClick; clearText; marker; sound(`EOP203`); appendText; 
   Kid`"Huh? Th-that's because..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now that she mentioned it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who HAD said to wait on that bench...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who's idea was it anyway?`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP204`); appendText; 
   You`"Oh, well. Whatever. I won't push you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who was it...?`;
   waitForClick; clearText; marker; sound(`EOP205`); appendText; 
   You`"But, I suppose that...well, I mean..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP206`); appendText; 
   You`"You've kind of been stood up...right?"`;
   waitForClick; clearText; marker; sound(`EOP207`); appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`EOP208`); appendText; 
   Kid`"Stood...up?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stood up...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It took a moment for the meaning of the word to
register.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP209`); appendText; 
   You`"Wow! I hit the nail on the head didn't I? Uh...
sorry..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She shrugged slightly, embarrassed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP210`); appendText; 
   You`"Well, well. Don't get depressed about it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She changed modes abruptly and let out a hearty
laugh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She slapped him solidly on the back.`;
   waitForClick; clearText; marker; sound(`EOP211`); appendText; 
   You`"I'll look out for you. Alright?"`;
   waitForClick; clearText; marker; sound(`EOP212`); appendText; 
   Kid`"Al...alright."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He nodded, a bit overwhelmed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(So...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I was stood up...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I must have been dumped...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then again he wasn't sure exactly what had
happened.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG23A6`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP213`); appendText; 
   Kid`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP214`); appendText; 
   You`"Huh? What?"`;
   waitForClick; clearText; marker; sound(`EOP215`); appendText; 
   Kid`"Aren't you working right now, You?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP216`); appendText; 
   You`"You'd make a scary boss."`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how many times he checked, she was
definitely still wearing a LeMU uniform.`;
   waitForClick; clearText; marker; sound(`EOP217`); appendText; 
   You`"I didn't have anything to do anyway. It's
perfect timing. Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Narr`They got in an egg-like elevator together.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
removeBG({ mode: BLACK, transition: 62 });
delay({ interval: 60 });
playSFX({ name: `SE00_02`, a1: 0, volume: 90 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `IMG01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The egg slowly began to move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like they were slowly floating up.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`EOP218`); appendText; 
   You`"Going up..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She whispered mischievously.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator was terribly crowded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And everyone was packed in like sardines.`;
   waitForClick; clearText; marker; sound(`EOP219`); appendText; 
   You`"Whoa...it's a little hot, huh?"`;
   waitForClick; clearText; marker; sound(`EOP220`); appendText; 
   Kid`"I'll say..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face was so close he almost bumped into it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Their bodies were flush against each other.
She was soft and warm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the sudden he felt embarrassed and
started to squirm.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`EOP221`); appendText; 
   You`"Hey, kid."`;
   waitForClick; clearText; marker; sound(`EOP222`); appendText; 
   You`"Hey don't go touching places you shouldn't..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She whispered into his ear, puffing out her
cheeks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Crammed in the elevator, he couldn't even move
an inch.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`EOP223`); appendText; 
   You`"That tickles...don't move so much."`;
   waitForClick; clearText; marker; sound(`EOP224`); appendText; 
   Kid`"I don't have a lot of choice."`;
   waitForClick; clearText; marker; sound(`EOP225`); appendText; 
   Kid`"I can't...breathe."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't move, but he couldn't bear standing
still either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As he gasped for breath, he noticed her light
perfume.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally the egg arrived at the top floor and his
suffering was over.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 90 });
removeBG({ mode: BLACK, transition: 02 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
bgload({ name: `BG23A5`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; sound(`EOP226`); appendText; 
   Kid`"Whew!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He let out a cry, and bolted from the elevator.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP227`); appendText; 
   You`"What...what's with you all of a sudden?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP228`); appendText; 
   You`"Hey! Wait! Kid! Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He sprinted away leaving You far behind.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG26A5R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It wasn't that he was trying to escape from her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He'd seen something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the edge of his vision, he thought he'd seen
someone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Up ahead...that someone was still visible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He chased after whoever it was, like a man
possessed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I've seen that face before...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'm sure I've seen that face before.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what his instincts were telling him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But where had he seen them?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He tried to sort through his foggy memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As he sifted, he kept running forward.`;
   waitForClick; clearText; marker; sound(`EOP229`); appendText; 
   Kid`"Wait...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt a desperate need to meet the person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, he had to hurry.`;
   waitForClick; clearText; 
});
bgload({ name: `BG22A8`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP230`); appendText; 
   Kid`"Huff...puff..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Eventually, he ran out of breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding his pounding chest, he looked up.`;
   waitForClick; clearText; marker; sound(`EOP231`); appendText; 
   Kid`"Ah!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(There she was!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mixed amongst the other people was a girl,
standing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was sure that the person that he had been
searching for was this girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was in the middle of the holidays, but for
some reason she was wearing her school
uniform...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered why she was alone here.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Oh, yeah...I've got to talk to her..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was by herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was all alone. Just like him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What should I say...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where should I start...let's see...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He needed to calm down and focus.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why is it I have to talk to her...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why in the world?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who was she?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who was...she...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`She's...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mean she's...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; sound(`EOP232`); appendText; 
   Kid`"Aaagh!"`;
   delay(0); 
});
bgload_keepFg({ name: `SIRO_BG`, transition: 27 });
showTextbox();
text(() => {
   appendText; waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He was caught up in a wave of people.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He got pushed into an elevator. It started to
rise toward the surface.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE03_12`, a1: 1, volume: 100 });
waitForSFX();
bgload({ name: `BG22A7`, transition: 28 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`51 feet below sea level, the elevator stopped at
basement floor one.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He got off the elevator as if he were being
spit out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This floor was called Erste boden...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He glanced around at his surroundings.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wasn't anywhere to be seen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He thought that they had both ridden on the
elevator together...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he had apparently lost sight of her in the
crowd when he got off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lost her...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He hadn't even been able to say a word.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt really depressed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Did she call out to me?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That idea suddenly popped into his head.`;
   waitForClick; clearText; 
});
bgload({ name: `BG01A3`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP233`); appendText; 
   Kid`"What is this...this feeling..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`His heart was still beating furiously.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP234`); appendText; 
   //Park staff
   Park_staff`"Is something the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A uniformed staff member, different than You,
was talking to him.`;
   waitForClick; clearText; marker; sound(`EOP235`); appendText; 
   //Park staff
   Park_staff`"Are you looking for someone?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She gave him a warm smile as she said this.`;
   waitForClick; clearText; marker; sound(`EOP236`); appendText; 
   Kid`"Eh! Uh, uh...yes, I am."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Feeling that he seemed a little desperate, he
quickly blurted out an answer.`;
   waitForClick; clearText; marker; sound(`EOP237`); appendText; 
   Kid`"I'm trying to find someone!"`;
   waitForClick; clearText; marker; sound(`EOP238`); appendText; 
   Kid`"I was supposed to meet up with them, but we
must have missed each other."`;
   waitForClick; clearText; marker; sound(`EOP239`); appendText; 
   //Park staff
   Park_staff`"Who is it? What is their name?"`;
   waitForClick; clearText; marker; sound(`EOP240`); appendText; 
   Kid`"Uh, their name..."`;
   waitForClick; clearText; marker; sound(`EOP241`); appendText; 
   //??
   Unk`"Hey! You there! Wait!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_05`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Patter, patter, patter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, the sounds of footsteps came rushing
at him.`;
   waitForClick; clearText; marker; sound(`EOP242`); appendText; 
   Kid`"Huh? You mean me?"`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`EOP243`); appendText; 
   Man`"Yes. That's right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Running feet braked sharply beside him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The guy was out of breath.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP244`); appendText; 
   Man`"Actually, I want to ask you something."`;
   waitForClick; clearText; marker; sound(`EOP245`); appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surprised, he slowly opened his mouth.`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG01A3`, transition: 26 });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 2 });
showTextbox();
text(() => {
   marker; sound(`EOP246`); appendText; 
   Takeshi`"Hey, you don't know, do you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing to do but see where the
conversation went.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`EOP247`); appendText; 
   Takeshi`"Sorry to ask you like this out of the blue, but
you don't know, do you?"`;
   waitForClick; clearText; marker; sound(`EOP248`); appendText; 
   Takeshi`"You haven't seen my friends around here, have
you?"`;
   waitForClick; clearText; marker; sound(`EOP249`); appendText; 
   Takeshi`"One of them is about 5'1 and around 140 pounds.
Kind of good-looking, with dorky sunglasses and
probably not the type girls would go for."`;
   waitForClick; clearText; marker; sound(`EOP250`); appendText; 
   Takeshi`"Another was wearing a suit, no tie, short hair
and has three pierces in his ear and one in his
nose.... He likes to knit..."`;
   waitForClick; clearText; marker; sound(`EOP251`); appendText; 
   Takeshi`"And then there was the only girl in the group,
who had on a kind of simple color flower print
one-piece with frilly lace..."`;
   waitForClick; clearText; marker; sound(`EOP252`); appendText; 
   Takeshi`"You know, three people you might see
anywhere..."`;
   waitForClick; clearText; marker; sound(`EOP253`); appendText; 
   Takeshi`"Did you see them?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP254`); appendText; 
   Kid`"Nope."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The young kid shook his head.`;
   waitForClick; clearText; marker; sound(`EOP255`); appendText; 
   Takeshi`"I see. Well, sorry about stopping you like
that."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Waving slightly, he left.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The youth continued down the corridor ahead.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A girl came over to him and started talking to
him enthusiastically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He thought he had seen her before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh...I wonder if she knows that kid.)`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But a troubled expression appeared on his face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP256`); appendText; 
   Coco`"Hey, hey! Do you want to hear a joke?"`;
   waitForClick; clearText; marker; sound(`EOP257`); appendText; 
   Kid`"Huh? What? Who are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(So that's it...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was probably one of those kind of people
that would talk to anyone about anything
anywhere, whether you were interested or not.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG22A7`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He thought he would go down below.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator arrived soundlessly and swallowed
the waiting patrons.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He went with them further into the depths of
LeMU.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
playSFX({ name: `SE03_12`, a1: 0, volume: 100 });
bgload({ name: `BG25A5`, transition: 20 });
clock(`12:15`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He walked around aimlessly.`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The attractions were all packed with visitors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone had beaming smiles and yelled happily
all evidence of LeMU's popularity.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But still...wandering around a packed and lively
amusement park all alone was a bit torturous.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't help trudging around with heavy feet
and slumped shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was on the verge of looking depressed, but
held his expression in check.`;
   waitForClick; clearText; 
});
bgload({ name: `BG03A3`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP258`); appendText; 
   Takeshi`"What am I gonna do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Walking around in this place blindly he thought
he might never run into his friends.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The floor was a lot wider than he'd imagined.`;
   waitForClick; clearText; marker; sound(`EOP259`); appendText; 
   Takeshi`"Oh, right, my cell phone..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He took his PDA multi-purpose communication
device out from his pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He pushed a button.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't have any messages. No mail either. But
the problem seemed to be...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was out of range.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least that was what the display said.`;
   waitForClick; clearText; marker; sound(`EOP260`); appendText; 
   Takeshi`"Are you serious!?"`;
   waitForClick; clearText; marker; sound(`EOP261`); appendText; 
   Takeshi`"I didn't think you could get out of range in
this day and age..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then he recalled they'd said something about
this being a giant tunnel in the middle of the
ocean, where only select radio waves could
reach.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And that LeMU used special electronic equipment,
which wasn't very compatible with mobile
equipment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`More than anything, they didn't allow PDA's to
work inside, so the facility would be completely
separated from the world above, as part of the
attraction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...At least that's what they'd told him at the
entrance, but he hadn't listened to a word of
it.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A5`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Maybe I should get them to broadcast a message
over the intercom...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He thought it might be best just to ask a staff
member.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He decided to look for one.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there wasn't a uniformed person in sight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There weren't many people walking around the
corridors either.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A5L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He turned a corner and entered a completely
different corridor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY19ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There, right in front of him, was the giant
tanuki...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the one he'd seen at the gate 
coming in...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tanuki was operating a panel on the wall...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'll bet that's a LeMU employee.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking it perfect timing, he saddled up to the
tanuki and called out.`;
   waitForClick; clearText; marker; sound(`EOP262`); appendText; 
   Takeshi`"Excuse me, I'm looking for someone. A friend."`;
   waitForClick; clearText; marker; sound(`EOP263`); 
   Narr`"Could I get you to make an announcement over
the intercom or something. The name
is...uh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The tanuki slowly turned around and looked at
him.`;
   waitForClick; clearText; marker; appendText; 
   Tanuki`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't say anything.`;
   waitForClick; clearText; marker; sound(`EOP264`); appendText; 
   Takeshi`"Uh? Hello? Hello?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY19ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The tanuki turned away, avoiding him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was being ignored.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder if it didn't hear me.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tanuki was wearing a big stuffed suit, and
was a full head taller than him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was the definite possibility that his
words weren't even reaching the ears inside.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY19ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP265`); appendText; 
   Takeshi`"HELLOOOooo. Can you hear me in there?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He asked the question nicely as he poked the
tanuki in the ribs.`;
   waitForClick; clearText; marker; sound(`EOP266`); appendText; 
   Takeshi`"Hey, you've gotta lot of extra flesh here,
buddy."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He continued talking as he pinched, pulled and
released the tanuki's flank.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He thought that for a mascot suit, the tanuki
shot him a pretty realistic glare before it
turned to walk away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Upset at that, he grabbed the tanuki's
shoulder.`;
   waitForClick; clearText; marker; sound(`EOP267`); appendText; 
   Takeshi`"Hey! What kind of an attitude is that? And when
a visitor's in trouble!"`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `MY04ADL`, x: 320, useAnim: false });
playSFX({ name: `SE05_02`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whump!`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP268`); appendText; 
   Takeshi`"Umpph!"`;
   waitForClick; clearText; marker; sound(`EOP269`); appendText; 
   Takeshi`"~~~~~~!?"`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `MY01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He'd been gut-punched.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tanuki had actually slugged him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not even his parents had ever even really
spanked him before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been a totally cheap shot - the tanuki
had landed a solid uppercut.`;
   waitForClick; clearText; marker; sound(`EOP270`); appendText; 
   Takeshi`"H-hey——! Tanuki—! Yeah, I mean you!"`;
   waitForClick; clearText; marker; appendText; 
   Tanuki`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He went down to his knees and keeled over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nearby visitors reacted.`;
   waitForClick; clearText; marker; sound(`EOP271`); appendText; 
   //Park staff
   Park_staff`"Is everything alright?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `MY01ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then a park employee appeared from the
door.`;
   waitForClick; clearText; marker; sound(`EOP272`); appendText; 
   //Park staff
   Park_staff`"Are you having stomach pains?"`;
   waitForClick; clearText; 
});
choice(
   `It was the tanuki...`
   `No, forget it.`
);
switch (choice) {
   case 0: goto(lbl_00000f54);
   case 1: goto(lbl_00001099);
}
let lbl_00000f54;
varop(`(28 0a a4) de := (00) 1`);
showTextbox();
text(() => {
   marker; sound(`EOP273`); appendText; 
   Takeshi`"...That tanuki caught me with a body blow..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP274`); appendText; 
   //Park staff
   Park_staff`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The employee gave him a surprised look.`;
   waitForClick; clearText; marker; sound(`EOP275`); appendText; 
   Takeshi`"I got sucker punched by that tanuki!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He pointed at the big tanuki.`;
   waitForClick; clearText; marker; appendText; 
   Tanuki`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tanuki's expression didn't change.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
fgload({ id: 1, name: `MY19ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But it turned and started to run.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY19ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The tanuki's silhouette pranced lightly away
into the distance.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And in an instant it had disappeared down the
walkway.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Park staff
   Park_staff`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP276`); appendText; 
   //Park staff
   Park_staff`"Uh, that is, um, a..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The staffer looked after the tanuki as she
spoke.`;
   waitForClick; clearText; marker; sound(`EOP277`); appendText; 
   //Park staff
   Park_staff`"That's not a tanuki, that's a lemur."`;
   waitForClick; clearText; marker; sound(`EOP278`); appendText; 
   Takeshi`"Le...lemu...what?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He rubbed his still-aching stomach as he spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP279`); appendText; 
   //Park staff
   Park_staff`"Yes. A lemur. You know, a fox-like monkey."`;
   waitForClick; clearText; marker; sound(`EOP280`); appendText; 
   //Park staff
   Park_staff`"It's name is Myumyun."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`LeMU had been named after the continent of
Lemuria.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A legendary land.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`According to the British zoologist, Sclater,
the Lemurian Continent preceded the existence
of islands scattered throughout the Indian
Ocean.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Lemurs were scattered throughout Africa, the
island of Madagascar, Asia and Indonesia.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`While investigating the distribution of these
fox-monkeys, Sclater came to believe a
continent had existed in the Indian Ocean,
adopting the British geologist Brandford's
hypothesis.`;
   delay(30); waitForClick; appendText; 
   Narr`He named this continent Lemuria.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Moreover, the German zoologist, Haeckel,
contended that this continent was the origin of
mankind.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
bgload({ name: `BG26A5L`, transition: 20 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP281`); appendText; 
   //Park staff
   Park_staff`"Myumyun is one of LeMU's mascots."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP282`); appendText; 
   //Park staff
   Park_staff`"But what happened? Are you ill? Or..."`;
   waitForClick; clearText; marker; sound(`EOP283`); appendText; 
   Takeshi`"No. I'm fine now. Don't worry about me..."`;
   waitForClick; clearText; marker; sound(`EOP284`); appendText; 
   Takeshi`"It's over anyway."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP285`); appendText; 
   //Park staff
   Park_staff`"Oh, I see...?"`;
   waitForClick; clearText; 
});
goto(lbl_00001133);
let lbl_00001099;
showTextbox();
text(() => {
   marker; sound(`EOP286`); appendText; 
   Takeshi`"It's nothing. I just took a tumble."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP287`); appendText; 
   //Park staff
   Park_staff`"Is that so?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't bring himself to say that the tanuki
had floored him with one punch...`;
   waitForClick; clearText; marker; appendText; 
   Tanuki`"........."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
fgload({ id: 1, name: `MY19ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The big tanuki turned its back and ran.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY19ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The tanuki's silhouette pranced lightly away
into the distance.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A moment later, it had disappeared up the
hallway ahead.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP288`); appendText; 
   //Park staff
   Park_staff`"Oh. I wonder what happened to that Myumyun."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The staffer looked after the tanuki as she
spoke.`;
   waitForClick; clearText; marker; sound(`EOP289`); appendText; 
   //Park staff
   Park_staff`"You're probably thinking I should be getting
back to my post, right?...Oh well."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She looked at him again and smiled, laughing.`;
   waitForClick; clearText; marker; sound(`EOP290`); appendText; 
   //Park staff
   Park_staff`"If you need anything don't hesitate to call."`;
   waitForClick; clearText; 
});
goto(lbl_00001133);
let lbl_00001133;
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The staffer disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I see...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That wasn't a tanuki, that was 'Myumyun.')`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He wasn't sure why Myumyun had hauled off and
punched him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he knew that wondering about it wouldn't
help.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So he decided to forget about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He needed to be getting somewhere.`;
   waitForClick; clearText; marker; sound(`EOP291`); appendText; 
   Takeshi`"I'll look around on my own a little more..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He muttered this as he composed himself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He knew there should be several attractions at
the other end of this corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His friends might have been looking for him as
they waited in line.`;
   waitForClick; clearText; marker; sound(`EOP292`); appendText; 
   Takeshi`"So which way should I go?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`His legs were so tired that he could barely
move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This is...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The world's worst theme park...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`And that was exactly how he felt.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG01A3`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP293`); appendText; 
   Kid`"Oh well..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hit by a slight dizzy spell, he leaned against
the wall.`;
   waitForClick; clearText; marker; sound(`EOP294`); appendText; 
   Kid`"What in the world...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He sighed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was fully and utterly beat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The staffer that had just been talking to him
had vanished somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You wasn't around either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had lost sight of the other girl as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was alone again.`;
   waitForClick; clearText; marker; sound(`EOP295`); appendText; 
   Kid`"What did I come here for? I..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He thought that maybe he should have waited
where he was before, after all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Having lost his destination, he rode the
elevator from the aquarium and returned to
basement floor two. `;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_12`, a1: 0, volume: 100 });
bgload({ name: `BG25A5`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Basement floor two—Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The second floor...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I screwed up...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The rest area is down one more level.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt like he had come a long way from the
elevator room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't know which path he should take to go
down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which way...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`EOP296`); appendText; 
   //??
   Unk`"Could you come here for a moment?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A voice called to him from somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From somewhere...`;
   waitForClick; clearText; marker; sound(`EOP297`); appendText; 
   Kid`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the shadows of the path, the owner of the
voice was beckoning to him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the hand did not belong to a human.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`EOP298`); appendText; 
   //??
   Unk`"Look, hurry up will you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the whispering voice of a young woman.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her bulky, black arm was swaying rhythmically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Disturbed by the difference between the voice
and its owner's appearance, he moved hypnotized
in its direction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hand and arm clearly belonged to a tanuki.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a big tanuki.`;
   waitForClick; clearText; 
});
bgload({ name: `BG12A2`, transition: 20 });
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
bgload({ name: `BG12A1`, transition: 20 });
fgload({ id: 1, name: `MY01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP299`); appendText; 
   Tanuki`"Do you know where we are?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was led by the tanuki into a room at the end
of the walkway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or rather...packed into it.`;
   waitForClick; clearText; marker; sound(`EOP300`); appendText; 
   Kid`"This is..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is this the girl's changing room...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He saw a uniform, like the one You had been
wearing, packed away inside an open locker.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hey...I can even see some women's underwear...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room smelled like perfume.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air was saturated with a scent so strong it
almost made him choke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smell was about to overwhelm him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He struggled to get his mind under control and
maintain his focus.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP301`); appendText; 
   Tanuki`"Hey, do you know where we are?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tanuki asked the same question again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Come to think of it...why was she a tanuki
anyway?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had no clue.`;
   waitForClick; clearText; marker; sound(`EOP302`); appendText; 
   Kid`"This..."`;
   waitForClick; clearText; marker; sound(`EOP303`); appendText; 
   Tanuki`"...is the changing room."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said this before he could answer.`;
   waitForClick; clearText; marker; sound(`EOP304`); appendText; 
   Tanuki`"Changing room's are..."`;
   waitForClick; clearText; marker; sound(`EOP305`); appendText; 
   Tanuki`"A place to keep secrets away from prying
eyes..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said this quietly.`;
   waitForClick; clearText; marker; sound(`EOP306`); appendText; 
   Kid`"Secrets?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY04ADL`, x: 320, useAnim: false });
removeFG({ id: 1, useAnim: false });
playSFX({ name: `SE10_05`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 03 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Wham!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly his vision faded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything went completely dark.`;
   waitForClick; clearText; marker; sound(`EOP307`); appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`EOP308`); appendText; 
   Tanuki`"Will you look after this for me?"`;
   waitForClick; clearText; marker; sound(`EOP309`); appendText; 
   Kid`"Huh? What? What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Look after?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't understand.`;
   waitForClick; clearText; marker; sound(`EOP310`); appendText; 
   Tanuki`"Here, I'll help you put it on right."`;
   waitForClick; clearText; marker; sound(`EOP311`); appendText; 
   Kid`"Uh, um..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wear it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had no idea what she was talking about.`;
   waitForClick; clearText; marker; sound(`EOP312`); appendText; 
   Kid`"Uh, wuh, whoa..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't understand why, but he couldn't move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was powerless to resist her and let her do
what she wanted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In a moment, something completely covered his
body.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`EOP313`); appendText; 
   Tanuki`"Hee, hee. This should do it..."`;
   waitForClick; clearText; marker; sound(`EOP314`); appendText; 
   Tanuki`"Alright then. I'll leave the rest to you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the light sound of her footsteps faded into
the distance.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The last thing he heard was the click of a door
shutting...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He heard the sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he did not see her leave.`;
   waitForClick; clearText; marker; sound(`EOP315`); appendText; 
   Kid`".........?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What did she do to me?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`His face felt heavy...`;
   waitForClick; clearText; marker; appendText; 
   Narr`His body felt heavy...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had tunnel vision...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And for some reason, his body was bristling with
hair...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Could it be...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That this is...the mascot outfit...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`When he shook his head, it made a sound like
bristles brushing something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there was a smell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was some other scent from inside the
costume.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sweet smell that made him dizzy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It pierced deep into his brain...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before he knew what was going on, he had opened
the door and was shuffling out into the pathway.`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG06A2`, transition: 20 });
fgload({ id: 1, name: `MY19ADS`, x: 320, useAnim: true });
clock(`12:29`);
showTextbox();
text(() => {
   marker; sound(`EOP316`); appendText; 
   Takeshi`"Ahh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without thinking, he let out a cry.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had found it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It's that tanuki...)`;
   waitForClick; clearText; 
});
goto(lbl_00001331).if(var_de == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He had just been told that it was not a tanuki,
but Myumyun or a fox-like monkey, but that
information had already disappeared from his
mind.`;
   waitForClick; clearText; 
});
goto(lbl_0000133a);
let lbl_00001331;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He had just heard that it was not a tanuki, but
Myumyun the fox-monkey, but that information had
already disappeared from his mind.`;
   waitForClick; clearText; 
});
goto(lbl_0000133a);
let lbl_0000133a;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(I forgot its name—)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It doesn't matter though, he's the one that
hit me and ran away.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't want revenge... `;
   waitForClick; clearText; marker; appendText; 
   Narr`But he did want to ask it why it had done what
it did.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY19ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Without making a sound, he slowly approached
the tanuki—mascot—Myumyun.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `MY19ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And as soon as he got behind it, he quickly
grabbed the costume by the head.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_ET04A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE10_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There!`;
   waitForClick; clearText; marker; sound(`EOP317`); appendText; 
   Kid`"Who...who're you?"`;
   waitForClick; clearText; marker; sound(`EOP318`); appendText; 
   Takeshi`"I should be asking you that!"`;
   waitForClick; clearText; marker; sound(`EOP319`); appendText; 
   Takeshi`"Why would you do something like that!?"`;
   waitForClick; clearText; marker; sound(`EOP320`); appendText; 
   Kid`"Huh? What'd I do?"`;
   waitForClick; clearText; marker; sound(`EOP321`); appendText; 
   Takeshi`"Don't play dumb with me."`;
   waitForClick; clearText; marker; sound(`EOP322`); appendText; 
   Kid`"I have no idea what you are talking about..."`;
   waitForClick; clearText; marker; sound(`EOP323`); appendText; 
   Takeshi`"You punched me!"`;
   waitForClick; clearText; marker; sound(`EOP324`); appendText; 
   Kid`"No I didn't. I have no idea what you mean..."`;
   waitForClick; clearText; marker; sound(`EOP325`); appendText; 
   Takeshi`"Liar! What? Did you forget?"`;
   waitForClick; clearText; marker; sound(`EOP326`); appendText; 
   Kid`"I'm not lying. This girl..."`;
   waitForClick; clearText; marker; sound(`EOP327`); appendText; 
   Kid`"Gave me this outfit out of nowhere and..."`;
   waitForClick; clearText; marker; sound(`EOP328`); appendText; 
   Takeshi`"What? You just met her? When did you change?"`;
   waitForClick; clearText; marker; sound(`EOP329`); appendText; 
   Kid`"I just put it on. I..."`;
   waitForClick; clearText; marker; sound(`EOP330`); appendText; 
   Takeshi`"Just put it on? What are you talking about?"`;
   waitForClick; clearText; marker; sound(`EOP331`); appendText; 
   Kid`"But why do this..."`;
   waitForClick; clearText; marker; sound(`EOP332`); appendText; 
   Kid`"This..."`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG06A2`, transition: 20 });
stopBGM();
playSFX({ name: `SE05_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At that point, the tanuki collapsed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He collapsed in full Myumyun regalia.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`EOP333`); appendText; 
   Takeshi`"Wh...what? Hey!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi shook his shoulders, but there was no
response.`;
   waitForClick; clearText; marker; sound(`EOP334`); appendText; 
   Takeshi`"Somebody come quick! Something's not right
here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He yelled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Visitors watched from a distance.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP335`); appendText; 
   //Park staff
   Park_staff`"What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A female employee had heard the fuss and came
running.`;
   waitForClick; clearText; marker; sound(`EOP336`); appendText; 
   Takeshi`"Huh? You're that girl from before... this guy
just collapsed all of the sudden."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP337`); appendText; 
   //Park staff
   Park_staff`"Let me see!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The employee took the pulse of the fallen
youth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi wondered if she had any medical
knowledge.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP338`); appendText; 
   //Park staff
   Park_staff`"He's alright...but we can't leave him here
like this."`;
   waitForClick; clearText; marker; sound(`EOP339`); appendText; 
   Takeshi`"I'll help."`;
   waitForClick; clearText; marker; sound(`EOP340`); appendText; 
   //Park staff
   Park_staff`"Great, thanks."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Why had this happened?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had no idea.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No idea...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where he was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where had he gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shaken.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Feeling ill.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He could feel hair from the costume rubbing
along both of his sides as two people carried
him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rubbing...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wished they'd get the mascot suit off him
quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fur felt nasty.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So hot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So hot he couldn't stand it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The heat made him feel faint.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His consciousness felt like it would drift away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why had this happened?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So strange...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't him or her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He heard a different voice from somewhere...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He had been hauled to the infirmary.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP341`); appendText; 
   //Park staff
   Park_staff`"I wonder what it could be? Is he anemic?"`;
   waitForClick; clearText; marker; sound(`EOP342`); appendText; 
   Takeshi`"Maybe it was the mascot suit? Maybe he couldn't
get used to wearing it."`;
   waitForClick; clearText; marker; sound(`EOP343`); appendText; 
   //Park staff
   Park_staff`"It's possible. It could be heat exhaustion..."`;
   waitForClick; clearText; marker; sound(`EOP344`); appendText; 
   Takeshi`"Does...it looks like he'll be okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`EOP345`); appendText; 
   //Park staff
   Park_staff`"It doesn't appear to be anything serious. A
little rest and he should be fine."`;
   waitForClick; clearText; marker; sound(`EOP346`); appendText; 
   Takeshi`"I see."`;
   waitForClick; clearText; marker; sound(`EOP347`); appendText; 
   //Park staff
   Park_staff`"Thanks for your help. I'll take it from here."`;
   waitForClick; clearText; marker; sound(`EOP348`); appendText; 
   Takeshi`"Oh, alright then."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He opened the sliding door and left the room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP349`); appendText; 
   Takeshi`"Whew...saving people can sure be stressful."`;
   waitForClick; clearText; marker; sound(`EOP350`); appendText; 
   Takeshi`"What was it I came here to do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A cool breeze was blowing along the walkway.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Breeze...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But where was it coming from?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered where he had come from.`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He saw something faintly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sheets.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A bed...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had been put to sleep on a bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On a bed in the infirmary...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He saw something again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Below the sick room...bed...`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `EV_CO03D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Who was on the bed below?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Who is this?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This isn't me...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...Of course not...)`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG25A5`, transition: 20 });
clock(`12:40`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He decided to go further down the hall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The third floor underground, they had called it
Dritte stock...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The guys...they've gotta be lined up waiting
for a crowded ride somewhere.)`;
   waitForClick; clearText; 
});
bgload({ name: `BG22A8`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP351`); appendText; 
   Takeshi`"Hey, sorry! I'm getting in!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He dashed into the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The doors reopened silently and closed again.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`One other person had gotten on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A girl...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(More like a young woman I guess.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`One girl had gotten on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was about high school age.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator floated upward an instant before
descending.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was the faint sound of movement and
vibration.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then his eyes met with the girl's.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered why...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl stared at him suspiciously.`;
   waitForClick; clearText; marker; sound(`EOP352`); appendText; 
   Girl`"...What?"`;
   waitForClick; clearText; marker; sound(`EOP353`); appendText; 
   Girl`"Just who are you...?"`;
   waitForClick; clearText; marker; sound(`EOP354`); appendText; 
   Girl`"Why are you here?"`;
   waitForClick; clearText; marker; sound(`EOP355`); appendText; 
   Girl`"Why are you following me...?"`;
   waitForClick; clearText; 
});
choice(
   `Apologize`
   `Just exactly who are YOU?`
   `Stay silent`
);
switch (choice) {
   case 0: goto(lbl_000016cf);
   case 1: goto(lbl_000016f6);
   case 2: goto(lbl_0000171d);
}
let lbl_000016cf;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; sound(`EOP356`); appendText; 
   Takeshi`"I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't recall seeing her, but he nodded
slightly in apology.`;
   waitForClick; clearText; marker; sound(`EOP357`); appendText; 
   Takeshi`"Did I do something to offend you?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP358`); appendText; 
   Girl`"...Not really..."`;
   waitForClick; clearText; marker; sound(`EOP359`); appendText; 
   Takeshi`".........?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was getting more and more confused.`;
   waitForClick; clearText; marker; appendText; 
   Girl`"........."`;
   waitForClick; clearText; marker; sound(`EOP360`); appendText; 
   Girl`"...I mean..."`;
   waitForClick; clearText; marker; sound(`EOP361`); appendText; 
   Girl`"This elevator is...for employees only."`;
   waitForClick; clearText; marker; sound(`EOP362`); appendText; 
   Takeshi`"Oh, I see."`;
   waitForClick; clearText; 
});
goto(lbl_00001739);
let lbl_000016f6;
varop(`(28 0a a4) b7 += (00) 2`);
showTextbox();
text(() => {
   marker; sound(`EOP363`); appendText; 
   Takeshi`"Just exactly who are YOU?"`;
   waitForClick; clearText; marker; sound(`EOP364`); appendText; 
   Takeshi`"Did I do something wrong?"`;
   waitForClick; clearText; marker; sound(`EOP365`); appendText; 
   Girl`"Yes, you did. Just now..."`;
   waitForClick; clearText; marker; sound(`EOP366`); appendText; 
   Takeshi`"Just now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was getting more and more confused.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Girl`"........."`;
   waitForClick; clearText; marker; sound(`EOP367`); appendText; 
   Girl`"I mean..."`;
   waitForClick; clearText; marker; sound(`EOP368`); appendText; 
   Girl`"I don't want...you to get in the way. That's
all."`;
   waitForClick; clearText; marker; sound(`EOP369`); appendText; 
   Takeshi`"Get in the way of what?"`;
   waitForClick; clearText; 
});
goto(lbl_00001739);
let lbl_0000171d;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Girl`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She avoided his eyes.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt like the air around him had suddenly
gotten much heavier.`;
   waitForClick; clearText; 
});
goto(lbl_00001739);
let lbl_00001739;
hideTextbox();
stopBGM();
playSFX({ name: `SE10_07`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_cb_0_6`);
varop(`(28 0a a2) 3d := (00) 7`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 4`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Boom!`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
varop(`(28 0a a2) 41 := (00) 11`);
varop(`(28 0a a2) 42 := (00) 9`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Jolting suddenly, the elevator stopped.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU01B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He looked at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights flickered unsteadily.`;
   waitForClick; clearText; marker; sound(`EOP370`); appendText; 
   Takeshi`"Wh...what was that?"`;
   waitForClick; clearText; marker; sound(`EOP371`); appendText; 
   Girl`"It couldn't be..."`;
   waitForClick; clearText; marker; sound(`EOP372`); appendText; 
   Takeshi`"Couldn't be? Couldn't be what?"`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 9, color: WHITE });
closeDimInAndOutAndFilterAnim();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 16, volume: 100 });
setSceneTitle({ index: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Couldn't be?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered if something had gone terribly
wrong.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Very strange....`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `EV_SA03B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Who's this?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh, it's her.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(We've finally met...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I've been looking for you this whole time...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`But his voice didn't reach her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"————,—————"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"————"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"————————"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't hear her voice either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how much he tried....`;
   waitForClick; clearText; marker; appendText; 
   Narr`No sounds reached him now.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Damn...what's going on...?)`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But he saw a figure, faintly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was able to make sure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He could see himself and the girl talking over
there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He saw it on the other side...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I can see myself over there...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He watched.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And he watched.`;
   waitForClick; clearText; 
});
bgload({ name: `IMG04A`, transition: 20 });
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(That's strange...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(No...it's odd...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(If I'm watching them, then who is the 'me'
watching me?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something felt out of place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now he knew the truth and his lips trembled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Who is that...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Who could the 'me' over there be?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't shake the feeling that something
was wrong.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like a dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like he was watching the continuation
of a dream.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
closeDimInAndOutAndFilterAnim();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE09_04L`, a1: 0, volume: 100 });
bgload({ name: `EV_TU01B`, transition: 20 });
varop(`(28 0a a2) 41 := (00) 11`);
varop(`(28 0a a2) 42 := (00) 9`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But a dream couldn't have felt so powerfully
raw.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the screaming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the sound of running feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The shrill wailing of sirens.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That wasn't a dream or an illusion.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`EOP373`); appendText; 
   Takeshi`"Couldn't be? Do you know something about
this?"`;
   waitForClick; clearText; marker; sound(`EOP374`); appendText; 
   Girl`"I don't know anything..."`;
   waitForClick; clearText; marker; sound(`EOP375`); appendText; 
   Girl`"Do you know something?"`;
   waitForClick; clearText; marker; sound(`EOP376`); appendText; 
   Takeshi`"How could I know anything?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights gradually dimmed and finally went
out.`;
   waitForClick; clearText; 
});
hideTextbox();
closeDimInAndOutAndFilterAnim();
removeBG({ mode: BLACK, transition: 01 });
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 01 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Why?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had no idea.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't know...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way he could know.`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But there on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There...`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the bed...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
showFilter2();
unSkippableDelay(1);
bgload({ name: `BG10A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The bed below, the bed on top, the bed below...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who are...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(You...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Stop...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Please stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Don't come out...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Please don't come out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Stay inside...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Don't crawl out of there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Stop...Plea...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`S-st...sto...stop...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 2, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
varop(`(28 0a a0) ac := (00) 1`);
closeDimInAndOutAndFilterAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG22A5`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing to fear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was alright.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because there was no longer anyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because there was no one there.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`EOP377`); appendText; 
   Takeshi`"Hey! Who's there? Is there somebody there?"`;
   waitForClick; clearText; marker; sound(`EOP378`); appendText; 
   Takeshi`"I'm here! I'm still in here!"`;
   waitForClick; clearText; marker; sound(`EOP379`); appendText; 
   Takeshi`"Somebody, get me out of here!"`;
   waitForClick; clearText; marker; sound(`EOP380`); appendText; 
   Takeshi`"Answer me...please..."`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
monoColorOverlay({ interval: 0, color: WHITE });
showDimOverlay();
bgload({ name: `BG21A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(21);
fadeOutMonoColorOverlay();
unSkippableDelay(8);
showTextbox();
text(() => {
   marker; sound(`EOP381`); appendText; 
   Kid`"Isn't there anyone there?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody answered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The surroundings were filled with silence.`;
   waitForClick; clearText; marker; sound(`EOP382`); appendText; 
   Kid`"What? Is anybody there?"`;
   waitForClick; clearText; marker; sound(`EOP383`); appendText; 
   Kid`"So I'm alone...hee, hee, hee."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He burst with laughter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ultimate feeling of liberation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no one to restrain him now.`;
   waitForClick; clearText; marker; sound(`EOP384`); appendText; 
   Kid`"Ah, ha, ha, ha!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
varop(`(28 0a a4) ce := (00) 0`);
tweenZoom({ x: 300, y: 250, hx: 200, hy: 150, duration: 60 });
monoColorOverlay({ interval: 12, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
varop(`(28 0a a0) ac := (00) 1`);
closeDimOverlay();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And he ran.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But no one stopped him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Getting there was easy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All that was left was to aim for the 'center.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just take a step.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was simple.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_06`, a1: 0, volume: 95 });
bgload({ name: `IMG06A`, transition: 00 });
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He threw his body into the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He sank.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Deeper, deeper and deeper...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 00 });
varop(`(28 0a a0) ac := (00) 1`);
closeDimOverlay();
closeDimInAndOutAndFilterAnim();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
clock(`12:51`);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sound died away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The embrace of unbelievably pure silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not even a beam of light pierced the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All he could hear was repetitive, heavy
breathing.`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He lost himself mind short-circuiting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His vision narrowed and was overrun with blue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Deep blue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blue...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was strange...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wondered if it really was blue.`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even though he was perfectly still, it seemed
as if his heart was racing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sweat poured off of him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His breathing was ragged, and labored.`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gradually, his consciousness dissolved into the
darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Black.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Endless black.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no mistaking it this time...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything was stained black.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no boundaries to this color.`;
   waitForClick; clearText; 
});
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`His ears hurt. The ringing in them wouldn't
stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt pressure expanding in his lungs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He felt queasy, sick to his stomach.`;
   waitForClick; clearText; marker; sound(`EOP385`); appendText; 
   Girl`"The air pressure...is dropping..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I forgot...I need to pop my ears...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`With a pop, the air building inside his ears
was released.`;
   waitForClick; clearText; marker; sound(`EOP386`); appendText; 
   Takeshi`"Damn..."`;
   waitForClick; clearText; marker; sound(`EOP387`); appendText; 
   Takeshi`"Which way is the exit...?"`;
   waitForClick; clearText; 
});
hideTextbox();
bgload_keepFg({ name: `KURO_BG`, transition: 10 });
delay({ interval: 30 });
setChangePerspectiveDirection(FROM_BOTH);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GRAY);
removeBG({ mode: BLACK, transition: 00 });
stopBGM();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Pitch black.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nothing moved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't move either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There wasn't any sign of a breeze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't hear anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just echoes from something, invisible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Time froze to a stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If he stopped here, he felt like he would forget
that he was even alive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was his intuition.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only a little more...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No!`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no good.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had to get out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he didn't even know which direction to go.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had to get...himself out of this darkness...
had to...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But what could he do?`;
   waitForClick; clearText; marker; appendText; 
   Narr`What could...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't know...`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
hideTextbox();
setKomoreType(1);
showKomoreAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then, he felt a faint, warm light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Light...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`A blade of light slicing through the flat world
of darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And he knew...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The direction was over there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And that there might be a way out...`;
   waitForClick; clearText; marker; appendText; 
   Narr`If he could get over there...`;
   waitForClick; clearText; 
});
choice(
   `I've got to find my friends`
   `Who am I`
);
switch (choice) {
   case 0: goto(lbl_00001e41);
   case 1: goto(lbl_00001e7e);
}
let lbl_00001e41;
setDialogBoxColor(GREEN);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I've got to find them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I quietly`;
   waitForClick; clearText; marker; appendText; 
   Narr`opened the door. `;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeKomoreAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_1A`);
let lbl_00001e7e;
setDialogBoxColor(BLUE);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't know where I was, but I`;
   waitForClick; clearText; marker; appendText; 
   Narr`quietly`;
   waitForClick; clearText; marker; appendText; 
   Narr`opened my eyes.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeKomoreAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`S_1A`);
