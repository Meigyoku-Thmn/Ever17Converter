l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
setDialogBoxColor(GREEN);
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 0 });
setSceneTitle({ index: 22 });
showTextbox();
text(() => {
   marker; appendText; 
   `It is really hard to wake up after you've 
gone back to sleep.`;
   waitForClick; clearText; marker; appendText; 
   `And when I couldn't get up, I'd get irritated.`;
   waitForClick; clearText; marker; appendText; 
   `The reason I couldn't sleep was beyond me.`;
   waitForClick; clearText; marker; appendText; 
   `'I probably can't sleep because I'm so caught 
up in not being able to sleep?'`;
   waitForClick; clearText; marker; appendText; 
   `A vicious cycle.`;
   waitForClick; clearText; marker; appendText; 
   `(Man, this is really bad...)`;
   waitForClick; clearText; marker; appendText; 
   `I was still groggy, but thankfully I wasn't so 
sleepy it was driving me crazy.`;
   waitForClick; clearText; marker; appendText; 
   `I opened and closed my hand.`;
   waitForClick; clearText; marker; appendText; 
   `My body seemed to be in pretty good shape...`;
   waitForClick; clearText; marker; appendText; 
   `I shook my head a little.`;
   waitForClick; clearText; marker; appendText; 
   `I slapped my cheeks.`;
   waitForClick; clearText; marker; appendText; 
   `Then I breathed in a deep rush of cold air, 
breathed it out, and gradually cleared my head.`;
   waitForClick; clearText; marker; appendText; 
   `Mustering up my strength, I jumped out of bed.`;
   waitForClick; clearText; marker; appendText; 
   `I put the voice alternator back in my ears.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"'Bout time I started cooking breakfast for 
you all!"`;
   waitForClick; clearText; marker; appendText; 
   `But when I looked around,`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...No one's here!?"`;
   waitForClick; clearText; marker; appendText; 
   `The Conference Room was empty.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hold up, what time is it?"`;
   waitForClick; clearText; marker; appendText; 
   `I checked my PDA display anxiously.`;
   waitForClick; clearText; marker; appendText; 
   `It was just shy of 9 a.m...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
clock(`9:11`);
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B000`); appendText; 
   You`"You are so laaaaaaate!"`;
   waitForClick; clearText; marker; appendText; 
   `You was standing guard in front of the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   `The Kid, Coco, and Pipi were sitting and 
waiting.`;
   waitForClick; clearText; marker; sound(`T4B001`); appendText; 
   You`"Late, late, late, late!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B002`); appendText; 
   You`"Takeshi, you're a total mess."`;
   waitForClick; clearText; marker; appendText; 
   `You's cheeks looked a little swollen.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Aw, sorry, my bad..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B003`); appendText; 
   You`"We've been waiting forever!"`;
   waitForClick; clearText; marker; sound(`T4B004`); appendText; 
   You`"I'm starving..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B005`); appendText; 
   You`"Look, if my belly actually sticks to my 
spine, I'm holding you personally 
responsible..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B006`); appendText; 
   You`"Dear Lord!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B007`); appendText; 
   You`"Remember me when I waste away to almost 
nothing and am blown by the wind across the 
Pacific!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're worried about being blown away by the 
WIND?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I think it'd probably take a hurricane to 
carry you off."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B008`); appendText; 
   You`"...You're a real gentleman, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   `You's shoulders sagged, for some reason.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't believe you guys haven't eaten yet."`;
   waitForClick; clearText; marker; appendText; 
   `I looked around at them.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU08BDS`, name2: `CO02ADS`, name3: `KA03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T4B009`); appendText; 
   You`"Well, you see..."`;
   waitForClick; clearText; marker; sound(`T4B010`); appendText; 
   Coco`"We did try..."`;
   waitForClick; clearText; marker; sound(`T4B011`); appendText; 
   Kid`"I'd say we tried a little too hard..."`;
   waitForClick; clearText; marker; sound(`PIPI_03`); appendText; 
   Pipi`"Woof?"`;
   waitForClick; clearText; marker; appendText; 
   `They looked at one another with a mix of 
conflicting expressions.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; marker; appendText; 
   `I cocked my head quizzically at them and went 
around into the kiosk's kitchen.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's going on here?"`;
   waitForClick; clearText; marker; appendText; 
   `There was an impossibly delicious smell...`;
   waitForClick; clearText; marker; appendText; 
   `And a blackened, charred piece of fried tuna.`;
   waitForClick; clearText; marker; appendText; 
   `Red, black, green - everything was splattered 
with a mysterious fluid.`;
   waitForClick; clearText; marker; appendText; 
   `The sandwich buns were colorful and sticky.`;
   waitForClick; clearText; marker; appendText; 
   `The lettuce that normally went into the 
chicken sandwiches had been diced.`;
   waitForClick; clearText; marker; appendText; 
   `I'd never seen such a shocking kitchen.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What on earth happened here!?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO09ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B012`); appendText; 
   Coco`"Nee, hee, hee"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B013`); appendText; 
   Coco`"We tried dividing up the work!"`;
   waitForClick; clearText; marker; sound(`T4B014`); appendText; 
   Coco`"Hey Takepyon, why don't you try some too."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey! Wait, wait!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is this food? You can actually eat this?"`;
   waitForClick; clearText; marker; sound(`T4B015`); appendText; 
   Coco`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey Kid - you serious?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B016`); appendText; 
   Kid`"Well, sort of..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sort of?"`;
   waitForClick; clearText; marker; sound(`T4B017`); appendText; 
   Kid`"I don't exactly know if it'll taste GOOD, 
but..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why did you stop talking?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B018`); appendText; 
   Coco`"Nee, hee, hee!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B019`); appendText; 
   Coco`"Now, now, let's not be critical."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   `Apparently there had been a number of reasons 
why I was in charge of cooking. `;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 60 });
bgload({ name: `BG21B1`, transition: 10 });
clock(`10:14`);
showTextbox();
text(() => {
   marker; sound(`T4B020`); appendText; 
   You`"Alrighty then."`;
   waitForClick; clearText; marker; sound(`T4B021`); appendText; 
   You`"Time for a post-meal break?"`;
   waitForClick; clearText; marker; appendText; 
   `They all trooped over to the rest area.`;
   waitForClick; clearText; marker; appendText; 
   `I had safely finished eating...but my stomach 
was still growling.`;
   waitForClick; clearText; marker; appendText; 
   `Would I be okay?`;
   waitForClick; clearText; marker; appendText; 
   `Doing the dishes was an unpleasant job, but 
with everyone's cooperation we got the ordeal 
over and done with.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B022`); appendText; 
   Coco`"Hey, hey, Takepyon."`;
   waitForClick; clearText; marker; sound(`T4B023`); appendText; 
   Coco`"I took Tsugumi's sandwich over to her."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, thanks."`;
   waitForClick; clearText; marker; appendText; 
   `I patted Coco's head.`;
   waitForClick; clearText; marker; appendText; 
   `Before I tackled the clean up, I had picked 
out some decent sandwiches and had Coco take 
them over.`;
   waitForClick; clearText; marker; appendText; 
   `Whether the still-recovering Tsugumi would 
actually eat them was another story...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Coco, was Tsugumi eating alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B024`); appendText; 
   Coco`"Yeah, she said she was really hungry. I 
think she ate three."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hm. Well, I guess she's gotten well enough 
to eat then."`;
   waitForClick; clearText; marker; sound(`T4B025`); appendText; 
   Coco`"She's getting better pretty fast, don't you 
think?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `That Tsugumi...`;
   waitForClick; clearText; marker; appendText; 
   `The night before, she'd said she wanted to 
die. `;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_000003b4);
showTextbox();
text(() => {
   marker; appendText; 
   `The fact that she was eating meant that at 
least her body was determined to live.`;
   waitForClick; clearText; marker; appendText; 
   `If she would just continue this tendency and 
get well, I thought there'd be no more 
problems...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `Wait, that was a contradiction.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `"All the things that keep us alive -- the 
things that drive us -- are filthy."`;
   waitForClick; clearText; marker; appendText; 
   `"There is no such thing as a life of purity."`;
   waitForClick; clearText; marker; appendText; 
   `The appetites necessary to sustain life are 
evil.`;
   waitForClick; clearText; marker; appendText; 
   `But then...`;
   waitForClick; clearText; marker; appendText; 
   `After all, she demolished three whole 
sandwiches without even flinching?`;
   waitForClick; clearText; marker; appendText; 
   `Well, then again, I was the one who told Coco 
to take the sandwiches down, because 'It'll 
be bad if she doesn't eat something...'`;
   waitForClick; clearText; marker; appendText; 
   `So I was contradicting my earlier stance too, 
but...`;
   waitForClick; clearText; marker; appendText; 
   `Something strange was going on!`;
   waitForClick; clearText; marker; appendText; 
   `What's the deal?`;
   waitForClick; clearText; marker; appendText; 
   `The word 'hypocrite' came to mind...`;
   waitForClick; clearText; marker; appendText; 
   `Who was the hypocrite now, Tsugumi!?`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi...what were you thinking!!`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't help but feel resentment rising in 
my chest.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B026`); appendText; 
   Coco`"What the matter, Takepyon?"`;
   waitForClick; clearText; marker; sound(`T4B027`); appendText; 
   Coco`"Your face got all scary for a moment..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, it's nothing."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `I didn't want to show my sullen mood.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't even want to be thinking about her 
anymore.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Waving with one hand, I tried my best to 
sweep my mood away. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B028`); appendText; 
   Coco`"Oh, good—"`;
   waitForClick; clearText; marker; sound(`T4B029`); appendText; 
   Coco`"I thought maybe those sandwiches had given 
you a tummy ache!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why! Did you put something in there that 
would make me sick?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B030`); appendText; 
   Coco`"Well, Takepyon, do you really want to know?"`;
   waitForClick; clearText; marker; sound(`T4B031`); appendText; 
   Coco`"You won't be sorry, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, stop! Don't tell me, I don't want to 
know."`;
   waitForClick; clearText; marker; appendText; 
   `Just imagining the possibilities was making my 
stomach hurt...`;
   waitForClick; clearText; 
});
goto(lbl_000004cd);
let lbl_000003b4;
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi, was probably always just pretending 
to be tough.`;
   waitForClick; clearText; marker; appendText; 
   `Distancing people by saying awful things was 
one of her bad habits.`;
   waitForClick; clearText; marker; appendText; 
   `If she were eating properly...it must be 
proof that she wanted to live.`;
   waitForClick; clearText; marker; appendText; 
   `As long as she recovered completely, there 
would be no more problems.`;
   waitForClick; clearText; marker; appendText; 
   `(Hey, it's a good thing.)`;
   waitForClick; clearText; marker; appendText; 
   `I felt my chest relax in relief.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B032`); appendText; 
   Coco`"You just got a happy look on your face, 
Takepyon."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, really?"`;
   waitForClick; clearText; marker; sound(`T4B033`); appendText; 
   Coco`"You were really worrying about Tsugumi, 
huh...?"`;
   waitForClick; clearText; marker; appendText; 
   `Feeling so transparent made me want to 
conceal the truth.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no, it's not that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I was just thinking that those sandwiches 
were pretty good after all."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B034`); appendText; 
   Coco`"Wow, really!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B035`); appendText; 
   Coco`"Oh, good!"`;
   waitForClick; clearText; marker; sound(`T4B036`); appendText; 
   Coco`"Actually, I made your sandwich all by my 
very own self!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B037`); appendText; 
   Coco`"Hee hee, you see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B038`); appendText; 
   Coco`"I used lots of my secret sauce!"`;
   waitForClick; clearText; marker; sound(`T4B039`); appendText; 
   Coco`"Mayo, mustard, horseradish..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B040`); appendText; 
   Coco`"And then some salt and pepper, and a dab of 
soy sauce, and lots of butter..."`;
   waitForClick; clearText; marker; sound(`T4B041`); appendText; 
   Coco`"Then when it was done, cinnamon and cardamon 
and turmeric and nutmeg and vanilla, all 
shaken together and poured!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B042`); appendText; 
   Coco`"And then, then...what was it again?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B043`); appendText; 
   Coco`"Allspice, and curry, and hot sauce...and some 
tube of something Pipi found, we used lots of 
that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B044`); appendText; 
   Coco`"And then, we stuck the lettuce in between!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B045`); appendText; 
   Coco`"Magnificent, right? And pretty, too."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B046`); appendText; 
   Coco`"Well, if I hadn't tasted it, I might have 
been scared off..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B047`); appendText; 
   Coco`"Wow! You mean it tasted okay...?"`;
   waitForClick; clearText; marker; sound(`T4B048`); appendText; 
   Coco`"Well, maybe I should make the next meal, too?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nah, you don't have to do that.  I'll keep 
doing the cooking..."  `;
   waitForClick; clearText; marker; appendText; 
   `Just listening to her was making my gut ache...`;
   waitForClick; clearText; 
});
let lbl_000004cd;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Gathering my wits, I went to the bench where 
You and the Kid were sitting.`;
   waitForClick; clearText; marker; appendText; 
   `Coco and Pipi trotted along behind me.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15BDS`, name2: `KA11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B049`); appendText; 
   Kid`"Hey You, where did Sora go?"`;
   waitForClick; clearText; marker; sound(`T4B050`); appendText; 
   You`"She went to go look again to see if she can 
find some clue to help us escape."`;
   waitForClick; clearText; marker; sound(`T4B051`); appendText; 
   You`"From what she said, the sensors on the third 
floor are working a little bit better..."`;
   waitForClick; clearText; marker; sound(`T4B052`); appendText; 
   Kid`"Hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Did you see Sora, You?"`;
   waitForClick; clearText; marker; appendText; 
   `I cut in front of them.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU01BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B053`); appendText; 
   You`"Huh? Oh yeah, for a minute, before you came 
to the kiosk."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I see...did Sora say anything else? Did she 
seem different somehow?"`;
   waitForClick; clearText; marker; sound(`T4B054`); appendText; 
   You`"No, not really. Same as always."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, that's good."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05BDM`, name2: `KA07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B055`); appendText; 
   You`"Hm?...Takeshi, did you do something to her?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"N-no! Nothing!"`;
   waitForClick; clearText; marker; sound(`T4B056`); appendText; 
   You`"You're acting pretty suspicious. Why'd you 
say, 'well that's good...'?"`;
   waitForClick; clearText; marker; sound(`T4B057`); appendText; 
   You`"Not that I'm the type to hound you with 
questions or anything."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   You`"......"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU02BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B058`); appendText; 
   You`"So, what's the story, my dear Mr. Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   `She laughed and pretended to hold a mike to 
my face.`;
   waitForClick; clearText; marker; sound(`T4B059`); appendText; 
   You`"Can you tell me how you're feeling right now?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't care what happens, I'm not talking to 
you."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05BDM`, name2: `KA07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B060`); appendText; 
   You`"This is reporter You Tanaka, reporting live."`;
   waitForClick; clearText; marker; appendText; 
   `She withdrew her invisible mike.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B061`); appendText; 
   Kid`"Hey, that reminds me..."`;
   waitForClick; clearText; marker; appendText; 
   `The Kid muttered, glancing at me.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B062`); appendText; 
   Kid`"Apparently Takeshi sneaked out of his room 
in the middle of the night."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B063`); appendText; 
   You`"Oho! Relevant circumstantial evidence!"`;
   waitForClick; clearText; marker; appendText; 
   `This time the invisible mike was pointed at 
the Kid.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B064`); appendText; 
   Kid`"I thought maybe you were sleepwalking."`;
   waitForClick; clearText; marker; sound(`T4B065`); appendText; 
   Kid`"But you ran up the emergency stairs, so..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B066`); appendText; 
   Kid`"I went to sleep right after that, but it's 
been bothering me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B067`); appendText; 
   You`"What do you have to say for yourself, Mr. 
Takeshi?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B068`); appendText; 
   Kid`"If you don't want to talk about it, don't 
worry..."`;
   waitForClick; clearText; marker; sound(`T4B069`); appendText; 
   Coco`"Huh? Wha-what? Are you talking about 
something fun?"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Woof! Woof!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `CO06ADS`, name2: `YU02BDS`, name3: `KA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   `All of their eyes were fixed on me.`;
   waitForClick; clearText; marker; appendText; 
   `Bathed in their attention, there was no way 
for me to escape the mike.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...*sigh*"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, ALL RIGHT, I'll confess."`;
   waitForClick; 
});
choice(
   `I went to see Tsugumi`,
   `I was meeting Sora`,
   `I went to the bathroom`,
);
switch (l_choice) {
   case 0: goto(lbl_00000691);
   case 1: goto(lbl_0000070a);
   case 2: goto(lbl_00000761);
}
let lbl_00000691;
l_tsugumi_point += 1;
l_confessed_the_truth_in_4th_day = 1;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I went to see Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   `I told the truth.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADS`, name2: `YU05BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B070`); appendText; 
   You`"Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I was going to take a walk when Sora came up 
and told me that Tsugumi had woken up."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I didn't want her to start wandering around 
and hurt herself.  So I rushed right over to 
the infirmary..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU08BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B071`); appendText; 
   You`"Oh...is that it?"`;
   waitForClick; clearText; marker; sound(`T4B072`); appendText; 
   You`"Actually, I guess I did heard pretty much 
the same thing from Sora. How Tsugumi woke up."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What, so you knew all along?"`;
   waitForClick; clearText; marker; sound(`T4B073`); appendText; 
   You`"Sorry, just thought I'd give you a hard 
time..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Man..."`;
   waitForClick; clearText; marker; sound(`T4B074`); appendText; 
   Kid`"But you should have called us, too."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hm? You're right, I wasn't thinking."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I don't know about you, Kid, but You 
was dead to the world.  I didn't figure it'd 
be any good to try to wake you guys up."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B075`); appendText; 
   You`"Hey."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
goto(lbl_00000835);
let lbl_0000070a;
l_sora_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I was just meeting Sora."`;
   waitForClick; clearText; marker; appendText; 
   `I tried to be as honest as possible.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADS`, name2: `YU05BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B076`); appendText; 
   You`"Oho."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I went for a walk and ran into her. I 
was awake, so we jogged to Zweite stock 
together." `;
   waitForClick; clearText; marker; sound(`T4B077`); appendText; 
   Kid`"It didn't sound like jogging. More like you 
were RUNNING."`;
   waitForClick; clearText; marker; sound(`T4B078`); appendText; 
   Kid`"The sound really echoed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, you know Sora, she can run so fast, I 
had to hurry just to keep up."`;
   waitForClick; clearText; marker; sound(`T4B079`); appendText; 
   You`"Forget fast...Sora can run?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
goto(lbl_000007a9);
let lbl_00000761;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I just went to the bathroom."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `YU05BDS`, name2: `KA06ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B080`); appendText; 
   Kid`"Why did you wait, and then run off?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"At a certain point...it got pretty urgent."`;
   waitForClick; clearText; marker; sound(`T4B081`); appendText; 
   Kid`"You were gone an awful long time."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Look, sometimes it takes me a long time..."`;
   waitForClick; clearText; marker; sound(`T4B082`); appendText; 
   Kid`"But why'd you go all the way upstairs?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I like the upstairs toilet better."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The one in the back. The color, the shape, 
the way it feels when you sit down..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
let lbl_000007a9;
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Let's not get into the details, Kid."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_01`, a1: 0, volume: 90 });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T4B083`); appendText; 
   Kid`"Ouch."`;
   waitForClick; clearText; marker; appendText; 
   `I cuffed him on the head.`;
   waitForClick; clearText; marker; sound(`T4B084`); appendText; 
   Kid`"Alright, alright."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18BDM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B085`); appendText; 
   You`"Yeah, that's an invasion of privacy!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Listen You, you're the one that started this, 
with your whole reporter act."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B086`); appendText; 
   You`"Who, me?"`;
   waitForClick; clearText; marker; appendText; 
   `She stuck out her tongue.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
let lbl_00000835;
showTextbox();
text(() => {
   marker; appendText; 
   `No one seemed inclined to question me 
further, so that solved that. Everyone milled 
around the rest area.`;
   waitForClick; clearText; marker; appendText; 
   `I felt the energy drain out of me. I wasn't 
tense.  But I wasn't relaxed either.`;
   waitForClick; clearText; marker; appendText; 
   `Maybe I was just tired.`;
   waitForClick; clearText; marker; appendText; 
   `I sat quietly, thinking...`;
   waitForClick; clearText; marker; appendText; 
   `When I couldn't sleep, I had been pondering 
all sorts of things.`;
   waitForClick; clearText; marker; appendText; 
   `About Tsugumi...`;
   waitForClick; clearText; marker; appendText; 
   `And Sora...`;
   waitForClick; clearText; 
});
if (l_sora_flag == 0) goto(lbl_00000858);
showTextbox();
text(() => {
   marker; appendText; 
   `Sora made me think about all kinds of 
questions.`;
   waitForClick; clearText; marker; appendText; 
   `What was love?`;
   waitForClick; clearText; marker; appendText; 
   `What were people?`;
   waitForClick; clearText; marker; appendText; 
   `What was the meaning of life?`;
   waitForClick; clearText; marker; appendText; 
   `What was she herself...?`;
   waitForClick; clearText; marker; appendText; 
   `She was more worried about things than I was.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know the answers. The stress of so 
many unknowns was starting to get to me.`;
   waitForClick; clearText; 
});
goto(lbl_0000085d);
let lbl_00000858;
showTextbox();
text(() => {
   marker; appendText; 
   `I may have hurt Sora's feelings.`;
   waitForClick; clearText; marker; appendText; 
   `She always smiled and said she didn't mind, 
but...`;
   waitForClick; clearText; marker; appendText; 
   `What would I say when I saw her?`;
   waitForClick; clearText; 
});
let lbl_0000085d;
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T4B087`); appendText; 
   You`"Which is why..."`;
   waitForClick; clearText; marker; appendText; 
   `Hearing You's voice, I returned to earth with 
a jolt.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 1, volume: 100 });
fgload({ id: 1, name: `YU15BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B088`); appendText; 
   You`"So many Greek myths have been handed down to 
us."`;
   waitForClick; clearText; marker; appendText; 
   `You was standing in the middle of the room, 
apparently giving a lecture.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO11ADS`, name2: `KA11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `The Kid, Coco and Pipi were sitting on 
benches, listening obediently.`;
   waitForClick; clearText; marker; appendText; 
   `I ended up listening myself.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B089`); appendText; 
   You`"You see that statue over there? It's rather 
a lovely piece..."`;
   waitForClick; clearText; marker; appendText; 
   `She turned around and pointed at the statue 
in a corner of the rest area.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B090`); appendText; 
   You`"The beautiful statue and the sculptor who 
loved her...I'll tell you their story."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B091`); appendText; 
   You`"Ahem."`;
   waitForClick; clearText; marker; appendText; 
   `She gave a melodramatic cough.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Then she turned back to the group and began 
gesturing and talking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B092`); appendText; 
   You`"Once upon a time, in a place called Cyprus, 
there was a young sculptor."`;
   waitForClick; clearText; marker; sound(`T4B093`); appendText; 
   You`"His name was Pygmalion. He's been called the 
King of Cyprus..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B094`); appendText; 
   You`"But in these myths they tend to call anyone 
a king or a god, so we won't go there for a 
bit...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B095`); appendText; 
   You`"Anyway, there was an excellent sculptor named 
Pygmalion. And then...um..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B096`); appendText; 
   You`"His statues were incredible. They were so 
vital and full of life, they looked as though 
they might come to life at any moment."`;
   waitForClick; clearText; marker; sound(`T4B097`); appendText; 
   You`"But Pygmalion couldn't seem to get 
interested in ladies."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B098`); appendText; 
   You`"The people around him wondered, why a 
brilliant sculptor like him couldn't land a 
wife."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B099`); appendText; 
   You`"But Pygmalion seemed only to care about 
making his statues."`;
   waitForClick; clearText; marker; sound(`T4B100`); appendText; 
   You`"Then one day, he finished the nude figure of 
a woman."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B101`); appendText; 
   You`"It was a wonderful piece, absolutely 
charming, and even he himself thought it 
might be his ultimate masterpiece."`;
   waitForClick; clearText; marker; sound(`T4B102`); appendText; 
   You`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B103`); appendText; 
   You`"As he looked on her beautiful, almost living, 
face..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B104`); appendText; 
   You`"He realized that she was naked, and became 
embarrassed..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B105`); appendText; 
   You`"He brought clothes for her and dressed her."`;
   waitForClick; clearText; marker; sound(`T4B106`); appendText; 
   You`"And when it got dark, he was so besotted 
with her that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B107`); appendText; 
   You`"He brought her food to eat, talked to her 
and even slept next to her..."`;
   waitForClick; clearText; marker; sound(`T4B108`); appendText; 
   You`"It was the first time he had ever 
experienced true love."`;
   waitForClick; clearText; marker; sound(`T4B109`); appendText; 
   You`"Love for the statue he himself had created..."`;
   waitForClick; clearText; marker; sound(`T4B110`); appendText; 
   You`"He poured all the love that he had into her. 
He believed that one day, she would speak to 
him..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B111`); appendText; 
   You`"But in the meantime, he neglected his work, 
he forgot to eat and sleep...and Pygmalion 
began to waste away."`;
   waitForClick; clearText; marker; sound(`T4B112`); appendText; 
   You`"People began to worry that he would die...so 
they prayed to the gods."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B113`); appendText; 
   You`"And Pygmalion was agonizing as well..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B114`); appendText; 
   You`"He was so sad to see her unable to speak, or 
eat, or sleep..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B115`); appendText; 
   You`"He thought that when he himself became old 
and went to heaven..."`;
   waitForClick; clearText; marker; sound(`T4B116`); appendText; 
   You`"She would have to continue standing there, 
just waiting to decay..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B117`); appendText; 
   You`"To him, it was unthinkable—"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B118`); appendText; 
   You`"If he couldn't be bound to her, it would be 
better to throw himself off a cliff."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B119`); appendText; 
   You`"If only she was a real woman, with blood 
running through her veins..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B120`); appendText; 
   You`"It went on something like that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B121`); appendText; 
   You`"Until his prayers reached Aphrodite, the 
goddess of love."`;
   waitForClick; clearText; marker; sound(`T4B122`); appendText; 
   You`"Aphrodite came down to him and told him to 
kiss his beloved statue."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B123`); appendText; 
   You`"When he gently kissed her..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B124`); appendText; 
   You`"Her skin flushed pink, her eyes opened and 
she turned into a living woman."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B125`); appendText; 
   You`"A woman as beautiful as the statue had 
been..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B126`); appendText; 
   You`"So they married, and even had children."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B127`); appendText; 
   You`"He kept making even more beautiful 
sculptures for temples around the world, and 
they lived..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B128`); appendText; 
   You`"Happily ever after."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Finally finished with her long story, You 
pinched her skirt and curtsied.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Coco and the Kid applauded her.`;
   waitForClick; clearText; marker; sound(`T4B129`); appendText; 
   Kid`"Hey, that was pretty interesting."`;
   waitForClick; clearText; marker; sound(`T4B130`); appendText; 
   Coco`"Bravo, bravo, bravissima..."`;
   waitForClick; clearText; marker; appendText; 
   `As for me...`;
   waitForClick; 
});
choice(
   `Right, happily ever after`,
   `Watch silently`,
   `Voice disagreement`,
);
switch (l_choice) {
   case 0: goto(lbl_00000bbf);
   case 1: goto(lbl_00000bfb);
   case 2: goto(lbl_00000c0f);
}
let lbl_00000bbf;
l_sora_point += 1;
playSFX({ name: `SE10_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Right, happily ever after..."`;
   waitForClick; clearText; marker; appendText; 
   `I applauded with them.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Never knew you knew so much, You."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B131`); appendText; 
   You`"Well."`;
   waitForClick; clearText; marker; appendText; 
   `She drew up proudly.`;
   waitForClick; clearText; marker; sound(`T4B132`); appendText; 
   You`"I know a little about myth and folklore."`;
   waitForClick; clearText; marker; appendText; 
   `She raised a finger in front of her face, 
looking demure.`;
   waitForClick; clearText; 
});
goto(lbl_00000c59);
let lbl_00000bfb;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Hunh.`;
   waitForClick; clearText; marker; appendText; 
   `I thought it was a pretty scholarly talk...`;
   waitForClick; clearText; marker; appendText; 
   `But I kept quiet and watched the faces of 
everyone.`;
   waitForClick; clearText; marker; appendText; 
   `With her finger still extended in front of 
her face, You spoke confidently.  `;
   waitForClick; clearText; 
});
goto(lbl_00000c59);
let lbl_00000c0f;
showTextbox();
text(() => {
   marker; appendText; 
   `I raised my hand and declared... `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I object—!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B133`); appendText; 
   You`"Yes?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's happily ever after about that story?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It doesn't make any sense to me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B134`); appendText; 
   You`"Why not?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Pygmalion just had an obsession with his 
sculpture..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"He didn't work, he stayed inside talking to 
her..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Thinking, 'Oh, if only my statue was a real, 
beautiful woman'..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What a dark, depressing story...Pygmalion..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't see anything happy about that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"He just happened to have his selfish request 
granted by a goddess. The end."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B135`); appendText; 
   You`"Listen, you don't get it at all..."`;
   waitForClick; clearText; marker; appendText; 
   `You shook her finger at me.`;
   waitForClick; clearText; marker; sound(`T4B136`); appendText; 
   You`"That's not the point of the story, Takeshi"`;
   waitForClick; clearText; marker; appendText; 
   `She threw back her shoulders and started 
talking again.`;
   waitForClick; clearText; 
});
let lbl_00000c59;
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B137`); appendText; 
   You`"The story of Pygmalion..."`;
   waitForClick; clearText; marker; sound(`T4B138`); appendText; 
   You`"Shows that if you hope and ask and 
persevere, your wish will come true."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B139`); appendText; 
   You`"His longing was answered because he put his 
heart into his sculpture, and then loved her, 
believing that she would speak to him one 
day..."`;
   waitForClick; clearText; marker; sound(`T4B140`); appendText; 
   Kid`"So that's it..."`;
   waitForClick; clearText; marker; sound(`T4B141`); appendText; 
   Coco`"Wow..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B142`); appendText; 
   You`"Okay, this is a little different, but this 
guy named Rosenthal wrote about something 
called the 'Pygmalion effect'."`;
   waitForClick; clearText; marker; appendText; 
   `She was acting like a professor on a soapbox.`;
   waitForClick; clearText; marker; appendText; 
   `It seemed like she was overdoing the whole 
thing.`;
   waitForClick; clearText; marker; appendText; 
   `But her ridiculous expressions were so 
amusing, I got drawn in.`;
   waitForClick; clearText; marker; sound(`T4B143`); appendText; 
   You`"It's not quite the same as the placebo 
effect."`;
   waitForClick; clearText; marker; sound(`T4B144`); appendText; 
   You`"But both of them involve believing in 
something."`;
   waitForClick; clearText; marker; sound(`T4B145`); appendText; 
   You`"So they both have to do with our chances of 
survival."`;
   waitForClick; clearText; marker; sound(`T4B146`); appendText; 
   You`"Just because the sushi in the display case 
is made of plastic, doesn't mean the sushi 
inside is cheap!!"`;
   waitForClick; clearText; marker; sound(`T4B147`); appendText; 
   Kid`"Whoa?!"`;
   waitForClick; clearText; marker; sound(`T4B148`); appendText; 
   Coco`"Wow..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `Her talk seemed to have been derailed like a 
nasty train wreck. I had no idea what she 
meant.`;
   waitForClick; clearText; marker; appendText; 
   `But the Kid and Coco were a rapt audience.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `BG26B3L`, transition: 20 });
playBGM({ num: 2, volume: 100 });
clock(`11:10`);
showTextbox();
text(() => {
   marker; appendText; 
   `Several minutes later...`;
   waitForClick; clearText; marker; appendText; 
   `Sometime during You's long speech, my brain 
started working again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_07`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `We all headed up the emergency stairs to the 
second floor.`;
   waitForClick; clearText; marker; sound(`T4B149`); appendText; 
   Coco`"Shall we all go and see Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T4B150`); appendText; 
   Kid`"Yeah, I'd like to know how she's doing."`;
   waitForClick; clearText; marker; sound(`T4B151`); appendText; 
   You`"Me too. Let's all go check up on her."`;
   waitForClick; clearText; marker; appendText; 
   `Coco's proposal came out of the blue, but 
everyone agreed and headed upstairs.`;
   waitForClick; clearText; 
});
if (l_confessed_the_truth_in_4th_day == 0) goto(lbl_00000dad);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Wonder how she's doing?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B152`); appendText; 
   You`"In any case, she needs rest."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, worrying about her won't make her 
better any faster."`;
   waitForClick; clearText; marker; sound(`T4B153`); appendText; 
   Kid`"Sora would let us know if anything had 
happened to her, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B154`); appendText; 
   You`"Yeah. And LeMMIH's always guarding the data 
in the infirmary's medical computer."`;
   waitForClick; clearText; marker; sound(`T4B155`); appendText; 
   You`"So since LeMMIH hasn't come to us with any 
news, it means that Tsugumi is probably 
sleeping peacefully."`;
   waitForClick; clearText; marker; sound(`T4B156`); appendText; 
   Kid`"Well, that's a relief."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B157`); appendText; 
   Coco`"Right, nothing to worry abouteroon!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Say, Coco?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B158`); appendText; 
   Coco`"Yeah, what?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What language is 'abouteroon'?"`;
   waitForClick; clearText; marker; sound(`T4B159`); appendText; 
   Coco`"Coco-ese."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B160`); appendText; 
   Coco`"Coco-ese!"`;
   waitForClick; clearText; marker; sound(`T4B161`); appendText; 
   Coco`"Whoah! Obstinate stubbornness! Geezers going 
swimming in the winter!"`;
   waitForClick; clearText; marker; sound(`T4B162`); appendText; 
   Coco`"There's abouteroo, too."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......."`;
   waitForClick; clearText; marker; sound(`PIPI_03`); appendText; 
   Pipi`"Waroof?"`;
   waitForClick; clearText; marker; appendText; 
   `Coco was always in upbeat mode...`;
   waitForClick; clearText; 
});
goto(lbl_00000e0e);
let lbl_00000dad;
showTextbox();
text(() => {
   marker; sound(`T4B163`); appendText; 
   You`"Takeshi, didn't you already see Tsugumi when 
she woke up last night?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, yeah."`;
   waitForClick; clearText; marker; appendText; 
   `Being asked forced me to remember the night 
before.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi saying "I want to die..."`;
   waitForClick; clearText; marker; appendText; 
   `But then she'd eaten three sandwiches...`;
   waitForClick; clearText; marker; appendText; 
   `If she would just recover...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait up, You! You knew that I'd seen 
Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B164`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; sound(`T4B165`); appendText; 
   You`"I heard from Sora this morning. About 
Tsugumi's condition, and your panicked 
running."`;
   waitForClick; clearText; marker; sound(`T4B166`); appendText; 
   You`"That midnight emergency staircase dash the 
Kid was talking about...it was Tsugumi, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, you listen here!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A minute ago you were pretending to be a 
reporter, trying to get me to tell you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why do you ask about something you already 
know?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU12BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B167`); appendText; 
   You`"It's your fault for trying to be so 
mysterious! Hee hee..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-y-you little...."`;
   waitForClick; clearText; marker; appendText; 
   `I hated to admit it, but she had taken me for 
a ride.`;
   waitForClick; clearText; marker; appendText; 
   `And I had no comeback.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, uh, how do you think Tsugumi's doing? 
Aren't you worried about her?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B168`); appendText; 
   You`"He's trying change the subject."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up. If you know something, say it 
already."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B169`); appendText; 
   You`"Well, LeMMIH is always guarding the 
infirmary's medical computer data..."`;
   waitForClick; clearText; marker; sound(`T4B170`); appendText; 
   You`"Since LeMMIH hasn't come to us with any 
news, it must mean that Tsugumi's sleeping 
peacefully, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, that's a relief."`;
   waitForClick; clearText; 
});
let lbl_00000e0e;
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG26A3L`, transition: 20 });
bgload({ name: `BG08A1`, transition: 20 });
setSceneTitle({ index: 23 });
clock(`11:26`);
showTextbox();
text(() => {
   marker; appendText; 
   `We reached the infirmary.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B171`); appendText; 
   Kid`"We should have brought flowers."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And where do you think you'll find flowers?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B172`); appendText; 
   Kid`"Oh yeah, that's right!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Entering first, I mustered a cheerful voice.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You alive?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I had to force them, but I dragged everyone 
along to see you!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_02`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   `Pop!`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ow!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B173`); appendText; 
   You`"Listen Takeshi, don't be mean like that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...You don't have to push and poke me..."`;
   waitForClick; clearText; marker; appendText; 
   `Exchanging stupid banter, we approached the 
bed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I did it on purpose, as a joke..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You know, joke around, cheer her up a little 
bit..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B174`); appendText; 
   You`"Really? I don't know..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B175`); appendText; 
   Kid`"H-hey!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `The Kid had stopped suddenly.`;
   waitForClick; clearText; marker; appendText; 
   `He was pointing at the bed in the back.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the matter, Kid?  You discover a new 
species of something?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B176`); appendText; 
   Kid`"Tsugumi's..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T4B177`); appendText; 
   Kid`"Tsugumi's gone..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `CO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B178`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; sound(`T4B179`); appendText; 
   Coco`"Whahoo?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What!?"`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I ran to the bed in shock.`;
   waitForClick; clearText; marker; appendText; 
   `Everyone followed right behind me.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10E`, transition: 20 });
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"She..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She's gone! She's really not here!"`;
   waitForClick; clearText; marker; appendText; 
   `The bed was completely empty.`;
   waitForClick; clearText; marker; appendText; 
   `The covers were just the way they had been.`;
   waitForClick; clearText; marker; appendText; 
   `The pillow was the same.`;
   waitForClick; clearText; marker; appendText; 
   `But the IV tube and the heart monitor had 
been torn up and scattered around.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the...why didn't LeMMIH pick up on this?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"LeMMIH was monitoring Tsugumi's data, right 
You?  What happened?"`;
   waitForClick; clearText; marker; sound(`T4B180`); appendText; 
   You`"I don't know...I have no idea."`;
   waitForClick; clearText; marker; appendText; 
   `She averted her eyes from mine.`;
   waitForClick; clearText; marker; sound(`T4B181`); appendText; 
   You`"Hey...!?"`;
   waitForClick; clearText; marker; sound(`T4B182`); appendText; 
   You`"Look at that!"`;
   waitForClick; clearText; marker; appendText; 
   `She pointed to the corner of the room.`;
   waitForClick; clearText; marker; appendText; 
   `Her finger was trembling a little.`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   `The cord was torn off the medical computer, 
and the monitor had been smashed to pieces. `;
   waitForClick; clearText; marker; appendText; 
   `There had been an electrical short, and there 
was a burning stench around the area.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B183`); appendText; 
   You`"Who could have done this...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's what I'd like to know..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B184`); appendText; 
   Coco`"Um, um, what's that?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `This time Coco had found something.`;
   waitForClick; clearText; marker; appendText; 
   `Under the computer console, there were some 
bandages and a long, skinny case of some sort. `;
   waitForClick; clearText; marker; appendText; 
   `A white, hard case...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05BDM`, name2: `CO08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B185`); appendText; 
   Coco`"Is this...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's Tsugumi's brace, right?"`;
   waitForClick; clearText; marker; sound(`T4B186`); appendText; 
   You`"You're right. It's Tsugumi's."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B187`); appendText; 
   Kid`"Which means..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She took off her own brace and smashed up the 
computer."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She got out of bed, smashed the computer and 
then left the room..."`;
   waitForClick; clearText; marker; appendText; 
   `My thoughts leaped right out of my mouth.`;
   waitForClick; clearText; marker; appendText; 
   `It was hard to believe...`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B188`); appendText; 
   Coco`"Really!?"`;
   waitForClick; clearText; marker; sound(`T4B189`); appendText; 
   Coco`"But when I brought her the sandwiches, she 
still looked like she was in pain, in bed..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B190`); appendText; 
   Coco`"You really think that Tsugumi...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well what else could it be?"`;
   waitForClick; clearText; marker; sound(`T4B191`); appendText; 
   Kid`"Maybe someone ran off with her...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Someone...like who? Who's here besides us?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B192`); appendText; 
   You`"It's crazy either way!"`;
   waitForClick; clearText; marker; appendText; 
   `You was shouting.`;
   waitForClick; clearText; marker; sound(`T4B193`); appendText; 
   You`"How could Tsugumi even walk on that leg?"`;
   waitForClick; clearText; marker; sound(`T4B194`); appendText; 
   You`"It was a serious injury! It should take 
over two months to heal!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B195`); appendText; 
   You`"In fact, in her condition, she shouldn't 
even be able to get out of bed..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B196`); appendText; 
   You`"And it's strange that LeMMIH didn't respond, 
even if the computer is broken..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B197`); appendText; 
   You`"Even if someone had taken her out of here..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B198`); appendText; 
   You`"The sensor on the ceiling should have picked 
it up..."`;
   waitForClick; clearText; marker; appendText; 
   `Saying that, You raised her eyes to the 
ceiling.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `KA08ADS`, name2: `YU03BDS`, name3: `CO08ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T4B199`); appendText; 
   You`"What in the world..."`;
   waitForClick; clearText; marker; sound(`T4B200`); appendText; 
   Coco`"Wai-wait, then..."`;
   waitForClick; clearText; marker; sound(`T4B201`); appendText; 
   Coco`"What happened to Tsugumi?" `;
   waitForClick; clearText; marker; appendText; 
   `Coco barely opened her mouth.`;
   waitForClick; clearText; marker; sound(`T4B202`); appendText; 
   Kid`"Maybe she was spirited away?"`;
   waitForClick; clearText; marker; sound(`T4B203`); appendText; 
   You`"Oh please."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi, disappeared?`;
   waitForClick; clearText; marker; appendText; 
   `We were all in shock.`;
   waitForClick; clearText; marker; appendText; 
   `Everyone kept talking, though.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `YU14BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B204`); appendText; 
   You`"Spirited away?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B205`); appendText; 
   You`"I don't believe that..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B206`); appendText; 
   You`"I don't believe..."`;
   waitForClick; clearText; marker; appendText; 
   `All of the color had drained from You's face, 
as she absorbed the enormity of what had 
happened.`;
   waitForClick; clearText; marker; appendText; 
   `She was holding her chest, looking up at the 
ceiling, in a cold sweat.`;
   waitForClick; clearText; marker; sound(`T4B207`); appendText; 
   You`"Uuugh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Calm down, You."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't freak out on me. Take deep breaths."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B208`); appendText; 
   You`"Uh...ugh..."`;
   waitForClick; clearText; marker; sound(`T4B209`); appendText; 
   You`"Oo....haaa...haa..."`;
   waitForClick; clearText; marker; appendText; 
   `She breathed in and out, slowly.`;
   waitForClick; clearText; marker; appendText; 
   `A little color came back to her face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `But the question was what to do about 
the...situation.`;
   waitForClick; clearText; marker; appendText; 
   `What to do?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, I know! We'll ask Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where is Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She ought to know what happened, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `You looked at me with a glimmer of hope.`;
   waitForClick; clearText; marker; sound(`T4B210`); appendText; 
   You`"Y-yeah, you're right. Let's call her."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `We rushed over to the LeMMIH terminal in the 
corner of the room.`;
   waitForClick; clearText; marker; appendText; 
   `Standing in front of the console, You began 
operating the panel.`;
   waitForClick; clearText; marker; sound(`T4B211`); appendText; 
   You`"If LeMMIH hasn't realized it yet, that may 
mean that Sora doesn't know yet either..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But call her anyway. It's faster to ask her 
than to go on a blind search."`;
   waitForClick; clearText; marker; sound(`T4B212`); appendText; 
   You`"You're right."`;
   waitForClick; clearText; marker; appendText; 
   `Before long, there was a change in the 
terminal.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora's image floated up in the monitor.`;
   waitForClick; clearText; marker; sound(`T4B213`); appendText; 
   Sora`"Yes?"`;
   waitForClick; clearText; marker; sound(`T4B214`); appendText; 
   You`"Sora, something terrible has happened.  
Tsugumi is missing..."`;
   waitForClick; clearText; marker; sound(`T4B215`); appendText; 
   Sora`"What!? Are you sure??"`;
   waitForClick; clearText; marker; sound(`T4B216`); appendText; 
   Sora`"I thought something had happened to the 
monitor in the room, but..."`;
   waitForClick; clearText; marker; sound(`T4B217`); appendText; 
   You`"What!? Why didn't you tell us!?"`;
   waitForClick; clearText; marker; sound(`T4B218`); appendText; 
   Sora`"I am terribly sorry. There has been terrible 
jamming, and...it had delayed me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Jamming?  What's that?"`;
   waitForClick; clearText; marker; sound(`T4B219`); appendText; 
   You`"Electromagnetic interference?..."`;
   waitForClick; clearText; marker; sound(`T4B220`); appendText; 
   Sora`"How is the room? Is everyone there?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yes, other than Tsugumi, we're all here."`;
   waitForClick; clearText; marker; sound(`T4B221`); appendText; 
   Sora`"Because actually, my 'eyes' aren't working."`;
   waitForClick; clearText; marker; sound(`T4B222`); appendText; 
   Sora`"So I wasted time trying to confirm..."`;
   waitForClick; clearText; marker; sound(`T4B223`); appendText; 
   You`"Don't worry, Sora. We're all right."`;
   waitForClick; clearText; marker; sound(`T4B224`); appendText; 
   You`"Can you come right over?"`;
   waitForClick; clearText; marker; sound(`T4B225`); appendText; 
   Sora`"Yes, of course. Right away."`;
   waitForClick; clearText; marker; appendText; 
   `Sora disappeared from the monitor...`;
   waitForClick; clearText; marker; appendText; 
   `And instantly she was standing in front of us.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `YU13BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B226`); appendText; 
   Sora`"Am I standing in the right place? Can you 
see me all right?"`;
   waitForClick; clearText; marker; appendText; 
   `Sora looked worried.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're fine.... You really can't see?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B227`); appendText; 
   Sora`"It is getting better, but there is still 
something wrong."`;
   waitForClick; clearText; marker; sound(`T4B228`); appendText; 
   Sora`"I can tell approximately where you are 
standing, but not which way you are facing..."`;
   waitForClick; clearText; marker; appendText; 
   `She was talking to a spot just next to me.`;
   waitForClick; clearText; marker; sound(`T4B229`); appendText; 
   You`"Sora, Tsugumi's not in the infirmary. Can 
you search the other rooms?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B230`); appendText; 
   Sora`"Let me try...I'll do a bio scan on the entire 
building."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She put her hands on the LeMMIH terminal and 
started accessing it right away.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B231`); appendText; 
   Kid`"Hey, hey..."`;
   waitForClick; clearText; marker; sound(`T4B232`); appendText; 
   Kid`"Who are you guys talking to?"`;
   waitForClick; clearText; marker; appendText; 
   `The Kid asked us fearfully from over by the 
bed.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `We left the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   `Sora was bewildered by the sudden sensor 
trouble.  It was taking her a few minutes 
longer than usual to finish the bio scan.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU17BDM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B233`); appendText; 
   Kid`"Sora wasn't able to see us, and sometimes we 
couldn't see her, so..."`;
   waitForClick; clearText; marker; sound(`T4B234`); appendText; 
   Kid`"Does that mean the ceiling sensors from the 
bed, over to the elevator are all temporarily 
broken?"`;
   waitForClick; clearText; marker; sound(`T4B235`); appendText; 
   You`"Yeah. That's what's affecting Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B236`); appendText; 
   Kid`"So she left through the emergency corridor."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. But she Tsugumi was kind enough to 
leave candles burning for us."`;
   waitForClick; clearText; marker; appendText; 
   `When we had found the emergency flares in the 
elevator, I was completely shocked.`;
   waitForClick; clearText; marker; appendText; 
   `She wanted to keep us away that badly?`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B237`); appendText; 
   Sora`"Sorry to keep you waiting. I have the 
results of the bio scan."`;
   waitForClick; clearText; marker; appendText; 
   `After a delay, Sora appeared in the door of 
the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And where has Tsugumi hobbled off to?"`;
   waitForClick; clearText; marker; appendText; 
   `She couldn't have gone far...in any case, we 
would find her, and when we did, we would 
figure everything out.`;
   waitForClick; clearText; marker; sound(`T4B238`); appendText; 
   Sora`"An EI has gone down to Dritte stock.  
Tsugumi is slowly moving past the isolated 
sector."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"EI..?  Oh, 'EI' - the neutral buoyancy 
elevator!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If we call it, EI will come to us, right?"`;
   waitForClick; clearText; marker; sound(`T4B239`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Okay, I'll run over there."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B240`); appendText; 
   You`"What? Hold on, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T4B241`); appendText; 
   You`"You can only enter and exit that sector 
using EI, so if you just wait a little..."`;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_0000135f);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"We can't just let her be! What if her injury 
gets worse!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And besides, I want to hear a good 
explanation for why she ran off like this!"`;
   waitForClick; clearText; 
});
goto(lbl_00001364);
let lbl_0000135f;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"We can't let her be out there. What if her 
injury gets worse?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why couldn't she just stay in bed...!?"`;
   waitForClick; clearText; 
});
let lbl_00001364;
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06BDS`, name2: `SO06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B242`); appendText; 
   You`"Hey, Takeshi!"`;
   waitForClick; clearText; marker; sound(`T4B243`); appendText; 
   Sora`"Takeshi?"`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I left them there and ran out.`;
   waitForClick; clearText; marker; appendText; 
   `The buoyancy elevator was right nearby.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3L`, transition: 20 });
bgload({ name: `BG23A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I pushed the down button and called the 
elevator.`;
   waitForClick; clearText; marker; appendText; 
   `The lamp lit up, letting me know that it was 
working normally.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
bgload({ name: `BG24A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I sprang in when the double doors opened.`;
   waitForClick; clearText; marker; appendText; 
   `The doors shut quickly and it started going 
down.`;
   waitForClick; clearText; marker; appendText; 
   `(If she doesn't use EI, she can't get up 
here...)`;
   waitForClick; clearText; marker; appendText; 
   `(Until I get there, she definitely can't 
leave the sector...)`;
   waitForClick; clearText; marker; appendText; 
   `(Alright...)`;
   waitForClick; clearText; marker; appendText; 
   `(Watch out Tsugumi, because here I come!!)`;
   waitForClick; clearText; marker; appendText; 
   `I cracked my knuckles.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
if (l_tsugumi_flag == 0) goto(lbl_0000141e);
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi had pushed herself, despite her 
injury, and gone off all alone...`;
   waitForClick; clearText; marker; appendText; 
   `Did she really mean to kill herself...?`;
   waitForClick; clearText; marker; appendText; 
   `Was she actually trying...?`;
   waitForClick; clearText; marker; appendText; 
   `Then maybe I should just let her.`;
   waitForClick; clearText; marker; appendText; 
   `But, still!!!`;
   waitForClick; clearText; marker; appendText; 
   `I wanted to give her a piece of my mind first!!`;
   waitForClick; clearText; marker; appendText; 
   `I hoped she would just stay alive long enough 
for me tell her all that I wanted to say...`;
   waitForClick; clearText; 
});
goto(lbl_00001423);
let lbl_0000141e;
showTextbox();
text(() => {
   marker; appendText; 
   `She was always acting tough...`;
   waitForClick; clearText; marker; appendText; 
   `But I bet she was bawling by now.`;
   waitForClick; clearText; marker; appendText; 
   `I figured her leg would be killing her.`;
   waitForClick; clearText; marker; appendText; 
   `She'd gone so far that she probably couldn't 
get back even if she wanted to.`;
   waitForClick; clearText; marker; appendText; 
   `Maybe she was regretting it...?`;
   waitForClick; clearText; marker; appendText; 
   `What I really wanted to do was get in a 
couple good wisecracks, to pay her back for 
all the hard times she'd given me...`;
   waitForClick; clearText; marker; appendText; 
   `But I also felt a little sorry for her.`;
   waitForClick; clearText; 
});
let lbl_00001423;
hideTextbox();
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
bgload({ name: `BG23B1`, transition: 20 });
setSceneTitle({ index: 24 });
showTextbox();
text(() => {
   marker; appendText; 
   `The doors opened.`;
   waitForClick; clearText; marker; appendText; 
   `The stale air of the isolated sector on the 
third floor flowed into my lungs.`;
   waitForClick; clearText; marker; appendText; 
   `Next to the elevator I had ridden in, another 
elevator was still stopped.`;
   waitForClick; clearText; marker; appendText; 
   `An elevator with a hole blasted in it...`;
   waitForClick; clearText; marker; appendText; 
   `You couldn't even smell the stench of acetone 
anymore.`;
   waitForClick; clearText; marker; appendText; 
   `I walked toward the end of the hallway, 
marshalling my wits.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `(What's that?...)`;
   waitForClick; clearText; marker; appendText; 
   `I realized that there was a room on the left 
side of the corridor that I hadn't seen 
during the power outage.`;
   waitForClick; clearText; marker; appendText; 
   `Thinking to explore a little, I set my foot 
inside.`;
   waitForClick; clearText; 
});
bgload({ name: `BG05A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `A huge whale was stretched out.`;
   waitForClick; clearText; marker; appendText; 
   `It said 'Cosmic Whale' on the entrance.`;
   waitForClick; clearText; marker; appendText; 
   `Apparently that was the name of this 
attraction.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't tell from a quick glance exactly 
what the attraction was.`;
   waitForClick; clearText; marker; appendText; 
   `A whale floating in empty space.`;
   waitForClick; clearText; marker; appendText; 
   `The whole scene was surreal.`;
   waitForClick; clearText; marker; appendText; 
   `Was there an explanation written somewhere...?`;
   waitForClick; clearText; marker; appendText; 
   `(...Wait, I don't have time to waste like 
this...)`;
   waitForClick; clearText; marker; appendText; 
   `After making sure that Tsugumi wasn't there, 
I left through a different door.`;
   waitForClick; clearText; 
});
bgload({ name: `BG18B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I quickly reached the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   `The door said 'Kraftwerk.'`;
   waitForClick; clearText; marker; appendText; 
   `I pushed open the door and stepped inside.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG19B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `The facility was giving off a steady but low 
hum, and seemed to be working fine.`;
   waitForClick; clearText; marker; appendText; 
   `For better or for worse, in LeMU we didn't 
have to worry about the electricity.`;
   waitForClick; clearText; marker; appendText; 
   `I looked around, but there was no trace of 
Tsugumi.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_07`, a1: 0, volume: 90 });
bgload({ name: `BG18B1`, transition: 20 });
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Past the Generator Room, the corridor was 
completely blocked off by a partition.`;
   waitForClick; clearText; marker; appendText; 
   `It was impossible to go beyond it...`;
   waitForClick; clearText; marker; appendText; 
   `The only door left was the room on the right.`;
   waitForClick; clearText; marker; appendText; 
   `I decided to go in there.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG20B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `The room was full of pipes.`;
   waitForClick; clearText; marker; appendText; 
   `There was no sign on the door, but I supposed 
it would be called something like a 'pressure 
regulation room,' or something.`;
   waitForClick; clearText; marker; appendText; 
   `I assumed that the pipes must be connected to 
the boilers and turbines in the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   `Come to think of it, Tsugumi had done the 
repairs in there...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I remembered her closing a valve right with 
her tools spread around her...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `(Huh?)`;
   waitForClick; clearText; marker; appendText; 
   `She was there.`;
   waitForClick; clearText; marker; appendText; 
   `Leaning in just like the time before.`;
   waitForClick; clearText; marker; appendText; 
   `She didn't have any tools. She wasn't closing 
off a valve.`;
   waitForClick; clearText; marker; appendText; 
   `Instead, craning her neck, she seemed to be 
looking over at the other side of the pipes.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey, Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   `I pretended to be calm.`;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_0000156f);
showTextbox();
text(() => {
   marker; appendText; 
   `It wouldn't do to lose my temper right off 
the bat.`;
   waitForClick; clearText; marker; appendText; 
   `I suppressed the urge to shout. She was 
injured, after all...`;
   waitForClick; clearText; 
});
goto(lbl_00001574);
let lbl_0000156f;
showTextbox();
text(() => {
   marker; appendText; 
   `I thought to proceed gently.`;
   waitForClick; clearText; marker; appendText; 
   `I wanted to handle the conversation right.`;
   waitForClick; clearText; 
});
let lbl_00001574;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She stood up slowly and looked my way.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You looking for something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B244`); appendText; 
   Tsugumi`"No, not really."`;
   waitForClick; clearText; marker; appendText; 
   `She stepped back as if she were keeping watch 
over me.`;
   waitForClick; clearText; marker; appendText; 
   `I could tell that she was agitated...`;
   waitForClick; clearText; marker; appendText; 
   `She hadn't expected to see me.`;
   waitForClick; clearText; marker; appendText; 
   `Her gaze didn't fix on anything...`;
   waitForClick; clearText; marker; appendText; 
   `Her eyes kept flitting to the pipes behind her.`;
   waitForClick; clearText; marker; appendText; 
   `Her gaze...`;
   waitForClick; clearText; marker; appendText; 
   `It bothered me...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's behind you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B245`); appendText; 
   Tsugumi`"...N....nothing..."`;
   waitForClick; clearText; marker; sound(`T4B246`); appendText; 
   Tsugumi`"There's nothing behind me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   `I casually tried to angle around so that I 
could see the pipes behind her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B247`); appendText; 
   Tsugumi`"Don't come near me..."`;
   waitForClick; clearText; marker; sound(`T4B248`); appendText; 
   Tsugumi`"Don't get close..."`;
   waitForClick; clearText; marker; appendText; 
   `What?`;
   waitForClick; clearText; marker; appendText; 
   `She changed position.`;
   waitForClick; clearText; marker; appendText; 
   `She didn't want me to go behind her.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B249`); appendText; 
   Tsugumi`"Oh..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She had taken another step back and knocked 
something off.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Clang, clang, plunk...`;
   waitForClick; clearText; marker; appendText; 
   `Along with a small splash of water, several 
screws or nuts fell into the crevice between 
ducts.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She quietly looked around.`;
   waitForClick; clearText; marker; appendText; 
   `Favoring her right leg, she slowly turned...`;
   waitForClick; clearText; marker; appendText; 
   `With her back to me, she looked further back 
into the room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Then took a relieved, if amazed, breath...`;
   waitForClick; clearText; marker; appendText; 
   `(What was going on?)`;
   waitForClick; clearText; marker; appendText; 
   `Then pushing me aside, she tried to head out 
of the room.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B250`); appendText; 
   Tsugumi`"...Move, you're in my way."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey, Tsugumi...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B251`); appendText; 
   Tsugumi`"Don't bother me..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Dragging her right leg, she tried to leave.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait!"`;
   waitForClick; clearText; marker; appendText; 
   `I put my hands on her shoulders.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `But she shook them right off.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B252`); appendText; 
   Tsugumi`"Don't you touch me!"`;
   waitForClick; clearText; marker; appendText; 
   `She glared at me, without trying to hide her 
annoyance.`;
   waitForClick; clearText; marker; sound(`T4B253`); appendText; 
   Tsugumi`"I said you were in my way!"`;
   waitForClick; clearText; marker; sound(`T4B254`); appendText; 
   Tsugumi`"Leave me alone!"`;
   waitForClick; clearText; marker; sound(`T4B255`); appendText; 
   Tsugumi`"Why are you following me?"`;
   waitForClick; clearText; marker; appendText; 
   `She spat the words out all at once.`;
   waitForClick; clearText; marker; appendText; 
   `But I didn't let up and fired a question back 
at her.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you doing here? Are you looking for 
something?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Or are you finishing up some repairs?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You won't answer stupid questions, is that 
it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B256`); appendText; 
   Tsugumi`"...What..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B257`); appendText; 
   Tsugumi`"What are you doing here, yourself?"`;
   waitForClick; clearText; marker; sound(`T4B258`); appendText; 
   Tsugumi`"I'm free to do what I want, where I want."`;
   waitForClick; clearText; marker; appendText; 
   `She was trying to make a wall of words.`;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_00001750);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sure..."`;
   waitForClick; clearText; marker; appendText; 
   `I shot back, trying to make a crack in the 
wall that she had up.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I came here on my own. I left the others."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Because I heard that you came here on your 
own."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B259`); appendText; 
   Tsugumi`"Why...would you do that...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Because my hurt friend suddenly went missing 
that's why!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course I came looking for you!"`;
   waitForClick; clearText; 
});
goto(lbl_00001755);
let lbl_00001750;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Listen...."`;
   waitForClick; clearText; marker; appendText; 
   `Searching for a way to reach her.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...I just came out of basic human decency."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's not like everyone's happy about the way 
you keep doing things."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Because my injured friend suddenly went 
missing that's why!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course I came looking for you."`;
   waitForClick; clearText; 
});
let lbl_00001755;
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B260`); appendText; 
   Tsugumi`"Friend?"`;
   waitForClick; clearText; marker; appendText; 
   `Her expression grew more and more severe.`;
   waitForClick; clearText; marker; sound(`T4B261`); appendText; 
   Tsugumi`"I didn't ask you to come, and there's no 
reason for you to be here."`;
   waitForClick; clearText; marker; sound(`T4B262`); appendText; 
   Tsugumi`"I'm not like the others."`;
   waitForClick; clearText; marker; sound(`T4B263`); appendText; 
   Tsugumi`"So don't treat me like one of your gang."`;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_00001792);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Tsugumi! Cut it out!"`;
   waitForClick; clearText; marker; appendText; 
   `I snapped.`;
   waitForClick; clearText; marker; appendText; 
   `I clenched my fist.`;
   waitForClick; clearText; marker; appendText; 
   `Then I shoved it in her face.`;
   waitForClick; clearText; marker; appendText; 
   `But I stopped it just in front of her nose...`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `She didn't even flinch.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Agh..."`;
   waitForClick; clearText; 
});
goto(lbl_00001797);
let lbl_00001792;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Alright, I get it!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You are so unbelievably selfish...!"`;
   waitForClick; clearText; marker; appendText; 
   `I thought about pretending to raise my fist, 
but didn't do it.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Even if I did, she probably wouldn't flinch.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Agh..."`;
   waitForClick; clearText; 
});
let lbl_00001797;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Believe me, I don't want to be friends with 
someone like you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But we don't have a choice."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We all want to get out of here!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't you want to get our of here as soon as 
possible?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"As long as we're in the same boat, we're 
friends."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In Japan, people with the same goal are 
called friends..."`;
   waitForClick; clearText; marker; sound(`T4B264`); appendText; 
   Tsugumi`"Friends!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B265`); appendText; 
   Tsugumi`"Friends, friends, friends, friends..."`;
   waitForClick; clearText; marker; sound(`T4B266`); appendText; 
   Tsugumi`"There you go again just saying that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B267`); appendText; 
   Tsugumi`"That kind of tired, hypocritical crap makes 
me sick."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_000017e4);
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi's voice stayed completely cool.`;
   waitForClick; clearText; marker; appendText; 
   `There was no place for my raised fist to go.`;
   waitForClick; clearText; 
});
let lbl_000017e4;
showTextbox();
text(() => {
   marker; sound(`T4B268`); appendText; 
   Tsugumi`"And one more thing."`;
   waitForClick; clearText; marker; sound(`T4B269`); appendText; 
   Tsugumi`"Weren't you listening to me yesterday?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B270`); appendText; 
   Tsugumi`"I don't want to escape."`;
   waitForClick; clearText; marker; sound(`T4B271`); appendText; 
   Tsugumi`"So I'm not your 'friend'."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B272`); appendText; 
   Tsugumi`"I don't care if you are from Germany, 
America or Japan."`;
   waitForClick; clearText; marker; sound(`T4B273`); appendText; 
   Tsugumi`"Got it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B274`); appendText; 
   Tsugumi`"I.Am.Not.Your.Friend."`;
   waitForClick; clearText; marker; sound(`T4B275`); appendText; 
   Tsugumi`"So.Do.Not.Talk.To.Me.Again."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_0000184c);
showTextbox();
text(() => {
   marker; appendText; 
   `I lowered my hand.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't say anything.`;
   waitForClick; clearText; 
});
goto(lbl_00001851);
let lbl_0000184c;
showTextbox();
text(() => {
   marker; sound(`T4B276`); appendText; 
   Tsugumi`"...Move."`;
   waitForClick; clearText; marker; appendText; 
   `I moved aside.`;
   waitForClick; clearText; 
});
let lbl_00001851;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Giving me a glance, she moved toward the door 
dragging her foot.`;
   waitForClick; clearText; marker; appendText; 
   `She was moving awkwardly...`;
   waitForClick; clearText; marker; appendText; 
   `Still dragging her left foot...`;
   waitForClick; clearText; marker; appendText; 
   `Left foot...`;
   waitForClick; clearText; marker; appendText; 
   `Left foot?!?!`;
   waitForClick; clearText; marker; appendText; 
   `Did I say, LEFT foot!?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Whoah, whoah, whoah! Wait a second!"`;
   waitForClick; clearText; marker; appendText; 
   `I yelled with all my might.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B277`); appendText; 
   Tsugumi`"What! I said don't talk to me!"`;
   waitForClick; clearText; marker; appendText; 
   `She turned around forcefully.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your foot..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B278`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your foot..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Is it all right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The leg you hurt the other day...was your 
right leg, wasn't it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Her face stiffened.`;
   waitForClick; clearText; marker; appendText; 
   `Her eyes flicked away.`;
   waitForClick; clearText; marker; appendText; 
   `She averted her gaze.`;
   waitForClick; clearText; marker; appendText; 
   `She stood rock still.`;
   waitForClick; clearText; marker; appendText; 
   `What was...`;
   waitForClick; clearText; marker; appendText; 
   `...going on?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let me see."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I grabbed the hem of her skirt.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `And without hesitating yanked it up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B279`); appendText; 
   Tsugumi`"!!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   `—Whack!!`;
   waitForClick; clearText; marker; appendText; 
   `An immediate, brutal slap...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi took off running.`;
   waitForClick; clearText; marker; appendText; 
   `The sound of her footfalls grew faint. As 
did her shadow, disappearing down the hallway.`;
   waitForClick; clearText; marker; appendText; 
   `What was left was me, stunned.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `She had hammered my cheek.`;
   waitForClick; clearText; marker; appendText; 
   `I might have broken teeth.`;
   waitForClick; clearText; marker; appendText; 
   `I might have a nosebleed.`;
   waitForClick; clearText; marker; appendText; 
   `She hit me so hard my brain rattled.`;
   waitForClick; clearText; marker; appendText; 
   `But I didn't feel any pain...`;
   waitForClick; clearText; marker; appendText; 
   `(Compound fracture of the right thighbone.)`;
   waitForClick; clearText; marker; appendText; 
   `(Injuries requiring 40 stitches—)`;
   waitForClick; clearText; marker; appendText; 
   `(And she could run a day later???)`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 90 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG23A1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B280`); appendText; 
   Sora`"Welcome back, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   `Sora greeted me as I stepped out of the 
elevator into Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Thanks."`;
   waitForClick; clearText; marker; sound(`T4B281`); appendText; 
   Sora`"Takeshi - your face is swollen?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I know."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora readied a compress for me back in the 
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   `I left the room holding it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B282`); appendText; 
   Sora`"It seems that Tsugumi will come back to this 
floor in a little while."`;
   waitForClick; clearText; marker; sound(`T4B283`); appendText; 
   Sora`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B284`); appendText; 
   Sora`"But if we do find her, try not to get mad or 
yell at her."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B285`); appendText; 
   Sora`"For a little while, I think it is best if we 
let her do as she wants."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But...why?"`;
   waitForClick; clearText; marker; appendText; 
   `I pressed the compress to my cheek.`;
   waitForClick; clearText; marker; appendText; 
   `It started to hurt right about the time I had 
forgotten about it...`;
   waitForClick; clearText; marker; sound(`T4B286`); appendText; 
   Sora`"Don't you think she might be quite nervous 
right now?"`;
   waitForClick; clearText; marker; sound(`T4B287`); appendText; 
   Sora`"She's thinking about things..."`;
   waitForClick; clearText; marker; sound(`T4B288`); appendText; 
   Sora`"She's pondering all sorts of things in her 
heart..."`;
   waitForClick; clearText; marker; sound(`T4B289`); appendText; 
   Sora`"Everyone's words will fall on deaf ears..."`;
   waitForClick; clearText; marker; sound(`T4B290`); appendText; 
   Sora`"She's not able yet to just listen. Of 
course..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B291`); appendText; 
   Sora`"You're worried about her injuries, but for a 
little while, let's leave her alone."`;
   waitForClick; clearText; marker; sound(`T4B292`); appendText; 
   Sora`"If she is in any serious danger, I will let 
you know right away."`;
   waitForClick; clearText; marker; sound(`T4B293`); appendText; 
   Sora`"So for just a little while....please, 
Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah...all right."`;
   waitForClick; clearText; marker; appendText; 
   `I nodded assent to Sora's earnest request.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I went slowly down the stairs of Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   `My footsteps echoed quietly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B294`); appendText; 
   Sora`"I don't think it is an accident that she 
came to be here."`;
   waitForClick; clearText; marker; appendText; 
   `Sora continued speaking right next to me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Not an accident?"`;
   waitForClick; clearText; marker; sound(`T4B295`); appendText; 
   Sora`"I do not know the details."`;
   waitForClick; clearText; marker; sound(`T4B296`); appendText; 
   Sora`"This is the first time for me to encounter a 
case like her's. I don't have any data for 
this..."`;
   waitForClick; clearText; marker; sound(`T4B297`); appendText; 
   Sora`"But it seems to me that she has her reasons."`;
   waitForClick; clearText; marker; sound(`T4B298`); appendText; 
   Sora`"Reasons that are difficult to explain..."`;
   waitForClick; clearText; marker; sound(`T4B299`); appendText; 
   Sora`"Something that is hard for others to 
understand..."`;
   waitForClick; clearText; marker; sound(`T4B300`); appendText; 
   Sora`"Something that compelled her to act even if 
it made her injuries worse..."`;
   waitForClick; clearText; marker; sound(`T4B301`); appendText; 
   Sora`"That's what I feel."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B302`); appendText; 
   Sora`"Earlier, You was saying the same thing."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You was?"`;
   waitForClick; clearText; marker; sound(`T4B303`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T4B304`); appendText; 
   Sora`"That we shouldn't probe. That until she 
wants to tell us, we shouldn't press for 
information..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   `Maybe I had gotten a little too close to her 
boundaries.`;
   waitForClick; clearText; marker; appendText; 
   `Boundaries she didn't want invaded.`;
   waitForClick; clearText; marker; appendText; 
   `Whatever feelings and reasons she didn't want 
us to know about.`;
   waitForClick; clearText; marker; appendText; 
   `Was that why I was warned, harassed and 
pummeled...?`;
   waitForClick; clearText; marker; appendText; 
   `If I thought about it that way, it made more 
sense.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well...maybe so. Maybe I came down too 
hard..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
if (l_sora_flag != 0) goto(lbl_00001abc);
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_4C`);
let lbl_00001abc;
bgload({ name: `BG25B3`, transition: 20 });
setSceneTitle({ index: 25 });
showTextbox();
text(() => {
   marker; appendText; 
   `At last we reached the third floor.`;
   waitForClick; clearText; marker; appendText; 
   `I had heard from Sora that You and the Kid 
were holed up in the Central Control Room 
because she wanted to figure something out.`;
   waitForClick; clearText; marker; appendText; 
   `She said that Coco and Pipi had gone off 
somewhere on a walk.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm...wonder where they went?"`;
   waitForClick; clearText; marker; appendText; 
   `When I asked Sora that, she put her finger to 
her lips and smiled.`;
   waitForClick; clearText; marker; sound(`T4B305`); appendText; 
   Sora`"Shall we say, individual study time?"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `BG17A1`, transition: 20 });
clock(`12:51`);
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `We were the only ones in the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   `Study time...`;
   waitForClick; clearText; marker; appendText; 
   `Sora turned over the observation of LeMU to 
the automatic LeMMIH control system for a few 
hours.`;
   waitForClick; clearText; marker; appendText; 
   `That would ensure Tsugumi and You some 
privacy...`;
   waitForClick; clearText; marker; appendText; 
   `And give Sora a break, too.`;
   waitForClick; clearText; marker; appendText; 
   `So, there she sat, in a chair in the 
Conference Room, looking at the white board.`;
   waitForClick; clearText; marker; appendText; 
   `I stood at the whiteboard, dry marker in hand, 
playing professor.`;
   waitForClick; clearText; marker; appendText; 
   `A private lesson, one-on-one.`;
   waitForClick; clearText; marker; appendText; 
   `The reason that we started that was....`;
   waitForClick; clearText; marker; appendText; 
   `'Coco and the Kid were giving rave reviews of 
You's speech...'`;
   waitForClick; clearText; marker; appendText; 
   `'What was it like? I asked her, but she 
wouldn't tell me.'`;
   waitForClick; clearText; marker; appendText; 
   `'Takeshi, do you know?'`;
   waitForClick; clearText; marker; appendText; 
   `'Well, yeah, but...it's not like I have the 
whole thing memorized...'`;
   waitForClick; clearText; marker; appendText; 
   `'I know, I'll give you a lecture just as 
good...no, better than You's!'`;
   waitForClick; clearText; marker; appendText; 
   `—and that's how it started.`;
   waitForClick; clearText; marker; appendText; 
   `The title of my lecture was 'The Psychology of 
Love'...`;
   waitForClick; clearText; marker; appendText; 
   `I was playing to the crowd.`;
   waitForClick; clearText; marker; appendText; 
   `But I hadn't decided what I would talk about.`;
   waitForClick; clearText; marker; appendText; 
   `It was all ad lib.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let's see..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When is your birthday, Ms. Akanegasaki?"`;
   waitForClick; clearText; marker; appendText; 
   `I would just choose a random starting point.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B306`); appendText; 
   Sora`"Takeshi? What do you..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no, no, no..."`;
   waitForClick; clearText; marker; appendText; 
   `I wagged my finger in front of my face. Then—`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`I pointed at Sora, and said,`;
   waitForClick; clearText; marker; appendText; 
   `"Ms. Akanegasaki,"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Professor Takeshi,"`;
   waitForClick; clearText; marker; appendText; 
   `I said, and pointed at myself.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Comprendez-vous? Okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B307`); appendText; 
   Sora`"Ah, oui..."`;
   waitForClick; clearText; marker; appendText; 
   `She nodded.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B308`); appendText; 
   Sora`"Professor Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Very good. Once again."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When is your birthday, Ms. Akanegasaki?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B309`); appendText; 
   Sora`"Development of LeMMIH started on September 
16, 1992."`;
   waitForClick; clearText; marker; sound(`T4B310`); appendText; 
   Sora`"The prototype was finished in October of 
2000."`;
   waitForClick; clearText; marker; sound(`T4B311`); appendText; 
   Sora`"Actual operation of the 'Sora' RSD System 
began in April, 11 years later."`;
   waitForClick; clearText; marker; sound(`T4B312`); appendText; 
   Sora`"Which means that I was born on April 2, 2011."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"2011?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh my, oh my, what a very young student you 
are."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait, you're only six-years-old?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B313`); appendText; 
   Sora`"No, I'm 24."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How's that?"`;
   waitForClick; clearText; marker; sound(`T4B314`); appendText; 
   Sora`"I am not sure of the reason myself."`;
   waitForClick; clearText; marker; sound(`T4B315`); appendText; 
   Sora`"This year and last, even three and four 
years ago, I've been 24."`;
   waitForClick; clearText; marker; sound(`T4B316`); appendText; 
   Sora`"I've been 24 since I was born."`;
   waitForClick; clearText; marker; sound(`T4B317`); appendText; 
   Sora`"Of course it's just my programmed age..."`;
   waitForClick; clearText; marker; sound(`T4B318`); appendText; 
   Sora`"I don't actually age like humans do..."`;
   waitForClick; clearText; marker; sound(`T4B319`); appendText; 
   Sora`"So I'll always be 24, eternally, I'm afraid."`;
   waitForClick; clearText; marker; appendText; 
   `I have to admit it would have been strange to 
hear her say "I'm 41," looking the way she did.`;
   waitForClick; clearText; marker; appendText; 
   `They must have predicted that such a time 
would come, and fixed her eternally at 24.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, okay..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I see. Then I shall accept that you are 24, 
Ms. Akanegasaki."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In that case, I think that you should learn 
the appropriate behavior for a someone your 
age."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B320`); appendText; 
   Sora`"Um..."`;
   waitForClick; clearText; marker; appendText; 
   `She cocked her head to the side, a little 
bewildered.`;
   waitForClick; clearText; marker; sound(`T4B321`); appendText; 
   Sora`"You mean that I don't seem 24 right now?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yes, that is exactly my point -"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your average 24-year-old is..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Um...more...how can I say..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Has a bit more...sparkle."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B322`); appendText; 
   Sora`"Sparkle?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B323`); appendText; 
   Sora`"Are you saying that my face should be more 
shiny?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no, that's not what I mean..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"24 is when you start thinking about marriage."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B324`); appendText; 
   Sora`"Ah...marriage."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You become friends with someone at 24, then 
date for a few years, and marry around 26 or 
27."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's the key - marrying into moola."`;
   waitForClick; clearText; marker; sound(`T4B325`); appendText; 
   Sora`"Moola?"`;
   waitForClick; clearText; marker; sound(`T4B326`); appendText; 
   Sora`"Does that have to do with cows?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No,no..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I guess my reference was a little dated..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Listen up, you're asking too many questions!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Be quiet until your teacher stops talking!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll take all questions at the end. All 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora nodded silently.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ahem."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Now then, to go back to what I was saying..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sparkle means..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's the gleam in your eyes as you 
frantically search for the object of your 
affection - all, of course, as a preamble to 
getting married."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That is what I am speaking of."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Until 23, you choose a man who will be an 
appropriate boyfriend."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"After 24, you choose a man who will be an 
appropriate husband."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You might think that an appropriate husband 
would be one who promises a bright future..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But to borrow the words of the ancients, it 
all comes down to the three 'heights.'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"High education, high salary, high in stature."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That would be the ideal individual..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You think there's really guys like that out 
there?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you're feeling greedy, you might also 
look for someone who's kind and handsome, and 
cares more about his family than his job."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah...in other words..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What!!! You could search the whole world and 
never find a guy like that!!!"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B327`); appendText; 
   Sora`"Professor, you seem upset..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sorry, it's a little traumatic..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ahem. Excuse me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So because of all that, the 24-year-old 
women can be a very severe creatures."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Clever and calculating."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And in order to bring down her prey, she 
must have the social skills of a little devil."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Do you understand?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She cocked her head.`;
   waitForClick; clearText; marker; appendText; 
   `I wanted to sigh, but I pulled myself 
together to make a declaration.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, perhaps it is better if you put this 
theory into practice."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let us try it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B328`); appendText; 
   Sora`"All right, Mr. Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Professor."`;
   waitForClick; clearText; marker; sound(`T4B329`); appendText; 
   Sora`"Yes, Professor Takeshi. I will try my very 
best."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no, no, no..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That kind of talk is a no-no."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B330`); appendText; 
   Sora`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Not "Yes, I will try my very best," but..." `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"More, you know, devilishly! Coquettishly!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"One, two, three, go!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO18ADM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T4B331`); appendText; 
   Sora`"The hell!? 'ssif I can do som'n like that 
right away!? I'll kill you, you bastard! 
Bwa, bwa, bwaawkk."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"N-no, no, that's all wrong."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's not devilish, it's downright demonic."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And that's not coquetry, that's poultry."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B332`); appendText; 
   Sora`"Professor, this is bit too difficult for me 
to start with."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really."`;
   waitForClick; clearText; marker; sound(`T4B333`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright then, how about you start by not 
speaking so formally?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B334`); appendText; 
   Sora`"Yes, something like that will be better. 
Something easier."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Using the same example..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yes, I will try my very best."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In casual conversation, this would be 'Sure, 
I'll give it a try.'"`;
   waitForClick; clearText; marker; sound(`T4B335`); appendText; 
   Sora`"Sure, I'll give it a try."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"See, you can do it if you try!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora's face was lit up with a smile...`;
   waitForClick; clearText; marker; sound(`T4B336`); appendText; 
   Sora`"This is interesting! Please teach me more."`;
   waitForClick; clearText; marker; appendText; 
   `Her eyes shone...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"'This is, like, sooo fun!' - now, you try."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B337`); appendText; 
   Sora`"This is, like, sooo fun!"`;
   waitForClick; clearText; marker; appendText; 
   `We did this for several hours...`;
   waitForClick; clearText; marker; appendText; 
   `.....................`;
   waitForClick; clearText; marker; appendText; 
   `.........`;
   waitForClick; clearText; marker; appendText; 
   `...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Alright! The time has come to see the 
fruits of your labor!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Go forth, my prize pupil!"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG21B1`, transition: 20 });
clock(`15:29`);
showTextbox();
text(() => {
   marker; appendText; 
   `Coco and Pipi were jumping up and down in the 
rest area.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B338`); appendText; 
   Coco`"Oh, Miss Sooora!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Woof, woof!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `SO12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B339`); appendText; 
   Coco`"Hey, Sora, Sora? Did you find Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T4B340`); appendText; 
   Sora`"Hunh? Tsugumi? I haven't seen her..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO17ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B341`); appendText; 
   Sora`"Annywayz, Coco, don'tcha know any cute guys 
you could hook me up with?"`;
   waitForClick; clearText; marker; sound(`T4B342`); appendText; 
   Sora`"The guys at this party last week were, were 
like, such losers..."`;
   waitForClick; clearText; marker; sound(`T4B343`); appendText; 
   Coco`".....So-Sora???"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B344`); appendText; 
   Sora`"I was like, I'm sicka eldest sons, man! I 
want something fresh!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B345`); appendText; 
   Sora`"And then, they wanted to go Dutch."`;
   waitForClick; clearText; marker; sound(`T4B346`); appendText; 
   Sora`"Can you believe it? It's, like, total junk!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Coco`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B347`); appendText; 
   Coco`"Waaaaaahhhhhhh...."`;
   waitForClick; clearText; marker; appendText; 
   `Coco burst into tears.`;
   waitForClick; clearText; marker; sound(`PIPI_24`); appendText; 
   Pipi`"Woooohhhhoooooo"`;
   waitForClick; clearText; marker; appendText; 
   `Pipi let out a terrified roar.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B348`); appendText; 
   Sora`"Whah, what's the matter?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B349`); appendText; 
   Sora`"You don't like my new way of talking?"`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T4B350`); appendText; 
   You`"Hey, what's going on?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `YU04BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `You came running.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `SO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B351`); appendText; 
   Sora`"Oh, hey, it's You!"`;
   waitForClick; clearText; marker; sound(`T4B352`); appendText; 
   Sora`"I haven't heard from you for, like, forever, 
girl. What, are you like busy like a bee or 
something?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU06BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B353`); appendText; 
   You`"What???"`;
   waitForClick; clearText; marker; sound(`T4B354`); appendText; 
   You`"What's happened to you, Sora...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B355`); appendText; 
   Sora`"What're you lookin' all scared for?"`;
   waitForClick; clearText; marker; sound(`T4B356`); appendText; 
   Sora`"Really, how NOT cool. Hurry up and put an 
end to your work then..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B357`); appendText; 
   Sora`"You wanna go clubbing or something? Don't 
you just wanna stay out ALL night?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"......"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B358`); appendText; 
   You`"!!??"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4B359`); appendText; 
   You`"Takeshi!!! Did you do this!?!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `So.......`;
   waitForClick; clearText; marker; appendText; 
   `Due to the general outcry, Sora went back to 
talking like her original self...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_4C`);
