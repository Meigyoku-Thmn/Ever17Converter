setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
setSceneTitle({ index: 64 });
delay({ interval: 120 });
bgload({ name: `BG17A1`, transition: 10 });
playBGM({ num: 2, volume: 100 });
clock(`22:2`);
showTextbox();
text(() => {
   `It was nighttime.`;
   `In the ocean it was only slightly darker than before.`;
   `Fortunately, the damage to LeMU hadn't worsened.`;
   `I had a light dinner, eating the chicken sandwich that Takeshi had made.`;
   `Incidentally, we had gotten rid of that frozen tuna because nobody knew how to cut it up.`;
   `After eating, there was really nothing to do.`;
   Takeshi(S2C117)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   You(T2C240)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Kid`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Tsugumi(T2C242)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Sora(T2C243)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Sara(S2C118)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   `Takeshi's yawn was contagious.`;

});
multifgload2({ id1: 1, id2: 2, name1: `KB07ADS`, name2: `SA07ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C119)`"Gosh...I'm sleepy."`;
   Takeshi(S2C120)`"Well.... There's really nothing to do either."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Everyone was slouched in chairs, just spacing out.`;
   `There was no impending danger. No new developments.`;
   `Our situation was unchanged and it felt like time had stopped.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `KB03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T2C246)`"Takeshi, you're such a slob..."`;
   `You said, but she sounded tired.`;
   You(T2C247)`"And stop dawdling..."`;

});
fgload({ id: 2, name: `KB13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C121)`"Look, there's no reason to go wandering around the complex now, right?"`;
   Takeshi(S2C122)`"We're just...going have to wait for help to come anyway, right?"`;

});
fgload({ id: 1, name: `YU05ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(T2C248)`"Yeah...I suppose..."`;

});
fgload({ id: 1, name: `YU08ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(T2C249)`"Alright...I'm off for a little bit..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Rubbing her neck and trying to relax her stiff shoulders, You stood up.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C123)`"What? Are you going somewhere?"`;

});
showTextbox();
text(() => {
   You(T2C251)`"Yeah. Nowhere in particular. Just a walk..."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C252)`"I've got to move around or I'll get tired..."`;

});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C124)`"Hey! I've got a great idea."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Sara raised her hand and stood.`;
   You(S2C125)`"An idea?"`;
   Sara(S2C126)`"Ladies and gentleman, we shall partake in a game to give us some exercise."`;
   You(S2C127)`"Alright, but what kind of game?"`;

});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C128)`"Ninja tag."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C129)`"That might be a bit..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C130)`"Well, how about normal tag?"`;
   `Sora seemed up for the idea.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C131)`"I suppose that would be okay."`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C132)`"Alright. Everybody, let's play."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C133)`"Hey, hey. You expect me to play some kid's game...?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C134)`"What about you, Kid? In or out?"`;
   Kid`"What? Me too?"`;
   You(S2C135)`"We've been talking about everyone participating. So you're playing, too."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C136)`"I'm not going to play."`;

});
removeFG({ id: 2, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `KB08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C137)`"I'm out, too."`;

});
hideTextbox();
removeFG({ id: 2, useAnim: true });
fgload({ id: 1, name: `YU01ADL`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2C138)`"I meant that everyone apart from Tsugumi is playing, anyways."`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C139)`"I said, I'm out."`;
   Kid`"Hmmmm...."`;
   Kid`"Alright. I'm in."`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `I was pretty much sick of the boredom.`;

});
fgload({ id: 1, name: `YU02ADL`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2C140)`"Alright. It's settled!"`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2C141)`"We have five competitors vying for the title of champion: You, Sara, Sora, Takeshi and the Kid."`;
   Takeshi`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `SA05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C142)`"But don't you think normal tag will be boring?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C143)`"You're right..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C144)`"How about kick the can?"`;
   Kid`"Sora, you sure have good grasp of simple games like this..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `SO09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2C145)`"Not that...something a little out of the ordinary."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We all thought.`;
   `And then...`;

});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C146)`"*Sigh* Haaa...." `;

});
fgload({ id: 1, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C147)`"Oh well."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi stood up from her chair sluggishly.`;
   `She walked briskly toward the corner of the room...`;

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
   `And flipped off the light switch.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADS`, name2: `KB06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C148)`"Wh-what are you thinking? It's dark."`;
   Tsugumi(S2C149)`"How about that? Satisfied?"`;

});
showTextbox();
text(() => {
   Everyone`"??"`;

});
fgload({ id: 1, name: `TU05ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C151)`"I'm fed up...."`;
   Tsugumi(S2C152)`"Even I am about to go crazy."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Everyone`"???"`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   `Tsugumi shot us a nasty look and left the room.`;

});
multifgload3({ name1: `YU07ADS`, name2: `SO07ADS`, name3: `SA08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   You(S2C154)`"What...was that about?"`;
   Sara(S2C155)`"Who knows?"`;
   Sora(S2C156)`"Maybe we were talking too much for her."`;
   Kid`"But, still, why turn out the lights?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C157)`"What does she mean 'even' her? She's the one that's lost it."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C158)`"But she'll be back after a while."`;

});
fgload({ id: 1, name: `YU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C159)`"Hey, Kid. Would you mind getting the light?"`;
   Kid`"Sure."`;
   `I went to go switch on the lights...`;

});
fgload({ id: 4, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C160)`"Wait!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `KB06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"What is it?"`;

});
fgload({ id: 4, name: `SA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C161)`"Since the lights are off, why don't we try the game with them off?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Huh?"`;
   Sara(S2C162)`"We'll play tag...no...kick the can in the dark!"`;
   `Sara took one of the empty cans from the table.`;

});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C163)`"We'll call it 'Yamioni.'"`;

});
fgload({ id: 1, name: `YU02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C164)`"That sounds cool. Let's go with that!"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C165)`"I concur."`;
   Kid`"It's a bit more exciting than normal tag."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `YU01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C166)`"Of course, Takeshi's good with it, right?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C167)`"Geeez. Whatever."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `So we unanimously agreed (except for Tsugumi) to play 'kick the can in the dark.'`;
   `We decided who was 'it' using rock, paper, scissors.`;

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
   Sara(S2C168)`"Ready, set, go!"`;

});
multifgload3({ name1: `YU02ADS`, name2: `KB06ADS`, name3: `SA02ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi(S2C169)`"Damn. I lost!"`;
   `...Takeshi was out on the first try.`;
   You(S2C170)`"Alright. So Takeshi is 'it' first." `;

});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C171)`"Then it's settled."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C311)`"Good luck."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `Everybody was grinning at Takeshi.`;
   `Takeshi looked about as sorry as it was possible for him to look.`;
   Kid`"Here you go, Takeshi."`;
   `I handed the empty can to Takeshi.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C313)`"But...hiding anywhere is okay, as long as it's on this third floor. Okay, let's hide."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C314)`"Ready..."`;
   Takeshi(S2C172)`"W-wait a sec!"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Takeshi held up a hand hurriedly stopping You from sending everyone off.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C173)`"You, what did you just say?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C315)`"Let's hide."`;
   Takeshi(S2C174)`"No. Before that."`;
   You(T2C316)`"You can hide anywhere on this third floor."`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C175)`"...Are you serious?"`;
   Takeshi(S2C176)`"Not just the Conference Room?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C317)`"This room is too small. And there aren't that many places to hide."`;
   Takeshi(S2C177)`"But the WHOLE third floor?"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C318)`"Oh, of course, the areas you can't walk from here are off limits. And the emergency corridors and stairs are no good either."`;
   Takeshi(S2C178)`"That's still too big!"`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C179)`"It's not fair to the person that's 'it'. While he's looking, he's sure to get it from somebody else..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C319)`"I think it's fine."`;
   Takeshi(S2C180)`"It's not fine. The game won't work. That's a MAJOR problem."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C320)`"Gosh. You sure complain a lot."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C321)`"Well, he would certainly appear to be at a disadvantage..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C322)`"I will dim the lights on the third floor... but in return I will make it so that sounds carry better."`;
   Sora(T2C323)`"If sounds carry, then you can hear when someone moves across a corridor with water. That will give the person who is 'it' an advantage."`;
   Sora(T2C324)`"And I will make it so that you know where people are moving. I will synthesize footsteps and dispatch the data to voice converters."`;
   Takeshi(S2C181)`"Alright. That sounds better."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C325)`"Oh, but...what should I do if I should get to the can first?"`;
   Kid`"Huh? Oh..."`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C182)`"That's right. You can't kick the can!"`;
   `We'd only just noticed. If we played tag, we just would have had to ban Sora from jumping about as an image... `;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C183)`"Then I'll team up with you."`;
   Sara(S2C184)`"We'll make it so that Sora and I have to be within a yard of each other when we hide or when we are 'it'."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C185)`"So I can kick the can..."`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C186)`"Okay? Let's try it this way."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C331)`"Okay. Thanks."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `On top of that we made Sora promise not to use the bio scan or LeMU to monitor the location of anyone.`;
   Kid`"Yeah, that makes it fair then."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C333)`"Alright. All set."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `It looked like everyone was ready.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C187)`"So I'll count."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C188)`"O-n-e, t-w-o, t-h-r-e-e..."`;
   `As Takeshi started counting, we dashed out of the Conference Room.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
clock(`22:18`);
showTextbox();
text(() => {
   `We left the room in a group.`;

});
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash, splash, splash...`;
   `The sound of our stepping through water sounded deeper than before.`;
   `(I get it...so this is what she meant by making the sound bigger...)`;
   `I thought that we would have to pay attention to which sounds were our own and which others.`;
   `And we'd have to determine which footsteps belonged to the person that was it.`;
   `But for the person that was it, it was easier because everyone else was the enemy.`;
   `That pretty much negated any advantage we might have had.`;
   `At least that was what I thought.`;

});
bgload({ name: `BG26B4L`, transition: 20 });
showTextbox();
text(() => {
   `After we had run a fair bit...`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   You(S2C189)`"Okay, stop!"`;
   `You, who had been running at the front of the pack, stopped us.`;
   Kid`"What's up?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADS`, name2: `SO07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C190)`"If you don't hide, he'll find you."`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C191)`"Don't worry about that. Just listen."`;

});
fgload({ id: 2, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C192)`"It appears that you have some kind of strategy."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Strategy?"`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C193)`"Yes. Exactly right."`;

});
multifgload2({ id1: 4, id2: 2, name1: `YU01ADS`, name2: `SO01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2C194)`"If we continue like this, then we'll just get all separated and hide..."`;
   You(S2C195)`"But that increases the chance that we'll lose."`;
   Kid`"But that's the way the game works, isn't it?"`;

});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C196)`"You're SO naive. In games a man is supposed to WANT to win."`;
   `'But aren't you supposed to be a girl, You?'`;
   `I stopped myself from saying that in the nick of time.`;
   Sara(S2C197)`"But there is no way to guarantee a win, right?"`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C198)`"Mayo...is that what you really think?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADS`, name2: `SO07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `You said this as she played with Sara's braids.`;
   Kid`"Well, hurry up and tell us already."`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C199)`"If you'll think about what we have...and what Takeshi doesn't, then you'll get it in a flash."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C200)`"What we have...?"`;
   Kid`"What Takeshi doesn't...?"`;

});
fgload({ id: 2, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C201)`"Numbers. We are many. Takeshi is one."`;

});
fgload({ id: 4, name: `YU09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C202)`"YES! That's it."`;

});
choice(
   `I see.`,
   `I don't get it.`,
);
switch (l_choice) {
   case 0: goto(lbl_00000b7f);
   case 1: goto(lbl_00000b88);
}
let lbl_00000b7f;
showTextbox();
text(() => {
   Kid`"Oh, I get it...we'll try to win by sheer numbers."`;

});
goto(lbl_00000cc8);
let lbl_00000b88;
showTextbox();
text(() => {
   Kid`"??"`;
   Sara(S2C203)`"??"`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C204)`"These many hints and you still don't get it? Use your head."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `You put her fingers on Sara's temples and massaged them teasingly.`;

});
showTextbox();
text(() => {
   Sara(S2C205)`"Oh, stop it...that tickles."`;

});
showTextbox();
text(() => {
   You(S2C206)`"Oh, you like that, do you?"`;
   Sara(S2C207)`"Stop, I said...I mean it..."`;
   You(S2C208)`"You're as much a ditz as ever, Mayo."`;
   Sara(S2C209)`"I know...I've had this problem ever since I was little..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA04ADM`, name2: `YU02ADM`, x1: 128, x2: 512, useAnim: false });
showTextbox();
text(() => {
   Sara(S2C210)`"What am I saying? I'm not that stupid!"`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: false });
showTextbox();
text(() => {
   `Whack! Sara lightly slapped You on the forehead.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Their exchange was enough to make the rest of us feel stupid.`;

});
showTextbox();
text(() => {
   You(S2C211)`"Tee,hee,heee...."`;
   Kid`"Enough of that. Just tell me."`;

});
multifgload3({ name1: `SA04ADS`, name2: `SO09ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   You(S2C212)`"Oh well..."`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C213)`"Listen Kid. Would you rather fight one person or four people?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADS`, name2: `SO01ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Neither."`;

});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C214)`"Just pick one."`;
   Kid`"...One, I guess."`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C215)`"Why?"`;
   Kid`"Against four people I wouldn't stand a chance."`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C216)`"Right. That's what I mean?"`;
   Kid`"Huh?"`;
   Sora(S2C217)`"That is what You means by a strategy of numbers."`;

});
let lbl_00000cc8;
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C218)`"Yup. If we all mob together then there is nothing the person that's it can do."`;
   Sora(S2C219)`"So if somebody gets found, somebody else just kicks the can."`;
   Sora(S2C220)`"And if that person gets caught, then somebody else kicks the can..."`;
   You(S2C221)`"That's right. So if we all get there at once and unleash an attack, Takeshi won't be able to defend, right?"`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C222)`"Oh, I get it."`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C223)`"So...after we all split up we'll aim for the can and charge the Conference Room."`;
   You(S2C224)`"After kicking the can, we'll separate again immediately."`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C225)`"By repeating this hit-and-run we'll win."`;
   Kid`"But isn't that kind of cheating?"`;
   You(S2C226)`"Not at all. Attacking with overwhelming numbers is a basic military strategy."`;
   Kid`"So it's kind of like violence by the masses?"`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C227)`"Or a democratic strategy."`;
   Kid`"Whatever."`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C228)`"In a democracy...the majority rules..."`;
   You(S2C229)`"In other words...those with less numbers are weak."`;

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
   `So we separated and all aimed for the Conference Room via different routes.`;

});
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `But our footsteps were sure loud.`;
   `Still, if we didn't hurry, Takeshi would find us.`;
   `I just hoped that someone would get there and kick the can before he found me.`;
   Takeshi(S2C230)`"Who is that?"`;
   Kid`"Ooops!"`;
   `Suddenly, Takeshi's voice rang out behind me.`;
   `I was so concerned with the sound of my own footsteps that I didn't hear him approach.`;
   `At this distance...there was no way I could get away.`;
   `I gave up.`;

});
stopSFX()
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Oh, no. You caught me... Am I the first one?"`;
   Takeshi(S2C231)`"Yup."`;
   Kid`"Dang. That means if you catch everyone, then I'm 'it' next?"`;
   Takeshi(S2C232)`"I reckon so."`;
   Kid`"I wonder if someone will show up to help me."`;
   Takeshi`"........."`;
   Kid`"........."`;
   Takeshi`"........."`;
   Kid`"Takeshi, if you don't go step on the can, then I'll go kick it."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C233)`"You sure know your kick-the-can rules."`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   //??
   Unk(T2C339)`"Whack!"`;

});
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `"Crash!!"`;
   Takeshi(S2C234)`"Umpphh!"`;

});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `"Splash!"`;
   `Suddenly You came flying from the side and completely sideswiped Takeshi with a jumping cross-chop to the neck.`;
   Takeshi(S2C235)`"Gurgle, gurgle..."`;
   `Takeshi's head had gone under water.`;

});
fgload({ id: 1, name: `YU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C340)`"NYA,HA,HA,HA"`;
   `You was pointing at the submerged Takeshi and cackling crazily.`;
   Takeshi(S2C236)`"Cough, cough...pwahh!"`;
   `Takeshi, floundering in the water, stood up.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB05AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C237)`"H-hey, you!!"`;
   You(T2C341)`"Hee, hee...I won this battle!"`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
fgload({ id: 2, name: `KB04AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C238)`"Hey you! Wait!"`;

});
removeFG({ id: 2, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   You(S2C239)`"Wait for you to catch me? No thanks!"`;
   Takeshi(S2C240)`"Hey you! I'll get you back for that! Just you wait!"`;
   `Takeshi took off in a mad dash after You.`;
   Kid`"..."`;
   Kid`"Well...I guess I'd better go kick the can."`;
   `I strolled leisurely to the Conference Room.`;

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
   `When I entered the room...`;

});
fgload({ id: 1, name: `KB02AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C241)`"I found the Kid! I stomped on the can!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi pointed at me declaring this.`;
   `He was stepping on the can.`;
   `You was near him and looked depressed.`;
   `It looked like she had lost.`;
   `(Oh, no...)`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB02AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C242)`"Ha, ha, ha! Did you really think you could outwit me?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C343)`"Takeshi you cheat! You changed the place of the can!"`;
   Takeshi(S2C243)`"Nobody said where we had to put the can, right? Besides, you smacked me so I figure we're even."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C344)`"Alright, alright. Whatever. Anyway, so I'm the first person you caught?"`;

});
fgload({ id: 2, name: `KB01AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C244)`"You got it."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C345)`"Well, that plan was sure a failure..."`;

});
fgload({ id: 2, name: `KB07AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C245)`"...Huh? What plan?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `As they were talking, the sound of splashing footsteps could be heard approaching the door...`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 90 });
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C246)`"Shweeen...I'm here!"`;
   Takeshi(S2C247)`"I found Sora and Sara."`;

});
fgload({ id: 4, name: `SA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Takeshi stepped on the can.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `SO07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C347)`"Oh, did you get beaten here, You?"`;
   You(T2C348)`"Things didn't quite work out as planned."`;

});
fgload({ id: 4, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C248)`"Nakkyu, don't you think you jumped the gun just a little bit?"`;
   Kid`"You said we would all charge together."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB07AWS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C249)`"So that was your plan..."`;

});
fgload({ id: 1, name: `YU01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C351)`"Yeah. I thought if we all went for the can at once, you wouldn't be able to stop us."`;

});
fgload({ id: 2, name: `KB13AWS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C250)`"That's pretty tricky."`;

});
fgload({ id: 1, name: `YU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C352)`"You really think so?"`;
   `You laughed mischievously and with a hint of embarrassment.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `We gathered in the center of the room.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KB01AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C251)`"Well, finding all of you was easier than I thought..."`;

});
fgload({ id: 2, name: `KB08AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C252)`"First of all, mob-style kicking of the can is definitely outlawed."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C353)`"Huh? Why?"`;

});
fgload({ id: 2, name: `KB05AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C253)`"You think I can stop you if you all come attack at once?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C354)`"Impossible."`;

});
fgload({ id: 2, name: `KB08AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C254)`"That's why. It takes all the fun out of it."`;
   Takeshi(S2C255)`"Timing your rush, just right, for when the person who is 'it' goes searching...all of that would disappear from the game."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C355)`"Well, alright..."`;
   `You reluctantly agreed to be 'it' the next time.`;
   Takeshi(S2C256)`"Alright. Everybody good with that?"`;
   `Sora, Sara, I - everyone nodded.`;

});
fgload({ id: 2, name: `KB02AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C257)`"Okay then. You is 'it' next."`;
   Takeshi(S2C258)`"The can is over there, so you get it. Put it where you want and count..."${waitVoice}${noWait}`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KB06AWM`, x1: 128, x2: 512, useAnim: false });
showTextbox();
text(() => {
   `Kabing!`;

});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clatter, clatter, clatter...`;
   `The sound of a can being kicked rang out in the darkness. `;
   Takeshi(S2C259)`"Hey! Who kicked that?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C356)`"It wasn't me!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As soon as she got this out of her mouth, You started to run away.`;

});
fgload({ id: 2, name: `KB04AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C260)`"You scoundrel...!"`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `We all scattered like scared butterflies.`;

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
   You(S2C261)`"I don't know what the deal is, but that was lucky."`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You said this as she ran.`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C262)`"That was a close call."`;
   Kid`"But who kicked the can?"`;
   `All four of us had been found by Takeshi.`;
   `The rules were that anyone caught couldn't kick the can.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C263)`"It wasn't me or Nakkyu. And Sora can't kick."`;
   Kid`"I didn't kick it."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Everyone`"........."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `YU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C264)`"You don't suppose it was Tsugumi, do you?"`;

});
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2C265)`"Tsugumi? No way."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C266)`"But that's the only possibility."`;
   Kid`"I wonder if Tsugumi wanted to play the whole time."`;
   Sora(S2C267)`"She was probably just embarrassed to say so."`;
   `That could have put a new, almost adorable twist on her personality.`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C268)`"Oh, ho! We'll have to thank her when we see her."`;
   `Sara laughed happily as she said this.`;

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
   You(S2C269)`"Alright. Let's split up."`;
   `You proposed this as we reached a T in the corridor.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `SO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C270)`"Yeah, let's split up. Good luck!"`;
   Sora(S2C271)`"Okay. We will meet up later."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You went left and Sara and Sora went to the right.`;
   `Uh...I...`;

});
choice(
   `Go with You`,
   `Go with Sara and Sora`,
);
switch (l_choice) {
   case 0: goto(lbl_000013ec);
   case 1: goto(lbl_00001676);
}
let lbl_000013ec;
bgload({ name: `BG26B4L`, transition: 20 });
l_you_point += 1;
l_went_with_you_in_2nd_day = 1;
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C272)`"Oh? Kid, you decided to come this way?"`;
   Kid`"Yeah...but where do you plan to hide?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C273)`"I'm thinking about that as we speak."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We kept running.`;

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
   You(S2C274)`"Alright. What are we gonna do?"`;
   `As we scanned the area for trouble we looked for a hiding place.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C275)`"Unless we hide somewhere unexpected, he'll find us right away."`;
   Kid`"Well, let's go in a room for now."`;

});
stopBGM();
showTextbox();
text(() => {
   `As I said that I heard something.`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Kid`"Somebody is coming?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C276)`"It's probably Mayo and Sora."`;
   Kid`"Probably..."`;
   `We peered through the darkness in the direction of the sound.`;
   `We could see someone's silhouette.`;
   `That build could only be...`;
   Kid`"No. It's Takeshi!"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C277)`"Really?"`;
   Kid`"Hurry! We've gotta hide!"`;

});
bgload({ name: `BG22B2`, transition: 20 });
playBGM({ num: 15, volume: 97 });
showTextbox();
text(() => {
   `We dove into the nearest room.`;
   `It was the elevator hall.`;
   Kid`"What're we gonna do? There's nowhere to hide."`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Takeshi steadily approached.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C278)`"I know! Let's hide in there!"`;
   Kid`"Huh? Where?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You's finger was pointing...at the elevator that was stuck on its way to Zweite stock.`;
   `It was the one that Sara had been stuck in the day before.`;
   `The door was still open.`;
   `First You lifted me on her shoulders and I hurried into the elevator.`;
   `Then I pulled her up.`;
   Kid`"Hmmph..."`;
   `So we were able to hide just an instant before Takeshi came.`;

});
bgload({ name: `EV_YU10A`, transition: 20 });
showTextbox();
text(() => {
   `We held our breath, watching silently.`;
   `No emergency light even lit the elevator.`;
   `Just profound darkness...and silence...`;
   `I could hear You crouched next to me, breathing.`;
   `I though I could almost hear my heart.`;
   Kid`"I...I hope he doesn't find us."`;

});
hideTextbox();
playSFX({ name: `SE01_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   You(S2C279)`"Ssshhh! He's here."`;

});
bgload({ name: `EV_YU10B`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `Takeshi appeared at the bottom of the stairs.`;
   `It seemed that he hadn't pinned down our position. He was still glancing around.`;
   `My heart rate rocketed.`;
   `It pounded in my ears.`;
   `I put my hand on my chest as if to hold it in check.`;
   `(Oh...oh...please don't let him find us...!)`;
   `....`;
   `Takeshi just stood there.`;
   `It was as if he were sure that we were around.`;
   Takeshi(S2C280)`"That's strange. I coulda sworn I heard footsteps over here."`;
   Takeshi(S2C281)`"I guess it was just my imagination."`;
   `It looked like he had finally given up.`;
   `(Whew...)`;
   `Just as I thought the crisis had passed.`;
   Kid`"Ha...ha.... Ach..."`;
   `A sneeze welled up inside me.`;
   `(Why now?)`;
   `I clamped my hand on my mouth as I desperately tried to hold it back.`;
   Kid`".........!"`;
   `...Somehow I had managed to keep it in.`;

});
stopBGM();
showTextbox();
text(() => {
   You(S2C282)`"ACHOOOO!"`;
   Kid`"........."`;
   You`"........."`;
   Kid`"........."`;
   You(S2C283)`"Tee, hee, hee..."`;

});
bgload({ name: `EV_YU10C`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(S2C284)`"Hey! I know someone's there! Who is it!?"`;
   You(S2C285)`"He found us! Run!!"`;
   Kid`"Yeah! B-but..."`;
   `Where could we run?`;
   You(S2C286)`"No problem! Leave it to me!"`;

});
bgload({ name: `BG22B2`, transition: 30 });
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The next instant You threw herself out of the elevator.`;
   You(S2C287)`"Yeeeehaaaaaw!"`;
   `You made a spectacular dive...`;
   `...turning it into a stunning drop kick!`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C288)`"Ungphh!"`;

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
   `....`;
   `....`;
   `....`;
   `We fought well, but Takeshi found us.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}<Can stomp>`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `A short while later he found Sara and Sora, too.`;

});
goto(lbl_00001a59);
let lbl_00001676;
bgload({ name: `BG26B4R`, transition: 20 });
l_sara_point += 1;
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `SA05ADM`, name2: `SO07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C289)`"Huh? Is that you, Kid?"`;
   Sara(S2C290)`"Kid, you decided to come this way?"`;
   Kid`"Yeah...but where do you plan to hide?"`;
   Sara(S2C291)`"If you are going to stay with us, you have to help us think of something!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I ran with the two of them.`;

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
   Sara(S2C292)`"I know! I've got a great idea!"`;
   `Saying that, Sara stopped suddenly.`;
   Kid`"Wh-what?"`;
   Sora(S2C293)`"What is it?"`;
   Sara(S2C294)`"It's times like this that call for Ninja skills!"`;
   Kid`"Ninja skills?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C295)`"Sora. When Takeshi comes through, use RSD to show him an empty corridor."`;
   Sara(S2C296)`"This is known as the Elite Art of Ninja Camouflage."`;

});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C297)`"Huh? But that would be..."`;
   Kid`"Isn't that against the rules?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C298)`"Don't be a spoilsport. We banned instant travel and bio scans, but NOT using LeMMIH. Right?"`;
   Kid`"That's sneaky."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C299)`"In the lexicon of the Ninja, we call it a 'secret technique.'"`;
   Kid`"No. I'm not having any of it."`;

});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C300)`"I'm sorry, but I'm afraid that I can't agree either."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C301)`"What?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C302)`"Then...how about the 'Elite Ninja Doppelganger technique?'"`;

});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Huh?"`;
   Sara(S2C303)`"We can use RSD to make it appear that there are lots of us to confuse Takeshi."`;
   Kid`"That's the same thing!"`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C304)`"Uh, why don't we just say no Ninja techniques using LeMMIH?"`;

});
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C305)`"Tsk...you two are such prudes..."`;

});
stopBGM();
showTextbox();
text(() => {
   `Just then...`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C306)`"Someone's here...!"`;

});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C307)`"It's probably You."`;
   Kid`"Probably..."`;
   `We peered through the darkness in the direction of the sound.`;
   `We made out the silhouette of a person.`;
   `That build could only be...`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C308)`"Yikes!"`;
   Kid`"No. It's Takeshi!"`;

});
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C309)`"What? Really?"`;
   Kid`"Hurry! We've gotta hide!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We dashed down the corridor.`;
   Sora(S2C310)`"Oh, no! That way is no good..."`;

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
   `A watertight door blocked our way forward.`;
   Kid`"We're stuck!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C311)`"A...a dead end?"`;
   Sora(S2C312)`"That's what I was saying..."`;
   `There was no room nearby that we could escape into.`;
   `We should have hidden in a room somewhere.`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Takeshi was heading toward us for sure.`;
   `At this rate we would be caught for sure!`;
   Sara(S2C313)`"Oh! What're we gonna do?"`;

});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C314)`"It looks like we have no choice but to give up."`;
   `Sara was flustered, Sora resigned to fate.`;
   `On the other hand, I...`;
   Kid`"No...not yet!"`;
   `At this distance, I decided that it would be better to make a dash for the nearest room.`;
   Kid`"Let's go! I think we'll make it."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B4`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I dragged Sara and Sora back down the corridor.`;
   `We found an entrance and dove into a room.`;

});
bgload({ name: `BG21B2`, transition: 20 });
showTextbox();
text(() => {
   `But...!`;
   Takeshi(S2C315)`"Hey, if it ain't the Kid!"`;
   `(Whoa! What happened?)`;
   `I couldn't believe it...he'd cut us off.`;
   Kid`"It's no good! Go back!"`;

});
fgload({ id: 1, name: `SA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C316)`"Huh? What do you mean?"`;

});
bgload({ name: `BG25B4`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `Just as we went turn back to the corridor...`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C317)`"Gotcha!"`;
   `There was Takeshi.`;
   Kid`"!?!?!?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA03ADM`, name2: `SO09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C318)`"Awwww..."`;
   Sora(S2C319)`"He caught us!"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C320)`"Geez, that took a long time..."`;

});
fgload({ id: 1, name: `SA04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C321)`"Oh! It's all because the Kid said we should go back!"`;
   Kid`"But...but..."`;
   `I didn't know what else to do.`;

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
   `


${noWait}`;
   `${center}<Can stomp>`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Not long after that, he found You as well.`;

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
   `We met in the Conference Room.`;

});
multifgload3({ name1: `YU03ADS`, name2: `KB02ADS`, name3: `SO01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi(S2C322)`"Alright! Now I just need to get Tsugumi."`;
   `Takeshi stepped on the can, looking satisfied.`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C323)`"Still, it's kinda weird..."`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADS`, name2: `SO07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Weird? What is?"`;
   Takeshi(S2C324)`"The can when it was kicked before...it was still in the same place."`;

});
fgload({ id: 1, name: `YU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C325)`"Huh? I don't know what you are trying to say."`;

});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C326)`"I mean that the can should have been kicked, but it was still standing up!"`;
   `Takeshi said this as he squished the can some more.`;
   Takeshi(S2C327)`"It was like no one had kicked it."`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C328)`"Isn't it likely that the can was toppled and righted itself? Theoretically it is quite possible."`;

});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C329)`"In the same place I put it?"`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C330)`"That is...odd."`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C331)`"But shouldn't you go looking for Tsugumi?"`;
   You(S2C332)`"Yeah. If you're gonna be a sore loser, you should at least go do that."`;

});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C333)`"I'm not the loser here - you guys are!"`;
   You(S2C334)`"Whatever. You're right. It's exactly as you say..."`;
   Sara(S2C335)`"We got it already. Now get out of here and search."`;
   `You and Sara waved Takeshi away.`;

});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C336)`"Geez. You are so full of yourself.... It doesn't even feel like I won..."`;

});
removeFG({ id: 2, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Takeshi left the room grumbling.`;
   `....`;

});
fgload({ id: 2, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Soon after that - `;

});
stopBGM();
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
multifgload3({ name1: `YU06ADS`, name2: `SO06ADS`, name3: `SA06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   `Kabing!`;

});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clatter, clatter, clatter...`;
   `The sound of a can being kicked rang out in the darkness. `;
   Kid`"Wh-what was that?"`;

});
fgload({ id: 1, name: `YU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C337)`"I have no idea, but..."`;

});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C338)`"Now is our chance!"`;

});
fgload({ id: 2, name: `SO03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C339)`"Do...do you think we should...?"`;
   Kid`"I wonder...if it's okay?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `In the confusion we made our third escape.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi(S2C340)`"Hey! Once you've been caught, it's against the rules to kick the can!"`;
   `We heard Takeshi shouting soon after.`;
   `Of course, neither I, You, Sara nor Sora...none of us had kicked the can.`;
   `'Oh, that had to be Tsugumi again.'`;
   `'She probably sneaked into the room without anybody noticing.'`;
   `That was what we thought.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `....`;
   `....`;
   `....`;
   `Ultimately, Takeshi soon caught us again.`;
   `He howled that we had cheated and started out to find us right away, so we didn't get far.`;
   `Takeshi checked to make sure everyone was there and stepped on the can (even once for Tsugumi.)`;
   `The next time nobody kicked the can....`;

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
   Takeshi(S2C341)`"This time the Kid is 'it.'"`;
   Kid`"Alright. So I count to one hundred, right?"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `I took the can and sat in the chair with my face down.`;
   Kid`"Alright, here I go..."`;
   Kid`"O-n-e, t-w-o, t-h-r-e-e..."`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `They left the Conference Room fleeing around the floor.`;

});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   Kid`"O-n-e h-u-n-d-r-e-d..."`;

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
   `I opened my eyes.`;
   `I set the empty can by my feet.`;
   `It was as far from the entrance as I could get it.`;
   `Scanning the dark area around me, I didn't see anyone.`;
   `(Well, I guess I'll go looking...)`;

});
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   `I decided to head off to check some rooms.`;

});
l_selection_0_available = 1;
l_selection_1_available = 1;
l_selection_2_available = 1;
l_selection_3_available = 1;
l_selection_4_available = 1;
l_selection_5_available = 0;
l_counter = 0;
l_choice_flag1 = 0;
l_choice_flag2 = 0;
goto(lbl_00001f63);
let lbl_00001e3a;
if (l_counter == 3) goto(lbl_00002482);
if (l_choice_flag1 == 0) goto(lbl_00001e84);
if (l_choice_flag2 != 0) goto(lbl_00001e84);
l_selection_5_available = 1;
let lbl_00001e84;
l_accumulator = 0;
l_accumulator += l_selection_0_available;
l_accumulator += l_selection_1_available;
l_accumulator += l_selection_2_available;
l_accumulator += l_selection_3_available;
l_accumulator += l_selection_4_available;
l_accumulator += l_selection_5_available;
if (l_accumulator == 0) goto(lbl_00002482);
if (l_accumulator == 1) goto(lbl_00001f55);
if (l_choice == 0) goto(lbl_00001f5e);
if (l_choice == 1) goto(lbl_00001f5e);
if (l_choice == 3) goto(lbl_00001f5e);
showTextbox();
text(() => {
   `I wondered where they'd hid.`;

});
goto(lbl_00001f63);
let lbl_00001f55;
showTextbox();
text(() => {
   `Where else was left...`;

});
goto(lbl_00001f63);
let lbl_00001f5e;
showTextbox();
text(() => {
   `I selected from the - `;

});
let lbl_00001f63;
choice(
   cond(l_selection_0_available != 0)`Central Control Room`,
   cond(l_selection_1_available != 0)`Lemurian Ruins`,
   cond(l_selection_2_available != 0)`Elevator Hall`,
   cond(l_selection_3_available != 0)`Rest area`,
   cond(l_selection_4_available != 0)`Kiosk`,
   cond(l_selection_5_available != 0)`Conference Room`,
);
showTextbox();
text(() => {
   `${noWait}`;

});
hideTextbox();
switch (l_choice) {
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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG04B2`, transition: 20 });
l_counter += 1;
l_selection_1_available = 0;
l_choice_flag1 = 1;
showTextbox();
text(() => {
   `Lemurian Ruins`;
   `This attraction was designed with the motif of a lost continent believed to have sunk to the ocean floor ages ago.`;
   `Standing there in the darkness in that eerie setting, it almost made me imagine that I had sunk to the bottom of the ocean.`;
   `No, that was only half true.`;

});
playSFX({ name: `SE01_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Scrunch.`;
   `Huh?`;
   `It sounded like a footstep.`;
   `(Is someone there...?)`;
   `....`;
   `I wondered if it were my imagination.`;
   `It wasn't.`;
   `In the darkness...in the building in front of me was the dim outline of a person.`;
   `But in that light and at that distance, I couldn't be sure who it was.`;
   `It was like the person was holding their breath waiting for me not to notice.`;
   `But he or she looked like she was ready to dash off in an instant.`;
   `I thought that if I bumbled closer, the person would run away.`;
   `I'd have to figure out who it was from afar...`;
   `Uh...it had to be...`;
   Kid`"You...I found you!"`;
   //??
   Unk(S2C342)`"!?"`;
   `As if it had given up, the silhouette started toward me.`;

});
fgload({ id: 1, name: `YU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C343)`"How did you know it was me?"`;
   `Bingo!`;
   `It looked like my hunch had paid off.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Can stomp.`;

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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG15B2`, transition: 20 });
l_counter += 1;
l_selection_0_available = 0;
l_choice_flag1 = 1;
showTextbox();
text(() => {
   `We headed to the Central Control Room.`;
   `I didn't think there was anywhere there for anyone to hide...`;

});
hideTextbox();
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A2`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Oh!"`;
   `The room was set up with the center surrounded by a giant monitor and console.`;
   `There was Tsugumi.`;
   `She sat sloughing in her chair staring blankly at the monitor.`;
   Kid`"Tsugumi, I caught you!"`;
   `At my declaration, Tsugumi looked at me like I was a fly in her soup.`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C344)`"Um..."`;
   `She glared at me.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C345)`"I'm not playing."`;
   Kid`"Come on. You already kicked the can twice."`;
   `Takeshi might have fallen for it, but not me.`;
   Tsugumi`"........."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I stepped on the can just to be safe.`;

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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG22B2`, transition: 20 });
l_selection_2_available = 0;
l_choice_flag1 = 1;
showTextbox();
text(() => {
   `The Elevator Hall.`;
   `There was no sign of anyone.`;

});
if (l_went_with_you_in_2nd_day == 0) goto(lbl_00002259);
showTextbox();
text(() => {
   `Just to be safe I checked inside the elevator that You and I had hid inside.`;

});
goto(lbl_0000225e);
let lbl_00002259;
showTextbox();
text(() => {
   `Just in case, I also checked in the elevator that Sara had been trapped in the day before.`;
   `The elevator door was still open.`;

});
let lbl_0000225e;
showTextbox();
text(() => {
   `Of course, there was no one inside.`;
   `This place was a waste of time.`;
   `I decided to go elsewhere.`;

});
removeBG({ mode: BLACK, transition: 2 });
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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG21B2`, transition: 20 });
l_counter += 1;
l_selection_3_available = 0;
l_choice_flag1 = 1;
showTextbox();
text(() => {
   `I made for the rest area.`;
   `At first it looked like there was no one there either...`;
   `...But...`;
   `Then I noticed something.`;
   `One of the stone pillars silhouettes in the open area was an odd shape.`;

});
showTextbox();
text(() => {
   `No, it was the top of the pillar that had something strange about it.`;
   `I edged closer.`;
   Kid`"........."`;
   `There was definitely something there.`;
   `From where I was, I couldn't tell exactly what that 'something' was, but it was definitely a person.`;
   `Maybe they thought they were acting like a koala.`;
   `What did they intend to do if they fell?`;
   `(I mean, can you really call that hiding?)`;
   `I called out to that clinging 'something.'`;
   Kid`"Uh, isn't that tiring? It sure looks dangerous."`;
   //??
   Unk(S2C346)`"...!"`;
   Kid`"But you sure have got a lot of guts."`;
   Kid`"You're tougher than I thought, Takeshi."`;

});
fgload({ id: 1, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C347)`"Arrrggh...! How'd you know it was me?"`;
   `Takeshi slid down the column.`;
   `(The only person stupid enough to hide there was Takeshi.)`;
   Kid`"I gotcha!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I stepped on the can.`;

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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG07B2`, transition: 20 });
l_selection_4_available = 0;
l_choice_flag1 = 1;
showTextbox();
text(() => {
   `The chicken sandwich shop.`;
   `There was no sign of anyone there.`;
   `Just in case, I peeked inside.`;
   `Of course, there was no one there.`;
   `This place was a waste of time.`;
   `I decided to go elsewhere.`;

});
removeBG({ mode: BLACK, transition: 2 });
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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG17A2`, transition: 20 });
l_selection_5_available = 0;
l_choice_flag2 = 1;
showTextbox();
text(() => {
   `I returned to the Conference Room.`;
   `There was no sign of anyone there.`;
   `The can stood silently where I had left it.`;
   `Just in case, I looked in the corners of the room.`;
   `Of course, no one was there.`;
   `This place was a waste of time.`;
   `I decided to go elsewhere.`;

});
removeBG({ mode: BLACK, transition: 2 });
goto(lbl_00001e3a);
let lbl_00002482;
bgload({ name: `BG25B4`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `Only Sara and Sora remained.`;
   `I walked around Dritte stock looking for the two of them.`;

});
playSFX({ name: `SE01_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `!?`;
   `I heard footsteps in the direction of the Conference Room.`;
   `I was sure it was Sara.`;
   `(Gosh, I hope she isn't planning to kick the can!?)`;

});
playBGM({ num: 11, volume: 100 });
showTextbox();
text(() => {
   `I made a mad dash for the Conference Room.`;

});
hideTextbox();
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
bgload({ name: `BG26B4R`, transition: 20 });
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   `At the entrance to the room - `;
   `the two of them were just at the door - `;
   `- Sara and Sora.`;
   `I sprinted into the room on their heels.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   Kid`"I gotcha! Sara and Sora!"`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Pata, pata, pata...`;
   `But Sara just ignored me and kept running.`;
   `Her eyes were on the can.`;
   `It was as if she knew where the can was.`;
   `(D-damn! I thought I changed the location of the can.)`;
   `I also ran toward the can.`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Pata, pata, pata...`;
   `Would she kick the can first?`;
   `Or would I step on it first?`;
   Sara(S2C348)`"Waaaaa!"`;
   Kid`"Damn!"`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playSFX({ name: `SE10_12`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE07_05`, a1: 0, volume: 95 });
playSFX({ name: `SE10_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The two of us tumbled to the floor.`;
   Kid`"Ouch..."`;
   Sara(S2C349)`"Ow..."`;

});
bgload({ name: `EV_SA11A`, transition: 10 });
stopSFX()
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Kid`"Oh..."`;
   `The next thing that I noticed, I was on top of Sara.`;
   `Sara's eyes were open, staring at me.`;
   `I barely managed to support my body with my arms so that I didn't come into contact with her, but...`;
   `Her face was closer to me than I had ever imagined.`;
   Kid`"..."`;
   `I felt like I might be sucked into her eyes and was captivated by her cute nose, slightly opened lips and glimpse of her tongue...`;
   Sara(S2C350)`"..."`;
   `I felt her breath on my face.`;
   `She had been running until that time and I felt the heat rising from her skin.`;
   `It smelled of sweat.`;
   `The smell of our sweat mixed together.`;
   `I felt the warmth of her body against me.`;
   `It was hard to breathe...my mind started to go blank.`;
   `My whole body stiffened and I couldn't move.`;
   `It was as if our bodies were paralyzed as we lay there staring at each other.`;

});
bgload({ name: `EV_SA11B`, transition: 10 });
showTextbox();
text(() => {
   `Sara slowly raised up her cheek.`;
   `(Oh...oh...danger! She's mad...)`;
   `This was not what I should have been worrying about.`;
   `The can...? Where was the can?`;
   `I turned by neck searching for the can.`;
   `....`;
   `There it was!`;

});
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   `I jumped off of Sara, pointed to her and declared loudly.`;
   Kid`"Sara and Sora! I gotcha!"`;
   `And I stepped on the can triumphantly.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
showTextbox();
text(() => {
   `This was the last stepping on the can.`;

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
   Takeshi(S2C351)`"Geez. He slaughtered us."`;
   Sora(S2C352)`"That was twice as fast as Takeshi."`;

});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C353)`"When I was 'it' everybody was cheating."`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C354)`"Wow. I can't believe you guessed everybody right in the dark. It's pretty amazing."`;
   `Everyone crowded around me and started making a fuss.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C355)`"Nakkyu...what are you talking about?"`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C356)`"Oh, Mayo, you don't know? This kid..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `As You placed her hand on my head, she explained about how I had caught her and Takeshi.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADS`, name2: `KB14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C357)`"Hey, Tsugumi! Give it up. Why don't you just come out and admit you were playing too?"`;
   Tsugumi`"........."`;
   `At some point Tsugumi had returned to the Conference Room.`;
   `Tsugumi sat in a chair pretending to be asleep and ignored Takeshi.`;
   `I felt someone watching me and turned around.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara`"........."`;
   `Sara was looking at me strangely.`;
   `I thought she might be angry again...`;
   `(It was just an accident...)`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I avoided her look uncomfortably.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `That was the end of kick the can.`;
   `In the end, it remained a mystery who kicked the can those times...`;
   `We passed the rest of the night uneventfully...`;
   `It was a peaceful time...`;
   `And I decided to enjoy a satisfying rest.`;

});
hideTextbox();
stopBGM();
delay({ interval: 90 });
if (l_coco_point == 6) goto(lbl_00002773);
l_choice = 0;
jump(`S_3A`);
let lbl_00002773;
l_choice = 0;
jump(`SC2F`);
