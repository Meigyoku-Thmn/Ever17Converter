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
   `We had finished making our rounds.`;
   `The Kid had gone back earlier with You and Coco into the examination room.`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi and I were in the corridor talking.`;
   Takeshi`"No other options, huh...?"`;
   Tsugumi(T6T000)`"Yeah...?"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T001)`"So, what are we going to do?"`;
   Takeshi`"What do you mean...er, I'm thinking about that right now."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T002)`"Really...?"`;
   `Tsugumi smiled slightly.`;
   Tsugumi(T6T003)`"You really like to waste your time, don't you Takeshi."`;
   Takeshi`"T-this isn't wasting time."`;

});
fgload({ id: 1, name: `TU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T004)`"Ha, ha, sorry...but..."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T005)`"But it seems just like something you'd do."`;
   Takeshi`"Thinking about things that are impossible?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `When I said that Tsugumi puffed up her cheeks.`;
   Tsugumi(T6T006)`"No! ...I don't mean that."`;
   Tsugumi(T6T007)`"Why do you have to tease me..."`;
   Takeshi`"I never thought I'd hear YOU say that."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"I have no idea what to do, but..."`;
   Takeshi`"We'll find a way out of this somehow. We've made it this far."`;
   `Tsugumi laughed at my efforts to sound positive.`;

});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T008)`"Yeah...I'm sure we'll be 'fine'."`;
   Takeshi`"Yeah that's right...we're going to be okay."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `From a distance a roaring sound reverberated throughout the installation. It seemed that it was transmitted through the water to IBF.`;
   `I wondered if that was the sound of the thermal vents.`;
   `Or was it coming from LeMU...`;
   `The situation surrounding us was exceedingly grim, and we were only left with the option of postponing the inevitable.`;
   Takeshi`"Hey, Tsugumi...about that old guy..."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T009)`"The researcher? Too bad, huh..."`;
   Takeshi`"Yeah. But I was thinking, why was he the only one left here? Everyone else got out earlier, right?"`;
   Takeshi`"Well, besides those guys that didn't make it..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T010)`"I'm sure some kind of circumstances kept him from escaping. And circumstances that kept him alive..."`;
   Takeshi`"Circumstances?"`;
   Tsugumi(T6T011)`"Do you remember the entry logs we found on the terminals?"`;
   Takeshi`"Yeah, there were a few of them...nn? Wait, are you saying...!?"`;
   Tsugumi(T6T012)`"You remember? That journal entry we found."`;
   Takeshi`"Oh, it was him..."`;
   `His last words had been 'Take care of my daughter.'`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T013)`"I think that was Coco's dad."`;
   Takeshi`"T.Y....Mr. Yagami, huh? He probably knew that Coco was here when the accident hit LeMU."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T014)`"Yeah, I'm sure...he did."`;
   Tsugumi(T6T015)`"Maybe he survived because he was thinking about his daughter."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG33A2`, transition: 20 });
showTextbox();
text(() => {
   `The two of us leaned against a wall and looked calmly at the waves lapping in the pool.`;

});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"What do you think about Coco's condition?"`;
   Takeshi`"Why did Coco get TB anyway...?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T016)`"Well...Coco had been to IBF at least once before May 1st."`;
   Tsugumi(T6T017)`"Maybe there was already an outbreak of the TB Virus at that time."`;
   Takeshi`"What?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T018)`"TB's incubation period is two to seven days.... That's consistent with the timing of Coco's symptoms, isn't it?"`;
   Takeshi`"Y-yeah...I guess you're right."`;
   Takeshi`"When Coco came to IBF she was probably exposed to TB somehow..."`;
   `Nodding to myself, I figured that had to be the most probable possibility.`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T019)`"However, everyone at IBF probably didn't realize the terrible truth that TB was spreading inside the installation."`;
   Tsugumi(T6T020)`"When they found that a few people had become infected, they must have panicked...and the situation got out of hand."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T021)`"As people started dying, the staff here tried to escape and when the escape pods ran out..."`;
   Takeshi`"W-wait! That means...!"`;
   Takeshi`"That alarm meant..."`;
   Takeshi`"The alarm that we heard on May 1, in Lemu was...!?"`;
   `I couldn't stop myself from asking. Tsugumi frowned and continued.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T022)`"Probably one of the terrified staff members, forced their way up from IBF to LeMU..."`;
   Tsugumi(T6T023)`"Without following the standard decompression procedure, they opened the emergency corridors and fled up to Insel null."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T024)`"Those corridors remained open for a while."`;
   Takeshi`"And the built-up gas inside the complex quickly escaped, bringing down the pressure, a section of LeMU started flooding, and the watertight doors closed."`;
   Takeshi`"And that's how we ended up getting stuck here...?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T025)`"Yup, that's right."`;
   Tsugumi(T6T026)`"Meaning, the alarm that went off in LeMU..."`;
   Tsugumi(T6T027)`"Was for the abnormal installation pressure readings and the virus outbreak - You could say it served a couple of functions."`;
   Takeshi`"I can't believe it...!"`;
   `All I could do was sigh in frustration.`;
   Takeshi`"That's the reason that no rescue team is coming here...?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T028)`"I'm sure that's it."`;
   `With a solemn face, Tsugumi nodded.`;
   Tsugumi(T6T029)`"If the TB Virus got out to the world outside, it would be devastating."`;
   Tsugumi(T6T030)`"So even if there were survivors in here, it would be necessary to lock them up at the bottom of the ocean."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T031)`"Leiblich Pharmaceuticals may be even trying to hide the fact that there was an accident at all."`;
   Tsugumi(T6T032)`"All the while knowing that we're trapped in here..."`;
   Takeshi`"............"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I kicked at a rusted bolt that had fallen at my feet.`;
   `It bounced into the pool with a splash, and slowly sank.`;

});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   `Then we walked around, making stomping sounds as I went.`;
   `The sounds of our feet echoed loudly off the walls of the narrow corridor.`;
   Takeshi`"Well, if that's the case then..."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T033)`"Then?"`;
   Takeshi`"Well, you know?"`;
   Takeshi`"That means we've got to get ourselves back up to the surface no matter what!"`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T034)`"Hmmm, why's that?"`;
   Takeshi`"So that we can tell the media all about what's happened here, that's why!"`;
   Takeshi`"We're going to put it to Leiblich!"`;
   Takeshi`"No matter what, okay?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T035)`"Okay."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T036)`"Heh, heh.... That's more like the Takeshi I know."`;
   `Puffing out her cheeks slightly, Tsugumi looked at me.`;
   Takeshi`"Really?"`;
   Tsugumi(T6T037)`"Yeah, me too..."`;

});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T038)`"I want to go with you, Takeshi...together..."`;
   Takeshi`"Huh? Did you say something?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T039)`"I-it's nothing."`;
   `For some reason Tsugumi's face was red.`;

});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Huh...?"`;
   `I felt strange and stopped suddenly.`;
   `I looked up.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T040)`"Takeshi...what's wrong?"`;
   `Tsugumi followed my gaze to the ceiling.`;
   `There was nothing there.`;
   `She returned her gaze to me.`;
   Takeshi`"Uh..."`;
   Takeshi`"I'm not really sure, but..."`;
   Takeshi`"For some reason it's hard to breathe all of a sudden..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T041)`"Takeshi......?"`;
   Tsugumi(T6T042)`"Your...nose is bleeding..."`;
   Takeshi`"?"`;

});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T043)`"You've got a nose bleed."`;
   Takeshi`"Eh?"`;
   `I hurriedly wiped my nose with my hand.`;
   `My upper lip was wet with something.`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T044)`"He-hey? Are you okay?"`;
   `Tsugumi looked worriedly at my face.`;
   Takeshi`"F-fine, I'm fine..."`;
   `Looking up, and wiping under my nose, I replied.`;
   Takeshi`"I wasn't thinking anything sexual! Absolutely! Positively!"`;

});
fgload({ id: 1, name: `TU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T045)`"I-it's not like I...I don't care about that!"`;
   Takeshi`"Well, alright then..."`;
   `The blood wouldn't stop flowing.`;
   Takeshi`"Aaah, I look like such a dork."`;
   Tsugumi(T6T046)`"Who cares what you look like."`;
   Takeshi`"I care. Looking like this in front of, you, I...huuuh....huuuh..."`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T047)`"Huuuh?"`;
   Tsugumi(T6T048)`"Huuuuh, what?"`;
   Tsugumi(T6T049)`"Come on, what...?"`;
   `Tsugumi started shaking my shoulder.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
shakeScreen();
showTextbox();
text(() => {
   Takeshi`"Wuuuuaaaachoooo!!"`;
   `I let out a huge sneeze.`;

});
removeBG({ mode: RED, transition: 3 });
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `SPLAT!${noWait}`;

});
bgload_keepFg({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   Append``;

});
showTextbox();
text(() => {
   `Blood started dripping not only from my nose, but my mouth as well.`;
   `Red flecks splattered on the floor and walls.`;

});
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
showTextbox();
text(() => {
   Takeshi`"Whooah...!"`;
   `I was suddenly assaulted by dizziness.`;
   `The world felt like it was spinning.`;
   Takeshi`"For some reason, I can't keep steady..."`;
   `Although I didn't feel so great, it seemed funny for some reason and I laughed.`;
   Takeshi`"A, ha, ha, ha...what's with this?"`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T050)`"Takeshi!"`;
   Tsugumi(T6T051)`"Takeshi, hang in there!"`;
   Takeshi`"Huh...quit shaking me, it's making me feel ill."`;

});
fgload({ id: 1, name: `TU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T052)`"S-sorry..."`;
   Takeshi`"Hey, I'm fine. Don't worry, Tsugumi."`;

});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T053)`"You're not fine at all!"`;
   Tsugumi(T6T054)`"You're bleeding all over, Takeshi!!"`;

});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T055)`"We should go to the examination room, and take a look at you at once."`;
   Takeshi`"Uh, yeah. *cough*"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(This isn't good...)`;
   `(I gotta get a hold of myself...)`;
   `I tried to calm myself down.`;
   `With Tsugumi supporting me, I walked down the corridor.`;
   `Just then a door flew open in front of us.`;
   `It was the examination room. Out of it flew You.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T056)`"Tsugumi, Takeshi! The Kid! The Kid's in bad shape!"`;
   `Her face changed color as she shouted.`;
   Tsugumi(T6T057)`"The Kid? What's wrong?"`;
   You(T6T058)`"He's in trouble! It'll be faster if you come in and look...ah!"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T059)`"No...Takeshi, you too!?"`;
   `You noticed the shape I was in and her face turned pale.`;
   Tsugumi(T6T060)`"Takeshi 'too'?"`;
   Takeshi`"What are you talking about...?"`;

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
   `The Kid was sleeping on the L-MRI table.`;
   `His results from the scan came up on the control panel's monitor.`;
   `"Tief Blau 2017-Rev.17"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T061)`"The Kid's been infected with Tief Blau, too..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"How could that happen!?"`;
   Takeshi`"Why? He's been with us the whole time. So why did he get...?"`;
   Takeshi`"Why, and where did he get TB!? ...*cough*"`;
   `I mumbled to myself, finding it hard to breathe all of a sudden.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T062)`"Takeshi, just calm down..."`;
   Tsugumi(T6T063)`"None of us know where he got exposed to it."`;
   Takeshi`"........."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU11ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T064)`"Takeshi, I want you to get scanned, too."`;
   Takeshi`"W-why!?"`;

});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T065)`"Just let me scan you...please."`;
   Tsugumi(T6T066)`"It isn't normal to start spewing blood from your nose and mouth, okay?"`;
   Takeshi`"Yeah I know...but..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi gently took the Kid off of the L-MRI examination table and forcefully put me up on it.`;
   `Pressing on both of my shoulders, she forced me down on the table.`;
   Takeshi`"Y-you don't have to do that...fine, I'll let you check me."`;
   `I brushed Tsugumi's hands off of me.`;
   Takeshi`"See? I'm lying down now."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T067)`"Okay...You, please start the scan."`;
   You(T6T068)`"O-okay."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You started operating the control panel.`;

});
playSFX({ name: `SE03_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The scanning light from the laser crawled slowly up my body.`;
   `After a while...`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T069)`"The scan's finished..."`;
   Takeshi`"W-what's it say?"`;
   `My voice cracked when I asked the question.`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Takeshi`"A-at least say something, You."`;
   You(T6T070)`"The results are..."`;
   `You stared at the panel without moving.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU13ADM`, name2: `YU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T071)`"The results are black...You're infected too, Takeshi."`;
   `Tsugumi read the monitor for me.`;
   Takeshi`"......!! R...really...?"`;
   Tsugumi(T6T072)`"I'm sorry to say it, but..."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T073)`"Since coming to IBF... No it must've been longer, since coming to LeMU, all of us..."`;
   Tsugumi(T6T074)`"Have been infected for quite some time."`;
   `Tsugumi hung her head down and let out a big sigh. `;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Damn it..."`;
   `I stood up from the L-MRI, and was assaulted by a terrible dizzy spell.`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   Takeshi`"Whooaaah..."`;

});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T075)`"Takeshi, watch out...!"`;
   `The one to steady me from falling was the Kid.`;

});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But from the looks of it, his legs weren't very steady either.`;
   `Putting my hand on a wall, I somehow held myself up.`;
   Kid(T6T076)`"We're in trouble, huh...?"`;
   Takeshi`"Y-you can say that again..."`;

});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T077)`"If only we had that serum...the orange one...agh."`;
   `The Kid pressed his hand to his face.`;
   `As he wiped his mouth, I noticed a thin trail of blood there.`;
   Takeshi`"Y-yeah, the serum.... If they've been handling TB here at IBF, they should have some of that."`;
   Takeshi`"If we use that, then the symptoms should lessen..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I went around the examination room, and checked to see if I could find it anywhere.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADS`, name2: `YU18ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi and You hurriedly started checking through the medicine cabinets.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The Kid sank to the floor. He didn't look very good.`;
   `His breathing was ragged and he had lines of pain etched on his face.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T078)`"It's no good. It doesn't look like there's any here."`;
   Tsugumi(T6T079)`"I can't find any either."`;
   `The two of them were shaking their heads.`;
   Takeshi`"Damn...what are we going to do?"`;
   You`"........."`;
   Tsugumi`"........."`;
   Pipi(PIPI_04)`"Woof, woof!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey Pipi, you seem like you're doing pretty well."`;
   `Without me noticing, Pipi had come up and was darting around my legs.`;
   `His tail was wagging frantically.`;

});
playSFX({ name: `SE08_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `He suddenly dropped a few small objects from his mouth.`;
   Takeshi`"!?"`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   Takeshi`"H-hey! Where'd you get...?"`;
   You(T6T080)`"What's wrong? ...Ah!"`;
   `You ran over to where we were.`;
   You(T6T081)`"This is...the orange serum."`;
   `She picked up one of the fallen objects in front of Pipi.`;
   `It was a small capsule - a capsule with orange liquid inside of it.`;
   `Four of them had fallen on the floor.`;
   Takeshi`"Where'd you find that Pipi?"`;
   `I didn't know if he'd understand me, but I asked Pipi anyway.`;
   Pipi(PIPI_06)`"Whine...."`;
   `Pipi shook his head from side-to-side.`;
   Takeshi`"Were there any more of these?"`;
   Pipi(PIPI_06)`"Whiiiine..."`;
   `He shook his head.`;
   Takeshi`"This is...all of them?"`;
   Pipi(PIPI_00)`"Woof!"`;
   `He nodded.`;
   Takeshi`"........."`;
   Takeshi`"W-well we need to take these immediately..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Sorry You, but get these ready. You're the only one who knows how to give shots."`;
   Tsugumi(T6T082)`"I found some syringes over here, You."`;
   You(T6T083)`"O-okay!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We gathered all of the cartridges of serum from the floor, and put them on the bed.`;
   `Looking slightly doubtful, You prepared the syringes one at a time and gave the Kid and me our shots.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Phew.... We can relax for a while now."`;
   Kid(T6T084)`"Thanks, You..."`;
   You(T6T085)`"You're welcome."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sitting with his back against the wall, the Kid gave You a thumbs up.`;
   `After that he smiled and closed his eyes. He must have fallen asleep.`;
   `Tsugumi and I carried the Kid over to an empty bed.`;
   Takeshi`"What do we do about Coco?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU01ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T086)`"She's still undergoing the oxygen treatment. So we can't open the pod."`;
   Tsugumi(T6T087)`"It looks like the treatment is progressing normally. As long as she's in there, I don't think her condition will get much worse..."`;
   Tsugumi(T6T088)`"As soon as it's done, let's give Coco a shot, too."`;
   Takeshi`"Yeah, okay..."`;
   You`"........."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Oh yeah, you should probably give yourself a shot too, don't you think, You?"`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `YU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T089)`"Huh? Um, no I..."`;
   You`"........."`;
   `The next shot had already been prepared, but for some reason You was stalling.`;

});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T090)`"*Cough*...*cough*"`;
   `She started coughing suddenly.`;
   Takeshi`"Hey! Give yourself a shot quickly!"`;
   You(T6T091)`"But, I-I just...*cough* "`;
   `She wouldn't stop coughing.`;
   `Her arm holding onto the syringe started to shake.`;

});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T092)`"Breathe deep...fuuu....haaa..."`;
   `Her coughing finally stopped.`;
   `But her hands wouldn't go still.`;
   Takeshi`"W-what's wrong? You aren't feeling well? You want me to give the shot to you?"`;

});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T093)`"Huh, n-no way..."`;
   You(T6T094)`"I...I don't like shots..."`;
   Takeshi`"Huh!?"`;
   Tsugumi`"........."`;
   Takeshi`"You didn't have any problem sticking everyone else!?"`;
   Tsugumi(T6T095)`"You don't like getting them yourself?"`;

});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T096)`"Well yeah. 'Cause they hurt!"`;
   `You puffed out her cheeks stubbornly.`;
   Takeshi`"What are you talking about, your life's on the line here...!"`;
   Takeshi`"What'll ya do? Give me that syringe, You!"`;

});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T097)`"Aagh!"`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `Reaching out quickly, I latched onto You's arm.`;
   Takeshi`"Tsugumi, hold her down!"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T098)`"Roger."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi forced You to sit on the bed, and held her so that she couldn't move.`;
   You(T6T099)`"Hey...*cough* what are you doing! Ouch!"`;
   Takeshi`"Stop complaining!"`;
   `I grabbed onto You's arm, and stuck the needle in it.`;
   You(T6T100)`"Hey! Where do you think you're sticking that!"`;
   You(T6T101)`"You've got it all wrong! Not there! Aaaa, stop mangling me!"`;
   You(T6T102)`"Ow! Ouch! Stop! Go more slowly!"`;
   Takeshi`"Well stop squirming around so much!"`;
   You(T6T103)`"The angle's all wrong!"`;
   You(T6T104)`"You're going to get air bubbles in it!"`;
   Takeshi`"Stop complaining! You can't do it yourself!"`;
   You(T6T105)`"You suck!"`;
   Takeshi`"Shut up!"`;
   You(T6T106)`"Stop iiiit! Lemmee goooo! I'm dyyyinnnng! Oooooowwwch!"`;
   Takeshi`"You idiot! We're giving you this so you WON'T die!"`;
   Tsugumi(T6T107)`"*Sigh...*"`;
   `Tsugumi slumped her shoulders.`;
   `You was throwing a tantrum like a spoiled child.`;
   `Small droplets of red stained the white sheets of the bed.`;
   `..............`;
   `.........`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `After that You got scanned on the L-MRI. As suspected she had come down with TB.`;
   `We didn't have room to mess around anymore.`;
   `Ultimately, You wouldn't let me do it so she ended up giving herself the shot.`;
   `Complaining the whole time, and with tears in her eyes...`;

});
hideTextbox();
stopBGM();
delay({ interval: 60 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`17:36`);
showTextbox();
text(() => {
   Takeshi`"I'm not sure how long our condition will hold with just one shot..."`;
   Takeshi`"Hey, You? Do you think we can do anything after it stops working?"`;
   You`"........."`;
   `She was sitting at the computer terminal, silently typing on the keyboard.`;
   Takeshi`"You, tell me what we can expect?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T108)`"Don't talk to me, I can't concentrate."`;
   Takeshi`"Alright, alright."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T109)`"I'm trying my best..."`;
   You(T6T110)`"But someone has put a lock on the communications protocol and we can't make contact with the surface."`;
   You(T6T111)`"But, every once in a while, I've found some communication data that crosses through."`;
   You(T6T112)`"If I can release that lock, or...well anyway, we just might be able to get through somehow."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T113)`"At least it is better than LeMU, where we had no way of making contact."`;
   Takeshi`"Alright, show me what you got, genius!"`;
   You(T6T114)`"Okay..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I left You for a while, and went to look at the monitor attached to the capsule pod.`;
   `Tsugumi came over to stand next to me and looked at the monitor.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T115)`"How is Coco doing?"`;
   Takeshi`"She's in 'serious but stable' condition."`;
   Tsugumi(T6T116)`"Really..."`;
   `According to the monitor, it would be four hours before Coco could leave the pod.`;
   `The pod was full of high-pressured oxygen.`;
   `We couldn't take Coco out of there until the time had come.`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T117)`"We should probably get the Kid into a pod, don't you think?"`;
   Takeshi`"Yeah...let's get it ready."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `But for some reason we couldn't get the hatch on the furthest pod to close.`;
   `It wasn't easy but...I took the dead researcher out of his pod and set him down outside.`;
   `Mr. T.Y....`;
   `He was dead.`;
   `He had looked like he was smiling at the very end but...`;
   `His expression had betrayed his agony after all.`;
   `It was probably best that Coco hadn't seen her father's dead face.`;
   `Tsugumi sterilized the pod and finished cleaning up.`;
   `I shook awake the Kid, who was sleeping in the bed.`;
   Takeshi`"Hey Kid, the pod's ready. Wake up..."`;

});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T118)`"Unh...Takeshi?"`;
   `He slowly opened his eyes.`;
   Takeshi`"Sorry to wake you, Kid, but I need you to get in the capsule pod."`;

});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T119)`"Wha..."`;
   `He opened his eyes wide at my words.`;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T120)`"What about...everyone else?"`;
   Takeshi`"There's only one pod that we can really use. So you get in."`;

});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T121)`"No...no way!"`;
   Takeshi`"What?!"`;
   Kid(T6T122)`"Forget it, why should I be the only one to...I can't just abandon everyone!"`;
   Takeshi`"It's not like that, it's about how sick you are. You're the most serious case after Coco."`;

});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;

});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T123)`"Still, forget it."`;
   Kid(T6T124)`"Once I get in the pod, I can't get out for a while, right?"`;

});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T125)`"No way...I...I want to stay by Coco!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Getting up out of bed, the Kid staggered quickly over to Coco's pod.`;

});
fgload({ id: 1, name: `KA08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T126)`"I'm not moving from here until we know that everyone's getting out!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `He clung to the pod.`;
   `I thought about trying to pull him off, but he seemed absolutely determined not to move.`;
   Takeshi`"You stupid brat! What the hell are you saying?"`;
   `Forgetting my own exhaustion, I began shouting at the Kid.`;
   Takeshi`"Don't you want to escape? If you want to get out, you have to listen to me!"`;
   Takeshi`"If you get any worse..."`;
   Takeshi`"Even if you get in the pod, it might be too late!"`;
   Kid(T6T127)`"But...but...cough..."`;
   Takeshi`"Listen, there's only one more shot of the serum left!"`;
   `I pointed to the orange capsule left on the empty bed.`;
   Takeshi`"So!  So...so..."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"What?!"`;
   Takeshi`"Wait, why is there one left?"`;
   `All of a sudden, the questions flew.`;

});
fgload({ id: 1, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T128)`"Hey!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA03ADS`, name2: `YU06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T6T129)`"What?"`;
   `You turned away from the terminal as well.`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playBGM({ num: 13, volume: 100 });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T130)`"What are you talking about..."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T131)`"That cartridge is for Coco, right?"`;
   `Tsugumi mumbled with her face slightly turned away.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"......"`;

});
showTextbox();
text(() => {
   You(T6T132)`"So that's it..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Everyone's gaze finally rested on Tsugumi.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU03ADS`, name2: `YU14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T6T133)`"You know, Tsugumi...I still haven't given you an injection."`;
   Tsugumi`"......"`;

});
fgload({ id: 1, name: `TU13ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T134)`"Yeah? So?"`;
   `Tsugumi mumbled with her eyes averted.`;

});
fgload({ id: 2, name: `YU05ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   You(T6T135)`"I had forgotten before; I injected Takeshi and the Kid with a shot. Then I got busy, and then..."`;
   Tsugumi`"........."`;

});
fgload({ id: 2, name: `YU14ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   You(T6T136)`"So, out of four of the shots, we still have one left."`;
   `Getting up from the terminal, You spoke acidly.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `YU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T137)`"How you feeling, Tsugumi?"`;
   Tsugumi`"........."`;
   You(T6T138)`"You're not in pain?"`;
   Tsugumi`"........."`;
   `Come to think of it, Tsugumi didn't have any symptoms.`;
   `She didn't show any signs of the TB Virus.`;
   `I dredged up Tsugumi's old words from the depths of my memory...`;
   `'Highly improved immune system and increased metabolic efficiency'`;
   `'Telomeres that continue to rejuvenate'`;
   `...........`;
   `(It couldn't be...)`;

});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T139)`"Tsugumi, I want you to get scanned, right now."`;
   Tsugumi`"........."`;

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
   `'Cure Virus-P-Carrier'`;
   `Tsugumi's genetic makeup had been altered by Cure, giving her incredible regenerative powers against illness and injuries.`;
   `Tsugumi had also been infected with TB, but she'd already been able to make the antibodies and drive out the virus.`;
   `Cure......`;
   `Tsugumi, had gone beyond the normal human capability...`;
   `She had mentioned that she was 'special.'`;
   `Successful cases of genetic manipulation were probably exceedingly rare.`;

});
playBGM({ num: 16, volume: 100 });
bgload({ name: `BG34A1`, transition: 10 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T140)`"Cure..."`;
   `Looking at the results from the L-MRI scan, You nodded.`;
   You(T6T141)`"I found it in LeMU's database... But I'd heard about it before, once..."`;
   You(T6T142)`"I never would have imagined you're a carrier of the Cure Virus, Tsugumi."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T143)`"I don't care if you hate me."`;
   You(T6T144)`"Hate you? Why would I?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T145)`"Are you scared then?"`;
   Tsugumi(T6T146)`"You're scared of me, aren't you, You?"`;
   Tsugumi(T6T147)`"You're probably thinking that you don't want anything more to do with me, right?"`;
   You(T6T148)`"I, I wouldn't think that...!"`;
   `You shook her head fiercely.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18ADM`, name2: `TU08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T149)`"Why..."`;
   You(T6T150)`"Why would you say that?"`;
   Tsugumi(T6T151)`"Well..."`;
   `Tsugumi bit her lips and said...`;

});
fgload({ id: 2, name: `TU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T152)`"Well, because, I can be here...and I don't have to suffer."`;
   Tsugumi(T6T153)`"It could be that I'm just watching all of you throw up blood, and eventually when you're crawling on the floor, I'll be laughing at you."`;

});
fgload({ id: 2, name: `TU18ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T154)`"Because I'm just a cruel person like that..."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You`"............"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You couldn't look Tsugumi in the eyes.`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T155)`"I don't think that you're like that."`;
   `Clutching Coco's pod, the Kid spoke up.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU18ADS`, name2: `KA08ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T156)`"I don't think you're a bad person at all. I mean..."`;

});
fgload({ id: 2, name: `KA13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Kid(T6T157)`"You're the one who saved Coco, right?"`;
   Kid(T6T158)`"You risked your life to save someone."`;

});
fgload({ id: 1, name: `TU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T159)`"Yeah, so what..."`;

});
fgload({ id: 1, name: `TU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T160)`"To tell you the truth, I regret it now."`;
   Tsugumi(T6T161)`"Coco is suffering from TB now, isn't she?"`;

});
fgload({ id: 1, name: `TU18ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T162)`"She's stuck in that pod, and she's suffering..."`;
   Tsugumi(T6T163)`"If I hadn't had the stupid whim to do that...this wouldn't be happening right now."`;

});
fgload({ id: 2, name: `KA03ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   `The Kid turned away from Tsugumi.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Tsugumi!"`;
   Takeshi`"Stop it right now!!"`;
   `I yelled at her with all of my might.`;
   `I ran over to her and grabbed her by her collar.`;

});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Are you still talking garbage like that!"`;
   Takeshi`"Saying things you don't really mean!?"`;
   Tsugumi(T6T164)`"I...mean it."`;
   Takeshi`"Stop lying to yourself!!"`;

});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T165)`"It isn't...a lie."`;
   Tsugumi(T6T166)`"I..."`;

});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T167)`"It's the truth...the only one who TB isn't affecting is me."`;
   Takeshi`"......Ha......"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I let go of Tsugumi.`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T168)`"So how about it Takeshi? Are you ready to accept the truth now...?"`;
   `Tsugumi was - probably just pretending - to smile at me.`;
   Takeshi`"Yeah, it is an indisputable fact."`;
   Takeshi`"Fine. I'll accept it."`;
   Takeshi`"BUT...."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"You might just help us get better."`;

});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T169)`"What did you say?"`;
   `Just then, Tsugumi's expression became serious.`;

});
hideTextbox();
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Well, I'm not a doctor, so I can't really tell, but..."`;
   Takeshi`"Smallpox, penicillin, snake anti-venom...."`;
   Takeshi`"You're pretty smart, this should make sense to you, right?"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T170)`"N....no, way."`;
   Takeshi`"It's our only chance."`;
   Takeshi`"You're body is creating antibodies to the Tief Blau Virus, we'll use that."`;
   Takeshi`"If we can get those antibodies, then there's a small chance we can fight off the Tief Blau."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T171)`"It's too dangerous!"`;
   `Tsugumi's expression was getting more and more worked up.`;
   Tsugumi(T6T172)`"Do you have any idea how hard it is to make antibodies and vaccines that work!?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T173)`"There's almost no chance!!"`;
   Tsugumi(T6T174)`"If you make even the slightest mistake, it could kill all of you!"`;
   Takeshi`"If we don't do anything, we're dead anyway!"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T175)`"......!!"`;
   `She sucked in her breath.`;
   `Without moving, Tsugumi's expression turned to ice.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03ADS`, name2: `KA03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Kid`"........."`;
   `You and the Kid, who had been staring at the ground the whole time, raised their heads and looked at me.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"That's right...if we don't do anything we're dead."`;
   Takeshi`"And if that's the case..."`;
   Takeshi`"It's better that we take this risk, no matter how small our chance of survival."`;
   Takeshi`"....*cough*"`;

});
hideTextbox();
removeBG({ mode: RED, transition: 3 });
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash.${noWait}`;

});
bgload_keepFg({ name: `BG34A1`, transition: 20 });
shakeScreenHard();
showTextbox();
text(() => {
   Append``;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
hideTextbox();
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
showTextbox();
text(() => {
   Takeshi`"Damn it, not another nose bleed..."`;
   Takeshi`"A nose bleed AND I'm coughing up blood..."`;
   Takeshi`"I can't believe how lame this is..."`;
   `I wiped off my nose and my chin.`;
   Tsugumi`"........."`;
   Takeshi`"What? You aren't going to laugh at me Tsugumi for being such a dork?"`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"Come on, laugh, Tsugumi."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I held out my hand toward her.`;
   `It was covered in blood.`;

});
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T176)`"Stop it. Stay away from me..."`;
   Tsugumi(T6T177)`"Stop...I don't want to..."`;
   `Shaking her head fiercely, Tsugumi backed away.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(T6T178)`"T-Takeshi..."`;
   Takeshi`"Sh...!"`;
   `You was moving to stand up, but I lifted a hand signaling her to stop.`;

});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T179)`"Listen, Takeshi, Tsugumi..."`;
   `You opened her mouth to talk, from where she was seated at the terminal.`;
   You(T6T180)`"There is a simple lab in the back of the examination room."`;
   You(T6T181)`"I saw a centrifuge and a machine for refining serum..."`;

});
fgload({ id: 1, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T182)`"We could probably use that to safely and quickly extract the Tief Blau antibodies."`;
   You(T6T183)`"If this can scan for Tief Blau, it can probably scan for the antibodies and extract them."`;
   `She continued to talk in a low, calm voice.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Tsugumi, please help us. I'm asking you."`;
   Tsugumi(T6T184)`"Stay away from me, Takeshi..."`;
   Tsugumi(T6T185)`"Don't touch me..."`;
   `I had backed her up all the way to the bed.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T186)`"You want to live with this disease?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T187)`"Once you've got the Cure Virus, you can't go back!"`;
   Tsugumi(T6T188)`"Do you have any idea what you're in for!?"`;
   `She couldn't go back any further.`;

});
fgload({ id: 1, name: `TU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi searched for the bed behind her with her hand.`;
   `With the tip of her outstretched hand, she brushed across the only dose of serum left.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"But we don't know that the Cure Virus will infect everyone."`;
   Takeshi`"Even you, you said you were special, right?"`;
   Takeshi`"Please...I'm begging you."`;
   Takeshi`"Let me take a gamble...so that everyone can live."`;

});
hideTextbox();
showDimOverlay();
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I stood quietly in front of Tsugumi.`;
   `My legs were unsteady.`;
   `My vision was hazy.`;
   `But, I stepped forward strongly and stood up straight.`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I looked deeply into Tsugumi's eyes.`;
   `I was trying to look inside to see what lay behind them.`;

});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T189)`"You won't be a normal person anymore!?"`;
   Tsugumi(T6T190)`"I don't want everyone to live with the pain that I have!!"`;
   `Large tears welled in her eyes.`;

});
showTextbox();
text(() => {
   Tsugumi(T6T191)`"I hate myself!!"`;
   Tsugumi(T6T192)`"I...!!"`;

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
   `SMACK!!`;
   `I slapped Tsugumi on the side of her face.`;
   Tsugumi`"........."`;
   `She clenched her jaw tightly against the pain and glared at me.`;
   `Just then.`;
   `I pounced on the remaining dose of the serum, stealing it out of Tsugumi's hand.`;
   `I took it...`;
   `And...`;
   `Smashed it into a thousand pieces onto the cold hard surface of the examination room floor!`;

});
playSFX({ name: `SE07_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Crash....`;
   `It let out a sad little sound and splintered into powdery fragments.`;

});
hideTextbox();
playBGM({ num: 21, volume: 100 });
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T193)`"What are you doing!"`;
   Takeshi`"There's no other way."`;
   Takeshi`"We've only got one option open to us now."`;
   Tsugumi(T6T194)`"You idiot..."`;

});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T195)`"Do you know what you've done...!?"`;

});
fgload({ id: 1, name: `TU09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T196)`"You didn't have to do that..."`;
   Tsugumi(T6T197)`"You know I can't fight you...!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `With her lips trembling, and her shoulders shaking, Tsugumi sank down on to the bed.`;
   Takeshi`"Yeah, I know."`;
   Tsugumi(T6T198)`"You jerk..."`;
   Tsugumi(T6T199)`"You animal..."`;
   Tsugumi(T6T200)`"You're a coward..."`;
   `She nestled up close to me and began to cry.`;
   Takeshi`"I don't care what you say."`;
   Takeshi`"I don't care how much you curse me."`;
   Tsugumi(T6T201)`"Aaaggh..."`;
   Tsugumi(T6T202)`"You fool...you fool...."`;
   Tsugumi(T6T203)`"If, you mess this up...I'll never forgive you, Takeshi..."`;
   Takeshi`"It's okay...it's going to be okay..."`;
   Takeshi`"I promise you.... We're all going to get out of this...okay?"`;
   Tsugumi(T6T204)`"Aaaagh...uuuugh..."`;
   Tsugumi(T6T205)`"Waaaaaaah.......!"`;
   `She raised her voice in a loud wail.`;
   `She started crying like a small child.`;
   `She threw away everything that was holding her back and cried with everything she had.`;
   `You started operating the terminal...`;
   `The refining machine whirred to life.`;
   `The scanner also started to move.`;
   `Wiping away her tears, she stuck out her arm.`;
   `You gently took her arm, and drew some blood.`;
   `The whole time Tsugumi held onto my hand...`;
   `She continued to cry, letting out sobs occasionally.`;

});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 60 });
showTextbox();
text(() => {
   `My consciousness started to fade.`;
   `I lost all sense of time.`;
   `It was hard to tell if it was reality, or a dream.`;
   `(Am I alive?)`;
   `(Or am I dead?)`;
   `(Where am I thinking about all of these things?)`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   You(T6T206)`"It's fine now..."`;
   You(T6T207)`"I think it worked..."`;
   You(T6T208)`"I've prepared the shots..."`;
   You(T6T209)`"So, next...it's up to you...Tsugumi."`;
   `............`;
   Tsugumi(T6T210)`"If..."`;
   Tsugumi(T6T211)`"You don't wake up from this..."`;
   Tsugumi(T6T212)`"I'll never forgive you..."`;
   Tsugumi(T6T213)`"Not as long as I live..."`;
   `...........`;
   Kid(T6T214)`"Tsugumi, where...are you going?"`;
   Tsugumi(T6T215)`"Well, I..."`;
   Tsugumi(T6T216)`"I left a friend of mine upstairs."`;
   Tsugumi(T6T217)`"I've got to go meet him. My best friend..."`;
   Tsugumi(T6T218)`"Djungarian Hamster..."`;
   Tsugumi(T6T219)`"His name is Chami..."`;
   Kid(T6T220)`"......Chami......?"`;
   Tsugumi(T6T221)`"See you."`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `...............`;
   `.........`;

});
hideTextbox();
stopBGM();
delay({ interval: 120 });
playBGM({ num: 24, volume: 100 });
bgload({ name: `BG34A1`, transition: 0 });
clock(`21:15`);
showTextbox();
text(() => {
   `I woke from my stupor.`;
   `A stale cold feeling...`;
   `I realized I had been sleeping sprawled on the floor.`;
   `I slowly raised my body.`;
   `I tried opening and closing my fists..`;
   `Strange.`;
   `The movement left me with an uncomfortable sensation, like it wasn't my own.`;
   `I shook my head.`;
   `I tried slapping my cheek.`;
   `I breathed in the cold air and breathed out.  `;
   `Strange...`;
   `The inside of my head stayed dull and murky.`;
   `I dragged myself to consciousness, forcefully reeling myself back to clarity.`;
   `Putting my hands on the floor, I pulled up my heavy, aching body.`;
   `My feet faltered.`;
   `But somehow I managed to stand.`;
   `I looked around the infirmary.`;
   `I saw several used syringes scattered on the floor.`;
   `The Kid was still slumped against Coco's pod. `;
   `He looked disturbingly bad, just completely out of it.`;
   `Tsugumi was nowhere to be seen.`;
   `I wonder where she had gone to...?`;
   `You was half slumped over the terminal console, snoring away.`;
   `She looked like she was in some pain and was perspiring in her sleep.`;
   `Her hand was pushed against the panel as if she had been in the middle of typing.`;
   `On the monitor, auto-repeated strands of letters were lined up without meaning.`;

});
hideTextbox();
showTextbox();
text(() => {
   //??
   Anon(VSE03_06)`"......! ......!"`;
   `What the...?`;
   `I heard a strange sound.`;
   `I re-inserted the voice converter into my ear.`;
   `...it wasn't a problem with the converter.`;

});
showTextbox();
text(() => {
   //??
   Anon(T6T222)`"Come in..."`;
   //??
   Anon(T6T223)`"IBF 3, please respond."`;
   //??
   Anon(T6T224)`"This is the emergency rescue team from the Maritime Defense Force."`;
   //??
   Anon(T6T225)`"We are being directed by Insel null."`;
   `I could hear a voice coming from the speaker!?`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I hurried over to the terminal, and removed You's hands from it, taking over the control panel.`;
   Takeshi`"H-hello!"`;
   Takeshi`"This is the IBF infirmary...over!"`;
   //Mission Control
   Mission_Control(T6T226)`"IBF 3!? I repeat, this is the Maritime Defense Force emergency rescue team calling from the control center at Insel null."`;
   //Mission Control
   Mission_Control(T6T227)`"Can you hear me?"`;
   Takeshi`"Yeah! Okay...loud and clear!"`;
   `I was somehow able to force out an answer.`;
   `Voices spilled out from the other end of the line.`;
   `'Hey, there are survivors down there!'`;
   `'I can't believe it!'`;
   `'That's amazing!'`;
   `That's what I wanted to say.`;
   `It seemed like You had been able to restore the communication lines...`;
   //Mission Control
   Mission_Control(T6T228)`"We're sending a rescue team immediately. Can you access the pool in IBF 3?"`;
   Takeshi`"Uh, yeah, it should be fine."`;
   //Mission Control
   Mission_Control(T6T229)`"Do you know how many survivors there are and where they are located?"`;
   Takeshi`"In the examination room there are five... no six."`;
   //Mission Control
   Mission_Control(T6T230)`"Six. I copy."`;
   //Mission Control
   Mission_Control(T6T231)`"A rescue team is headed there in a private sector salvage vessel. When it arrives, I want you to follow its directions and get out of there."`;
   Takeshi`"How long 'till they get here?"`;
   //Mission Control
   Mission_Control(T6T232)`"They're going as fast as they can, but it'll take about an hour."`;
   `One hour...`;
   `(Coco should be able to get out of the pod by then.)`;
   `(I just hope we have that long...)`;
   //Mission Control
   Mission_Control(T6T233)`"But, if something goes wrong..."`;
   //Mission Control
   Mission_Control(T6T234)`"There should be a small deep-exploration submarine left in the research facility. I hate to make you do this, but I want you to escape to that area."`;
   Takeshi`"S-something goes wrong...? W-what do you mean...?"`;
   //Mission Control
   Mission_Control(T6T235)`"LeMU's partition strength threshold is already being exceeding."`;
   //Mission Control
   Mission_Control(T6T236)`"If one section implodes, there's the risk that another area could collapse and sinking could ensue."`;
   //Mission Control
   Mission_Control(T6T237)`"If that happens, we think there's a high possibility that heavy pieces could crash down on the research facility."`;
   Takeshi`"You don't say...?"`;
   //Mission Control
   Mission_Control(T6T238)`"Of course, we're doing everything we can to get to you before that happens."`;
   //Mission Control
   Mission_Control(T6T239)`"We're heading there, no matter what! So, please hang on a little longer!"`;
   `*Click* ...`;
   `The communications cut out suddenly.`;
   Takeshi`"Ah, hey! W-wait a sec!"`;
   `I hit the 'Call' button repeatedly, but there was no answer.`;
   Takeshi`"Damn it, we can't open up communications from this side..."`;
   `I didn't have any other choice.`;
   `I began pouring through the manual on the side of communication terminal.`;
   `A mini-submersible for deep-sea exploration...`;
   `We hadn't found it when we'd searched the place...`;
   Takeshi`"Ah, here it is!"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Following the instructions, I used the control panel to call up information on the monitor.`;
   Takeshi`"It's a small electric submersible..."`;
   `The submarine was in a separate sealed sector attached to IBF.`;
   `The specifications said it was a 'neutral buoyancy' miniature-submarine, for saturation diving.`;
   `The important thing was, it could be brought over to the pool by remote control.`;
   Takeshi`"If things get dangerous, I guess they want us to board this."`;

});
hideTextbox();
playSFX({ name: `SE04_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I quickly went about setting up the remote control program, so that we could move the submarine at a moment's notice, if we had to.`;
   Takeshi`"Alright..."`;
   Takeshi`"All we have to do now is..."`;
   Takeshi`"Get Tsugumi and Sora over here..."`;
   `(Sora...)`;
   `(How are we going to get Sora here...)`;
   `I was overcome by unease.`;

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
   `——BOOOOOooooM!!!`;
   `Suddenly a low metallic crash reverberated throughout the installation.`;
   `The sound...seemed to come from above....`;

});
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `An alarm sounded from the terminal and the screen changed.`;
   `'Warning: LeMU hull breach : Flooding'`;
   Takeshi`"LeMU....!?"`;
   Takeshi`"This is bad..."`;
   Takeshi`"That means...Tsugumi and Sora...!"`;

});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   `I ran out into the corridor.`;
   `It was only slight, but the floor was trembling.`;
   Takeshi`"Agh..."`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I suddenly became dizzy again.`;

});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Losing my balance, I crashed into a wall.`;
   `It seemed I wasn't completely recovered yet.`;
   `I didn't have any idea if the antibodies were working or not...`;
   `Not a clue.`;
   Takeshi`"I...still gotta go..."`;
   Takeshi`"I have to GO!!"`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   `Squeezing out all the strength I could muster, I staggered toward the elevator.`;

});
hideTextbox();
playBGM({ num: 10, volume: 100 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `As soon as the door opened, I flew into the lift.`;
   `The elevator headed up.`;
   Announcement(T6T240)`"Depth 270 feet..."`;
   Announcement(T6T241)`"Depth 240 feet..."`;
   Announcement(T6T242)`"Depth 210 feet..."`;
   `Upwards...`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `The elevator stopped.`;
   `Forcing open the door, I slipped into the pressurization chamber.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   `The entrance had closed automatically.`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I pressed on the intercom button repeatedly.`;
   Takeshi`"Sora! Soraaa!"`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Sora(T6T243)`"Ta-Takeshi!? What are you...?"`;
   Takeshi`"Hey! It's been a while!"`;
   `I realized how much I had missed that voice.`;
   `I waved to Sora as she appeared outside the window.`;
   Sora(T6T244)`"Wh-what are you doing here?"`;
   Takeshi`"Well, it's obvious isn't it? I came back."`;
   Sora`"......"`;
   Takeshi`"What's the damage?"`;
   Sora(T6T245)`"There's flooding in Zweite stock."`;
   Sora(T6T246)`"The warehouse area has been breached, and cracks are beginning to form in the elevator shaft. The situation is serious."`;
   Sora(T6T247)`"There is over six inches of flooding in almost all of the corridors."`;
   Takeshi`"Where's Tsugumi?"`;
   Sora(T6T248)`"She's...trapped in the infirmary..."`;
   Takeshi`"What about the door?"`;
   Sora(T6T249)`"The electronic lock has been released. But..."`;
   Takeshi`"It won't open 'cause of the water pressure?"`;
   Sora(T6T250)`"Yes..."`;
   Sora(T6T251)`"Takeshi, I'm going to start decompressing the chamber."`;
   Takeshi`"How long will it take?"`;
   Sora(T6T252)`"I will complete it as soon as possible."`;
   Takeshi`"I need to know how much time!"`;
   Sora(T6T253)`"If I hurry...12 hours."`;
   Takeshi`"Tw-twelve hours!? We don't have that long!"`;
   Sora(T6T254)`"If we don't dissolve the nitrogen in your blood, you will get decompression sickness."`;
   Takeshi`"I don't care! Open that door now!"`;
   Sora(T6T255)`"I can't do that...!"`;
   Takeshi`"If we don't act fast, Tsugumi is dead!"`;
   Sora(T6T256)`"If we open that door now, due to the rapid decompression, the nitrogen in your bloodstream will form bubbles, causing blood clots, and in the worst case..."`;
   Takeshi`"I don't care, you get that door OPEN NOW!!!"`;
   Sora(T6T257)`"I can't...it's too..."`;

});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I found an emergency escape lever inside the chamber and I pulled on it.`;

});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `I kicked the door.`;

});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
removeBG({ mode: WHITE, transition: 3 });
playSFX({ name: `SE07_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `——KABOooM!!!`;
   `There was a horrible noise, as though all the air inside had exploded.`;
   `My body was thrown from the room, along with the high-pressure gas that had been built up inside.`;

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
   `I was tossed like a piece of confetti, sliding and rolling along the floor all the way to the Control Room.`;
   `My body crashed heavily against the wall.`;

});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   Takeshi`"Gaagh!"`;
   Takeshi`"...eeeaaAAAAGGHH"`;
   Takeshi`"WAAAAaaaah......"`;
   `Pain wracked my body.`;
   `And it wasn't because I had smacked into a wall.`;
   `Although I kept spewing out my breath, it felt like air kept bubbling up in my lungs.`;
   `A terrible exhaustion.`;
   `My whole body felt strung out.`;
   `My eyes felt swollen and painful.`;
   `The muscles in my limbs began to spasm.`;
   `Numbness. Pain. Headache.`;
   `I felt like I had no room to move.`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"*Urgh*....*uurrgh*..."`;
   `According to astronomers, humans can live for a short period of time even if they are thrown out of a spaceship into space.`;
   `But fish brought quickly up from the sea depths to earth die instantly, because the pressure difference causes their organs to burst.`;
   `So was I an astronaut, or...`;

});
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6T258)`"Takeshi, your voice converter!!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I felt a splitting pain deep in both ears.`;
   `Repelled by my eardrums, the voice converters flew out of my ears.`;
   `I hurriedly, held both ears with the palms of my hands and knocked them, as though trying to drain water from them.`;
   Sora(T6T259)`"......! .........!"`;
   `I couldn't hear what Sora was screaming.`;
   `All I could do was lie on the floor, trying to suck in air.`;
   `Like a fish that had been pulled out of the water...`;
   `A few minutes passed...`;
   `.........`;

});
hideTextbox();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `The earphones that I had been wearing had broken in half.`;
   `I got up weakly.`;

});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   `I saw some extra voice converters on the edge of the console.`;
   `I crammed them forcefully into my ears.`;

});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6T260)`"Takeshi...!!"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6T261)`"Takeshi...are you okay?"`;
   `Tears welling up in her eyes, Sora looked at me with a pained expression.`;
   Takeshi`"Okay, okay. I'm still alive."`;
   `At least my eardrums hadn't burst...`;

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
   `I left HIMMEL, and started heading up.`;
   `I checked the screen on my PDA.`;
   `It showed a map of LeMU, and a blinking dot showed me where Tsugumi was...`;
   `From the console at HIMMEL I had installed a program to link data from LeMU's sensors to my PDA.`;
   `Sora had prepared it for me.`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   Takeshi`"Don't you stop me, you hear? No matter what you say I'm going."`;
   Sora(T6T262)`"Alright, Takeshi. It seems that you've made up your mind..."`;
   Sora(T6T263)`"I'll stay here in HIMMEL, to keep track of the situation at LeMU, and send updates to your PDA."`;
   Sora(T6T264)`"I'll do what I can to stop the partitions from falling...to see that this place stays together, even a little while longer. So—"`;
   Sora(T6T265)`"Promise me...that you'll come back here with Tsugumi..."`;
   Takeshi`"Yeah, it's a promise."`;

});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Running up the stairs, I looked down at my PDA again.`;

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
   `The life sign in the infirmary wasn't moving.`;
   `The map showed that the surrounding corridors were flooded and that there was no way to access the area.`;
   `But...`;
   `I knew what I had to do.`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_B1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `The area I wanted to go was filled with water.`;
   `But because the watertight doors had shut on all sides of the floor, the water had stopped flowing.`;
   `In that case...I thought I could make it.`;

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
   `I went to the emergency corridor leading under the infirmary and dove in.${wait(30)}`;
   `How many times had I gone back and forth down this corridor.${wait(30)}`;
   `My PDA backlight shone a weak light on the area before me.${wait(30)}`;
   `Even then...${wait(30)}`;
   `I wondered how many more feet it was, but my body remembered.${wait(30)}`;
   `Even if I closed my eyes, I knew I could make it there.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Turning out the light, I propelled myself forward through the darkness.${wait(30)}`;
   `I wouldn't let the darkness overtake me anymore.${wait(30)}`;
   `It wasn't something that I would run away from afraid of...${wait(30)}`;
   `I would take the darkness inside of me, and make it my own...${wait(30)}`;
   `That's why I wasn't afraid.${wait(30)}`;
   `There was nothing to be afraid of.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `SPLASH!!`;
   `Entering the room from the hole of the elevator shaft, I quickly climbed into the infirmary.`;
   Takeshi`"Tsugumi! Tsugumi!"`;
   Tsugumi(T6T266)`".........!!"`;
   `She was in a corner of the room, hugging her knees to herself.`;
   `At her feet was the slightly wet, furry figure of Chami.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T267)`"Ta-Takeshi...what...WHY...!?"`;
   `Tsugumi looked at me with wide-open eyes.`;
   Takeshi`"What are you so worked up about, Tsugumi?"`;
   Takeshi`"I came back, right now! I came back for you!"`;
   Takeshi`"Well, I guess I'm a bit late, but..."`;
   `I scratched my nose.`;

});
fgload({ id: 1, name: `TU04AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T268)`"Y-you idiot! What are you doing here!!?"`;
   Tsugumi(T6T269)`"Do you...want do die!?"`;
   `One after the other, large tears started falling from her eyes.`;
   Takeshi`"Listen..."`;
   `I was laughing as I spoke.`;
   Takeshi`"I came back for something I forget, um, yeah that's it."`;

});
fgload({ id: 1, name: `TU06AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T270)`"You...forgot...?"`;
   `Picking up Chami in both hands, she stood up slowly.`;
   Takeshi`"Yeah. Left it here, silly me..."`;
   Takeshi`"My irreplaceable..."`;
   Takeshi`"More important to me than anything else...friend..."`;

});
fgload({ id: 1, name: `TU07AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Tsugumi(T6T271)`"...how..."`;

});
fgload({ id: 1, name: `TU01AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T272)`"How...did you get here?"`;
   `She looked at me as though she still couldn't believe I was actually there.`;
   Takeshi`"Well, I'm a good swimmer."`;
   Takeshi`"Actually, I swam down and back in a 25 yard pool...once..."`;
   Takeshi`"I kicked off wall coming back, but still..."`;
   `I pretended to swim as I spoke.`;
   Takeshi`"Wait, I think I just beat my record..."`;
   Takeshi`"Hey? Do you remember the furthest I've ever swam underwater?"`;

});
fgload({ id: 1, name: `TU03AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T273)`"...One..."`;
   Tsugumi(T6T274)`"103 feet...?"`;
   `She answered, her expression beginning to break down.`;
   Takeshi`"Yeah..."`;
   Takeshi`"You think I'd die in a place like this?"`;
   Takeshi`"I mean..."`;
   Takeshi`"I still haven't gotten enough abuse from you yet."`;
   Takeshi`"I want to hear what you've got to say, from here on out..."`;

});
fgload({ id: 1, name: `TU10AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T275)`"Aaagh..."`;
   Takeshi`"So..."`;
   Takeshi`"I came for you, Tsugumi."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T276)`"Takeshi...Takeshi!"`;
   `We ran to one another.`;
   `Reaching out our hands...`;
   `We came together.`;
   `I gently wiped away the teardrops around her mouth with my lips.`;
   `And in the center of the infirmary we held each other close, embracing firmly.`;
   `Riding on both of our hands Chami snorted and looked at us.`;
   Takeshi`"Alright, let's go back...together."`;

});
fgload({ id: 1, name: `TU02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T277)`"Okay..."`;
   `Tsugumi softly held Chami and hid him inside the chest of her clothing.`;

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
   `We had no time to lose.`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `It was only a matter of time before this place collapsed in on itself.`;
   `We had to hurry.`;
   `I knew that...`;
   `But I wasn't in a rush.`;
   `We would make it.`;
   `I'd never say quit.`;
   `I'd never say it was too late.`;
   `I knew it was going to be okay.`;

});
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `Pulling on Tsugumi's hand, I flew like the wind.`;

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
   Sora(T6T278)`"Takeshi, Tsugumi!"`;
   Sora(T6T279)`"I've prepared the chamber for you get inside quickly!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I opened up the sliding door and rushed to the other side of the glass.`;

});
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   `We went in the compression chamber for IBF.`;

});
fgload({ id: 1, name: `TU09AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T280)`"Pant...pant..."`;
   `Slouching back in a chair, Tsugumi struggled to catch her breath.`;
   Takeshi`"Pant...pant..."`;
   `I didn't think that I would be able to move for a while.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   Sora`"........."`;
   Takeshi`"Sora.... You're coming too..."`;
   Sora`"........."`;
   Takeshi`"What's wrong...?"`;
   Takeshi`"You can't come no matter what?"`;
   Sora`"........."`;
   `The door to the room shut automatically.`;

});
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The compression started...`;
   Takeshi`"Sora..."`;
   `Sora stood silently outside of the chamber.`;
   Takeshi`"Sora!"`;
   `I started to open up the door.`;
   `Once again I reached out to the emergency lever on the side of the door.`;

});
if (l_went_outside_as_sora_suggests_in_3rd_day == 0) goto(lbl_00001a3c);
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T6T281)`"Takeshi...it is okay."`;
   `Sora smiled softly from the other side of the window.`;
   `She scrunched her eyebrows as if perplexed.`;
   `Then slowly she shook her head from side to side.`;
   Sora(T6T282)`"I will be fine, don't worry about me."`;
   Sora(T6T283)`"I told you before, didn't I?"`;
   Sora(T6T284)`"I am not here."`;
   Sora(T6T285)`"And yet I am everywhere."`;
   Sora(T6T286)`"I am here, and at the same time there."`;
   Takeshi`"........."`;

});
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T6T287)`"I do not exist."`;
   Sora(T6T288)`"And yet I exist everywhere."`;
   Sora(T6T289)`"There will come a time, when we will meet again."`;
   Sora(T6T290)`"If you die, we will never be able to meet again."`;

});
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T6T291)`"So please..."`;
   Sora(T6T292)`"Please don't ask me anything now."`;
   Takeshi`"Sora..."`;

});
bgload({ name: `EV_SO07C`, transition: 20 });
showTextbox();
text(() => {
   Sora(T6T293)`"Believe me Takeshi."`;
   Takeshi`"........."`;
   Sora(T6T294)`"Thank you."`;
   `Her RSD image started to warp and break up.`;
   `A fog enveloped Sora from behind.`;
   `Sora's image changed to a rainbow hue.`;
   `And then even the rainbow...`;
   `Started to fade.`;
   `Sora was disappearing...`;
   `Watching this happen, I wondered where she really was?`;
   `Would there really come a time when we would meet again?`;
   `All I could do was trust her last words to me.`;

});
goto(lbl_00001a4f);
let lbl_00001a3c;
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   Sora`"........."`;
   `But why would she just stand there without moving.`;
   `She wouldn't make it...`;
   `Water...`;
   `Water was flooding into HIMMEL's control room.`;
   `Her image broke up and disappeared...`;
   `A fog enveloped Sora, covering her over. She disappeared without a word.`;

});
let lbl_00001a4f;
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
stopBGM();
showTextbox();
text(() => {
   `An hour later.`;
   `The room on the other side of the compression chamber had already filled with water.`;
   `The compression finished...`;
   `Tsugumi and I transferred to the lift, and went down to IBF`;
   `.........`;

});
bgload({ name: `BG33A6`, transition: 20 });
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
bgload({ name: `BG33A2`, transition: 20 });
showTextbox();
text(() => {
   `As soon as we entered the room, the lights came on.`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T295)`"It's quiet..."`;
   Takeshi`"Yeah, you're right..."`;
   `By then the flooding was probably fairly advanced in the area above us.`;
   `Perhaps some of the sections had started to collapse.`;
   `But the surface of the pool, hardly even rippled.`;
   `As if there were nothing going on.`;
   `I wondered how much longer the place would hold...`;
   Takeshi`"Ah..."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T296)`"What's wrong?"`;
   Takeshi`"The time...we're past the scheduled time."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG35A2`, transition: 20 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG35A1`, transition: 20 });
clock(`23:3`);
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T297)`"What schedule?"`;
   Takeshi`"Actually, there's a rescue team on its way."`;
   Tsugumi(T6T298)`"Rescue...?"`;
   Takeshi`"Yeah. They called themselves the Maritime Defense Force, I think."`;
   Takeshi`"You was able to open up the communications line, so we got a hold of Insel null."`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I turned the handle on the door of the examination room.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG34A2`, transition: 20 });
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   `The lights came back on in the room. `;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T299)`"Ah..."`;
   Tsugumi(T6T300)`"They aren't here...nobody's here!?"`;
   `Tsugumi searched around the examination room.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Then she checked each of the capsule pods.`;
   `I also did a quick search of the room.`;
   `Coco's pod was open.`;
   `The manual for the control panel was opened to the same page.`;
   `The used bottles of serum lay strewn on the floor.`;
   Takeshi`"Yeah..."`;
   Takeshi`"You, the Kid, Coco, that researcher...they're all gone."`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T301)`"Where did they go?"`;
   `Tsugumi was starting to panic.`;
   Takeshi`"Hey, hold on. I'm sure the rescue team found them."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Just then a voice that I recognized came over the speaker.`;
   `I hit the 'Talk' button.`;
   `Tsugumi was next to me staring at the monitor.`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   //Mission Control
   Mission_Control(T6T302)`"This is Insel null Control. Please respond."`;
   Takeshi`"This is the examination room in IBF 3, over!"`;
   //Mission Control
   Mission_Control(T6T303)`"Thank God...that's where you were."`;
   //Mission Control
   Mission_Control(T6T304)`"A little while ago we got a message from the dispatch team that they couldn't find you. You had us worried there."`;
   Takeshi`"I'm sorry, I was out for a bit."`;
   //Mission Control
   Mission_Control(T6T305)`"We were able to rescue the other three people in the examination room, and they are being cared for in the salvage vessel."`;

});
showTextbox();
text(() => {
   Takeshi`"Is everyone okay!?"`;
   //Mission Control
   Mission_Control(T6T306)`"We can't say for sure...their conditions are serious."`;
   //Mission Control
   Mission_Control(T6T307)`"We're fighting against time. The submersible is going to surface soon, and we'll transfer them to a floating medical center."`;
   Takeshi`"Okay. You take care of them."`;
   //Mission Control
   Mission_Control(T6T308)`"How many people are there with you?"`;
   Takeshi`"Two, including me."`;
   Takeshi`"The other person didn't make it......"`;
   //Mission Control
   Mission_Control(T6T309)`"Roger. We'll send the team back there as soon as we can."`;
   //Mission Control
   Mission_Control(T6T310)`"But there is the possibility that the team won't be able to approach IBF if it starts to break up."`;
   Takeshi`"I've got the exploration vessel standing by. I can call it here by remote control, right?"`;
   //Mission Control
   Mission_Control(T6T311)`"Ah, yeah...I'm sorry to have to ask you to use it, but there's nothing else we can do."`;
   //Mission Control
   Mission_Control(T6T312)`"We'll do the best we can. Whatever happens, you hang in there."`;
   Takeshi`"Roger."`;
   `*Click*...`;
   `The communications cut out.`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T313)`"What's that supposed to mean?"`;
   Takeshi`"You weren't listening?"`;
   Takeshi`"It means..."`;
   Takeshi`"All this would be for nothing, if everyone died while they were waiting for us."`;
   Takeshi`"The rescue team decided to put a higher priority on getting You, the Kid and Coco, to the hospital, rather than waiting for us."`;

});
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T314)`"Yeah...you're right..."`;

});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The color in Tsugumi's face slowly returned to normal, as her sense of panic faded.`;
   Takeshi`"Well..."`;
   Takeshi`"I might just take a nap until the next bus comes..."`;

});
fgload({ id: 1, name: `TU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T315)`"B-bus?"`;
   Takeshi`"If you think the bus is going to be late, call a cab for me, will you?"`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T316)`"T-taxi?"`;
   Tsugumi(T6T317)`"What are you talking about...Takeshi?"`;
   Takeshi`"If you push that button, a small submarine will come over here by remote control—Our very own private taxi should come here from another area of IBF."`;

});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T318)`"O-okay..."`;
   Takeshi`"Anyway..."`;
   Takeshi`"I'm just glad that everyone's alright..."`;
   Takeshi`"Yes..."`;
   `The adrenaline that had kept me going earlier, suddenly ran out.`;
   Takeshi`"I'm just...so...glad..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T319)`"Ta-Takeshi!?"`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
removeFG({ id: 1, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `My legs suddenly gave out...`;

});
hideTextbox();
playSFX({ name: `SE05_10`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `My head struck the hard surface of the floor...`;
   `But before I could feel anything...`;
   `I slipped into a deep sleep, as Tsugumi held me in her tight embrace.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`TT7A`);
