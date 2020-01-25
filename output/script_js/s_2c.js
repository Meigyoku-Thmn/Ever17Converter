if (l_choice == 1) goto(lbl_000010e0);
setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
setSceneTitle({ index: 63 });
bgload({ name: `BG17A1`, transition: 26 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`11:21`);
showTextbox();
text(() => {
   `Nearly an hour had passed since the power had gone back online.`;
   `We gathered in the third floor Conference Room.`;
   `Takeshi, Tsugumi, Sora, You, Sara and I ? all six of us were sitting in chairs just letting time pass.`;
   `The rescue team still hadn't come.`;
   `Our situation didn't show any sign of changing.`;
   Takeshi(S2C000)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   You(S2C001)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Sara(S2C002)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Tsugumi(S2C003)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   `Takeshi's yawn spread from person to person.`;
   `I desperately tried to keep from yawning.`;
   `Only Sora had her head down and looked as if she were thinking about something....`;
   `We were bored silly.`;
   `I hadn't realized that doing nothing could be so hard.`;
   `(Well, I might as well get some exercise.)`;
   `Thinking that I stood from the chair.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C004)`"What's up?"`;
   `Sara shot me the question slumped in the chair next to mine.`;
   Kid`"We've got all this time so I thought I'd go for a little walk."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C005)`"Oh. In that case, can you bring me back something to drink?"`;
   Kid`"Huh?"`;
   `Why was this an 'in that case' thing?`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C006)`"I'm thirsty...I think there was juice in the kiosk, right?"`;
   Kid`"I think so."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C007)`"Okay. Thanks."`;

});
choice(
   `No problem`,
   `I don't think so. `,
);
switch (l_choice) {
   case 0: goto(lbl_0000012c);
   case 1: goto(lbl_00000140);
}
let lbl_0000012c;
l_sara_point += 1;
showTextbox();
text(() => {
   Kid`"Oh well. So any kind of juice is okay?"`;
   Sara(S2C008)`"Sure. Anything is fine."`;
   `Great...`;
   `I felt like the group hierarchy had sorted itself out.`;

});
goto(lbl_000001e6);
let lbl_00000140;
showTextbox();
text(() => {
   Kid`"I don't think so. Get it yourself."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C009)`"You won't do me a favor?"`;
   Kid`"Nope."`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C010)`"Why not? You're no use."`;
   Kid`"That's exactly why you shouldn't be asking favors of me."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C011)`"Listen. Kid, you've got some kind of memory problem so you probably don't know, but at times like this guys are supposed to say, 'Sure.'"`;
   Kid`"I...I don't think so. No matter how much memory I've lost. I know that much."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C012)`"Do you want me to ask Takeshi?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C013)`"Or maybe Nakkyu."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C014)`"Hey, Takeshi."`;
   `Sara started calling to Takeshi sitting on the other side of the table.`;
   Kid`"Alright. I got it..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C015)`"Really?"`;
   `I gave up.`;
   `I was sure that Takeshi and You would side with Sara.`;
   `I felt like I had fallen into a trap.`;
   Kid`"You can't complain. No matter what I bring back, okay?"`;
   Sara(S2C016)`"Okay."`;
   `Here we go again...`;

});
let lbl_000001e6;
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG26B3R`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I left the Conference Room and headed for the kiosk.`;
   `I had a good idea of where it was from my wanderings around the complex the day before.`;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   `I went through the rest area on the way.`;
   `(Huh?)`;
   `Something had been left on the bench.`;
   `It was wrapped chicken sandwiches.`;
   `I figured these were probably sandwiches that Takeshi had made and taken to Tsugumi and Sora.`;
   `I bet that during the blackout they had been forgotten.`;
   `(Alright. I might as well take these along.)`;
   `I took the sandwiches and put them into my pockets.`;

});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `At the kiosk, I started looking for drinks.`;
   `There was enough food and drinks for us to survive for days.`;
   `The only food there was chicken sandwiches and the ingredients to make them, but...`;
   `At least we didn't have to worry about food - meaning we were unfortunately fortunate.`;
   `I took six cans of cola from the kiosk's freezer.`;
   `Only Sara had asked, but I thought I'd take back enough for everyone.`;
   Kid`"Here we go."`;
   `Cradling cola in both arms, I started back.`;

});
bgload({ name: `BG26B3L`, transition: 20 });
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG17A1`, transition: 26 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid`"Here you go!"`;
   `When I came back, everyone was chatting loudly.`;
   `Cards were randomly placed on the table facing down. `;
   `They might have been playing a game.`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C017)`"Welcome back."`;
   Kid`"I figured since I was there that I'd bring back enough for everyone."`;
   Sara(S2C018)`"Thank you, sir!"`;
   `Sara took two of the two cans and handed one to You.`;

});
fgload({ id: 1, name: `SA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C019)`"Here you go, Nakkyu."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `SA02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2C020)`"Hey, Kid. That was sure thoughtful of you!"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `You took the cola from Sara and popped open the tab.`;

});
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Like a pro, she held the fizz down so it wouldn't explode.`;
   `She didn't go getting herself all drenched in soda.`;
   Kid`"So what were you all up to with the cards?"`;
   `I put the remaining four cans on the table.`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C021)`"Mental Guts."`;
   Kid`"What's....that?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `SA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C022)`"You don't know Mental Guts?"`;
   Kid`"Never heard of it."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `SA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C023)`"Oh, I'll bet it went with your memory. It's a super famous game."`;
   Kid`"Hmmmph..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I realized that I couldn't remember even these kinds of things...`;
   `I wondered if I should have been more uneasy about my lost memory than I was.`;
   `First, I thought I'd have a cola.`;
   Kid`"Oh, by the way, I also brought these."`;
   `I remembered the sandwiches and holding the can in my right hand, plunged my hand into my left pocket.`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C024)`"Eh? What?"`;
   Kid`"This. This here."`;
   `I removed a wrapped sandwich.`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C025)`"Huh? Where'd you get that? Did you make it?"`;
   Kid`"It was on a bench in the rest area. Didn't you leave it there, Takeshi?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C026)`"Oh, yeah. It's the one that I forgot to give to Sora. I left it there during the blackout hubbub."`;
   Kid`"I thought that somebody might be hungry."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C059)`"Oh great!"`;

});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C060)`"You are so thoughtful!"`;
   `You rushed over and violently mussed up my hair.`;
   `(Oh, that's right. I have another one.)`;
   `Feeling good about myself, I put the can in my other hand and went to get the sandwich from my right pocket.`;
   Kid`"What in...?"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C027)`"What's the matter?"`;
   Kid`"...It's gone."`;
   `There was nothing in my right pocket.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C028)`"Did you drop it?"`;
   Kid`"No...no way..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I didn't think that I could have dropped it...`;
   `Somehow, I felt there was something odd going on.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `KB11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C029)`"Alright, then this is Sora's."`;

});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Looking, I saw Takeshi holding the sandwich out toward Sora.`;

});
showTextbox();
text(() => {
   Takeshi(S2C030)`"You didn't eat breakfast, right?"`;
   Sora(T2C064)`"Uh, no...I'm fine..."`;

});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C031)`"Don't be polite. I made this...I'm sure it tastes good."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C065)`"Still..."`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C032)`"Hey, I'm not kidding."`;
   Sara(S2C033)`"I'll vouch for him, they're pretty good."`;

});
showTextbox();
text(() => {
   Kid`"Uh, me too..."`;
   `Sara and I both raised our hands in a show of agreement?`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C034)`"Sora? What? You can't eat my food?"`;

});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C068)`"That's not it..."`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C035)`"Then what is it? Eat too much yesterday? Or are you on a diet?"`;
   Sora(T2C069)`"No, but...I..."`;
   Takeshi(S2C036)`"No. You have to eat or you'll get weak. Here! Take it!"`;

});
stopBGM();
showTextbox();
text(() => {
   `He tossed a cola and chicken sandwich toward Sora.`;
   `They traced a gentle arc through the air.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C070)`"Ahh...!!!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sora suddenly reached out her hands...`;
   `She reached them out, but...`;

});
hideTextbox();
playSFX({ name: `SE08_06`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE08_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE02_15`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   Takeshi`"........."`;

});
showTextbox();
text(() => {
   Sora`"........."`;
   `But Sora didn't catch them.`;
   `No. She couldn't catch them.`;
   `She didn't avoid them.`;
   `It wasn't that she was too slow.`;
   `Sora was there with her hands extended into space.`;
   `The sandwich had fallen at her feet.`;
   `The cola had violently slammed into the wall behind her and exploded.`;
   `The spewing cola didn't get Sora wet.`;
   `The droplets looked like they flew through Sora's body.`;
   `The sandwich wrapper covered the silhouette of Sora's sandal...`;
   `It was as if the two had melded together.`;

});
makeFGTransparent({ id: 1 });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C037)`"Huh...?"`;
   Kid`"......"`;
   `Takeshi wasn't the only one surprised.`;
   `I also...I was confused and without a clue.`;
   `It could have been that it seemed odd because I didn't know from the start.`;
   `Or maybe it seemed strange because I'd forgotten it.`;
   `So all I could do was sit there with my mouth agape, my eyes staring at the spectacle.`;
   Sora(T2C071)`"That's why I said...I didn't need it."`;
   `Sora made an embarrassed looking expression.`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C038)`"Wwwwhhhhhhhhaaaaaattttttt?"`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   Takeshi(S2C039)`"No, that's, what, I..."`;
   `Takeshi looked completely puzzled.`;
   Takeshi(S2C040)`"I meant to toss them as if I were handing them over...that's weird...your hand must've slipped..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C072)`"Excuse me. Takeshi, there is nothing strange about it."`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C041)`"B-but! The cola blew up and...is your clothing alright?"`;
   Sora(T2C073)`"Yes."`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C042)`"But you're...stepping on the sandwich...your foot...you've got no toes, Sora..."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C074)`"Oh?.... My gosh! Sorry about that."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 128, useAnim: true });
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `And just like that, Sora's vanished toes reappeared.`;
   `But the place where the sandwich was supposed to be wavered unsteadily.`;
   `I...didn't have any idea what it all meant.`;

});
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C075)`"Uh, I guess, Takeshi...that you didn't know?"`;
   `Sora was shuffling embarrassedly.`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C043)`"Sora...what...in the world are you?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C076)`"*Sigh*."`;
   `For some reason You gave a huge sigh right next to Takeshi.`;
   `And then...`;

});
stopBGM();
fgload({ id: 1, name: `YU09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C077)`"AH, HA, HA, HA, HA"`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `She burst out laughing.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C078)`"I just had to watch because it was so funny, Takeshi..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C079)`"You really don't listen to anything..."`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C044)`"Wh-what are you talking about?"`;
   `Takeshi was still confused.`;
   You(T2C080)`"The explanation at the park entrance."`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C045)`"S-so? So what about it?"`;
   `Looking around, only Takeshi and I were surprised.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `A strange expression floated on to Sara's face, but it seemed like she knew what was going on.`;

});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi's face was blank.`;
   `Apart from Takeshi, it seemed like nobody felt this was anything to be that surprised about.`;

});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C046)`"Geez...!"`;
   `Tsugumi stood up as if irritated.`;

});
fgload({ id: 1, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C047)`"I can't watch anymore of this...it's ridiculous."`;
   `After spitting out those words, she left the Conference Room.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   `Maybe we were used to it, but we just watched her go. No one tried to stop her.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2C048)`"We'll just leave Tsugumi be..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C087)`"Sora, sorry to bother you, but could you introduce yourself again?"`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C088)`"Yes. Of course."`;
   `The punctured can had stopped fizzing.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sora took a step forward toward us, carefully as if avoiding the sandwich, and straightened up.`;
   `After a slight bow, she spoke.`;

});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C089)`"I am Sora Akanegasaki..."`;

});
showTextbox();
text(() => {
   Sora(T2C090)`"My official name is 'LM - RSDS - 4913A'."`;
   Sora(T2C091)`"I am an artificial intelligence, or AI, program in charge of guiding visitors around LeMU."`;
   Takeshi`"........."`;

});
showTextbox();
text(() => {
   Sora(T2C092)`"I have been programmed as one part of the LeMMIH system."`;
   Sora(T2C093)`"If you call me from any nearby terminal, I will soon appear anywhere within LeMU."`;
   Sora(T2C094)`"My image reaches you through a network supporting this RSD system throughout the complex. I think that there are few places in the world boasting this kind of technology."`;
   Takeshi(S2C049)`"...??"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C050)`"So it was RSD..."`;

});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C051)`"But I've never seen one this amazing."`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C096)`"It's one of LeMU's big attractions."`;

});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C052)`"So that's why Sora disappeared during the blackout?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C098)`"Yes. I'm sorry to have caused you undue concern..."`;
   `I had finally lost any sense of what was going on.`;
   `Takeshi looked flustered as well.`;
   `The conversation had taken off and left me and Takeshi behind.`;
   Kid`"What's RSD?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C100)`"Simply put, it is an image display system that uses a semiconductor to shine a laser directly on your retina."`;
   Kid`"I...I see..."`;
   `I nodded.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I had no clue what she was talking about...`;
   `But I thought it might have been because I had no memory.`;
   `It also seemed that any more questions would stall the conversation.`;
   `So I decided to take an 'I don't get it, but that's okay' approach.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C053)`"And it is supporting such an advanced personality."`;
   `The surprising thing was Sara seemed to be following the conversation the best.`;
   Sora(T2C103)`"LeMU is fairly perfectionist when it comes to virtual space technologies. My existence is one manifestation of that."`;

});
fgload({ id: 2, name: `SA14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C054)`"Doesn't that require a big system?"`;

});
fgload({ id: 1, name: `SO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C055)`"Yes, but it is much smaller that it would have been 10 years ago."`;

});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C056)`"How big? Where is it? I'd like to see it."`;

});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C107)`"Uh...I'm sorry, but I'm not allowed to say. It is a secret."`;
   Sara(S2C057)`"You weren't given the details?"`;
   Sora(T2C109)`"That's correct."`;

});
fgload({ id: 2, name: `SA14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C058)`"Hmmmm...."`;

});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C059)`"Well, this is a bit of a different question, but does Sora's personality change based on her memories...?"${waitVoice}${noWait}`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The conversation was getting more and more technical.`;
   `Sara kept badgering Sora with technical questions. `;
   `Things about samplings and algorithms and structure this and encode that...jargon was flying around.`;
   `My head started to hurt.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid`"Hey...You?"`;
   `I approached You and tugged on her sleeve.`;

});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C060)`"Hmmm?"`;
   Kid`"This conversation is crazy complex...what is with Sara anyway?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C061)`"She is...a computer ninja of sorts."`;
   Kid`"Stop with the stupid jokes."`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You puffed out her cheeks as if pouting. It didn't seem she was in the mood for a comeback.`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C062)`"Mayo? She's a hacker."`;
   `Hacker meaning...`;

});
choice(
   `What's a hacker?`,
   `I know what a hacker is`,
);
switch (l_choice) {
   case 0: goto(lbl_00000a5f);
   case 1: goto(lbl_00000adb);
}
let lbl_00000a5f;
showTextbox();
text(() => {
   Kid`"Hacker?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C063)`"Yeah. How should I explain this...I guess you could say a computer expert of sorts."`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C064)`"Anyway, she knows everything about computers. And she kicks butt when it comes to programming, too."`;

});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C065)`"She writes programs for kicks. Just the other day she got first place in some cracking contest..."`;
   Kid`"Cracking contest?"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C066)`"A contest to break codes. Just so you know, it's not illegal."`;
   You(S2C067)`"It was sponsored by some company with code technology. It was legal cracking to test the security of its technology..."`;
   You(S2C068)`"The company has hackers attack their algorithms."`;
   Kid`"Uh,uh..."`;
   `I was getting more and more lost.`;

});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C069)`"Just think of it as a decryption game contest."`;

});
goto(lbl_00000b3c);
let lbl_00000adb;
showTextbox();
text(() => {
   Kid`"Is Sara a programmer?"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C070)`"Yeah. But she says it's just a hobby."`;
   You(S2C071)`"But she's as good as a pro."`;

});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C072)`"Just the other day she got first place in some cracking contest..."`;
   Kid`"Cracking contest?"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C073)`"A contest to break codes. Just so you know, it's not illegal."`;
   You(S2C074)`"It was sponsored by some company with code technology. It was legal cracking to test the security of its technology..."`;
   You(S2C075)`"The company has hackers attack their algorithms."`;
   Kid`"Kind of like a decryption game contest?"`;

});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C076)`"I guess that's one way of putting it."`;

});
let lbl_00000b3c;
showTextbox();
text(() => {
   Kid`"Oh, so it's a game."`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C077)`"Just because you call it a game, I wouldn't take it lightly."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C078)`"There were engineers participating from all over the world."`;
   You(S2C079)`"Winning it means that you are one of the world's best hackers."`;

});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C080)`"You could even say THE best hacker."`;
   Kid`"THE BEST...?"`;
   Kid`"That's just way too incredible."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C081)`"I know."`;
   You(S2C082)`"When it comes to computers...she's a genius."`;
   Kid`"I see..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `It seemed that you truly couldn't tell who a person was by appearances.`;
   `Apart from being a little mischievous, she just seemed like a normal girl.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `SA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `But Sara just kept talking with Sora about things that I couldn't comprehend.`;
   `There was a gap between who she appeared to be and who she actually was.`;
   `I kept staring at Sara from the side, in a state of semi-awe.`;
   `.................`;
   `In the end, only Takeshi was completely surprised that Sora was AI.`;
   `You was an employee at LeMU so of course she knew.`;
   `Before leaving the room, Tsugumi hadn't seemed that surprised.`;
   `Sara, as was clear by her questions, had a solid grip on the situation.`;
   `And the whole situation we were in was so crazy... I didn't know WHAT to be surprised about.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
delay({ interval: 90 });
bgload({ name: `IMG06A`, transition: 26 });
playBGM({ num: 19, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`18:27`);
showTextbox();
text(() => {
   `Several hours passed.`;
   `It seemed the sun was getting ready to set.`;
   `But deep in the ocean, our sense of time was disappearing.`;
   `Checking my watch was the only way that I knew it was the evening.`;
   `Nothing changed in LeMU.`;
   `No one had come to pay us a visit.`;
   `But things hadn't gotten worse. Right now, there was no sign of flooding or impending collapse.`;
   `We had just been passing the time as we saw fit.`;
   `For now, we had all forgotten about not being able to escape.`;

});
bgload({ name: `BG21B1`, transition: 10 });
showTextbox();
text(() => {
   `I was in the rest area.`;
   `I sat on the bench and looked at the blooming flowers without really seeing them.`;
   `There was no one else...around.`;
   `We were going to meet again at 7:00. Until then we had free time.`;
   `I was thinking about Sora.`;
   `The revealing of what she really was.`;
   `Sora's real identity.`;
   `AI...artificial intelligence...a program...a virtual image.`;
   `Sora didn't really exist.`;
   `In other words, Sora wasn't a person.`;
   `But Sora clearly had a will of her own.`;
   `She could think and act for herself.`;
   `...I knew that much.`;
   `But with my limited knowledge, everything other than that was beyond me.`;
   `There were lots of things that I couldn't know.`;
   `I looked down.`;
   `The floor was covered with a layer of water.`;
   `The lights in the ceiling were reflected in the water.`;
   `It was like the cold light of the moon.`;
   `I poked my finger into the water.`;
   `Plop.`;
   `The water rippled and the surface shook.`;
   `The light in the water fragmented into disarray...finally returning to its original shapes.`;
   `I reached into the water trying to grab the light.`;
   `But...`;
   `I could only grab a little seawater... I couldn't touch the light.`;
   `I tried again and again, but I couldn't get my hand on the moon.`;

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
   `.................`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG21B1`, transition: 26 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: false });
playBGM({ num: 8, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Sora(S2C083)`"So where should I start explaining?"`;
   Kid`"I wish you'd start with the basic stuff."`;
   `Sora was sitting next to me.`;
   `At least that is how it appeared to me.`;
   `I had decided to seek out an explanation directly from Sora.`;
   `What exactly was Sora?`;
   `It might have been rude asking her outright like this, but...`;
   `But I thought that it would be ruder to continue along without really knowing.`;

});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C084)`"I see. So we were talking about RSD, right?"`;
   Kid`"Yeah."`;
   Kid`"It might be something that you really don't want to talk about..."`;

});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C085)`"Why would that be?"`;
   Kid`"Well, you're not a person, you're Sora...so asking about systems and stuff it might be kind of personal..."`;

});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Uh...I don't really know how to say it..."`;
   Kid`"I just thought that it might be like... someone was peeking inside you and kind of unpleasant..."`;
   `My broken explanation brought a soft smile to Sora's face.`;
   Sora(S2C086)`"You don't have to worry about that."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C087)`"What did you just say...I'm Sora. So I am what I am."`;
   Sora(S2C088)`"For example, by explaining about what I am...it is a way for you to better understand me."`;
   Kid`"........."`;
   `I squeezed my hand shut.`;
   `Of course, I wasn't holding anything.`;
   Sora(S2C089)`"Actually, I just explained all of this to Takeshi."`;
   Kid`"Huh? To Takeshi?"`;

});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C090)`"Yes."`;
   `Sora gently put her hand on her chest.`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C091)`"I am different from everyone else, but I want to be the same."`;
   Sora(S2C092)`"That...that is why I want everyone to know about me."`;

});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Saying that, Sora looked at me and slightly dropped her eyes.`;
   `I felt like pieces of the puzzle scattered on the floor of my mind were about to fall into place.`;
   `As if enticed by her grin, I became quiet.`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C093)`"Well, shall I start...with an explanation of RSD?"`;
   `I concentrated on what she was saying so as not to miss anything.`;
   `She placed both of her hands on her chest.`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C094)`"Kid, can you see me?"`;
   Kid`"Yes. I see you."`;
   Sora(S2C095)`"I am standing right next to you. You're sure?"`;
   Kid`"I'm positive."`;
   Sora(S2C096)`"But..."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Suddenly Sora faced me and reached out toward me.`;
   `And then...`;
   Kid`"Whoooaa!"`;
   `Sora's hands slipped without resistance into my chest.`;
   `Reflexively I tried to grab her arms. Only my hands met with nothing.`;
   `My hands were in front of my chest, but there was nothing there.`;

});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C097)`"Yes..."`;
   Sora(S2C098)`"So you are seeing me."`;
   Sora(S2C099)`"However, I am not right next to you."`;
   `Saying this, Sora pulled her hand back.`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C156)`"RSD stands for Retinal Scanning Display."`;
   Sora(T2C157)`"The display device is not actually a display."`;
   Sora(T2C158)`"Rather, a weak laser is aimed at the retina."`;
   Kid`"Retina? You mean my eye?"`;

});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C159)`"Yes."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C160)`"In the ceiling of each room and corridor are semiconductor laser output devices."`;
   Sora(S2C100)`"So the image is being directly reflected on your retina."`;
   Kid`"Image?"`;

});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C162)`"Yes. My image."`;
   Kid`"Directly on my retina..."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C163)`"Holographic screens typically allow for the objects behind them to be visible..."`;
   Sora(T2C164)`"This system uses the eyeball as a virtual screen and continuously sends an image synthesized with the background scenery."`;
   Kid`"Well, what about your voice?"`;
   Kid`"It sounds like your voice is coming from where your mouth appears."`;

});
showTextbox();
text(() => {
   Sora(S2C101)`"Have you ever heard 3D sound?"`;
   Kid`"3D sound?"`;

});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C169)`"Have you ever listened to music using headphones?"`;
   Kid`"Hmmm, probably. But I can't remember so I don't know for sure."`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C102)`"Ah, that's right. Sorry, about that."`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C103)`"To answer my own question, most people hear sound as if it is reverberating inside the rear center of their head."`;
   Kid`"Inside their head?"`;
   `I tried to visualize what she meant.`;
   `A melody playing in my mind...`;
   `I could get a vague sense of what she said...`;
   Kid`"Yeah...I think I kind of see what you mean."`;
   Kid`"I think I've probably heard something like that before."`;

});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C172)`"But the sound is not actually coming from inside your head."`;
   Kid`"I suppose not."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C173)`"But if you could apply this knowledge and adjust the volume from the left and the right to accurately simulate this reverberating sound..."`;
   Sora(T2C174)`"Then you could create the illusion that a sound was coming from any direction - above or below, left or right."`;
   Kid`"I see. Oh...so that would be the voice converters!"`;
   `I still had both of them in my ears. I removed them. They were about the size of my little finger.`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `In front of me, Sora's mouth moved soundlessly.`;
   `It was like I couldn't hear her voice.`;
   `But that wasn't all. Then her image started to get a little fuzzy.`;
   Kid`"Huh?"`;

});
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `When I replaced the voice converters, Sora returned to normal.`;

});
showTextbox();
text(() => {
   Sora(T2C175)`"The image's position is based on the location of the voice converters."`;
   Sora(S2C104)`"So wherever you stand and whichever direction you face..."`;
   Sora(S2C105)`"LeMMIH is constantly using sensors around the complex that monitor the position of the voice converters to the millimeter."`;

});
showTextbox();
text(() => {
   Sora(S2C106)`"So that when I am 60 feet behind you..."`;
   Sora(S2C107)`"My voice will sound as if I am exactly 60 feet behind you."`;
   Sora(S2C108)`"When I am to the right, it sounds to the right. When to the left, it sounds to the left."`;
   Sora(S2C109)`"When I am under you, it sounds..."`;
   Kid`"Under...when you are under...?"`;

});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C182)`"Um, well..."`;

});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C183)`"Anyway, that is how it works. Do you understand?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C110)`"Now try to face a little to the left."`;
   `I faced to the left as she said.`;
   `Sora stood and moved around to my right.`;

});
showTextbox();
text(() => {
   Sora(S2C111)`"Just a moment ago I said that LeMMIH is constantly monitoring your position and direction you are facing..."`;
   Sora(S2C112)`"At the same time, LeMMIH is also monitoring the position of your eyeballs."`;
   Sora(S2C113)`"So that even if you move, I still appear in the same place."`;
   Sora(T2C188)`"This means that LeMMIH scans the image on to your eye in this way."`;
   Kid`"So you can be made to suddenly disappear or reappear in another place?"`;

});
showTextbox();
text(() => {
   Sora(T2C189)`"Do you want to see it?"`;
   Kid`"...No...I think I'll pass."`;
   `I suddenly imagined Sora disappearing and fleeting around here and there.`;
   Kid`"Somehow...it's kind of like a ghost."`;

});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C207)`"Yes. I hear that a lot."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C208)`"Being in the same place and looking at the same thing, only some people can see it and some people can't."`;
   Sora(T2C209)`"I've never seen one, but if ghosts really do exist..."`;
   Sora(T2C210)`"I imagine they exist much the way that I do."`;
   Kid`"Hmmm... Now I get it..."`;
   Kid`"But there is something that bothers me."`;

});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C211)`"What is that?"`;
   Kid`"Sora, so you can't be in more than one place at a time?"`;
   Kid`"For example, you couldn't be in one room talking to me and another talking with Sara?"`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C212)`"Theoretically it is possible."`;
   Sora(T2C213)`"However, the way that I am designed, I can't do that."`;
   Kid`"Why not?"`;
   Sora(T2C214)`"I imagine it is to help maintain an image of reality for visitors."`;
   Sora(T2C215)`"So that there is only one 'Sora' in the world."`;
   Sora(T2C216)`"Without that kind of setting, visitors would get confused."`;
   Kid`"?"`;

});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C217)`"That and it was the policy of my designer."`;
   Sora(T2C218)`"The policy of my designer was to create me as character with an independent personality..."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C219)`"That reminds me, I have heard the same thing about the 'United Land' characters."`;
   Sora(T2C220)`"There is only one of each character in the park."`;
   Sora(T2C221)`"Like in a story...there can't be any one character in two places at the same time..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `The time for our gathering was getting near, so Sora and I headed to the Conference Room.`;
   `It seemed strange that Sora, who could teleport anywhere instantly was walking...`;
   `Maybe she was doing it to humor me.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"I was wondering about the laser retina scan..."`;
   Kid`"So if I were in a place that the laser couldn't reach, then I couldn't see you?"`;
   Sora(T2C222)`"Of course not. But..."`;
   Sora(T2C223)`"The scanning devices are located in every room of the complex and there are mirrors embedded in the walls, ceilings and floors to reflect the images."`;

});
showTextbox();
text(() => {
   Sora(T2C224)`"So almost no matter where you are, I can be displayed."`;
   Kid`"So there are no blind spots..."`;
   Sora(T2C225)`"That's the way it is designed."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C226)`"However, there is one major flaw."`;
   Kid`"Flaw?"`;

});
showTextbox();
text(() => {
   Sora(T2C227)`"I..."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C228)`"I am only 'seen' when someone looks at me."`;
   Kid`"What?"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C229)`"I mean, that I cease to exist when no one is looking at me."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C230)`"For example, if the five of you here all closed your eyes at once..."`;
   Sora(T2C231)`"At that moment, I would cease to exist."`;
   Kid`"........."`;

});
hideTextbox();
monoColorOverlay({ interval: 2, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `I casually held hand up in front of my eyes.`;
   `I covered my view forward and looked down near my feet.`;
   `There was no sign of Sora next to me. It was as if she had vanished, or never been there in the first place.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG25B3`, transition: 26 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Surprised, I removed my hand and Sora reappeared in the corridor.`;
   `The outline of Sora's sandals blurred dimly in the water.`;

});
let lbl_000010e0;
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C232)`"Someone has to 'see' me."`;
   Sora(T2C233)`"I have to be seen in order to exist."`;

});
showTextbox();
text(() => {
   Sora(T2C234)`"Vision..."`;
   Sora(T2C235)`"That someone's eye actually creates me."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C114)`"Kid..."`;
   Sora(S2C115)`"When you close your eyes, I disappear."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `Eventually we reached the Conference Room.`;
   `Sora's face was one big smile.`;
   `But somewhere in her smile seemed a hint of sadness.`;
   `At least...it appeared that way to me.`;

});
hideTextbox();
l_choice = 0;
jump(`S_2D`);
