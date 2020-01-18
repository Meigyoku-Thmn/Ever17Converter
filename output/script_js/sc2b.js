l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S103`); appendText; 
   Takeshi`"Hey, Kid. So what're you gonna do?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who? Me...?"`;
   waitForClick; 
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
   marker; appendText; 
   Kid`"I'm going to help out You."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S104`); appendText; 
   Takeshi`"Okay. In that case, Sara and 
I will hold down the fort here."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S105`); appendText; 
   Takeshi`"You can't complain about that, right?"`;
   waitForClick; clearText; marker; sound(`C2S106`); appendText; 
   You`"Okay."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S107`); appendText; 
   Takeshi`"Geez. Damned if I do, damned if I don't..."`;
   waitForClick; clearText; marker; appendText; 
   `It seemed that Takeshi was oblivious to his 
disturbing dream the night before.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I figure that You is concerned about you in 
her own way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like when she had had you carry the heavy 
toolbox...maybe it was her way of saying 
'rest a bit' or 'take it easy.'"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S108`); appendText; 
   Takeshi`"You think so? That's a pretty generous 
interpretation, I'd say."`;
   waitForClick; clearText; marker; sound(`C2S109`); appendText; 
   Takeshi`"Oh well. In that case, I guess Sara and I 
will just have to sit back and 
relax - together."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S110`); appendText; 
   Sara`"Just so you know, I'm a third-degree black 
belt in Aikido."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S111`); appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`C2S112`); appendText; 
   Sara`"And also in karate, and second-degree in 
kendo, and in archery, and a seventh in Iga 
Style Ninjutsu."`;
   waitForClick; clearText; marker; sound(`C2S113`); appendText; 
   Takeshi`"???"`;
   waitForClick; clearText; marker; sound(`C2S114`); appendText; 
   Sara`"So basically...you'd better not try anything 
on me, you got it?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"..............."`;
   waitForClick; clearText; marker; sound(`C2S115`); appendText; 
   You`"Kid, should we get going?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, yeah..."`;
   waitForClick; clearText; marker; appendText; 
   `You and I left the increasingly tense 
atmosphere behind.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `The room was covered in a massive web of pipes.`;
   waitForClick; clearText; marker; appendText; 
   `The pipes continued into the adjacent 
Generator Room. It seemed that by opening 
and closing the valves, the water and oil 
pressure could be adjusted.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `'Normally LeMMIH is responsible for 
maintaining the Generator Room, but even 
LeMMIH can't do much when the generator itself 
goes out.'`;
   waitForClick; clearText; marker; appendText; 
   `'Anyhow, this is all because the power supply 
is down.'`;
   waitForClick; clearText; marker; appendText; 
   `'This room is designed so that maintenance can 
be performed manually at times like this, or 
during blackouts.'`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `...that was what You told me.`;
   waitForClick; clearText; marker; appendText; 
   `You selected one pipe from the countless rows 
of them and instructed me to close its valve.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `As ordered, I turned the valve around and 
around.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You?"`;
   waitForClick; clearText; marker; appendText; 
   `I said this as I was closing the valve.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S116`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's about the girl from yesterday."`;
   waitForClick; clearText; marker; sound(`C2S117`); appendText; 
   You`"Yesterday? You mean the seventh survivor you 
said you saw?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S118`); appendText; 
   You`"You're sure your eyes weren't playing tricks 
on you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm positive. These eyes saw her."`;
   waitForClick; clearText; marker; sound(`C2S119`); appendText; 
   You`"Maybe you've got some kind of eye disease."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Dis....disease...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S120`); appendText; 
   You`"I'm kidding...it's a joke. Why do you always 
take everything seriously?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Enough already!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S121`); appendText; 
   You`"Alright, alright...I'll listen to your 
stories of unidentified survivors later."`;
   waitForClick; clearText; marker; sound(`C2S122`); appendText; 
   You`"Right now we have to work."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   `Finally the valve was completely shut.`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C2S123`); appendText; 
   You`"That should do it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You, can we talk now...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S124`); appendText; 
   You`"Let's get back to Takeshi and Sara."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `You took off from the room as if she were a 
fugitive on the run.`;
   waitForClick; clearText; marker; appendText; 
   `I was left in the room alone...`;
   waitForClick; clearText; marker; appendText; 
   `I felt an unclear mess of feelings stewing 
inside my mind.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `With this we would be able to shut off the hot 
water flowing to the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   `Even so, on the other side of the door, it was 
still hot enough to scald.`;
   waitForClick; clearText; marker; appendText; 
   `The four of us waited outside the Generator 
Room until we could be sure that the 
temperature inside had cooled enough.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
goto(lbl_00000c5a);
let lbl_000002d0;
l_chose_to_wait_there_in_2nd_day = 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I'll...wait here."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA02ADS`, name2: `YU07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S125`); appendText; 
   Takeshi`"So what are we going to do?"`;
   waitForClick; clearText; marker; sound(`C2S126`); appendText; 
   You`"Oh well...then I'll have to make do with 
Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S127`); appendText; 
   Takeshi`"Geez. You're a piece of work. Can't you let 
your real feelings show?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S128`); appendText; 
   You`"Don't be getting any strange ideas. You do 
and I'll knock you down. Got it?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S129`); appendText; 
   Takeshi`"...Take it easy. There's no way I'd try 
something on you, even by mistake."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `When the two of them disappeared at the far 
end of the corridor they were still going at 
it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S130`); appendText; 
   Sara`"Those two..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S131`); appendText; 
   Sara`"I don't know, I think they make a pretty good 
couple, don't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You think so?"`;
   waitForClick; clearText; marker; sound(`C2S132`); appendText; 
   Sara`"Yeah. Nakkyu is the kind of person that tells 
people she likes what she really thinks...she 
speaks her mind."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmmm."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S133`); appendText; 
   Sara`"Takeshi kind of seems like that, too."`;
   waitForClick; clearText; marker; appendText; 
   `I wasn't sure why...but somehow I was a little 
jealous of You and Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   `Even if I wanted to, I couldn't open up to 
anyone like that...I had nothing to share...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `A while after the two had disappeared...`;
   waitForClick; clearText; marker; appendText; 
   `Sara and I hadn't spoken another word.`;
   waitForClick; clearText; marker; appendText; 
   `The two of us just leaned against a wall and 
stared into the darkness.`;
   waitForClick; clearText; marker; appendText; 
   `I was desperately trying to think of some way 
to break through the wall that had formed 
between us.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, how old are you?"`;
   waitForClick; clearText; marker; appendText; 
   `Finally the words tumbled out of my mouth.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 6, volume: 100 });
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S134`); appendText; 
   Sara`"Where did that come from...? I thought 
I told you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't think so."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S135`); appendText; 
   Sara`"I'm a junior. I'm 16 and was born January 21. 
Oh, and I'm an Aquarius."`;
   waitForClick; clearText; marker; appendText; 
   `Sara rattled it off so smoothly she might have 
been singing a song she knew.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S136`); appendText; 
   Sara`"And you, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm..."`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know.`;
   waitForClick; clearText; marker; appendText; 
   `When I tried to remember, it was like my mind 
would fog over.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't get close to it. It was like a 
mirage in the desert.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...wonder how old I am."`;
   waitForClick; clearText; marker; sound(`C2S137`); appendText; 
   Sara`"You don't know that either?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nope."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S138`); appendText; 
   Sara`"Hmmm, that's kind of sad."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S139`); appendText; 
   Sara`"But maybe it's good in a way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S140`); appendText; 
   Sara`"Well, maybe it was something that you wanted 
to forget about......"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S141`); appendText; 
   Sara`"Just kidding."`;
   waitForClick; clearText; marker; appendText; 
   `Sara's expression relaxed into a silly look.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-what...don't scare me like that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S142`); appendText; 
   Sara`"Sorry."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S143`); appendText; 
   Sara`"I know. Maybe if I chopped you down, we'd 
find out how old you are."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`C2S144`); appendText; 
   Sara`"You know, maybe you've got rings 
like a tree stump."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   `For some reason my eyes strayed to the palms 
of my hands.`;
   waitForClick; clearText; marker; appendText; 
   `In the darkness only dimly illuminated by the 
emergency lights my fingers appeared to glow 
slightly white.`;
   waitForClick; clearText; marker; appendText; 
   `I still didn't know what had happened to my 
finger.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S145`); appendText; 
   Sara`"Your finger..."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `Muttering this, Sara grabbed my finger.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   `It was so sudden it put me at a loss for words.`;
   waitForClick; clearText; marker; appendText; 
   `In the darkness Sara whispered words as if 
confirming something as she gripped my thumb.`;
   waitForClick; clearText; marker; sound(`C2S146`); appendText; 
   Sara`"Moon sprite...shouldering ...a long bow."`;
   waitForClick; clearText; marker; sound(`C2S147`); appendText; 
   Sara`"Waiting...inside a dream..."`;
   waitForClick; clearText; marker; appendText; 
   `....`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What does that mean?"`;
   waitForClick; clearText; marker; appendText; 
   `Sara just shook her head. There was no sign 
that she was going to answer me.`;
   waitForClick; clearText; marker; appendText; 
   `She just murmured the words like a spell or a 
nursery rhyme as she gently held my thumb.`;
   waitForClick; clearText; marker; appendText; 
   `(A moon sprite...)`;
   waitForClick; clearText; marker; appendText; 
   `I wondered why Sara had suddenly grabbed my 
thumb.`;
   waitForClick; clearText; marker; appendText; 
   `Still, I didn't have any urge to pull it away 
from her...`;
   waitForClick; clearText; marker; appendText; 
   `As I remained aware of my thumb, I searched 
for an answer from Sara's slightly sweaty, 
warm palm.`;
   waitForClick; clearText; 
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
   marker; sound(`C2S148`); appendText; 
   You`"Sorry it took us so long."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S149`); appendText; 
   Takeshi`"I think we'll be okay now."`;
   waitForClick; clearText; marker; sound(`C2S150`); appendText; 
   You`"It was a hassle looking for the valve, but..."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `With the two back, Sara finally released my 
thumb.`;
   waitForClick; clearText; marker; appendText; 
   `In the darkness I couldn't very well make out 
Sara's expression.`;
   waitForClick; clearText; marker; appendText; 
   `The area around Sara's mouth pulled slightly 
down, as if she were sad.`;
   waitForClick; clearText; marker; appendText; 
   `Warmth lingered around my thumb.`;
   waitForClick; clearText; marker; appendText; 
   `I don't know why, but I hesitated to wipe the 
warmth away and gently inserted my hand into 
my pocket leaving my thumb extended.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `With that, we had been able to shut off the 
hot water flowing to the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   `Even so, on the other side of the door, it was 
still hot enough to scald.`;
   waitForClick; clearText; marker; appendText; 
   `The four of us waited outside the Generator 
Room until we could be sure that the 
temperature inside had cooled enough.`;
   waitForClick; clearText; 
});
monoColorOverlay({ interval: 0, color: BLACK });
goto(lbl_00000c5a);
let lbl_000005c8;
l_coco_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Why don't we all go?"`;
   waitForClick; clearText; marker; appendText; 
   `That was my idea.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `YU07ADS`, name2: `KB07ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"..."`;
   waitForClick; clearText; marker; sound(`C2S151`); appendText; 
   You`"Well, I guess that is an option..."`;
   waitForClick; clearText; marker; sound(`C2S152`); appendText; 
   Takeshi`"There's no reason we have to split into 
teams of two..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S153`); appendText; 
   Sara`"And that way Takeshi won't go putting the 
moves on me."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `YU02ADS`, name2: `KB04ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S154`); appendText; 
   Takeshi`"I said I'm not interested."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `So all four of us ended up moving to the room 
together.`;
   waitForClick; clearText; marker; appendText; 
   `The room was covered in a massive web of pipes.`;
   waitForClick; clearText; marker; appendText; 
   `The pipes continued into the adjacent 
Generator Room. It seemed that by opening 
and closing the valves, the water and oil 
pressure could be adjusted.`;
   waitForClick; clearText; marker; appendText; 
   `'Normally LeMMIH is responsible for 
maintaining the Generator Room, but even 
LeMMIH can't do much when the generator itself 
goes out.'`;
   waitForClick; clearText; marker; appendText; 
   `'Anyhow, this is all because the power supply 
is down.'`;
   waitForClick; clearText; marker; appendText; 
   `'This room is designed so that maintenance can 
be performed manually at times like this, or 
during blackouts.'`;
   waitForClick; clearText; marker; appendText; 
   `...That was what You told me.`;
   waitForClick; clearText; marker; appendText; 
   `You selected one pipe from the countless rows 
of them and instructed Takeshi to close its 
valve.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU18ADM`, name2: `KB14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S155`); appendText; 
   Takeshi`"Geez. You sure have a knack for abusing 
folk..."`;
   waitForClick; clearText; marker; appendText; 
   `As he complained, Takeshi did as You had 
ordered and turned the valve shut.`;
   waitForClick; clearText; marker; appendText; 
   `Sara and I just stood off to the side watching 
the work unfold.`;
   waitForClick; clearText; marker; appendText; 
   `Finally...`;
   waitForClick; clearText; marker; sound(`C2S156`); appendText; 
   Takeshi`"Uggghh. Arggh!"`;
   waitForClick; clearText; marker; sound(`C2S157`); appendText; 
   Takeshi`"Damn. It's no good..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S158`); appendText; 
   Takeshi`"You, this won't close..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S159`); appendText; 
   You`"Geez. You wimp...you're a man, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S160`); appendText; 
   Takeshi`"You can say what you want, but this valve 
ain't gonna get shut any faster!"`;
   waitForClick; clearText; marker; sound(`C2S161`); appendText; 
   Takeshi`"It's rusted solid! It won't even budge!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S162`); appendText; 
   You`"Well, how about trying a wrench?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S163`); appendText; 
   Takeshi`"Wrench?"`;
   waitForClick; clearText; marker; sound(`C2S164`); appendText; 
   You`"There's a bolt on the handle, right?"`;
   waitForClick; clearText; marker; sound(`C2S165`); appendText; 
   You`"If you can get a wrench on it, it might move."`;
   waitForClick; clearText; marker; sound(`C2S166`); appendText; 
   Takeshi`"Oh. A wrench, huh...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S167`); appendText; 
   Takeshi`"Hey, Kid!... You heard her. Gimme the toolbox 
already, would ya?"`;
   waitForClick; clearText; marker; appendText; 
   `I peered around in the darkness.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `KB04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S168`); appendText; 
   Takeshi`"What're you doing? I said get me the toolbox!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...there isn't one here."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S169`); appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`C2S170`); appendText; 
   Sara`"Takeshi, did you forget to bring it?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S171`); appendText; 
   Takeshi`"Oh! Crap! I left it in front of the Generator 
Room..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S172`); appendText; 
   You`"*sigh* This sucks..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright, alright, I'll go get it."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I ran, heading for the exit.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Water splashed as I ran along the route we had 
come along.`;
   waitForClick; clearText; marker; appendText; 
   `But the Generator Room was practically 
next-door.`;
   waitForClick; clearText; marker; appendText; 
   `Less than 30 feet later, I turned the corner 
and entered the corridor leading to in front 
of the Generator Room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG18B2`, transition: 26 });
stopSFX()
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh, there it is!"`;
   waitForClick; clearText; marker; appendText; 
   `The toolbox was sitting right in front of the 
door.`;
   waitForClick; clearText; marker; appendText; 
   `I headed toward it.`;
   waitForClick; clearText; marker; appendText; 
   `Every time I put my foot down on the floor, 
little ripples formed on the surface of the 
water.`;
   waitForClick; clearText; marker; appendText; 
   `The tiny circles of waves collided with the 
wall and bounced off of the side of the 
toolbox, rippling out in regular 
concentric rings.`;
   waitForClick; clearText; marker; appendText; 
   `It was dark. Still, I was able to sense the 
changes and coldness in the movement of the 
water.`;
   waitForClick; clearText; marker; appendText; 
   `My vision felt surprisingly sharp.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `It happened just then...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Splash!`;
   waitForClick; clearText; marker; appendText; 
   `There was a big splash and spray of water.`;
   waitForClick; clearText; marker; appendText; 
   `It came from around the right side of the 
wall...nearly below the operating console.`;
   waitForClick; clearText; marker; appendText; 
   `The droplets of water scattered gently around 
my legs.`;
   waitForClick; clearText; marker; appendText; 
   `The ripples on the surface of the water gently 
bumped against my feet.`;
   waitForClick; clearText; marker; appendText; 
   `A fear like I had never felt chilled me to 
the core.`;
   waitForClick; clearText; marker; appendText; 
   `I readied myself for anything, facing the 
darkness.`;
   waitForClick; clearText; marker; appendText; 
   `Just then...`;
   waitForClick; clearText; marker; sound(`C2S173`); appendText; 
   //??
   Unk`"Moon sprite shouldering a long bow."`;
   waitForSound; clearText; marker; sound(`C2S174`); appendText; 
   //??
   Unk`"Waiting inside a dream."`;
   waitForSound; clearText; marker; appendText; 
   Kid`"W-who's there...?"`;
   waitForClick; clearText; marker; sound(`C2S175`); appendText; 
   //??
   Unk`"Tonight a story by moonlight."`;
   waitForSound; clearText; marker; sound(`C2S176`); appendText; 
   //??
   Unk`"Hoping the wait will be short."`;
   waitForSound; clearText; marker; appendText; 
   Kid`"H-hey...who's there?"`;
   waitForClick; clearText; marker; sound(`C2S177`); appendText; 
   //??
   Unk`"Sleeping curled and snug."`;
   waitForSound; clearText; marker; sound(`C2S178`); appendText; 
   //??
   Unk`"Sleeping in mother's arms."`;
   waitForSound; clearText; 
});
bgload({ name: `EV_CO04A`, transition: 20 });
playBGM({ num: 22, volume: 97 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Co...Coco..."`;
   waitForClick; clearText; marker; appendText; 
   `I said the name without thinking.`;
   waitForClick; clearText; marker; appendText; 
   `The shape that suddenly swelled out of the 
darkness was undoubtedly the girl from the 
compression chamber, the one from the day 
before.`;
   waitForClick; clearText; marker; appendText; 
   `And Coco was singing a song...`;
   waitForClick; clearText; marker; sound(`C2S179`); appendText; 
   Coco`"I was waiting for you."`;
   waitForClick; clearText; marker; appendText; 
   `She spoke before I could.`;
   waitForClick; clearText; marker; sound(`C2S180`); appendText; 
   Coco`"I waited and waited...for you to come..."`;
   waitForClick; clearText; marker; sound(`C2S181`); appendText; 
   Coco`"I was waiting...all alone like a moon 
sprite..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"T-then you should have come to me..."`;
   waitForClick; clearText; marker; sound(`C2S182`); appendText; 
   Coco`"I couldn't..."`;
   waitForClick; clearText; marker; sound(`C2S183`); appendText; 
   Coco`"That's...impossible..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why...?"`;
   waitForClick; clearText; marker; sound(`C2S184`); appendText; 
   Coco`"Because you wouldn't take me with you..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...What?"`;
   waitForClick; clearText; marker; sound(`C2S185`); appendText; 
   Coco`"Will you take me to where everybody is?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Of course I will! Let's go together right 
now!"`;
   waitForClick; clearText; marker; appendText; 
   `Just as I said that...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `Splash!`;
   waitForClick; clearText; marker; appendText; 
   `A wall of water exploded from near Coco's feet.`;
   waitForClick; clearText; 
});
showFog2();
showTextbox();
text(() => {
   marker; appendText; 
   `Droplets of water scattered everywhere like 
mist...`;
   waitForClick; clearText; marker; sound(`C2S186`); appendText; 
   Coco`"Farewell."`;
   waitForClick; clearText; 
});
bgload({ name: `BG18B2`, transition: 10 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `Coco disappeared in the spray.`;
   waitForClick; clearText; marker; appendText; 
   `The resulting waves stroked my feet.`;
   waitForClick; clearText; marker; appendText; 
   `A fine spray of mist erupted skyward and 
rained down gently on the waves. `;
   waitForClick; clearText; marker; appendText; 
   `There was the toolbox, left in the darkness...`;
   waitForClick; clearText; marker; appendText; 
   `That was all that I saw.`;
   waitForClick; clearText; marker; appendText; 
   `I forgot myself and all I could do was stand 
in that narrow corridor.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `I didn't know how much time had passed.`;
   waitForClick; clearText; marker; appendText; 
   `Dragging the heavy toolbox and my heavier 
legs, I returned to the room with the pipes.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA18ADS`, name2: `KB12ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`C2S187`); appendText; 
   Takeshi`"This should just about do it."`;
   waitForClick; clearText; marker; sound(`C2S188`); appendText; 
   Sara`"You're not done, are you?"`;
   waitForClick; clearText; marker; sound(`C2S189`); appendText; 
   You`"Nope. We're still getting ready."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S190`); appendText; 
   Takeshi`"Oh, I see..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S191`); appendText; 
   Takeshi`"We have to repair the generator next door 
after we finish here."`;
   waitForClick; clearText; marker; appendText; 
   `Takeshi wiped away the sweat from his forehead.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S192`); appendText; 
   You`"Huh? Kid...what're you doing there?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Noticing me, You turned around.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I brought the...toolbox..."`;
   waitForClick; clearText; marker; sound(`C2S193`); appendText; 
   Takeshi`"Toolbox?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S194`); appendText; 
   Sara`"It doesn't look like they need it anymore."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...What?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S195`); appendText; 
   You`"Oops. Sorry 'bout that."`;
   waitForClick; clearText; marker; sound(`C2S196`); appendText; 
   You`"Turns out the valve was closed to begin with."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S197`); appendText; 
   Takeshi`"So no matter how much I tried to close it, it 
wouldn't budge because it was already shut."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I heard you...the first time..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S198`); appendText; 
   Takeshi`"Is that right? "`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S199`); appendText; 
   Takeshi`"Hey, don't be like that. These things happen 
sometimes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm not...mad..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sara`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S201`); appendText; 
   You`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   `I decided to...`;
   waitForClick; 
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
   marker; appendText; 
   `....I told them`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Actually..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I saw that girl again."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `YU05ADS`, name2: `KB07ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S202`); appendText; 
   You`"Whaddya mean by 'that girl'?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The girl that disappeared in the compression 
chamber."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I told you last night. Don't you remember?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S203`); appendText; 
   Takeshi`"Oh, your invisible friend."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She's not invisible!"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   `I screamed at them as loud as possible.`;
   waitForClick; clearText; marker; sound(`C2S204`); appendText; 
   Sara`"K-Kid, take it easy..."`;
   waitForClick; clearText; marker; sound(`C2S205`); appendText; 
   Sara`"Just calm down..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S206`); appendText; 
   Sara`"Where did you see the girl?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"In front...of the Generator Room..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S207`); appendText; 
   You`"Did she say anything?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think she said something about being all 
alone like a moon sprite."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, I know!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She....she was singing a lullaby."`;
   waitForClick; clearText; marker; sound(`C2S208`); appendText; 
   Takeshi`"A lullaby?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It was the same as the lullaby that Sara sang 
before..."`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA06ADS`, name2: `KB13ADS`, name3: `YU13ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   `Takeshi and You looked at Sara.`;
   waitForClick; clearText; marker; appendText; 
   `I focused my eyes on her, too.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S209`); appendText; 
   Sara`"I...didn't..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S210`); appendText; 
   Sara`"Sing any...lullaby..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Liar!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `YU06ADS`, name2: `KB06ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"You did too sing a lullaby before, Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I remember it!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara stared at me as if she felt sorry for me.`;
   waitForClick; clearText; marker; appendText; 
   `You looked like she had a bad taste in her 
mouth.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Takeshi avoided my eyes and leaned in close to 
say something to You and Sara.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA17ADS`, name2: `YU17ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `You and Sara listened to Takeshi whispering.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you whispering about?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm fine! I'm not crazy!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't...don't you look at me like that!"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA03ADS`, name2: `KB02ADS`, name3: `YU03ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`C2S211`); appendText; 
   Takeshi`"Okay. Everything is fine."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S212`); appendText; 
   Takeshi`"So why don't we all go to the place where you 
saw the girl."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She's not there...anymore."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She disappeared..."`;
   waitForClick; clearText; marker; sound(`C2S213`); appendText; 
   Takeshi`"I see...but maybe she'll show up again."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's no good. She won't..."`;
   waitForClick; clearText; marker; sound(`C2S214`); appendText; 
   Takeshi`"I...uh...look, we believe you."`;
   waitForClick; clearText; marker; sound(`C2S215`); appendText; 
   Takeshi`"I mean, we've decided to believe you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S216`); appendText; 
   Takeshi`"Alright? So...so you just keep your cool, 
okay, Kid?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I didn't feel like saying anything else.`;
   waitForClick; clearText; marker; appendText; 
   `Their agreeing with me was somehow sad.`;
   waitForClick; clearText; marker; appendText; 
   `I was sure that the little whispering 
conference they had just held went something 
along the lines of, 'Just agree with whatever 
he says.'`;
   waitForClick; clearText; marker; appendText; 
   `It depressed me and sapped all my energy.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't feel like resisting the three of 
them, or trying to give myself a pep talk.`;
   waitForClick; clearText; marker; appendText; 
   `I was tired. I thought they could do what they 
wanted.`;
   waitForClick; clearText; marker; appendText; 
   `'You just keep your cool, okay, Kid?'`;
   waitForClick; clearText; marker; appendText; 
   `Takeshi's words lacked conviction.`;
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
   `After that...`;
   waitForClick; clearText; marker; appendText; 
   `When we went back in front of the Generator 
Room. Of course there was no sign of the girl.`;
   waitForClick; clearText; marker; appendText; 
   `The four of us waited outside the Generator 
Room until we could be sure that the 
temperature inside had cooled enough.`;
   waitForClick; clearText; marker; appendText; 
   `Time was cruel, but forgiving.`;
   waitForClick; clearText; marker; appendText; 
   `Like a wave that was rushing ever closer with 
each second...`;
   waitForClick; clearText; marker; appendText; 
   `The sadness, frustration and doubt in the back 
of my mind slowly disappeared.`;
   waitForClick; clearText; marker; appendText; 
   `After a while, I was back to my normal 
old self.`;
   waitForClick; clearText; marker; appendText; 
   `Only Coco's parting words - 'Farewell' - 
seemed to linger in my mind, echoing 
without end.`;
   waitForClick; clearText; 
});
goto(lbl_00000c50);
let lbl_00000bf5;
showTextbox();
text(() => {
   marker; appendText; 
   `...I decided not to tell them.`;
   waitForClick; clearText; marker; appendText; 
   `The whole story wouldn't have been convincing 
anyway.`;
   waitForClick; clearText; marker; appendText; 
   `I knew that for a fact.`;
   waitForClick; clearText; marker; appendText; 
   `So I handled it that way...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nothing...nothing at all."`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA08ADS`, name2: `KB07ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   `Then I showed them a gleaming smile.`;
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
   `With this we had been able to shut off the hot 
water flowing to the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   `Even so, on the other side of the door, it was 
still hot enough to scald.`;
   waitForClick; clearText; marker; appendText; 
   `The four of us waited outside the Generator 
Room until we could be sure that the 
temperature inside had cooled enough.`;
   waitForClick; clearText; marker; appendText; 
   `Time was cruel, but forgiving.`;
   waitForClick; clearText; marker; appendText; 
   `My feelings smoothed over slowly with time, 
like protruding bits of a beach rounded by an 
endless progression of waves.`;
   waitForClick; clearText; marker; appendText; 
   `After a while, I found that I could even think 
of my meeting with Coco in a detached, 
objective way.`;
   waitForClick; clearText; marker; appendText; 
   `Only Coco's parting words ? 'Farewell' ? 
seemed to linger in my mind, echoing 
without end.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `Finally, when we thought the time had come, we 
timidly opened the door`;
   waitForClick; clearText; marker; appendText; 
   `It was like opening the door to a steam 
bath - a cloud of steam hissed out of the door.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `The heat inside just about defied imagination.`;
   waitForClick; clearText; marker; appendText; 
   `The air in the steam-filled room was heavy and 
stuck to the skin.`;
   waitForClick; clearText; marker; appendText; 
   `Inhaling felt like swallowing globs of sticky 
hot steam.`;
   waitForClick; clearText; marker; appendText; 
   `Takeshi was opening and closing his mouth like 
a fish out of water.`;
   waitForClick; clearText; 
});
l_choice = 1;
jump(`S_2B`);
