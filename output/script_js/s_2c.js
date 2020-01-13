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
   marker; appendText; 
   Narr`Nearly an hour had passed since 
the power had gone back online.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We gathered in the third floor Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi, Tsugumi, Sora, You, Sara and I ? all 
six of us were sitting in chairs just letting 
time pass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The rescue team still hadn't come.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our situation didn't show any sign 
of changing.`;
   waitForClick; clearText; marker; sound(`S2C000`); appendText; 
   Takeshi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`S2C001`); appendText; 
   You`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`S2C002`); appendText; 
   Sara`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`S2C003`); appendText; 
   Tsugumi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's yawn spread from person to person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I desperately tried to keep from yawning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Sora had her head down and looked as if 
she were thinking about something....`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were bored silly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't realized that doing nothing could be 
so hard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Well, I might as well get some exercise.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking that I stood from the chair.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C004`); appendText; 
   Sara`"What's up?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara shot me the question slumped in the 
chair next to mine.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We've got all this time so I thought 
I'd go for a little walk."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C005`); appendText; 
   Sara`"Oh. In that case, can you bring me back 
something to drink?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why was this an 'in that case' thing?`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C006`); appendText; 
   Sara`"I'm thirsty...I think there was juice in 
the kiosk, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think so."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C007`); appendText; 
   Sara`"Okay. Thanks."`;
   waitForClick; 
});
choice(
   `No problem`
   `I don't think so. `
);
switch (l_choice) {
   case 0: goto(lbl_0000012c);
   case 1: goto(lbl_00000140);
}
let lbl_0000012c;
l_sara_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh well. So any kind of juice is okay?"`;
   waitForClick; clearText; marker; sound(`S2C008`); appendText; 
   Sara`"Sure. Anything is fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Great...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like the group hierarchy had sorted 
itself out.`;
   waitForClick; clearText; 
});
goto(lbl_000001e6);
let lbl_00000140;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I don't think so. Get it yourself."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C009`); appendText; 
   Sara`"You won't do me a favor?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nope."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C010`); appendText; 
   Sara`"Why not? You're no use."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's exactly why you shouldn't be asking 
favors of me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C011`); appendText; 
   Sara`"Listen. Kid, you've got some kind of memory 
problem so you probably don't know, but at 
times like this guys are supposed to 
say, 'Sure.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I don't think so. No matter how much 
memory I've lost. I know that much."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C012`); appendText; 
   Sara`"Do you want me to ask Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C013`); appendText; 
   Sara`"Or maybe Nakkyu."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C014`); appendText; 
   Sara`"Hey, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara started calling to Takeshi sitting on 
the other side of the table.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright. I got it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C015`); appendText; 
   Sara`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure that Takeshi and You would side 
with Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I had fallen into a trap.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You can't complain. No matter what I bring 
back, okay?"`;
   waitForClick; clearText; marker; sound(`S2C016`); appendText; 
   Sara`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Here we go again...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I left the Conference Room and headed for the 
kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a good idea of where it was from my 
wanderings around the complex the day before.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went through the rest area on the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something had been left on the bench.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was wrapped chicken sandwiches.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured these were probably sandwiches that 
Takeshi had made and taken to Tsugumi and Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I bet that during the blackout they had been 
forgotten.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Alright. I might as well take these along.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the sandwiches and put them into my 
pockets.`;
   waitForClick; clearText; 
});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At the kiosk, I started looking for drinks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was enough food and drinks for us to 
survive for days.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only food there was chicken sandwiches and 
the ingredients to make them, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least we didn't have to worry about 
food - meaning we were unfortunately fortunate.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took six cans of cola from the kiosk's 
freezer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Sara had asked, but I thought I'd take 
back enough for everyone.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Here we go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cradling cola in both arms, I started back.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"Here you go!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I came back, everyone was chatting loudly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cards were randomly placed on the table 
facing down. `;
   waitForClick; clearText; marker; appendText; 
   Narr`They might have been playing a game.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C017`); appendText; 
   Sara`"Welcome back."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I figured since I was there that I'd bring 
back enough for everyone."`;
   waitForClick; clearText; marker; sound(`S2C018`); appendText; 
   Sara`"Thank you, sir!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara took two of the two cans and handed 
one to You.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C019`); appendText; 
   Sara`"Here you go, Nakkyu."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `SA02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C020`); appendText; 
   You`"Hey, Kid. That was sure thoughtful 
of you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You took the cola from Sara and popped 
open the tab.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Like a pro, she held the fizz down so it 
wouldn't explode.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't go getting herself all drenched 
in soda.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So what were you all up to with the cards?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put the remaining four cans on the table.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C021`); appendText; 
   Sara`"Mental Guts."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's....that?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `SA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C022`); appendText; 
   Sara`"You don't know Mental Guts?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Never heard of it."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `SA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C023`); appendText; 
   Sara`"Oh, I'll bet it went with your memory. 
It's a super famous game."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmmph..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I realized that I couldn't remember even 
these kinds of things...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if I should have been more 
uneasy about my lost memory than I was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`First, I thought I'd have a cola.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, by the way, I also brought these."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered the sandwiches and holding the 
can in my right hand, plunged my hand into 
my left pocket.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C024`); appendText; 
   Takeshi`"Eh? What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This. This here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I removed a wrapped sandwich.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C025`); appendText; 
   Takeshi`"Huh? Where'd you get that? Did you make it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It was on a bench in the rest area. 
Didn't you leave it there, Takeshi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C026`); appendText; 
   Takeshi`"Oh, yeah. It's the one that I forgot to 
give to Sora. I left it there during the 
blackout hubbub."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I thought that somebody might be hungry."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C059`); appendText; 
   You`"Oh great!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C060`); appendText; 
   You`"You are so thoughtful!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You rushed over and violently mussed up my 
hair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh, that's right. I have another one.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Feeling good about myself, I put the can in 
my other hand and went to get the sandwich 
from my right pocket.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What in...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C027`); appendText; 
   You`"What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...It's gone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing in my right pocket.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C028`); appendText; 
   You`"Did you drop it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...no way..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't think that I could have dropped it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow, I felt there was something odd 
going on.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `KB11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C029`); appendText; 
   Takeshi`"Alright, then this is Sora's."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking, I saw Takeshi holding the sandwich 
out toward Sora.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2C030`); appendText; 
   Takeshi`"You didn't eat breakfast, right?"`;
   waitForClick; clearText; marker; sound(`T2C064`); appendText; 
   Sora`"Uh, no...I'm fine..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C031`); appendText; 
   Takeshi`"Don't be polite. I made this...I'm sure it 
tastes good."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C065`); appendText; 
   Sora`"Still..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C032`); appendText; 
   Takeshi`"Hey, I'm not kidding."`;
   waitForClick; clearText; marker; sound(`S2C033`); appendText; 
   Sara`"I'll vouch for him, they're pretty good."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Uh, me too..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I both raised our hands in a show of 
agreement?`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C034`); appendText; 
   Takeshi`"Sora? What? You can't eat my food?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C068`); appendText; 
   Sora`"That's not it..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C035`); appendText; 
   Takeshi`"Then what is it? Eat too much yesterday? 
Or are you on a diet?"`;
   waitForClick; clearText; marker; sound(`T2C069`); appendText; 
   Sora`"No, but...I..."`;
   waitForClick; clearText; marker; sound(`S2C036`); appendText; 
   Takeshi`"No. You have to eat or you'll get weak. Here! 
Take it!"`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He tossed a cola and chicken sandwich 
toward Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They traced a gentle arc through the air.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C070`); appendText; 
   Sora`"Ahh...!!!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora suddenly reached out her hands...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She reached them out, but...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora didn't catch them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No. She couldn't catch them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't avoid them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't that she was too slow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was there with her hands extended into 
space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sandwich had fallen at her feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cola had violently slammed into the wall 
behind her and exploded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The spewing cola didn't get Sora wet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The droplets looked like they flew through 
Sora's body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sandwich wrapper covered the silhouette of 
Sora's sandal...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as if the two had melded together.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C037`); appendText; 
   Takeshi`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi wasn't the only one surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I also...I was confused and without a clue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It could have been that it seemed odd because 
I didn't know from the start.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or maybe it seemed strange because 
I'd forgotten it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So all I could do was sit there with my mouth 
agape, my eyes staring at the spectacle.`;
   waitForClick; clearText; marker; sound(`T2C071`); appendText; 
   Sora`"That's why I said...I didn't need it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora made an embarrassed looking expression.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C038`); appendText; 
   Takeshi`"Wwwwhhhhhhhhaaaaaattttttt?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S2C039`); appendText; 
   Takeshi`"No, that's, what, I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked completely puzzled.`;
   waitForClick; clearText; marker; sound(`S2C040`); appendText; 
   Takeshi`"I meant to toss them as if I were handing 
them over...that's weird...your hand must've 
slipped..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C072`); appendText; 
   Sora`"Excuse me. Takeshi, there is nothing strange 
about it."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C041`); appendText; 
   Takeshi`"B-but! The cola blew up and...is your 
clothing alright?"`;
   waitForClick; clearText; marker; sound(`T2C073`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C042`); appendText; 
   Takeshi`"But you're...stepping on the sandwich...your 
foot...you've got no toes, Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C074`); appendText; 
   Sora`"Oh?.... My gosh! Sorry about that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 128, useAnim: true });
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And just like that, Sora's vanished toes 
reappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the place where the sandwich was supposed 
to be wavered unsteadily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...didn't have any idea what it all meant.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C075`); appendText; 
   Sora`"Uh, I guess, Takeshi...that you didn't know?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was shuffling embarrassedly.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C043`); appendText; 
   Takeshi`"Sora...what...in the world are you?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C076`); appendText; 
   You`"*Sigh*."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason You gave a huge sigh right 
next to Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
stopBGM();
fgload({ id: 1, name: `YU09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C077`); appendText; 
   You`"AH, HA, HA, HA, HA"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She burst out laughing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C078`); appendText; 
   You`"I just had to watch because it was so funny, 
Takeshi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C079`); appendText; 
   You`"You really don't listen to anything..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C044`); appendText; 
   Takeshi`"Wh-what are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was still confused.`;
   waitForClick; clearText; marker; sound(`T2C080`); appendText; 
   You`"The explanation at the park entrance."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C045`); appendText; 
   Takeshi`"S-so? So what about it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking around, only Takeshi and I were 
surprised.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A strange expression floated on to Sara's 
face, but it seemed like she knew what was 
going on.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi's face was blank.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apart from Takeshi, it seemed like nobody 
felt this was anything to be that surprised 
about.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C046`); appendText; 
   Tsugumi`"Geez...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stood up as if irritated.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C047`); appendText; 
   Tsugumi`"I can't watch anymore of this...it's 
ridiculous."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After spitting out those words, she left the 
Conference Room.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Maybe we were used to it, but we just watched 
her go. No one tried to stop her.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C048`); appendText; 
   You`"We'll just leave Tsugumi be..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C087`); appendText; 
   You`"Sora, sorry to bother you, but could you 
introduce yourself again?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C088`); appendText; 
   Sora`"Yes. Of course."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The punctured can had stopped fizzing.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora took a step forward toward us, carefully 
as if avoiding the sandwich, and 
straightened up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a slight bow, she spoke.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C089`); appendText; 
   Sora`"I am Sora Akanegasaki..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C090`); appendText; 
   Sora`"My official name is 'LM - RSDS - 4913A'."`;
   waitForClick; clearText; marker; sound(`T2C091`); appendText; 
   Sora`"I am an artificial intelligence, or AI, 
program in charge of guiding visitors around 
LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C092`); appendText; 
   Sora`"I have been programmed as one part 
of the LeMMIH system."`;
   waitForClick; clearText; marker; sound(`T2C093`); appendText; 
   Sora`"If you call me from any nearby terminal, 
I will soon appear anywhere within LeMU."`;
   waitForClick; clearText; marker; sound(`T2C094`); appendText; 
   Sora`"My image reaches you through a network 
supporting this RSD system throughout the 
complex. I think that there are few places in 
the world boasting this kind of technology."`;
   waitForClick; clearText; marker; sound(`S2C049`); appendText; 
   Takeshi`"...??"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C050`); appendText; 
   Sara`"So it was RSD..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C051`); appendText; 
   Sara`"But I've never seen one this amazing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C096`); appendText; 
   You`"It's one of LeMU's big attractions."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C052`); appendText; 
   Sara`"So that's why Sora disappeared during the 
blackout?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C098`); appendText; 
   Sora`"Yes. I'm sorry to have caused you undue 
concern..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had finally lost any sense of what was going 
on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked flustered as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The conversation had taken off and left me and 
Takeshi behind.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's RSD?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C100`); appendText; 
   You`"Simply put, it is an image display system 
that uses a semiconductor to shine a laser 
directly on your retina."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I had no clue what she was talking about...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I thought it might have been because 
I had no memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It also seemed that any more questions 
would stall the conversation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I decided to take an 'I don't get it, 
but that's okay' approach.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C053`); appendText; 
   Sara`"And it is supporting such an advanced 
personality."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The surprising thing was Sara seemed to be 
following the conversation the best.`;
   waitForClick; clearText; marker; sound(`T2C103`); appendText; 
   Sora`"LeMU is fairly perfectionist when it comes to 
virtual space technologies. My existence is 
one manifestation of that."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C054`); appendText; 
   Sara`"Doesn't that require a big system?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C055`); appendText; 
   Sora`"Yes, but it is much smaller that it would 
have been 10 years ago."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C056`); appendText; 
   Sara`"How big? Where is it? I'd like to see it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C107`); appendText; 
   Sora`"Uh...I'm sorry, but I'm not allowed to say. 
It is a secret."`;
   waitForClick; clearText; marker; sound(`S2C057`); appendText; 
   Sara`"You weren't given the details?"`;
   waitForClick; clearText; marker; sound(`T2C109`); appendText; 
   Sora`"That's correct."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C058`); appendText; 
   Sara`"Hmmmm...."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C059`); appendText; 
   Sara`"Well, this is a bit of a different question, 
but does Sora's personality change based on 
her memories...?"`;
   waitForSound; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The conversation was getting more and more 
technical.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara kept badgering Sora with technical 
questions. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Things about samplings and algorithms and 
structure this and encode that...jargon was 
flying around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head started to hurt.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey...You?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I approached You and tugged on her sleeve.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C060`); appendText; 
   You`"Hmmm?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This conversation is crazy complex...what is 
with Sara anyway?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C061`); appendText; 
   You`"She is...a computer ninja of sorts."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Stop with the stupid jokes."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You puffed out her cheeks as if pouting. It 
didn't seem she was in the mood for a 
comeback.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C062`); appendText; 
   You`"Mayo? She's a hacker."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hacker meaning...`;
   waitForClick; 
});
choice(
   `What's a hacker?`
   `I know what a hacker is`
);
switch (l_choice) {
   case 0: goto(lbl_00000a5f);
   case 1: goto(lbl_00000adb);
}
let lbl_00000a5f;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hacker?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C063`); appendText; 
   You`"Yeah. How should I explain this...I guess 
you could say a computer expert of sorts."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C064`); appendText; 
   You`"Anyway, she knows everything about computers. 
And she kicks butt when it comes to 
programming, too."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C065`); appendText; 
   You`"She writes programs for kicks. Just the 
other day she got first place in some 
cracking contest..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Cracking contest?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C066`); appendText; 
   You`"A contest to break codes. Just so you know, 
it's not illegal."`;
   waitForClick; clearText; marker; sound(`S2C067`); appendText; 
   You`"It was sponsored by some company with code 
technology. It was legal cracking to test the 
security of its technology..."`;
   waitForClick; clearText; marker; sound(`S2C068`); appendText; 
   You`"The company has hackers attack their 
algorithms."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh,uh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was getting more and more lost.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C069`); appendText; 
   You`"Just think of it as a decryption game 
contest."`;
   waitForClick; clearText; 
});
goto(lbl_00000b3c);
let lbl_00000adb;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Is Sara a programmer?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C070`); appendText; 
   You`"Yeah. But she says it's just a hobby."`;
   waitForClick; clearText; marker; sound(`S2C071`); appendText; 
   You`"But she's as good as a pro."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C072`); appendText; 
   You`"Just the other day she got first place in 
some cracking contest..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Cracking contest?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C073`); appendText; 
   You`"A contest to break codes. Just so you know, 
it's not illegal."`;
   waitForClick; clearText; marker; sound(`S2C074`); appendText; 
   You`"It was sponsored by some company with code 
technology. It was legal cracking to test the 
security of its technology..."`;
   waitForClick; clearText; marker; sound(`S2C075`); appendText; 
   You`"The company has hackers attack their 
algorithms."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Kind of like a decryption game contest?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C076`); appendText; 
   You`"I guess that's one way of putting it."`;
   waitForClick; clearText; 
});
let lbl_00000b3c;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh, so it's a game."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C077`); appendText; 
   You`"Just because you call it a game, 
I wouldn't take it lightly."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C078`); appendText; 
   You`"There were engineers participating from all 
over the world."`;
   waitForClick; clearText; marker; sound(`S2C079`); appendText; 
   You`"Winning it means that you are one of the 
world's best hackers."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C080`); appendText; 
   You`"You could even say THE best hacker."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"THE BEST...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's just way too incredible."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C081`); appendText; 
   You`"I know."`;
   waitForClick; clearText; marker; sound(`S2C082`); appendText; 
   You`"When it comes to computers...she's a genius."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It seemed that you truly couldn't tell who a 
person was by appearances.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apart from being a little mischievous, she 
just seemed like a normal girl.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `SA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But Sara just kept talking with Sora about 
things that I couldn't comprehend.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a gap between who she appeared to 
be and who she actually was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept staring at Sara from the side, in a 
state of semi-awe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.................`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, only Takeshi was completely 
surprised that Sora was AI.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was an employee at LeMU 
so of course she knew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before leaving the room, Tsugumi hadn't seemed 
that surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara, as was clear by her questions, had a 
solid grip on the situation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the whole situation we were in was so 
crazy... I didn't know WHAT to be surprised 
about.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Several hours passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed the sun was getting ready to set.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But deep in the ocean, our sense of time was 
disappearing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Checking my watch was the only way that 
I knew it was the evening.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nothing changed in LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one had come to pay us a visit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But things hadn't gotten worse. Right now, 
there was no sign of flooding or impending 
collapse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had just been passing the time as we saw 
fit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For now, we had all forgotten about not 
being able to escape.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was in the rest area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sat on the bench and looked at the 
blooming flowers without really seeing them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no one else...around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were going to meet again at 7:00. Until 
then we had free time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was thinking about Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The revealing of what she really was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's real identity.`;
   waitForClick; clearText; marker; appendText; 
   Narr`AI...artificial intelligence...a program...a 
virtual image.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora didn't really exist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In other words, Sora wasn't a person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora clearly had a will of her own.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She could think and act for herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I knew that much.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But with my limited knowledge, everything 
other than that was beyond me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were lots of things that I couldn't know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The floor was covered with a layer of water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights in the ceiling were reflected 
in the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like the cold light of the moon.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I poked my finger into the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Plop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water rippled and the surface shook.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light in the water fragmented into 
disarray...finally returning to its original 
shapes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached into the water trying to grab 
the light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could only grab a little seawater... 
I couldn't touch the light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried again and again, but I couldn't get my 
hand on the moon.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`.................`;
   waitForClick; clearText; 
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
   marker; sound(`S2C083`); appendText; 
   Sora`"So where should I start explaining?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wish you'd start with the basic stuff."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was sitting next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least that is how it appeared to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had decided to seek out an explanation 
directly from Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What exactly was Sora?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It might have been rude asking her outright 
like this, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I thought that it would be ruder to 
continue along without really knowing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C084`); appendText; 
   Sora`"I see. So we were talking about RSD, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It might be something that you 
really don't want to talk about..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C085`); appendText; 
   Sora`"Why would that be?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, you're not a person, you're Sora...so 
asking about systems and stuff it might be 
kind of personal..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Uh...I don't really know how to say it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I just thought that it might be like... 
someone was peeking inside you and kind of 
unpleasant..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My broken explanation brought a soft smile to 
Sora's face.`;
   waitForClick; clearText; marker; sound(`S2C086`); appendText; 
   Sora`"You don't have to worry about that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C087`); appendText; 
   Sora`"What did you just say...I'm Sora. So I am 
what I am."`;
   waitForClick; clearText; marker; sound(`S2C088`); appendText; 
   Sora`"For example, by explaining about what 
I am...it is a way for you to better 
understand me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I squeezed my hand shut.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, I wasn't holding anything.`;
   waitForClick; clearText; marker; sound(`S2C089`); appendText; 
   Sora`"Actually, I just explained all of this to 
Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? To Takeshi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C090`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora gently put her hand on her chest.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C091`); appendText; 
   Sora`"I am different from everyone else, 
but I want to be the same."`;
   waitForClick; clearText; marker; sound(`S2C092`); appendText; 
   Sora`"That...that is why I want everyone to know 
about me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, Sora looked at me and slightly 
dropped her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like pieces of the puzzle scattered on 
the floor of my mind were about to fall into 
place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if enticed by her grin, I became quiet.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C093`); appendText; 
   Sora`"Well, shall I start...with an explanation 
of RSD?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I concentrated on what she was saying so as 
not to miss anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She placed both of her hands on her chest.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C094`); appendText; 
   Sora`"Kid, can you see me?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yes. I see you."`;
   waitForClick; clearText; marker; sound(`S2C095`); appendText; 
   Sora`"I am standing right next to you. You're sure?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm positive."`;
   waitForClick; clearText; marker; sound(`S2C096`); appendText; 
   Sora`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly Sora faced me and reached out toward 
me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Whoooaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's hands slipped without resistance into 
my chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Reflexively I tried to grab her arms. Only my 
hands met with nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My hands were in front of my chest, but there 
was nothing there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C097`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`S2C098`); appendText; 
   Sora`"So you are seeing me."`;
   waitForClick; clearText; marker; sound(`S2C099`); appendText; 
   Sora`"However, I am not right next to you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying this, Sora pulled her hand back.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C156`); appendText; 
   Sora`"RSD stands for Retinal Scanning Display."`;
   waitForClick; clearText; marker; sound(`T2C157`); appendText; 
   Sora`"The display device is not actually a display."`;
   waitForClick; clearText; marker; sound(`T2C158`); appendText; 
   Sora`"Rather, a weak laser is aimed at the retina."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Retina? You mean my eye?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C159`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C160`); appendText; 
   Sora`"In the ceiling of each room and corridor are 
semiconductor laser output devices."`;
   waitForClick; clearText; marker; sound(`S2C100`); appendText; 
   Sora`"So the image is being directly reflected on 
your retina."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Image?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C162`); appendText; 
   Sora`"Yes. My image."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Directly on my retina..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C163`); appendText; 
   Sora`"Holographic screens typically allow for the 
objects behind them to be visible..."`;
   waitForClick; clearText; marker; sound(`T2C164`); appendText; 
   Sora`"This system uses the eyeball as a virtual 
screen and continuously sends an image 
synthesized with the background scenery."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, what about your voice?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It sounds like your voice is coming from 
where your mouth appears."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2C101`); appendText; 
   Sora`"Have you ever heard 3D sound?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"3D sound?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C169`); appendText; 
   Sora`"Have you ever listened to music using 
headphones?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm, probably. But I can't remember so 
I don't know for sure."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C102`); appendText; 
   Sora`"Ah, that's right. Sorry, about that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C103`); appendText; 
   Sora`"To answer my own question, most people hear 
sound as if it is reverberating inside the 
rear center of their head."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Inside their head?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to visualize what she meant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A melody playing in my mind...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could get a vague sense of what she said...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah...I think I kind of see what you mean."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think I've probably heard something like 
that before."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C172`); appendText; 
   Sora`"But the sound is not actually 
coming from inside your head."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I suppose not."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C173`); appendText; 
   Sora`"But if you could apply this knowledge and 
adjust the volume from the left and the right 
to accurately simulate this reverberating 
sound..."`;
   waitForClick; clearText; marker; sound(`T2C174`); appendText; 
   Sora`"Then you could create the illusion that a 
sound was coming from any direction - above 
or below, left or right."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see. Oh...so that would be the voice 
converters!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still had both of them in my ears. I removed 
them. They were about the size of my little 
finger.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In front of me, Sora's mouth moved soundlessly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like I couldn't hear her voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that wasn't all. Then her image started 
to get a little fuzzy.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I replaced the voice converters, Sora 
returned to normal.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C175`); appendText; 
   Sora`"The image's position is based on the 
location of the voice converters."`;
   waitForClick; clearText; marker; sound(`S2C104`); appendText; 
   Sora`"So wherever you stand and whichever 
direction you face..."`;
   waitForClick; clearText; marker; sound(`S2C105`); appendText; 
   Sora`"LeMMIH is constantly using sensors around 
the complex that monitor the position of 
the voice converters to the millimeter."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2C106`); appendText; 
   Sora`"So that when I am 60 feet behind you..."`;
   waitForClick; clearText; marker; sound(`S2C107`); appendText; 
   Sora`"My voice will sound as if I am exactly 60 
feet behind you."`;
   waitForClick; clearText; marker; sound(`S2C108`); appendText; 
   Sora`"When I am to the right, it sounds to the 
right. When to the left, it sounds to the 
left."`;
   waitForClick; clearText; marker; sound(`S2C109`); appendText; 
   Sora`"When I am under you, it sounds..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Under...when you are under...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C182`); appendText; 
   Sora`"Um, well..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C183`); appendText; 
   Sora`"Anyway, that is how it works. Do you 
understand?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C110`); appendText; 
   Sora`"Now try to face a little to the left."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I faced to the left as she said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora stood and moved around to my right.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2C111`); appendText; 
   Sora`"Just a moment ago I said that LeMMIH is 
constantly monitoring your position and 
direction you are facing..."`;
   waitForClick; clearText; marker; sound(`S2C112`); appendText; 
   Sora`"At the same time, LeMMIH is also 
monitoring the position of your eyeballs."`;
   waitForClick; clearText; marker; sound(`S2C113`); appendText; 
   Sora`"So that even if you move, I still appear 
in the same place."`;
   waitForClick; clearText; marker; sound(`T2C188`); appendText; 
   Sora`"This means that LeMMIH scans the image on 
to your eye in this way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you can be made to suddenly disappear or 
reappear in another place?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C189`); appendText; 
   Sora`"Do you want to see it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...No...I think I'll pass."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suddenly imagined Sora disappearing and 
fleeting around here and there.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Somehow...it's kind of like a ghost."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C207`); appendText; 
   Sora`"Yes. I hear that a lot."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C208`); appendText; 
   Sora`"Being in the same place and looking at the 
same thing, only some people can see it and 
some people can't."`;
   waitForClick; clearText; marker; sound(`T2C209`); appendText; 
   Sora`"I've never seen one, but if ghosts really do 
exist..."`;
   waitForClick; clearText; marker; sound(`T2C210`); appendText; 
   Sora`"I imagine they exist much the way that I do."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm... Now I get it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But there is something that bothers me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C211`); appendText; 
   Sora`"What is that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora, so you can't be in more than one place 
at a time?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"For example, you couldn't be in one room 
talking to me and another talking with Sara?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C212`); appendText; 
   Sora`"Theoretically it is possible."`;
   waitForClick; clearText; marker; sound(`T2C213`); appendText; 
   Sora`"However, the way that I am designed, I can't 
do that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why not?"`;
   waitForClick; clearText; marker; sound(`T2C214`); appendText; 
   Sora`"I imagine it is to help maintain an image of 
reality for visitors."`;
   waitForClick; clearText; marker; sound(`T2C215`); appendText; 
   Sora`"So that there is only one 'Sora' in the 
world."`;
   waitForClick; clearText; marker; sound(`T2C216`); appendText; 
   Sora`"Without that kind of setting, visitors would 
get confused."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C217`); appendText; 
   Sora`"That and it was the policy of my designer."`;
   waitForClick; clearText; marker; sound(`T2C218`); appendText; 
   Sora`"The policy of my designer was to create me as 
character with an independent personality..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C219`); appendText; 
   Sora`"That reminds me, I have heard the same 
thing about the 'United Land' characters."`;
   waitForClick; clearText; marker; sound(`T2C220`); appendText; 
   Sora`"There is only one of each character in the 
park."`;
   waitForClick; clearText; marker; sound(`T2C221`); appendText; 
   Sora`"Like in a story...there can't be any one 
character in two places at the same time..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The time for our gathering was getting near, 
so Sora and I headed to the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed strange that Sora, who could 
teleport anywhere instantly was walking...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she was doing it to humor me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I was wondering about the laser retina 
scan..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So if I were in a place that the laser 
couldn't reach, then I couldn't see you?"`;
   waitForClick; clearText; marker; sound(`T2C222`); appendText; 
   Sora`"Of course not. But..."`;
   waitForClick; clearText; marker; sound(`T2C223`); appendText; 
   Sora`"The scanning devices are located in every 
room of the complex and there are mirrors 
embedded in the walls, ceilings and floors 
to reflect the images."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C224`); appendText; 
   Sora`"So almost no matter where you are, I can be 
displayed."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So there are no blind spots..."`;
   waitForClick; clearText; marker; sound(`T2C225`); appendText; 
   Sora`"That's the way it is designed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C226`); appendText; 
   Sora`"However, there is one major flaw."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Flaw?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C227`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C228`); appendText; 
   Sora`"I am only 'seen' when someone looks at me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C229`); appendText; 
   Sora`"I mean, that I cease to exist 
when no one is looking at me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C230`); appendText; 
   Sora`"For example, if the five of you 
here all closed your eyes at once..."`;
   waitForClick; clearText; marker; sound(`T2C231`); appendText; 
   Sora`"At that moment, I would cease to exist."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 2, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I casually held hand up in front of my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I covered my view forward and looked down 
near my feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign of Sora next to me. 
It was as if she had vanished, or never 
been there in the first place.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Surprised, I removed my hand and Sora 
reappeared in the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The outline of Sora's sandals blurred dimly 
in the water.`;
   waitForClick; clearText; 
});
let lbl_000010e0;
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C232`); appendText; 
   Sora`"Someone has to 'see' me."`;
   waitForClick; clearText; marker; sound(`T2C233`); appendText; 
   Sora`"I have to be seen in order to exist."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C234`); appendText; 
   Sora`"Vision..."`;
   waitForClick; clearText; marker; sound(`T2C235`); appendText; 
   Sora`"That someone's eye actually creates me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C114`); appendText; 
   Sora`"Kid..."`;
   waitForClick; clearText; marker; sound(`S2C115`); appendText; 
   Sora`"When you close your eyes, I disappear."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Eventually we reached the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's face was one big smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somewhere in her smile seemed a hint of 
sadness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least...it appeared that way to me.`;
   waitForClick; clearText; 
});
hideTextbox();
l_choice = 0;
jump(`S_2D`);
