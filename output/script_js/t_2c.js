varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 2`);
varop(`(28 0a a4) b2 := (00) 2`);
setDialogBoxColor(GREEN);
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
setSceneTitle({ index: 13 });
clock(`11:41`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Nearly an hour had passed since 
the power had gone back online.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We gathered in the Conference Room on the 
third floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi, Sora, You, Coco and I were sitting in 
chairs just letting time pass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The rescue team still hadn't come.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our situation didn't show any sign of changing.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C000`); appendText; 
   //You
   You`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C001`); appendText; 
   //Coco
   Coco`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C002`); appendText; 
   //Tsugumi
   Tsugumi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My yawn spread from one person to the next.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Sora had her head down and looked as if 
she were thinking about something....`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C003`); appendText; 
   //Coco
   Coco`"Oh, that's right!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco suddenly started talking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C004`); appendText; 
   //Coco
   Coco`"When I was in the changing room a little bit 
ago I found this..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she spoke, Coco plucked something out of 
her pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a set of cards.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C005`); appendText; 
   //Coco
   Coco`"Hey, dontcha wanna play cards?"`;
   waitForClick; clearText; marker; sound(`T2C006`); appendText; 
   //Coco
   Coco`"I mean we've got nothing to do..."`;
   waitForClick; clearText; marker; sound(`T2C007`); appendText; 
   //You
   You`"Cards, hmmm..."`;
   waitForClick; clearText; marker; sound(`T2C008`); appendText; 
   //You
   You`"So? What do you wanna play?"`;
   waitForClick; clearText; marker; sound(`T2C009`); appendText; 
   //Coco
   Coco`"Um...um...let's see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C010`); appendText; 
   //Coco
   Coco`"Oh! How about Super Memory?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C011`); appendText; 
   //You
   You`"Super..."`;
   waitForClick; clearText; marker; sound(`T2C012`); appendText; 
   //Tsugumi
   Tsugumi`"...Memory?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `YU17ADS`, name2: `CO06ADS`, name3: `TU13ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C013`); appendText; 
   //Coco
   Coco`"What? You don't know Super Memory?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Tsugumi looked at each other.`;
   waitForClick; clearText; marker; sound(`T2C014`); appendText; 
   //Coco
   Coco`"You're kidding, right? You HAVE to know this 
game!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C015`); appendText; 
   //Coco
   Coco`"Right? Takepyon, you know it right?"`;
   waitForClick; 
});
choice(
   `Of course I know it`
   `I've never heard of it`
);
switch (choice) {
   case 0: goto(lbl_0000018c);
   case 1: goto(lbl_0000026b);
}
let lbl_0000018c;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Of course I know it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I answered full of confidence.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You want me to help you set up the cards?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C016`); appendText; 
   //Coco
   Coco`"YES PLEASE!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU06ADS`, name2: `TU06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C017`); appendText; 
   //Tsugumi
   Tsugumi`"W-wait a minute..."`;
   waitForClick; clearText; marker; sound(`T2C018`); appendText; 
   //You
   You`"What in the world are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What, are you guys bad at Super Memory and 
scared to play?"`;
   waitForClick; clearText; marker; sound(`T2C019`); appendText; 
   //Tsugumi
   Tsugumi`"No..."`;
   waitForClick; clearText; marker; sound(`T2C020`); appendText; 
   //You
   You`"I don't know if I am good at it or bad at it."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C021`); appendText; 
   //Coco
   Coco`"Huh? You mean you really..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You guys really don't know the game?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADS`, name2: `TU07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C022`); appendText; 
   //You
   You`"Nope."`;
   waitForClick; clearText; marker; sound(`T2C023`); appendText; 
   //Tsugumi
   Tsugumi`"Me neither."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're kidding? I don't believe this!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was stunned.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C024`); appendText; 
   //You
   You`"Well, we don't know what we don't know."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that You clammed up.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C025`); appendText; 
   //Coco
   Coco`"It's a pretty famous game...at least I 
thought it was..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C026`); appendText; 
   //Coco
   Coco`"...But, it's no problem."`;
   waitForClick; clearText; marker; sound(`T2C027`); appendText; 
   //Coco
   Coco`"The rules are simple. I'll teach you!"`;
   waitForClick; clearText; 
});
goto(lbl_000002dd);
let lbl_0000026b;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"I've never heard of it." `;
   waitForClick; clearText; marker; appendText; 
   Narr`I answered without hesitating.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADS`, name2: `TU07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C028`); appendText; 
   //You
   You`"Me neither."`;
   waitForClick; clearText; marker; sound(`T2C029`); appendText; 
   //Tsugumi
   Tsugumi`"Me neither..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C030`); appendText; 
   //Coco
   Coco`"What! Are you serious...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A glance at Sora showed she was shaking her 
head.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C031`); appendText; 
   //Coco
   Coco`"You all really don't know?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco sounded pouty.`;
   waitForClick; clearText; marker; sound(`T2C032`); appendText; 
   //Coco
   Coco`"Geez. Oh well..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't see any reason to give up.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, if we don't know, then we'll just have 
to learn..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, Coco, will you explain the game to us?"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C033`); appendText; 
   //Coco
   Coco`"Okay. Everybody listen, alright?"`;
   waitForClick; clearText; 
});
let lbl_000002dd;
hideTextbox();
playBGM({ num: 9, volume: 100 });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco started shuffling the cards brilliantly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C034`); appendText; 
   //Coco
   Coco`"First, you have to shuffle the cards really 
good..."`;
   waitForClick; clearText; marker; sound(`T2C035`); appendText; 
   //Coco
   Coco`"...Then you spread the cards on the table 
like this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spread them out randomly so that they 
didn't overlap.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C036`); appendText; 
   //Coco
   Coco`"Then we do rock, paper, scissors and you 
turn over cards starting with the loser."`;
   waitForClick; clearText; marker; sound(`T2C037`); appendText; 
   //Coco
   Coco`"Like this...you turn over one card and then 
one more..."`;
   waitForClick; clearText; marker; sound(`T2C038`); appendText; 
   //Coco
   Coco`"And if the two cards are the same number 
then the person that turned them over gets 
them."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C039`); appendText; 
   //Coco
   Coco`"So? It's easy, huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, everybody got it? Let's play."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU13ADM`, name2: `TU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`T2C040`); appendText; 
   //Tsugumi
   Tsugumi`"That's called Concentration."`;
   waitForClick; clearText; marker; sound(`T2C041`); appendText; 
   //You
   You`"Mental Guts..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `TU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C042`); appendText; 
   //Tsugumi
   Tsugumi`"People usually call the game Concentration, 
don't they...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, maybe in some backwater places they 
might call it that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C043`); appendText; 
   //You
   You`"That's not what I mean."`;
   waitForClick; clearText; marker; sound(`T2C044`); appendText; 
   //You
   You`"That game is clearly Mental Guts. It's 
obvious!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What're you talking about...?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `YU04ADS`, name2: `CO04ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C045`); appendText; 
   //Coco
   Coco`"No, it's called Super Memory."`;
   waitForClick; clearText; marker; sound(`T2C046`); appendText; 
   //Tsugumi
   Tsugumi`"Concentration..."`;
   waitForClick; clearText; marker; sound(`T2C047`); appendText; 
   //You
   You`"It's called Mental Guts!"`;
   waitForClick; clearText; marker; sound(`T2C048`); appendText; 
   //Coco
   Coco`"I said that it's Super Memory!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Geez! You guys are fussy!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. I know what we'll do! Everybody calm 
down!"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU06ADS`, name2: `CO06ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"We'll compromise and..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Let's say we call it Concemory...?"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU07ADS`, name2: `CO07ADS`, name3: `TU07ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C049`); appendText; 
   //Coco
   Coco`"Conce..."`;
   waitForClick; clearText; marker; sound(`T2C050`); appendText; 
   //Tsugumi
   Tsugumi`"...emory?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And just then - `;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `KA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C051`); appendText; 
   //Kid
   Kid`"Here you go!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid came into the Conference Room 
carrying six cans of cola cradled against his 
chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The card game stopped.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU15ADS`, name2: `KA01ADS`, name3: `CO12ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C052`); appendText; 
   //Coco
   Coco`"Hiya Kiddo!"`;
   waitForClick; clearText; marker; sound(`T2C053`); appendText; 
   //You
   You`"Hey, Kid. That was sure thoughtful of you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You took the cola from the Kid and popped 
open the tab.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She held down the carbonation to keep it from 
erupting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a pro, she kept from being showered with 
sticky cola.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C054`); appendText; 
   //Kid
   Kid`"I got these on the way..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He noisily set the five other cans on the 
table.`;
   waitForClick; clearText; marker; sound(`T2C055`); appendText; 
   //Kid
   Kid`"...I brought these, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kid turned around.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C056`); appendText; 
   //Kid
   Kid`"These."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kid was pointing to the hood behind his neck.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stuck my hand in the hood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were two chicken sandwiches inside it.`;
   waitForClick; clearText; 
});
goto(lbl_0000053a).if(var_e9 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey? What are these? Did you make em'?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C057`); appendText; 
   //Kid
   Kid`"You gave them to me when I gave you the 
flashlight."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, that's right...the leftovers."`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were the sandwiches that I hadn't given 
to Tsugumi and Sora during the blackout.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
goto(lbl_0000053f);
let lbl_0000053a;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They were the sandwiches that I had left on 
the bench during the blackout.`;
   waitForClick; clearText; 
});
let lbl_0000053f;
showTextbox();
text(() => {
   marker; sound(`T2C058`); appendText; 
   //Kid
   Kid`"I thought that somebody might be hungry."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C059`); appendText; 
   //You
   You`"Oh great!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C060`); appendText; 
   //You
   You`"You are so thoughtful!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You went over to the Kid and mussed up his 
hair affectionately.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He stood there stiff as a rod, not resisting 
at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured You's hands were probably pretty 
sticky from the cola...`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C061`); appendText; 
   //Tsugumi
   Tsugumi`"....Ahem."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi raised her hand.`;
   waitForClick; clearText; marker; sound(`T2C062`); appendText; 
   //Tsugumi
   Tsugumi`"If no one else wants one...I'll take one of 
them."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi, unlike her normal self, spoke up.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So all that repair work made you hungry?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, she didn't see any need to answer 
my question.`;
   waitForClick; clearText; 
});
goto(lbl_00000616).if(var_e9 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Besides, I realized she might not have eaten 
anything since breakfast.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. This one's for Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave Tsugumi one of the sandwiches that I 
took from the Kid's hood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took it without saying anything.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then I held out the remaining one to Sora.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The other one is for Sora. You haven't 
eaten, have you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C063`); appendText; 
   //Sora
   Sora`"Uh, no...I'm fine..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't be polite. I know it tastes good."`;
   waitForClick; clearText; 
});
goto(lbl_0000063f);
let lbl_00000616;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright. This one's for Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave Tsugumi one of the sandwiches that I 
took from the Kid's hood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took it without saying anything.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then I held out the remaining one to Sora.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The other one is Sora's. You didn't have 
breakfast, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C064`); appendText; 
   //Sora
   Sora`"Uh, no thanks. I'm fine..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't be polite, I made it. I know it tastes 
good."`;
   waitForClick; clearText; 
});
let lbl_0000063f;
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C065`); appendText; 
   //Sora
   Sora`"Still..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, I'm not kidding."`;
   waitForClick; clearText; marker; sound(`T2C066`); appendText; 
   //Coco
   Coco`"I'll vouch for its deliciousness!"`;
   waitForClick; clearText; marker; sound(`T2C067`); appendText; 
   //Kid
   Kid`"Uh, me too..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and the Kid raised their hands.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Sora? What? You can't eat my food?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C068`); appendText; 
   //Sora
   Sora`"That's not it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Then what is it? Eat too much yesterday? Or 
are you on a diet?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C069`); appendText; 
   //Sora
   Sora`"No, but...I..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No. You have to eat or you'll get weak. 
Here! Take it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tossed a cola and chicken sandwich toward 
Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They traced a gentle arc through the air.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C070`); appendText; 
   //Sora
   Sora`"Ahh...!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora suddenly reached out her hands...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She reached them out, but...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fwoosh.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gushaaaaaw!!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
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
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh...?"`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C071`); appendText; 
   //Sora
   Sora`"That's why I said...I didn't need it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora made an embarrassed looking expression.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wwwwhhhhhhhhaaaaaattttttt?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, that's, what, I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason I was completely stunned.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I meant to toss them as if I were handing 
them over...that's weird...your hand must've 
slipped..."`;
   waitForClick; clearText; marker; sound(`T2C072`); appendText; 
   //Sora
   Sora`"Excuse me. Takeshi, there is nothing strange 
about it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"B-but! The cola blew up and...is your 
clothing alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C073`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But you're...stepping on the sandwich...your 
foot...you've got no toes, Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C074`); appendText; 
   //Sora
   Sora`"Oh?.... My gosh! Sorry about that."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And just like that, Sora's vanished toes 
reappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the place where the sandwich was supposed 
to be wavered unsteadily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt flustered. I didn't know what was 
going on.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C075`); appendText; 
   //Sora
   Sora`"Uh, I guess, Takeshi...that you didn't know?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was shuffling embarrassedly.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora...what...in the world are you?"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C076`); appendText; 
   //You
   You`"Haaaaaa." *Sigh*`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason You gave a huge sigh right 
next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C077`); appendText; 
   //You
   You`"AH, HA, HA, HA, HA!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She burst out laughing.`;
   waitForClick; clearText; marker; sound(`T2C078`); appendText; 
   //You
   You`"I just had to watch because it was so funny, 
Takeshi..."`;
   waitForClick; clearText; marker; sound(`T2C079`); appendText; 
   //You
   You`"You really don't listen to anything..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wh-what are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was still confused.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C080`); appendText; 
   //You
   You`"The explanation at the park entrance."`;
   waitForClick; 
});
choice(
   `So what about it?`
   `I know! Don't say anything else!`
);
switch (choice) {
   case 0: goto(lbl_00000824);
   case 1: goto(lbl_00000887);
}
let lbl_00000824;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"S-so? So what about it?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `KA07ADS`, name2: `CO06ADS`, name3: `TU01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking around I saw that I was the only one 
that was surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi were looking up at Sora with 
impressed looks on their faces.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's face was blank.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid looked clueless and spaced out.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C081`); appendText; 
   //You
   You`"Geez! Oh well."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was laughing at my bewilderment.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Enough fun at my expense. Tell me what's 
going on..."`;
   waitForClick; clearText; 
});
goto(lbl_00000927);
let lbl_00000887;
showTextbox();
text(() => {
   marker; sound(`T2C082`); appendText; 
   //You
   You`"Sora is..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No! Don't say anything! I know!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'll guess!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Somehow I didn't want to have to have You 
tell me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Sora is...Sora is..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I've got it!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora's the ghost of a beautiful system 
engineer that died in the prime of her life 
with her dreams still unfulfilled!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C083`); appendText; 
   //Sora
   Sora`"No."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said it bluntly.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `TU07ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C084`); appendText; 
   //You
   You`"Takeshi, you're not even warm."`;
   waitForClick; clearText; marker; sound(`T2C085`); appendText; 
   //Tsugumi
   Tsugumi`"...Don't be stupid."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-well, then tell me what she is..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA01ADS`, name2: `CO06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking around I saw that I was the only one 
that was confused.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi were looking at Sora as if they 
were impressed at something.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
let lbl_00000927;
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C086`); appendText; 
   //You
   You`"Alright, alright..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C087`); appendText; 
   //You
   You`"Sora, sorry to bother you, but could you 
introduce yourself again?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T2C088`); appendText; 
   //Sora
   Sora`"Yes. Of course."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The punctured can had stopped fizzing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora took a step forward toward us, carefully 
as if avoiding the sandwich, and straightened 
up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a slight bow, she spoke.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C089`); appendText; 
   //Sora
   Sora`"I am Sora Akanegasaki..."`;
   waitForClick; clearText; marker; sound(`T2C090`); appendText; 
   //Sora
   Sora`"My official name is 'LM - RSDS - 4913A'."`;
   waitForClick; clearText; marker; sound(`T2C091`); appendText; 
   //Sora
   Sora`"I am an artificial intelligence, or AI, 
program in charge of guiding visitors around 
LeMU."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C092`); appendText; 
   //Sora
   Sora`"I have been programmed as one part of the 
LeMMIH system."`;
   waitForClick; clearText; marker; sound(`T2C093`); appendText; 
   //Sora
   Sora`"If you call me from any nearby terminal, I 
will soon appear anywhere within LeMU."`;
   waitForClick; clearText; marker; sound(`T2C094`); appendText; 
   //Sora
   Sora`"My image reaches you through a network 
supporting this RSD system throughout the 
complex. I think that there are few places in 
the world boasting this kind of technology."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...??"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `CO02ADS`, name2: `YU01ADS`, name3: `TU10ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C095`); appendText; 
   //Tsugumi
   Tsugumi`"RSD...this really is rare. I've never seen an 
example of it this sophisticated."`;
   waitForClick; clearText; marker; sound(`T2C096`); appendText; 
   //You
   You`"It's one of LeMU's big attractions."`;
   waitForClick; clearText; marker; sound(`T2C097`); appendText; 
   //Coco
   Coco`"So that's why Sora disappeared during the 
blackout?"`;
   waitForClick; clearText; marker; sound(`T2C098`); appendText; 
   //Sora
   Sora`"Yes. I'm sorry to have caused you undue 
concern..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had finally lost any sense of what was 
going on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The conversation had taken off and left me 
behind.`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
multifgload2({ id1: 2, id2: 4, name1: `YU15ADS`, name2: `KA01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C099`); appendText; 
   //Kid
   Kid`"What's RSD?"`;
   waitForClick; clearText; marker; sound(`T2C100`); appendText; 
   //You
   You`"Simply put, it is an image display system 
that uses a semiconductor to shine a laser 
directly on your retina."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C101`); appendText; 
   //Kid
   Kid`"I...I see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid gave a big nod.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But nothing about her explanation sounded 
simple to me.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C102`); appendText; 
   //Tsugumi
   Tsugumi`"And it is supporting such an advanced 
personality."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The surprising thing was that Tsugumi was 
actively pursuing the conversation.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO16ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C103`); appendText; 
   //Sora
   Sora`"LeMU is fairly perfectionist when it comes to 
virtual space technologies. My existence is 
one manifestation of that."`;
   waitForClick; clearText; marker; sound(`T2C104`); appendText; 
   //Tsugumi
   Tsugumi`"Doesn't that require a big system?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C105`); appendText; 
   //Sora
   Sora`"Yes, but it is much smaller that it would 
have been 20 years ago."`;
   waitForClick; clearText; marker; sound(`T2C106`); appendText; 
   //Tsugumi
   Tsugumi`"How big? Where is it? I'd like to see it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C107`); appendText; 
   //Sora
   Sora`"Uh...I'm sorry, but I'm not allowed to say. 
It is a secret."`;
   waitForClick; clearText; marker; sound(`T2C108`); appendText; 
   //Tsugumi
   Tsugumi`"You weren't given the details?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C109`); appendText; 
   //Sora
   Sora`"That's correct."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to me that the conversation was 
getting more and more technical....`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C110`); appendText; 
   //Tsugumi
   Tsugumi`"It seems you have motivation and a will of 
your own. That you are programmed for your 
own way of thinking..."`;
   waitForClick; clearText; marker; sound(`T2C111`); appendText; 
   //Sora
   Sora`"That is simply the selection of responses 
from a massive bank of sampling data the 
results of which I give back."`;
   waitForClick; clearText; marker; sound(`T2C112`); appendText; 
   //Tsugumi
   Tsugumi`"Random... Oh, I see. You are a learning 
program in which positive responses are saved 
in that way and reused."`;
   waitForClick; clearText; marker; sound(`T2C113`); appendText; 
   //Sora
   Sora`"That is correct. I have been designed with 
specific emphasis on the functions of 
curiosity and concentration."`;
   waitForClick; clearText; marker; sound(`T2C114`); appendText; 
   //Sora
   Sora`"Morphological analysis from my audio input 
very likely operates at a speed and a level 
of precision without peer."`;
   waitForClick; clearText; marker; sound(`T2C115`); appendText; 
   //Sora
   Sora`"There are also a number of special 
technologies used to create me. However, the 
specifics of these are industrial secrets 
which can not be revealed..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C116`); appendText; 
   //Tsugumi
   Tsugumi`"I see. There are things about you that 
normal AI can't explain, but I think I get 
the picture."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I really didn't get it at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a headache more than anything.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C117`); appendText; 
   //Tsugumi
   Tsugumi`"By the way...Sora..."`;
   waitForClick; clearText; marker; sound(`T2C118`); appendText; 
   //Tsugumi
   Tsugumi`"If I told you that I were actually a man, 
would you believe me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi tossed this bizarre question out of 
nowhere.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C119`); appendText; 
   //Tsugumi
   Tsugumi`"Don't anybody jump in just yet...I'm asking 
Sora. So, would you believe me?"`;
   waitForClick; clearText; marker; sound(`T2C120`); appendText; 
   //Sora
   Sora`"No."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C121`); appendText; 
   //Tsugumi
   Tsugumi`"Well, what if I said that I were over 20 
years old?"`;
   waitForClick; clearText; marker; sound(`T2C122`); appendText; 
   //Sora
   Sora`"That is possible."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C123`); appendText; 
   //Tsugumi
   Tsugumi`"I'm single. I'll probably stay that way. 
It's what I believe."`;
   waitForClick; clearText; marker; sound(`T2C124`); appendText; 
   //Sora
   Sora`"That might well be true."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C125`); appendText; 
   //Tsugumi
   Tsugumi`"Actually, I just learned that Takeshi had a 
sex change three years ago. It's true."`;
   waitForClick; clearText; marker; sound(`T2C126`); appendText; 
   //Sora
   Sora`"That I cannot believe."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C127`); appendText; 
   //Tsugumi
   Tsugumi`"Hee, hee... You really are quite amazing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi laughed a little.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey, Tsugumi, whaddya think you're doing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to ask.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `TU10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C128`); appendText; 
   //Tsugumi
   Tsugumi`"I wanted to see..."`;
   waitForClick; clearText; marker; sound(`T2C129`); appendText; 
   //Tsugumi
   Tsugumi`"If Sora can tell when people are lying."`;
   waitForClick; clearText; marker; sound(`T2C130`); appendText; 
   //Tsugumi
   Tsugumi`"To see if she can determine the truthful 
information from non-truthful even when she 
has no background data."`;
   waitForClick; clearText; marker; sound(`T2C131`); appendText; 
   //Tsugumi
   Tsugumi`"She can. She does more than compare and 
reference data with data in her memory but 
has been programmed to factor in 'chance' and 
'intuition' to make her own judgments."`;
   waitForClick; clearText; marker; sound(`T2C132`); appendText; 
   //Tsugumi
   Tsugumi`"The system is designed to make choices based 
on updated information and boost its 
efficiency by rewriting itself."`;
   waitForClick; clearText; marker; sound(`T2C133`); appendText; 
   //Tsugumi
   Tsugumi`"This is an incredibly advanced level of 
technology."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is that right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C134`); appendText; 
   //Sora
   Sora`"Yes. My system uses state-of-the-art 
technology."`;
   waitForClick; clearText; marker; sound(`T2C135`); appendText; 
   //Sora
   Sora`"But I am not very good at lying.... My lying 
function is underdeveloped."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora laughed at herself.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But when you introduce yourself you say that 
you are a system engineer. That's a lie isn't 
it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C136`); appendText; 
   //Sora
   Sora`"That is simply a 'setting' of mine. That is 
how my profile in the mainframe computer 
reads."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Oh."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So that's how it works."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, I seemed to be the only one who 
was flabbergasted that Sora was the product 
of AI.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You was an employee at LeMU so of course she 
knew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was always cool as a cucumber. I 
wondered why she knew so much about LeMU. I 
guessed that she'd looked up a lot of the 
information in advance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco didn't seem to care one way or the other 
whether Sora was a hologram or not. She was 
just laughing and playing with Pipi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That the Kid didn't seem surprised, well I 
put that down to his circumstances....`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
delay({ interval: 120 });
bgload({ name: `IMG01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Several hours passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like it was about time for the sun 
to be setting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the dark depths of the ocean my sense of 
time had eroded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked the time on my PDA, finally making 
sure it was night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, nothing in LeMU changed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one new showed up to visit us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But things hadn't taken a turn for the worse, 
either. There didn't seem to be any impending 
danger of floor or collapse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We each spent the time as we pleased.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had long forgotten that we were trapped.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
bgload({ name: `BG15B1`, transition: 20 });
clock(`18:27`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to go see Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Honestly, I was a little confused.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was AI...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to know what RSD was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It might be something I shouldn't even bother 
worrying about, but I wanted to ask Sora 
about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without really understanding what she was all 
about, I didn't think I would know how to act 
around Sora.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Can you tell me more about RSD?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You got my interest perked...and I want to 
know more about you."`;
   waitForClick; clearText; marker; sound(`T2C137`); appendText; 
   //Sora
   Sora`"I understand."`;
   waitForClick; clearText; marker; sound(`T2C138`); appendText; 
   //Sora
   Sora`"But rattling off a bunch of jargon won't do 
much good will it? I might just confuse you 
more."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, I'm no technician. If you start 
throwing out a bunch of technical terms, I'll 
just get lost."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C139`); appendText; 
   //Sora
   Sora`"I see. So you were completely 'lost' when I 
was conversing with Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. I had no clue what you two were 
saying..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scratched my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized that I was blushing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C140`); appendText; 
   //Sora
   Sora`"Oh, I'm sorry...did I say something wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora look apologetic.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, that was a good comeback."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C141`); appendText; 
   //Sora
   Sora`"A good comeback?"`;
   waitForClick; clearText; marker; sound(`T2C142`); appendText; 
   //Sora
   Sora`"What is a good comeback?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked confused.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh...it's when you say something to needle 
the person your talking with or make a sharp 
or witty comment that makes them feel 
awkward." `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C143`); appendText; 
   //Sora
   Sora`"Uh, I see. Gee, I'm really sorry, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't have to apologize. It didn't hurt 
my feelings or anything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C144`); appendText; 
   //Sora
   Sora`"Are you sure?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't mind. It was fun. Okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C145`); appendText; 
   //Sora
   Sora`"Uh, uh...making a person feel awkward...is 
funny?"`;
   waitForClick; clearText; marker; sound(`T2C146`); appendText; 
   //Sora
   Sora`"That seems to be a contradiction."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It is, but it's not. It depends on the time 
and the place."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C147`); appendText; 
   //Sora
   Sora`"That's difficult. It is hard for me to 
comprehend the concept of 'nice comeback'..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Forget about it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Knowing that Sora was a product of artificial 
intelligence, I was impressed that she was 
even able to register a joke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if I hadn't tossed that can of 
cola to Sora if I would still be thinking 
that she were human...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, to get back to what we were talking 
about...can you tell me more about RSD?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C148`); appendText; 
   //Sora
   Sora`"Yes. Let's see.... Let me try explain using 
specific examples."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yes, please."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora and I headed from the rest area to the 
Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we walked, Sora started speaking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C149`); appendText; 
   //Sora
   Sora`"Takeshi, can you see me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. I see you no problem."`;
   waitForClick; clearText; marker; sound(`T2C150`); appendText; 
   //Sora
   Sora`"And I can see you as well."`;
   waitForClick; clearText; marker; sound(`T2C151`); appendText; 
   //Sora
   Sora`"I am standing right next to you. You're 
sure?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yes. I'm sure. Positive."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C152`); appendText; 
   //Sora
   Sora`"But..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly Sora faced me and reached out toward 
me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whoooaa!"`;
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
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C153`); appendText; 
   //Sora
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T2C154`); appendText; 
   //Sora
   Sora`"So you are seeing me."`;
   waitForClick; clearText; marker; sound(`T2C155`); appendText; 
   //Sora
   Sora`"However, I am not right next to you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying this, Sora pulled her hand back.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C156`); appendText; 
   //Sora
   Sora`"RSD stands for Retinal Scanning Display."`;
   waitForClick; clearText; marker; sound(`T2C157`); appendText; 
   //Sora
   Sora`"The display device is not actually a display."`;
   waitForClick; clearText; marker; sound(`T2C158`); appendText; 
   //Sora
   Sora`"Rather, a weak laser is aimed at the retina."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Retina? You mean my eye?"`;
   waitForClick; clearText; marker; sound(`T2C159`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`T2C160`); appendText; 
   //Sora
   Sora`"In the ceiling of each room and corridor are 
semiconductor laser output devices."`;
   waitForClick; clearText; marker; sound(`T2C161`); appendText; 
   //Sora
   Sora`"So the image is being directly reflected on 
to your retina."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Image?"`;
   waitForClick; clearText; marker; sound(`T2C162`); appendText; 
   //Sora
   Sora`"Yes. My image."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Directly on my retina..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C163`); appendText; 
   //Sora
   Sora`"Holographic screens typically allow for the 
objects behind them to be visible..."`;
   waitForClick; clearText; marker; sound(`T2C164`); appendText; 
   //Sora
   Sora`"This system uses the eyeball as a virtual 
screen and continuously sends an image 
synthesized with the background scenery."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Well, what about your voice?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It sounds like your voice is coming from 
where your mouth appears."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We arrived at the rest area and I sat on a 
nearby bench.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora continued standing in front of me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, why don't you sit down?"`;
   waitForClick; clearText; marker; sound(`T2C165`); appendText; 
   //Sora
   Sora`"I don't get tired so I'm fine standing."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I understand that, but it makes me uneasy. 
It makes me feel like you're straining 
yourself or something."`;
   waitForClick; clearText; marker; sound(`T2C166`); appendText; 
   //Sora
   Sora`"Is that right? Then excuse me..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora slowly sat down to the left of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't feel the bench move under her 
weight....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But looking at her, she was definitely sitting.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C167`); appendText; 
   //Sora
   Sora`"We were talking about my voice."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's right."`;
   waitForClick; clearText; marker; sound(`T2C168`); appendText; 
   //Sora
   Sora`"Have you ever heard 3D sound?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"3D sound?"`;
   waitForClick; clearText; marker; sound(`T2C169`); appendText; 
   //Sora
   Sora`"Have you ever listened to music using 
headphones?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Of course I have."`;
   waitForClick; clearText; marker; sound(`T2C170`); appendText; 
   //Sora
   Sora`"When you do, where does it sound like the 
music is coming from?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmmm. Inside my head I guess."`;
   waitForClick; clearText; marker; sound(`T2C171`); appendText; 
   //Sora
   Sora`"That's right. Most people hear the sound as 
if it is reverberating inside the center of 
their head toward the back."`;
   waitForClick; clearText; marker; sound(`T2C172`); appendText; 
   //Sora
   Sora`"But the sound is not actually coming from 
inside your head."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I guess not."`;
   waitForClick; clearText; marker; sound(`T2C173`); appendText; 
   //Sora
   Sora`"But if you could apply this knowledge and 
adjust the volume from the left and the right 
to accurately simulate this reverberating 
sound..."`;
   waitForClick; clearText; marker; sound(`T2C174`); appendText; 
   //Sora
   Sora`"Then you could create the illusion that a 
sound was coming from any direction - above 
or below, left or right."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I see. Oh...so you mean the voice converter!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still had both of them in my ears. I 
removed them. They were about the size of the 
tip of my little finger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In front of me, Sora's mouth moved soundlessly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like I couldn't hear her voice.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But that wasn't all. Then her image started 
to get a little fuzzy.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I replaced the voice converters, Sora 
returned to normal.`;
   waitForClick; clearText; 
});
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C175`); appendText; 
   //Sora
   Sora`"The image's position is based on the 
location of the voice converters."`;
   waitForClick; clearText; marker; sound(`T2C176`); appendText; 
   //Sora
   Sora`"So wherever you stand and which ever 
direction you face..."`;
   waitForClick; clearText; marker; sound(`T2C177`); appendText; 
   //Sora
   Sora`"LeMMIH is constantly using sensors around the 
complex that monitor the position of the voice 
converters to the millimeter."`;
   waitForClick; clearText; marker; sound(`T2C178`); appendText; 
   //Sora
   Sora`"So that when I am 60 feet behind you..."`;
   waitForClick; clearText; marker; sound(`T2C179`); appendText; 
   //Sora
   Sora`"My voice will sound as if I am exactly 60 
feet behind you."`;
   waitForClick; clearText; marker; sound(`T2C180`); appendText; 
   //Sora
   Sora`"When I am to the right, it sounds to the 
right. When to the left, it sounds to the 
left."`;
   waitForClick; clearText; marker; sound(`T2C181`); appendText; 
   //Sora
   Sora`"When I am under you, it sounds..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Under...when you are under...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C182`); appendText; 
   //Sora
   Sora`"Um, well..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C183`); appendText; 
   //Sora
   Sora`"Anyway, that is how it works. Do you 
understand?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C184`); appendText; 
   //Sora
   Sora`"Takeshi, now try to face a little to the 
left."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I faced to the left as she said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora stood and moved around to my right.`;
   waitForClick; clearText; marker; sound(`T2C185`); appendText; 
   //Sora
   Sora`"Just a moment ago I said that LeMMIH is 
constantly monitoring your position and the 
direction you are facing..."`;
   waitForClick; clearText; marker; sound(`T2C186`); appendText; 
   //Sora
   Sora`"At the same time, LeMMIH is also monitoring 
the position of your eyeballs."`;
   waitForClick; clearText; marker; sound(`T2C187`); appendText; 
   //Sora
   Sora`"So that even if you move, I still appear in 
the same place."`;
   waitForClick; clearText; marker; sound(`T2C188`); appendText; 
   //Sora
   Sora`"This means that LeMMIH scans the image onto 
your eye in this way."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you can be made to suddenly disappear or 
reappear in another place?"`;
   waitForClick; clearText; marker; sound(`T2C189`); appendText; 
   //Sora
   Sora`"Do you want to see it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...No...I think I'll pass."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard someone coming running up to us.`;
   waitForClick; clearText; marker; sound(`T2C190`); appendText; 
   //Coco
   Coco`"Oh, Takepyon!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The small footsteps were those of Coco and 
Pipi.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopSFX()
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C191`); appendText; 
   //Coco
   Coco`"Hey, Takepyon, have you seen Sora around?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What're you talking about? She's right in 
front of you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C192`); appendText; 
   //Coco
   Coco`"Right in front?"`;
   waitForClick; clearText; marker; sound(`T2C193`); appendText; 
   //Coco
   Coco`"But there's nobody here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco tilted her head questioningly as she 
said this.`;
   waitForClick; clearText; marker; sound(`T2C194`); appendText; 
   //Coco
   Coco`"Hmmmm..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C195`); appendText; 
   //Coco
   Coco`"Oh well. See you later."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After looking around us, Coco left.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora was still standing right next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco hadn't been able to see Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, that wasn't it.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So that's it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So your image was not being scanned on to 
her retina."`;
   waitForClick; clearText; marker; sound(`T2C196`); appendText; 
   //Sora
   Sora`"There you go. You're quick on the pick up."`;
   waitForClick; clearText; marker; sound(`T2C197`); appendText; 
   //Sora
   Sora`"Normally, my image is scanned on the eyes of 
all five of you."`;
   waitForClick; clearText; marker; sound(`T2C198`); appendText; 
   //Sora
   Sora`"It is coordinated so that it looks to 
everyone like I am in the same place, doing 
the same movement and saying the same thing..."`;
   waitForClick; clearText; marker; sound(`T2C199`); appendText; 
   //Sora
   Sora`"But it is also possible to show you something 
else."`;
   waitForClick; clearText; marker; sound(`T2C200`); appendText; 
   //Sora
   Sora`"For example..."`;
   waitForClick; clearText; marker; sound(`T2C201`); appendText; 
   //Coco
   Coco`"Oh, Sora, there you are."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's voice came from behind me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking back I saw Coco looking toward the 
flowerbed and speaking.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oooh, so to Coco, it looks like Sora is in 
front of that flowerbed, huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey? Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't see Sora anywhere.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C202`); appendText; 
   //Coco
   Coco`"Yeah. That's why I wanted to talk to you."`;
   waitForClick; clearText; marker; sound(`T2C203`); appendText; 
   //Coco
   Coco`"Huh? No, no. That's not what I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C204`); appendText; 
   //Coco
   Coco`"Oh, I see. You want me to bring it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was continuing her conversation with Sora.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C205`); appendText; 
   //Coco
   Coco`"Okay. I understand. I'll go tell Nakkyu. See 
you later."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco ran off somewhere. Pipi followed her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T2C206`); appendText; 
   //Sora
   Sora`"So I can do this kind of thing as well."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora suddenly appeared before me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Waaaa!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's kind of like...you're a ghost."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C207`); appendText; 
   //Sora
   Sora`"Yes. I hear that a lot."`;
   waitForClick; clearText; marker; sound(`T2C208`); appendText; 
   //Sora
   Sora`"Being in the same place and looking at the 
same thing, only some people can see it and 
some people can't."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C209`); appendText; 
   //Sora
   Sora`"I've never seen one, but if ghosts really do 
exist..."`;
   waitForClick; clearText; marker; sound(`T2C210`); appendText; 
   //Sora
   Sora`"I imagine they exist much the way that I do."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmmm... Now I get it..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"But there is something that bothers me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C211`); appendText; 
   //Sora
   Sora`"What is that?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, so you can't be in more than one place 
at a time?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"For example, you couldn't be in one room 
talking to me and another talking with Coco?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C212`); appendText; 
   //Sora
   Sora`"Theoretically it is possible."`;
   waitForClick; clearText; marker; sound(`T2C213`); appendText; 
   //Sora
   Sora`"However, the way that I am designed, I can't 
do that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why not?"`;
   waitForClick; clearText; marker; sound(`T2C214`); appendText; 
   //Sora
   Sora`"I imagine it is to help maintain an image of 
reality for visitors."`;
   waitForClick; clearText; marker; sound(`T2C215`); appendText; 
   //Sora
   Sora`"So that there is only one 'Sora' in the 
world."`;
   waitForClick; clearText; marker; sound(`T2C216`); appendText; 
   //Sora
   Sora`"Without that kind of setting, visitors would 
get confused."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`T2C217`); appendText; 
   //Sora
   Sora`"That, and it was the policy of my designer."`;
   waitForClick; clearText; marker; sound(`T2C218`); appendText; 
   //Sora
   Sora`"The policy of my designer was to create me 
as a character with an independent 
personality..."`;
   waitForClick; clearText; marker; sound(`T2C219`); appendText; 
   //Sora
   Sora`"That reminds me, I have heard the same thing 
about the 'United Land' characters."`;
   waitForClick; clearText; marker; sound(`T2C220`); appendText; 
   //Sora
   Sora`"There is only one of each character in the 
park."`;
   waitForClick; clearText; marker; sound(`T2C221`); appendText; 
   //Sora
   Sora`"Like in a story...there can't be any one 
character in two places at the same time..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 14, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora had more work to do so I saw her to the 
Control Room.`;
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
   //Takeshi
   Takeshi`"I was wondering about the laser retina 
scan..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So if I were in a place that the laser 
couldn't reach, then I couldn't see you?"`;
   waitForClick; clearText; marker; sound(`T2C222`); appendText; 
   //Sora
   Sora`"Of course not. But..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C223`); appendText; 
   //Sora
   Sora`"The scanning devices are located in every 
room of the complex and there are mirrors 
embedded in the walls, ceilings and floors to 
reflect the images."`;
   waitForClick; clearText; marker; sound(`T2C224`); appendText; 
   //Sora
   Sora`"So almost no matter where you are, I can be 
displayed."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So there are no blind spots..."`;
   waitForClick; clearText; marker; sound(`T2C225`); appendText; 
   //Sora
   Sora`"That's the way it is designed."`;
   waitForClick; clearText; marker; sound(`T2C226`); appendText; 
   //Sora
   Sora`"However, there is one major flaw."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Flaw?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG15B1`, transition: 20 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C227`); appendText; 
   //Sora
   Sora`"I..."`;
   waitForClick; clearText; marker; sound(`T2C228`); appendText; 
   //Sora
   Sora`"I am only 'seen' when someone looks at me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`T2C229`); appendText; 
   //Sora
   Sora`"I mean, that I cease to exist 
when no one is looking at me."`;
   waitForClick; clearText; marker; sound(`T2C230`); appendText; 
   //Sora
   Sora`"For example, if all five of you were here 
and you all closed your eyes at once..."`;
   waitForClick; clearText; marker; sound(`T2C231`); appendText; 
   //Sora
   Sora`"At that moment, I would cease to exist."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
goto(lbl_0000116a).if(var_f1 == 0);
goto(lbl_0000116a).if(var_ba != 3);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`TC2A`);
let lbl_0000116a;
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I casually held my hand up in front of my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I covered the view forward looking down near 
my feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign of Sora next to me. It was 
as if she had vanished, or never been there 
in the first place.`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Surprised, I removed my hand and Sora 
reappeared in the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The outline of Sora's sandals blurred dimly 
in the water.`;
   waitForClick; clearText; marker; sound(`T2C232`); appendText; 
   //Sora
   Sora`"Someone has to 'see' me."`;
   waitForClick; clearText; marker; sound(`T2C233`); appendText; 
   //Sora
   Sora`"I have to be seen to exist."`;
   waitForClick; clearText; marker; sound(`T2C234`); appendText; 
   //Sora
   Sora`"Vision..."`;
   waitForClick; clearText; marker; sound(`T2C235`); appendText; 
   //Sora
   Sora`"That someone's eye actually creates me."`;
   waitForClick; clearText; marker; sound(`T2C236`); appendText; 
   //Sora
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T2C237`); appendText; 
   //Sora
   Sora`"When you close your eyes, I disappear."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG16A3`, transition: 20 });
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When we entered the Control Room I heard her 
being called from the console.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C238`); appendText; 
   //Sora
   Sora`"Well, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T2C239`); appendText; 
   //Sora
   Sora`"LeMMIH is calling for me, 
so I will leave and then come back shortly."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And saying that, Sora disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the three-dimensional hologram depicting 
LeMU hovered silently in the darkness.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 120 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_2D`);
