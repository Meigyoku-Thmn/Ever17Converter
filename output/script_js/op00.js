l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
delay({ interval: 120 });
removeBG({ mode: WHITE, transition: 2 });
setSceneTitle({ index: 0 });
setDialogBoxColor(GRAY);
delay({ interval: 119 });
showTextbox();
text(() => {
   `He was in the middle of a blue world.`;

});
hideTextbox();
playSFX({ name: `SE10_26`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE09_01L`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
setKomoreType(0);
showKomoreAnim();
eff_4f = 0;
eff_3b = 20;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 30;
eff_3f = VAR_cc_0_6;
eff_40 = 1;
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   `As far as the eye could see, a sheet of water
reached into the distance.`;
   `The May sun shimmered on its surface.`;
   `Above, high above, stretched a clear blue sky.`;
   `The fresh, new sky looked so glossy and vivid
that it might spill down to earth at any
moment.`;
   `That was all that was reflected in his eyes.`;
   `The straight line of the horizon stretched
into the distance, dividing the sea from the
heavens.`;

});
showTextbox();
text(() => {
   Takeshi(EOP000)`"So tranquil..."`;
   `He muttered.`;
   `A solitary seagull traced a gentle arc in the
sky as the wind carried it away.`;
   `The wind, full of the smell of the ocean, blew
by him gently.`;
   `The din of people could be heard in the
background.`;
   `The merry sound of children's voices echoed
brighter than the sunlight pouring down.`;
   Takeshi(EOP001)`"So peaceful..."`;
   `It was like being inside a dream.`;

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
   `—10 miles from M Island, Komagahara
Archipelago, Tokyo`;
   `The man-made island, Insel null, rose above the
waves of the water. It seemed like a place
removed from reality.`;
   `The word 'utopia' might have sprung to mind to
describe it.`;
   `Actually, a slab of rock on the boat dock of
this floating island were carved the following
words.`;

});
bgload({ name: `IT06A`, transition: 20 });
showTextbox();
text(() => {
   `'Where is heaven?'`;
   `'Above the sky, and at your feet...'`;

});
bgload({ name: `BG38A2`, transition: 20 });
showTextbox();
text(() => {
   `Leaning out over the railing of the island, he
gazed into the ocean depths.`;
   `In the blue distance, he saw a massive metallic
structure swaying gently.`;
   Takeshi(EOP002)`"Utopia, huh...?"`;
   `He mumbled and looked back casually...`;

});
bgloadCrop({ name: `EV_CO16A`, transition: 20, x: 0, y: 0, hx: 455, hy: 341 });
showTextbox();
text(() => {
   `And there was a tanuki, or raccoon dog.`;
   `His eyes met those of the animal's.`;
   `For a moment they eyed each other in silence.`;
   Takeshi(EOP003)`"Uh...he-hello..."`;
   `To clear the air, he nodded his head.`;
   `The animal turned away, ignoring him.`;

});
showTextbox();
text(() => {
   `Upon closer inspection he noticed something
biting the animal from behind.`;

});
hideTextbox();
l_ce = 0;
tweenZoom({ x: 0, y: 0, hx: 680, hy: 510, duration: 60 });
bgloadCrop({ name: `EV_CO16A`, transition: 20, x: 0, y: 0, hx: 680, hy: 510 });
showTextbox();
text(() => {
   //??
   Unk(EOP004)`"Grr...grr...grr..."`;
   `It was a young girl.`;
   `She was shaped like a "person."`;
   `Looking closer revealed that there was
something strange about her as well.`;

});
hideTextbox();
l_ce = 0;
tweenZoom({ x: 0, y: 0, hx: 800, hy: 600, duration: 60 });
bgload({ name: `EV_CO16A`, transition: 26 });
showTextbox();
text(() => {
   //??
   Unk(PIPI_24)`"Grr...grr...grr..."`;
   `Namely, a small tanuki attached to the girl's
backside.`;
   `'In front of him there was a big tanuki being
bitten by a girl, who was being bitten by an
smaller tanuki'`;
   `The scene was enough to make him lose his
sense of reality.`;
   `He rubbed his eyes, rubbed them some more,
and opened his eyes again...`;
   `Even after blinking several times... the
bizarre scene refused to go away.`;
   Tanuki(EOP005)`"Hey."`;
   Tanuki(EOP006)`"Would you do something about this kid?"`;
   `Whispered the big tanuki.`;
   `But the words didn't reach his mind, because
it was so busy trying to process the absurd
scene.`;
   //??
   Unk(PIPI_24)`"Grr...grr...grr..."`;
   //??
   Unk(EOP007)`"Grr...grr...grr..."`;
   `(I must be dreaming, right?)`;
   `—That was what he was really thinking.`;

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
removeBG({ mode: WHITE, transition: 2 });
setSceneTitle({ index: 1 });
showTextbox();
text(() => {
   `A dream—`;
   `A dream that would not let him wake up.`;
   `And whiteness.`;
   `A cold, white, reality stretching forever.`;
   `He felt the difference in temperature on his
skin...`;
   `The shock of it finally forced him to open his
eyes.`;

});
playSFX({ name: `SE09_01L`, a1: 0, volume: 90 });
bgload({ name: `BG21A4`, transition: 0 });
clock(`11:34`);
showTextbox();
text(() => {
   Kid`"..."`;
   `He wondered how long he had been sitting.`;
   `It couldn't have been long.`;
   `He had only been in the park an hour.`;
   `He'd been sitting on the bench the whole time.`;
   `Eating the same ice cream.`;
   Kid(EOP008)`"It's cold."`;
   `Of course it was.`;
   `It had melted into a muddy mess.`;
   `The melted vanilla ice cream trickled on to his
hand, spilling on his lap.`;
   Kid(EOP009)`"Wooh, that's cold."`;
   `The ice cream slowly soaked into the fabric of
his pants.`;
   `Finally the coldness of it had spread
completely soaking into his skin.`;
   `He had been sitting there a while.`;
   `He had been sitting so long.`;
   `But the person he was waiting for never came.`;
   `There was no sign that she would.`;
   `(I wonder why she hasn't come?)`;
   `He didn't know.`;
   `(Why am I here?)`;
   `He felt like he was teetering on the verge of
utter confusion.`;
   Kid(EOP010)`"Oh well..."`;
   `He shook his head and sighed.`;
   `It didn't seem his pants would dry anytime
soon.`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP011)`"What's wrong?"`;
   `He sensed a slight movement and a girl sat down
next to him.`;

});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She was sporting the theme park uniform.`;
   `A white outfit with a bluish ribbon.`;
   `She looked like a guide.`;
   //Park staff
   Park_staff(EOP012)`"Are you lost?"`;
   `A beaming, innocent smile appeared on her
shining face.`;
   //Park staff
   Park_staff(EOP013)`"Did you get separated from your friends?"`;
   Kid(EOP014)`"Yeah."`;
   Kid(EOP015)`"I've been waiting."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP016)`"Waiting?"`;
   Kid(EOP017)`"Well..."`;
   Kid(EOP018)`"I was waiting."`;
   //Park staff
   Park_staff(EOP019)`"You were waiting..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP020)`"For me?"`;
   Kid(EOP021)`"N...no..."`;
   `He was flustered as her grinning face peered
into his.`;
   Kid(EOP022)`"I was told to wait here, so..."`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP023)`"I see..."`;
   //Park staff
   Park_staff(EOP024)`"But it looks like they're not coming."`;
   `She gave him a sideways glance.`;
   //Park staff
   Park_staff(EOP025)`"Listen, you've obviously been stood up and are
tired of waiting..."`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP026)`"I know!"`;
   `Her face suddenly lit up and she clapped her
hands together.`;
   //Park staff
   Park_staff(EOP027)`"Hey, hey, you're alone, right?"`;
   Kid(EOP028)`"Huh?"`;
   //Park staff
   Park_staff(EOP029)`"Well, you're bored right? How about I give you
a tour of LeMU?"`;
   `She tugged at his arm.`;
   `Without waiting for his reply, she made him
stand.`;
   Kid(EOP030)`"B...but, I'm waiting for someone."`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP031)`"Waiting? For who?"`;
   Kid(EOP032)`"...Uh..."`;
   `Who was it?`;
   `He couldn't think of the name.`;
   //Park staff
   Park_staff(EOP033)`"Well, I dunno who you're waiting for, but..."`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP034)`"If they haven't showed up yet, don't you think
you've waited long enough?"`;
   `She said this happily, almost prancing around.`;
   //Park staff
   Park_staff(EOP035)`"Whaddya say? How about it?"`;
   Kid(EOP036)`"Al-alright..."`;
   `He nodded slightly.`;
   `The girl's nametag glittered brightly against
the white fabric of her uniform.`;
   Kid(EOP037)`"Y-O-U...?"`;
   `That was what it said.`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP038)`"I'm You!"`;
   Kid(EOP039)`"???"`;
   `I'm you...?`;
   You(EOP040)`"Yup."`;
   `She nodded.`;
   You(EOP041)`"My name's You..."`;
   You(EOP042)`"My last name is Tanaka..."`;
   Kid(EOP043)`"You...?"`;
   You(EOP044)`"My real name is much longer, though."`;
   Kid(EOP045)`"Longer?"`;
   You(EOP046)`"Long, like, endlessly long. But..."`;
   You(EOP047)`"But, it's such a pain...just call me 'You.'"`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP048)`"Nice to meet you!"`;
   `With that she enthusiastically stuck out her
hand.`;
   Kid(EOP049)`"N-nice to meet you?"`;
   `Without thinking he shook her hand.`;
   `And before he had realized it, he'd been sucked
along into her rhythm.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP050)`"So, shall we go?"`;
   `They released hands, reluctantly.`;
   `He looked again at his hand, which had moments
before connected them.`;
   `The vanilla ice cream that had spilled on it
had completely melted away.`;

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
   `(Huh?)`;
   `He noticed that the two tanuki had formed a
line and were proceeding forward.`;
   `In front of them was a massive, gate, that was
sealed shut.`;
   `The gate swung open soundlessly, and the big
tanuki, little tanuki and the girl went inside.`;

});
removeFG({ id: 1, useAnim: true });
delay({ interval: 30 });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `(Finally my turn...)`;
   `He followed on their heels.`;

});
hideTextbox();
closeKomoreAnim();
bgload({ name: `BG38A2`, transition: 20 });
showTextbox();
text(() => {
   `This was LeMU's only entrance for visitors.`;

});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   `Several park employees waited at the gate and
handed over what looked like earphones to the
visitors.`;
   `It seemed that the earphones were to be used at
some point up ahead.`;
   `He wondered why.`;

});
bgload({ name: `BG38A2`, transition: 20 });
showTextbox();
text(() => {
   `Looking around skeptically, but obeying
instructions, he stepped into the building.`;

});
hideTextbox();
l_ce = 0;
tweenZoom({ x: 332, y: 185, hx: 200, hy: 150, duration: 45 });
monoColorOverlay({ interval: 18, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `He surveyed the ceiling.`;
   `There were no windows. From the polished round
walls, it was clear that the room was
dome-shaped.`;
   `He looked around.`;
   `Many of the visitors, who had been waiting in
line, headed into the room.`;
   `Among them were friends, amorous couples,
people with their families.`;
   `The 'Tanuki family' had, however, split up it
seemed.`;
   `The big tanuki shoved its way through the crowd
of people and continued through a door on the
other side of the room.`;
   `The young girl stayed on the same side of the
room as the little tanuki.`;
   `(I've got no clue what those tanuki are all
about, but...)`;
   `(I guess my friends aren't here either...)`;
   `He didn't see any familiar faces around.`;
   `He figured maybe they had already taken the far
elevator downstairs.`;
   `Just 20 minutes earlier, the visitor room had
reached capacity...`;
   `And the friends he had been waiting with had
gone ahead, leaving him behind to go down with
the next group.`;
   `(Oh well. I'm sure I'll find everyone down
below soon enough.)`;
   `Finally, the gate to the entrance slipped shut
quietly.`;
   `The big tanuki fiddled with something on the
wall and the room got a shade darker.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
stopBGM();
clock(`11:47`);
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP051)`"Hello everybody!"`;
   `A park employee emerged out of the darkness.`;
   `He wondered where she had come from. She was
wearing a flashy dress.`;
   `The dim light shining on her made her seem like
a character from some dream.`;

});
playBGM({ num: 14, volume: 100 });
bgload({ name: `EV_SO04A`, transition: 10 });
showTextbox();
text(() => {
   Visitors`"..."`;
   //Park staff
   Park_staff(EOP052)`"What? No reaction folks?"`;
   //Park staff
   Park_staff(EOP053)`"I'll try that again..."`;
   //Park staff
   Park_staff(EOP054)`"Hello!"`;
   //Young Girl
   Young_Girl(EOP055)`"Helloooooo!"`;
   `It was the girl who, just a little while ago,
had been attached to the rear of the large
tanuki.`;

});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP056)`"Oh! I've found a girl with some spunk."`;
   //Park staff
   Park_staff(EOP057)`"What's your name?"`;
   //Young Girl
   Young_Girl(EOP058)`"I'M CO-CO YA-GA-MI!"`;
   Coco(EOP059)`"This is my pet dog, Pipi."`;
   Pipi(PIPI_01)`"Woof!"`;
   `(So that isn't a tanuki, it's a dog.)`;
   `(I thought they didn't let pets in here.)`;
   `He tilted his head doubtfully.`;
   //Park staff
   Park_staff(EOP060)`"So Coco, how many times have you been to LeMU?"`;

});
showTextbox();
text(() => {
   Coco(EOP061)`"Uh, well...one,two,three,four,five..."`;
   Coco(EOP062)`"This is my first time!"`;
   //Park staff
   Park_staff(EOP063)`"Hee, hee. Aren't you a funny girl?"`;
   Coco(EOP064)`"I get that a lot."`;
   Coco(EOP065)`"You want me to do something even more funny?"`;

});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP066)`"What?"`;
   Coco(EOP067)`"My friend taught me a good joke the other day!"`;

});
bgload({ name: `EV_SO04C`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP068)`"O-ooh.... Er...Maybe some other time."`;
   Coco(EOP069)`"Why not?"`;
   //Park staff
   Park_staff(EOP070)`"Because I have to tell everyone something right
now."`;
   Coco(EOP071)`"Oh. Okay then."`;
   Coco(EOP072)`"But it's really funny..."`;
   Coco(EOP073)`"That's too bad, huh Pipi?"`;
   Pipi(PIPI_01)`"Woof!"`;

});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP074)`"Ahem. Once again..."`;

});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP075)`"On behalf of the LeMU marine theme park, I'd
like to thank you very much for coming."`;
   //Park staff
   Park_staff(EOP076)`"I am about to give you a brief explanation
about the LeMU theme park and tell you a few
things to watch out for."`;
   Coco(EOP077)`"Hey, who cares? Hurry up and let us inside
already!"`;
   //Park staff
   Park_staff(EOP078)`"I would love to take everyone inside..."`;
   //Park staff
   Park_staff(EOP079)`"But, I'm terribly sorry."`;
   //Park staff
   Park_staff(EOP080)`"Everyone actually will have to stay in this
compression chamber for now."`;
   //Park staff
   Park_staff(EOP081)`"It will only take 17 minutes."`;
   //Park staff
   Park_staff(EOP082)`"So please just bear with me for that long."`;

});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP083)`"First, let me explain a bit about this room...
it is called a compression chamber."`;
   //Park staff
   Park_staff(EOP084)`"Starting from now, the air pressure in here is
going to rise to 6 atmospheres."`;
   //Park staff
   Park_staff(EOP085)`"Why do you think it is necessary to raise the
air pressure? I'll explain the reason for that
in a moment..."`;

});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP086)`"But before that, let me tell you a few things
you should be aware of."`;
   //Park staff
   Park_staff(EOP087)`"As the air pressure rises, you may start to
feel a strange sensation in your ears."`;
   //Park staff
   Park_staff(EOP088)`"Like when you are descending a mountain or in
an airplane. It's because the increased air
pressure is pressing on your ear drums."`;

});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP089)`"So if you think your ears feel a bit
strange..."`;
   //Park staff
   Park_staff(EOP090)`"Pinch your nose with your fingers, close your
mouth tight and try to pop your ears."`;
   //Park staff
   Park_staff(EOP091)`"If that doesn't get your ears back to normal,
or you if don't feel well, please raise your
hand and let me know."`;
   //Park staff
   Park_staff(EOP092)`"In the event that happens, we will immediately
stop increasing the air pressure."`;

});
bgload({ name: `EV_SO04C`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP093)`"By the way, are there any people here that
don't know how to pop their ears?"`;
   //Park staff
   Park_staff`"..."`;
   `${voice(EOP094)}"Is everything clear then?"`;
   //Park staff
   Park_staff`"..."`;

});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP095)`"Alright then. We'll initiate the rise in
pressure."`;
   //Park staff
   Park_staff(EOP096)`"As I said before, the time required to increase
the pressure is 17 minutes."`;
   //Park staff
   Park_staff(EOP097)`"During that time, I will explain to 
everyone about the structure of LeMU."`;

});
bgload({ name: `IMG01A`, transition: 20 });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP098)`"As you all know, LeMU is floating in the
ocean..."`;
   //Park staff
   Park_staff(EOP099)`"At a depth of between 51 and 103 feet..."`;

});
bgload({ name: `MAP03A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP100)`"Now, if you look at this chart, you will see
that the structure is divided into four layers."`;
   //Park staff
   Park_staff(EOP101)`"From the top these are called Insel null,
Erste boden, Zweite stock and Dritte
stock..."`;
   //Park staff
   Park_staff(EOP102)`"In terms of a normal building, you might think
of it as a structure with a ground floor
extending down to a three story basement."`;
   //Park staff
   Park_staff(EOP103)`"Insel null, here, is a floating island."`;
   //Park staff
   Park_staff(EOP104)`"It is an immense, man-made island, floating in
the ocean..."`;
   //Park staff
   Park_staff(EOP105)`"In German, 'insel' means 'island' and 'null'
means 'zero.'"`;
   //Park staff
   Park_staff(EOP106)`"In other words, this is floor zero, or the
ground floor."`;
   //Park staff
   Park_staff(EOP107)`"Next is from Erste to Dritte..."`;
   `Just then.`;
   Coco(EOP108)`"Hey, hey. Hey, you."`;
   Coco(EOP109)`"Hey, I'm talking to you."`;
   `As he was listening to the explanation, someone
pulled on him from behind.`;
   `He turned to look around.`;

});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   `It was the girl who had just been talking with
the park staff.`;
   `(What was her name again...?)`;
   Coco(EOP110)`"Hey. Don't you want to know about my joke?"`;
   `(Oh, that's right.)`;
   `(Her name was Coco.)`;
   `(And that animal she's holding is 
Pepe, or Popo, or something...)`;
   Coco(EOP111)`"You wanna know, don't you?"`;
   Takeshi(EOP112)`"Huh? What?"`;
   Coco(EOP113)`"The joke I was just talking about. It's an
Ame-joke."`;
   Takeshi(EOP114)`"An ame..joke?"`;

});
bgload({ name: `EV_CO01C`, transition: 20 });
showTextbox();
text(() => {
   Coco(EOP115)`"You haven't heard about them? They're real
popular now, ya' know."`;
   Takeshi(EOP116)`"No, I haven't.... What are you talking about?"`;

});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   Coco(EOP117)`"An Ame-joke is an American joke. Get it?
'Ame-joke.'"`;
   Takeshi(EOP118)`"Oh, really..."`;
   Coco(EOP119)`"Makes you wanna hear it, right? Want me to
tell you?"`;

});
choice(
   `Listen to the joke`,
   `Listen to the staffer's explanation`,
);
switch (l_choice) {
   case 0: goto(lbl_00000765);
   case 1: goto(lbl_000007a5);
}
let lbl_00000765;
l_listened_to_the_joke = 1;
showTextbox();
text(() => {
   Takeshi(EOP120)`"Yeah, I guess I'll listen to it."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Coco(EOP121)`"Okay! Here it goes!"`;

});
hideTextbox();
playBGM({ num: 9, volume: 100 });
showTextbox();
text(() => {
   Coco(EOP122)`"Once there was this guy who was talking to the
ghost of his dead grandfather. So he asked him
a question."`;
   Coco(EOP123)`"'How long is a million years to a ghost?' he
wanted to know."`;
   Coco(EOP124)`"And the ghost answered."`;
   Coco(EOP125)`"'A million years is like a second to me.'"`;
   Coco(EOP126)`"Next the man asked..."`;
   Coco(EOP127)`"'How much is a million dollars to a ghost?'"`;
   Coco(EOP128)`"And the ghost answered."`;
   Coco(EOP129)`"'A million dollars? It is but one, small, cent
to me.'"`;
   Coco(EOP130)`"When he heard that, the man pretended to smile
all nice and then said..."`;
   Coco(EOP131)`"'Well then, gramps, how about giving me one of
your cents then?'"`;
   Coco(EOP132)`"Laughing the ghost replied."`;
   Coco(EOP133)`"'Sure. Right away.'"`;
   Coco(EOP134)`"'But can I get you to wait just a second?'"`;
   Takeshi`"..."`;
   Coco(EOP135)`"Hee, hee, heee..."`;

});
bgload({ name: `EV_CO01B`, transition: 20 });
showTextbox();
text(() => {
   Coco(EOP136)`"Waaa! Ha, ha, ha!"`;
   Coco(EOP137)`"Well? That's a pretty good joke, huh?"`;

});
goto(lbl_000007cc);
let lbl_000007a5;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi(EOP138)`"Well, I suppose it could be worse, but....I'll
talk to you later."`;
   Coco(EOP139)`"Huh."`;
   `Patting the little dog's head, he turned back to
listen to the explanation.`;

});
bgload({ name: `EV_SO04A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP140)`"So now you should now have a general
understanding of the layout of each floor."`;
   //Park staff
   Park_staff(EOP141)`"By the way, LeMU was designed with saturation
diving specifications."`;
   //Park staff
   Park_staff(EOP142)`"In other words, the air pressure inside is
equivalent to or greater than the water
pressure outside."`;
   //Park staff
   Park_staff(EOP143)`"As I said at the beginning..."`;
   //Park staff
   Park_staff(EOP144)`"The complex that we're all going to enter is
filled with a mixture of gases at
6 atmospheres."`;
   //Park staff
   Park_staff(EOP145)`"So right now our bodies are adjusting to be
able to handle pressure equivalent to
6 atmospheres."`;
   //Park staff
   Park_staff(EOP146)`"Of course, this mixture of gases is composed of
oxygen, nitrogen and helium and is completely
harmless to people."`;
   //Park staff
   Park_staff(EOP147)`"The reason for raising the air pressure inside
is..."`;
   //Park staff
   Park_staff(EOP148)`"That it is essential to make LeMU safe for
everyone."`;
   //Park staff
   Park_staff(EOP149)`"Okay, everyone, we are now going to enter the
ocean..."`;
   //Park staff
   Park_staff(EOP150)`"Are any of you here feeling just a little bit
nervous?"`;
   //Park staff
   Park_staff(EOP151)`"You might be worrying about what would happen
if seawater started leaking inside, or that you
might be crushed by the water pressure, or us
sinking."`;
   //Park staff
   Park_staff(EOP152)`"However, please relax. There is nothing to
worry about."`;
   //Park staff
   Park_staff(EOP153)`"There is absolutely no way that LeMU could be
crushed by the outside water pressure because
we have raised the air pressure inside."`;

});
goto(lbl_000007cc);
let lbl_000007cc;
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP154)`"By the way, before we entered this
pressurization chamber, we handed out earphones
to everyone, remember?"`;
   //Park staff
   Park_staff(EOP155)`"Yes, that's right, the earphones that everyone
is using right now."`;

});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP156)`"These are not your average earphones. They are
'voice alternators.'"`;
   //Park staff
   Park_staff(EOP157)`"LeMU is pumped full of helium gas, so without
these on your ears, you'll sound like a duck."`;
   `He removed his voice alternators, to see what
would happen.`;

});
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   `(Ha, ha! It's true! People really do sound like
ducks.)`;
   `(Then again, maybe they sound more like aliens
than ducks.)`;
   `The voices of the people around him jumped to
a strange, higher tone.`;

});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(EOP158)`"Hey, say something."`;
   Coco(EOP159)`"Like what?"`;
   Takeshi(EOP160)`"Ha, ha, ha. Your voice is hilarious."`;
   Coco(EOP161)`"Huh? My voice?"`;

});
if (l_listened_to_the_joke == 0) goto(lbl_00000848);
showTextbox();
text(() => {
   `Coco hadn't been listening to the explanation.`;
   Takeshi(EOP162)`"Can you tell me that joke one more time?"`;
   Coco(EOP163)`"Why?"`;
   Takeshi(EOP164)`"C'mon, just do it."`;
   Coco(EOP165)`"Once there was this guy who was talking to the
ghost of his dead grandfather. So he asked him
a question."`;
   Coco(EOP166)`"'How long is a million years to a ghost?' he
wanted to know."`;
   Coco(EOP167)`"And the ghost answered."`;
   Takeshi(EOP168)`"Heee...heee..."`;
   Takeshi(EOP169)`"Waaah, Haaaah!"`;

});
bgload({ name: `EV_CO01C`, transition: 20 });
showTextbox();
text(() => {
   Coco(EOP170)`"What? That's weird. You didn't even laugh at
all just a second ago."`;
   `He put the voice alternators back in his ears
and looked back at the staffer again.`;

});
goto(lbl_00000877);
let lbl_00000848;
showTextbox();
text(() => {
   Coco(EOP171)`"What's wrong with my voice?"`;
   Takeshi(EOP172)`"Ha, ha, ha. You weren't listening to the
explanation."`;
   Coco(EOP173)`"What are you laughing at? Why are you smiling
like that?"`;
   Coco(EOP174)`"You're acting really weird."`;
   Takeshi(EOP175)`"Well, why don't you try listening to your own
voice?"`;
   Coco(EOP176)`"Huh?"`;
   Takeshi(EOP177)`"It's so funny. You sound like an eight-legged
alien."`;

});
bgload({ name: `EV_CO01C`, transition: 20 });
showTextbox();
text(() => {
   Coco(EOP178)`"Alien? Alien as in 'Take us to your leader'
...goooba joooba doooba space alien?"`;
   Coco(EOP179)`"Like a Martian or someone for Planet Kuikui,
or something?"`;
   Coco(EOP180)`"A star person? From the far edge of the galaxy,
with lasers...?"`;
   Takeshi`"..."`;

});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   Coco(EOP181)`"My joke was a lot funnier than THAT!"`;
   Takeshi(EOP182)`"Hee...ha, ha..."`;
   Takeshi(EOP183)`"Waaah, Haaaah!"`;
   Takeshi(EOP184)`"That's enough. I can't take anymore of this.
Thanks."`;
   `He placed the voice alternators back in his
ears again and turned back to watch the
staffer.`;

});
goto(lbl_00000877);
let lbl_00000877;
bgload({ name: `EV_SO04B`, transition: 20 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP185)`"And that pretty much covers it."`;
   //Park staff
   Park_staff(EOP186)`"In approximately one minute, the door on this
side of the room will open."`;
   //Park staff
   Park_staff(EOP187)`"On the other side of that door is an elevator,
and at the bottom of it a brilliant paradise
awaits."`;
   //Park staff
   Park_staff(EOP188)`"We hope that you enjoy yourself to your hearts
content, here at the marine theme park, LeMU."`;

});
bgload({ name: `EV_CO01A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(EOP189)`"So, shall we go...?"`;
   `Just as he headed for the elevator...`;
   Coco(EOP190)`"So, are you here by yourself?"`;
   Takeshi(EOP191)`"Who, me? No, I got separated from my friends."`;
   Coco(EOP192)`"So you're lost?"`;
   Takeshi(EOP193)`"Not exactly. But something like that."`;
   Takeshi(EOP194)`"I'll head down the elevator and take a look
around."`;

});
bgload({ name: `EV_CO01B`, transition: 20 });
showTextbox();
text(() => {
   Coco(EOP195)`"How about checking with that girl who was just
talking?"`;
   Takeshi(EOP196)`"Oh, I suppose I could do that. Excuse me..."`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Looking back he saw that the employee had
already disappeared.`;

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
   You(EOP197)`"Hmmmm. So you came to LeMU by yourself?"`;
   Kid(EOP198)`"Yup. That's right."`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP199)`"Even so..."`;
   `After bending down to wipe away the white stain
on his pants, You stood up.`;
   You(EOP200)`"You don't see that very often, a guy coming to
a park like this alone."`;
   `That was true.`;
   `It was paradise—an amusement park.`;
   `In that instant he had almost forgotten even
that.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG04A3`, transition: 20 });
fgload({ id: 1, name: `YU11BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP201)`"So why didn't you go into the park with your
friends?"`;
   You(EOP202)`"Why arrange to meet inside LeMU?"`;
   Kid(EOP203)`"Huh? Th-that's because..."`;
   `Now that she mentioned it...`;
   `Who HAD said to wait on that bench...?`;
   `Who's idea was it anyway?`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP204)`"Oh, well. Whatever. I won't push you."`;
   Kid`"..........."`;
   `Who was it...?`;
   You(EOP205)`"But, I suppose that...well, I mean..."`;

});
fgload({ id: 1, name: `YU08BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP206)`"You've kind of been stood up...right?"`;
   Kid(EOP207)`"What?"`;
   Kid(EOP208)`"Stood...up?"`;
   `Stood up...`;
   `It took a moment for the meaning of the word to
register.`;
   Kid`"............"`;

});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP209)`"Wow! I hit the nail on the head didn't I? Uh...
sorry..."`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She shrugged slightly, embarrassed.`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP210)`"Well, well. Don't get depressed about it!"`;
   `She changed modes abruptly and let out a hearty
laugh.`;
   `She slapped him solidly on the back.`;
   You(EOP211)`"I'll look out for you. Alright?"`;
   Kid(EOP212)`"Al...alright."`;
   `He nodded, a bit overwhelmed.`;
   `(So...)`;
   `(I was stood up...)`;
   `(I must have been dumped...)`;
   `(Huh...?)`;
   `Then again he wasn't sure exactly what had
happened.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG23A6`, transition: 20 });
showTextbox();
text(() => {
   Kid(EOP213)`"But..."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP214)`"Huh? What?"`;
   Kid(EOP215)`"Aren't you working right now, You?"`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP216)`"You'd make a scary boss."`;
   `No matter how many times he checked, she was
definitely still wearing a LeMU uniform.`;
   You(EOP217)`"I didn't have anything to do anyway. It's
perfect timing. Yeah."`;
   `They got in an egg-like elevator together.`;

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
   `The egg slowly began to move.`;
   `It felt like they were slowly floating up.`;

});
showTextbox();
text(() => {
   You(EOP218)`"Going up..."`;
   `She whispered mischievously.`;
   Kid`"............"`;
   `The elevator was terribly crowded.`;
   `And everyone was packed in like sardines.`;
   You(EOP219)`"Whoa...it's a little hot, huh?"`;
   Kid(EOP220)`"I'll say..."`;
   `Her face was so close he almost bumped into it.`;
   `Their bodies were flush against each other.
She was soft and warm.`;
   `He was surprised.`;
   `All of the sudden he felt embarrassed and
started to squirm.`;

});
showTextbox();
text(() => {
   You(EOP221)`"Hey, kid."`;
   You(EOP222)`"Hey don't go touching places you shouldn't..."`;
   `She whispered into his ear, puffing out her
cheeks.`;
   `Crammed in the elevator, he couldn't even move
an inch.`;

});
showTextbox();
text(() => {
   You(EOP223)`"That tickles...don't move so much."`;
   Kid(EOP224)`"I don't have a lot of choice."`;
   Kid(EOP225)`"I can't...breathe."`;
   `He couldn't move, but he couldn't bear standing
still either.`;
   `As he gasped for breath, he noticed her light
perfume.`;

});
showTextbox();
text(() => {
   `Finally the egg arrived at the top floor and his
suffering was over.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 90 });
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
bgload({ name: `BG23A5`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   Kid(EOP226)`"Whew!"`;
   `He let out a cry, and bolted from the elevator.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP227)`"What...what's with you all of a sudden?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(EOP228)`"Hey! Wait! Kid! Kid!"`;
   `He sprinted away leaving You far behind.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG26A5R`, transition: 20 });
showTextbox();
text(() => {
   `It wasn't that he was trying to escape from her.`;
   `He'd seen something.`;
   `At the edge of his vision, he thought he'd seen
someone.`;
   `Up ahead...that someone was still visible.`;
   `He chased after whoever it was, like a man
possessed.`;
   `(I've seen that face before...)`;
   `(I'm sure I've seen that face before.)`;
   `That was what his instincts were telling him.`;
   `But where had he seen them?`;
   `He tried to sort through his foggy memory.`;
   `As he sifted, he kept running forward.`;
   Kid(EOP229)`"Wait...!"`;
   `He felt a desperate need to meet the person.`;
   `But, he had to hurry.`;

});
bgload({ name: `BG22A8`, transition: 20 });
showTextbox();
text(() => {
   Kid(EOP230)`"Huff...puff..."`;
   `Eventually, he ran out of breath.`;
   `Holding his pounding chest, he looked up.`;
   Kid(EOP231)`"Ah!"`;

});
fgload({ id: 1, name: `SA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `(There she was!)`;
   `Mixed amongst the other people was a girl,
standing.`;
   `He was sure that the person that he had been
searching for was this girl.`;
   `It was in the middle of the holidays, but for
some reason she was wearing her school
uniform...`;
   `He wondered why she was alone here.`;
   `"Oh, yeah...I've got to talk to her..."`;
   `She was by herself.`;
   `She was all alone. Just like him.`;
   `(What should I say...?)`;
   `(Where should I start...let's see...)`;
   `He needed to calm down and focus.`;
   `(Huh...?)`;
   `(Why is it I have to talk to her...?)`;
   `(Why in the world?)`;
   `Who was she?`;
   `Who was...she...?`;
   `She's...`;
   `I mean she's...`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   Kid(EOP232)`"Aaagh!"${noWait}`;

});
bgload_keepFg({ name: `SIRO_BG`, transition: 27 });
showTextbox();
text(() => {
   Append``;

});
showTextbox();
text(() => {
   `He was caught up in a wave of people.`;
   Kid`"..."`;
   `He got pushed into an elevator. It started to
rise toward the surface.`;

});
hideTextbox();
playSFX({ name: `SE03_12`, a1: 1, volume: 100 });
waitForSFX();
bgload({ name: `BG22A7`, transition: 28 });
showTextbox();
text(() => {
   `51 feet below sea level, the elevator stopped at
basement floor one.`;
   `He got off the elevator as if he were being
spit out.`;
   `This floor was called Erste boden...`;
   `He glanced around at his surroundings.`;
   `She wasn't anywhere to be seen.`;
   `He thought that they had both ridden on the
elevator together...`;
   `But he had apparently lost sight of her in the
crowd when he got off.`;
   `I lost her...`;
   `He hadn't even been able to say a word.`;
   `He felt really depressed.`;
   `(Maybe...)`;
   `(Did she call out to me?)`;
   `That idea suddenly popped into his head.`;

});
bgload({ name: `BG01A3`, transition: 20 });
showTextbox();
text(() => {
   Kid(EOP233)`"What is this...this feeling..."`;
   `His heart was still beating furiously.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP234)`"Is something the matter?"`;
   `A uniformed staff member, different than You,
was talking to him.`;
   //Park staff
   Park_staff(EOP235)`"Are you looking for someone?"`;
   `She gave him a warm smile as she said this.`;
   Kid(EOP236)`"Eh! Uh, uh...yes, I am."`;
   `Feeling that he seemed a little desperate, he
quickly blurted out an answer.`;
   Kid(EOP237)`"I'm trying to find someone!"`;
   Kid(EOP238)`"I was supposed to meet up with them, but we
must have missed each other."`;
   //Park staff
   Park_staff(EOP239)`"Who is it? What is their name?"`;
   Kid(EOP240)`"Uh, their name..."`;
   //??
   Unk(EOP241)`"Hey! You there! Wait!"`;

});
hideTextbox();
playSFX({ name: `SE01_05`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Patter, patter, patter.`;
   `Suddenly, the sounds of footsteps came rushing
at him.`;
   Kid(EOP242)`"Huh? You mean me?"`;

});
hideTextbox();
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   Man(EOP243)`"Yes. That's right..."`;
   `Running feet braked sharply beside him.`;
   `The guy was out of breath.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Man(EOP244)`"Actually, I want to ask you something."`;
   Kid(EOP245)`"Huh?"`;
   `Surprised, he slowly opened his mouth.`;

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
   Takeshi(EOP246)`"Hey, you don't know, do you?"`;
   `There was nothing to do but see where the
conversation went.`;

});
showTextbox();
text(() => {
   Takeshi(EOP247)`"Sorry to ask you like this out of the blue, but
you don't know, do you?"`;
   Takeshi(EOP248)`"You haven't seen my friends around here, have
you?"`;
   Takeshi(EOP249)`"One of them is about 5'1 and around 140 pounds.
Kind of good-looking, with dorky sunglasses and
probably not the type girls would go for."`;
   Takeshi(EOP250)`"Another was wearing a suit, no tie, short hair
and has three pierces in his ear and one in his
nose.... He likes to knit..."`;
   Takeshi(EOP251)`"And then there was the only girl in the group,
who had on a kind of simple color flower print
one-piece with frilly lace..."`;
   Takeshi(EOP252)`"You know, three people you might see
anywhere..."`;
   Takeshi(EOP253)`"Did you see them?"`;

});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(EOP254)`"Nope."`;
   `The young kid shook his head.`;
   Takeshi(EOP255)`"I see. Well, sorry about stopping you like
that."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Waving slightly, he left.`;

});
fgload({ id: 2, name: `KA01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   `The youth continued down the corridor ahead.`;

});
fgload({ id: 1, name: `CO15ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   `A girl came over to him and started talking to
him enthusiastically.`;
   `He thought he had seen her before.`;
   `(Huh...I wonder if she knows that kid.)`;

});
fgload({ id: 2, name: `KA13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   `But a troubled expression appeared on his face.`;

});
fgload({ id: 1, name: `CO16ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Coco(EOP256)`"Hey, hey! Do you want to hear a joke?"`;
   Kid(EOP257)`"Huh? What? Who are you?"`;
   `(So that's it...)`;
   `She was probably one of those kind of people
that would talk to anyone about anything
anywhere, whether you were interested or not.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG22A7`, transition: 20 });
showTextbox();
text(() => {
   `He thought he would go down below.`;
   `The elevator arrived soundlessly and swallowed
the waiting patrons.`;
   `He went with them further into the depths of
LeMU.`;

});
removeBG({ mode: WHITE, transition: 2 });
playSFX({ name: `SE03_12`, a1: 0, volume: 100 });
bgload({ name: `BG25A5`, transition: 20 });
clock(`12:15`);
showTextbox();
text(() => {
   `He walked around aimlessly.`;

});
bgload({ name: `BG02A3`, transition: 20 });
showTextbox();
text(() => {
   `The attractions were all packed with visitors.`;
   `Everyone had beaming smiles and yelled happily
all evidence of LeMU's popularity.`;
   `But still...wandering around a packed and lively
amusement park all alone was a bit torturous.`;
   `He couldn't help trudging around with heavy feet
and slumped shoulders.`;
   `He was on the verge of looking depressed, but
held his expression in check.`;

});
bgload({ name: `BG03A3`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(EOP258)`"What am I gonna do?"`;
   `Walking around in this place blindly he thought
he might never run into his friends.`;
   `The floor was a lot wider than he'd imagined.`;
   Takeshi(EOP259)`"Oh, right, my cell phone..."`;
   `He took his PDA multi-purpose communication
device out from his pocket.`;
   `He pushed a button.`;
   `He didn't have any messages. No mail either. But
the problem seemed to be...`;
   `It was out of range.`;
   `At least that was what the display said.`;
   Takeshi(EOP260)`"Are you serious!?"`;
   Takeshi(EOP261)`"I didn't think you could get out of range in
this day and age..."`;
   `Then he recalled they'd said something about
this being a giant tunnel in the middle of the
ocean, where only select radio waves could
reach.`;
   `And that LeMU used special electronic equipment,
which wasn't very compatible with mobile
equipment.`;
   `More than anything, they didn't allow PDA's to
work inside, so the facility would be completely
separated from the world above, as part of the
attraction.`;
   `...At least that's what they'd told him at the
entrance, but he hadn't listened to a word of
it.`;

});
bgload({ name: `BG25A5`, transition: 20 });
showTextbox();
text(() => {
   `(Maybe I should get them to broadcast a message
over the intercom...?)`;
   `He thought it might be best just to ask a staff
member.`;
   `He decided to look for one.`;
   `But there wasn't a uniformed person in sight.`;
   `There weren't many people walking around the
corridors either.`;

});
bgload({ name: `BG26A5L`, transition: 20 });
showTextbox();
text(() => {
   `He turned a corner and entered a completely
different corridor.`;

});
fgload({ id: 1, name: `MY19ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `There, right in front of him, was the giant
tanuki...`;
   `It was the one he'd seen at the gate 
coming in...`;
   `The tanuki was operating a panel on the wall...`;
   `(I'll bet that's a LeMU employee.)`;
   `Thinking it perfect timing, he saddled up to the
tanuki and called out.`;
   Takeshi(EOP262)`"Excuse me, I'm looking for someone. A friend."`;
   `${voice(EOP263)}"Could I get you to make an announcement over
the intercom or something. The name
is...uh..."`;

});
fgload({ id: 1, name: `MY01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The tanuki slowly turned around and looked at
him.`;
   Tanuki`"............"`;
   `But it didn't say anything.`;
   Takeshi(EOP264)`"Uh? Hello? Hello?"`;

});
fgload({ id: 1, name: `MY19ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The tanuki turned away, avoiding him.`;
   `He was being ignored.`;
   `(I wonder if it didn't hear me.)`;
   `The tanuki was wearing a big stuffed suit, and
was a full head taller than him.`;
   `There was the definite possibility that his
words weren't even reaching the ears inside.`;

});
fgload({ id: 1, name: `MY19ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(EOP265)`"HELLOOOooo. Can you hear me in there?"`;
   `He asked the question nicely as he poked the
tanuki in the ribs.`;
   Takeshi(EOP266)`"Hey, you've gotta lot of extra flesh here,
buddy."`;
   `He continued talking as he pinched, pulled and
released the tanuki's flank.`;

});
fgload({ id: 1, name: `MY01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `He thought that for a mascot suit, the tanuki
shot him a pretty realistic glare before it
turned to walk away.`;
   `Upset at that, he grabbed the tanuki's
shoulder.`;
   Takeshi(EOP267)`"Hey! What kind of an attitude is that? And when
a visitor's in trouble!"`;

});
hideTextbox();
fgload({ id: 1, name: `MY04ADL`, x: 320, useAnim: false });
playSFX({ name: `SE05_02`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Whump!`;

});
fgload({ id: 1, name: `MY01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(EOP268)`"Umpph!"`;
   Takeshi(EOP269)`"~~~~~~!?"`;

});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `MY01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `He'd been gut-punched.`;
   `The tanuki had actually slugged him.`;
   `Not even his parents had ever even really
spanked him before.`;
   `It had been a totally cheap shot - the tanuki
had landed a solid uppercut.`;
   Takeshi(EOP270)`"H-hey——! Tanuki—! Yeah, I mean you!"`;
   Tanuki`"........."`;
   `He went down to his knees and keeled over.`;
   `Nearby visitors reacted.`;
   //Park staff
   Park_staff(EOP271)`"Is everything alright?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `MY01ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Just then a park employee appeared from the
door.`;
   //Park staff
   Park_staff(EOP272)`"Are you having stomach pains?"`;

});
choice(
   `It was the tanuki...`,
   `No, forget it.`,
);
switch (l_choice) {
   case 0: goto(lbl_00000f54);
   case 1: goto(lbl_00001099);
}
let lbl_00000f54;
l_blamed_the_tanuki = 1;
showTextbox();
text(() => {
   Takeshi(EOP273)`"...That tanuki caught me with a body blow..."`;

});
fgload({ id: 2, name: `YU07BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP274)`"Huh?"`;
   `The employee gave him a surprised look.`;
   Takeshi(EOP275)`"I got sucker punched by that tanuki!"`;
   `He pointed at the big tanuki.`;
   Tanuki`"........."`;
   `The tanuki's expression didn't change.`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
fgload({ id: 1, name: `MY19ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `But it turned and started to run.`;

});
fgload({ id: 1, name: `MY19ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `The tanuki's silhouette pranced lightly away
into the distance.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And in an instant it had disappeared down the
walkway.`;
   Takeshi`"........."`;

});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff`"........."`;

});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP276)`"Uh, that is, um, a..."`;
   `The staffer looked after the tanuki as she
spoke.`;
   //Park staff
   Park_staff(EOP277)`"That's not a tanuki, that's a lemur."`;
   Takeshi(EOP278)`"Le...lemu...what?"`;
   `He rubbed his still-aching stomach as he spoke.`;

});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP279)`"Yes. A lemur. You know, a fox-like monkey."`;
   //Park staff
   Park_staff(EOP280)`"It's name is Myumyun."`;

});
bgload({ name: `IMG06A`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `LeMU had been named after the continent of
Lemuria.${wait(30)}`;
   `A legendary land.${wait(30)}`;
   `According to the British zoologist, Sclater,
the Lemurian Continent preceded the existence
of islands scattered throughout the Indian
Ocean.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Lemurs were scattered throughout Africa, the
island of Madagascar, Asia and Indonesia.${wait(30)}`;
   `While investigating the distribution of these
fox-monkeys, Sclater came to believe a
continent had existed in the Indian Ocean,
adopting the British geologist Brandford's
hypothesis.${wait(30)}`;
   Append`He named this continent Lemuria.${wait(30)}`;
   `Moreover, the German zoologist, Haeckel,
contended that this continent was the origin of
mankind.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
bgload({ name: `BG26A5L`, transition: 20 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP281)`"Myumyun is one of LeMU's mascots."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP282)`"But what happened? Are you ill? Or..."`;
   Takeshi(EOP283)`"No. I'm fine now. Don't worry about me..."`;
   Takeshi(EOP284)`"It's over anyway."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP285)`"Oh, I see...?"`;

});
goto(lbl_00001133);
let lbl_00001099;
showTextbox();
text(() => {
   Takeshi(EOP286)`"It's nothing. I just took a tumble."`;

});
fgload({ id: 2, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP287)`"Is that so?"`;
   `He couldn't bring himself to say that the tanuki
had floored him with one punch...`;
   Tanuki`"........."`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
fgload({ id: 1, name: `MY19ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The big tanuki turned its back and ran.`;

});
fgload({ id: 1, name: `MY19ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The tanuki's silhouette pranced lightly away
into the distance.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `A moment later, it had disappeared up the
hallway ahead.`;

});
fgload({ id: 2, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP288)`"Oh. I wonder what happened to that Myumyun."`;
   `The staffer looked after the tanuki as she
spoke.`;
   //Park staff
   Park_staff(EOP289)`"You're probably thinking I should be getting
back to my post, right?...Oh well."`;

});
fgload({ id: 2, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She looked at him again and smiled, laughing.`;
   //Park staff
   Park_staff(EOP290)`"If you need anything don't hesitate to call."`;

});
goto(lbl_00001133);
let lbl_00001133;
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `The staffer disappeared.`;
   `(I see...)`;
   `(That wasn't a tanuki, that was 'Myumyun.')`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   `He wasn't sure why Myumyun had hauled off and
punched him.`;
   `But he knew that wondering about it wouldn't
help.`;
   `So he decided to forget about it.`;
   `He needed to be getting somewhere.`;
   Takeshi(EOP291)`"I'll look around on my own a little more..."`;
   `He muttered this as he composed himself.`;
   `He knew there should be several attractions at
the other end of this corridor.`;
   `His friends might have been looking for him as
they waited in line.`;
   Takeshi(EOP292)`"So which way should I go?"`;
   `His legs were so tired that he could barely
move.`;
   `(This is...)`;
   `(The world's worst theme park...)`;
   `And that was exactly how he felt.`;

});
removeBG({ mode: BLACK, transition: 1 });
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
   Kid(EOP293)`"Oh well..."`;
   `Hit by a slight dizzy spell, he leaned against
the wall.`;
   Kid(EOP294)`"What in the world...?"`;
   `He sighed.`;
   `He was fully and utterly beat.`;
   `The staffer that had just been talking to him
had vanished somewhere.`;
   `You wasn't around either.`;
   `He had lost sight of the other girl as well.`;
   `He was alone again.`;
   Kid(EOP295)`"What did I come here for? I..."`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `He thought that maybe he should have waited
where he was before, after all.`;
   `Having lost his destination, he rode the
elevator from the aquarium and returned to
basement floor two. `;

});
playSFX({ name: `SE03_12`, a1: 0, volume: 100 });
bgload({ name: `BG25A5`, transition: 20 });
showTextbox();
text(() => {
   `Basement floor two—Zweite stock.`;
   `(The second floor...?)`;
   `(I screwed up...)`;
   `(The rest area is down one more level.)`;
   `He felt like he had come a long way from the
elevator room.`;
   `He didn't know which path he should take to go
down.`;
   `Which way...`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   //??
   Unk(EOP296)`"Could you come here for a moment?"`;
   `A voice called to him from somewhere.`;
   `From somewhere...`;
   Kid(EOP297)`"!?"`;
   `From the shadows of the path, the owner of the
voice was beckoning to him.`;
   `But the hand did not belong to a human.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   //??
   Unk(EOP298)`"Look, hurry up will you?"`;
   `It was the whispering voice of a young woman.`;
   `Her bulky, black arm was swaying rhythmically.`;
   `Disturbed by the difference between the voice
and its owner's appearance, he moved hypnotized
in its direction.`;
   `The hand and arm clearly belonged to a tanuki.`;
   `It was a big tanuki.`;

});
bgload({ name: `BG12A2`, transition: 20 });
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
bgload({ name: `BG12A1`, transition: 20 });
fgload({ id: 1, name: `MY01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tanuki(EOP299)`"Do you know where we are?"`;
   `He was led by the tanuki into a room at the end
of the walkway.`;
   `Or rather...packed into it.`;
   Kid(EOP300)`"This is..."`;
   `(Is this the girl's changing room...?)`;
   `He saw a uniform, like the one You had been
wearing, packed away inside an open locker.`;
   `(Hey...I can even see some women's underwear...)`;
   `The room smelled like perfume.`;
   `The air was saturated with a scent so strong it
almost made him choke.`;
   `The smell was about to overwhelm him.`;
   `He struggled to get his mind under control and
maintain his focus.`;

});
fgload({ id: 1, name: `MY01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tanuki(EOP301)`"Hey, do you know where we are?"`;
   `The tanuki asked the same question again.`;
   `Come to think of it...why was she a tanuki
anyway?`;
   `He had no clue.`;
   Kid(EOP302)`"This..."`;
   Tanuki(EOP303)`"...is the changing room."`;
   `She said this before he could answer.`;
   Tanuki(EOP304)`"Changing room's are..."`;
   Tanuki(EOP305)`"A place to keep secrets away from prying
eyes..."`;
   `She said this quietly.`;
   Kid(EOP306)`"Secrets?"`;

});
fgload({ id: 1, name: `MY04ADL`, x: 320, useAnim: false });
removeFG({ id: 1, useAnim: false });
playSFX({ name: `SE10_05`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 3 });
showTextbox();
text(() => {
   `Wham!`;
   `Suddenly his vision faded.`;
   `Everything went completely dark.`;
   Kid(EOP307)`"Huh?"`;
   Tanuki(EOP308)`"Will you look after this for me?"`;
   Kid(EOP309)`"Huh? What? What?"`;
   `Look after?`;
   `He didn't understand.`;
   Tanuki(EOP310)`"Here, I'll help you put it on right."`;
   Kid(EOP311)`"Uh, um..."`;
   `Wear it?`;
   `He had no idea what she was talking about.`;
   Kid(EOP312)`"Uh, wuh, whoa..."`;
   `He didn't understand why, but he couldn't move.`;
   `He was powerless to resist her and let her do
what she wanted.`;
   `In a moment, something completely covered his
body.`;
   Kid`"........."`;
   Tanuki(EOP313)`"Hee, hee. This should do it..."`;
   Tanuki(EOP314)`"Alright then. I'll leave the rest to you."`;
   `And the light sound of her footsteps faded into
the distance.`;

});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The last thing he heard was the click of a door
shutting...`;
   Kid`"........."`;
   `He heard the sound.`;
   `But he did not see her leave.`;
   Kid(EOP315)`".........?"`;
   `(What did she do to me?)`;
   `His face felt heavy...`;
   `His body felt heavy...`;
   `He had tunnel vision...`;
   `And for some reason, his body was bristling with
hair...`;
   `(Could it be...)`;
   `(That this is...the mascot outfit...)`;
   `When he shook his head, it made a sound like
bristles brushing something.`;
   `And there was a smell.`;
   `There was some other scent from inside the
costume.`;
   `A sweet smell that made him dizzy.`;
   `It pierced deep into his brain...`;
   `Before he knew what was going on, he had opened
the door and was shuffling out into the pathway.`;

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
   Takeshi(EOP316)`"Ahh!"`;
   `Without thinking, he let out a cry.`;
   `He had found it.`;
   `(It's that tanuki...)`;

});
if (l_blamed_the_tanuki == 0) goto(lbl_00001331);
showTextbox();
text(() => {
   `He had just been told that it was not a tanuki,
but Myumyun or a fox-like monkey, but that
information had already disappeared from his
mind.`;

});
goto(lbl_0000133a);
let lbl_00001331;
showTextbox();
text(() => {
   `He had just heard that it was not a tanuki, but
Myumyun the fox-monkey, but that information had
already disappeared from his mind.`;

});
goto(lbl_0000133a);
let lbl_0000133a;
showTextbox();
text(() => {
   `(I forgot its name—)`;
   `(It doesn't matter though, he's the one that
hit me and ran away.)`;
   `He didn't want revenge... `;
   `But he did want to ask it why it had done what
it did.`;

});
fgload({ id: 1, name: `MY19ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Without making a sound, he slowly approached
the tanuki—mascot—Myumyun.`;

});
fgload({ id: 1, name: `MY19ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And as soon as he got behind it, he quickly
grabbed the costume by the head.`;

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
   `There!`;
   Kid(EOP317)`"Who...who're you?"`;
   Takeshi(EOP318)`"I should be asking you that!"`;
   Takeshi(EOP319)`"Why would you do something like that!?"`;
   Kid(EOP320)`"Huh? What'd I do?"`;
   Takeshi(EOP321)`"Don't play dumb with me."`;
   Kid(EOP322)`"I have no idea what you are talking about..."`;
   Takeshi(EOP323)`"You punched me!"`;
   Kid(EOP324)`"No I didn't. I have no idea what you mean..."`;
   Takeshi(EOP325)`"Liar! What? Did you forget?"`;
   Kid(EOP326)`"I'm not lying. This girl..."`;
   Kid(EOP327)`"Gave me this outfit out of nowhere and..."`;
   Takeshi(EOP328)`"What? You just met her? When did you change?"`;
   Kid(EOP329)`"I just put it on. I..."`;
   Takeshi(EOP330)`"Just put it on? What are you talking about?"`;
   Kid(EOP331)`"But why do this..."`;
   Kid(EOP332)`"This..."`;

});
hideTextbox();
bgload({ name: `BG06A2`, transition: 20 });
stopBGM();
playSFX({ name: `SE05_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `At that point, the tanuki collapsed.`;
   `He collapsed in full Myumyun regalia.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   Takeshi(EOP333)`"Wh...what? Hey!"`;
   `Takeshi shook his shoulders, but there was no
response.`;
   Takeshi(EOP334)`"Somebody come quick! Something's not right
here."`;
   `He yelled.`;
   `Visitors watched from a distance.`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP335)`"What's the matter?"`;
   `A female employee had heard the fuss and came
running.`;
   Takeshi(EOP336)`"Huh? You're that girl from before... this guy
just collapsed all of the sudden."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP337)`"Let me see!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The employee took the pulse of the fallen
youth.`;
   `Takeshi wondered if she had any medical
knowledge.`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP338)`"He's alright...but we can't leave him here
like this."`;
   Takeshi(EOP339)`"I'll help."`;
   //Park staff
   Park_staff(EOP340)`"Great, thanks."`;

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
   `Why had this happened?`;
   `He had no idea.`;
   `No idea...`;
   `Where he was.`;
   `Where had he gone.`;
   `Shaking.`;
   `Shaken.`;
   `Feeling ill.`;
   `He could feel hair from the costume rubbing
along both of his sides as two people carried
him.`;
   `Rubbing...`;
   `He wished they'd get the mascot suit off him
quickly.`;
   `The fur felt nasty.`;
   `It was hot.`;
   `So hot.`;
   `So hot he couldn't stand it.`;
   `The heat made him feel faint.`;
   `His consciousness felt like it would drift away.`;
   `Why had this happened?`;
   `It was strange.`;
   `So strange...`;
   `It wasn't him or her.`;
   `He heard a different voice from somewhere...`;

});
removeBG({ mode: BLACK, transition: 2 });
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
   `He had been hauled to the infirmary.`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP341)`"I wonder what it could be? Is he anemic?"`;
   Takeshi(EOP342)`"Maybe it was the mascot suit? Maybe he couldn't
get used to wearing it."`;
   //Park staff
   Park_staff(EOP343)`"It's possible. It could be heat exhaustion..."`;
   Takeshi(EOP344)`"Does...it looks like he'll be okay?"`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(EOP345)`"It doesn't appear to be anything serious. A
little rest and he should be fine."`;
   Takeshi(EOP346)`"I see."`;
   //Park staff
   Park_staff(EOP347)`"Thanks for your help. I'll take it from here."`;
   Takeshi(EOP348)`"Oh, alright then."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `He opened the sliding door and left the room.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(EOP349)`"Whew...saving people can sure be stressful."`;
   Takeshi(EOP350)`"What was it I came here to do?"`;
   `A cool breeze was blowing along the walkway.`;

});
removeBG({ mode: BLACK, transition: 1 });
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `Breeze...`;
   `But where was it coming from?`;
   `He...`;
   `He wondered where he had come from.`;

});
bgload({ name: `BG09A1`, transition: 10 });
showTextbox();
text(() => {
   `He saw something faintly.`;
   `A ceiling.`;
   `Sheets.`;
   `A bed...`;
   `He had been put to sleep on a bed.`;
   `On a bed in the infirmary...`;
   `He saw something again.`;
   `Below the sick room...bed...`;

});
hideTextbox();
bgload({ name: `EV_CO03D`, transition: 20 });
showTextbox();
text(() => {
   `Who was on the bed below?`;
   `(Who is this?)`;
   `(This...)`;
   `(This isn't me...)`;
   `(...Of course not...)`;

});
removeBG({ mode: BLACK, transition: 2 });
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
   `He decided to go further down the hall.`;
   `The third floor underground, they had called it
Dritte stock...`;
   `(The guys...they've gotta be lined up waiting
for a crowded ride somewhere.)`;

});
bgload({ name: `BG22A8`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(EOP351)`"Hey, sorry! I'm getting in!"`;
   `He dashed into the elevator.`;
   `The doors reopened silently and closed again.`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   `(Huh?)`;
   `One other person had gotten on.`;
   `A girl.`;
   `A girl...`;
   `(More like a young woman I guess.)`;
   `One girl had gotten on.`;
   `She was about high school age.`;
   `The elevator floated upward an instant before
descending.`;
   `There was the faint sound of movement and
vibration.`;

});
bgload({ name: `EV_TU01A`, transition: 20 });
showTextbox();
text(() => {
   `And then his eyes met with the girl's.`;
   `He wondered why...`;
   `The girl stared at him suspiciously.`;
   Girl(EOP352)`"...What?"`;
   Girl(EOP353)`"Just who are you...?"`;
   Girl(EOP354)`"Why are you here?"`;
   Girl(EOP355)`"Why are you following me...?"`;

});
choice(
   `Apologize`,
   `Just exactly who are YOU?`,
   `Stay silent`,
);
switch (l_choice) {
   case 0: goto(lbl_000016cf);
   case 1: goto(lbl_000016f6);
   case 2: goto(lbl_0000171d);
}
let lbl_000016cf;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi(EOP356)`"I'm sorry."`;
   `He didn't recall seeing her, but he nodded
slightly in apology.`;
   Takeshi(EOP357)`"Did I do something to offend you?"`;

});
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   Girl(EOP358)`"...Not really..."`;
   Takeshi(EOP359)`".........?"`;
   `He was getting more and more confused.`;
   Girl`"........."`;
   Girl(EOP360)`"...I mean..."`;
   Girl(EOP361)`"This elevator is...for employees only."`;
   Takeshi(EOP362)`"Oh, I see."`;

});
goto(lbl_00001739);
let lbl_000016f6;
l_tsugumi_point += 2;
showTextbox();
text(() => {
   Takeshi(EOP363)`"Just exactly who are YOU?"`;
   Takeshi(EOP364)`"Did I do something wrong?"`;
   Girl(EOP365)`"Yes, you did. Just now..."`;
   Takeshi(EOP366)`"Just now?"`;
   `He was getting more and more confused.`;

});
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   Girl`"........."`;
   Girl(EOP367)`"I mean..."`;
   Girl(EOP368)`"I don't want...you to get in the way. That's
all."`;
   Takeshi(EOP369)`"Get in the way of what?"`;

});
goto(lbl_00001739);
let lbl_0000171d;
showTextbox();
text(() => {
   Takeshi`"........."`;
   Girl`"........."`;

});
bgload({ name: `EV_TU01C`, transition: 20 });
showTextbox();
text(() => {
   `She avoided his eyes.`;
   Takeshi`"........."`;
   Girl`"........."`;
   `He felt like the air around him had suddenly
gotten much heavier.`;

});
goto(lbl_00001739);
let lbl_00001739;
hideTextbox();
stopBGM();
playSFX({ name: `SE10_07`, a1: 0, volume: 100 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 7;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
openShakeScreenAnim();
showTextbox();
text(() => {
   `—Boom!`;

});
hideTextbox();
closeShakeScreenAnim();
eff_41 = 11;
eff_42 = 9;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `Jolting suddenly, the elevator stopped.`;

});
bgload({ name: `EV_TU01B`, transition: 20 });
showTextbox();
text(() => {
   `He looked at the ceiling.`;
   `The lights flickered unsteadily.`;
   Takeshi(EOP370)`"Wh...what was that?"`;
   Girl(EOP371)`"It couldn't be..."`;
   Takeshi(EOP372)`"Couldn't be? Couldn't be what?"`;

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
   `Couldn't be?`;
   `He wondered if something had gone terribly
wrong.`;
   `It was strange.`;
   `Very strange....`;

});
hideTextbox();
bgload({ name: `EV_SA03B`, transition: 20 });
showTextbox();
text(() => {
   `(Who's this?)`;
   `(Oh, it's her.)`;
   `(We've finally met...)`;
   `(I've been looking for you this whole time...)`;
   `But his voice didn't reach her.`;
   `"————,—————"`;
   `"————"`;
   `"————————"`;
   `He couldn't hear her voice either.`;
   `No matter how much he tried....`;
   `No sounds reached him now.`;
   `(Damn...what's going on...?)`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `But he saw a figure, faintly.`;
   `He was able to make sure.`;
   `He could see himself and the girl talking over
there.`;
   `He saw it on the other side...`;
   `(I...)`;
   `(I can see myself over there...?)`;
   `He watched.`;
   `And he watched.`;

});
bgload({ name: `IMG04A`, transition: 20 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `(That's strange...)`;
   `(No...it's odd...)`;
   `(If I'm watching them, then who is the 'me'
watching me?)`;
   `Something felt out of place.`;
   `Now he knew the truth and his lips trembled.`;
   `(Who is that...?)`;
   `(Who could the 'me' over there be?)`;
   `He couldn't shake the feeling that something
was wrong.`;
   `It was like a dream.`;
   `It was like he was watching the continuation
of a dream.`;

});
removeBG({ mode: BLACK, transition: 1 });
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
eff_41 = 11;
eff_42 = 9;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `But a dream couldn't have felt so powerfully
raw.`;
   `All of the screaming.`;
   `And the sound of running feet.`;
   `The shrill wailing of sirens.`;
   `That wasn't a dream or an illusion.`;

});
bgload({ name: `EV_TU01A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(EOP373)`"Couldn't be? Do you know something about
this?"`;
   Girl(EOP374)`"I don't know anything..."`;
   Girl(EOP375)`"Do you know something?"`;
   Takeshi(EOP376)`"How could I know anything?"`;
   `The lights gradually dimmed and finally went
out.`;

});
hideTextbox();
closeDimInAndOutAndFilterAnim();
removeBG({ mode: BLACK, transition: 1 });
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   `Why?`;
   `He had no idea.`;
   `He didn't know...`;
   `There was no way he could know.`;

});
bgload({ name: `BG09A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `But there on the bed.`;
   `There...`;
   `On the bed...`;
   `There...`;

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
   `The bed below, the bed on top, the bed below...`;
   `Who are...`;
   `(You...?)`;
   `Who...?`;
   `(Stop...)`;
   `Please stop.`;
   `(Don't come out...)`;
   `Please don't come out.`;
   `(Stay inside...)`;
   `Don't crawl out of there.`;
   `(Stop...Plea...)`;
   `S-st...sto...stop...`;

});
hideTextbox();
monoColorOverlay({ interval: 2, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
dimOff_ac = 1;
closeDimInAndOutAndFilterAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG22A5`, transition: 10 });
showTextbox();
text(() => {
   `No...`;
   `There was nothing to fear.`;
   `It was alright.`;
   `Because there was no longer anyone.`;
   `Because there was no one there.`;

});
removeBG({ mode: BLACK, transition: 2 });
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Takeshi(EOP377)`"Hey! Who's there? Is there somebody there?"`;
   Takeshi(EOP378)`"I'm here! I'm still in here!"`;
   Takeshi(EOP379)`"Somebody, get me out of here!"`;
   Takeshi(EOP380)`"Answer me...please..."`;

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
   Kid(EOP381)`"Isn't there anyone there?"`;
   `Nobody answered.`;
   `The surroundings were filled with silence.`;
   Kid(EOP382)`"What? Is anybody there?"`;
   Kid(EOP383)`"So I'm alone...hee, hee, hee."`;
   `He burst with laughter.`;
   `The ultimate feeling of liberation.`;
   `There was no one to restrain him now.`;
   Kid(EOP384)`"Ah, ha, ha, ha!"`;

});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
l_ce = 0;
tweenZoom({ x: 300, y: 250, hx: 200, hy: 150, duration: 60 });
monoColorOverlay({ interval: 12, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
dimOff_ac = 1;
closeDimOverlay();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `And he ran.`;
   `But no one stopped him.`;
   `Getting there was easy.`;
   `All that was left was to aim for the 'center.'`;
   `Just take a step.`;
   `It was simple.`;

});
playSFX({ name: `SE02_06`, a1: 0, volume: 95 });
bgload({ name: `IMG06A`, transition: 0 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `He threw his body into the water.`;
   `He sank.`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `Deeper, deeper and deeper...`;

});
removeBG({ mode: BLACK, transition: 0 });
dimOff_ac = 1;
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
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Sound died away.`;
   `The embrace of unbelievably pure silence.`;
   `Not even a beam of light pierced the darkness.`;
   `All he could hear was repetitive, heavy
breathing.`;

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
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `He lost himself mind short-circuiting.`;
   `His vision narrowed and was overrun with blue.`;
   `Deep blue.`;
   `Blue...`;
   `Something was strange...`;
   `He wondered if it really was blue.`;

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
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Even though he was perfectly still, it seemed
as if his heart was racing.`;
   `Sweat poured off of him.`;
   `His breathing was ragged, and labored.`;

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
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Gradually, his consciousness dissolved into the
darkness.`;
   `Black.`;
   `Endless black.`;
   `There was no mistaking it this time...`;
   `Everything was stained black.`;
   `There were no boundaries to this color.`;

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
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `His ears hurt. The ringing in them wouldn't
stop.`;
   `He felt pressure expanding in his lungs.`;
   `He felt queasy, sick to his stomach.`;
   Girl(EOP385)`"The air pressure...is dropping..."`;
   `(I forgot...I need to pop my ears...)`;
   `With a pop, the air building inside his ears
was released.`;
   Takeshi(EOP386)`"Damn..."`;
   Takeshi(EOP387)`"Which way is the exit...?"`;

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
removeBG({ mode: BLACK, transition: 0 });
stopBGM();
delay({ interval: 120 });
showTextbox();
text(() => {
   `—Pitch black.`;
   `Nothing moved.`;
   `He didn't move either.`;
   `There wasn't any sign of a breeze.`;
   `He didn't hear anything.`;
   `Just echoes from something, invisible.`;
   `Time froze to a stop.`;
   `If he stopped here, he felt like he would forget
that he was even alive.`;
   `It was his intuition.`;
   `Only a little more...`;
   `No!`;
   `It was no good.`;
   `He had to get out.`;
   `But he didn't even know which direction to go.`;
   `He had to get...himself out of this darkness...
had to...`;
   `But what could he do?`;
   `What could...`;
   `He didn't know.`;
   `He didn't know...`;
   `....`;

});
hideTextbox();
setKomoreType(1);
showKomoreAnim();
showTextbox();
text(() => {
   `Just then, he felt a faint, warm light.`;
   `Light...?`;
   `A blade of light slicing through the flat world
of darkness.`;
   `And he knew...`;
   `The direction was over there...`;
   `And that there might be a way out...`;
   `If he could get over there...`;

});
choice(
   `I've got to find my friends`,
   `Who am I`,
);
switch (l_choice) {
   case 0: goto(lbl_00001e41);
   case 1: goto(lbl_00001e7e);
}
let lbl_00001e41;
setDialogBoxColor(GREEN);
showTextbox();
text(() => {
   `I've got to find them.`;
   `I quietly`;
   `opened the door. `;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeKomoreAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
l_choice = 0;
jump(`T_1A`);
let lbl_00001e7e;
setDialogBoxColor(BLUE);
showTextbox();
text(() => {
   `I didn't know where I was, but I`;
   `quietly`;
   `opened my eyes.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeKomoreAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
l_choice = 0;
jump(`S_1A`);
