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
   `In this world, where the boundaries between light and shadow blended, there was no sound.`;
   `The motion of white waves of darkness surged forward, permeating my skin and shaking my whole body.`;
   `Something...like a hard shell, began to resonate and to emit a black light from inside.`;
   `There was no sign that the waves would stop.`;
   `Rather, they seemed to be getting stronger and stronger.`;
   `A crack ran down the outer husk.`;
   `It began to spread like the strands of a web, and soon covered the entire shell.`;
   `Pieces began to fall away.`;
   `Dropping...to the floor...`;
   `I was able to glimpse what lay beyond the shed husk...it was dazzling..`;
   `Particles of light, whiter than white, filled the air and began to collect into one another.`;
   `The light formed a vague image.`;
   `The image jumped into my field of view...`;
   `A fragment of a scene familiar to me.`;

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
   `I woke up in the middle of the Conference Room.`;
   Takeshi`"—Eh!?"`;
   Takeshi`"'Me!?'"`;
   `Why did I feel at such unease with 'me'?`;
   `If you stare at something for a long time, it can seem to warp and change...`;
   `The unnaturalness I felt right then seemed a lot like that phenomenon.`;
   `As though I was taking something for granted that I shouldn't. `;
   `It was probably just my mind playing tricks on me.`;
   `And not thinking any more about it...I shook Coco's shoulder. She was next to me, asleep head down on the table.`;
   Takeshi`"Hey, get up. It's morning."`;

});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A013)`"Funyuu... hmmmmm..."`;
   `Rubbing her eyes, Coco got up slowly.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A014)`"Oh, good morning...Brother..."`;
   Takeshi`"...Huh?"`;
   Takeshi`"Oh, yeah. Coco, you have a brother? But, hey, you got the two of us mixed up..."`;
   Coco(T3A015)`"No...brother..."`;
   Coco(T3A016)`"We need to get ready or we'll be late for school..."`;
   `Coco was still half in dreamland.`;
   Takeshi`"Late for school?"`;
   Takeshi`"What are you talking about?"`;
   Coco(T3A017)`"Well, that's just the setting it is..."`;
   Takeshi`"Uh, listen..."`;
   Takeshi`"Stop messing around, we're going to eat."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A018)`"Ah... ... Okay, Takepyon."`;

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
   `When Coco and I made it to the kiosk, everyone had gathered there...`;
   `Tsugumi, Sora, You, and the Kid... all of them.`;
   `I made my way into the submarine, and opened the door of the refrigerator in the sandwich shop.`;
   Takeshi`"Oh!"`;
   `I spotted sausages hidden in the back.`;
   `So, I decided to make everyone hotdogs.`;
   `Soon after I'd made breakfast for everyone I leaned out over the counter and said...`;
   Takeshi`"Alright, whoever wants to eat, get in line!"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A027)`"I'm first!"`;
   Takeshi`"Oh!? Well, here ya go."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A028)`"Thank you!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Help yourself to ketchup and mustard."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A029)`"Uh, I'd like one too..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A030)`"Hey, wait in line! The next person is M-E-!"`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `This was probably the way things usually were at this shop.`;
   `There still wasn't any schedule as to when we might get out of LeMU.`;
   `But in the meantime, we'd stopped thinking about the difficult and negative things.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A031)`"I'm not sure why, but you look like you're having fun."`;
   Takeshi`"Who, me? You think so? Fun...I guess maybe..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `CO02ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A032)`"Yeah, you look like might even be enjoying your life here."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"I wonder how that'd feel... I guess it'd be kind of fun, owning a stand like this!"`;

});
fgload({ id: 4, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A033)`"Owning...a stand..."`;
   Coco(T3A034)`"Takepyon, you really do look like you work here."`;
   Takeshi`"Hot dogs, get your hotdogs! They're on the house!"`;
   Coco(T3A035)`"You don't think, that maybe you could have sold hotdogs in a past life?"`;
   Takeshi`"Aw shucks, ma'am, you're just sayin' that..."`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A036)`"No, Coco, I don't think he was a hotdog man, I think he was..."`;

});
fgload({ id: 4, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A037)`"... a sandwich man?"`;
   Takeshi`"Ah, come on, You!"`;

});
fgload({ id: 4, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A038)`"A ha, ha, ha, ha..."`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The three of them took their hotdogs and laughing walked a short distance from the stand.`;
   `And as if they had traded places, Tsugumi came up.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A047)`"What just happened?"`;
   Takeshi`"Ah, everyone was eating hotdogs. Hey, I've got one for you too."`;
   Tsugumi`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi took it without so much as a thank you, and went to the corner of the room.`;
   `Sora was talking with the Kid.`;
   `I was a bit sad that I couldn't make anything for her.`;
   `Still leaning over I stuffed my hotdog greedily into my mouth, and watched everyone from where I was.`;
   `It was May 3rd—`;
   `It had been three days since we'd been trapped.`;
   `But everyone was bright, and showed no feeling of fatigue or sadness.`;
   `Especially Coco—`;
   `It was hard to believe that she had suffered so much that first night.`;
   `For no reason, Coco was playing with Pipi's tail.`;
   `Looking at her smiling face, I suddenly remembered how we had bumped into each other again.`;
   `After I got her out of the elevator, I seemed to remember...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `EV_CO02A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Coco(C1T024)`"Ah!"`;
   Takeshi`"Ah!"`;
   Coco(C1T025)`"You're that guy from before!"`;
   Takeshi`"You're that girl from before!"`;
   `The girl and I pointed at each other and froze.`;
   Pipi(PIPI_00)`"Woof!"`;
   `I spotted the scruffy face of a dog circling around her feet.`;
   Takeshi`"Popo..."`;
   Coco(C1T026)`"His name's not 'Popo'..."`;
   Coco(C1T027)`"This little guy's name is Pipi, and my name's Coco....Try not to mix them up, okay?"`;
   Takeshi`"But...what are you doing here?"`;
   Coco(C1T028)`"Well, what do you expect me to say to that...?"`;
   Coco(C1T029)`"I was trying to go to one of the lower levels, and all of a sudden this escalator stopped, and..."`;
   Takeshi`"It isn't an escalator, it's an elevator, alright?"`;
   Coco(C1T030)`"Ha, ha, oops.... I mean e-ve-lator, okay?"`;
   Takeshi`"No, NOT e-ve-lator, E-LE-VA-TOR."`;
   Takeshi`"If you're on a moving staircase, that's called an escalator, and if you're in a box that goes up and DOWN, now that's an elevator. Try not to mix them up."`;
   Coco`"......"`;
   Takeshi`"......"`;
   Coco(C1T031)`"Does it really matter?"`;
   Coco(C1T032)`"Anyways, I don't know why, but all of a sudden I was trapped in this box."`;
   Takeshi`"Really..."`;
   Coco(C1T033)`"Hey?"`;
   Takeshi`"Hmmm?"`;
   Coco(C1T034)`"I'd kind of like to get out of here...soon..."`;
   Takeshi`"Oh, aah, I'm sorry."`;
   `I said that and got down on my stomach from atop the elevator.`;
   `I leaned down from the small hole, and stuck my hand out to Coco.`;
   Coco(C1T035)`"Please, help Pipi first."`;
   `Coco held up Pipi to me, stretching as far as she could to make him reach.`;
   `I grabbed onto Pipi's front legs, and pulled him out from the hole in the ceiling.`;
   Takeshi`"Okay, next it's your turn, Coco."`;
   `I stuck out my hand again.`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T036)`"Aia! Wah! Ayah!"`;
   `Coco jumped over and over, reaching out for my hand.`;
   `But... Either she was too short, or just had a terrible jump, because she didn't even reach my fingertips.`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T044)`"Toriiyaa!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T045)`"Uuuriya!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T046)`"Eeeiii!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T047)`"Yaah!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T048)`"Waachooo!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Next I looked over to where Sora was.`;
   `She was standing next to 'The Kid,' and talking with Tsugumi about something. `;
   `I couldn't hear what they were talking about from where I was, behind the counter.`;
   `Sora Akanegasaki——.`;
   `It was hard to believe she was only an illusion generated by RSD...`;
   `I stared at her again, from a distance.`;
   `I thought about what we'd talked about the day before......`;

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
   Sora(C2T008)`"By the way, Takeshi..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T009)`"Takeshi...have you ever seen the moon?"`;
   Takeshi`"Ha, ha, ha! Yeah, are you kidding?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T010)`"Well, now let's say that you have seen a full moon."`;
   Sora(C2T011)`"And let's say that you closed your eyes. Do you think that moon would still be there?"`;
   Takeshi`"Why are you asking such obvious questions?"`;
   Takeshi`"Of course it would."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T012)`"And how about if everyone in the world closed their eyes all at the same time?"`;
   Takeshi`"I don't know what your point is, but...even if everyone in the world closed their eyes, the moon wouldn't disappear."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T013)`"Really?"`;
   Takeshi`"Yeah."`;
   Sora(C2T014)`"How can you be sure?"`;
   Takeshi`"Just open your eyes and check, right?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T015)`"That goes against the purpose of this exercise."`;
   Sora(C2T016)`"My question was whether there is any way of measuring whether or not the moon exists, if someone closes their eyes."`;
   Sora(C2T017)`"When you close your eyes, do you think this world still exists?"`;
   Sora(C2T018)`"What if I told you that not only myself, but all of LeMU was nothing but an RSD-generated illusion.....what would you do then?"`;
   Sora(C2T019)`"Can you prove that the walls, the ceiling and all of the scenery that you are witnessing actually exist?"`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T020)`"Ha, ha, I'm sorry, I was only joking."`;
   Takeshi`"That's a joke?"`;
   Sora(C2T021)`"Yes, LeMU really does exist."`;
   Sora(C2T022)`"You sounded so full of confidence when you answered...I thought I would tease you just a bit."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T023)`"However, I can say this."`;
   Sora(C2T024)`"For humans to know the world around them they must use one of their five senses."`;
   Sora(C2T025)`"If they lose all of these, they lose the ability to tell whether this world exists, or not."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T026)`"Another way of putting it might be to say that the perspective is in the eye of the beholder."`;
   Sora(C2T027)`"In this instance, I don't mean just sight, but hearing, smell, taste, touch - all of the senses."`;
   Sora(C2T028)`"The point at which we perceive the world - that is perspective."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T029)`"And I..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T030)`"I....I am the same as the moon."`;

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
   `Her existence disappeared when I close my eyes...`;
   `But I felt that Sora had just as much as, no, maybe even more human warmth, and caring than the rest of us.`;
   `Then again, there was Tsugumi's coldness...`;

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
   Tsugumi(T1C121)`"Hmmm...? I guess you're not as dumb as you look."`;
   Takeshi`"What do you mean by that?"`;
   Tsugumi(T1C122)`"I mean exactly what I said."`;
   Tsugumi(T1C123)`"You don't look that smart."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C124)`"This is a trap."`;
   Tsugumi(T1C125)`"And you probably aren't going to get out."`;
   Tsugumi(T1C126)`"No, not just you, but everyone else as well, all four of them."`;
   Tsugumi(T1C127)`"You're all the same."`;
   Takeshi`"Well, what about you then, Tsugumi?"`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C128)`"I......"`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C129)`"Yeah. I suppose I could die in a place like this."`;
   Tsugumi(T1C130)`"It wouldn't be bad at all, I guess."`;

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
   `I couldn't forget the cold smile that she had on her face as she said those words.`;
   `I was thinking this and looking at her. I wasn't sure if she could feel my gaze, but she turned to look over at me.`;
   `For some reason I felt like she could see what I was thinking and I avoided her eyes.`;
   `The next person to jump into my field of view was You.`;
   `You had finished eating her hotdog and dancing, hand in hand, with Coco.`;
   `I wondered if it were some kind of folk dance.`;
   `She smiled so wide it seemed her face might split, and laughed boisterously.`;
   `Her eyes shone so brightly...`;
   `But I knew...`;
   `Behind those eyes was hidden a past filled with sadness......`;
   `Her father had disappeared 17 years earlier.`;
   `I thought about the talk I'd had with You the day before.`;
   `Maybe the reason she carried that album around with her was she wanted something to connect her with the memories of her father.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I'd bumped into You and Coco in front of the Ruins of Lemuria yesterday (May 2nd).`;
   `In the palm of You's hand was... some kind of journal or notebook. She had it opened and was staring at a page.`;
   `Coco was standing next to her, busily peering over her shoulder.`;
   Takeshi`"What'cha looking at?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T032)`"Um, uh, we were um, looking at these pictures."`;
   Takeshi`"Pictures?"`;
   You(C2T033)`"You want to see them?"`;
   Takeshi`"Sure."`;
   You(C2T034)`"Okay, I'll show you."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `What You handed over to me was neither journal, nor notebook - it was a single file.`;
   `One small enough to fit in the palm of my hand.`;
   `It was already open, and had several pictures taken from an instant camera stuffed between the pages.`;
   `They were baby pictures.`;
   Takeshi`"It can't be..."`;
   Takeshi`"Your baby!?"`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2T035)`"Nooo stupid!"`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2T036)`"I'm 18, okay? And I'm single. Single!"`;
   Takeshi`"Yeah, right..."`;
   Takeshi`"Which means that this baby is...?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T037)`"It's Nakkyu, dummy."`;
   Coco(C2T038)`"These are from when Nakkyu was a litte bitty baby!"`;
   Takeshi`"So this is what you were laughing about?"`;
   You(C2T039)`"Something wrong with that?"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T040)`"I mean they're adorable, right? My baby pictures."`;
   You(C2T041)`"Uh, and of course, the fact that I'm cute hasn't changed a bit, you know."`;
   Takeshi`"......"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T042)`"Oh and...um...can you hand those back?"`;
   `And saying that You snatched the file out of my hands...`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `CO12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T043)`"This picture is from when I was dressed up in a kimono as a kid..."`;
   You(C2T044)`"And in this, I was head cheerleader for an all school athletic event."`;
   You(C2T045)`"And.... Oh, this one's from my first day of middle school."`;
   `You continued to flip through the pages.`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T046)`"And here's one that I took at the talent show my freshman year in high school."`;
   You(C2T047)`"Here's Keiko, Min-min, Betty, Chi-chan, Beef Yamamoto.... Oh, and couldn't forget my teacher, right?"`;
   You(C2T048)`"And the firework competition....here's my trip to the hot springs... Oh! And one from that time I stayed at Ami-chan's!"`;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T049)`"And here we have... Huh? What is this?"`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T050)`"Oooh, that's riiight. This is when we sneaked into school that one night..."`;
   You(C2T051)`"And of course the graduation ceremony...There was one more... uuummm..."`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T052)`"Here it is, heh, heh, it's hideous, right? I'd been crying and crying..."`;
   `So much of You's history was there...`;
   `Smiling faces, sad faces, silly faces, surprised faces, even shy faces...`;
   `There were girlfriends, boyfriends, teachers, people, afternoons, nights, good times and hard times...`;
   `It goes without saying, but shown in those photos were people I didn't know, places I didn't know, and a You that I didn't know.`;
   You(C2T053)`"Oh, and, and..."`;
   `You looked like she had no intention of stopping, so I rushed to get a word in.`;
   Takeshi`"Um, You? So what is this like your life's history album or something?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T054)`"A history album.... Well, I've never called it that before..."`;
   You(C2T055)`"But if you had to label it, I guess you could call it that."`;
   Takeshi`"Uh, so why are you carrying that with you?"`;
   You(C2T056)`"Huh? Why do you even need to ask?"`;

});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T057)`"Takepyon, you don't know? All girls carry around things like this. It's normal."`;
   Takeshi`"You don't say?"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T058)`"Yeah."`;
   Coco(C2T059)`"Well, all the girls I know carry them around."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T060)`"I wonder what everyone is doing right about now...?"`;
   `You murmured softly to herself as she flipped through the pages.`;
   You(C2T061)`"Do any of these people ever worry about me?"`;

});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T062)`"Oh, yeah..."`;
   Coco(C2T063)`"Do you live with your mom and dad, Takepyon?"`;
   Coco(C2T064)`"Or do you live by yourself?"`;
   `Coco threw the question at me abruptly.`;
   `Before answering I tossed the question back.`;
   Takeshi`"How about you, Coco? You're probably still living with your parents, aren't you?"`;

});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T070)`"Well, I'm 14 aren't I? Of course I am."`;

});
fgload({ id: 2, name: `CO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T071)`"Ah, well, right now my dad isn't at home, but..."`;
   Takeshi`"Hmm? Why not?"`;

});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T072)`"Because he's on a 'business trip,' that's why."`;
   Takeshi`"Oh, I see."`;
   Takeshi`"And what about you, You? Are you living with your parents or..."`;
   `(Oh! Duh! Why did I ask that!?) ? I realized it'd been a mistake to ask that.`;
   `You's dad was missing.`;
   `But it didn't seem as if she cared one way or another.`;
   You(C2T073)`"I'm living with my mom."`;
   You(C2T074)`"But I doubt she's really worried about me."`;
   You(C2T075)`"That's just the kind of person she is, my mom..."`;
   Takeshi`"What do you mean?"`;
   You(C2T076)`"I guess you could call her a positive thinker... She isn't the type to really let herself get caught up in things."`;
   You(C2T077)`"She doesn't care if I stay out all night..."`;
   You(C2T078)`"I've been living with her for 18 years... but she's never raised her voice at me once."`;
   You(C2T079)`"I grew up pretty much doing whatever I wanted."`;
   You(C2T080)`"I suppose that's why I turned out the way I did."`;
   `You showed me a page from her album that she'd turned to.`;
   `There was You with putting the hurt on some wrestler.`;
   `And the guy looked like a bulky jock of sorts.`;

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
   `Coming out of my reveries, I noticed the scene had changed a bit.`;
   `You and the kid had taken off somewhere.`;
   `Maybe they'd gone to the rest area next door.`;
   Takeshi`"It's only been two days and so much has happened..."`;
   Takeshi`"Just being trapped here is an unusual state of affairs..."`;
   `I said these words to myself without thinking.`;
   `Just then——!`;

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
   `Boooom.....`;
   `BOOOOooooooom.....`;
   `BOOOOOOOOOOOooooooooooom.....`;
   `BOOOOOOOOOOOOOOOOOOOOOOOOOOOM.....`;
   `BAM.`;

});
bgload({ name: `BG07B1`, transition: 20 });
setDialogBoxColor(GREEN);
let lbl_0000091d;
setSceneTitle({ index: 107 });
clock(`6:43`);
playSFX({ name: `SE06_04`, a1: 0, volume: 92 });
showTextbox();
text(() => {
   `BABOOOOMM!`;
   `Suddenly, a low metallic sound reverberated throughout the installation.`;
   `It was a dull, muffled sound.`;

});
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Wh-what was that!?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A061)`"This whole place just shook...a little."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C3A001)`"Sora! Sora!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Coco ran over to Sora.`;
   `Clutched to her chest was Pipi...`;
   `Coco was hugging him so hard he seemed about to rupture.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO17ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C3A003)`"Hey, did something just happen? There was an awful sound just now."`;
   Sora(C3A004)`"One of the shafts that supports this floor has started to bend out of alignment."`;
   Sora(C3A005)`"It appears as if the ocean currents may have caused it."`;
   Takeshi`"How dangerous are we talking about here?"`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A071)`"Well, it should be within the margin of error but...no, wait a second."`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C3A007)`"There is an anomaly in one the of pressure-regulating pipelines, at Zweite stock's warehouse."`;
   Takeshi`"What are pressure-regulating pipes?"`;
   Sora(C3A008)`"These pipelines are responsible for adjusting the pressure inside the multi-layered bulkheads comprising LeMU."`;
   Sora(C3A010)`"The anomaly is only slight, so you shouldn't have to hurry, but...I think it is best if someone goes to check on it. Would you please go for me?"`;
   Sora(C3A009)`"If any of them should rupture, for whatever reason, I am incapable of repairing them."`;
   Sora(C3A011)`"Would you please go for me?"`;
   Takeshi`"Sure, leave it to me."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A076)`"I'll go too."`;
   Takeshi`"Tsugumi? You sure?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A077)`"Well, if we're going to fix something, we'll need tools, right? I know my way around a workshop."`;
   Takeshi`"Alright.... Let's go."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C3A015)`"I'll help too!"`;
   Pipi(PIPI_00)`"Woof."`;
   Takeshi`"Okay, you can come too Coco..." `;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"By the way, does anyone know where You and the kid went?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C3A016)`"You and the kid are in the Security Office."`;
   Takeshi`"What the heck are they doing there...?"`;
   Sora(C3A017)`"They are trying to make contact with LeMMIH."`;
   Takeshi`"With LeMMIH...?"`;
   Takeshi`"What am I thinking? I've got other things to worry about."`;
   Takeshi`"Alright, the three of us are going to the warehouse..."`;
   Takeshi`"Sora? Give You and the kid an update of the situation, will you?"`;
   Sora(C3A018)`"Understood."`;

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
   `We opened up the door to the storage room to find the floor covered in water.`;
   `The water level came up to the tops of my shoes.`;
   `From the back of the room, we could hear a hissing sound coming from somewhere.`;
   `The sound drew our attention.`;
   `There was a faint crack in the pressure-regulating pipe, and water was dancing out of it in a fine mist.`;
   `If that's all it was, it didn't seem like we had anything to worry about.`;
   `It seemed like we'd be able to fix it in no time.`;
   `Tsugumi had opened up the toolbox that was in the corner of the room and started spreading a few tools out in front of her.`;
   Takeshi`"What do we need to do?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A116)`"The pipe is bent a little bit...I'm going to clamp a metal sleeve on it, would you support the pipe for me?"`;
   Takeshi`"Roger that!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C3A020)`"What should I do?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A118)`"On the other side of this...there should be a valve attached to this pipe. You see it? I want you to loosen that a bit."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C3A022)`"Okaaaay, gotcha."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `In this way, the three of us started working in unison.`;
   `We opened and closed the valves on a number of pipes, re-attached pipes and welded shut cracks...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `............`;
   `.........`;
   `......`;

});
hideTextbox();
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Tsugumi(T3A125)`"Takeshi? Don't just stand there, on to the next pipe."`;
   Takeshi`"Huh? Oh, okay."`;

});
showTextbox();
text(() => {
   Tsugumi(T3A126)`"First take that blue valve and..."`;
   Tsugumi(T3A127)`"After that I want you to turn the red valve..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We'd fixed a number of pipes, but the sound of escaping steam still hadn't stopped.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A128)`"Alright Coco, wait just a bit."`;

});
showTextbox();
text(() => {
   Coco(C3A027)`"Okay, I'm ready."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A130)`"Takeshi, move the valves in the order I told you. Now."`;
   Takeshi`"......"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A131)`"Hey, you listening Takeshi?"`;
   Takeshi`"Huh? Yeah, alright, alright. I'm sorry. Blue, then red, right?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A132)`"Yeah. Loosen then and shut them again."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I set myself upon the blue valve in front of me.`;
   `I was supposed to loosen this...`;
   `I'm supposed to turn this counter-clockwise, yeah...`;
   `I turned the blue valve with all of my strength.`;

});
stopSFX()
showTextbox();
text(() => {
   `The sound of rushing steam grew softer.`;
   `Alright, next close the red valve...`;
   `The steam dancing from the pipe grew weaker.`;
   `(Alright, that does it.)`;
   Takeshi`"Okay!"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A133)`"Coco, hold on just a little longer."`;
   Coco(C3A032)`"Okay."`;

});
showTextbox();
text(() => {
   `Holding up her left hand to shield her face, Tsugumi operated the welding torch with her right hand.`;
   `The crack in the pipe closed visibly.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A138)`"Takeshi, after I weld this on, I want you to return the valves to their original positions right away."`;
   Takeshi`"Okay."`;
   `Tsugumi finished welding.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A139)`"Now turn it back! Fast!"`;
   Takeshi`"Alright! Geez!"`;

});
showTextbox();
text(() => {
   `I quickly turned the valves in the opposite direction.`;
   `I could feel the steam flowing through the valve.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A140)`"Coco, this pipe's done. Go on to the next one."`;
   Coco(C3A036)`"Okay, where is it?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A142)`"Hmmm... hold on just a second."`;

});
showTextbox();
text(() => {
   `The water underfoot still hadn't gone down at all and was swirling around.`;
   `The air conditioner on the wall was sucking in water and gurgling it out.`;
   `It appeared it had also shorted out.`;
   `I could see blue-white sparks jumping around inside.`;
   `(I hope it doesn't shock me...)`;

});
stopBGM();
showTextbox();
text(() => {
   `As soon as I thought this...`;

});
hideTextbox();
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setNumberOfFlash(2);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   `Bam!`;
   `It sounded like the air conditioner was about to break apart.`;

});
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Smoke started pouring out from the exhaust vent.`;
   `And from the intake port, murky water started gurgling out.`;
   `The area around my legs was quickly getting grimy.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C3A038)`"Water..."`;
   Tsugumi(C3A039)`"The water that was in the suction pipe is starting to backflow. Be careful."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Wagh!"`;
   `My leg got caught up in the jet of muddy water and I lost my balance.`;
   `I reached out to grab something...`;
   `I caught on to a stack of crates and old containers lying nearby.`;
   `GR-OOAAN`;
   `It made an ominous sound.`;
   `My body draped awkwardly over the containers.`;
   `I lifted my gaze.`;
   `The top of the stack was wobbling precariously.`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I looked to Tsugumi.`;
   `Our eyes met. She was frozen in place, holding her breath.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I shot a glance over at Coco.`;
   `She had her back turned to me, and was grabbing on to a pipe.`;
   `I looked up at the ceiling again.`;

});
removeBG({ mode: WHITE, transition: 1 });
stopSFX()
showTextbox();
text(() => {
   `It all happened in an instant...`;
   `The containers, having lost their balance, started to rain down.`;
   `Chunks of metal...rusted pipes...thick iron cylinders...`;
   `There was no sound. I perceived everything in vivid slow motion. `;
   `Countless pieces of metal, all pouring down quietly.`;
   `Although my mind was spinning, my body couldn't catch up.`;
   `I couldn't talk. I couldn't move.`;
   `Crashing metal.`;
   `A raging monster...`;
   `With its sight fixed on that small frame...`;
   `Pouncing, devouring.`;
   `All of it headed—`;
   `for—`;
   Tsugumi(C3A040)`"—Co, Cocoo!!"`;
   Takeshi`"COCOoo!!"`;

});
showTextbox();
text(() => {
   Coco(C3A041)`"Huh?"`;

});
hideTextbox();
playSFX({ name: `SE07_00`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 3, color: BLACK });
closeFog2();
waitForSFX();
delay({ interval: 60 });
showTextbox();
text(() => {
   `The sight that flashed before me...`;
   `Was a mountain of metal.`;
   `The old pipes broke apart into thousands of pieces.`;
   `The containers splintered apart, their sharp corners flashing.`;
   `I landed in the water - I'd thrown myself out of the way, arms and legs flailing.`;
   `The pipes on the wall were cracked.`;
   `They had been damaged from the shock...`;
   `And out of the cracks, water was gushing out.`;
   `And fallen nearby was`;
   `Fallen was...`;

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
   Takeshi`"—Tsugumi!!"`;
   `I ran over to where she was.`;
   `Coco looked around at the spectacle and hugged Pipi to her tightly, her hands trembling.`;
   `Yes...I had seen it all...`;
   `Just before the metallic objects had crashed down on Coco's back, Tsugumi had thrust her out of the way.`;
   `She'd protected her... while risking her own life...`;
   Tsugumi(C3A042)`"Agh..."`;
   `A metal shard had dug deeply into Tsugumi's right thigh. `;
   `It didn't look like she could move.`;
   Tsugumi(C3A043)`"I guess I messed up."`;
   `Tsugumi grimaced and pushed down on the wound.`;
   `She was losing a lot of blood.`;
   `The murky water was getting redder by the moment...`;
   Takeshi`"Hey, you okay!?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A149)`"Heh, heh, does this LOOK okay to you?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A150)`"Always asking stupid questions."`;
   Takeshi`"S-stop laughing! I'm going to get that stuff off you, just wait!!"`;
   `I tried to lift the metal off of her.`;
   `But, no matter how hard I tried, the heavy chunk wouldn't budge.`;
   Takeshi`"Damn it!"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A151)`"Looks like it's no use..."`;
   `In the meantime, the water level had risen from ankle to knee height.`;
   Coco(C3A047)`"Tsugumiii!!"`;
   `Coco started to rush over to Tsugumi.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A153)`"Get away from me!"`;
   `Stung by Tsugumi's cold words, Coco stiffened and stopped.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A154)`"Get out of here, Coco!"`;
   Tsugumi(T3A155)`"You too Takeshi, get out while you can..."`;
   Tsugumi(T3A156)`"At this rate, this room's partitions won't last."`;
   Tsugumi(T3A157)`"You'll all die if you stay."`;
   Tsugumi(T3A158)`"So, hurry..."`;
   Tsugumi(T3A159)`"Get out of here."`;
   Coco`"......"`;
   Takeshi`"....But-"`;
   Takeshi`"Stupid idiot!! You think I can just leave you!?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A160)`"There's nothing you can do, right? I'm stuck here."`;
   Tsugumi(T3A161)`"And with this injury, you can't help me anyway——"`;
   Takeshi`"Shut up!!"`;
   `I roared out.`;
   Takeshi`"I won't let you give up on me now, dammit!"`;
   Takeshi`"Hey Coco! What are you standing there for!?"`;
   Coco(C3A057)`"Wah! Y-yes!?"`;
   Takeshi`"Get on that intercom and contact the others!"`;
   `With all her might Coco moved her trembling legs to get closer to the intercom.`;
   Coco(C3A058)`"It's no use.... It's broken! I pushed the button, but nothing happens!!"`;
   Takeshi`"So run up and tell the others to get over here!"`;
   Coco(C3A059)`"O-okay, I'm going!!"`;
   `Although she looked flustered, Coco nodded and ran off.`;
   `The door to the warehouse closed.`;
   `Soon, water came up to the bottom of the door.`;

});
bgload({ name: `EV_TU07B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi`"......"`;
   Takeshi`"......"`;
   `The water continued to rise.`;
   `From her waist down, Tsugumi was almost completely underwater.`;
   `The water level was almost over my knees.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A165)`"What are you trying to prove..."`;
   Tsugumi(T3A166)`"It doesn't mean anything... just leave. I don't want you here."`;
   Takeshi`"I wouldn't be here if there wasn't a reason."`;
   Takeshi`"I can't just leave you here."`;

});
showTextbox();
text(() => {
   Tsugumi(T3A167)`"Why not?"`;
   Takeshi`"I've taken nothing but abuse from you, and you still haven't thanked me properly yet."`;

});
showTextbox();
text(() => {
   Tsugumi(T3A168)`"Oh, really...heh, heh. Well, that's reason enough I suppose. "`;
   `Tsugumi laughed weakly.`;
   `Her lips were trembling.`;
   `The murky water was spreading.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A169)`"It's gotten cold in here..."`;
   Takeshi`"Alright Tsugumi...I need you to stay with me, now."`;
   `I chose my words as carefully as possible.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A170)`"I'm perfectly sane."`;
   Takeshi`"You'll be okay. The wound isn't that deep, so don't worry."`;
   `I was lying.`;
   `Even I could tell that her wound was life-threatening.`;
   `Tsugumi's white femur had broken through and protruded from her flesh..`;

});
showTextbox();
text(() => {
   Tsugumi(T3A171)`"'You'll be okay', what makes you think that?"`;
   Tsugumi(T3A172)`"You're the one who's crazy..."`;
   Takeshi`"I'm sorry, it's all my fault. I wasn't paying attention, and you got hurt..."`;
   Tsugumi`"......"`;
   Takeshi`"......"`;

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
   `The water level was rising up to Tsugumi's head.`;
   `A section of the partitioning had broken and seawater was rushing in.`;
   `The water was ice cold.`;
   `The water volume increased mercilessly.`;
   Tsugumi`"......"`;
   `Her face contorted with pain.`;
   `In agony, she labored for breath.`;
   `There wasn't any time.`;
   `Making up my mind, I dove into the water.`;
   `I couldn't open my eyes.`;
   `All I could do was search the bottom using my intuition.`;
   `(aaaaaAAAAGGGH!)`;
   `(DAMN IT!!!)`;
   `Using all of my strength, I heaved up the large mass of metal sticking into Tsugumi's leg.`;
   `Aided slightly by the buoyancy of the water, the metal hunk moved slightly.`;
   `Tsugumi pulled her leg out at once.`;

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
   `I lifted my face out of the water, gulping greedily for air.`;
   `The flooding wouldn't stop.`;
   `The water level was already above my shoulders.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A173)`"You are..."`;
   Tsugumi(T3A174)`"Such a stubborn idiot..."`;
   Takeshi`"Shut up and just keep quiet."`;
   `With her leg injured, there was no way Tsugumi could swim.`;
   `Holding onto her, I headed for the exit.`;
   `But the door was already under water.`;

});
showTextbox();
text(() => {
   Tsugumi(T3A175)`"Look, there's no way you can save me..."`;
   Takeshi`"I told you to keep quiet!"`;
   Tsugumi`"......"`;
   Takeshi`"There's got to be another exit. I'll look for that."`;
   Tsugumi`"....."`;
   Takeshi`"It'll be okay. We'll find a way out of this."`;

});
showTextbox();
text(() => {
   Tsugumi(T3A176)`"There you go again, saying 'It'll be okay'...you're so irresponsible..."`;
   Takeshi`"Would you keep quiet!?"`;
   Tsugumi`"......"`;
   Takeshi`"......"`;
   `I probably could have forced open the door if I had tried, but it would have put the second floor in danger of flooding.`;
   `I searched desperately for an emergency exit.`;
   `My legs wouldn't touch the floor.`;
   `I could hardly breathe.`;
   `I was at my limit.`;
   Takeshi`"Ah!"`;
   Takeshi`"There's a ladder! In the corner of the room, there's a ladder. We can use it to get to the emergency passage."`;
   Takeshi`"We're going to make it, Tsugumi!!"`;

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
   `I burst into the infirmary.`;
   `I set the injured Tsugumi down on the bed.`;
   `She was no longer conscious.`;
   `She'd lost so much blood.`;
   `We had to take emergency measures immediately.`;
   Takeshi`"Hey, what are we going to do!?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C3A072)`"Get out of the way!!"`;
   `You, who'd been waiting in the room, pushed me out of the way.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `A tourniquet was taken out from a rack of medical instruments on the wall, and fastened around Tsugumi's thigh.`;
   You(C3A073)`"This is bad..."`;
   Takeshi`"What's the status? How bad is it?"`;
   Takeshi`"Can't we use that scanner to check it out?"`;
   `I pointed to the 'L-MRI.'`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C3A074)`"It doesn't work."`;
   You(C3A075)`"Sora already told us, it's broken!"`;
   Takeshi`"Oh... yeah..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Well, what can we do... what are we..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C3A076)`"I'll have a look."`;

});
hideTextbox();
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
playSFX({ name: `SE03_02`, a1: 1, volume: 90 });
waitForSFX();
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora put her hand on Tsugumi. A holographic window appeared in the air.`;
   `A small sensor, or camera started moving on the ceiling.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C3A077)`"Well, this is just a bio scan, so I can't tell for certain, but..."`;
   Sora(C3A078)`"Her femur is fractured. And it looks like it might be compound."`;
   Sora(C3A079)`"That and the artery is severed. She'll need sutures."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C3A080)`"I've stitched up my finger before. It was with a survival kit, but..."`;

});
fgload({ id: 1, name: `SO18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C3A081)`"Well, You, do you think you can assist me?"`;
   You(C3A082)`"I'll do my best! Do we have anesthetic?"`;
   Sora(C3A083)`"I'll get it ready. The laser scalpel, forceps, and sutures ... everything we need is already in the room."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sora moved the electric wagon, and used its robotic arm to gather the necessary surgical tools.`;
   `You flipped up Tsugumi's skirt, and fearlessly plunged her hand into the wound.`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C3A084)`"Takeshi!!"`;
   You(C3A085)`"You're in the way!"`;
   `You pointed angrily at the exit.`;
   Takeshi`"Uh, yeah, sorry...take care of her, okay!"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C3A086)`"Leave it to me!"`;
   `You looked determined to show us all what she was capable of.`;

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
   `As soon as I left the tense atmosphere of the emergency room, my fatigue hit me.`;
   Takeshi`"*sigh*...."`;
   `I set myself down on a nearby chair.`;

});
fgload({ id: 1, name: `CO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C3A087)`"Is Tsugumi going to be..."`;
   `Coco was holding onto Pipi, but looked as if she was having a hard time relaxing.`;
   Takeshi`"You let them know right away so... she should be fine."`;

});
fgload({ id: 1, name: `CO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C3A088)`"Really...?"`;
   `Coco's eyes were moist.`;
   `It was hard to tell, but she had probably been crying moments earlier.`;
   `Even still, she tried to smile.`;
   Coco(C3A089)`"Hey, you think Tsugumi's..."`;
   Coco(C3A090)`"Tsugumi's...gonna be okay, right?"`;
   `Still looking worried, she tilted her head as she asked me.`;
   Takeshi`"Yeah. She'll be fine."`;
   Takeshi`"Absolutely okay...?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Coco put her head on my shoulder.`;
   `I held Coco close, and patted her head softly.`;
   Coco(C3A091)`"She's going to be okay right? Right?"`;
   `Her body trembling, she asked me this over and over.`;
   `I thought maybe she had been trying not to cry until that moment.`;
   `Coco, head pressed against my chest started crying.`;
   Coco(C3A092)`"Aaaagh, waaaaaah, waaaaah!"`;
   Coco(C3A093)`"Aaaagh, waaaaaah, waaaaah!"`;

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
   //??
   Unk(C3A094)`"Aaaagh, waaaaaah, waaaaah"`;
   //??
   Unk(C3A095)`"waaaaaah, waaaaah"`;
   //??
   Unk(C3A096)`"waaaaaah, waaaaah"`;

});
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A097)`"...Huh?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A098)`"Kid, what are you crying about?"`;
   Kid`".................Huh?"`;
   Sara(C3A099)`"Did someone pick on you?"`;
   Kid`"......."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A100)`"I know. It's Takeshi, isn't it."`;
   `I shook my head back and forth.`;

});
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A101)`"So, it's Nakkyu then."`;
   `I kept shaking my head.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A102)`"Alright then, Tsugumi!"`;
   `Again, I shook my head back and forth.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A103)`"Eh? Well, it couldn't be...Sora!?"`;
   Kid`"No, nobody is picking on me."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A104)`"So why are you crying then?"`;
   Kid`"It's...it's..."`;

});
stopBGM();
showTextbox();
text(() => {
   `I was looking wildly around in all directions.`;
   `We were in front of the emergency room.`;
   `Sara was standing right in front of me.`;
   `But I didn't see anyone else.`;
   Sara(C3A105)`"Hmmm?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I said nothing, but ran into the room.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `No one was there......`;
   `She wasn't lying on the examination table.`;

});
playBGM({ num: 13, volume: 100 });
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A106)`"Hey, why'd you run away!?"`;
   `Sara's eyebrows were raised questioningly. `;
   Kid`"I didn't run away..."`;
   Kid`"I just...wanted to check something is all...."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A107)`"What?"`;
   `I stood to the side of the table, and slid my hand across its surface.`;
   `There was no warmth.`;

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
   Sora(C3A078)`"Her femur is fractured. And it looks like it might be compound."`;
   Sora(C3A079)`"That and the artery is severed. She'll need sutures."`;
   You(C3A082)`"I'll do my best! Do we have anesthetic?"`;
   Sora(C3A083)`"I'll get it ready. The laser scalpel, forceps, and sutures ...everything we need is already in the room."`;
   You(C3A084)`"Takeshi!!"`;
   You(C3A085)`"You're in the way!"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `All these voices jumped back and forth in my head...voices...voices...voices...`;
   `I twisted my head and turned, looking around the inside of the emergency room.`;
   `Looking slowly.`;
   `The noise from before seemed like a dream.`;
   `Seemed???`;
   `(Ha, ha, what am I thinking...)`;
   `(It was only a 'dream'—Just a 'dream'.....)`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A108)`"Hey? Tell me."`;
   Sara(C3A109)`"What did you want to check?"`;
   `I looked straight into Sara's eyes and answered.`;
   Kid`"I wanted to see if.....it was real or a dream."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A110)`"What?"`;
   Kid`"I had a terrible dream."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A111)`"What about?"`;
   Kid`"Tsugumi hurt her leg really bad."`;
   Kid`"There was flooding in the storage area and, when she went to fix it, a big chunk of metal fell on her."`;
   Kid`"And then Tsugumi...um...her leg got trapped by the metal."`;
   Sara`"........."`;
   Kid`"And she got a huge gash on her right thigh, I could see the yellow of her fat, the red color of her muscle, and white bone."`;
   Kid`"Her artery, lymph nodes, even nerve endings all hanging out and pulsating like rubber tubes."`;
   Kid`"The whole area was covered in a sea of blood......"`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A112)`"Eeeewww..."`;
   Sara(C3A113)`"Makes me feel sick just hearing about it."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A114)`"How can you talk about that kind of dream so calmly?"`;
   Kid`"Well it's not as if I WANTED to see it..."`;
   Sara(C3A115)`"Hmmm..."`;
   Sara(C3A116)`"So that's why you decided to run into here all of a sudden?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A117)`"Well, I guess it's possible that you'd start bawling your head off after seeing a dream like that......"`;
   Kid`"Bawling? ...Was I crying?"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A118)`"Of course you were! Like a hysteric three year old."`;
   `That's when I realized.`;
   `On my cheeks and chin, there was something that felt cold...`;
   `There was a small drop of moisture sparkling on my eyelash......`;
   `I hurriedly wiped away my tears.`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `So...I had been crying...`;
   `It had all happened while I was sleeping, so I had no idea why I'd been crying.`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A119)`"Hey, kid?"`;
   Sara(C3A120)`"Something bothers me..."`;
   Kid`"?"`;
   Sara(C3A121)`"You just said 'The warehouse started flooding,' right?"`;
   Kid`"Yeah."`;
   Sara(C3A122)`"That actually happened."`;
   Kid`"...What?"`;
   Sara(C3A123)`"When you were sleeping, a pipe burst in the storage room and water started flooding in."`;
   Kid`"When I was...sleeping...?"`;
   `What was that supposed to mean?`;
   `I couldn't fully grasp what was going on from what I'd heard.`;
   `My mind froze.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A124)`"But, don't worry, okay? It got fixed without any hitches."`;
   Kid`"What about Tsugumi?"`;
   `I didn't think it was possible, but I asked anyway.`;
   Sara(C3A125)`"She's fine, of course!"`;
   Sara(C3A126)`"She did most of the repairing."`;
   Kid`"Really...."`;
   `For some reason I felt relieved.`;
   `I wondered if it was because my dream had been so real?`;

});
stopBGM();
showTextbox();
text(() => {
   `No, wait...`;
   `Dream...?`;
   `Why would I have a dream about the warehouse flooding?`;
   `I was sleeping...`;
   `As though she had read my thoughts, Sara said...`;

});
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A127)`"But, still, it's kind of strange, you know?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A128)`"You didn't have an out-of-body experience, did you?"`;
   `She said as if she were making fun of me.`;
   `But honestly, Sara probably didn't take the possibility seriously.`;
   `My mind was turning slowly, but hadn't started working normally again.`;
   `Something was preventing me from thinking.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Out-of-body experience..."`;
   Kid`"If I could do that, I could peep down girl's underwear all I wanted..."`;

});
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   `I made a stab at a joke.`;
   `The fact that I could do so surprised me somewhat.`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A129)`"Moron."`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Moron.`;
   Sara(C3A130)`"Even if you could look up somebody's skirt, you don't look down people's underwear!!"`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `SMACK.`;
   `Sara whacked me on the head a couple of times.`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Thinking the whole situation odd, I started to laugh.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A131)`"But you seem like you're doing better."`;
   Sara(C3A132)`"I was really worried last night that you were going to die or something..."`;
   Sara(C3A133)`"But you seem just fine now."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A134)`"What? You don't remember?"`;
   Sara(C3A135)`"You fell over and were foaming at the mouth."`;
   Kid`"What?"`;
   Sara(C3A136)`"Yeah, and you were flailing around on the ground like an upside down crab. Snip, snip."`;
   Sara(C3A137)`"By the time Takeshi called us all together, you were already like that."`;
   Sara(C3A138)`"So all we could do was pick you up..."`;
   Sara(C3A139)`"And carry you into this infirmary."`;
   Sara(C3A140)`"Got it?"`;
   Kid`"I got...it..."`;
   Sara(C3A141)`"You probably don't remember but...it was really intense."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A142)`"You really had us worried there."`;
   `Sara slapped me gently on the cheek.`;
   `My head turned to the side with the force.`;
   `And from that position, I asked...`;
   Kid`"Hey...? Where was I passed out...?"`;

});
stopBGM();
showTextbox();
text(() => {
   Sara(C3A143)`"In the changing room, in front of the mirror."`;

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
   `—The changing room.`;
   `It was a rectangular room...and stuck to the back wall was a large mirror.`;
   `The bench had been returned to its original position.`;
   `I walked up to the mirror.`;

});
playBGM({ num: 16, volume: 100 });
bgload({ name: `EV_ET01B`, transition: 20 });
showTextbox();
text(() => {
   `I didn't recognize my face...`;
   `I didn't recognize this kid...`;
   `I touched my eyebrow with my right hand.`;
   `He touched his eyebrow with his left hand.`;
   Kid`"A, B, C, D, E..."`;
   `The sounds that I uttered came to my ears.`;
   `The kid in the mirror mouthed the exact same words, but of course I couldn't hear his voice.`;
   `I reached out my left hand to touch him.`;
   `He put out his right hand and did the same thing.`;
   `My nails hit the hard surface of the glass with a 'click.'`;
   `But I couldn't reach him.`;
   `Looking closely, I could see a face floating over his left shoulder.`;
   `Two pairs of eyes stared intensely at me.`;
   `It had to be an evil spirit.`;
   `Maybe he was even being possessed.`;
   `(That's so sad, he's been taken over by a demon...)`;
   `And as soon as I said that to myself, I realized that HE was looking at ME.`;
   `(...What???...I'm being possessed???)`;

});
stopBGM();
showTextbox();
text(() => {
   Sara(C3A144)`"Hey."`;
   Kid`"Aaaah! Sa-Sa-Ssarah!"`;

});
playBGM({ num: 6, volume: 100 });
bgload({ name: `BG12A1`, transition: 20 });
showTextbox();
text(() => {
   `I jumped about three feet in the air, bending backwards as I leapt.`;
   Kid`"W-w-when'd you get here!?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A145)`"Heh, heh, heh..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A146)`"'Tis but a simple thing, to conceal the pitter patter of my steps."`;
   Kid`"Really..."`;
   `Apparently, the person who'd been looking over my shoulder was Sara.`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A147)`"Well, you didn't say anything, you just took off."`;
   Kid`"So you went and followed me?"`;
   Sara(C3A148)`"Yeah."`;
   `Sara had grabbed on to her tied-up hair with both hands and was swinging it back and forth.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A149)`"So? What's with the mirror?"`;
   `She pointed to the mirror with the tip of her hair.`;
   Kid`"Well, uh..."`;
   Sara(C3A150)`"Well, what?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I pulled Sara by the arm over to stand in front of the mirror.`;

});
bgload({ name: `EV_ET01C`, transition: 20 });
showTextbox();
text(() => {
   `Both of our images were reflected on the mirror's surface.`;
   `The left and right side of her face was reflected back in reverse, but there was no mistaking it was her.`;
   `My face on the other hand...`;
   Kid`"Hey? Who's that reflected in the mirror?"`;
   Sara(C3A151)`"...H-huh?...I don't understand the question."`;
   Kid`"This kid."`;
   Kid`"The kid standing next to you..."`;
   Kid`"Who is he?"`;
   Sara(C3A152)`"Haa...we've started with this again eh...?"`;
   Kid`"Come on...I'm being serious."`;
   Sara`"........"`;
   Kid`"Is this...really my face?"`;
   Sara(C3A153)`"Well, if it isn't your face, whose face is it?"`;
   Kid`"Hmmm..."`;
   Kid`"I guess you're right..."`;
   `I knew the answer, but I still had needed to check.`;
   `This kid was...me.`;
   `The face reflected in the mirror was mine.`;
   Sara(C3A154)`"Are you okay?"`;
   Kid`"Yeah, I'm fine."`;
   Kid`"But I'm also not fine."`;
   Sara(C3A155)`"Which one is it?"`;
   `A pouting Sara was in the mirror.`;
   `I looked at her figure in the reflection.`;
   `She looked back at me.`;
   `Our gazes intersected and overlapped at the same space at the same time.`;
   Kid`"I couldn't remember my own face."`;
   Kid`"I couldn't remember...and I still can't remember it."`;
   Kid`"Of course, I understand that the person reflected in the mirror is 'me.'"`;
   Kid`"But...how can I say it...? It doesn't feel real..."`;
   Sara(C3A156)`"I see."`;
   Kid`"That's why I passed out in front of the mirror last night."`;
   Kid`"The face reflecting back at me in the mirror, felt like someone else, someone I didn't know..."`;
   Sara(C3A157)`"Hmmm..."`;
   Sara(C3A158)`"But that shouldn't be enough to make you foam at the mouth, don't you think?"`;
   Sara(C3A159)`"I mean if you looked into the mirror and suddenly were hopelessly ugly, even I would faint, but..."`;
   Sara(C3A160)`"Your face...isn't that bad..."`;
   Sara(C3A161)`"I mean you'd think that you'd be relieved and think, 'You know I've got a pretty nice looking face.'"`;
   `Sara glanced at the mirror, and took a good look at my face. `;
   Sara(C3A162)`"I mean, if I had to say one way or the other, I like your face."`;
   `And, so saying, Sara pointed the tip of her hair at me.`;
   Sara(C3A163)`"Do you want to know why?"`;
   Kid`"........."`;
   Sara(C3A164)`"I think you look a little like me."`;
   Kid`"...L-look like? ...I look like you?"`;
   `I stared intently at Sara's face.`;
   Sara(C3A165)`"You don't think so?"`;
   `Suddenly, a vast whirling pattern came into my mind.`;
   `It spun round and round, round and round, paralyzing my ability to think.`;
   Kid`"I...d-don't think so."`;
   `It took all my will to mumble just that.`;
   Sara(C3A166)`"Reeeally? I think our eyes look the same."`;
   Kid`".............."`;
   Sara(C3A167)`"Hey, why are you making such a sour face?"`;
   Sara(C3A168)`"I'm giving you a compliment."`;
   Sara(C3A169)`"Or maybe, I guess you could say I'm giving myself a compliment..."`;
   `Sara started smiling shyly.`;
   `And then, all of a sudden she tickled my nose with the tip of her hair.`;
   Kid`"Hey! What're you doing!?"`;

});
bgload({ name: `BG12A1`, transition: 20 });
showTextbox();
text(() => {
   `I jumped back away from her.`;

});
fgload({ id: 1, name: `SA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A170)`"Ha, ha."`;
   `Sara smiled mischievously.`;
   `The smell of her hair seeped into my mind.`;
   `It was a smell somehow so familiar, almost animal and private.`;

});
l_choice = 0;
jump(`YC3A2`);
