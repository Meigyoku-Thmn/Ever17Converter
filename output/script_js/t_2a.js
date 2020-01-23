l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
setDialogBoxColor(GREEN);
setSceneTitle({ index: 9 });
chapterCutin({ name: `00000000` });
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG28A3R`, transition: 20 });
clock(`5:29`);
playSFX({ name: `SE01_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Yaaaaaaaaawn."`;
   Takeshi`"I'm sleepy..."`;
   `The lack of sleep made the echo of the shoes 
scraping the ground seem louder than usual.`;
   `As I walked down the emergency corridor, I 
stretched.`;
   `You was next to me.`;
   `Coco and the Kid trailed a little way behind 
us.`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A000)`"And you slept so hard..."`;
   Takeshi`"Yeah, but what time do you think it is right 
now?"`;
   You(T2A001)`"5:30 a.m."`;
   Takeshi`"That's right. So that means that I only 
slept four and a half hours."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A002)`"Not ONLY. You slept that much!"`;
   You(T2A003)`"I don't know how you could sleep like that 
given our situation..."`;
   Takeshi`"It's because it is this kinda situation that 
we've gotta sleep."`;
   Takeshi`"Our minds have to be sharp. We have to be 
ready for anything, right?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A004)`"So your mind is sharp right now?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Well, I'm still a bit sleep deprived, so not 
all my pistons are firing..."`;
   Takeshi`"But I think I'm doing about as good as the 
next guy..."`;
   Takeshi`"Huh?"`;
   `The next thing I noticed, You was no longer 
next to me.`;
   `I stopped and looked back.`;

});
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   `I saw the kid and Coco disappearing down a 
side pathway to the right.`;
   `I hurried after the three of them.`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A005)`"And? How is sleeping beauty...?"`;
   `You spoke to me sarcastically once I'd caught 
up.`;
   Takeshi`"I just told you. I'm not running at full 
power."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A006)`"*sigh*..."`;
   `You let out an exasperated sigh and shrugged 
her shoulders.`;
   `She also arched an eyebrow as if annoyed.`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A007)`"Takeshi..."`;
   You(T2A008)`"You know, I think you'd better take a look 
in the mirror."`;
   Takeshi`"Huh? Mirror?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A009)`"You'd...really better wash your face."`;

});
playSFX({ name: `SE01_07`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We entered the emergency stairs from the 
emergency corridor.`;
   `We had just been rousted from sleep by Sora 
and the four of us shuffled to the Control 
Room on the third floor, Dritte stock.`;
   `We seemed to have passed through the 
decompression process without a hitch as no 
one had any complaints.`;
   `Even Coco who had seemed to be having such a 
rough time was...`;

});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A010)`"Sunny, sunny, Sunday"`;
   Coco(T2A011)`"Windy, windy, Wednesday"`;
   Coco(T2A012)`"Pretty, pretty Pipi today"`;
   Pipi(PIPI_02)`"Woof!"`;
   `Even the dog seemed in high spirits.`;
   `They looked even happier than the day before.`;

});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   `The water on the corridor floor splashed and 
sprayed as we walked.`;
   `You walking next to me had clammed up.`;
   `(I wonder what she is peeved about...?)`;
   `I slowed down my pace to walk with the kid.`;
   Takeshi`"Hey, you got any idea what You's all miffed 
about?"`;

});
fgload({ id: 1, name: `KA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2A013)`"Who knows?"`;
   `The kid answered grinning.`;
   Takeshi`"Hey, what're you laughing about? Do you know 
something that I don't?"`;

});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2A014)`"You sure you don't have any ideas what it 
could be?"`;
   Takeshi`"If I did, I wouldn't be asking you."`;
   Takeshi`"You told me to 'look in the mirror,' but..."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2A015)`"Huh?"`;
   Takeshi`"Huh?"`;
   Kid(T2A016)`"That's no fun..."`;

});
fgload({ id: 1, name: `KA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The Kid kept glancing at my face and trying 
not to smile.`;
   `(My face...?)`;
   `I wiped the palm of my hand on my face.`;
   `It looked like black ink was smeared there.`;
   Takeshi`"What's this?"`;
   `I tried to wipe it off with my shirt collar.`;
   `But it wouldn't come off.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2A017)`"Ha, ha..."`;
   Kid(T2A018)`"Oh, there's a toilet over there."`;
   Takeshi`"........."`;

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
   `The faucet was broken and the sink was 
overflowing with water.`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I hurriedly washed my hands and then my face.`;
   `The mirror in front of me was shattered into 
so many shards it was useless.`;
   `But most of the black had come off of my 
hands, so I thought my face was probably 
alright.`;
   Takeshi`"That girl..."`;
   `I said it disgustedly and hurried out of the 
bathroom.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I went up to You again.`;
   Takeshi`"Hey, you! What did you write on my face?"`;

});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A019)`"Huh?"`;
   Takeshi`"While I was asleep you scribbled all over my 
face, didn't you?"`;
   You(T2A020)`"Scribble?"`;
   `As she walked You gaped at my face.`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A021)`"What is this guy talking about...?"`;
   You(T2A022)`"You're probably still asleep."`;
   Takeshi`"Don't play dumb with me, You!"`;
   Takeshi`"You were just talking about a mirror."`;
   You(T2A023)`"Oh, was I? A mirror?"`;
   Takeshi`"You said it. I know you said it."`;
   You(T2A024)`"Are you sure your ears aren't playing tricks 
on you? I'm pretty sure you are still half 
asleep."`;
   Takeshi`"Then what's this?"`;
   `I showed her my shirt collar where I had 
wiped the ink.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A025)`"Hmmm, what...?"`;
   `You mumbled this so I stepped closer...`;
   You(T2A026)`"Well..."`;
   `Suddenly she grabbed my hand and stared at my 
palm intently.`;

});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A027)`"Oh! Your palm has an interesting future 
for you."`;
   Takeshi`"Palm reading? Is that what you're into now?"`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A028)`"Your palm tells me that your fate diverges 
into two distinctly different futures."`;
   You(T2A029)`"It's kind of an all or nothing outcome."`;
   You(T2A030)`"You will either acquire or lose everything..."`;
   Takeshi`"........."`;
   You(T2A031)`"One path will put you on the road to riches, 
a good job, an encounter with a beautiful 
woman and bless you with a strong home and 
offspring."`;
   You(T2A032)`"And you will be as healthy as possible..."`;
   You(T2A033)`"You will live to a ripe old age that will 
make those around you jealous."`;
   You(T2A034)`"HOWEVER! HOWEVER!"`;
   You(T2A035)`"If you take the other path...you will be in 
dire straits."`;
   Takeshi`"D-dire...?"`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A036)`"Yes...but I can tell you no more."`;
   You(T2A037)`"You should take a good look at the middle of 
your lifeline."`;
   You(T2A038)`"Because that is where the answer can be 
found."`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A039)`"Hee, heee, heee..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked down at the palm of my hand.`;
   `My eyes traced a line down my lifeline.`;
   `Wide-eyed, I scrutinized each wrinkle and line.`;
   `But I didn't see an answer anywhere.`;
   `There was still black ink in the creases of 
my hand.`;
   `Black ink...`;
   `Black ink...`;
   `Black ink!?`;
   `I remembered what I was angry about. Forget 
fortune telling!`;
   Takeshi`"Y-you! You're trying to trick me..."`;
   Takeshi`"...What? Hey -"`;
   `The next thing I knew, You was no longer 
beside me.`;
   `I stopped and looked back.`;

});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   `I saw the Kid and Coco vanish into a small 
side corridor.`;
   Takeshi`"Whoa! Geez! I don't believe these guys!"`;
   `I hurriedly chased after the three of them.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG15B1`, transition: 20 });
clock(`5:36`);
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi was in front of the Control Room.`;
   `She was leaning against the wall, 
her arms folded and facing down.`;

});
choice(
   `Talk to her`,
   `Wait and see what she says`,
);
switch (l_choice) {
   case 0: goto(lbl_000003f6);
   case 1: goto(lbl_00000457);
}
let lbl_000003f6;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   `I wondered where she could have run off to 
the day before...but decided not to ask.`;
   `I decided to shower her with the cheeriest 
greeting I could muster.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"GOOD MORNING!"`;
   Takeshi`"How are you feeling? If you aren't feeling 
good, you should probably get to the 
decompression chamber!"`;
   Tsugumi`"........."`;
   `Tsugumi didn't budge.`;
   `She stood there with her mouth half open only 
blinking her eyes a couple of times.`;
   Takeshi`"What's the matter? You tired? Low blood 
pressure?"`;
   Takeshi`"Well, I didn't exactly sleep like a baby 
either. That damn room was so small I ended 
up sitting on the floor all night..."`;
   `I yawned and rubbed my eyes with both hands 
as I spoke.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But then Tsugumi's eyes narrowed into slits 
and she leveled a steely glare at me.`;
   `It was the kind of look that could kill. `;
   Tsugumi(T2A040)`"You..."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A041)`"...are the absolute worst."`;

});
goto(lbl_000004d2);
let lbl_00000457;
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I peered at Tsugumi's face.`;
   `I was curious where she had gone off to the 
day before...`;
   `She could at least have given me a hint.`;
   Takeshi`"........."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   Tsugumi`"........."`;
   `Tsugumi didn't budge.`;
   `She stood there with her mouth half open only 
blinking her eyes a couple of times.`;
   Takeshi`"........."`;
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A042)`"What?"`;
   `Tsugumi finally spoke.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A043)`"You gotta problem?"`;
   `Then she scowled.`;
   Takeshi`"Huh? Oh...good...morning..."`;
   Takeshi`"Did you get a good sleep last night? I 
didn't. That damn room was so small I ended 
up sitting on the floor all night..."`;
   `I yawned and rubbed my eyes with both hands 
as I spoke.`;
   Takeshi`"So, what did you do after that yesterday?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But then Tsugumi's eyes narrowed into slits 
and she leveled a steely glare at me.`;
   `It was the kind of look that could kill.`;
   Tsugumi(T2A044)`"Your face is..."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A045)`"...the absolute worst."`;

});
let lbl_000004d2;
showTextbox();
text(() => {
   Takeshi`"Huh?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi shook her head as if she were fed up 
with me and vanished inside the Control Room.`;
   `(...A-absolute worst?)`;
   Takeshi`"Hey! Hold on a sec!"`;
   Sora(T2A046)`"Takeshi..."`;
   `Sora's voice came from behind me.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2A047)`"What are you doing there?"`;
   Sora(T2A048)`"Please hurry inside."`;
   Takeshi`"But..."`;
   Sora(T2A049)`"Just please...go inside."`;
   `The expression on her face appeared more 
stressed than the day before.`;
   `It seemed as if her face said...that something 
serious were unfolding...`;

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
   Sora(T2A050)`"I'm sorry that I had to have you gather 
so early. There was no other way."`;
   Sora(T2A051)`"Actually, everyone, there is something 
I need to tell you right away."`;
   `Sora paused for a second.`;
   `Sora looked over all five of us...You, Coco, 
the Kid, Tsugumi, and finally me.`;
   `The cooling fan whirred away in the silence.`;
   `Occasionally the sound of metal on metal 
would ring through the room.`;
   `The five of us waited on Sora's next words.`;
   Sora(T2A052)`"Last night, after the four of you, apart from 
Tsugumi, entered the pressurization chamber..."`;
   Sora(T2A053)`"I was in the Control Room here thinking 
about ways to escape or contact the outside."`;
   Sora(T2A054)`"And..."`;
   Sora(T2A055)`"While I was checking the internal status of 
LeMU I discovered something."`;
   You(T2A056)`"You found a way to escape?!"`;
   Sora(T2A057)`"No."`;
   Kid(T2A058)`"Then a way to contact the outside?"`;
   Sora(T2A059)`"No yet."`;
   Takeshi`"Then what did you figure out?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2A060)`"Actually..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2A061)`"I discovered the strength of pressure the 
bulkheads can withstand...I found their 
limits."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that, Sora turned her eyes to the side 
of the console.`;

});
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   `In the darkness, a three-dimensional image of 
LeMU sprung up.`;

});
bgload({ name: `IMG01B`, transition: 20 });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   Coco(T2A062)`"What's the...pressure bulkhead thingy...?"`;
   `Coco held Pipi tightly as she asked.`;
   Sora(T2A063)`"I mean LeMU's walls. The partitions between 
the outer seawater and the inner air."`;
   Kid(T2A064)`"What do you mean...when you say you found the 
limit?"`;
   Sora(T2A065)`"Like I said yesterday, LeMU is a structure 
basically constructed on a saturation diving 
specification design."`;
   Sora(T2A066)`"In other words, the internal air pressure 
equals or is greater than the external water 
pressure."`;
   Sora(T2A067)`"However, the complex's internal air pressure 
is currently at 1 atmosphere..."`;
   Sora(T2A068)`"Therefore..."`;
   You(T2A069)`"LeMU's outer shell is constantly being 
subjected to severe water pressure."`;
   Sora(T2A070)`"Correct."`;
   You(T2A071)`"But LeMU is not constructed to endure this 
situation for a long period of time."`;

});
showTextbox();
text(() => {
   You(T2A072)`"Inevitably it will, at some point, reach its 
limit..."`;
   Sora(T2A073)`"Well put, You."`;
   Takeshi`"So...when is this limit...?"`;
   Sora(T2A074)`"According to LeMMIH's calculations, 119 
hours from now..."`;
   Tsugumi(T2A075)`"119 hours..."`;
   Tsugumi(T2A076)`"Five days, huh?"`;
   Sora(T2A077)`"The estimated time of implosion is 
approximately May 7 at 4:30 a.m."`;
   Sora(T2A078)`"Of course, it is only a calculation and 
there is a margin of error."`;
   Tsugumi(T2A079)`"What is the margin of error?"`;
   Sora(T2A080)`"Plus or minus 12 hours."`;
   Takeshi`"Hmmm..."`;
   `Everyone went silent, lost in thought.`;
   `Sora's talk had made it clear that we were in 
a crisis.`;
   `But I still didn't know what to make of it.`;
   `I didn't know if five days was a long time, 
or a short one.`;
   `We didn't have a schedule...but if we could 
find a way out, I didn't figure we'd be 
sticking around five days.`;
   `Even if we didn't call anyone, a rescue team 
might be on its way anyway...`;

});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A081)`"Hey, hey! Ms. Sora?"`;
   Coco(T2A082)`"I'm not very smart so I'm not sure I 
understand.... What does all that mean?"`;

});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2A083)`"?"`;
   Coco(T2A084)`"Does that mean at 4:30 a.m. on May 7 LeMU 
will get squashed like a pancake?"`;
   Coco(T2A085)`"But that might happen at around 4:30 p.m., 
on the sixth or at 4:30 p.m. on the seventh."`;
   Coco(T2A086)`"Is that good so far?"`;
   Sora(T2A087)`"Yes..."`;
   Coco(T2A088)`"So doesn't that mean the opposite is also 
true?"`;
   Coco(T2A089)`"I mean, at the worst LeMU will last until 
4:30 p.m. on May 6."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A090)`"So we're fine until then. There's nothing to 
worry about. Hooray!"`;

});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A091)`"Right? Is that what it means?"`;
   Sora(T2A092)`"We can't be absolutely certain that we will 
be safe..."`;
   Sora(T2A093)`"But judging from the results of LeMMIH's 
calculations, that would appear to be the case."`;
   Coco(T2A094)`"Oh, goodie. Then no problem."`;
   Coco(T2A095)`"Ms. Sora, you looked all serious and so I 
got kind of scared."`;
   Pipi(PIPI_28)`"Bow-wow! Wooooooof!"`;
   Coco(T2A096)`"'Geez, don't scare me, babe.' I think that's 
what Pipi's trying to say."`;
   Pipi(PIPI_01)`"Woof!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `YU15BDS`, name2: `SO01ADS`, name3: `CO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T2A097)`"I see.... If you had said 'We only have one 
more day,' or something I might have burst 
out crying."`;
   You(T2A098)`"So we still have lots of time.... Someone 
will surely come to help us before that."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `The Kid, standing next to You, agreed.`;
   `He nodded rhythmically as if answering a 
question.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The tension in the air gave way and smiles 
returned to the faces around the room.`;

});
fgload({ id: 1, name: `TU11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Even Tsugumi, who didn't smile, looked 
relieved.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `It was 5:50 a.m.`;
   `I gave a large yawn.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
setSceneTitle({ index: 10 });
clock(`6:14`);
showTextbox();
text(() => {
   Takeshi`"Alright, all done!"`;
   Takeshi`"1, 2, 3, 4, 5, 6...that's all of them."`;
   `I was in the narrow space of the chicken 
sandwich stand where the cooking equipment was.`;
   `I was wrapping and placing the freshly made 
breakfast sandwiches on a tray.`;
   Takeshi`"Why is it that I have to make breakfast for 
everyone?"`;
   `Complaining, I took the tray in both hands and 
opened the small door of the stand.`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A099)`"That's the way it goes. We decided it 
democratically, you know."`;
   `You was waiting in front of the shop and 
snatched a sandwich from the tray.`;
   `She peeled back the wrapping and opened up her 
mouth.`;
   Takeshi`"Democracy...is overrated..."`;
   Takeshi`"It just means the majority rules."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A100)`"You got it."`;
   `You said it flatly as she munched on her 
sandwich.`;
   You(T2A101)`"It is a reflection of the majority of the 
people's will."`;
   `It was true that it had been an overwhelming 
vote.`;
   `I had only been appointed breakfast chief 
minutes before....`;
   `I hadn't even run for the office.`;
   Takeshi`"I know that you're the one in the shadows 
running this conspiracy."`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A102)`"Whoa, that's low! I wouldn't do that!"`;

});
fgload({ id: 1, name: `YU12BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A103)`"I'm pretty sure it's just because everyone 
sincerely thought that you would be the best 
cook."`;
   Takeshi`"...You're sure full of it."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A104)`"Tee, heeeee..."`;
   You(T2A105)`"Thanks for the sandwich!"`;
   Takeshi`"You already ate it? That's so fast..."`;
   You(T2A106)`"Yummy. I'll have another..."`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tsk!`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I slapped away You's outstretched hand.`;
   Takeshi`"I've only made one for each person."`;
   Takeshi`"If you want another one, you make it."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A107)`"Hey..."`;
   You(T2A108)`"Come on. Be a pal and make me one more.... 
Pretty pleeeeeeease!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `First I wanted to get away from You.`;
   `I took the remaining four sandwiches over to 
the rest area to hand them out.`;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Breakfast is ready! Come and get it!"`;
   `As I called out I set the tray on a bench.`;
   Coco(T2A109)`"Yeah! Yeah! Food, glorious food!"`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Coco came running and splashing toward me. 
Pipi the dog paddled along behind her.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopSFX()
multifgload2({ id1: 1, id2: 2, name1: `KA02ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T2A110)`"Oh this looks good!"`;
   `All of the sudden I noticed the Kid beside me.`;
   Takeshi`"Hey. Where are Tsugumi and Sora?"`;

});
fgload({ id: 1, name: `KA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid(T2A111)`"Sora went back to the Control Room."`;
   Kid(T2A112)`"She said there was still stuff she had to 
look into..."`;
   Takeshi`"Oh, that again..."`;

});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A113)`"Hmmm. I think Tsugumi took off somewhere..."`;
   Takeshi`"Same old, same old..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I turned my eyes to the three chicken 
sandwiches left on the tray.`;
   `(What to do...)`;

});
choice(
   `Look for Tsugumi`,
   `Go see Sora in the Control Room`,
);
switch (l_choice) {
   case 0: goto(lbl_000008bc);
   case 1: goto(lbl_00000bfc);
}
let lbl_000008bc;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   `First I decided to go look for Tsugumi.`;
   `I would go see Sora after that.`;
   `I took their sandwiches in hand and left the 
room.`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3R`, transition: 20 });
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Hey, Tsugumi!"`;
   `I called out as I walked corridors at random.`;
   `"Choooowww tiiiimmmme!" `;
   `I knew she wasn't the type to answer to that...`;

});
bgload({ name: `BG30B1`, transition: 20 });
fgload({ id: 1, name: `TU15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Finally...`;
   `At the end of a corridor I spied Tsugumi.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Oh, there she is."`;
   Takeshi`"What are you doing here?"`;
   `'HIMMEL' was written on the door.`;
   `Tsugumi wasn't really doing anything. She just 
stood in front of the door.`;
   Tsugumi(T2A114)`"Nothing..."`;
   Tsugumi(T2A115)`"It's none of your business..."`;
   Takeshi`"None of my business, huh...?"`;
   Takeshi`"Sure...whatever."`;
   Tsugumi(T2A116)`"What are YOU doing here?"`;
   Takeshi`"This."`;
   `I held out one of the chicken sandwiches to 
Tsugumi.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A117)`"What's this?"`;
   Takeshi`"Breakfast."`;
   Tsugumi(T2A118)`"Hmmmm..."`;
   Takeshi`"You're not gonna eat?"`;
   `Tsugumi tilted her head a little and stared 
at the sandwich.`;
   Takeshi`"If you don't want it, I'll give it to You."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A119)`"I didn't say I don't want it..."`;
   `Tsugumi indifferently took the sandwich from 
me.`;
   Takeshi`"Good. I went to a lot of pain to make that."`;
   Takeshi`"If you said you didn't want it, I don't know 
what I'd..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi began to walk away without listening 
as I was talking.`;
   Takeshi`"H-hey! Hold on a second!"`;

});
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   `I suddenly grabbed Tsugumi's shoulder.`;
   Takeshi`"You should at least say thanks."`;
   `Tsugumi didn't try to turn around.`;
   `She shook my hand off of her shoulder 
effortlessly.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A120)`"*sigh*..."`;
   `She let go an annoyed sigh.`;
   Tsugumi(T2A121)`"Don't...touch me..."`;
   `Tsugumi said it in a low voice without turning 
around.`;
   `My shrugged off hand floated in the air with 
nowhere to go.`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A122)`"Don't..."`;
   Tsugumi(T2A123)`"Touch me..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi repeated the same words again and 
silently started walking away.`;
   `Down the water covered floor of the corridor...`;
   `Rings rippled out slowly from where Tsugumi 
stepped as she walked away.`;

});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 90 });
eff_4f = 153;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `Just then, the lights in the corridor began to 
flicker uneasily.`;
   `I instinctively glanced up at the ceiling.`;
   `A dull growl-like sound shook the floor....`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"W-what...?"`;
   Takeshi`"What is happening....? It couldn't be..."`;
   `Tiny waves formed in the water pooled on the 
floor `;
   `The walls and ceiling trembled slightly. Metal 
screeched on metal.`;
   `I could see Tsugumi's back down the corridor.`;

});
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The lights clicked and flickered. Tsugumi 
turned and looked back at me.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As if she wanted to say something to me...`;

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
   `Darkness blanketed us.`;
   `The vibrations and sound died away. Only an 
eerie silence enveloped us.`;
   `Only the emergency lights showed weakly.`;

});
hideTextbox();
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"...Is this a blackout?"`;
   Takeshi`"Tsugumi!"`;
   `I kicked up water as I ran.`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I ran to where Tsugumi, shouting.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopSFX()
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Tsugumi! It's a blackout! A blackout!"`;
   Tsugumi(T2A124)`"I know..."`;
   Takeshi`"What should we do?"`;

});
fgload({ id: 1, name: `TU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A125)`"Why're you asking me...?"`;
   Takeshi`"Oh yeah...right..."`;
   Takeshi`"So, what should we do?"`;
   Tsugumi`"........."`;
   Takeshi`"I know! First we should go to where everyone 
is."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG07B2`, transition: 20 });
showTextbox();
text(() => {
   `We cut through a nearby door and came out in 
front of the kiosk.`;
   `You wasn't there.`;

});
bgload({ name: `BG21B2`, transition: 20 });
showTextbox();
text(() => {
   `I sprinted to the room next door. There was 
no sign of anyone there either.`;
   `I scanned the area.`;
   `My eyes weren't used to the darkness yet and I 
couldn't see into the corners of the room.`;
   Takeshi`"Hey! Coco! Kid! You!"`;
   `The echo of my voice was swallowed, vanishing 
into the darkness.`;
   Takeshi`"Where could they have gone?"`;
   `My eyes stopped on the bench.`;
   `On top of the tray I'd left there was one 
chicken sandwich remaining.`;
   `I still had one of the sandwiches in my 
hand....`;
   `The emergency didn't seem to faze Tsugumi who 
was stuffing her face with the sandwich I'd 
given her.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A126)`"Hey..."`;
   Takeshi`"?"`;
   Tsugumi(T2A127)`"This..."`;
   `Tsugumi handed me something.`;
   `It was the balled up sandwich wrapper.`;
   Tsugumi(T2A128)`"...needs to be thrown away."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that, Tsugumi left the room.`;
   `(Geez. I can't believe that girl...)`;
   `I took the crumpled up wrapper and put it 
back on the tray and soon followed after 
Tsugumi.`;

});
bgload({ name: `BG15B2`, transition: 20 });
showTextbox();
text(() => {
   `- In front of the Control Room.`;
   `In the far darkness I could just make out 
three familiar outlines.`;

});
showTextbox();
text(() => {
   You(T2A129)`"Hey, Takeshi!"`;
   Coco(T2A130)`"Tsugumi!"`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splashing through the water the three of them 
walked over.`;

});
hideTextbox();
multifgload3({ name1: `KA08ADS`, name2: `YU03ADS`, name3: `CO06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
stopSFX()
showTextbox();
text(() => {
   Kid(T2A131)`"Hey, have you seen Sora?"`;
   `I looked at Tsugumi.`;
   `She shook her head.`;
   Takeshi`"Wasn't she in the Control Room?"`;
   You(T2A132)`"It's empty now."`;
   Takeshi`"You sure? Let's check..."`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I pushed the panel next to the door, but the 
button remained lifeless.`;
   Takeshi`"Hey, how do you open this? Does the 
electricity have to be on?" `;
   You(T2A133)`"Oh, there is an emergency mechanism for 
opening the door near the bottom of it..."`;

});
goto(lbl_00000e48);
let lbl_00000bfc;
l_sora_point += 2;
l_decide_go_to_sora_in_2nd_day = 1;
showTextbox();
text(() => {
   `I decided to look in on Sora first.`;
   `I'd look for Tsugumi later.`;
   `I took their sandwiches in hand and left the 
room.`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3R`, transition: 20 });
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Which way was it?"`;
   `I'd gone as far as the corner before I 
realized that I didn't know the route.`;
   Takeshi`"Maybe it's this way..."`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Finally...`;

});
bgload({ name: `BG30B1`, transition: 20 });
showTextbox();
text(() => {
   `I found a room where the corridor played out.`;
   `'HIMMEL' was written on the door.`;
   Takeshi`"No, this isn't it."`;
   `I retraced my route.`;

});
bgload({ name: `BG26B3L`, transition: 20 });
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Alright, here it is..."`;
   Takeshi`"Hey, Sora! It's time for dinner!"`;

});
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I pushed the open button next to the door.`;
   `But the door didn't open.`;
   Takeshi`"Hey, Sora! Open up! I brought you food! Time 
to eat!"`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I shouted into the interphone as I pushed the 
button to talk.`;
   Sora(T2A134)`"Eat?"`;
   `She replied to me through the speaker.`;
   Sora(T2A135)`"Thanks for going to the trouble, but I don't 
need any food...?"`;
   Takeshi`"You don't? Don't say that."`;
   Takeshi`"Sora, have you been eating okay?"`;
   Takeshi`"You have to eat or you're not going to have 
any energy."`;
   Sora`"........."`;
   Sora(T2A136)`"I'm sorry, but I'm occupied at the moment."`;
   `I remembered that we had had the same 
exchange the day before.`;
   Takeshi`"Hurry it up. These sandwiches are gonna get 
cold."`;
   Takeshi`"Besides, I made them special, for you..."`;
   Takeshi`"Listen...I just wanna give these to you, so 
will you open the door?"`;
   Sora(T2A137)`"I really can't..."`;
   Takeshi`"C'mon. Please, just open the door, Sora."`;
   Takeshi`"...I'll throw in a coupon for a beer if you 
want."`;
   Sora(T2A138)`"I'm sorry..."`;
   `We kept arguing through the speaker.`;
   Takeshi`"........."`;
   Takeshi`"Alright then! I'm only going to wait out 
here for one more minute!"`;
   Sora(T2A139)`"One more minute? You're giving me a hard 
time..."`;
   Sora(T2A140)`"I have to go somewhere..."`;
   Takeshi`"Huh? Somewhere where?"`;
   Sora`"..."`;
   Takeshi`"Hey, Sora, where are you going? Hello? Hello?"`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I pushed the button again and again, shouting.`;
   `But Sora didn't answer.`;

});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 90 });
eff_4f = 153;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `Just then, the lights in the corridor began to 
flicker uneasily.`;
   `I instinctively glanced up at the ceiling.`;
   `I strained to hear as a dull growl-like sound 
shook the floor....`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"W-what...?"`;
   Takeshi`"What is happening....? It couldn't be..."`;
   `Tiny waves formed in the water pooled on the 
floor.`;
   `The walls and ceiling trembled slightly. Metal 
screeched on metal.`;
   `As if they were trying to say something to 
me...`;

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
   `Darkness blanketed me.`;
   `The vibrations and sound died away. Only an 
eerie silence enveloped us.`;
   `Only the other emergency lights glowed dimly.`;

});
hideTextbox();
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"...Is this a blackout?"`;
   `(I wonder what happened to Sora?)`;
   Takeshi`"Hey, Sora! Answer me!"`;

});
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bang, bang!`;
   `I pounded the door.`;
   `I thought she might not be able to hear me 
inside....`;

});
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bang, bang!`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Then I tapped the interphone button.`;
   `But there was no response.`;
   `(Oh...I wonder if the interphone needs 
electricity to work...)`;
   `I had no clue what was happening on the other 
side of the door.`;
   `(I figured the only thing I could do was get 
the door open...)`;
   `I heard footsteps approaching from the 
darkened corridor.`;
   Takeshi`"Who's there?"`;
   `In the far darkness I could just make out four 
familiar outlines.`;

});
showTextbox();
text(() => {
   You(T2A141)`"Oh, Takeshi!"`;
   Coco(T2A142)`"Takepyon!"`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splashing through the water the three of them 
walked over.`;

});
hideTextbox();
multifgload3({ name1: `TU13ADS`, name2: `YU03ADS`, name3: `CO06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
stopSFX()
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid(T2A143)`"Hey, have you seen Sora?"`;
   Takeshi`"No, but she was inside here until just a bit 
ago. But now she won't answer. And it seems 
like the door is locked..."`;
   You(T2A144)`"What happened?"`;
   Takeshi`"I dunno. Anyway, let's get inside. How do we 
get this open?"`;
   You(T2A145)`"Oh, there is an emergency mechanism for 
opening the door near the bottom of it..."`;

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
   `Pulling on the lever I pushed the door over 
to the side.`;
   `The door opened just wide enough for a person 
to squeeze through.`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   `I peeked inside the room.`;
   `It was pitch black. I couldn't see a thing.`;
   Kid(T2A146)`"Do you want a flashlight?"`;
   Takeshi`"Oh, thanks."`;

});
if (l_decide_go_to_sora_in_2nd_day == 0) goto(lbl_00000eb4);
showTextbox();
text(() => {
   `I gave the Kid the sandwich and took the 
flashlight.`;
   `I turned it on and stepped into the room.`;

});
goto(lbl_00000eb9);
let lbl_00000eb4;
showTextbox();
text(() => {
   `Taking the flashlight, I turned it on and 
stepped into the room.`;

});
let lbl_00000eb9;
bgload({ name: `BG16A2`, transition: 20 });
showTextbox();
text(() => {
   `A white circle of light appeared on the wall.`;
   `I swung the light left and right and shined 
it in the corners of the room.`;
   `The electricity was completely down.`;
   `Like an abandoned castle, there was no sign of 
warmth left.`;
   `There was clearly nobody there.`;

});
bgload({ name: `BG15B2`, transition: 20 });
multifgload3({ name1: `KA08ADS`, name2: `YU03ADS`, name3: `CO06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"Well...what should we do?"`;
   `I joined everyone and said this calmly.`;
   `It had been one crisis after another since 
the day before....`;
   `I guess we were already used to the situation 
because nobody had lost it.`;
   You(T2A147)`"I can't believe Sora would take off without 
saying anything first."`;
   `You tilted her head as she said this.`;

});
showTextbox();
text(() => {
   Takeshi`"Hmmm?"`;
   `Looking at her then I noticed something.`;
   Takeshi`"You, when did you change clothes?"`;

});
multifgload2({ id1: 2, id2: 4, name1: `YU01ADS`, name2: `CO11ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2A148)`"Huh? Oh, this...?"`;
   `You was wearing clothes I hadn't remembered 
seeing.`;

});
fgload({ id: 2, name: `YU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A149)`"I spilled sauce all over my uniform..."`;
   You(T2A150)`"I had one change of clothes in the changing 
room. These are my everyday clothes."`;
   Takeshi`"Hmmm. I see...so you had a change of clothes."`;
   Takeshi`"Spilling sauce on your uniform? That's pretty 
clumsy."`;
   You(T2A151)`"Ha, ha, ha..."`;
   `You scratched her head as if to offset her 
embarrassment.`;
   Takeshi`"Anyway, we should be thinking about Sora."`;
   Coco(T2A152)`"Yeah. For now..."`;

});
fgload({ id: 4, name: `CO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A153)`"Let's everybody split up and look for Sora."`;
   Coco(T2A154)`"Without Sora around we won't know why there 
was the blackout or anything..."`;
   Kid(T2A155)`"Yeah. Sora knows more about LeMU than anyone."`;
   Takeshi`"Hmmm.... Alright, let's do this."`;
   Takeshi`"You and the Kid, you guys check this floor. 
Tsugumi, Coco and I will hit the second 
floor..."`;
   Takeshi`"Okay?"`;

});
fgload({ id: 2, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2A156)`"Huh? Alright."`;
   Kid(T2A157)`"Roger that."`;
   Coco(T2A158)`"Uh...um...what about Pipi?"`;
   Takeshi`"Of course, he'll go with you."`;
   `I petted Pipi's head.`;
   Takeshi`"Alright, let's go search!"`;
   Pipi(PIPI_01)`"Woof!"`;

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
   Takeshi`"Sora! Sora!"`;
   `The three people and one mutt - myself, 
Tsugumi, Coco and Pipi - split up once we 
reached Zweite stock.`;

});
bgload({ name: `BG23A2`, transition: 20 });
showTextbox();
text(() => {
   `- The entrance to the neutral buoyancy elevator`;

});
bgload({ name: `BG09A2`, transition: 20 });
showTextbox();
text(() => {
   `- Inside the infirmary`;

});
bgload({ name: `BG12A2`, transition: 20 });
showTextbox();
text(() => {
   `- The changing room`;

});
bgload({ name: `BG11A2`, transition: 20 });
showTextbox();
text(() => {
   `- The Security Office`;

});
bgload({ name: `BG02A2`, transition: 20 });
showTextbox();
text(() => {
   `- The merry-go-round`;

});
bgload({ name: `BG03A2`, transition: 20 });
showTextbox();
text(() => {
   `We searched everything - even the Jellyfish 
Gondola...`;

});
bgload({ name: `BG08A2`, transition: 20 });
showTextbox();
text(() => {
   `Then we retraced our way back to in front of 
the infirmary.`;
   `And then...`;
   Coco(T2A159)`"Takepyon! Takepyon!"`;
   Pipi(PIPI_27)`"Woo woof! Woof!"`;

});
fgload({ id: 1, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Coco was shaking the flashlight and signaling 
to me.`;
   `I had handed it to her before we started 
searching.`;
   Takeshi`"How'd it go? Any luck?"`;
   `Coco used the flashlight to make a big X, 
signifying nothing found.`;

});
fgload({ id: 1, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A160)`"How about you?"`;
   Takeshi`"Nothing. She's not on this floor."`;
   Takeshi`"What about Tsugumi?"`;
   Coco(T2A161)`"Tsugumi just passed by in front of me."`;
   Takeshi`"Passed by?"`;

});
fgload({ id: 1, name: `CO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A162)`"She went that way...toward the entrance to 
EI the egg elevator."`;
   Takeshi`"The neutral buoyancy elevator, huh?"`;

});
fgload({ id: 1, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A163)`"Yeah."`;
   Coco(T2A164)`"She was carrying something big."`;
   `Something big?`;
   `It sounded like Tsugumi was up to something 
solo again....`;
   Takeshi`"I'll go check it out."`;
   `Coco and I moved to the room next door.`;

});
bgload({ name: `BG23A2`, transition: 20 });
showTextbox();
text(() => {
   `There were signs of someone there.`;
   `Ahead in the pitch darkness was something 
rustling around.`;
   Coco(T2A165)`"Tsugumi?"`;
   `Calling out, Coco shined the light on the 
shadow.`;

});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A166)`"...Hey, that's bright."`;
   `As expected, it was Tsugumi. She held out the 
palms of her hands as she stood up.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Coco hurried to turn off the flashlight and 
rushed over by Tsugumi.`;
   `I followed her over with Pipi.`;

});
hideTextbox();
stopSFX()
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A167)`"What are you doing here?"`;
   Tsugumi(T2A168)`"Huh? Hmph..."`;
   Coco(T2A169)`" I don't understand what you mean by 'Hmph'."`;
   Tsugumi`"..."`;
   Coco(T2A170)`"Hey, what were you doing?"`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A171)`"Looking into something."`;
   Coco(T2A172)`"What?"`;
   Tsugumi(T2A173)`"This elevator."`;
   Coco(T2A174)`"EI the egg elevator?"`;
   Tsugumi(T2A175)`"Yes..."`;
   Coco(T2A176)`"What do you need this big thing to 
investigate for?"`;
   `Coco pointed down by Tsugumi's feet.`;
   `There lay a massive plastic case.`;
   `I was sure I'd seen it...in the warehouse the 
day before.`;
   `It looked like a toolbox, but....`;

});
fgload({ id: 2, name: `TU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A177)`"I'm gonna need this later."`;
   Tsugumi(T2A178)`"Right now I'm just checking the status of the 
elevator."`;
   Tsugumi(T2A179)`"Whether it'll move or the doors open 
manually..."`;
   `Tsugumi was loads more talkative than usual.`;
   `Her attitude toward Coco was much nicer than 
the one she had toward me.`;
   `It seemed to me that Coco's unique 
personality kept even Tsugumi off balance.`;
   Coco(T2A180)`"Hmmm..."`;
   Coco(T2A181)`"So how about it? Does it look like the 
elevator will move?"`;

});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A182)`"Maybe."`;
   `Tsugumi glanced at me as she said this.`;
   Coco(T2A183)`"Hey, but what good would using the elevator 
do you?"`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A184)`"I thought we'd go down to the third floor..."`;
   Coco(T2A185)`"Third floor? Why don't we just use the 
emergency stairs like we always do?"`;
   Tsugumi(T2A186)`"Because those stairs won't get us where we 
need to go."`;

});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A187)`"Huh?"`;
   Tsugumi(T2A188)`"They won't get us to the Generator Room."`;
   Coco(T2A189)`"Generator Room?"`;
   `That reminded me of what You had said.`;
   `LeMU didn't receive any power from the 
outside, but had an in-house generating system.`;
   `She'd said that the facility pumped up hot 
water from a thermal seafloor vent using heat 
from it to operate the power generator....`;

});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A190)`"But why do you need to go there?"`;
   Tsugumi(T2A191)`"Because it's a pain with the lights off."`;
   Coco(T2A192)`"Huh?"`;
   Tsugumi(T2A193)`"To make repairs."`;
   Tsugumi(T2A194)`"I think the cause of the blackout is the 
generator."`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A195)`"Oh, I see!"`;
   Coco(T2A196)`"So that's why you need this big box?"`;
   Tsugumi(T2A197)`"Yes."`;

});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A198)`"Oh, I get it now.... That makes sense."`;
   `Tsugumi was finally freed from Coco's barrage 
of questions.`;
   Tsugumi(T2A199)`"Alright. I'm going down..."`;

});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A200)`"Takeshi...could you come along?"`;
   Takeshi`"Huh? Me?"`;
   `Without thinking, I shot a question back at 
her.`;

});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Her question was pretty sudden and caught me 
off balance.`;
   `Besides, I thought that it was the first time 
that she had called me by my name.`;
   Takeshi`"First there is one thing that I want to ask 
you..."`;
   Tsugumi(T2A201)`"What?"`;
   Takeshi`"You just said something about the emergency 
stairs not leading to the Generator Room, 
right?"`;
   Takeshi`"Yeah...so what?"`;
   Tsugumi(T2A202)`"Don't you remember the map of LeMU that we 
saw yesterday?"`;
   Takeshi`"Map? Map...map..."`;
   `I pressed on my temples with my fingers 
trying to tease out a buried memory.`;

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
   Tsugumi(T2A203)`"The map of the third floor was divided into 
two areas."`;
   Tsugumi(T2A204)`"Do you remember?"`;
   Takeshi`"I can't say I remember it exactly...
but kinda, yeah."`;
   Tsugumi(T2A205)`"And what was between those two areas?"`;
   Takeshi`"Between them? How am I supposed to know...?"`;
   Takeshi`"There wasn't anything there."`;
   Tsugumi(T2A206)`"Exactly."`;
   Tsugumi(T2A207)`"Which means?"`;
   Takeshi`"The two areas are divided by a block 
which is now under water...?"`;
   Tsugumi(T2A208)`"Which means?"`;

});
hideTextbox();
setMapCommentToDisplay({ slot: 1 });
pickMapComment2({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   Takeshi`"We can't move directly from the Control Room 
area to the Generator Room area."`;
   Tsugumi(T2A209)`"So?"`;
   Takeshi`"Oh, I see..."`;
   Takeshi`"To get to the Generator Room's area, 
we have to access the second floor..."`;

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
   Takeshi`"And the only way we can do that is by 
using the neutral buoyancy elevator."`;
   Tsugumi(T2A210)`"Could you...help me out?"`;
   Takeshi`"But do you think it's alright? I mean, we 
haven't asked Sora's opinion..."`;
   Takeshi`"And we don't know if the cause of the 
blackout is really the generator..."`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG23A2`, transition: 20 });
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A211)`"I don't think that'd do any good."`;
   Takeshi`"Huh?"`;
   Tsugumi(T2A212)`"I don't think you're going to find Sora."`;
   Tsugumi(T2A213)`"Because of the blackout..."`;
   Takeshi`"?"`;

});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A214)`"The Control Room computer is going to be 
down."`;
   Tsugumi(T2A215)`"Even if Sora were around, she wouldn't be 
able to contact LeMMIH."`;
   Tsugumi(T2A216)`"So the only thing that we can do is go check 
out the generator...right?"`;
   Takeshi`"Well, I suppose so, but..."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A217)`"So what're you going to do?"`;
   Tsugumi(T2A218)`"Will you come along?"`;
   Takeshi`"........."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A219)`"Takeshi..."`;

});
fgload({ id: 1, name: `TU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A220)`"I really...need...you..."`;
   `Those words shocked me. I thought my heart 
stopped for a second.`;
   `'I really...need...you...'`;
   `They were not words that I ever expected to 
hear from Tsugumi's mouth.`;
   `Tsugumi stared straight at me.`;
   `Her intense gaze made me uncomfortable.`;
   Tsugumi(T2A221)`"Please..."`;

});
choice(
   `Help Tsugumi`,
   `Look for Sora first`,
);
switch (l_choice) {
   case 0: goto(lbl_000013c3);
   case 1: goto(lbl_00001431);
}
let lbl_000013c3;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"A-alright..."`;
   Takeshi`"I'll go with you."`;
   `I stared back in Tsugumi's eyes.`;
   `I didn't think about going against her.`;
   `Tsugumi nodded.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A222)`"Hey, what about Coco?"`;

});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A223)`"I've got another job I want Coco to do."`;
   Coco(T2A224)`"Another job? What's that?"`;
   Tsugumi(T2A225)`"I want you to tell You and the Kid what I 
just told you."`;
   Tsugumi(T2A226)`"I mean, tell them that Takeshi and I are 
going to the Generator Room..."`;
   Coco(T2A227)`"Oh, that."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A228)`"Roger! Ten-four that!"`;
   `Coco clicked her heals together and gave a 
kind of salute.`;

});
goto(lbl_000015a5);
let lbl_00001431;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"N-no..."`;
   Takeshi`"I don't want to go."`;
   `I turned my face to avoid Tsugumi's eyes.`;
   `I didn't want her eyes to drag me in.`;
   Takeshi`"We've got to look for Sora first. This isn't 
a time to be acting selfishly."`;

});
fgload({ id: 1, name: `TU08ADL`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A229)`"...I see."`;
   `Tsugumi scowled.`;
   `She gave me that look that could kill again.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A230)`"Hey, hey. Do you want me to go instead?"`;
   `Coco asked the question innocently.`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A231)`"Uh...let's see..."`;
   `Tsugumi's expression soon returned to normal.`;
   Tsugumi(T2A232)`"But I don't think it is possible with just 
you alone."`;

});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A233)`"First I want to ask you to do another job."`;
   Coco(T2A234)`"Another job? What's that?"`;
   Tsugumi(T2A235)`"I want you to tell You and the Kid that I'm 
going to the Generator Room."`;

});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A236)`"And...that Takeshi put me in a difficult spot 
because he was scared and wouldn't come along 
with me..."`;
   Takeshi`"Hey, hold on! When did I say I was scared?"`;
   `I jumped in between Coco and Tsugumi.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO06ADM`, name2: `TU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A237)`"'No. I don't want to go' That sounds pretty 
scared to me."`;
   Takeshi`"Hey! Who do you think you're calling scared? 
I just think that we should do something else 
first."`;

});
fgload({ id: 1, name: `CO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A238)`"See what I mean. Something happens and you 
start whining like a baby..."`;

});
fgload({ id: 2, name: `TU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A239)`"You are a gutless man..."`;

});
fgload({ id: 2, name: `TU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A240)`"Or maybe you're not even a man yet...?"`;
   Tsugumi(T2A241)`"Coco, hurry and get You and the Kid. Takeshi 
isn't going to be any use."`;
   Takeshi`"Tsugumi! You don't have to talk like that!"`;
   `I was peeved.`;

});
fgload({ id: 2, name: `TU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A242)`"So how do you want me to say it?"`;
   `Without hesitating, Tsugumi shot the question 
right back at me. `;
   Takeshi`"........."`;
   `For one moment I thought I'd grab her by her 
collar and show her.`;
   `But I dropped my hand....`;
   Takeshi`"Okay, okay. Fine. I'll go with you."`;
   Takeshi`"I'll go with you because you are too scared 
to go alone."`;

});
fgload({ id: 2, name: `TU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A243)`"....Hmmph."`;
   `Tsugumi laughed through her nose.`;

});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A244)`"So what am I supposed to do?"`;

});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2A245)`"...Just tell You that I am going to the 
Generator Room."`;
   Tsugumi(T2A246)`"And I'm taking Takeshi along."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2A247)`"Roger! Ten-four that!"`;
   Pipi(PIPI_01)`"Woof!"`;
   `Coco clicked her heals together and gave a 
kind of salute.`;

});
let lbl_000015a5;
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_2B`);
