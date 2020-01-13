setDialogBoxColor(BLUE);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 2`);
varop(`(28 0a a4) b2 := (00) 2`);
setSceneTitle({ index: 64 });
delay({ interval: 120 });
bgload({ name: `BG17A1`, transition: 10 });
playBGM({ num: 2, volume: 100 });
clock(`22:2`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was nighttime.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the ocean it was only slightly darker than 
before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fortunately, the damage to LeMU hadn't 
worsened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a light dinner, eating the chicken 
sandwich that Takeshi had made.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Incidentally, we had gotten rid of that 
frozen tuna because nobody knew how to 
cut it up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After eating, there was really nothing to do.`;
   waitForClick; clearText; marker; sound(`S2C117`); appendText; 
   Takeshi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C240`); appendText; 
   You`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C242`); appendText; 
   Tsugumi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C243`); appendText; 
   Sora`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`S2C118`); appendText; 
   Sara`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's yawn was contagious.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `KB07ADS`, name2: `SA07ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C119`); appendText; 
   Sara`"Gosh...I'm sleepy."`;
   waitForClick; clearText; marker; sound(`S2C120`); appendText; 
   Takeshi`"Well.... There's really nothing to do either."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone was slouched in chairs, just 
spacing out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no impending danger. No new 
developments.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our situation was unchanged and it felt like 
time had stopped.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `KB03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C246`); appendText; 
   You`"Takeshi, you're such a slob..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said, but she sounded tired.`;
   waitForClick; clearText; marker; sound(`T2C247`); appendText; 
   You`"And stop dawdling..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C121`); appendText; 
   Takeshi`"Look, there's no reason to go wandering 
around the complex now, right?"`;
   waitForClick; clearText; marker; sound(`S2C122`); appendText; 
   Takeshi`"We're just...going have to wait for help to 
come anyway, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C248`); appendText; 
   You`"Yeah...I suppose..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C249`); appendText; 
   You`"Alright...I'm off for a little bit..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Rubbing her neck and trying to relax her stiff 
shoulders, You stood up.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C123`); appendText; 
   Sara`"What? Are you going somewhere?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C251`); appendText; 
   You`"Yeah. Nowhere in particular. Just a walk..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C252`); appendText; 
   You`"I've got to move around or I'll get tired..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C124`); appendText; 
   Sara`"Hey! I've got a great idea."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara raised her hand and stood.`;
   waitForClick; clearText; marker; sound(`S2C125`); appendText; 
   You`"An idea?"`;
   waitForClick; clearText; marker; sound(`S2C126`); appendText; 
   Sara`"Ladies and gentleman, we shall partake in a 
game to give us some exercise."`;
   waitForClick; clearText; marker; sound(`S2C127`); appendText; 
   You`"Alright, but what kind of game?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C128`); appendText; 
   Sara`"Ninja tag."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C129`); appendText; 
   You`"That might be a bit..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C130`); appendText; 
   Sora`"Well, how about normal tag?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora seemed up for the idea.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C131`); appendText; 
   You`"I suppose that would be okay."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C132`); appendText; 
   You`"Alright. Everybody, let's play."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C133`); appendText; 
   Takeshi`"Hey, hey. You expect me to play some kid's 
game...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C134`); appendText; 
   You`"What about you, Kid? In or out?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? Me too?"`;
   waitForClick; clearText; marker; sound(`S2C135`); appendText; 
   You`"We've been talking about everyone 
participating. So you're playing, too."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C136`); appendText; 
   Tsugumi`"I'm not going to play."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `KB08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C137`); appendText; 
   Takeshi`"I'm out, too."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 2, useAnim: true });
fgload({ id: 1, name: `YU01ADL`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C138`); appendText; 
   You`"I meant that everyone apart from Tsugumi is 
playing, anyways."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C139`); appendText; 
   Takeshi`"I said, I'm out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmmm...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright. I'm in."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was pretty much sick of the boredom.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C140`); appendText; 
   You`"Alright. It's settled!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C141`); appendText; 
   You`"We have five competitors vying for the title 
of champion: You, Sara, Sora, Takeshi and the 
Kid."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `SA05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C142`); appendText; 
   Sara`"But don't you think normal tag will be 
boring?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C143`); appendText; 
   You`"You're right..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C144`); appendText; 
   Sora`"How about kick the can?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora, you sure have good grasp of simple 
games like this..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `SO09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C145`); appendText; 
   You`"Not that...something a little out of the 
ordinary."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We all thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C146`); appendText; 
   Tsugumi`"*Sigh* Haaa...." `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C147`); appendText; 
   Tsugumi`"Oh well."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi stood up from her chair sluggishly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She walked briskly toward the corner of the 
room...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 0, color: BLACK });
stopBGM();
bgload({ name: `BG17A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And flipped off the light switch.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADS`, name2: `KB06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C148`); appendText; 
   Takeshi`"Wh-what are you thinking? It's dark."`;
   waitForClick; clearText; marker; sound(`S2C149`); appendText; 
   Tsugumi`"How about that? Satisfied?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Everyone`"??"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C151`); appendText; 
   Tsugumi`"I'm fed up...."`;
   waitForClick; clearText; marker; sound(`S2C152`); appendText; 
   Tsugumi`"Even I am about to go crazy."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Everyone`"???"`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi shot us a nasty look and left the room.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU07ADS`, name2: `SO07ADS`, name3: `SA08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S2C154`); appendText; 
   You`"What...was that about?"`;
   waitForClick; clearText; marker; sound(`S2C155`); appendText; 
   Sara`"Who knows?"`;
   waitForClick; clearText; marker; sound(`S2C156`); appendText; 
   Sora`"Maybe we were talking too much for her."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But, still, why turn out the lights?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C157`); appendText; 
   Takeshi`"What does she mean 'even' her? She's the 
one that's lost it."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C158`); appendText; 
   Takeshi`"But she'll be back after a while."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C159`); appendText; 
   You`"Hey, Kid. Would you mind getting the light?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sure."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went to go switch on the lights...`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C160`); appendText; 
   Sara`"Wait!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `KB06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C161`); appendText; 
   Sara`"Since the lights are off, why don't we try 
the game with them off?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2C162`); appendText; 
   Sara`"We'll play tag...no...kick the can in the 
dark!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara took one of the empty cans from the table.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C163`); appendText; 
   Sara`"We'll call it 'Yamioni.'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C164`); appendText; 
   You`"That sounds cool. Let's go with that!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C165`); appendText; 
   Sora`"I concur."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's a bit more exciting than normal tag."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C166`); appendText; 
   You`"Of course, Takeshi's good with it, right?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C167`); appendText; 
   Takeshi`"Geeez. Whatever."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So we unanimously agreed (except for Tsugumi) 
to play 'kick the can in the dark.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`We decided who was 'it' using rock, paper, 
scissors.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG17A2`, transition: 26 });
multifgload3({ name1: `YU01ADS`, name2: `KB01ADS`, name3: `SA01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`S2C168`); appendText; 
   Sara`"Ready, set, go!"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU02ADS`, name2: `KB06ADS`, name3: `SA02ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S2C169`); appendText; 
   Takeshi`"Damn. I lost!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Takeshi was out on the first try.`;
   waitForClick; clearText; marker; sound(`S2C170`); appendText; 
   You`"Alright. So Takeshi is 'it' first." `;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C171`); appendText; 
   Sara`"Then it's settled."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C311`); appendText; 
   Sora`"Good luck."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everybody was grinning at Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked about as sorry as it was 
possible for him to look.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Here you go, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I handed the empty can to Takeshi.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C313`); appendText; 
   You`"But...hiding anywhere is okay, as long as 
it's on this third floor. Okay, let's hide."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C314`); appendText; 
   You`"Ready..."`;
   waitForClick; clearText; marker; sound(`S2C172`); appendText; 
   Takeshi`"W-wait a sec!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi held up a hand hurriedly stopping 
You from sending everyone off.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C173`); appendText; 
   Takeshi`"You, what did you just say?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C315`); appendText; 
   You`"Let's hide."`;
   waitForClick; clearText; marker; sound(`S2C174`); appendText; 
   Takeshi`"No. Before that."`;
   waitForClick; clearText; marker; sound(`T2C316`); appendText; 
   You`"You can hide anywhere on this third floor."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C175`); appendText; 
   Takeshi`"...Are you serious?"`;
   waitForClick; clearText; marker; sound(`S2C176`); appendText; 
   Takeshi`"Not just the Conference Room?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C317`); appendText; 
   You`"This room is too small. And there aren't 
that many places to hide."`;
   waitForClick; clearText; marker; sound(`S2C177`); appendText; 
   Takeshi`"But the WHOLE third floor?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C318`); appendText; 
   You`"Oh, of course, the areas you can't walk from 
here are off limits. And the emergency 
corridors and stairs are no good either."`;
   waitForClick; clearText; marker; sound(`S2C178`); appendText; 
   Takeshi`"That's still too big!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C179`); appendText; 
   Takeshi`"It's not fair to the person that's 'it'. 
While he's looking, he's sure to get it 
from somebody else..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C319`); appendText; 
   You`"I think it's fine."`;
   waitForClick; clearText; marker; sound(`S2C180`); appendText; 
   Takeshi`"It's not fine. The game won't work. That's a 
MAJOR problem."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C320`); appendText; 
   You`"Gosh. You sure complain a lot."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C321`); appendText; 
   Sora`"Well, he would certainly appear to be at a 
disadvantage..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C322`); appendText; 
   Sora`"I will dim the lights on the third floor... 
but in return I will make it so that sounds 
carry better."`;
   waitForClick; clearText; marker; sound(`T2C323`); appendText; 
   Sora`"If sounds carry, then you can hear when 
someone moves across a corridor with water. 
That will give the person who is 'it' an 
advantage."`;
   waitForClick; clearText; marker; sound(`T2C324`); appendText; 
   Sora`"And I will make it so that you know where 
people are moving. I will synthesize 
footsteps and dispatch the data to 
voice converters."`;
   waitForClick; clearText; marker; sound(`S2C181`); appendText; 
   Takeshi`"Alright. That sounds better."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C325`); appendText; 
   Sora`"Oh, but...what should I do if I should 
get to the can first?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Oh..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C182`); appendText; 
   Takeshi`"That's right. You can't kick the can!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We'd only just noticed. If we played tag, we 
just would have had to ban Sora from jumping 
about as an image... `;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C183`); appendText; 
   Sara`"Then I'll team up with you."`;
   waitForClick; clearText; marker; sound(`S2C184`); appendText; 
   Sara`"We'll make it so that Sora and I have to be 
within a yard of each other when we hide or 
when we are 'it'."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C185`); appendText; 
   Sara`"So I can kick the can..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C186`); appendText; 
   Sara`"Okay? Let's try it this way."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C331`); appendText; 
   Sora`"Okay. Thanks."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On top of that we made Sora promise not to 
use the bio scan or LeMU to monitor the 
location of anyone.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, that makes it fair then."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C333`); appendText; 
   You`"Alright. All set."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It looked like everyone was ready.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C187`); appendText; 
   Takeshi`"So I'll count."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C188`); appendText; 
   Takeshi`"O-n-e, t-w-o, t-h-r-e-e..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As Takeshi started counting, we dashed out of 
the Conference Room.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
clock(`22:18`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We left the room in a group.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash, splash, splash...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of our stepping through water 
sounded deeper than before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I get it...so this is what she meant by 
making the sound bigger...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that we would have to pay attention 
to which sounds were our own and which others.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And we'd have to determine which footsteps 
belonged to the person that was it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But for the person that was it, it was easier 
because everyone else was the enemy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That pretty much negated any advantage we 
might have had.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least that was what I thought.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After we had run a fair bit...`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`S2C189`); appendText; 
   You`"Okay, stop!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, who had been running at the front of 
the pack, stopped us.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's up?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADS`, name2: `SO07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C190`); appendText; 
   Sara`"If you don't hide, he'll find you."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C191`); appendText; 
   You`"Don't worry about that. Just listen."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C192`); appendText; 
   Sora`"It appears that you have some kind of 
strategy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Strategy?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C193`); appendText; 
   You`"Yes. Exactly right."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `YU01ADS`, name2: `SO01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C194`); appendText; 
   You`"If we continue like this, then we'll just 
get all separated and hide..."`;
   waitForClick; clearText; marker; sound(`S2C195`); appendText; 
   You`"But that increases the chance that we'll 
lose."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But that's the way the game works, isn't it?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C196`); appendText; 
   You`"You're SO naive. In games a man is supposed 
to WANT to win."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'But aren't you supposed to be a girl, You?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped myself from saying that in the nick 
of time.`;
   waitForClick; clearText; marker; sound(`S2C197`); appendText; 
   Sara`"But there is no way to guarantee a win, 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C198`); appendText; 
   You`"Mayo...is that what you really think?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADS`, name2: `SO07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You said this as she played with Sara's braids.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, hurry up and tell us already."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C199`); appendText; 
   You`"If you'll think about what we have...and what 
Takeshi doesn't, then you'll get it in a 
flash."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C200`); appendText; 
   Sara`"What we have...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What Takeshi doesn't...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C201`); appendText; 
   Sora`"Numbers. We are many. Takeshi is one."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C202`); appendText; 
   You`"YES! That's it."`;
   waitForClick; 
});
choice(
   `I see.`
   `I don't get it.`
);
switch (choice) {
   case 0: goto(lbl_00000b7f);
   case 1: goto(lbl_00000b88);
}
let lbl_00000b7f;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh, I get it...we'll try to win by sheer 
numbers."`;
   waitForClick; clearText; 
});
goto(lbl_00000cc8);
let lbl_00000b88;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"??"`;
   waitForClick; clearText; marker; sound(`S2C203`); appendText; 
   Sara`"??"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C204`); appendText; 
   You`"These many hints and you still don't get it? 
Use your head."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You put her fingers on Sara's temples and 
massaged them teasingly.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2C205`); appendText; 
   Sara`"Oh, stop it...that tickles."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2C206`); appendText; 
   You`"Oh, you like that, do you?"`;
   waitForClick; clearText; marker; sound(`S2C207`); appendText; 
   Sara`"Stop, I said...I mean it..."`;
   waitForClick; clearText; marker; sound(`S2C208`); appendText; 
   You`"You're as much a ditz as ever, Mayo."`;
   waitForClick; clearText; marker; sound(`S2C209`); appendText; 
   Sara`"I know...I've had this problem ever since 
I was little..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA04ADM`, name2: `YU02ADM`, x1: 128, x2: 512, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`S2C210`); appendText; 
   Sara`"What am I saying? I'm not that stupid!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whack! Sara lightly slapped You on the 
forehead.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Their exchange was enough to make the rest of 
us feel stupid.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2C211`); appendText; 
   You`"Tee,hee,heee...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Enough of that. Just tell me."`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA04ADS`, name2: `SO09ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S2C212`); appendText; 
   You`"Oh well..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C213`); appendText; 
   You`"Listen Kid. Would you rather fight one 
person or four people?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADS`, name2: `SO01ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Neither."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C214`); appendText; 
   You`"Just pick one."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...One, I guess."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C215`); appendText; 
   You`"Why?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Against four people I wouldn't stand a 
chance."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C216`); appendText; 
   You`"Right. That's what I mean?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2C217`); appendText; 
   Sora`"That is what You means by a strategy of 
numbers."`;
   waitForClick; clearText; 
});
let lbl_00000cc8;
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C218`); appendText; 
   You`"Yup. If we all mob together then there is 
nothing the person that's it can do."`;
   waitForClick; clearText; marker; sound(`S2C219`); appendText; 
   Sora`"So if somebody gets found, somebody else 
just kicks the can."`;
   waitForClick; clearText; marker; sound(`S2C220`); appendText; 
   Sora`"And if that person gets caught, then 
somebody else kicks the can..."`;
   waitForClick; clearText; marker; sound(`S2C221`); appendText; 
   You`"That's right. So if we all get there at 
once and unleash an attack, Takeshi won't be 
able to defend, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C222`); appendText; 
   Sara`"Oh, I get it."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C223`); appendText; 
   You`"So...after we all split up we'll aim for the 
can and charge the Conference Room."`;
   waitForClick; clearText; marker; sound(`S2C224`); appendText; 
   You`"After kicking the can, we'll separate again 
immediately."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C225`); appendText; 
   You`"By repeating this hit-and-run we'll win."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But isn't that kind of cheating?"`;
   waitForClick; clearText; marker; sound(`S2C226`); appendText; 
   You`"Not at all. Attacking with overwhelming 
numbers is a basic military strategy."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So it's kind of like violence by the masses?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C227`); appendText; 
   You`"Or a democratic strategy."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Whatever."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C228`); appendText; 
   You`"In a democracy...the majority rules..."`;
   waitForClick; clearText; marker; sound(`S2C229`); appendText; 
   You`"In other words...those with less numbers are 
weak."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 30 });
bgload({ name: `BG25B4`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So we separated and all aimed for the 
Conference Room via different routes.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But our footsteps were sure loud.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, if we didn't hurry, Takeshi would 
find us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just hoped that someone would get there 
and kick the can before he found me.`;
   waitForClick; clearText; marker; sound(`S2C230`); appendText; 
   Takeshi`"Who is that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ooops!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, Takeshi's voice rang out behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was so concerned with the sound of my own 
footsteps that I didn't hear him approach.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At this distance...there was no way I could 
get away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave up.`;
   waitForClick; clearText; 
});
stopSFX()
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh, no. You caught me... Am I the first one?"`;
   waitForClick; clearText; marker; sound(`S2C231`); appendText; 
   Takeshi`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Dang. That means if you catch everyone, 
then I'm 'it' next?"`;
   waitForClick; clearText; marker; sound(`S2C232`); appendText; 
   Takeshi`"I reckon so."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder if someone will show up to help me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Takeshi, if you don't go step on the can, 
then I'll go kick it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C233`); appendText; 
   Takeshi`"You sure know your kick-the-can rules."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T2C339`); appendText; 
   //??
   Unk`"Whack!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Crash!!"`;
   waitForClick; clearText; marker; sound(`S2C234`); appendText; 
   Takeshi`"Umpphh!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Splash!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly You came flying from the side and 
completely sideswiped Takeshi with a jumping 
cross-chop to the neck.`;
   waitForClick; clearText; marker; sound(`S2C235`); appendText; 
   Takeshi`"Gurgle, gurgle..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's head had gone under water.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C340`); appendText; 
   You`"NYA,HA,HA,HA"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was pointing at the submerged Takeshi and 
cackling crazily.`;
   waitForClick; clearText; marker; sound(`S2C236`); appendText; 
   Takeshi`"Cough, cough...pwahh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi, floundering in the water, stood up.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB05AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C237`); appendText; 
   Takeshi`"H-hey, you!!"`;
   waitForClick; clearText; marker; sound(`T2C341`); appendText; 
   You`"Hee, hee...I won this battle!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
fgload({ id: 2, name: `KB04AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C238`); appendText; 
   Takeshi`"Hey you! Wait!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S2C239`); appendText; 
   You`"Wait for you to catch me? No thanks!"`;
   waitForClick; clearText; marker; sound(`S2C240`); appendText; 
   Takeshi`"Hey you! I'll get you back for that! 
Just you wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi took off in a mad dash after You.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well...I guess I'd better go kick the can."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I strolled leisurely to the Conference Room.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG17A2`, transition: 26 });
playBGM({ num: 1, volume: 97 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I entered the room...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C241`); appendText; 
   Takeshi`"I found the Kid! I stomped on the can!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi pointed at me declaring this.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was stepping on the can.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was near him and looked depressed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she had lost.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh, no...)`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB02AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C242`); appendText; 
   Takeshi`"Ha, ha, ha! Did you really think you could 
outwit me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C343`); appendText; 
   You`"Takeshi you cheat! You changed the place of 
the can!"`;
   waitForClick; clearText; marker; sound(`S2C243`); appendText; 
   Takeshi`"Nobody said where we had to put the can, 
right? Besides, you smacked me so I figure 
we're even."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C344`); appendText; 
   You`"Alright, alright. Whatever. Anyway, so I'm 
the first person you caught?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C244`); appendText; 
   Takeshi`"You got it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C345`); appendText; 
   You`"Well, that plan was sure a failure..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C245`); appendText; 
   Takeshi`"...Huh? What plan?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As they were talking, the sound of splashing 
footsteps could be heard approaching the 
door...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 90 });
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C246`); appendText; 
   Sara`"Shweeen...I'm here!"`;
   waitForClick; clearText; marker; sound(`S2C247`); appendText; 
   Takeshi`"I found Sora and Sara."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi stepped on the can.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `SO07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C347`); appendText; 
   Sora`"Oh, did you get beaten here, You?"`;
   waitForClick; clearText; marker; sound(`T2C348`); appendText; 
   You`"Things didn't quite work out as planned."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C248`); appendText; 
   Sara`"Nakkyu, don't you think you jumped the gun 
just a little bit?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said we would all charge together."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB07AWS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C249`); appendText; 
   Takeshi`"So that was your plan..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C351`); appendText; 
   You`"Yeah. I thought if we all went for the can 
at once, you wouldn't be able to stop us."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13AWS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C250`); appendText; 
   Takeshi`"That's pretty tricky."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C352`); appendText; 
   You`"You really think so?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You laughed mischievously and with a hint of 
embarrassment.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We gathered in the center of the room.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KB01AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C251`); appendText; 
   Takeshi`"Well, finding all of you was easier 
than I thought..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C252`); appendText; 
   Takeshi`"First of all, mob-style kicking of the can is 
definitely outlawed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C353`); appendText; 
   You`"Huh? Why?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C253`); appendText; 
   Takeshi`"You think I can stop you if you all come 
attack at once?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C354`); appendText; 
   You`"Impossible."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C254`); appendText; 
   Takeshi`"That's why. It takes all the fun out of it."`;
   waitForClick; clearText; marker; sound(`S2C255`); appendText; 
   Takeshi`"Timing your rush, just right, for when the 
person who is 'it' goes searching...all of 
that would disappear from the game."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C355`); appendText; 
   You`"Well, alright..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You reluctantly agreed to be 'it' the next 
time.`;
   waitForClick; clearText; marker; sound(`S2C256`); appendText; 
   Takeshi`"Alright. Everybody good with that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora, Sara, I - everyone nodded.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB02AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C257`); appendText; 
   Takeshi`"Okay then. You is 'it' next."`;
   waitForClick; clearText; marker; sound(`S2C258`); appendText; 
   Takeshi`"The can is over there, so you get it. 
Put it where you want and count..."`;
   waitForSound; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KB06AWM`, x1: 128, x2: 512, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kabing!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clatter, clatter, clatter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of a can being kicked rang out in 
the darkness. `;
   waitForClick; clearText; marker; sound(`S2C259`); appendText; 
   Takeshi`"Hey! Who kicked that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C356`); appendText; 
   You`"It wasn't me!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as she got this out of her mouth, 
You started to run away.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C260`); appendText; 
   Takeshi`"You scoundrel...!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We all scattered like scared butterflies.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B4`, transition: 26 });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: false });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S2C261`); appendText; 
   You`"I don't know what the deal is, but that was 
lucky."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You said this as she ran.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C262`); appendText; 
   Sara`"That was a close call."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But who kicked the can?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All four of us had been found by Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The rules were that anyone caught couldn't 
kick the can.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C263`); appendText; 
   Sara`"It wasn't me or Nakkyu. And Sora can't kick."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I didn't kick it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Everyone`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `YU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C264`); appendText; 
   Sora`"You don't suppose it was Tsugumi, do you?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C265`); appendText; 
   You`"Tsugumi? No way."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C266`); appendText; 
   Sara`"But that's the only possibility."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder if Tsugumi wanted to play the whole 
time."`;
   waitForClick; clearText; marker; sound(`S2C267`); appendText; 
   Sora`"She was probably just embarrassed to say so."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That could have put a new, almost adorable 
twist on her personality.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C268`); appendText; 
   Sara`"Oh, ho! We'll have to thank her when we 
see her."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara laughed happily as she said this.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG25B2`, transition: 26 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`22:27`);
showTextbox();
text(() => {
   marker; sound(`S2C269`); appendText; 
   You`"Alright. Let's split up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You proposed this as we reached a T in the 
corridor.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `SO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C270`); appendText; 
   Sara`"Yeah, let's split up. Good luck!"`;
   waitForClick; clearText; marker; sound(`S2C271`); appendText; 
   Sora`"Okay. We will meet up later."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You went left and Sara and Sora went to the 
right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Uh...I...`;
   waitForClick; 
});
choice(
   `Go with You`
   `Go with Sara and Sora`
);
switch (choice) {
   case 0: goto(lbl_000013ec);
   case 1: goto(lbl_00001676);
}
let lbl_000013ec;
bgload({ name: `BG26B4L`, transition: 20 });
varop(`(28 0a a4) b6 += (00) 1`);
varop(`(28 0a a4) e4 := (00) 1`);
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C272`); appendText; 
   You`"Oh? Kid, you decided to come this way?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah...but where do you plan to hide?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C273`); appendText; 
   You`"I'm thinking about that as we speak."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We kept running.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG26B4L`, transition: 26 });
stopSFX()
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S2C274`); appendText; 
   You`"Alright. What are we gonna do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we scanned the area for trouble we looked 
for a hiding place.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C275`); appendText; 
   You`"Unless we hide somewhere unexpected, he'll 
find us right away."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, let's go in a room for now."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As I said that I heard something.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Somebody is coming?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C276`); appendText; 
   You`"It's probably Mayo and Sora."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Probably..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We peered through the darkness in the 
direction of the sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could see someone's silhouette.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That build could only be...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. It's Takeshi!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C277`); appendText; 
   You`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hurry! We've gotta hide!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG22B2`, transition: 20 });
playBGM({ num: 15, volume: 97 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We dove into the nearest room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the elevator hall.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What're we gonna do? There's nowhere to hide."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi steadily approached.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C278`); appendText; 
   You`"I know! Let's hide in there!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Where?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You's finger was pointing...at the elevator 
that was stuck on its way to Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the one that Sara had been stuck in 
the day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door was still open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`First You lifted me on her shoulders and I 
hurried into the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I pulled her up.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmph..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`So we were able to hide just an instant before 
Takeshi came.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU10A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We held our breath, watching silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No emergency light even lit the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just profound darkness...and silence...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear You crouched next to me, 
breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I though I could almost hear my heart.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I hope he doesn't find us."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`S2C279`); appendText; 
   You`"Ssshhh! He's here."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU10B`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi appeared at the bottom of the stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that he hadn't pinned down our 
position. He was still glancing around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My heart rate rocketed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It pounded in my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand on my chest as if to hold it in 
check.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh...oh...please don't let him find us...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi just stood there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as if he were sure that we were around.`;
   waitForClick; clearText; marker; sound(`S2C280`); appendText; 
   Takeshi`"That's strange. I coulda sworn I heard 
footsteps over here."`;
   waitForClick; clearText; marker; sound(`S2C281`); appendText; 
   Takeshi`"I guess it was just my imagination."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like he had finally given up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Whew...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as I thought the crisis had passed.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ha...ha.... Ach..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sneeze welled up inside me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why now?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I clamped my hand on my mouth as I desperately 
tried to hold it back.`;
   waitForClick; clearText; marker; appendText; 
   Kid`".........!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Somehow I had managed to keep it in.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`S2C282`); appendText; 
   You`"ACHOOOO!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S2C283`); appendText; 
   You`"Tee, hee, hee..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU10C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2C284`); appendText; 
   Takeshi`"Hey! I know someone's there! Who is it!?"`;
   waitForClick; clearText; marker; sound(`S2C285`); appendText; 
   You`"He found us! Run!!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah! B-but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where could we run?`;
   waitForClick; clearText; marker; sound(`S2C286`); appendText; 
   You`"No problem! Leave it to me!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG22B2`, transition: 30 });
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next instant You threw herself out of the 
elevator.`;
   waitForClick; clearText; marker; sound(`S2C287`); appendText; 
   You`"Yeeeehaaaaaw!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You made a spectacular dive...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...turning it into a stunning drop kick!`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C288`); appendText; 
   Takeshi`"Ungphh!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_03`, a1: 0, volume: 100 });
shakeScreenHard();
monoColorOverlay({ interval: 12, color: BLACK });
playSFX({ name: `SE02_02`, a1: 1, volume: 100 });
waitForSFX();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`We fought well, but Takeshi found us.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`                  <Can stomp>`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A short while later he found Sara and Sora, 
too.`;
   waitForClick; clearText; 
});
goto(lbl_00001a59);
let lbl_00001676;
bgload({ name: `BG26B4R`, transition: 20 });
varop(`(28 0a a4) b9 += (00) 1`);
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `SA05ADM`, name2: `SO07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C289`); appendText; 
   Sora`"Huh? Is that you, Kid?"`;
   waitForClick; clearText; marker; sound(`S2C290`); appendText; 
   Sara`"Kid, you decided to come this way?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah...but where do you plan to hide?"`;
   waitForClick; clearText; marker; sound(`S2C291`); appendText; 
   Sara`"If you are going to stay with us, you have to 
help us think of something!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran with the two of them.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
bgload({ name: `BG25B4`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S2C292`); appendText; 
   Sara`"I know! I've got a great idea!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, Sara stopped suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-what?"`;
   waitForClick; clearText; marker; sound(`S2C293`); appendText; 
   Sora`"What is it?"`;
   waitForClick; clearText; marker; sound(`S2C294`); appendText; 
   Sara`"It's times like this that call for Ninja 
skills!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ninja skills?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C295`); appendText; 
   Sara`"Sora. When Takeshi comes through, use RSD to 
show him an empty corridor."`;
   waitForClick; clearText; marker; sound(`S2C296`); appendText; 
   Sara`"This is known as the Elite Art of Ninja 
Camouflage."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C297`); appendText; 
   Sora`"Huh? But that would be..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Isn't that against the rules?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C298`); appendText; 
   Sara`"Don't be a spoilsport. We banned instant 
travel and bio scans, but NOT using LeMMIH. 
Right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's sneaky."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C299`); appendText; 
   Sara`"In the lexicon of the Ninja, we call it 
a 'secret technique.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. I'm not having any of it."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C300`); appendText; 
   Sora`"I'm sorry, but I'm afraid that I can't agree 
either."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C301`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C302`); appendText; 
   Sara`"Then...how about the 'Elite 
Ninja Doppelganger technique?'"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2C303`); appendText; 
   Sara`"We can use RSD to make it appear that there 
are lots of us to confuse Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's the same thing!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C304`); appendText; 
   Sora`"Uh, why don't we just say no Ninja 
techniques using LeMMIH?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C305`); appendText; 
   Sara`"Tsk...you two are such prudes..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C306`); appendText; 
   Sara`"Someone's here...!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C307`); appendText; 
   Sora`"It's probably You."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Probably..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We peered through the darkness in the 
direction of the sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We made out the silhouette of a person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That build could only be...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C308`); appendText; 
   Sara`"Yikes!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. It's Takeshi!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C309`); appendText; 
   Sora`"What? Really?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hurry! We've gotta hide!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We dashed down the corridor.`;
   waitForClick; clearText; marker; sound(`S2C310`); appendText; 
   Sora`"Oh, no! That way is no good..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playBGM({ num: 11, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A watertight door blocked our way forward.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We're stuck!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C311`); appendText; 
   Sara`"A...a dead end?"`;
   waitForClick; clearText; marker; sound(`S2C312`); appendText; 
   Sora`"That's what I was saying..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no room nearby that we could escape 
into.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We should have hidden in a room somewhere.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi was heading toward us for sure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At this rate we would be caught for sure!`;
   waitForClick; clearText; marker; sound(`S2C313`); appendText; 
   Sara`"Oh! What're we gonna do?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C314`); appendText; 
   Sora`"It looks like we have no choice but to 
give up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was flustered, Sora resigned to fate.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the other hand, I...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...not yet!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`At this distance, I decided that it would be 
better to make a dash for the nearest room.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Let's go! I think we'll make it."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B4`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I dragged Sara and Sora back down the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We found an entrance and dove into a room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But...!`;
   waitForClick; clearText; marker; sound(`S2C315`); appendText; 
   Takeshi`"Hey, if it ain't the Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Whoa! What happened?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't believe it...he'd cut us off.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's no good! Go back!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C316`); appendText; 
   Sara`"Huh? What do you mean?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B4`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just as we went turn back to the corridor...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C317`); appendText; 
   Takeshi`"Gotcha!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"!?!?!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA03ADM`, name2: `SO09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C318`); appendText; 
   Sara`"Awwww..."`;
   waitForClick; clearText; marker; sound(`S2C319`); appendText; 
   Sora`"He caught us!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C320`); appendText; 
   Takeshi`"Geez, that took a long time..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C321`); appendText; 
   Sara`"Oh! It's all because the Kid said we should 
go back!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what else to do.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`                  <Can stomp>`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Not long after that, he found You as well.`;
   waitForClick; clearText; 
});
let lbl_00001a59;
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG17A2`, transition: 26 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We met in the Conference Room.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU03ADS`, name2: `KB02ADS`, name3: `SO01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S2C322`); appendText; 
   Takeshi`"Alright! Now I just need to get Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi stepped on the can, looking satisfied.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C323`); appendText; 
   Takeshi`"Still, it's kinda weird..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADS`, name2: `SO07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Weird? What is?"`;
   waitForClick; clearText; marker; sound(`S2C324`); appendText; 
   Takeshi`"The can when it was kicked before...it was 
still in the same place."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C325`); appendText; 
   You`"Huh? I don't know what you are trying to say."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C326`); appendText; 
   Takeshi`"I mean that the can should have been kicked, 
but it was still standing up!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said this as he squished the can 
some more.`;
   waitForClick; clearText; marker; sound(`S2C327`); appendText; 
   Takeshi`"It was like no one had kicked it."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C328`); appendText; 
   Sora`"Isn't it likely that the can was toppled and 
righted itself? Theoretically it is quite 
possible."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C329`); appendText; 
   Takeshi`"In the same place I put it?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C330`); appendText; 
   Sora`"That is...odd."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C331`); appendText; 
   Sara`"But shouldn't you go looking for Tsugumi?"`;
   waitForClick; clearText; marker; sound(`S2C332`); appendText; 
   You`"Yeah. If you're gonna be a sore loser, you 
should at least go do that."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C333`); appendText; 
   Takeshi`"I'm not the loser here - you guys are!"`;
   waitForClick; clearText; marker; sound(`S2C334`); appendText; 
   You`"Whatever. You're right. It's exactly as you 
say..."`;
   waitForClick; clearText; marker; sound(`S2C335`); appendText; 
   Sara`"We got it already. Now get out of here and 
search."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sara waved Takeshi away.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C336`); appendText; 
   Takeshi`"Geez. You are so full of yourself.... It 
doesn't even feel like I won..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi left the room grumbling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Soon after that - `;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
multifgload3({ name1: `YU06ADS`, name2: `SO06ADS`, name3: `SA06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kabing!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clatter, clatter, clatter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of a can being kicked rang out in 
the darkness. `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-what was that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C337`); appendText; 
   You`"I have no idea, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C338`); appendText; 
   Sara`"Now is our chance!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C339`); appendText; 
   Sora`"Do...do you think we should...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder...if it's okay?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the confusion we made our third escape.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S2C340`); appendText; 
   Takeshi`"Hey! Once you've been caught, it's against 
the rules to kick the can!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We heard Takeshi shouting soon after.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, neither I, You, Sara nor 
Sora...none of us had kicked the can.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Oh, that had to be Tsugumi again.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'She probably sneaked into the room without 
anybody noticing.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what we thought.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ultimately, Takeshi soon caught us again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He howled that we had cheated and started 
out to find us right away, so we didn't 
get far.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi checked to make sure everyone was 
there and stepped on the can (even once for 
Tsugumi.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next time nobody kicked the can....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG17A2`, transition: 26 });
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`23:8`);
showTextbox();
text(() => {
   marker; sound(`S2C341`); appendText; 
   Takeshi`"This time the Kid is 'it.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright. So I count to one hundred, right?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took the can and sat in the chair with my 
face down.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright, here I go..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"O-n-e, t-w-o, t-h-r-e-e..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They left the Conference Room fleeing around 
the floor.`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"O-n-e h-u-n-d-r-e-d..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG17A2`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I opened my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I set the empty can by my feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as far from the entrance as I could get 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scanning the dark area around me, I didn't see 
anyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Well, I guess I'll go looking...)`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to head off to check some rooms.`;
   waitForClick; 
});
varop(`(28 0a a4) d0 := (00) 1`);
varop(`(28 0a a4) d1 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 1`);
varop(`(28 0a a4) d3 := (00) 1`);
varop(`(28 0a a4) d4 := (00) 1`);
varop(`(28 0a a4) d5 := (00) 0`);
varop(`(28 0a a4) bb := (00) 0`);
varop(`(28 0a a4) bc := (00) 0`);
varop(`(28 0a a4) bd := (00) 0`);
goto(lbl_00001f63);
let lbl_00001e3a;
goto(lbl_00002482).if(var_bb == 3);
goto(lbl_00001e84).if(var_bc == 0);
goto(lbl_00001e84).if(var_bd != 0);
varop(`(28 0a a4) d5 := (00) 1`);
let lbl_00001e84;
varop(`(28 0a a4) bf := (00) 0`);
varop(`(28 0a a4) bf += (00) v_d0`);
varop(`(28 0a a4) bf += (00) v_d1`);
varop(`(28 0a a4) bf += (00) v_d2`);
varop(`(28 0a a4) bf += (00) v_d3`);
varop(`(28 0a a4) bf += (00) v_d4`);
varop(`(28 0a a4) bf += (00) v_d5`);
goto(lbl_00002482).if(var_bf == 0);
goto(lbl_00001f55).if(var_bf == 1);
goto(lbl_00001f5e).if(var_b3 == 0);
goto(lbl_00001f5e).if(var_b3 == 1);
goto(lbl_00001f5e).if(var_b3 == 3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered where they'd hid.`;
   waitForClick; 
});
goto(lbl_00001f63);
let lbl_00001f55;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Where else was left...`;
   waitForClick; 
});
goto(lbl_00001f63);
let lbl_00001f5e;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I selected from the - `;
   waitForClick; 
});
let lbl_00001f63;
choice(
   cond(`[cond (28 0a a4) d0 14 (00)]Central Control Room`, var_d0)
   cond(`[cond (28 0a a4) d1 14 (00)]Lemurian Ruins`, var_d1)
   cond(`[cond (28 0a a4) d2 14 (00)]Elevator Hall`, var_d2)
   cond(`[cond (28 0a a4) d3 14 (00)]Rest area`, var_d3)
   cond(`[cond (28 0a a4) d4 14 (00)]Kiosk`, var_d4)
   cond(`[cond (28 0a a4) d5 14 (00)]Conference Room`, var_d5)
);
showTextbox();
text(() => {
   marker; appendText; clearText; 
});
hideTextbox();
switch (choice) {
   case 0: goto(lbl_0000209a);
   case 1: goto(lbl_00001fa9);
   case 2: goto(lbl_000021b2);
   case 3: goto(lbl_00002272);
   case 4: goto(lbl_00002352);
   case 5: goto(lbl_000023ea);
}
let lbl_00001fa9;
bgload({ name: `MAP3F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 2 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG04B2`, transition: 20 });
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d1 := (00) 0`);
varop(`(28 0a a4) bc := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Lemurian Ruins`;
   waitForClick; clearText; marker; appendText; 
   Narr`This attraction was designed with the motif of 
a lost continent believed to have sunk to the 
ocean floor ages ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Standing there in the darkness in that eerie 
setting, it almost made me imagine that I had 
sunk to the bottom of the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, that was only half true.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Scrunch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Huh?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like a footstep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is someone there...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it were my imagination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness...in the building in front of 
me was the dim outline of a person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But in that light and at that distance, I 
couldn't be sure who it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like the person was holding their 
breath waiting for me not to notice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he or she looked like she was ready to 
dash off in an instant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that if I bumbled closer, the person 
would run away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd have to figure out who it was from afar...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Uh...it had to be...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You...I found you!"`;
   waitForClick; clearText; marker; sound(`S2C342`); appendText; 
   //??
   Unk`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if it had given up, the silhouette started 
toward me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C343`); appendText; 
   You`"How did you know it was me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Bingo!`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like my hunch had paid off.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Can stomp.`;
   waitForClick; clearText; 
});
goto(lbl_00001e3a);
let lbl_0000209a;
bgload({ name: `MAP3F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG15B2`, transition: 20 });
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d0 := (00) 0`);
varop(`(28 0a a4) bc := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We headed to the Central Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think there was anywhere there for 
anyone to hide...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room was set up with the center surrounded 
by a giant monitor and console.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She sat sloughing in her chair staring blankly 
at the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi, I caught you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`At my declaration, Tsugumi looked at me like I 
was a fly in her soup.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C344`); appendText; 
   Tsugumi`"Um..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She glared at me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C345`); appendText; 
   Tsugumi`"I'm not playing."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Come on. You already kicked the can twice."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi might have fallen for it, but not me.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stepped on the can just to be safe.`;
   waitForClick; clearText; 
});
goto(lbl_00001e3a);
let lbl_000021b2;
bgload({ name: `MAP3F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 12 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG22B2`, transition: 20 });
varop(`(28 0a a4) d2 := (00) 0`);
varop(`(28 0a a4) bc := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Elevator Hall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign of anyone.`;
   waitForClick; clearText; 
});
goto(lbl_00002259).if(var_e4 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just to be safe I checked inside the elevator 
that You and I had hid inside.`;
   waitForClick; clearText; 
});
goto(lbl_0000225e);
let lbl_00002259;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just in case, I also checked in the elevator 
that Sara had been trapped in the day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator door was still open.`;
   waitForClick; clearText; 
});
let lbl_0000225e;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Of course, there was no one inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This place was a waste of time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to go elsewhere.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
goto(lbl_00001e3a);
let lbl_00002272;
bgload({ name: `MAP3F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 13 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG21B2`, transition: 20 });
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d3 := (00) 0`);
varop(`(28 0a a4) bc := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I made for the rest area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At first it looked like there was no one there 
either...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I noticed something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One of the stone pillars silhouettes in the 
open area was an odd shape.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No, it was the top of the pillar that had 
something strange about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I edged closer.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was definitely something there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From where I was, I couldn't tell exactly what 
that 'something' was, but it was definitely a 
person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe they thought they were acting like a 
koala.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What did they intend to do if they fell?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I mean, can you really call that hiding?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out to that clinging 'something.'`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, isn't that tiring? It sure looks 
dangerous."`;
   waitForClick; clearText; marker; sound(`S2C346`); appendText; 
   //??
   Unk`"...!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you sure have got a lot of guts."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're tougher than I thought, Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C347`); appendText; 
   Takeshi`"Arrrggh...! How'd you know it was me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi slid down the column.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The only person stupid enough to hide there 
was Takeshi.)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I gotcha!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stepped on the can.`;
   waitForClick; clearText; 
});
goto(lbl_00001e3a);
let lbl_00002352;
bgload({ name: `MAP3F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 9 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG07B2`, transition: 20 });
varop(`(28 0a a4) d4 := (00) 0`);
varop(`(28 0a a4) bc := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The chicken sandwich shop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign of anyone there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just in case, I peeked inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, there was no one there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This place was a waste of time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to go elsewhere.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
goto(lbl_00001e3a);
let lbl_000023ea;
bgload({ name: `MAP3F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 15 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG17A2`, transition: 20 });
varop(`(28 0a a4) d5 := (00) 0`);
varop(`(28 0a a4) bd := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I returned to the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign of anyone there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The can stood silently where I had left it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just in case, I looked in the corners of the 
room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, no one was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This place was a waste of time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to go elsewhere.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
goto(lbl_00001e3a);
let lbl_00002482;
bgload({ name: `BG25B4`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Only Sara and Sora remained.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked around Dritte stock looking for the 
two of them.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`!?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard footsteps in the direction of the 
Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure it was Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Gosh, I hope she isn't planning to kick the 
can!?)`;
   waitForClick; clearText; 
});
playBGM({ num: 11, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I made a mad dash for the Conference Room.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
bgload({ name: `BG26B4R`, transition: 20 });
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At the entrance to the room - `;
   waitForClick; clearText; marker; appendText; 
   Narr`the two of them were just at the door - `;
   waitForClick; clearText; marker; appendText; 
   Narr`- Sara and Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sprinted into the room on their heels.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I gotcha! Sara and Sora!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Pata, pata, pata...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sara just ignored me and kept running.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes were on the can.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as if she knew where the can was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(D-damn! I thought I changed the location of 
the can.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I also ran toward the can.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Pata, pata, pata...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Would she kick the can first?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or would I step on it first?`;
   waitForClick; clearText; marker; sound(`S2C348`); appendText; 
   Sara`"Waaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Damn!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playSFX({ name: `SE10_12`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE07_05`, a1: 0, volume: 95 });
playSFX({ name: `SE10_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The two of us tumbled to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ouch..."`;
   waitForClick; clearText; marker; sound(`S2C349`); appendText; 
   Sara`"Ow..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA11A`, transition: 10 });
stopSFX()
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next thing that I noticed, I was on top of 
Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's eyes were open, staring at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I barely managed to support my body with my 
arms so that I didn't come into contact with 
her, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face was closer to me than I had ever 
imagined.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I might be sucked into her eyes 
and was captivated by her cute nose, slightly 
opened lips and glimpse of her tongue...`;
   waitForClick; clearText; marker; sound(`S2C350`); appendText; 
   Sara`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt her breath on my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had been running until that time and I 
felt the heat rising from her skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It smelled of sweat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smell of our sweat mixed together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt the warmth of her body against me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to breathe...my mind started to go 
blank.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My whole body stiffened and I couldn't move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as if our bodies were paralyzed as we 
lay there staring at each other.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA11B`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara slowly raised up her cheek.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh...oh...danger! She's mad...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`This was not what I should have been worrying 
about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The can...? Where was the can?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned by neck searching for the can.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`There it was!`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I jumped off of Sara, pointed to her and 
declared loudly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara and Sora! I gotcha!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I stepped on the can triumphantly.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This was the last stepping on the can.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG17A2`, transition: 26 });
multifgload3({ name1: `SO07ADS`, name2: `KB03ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S2C351`); appendText; 
   Takeshi`"Geez. He slaughtered us."`;
   waitForClick; clearText; marker; sound(`S2C352`); appendText; 
   Sora`"That was twice as fast as Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C353`); appendText; 
   Takeshi`"When I was 'it' everybody was cheating."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C354`); appendText; 
   You`"Wow. I can't believe you guessed everybody 
right in the dark. It's pretty amazing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone crowded around me and started making 
a fuss.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C355`); appendText; 
   Sara`"Nakkyu...what are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C356`); appendText; 
   You`"Oh, Mayo, you don't know? This kid..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As You placed her hand on my head, she 
explained about how I had caught her and 
Takeshi.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADS`, name2: `KB14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C357`); appendText; 
   Takeshi`"Hey, Tsugumi! Give it up. Why don't you just 
come out and admit you were playing too?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`At some point Tsugumi had returned to the 
Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi sat in a chair pretending to be asleep 
and ignored Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt someone watching me and turned around.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was looking at me strangely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought she might be angry again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It was just an accident...)`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I avoided her look uncomfortably.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was the end of kick the can.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, it remained a mystery who kicked 
the can those times...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We passed the rest of the night uneventfully...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a peaceful time...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I decided to enjoy a satisfying rest.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
delay({ interval: 90 });
goto(lbl_00002773).if(var_ba == 6);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`S_3A`);
let lbl_00002773;
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SC2F`);
