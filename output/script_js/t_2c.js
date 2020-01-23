l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
setDialogBoxColor(GREEN);
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
setSceneTitle({ index: 13 });
clock(`11:41`);
showTextbox();
text(() => {
   `Nearly an hour had passed since 
the power had gone back online.`;
   `We gathered in the Conference Room on the 
third floor.`;
   `Tsugumi, Sora, You, Coco and I were sitting in 
chairs just letting time pass.`;
   `The rescue team still hadn't come.`;
   `Our situation didn't show any sign of changing.`;
   Takeshi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   You(T2C000)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Coco(T2C001)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Tsugumi(T2C002)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   `My yawn spread from one person to the next.`;
   `Only Sora had her head down and looked as if 
she were thinking about something....`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C003)`"Oh, that's right!"`;
   `Coco suddenly started talking.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C004)`"When I was in the changing room a little bit 
ago I found this..."`;
   `As she spoke, Coco plucked something out of 
her pocket.`;
   `It was a set of cards.`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C005)`"Hey, dontcha wanna play cards?"`;
   Coco(T2C006)`"I mean we've got nothing to do..."`;
   You(T2C007)`"Cards, hmmm..."`;
   You(T2C008)`"So? What do you wanna play?"`;
   Coco(T2C009)`"Um...um...let's see..."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C010)`"Oh! How about Super Memory?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2C011)`"Super..."`;
   Tsugumi(T2C012)`"...Memory?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `YU17ADS`, name2: `CO06ADS`, name3: `TU13ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T2C013)`"What? You don't know Super Memory?"`;
   `You and Tsugumi looked at each other.`;
   Coco(T2C014)`"You're kidding, right? You HAVE to know this 
game!"`;

});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C015)`"Right? Takepyon, you know it right?"`;

});
choice(
   `Of course I know it`,
   `I've never heard of it`,
);
switch (l_choice) {
   case 0: goto(lbl_0000018c);
   case 1: goto(lbl_0000026b);
}
let lbl_0000018c;
showTextbox();
text(() => {
   Takeshi`"Of course I know it."`;
   `I answered full of confidence.`;
   Takeshi`"You want me to help you set up the cards?"`;

});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C016)`"YES PLEASE!"`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU06ADS`, name2: `TU06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C017)`"W-wait a minute..."`;
   You(T2C018)`"What in the world are you talking about?"`;

});
fgload({ id: 2, name: `CO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"What, are you guys bad at Super Memory and 
scared to play?"`;
   Tsugumi(T2C019)`"No..."`;
   You(T2C020)`"I don't know if I am good at it or bad at it."`;

});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C021)`"Huh? You mean you really..."`;
   Takeshi`"You guys really don't know the game?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADS`, name2: `TU07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2C022)`"Nope."`;
   Tsugumi(T2C023)`"Me neither."`;
   Takeshi`"You're kidding? I don't believe this!"`;
   `I was stunned.`;

});
fgload({ id: 1, name: `YU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C024)`"Well, we don't know what we don't know."`;
   `With that You clammed up.`;

});
fgload({ id: 2, name: `CO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C025)`"It's a pretty famous game...at least I 
thought it was..."`;

});
hideTextbox();
stopBGM();
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C026)`"...But, it's no problem."`;
   Coco(T2C027)`"The rules are simple. I'll teach you!"`;

});
goto(lbl_000002dd);
let lbl_0000026b;
showTextbox();
text(() => {
   Takeshi`"I've never heard of it." `;
   `I answered without hesitating.`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADS`, name2: `TU07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2C028)`"Me neither."`;
   Tsugumi(T2C029)`"Me neither..."`;

});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C030)`"What! Are you serious...?"`;
   `A glance at Sora showed she was shaking her 
head.`;

});
fgload({ id: 2, name: `CO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C031)`"You all really don't know?"`;
   `Coco sounded pouty.`;
   Coco(T2C032)`"Geez. Oh well..."`;
   `I didn't see any reason to give up.`;
   Takeshi`"Well, if we don't know, then we'll just have 
to learn..."`;
   Takeshi`"So, Coco, will you explain the game to us?"`;

});
hideTextbox();
stopBGM();
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C033)`"Okay. Everybody listen, alright?"`;

});
let lbl_000002dd;
hideTextbox();
playBGM({ num: 9, volume: 100 });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `Coco started shuffling the cards brilliantly.`;

});
fgload({ id: 1, name: `CO12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C034)`"First, you have to shuffle the cards really 
good..."`;
   Coco(T2C035)`"...Then you spread the cards on the table 
like this."`;
   `She spread them out randomly so that they 
didn't overlap.`;

});
fgload({ id: 1, name: `CO11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C036)`"Then we do rock, paper, scissors and you 
turn over cards starting with the loser."`;
   Coco(T2C037)`"Like this...you turn over one card and then 
one more..."`;
   Coco(T2C038)`"And if the two cards are the same number 
then the person that turned them over gets 
them."`;

});
fgload({ id: 1, name: `CO12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C039)`"So? It's easy, huh?"`;
   Takeshi`"Hey, everybody got it? Let's play."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU13ADM`, name2: `TU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   You`"........."`;
   Tsugumi(T2C040)`"That's called Concentration."`;
   You(T2C041)`"Mental Guts..."`;
   Takeshi`"Huh?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `TU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C042)`"People usually call the game Concentration, 
don't they...?"`;
   Takeshi`"What?"`;
   Takeshi`"Well, maybe in some backwater places they 
might call it that."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C043)`"That's not what I mean."`;
   You(T2C044)`"That game is clearly Mental Guts. It's 
obvious!"`;
   Takeshi`"What're you talking about...?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `YU04ADS`, name2: `CO04ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T2C045)`"No, it's called Super Memory."`;
   Tsugumi(T2C046)`"Concentration..."`;
   You(T2C047)`"It's called Mental Guts!"`;
   Coco(T2C048)`"I said that it's Super Memory!"`;
   Takeshi`"Geez! You guys are fussy!"`;
   Takeshi`"Alright. I know what we'll do! Everybody calm 
down!"`;

});
multifgload3({ name1: `YU06ADS`, name2: `CO06ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"We'll compromise and..."`;
   Takeshi`"...Let's say we call it Concemory...?"`;

});
multifgload3({ name1: `YU07ADS`, name2: `CO07ADS`, name3: `TU07ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T2C049)`"Conce..."`;
   Tsugumi(T2C050)`"...emory?"`;
   `And just then - `;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `KA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C051)`"Here you go!"`;
   `The Kid came into the Conference Room 
carrying six cans of cola cradled against his 
chest.`;
   `The card game stopped.`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU15ADS`, name2: `KA01ADS`, name3: `CO12ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T2C052)`"Hiya Kiddo!"`;
   You(T2C053)`"Hey, Kid. That was sure thoughtful of you!"`;
   `You took the cola from the Kid and popped 
open the tab.`;

});
hideTextbox();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `She held down the carbonation to keep it from 
erupting.`;
   `Like a pro, she kept from being showered with 
sticky cola.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C054)`"I got these on the way..."`;

});
playSFX({ name: `SE10_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `He noisily set the five other cans on the 
table.`;
   Kid(T2C055)`"...I brought these, too."`;
   `The kid turned around.`;
   Takeshi`"What?"`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C056)`"These."`;
   `Kid was pointing to the hood behind his neck.`;
   `I stuck my hand in the hood.`;
   `There were two chicken sandwiches inside it.`;

});
if (l_decide_go_to_sora_in_2nd_day == 0) goto(lbl_0000053a);
showTextbox();
text(() => {
   Takeshi`"Hey? What are these? Did you make em'?"`;

});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C057)`"You gave them to me when I gave you the 
flashlight."`;
   Takeshi`"Oh, that's right...the leftovers."`;
   `They were the sandwiches that I hadn't given 
to Tsugumi and Sora during the blackout.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
goto(lbl_0000053f);
let lbl_0000053a;
showTextbox();
text(() => {
   `They were the sandwiches that I had left on 
the bench during the blackout.`;

});
let lbl_0000053f;
showTextbox();
text(() => {
   Kid(T2C058)`"I thought that somebody might be hungry."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2C059)`"Oh great!"`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C060)`"You are so thoughtful!"`;
   `You went over to the Kid and mussed up his 
hair affectionately.`;

});
fgload({ id: 2, name: `KA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `He stood there stiff as a rod, not resisting 
at all.`;
   `I figured You's hands were probably pretty 
sticky from the cola...`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C061)`"....Ahem."`;
   `Tsugumi raised her hand.`;
   Tsugumi(T2C062)`"If no one else wants one...I'll take one of 
them."`;
   `Tsugumi, unlike her normal self, spoke up.`;
   Takeshi`"So all that repair work made you hungry?"`;

});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Of course, she didn't see any need to answer 
my question.`;

});
if (l_decide_go_to_sora_in_2nd_day == 0) goto(lbl_00000616);
showTextbox();
text(() => {
   `Besides, I realized she might not have eaten 
anything since breakfast.`;
   Takeshi`"Alright. This one's for Tsugumi."`;
   `I gave Tsugumi one of the sandwiches that I 
took from the Kid's hood.`;
   `Tsugumi took it without saying anything.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Then I held out the remaining one to Sora.`;
   Takeshi`"The other one is for Sora. You haven't 
eaten, have you?"`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C063)`"Uh, no...I'm fine..."`;
   Takeshi`"Don't be polite. I know it tastes good."`;

});
goto(lbl_0000063f);
let lbl_00000616;
showTextbox();
text(() => {
   Takeshi`"Alright. This one's for Tsugumi."`;
   `I gave Tsugumi one of the sandwiches that I 
took from the Kid's hood.`;
   `Tsugumi took it without saying anything.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Then I held out the remaining one to Sora.`;
   Takeshi`"The other one is Sora's. You didn't have 
breakfast, right?"`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C064)`"Uh, no thanks. I'm fine..."`;
   Takeshi`"Don't be polite, I made it. I know it tastes 
good."`;

});
let lbl_0000063f;
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C065)`"Still..."`;
   Takeshi`"Hey, I'm not kidding."`;
   Coco(T2C066)`"I'll vouch for its deliciousness!"`;
   Kid(T2C067)`"Uh, me too..."`;
   `Coco and the Kid raised their hands.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Sora? What? You can't eat my food?"`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C068)`"That's not it..."`;
   Takeshi`"Then what is it? Eat too much yesterday? Or 
are you on a diet?"`;

});
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C069)`"No, but...I..."`;
   Takeshi`"No. You have to eat or you'll get weak. 
Here! Take it!"`;
   `I tossed a cola and chicken sandwich toward 
Sora.`;
   `They traced a gentle arc through the air.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C070)`"Ahh...!!!"`;
   `Sora suddenly reached out her hands...`;
   `She reached them out, but...`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Fwoosh.`;

});
playSFX({ name: `SE08_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bang!`;

});
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Gushaaaaaw!!`;
   Takeshi`"........."`;
   Sora`"........."`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `But Sora didn't catch them.`;
   `No. She couldn't catch them.`;
   `She didn't avoid them.`;
   `It wasn't that she was too slow.`;
   `Sora was there with her hands extended into 
space.`;
   `The sandwich had fallen at her feet.`;
   `The cola had violently slammed into the wall 
behind her and exploded.`;
   `The spewing cola didn't get Sora wet.`;
   `The droplets looked like they flew through 
Sora's body.`;
   `The sandwich wrapper covered the silhouette of 
Sora's sandal...`;
   `It was as if the two had melded together.`;
   Takeshi`"Huh...?"`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C071)`"That's why I said...I didn't need it."`;
   `Sora made an embarrassed looking expression.`;
   Takeshi`"Wwwwhhhhhhhhaaaaaattttttt?"`;
   Takeshi`"No, that's, what, I..."`;
   `For some reason I was completely stunned.`;
   Takeshi`"I meant to toss them as if I were handing 
them over...that's weird...your hand must've 
slipped..."`;
   Sora(T2C072)`"Excuse me. Takeshi, there is nothing strange 
about it."`;
   Takeshi`"B-but! The cola blew up and...is your 
clothing alright?"`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C073)`"Yes."`;
   Takeshi`"But you're...stepping on the sandwich...your 
foot...you've got no toes, Sora..."`;

});
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C074)`"Oh?.... My gosh! Sorry about that."`;

});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And just like that, Sora's vanished toes 
reappeared.`;
   `But the place where the sandwich was supposed 
to be wavered unsteadily.`;
   `I felt flustered. I didn't know what was 
going on.`;

});
fgload({ id: 1, name: `SO08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C075)`"Uh, I guess, Takeshi...that you didn't know?"`;
   `Sora was shuffling embarrassedly.`;
   Takeshi`"Sora...what...in the world are you?"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C076)`"Haaaaaa." *Sigh*`;
   `For some reason You gave a huge sigh right 
next to me.`;
   `And then...`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C077)`"AH, HA, HA, HA, HA!"`;
   `She burst out laughing.`;
   You(T2C078)`"I just had to watch because it was so funny, 
Takeshi..."`;
   You(T2C079)`"You really don't listen to anything..."`;
   Takeshi`"Wh-what are you talking about?"`;
   `I was still confused.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C080)`"The explanation at the park entrance."`;

});
choice(
   `So what about it?`,
   `I know! Don't say anything else!`,
);
switch (l_choice) {
   case 0: goto(lbl_00000824);
   case 1: goto(lbl_00000887);
}
let lbl_00000824;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"S-so? So what about it?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `KA07ADS`, name2: `CO06ADS`, name3: `TU01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `Looking around I saw that I was the only one 
that was surprised.`;
   `Coco and Pipi were looking up at Sora with 
impressed looks on their faces.`;
   `Tsugumi's face was blank.`;
   `The Kid looked clueless and spaced out.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C081)`"Geez! Oh well."`;
   `You was laughing at my bewilderment.`;
   Takeshi`"Enough fun at my expense. Tell me what's 
going on..."`;

});
goto(lbl_00000927);
let lbl_00000887;
showTextbox();
text(() => {
   You(T2C082)`"Sora is..."`;
   Takeshi`"No! Don't say anything! I know!"`;
   Takeshi`"I'll guess!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Somehow I didn't want to have to have You 
tell me.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Sora is...Sora is..."`;
   Takeshi`"I've got it!"`;
   Takeshi`"Sora's the ghost of a beautiful system 
engineer that died in the prime of her life 
with her dreams still unfulfilled!"`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C083)`"No."`;
   `She said it bluntly.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `TU07ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T2C084)`"Takeshi, you're not even warm."`;
   Tsugumi(T2C085)`"...Don't be stupid."`;
   Takeshi`"W-well, then tell me what she is..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA01ADS`, name2: `CO06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `Looking around I saw that I was the only one 
that was confused.`;
   `Coco and Pipi were looking at Sora as if they 
were impressed at something.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
let lbl_00000927;
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C086)`"Alright, alright..."`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C087)`"Sora, sorry to bother you, but could you 
introduce yourself again?"`;

});
removeFG({ id: 1, useAnim: true });
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Sora(T2C088)`"Yes. Of course."`;
   `The punctured can had stopped fizzing.`;
   `Sora took a step forward toward us, carefully 
as if avoiding the sandwich, and straightened 
up.`;
   `After a slight bow, she spoke.`;

});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C089)`"I am Sora Akanegasaki..."`;
   Sora(T2C090)`"My official name is 'LM - RSDS - 4913A'."`;
   Sora(T2C091)`"I am an artificial intelligence, or AI, 
program in charge of guiding visitors around 
LeMU."`;
   Takeshi`"........."`;
   Sora(T2C092)`"I have been programmed as one part of the 
LeMMIH system."`;
   Sora(T2C093)`"If you call me from any nearby terminal, I 
will soon appear anywhere within LeMU."`;
   Sora(T2C094)`"My image reaches you through a network 
supporting this RSD system throughout the 
complex. I think that there are few places in 
the world boasting this kind of technology."`;
   Takeshi`"...??"`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `CO02ADS`, name2: `YU01ADS`, name3: `TU10ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Tsugumi(T2C095)`"RSD...this really is rare. I've never seen an 
example of it this sophisticated."`;
   You(T2C096)`"It's one of LeMU's big attractions."`;
   Coco(T2C097)`"So that's why Sora disappeared during the 
blackout?"`;
   Sora(T2C098)`"Yes. I'm sorry to have caused you undue 
concern..."`;
   `I had finally lost any sense of what was 
going on.`;
   `The conversation had taken off and left me 
behind.`;

});
removeFG({ id: 4, useAnim: true });
multifgload2({ id1: 2, id2: 4, name1: `YU15ADS`, name2: `KA01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C099)`"What's RSD?"`;
   You(T2C100)`"Simply put, it is an image display system 
that uses a semiconductor to shine a laser 
directly on your retina."`;

});
fgload({ id: 4, name: `KA11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C101)`"I...I see..."`;
   `The Kid gave a big nod.`;
   `But nothing about her explanation sounded 
simple to me.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C102)`"And it is supporting such an advanced 
personality."`;
   `The surprising thing was that Tsugumi was 
actively pursuing the conversation.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO16ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C103)`"LeMU is fairly perfectionist when it comes to 
virtual space technologies. My existence is 
one manifestation of that."`;
   Tsugumi(T2C104)`"Doesn't that require a big system?"`;

});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C105)`"Yes, but it is much smaller that it would 
have been 20 years ago."`;
   Tsugumi(T2C106)`"How big? Where is it? I'd like to see it."`;

});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C107)`"Uh...I'm sorry, but I'm not allowed to say. 
It is a secret."`;
   Tsugumi(T2C108)`"You weren't given the details?"`;

});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C109)`"That's correct."`;
   `It seemed to me that the conversation was 
getting more and more technical....`;

});
fgload({ id: 2, name: `TU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C110)`"It seems you have motivation and a will of 
your own. That you are programmed for your 
own way of thinking..."`;
   Sora(T2C111)`"That is simply the selection of responses 
from a massive bank of sampling data the 
results of which I give back."`;
   Tsugumi(T2C112)`"Random... Oh, I see. You are a learning 
program in which positive responses are saved 
in that way and reused."`;
   Sora(T2C113)`"That is correct. I have been designed with 
specific emphasis on the functions of 
curiosity and concentration."`;
   Sora(T2C114)`"Morphological analysis from my audio input 
very likely operates at a speed and a level 
of precision without peer."`;
   Sora(T2C115)`"There are also a number of special 
technologies used to create me. However, the 
specifics of these are industrial secrets 
which can not be revealed..."`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C116)`"I see. There are things about you that 
normal AI can't explain, but I think I get 
the picture."`;
   `I really didn't get it at all.`;
   `It was a headache more than anything.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C117)`"By the way...Sora..."`;
   Tsugumi(T2C118)`"If I told you that I were actually a man, 
would you believe me?"`;
   Takeshi`"Huh?"`;
   `Tsugumi tossed this bizarre question out of 
nowhere.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C119)`"Don't anybody jump in just yet...I'm asking 
Sora. So, would you believe me?"`;
   Sora(T2C120)`"No."`;

});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C121)`"Well, what if I said that I were over 20 
years old?"`;
   Sora(T2C122)`"That is possible."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C123)`"I'm single. I'll probably stay that way. 
It's what I believe."`;
   Sora(T2C124)`"That might well be true."`;

});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C125)`"Actually, I just learned that Takeshi had a 
sex change three years ago. It's true."`;
   Sora(T2C126)`"That I cannot believe."`;

});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C127)`"Hee, hee... You really are quite amazing."`;
   `Tsugumi laughed a little.`;
   Takeshi`"H-hey, Tsugumi, whaddya think you're doing?"`;
   `I had to ask.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `TU10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C128)`"I wanted to see..."`;
   Tsugumi(T2C129)`"If Sora can tell when people are lying."`;
   Tsugumi(T2C130)`"To see if she can determine the truthful 
information from non-truthful even when she 
has no background data."`;
   Tsugumi(T2C131)`"She can. She does more than compare and 
reference data with data in her memory but 
has been programmed to factor in 'chance' and 
'intuition' to make her own judgments."`;
   Tsugumi(T2C132)`"The system is designed to make choices based 
on updated information and boost its 
efficiency by rewriting itself."`;
   Tsugumi(T2C133)`"This is an incredibly advanced level of 
technology."`;
   Takeshi`"Is that right?"`;

});
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C134)`"Yes. My system uses state-of-the-art 
technology."`;
   Sora(T2C135)`"But I am not very good at lying.... My lying 
function is underdeveloped."`;
   `Sora laughed at herself.`;
   Takeshi`"But when you introduce yourself you say that 
you are a system engineer. That's a lie isn't 
it?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C136)`"That is simply a 'setting' of mine. That is 
how my profile in the mainframe computer 
reads."`;
   Takeshi`"...Oh."`;
   Takeshi`"So that's how it works."`;
   `In the end, I seemed to be the only one who 
was flabbergasted that Sora was the product 
of AI.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `You was an employee at LeMU so of course she 
knew.`;
   `Tsugumi was always cool as a cucumber. I 
wondered why she knew so much about LeMU. I 
guessed that she'd looked up a lot of the 
information in advance.`;
   `Coco didn't seem to care one way or the other 
whether Sora was a hologram or not. She was 
just laughing and playing with Pipi.`;
   `That the Kid didn't seem surprised, well I 
put that down to his circumstances....`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
delay({ interval: 120 });
bgload({ name: `IMG01A`, transition: 20 });
showTextbox();
text(() => {
   `Several hours passed.`;
   `It seemed like it was about time for the sun 
to be setting.`;
   `In the dark depths of the ocean my sense of 
time had eroded.`;
   `I checked the time on my PDA, finally making 
sure it was night.`;
   `Still, nothing in LeMU changed.`;
   `No one new showed up to visit us.`;
   `But things hadn't taken a turn for the worse, 
either. There didn't seem to be any impending 
danger of floor or collapse.`;
   `We each spent the time as we pleased.`;
   `We had long forgotten that we were trapped.`;

});
hideTextbox();
playBGM({ num: 8, volume: 100 });
bgload({ name: `BG15B1`, transition: 20 });
clock(`18:27`);
showTextbox();
text(() => {
   `I decided to go see Sora.`;
   `Honestly, I was a little confused.`;
   `Sora was AI...`;
   `I wanted to know what RSD was.`;
   `It might be something I shouldn't even bother 
worrying about, but I wanted to ask Sora 
about it.`;
   `Without really understanding what she was all 
about, I didn't think I would know how to act 
around Sora.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Can you tell me more about RSD?"`;
   Takeshi`"You got my interest perked...and I want to 
know more about you."`;
   Sora(T2C137)`"I understand."`;
   Sora(T2C138)`"But rattling off a bunch of jargon won't do 
much good will it? I might just confuse you 
more."`;
   Takeshi`"Well, I'm no technician. If you start 
throwing out a bunch of technical terms, I'll 
just get lost."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C139)`"I see. So you were completely 'lost' when I 
was conversing with Tsugumi?"`;
   Takeshi`"Yeah. I had no clue what you two were 
saying..."`;
   `I scratched my head.`;
   `I realized that I was blushing.`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C140)`"Oh, I'm sorry...did I say something wrong?"`;
   `Sora look apologetic.`;
   Takeshi`"No, that was a good comeback."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C141)`"A good comeback?"`;
   Sora(T2C142)`"What is a good comeback?"`;
   `Sora looked confused.`;
   Takeshi`"Uh...it's when you say something to needle 
the person your talking with or make a sharp 
or witty comment that makes them feel 
awkward." `;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C143)`"Uh, I see. Gee, I'm really sorry, Takeshi."`;
   Takeshi`"You don't have to apologize. It didn't hurt 
my feelings or anything."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C144)`"Are you sure?"`;
   Takeshi`"I don't mind. It was fun. Okay?"`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C145)`"Uh, uh...making a person feel awkward...is 
funny?"`;
   Sora(T2C146)`"That seems to be a contradiction."`;
   Takeshi`"It is, but it's not. It depends on the time 
and the place."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C147)`"That's difficult. It is hard for me to 
comprehend the concept of 'nice comeback'..."`;
   Takeshi`"Forget about it."`;
   `Knowing that Sora was a product of artificial 
intelligence, I was impressed that she was 
even able to register a joke.`;
   `I wondered if I hadn't tossed that can of 
cola to Sora if I would still be thinking 
that she were human...`;
   Takeshi`"Uh, to get back to what we were talking 
about...can you tell me more about RSD?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C148)`"Yes. Let's see.... Let me try explain using 
specific examples."`;
   Takeshi`"Yes, please."`;

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
   `Sora and I headed from the rest area to the 
Control Room.`;
   `As we walked, Sora started speaking.`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C149)`"Takeshi, can you see me?"`;
   Takeshi`"Yeah. I see you no problem."`;
   Sora(T2C150)`"And I can see you as well."`;
   Sora(T2C151)`"I am standing right next to you. You're 
sure?"`;
   Takeshi`"Yes. I'm sure. Positive."`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C152)`"But..."`;
   `Suddenly Sora faced me and reached out toward 
me.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And then...`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"Whoooaa!"`;
   `Sora's hands slipped without resistance into 
my chest.`;
   `Reflexively I tried to grab her arms. Only my 
hands met with nothing.`;
   `My hands were in front of my chest, but there 
was nothing there.`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C153)`"Yes..."`;
   Sora(T2C154)`"So you are seeing me."`;
   Sora(T2C155)`"However, I am not right next to you."`;
   `Saying this, Sora pulled her hand back.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C156)`"RSD stands for Retinal Scanning Display."`;
   Sora(T2C157)`"The display device is not actually a display."`;
   Sora(T2C158)`"Rather, a weak laser is aimed at the retina."`;
   Takeshi`"Retina? You mean my eye?"`;
   Sora(T2C159)`"Yes."`;
   Sora(T2C160)`"In the ceiling of each room and corridor are 
semiconductor laser output devices."`;
   Sora(T2C161)`"So the image is being directly reflected on 
to your retina."`;
   Takeshi`"Image?"`;
   Sora(T2C162)`"Yes. My image."`;
   Takeshi`"Directly on my retina..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C163)`"Holographic screens typically allow for the 
objects behind them to be visible..."`;
   Sora(T2C164)`"This system uses the eyeball as a virtual 
screen and continuously sends an image 
synthesized with the background scenery."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Well, what about your voice?"`;
   Takeshi`"It sounds like your voice is coming from 
where your mouth appears."`;
   `We arrived at the rest area and I sat on a 
nearby bench.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora continued standing in front of me.`;
   Takeshi`"Sora, why don't you sit down?"`;
   Sora(T2C165)`"I don't get tired so I'm fine standing."`;
   Takeshi`"I understand that, but it makes me uneasy. 
It makes me feel like you're straining 
yourself or something."`;
   Sora(T2C166)`"Is that right? Then excuse me..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora slowly sat down to the left of me.`;
   `I didn't feel the bench move under her 
weight....`;
   `But looking at her, she was definitely sitting.`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C167)`"We were talking about my voice."`;
   Takeshi`"That's right."`;
   Sora(T2C168)`"Have you ever heard 3D sound?"`;
   Takeshi`"3D sound?"`;
   Sora(T2C169)`"Have you ever listened to music using 
headphones?"`;
   Takeshi`"Of course I have."`;
   Sora(T2C170)`"When you do, where does it sound like the 
music is coming from?"`;
   Takeshi`"Hmmm. Inside my head I guess."`;
   Sora(T2C171)`"That's right. Most people hear the sound as 
if it is reverberating inside the center of 
their head toward the back."`;
   Sora(T2C172)`"But the sound is not actually coming from 
inside your head."`;
   Takeshi`"I guess not."`;
   Sora(T2C173)`"But if you could apply this knowledge and 
adjust the volume from the left and the right 
to accurately simulate this reverberating 
sound..."`;
   Sora(T2C174)`"Then you could create the illusion that a 
sound was coming from any direction - above 
or below, left or right."`;
   Takeshi`"I see. Oh...so you mean the voice converter!"`;
   `I still had both of them in my ears. I 
removed them. They were about the size of the 
tip of my little finger.`;
   `In front of me, Sora's mouth moved soundlessly.`;
   `It was like I couldn't hear her voice.`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But that wasn't all. Then her image started 
to get a little fuzzy.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Huh?"`;
   `When I replaced the voice converters, Sora 
returned to normal.`;

});
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C175)`"The image's position is based on the 
location of the voice converters."`;
   Sora(T2C176)`"So wherever you stand and which ever 
direction you face..."`;
   Sora(T2C177)`"LeMMIH is constantly using sensors around the 
complex that monitor the position of the voice 
converters to the millimeter."`;
   Sora(T2C178)`"So that when I am 60 feet behind you..."`;
   Sora(T2C179)`"My voice will sound as if I am exactly 60 
feet behind you."`;
   Sora(T2C180)`"When I am to the right, it sounds to the 
right. When to the left, it sounds to the 
left."`;
   Sora(T2C181)`"When I am under you, it sounds..."`;
   Takeshi`"Under...when you are under...?"`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   Takeshi`"........."`;
   Sora(T2C182)`"Um, well..."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C183)`"Anyway, that is how it works. Do you 
understand?"`;
   Takeshi`"........."`;
   Sora(T2C184)`"Takeshi, now try to face a little to the 
left."`;
   `I faced to the left as she said.`;
   `Sora stood and moved around to my right.`;
   Sora(T2C185)`"Just a moment ago I said that LeMMIH is 
constantly monitoring your position and the 
direction you are facing..."`;
   Sora(T2C186)`"At the same time, LeMMIH is also monitoring 
the position of your eyeballs."`;
   Sora(T2C187)`"So that even if you move, I still appear in 
the same place."`;
   Sora(T2C188)`"This means that LeMMIH scans the image onto 
your eye in this way."`;
   Takeshi`"So you can be made to suddenly disappear or 
reappear in another place?"`;
   Sora(T2C189)`"Do you want to see it?"`;
   Takeshi`"...No...I think I'll pass."`;

});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I heard someone coming running up to us.`;
   Coco(T2C190)`"Oh, Takepyon!"`;
   Pipi(PIPI_04)`"Bow-wow!"`;

});
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The small footsteps were those of Coco and 
Pipi.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopSFX()
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C191)`"Hey, Takepyon, have you seen Sora around?"`;
   Takeshi`"What're you talking about? She's right in 
front of you..."`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C192)`"Right in front?"`;
   Coco(T2C193)`"But there's nobody here."`;
   Takeshi`"Huh?"`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Coco tilted her head questioningly as she 
said this.`;
   Coco(T2C194)`"Hmmmm..."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C195)`"Oh well. See you later."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `After looking around us, Coco left.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora was still standing right next to me.`;
   `Coco hadn't been able to see Sora.`;
   `No, that wasn't it.`;
   Takeshi`"So that's it..."`;
   Takeshi`"So your image was not being scanned on to 
her retina."`;
   Sora(T2C196)`"There you go. You're quick on the pick up."`;
   Sora(T2C197)`"Normally, my image is scanned on the eyes of 
all five of you."`;
   Sora(T2C198)`"It is coordinated so that it looks to 
everyone like I am in the same place, doing 
the same movement and saying the same thing..."`;
   Sora(T2C199)`"But it is also possible to show you something 
else."`;
   Sora(T2C200)`"For example..."`;
   Coco(T2C201)`"Oh, Sora, there you are."`;
   `Coco's voice came from behind me.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Looking back I saw Coco looking toward the 
flowerbed and speaking.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Oooh, so to Coco, it looks like Sora is in 
front of that flowerbed, huh?"`;
   Takeshi`"Hey? Sora?"`;
   `I didn't see Sora anywhere.`;

});
fgload({ id: 1, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C202)`"Yeah. That's why I wanted to talk to you."`;
   Coco(T2C203)`"Huh? No, no. That's not what I..."`;

});
fgload({ id: 1, name: `CO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C204)`"Oh, I see. You want me to bring it?"`;
   `Coco was continuing her conversation with Sora.`;

});
fgload({ id: 1, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C205)`"Okay. I understand. I'll go tell Nakkyu. See 
you later."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Coco ran off somewhere. Pipi followed her.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Sora(T2C206)`"So I can do this kind of thing as well."`;
   `Sora suddenly appeared before me.`;
   Takeshi`"Waaaa!"`;
   Takeshi`"It's kind of like...you're a ghost."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C207)`"Yes. I hear that a lot."`;
   Sora(T2C208)`"Being in the same place and looking at the 
same thing, only some people can see it and 
some people can't."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C209)`"I've never seen one, but if ghosts really do 
exist..."`;
   Sora(T2C210)`"I imagine they exist much the way that I do."`;
   Takeshi`"Hmmm... Now I get it..."`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   Takeshi`"But there is something that bothers me."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C211)`"What is that?"`;
   Takeshi`"Sora, so you can't be in more than one place 
at a time?"`;
   Takeshi`"For example, you couldn't be in one room 
talking to me and another talking with Coco?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C212)`"Theoretically it is possible."`;
   Sora(T2C213)`"However, the way that I am designed, I can't 
do that."`;
   Takeshi`"Why not?"`;
   Sora(T2C214)`"I imagine it is to help maintain an image of 
reality for visitors."`;
   Sora(T2C215)`"So that there is only one 'Sora' in the 
world."`;
   Sora(T2C216)`"Without that kind of setting, visitors would 
get confused."`;
   Takeshi`"?"`;
   Sora(T2C217)`"That, and it was the policy of my designer."`;
   Sora(T2C218)`"The policy of my designer was to create me 
as a character with an independent 
personality..."`;
   Sora(T2C219)`"That reminds me, I have heard the same thing 
about the 'United Land' characters."`;
   Sora(T2C220)`"There is only one of each character in the 
park."`;
   Sora(T2C221)`"Like in a story...there can't be any one 
character in two places at the same time..."`;

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
   `Sora had more work to do so I saw her to the 
Control Room.`;
   `It seemed strange that Sora, who could 
teleport anywhere instantly was walking...`;
   `Maybe she was doing it to humor me.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"I was wondering about the laser retina 
scan..."`;
   Takeshi`"So if I were in a place that the laser 
couldn't reach, then I couldn't see you?"`;
   Sora(T2C222)`"Of course not. But..."`;

});
showTextbox();
text(() => {
   Sora(T2C223)`"The scanning devices are located in every 
room of the complex and there are mirrors 
embedded in the walls, ceilings and floors to 
reflect the images."`;
   Sora(T2C224)`"So almost no matter where you are, I can be 
displayed."`;
   Takeshi`"So there are no blind spots..."`;
   Sora(T2C225)`"That's the way it is designed."`;
   Sora(T2C226)`"However, there is one major flaw."`;
   Takeshi`"Flaw?"`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG15B1`, transition: 20 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C227)`"I..."`;
   Sora(T2C228)`"I am only 'seen' when someone looks at me."`;
   Takeshi`"What?"`;
   Sora(T2C229)`"I mean, that I cease to exist 
when no one is looking at me."`;
   Sora(T2C230)`"For example, if all five of you were here 
and you all closed your eyes at once..."`;
   Sora(T2C231)`"At that moment, I would cease to exist."`;
   Takeshi`"........."`;

});
if (l_is_coco_route == 0) goto(lbl_0000116a);
if (l_coco_point != 3) goto(lbl_0000116a);
l_choice = 0;
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
   `I casually held my hand up in front of my eyes.`;
   `I covered the view forward looking down near 
my feet.`;
   `There was no sign of Sora next to me. It was 
as if she had vanished, or never been there 
in the first place.`;

});
bgload({ name: `BG15B1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Surprised, I removed my hand and Sora 
reappeared in the corridor.`;
   `The outline of Sora's sandals blurred dimly 
in the water.`;
   Sora(T2C232)`"Someone has to 'see' me."`;
   Sora(T2C233)`"I have to be seen to exist."`;
   Sora(T2C234)`"Vision..."`;
   Sora(T2C235)`"That someone's eye actually creates me."`;
   Sora(T2C236)`"Takeshi..."`;
   Sora(T2C237)`"When you close your eyes, I disappear."`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG16A3`, transition: 20 });
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `When we entered the Control Room I heard her 
being called from the console.`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C238)`"Well, Takeshi..."`;
   Sora(T2C239)`"LeMMIH is calling for me, 
so I will leave and then come back shortly."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And saying that, Sora disappeared.`;
   `Only the three-dimensional hologram depicting 
LeMU hovered silently in the darkness.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_2D`);
