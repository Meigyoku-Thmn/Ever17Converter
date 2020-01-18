l_b0 = 5;
l_dayA = 6;
l_dayB = 6;
setDialogBoxColor(GREEN);
setSceneTitle({ index: 43 });
playBGM({ num: 7, volume: 100 });
bgload({ name: `BG35A1`, transition: 20 });
clock(`16:42`);
showTextbox();
text(() => {
   marker; appendText; 
   `We had finished making our rounds.`;
   waitForClick; clearText; marker; appendText; 
   `The Kid had gone back earlier with You and 
Coco into the examination room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi and I were in the corridor talking.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No other options, huh...?"`;
   waitForClick; clearText; marker; sound(`T6T000`); appendText; 
   Tsugumi`"Yeah...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T001`); appendText; 
   Tsugumi`"So, what are we going to do?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean...er, I'm thinking about 
that right now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T002`); appendText; 
   Tsugumi`"Really...?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi smiled slightly.`;
   waitForClick; clearText; marker; sound(`T6T003`); appendText; 
   Tsugumi`"You really like to waste your time, don't you 
Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"T-this isn't wasting time."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T004`); appendText; 
   Tsugumi`"Ha, ha, sorry...but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T005`); appendText; 
   Tsugumi`"But it seems just like something you'd do."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Thinking about things that are impossible?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `When I said that Tsugumi puffed up her cheeks.`;
   waitForClick; clearText; marker; sound(`T6T006`); appendText; 
   Tsugumi`"No! ...I don't mean that."`;
   waitForClick; clearText; marker; sound(`T6T007`); appendText; 
   Tsugumi`"Why do you have to tease me..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I never thought I'd hear YOU say that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I have no idea what to do, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We'll find a way out of this somehow. We've 
made it this far."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi laughed at my efforts to sound 
positive.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T008`); appendText; 
   Tsugumi`"Yeah...I'm sure we'll be 'fine'."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah that's right...we're going to be okay."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `From a distance a roaring sound reverberated 
throughout the installation. It seemed that 
it was transmitted through the water to IBF.`;
   waitForClick; clearText; marker; appendText; 
   `I wondered if that was the sound of the 
thermal vents.`;
   waitForClick; clearText; marker; appendText; 
   `Or was it coming from LeMU...`;
   waitForClick; clearText; marker; appendText; 
   `The situation surrounding us was exceedingly 
grim, and we were only left with the option 
of postponing the inevitable.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Tsugumi...about that old guy..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T009`); appendText; 
   Tsugumi`"The researcher? Too bad, huh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. But I was thinking, why was he the 
only one left here? Everyone else got out 
earlier, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, besides those guys that didn't make 
it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T010`); appendText; 
   Tsugumi`"I'm sure some kind of circumstances kept him 
from escaping. And circumstances that kept him 
alive..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Circumstances?"`;
   waitForClick; clearText; marker; sound(`T6T011`); appendText; 
   Tsugumi`"Do you remember the entry logs we found on 
the terminals?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, there were a few of them...nn? Wait, 
are you saying...!?"`;
   waitForClick; clearText; marker; sound(`T6T012`); appendText; 
   Tsugumi`"You remember? That journal entry we found."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, it was him..."`;
   waitForClick; clearText; marker; appendText; 
   `His last words had been 'Take care of my 
daughter.'`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T013`); appendText; 
   Tsugumi`"I think that was Coco's dad."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"T.Y....Mr. Yagami, huh? He probably knew 
that Coco was here when the accident hit LeMU."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T014`); appendText; 
   Tsugumi`"Yeah, I'm sure...he did."`;
   waitForClick; clearText; marker; sound(`T6T015`); appendText; 
   Tsugumi`"Maybe he survived because he was thinking 
about his daughter."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG33A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `The two of us leaned against a wall and 
looked calmly at the waves lapping in the pool.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What do you think about Coco's condition?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why did Coco get TB anyway...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T016`); appendText; 
   Tsugumi`"Well...Coco had been to IBF at least once 
before May 1st."`;
   waitForClick; clearText; marker; sound(`T6T017`); appendText; 
   Tsugumi`"Maybe there was already an outbreak of the 
TB Virus at that time."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T018`); appendText; 
   Tsugumi`"TB's incubation period is two to seven 
days.... That's consistent with the timing of 
Coco's symptoms, isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-yeah...I guess you're right."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When Coco came to IBF she was probably 
exposed to TB somehow..."`;
   waitForClick; clearText; marker; appendText; 
   `Nodding to myself, I figured that had to be 
the most probable possibility.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T019`); appendText; 
   Tsugumi`"However, everyone at IBF probably didn't 
realize the terrible truth that TB was 
spreading inside the installation."`;
   waitForClick; clearText; marker; sound(`T6T020`); appendText; 
   Tsugumi`"When they found that a few people had become 
infected, they must have panicked...and the 
situation got out of hand."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T021`); appendText; 
   Tsugumi`"As people started dying, the staff here 
tried to escape and when the escape pods ran 
out..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-wait! That means...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That alarm meant..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The alarm that we heard on May 1, in Lemu 
was...!?"`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't stop myself from asking. Tsugumi 
frowned and continued.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T022`); appendText; 
   Tsugumi`"Probably one of the terrified staff members, 
forced their way up from IBF to LeMU..."`;
   waitForClick; clearText; marker; sound(`T6T023`); appendText; 
   Tsugumi`"Without following the standard decompression 
procedure, they opened the emergency 
corridors and fled up to Insel null."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T024`); appendText; 
   Tsugumi`"Those corridors remained open for a while."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And the built-up gas inside the complex 
quickly escaped, bringing down the pressure, 
a section of LeMU started flooding, and the 
watertight doors closed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And that's how we ended up getting stuck 
here...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T025`); appendText; 
   Tsugumi`"Yup, that's right."`;
   waitForClick; clearText; marker; sound(`T6T026`); appendText; 
   Tsugumi`"Meaning, the alarm that went off in LeMU..."`;
   waitForClick; clearText; marker; sound(`T6T027`); appendText; 
   Tsugumi`"Was for the abnormal installation pressure 
readings and the virus outbreak - You could 
say it served a couple of functions."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't believe it...!"`;
   waitForClick; clearText; marker; appendText; 
   `All I could do was sigh in frustration.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's the reason that no rescue team is 
coming here...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T028`); appendText; 
   Tsugumi`"I'm sure that's it."`;
   waitForClick; clearText; marker; appendText; 
   `With a solemn face, Tsugumi nodded.`;
   waitForClick; clearText; marker; sound(`T6T029`); appendText; 
   Tsugumi`"If the TB Virus got out to the world 
outside, it would be devastating."`;
   waitForClick; clearText; marker; sound(`T6T030`); appendText; 
   Tsugumi`"So even if there were survivors in here, it 
would be necessary to lock them up at the 
bottom of the ocean."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T031`); appendText; 
   Tsugumi`"Leiblich Pharmaceuticals may be even trying 
to hide the fact that there was an accident 
at all."`;
   waitForClick; clearText; marker; sound(`T6T032`); appendText; 
   Tsugumi`"All the while knowing that we're trapped in 
here..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"............"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I kicked at a rusted bolt that had fallen at 
my feet.`;
   waitForClick; clearText; marker; appendText; 
   `It bounced into the pool with a splash, and 
slowly sank.`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Then we walked around, making stomping sounds 
as I went.`;
   waitForClick; clearText; marker; appendText; 
   `The sounds of our feet echoed loudly off the 
walls of the narrow corridor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, if that's the case then..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T033`); appendText; 
   Tsugumi`"Then?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, you know?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That means we've got to get ourselves back 
up to the surface no matter what!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T034`); appendText; 
   Tsugumi`"Hmmm, why's that?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So that we can tell the media all about 
what's happened here, that's why!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We're going to put it to Leiblich!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No matter what, okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T035`); appendText; 
   Tsugumi`"Okay."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T036`); appendText; 
   Tsugumi`"Heh, heh.... That's more like the Takeshi I 
know."`;
   waitForClick; clearText; marker; appendText; 
   `Puffing out her cheeks slightly, Tsugumi 
looked at me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really?"`;
   waitForClick; clearText; marker; sound(`T6T037`); appendText; 
   Tsugumi`"Yeah, me too..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T038`); appendText; 
   Tsugumi`"I want to go with you, Takeshi...together..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Did you say something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T039`); appendText; 
   Tsugumi`"I-it's nothing."`;
   waitForClick; clearText; marker; appendText; 
   `For some reason Tsugumi's face was red.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   `I felt strange and stopped suddenly.`;
   waitForClick; clearText; marker; appendText; 
   `I looked up.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T040`); appendText; 
   Tsugumi`"Takeshi...what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi followed my gaze to the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   `There was nothing there.`;
   waitForClick; clearText; marker; appendText; 
   `She returned her gaze to me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not really sure, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"For some reason it's hard to breathe all of a 
sudden..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T041`); appendText; 
   Tsugumi`"Takeshi......?"`;
   waitForClick; clearText; marker; sound(`T6T042`); appendText; 
   Tsugumi`"Your...nose is bleeding..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T043`); appendText; 
   Tsugumi`"You've got a nose bleed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Eh?"`;
   waitForClick; clearText; marker; appendText; 
   `I hurriedly wiped my nose with my hand.`;
   waitForClick; clearText; marker; appendText; 
   `My upper lip was wet with something.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T044`); appendText; 
   Tsugumi`"He-hey? Are you okay?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi looked worriedly at my face.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"F-fine, I'm fine..."`;
   waitForClick; clearText; marker; appendText; 
   `Looking up, and wiping under my nose, I 
replied.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wasn't thinking anything sexual! 
Absolutely! Positively!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T045`); appendText; 
   Tsugumi`"I-it's not like I...I don't care about that!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, alright then..."`;
   waitForClick; clearText; marker; appendText; 
   `The blood wouldn't stop flowing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Aaah, I look like such a dork."`;
   waitForClick; clearText; marker; sound(`T6T046`); appendText; 
   Tsugumi`"Who cares what you look like."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I care. Looking like this in front of, you, 
I...huuuh....huuuh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T047`); appendText; 
   Tsugumi`"Huuuh?"`;
   waitForClick; clearText; marker; sound(`T6T048`); appendText; 
   Tsugumi`"Huuuuh, what?"`;
   waitForClick; clearText; marker; sound(`T6T049`); appendText; 
   Tsugumi`"Come on, what...?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi started shaking my shoulder.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Wuuuuaaaachoooo!!"`;
   waitForClick; clearText; marker; appendText; 
   `I let out a huge sneeze.`;
   waitForClick; clearText; 
});
removeBG({ mode: RED, transition: 3 });
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `SPLAT!`;
   delay(0); 
});
bgload_keepFg({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   appendText; waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   `Blood started dripping not only from my nose, 
but my mouth as well.`;
   waitForClick; clearText; marker; appendText; 
   `Red flecks splattered on the floor and walls.`;
   waitForClick; clearText; 
});
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Whooah...!"`;
   waitForClick; clearText; marker; appendText; 
   `I was suddenly assaulted by dizziness.`;
   waitForClick; clearText; marker; appendText; 
   `The world felt like it was spinning.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"For some reason, I can't keep steady..."`;
   waitForClick; clearText; marker; appendText; 
   `Although I didn't feel so great, it seemed 
funny for some reason and I laughed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A, ha, ha, ha...what's with this?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T050`); appendText; 
   Tsugumi`"Takeshi!"`;
   waitForClick; clearText; marker; sound(`T6T051`); appendText; 
   Tsugumi`"Takeshi, hang in there!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh...quit shaking me, it's making me feel 
ill."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T052`); appendText; 
   Tsugumi`"S-sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, I'm fine. Don't worry, Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T053`); appendText; 
   Tsugumi`"You're not fine at all!"`;
   waitForClick; clearText; marker; sound(`T6T054`); appendText; 
   Tsugumi`"You're bleeding all over, Takeshi!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T055`); appendText; 
   Tsugumi`"We should go to the examination room, and 
take a look at you at once."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, yeah. *cough*"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `(This isn't good...)`;
   waitForClick; clearText; marker; appendText; 
   `(I gotta get a hold of myself...)`;
   waitForClick; clearText; marker; appendText; 
   `I tried to calm myself down.`;
   waitForClick; clearText; marker; appendText; 
   `With Tsugumi supporting me, I walked down the 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   `Just then a door flew open in front of us.`;
   waitForClick; clearText; marker; appendText; 
   `It was the examination room. Out of it flew 
You.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T056`); appendText; 
   You`"Tsugumi, Takeshi! The Kid! The Kid's in bad 
shape!"`;
   waitForClick; clearText; marker; appendText; 
   `Her face changed color as she shouted.`;
   waitForClick; clearText; marker; sound(`T6T057`); appendText; 
   Tsugumi`"The Kid? What's wrong?"`;
   waitForClick; clearText; marker; sound(`T6T058`); appendText; 
   You`"He's in trouble! It'll be faster if you come 
in and look...ah!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T059`); appendText; 
   You`"No...Takeshi, you too!?"`;
   waitForClick; clearText; marker; appendText; 
   `You noticed the shape I was in and her face 
turned pale.`;
   waitForClick; clearText; marker; sound(`T6T060`); appendText; 
   Tsugumi`"Takeshi 'too'?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about...?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
closeDimInAndOutAndFilterAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 12, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`16:57`);
showTextbox();
text(() => {
   marker; appendText; 
   `The Kid was sleeping on the L-MRI table.`;
   waitForClick; clearText; marker; appendText; 
   `His results from the scan came up on the 
control panel's monitor.`;
   waitForClick; clearText; marker; appendText; 
   `"Tief Blau 2017-Rev.17"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T061`); appendText; 
   You`"The Kid's been infected with Tief Blau, 
too..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"How could that happen!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why? He's been with us the whole time. So 
why did he get...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why, and where did he get TB!? ...*cough*"`;
   waitForClick; clearText; marker; appendText; 
   `I mumbled to myself, finding it hard to 
breathe all of a sudden.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T062`); appendText; 
   Tsugumi`"Takeshi, just calm down..."`;
   waitForClick; clearText; marker; sound(`T6T063`); appendText; 
   Tsugumi`"None of us know where he got exposed to it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU11ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T064`); appendText; 
   Tsugumi`"Takeshi, I want you to get scanned, too."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-why!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T065`); appendText; 
   Tsugumi`"Just let me scan you...please."`;
   waitForClick; clearText; marker; sound(`T6T066`); appendText; 
   Tsugumi`"It isn't normal to start spewing blood from 
your nose and mouth, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah I know...but..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi gently took the Kid off of the L-MRI 
examination table and forcefully put me up on 
it.`;
   waitForClick; clearText; marker; appendText; 
   `Pressing on both of my shoulders, she forced 
me down on the table.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-you don't have to do that...fine, I'll let 
you check me."`;
   waitForClick; clearText; marker; appendText; 
   `I brushed Tsugumi's hands off of me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"See? I'm lying down now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T067`); appendText; 
   Tsugumi`"Okay...You, please start the scan."`;
   waitForClick; clearText; marker; sound(`T6T068`); appendText; 
   You`"O-okay."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `You started operating the control panel.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `The scanning light from the laser crawled 
slowly up my body.`;
   waitForClick; clearText; marker; appendText; 
   `After a while...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T069`); appendText; 
   You`"The scan's finished..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-what's it say?"`;
   waitForClick; clearText; marker; appendText; 
   `My voice cracked when I asked the question.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A-at least say something, You."`;
   waitForClick; clearText; marker; sound(`T6T070`); appendText; 
   You`"The results are..."`;
   waitForClick; clearText; marker; appendText; 
   `You stared at the panel without moving.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU13ADM`, name2: `YU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T071`); appendText; 
   Tsugumi`"The results are black...You're infected too, 
Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi read the monitor for me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......!! R...really...?"`;
   waitForClick; clearText; marker; sound(`T6T072`); appendText; 
   Tsugumi`"I'm sorry to say it, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T073`); appendText; 
   Tsugumi`"Since coming to IBF... No it must've been 
longer, since coming to LeMU, all of us..."`;
   waitForClick; clearText; marker; sound(`T6T074`); appendText; 
   Tsugumi`"Have been infected for quite some time."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi hung her head down and let out a big 
sigh. `;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Damn it..."`;
   waitForClick; clearText; marker; appendText; 
   `I stood up from the L-MRI, and was assaulted 
by a terrible dizzy spell.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Whooaaah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T075`); appendText; 
   Kid`"Takeshi, watch out...!"`;
   waitForClick; clearText; marker; appendText; 
   `The one to steady me from falling was the Kid.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `But from the looks of it, his legs weren't 
very steady either.`;
   waitForClick; clearText; marker; appendText; 
   `Putting my hand on a wall, I somehow held 
myself up.`;
   waitForClick; clearText; marker; sound(`T6T076`); appendText; 
   Kid`"We're in trouble, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-you can say that again..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T077`); appendText; 
   Kid`"If only we had that serum...the orange 
one...agh."`;
   waitForClick; clearText; marker; appendText; 
   `The Kid pressed his hand to his face.`;
   waitForClick; clearText; marker; appendText; 
   `As he wiped his mouth, I noticed a thin trail 
of blood there.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-yeah, the serum.... If they've been 
handling TB here at IBF, they should have 
some of that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If we use that, then the symptoms should 
lessen..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I went around the examination room, and 
checked to see if I could find it anywhere.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADS`, name2: `YU18ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi and You hurriedly started checking 
through the medicine cabinets.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `The Kid sank to the floor. He didn't look 
very good.`;
   waitForClick; clearText; marker; appendText; 
   `His breathing was ragged and he had lines of 
pain etched on his face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T078`); appendText; 
   You`"It's no good. It doesn't look like there's 
any here."`;
   waitForClick; clearText; marker; sound(`T6T079`); appendText; 
   Tsugumi`"I can't find any either."`;
   waitForClick; clearText; marker; appendText; 
   `The two of them were shaking their heads.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn...what are we going to do?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Woof, woof!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey Pipi, you seem like you're doing pretty 
well."`;
   waitForClick; clearText; marker; appendText; 
   `Without me noticing, Pipi had come up and was 
darting around my legs.`;
   waitForClick; clearText; marker; appendText; 
   `His tail was wagging frantically.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `He suddenly dropped a few small objects from 
his mouth.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"!?"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey! Where'd you get...?"`;
   waitForClick; clearText; marker; sound(`T6T080`); appendText; 
   You`"What's wrong? ...Ah!"`;
   waitForClick; clearText; marker; appendText; 
   `You ran over to where we were.`;
   waitForClick; clearText; marker; sound(`T6T081`); appendText; 
   You`"This is...the orange serum."`;
   waitForClick; clearText; marker; appendText; 
   `She picked up one of the fallen objects in 
front of Pipi.`;
   waitForClick; clearText; marker; appendText; 
   `It was a small capsule - a capsule with orange 
liquid inside of it.`;
   waitForClick; clearText; marker; appendText; 
   `Four of them had fallen on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where'd you find that Pipi?"`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know if he'd understand me, but I 
asked Pipi anyway.`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   Pipi`"Whine...."`;
   waitForClick; clearText; marker; appendText; 
   `Pipi shook his head from side-to-side.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Were there any more of these?"`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   Pipi`"Whiiiine..."`;
   waitForClick; clearText; marker; appendText; 
   `He shook his head.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is...all of them?"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   `He nodded.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-well we need to take these immediately..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sorry You, but get these ready. You're the 
only one who knows how to give shots."`;
   waitForClick; clearText; marker; sound(`T6T082`); appendText; 
   Tsugumi`"I found some syringes over here, You."`;
   waitForClick; clearText; marker; sound(`T6T083`); appendText; 
   You`"O-okay!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `We gathered all of the cartridges of serum 
from the floor, and put them on the bed.`;
   waitForClick; clearText; marker; appendText; 
   `Looking slightly doubtful, You prepared the 
syringes one at a time and gave the Kid and 
me our shots.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Phew.... We can relax for a while now."`;
   waitForClick; clearText; marker; sound(`T6T084`); appendText; 
   Kid`"Thanks, You..."`;
   waitForClick; clearText; marker; sound(`T6T085`); appendText; 
   You`"You're welcome."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sitting with his back against the wall, the 
Kid gave You a thumbs up.`;
   waitForClick; clearText; marker; appendText; 
   `After that he smiled and closed his eyes. He 
must have fallen asleep.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi and I carried the Kid over to an 
empty bed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do we do about Coco?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU01ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T086`); appendText; 
   Tsugumi`"She's still undergoing the oxygen treatment. 
So we can't open the pod."`;
   waitForClick; clearText; marker; sound(`T6T087`); appendText; 
   Tsugumi`"It looks like the treatment is progressing 
normally. As long as she's in there, I don't 
think her condition will get much worse..."`;
   waitForClick; clearText; marker; sound(`T6T088`); appendText; 
   Tsugumi`"As soon as it's done, let's give Coco a 
shot, too."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, okay..."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Oh yeah, you should probably give yourself a 
shot too, don't you think, You?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `YU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T089`); appendText; 
   You`"Huh? Um, no I..."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   `The next shot had already been prepared, but 
for some reason You was stalling.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T090`); appendText; 
   You`"*Cough*...*cough*"`;
   waitForClick; clearText; marker; appendText; 
   `She started coughing suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! Give yourself a shot quickly!"`;
   waitForClick; clearText; marker; sound(`T6T091`); appendText; 
   You`"But, I-I just...*cough* "`;
   waitForClick; clearText; marker; appendText; 
   `She wouldn't stop coughing.`;
   waitForClick; clearText; marker; appendText; 
   `Her arm holding onto the syringe started to 
shake.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T092`); appendText; 
   You`"Breathe deep...fuuu....haaa..."`;
   waitForClick; clearText; marker; appendText; 
   `Her coughing finally stopped.`;
   waitForClick; clearText; marker; appendText; 
   `But her hands wouldn't go still.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-what's wrong? You aren't feeling well? You 
want me to give the shot to you?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T093`); appendText; 
   You`"Huh, n-no way..."`;
   waitForClick; clearText; marker; sound(`T6T094`); appendText; 
   You`"I...I don't like shots..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh!?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You didn't have any problem sticking everyone 
else!?"`;
   waitForClick; clearText; marker; sound(`T6T095`); appendText; 
   Tsugumi`"You don't like getting them yourself?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T096`); appendText; 
   You`"Well yeah. 'Cause they hurt!"`;
   waitForClick; clearText; marker; appendText; 
   `You puffed out her cheeks stubbornly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about, your life's on 
the line here...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What'll ya do? Give me that syringe, You!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T097`); appendText; 
   You`"Aagh!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Reaching out quickly, I latched onto You's arm.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi, hold her down!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T098`); appendText; 
   Tsugumi`"Roger."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi forced You to sit on the bed, and 
held her so that she couldn't move.`;
   waitForClick; clearText; marker; sound(`T6T099`); appendText; 
   You`"Hey...*cough* what are you doing! Ouch!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop complaining!"`;
   waitForClick; clearText; marker; appendText; 
   `I grabbed onto You's arm, and stuck the 
needle in it.`;
   waitForClick; clearText; marker; sound(`T6T100`); appendText; 
   You`"Hey! Where do you think you're sticking that!"`;
   waitForClick; clearText; marker; sound(`T6T101`); appendText; 
   You`"You've got it all wrong! Not there! Aaaa, 
stop mangling me!"`;
   waitForClick; clearText; marker; sound(`T6T102`); appendText; 
   You`"Ow! Ouch! Stop! Go more slowly!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well stop squirming around so much!"`;
   waitForClick; clearText; marker; sound(`T6T103`); appendText; 
   You`"The angle's all wrong!"`;
   waitForClick; clearText; marker; sound(`T6T104`); appendText; 
   You`"You're going to get air bubbles in it!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop complaining! You can't do it yourself!"`;
   waitForClick; clearText; marker; sound(`T6T105`); appendText; 
   You`"You suck!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up!"`;
   waitForClick; clearText; marker; sound(`T6T106`); appendText; 
   You`"Stop iiiit! Lemmee goooo! I'm dyyyinnnng! 
Oooooowwwch!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You idiot! We're giving you this so you WON'T 
die!"`;
   waitForClick; clearText; marker; sound(`T6T107`); appendText; 
   Tsugumi`"*Sigh...*"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi slumped her shoulders.`;
   waitForClick; clearText; marker; appendText; 
   `You was throwing a tantrum like a spoiled 
child.`;
   waitForClick; clearText; marker; appendText; 
   `Small droplets of red stained the white 
sheets of the bed.`;
   waitForClick; clearText; marker; appendText; 
   `..............`;
   waitForClick; clearText; marker; appendText; 
   `.........`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `After that You got scanned on the L-MRI. As 
suspected she had come down with TB.`;
   waitForClick; clearText; marker; appendText; 
   `We didn't have room to mess around anymore.`;
   waitForClick; clearText; marker; appendText; 
   `Ultimately, You wouldn't let me do it so she 
ended up giving herself the shot.`;
   waitForClick; clearText; marker; appendText; 
   `Complaining the whole time, and with tears in 
her eyes...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
delay({ interval: 60 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`17:36`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I'm not sure how long our condition will 
hold with just one shot..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, You? Do you think we can do anything 
after it stops working?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   `She was sitting at the computer terminal, 
silently typing on the keyboard.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You, tell me what we can expect?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T108`); appendText; 
   You`"Don't talk to me, I can't concentrate."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, alright."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T109`); appendText; 
   You`"I'm trying my best..."`;
   waitForClick; clearText; marker; sound(`T6T110`); appendText; 
   You`"But someone has put a lock on the 
communications protocol and we can't make 
contact with the surface."`;
   waitForClick; clearText; marker; sound(`T6T111`); appendText; 
   You`"But, every once in a while, I've found some 
communication data that crosses through."`;
   waitForClick; clearText; marker; sound(`T6T112`); appendText; 
   You`"If I can release that lock, or...well 
anyway, we just might be able to get through 
somehow."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T113`); appendText; 
   You`"At least it is better than LeMU, where we 
had no way of making contact."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, show me what you got, genius!"`;
   waitForClick; clearText; marker; sound(`T6T114`); appendText; 
   You`"Okay..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I left You for a while, and went to look at 
the monitor attached to the capsule pod.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi came over to stand next to me and 
looked at the monitor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T115`); appendText; 
   Tsugumi`"How is Coco doing?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She's in 'serious but stable' condition."`;
   waitForClick; clearText; marker; sound(`T6T116`); appendText; 
   Tsugumi`"Really..."`;
   waitForClick; clearText; marker; appendText; 
   `According to the monitor, it would be four 
hours before Coco could leave the pod.`;
   waitForClick; clearText; marker; appendText; 
   `The pod was full of high-pressured oxygen.`;
   waitForClick; clearText; marker; appendText; 
   `We couldn't take Coco out of there until the 
time had come.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T117`); appendText; 
   Tsugumi`"We should probably get the Kid into a pod, 
don't you think?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah...let's get it ready."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `But for some reason we couldn't get the hatch 
on the furthest pod to close.`;
   waitForClick; clearText; marker; appendText; 
   `It wasn't easy but...I took the dead 
researcher out of his pod and set him down 
outside.`;
   waitForClick; clearText; marker; appendText; 
   `Mr. T.Y....`;
   waitForClick; clearText; marker; appendText; 
   `He was dead.`;
   waitForClick; clearText; marker; appendText; 
   `He had looked like he was smiling at the very 
end but...`;
   waitForClick; clearText; marker; appendText; 
   `His expression had betrayed his agony after 
all.`;
   waitForClick; clearText; marker; appendText; 
   `It was probably best that Coco hadn't seen her 
father's dead face.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi sterilized the pod and finished 
cleaning up.`;
   waitForClick; clearText; marker; appendText; 
   `I shook awake the Kid, who was sleeping in 
the bed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey Kid, the pod's ready. Wake up..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T118`); appendText; 
   Kid`"Unh...Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   `He slowly opened his eyes.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sorry to wake you, Kid, but I need you to 
get in the capsule pod."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T119`); appendText; 
   Kid`"Wha..."`;
   waitForClick; clearText; marker; appendText; 
   `He opened his eyes wide at my words.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T120`); appendText; 
   Kid`"What about...everyone else?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's only one pod that we can really use. 
So you get in."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T121`); appendText; 
   Kid`"No...no way!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?!"`;
   waitForClick; clearText; marker; sound(`T6T122`); appendText; 
   Kid`"Forget it, why should I be the only one 
to...I can't just abandon everyone!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's not like that, it's about how sick you 
are. You're the most serious case after Coco."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T123`); appendText; 
   Kid`"Still, forget it."`;
   waitForClick; clearText; marker; sound(`T6T124`); appendText; 
   Kid`"Once I get in the pod, I can't get out for a 
while, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T125`); appendText; 
   Kid`"No way...I...I want to stay by Coco!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Getting up out of bed, the Kid staggered 
quickly over to Coco's pod.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T126`); appendText; 
   Kid`"I'm not moving from here until we know that 
everyone's getting out!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `He clung to the pod.`;
   waitForClick; clearText; marker; appendText; 
   `I thought about trying to pull him off, but 
he seemed absolutely determined not to move.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You stupid brat! What the hell are you 
saying?"`;
   waitForClick; clearText; marker; appendText; 
   `Forgetting my own exhaustion, I began 
shouting at the Kid.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't you want to escape? If you want to 
get out, you have to listen to me!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you get any worse..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Even if you get in the pod, it might be too 
late!"`;
   waitForClick; clearText; marker; sound(`T6T127`); appendText; 
   Kid`"But...but...cough..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Listen, there's only one more shot of the 
serum left!"`;
   waitForClick; clearText; marker; appendText; 
   `I pointed to the orange capsule left on the 
empty bed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So!  So...so..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What?!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait, why is there one left?"`;
   waitForClick; clearText; marker; appendText; 
   `All of a sudden, the questions flew.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T128`); appendText; 
   Kid`"Hey!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA03ADS`, name2: `YU06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T129`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   `You turned away from the terminal as well.`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playBGM({ num: 13, volume: 100 });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T130`); appendText; 
   Tsugumi`"What are you talking about..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T131`); appendText; 
   Tsugumi`"That cartridge is for Coco, right?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi mumbled with her face slightly turned 
away.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"......"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T6T132`); appendText; 
   You`"So that's it..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Everyone's gaze finally rested on Tsugumi.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU03ADS`, name2: `YU14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T133`); appendText; 
   You`"You know, Tsugumi...I still haven't given 
you an injection."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T134`); appendText; 
   Tsugumi`"Yeah? So?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi mumbled with her eyes averted.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T135`); appendText; 
   You`"I had forgotten before; I injected Takeshi 
and the Kid with a shot. Then I got busy, and 
then..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T136`); appendText; 
   You`"So, out of four of the shots, we still have 
one left."`;
   waitForClick; clearText; marker; appendText; 
   `Getting up from the terminal, You spoke acidly.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `YU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T137`); appendText; 
   You`"How you feeling, Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T6T138`); appendText; 
   You`"You're not in pain?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Come to think of it, Tsugumi didn't have any 
symptoms.`;
   waitForClick; clearText; marker; appendText; 
   `She didn't show any signs of the TB Virus.`;
   waitForClick; clearText; marker; appendText; 
   `I dredged up Tsugumi's old words from the 
depths of my memory...`;
   waitForClick; clearText; marker; appendText; 
   `'Highly improved immune system and increased 
metabolic efficiency'`;
   waitForClick; clearText; marker; appendText; 
   `'Telomeres that continue to rejuvenate'`;
   waitForClick; clearText; marker; appendText; 
   `...........`;
   waitForClick; clearText; marker; appendText; 
   `(It couldn't be...)`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T139`); appendText; 
   You`"Tsugumi, I want you to get scanned, right 
now."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: WHITE, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   `'Cure Virus-P-Carrier'`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's genetic makeup had been altered by 
Cure, giving her incredible regenerative 
powers against illness and injuries.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi had also been infected with TB, but 
she'd already been able to make the 
antibodies and drive out the virus.`;
   waitForClick; clearText; marker; appendText; 
   `Cure......`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi, had gone beyond the normal human 
capability...`;
   waitForClick; clearText; marker; appendText; 
   `She had mentioned that she was 'special.'`;
   waitForClick; clearText; marker; appendText; 
   `Successful cases of genetic manipulation were 
probably exceedingly rare.`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
bgload({ name: `BG34A1`, transition: 10 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T140`); appendText; 
   You`"Cure..."`;
   waitForClick; clearText; marker; appendText; 
   `Looking at the results from the L-MRI scan, 
You nodded.`;
   waitForClick; clearText; marker; sound(`T6T141`); appendText; 
   You`"I found it in LeMU's database... But I'd 
heard about it before, once..."`;
   waitForClick; clearText; marker; sound(`T6T142`); appendText; 
   You`"I never would have imagined you're a carrier 
of the Cure Virus, Tsugumi."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T143`); appendText; 
   Tsugumi`"I don't care if you hate me."`;
   waitForClick; clearText; marker; sound(`T6T144`); appendText; 
   You`"Hate you? Why would I?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T145`); appendText; 
   Tsugumi`"Are you scared then?"`;
   waitForClick; clearText; marker; sound(`T6T146`); appendText; 
   Tsugumi`"You're scared of me, aren't you, You?"`;
   waitForClick; clearText; marker; sound(`T6T147`); appendText; 
   Tsugumi`"You're probably thinking that you don't want 
anything more to do with me, right?"`;
   waitForClick; clearText; marker; sound(`T6T148`); appendText; 
   You`"I, I wouldn't think that...!"`;
   waitForClick; clearText; marker; appendText; 
   `You shook her head fiercely.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18ADM`, name2: `TU08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T149`); appendText; 
   You`"Why..."`;
   waitForClick; clearText; marker; sound(`T6T150`); appendText; 
   You`"Why would you say that?"`;
   waitForClick; clearText; marker; sound(`T6T151`); appendText; 
   Tsugumi`"Well..."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi bit her lips and said...`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T152`); appendText; 
   Tsugumi`"Well, because, I can be here...and I don't 
have to suffer."`;
   waitForClick; clearText; marker; sound(`T6T153`); appendText; 
   Tsugumi`"It could be that I'm just watching all of 
you throw up blood, and eventually when 
you're crawling on the floor, I'll be 
laughing at you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU18ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T154`); appendText; 
   Tsugumi`"Because I'm just a cruel person like that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"............"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `You couldn't look Tsugumi in the eyes.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T155`); appendText; 
   Kid`"I don't think that you're like that."`;
   waitForClick; clearText; marker; appendText; 
   `Clutching Coco's pod, the Kid spoke up.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU18ADS`, name2: `KA08ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T156`); appendText; 
   Kid`"I don't think you're a bad person at all. I 
mean..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T157`); appendText; 
   Kid`"You're the one who saved Coco, right?"`;
   waitForClick; clearText; marker; sound(`T6T158`); appendText; 
   Kid`"You risked your life to save someone."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T159`); appendText; 
   Tsugumi`"Yeah, so what..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T160`); appendText; 
   Tsugumi`"To tell you the truth, I regret it now."`;
   waitForClick; clearText; marker; sound(`T6T161`); appendText; 
   Tsugumi`"Coco is suffering from TB now, isn't she?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T162`); appendText; 
   Tsugumi`"She's stuck in that pod, and she's 
suffering..."`;
   waitForClick; clearText; marker; sound(`T6T163`); appendText; 
   Tsugumi`"If I hadn't had the stupid whim to do 
that...this wouldn't be happening right now."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   `The Kid turned away from Tsugumi.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop it right now!!"`;
   waitForClick; clearText; marker; appendText; 
   `I yelled at her with all of my might.`;
   waitForClick; clearText; marker; appendText; 
   `I ran over to her and grabbed her by her 
collar.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Are you still talking garbage like that!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Saying things you don't really mean!?"`;
   waitForClick; clearText; marker; sound(`T6T164`); appendText; 
   Tsugumi`"I...mean it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop lying to yourself!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T165`); appendText; 
   Tsugumi`"It isn't...a lie."`;
   waitForClick; clearText; marker; sound(`T6T166`); appendText; 
   Tsugumi`"I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T167`); appendText; 
   Tsugumi`"It's the truth...the only one who TB isn't 
affecting is me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......Ha......"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I let go of Tsugumi.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T168`); appendText; 
   Tsugumi`"So how about it Takeshi? Are you ready to 
accept the truth now...?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was - probably just pretending - to 
smile at me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, it is an indisputable fact."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Fine. I'll accept it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"BUT...."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"You might just help us get better."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T169`); appendText; 
   Tsugumi`"What did you say?"`;
   waitForClick; clearText; marker; appendText; 
   `Just then, Tsugumi's expression became serious.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Well, I'm not a doctor, so I can't really 
tell, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Smallpox, penicillin, snake anti-venom...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're pretty smart, this should make sense 
to you, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T170`); appendText; 
   Tsugumi`"N....no, way."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's our only chance."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're body is creating antibodies to the 
Tief Blau Virus, we'll use that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If we can get those antibodies, then there's 
a small chance we can fight off the Tief Blau."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T171`); appendText; 
   Tsugumi`"It's too dangerous!"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's expression was getting more and more 
worked up.`;
   waitForClick; clearText; marker; sound(`T6T172`); appendText; 
   Tsugumi`"Do you have any idea how hard it is to 
make antibodies and vaccines that work!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T173`); appendText; 
   Tsugumi`"There's almost no chance!!"`;
   waitForClick; clearText; marker; sound(`T6T174`); appendText; 
   Tsugumi`"If you make even the slightest mistake, it 
could kill all of you!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If we don't do anything, we're dead anyway!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T175`); appendText; 
   Tsugumi`"......!!"`;
   waitForClick; clearText; marker; appendText; 
   `She sucked in her breath.`;
   waitForClick; clearText; marker; appendText; 
   `Without moving, Tsugumi's expression turned to 
ice.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03ADS`, name2: `KA03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   `You and the Kid, who had been staring at the 
ground the whole time, raised their heads and 
looked at me.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"That's right...if we don't do anything we're 
dead."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And if that's the case..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's better that we take this risk, no 
matter how small our chance of survival."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"....*cough*"`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG({ mode: RED, transition: 3 });
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Splash.`;
   delay(0); 
});
bgload_keepFg({ name: `BG34A1`, transition: 20 });
shakeScreenHard();
showTextbox();
text(() => {
   appendText; waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
hideTextbox();
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Damn it, not another nose bleed..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A nose bleed AND I'm coughing up blood..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't believe how lame this is..."`;
   waitForClick; clearText; marker; appendText; 
   `I wiped off my nose and my chin.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? You aren't going to laugh at me 
Tsugumi for being such a dork?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Come on, laugh, Tsugumi."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I held out my hand toward her.`;
   waitForClick; clearText; marker; appendText; 
   `It was covered in blood.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T176`); appendText; 
   Tsugumi`"Stop it. Stay away from me..."`;
   waitForClick; clearText; marker; sound(`T6T177`); appendText; 
   Tsugumi`"Stop...I don't want to..."`;
   waitForClick; clearText; marker; appendText; 
   `Shaking her head fiercely, Tsugumi backed away.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T178`); appendText; 
   You`"T-Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sh...!"`;
   waitForClick; clearText; marker; appendText; 
   `You was moving to stand up, but I lifted a 
hand signaling her to stop.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T179`); appendText; 
   You`"Listen, Takeshi, Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   `You opened her mouth to talk, from where she 
was seated at the terminal.`;
   waitForClick; clearText; marker; sound(`T6T180`); appendText; 
   You`"There is a simple lab in the back of the 
examination room."`;
   waitForClick; clearText; marker; sound(`T6T181`); appendText; 
   You`"I saw a centrifuge and a machine for refining 
serum..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T182`); appendText; 
   You`"We could probably use that to safely and 
quickly extract the Tief Blau antibodies."`;
   waitForClick; clearText; marker; sound(`T6T183`); appendText; 
   You`"If this can scan for Tief Blau, it can 
probably scan for the antibodies and extract 
them."`;
   waitForClick; clearText; marker; appendText; 
   `She continued to talk in a low, calm voice.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Tsugumi, please help us. I'm asking you."`;
   waitForClick; clearText; marker; sound(`T6T184`); appendText; 
   Tsugumi`"Stay away from me, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T6T185`); appendText; 
   Tsugumi`"Don't touch me..."`;
   waitForClick; clearText; marker; appendText; 
   `I had backed her up all the way to the bed.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T186`); appendText; 
   Tsugumi`"You want to live with this disease?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T187`); appendText; 
   Tsugumi`"Once you've got the Cure Virus, you can't go 
back!"`;
   waitForClick; clearText; marker; sound(`T6T188`); appendText; 
   Tsugumi`"Do you have any idea what you're in for!?"`;
   waitForClick; clearText; marker; appendText; 
   `She couldn't go back any further.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi searched for the bed behind her with 
her hand.`;
   waitForClick; clearText; marker; appendText; 
   `With the tip of her outstretched hand, she 
brushed across the only dose of serum left.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"But we don't know that the Cure Virus will 
infect everyone."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Even you, you said you were special, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Please...I'm begging you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let me take a gamble...so that everyone can 
live."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I stood quietly in front of Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   `My legs were unsteady.`;
   waitForClick; clearText; marker; appendText; 
   `My vision was hazy.`;
   waitForClick; clearText; marker; appendText; 
   `But, I stepped forward strongly and stood up 
straight.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I looked deeply into Tsugumi's eyes.`;
   waitForClick; clearText; marker; appendText; 
   `I was trying to look inside to see what lay 
behind them.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T189`); appendText; 
   Tsugumi`"You won't be a normal person anymore!?"`;
   waitForClick; clearText; marker; sound(`T6T190`); appendText; 
   Tsugumi`"I don't want everyone to live with the pain 
that I have!!"`;
   waitForClick; clearText; marker; appendText; 
   `Large tears welled in her eyes.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T6T191`); appendText; 
   Tsugumi`"I hate myself!!"`;
   waitForClick; clearText; marker; sound(`T6T192`); appendText; 
   Tsugumi`"I...!!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
dimOff_ac = 1;
closeDimOverlay();
stopBGM();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: false });
closeDimInAndOutAndFilterAnim();
setMonoColorOverlayFadeOutDuration(17);
fadeOutMonoColorOverlay();
unSkippableDelay(4);
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   `SMACK!!`;
   waitForClick; clearText; marker; appendText; 
   `I slapped Tsugumi on the side of her face.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `She clenched her jaw tightly against the pain 
and glared at me.`;
   waitForClick; clearText; marker; appendText; 
   `Just then.`;
   waitForClick; clearText; marker; appendText; 
   `I pounced on the remaining dose of the serum, 
stealing it out of Tsugumi's hand.`;
   waitForClick; clearText; marker; appendText; 
   `I took it...`;
   waitForClick; clearText; marker; appendText; 
   `And...`;
   waitForClick; clearText; marker; appendText; 
   `Smashed it into a thousand pieces onto the 
cold hard surface of the examination room 
floor!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Crash....`;
   waitForClick; clearText; marker; appendText; 
   `It let out a sad little sound and splintered 
into powdery fragments.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 21, volume: 100 });
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T193`); appendText; 
   Tsugumi`"What are you doing!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's no other way."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We've only got one option open to us now."`;
   waitForClick; clearText; marker; sound(`T6T194`); appendText; 
   Tsugumi`"You idiot..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T195`); appendText; 
   Tsugumi`"Do you know what you've done...!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T196`); appendText; 
   Tsugumi`"You didn't have to do that..."`;
   waitForClick; clearText; marker; sound(`T6T197`); appendText; 
   Tsugumi`"You know I can't fight you...!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `With her lips trembling, and her shoulders 
shaking, Tsugumi sank down on to the bed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I know."`;
   waitForClick; clearText; marker; sound(`T6T198`); appendText; 
   Tsugumi`"You jerk..."`;
   waitForClick; clearText; marker; sound(`T6T199`); appendText; 
   Tsugumi`"You animal..."`;
   waitForClick; clearText; marker; sound(`T6T200`); appendText; 
   Tsugumi`"You're a coward..."`;
   waitForClick; clearText; marker; appendText; 
   `She nestled up close to me and began to cry.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't care what you say."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't care how much you curse me."`;
   waitForClick; clearText; marker; sound(`T6T201`); appendText; 
   Tsugumi`"Aaaggh..."`;
   waitForClick; clearText; marker; sound(`T6T202`); appendText; 
   Tsugumi`"You fool...you fool...."`;
   waitForClick; clearText; marker; sound(`T6T203`); appendText; 
   Tsugumi`"If, you mess this up...I'll never forgive 
you, Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's okay...it's going to be okay..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I promise you.... We're all going to get out 
of this...okay?"`;
   waitForClick; clearText; marker; sound(`T6T204`); appendText; 
   Tsugumi`"Aaaagh...uuuugh..."`;
   waitForClick; clearText; marker; sound(`T6T205`); appendText; 
   Tsugumi`"Waaaaaaah.......!"`;
   waitForClick; clearText; marker; appendText; 
   `She raised her voice in a loud wail.`;
   waitForClick; clearText; marker; appendText; 
   `She started crying like a small child.`;
   waitForClick; clearText; marker; appendText; 
   `She threw away everything that was holding 
her back and cried with everything she had.`;
   waitForClick; clearText; marker; appendText; 
   `You started operating the terminal...`;
   waitForClick; clearText; marker; appendText; 
   `The refining machine whirred to life.`;
   waitForClick; clearText; marker; appendText; 
   `The scanner also started to move.`;
   waitForClick; clearText; marker; appendText; 
   `Wiping away her tears, she stuck out her arm.`;
   waitForClick; clearText; marker; appendText; 
   `You gently took her arm, and drew some blood.`;
   waitForClick; clearText; marker; appendText; 
   `The whole time Tsugumi held onto my hand...`;
   waitForClick; clearText; marker; appendText; 
   `She continued to cry, letting out sobs 
occasionally.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   `My consciousness started to fade.`;
   waitForClick; clearText; marker; appendText; 
   `I lost all sense of time.`;
   waitForClick; clearText; marker; appendText; 
   `It was hard to tell if it was reality, or a 
dream.`;
   waitForClick; clearText; marker; appendText; 
   `(Am I alive?)`;
   waitForClick; clearText; marker; appendText; 
   `(Or am I dead?)`;
   waitForClick; clearText; marker; appendText; 
   `(Where am I thinking about all of these 
things?)`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; sound(`T6T206`); appendText; 
   You`"It's fine now..."`;
   waitForClick; clearText; marker; sound(`T6T207`); appendText; 
   You`"I think it worked..."`;
   waitForClick; clearText; marker; sound(`T6T208`); appendText; 
   You`"I've prepared the shots..."`;
   waitForClick; clearText; marker; sound(`T6T209`); appendText; 
   You`"So, next...it's up to you...Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   `............`;
   waitForClick; clearText; marker; sound(`T6T210`); appendText; 
   Tsugumi`"If..."`;
   waitForClick; clearText; marker; sound(`T6T211`); appendText; 
   Tsugumi`"You don't wake up from this..."`;
   waitForClick; clearText; marker; sound(`T6T212`); appendText; 
   Tsugumi`"I'll never forgive you..."`;
   waitForClick; clearText; marker; sound(`T6T213`); appendText; 
   Tsugumi`"Not as long as I live..."`;
   waitForClick; clearText; marker; appendText; 
   `...........`;
   waitForClick; clearText; marker; sound(`T6T214`); appendText; 
   Kid`"Tsugumi, where...are you going?"`;
   waitForClick; clearText; marker; sound(`T6T215`); appendText; 
   Tsugumi`"Well, I..."`;
   waitForClick; clearText; marker; sound(`T6T216`); appendText; 
   Tsugumi`"I left a friend of mine upstairs."`;
   waitForClick; clearText; marker; sound(`T6T217`); appendText; 
   Tsugumi`"I've got to go meet him. My best friend..."`;
   waitForClick; clearText; marker; sound(`T6T218`); appendText; 
   Tsugumi`"Djungarian Hamster..."`;
   waitForClick; clearText; marker; sound(`T6T219`); appendText; 
   Tsugumi`"His name is Chami..."`;
   waitForClick; clearText; marker; sound(`T6T220`); appendText; 
   Kid`"......Chami......?"`;
   waitForClick; clearText; marker; sound(`T6T221`); appendText; 
   Tsugumi`"See you."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `...............`;
   waitForClick; clearText; marker; appendText; 
   `.........`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
delay({ interval: 120 });
playBGM({ num: 24, volume: 100 });
bgload({ name: `BG34A1`, transition: 0 });
clock(`21:15`);
showTextbox();
text(() => {
   marker; appendText; 
   `I woke from my stupor.`;
   waitForClick; clearText; marker; appendText; 
   `A stale cold feeling...`;
   waitForClick; clearText; marker; appendText; 
   `I realized I had been sleeping sprawled on the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   `I slowly raised my body.`;
   waitForClick; clearText; marker; appendText; 
   `I tried opening and closing my fists..`;
   waitForClick; clearText; marker; appendText; 
   `Strange.`;
   waitForClick; clearText; marker; appendText; 
   `The movement left me with an uncomfortable 
sensation, like it wasn't my own.`;
   waitForClick; clearText; marker; appendText; 
   `I shook my head.`;
   waitForClick; clearText; marker; appendText; 
   `I tried slapping my cheek.`;
   waitForClick; clearText; marker; appendText; 
   `I breathed in the cold air and breathed out.  `;
   waitForClick; clearText; marker; appendText; 
   `Strange...`;
   waitForClick; clearText; marker; appendText; 
   `The inside of my head stayed dull and murky.`;
   waitForClick; clearText; marker; appendText; 
   `I dragged myself to consciousness, forcefully 
reeling myself back to clarity.`;
   waitForClick; clearText; marker; appendText; 
   `Putting my hands on the floor, I pulled up my 
heavy, aching body.`;
   waitForClick; clearText; marker; appendText; 
   `My feet faltered.`;
   waitForClick; clearText; marker; appendText; 
   `But somehow I managed to stand.`;
   waitForClick; clearText; marker; appendText; 
   `I looked around the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   `I saw several used syringes scattered on the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   `The Kid was still slumped against Coco's pod. `;
   waitForClick; clearText; marker; appendText; 
   `He looked disturbingly bad, just completely 
out of it.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was nowhere to be seen.`;
   waitForClick; clearText; marker; appendText; 
   `I wonder where she had gone to...?`;
   waitForClick; clearText; marker; appendText; 
   `You was half slumped over the terminal 
console, snoring away.`;
   waitForClick; clearText; marker; appendText; 
   `She looked like she was in some pain and was 
perspiring in her sleep.`;
   waitForClick; clearText; marker; appendText; 
   `Her hand was pushed against the panel as if 
she had been in the middle of typing.`;
   waitForClick; clearText; marker; appendText; 
   `On the monitor, auto-repeated strands of 
letters were lined up without meaning.`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; sound(`VSE03_06`); appendText; 
   //??
   Unk`"......! ......!"`;
   waitForClick; clearText; marker; appendText; 
   `What the...?`;
   waitForClick; clearText; marker; appendText; 
   `I heard a strange sound.`;
   waitForClick; clearText; marker; appendText; 
   `I re-inserted the voice converter into my ear.`;
   waitForClick; clearText; marker; appendText; 
   `...it wasn't a problem with the converter.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T6T222`); appendText; 
   //??
   Unk`"Come in..."`;
   waitForClick; clearText; marker; sound(`T6T223`); appendText; 
   //??
   Unk`"IBF 3, please respond."`;
   waitForClick; clearText; marker; sound(`T6T224`); appendText; 
   //??
   Unk`"This is the emergency rescue team from the 
Maritime Defense Force."`;
   waitForClick; clearText; marker; sound(`T6T225`); appendText; 
   //??
   Unk`"We are being directed by Insel null."`;
   waitForClick; clearText; marker; appendText; 
   `I could hear a voice coming from the speaker!?`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I hurried over to the terminal, and removed 
You's hands from it, taking over the control 
panel.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hello!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is the IBF infirmary...over!"`;
   waitForClick; clearText; marker; sound(`T6T226`); appendText; 
   //Mission Control
   Mission_Control`"IBF 3!? I repeat, this is the Maritime 
Defense Force emergency rescue team calling 
from the control center at Insel null."`;
   waitForClick; clearText; marker; sound(`T6T227`); appendText; 
   //Mission Control
   Mission_Control`"Can you hear me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah! Okay...loud and clear!"`;
   waitForClick; clearText; marker; appendText; 
   `I was somehow able to force out an answer.`;
   waitForClick; clearText; marker; appendText; 
   `Voices spilled out from the other end of the 
line.`;
   waitForClick; clearText; marker; appendText; 
   `'Hey, there are survivors down there!'`;
   waitForClick; clearText; marker; appendText; 
   `'I can't believe it!'`;
   waitForClick; clearText; marker; appendText; 
   `'That's amazing!'`;
   waitForClick; clearText; marker; appendText; 
   `That's what I wanted to say.`;
   waitForClick; clearText; marker; appendText; 
   `It seemed like You had been able to restore 
the communication lines...`;
   waitForClick; clearText; marker; sound(`T6T228`); appendText; 
   //Mission Control
   Mission_Control`"We're sending a rescue team immediately. Can 
you access the pool in IBF 3?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, yeah, it should be fine."`;
   waitForClick; clearText; marker; sound(`T6T229`); appendText; 
   //Mission Control
   Mission_Control`"Do you know how many survivors there are and 
where they are located?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In the examination room there are five... no 
six."`;
   waitForClick; clearText; marker; sound(`T6T230`); appendText; 
   //Mission Control
   Mission_Control`"Six. I copy."`;
   waitForClick; clearText; marker; sound(`T6T231`); appendText; 
   //Mission Control
   Mission_Control`"A rescue team is headed there in a private 
sector salvage vessel. When it arrives, 
I want you to follow its directions and 
get out of there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How long 'till they get here?"`;
   waitForClick; clearText; marker; sound(`T6T232`); appendText; 
   //Mission Control
   Mission_Control`"They're going as fast as they can, but it'll 
take about an hour."`;
   waitForClick; clearText; marker; appendText; 
   `One hour...`;
   waitForClick; clearText; marker; appendText; 
   `(Coco should be able to get out of the pod by 
then.)`;
   waitForClick; clearText; marker; appendText; 
   `(I just hope we have that long...)`;
   waitForClick; clearText; marker; sound(`T6T233`); appendText; 
   //Mission Control
   Mission_Control`"But, if something goes wrong..."`;
   waitForClick; clearText; marker; sound(`T6T234`); appendText; 
   //Mission Control
   Mission_Control`"There should be a small deep-exploration 
submarine left in the research facility. I 
hate to make you do this, but I want you to 
escape to that area."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"S-something goes wrong...? W-what do you 
mean...?"`;
   waitForClick; clearText; marker; sound(`T6T235`); appendText; 
   //Mission Control
   Mission_Control`"LeMU's partition strength threshold is 
already being exceeding."`;
   waitForClick; clearText; marker; sound(`T6T236`); appendText; 
   //Mission Control
   Mission_Control`"If one section implodes, there's the risk 
that another area could collapse and 
sinking could ensue."`;
   waitForClick; clearText; marker; sound(`T6T237`); appendText; 
   //Mission Control
   Mission_Control`"If that happens, we think there's a high 
possibility that heavy pieces could crash 
down on the research facility."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't say...?"`;
   waitForClick; clearText; marker; sound(`T6T238`); appendText; 
   //Mission Control
   Mission_Control`"Of course, we're doing everything we can to 
get to you before that happens."`;
   waitForClick; clearText; marker; sound(`T6T239`); appendText; 
   //Mission Control
   Mission_Control`"We're heading there, no matter what! 
So, please hang on a little longer!"`;
   waitForClick; clearText; marker; appendText; 
   `*Click* ...`;
   waitForClick; clearText; marker; appendText; 
   `The communications cut out suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, hey! W-wait a sec!"`;
   waitForClick; clearText; marker; appendText; 
   `I hit the 'Call' button repeatedly, but there 
was no answer.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn it, we can't open up communications 
from this side..."`;
   waitForClick; clearText; marker; appendText; 
   `I didn't have any other choice.`;
   waitForClick; clearText; marker; appendText; 
   `I began pouring through the manual on the 
side of communication terminal.`;
   waitForClick; clearText; marker; appendText; 
   `A mini-submersible for deep-sea exploration...`;
   waitForClick; clearText; marker; appendText; 
   `We hadn't found it when we'd searched the 
place...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, here it is!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Following the instructions, I used the control 
panel to call up information on the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's a small electric submersible..."`;
   waitForClick; clearText; marker; appendText; 
   `The submarine was in a separate 
sealed sector attached to IBF.`;
   waitForClick; clearText; marker; appendText; 
   `The specifications said it was a 'neutral 
buoyancy' miniature-submarine, for saturation 
diving.`;
   waitForClick; clearText; marker; appendText; 
   `The important thing was, it could be brought 
over to the pool by remote control.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If things get dangerous, I guess they want 
us to board this."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE04_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `I quickly went about setting up the remote 
control program, so that we could move the 
submarine at a moment's notice, if we had to.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All we have to do now is..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Get Tsugumi and Sora over here..."`;
   waitForClick; clearText; marker; appendText; 
   `(Sora...)`;
   waitForClick; clearText; marker; appendText; 
   `(How are we going to get Sora here...)`;
   waitForClick; clearText; marker; appendText; 
   `I was overcome by unease.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 4, volume: 100 });
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
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
   marker; appendText; 
   `——BOOOOOooooM!!!`;
   waitForClick; clearText; marker; appendText; 
   `Suddenly a low metallic crash reverberated 
throughout the installation.`;
   waitForClick; clearText; marker; appendText; 
   `The sound...seemed to come from above....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `An alarm sounded from the terminal and the 
screen changed.`;
   waitForClick; clearText; marker; appendText; 
   `'Warning: LeMU hull breach : Flooding'`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"LeMU....!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is bad..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That means...Tsugumi and Sora...!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I ran out into the corridor.`;
   waitForClick; clearText; marker; appendText; 
   `It was only slight, but the floor was 
trembling.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Agh..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `I suddenly became dizzy again.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   `Losing my balance, I crashed into a wall.`;
   waitForClick; clearText; marker; appendText; 
   `It seemed I wasn't completely recovered yet.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't have any idea if the antibodies were 
working or not...`;
   waitForClick; clearText; marker; appendText; 
   `Not a clue.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I...still gotta go..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I have to GO!!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `Squeezing out all the strength I could 
muster, I staggered toward the elevator.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 10, volume: 100 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `As soon as the door opened, I flew into the 
lift.`;
   waitForClick; clearText; marker; appendText; 
   `The elevator headed up.`;
   waitForClick; clearText; marker; sound(`T6T240`); appendText; 
   Announcement`"Depth 270 feet..."`;
   waitForClick; clearText; marker; sound(`T6T241`); appendText; 
   Announcement`"Depth 240 feet..."`;
   waitForClick; clearText; marker; sound(`T6T242`); appendText; 
   Announcement`"Depth 210 feet..."`;
   waitForClick; clearText; marker; appendText; 
   `Upwards...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `The elevator stopped.`;
   waitForClick; clearText; marker; appendText; 
   `Forcing open the door, I slipped into the 
pressurization chamber.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `The entrance had closed automatically.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I pressed on the intercom button repeatedly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora! Soraaa!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`T6T243`); appendText; 
   Sora`"Ta-Takeshi!? What are you...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! It's been a while!"`;
   waitForClick; clearText; marker; appendText; 
   `I realized how much I had missed that voice.`;
   waitForClick; clearText; marker; appendText; 
   `I waved to Sora as she appeared outside the 
window.`;
   waitForClick; clearText; marker; sound(`T6T244`); appendText; 
   Sora`"Wh-what are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, it's obvious isn't it? I came back."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's the damage?"`;
   waitForClick; clearText; marker; sound(`T6T245`); appendText; 
   Sora`"There's flooding in Zweite stock."`;
   waitForClick; clearText; marker; sound(`T6T246`); appendText; 
   Sora`"The warehouse area has been breached, and 
cracks are beginning to form in the elevator 
shaft. The situation is serious."`;
   waitForClick; clearText; marker; sound(`T6T247`); appendText; 
   Sora`"There is over six inches of flooding in 
almost all of the corridors."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where's Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T6T248`); appendText; 
   Sora`"She's...trapped in the infirmary..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What about the door?"`;
   waitForClick; clearText; marker; sound(`T6T249`); appendText; 
   Sora`"The electronic lock has been released. But..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It won't open 'cause of the water pressure?"`;
   waitForClick; clearText; marker; sound(`T6T250`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T6T251`); appendText; 
   Sora`"Takeshi, I'm going to start decompressing the 
chamber."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How long will it take?"`;
   waitForClick; clearText; marker; sound(`T6T252`); appendText; 
   Sora`"I will complete it as soon as possible."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I need to know how much time!"`;
   waitForClick; clearText; marker; sound(`T6T253`); appendText; 
   Sora`"If I hurry...12 hours."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tw-twelve hours!? We don't have that long!"`;
   waitForClick; clearText; marker; sound(`T6T254`); appendText; 
   Sora`"If we don't dissolve the nitrogen in your 
blood, you will get decompression sickness."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't care! Open that door now!"`;
   waitForClick; clearText; marker; sound(`T6T255`); appendText; 
   Sora`"I can't do that...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If we don't act fast, Tsugumi is dead!"`;
   waitForClick; clearText; marker; sound(`T6T256`); appendText; 
   Sora`"If we open that door now, due to the rapid 
decompression, the nitrogen in your 
bloodstream will form bubbles, causing blood 
clots, and in the worst case..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't care, you get that door OPEN NOW!!!"`;
   waitForClick; clearText; marker; sound(`T6T257`); appendText; 
   Sora`"I can't...it's too..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I found an emergency escape lever inside 
the chamber and I pulled on it.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   `I kicked the door.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
removeBG({ mode: WHITE, transition: 3 });
playSFX({ name: `SE07_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `——KABOooM!!!`;
   waitForClick; clearText; marker; appendText; 
   `There was a horrible noise, as though all the 
air inside had exploded.`;
   waitForClick; clearText; marker; appendText; 
   `My body was thrown from the room, along with 
the high-pressure gas that had been built up 
inside.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playSFX({ name: `SE10_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I was tossed like a piece of confetti, 
sliding and rolling along the floor all the 
way to the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   `My body crashed heavily against the wall.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Gaagh!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...eeeaaAAAAGGHH"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"WAAAAaaaah......"`;
   waitForClick; clearText; marker; appendText; 
   `Pain wracked my body.`;
   waitForClick; clearText; marker; appendText; 
   `And it wasn't because I had smacked into a 
wall.`;
   waitForClick; clearText; marker; appendText; 
   `Although I kept spewing out my breath, it 
felt like air kept bubbling up in my lungs.`;
   waitForClick; clearText; marker; appendText; 
   `A terrible exhaustion.`;
   waitForClick; clearText; marker; appendText; 
   `My whole body felt strung out.`;
   waitForClick; clearText; marker; appendText; 
   `My eyes felt swollen and painful.`;
   waitForClick; clearText; marker; appendText; 
   `The muscles in my limbs began to spasm.`;
   waitForClick; clearText; marker; appendText; 
   `Numbness. Pain. Headache.`;
   waitForClick; clearText; marker; appendText; 
   `I felt like I had no room to move.`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"*Urgh*....*uurrgh*..."`;
   waitForClick; clearText; marker; appendText; 
   `According to astronomers, humans can live for 
a short period of time even if they are 
thrown out of a spaceship into space.`;
   waitForClick; clearText; marker; appendText; 
   `But fish brought quickly up from the sea 
depths to earth die instantly, because the 
pressure difference causes their organs to 
burst.`;
   waitForClick; clearText; marker; appendText; 
   `So was I an astronaut, or...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T258`); appendText; 
   Sora`"Takeshi, your voice converter!!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I felt a splitting pain deep in both ears.`;
   waitForClick; clearText; marker; appendText; 
   `Repelled by my eardrums, the voice converters 
flew out of my ears.`;
   waitForClick; clearText; marker; appendText; 
   `I hurriedly, held both ears with the palms of 
my hands and knocked them, as though trying 
to drain water from them.`;
   waitForClick; clearText; marker; sound(`T6T259`); appendText; 
   Sora`"......! .........!"`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't hear what Sora was screaming.`;
   waitForClick; clearText; marker; appendText; 
   `All I could do was lie on the floor, trying 
to suck in air.`;
   waitForClick; clearText; marker; appendText; 
   `Like a fish that had been pulled out of the 
water...`;
   waitForClick; clearText; marker; appendText; 
   `A few minutes passed...`;
   waitForClick; clearText; marker; appendText; 
   `.........`;
   waitForClick; clearText; 
});
hideTextbox();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   `The earphones that I had been wearing had 
broken in half.`;
   waitForClick; clearText; marker; appendText; 
   `I got up weakly.`;
   waitForClick; clearText; 
});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I saw some extra voice converters on the edge 
of the console.`;
   waitForClick; clearText; marker; appendText; 
   `I crammed them forcefully into my ears.`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T260`); appendText; 
   Sora`"Takeshi...!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T261`); appendText; 
   Sora`"Takeshi...are you okay?"`;
   waitForClick; clearText; marker; appendText; 
   `Tears welling up in her eyes, Sora looked at 
me with a pained expression.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, okay. I'm still alive."`;
   waitForClick; clearText; marker; appendText; 
   `At least my eardrums hadn't burst...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 11, volume: 100 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I left HIMMEL, and started heading up.`;
   waitForClick; clearText; marker; appendText; 
   `I checked the screen on my PDA.`;
   waitForClick; clearText; marker; appendText; 
   `It showed a map of LeMU, and a blinking dot 
showed me where Tsugumi was...`;
   waitForClick; clearText; marker; appendText; 
   `From the console at HIMMEL I had installed a 
program to link data from LeMU's sensors to 
my PDA.`;
   waitForClick; clearText; marker; appendText; 
   `Sora had prepared it for me.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Don't you stop me, you hear? No matter what 
you say I'm going."`;
   waitForClick; clearText; marker; sound(`T6T262`); appendText; 
   Sora`"Alright, Takeshi. It seems that you've made 
up your mind..."`;
   waitForClick; clearText; marker; sound(`T6T263`); appendText; 
   Sora`"I'll stay here in HIMMEL, to keep track of 
the situation at LeMU, and send updates to 
your PDA."`;
   waitForClick; clearText; marker; sound(`T6T264`); appendText; 
   Sora`"I'll do what I can to stop the partitions 
from falling...to see that this place stays 
together, even a little while longer. So—"`;
   waitForClick; clearText; marker; sound(`T6T265`); appendText; 
   Sora`"Promise me...that you'll come back here with 
Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, it's a promise."`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Running up the stairs, I looked down at my 
PDA again.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP2F_B1`, transition: 30 });
bgload({ name: `MAP2F_B2`, transition: 20 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 5 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   `The life sign in the infirmary wasn't moving.`;
   waitForClick; clearText; marker; appendText; 
   `The map showed that the surrounding corridors 
were flooded and that there was no way to 
access the area.`;
   waitForClick; clearText; marker; appendText; 
   `But...`;
   waitForClick; clearText; marker; appendText; 
   `I knew what I had to do.`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_B1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `The area I wanted to go was filled with water.`;
   waitForClick; clearText; marker; appendText; 
   `But because the watertight doors had shut on 
all sides of the floor, the water had stopped 
flowing.`;
   waitForClick; clearText; marker; appendText; 
   `In that case...I thought I could make it.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE02_05`, a1: 1, volume: 100 });
waitForSFX();
playBGM({ num: 19, volume: 100 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG06A`, transition: 0 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `I went to the emergency corridor leading 
under the infirmary and dove in.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `How many times had I gone back and forth down 
this corridor.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `My PDA backlight shone a weak light on the 
area before me.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `Even then...`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I wondered how many more feet it was, but my 
body remembered.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `Even if I closed my eyes, I knew I could make 
it there.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Turning out the light, I propelled myself 
forward through the darkness.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I wouldn't let the darkness overtake me 
anymore.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `It wasn't something that I would run away from 
afraid of...`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I would take the darkness inside of me, and 
make it my own...`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `That's why I wasn't afraid.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `There was nothing to be afraid of.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `SPLASH!!`;
   waitForClick; clearText; marker; appendText; 
   `Entering the room from the hole of the 
elevator shaft, I quickly climbed into the 
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi! Tsugumi!"`;
   waitForClick; clearText; marker; sound(`T6T266`); appendText; 
   Tsugumi`".........!!"`;
   waitForClick; clearText; marker; appendText; 
   `She was in a corner of the room, hugging her 
knees to herself.`;
   waitForClick; clearText; marker; appendText; 
   `At her feet was the slightly wet, furry 
figure of Chami.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T267`); appendText; 
   Tsugumi`"Ta-Takeshi...what...WHY...!?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi looked at me with wide-open eyes.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you so worked up about, Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I came back, right now! I came back for you!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I guess I'm a bit late, but..."`;
   waitForClick; clearText; marker; appendText; 
   `I scratched my nose.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T268`); appendText; 
   Tsugumi`"Y-you idiot! What are you doing here!!?"`;
   waitForClick; clearText; marker; sound(`T6T269`); appendText; 
   Tsugumi`"Do you...want do die!?"`;
   waitForClick; clearText; marker; appendText; 
   `One after the other, large tears started 
falling from her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Listen..."`;
   waitForClick; clearText; marker; appendText; 
   `I was laughing as I spoke.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I came back for something I forget, um, yeah 
that's it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T270`); appendText; 
   Tsugumi`"You...forgot...?"`;
   waitForClick; clearText; marker; appendText; 
   `Picking up Chami in both hands, she stood up 
slowly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. Left it here, silly me..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"My irreplaceable..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"More important to me than anything 
else...friend..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T6T271`); appendText; 
   Tsugumi`"...how..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T272`); appendText; 
   Tsugumi`"How...did you get here?"`;
   waitForClick; clearText; marker; appendText; 
   `She looked at me as though she still couldn't 
believe I was actually there.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I'm a good swimmer."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Actually, I swam down and back in a 25 yard 
pool...once..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I kicked off wall coming back, but still..."`;
   waitForClick; clearText; marker; appendText; 
   `I pretended to swim as I spoke.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait, I think I just beat my record..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey? Do you remember the furthest I've ever 
swam underwater?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T273`); appendText; 
   Tsugumi`"...One..."`;
   waitForClick; clearText; marker; sound(`T6T274`); appendText; 
   Tsugumi`"103 feet...?"`;
   waitForClick; clearText; marker; appendText; 
   `She answered, her expression beginning to 
break down.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You think I'd die in a place like this?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I mean..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I still haven't gotten enough abuse from you 
yet."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I want to hear what you've got to say, from 
here on out..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T275`); appendText; 
   Tsugumi`"Aaagh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I came for you, Tsugumi."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T276`); appendText; 
   Tsugumi`"Takeshi...Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   `We ran to one another.`;
   waitForClick; clearText; marker; appendText; 
   `Reaching out our hands...`;
   waitForClick; clearText; marker; appendText; 
   `We came together.`;
   waitForClick; clearText; marker; appendText; 
   `I gently wiped away the teardrops around her 
mouth with my lips.`;
   waitForClick; clearText; marker; appendText; 
   `And in the center of the infirmary we held 
each other close, embracing firmly.`;
   waitForClick; clearText; marker; appendText; 
   `Riding on both of our hands Chami snorted and 
looked at us.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, let's go back...together."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T277`); appendText; 
   Tsugumi`"Okay..."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi softly held Chami and hid him inside 
the chest of her clothing.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   `We had no time to lose.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `It was only a matter of time before this place 
collapsed in on itself.`;
   waitForClick; clearText; marker; appendText; 
   `We had to hurry.`;
   waitForClick; clearText; marker; appendText; 
   `I knew that...`;
   waitForClick; clearText; marker; appendText; 
   `But I wasn't in a rush.`;
   waitForClick; clearText; marker; appendText; 
   `We would make it.`;
   waitForClick; clearText; marker; appendText; 
   `I'd never say quit.`;
   waitForClick; clearText; marker; appendText; 
   `I'd never say it was too late.`;
   waitForClick; clearText; marker; appendText; 
   `I knew it was going to be okay.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Pulling on Tsugumi's hand, I flew like the 
wind.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG25B3`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
removeBG({ mode: WHITE, transition: 2 });
stopSFX()
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T278`); appendText; 
   Sora`"Takeshi, Tsugumi!"`;
   waitForClick; clearText; marker; sound(`T6T279`); appendText; 
   Sora`"I've prepared the chamber for you get inside 
quickly!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I opened up the sliding door and rushed to 
the other side of the glass.`;
   waitForClick; clearText; 
});
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `We went in the compression chamber for IBF.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU09AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T280`); appendText; 
   Tsugumi`"Pant...pant..."`;
   waitForClick; clearText; marker; appendText; 
   `Slouching back in a chair, Tsugumi struggled 
to catch her breath.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Pant...pant..."`;
   waitForClick; clearText; marker; appendText; 
   `I didn't think that I would be able to move 
for a while.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora.... You're coming too..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's wrong...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You can't come no matter what?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   `The door to the room shut automatically.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `The compression started...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   `Sora stood silently outside of the chamber.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora!"`;
   waitForClick; clearText; marker; appendText; 
   `I started to open up the door.`;
   waitForClick; clearText; marker; appendText; 
   `Once again I reached out to the emergency 
lever on the side of the door.`;
   waitForClick; clearText; 
});
if (l_went_outside_as_sora_suggests_in_3rd_day == 0) goto(lbl_00001a3c);
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6T281`); appendText; 
   Sora`"Takeshi...it is okay."`;
   waitForClick; clearText; marker; appendText; 
   `Sora smiled softly from the other side of the 
window.`;
   waitForClick; clearText; marker; appendText; 
   `She scrunched her eyebrows as if perplexed.`;
   waitForClick; clearText; marker; appendText; 
   `Then slowly she shook her head from side to 
side.`;
   waitForClick; clearText; marker; sound(`T6T282`); appendText; 
   Sora`"I will be fine, don't worry about me."`;
   waitForClick; clearText; marker; sound(`T6T283`); appendText; 
   Sora`"I told you before, didn't I?"`;
   waitForClick; clearText; marker; sound(`T6T284`); appendText; 
   Sora`"I am not here."`;
   waitForClick; clearText; marker; sound(`T6T285`); appendText; 
   Sora`"And yet I am everywhere."`;
   waitForClick; clearText; marker; sound(`T6T286`); appendText; 
   Sora`"I am here, and at the same time there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6T287`); appendText; 
   Sora`"I do not exist."`;
   waitForClick; clearText; marker; sound(`T6T288`); appendText; 
   Sora`"And yet I exist everywhere."`;
   waitForClick; clearText; marker; sound(`T6T289`); appendText; 
   Sora`"There will come a time, when we will meet 
again."`;
   waitForClick; clearText; marker; sound(`T6T290`); appendText; 
   Sora`"If you die, we will never be able to meet 
again."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6T291`); appendText; 
   Sora`"So please..."`;
   waitForClick; clearText; marker; sound(`T6T292`); appendText; 
   Sora`"Please don't ask me anything now."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6T293`); appendText; 
   Sora`"Believe me Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6T294`); appendText; 
   Sora`"Thank you."`;
   waitForClick; clearText; marker; appendText; 
   `Her RSD image started to warp and break up.`;
   waitForClick; clearText; marker; appendText; 
   `A fog enveloped Sora from behind.`;
   waitForClick; clearText; marker; appendText; 
   `Sora's image changed to a rainbow hue.`;
   waitForClick; clearText; marker; appendText; 
   `And then even the rainbow...`;
   waitForClick; clearText; marker; appendText; 
   `Started to fade.`;
   waitForClick; clearText; marker; appendText; 
   `Sora was disappearing...`;
   waitForClick; clearText; marker; appendText; 
   `Watching this happen, I wondered where she 
really was?`;
   waitForClick; clearText; marker; appendText; 
   `Would there really come a time when we would 
meet again?`;
   waitForClick; clearText; marker; appendText; 
   `All I could do was trust her last words to me.`;
   waitForClick; clearText; 
});
goto(lbl_00001a4f);
let lbl_00001a3c;
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   `But why would she just stand there without 
moving.`;
   waitForClick; clearText; marker; appendText; 
   `She wouldn't make it...`;
   waitForClick; clearText; marker; appendText; 
   `Water...`;
   waitForClick; clearText; marker; appendText; 
   `Water was flooding into HIMMEL's control room.`;
   waitForClick; clearText; marker; appendText; 
   `Her image broke up and disappeared...`;
   waitForClick; clearText; marker; appendText; 
   `A fog enveloped Sora, covering her over. She 
disappeared without a word.`;
   waitForClick; clearText; 
});
let lbl_00001a4f;
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `An hour later.`;
   waitForClick; clearText; marker; appendText; 
   `The room on the other side of the compression 
chamber had already filled with water.`;
   waitForClick; clearText; marker; appendText; 
   `The compression finished...`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi and I transferred to the lift, and 
went down to IBF`;
   waitForClick; clearText; marker; appendText; 
   `.........`;
   waitForClick; clearText; 
});
bgload({ name: `BG33A6`, transition: 20 });
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
bgload({ name: `BG33A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `As soon as we entered the room, the lights 
came on.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T295`); appendText; 
   Tsugumi`"It's quiet..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, you're right..."`;
   waitForClick; clearText; marker; appendText; 
   `By then the flooding was probably fairly 
advanced in the area above us.`;
   waitForClick; clearText; marker; appendText; 
   `Perhaps some of the sections had started to 
collapse.`;
   waitForClick; clearText; marker; appendText; 
   `But the surface of the pool, hardly even 
rippled.`;
   waitForClick; clearText; marker; appendText; 
   `As if there were nothing going on.`;
   waitForClick; clearText; marker; appendText; 
   `I wondered how much longer the place would 
hold...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T296`); appendText; 
   Tsugumi`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The time...we're past the scheduled time."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG35A2`, transition: 20 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG35A1`, transition: 20 });
clock(`23:3`);
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T297`); appendText; 
   Tsugumi`"What schedule?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Actually, there's a rescue team on its way."`;
   waitForClick; clearText; marker; sound(`T6T298`); appendText; 
   Tsugumi`"Rescue...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. They called themselves the Maritime 
Defense Force, I think."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You was able to open up the communications 
line, so we got a hold of Insel null."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `I turned the handle on the door of the 
examination room.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG34A2`, transition: 20 });
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `The lights came back on in the room. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T299`); appendText; 
   Tsugumi`"Ah..."`;
   waitForClick; clearText; marker; sound(`T6T300`); appendText; 
   Tsugumi`"They aren't here...nobody's here!?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi searched around the examination room.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Then she checked each of the capsule pods.`;
   waitForClick; clearText; marker; appendText; 
   `I also did a quick search of the room.`;
   waitForClick; clearText; marker; appendText; 
   `Coco's pod was open.`;
   waitForClick; clearText; marker; appendText; 
   `The manual for the control panel was opened 
to the same page.`;
   waitForClick; clearText; marker; appendText; 
   `The used bottles of serum lay strewn on the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You, the Kid, Coco, that 
researcher...they're all gone."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T301`); appendText; 
   Tsugumi`"Where did they go?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was starting to panic.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, hold on. I'm sure the rescue team found 
them."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Just then a voice that I recognized came over 
the speaker.`;
   waitForClick; clearText; marker; appendText; 
   `I hit the 'Talk' button.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was next to me staring at the monitor.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; sound(`T6T302`); appendText; 
   //Mission Control
   Mission_Control`"This is Insel null Control. Please respond."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is the examination room in IBF 3, over!"`;
   waitForClick; clearText; marker; sound(`T6T303`); appendText; 
   //Mission Control
   Mission_Control`"Thank God...that's where you were."`;
   waitForClick; clearText; marker; sound(`T6T304`); appendText; 
   //Mission Control
   Mission_Control`"A little while ago we got a message from the 
dispatch team that they couldn't find you. 
You had us worried there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm sorry, I was out for a bit."`;
   waitForClick; clearText; marker; sound(`T6T305`); appendText; 
   //Mission Control
   Mission_Control`"We were able to rescue the other three 
people in the examination room, and they are 
being cared for in the salvage vessel."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Is everyone okay!?"`;
   waitForClick; clearText; marker; sound(`T6T306`); appendText; 
   //Mission Control
   Mission_Control`"We can't say for sure...their conditions are 
serious."`;
   waitForClick; clearText; marker; sound(`T6T307`); appendText; 
   //Mission Control
   Mission_Control`"We're fighting against time. The submersible 
is going to surface soon, and we'll transfer 
them to a floating medical center."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay. You take care of them."`;
   waitForClick; clearText; marker; sound(`T6T308`); appendText; 
   //Mission Control
   Mission_Control`"How many people are there with you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Two, including me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The other person didn't make it......"`;
   waitForClick; clearText; marker; sound(`T6T309`); appendText; 
   //Mission Control
   Mission_Control`"Roger. We'll send the team back there as 
soon as we can."`;
   waitForClick; clearText; marker; sound(`T6T310`); appendText; 
   //Mission Control
   Mission_Control`"But there is the possibility that the team 
won't be able to approach IBF if it starts to 
break up."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've got the exploration vessel standing by. 
I can call it here by remote control, right?"`;
   waitForClick; clearText; marker; sound(`T6T311`); appendText; 
   //Mission Control
   Mission_Control`"Ah, yeah...I'm sorry to have to ask you to 
use it, but there's nothing else we can do."`;
   waitForClick; clearText; marker; sound(`T6T312`); appendText; 
   //Mission Control
   Mission_Control`"We'll do the best we can. Whatever happens, 
you hang in there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Roger."`;
   waitForClick; clearText; marker; appendText; 
   `*Click*...`;
   waitForClick; clearText; marker; appendText; 
   `The communications cut out.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T313`); appendText; 
   Tsugumi`"What's that supposed to mean?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You weren't listening?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It means..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All this would be for nothing, if everyone 
died while they were waiting for us."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The rescue team decided to put a higher 
priority on getting You, the Kid and Coco, to 
the hospital, rather than waiting for us."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T314`); appendText; 
   Tsugumi`"Yeah...you're right..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `The color in Tsugumi's face slowly returned to 
normal, as her sense of panic faded.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I might just take a nap until the next bus 
comes..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T315`); appendText; 
   Tsugumi`"B-bus?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you think the bus is going to be late, 
call a cab for me, will you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T316`); appendText; 
   Tsugumi`"T-taxi?"`;
   waitForClick; clearText; marker; sound(`T6T317`); appendText; 
   Tsugumi`"What are you talking about...Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you push that button, a small submarine 
will come over here by remote control—Our 
very own private taxi should come here from 
another area of IBF."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T318`); appendText; 
   Tsugumi`"O-okay..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm just glad that everyone's alright..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   `The adrenaline that had kept me going earlier, 
suddenly ran out.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm just...so...glad..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T319`); appendText; 
   Tsugumi`"Ta-Takeshi!?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
removeFG({ id: 1, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `My legs suddenly gave out...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_10`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   `My head struck the hard surface of the floor...`;
   waitForClick; clearText; marker; appendText; 
   `But before I could feel anything...`;
   waitForClick; clearText; marker; appendText; 
   `I slipped into a deep sleep, as Tsugumi held 
me in her tight embrace.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`TT7A`);
