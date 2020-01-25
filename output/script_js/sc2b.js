l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S103)`"Hey, Kid. So what're you gonna do?"`;
   Kid`"Who? Me...?"`;

});
choice(
   `I'll help You`,
   `I'll wait here`,
   `Why don't we go together?`,
);
switch (l_choice) {
   case 0: goto(lbl_00000093);
   case 1: goto(lbl_000002d0);
   case 2: goto(lbl_000005c8);
}
let lbl_00000093;
showTextbox();
text(() => {
   Kid`"I'm going to help out You."`;

});
fgload({ id: 1, name: `SA03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S104)`"Okay. In that case, Sara and I will hold down the fort here."`;

});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S105)`"You can't complain about that, right?"`;
   You(C2S106)`"Okay."`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S107)`"Geez. Damned if I do, damned if I don't..."`;
   `It seemed that Takeshi was oblivious to his disturbing dream the night before.`;
   Kid`"I figure that You is concerned about you in her own way."`;
   Kid`"Like when she had had you carry the heavy toolbox...maybe it was her way of saying 'rest a bit' or 'take it easy.'"`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S108)`"You think so? That's a pretty generous interpretation, I'd say."`;
   Takeshi(C2S109)`"Oh well. In that case, I guess Sara and I will just have to sit back and relax - together."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S110)`"Just so you know, I'm a third-degree black belt in Aikido."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S111)`"Huh?"`;
   Sara(C2S112)`"And also in karate, and second-degree in kendo, and in archery, and a seventh in Iga Style Ninjutsu."`;
   Takeshi(C2S113)`"???"`;
   Sara(C2S114)`"So basically...you'd better not try anything on me, you got it?"`;

});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"..............."`;
   You(C2S115)`"Kid, should we get going?"`;
   Kid`"Uh, yeah..."`;
   `You and I left the increasingly tense atmosphere behind.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
stopBGM();
setSceneTitle({ index: 60 });
bgload({ name: `BG20B2`, transition: 26 });
playBGM({ num: 13, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `The room was covered in a massive web of pipes.`;
   `The pipes continued into the adjacent Generator Room. It seemed that by opening and closing the valves, the water and oil pressure could be adjusted.`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `'Normally LeMMIH is responsible for maintaining the Generator Room, but even LeMMIH can't do much when the generator itself goes out.'`;
   `'Anyhow, this is all because the power supply is down.'`;
   `'This room is designed so that maintenance can be performed manually at times like this, or during blackouts.'`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `...that was what You told me.`;
   `You selected one pipe from the countless rows of them and instructed me to close its valve.`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `As ordered, I turned the valve around and around.`;
   Kid`"Hey, You?"`;
   `I said this as I was closing the valve.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S116)`"What?"`;
   Kid`"It's about the girl from yesterday."`;
   You(C2S117)`"Yesterday? You mean the seventh survivor you said you saw?"`;
   Kid`"Yeah."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S118)`"You're sure your eyes weren't playing tricks on you?"`;
   Kid`"I'm positive. These eyes saw her."`;
   You(C2S119)`"Maybe you've got some kind of eye disease."`;
   Kid`"Huh? Dis....disease...?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S120)`"I'm kidding...it's a joke. Why do you always take everything seriously?"`;
   Kid`"Enough already!"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S121)`"Alright, alright...I'll listen to your stories of unidentified survivors later."`;
   You(C2S122)`"Right now we have to work."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid`"..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   `Finally the valve was completely shut.`;

});
hideTextbox();
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(C2S123)`"That should do it."`;
   Kid`"You, can we talk now...?"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S124)`"Let's get back to Takeshi and Sara."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You took off from the room as if she were a fugitive on the run.`;
   `I was left in the room alone...`;
   `I felt an unclear mess of feelings stewing inside my mind.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `With this we would be able to shut off the hot water flowing to the Generator Room.`;
   `Even so, on the other side of the door, it was still hot enough to scald.`;
   `The four of us waited outside the Generator Room until we could be sure that the temperature inside had cooled enough.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
goto(lbl_00000c5a);
let lbl_000002d0;
l_chose_to_wait_there_in_2nd_day = 1;
showTextbox();
text(() => {
   Kid`"I'll...wait here."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA02ADS`, name2: `YU07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S125)`"So what are we going to do?"`;
   You(C2S126)`"Oh well...then I'll have to make do with Takeshi."`;

});
fgload({ id: 2, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S127)`"Geez. You're a piece of work. Can't you let your real feelings show?"`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S128)`"Don't be getting any strange ideas. You do and I'll knock you down. Got it?"`;

});
fgload({ id: 2, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S129)`"...Take it easy. There's no way I'd try something on you, even by mistake."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `When the two of them disappeared at the far end of the corridor they were still going at it.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S130)`"Those two..."`;
   Kid`"Yeah?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S131)`"I don't know, I think they make a pretty good couple, don't you?"`;
   Kid`"You think so?"`;
   Sara(C2S132)`"Yeah. Nakkyu is the kind of person that tells people she likes what she really thinks...she speaks her mind."`;
   Kid`"Hmmmm."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S133)`"Takeshi kind of seems like that, too."`;
   `I wasn't sure why...but somehow I was a little jealous of You and Takeshi.`;
   `Even if I wanted to, I couldn't open up to anyone like that...I had nothing to share...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
setSceneTitle({ index: 61 });
bgload({ name: `BG18B2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `A while after the two had disappeared...`;
   `Sara and I hadn't spoken another word.`;
   `The two of us just leaned against a wall and stared into the darkness.`;
   `I was desperately trying to think of some way to break through the wall that had formed between us.`;
   Kid`"Sara, how old are you?"`;
   `Finally the words tumbled out of my mouth.`;

});
hideTextbox();
playBGM({ num: 6, volume: 100 });
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S134)`"Where did that come from...? I thought I told you?"`;
   Kid`"I don't think so."`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S135)`"I'm a junior. I'm 16 and was born January 21. Oh, and I'm an Aquarius."`;
   `Sara rattled it off so smoothly she might have been singing a song she knew.`;

});
fgload({ id: 1, name: `SA05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S136)`"And you, Kid?"`;
   Kid`"I'm..."`;
   `I didn't know.`;
   `When I tried to remember, it was like my mind would fog over.`;
   `I couldn't get close to it. It was like a mirage in the desert.`;
   Kid`"I...wonder how old I am."`;
   Sara(C2S137)`"You don't know that either?"`;
   Kid`"Nope."`;

});
fgload({ id: 1, name: `SA08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S138)`"Hmmm, that's kind of sad."`;
   Kid`"Yeah..."`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S139)`"But maybe it's good in a way."`;
   Kid`"What do you mean?"`;

});
fgload({ id: 1, name: `SA17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S140)`"Well, maybe it was something that you wanted to forget about......"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S141)`"Just kidding."`;
   `Sara's expression relaxed into a silly look.`;
   Kid`"Wh-what...don't scare me like that."`;

});
fgload({ id: 1, name: `SA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S142)`"Sorry."`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S143)`"I know. Maybe if I chopped you down, we'd find out how old you are."`;
   Kid`"Huh?"`;
   Sara(C2S144)`"You know, maybe you've got rings like a tree stump."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid`"........."`;
   `For some reason my eyes strayed to the palms of my hands.`;
   `In the darkness only dimly illuminated by the emergency lights my fingers appeared to glow slightly white.`;
   `I still didn't know what had happened to my finger.`;

});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S145)`"Your finger..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `EV_SA03A`, transition: 26 });
playBGM({ num: 22, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Muttering this, Sara grabbed my finger.`;
   Kid`"..."`;
   `It was so sudden it put me at a loss for words.`;
   `In the darkness Sara whispered words as if confirming something as she gripped my thumb.`;
   Sara(C2S146)`"Moon sprite...shouldering ...a long bow."`;
   Sara(C2S147)`"Waiting...inside a dream..."`;
   `....`;
   Kid`"What does that mean?"`;
   `Sara just shook her head. There was no sign that she was going to answer me.`;
   `She just murmured the words like a spell or a nursery rhyme as she gently held my thumb.`;
   `(A moon sprite...)`;
   `I wondered why Sara had suddenly grabbed my thumb.`;
   `Still, I didn't have any urge to pull it away from her...`;
   `As I remained aware of my thumb, I searched for an answer from Sara's slightly sweaty, warm palm.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
bgload({ name: `BG18B2`, transition: 26 });
delay({ interval: 90 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
showTextbox();
text(() => {
   You(C2S148)`"Sorry it took us so long."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S149)`"I think we'll be okay now."`;
   You(C2S150)`"It was a hassle looking for the valve, but..."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `With the two back, Sara finally released my thumb.`;
   `In the darkness I couldn't very well make out Sara's expression.`;
   `The area around Sara's mouth pulled slightly down, as if she were sad.`;
   `Warmth lingered around my thumb.`;
   `I don't know why, but I hesitated to wipe the warmth away and gently inserted my hand into my pocket leaving my thumb extended.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `With that, we had been able to shut off the hot water flowing to the Generator Room.`;
   `Even so, on the other side of the door, it was still hot enough to scald.`;
   `The four of us waited outside the Generator Room until we could be sure that the temperature inside had cooled enough.`;

});
monoColorOverlay({ interval: 0, color: BLACK });
goto(lbl_00000c5a);
let lbl_000005c8;
l_coco_point += 1;
showTextbox();
text(() => {
   Kid`"Why don't we all go?"`;
   `That was my idea.`;

});
multifgload2({ id1: 4, id2: 2, name1: `YU07ADS`, name2: `KB07ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You`"..."`;
   Takeshi`"..."`;
   Sara`"..."`;
   You(C2S151)`"Well, I guess that is an option..."`;
   Takeshi(C2S152)`"There's no reason we have to split into teams of two..."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S153)`"And that way Takeshi won't go putting the moves on me."`;

});
multifgload2({ id1: 4, id2: 2, name1: `YU02ADS`, name2: `KB04ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S154)`"I said I'm not interested."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
setSceneTitle({ index: 61 });
bgload({ name: `BG20B2`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `So all four of us ended up moving to the room together.`;
   `The room was covered in a massive web of pipes.`;
   `The pipes continued into the adjacent Generator Room. It seemed that by opening and closing the valves, the water and oil pressure could be adjusted.`;
   `'Normally LeMMIH is responsible for maintaining the Generator Room, but even LeMMIH can't do much when the generator itself goes out.'`;
   `'Anyhow, this is all because the power supply is down.'`;
   `'This room is designed so that maintenance can be performed manually at times like this, or during blackouts.'`;
   `...That was what You told me.`;
   `You selected one pipe from the countless rows of them and instructed Takeshi to close its valve.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU18ADM`, name2: `KB14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S155)`"Geez. You sure have a knack for abusing folk..."`;
   `As he complained, Takeshi did as You had ordered and turned the valve shut.`;
   `Sara and I just stood off to the side watching the work unfold.`;
   `Finally...`;
   Takeshi(C2S156)`"Uggghh. Arggh!"`;
   Takeshi(C2S157)`"Damn. It's no good..."`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S158)`"You, this won't close..."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2S159)`"Geez. You wimp...you're a man, right?"`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S160)`"You can say what you want, but this valve ain't gonna get shut any faster!"`;
   Takeshi(C2S161)`"It's rusted solid! It won't even budge!"`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2S162)`"Well, how about trying a wrench?"`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S163)`"Wrench?"`;
   You(C2S164)`"There's a bolt on the handle, right?"`;
   You(C2S165)`"If you can get a wrench on it, it might move."`;
   Takeshi(C2S166)`"Oh. A wrench, huh...?"`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S167)`"Hey, Kid!... You heard her. Gimme the toolbox already, would ya?"`;
   `I peered around in the darkness.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `KB04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S168)`"What're you doing? I said get me the toolbox!"`;
   Kid`"But...there isn't one here."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S169)`"Huh?"`;
   Sara(C2S170)`"Takeshi, did you forget to bring it?"`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S171)`"Oh! Crap! I left it in front of the Generator Room..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2S172)`"*sigh* This sucks..."`;
   Kid`"Alright, alright, I'll go get it."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I ran, heading for the exit.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Water splashed as I ran along the route we had come along.`;
   `But the Generator Room was practically next-door.`;
   `Less than 30 feet later, I turned the corner and entered the corridor leading to in front of the Generator Room.`;

});
bgload({ name: `BG18B2`, transition: 26 });
stopSFX()
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid`"Oh, there it is!"`;
   `The toolbox was sitting right in front of the door.`;
   `I headed toward it.`;
   `Every time I put my foot down on the floor, little ripples formed on the surface of the water.`;
   `The tiny circles of waves collided with the wall and bounced off of the side of the toolbox, rippling out in regular concentric rings.`;
   `It was dark. Still, I was able to sense the changes and coldness in the movement of the water.`;
   `My vision felt surprisingly sharp.`;

});
stopBGM();
showTextbox();
text(() => {
   `It happened just then...`;

});
hideTextbox();
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash!`;
   `There was a big splash and spray of water.`;
   `It came from around the right side of the wall...nearly below the operating console.`;
   `The droplets of water scattered gently around my legs.`;
   `The ripples on the surface of the water gently bumped against my feet.`;
   `A fear like I had never felt chilled me to the core.`;
   `I readied myself for anything, facing the darkness.`;
   `Just then...`;
   //??
   Anon(C2S173)`"Moon sprite shouldering a long bow."${waitVoice}${noWait}`;
   //??
   Anon(C2S174)`"Waiting inside a dream."${waitVoice}${noWait}`;
   Kid`"W-who's there...?"`;
   //??
   Anon(C2S175)`"Tonight a story by moonlight."${waitVoice}${noWait}`;
   //??
   Anon(C2S176)`"Hoping the wait will be short."${waitVoice}${noWait}`;
   Kid`"H-hey...who's there?"`;
   //??
   Anon(C2S177)`"Sleeping curled and snug."${waitVoice}${noWait}`;
   //??
   Anon(C2S178)`"Sleeping in mother's arms."${waitVoice}${noWait}`;

});
bgload({ name: `EV_CO04A`, transition: 20 });
playBGM({ num: 22, volume: 97 });
showTextbox();
text(() => {
   Kid`"Co...Coco..."`;
   `I said the name without thinking.`;
   `The shape that suddenly swelled out of the darkness was undoubtedly the girl from the compression chamber, the one from the day before.`;
   `And Coco was singing a song...`;
   Coco(C2S179)`"I was waiting for you."`;
   `She spoke before I could.`;
   Coco(C2S180)`"I waited and waited...for you to come..."`;
   Coco(C2S181)`"I was waiting...all alone like a moon sprite..."`;
   Kid`"T-then you should have come to me..."`;
   Coco(C2S182)`"I couldn't..."`;
   Coco(C2S183)`"That's...impossible..."`;
   Kid`"Why...?"`;
   Coco(C2S184)`"Because you wouldn't take me with you..."`;
   Kid`"...What?"`;
   Coco(C2S185)`"Will you take me to where everybody is?"`;
   Kid`"Of course I will! Let's go together right now!"`;
   `Just as I said that...`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Splash!`;
   `A wall of water exploded from near Coco's feet.`;

});
showFog2();
showTextbox();
text(() => {
   `Droplets of water scattered everywhere like mist...`;
   Coco(C2S186)`"Farewell."`;

});
bgload({ name: `BG18B2`, transition: 10 });
stopBGM();
showTextbox();
text(() => {
   `Coco disappeared in the spray.`;
   `The resulting waves stroked my feet.`;
   `A fine spray of mist erupted skyward and rained down gently on the waves. `;
   `There was the toolbox, left in the darkness...`;
   `That was all that I saw.`;
   `I forgot myself and all I could do was stand in that narrow corridor.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
closeFog2();
bgload({ name: `BG20B2`, transition: 26 });
playBGM({ num: 13, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I didn't know how much time had passed.`;
   `Dragging the heavy toolbox and my heavier legs, I returned to the room with the pipes.`;

});
multifgload3({ name1: `SA18ADS`, name2: `KB12ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi(C2S187)`"This should just about do it."`;
   Sara(C2S188)`"You're not done, are you?"`;
   You(C2S189)`"Nope. We're still getting ready."`;

});
fgload({ id: 2, name: `KB13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S190)`"Oh, I see..."`;

});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S191)`"We have to repair the generator next door after we finish here."`;
   `Takeshi wiped away the sweat from his forehead.`;

});
fgload({ id: 4, name: `YU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S192)`"Huh? Kid...what're you doing there?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Noticing me, You turned around.`;
   Kid`"I brought the...toolbox..."`;
   Takeshi(C2S193)`"Toolbox?"`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S194)`"It doesn't look like they need it anymore."`;
   Kid`"...What?"`;

});
fgload({ id: 4, name: `YU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S195)`"Oops. Sorry 'bout that."`;
   You(C2S196)`"Turns out the valve was closed to begin with."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S197)`"So no matter how much I tried to close it, it wouldn't budge because it was already shut."`;
   Kid`"I heard you...the first time..."`;

});
fgload({ id: 2, name: `KB06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S198)`"Is that right? "`;
   Kid`"..."`;

});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S199)`"Hey, don't be like that. These things happen sometimes."`;
   Kid`"I'm not...mad..."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara`"..."`;

});
fgload({ id: 4, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S201)`"What's wrong?"`;
   `I decided to...`;

});
choice(
   `Tell them about Coco`,
   `Not tell them about Coco`,
);
switch (l_choice) {
   case 0: goto(lbl_000009f1);
   case 1: goto(lbl_00000bf5);
}
let lbl_000009f1;
showTextbox();
text(() => {
   `....I told them`;
   Kid`"Actually..."`;
   Kid`"I saw that girl again."`;

});
multifgload2({ id1: 4, id2: 2, name1: `YU05ADS`, name2: `KB07ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S202)`"Whaddya mean by 'that girl'?"`;
   Kid`"The girl that disappeared in the compression chamber."`;
   Kid`"I told you last night. Don't you remember?"`;

});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S203)`"Oh, your invisible friend."`;
   Kid`"She's not invisible!"`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   `I screamed at them as loud as possible.`;
   Sara(C2S204)`"K-Kid, take it easy..."`;
   Sara(C2S205)`"Just calm down..."`;
   Kid`"..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S206)`"Where did you see the girl?"`;
   Kid`"In front...of the Generator Room..."`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S207)`"Did she say anything?"`;
   Kid`"Yeah..."`;
   Kid`"I think she said something about being all alone like a moon sprite."`;
   Kid`"Oh, I know!"`;
   Kid`"She....she was singing a lullaby."`;
   Takeshi(C2S208)`"A lullaby?"`;
   Kid`"It was the same as the lullaby that Sara sang before..."`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB13ADS`, name3: `YU13ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   `Takeshi and You looked at Sara.`;
   `I focused my eyes on her, too.`;

});
fgload({ id: 1, name: `SA03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S209)`"I...didn't..."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S210)`"Sing any...lullaby..."`;
   Kid`"Liar!"`;

});
multifgload2({ id1: 4, id2: 2, name1: `YU06ADS`, name2: `KB06ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"You did too sing a lullaby before, Sara!"`;
   Kid`"I remember it!"`;

});
fgload({ id: 4, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sara stared at me as if she felt sorry for me.`;
   `You looked like she had a bad taste in her mouth.`;

});
fgload({ id: 2, name: `KB13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Takeshi avoided my eyes and leaned in close to say something to You and Sara.`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA17ADS`, name2: `YU17ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   `You and Sara listened to Takeshi whispering.`;
   Kid`"What are you whispering about?"`;
   Kid`"I'm fine! I'm not crazy!"`;
   Kid`"Don't...don't you look at me like that!"`;

});
multifgload3({ name1: `SA03ADS`, name2: `KB02ADS`, name3: `YU03ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi(C2S211)`"Okay. Everything is fine."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S212)`"So why don't we all go to the place where you saw the girl."`;
   Kid`"She's not there...anymore."`;
   Kid`"She disappeared..."`;
   Takeshi(C2S213)`"I see...but maybe she'll show up again."`;
   Kid`"It's no good. She won't..."`;
   Takeshi(C2S214)`"I...uh...look, we believe you."`;
   Takeshi(C2S215)`"I mean, we've decided to believe you."`;

});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S216)`"Alright? So...so you just keep your cool, okay, Kid?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `I didn't feel like saying anything else.`;
   `Their agreeing with me was somehow sad.`;
   `I was sure that the little whispering conference they had just held went something along the lines of, 'Just agree with whatever he says.'`;
   `It depressed me and sapped all my energy.`;
   `I didn't feel like resisting the three of them, or trying to give myself a pep talk.`;
   `I was tired. I thought they could do what they wanted.`;
   `'You just keep your cool, okay, Kid?'`;
   `Takeshi's words lacked conviction.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `After that...`;
   `When we went back in front of the Generator Room. Of course there was no sign of the girl.`;
   `The four of us waited outside the Generator Room until we could be sure that the temperature inside had cooled enough.`;
   `Time was cruel, but forgiving.`;
   `Like a wave that was rushing ever closer with each second...`;
   `The sadness, frustration and doubt in the back of my mind slowly disappeared.`;
   `After a while, I was back to my normal old self.`;
   `Only Coco's parting words - 'Farewell' - seemed to linger in my mind, echoing without end.`;

});
goto(lbl_00000c50);
let lbl_00000bf5;
showTextbox();
text(() => {
   `...I decided not to tell them.`;
   `The whole story wouldn't have been convincing anyway.`;
   `I knew that for a fact.`;
   `So I handled it that way...`;
   Kid`"Nothing...nothing at all."`;

});
multifgload3({ name1: `SA08ADS`, name2: `KB07ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   `Then I showed them a gleaming smile.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `With this we had been able to shut off the hot water flowing to the Generator Room.`;
   `Even so, on the other side of the door, it was still hot enough to scald.`;
   `The four of us waited outside the Generator Room until we could be sure that the temperature inside had cooled enough.`;
   `Time was cruel, but forgiving.`;
   `My feelings smoothed over slowly with time, like protruding bits of a beach rounded by an endless progression of waves.`;
   `After a while, I found that I could even think of my meeting with Coco in a detached, objective way.`;
   `Only Coco's parting words ? 'Farewell' ? seemed to linger in my mind, echoing without end.`;

});
let lbl_00000c50;
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
let lbl_00000c5a;
bgload({ name: `BG18B2`, transition: 26 });
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`9:42`);
showTextbox();
text(() => {
   `Finally, when we thought the time had come, we timidly opened the door`;
   `It was like opening the door to a steam bath - a cloud of steam hissed out of the door.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG19B2`, transition: 26 });
showFog2();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `The heat inside just about defied imagination.`;
   `The air in the steam-filled room was heavy and stuck to the skin.`;
   `Inhaling felt like swallowing globs of sticky hot steam.`;
   `Takeshi was opening and closing his mouth like a fish out of water.`;

});
l_choice = 1;
jump(`S_2B`);
