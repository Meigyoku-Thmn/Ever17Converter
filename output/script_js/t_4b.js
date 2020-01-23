l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
setDialogBoxColor(GREEN);
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 0 });
setSceneTitle({ index: 22 });
showTextbox();
text(() => {
   `It is really hard to wake up after you've 
gone back to sleep.`;
   `And when I couldn't get up, I'd get irritated.`;
   `The reason I couldn't sleep was beyond me.`;
   `'I probably can't sleep because I'm so caught 
up in not being able to sleep?'`;
   `A vicious cycle.`;
   `(Man, this is really bad...)`;
   `I was still groggy, but thankfully I wasn't so 
sleepy it was driving me crazy.`;
   `I opened and closed my hand.`;
   `My body seemed to be in pretty good shape...`;
   `I shook my head a little.`;
   `I slapped my cheeks.`;
   `Then I breathed in a deep rush of cold air, 
breathed it out, and gradually cleared my head.`;
   `Mustering up my strength, I jumped out of bed.`;
   `I put the voice alternator back in my ears.`;
   Takeshi`"'Bout time I started cooking breakfast for 
you all!"`;
   `But when I looked around,`;
   Takeshi`"...No one's here!?"`;
   `The Conference Room was empty.`;
   Takeshi`"Hold up, what time is it?"`;
   `I checked my PDA display anxiously.`;
   `It was just shy of 9 a.m...`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
clock(`9:11`);
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B000)`"You are so laaaaaaate!"`;
   `You was standing guard in front of the kiosk.`;
   `The Kid, Coco, and Pipi were sitting and 
waiting.`;
   You(T4B001)`"Late, late, late, late!"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B002)`"Takeshi, you're a total mess."`;
   `You's cheeks looked a little swollen.`;
   Takeshi`"Aw, sorry, my bad..."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B003)`"We've been waiting forever!"`;
   You(T4B004)`"I'm starving..."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B005)`"Look, if my belly actually sticks to my 
spine, I'm holding you personally 
responsible..."`;

});
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B006)`"Dear Lord!"`;

});
fgload({ id: 1, name: `YU18BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B007)`"Remember me when I waste away to almost 
nothing and am blown by the wind across the 
Pacific!"`;
   Takeshi`"You're worried about being blown away by the 
WIND?"`;
   Takeshi`"I think it'd probably take a hurricane to 
carry you off."`;

});
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B008)`"...You're a real gentleman, Takeshi."`;
   `You's shoulders sagged, for some reason.`;
   Takeshi`"I can't believe you guys haven't eaten yet."`;
   `I looked around at them.`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU08BDS`, name2: `CO02ADS`, name3: `KA03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T4B009)`"Well, you see..."`;
   Coco(T4B010)`"We did try..."`;
   Kid(T4B011)`"I'd say we tried a little too hard..."`;
   Pipi(PIPI_03)`"Woof?"`;
   `They looked at one another with a mix of 
conflicting expressions.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"?"`;
   `I cocked my head quizzically at them and went 
around into the kiosk's kitchen.`;
   Takeshi`"What's going on here?"`;
   `There was an impossibly delicious smell...`;
   `And a blackened, charred piece of fried tuna.`;
   `Red, black, green - everything was splattered 
with a mysterious fluid.`;
   `The sandwich buns were colorful and sticky.`;
   `The lettuce that normally went into the 
chicken sandwiches had been diced.`;
   `I'd never seen such a shocking kitchen.`;
   Takeshi`"What on earth happened here!?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO09ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B012)`"Nee, hee, hee"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B013)`"We tried dividing up the work!"`;
   Coco(T4B014)`"Hey Takepyon, why don't you try some too."`;
   Takeshi`"H-hey! Wait, wait!"`;
   Takeshi`"Is this food? You can actually eat this?"`;
   Coco(T4B015)`"Yup."`;
   Takeshi`"Hey Kid - you serious?"`;

});
fgload({ id: 2, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B016)`"Well, sort of..."`;
   Takeshi`"Sort of?"`;
   Kid(T4B017)`"I don't exactly know if it'll taste GOOD, 
but..."`;

});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"......"`;
   Takeshi`"Why did you stop talking?"`;

});
fgload({ id: 1, name: `CO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B018)`"Nee, hee, hee!"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B019)`"Now, now, let's not be critical."`;
   Takeshi`"......"`;
   `Apparently there had been a number of reasons 
why I was in charge of cooking. `;

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
   You(T4B020)`"Alrighty then."`;
   You(T4B021)`"Time for a post-meal break?"`;
   `They all trooped over to the rest area.`;
   `I had safely finished eating...but my stomach 
was still growling.`;
   `Would I be okay?`;
   `Doing the dishes was an unpleasant job, but 
with everyone's cooperation we got the ordeal 
over and done with.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B022)`"Hey, hey, Takepyon."`;
   Coco(T4B023)`"I took Tsugumi's sandwich over to her."`;
   Takeshi`"Oh, thanks."`;
   `I patted Coco's head.`;
   `Before I tackled the clean up, I had picked 
out some decent sandwiches and had Coco take 
them over.`;
   `Whether the still-recovering Tsugumi would 
actually eat them was another story...`;
   Takeshi`"Hey, Coco, was Tsugumi eating alright?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B024)`"Yeah, she said she was really hungry. I 
think she ate three."`;
   Takeshi`"Hm. Well, I guess she's gotten well enough 
to eat then."`;
   Coco(T4B025)`"She's getting better pretty fast, don't you 
think?"`;
   Takeshi`"Yeah..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `That Tsugumi...`;
   `The night before, she'd said she wanted to 
die. `;

});
if (l_tsugumi_flag == 0) goto(lbl_000003b4);
showTextbox();
text(() => {
   `The fact that she was eating meant that at 
least her body was determined to live.`;
   `If she would just continue this tendency and 
get well, I thought there'd be no more 
problems...`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `Wait, that was a contradiction.`;

});
removeBG({ mode: WHITE, transition: 2 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `"All the things that keep us alive -- the 
things that drive us -- are filthy."`;
   `"There is no such thing as a life of purity."`;
   `The appetites necessary to sustain life are 
evil.`;
   `But then...`;
   `After all, she demolished three whole 
sandwiches without even flinching?`;
   `Well, then again, I was the one who told Coco 
to take the sandwiches down, because 'It'll 
be bad if she doesn't eat something...'`;
   `So I was contradicting my earlier stance too, 
but...`;
   `Something strange was going on!`;
   `What's the deal?`;
   `The word 'hypocrite' came to mind...`;
   `Who was the hypocrite now, Tsugumi!?`;
   `Tsugumi...what were you thinking!!`;
   `I couldn't help but feel resentment rising in 
my chest.`;

});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B026)`"What the matter, Takepyon?"`;
   Coco(T4B027)`"Your face got all scary for a moment..."`;
   Takeshi`"Ah, it's nothing."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `I didn't want to show my sullen mood.`;
   `I didn't even want to be thinking about her 
anymore.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `Waving with one hand, I tried my best to 
sweep my mood away. `;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B028)`"Oh, good—"`;
   Coco(T4B029)`"I thought maybe those sandwiches had given 
you a tummy ache!"`;
   Takeshi`"Why! Did you put something in there that 
would make me sick?"`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B030)`"Well, Takepyon, do you really want to know?"`;
   Coco(T4B031)`"You won't be sorry, right?"`;
   Takeshi`"......"`;
   Takeshi`"No, stop! Don't tell me, I don't want to 
know."`;
   `Just imagining the possibilities was making my 
stomach hurt...`;

});
goto(lbl_000004cd);
let lbl_000003b4;
showTextbox();
text(() => {
   `Tsugumi, was probably always just pretending 
to be tough.`;
   `Distancing people by saying awful things was 
one of her bad habits.`;
   `If she were eating properly...it must be 
proof that she wanted to live.`;
   `As long as she recovered completely, there 
would be no more problems.`;
   `(Hey, it's a good thing.)`;
   `I felt my chest relax in relief.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B032)`"You just got a happy look on your face, 
Takepyon."`;
   Takeshi`"Oh, really?"`;
   Coco(T4B033)`"You were really worrying about Tsugumi, 
huh...?"`;
   `Feeling so transparent made me want to 
conceal the truth.`;
   Takeshi`"No, no, it's not that."`;
   Takeshi`"I was just thinking that those sandwiches 
were pretty good after all."`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B034)`"Wow, really!?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B035)`"Oh, good!"`;
   Coco(T4B036)`"Actually, I made your sandwich all by my 
very own self!"`;

});
fgload({ id: 1, name: `CO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B037)`"Hee hee, you see..."`;

});
fgload({ id: 1, name: `CO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B038)`"I used lots of my secret sauce!"`;
   Coco(T4B039)`"Mayo, mustard, horseradish..."`;

});
fgload({ id: 1, name: `CO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B040)`"And then some salt and pepper, and a dab of 
soy sauce, and lots of butter..."`;
   Coco(T4B041)`"Then when it was done, cinnamon and cardamon 
and turmeric and nutmeg and vanilla, all 
shaken together and poured!"`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B042)`"And then, then...what was it again?"`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B043)`"Allspice, and curry, and hot sauce...and some 
tube of something Pipi found, we used lots of 
that..."`;

});
fgload({ id: 1, name: `CO15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B044)`"And then, we stuck the lettuce in between!"`;

});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B045)`"Magnificent, right? And pretty, too."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B046)`"Well, if I hadn't tasted it, I might have 
been scared off..."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B047)`"Wow! You mean it tasted okay...?"`;
   Coco(T4B048)`"Well, maybe I should make the next meal, too?"`;
   Takeshi`"......"`;
   Takeshi`"Nah, you don't have to do that.  I'll keep 
doing the cooking..."  `;
   `Just listening to her was making my gut ache...`;

});
let lbl_000004cd;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Gathering my wits, I went to the bench where 
You and the Kid were sitting.`;
   `Coco and Pipi trotted along behind me.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15BDS`, name2: `KA11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B049)`"Hey You, where did Sora go?"`;
   You(T4B050)`"She went to go look again to see if she can 
find some clue to help us escape."`;
   You(T4B051)`"From what she said, the sensors on the third 
floor are working a little bit better..."`;
   Kid(T4B052)`"Hmmm..."`;
   Takeshi`"Did you see Sora, You?"`;
   `I cut in front of them.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU01BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B053)`"Huh? Oh yeah, for a minute, before you came 
to the kiosk."`;
   Takeshi`"I see...did Sora say anything else? Did she 
seem different somehow?"`;
   You(T4B054)`"No, not really. Same as always."`;
   Takeshi`"Okay."`;
   Takeshi`"Well, that's good."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05BDM`, name2: `KA07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B055)`"Hm?...Takeshi, did you do something to her?"`;
   Takeshi`"N-no! Nothing!"`;
   You(T4B056)`"You're acting pretty suspicious. Why'd you 
say, 'well that's good...'?"`;
   You(T4B057)`"Not that I'm the type to hound you with 
questions or anything."`;
   Takeshi`"......"`;
   You`"......"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU02BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B058)`"So, what's the story, my dear Mr. Takeshi?"`;
   `She laughed and pretended to hold a mike to 
my face.`;
   You(T4B059)`"Can you tell me how you're feeling right now?"`;
   Takeshi`"I don't care what happens, I'm not talking to 
you."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05BDM`, name2: `KA07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B060)`"This is reporter You Tanaka, reporting live."`;
   `She withdrew her invisible mike.`;

});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B061)`"Hey, that reminds me..."`;
   `The Kid muttered, glancing at me.`;

});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B062)`"Apparently Takeshi sneaked out of his room 
in the middle of the night."`;

});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T4B063)`"Oho! Relevant circumstantial evidence!"`;
   `This time the invisible mike was pointed at 
the Kid.`;

});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B064)`"I thought maybe you were sleepwalking."`;
   Kid(T4B065)`"But you ran up the emergency stairs, so..."`;

});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B066)`"I went to sleep right after that, but it's 
been bothering me."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T4B067)`"What do you have to say for yourself, Mr. 
Takeshi?"`;

});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B068)`"If you don't want to talk about it, don't 
worry..."`;
   Coco(T4B069)`"Huh? Wha-what? Are you talking about 
something fun?"`;
   Pipi(PIPI_04)`"Woof! Woof!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `CO06ADS`, name2: `YU02BDS`, name3: `KA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `All of their eyes were fixed on me.`;
   `Bathed in their attention, there was no way 
for me to escape the mike.`;
   Takeshi`"...*sigh*"`;
   Takeshi`"Alright, ALL RIGHT, I'll confess."`;

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
   Takeshi`"I went to see Tsugumi."`;
   `I told the truth.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADS`, name2: `YU05BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B070)`"Tsugumi?"`;
   Takeshi`"I was going to take a walk when Sora came up 
and told me that Tsugumi had woken up."`;
   Takeshi`"I didn't want her to start wandering around 
and hurt herself.  So I rushed right over to 
the infirmary..."`;

});
fgload({ id: 2, name: `YU08BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B071)`"Oh...is that it?"`;
   You(T4B072)`"Actually, I guess I did heard pretty much 
the same thing from Sora. How Tsugumi woke up."`;
   Takeshi`"What, so you knew all along?"`;
   You(T4B073)`"Sorry, just thought I'd give you a hard 
time..."`;
   Takeshi`"Man..."`;
   Kid(T4B074)`"But you should have called us, too."`;
   Takeshi`"Hm? You're right, I wasn't thinking."`;
   Takeshi`"Well, I don't know about you, Kid, but You 
was dead to the world.  I didn't figure it'd 
be any good to try to wake you guys up."`;

});
fgload({ id: 2, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B075)`"Hey."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
goto(lbl_00000835);
let lbl_0000070a;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"I was just meeting Sora."`;
   `I tried to be as honest as possible.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADS`, name2: `YU05BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B076)`"Oho."`;
   Takeshi`"Well, I went for a walk and ran into her. I 
was awake, so we jogged to Zweite stock 
together." `;
   Kid(T4B077)`"It didn't sound like jogging. More like you 
were RUNNING."`;
   Kid(T4B078)`"The sound really echoed."`;
   Takeshi`"Well, you know Sora, she can run so fast, I 
had to hurry just to keep up."`;
   You(T4B079)`"Forget fast...Sora can run?"`;

});
fgload({ id: 4, name: `KA07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
goto(lbl_000007a9);
let lbl_00000761;
showTextbox();
text(() => {
   Takeshi`"I just went to the bathroom."`;

});
multifgload2({ id1: 2, id2: 4, name1: `YU05BDS`, name2: `KA06ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B080)`"Why did you wait, and then run off?"`;
   Takeshi`"At a certain point...it got pretty urgent."`;
   Kid(T4B081)`"You were gone an awful long time."`;
   Takeshi`"Look, sometimes it takes me a long time..."`;
   Kid(T4B082)`"But why'd you go all the way upstairs?"`;
   Takeshi`"Well, I like the upstairs toilet better."`;

});
fgload({ id: 4, name: `KA07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"......"`;
   Takeshi`"The one in the back. The color, the shape, 
the way it feels when you sit down..."`;
   Kid`"......"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
let lbl_000007a9;
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Let's not get into the details, Kid."`;

});
hideTextbox();
playSFX({ name: `SE05_01`, a1: 0, volume: 90 });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Kid(T4B083)`"Ouch."`;
   `I cuffed him on the head.`;
   Kid(T4B084)`"Alright, alright."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18BDM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B085)`"Yeah, that's an invasion of privacy!"`;
   Takeshi`"Listen You, you're the one that started this, 
with your whole reporter act."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T4B086)`"Who, me?"`;
   `She stuck out her tongue.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
let lbl_00000835;
showTextbox();
text(() => {
   `No one seemed inclined to question me 
further, so that solved that. Everyone milled 
around the rest area.`;
   `I felt the energy drain out of me. I wasn't 
tense.  But I wasn't relaxed either.`;
   `Maybe I was just tired.`;
   `I sat quietly, thinking...`;
   `When I couldn't sleep, I had been pondering 
all sorts of things.`;
   `About Tsugumi...`;
   `And Sora...`;

});
if (l_sora_flag == 0) goto(lbl_00000858);
showTextbox();
text(() => {
   `Sora made me think about all kinds of 
questions.`;
   `What was love?`;
   `What were people?`;
   `What was the meaning of life?`;
   `What was she herself...?`;
   `She was more worried about things than I was.`;
   `I didn't know the answers. The stress of so 
many unknowns was starting to get to me.`;

});
goto(lbl_0000085d);
let lbl_00000858;
showTextbox();
text(() => {
   `I may have hurt Sora's feelings.`;
   `She always smiled and said she didn't mind, 
but...`;
   `What would I say when I saw her?`;

});
let lbl_0000085d;
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   You(T4B087)`"Which is why..."`;
   `Hearing You's voice, I returned to earth with 
a jolt.`;

});
hideTextbox();
playBGM({ num: 1, volume: 100 });
fgload({ id: 1, name: `YU15BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B088)`"So many Greek myths have been handed down to 
us."`;
   `You was standing in the middle of the room, 
apparently giving a lecture.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO11ADS`, name2: `KA11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `The Kid, Coco and Pipi were sitting on 
benches, listening obediently.`;
   `I ended up listening myself.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B089)`"You see that statue over there? It's rather 
a lovely piece..."`;
   `She turned around and pointed at the statue 
in a corner of the rest area.`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B090)`"The beautiful statue and the sculptor who 
loved her...I'll tell you their story."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B091)`"Ahem."`;
   `She gave a melodramatic cough.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Then she turned back to the group and began 
gesturing and talking.`;

});
fgload({ id: 1, name: `YU15BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B092)`"Once upon a time, in a place called Cyprus, 
there was a young sculptor."`;
   You(T4B093)`"His name was Pygmalion. He's been called the 
King of Cyprus..."`;

});
fgload({ id: 1, name: `YU17BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B094)`"But in these myths they tend to call anyone 
a king or a god, so we won't go there for a 
bit...."`;

});
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B095)`"Anyway, there was an excellent sculptor named 
Pygmalion. And then...um..."`;

});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B096)`"His statues were incredible. They were so 
vital and full of life, they looked as though 
they might come to life at any moment."`;
   You(T4B097)`"But Pygmalion couldn't seem to get 
interested in ladies."`;

});
fgload({ id: 1, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B098)`"The people around him wondered, why a 
brilliant sculptor like him couldn't land a 
wife."`;

});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B099)`"But Pygmalion seemed only to care about 
making his statues."`;
   You(T4B100)`"Then one day, he finished the nude figure of 
a woman."`;

});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B101)`"It was a wonderful piece, absolutely 
charming, and even he himself thought it 
might be his ultimate masterpiece."`;
   You(T4B102)`"But..."`;

});
fgload({ id: 1, name: `YU17BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B103)`"As he looked on her beautiful, almost living, 
face..."`;

});
fgload({ id: 1, name: `YU03BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B104)`"He realized that she was naked, and became 
embarrassed..."`;

});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B105)`"He brought clothes for her and dressed her."`;
   You(T4B106)`"And when it got dark, he was so besotted 
with her that..."`;

});
fgload({ id: 1, name: `YU15BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B107)`"He brought her food to eat, talked to her 
and even slept next to her..."`;
   You(T4B108)`"It was the first time he had ever 
experienced true love."`;
   You(T4B109)`"Love for the statue he himself had created..."`;
   You(T4B110)`"He poured all the love that he had into her. 
He believed that one day, she would speak to 
him..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B111)`"But in the meantime, he neglected his work, 
he forgot to eat and sleep...and Pygmalion 
began to waste away."`;
   You(T4B112)`"People began to worry that he would die...so 
they prayed to the gods."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B113)`"And Pygmalion was agonizing as well..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B114)`"He was so sad to see her unable to speak, or 
eat, or sleep..."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B115)`"He thought that when he himself became old 
and went to heaven..."`;
   You(T4B116)`"She would have to continue standing there, 
just waiting to decay..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B117)`"To him, it was unthinkable—"`;

});
fgload({ id: 1, name: `YU18BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B118)`"If he couldn't be bound to her, it would be 
better to throw himself off a cliff."`;

});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B119)`"If only she was a real woman, with blood 
running through her veins..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(T4B120)`"It went on something like that..."`;

});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B121)`"Until his prayers reached Aphrodite, the 
goddess of love."`;
   You(T4B122)`"Aphrodite came down to him and told him to 
kiss his beloved statue."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B123)`"When he gently kissed her..."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B124)`"Her skin flushed pink, her eyes opened and 
she turned into a living woman."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B125)`"A woman as beautiful as the statue had 
been..."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B126)`"So they married, and even had children."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B127)`"He kept making even more beautiful 
sculptures for temples around the world, and 
they lived..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B128)`"Happily ever after."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Finally finished with her long story, You 
pinched her skirt and curtsied.`;

});
playSFX({ name: `SE10_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Coco and the Kid applauded her.`;
   Kid(T4B129)`"Hey, that was pretty interesting."`;
   Coco(T4B130)`"Bravo, bravo, bravissima..."`;
   `As for me...`;

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
   Takeshi`"Right, happily ever after..."`;
   `I applauded with them.`;
   Takeshi`"Never knew you knew so much, You."`;

});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B131)`"Well."`;
   `She drew up proudly.`;
   You(T4B132)`"I know a little about myth and folklore."`;
   `She raised a finger in front of her face, 
looking demure.`;

});
goto(lbl_00000c59);
let lbl_00000bfb;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"........."`;
   `Hunh.`;
   `I thought it was a pretty scholarly talk...`;
   `But I kept quiet and watched the faces of 
everyone.`;
   `With her finger still extended in front of 
her face, You spoke confidently.  `;

});
goto(lbl_00000c59);
let lbl_00000c0f;
showTextbox();
text(() => {
   `I raised my hand and declared... `;
   Takeshi`"I object—!"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B133)`"Yes?"`;
   Takeshi`"What's happily ever after about that story?"`;
   Takeshi`"It doesn't make any sense to me..."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B134)`"Why not?"`;
   Takeshi`"Pygmalion just had an obsession with his 
sculpture..."`;
   Takeshi`"He didn't work, he stayed inside talking to 
her..."`;
   Takeshi`"Thinking, 'Oh, if only my statue was a real, 
beautiful woman'..."`;
   Takeshi`"What a dark, depressing story...Pygmalion..."`;
   Takeshi`"I don't see anything happy about that."`;
   Takeshi`"He just happened to have his selfish request 
granted by a goddess. The end."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B135)`"Listen, you don't get it at all..."`;
   `You shook her finger at me.`;
   You(T4B136)`"That's not the point of the story, Takeshi"`;
   `She threw back her shoulders and started 
talking again.`;

});
let lbl_00000c59;
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B137)`"The story of Pygmalion..."`;
   You(T4B138)`"Shows that if you hope and ask and 
persevere, your wish will come true."`;

});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B139)`"His longing was answered because he put his 
heart into his sculpture, and then loved her, 
believing that she would speak to him one 
day..."`;
   Kid(T4B140)`"So that's it..."`;
   Coco(T4B141)`"Wow..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(T4B142)`"Okay, this is a little different, but this 
guy named Rosenthal wrote about something 
called the 'Pygmalion effect'."`;
   `She was acting like a professor on a soapbox.`;
   `It seemed like she was overdoing the whole 
thing.`;
   `But her ridiculous expressions were so 
amusing, I got drawn in.`;
   You(T4B143)`"It's not quite the same as the placebo 
effect."`;
   You(T4B144)`"But both of them involve believing in 
something."`;
   You(T4B145)`"So they both have to do with our chances of 
survival."`;
   You(T4B146)`"Just because the sushi in the display case 
is made of plastic, doesn't mean the sushi 
inside is cheap!!"`;
   Kid(T4B147)`"Whoa?!"`;
   Coco(T4B148)`"Wow..."`;

});
playSFX({ name: `SE10_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Her talk seemed to have been derailed like a 
nasty train wreck. I had no idea what she 
meant.`;
   `But the Kid and Coco were a rapt audience.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `BG26B3L`, transition: 20 });
playBGM({ num: 2, volume: 100 });
clock(`11:10`);
showTextbox();
text(() => {
   `Several minutes later...`;
   `Sometime during You's long speech, my brain 
started working again.`;

});
playSFX({ name: `SE01_07`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We all headed up the emergency stairs to the 
second floor.`;
   Coco(T4B149)`"Shall we all go and see Tsugumi?"`;
   Kid(T4B150)`"Yeah, I'd like to know how she's doing."`;
   You(T4B151)`"Me too. Let's all go check up on her."`;
   `Coco's proposal came out of the blue, but 
everyone agreed and headed upstairs.`;

});
if (l_confessed_the_truth_in_4th_day == 0) goto(lbl_00000dad);
showTextbox();
text(() => {
   Takeshi`"Wonder how she's doing?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B152)`"In any case, she needs rest."`;
   Takeshi`"Well, worrying about her won't make her 
better any faster."`;
   Kid(T4B153)`"Sora would let us know if anything had 
happened to her, right?"`;

});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T4B154)`"Yeah. And LeMMIH's always guarding the data 
in the infirmary's medical computer."`;
   You(T4B155)`"So since LeMMIH hasn't come to us with any 
news, it means that Tsugumi is probably 
sleeping peacefully."`;
   Kid(T4B156)`"Well, that's a relief."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B157)`"Right, nothing to worry abouteroon!"`;
   Pipi(PIPI_04)`"Woof!"`;
   Takeshi`"Yeah..."`;
   Takeshi`"Say, Coco?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B158)`"Yeah, what?"`;
   Takeshi`"What language is 'abouteroon'?"`;
   Coco(T4B159)`"Coco-ese."`;
   Takeshi`"Huh?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B160)`"Coco-ese!"`;
   Coco(T4B161)`"Whoah! Obstinate stubbornness! Geezers going 
swimming in the winter!"`;
   Coco(T4B162)`"There's abouteroo, too."`;
   Takeshi`"......."`;
   Pipi(PIPI_03)`"Waroof?"`;
   `Coco was always in upbeat mode...`;

});
goto(lbl_00000e0e);
let lbl_00000dad;
showTextbox();
text(() => {
   You(T4B163)`"Takeshi, didn't you already see Tsugumi when 
she woke up last night?"`;
   Takeshi`"Well, yeah."`;
   `Being asked forced me to remember the night 
before.`;
   `Tsugumi saying "I want to die..."`;
   `But then she'd eaten three sandwiches...`;
   `If she would just recover...`;
   Takeshi`"Wait up, You! You knew that I'd seen 
Tsugumi?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B164)`"Yup."`;
   You(T4B165)`"I heard from Sora this morning. About 
Tsugumi's condition, and your panicked 
running."`;
   You(T4B166)`"That midnight emergency staircase dash the 
Kid was talking about...it was Tsugumi, right?"`;
   Takeshi`"Alright, you listen here!"`;
   Takeshi`"A minute ago you were pretending to be a 
reporter, trying to get me to tell you."`;
   Takeshi`"Why do you ask about something you already 
know?"`;

});
fgload({ id: 1, name: `YU12BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B167)`"It's your fault for trying to be so 
mysterious! Hee hee..."`;
   Takeshi`"Y-y-you little...."`;
   `I hated to admit it, but she had taken me for 
a ride.`;
   `And I had no comeback.`;
   Takeshi`"So, uh, how do you think Tsugumi's doing? 
Aren't you worried about her?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B168)`"He's trying change the subject."`;
   Takeshi`"Shut up. If you know something, say it 
already."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B169)`"Well, LeMMIH is always guarding the 
infirmary's medical computer data..."`;
   You(T4B170)`"Since LeMMIH hasn't come to us with any 
news, it must mean that Tsugumi's sleeping 
peacefully, right?"`;
   Takeshi`"Well, that's a relief."`;

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
   `We reached the infirmary.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B171)`"We should have brought flowers."`;
   Takeshi`"And where do you think you'll find flowers?"`;

});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B172)`"Oh yeah, that's right!"`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `Entering first, I mustered a cheerful voice.`;
   Takeshi`"Hey, Tsugumi!"`;
   Takeshi`"You alive?"`;
   Takeshi`"I had to force them, but I dragged everyone 
along to see you!"`;

});
hideTextbox();
playSFX({ name: `SE05_02`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Pop!`;
   Takeshi`"Ow!"`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B173)`"Listen Takeshi, don't be mean like that."`;
   Takeshi`"...You don't have to push and poke me..."`;
   `Exchanging stupid banter, we approached the 
bed.`;
   Takeshi`"I did it on purpose, as a joke..."`;
   Takeshi`"You know, joke around, cheer her up a little 
bit..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B174)`"Really? I don't know..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B175)`"H-hey!"`;

});
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The Kid had stopped suddenly.`;
   `He was pointing at the bed in the back.`;
   Takeshi`"What the matter, Kid?  You discover a new 
species of something?"`;
   Kid`"......"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B176)`"Tsugumi's..."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid(T4B177)`"Tsugumi's gone..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `CO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B178)`"What?"`;
   Coco(T4B179)`"Whahoo?"`;
   Takeshi`"What!?"`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I ran to the bed in shock.`;
   `Everyone followed right behind me.`;

});
bgload({ name: `EV_TU10E`, transition: 20 });
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"She..."`;
   Takeshi`"She's gone! She's really not here!"`;
   `The bed was completely empty.`;
   `The covers were just the way they had been.`;
   `The pillow was the same.`;
   `But the IV tube and the heart monitor had 
been torn up and scattered around.`;
   Takeshi`"What the...why didn't LeMMIH pick up on this?"`;
   Takeshi`"LeMMIH was monitoring Tsugumi's data, right 
You?  What happened?"`;
   You(T4B180)`"I don't know...I have no idea."`;
   `She averted her eyes from mine.`;
   You(T4B181)`"Hey...!?"`;
   You(T4B182)`"Look at that!"`;
   `She pointed to the corner of the room.`;
   `Her finger was trembling a little.`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"!?"`;
   `The cord was torn off the medical computer, 
and the monitor had been smashed to pieces. `;
   `There had been an electrical short, and there 
was a burning stench around the area.`;

});
fgload({ id: 1, name: `YU18BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B183)`"Who could have done this...?"`;
   Takeshi`"That's what I'd like to know..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B184)`"Um, um, what's that?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `This time Coco had found something.`;
   `Under the computer console, there were some 
bandages and a long, skinny case of some sort. `;
   `A white, hard case...`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05BDM`, name2: `CO08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B185)`"Is this...?"`;
   Takeshi`"It's Tsugumi's brace, right?"`;
   You(T4B186)`"You're right. It's Tsugumi's."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B187)`"Which means..."`;
   Takeshi`"Tsugumi."`;
   Takeshi`"She took off her own brace and smashed up the 
computer."`;
   Takeshi`"She got out of bed, smashed the computer and 
then left the room..."`;
   `My thoughts leaped right out of my mouth.`;
   `It was hard to believe...`;

});
fgload({ id: 2, name: `CO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B188)`"Really!?"`;
   Coco(T4B189)`"But when I brought her the sandwiches, she 
still looked like she was in pain, in bed..."`;

});
fgload({ id: 2, name: `CO08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B190)`"You really think that Tsugumi...?"`;
   Takeshi`"Well what else could it be?"`;
   Kid(T4B191)`"Maybe someone ran off with her...?"`;
   Takeshi`"Someone...like who? Who's here besides us?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B192)`"It's crazy either way!"`;
   `You was shouting.`;
   You(T4B193)`"How could Tsugumi even walk on that leg?"`;
   You(T4B194)`"It was a serious injury! It should take 
over two months to heal!"`;

});
fgload({ id: 1, name: `YU14BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B195)`"In fact, in her condition, she shouldn't 
even be able to get out of bed..."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B196)`"And it's strange that LeMMIH didn't respond, 
even if the computer is broken..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B197)`"Even if someone had taken her out of here..."`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B198)`"The sensor on the ceiling should have picked 
it up..."`;
   `Saying that, You raised her eyes to the 
ceiling.`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `KA08ADS`, name2: `YU03BDS`, name3: `CO08ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T4B199)`"What in the world..."`;
   Coco(T4B200)`"Wai-wait, then..."`;
   Coco(T4B201)`"What happened to Tsugumi?" `;
   `Coco barely opened her mouth.`;
   Kid(T4B202)`"Maybe she was spirited away?"`;
   You(T4B203)`"Oh please."`;
   Takeshi`"......"`;
   `Tsugumi, disappeared?`;
   `We were all in shock.`;
   `Everyone kept talking, though.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `YU14BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B204)`"Spirited away?"`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B205)`"I don't believe that..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(T4B206)`"I don't believe..."`;
   `All of the color had drained from You's face, 
as she absorbed the enormity of what had 
happened.`;
   `She was holding her chest, looking up at the 
ceiling, in a cold sweat.`;
   You(T4B207)`"Uuugh..."`;
   Takeshi`"Calm down, You."`;
   Takeshi`"Don't freak out on me. Take deep breaths."`;

});
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B208)`"Uh...ugh..."`;
   You(T4B209)`"Oo....haaa...haa..."`;
   `She breathed in and out, slowly.`;
   `A little color came back to her face.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `But the question was what to do about 
the...situation.`;
   `What to do?`;
   Takeshi`"Hey, I know! We'll ask Sora!"`;
   Takeshi`"Where is Sora?"`;
   Takeshi`"She ought to know what happened, right?"`;

});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You looked at me with a glimmer of hope.`;
   You(T4B210)`"Y-yeah, you're right. Let's call her."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We rushed over to the LeMMIH terminal in the 
corner of the room.`;
   `Standing in front of the console, You began 
operating the panel.`;
   You(T4B211)`"If LeMMIH hasn't realized it yet, that may 
mean that Sora doesn't know yet either..."`;
   Takeshi`"But call her anyway. It's faster to ask her 
than to go on a blind search."`;
   You(T4B212)`"You're right."`;
   `Before long, there was a change in the 
terminal.`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Sora's image floated up in the monitor.`;
   Sora(T4B213)`"Yes?"`;
   You(T4B214)`"Sora, something terrible has happened.  
Tsugumi is missing..."`;
   Sora(T4B215)`"What!? Are you sure??"`;
   Sora(T4B216)`"I thought something had happened to the 
monitor in the room, but..."`;
   You(T4B217)`"What!? Why didn't you tell us!?"`;
   Sora(T4B218)`"I am terribly sorry. There has been terrible 
jamming, and...it had delayed me."`;
   Takeshi`"Jamming?  What's that?"`;
   You(T4B219)`"Electromagnetic interference?..."`;
   Sora(T4B220)`"How is the room? Is everyone there?"`;
   Takeshi`"Yes, other than Tsugumi, we're all here."`;
   Sora(T4B221)`"Because actually, my 'eyes' aren't working."`;
   Sora(T4B222)`"So I wasted time trying to confirm..."`;
   You(T4B223)`"Don't worry, Sora. We're all right."`;
   You(T4B224)`"Can you come right over?"`;
   Sora(T4B225)`"Yes, of course. Right away."`;
   `Sora disappeared from the monitor...`;
   `And instantly she was standing in front of us.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `YU13BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B226)`"Am I standing in the right place? Can you 
see me all right?"`;
   `Sora looked worried.`;
   Takeshi`"You're fine.... You really can't see?"`;

});
fgload({ id: 1, name: `SO13ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B227)`"It is getting better, but there is still 
something wrong."`;
   Sora(T4B228)`"I can tell approximately where you are 
standing, but not which way you are facing..."`;
   `She was talking to a spot just next to me.`;
   You(T4B229)`"Sora, Tsugumi's not in the infirmary. Can 
you search the other rooms?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B230)`"Let me try...I'll do a bio scan on the entire 
building."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `She put her hands on the LeMMIH terminal and 
started accessing it right away.`;

});
fgload({ id: 1, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B231)`"Hey, hey..."`;
   Kid(T4B232)`"Who are you guys talking to?"`;
   `The Kid asked us fearfully from over by the 
bed.`;

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
   `We left the infirmary.`;
   `Sora was bewildered by the sudden sensor 
trouble.  It was taking her a few minutes 
longer than usual to finish the bio scan.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU17BDM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B233)`"Sora wasn't able to see us, and sometimes we 
couldn't see her, so..."`;
   Kid(T4B234)`"Does that mean the ceiling sensors from the 
bed, over to the elevator are all temporarily 
broken?"`;
   You(T4B235)`"Yeah. That's what's affecting Sora."`;

});
fgload({ id: 2, name: `KA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T4B236)`"So she left through the emergency corridor."`;
   Takeshi`"Yeah. But she Tsugumi was kind enough to 
leave candles burning for us."`;
   `When we had found the emergency flares in the 
elevator, I was completely shocked.`;
   `She wanted to keep us away that badly?`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B237)`"Sorry to keep you waiting. I have the 
results of the bio scan."`;
   `After a delay, Sora appeared in the door of 
the infirmary.`;
   Takeshi`"And where has Tsugumi hobbled off to?"`;
   `She couldn't have gone far...in any case, we 
would find her, and when we did, we would 
figure everything out.`;
   Sora(T4B238)`"An EI has gone down to Dritte stock.  
Tsugumi is slowly moving past the isolated 
sector."`;
   Takeshi`"EI..?  Oh, 'EI' - the neutral buoyancy 
elevator!"`;
   Takeshi`"If we call it, EI will come to us, right?"`;
   Sora(T4B239)`"Yes."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Okay, I'll run over there."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B240)`"What? Hold on, Takeshi..."`;
   You(T4B241)`"You can only enter and exit that sector 
using EI, so if you just wait a little..."`;

});
if (l_tsugumi_flag == 0) goto(lbl_0000135f);
showTextbox();
text(() => {
   Takeshi`"We can't just let her be! What if her injury 
gets worse!?"`;
   Takeshi`"And besides, I want to hear a good 
explanation for why she ran off like this!"`;

});
goto(lbl_00001364);
let lbl_0000135f;
showTextbox();
text(() => {
   Takeshi`"We can't let her be out there. What if her 
injury gets worse?"`;
   Takeshi`"Why couldn't she just stay in bed...!?"`;

});
let lbl_00001364;
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06BDS`, name2: `SO06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T4B242)`"Hey, Takeshi!"`;
   Sora(T4B243)`"Takeshi?"`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I left them there and ran out.`;
   `The buoyancy elevator was right nearby.`;

});
bgload({ name: `BG26A3L`, transition: 20 });
bgload({ name: `BG23A1`, transition: 20 });
showTextbox();
text(() => {
   `I pushed the down button and called the 
elevator.`;
   `The lamp lit up, letting me know that it was 
working normally.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
bgload({ name: `BG24A1`, transition: 20 });
showTextbox();
text(() => {
   `I sprang in when the double doors opened.`;
   `The doors shut quickly and it started going 
down.`;
   `(If she doesn't use EI, she can't get up 
here...)`;
   `(Until I get there, she definitely can't 
leave the sector...)`;
   `(Alright...)`;
   `(Watch out Tsugumi, because here I come!!)`;
   `I cracked my knuckles.`;

});
removeBG({ mode: WHITE, transition: 2 });
if (l_tsugumi_flag == 0) goto(lbl_0000141e);
showTextbox();
text(() => {
   `Tsugumi had pushed herself, despite her 
injury, and gone off all alone...`;
   `Did she really mean to kill herself...?`;
   `Was she actually trying...?`;
   `Then maybe I should just let her.`;
   `But, still!!!`;
   `I wanted to give her a piece of my mind first!!`;
   `I hoped she would just stay alive long enough 
for me tell her all that I wanted to say...`;

});
goto(lbl_00001423);
let lbl_0000141e;
showTextbox();
text(() => {
   `She was always acting tough...`;
   `But I bet she was bawling by now.`;
   `I figured her leg would be killing her.`;
   `She'd gone so far that she probably couldn't 
get back even if she wanted to.`;
   `Maybe she was regretting it...?`;
   `What I really wanted to do was get in a 
couple good wisecracks, to pay her back for 
all the hard times she'd given me...`;
   `But I also felt a little sorry for her.`;

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
   `The doors opened.`;
   `The stale air of the isolated sector on the 
third floor flowed into my lungs.`;
   `Next to the elevator I had ridden in, another 
elevator was still stopped.`;
   `An elevator with a hole blasted in it...`;
   `You couldn't even smell the stench of acetone 
anymore.`;
   `I walked toward the end of the hallway, 
marshalling my wits.`;

});
bgload({ name: `BG26B1L`, transition: 20 });
showTextbox();
text(() => {
   `(What's that?...)`;
   `I realized that there was a room on the left 
side of the corridor that I hadn't seen 
during the power outage.`;
   `Thinking to explore a little, I set my foot 
inside.`;

});
bgload({ name: `BG05A1`, transition: 20 });
showTextbox();
text(() => {
   `A huge whale was stretched out.`;
   `It said 'Cosmic Whale' on the entrance.`;
   `Apparently that was the name of this 
attraction.`;
   `I couldn't tell from a quick glance exactly 
what the attraction was.`;
   `A whale floating in empty space.`;
   `The whole scene was surreal.`;
   `Was there an explanation written somewhere...?`;
   `(...Wait, I don't have time to waste like 
this...)`;
   `After making sure that Tsugumi wasn't there, 
I left through a different door.`;

});
bgload({ name: `BG18B1`, transition: 20 });
showTextbox();
text(() => {
   `I quickly reached the Generator Room.`;
   `The door said 'Kraftwerk.'`;
   `I pushed open the door and stepped inside.`;

});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG19B1`, transition: 20 });
showTextbox();
text(() => {
   `The facility was giving off a steady but low 
hum, and seemed to be working fine.`;
   `For better or for worse, in LeMU we didn't 
have to worry about the electricity.`;
   `I looked around, but there was no trace of 
Tsugumi.`;

});
playSFX({ name: `SE00_07`, a1: 0, volume: 90 });
bgload({ name: `BG18B1`, transition: 20 });
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   `Past the Generator Room, the corridor was 
completely blocked off by a partition.`;
   `It was impossible to go beyond it...`;
   `The only door left was the room on the right.`;
   `I decided to go in there.`;

});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG20B1`, transition: 20 });
showTextbox();
text(() => {
   `The room was full of pipes.`;
   `There was no sign on the door, but I supposed 
it would be called something like a 'pressure 
regulation room,' or something.`;
   `I assumed that the pipes must be connected to 
the boilers and turbines in the Generator Room.`;
   `Come to think of it, Tsugumi had done the 
repairs in there...`;

});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I remembered her closing a valve right with 
her tools spread around her...`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `(Huh?)`;
   `She was there.`;
   `Leaning in just like the time before.`;
   `She didn't have any tools. She wasn't closing 
off a valve.`;
   `Instead, craning her neck, she seemed to be 
looking over at the other side of the pipes.`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Hey, Tsugumi..."`;
   Takeshi`"What are you doing here?"`;
   `I pretended to be calm.`;

});
if (l_tsugumi_flag == 0) goto(lbl_0000156f);
showTextbox();
text(() => {
   `It wouldn't do to lose my temper right off 
the bat.`;
   `I suppressed the urge to shout. She was 
injured, after all...`;

});
goto(lbl_00001574);
let lbl_0000156f;
showTextbox();
text(() => {
   `I thought to proceed gently.`;
   `I wanted to handle the conversation right.`;

});
let lbl_00001574;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She stood up slowly and looked my way.`;
   Takeshi`"You looking for something?"`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B244)`"No, not really."`;
   `She stepped back as if she were keeping watch 
over me.`;
   `I could tell that she was agitated...`;
   `She hadn't expected to see me.`;
   `Her gaze didn't fix on anything...`;
   `Her eyes kept flitting to the pipes behind her.`;
   `Her gaze...`;
   `It bothered me...`;
   Takeshi`"What's behind you?"`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B245)`"...N....nothing..."`;
   Tsugumi(T4B246)`"There's nothing behind me."`;
   Takeshi`"Really?"`;
   `I casually tried to angle around so that I 
could see the pipes behind her.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B247)`"Don't come near me..."`;
   Tsugumi(T4B248)`"Don't get close..."`;
   `What?`;
   `She changed position.`;
   `She didn't want me to go behind her.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B249)`"Oh..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She had taken another step back and knocked 
something off.`;

});
playSFX({ name: `SE08_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clang, clang, plunk...`;
   `Along with a small splash of water, several 
screws or nuts fell into the crevice between 
ducts.`;

});
fgload({ id: 1, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She quietly looked around.`;
   `Favoring her right leg, she slowly turned...`;
   `With her back to me, she looked further back 
into the room.`;

});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Then took a relieved, if amazed, breath...`;
   `(What was going on?)`;
   `Then pushing me aside, she tried to head out 
of the room.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B250)`"...Move, you're in my way."`;
   Takeshi`"H-hey, Tsugumi...?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B251)`"Don't bother me..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Dragging her right leg, she tried to leave.`;
   Takeshi`"Wait!"`;
   `I put my hands on her shoulders.`;

});
hideTextbox();
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `But she shook them right off.`;

});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B252)`"Don't you touch me!"`;
   `She glared at me, without trying to hide her 
annoyance.`;
   Tsugumi(T4B253)`"I said you were in my way!"`;
   Tsugumi(T4B254)`"Leave me alone!"`;
   Tsugumi(T4B255)`"Why are you following me?"`;
   `She spat the words out all at once.`;
   `But I didn't let up and fired a question back 
at her.`;
   Takeshi`"What are you doing here? Are you looking for 
something?"`;
   Takeshi`"Or are you finishing up some repairs?"`;

});
fgload({ id: 1, name: `TU18ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"You won't answer stupid questions, is that 
it?"`;

});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B256)`"...What..."`;

});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B257)`"What are you doing here, yourself?"`;
   Tsugumi(T4B258)`"I'm free to do what I want, where I want."`;
   `She was trying to make a wall of words.`;

});
if (l_tsugumi_flag == 0) goto(lbl_00001750);
showTextbox();
text(() => {
   Takeshi`"Sure..."`;
   `I shot back, trying to make a crack in the 
wall that she had up.`;
   Takeshi`"I came here on my own. I left the others."`;
   Takeshi`"Because I heard that you came here on your 
own."`;

});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B259)`"Why...would you do that...?"`;
   Takeshi`"Because my hurt friend suddenly went missing 
that's why!"`;
   Takeshi`"Of course I came looking for you!"`;

});
goto(lbl_00001755);
let lbl_00001750;
showTextbox();
text(() => {
   Takeshi`"Listen...."`;
   `Searching for a way to reach her.`;
   Takeshi`"...I just came out of basic human decency."`;
   Takeshi`"It's not like everyone's happy about the way 
you keep doing things."`;
   Takeshi`"Because my injured friend suddenly went 
missing that's why!"`;
   Takeshi`"Of course I came looking for you."`;

});
let lbl_00001755;
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B260)`"Friend?"`;
   `Her expression grew more and more severe.`;
   Tsugumi(T4B261)`"I didn't ask you to come, and there's no 
reason for you to be here."`;
   Tsugumi(T4B262)`"I'm not like the others."`;
   Tsugumi(T4B263)`"So don't treat me like one of your gang."`;

});
if (l_tsugumi_flag == 0) goto(lbl_00001792);
showTextbox();
text(() => {
   Takeshi`"Tsugumi! Cut it out!"`;
   `I snapped.`;
   `I clenched my fist.`;
   `Then I shoved it in her face.`;
   `But I stopped it just in front of her nose...`;
   Tsugumi`"........."`;
   `She didn't even flinch.`;
   Takeshi`"Agh..."`;

});
goto(lbl_00001797);
let lbl_00001792;
showTextbox();
text(() => {
   Takeshi`"Alright, I get it!"`;
   Takeshi`"You are so unbelievably selfish...!"`;
   `I thought about pretending to raise my fist, 
but didn't do it.`;
   Tsugumi`"........."`;
   `Even if I did, she probably wouldn't flinch.`;
   Takeshi`"Agh..."`;

});
let lbl_00001797;
showTextbox();
text(() => {
   Takeshi`"Believe me, I don't want to be friends with 
someone like you."`;
   Takeshi`"But we don't have a choice."`;
   Takeshi`"We all want to get out of here!"`;
   Takeshi`"Don't you want to get our of here as soon as 
possible?"`;
   Takeshi`"As long as we're in the same boat, we're 
friends."`;
   Takeshi`"In Japan, people with the same goal are 
called friends..."`;
   Tsugumi(T4B264)`"Friends!?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B265)`"Friends, friends, friends, friends..."`;
   Tsugumi(T4B266)`"There you go again just saying that."`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B267)`"That kind of tired, hypocritical crap makes 
me sick."`;
   Takeshi`"......"`;

});
if (l_tsugumi_flag == 0) goto(lbl_000017e4);
showTextbox();
text(() => {
   `Tsugumi's voice stayed completely cool.`;
   `There was no place for my raised fist to go.`;

});
let lbl_000017e4;
showTextbox();
text(() => {
   Tsugumi(T4B268)`"And one more thing."`;
   Tsugumi(T4B269)`"Weren't you listening to me yesterday?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B270)`"I don't want to escape."`;
   Tsugumi(T4B271)`"So I'm not your 'friend'."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B272)`"I don't care if you are from Germany, 
America or Japan."`;
   Tsugumi(T4B273)`"Got it?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B274)`"I.Am.Not.Your.Friend."`;
   Tsugumi(T4B275)`"So.Do.Not.Talk.To.Me.Again."`;
   Takeshi`"......"`;

});
if (l_tsugumi_flag == 0) goto(lbl_0000184c);
showTextbox();
text(() => {
   `I lowered my hand.`;
   `I couldn't say anything.`;

});
goto(lbl_00001851);
let lbl_0000184c;
showTextbox();
text(() => {
   Tsugumi(T4B276)`"...Move."`;
   `I moved aside.`;

});
let lbl_00001851;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Giving me a glance, she moved toward the door 
dragging her foot.`;
   `She was moving awkwardly...`;
   `Still dragging her left foot...`;
   `Left foot...`;
   `Left foot?!?!`;
   `Did I say, LEFT foot!?`;
   Takeshi`"Whoah, whoah, whoah! Wait a second!"`;
   `I yelled with all my might.`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B277)`"What! I said don't talk to me!"`;
   `She turned around forcefully.`;
   Takeshi`"Your foot..."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B278)`"What?"`;
   Takeshi`"Your foot..."`;
   Takeshi`"...Is it all right?"`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"The leg you hurt the other day...was your 
right leg, wasn't it?"`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Her face stiffened.`;
   `Her eyes flicked away.`;
   `She averted her gaze.`;
   `She stood rock still.`;
   `What was...`;
   `...going on?`;
   Takeshi`"Let me see."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I grabbed the hem of her skirt.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And without hesitating yanked it up.`;

});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4B279)`"!!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `—Whack!!`;
   `An immediate, brutal slap...`;
   Takeshi`"......"`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tsugumi took off running.`;
   `The sound of her footfalls grew faint. As 
did her shadow, disappearing down the hallway.`;
   `What was left was me, stunned.`;

});
hideTextbox();
stopSFX()
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   `She had hammered my cheek.`;
   `I might have broken teeth.`;
   `I might have a nosebleed.`;
   `She hit me so hard my brain rattled.`;
   `But I didn't feel any pain...`;
   `(Compound fracture of the right thighbone.)`;
   `(Injuries requiring 40 stitches—)`;
   `(And she could run a day later???)`;

});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 90 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG23A1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B280)`"Welcome back, Takeshi."`;
   `Sora greeted me as I stepped out of the 
elevator into Zweite stock.`;
   Takeshi`"Thanks."`;
   Sora(T4B281)`"Takeshi - your face is swollen?"`;
   Takeshi`"Yeah, I know."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   `Sora readied a compress for me back in the 
infirmary.`;
   `I left the room holding it.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B282)`"It seems that Tsugumi will come back to this 
floor in a little while."`;
   Sora(T4B283)`"But..."`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B284)`"But if we do find her, try not to get mad or 
yell at her."`;
   Takeshi`"Huh?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B285)`"For a little while, I think it is best if we 
let her do as she wants."`;
   Takeshi`"But...why?"`;
   `I pressed the compress to my cheek.`;
   `It started to hurt right about the time I had 
forgotten about it...`;
   Sora(T4B286)`"Don't you think she might be quite nervous 
right now?"`;
   Sora(T4B287)`"She's thinking about things..."`;
   Sora(T4B288)`"She's pondering all sorts of things in her 
heart..."`;
   Sora(T4B289)`"Everyone's words will fall on deaf ears..."`;
   Sora(T4B290)`"She's not able yet to just listen. Of 
course..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B291)`"You're worried about her injuries, but for a 
little while, let's leave her alone."`;
   Sora(T4B292)`"If she is in any serious danger, I will let 
you know right away."`;
   Sora(T4B293)`"So for just a little while....please, 
Takeshi."`;
   Takeshi`"Ah...all right."`;
   `I nodded assent to Sora's earnest request.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `I went slowly down the stairs of Dritte stock.`;
   `My footsteps echoed quietly.`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B294)`"I don't think it is an accident that she 
came to be here."`;
   `Sora continued speaking right next to me.`;
   Takeshi`"Not an accident?"`;
   Sora(T4B295)`"I do not know the details."`;
   Sora(T4B296)`"This is the first time for me to encounter a 
case like her's. I don't have any data for 
this..."`;
   Sora(T4B297)`"But it seems to me that she has her reasons."`;
   Sora(T4B298)`"Reasons that are difficult to explain..."`;
   Sora(T4B299)`"Something that is hard for others to 
understand..."`;
   Sora(T4B300)`"Something that compelled her to act even if 
it made her injuries worse..."`;
   Sora(T4B301)`"That's what I feel."`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B302)`"Earlier, You was saying the same thing."`;
   Takeshi`"You was?"`;
   Sora(T4B303)`"Yes..."`;
   Sora(T4B304)`"That we shouldn't probe. That until she 
wants to tell us, we shouldn't press for 
information..."`;
   Takeshi`"I see..."`;
   `Maybe I had gotten a little too close to her 
boundaries.`;
   `Boundaries she didn't want invaded.`;
   `Whatever feelings and reasons she didn't want 
us to know about.`;
   `Was that why I was warned, harassed and 
pummeled...?`;
   `If I thought about it that way, it made more 
sense.`;
   Takeshi`"Well...maybe so. Maybe I came down too 
hard..."`;

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
   `At last we reached the third floor.`;
   `I had heard from Sora that You and the Kid 
were holed up in the Central Control Room 
because she wanted to figure something out.`;
   `She said that Coco and Pipi had gone off 
somewhere on a walk.`;
   Takeshi`"Hmmm...wonder where they went?"`;
   `When I asked Sora that, she put her finger to 
her lips and smiled.`;
   Sora(T4B305)`"Shall we say, individual study time?"`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `BG17A1`, transition: 20 });
clock(`12:51`);
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   `We were the only ones in the Conference Room.`;
   `Study time...`;
   `Sora turned over the observation of LeMU to 
the automatic LeMMIH control system for a few 
hours.`;
   `That would ensure Tsugumi and You some 
privacy...`;
   `And give Sora a break, too.`;
   `So, there she sat, in a chair in the 
Conference Room, looking at the white board.`;
   `I stood at the whiteboard, dry marker in hand, 
playing professor.`;
   `A private lesson, one-on-one.`;
   `The reason that we started that was....`;
   `'Coco and the Kid were giving rave reviews of 
You's speech...'`;
   `'What was it like? I asked her, but she 
wouldn't tell me.'`;
   `'Takeshi, do you know?'`;
   `'Well, yeah, but...it's not like I have the 
whole thing memorized...'`;
   `'I know, I'll give you a lecture just as 
good...no, better than You's!'`;
   `—and that's how it started.`;
   `The title of my lecture was 'The Psychology of 
Love'...`;
   `I was playing to the crowd.`;
   `But I hadn't decided what I would talk about.`;
   `It was all ad lib.`;
   Takeshi`"Let's see..."`;
   Takeshi`"When is your birthday, Ms. Akanegasaki?"`;
   `I would just choose a random starting point.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B306)`"Takeshi? What do you..."`;
   Takeshi`"No, no, no, no..."`;
   `I wagged my finger in front of my face. Then—`;
   Takeshi`I pointed at Sora, and said,`;
   `"Ms. Akanegasaki,"`;
   Takeshi`"Professor Takeshi,"`;
   `I said, and pointed at myself.`;
   Takeshi`"Comprendez-vous? Okay?"`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B307)`"Ah, oui..."`;
   `She nodded.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B308)`"Professor Takeshi."`;
   Takeshi`"Very good. Once again."`;
   Takeshi`"When is your birthday, Ms. Akanegasaki?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B309)`"Development of LeMMIH started on September 
16, 1992."`;
   Sora(T4B310)`"The prototype was finished in October of 
2000."`;
   Sora(T4B311)`"Actual operation of the 'Sora' RSD System 
began in April, 11 years later."`;
   Sora(T4B312)`"Which means that I was born on April 2, 2011."`;
   Takeshi`"2011?"`;
   Takeshi`"Oh my, oh my, what a very young student you 
are."`;
   Takeshi`"Wait, you're only six-years-old?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B313)`"No, I'm 24."`;
   Takeshi`"How's that?"`;
   Sora(T4B314)`"I am not sure of the reason myself."`;
   Sora(T4B315)`"This year and last, even three and four 
years ago, I've been 24."`;
   Sora(T4B316)`"I've been 24 since I was born."`;
   Sora(T4B317)`"Of course it's just my programmed age..."`;
   Sora(T4B318)`"I don't actually age like humans do..."`;
   Sora(T4B319)`"So I'll always be 24, eternally, I'm afraid."`;
   `I have to admit it would have been strange to 
hear her say "I'm 41," looking the way she did.`;
   `They must have predicted that such a time 
would come, and fixed her eternally at 24.`;
   Takeshi`"Okay, okay..."`;
   Takeshi`"I see. Then I shall accept that you are 24, 
Ms. Akanegasaki."`;
   Takeshi`"In that case, I think that you should learn 
the appropriate behavior for a someone your 
age."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B320)`"Um..."`;
   `She cocked her head to the side, a little 
bewildered.`;
   Sora(T4B321)`"You mean that I don't seem 24 right now?"`;
   Takeshi`"Yes, that is exactly my point -"`;
   Takeshi`"Your average 24-year-old is..."`;
   Takeshi`"Um...more...how can I say..."`;
   Takeshi`"Has a bit more...sparkle."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B322)`"Sparkle?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B323)`"Are you saying that my face should be more 
shiny?"`;
   Takeshi`"No, no, that's not what I mean..."`;
   Takeshi`"24 is when you start thinking about marriage."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B324)`"Ah...marriage."`;
   Takeshi`"You become friends with someone at 24, then 
date for a few years, and marry around 26 or 
27."`;
   Takeshi`"That's the key - marrying into moola."`;
   Sora(T4B325)`"Moola?"`;
   Sora(T4B326)`"Does that have to do with cows?"`;
   Takeshi`"No,no..."`;
   Takeshi`"I guess my reference was a little dated..."`;
   Takeshi`"Listen up, you're asking too many questions!"`;
   Takeshi`"Be quiet until your teacher stops talking!"`;
   Takeshi`"I'll take all questions at the end. All 
right?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora nodded silently.`;
   Takeshi`"Ahem."`;
   Takeshi`"Now then, to go back to what I was saying..."`;
   Takeshi`"Sparkle means..."`;
   Takeshi`"It's the gleam in your eyes as you 
frantically search for the object of your 
affection - all, of course, as a preamble to 
getting married."`;
   Takeshi`"That is what I am speaking of."`;
   Takeshi`"Until 23, you choose a man who will be an 
appropriate boyfriend."`;
   Takeshi`"After 24, you choose a man who will be an 
appropriate husband."`;
   Takeshi`"You might think that an appropriate husband 
would be one who promises a bright future..."`;
   Takeshi`"But to borrow the words of the ancients, it 
all comes down to the three 'heights.'"`;
   Takeshi`"High education, high salary, high in stature."`;
   Takeshi`"That would be the ideal individual..."`;
   Takeshi`"You think there's really guys like that out 
there?"`;
   Takeshi`"If you're feeling greedy, you might also 
look for someone who's kind and handsome, and 
cares more about his family than his job."`;
   Takeshi`"Ah...in other words..."`;
   Takeshi`"What!!! You could search the whole world and 
never find a guy like that!!!"`;
   Sora`"......"`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B327)`"Professor, you seem upset..."`;
   Takeshi`"Sorry, it's a little traumatic..."`;
   Takeshi`"Ahem. Excuse me."`;
   Takeshi`"So because of all that, the 24-year-old 
women can be a very severe creatures."`;
   Takeshi`"Clever and calculating."`;
   Takeshi`"And in order to bring down her prey, she 
must have the social skills of a little devil."`;
   Takeshi`"Do you understand?"`;
   Sora`"......"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She cocked her head.`;
   `I wanted to sigh, but I pulled myself 
together to make a declaration.`;
   Takeshi`"Well, perhaps it is better if you put this 
theory into practice."`;
   Takeshi`"Let us try it."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B328)`"All right, Mr. Takeshi."`;
   Takeshi`"Professor."`;
   Sora(T4B329)`"Yes, Professor Takeshi. I will try my very 
best."`;
   Takeshi`"No, no, no, no..."`;
   Takeshi`"That kind of talk is a no-no."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B330)`"Huh?"`;
   Takeshi`"Not "Yes, I will try my very best," but..." `;
   Takeshi`"More, you know, devilishly! Coquettishly!"`;
   Takeshi`"One, two, three, go!"`;

});
fgload({ id: 1, name: `SO18ADM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Sora(T4B331)`"The hell!? 'ssif I can do som'n like that 
right away!? I'll kill you, you bastard! 
Bwa, bwa, bwaawkk."`;
   Takeshi`"N-no, no, that's all wrong."`;
   Takeshi`"That's not devilish, it's downright demonic."`;
   Takeshi`"And that's not coquetry, that's poultry."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B332)`"Professor, this is bit too difficult for me 
to start with."`;
   Takeshi`"Really."`;
   Sora(T4B333)`"Yes."`;
   Takeshi`"Alright then, how about you start by not 
speaking so formally?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B334)`"Yes, something like that will be better. 
Something easier."`;
   Takeshi`"Using the same example..."`;
   Takeshi`"Yes, I will try my very best."`;
   Takeshi`"In casual conversation, this would be 'Sure, 
I'll give it a try.'"`;
   Sora(T4B335)`"Sure, I'll give it a try."`;
   Takeshi`"See, you can do it if you try!"`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora's face was lit up with a smile...`;
   Sora(T4B336)`"This is interesting! Please teach me more."`;
   `Her eyes shone...`;
   Takeshi`"'This is, like, sooo fun!' - now, you try."`;

});
fgload({ id: 1, name: `SO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B337)`"This is, like, sooo fun!"`;
   `We did this for several hours...`;
   `.....................`;
   `.........`;
   `...`;

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
   Takeshi`"Alright! The time has come to see the 
fruits of your labor!"`;
   Takeshi`"Go forth, my prize pupil!"`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG21B1`, transition: 20 });
clock(`15:29`);
showTextbox();
text(() => {
   `Coco and Pipi were jumping up and down in the 
rest area.`;

});
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B338)`"Oh, Miss Sooora!"`;
   Pipi(PIPI_04)`"Woof, woof!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `SO12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B339)`"Hey, Sora, Sora? Did you find Tsugumi?"`;
   Sora(T4B340)`"Hunh? Tsugumi? I haven't seen her..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO17ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B341)`"Annywayz, Coco, don'tcha know any cute guys 
you could hook me up with?"`;
   Sora(T4B342)`"The guys at this party last week were, were 
like, such losers..."`;
   Coco(T4B343)`".....So-Sora???"`;

});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B344)`"I was like, I'm sicka eldest sons, man! I 
want something fresh!"`;

});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B345)`"And then, they wanted to go Dutch."`;
   Sora(T4B346)`"Can you believe it? It's, like, total junk!?"`;

});
fgload({ id: 1, name: `CO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco`"........."`;

});
fgload({ id: 1, name: `CO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T4B347)`"Waaaaaahhhhhhh...."`;
   `Coco burst into tears.`;
   Pipi(PIPI_24)`"Woooohhhhoooooo"`;
   `Pipi let out a terrified roar.`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B348)`"Whah, what's the matter?"`;

});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B349)`"You don't like my new way of talking?"`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   You(T4B350)`"Hey, what's going on?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `YU04BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `You came running.`;

});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `SO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B351)`"Oh, hey, it's You!"`;
   Sora(T4B352)`"I haven't heard from you for, like, forever, 
girl. What, are you like busy like a bee or 
something?"`;

});
fgload({ id: 2, name: `YU06BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T4B353)`"What???"`;
   You(T4B354)`"What's happened to you, Sora...?"`;

});
fgload({ id: 1, name: `SO18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B355)`"What're you lookin' all scared for?"`;
   Sora(T4B356)`"Really, how NOT cool. Hurry up and put an 
end to your work then..."`;

});
fgload({ id: 1, name: `SO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T4B357)`"You wanna go clubbing or something? Don't 
you just wanna stay out ALL night?"`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You`"......"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B358)`"!!??"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T4B359)`"Takeshi!!! Did you do this!?!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `So.......`;
   `Due to the general outcry, Sora went back to 
talking like her original self...`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_4C`);
