l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_ET02B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
playBGM({ num: 13, volume: 100 });
setSceneTitle({ index: 116 });
clock(`9:17`);
showTextbox();
text(() => {
   marker; appendText; 
   `The hologram pendant.`;
   waitForClick; clearText; marker; appendText; 
   `I thought back to the image in Sara's hologram 
pendant.`;
   waitForClick; clearText; marker; appendText; 
   `(That means...the image in the pendant...was 
of a DIFFERENT Takeshi Kuranari....)`;
   waitForClick; clearText; marker; appendText; 
   `(And Tsugumi...has infrared vision, like Sara 
and me.)`;
   waitForClick; clearText; marker; appendText; 
   `(Which means....which means...)`;
   waitForClick; clearText; marker; appendText; 
   `(Both Sara and my parents were....)`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG16A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TU06ADM`, name2: `SO07ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C5A317`); appendText; 
   Tsugumi`"What is it?"`;
   waitForClick; clearText; marker; sound(`C5A318`); appendText; 
   Sora`"Are you all right, Kid?"`;
   waitForClick; clearText; marker; sound(`C5A319`); appendText; 
   Sora`"You don't look so good...."`;
   waitForClick; clearText; marker; appendText; 
   `I shook my head and shivered as I stepped 
slowly backwards.`;
   waitForClick; clearText; marker; appendText; 
   `My back bumped against the wall.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It can't be...."`;
   waitForClick; clearText; marker; sound(`C5A320`); appendText; 
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No! No! No!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   `I let out a cry that was almost a scream.`;
   waitForClick; clearText; marker; appendText; 
   `Swinging around, I opened the door, and ran 
out of the Control Room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I wanted get as far away as I could.`;
   waitForClick; clearText; marker; appendText; 
   `I wanted to find a place where no one could 
find me.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   `I pounded up the emergency stairs.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   `I ran forward in a dark haze.`;
   waitForClick; clearText; marker; appendText; 
   `I ran as if I could escape the fear that 
threatened to overwhelm me....`;
   waitForClick; clearText; marker; appendText; 
   `Further and further away....`;
   waitForClick; clearText; marker; appendText; 
   `But in this confined space, there was nowhere 
I could run away to.`;
   waitForClick; clearText; marker; appendText; 
   `Eventually I reached the end of the corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG03A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   `And ended up in front of the Jellyfish 
Gondola - `;
   waitForClick; clearText; marker; appendText; 
   `There was no way past the closed flood doors.`;
   waitForClick; clearText; marker; appendText; 
   `I stood in front of a decorated arch.`;
   waitForClick; clearText; marker; appendText; 
   `The gondola had to be somewhere beyond the 
gates, which were veiled in darkness.`;
   waitForClick; clearText; marker; appendText; 
   `In the gondola, Tsugumi and the real 
Takeshi....`;
   waitForClick; clearText; marker; appendText; 
   `(It's impossible!)`;
   waitForClick; clearText; marker; appendText; 
   `I tried to purge the thought from my mind.`;
   waitForClick; clearText; marker; appendText; 
   `But the suspicion mercilessly attacked my 
brain until I could no longer think straight.`;
   waitForClick; clearText; marker; appendText; 
   `The battle between denial and acceptance...I 
writhed in pain, sinking further into a 
trench of despair.`;
   waitForClick; clearText; marker; appendText; 
   `In my mind, there was only one possibility.`;
   waitForClick; clearText; marker; appendText; 
   `I was almost convinced of the certainty of it.`;
   waitForClick; clearText; marker; appendText; 
   `On the other hand, I hated the possibility so 
much that I wanted with all of my heart to 
reject it.`;
   waitForClick; clearText; marker; appendText; 
   `I put my hand on my chest, breathing in 
deeply, and I tried to calm my thoughts.`;
   waitForClick; clearText; marker; appendText; 
   `If it was true that Tsugumi had infrared 
vision....`;
   waitForClick; clearText; marker; appendText; 
   `And if the incident I witnessed in the 
Jellyfish Gondola really did happen....`;
   waitForClick; clearText; marker; appendText; 
   `The Takeshi and Tsugumi who had existed in 
the other world....`;
   waitForClick; clearText; marker; appendText; 
   `Would be....`;
   waitForClick; clearText; marker; appendText; 
   `Sara's and my parents.`;
   waitForClick; clearText; marker; appendText; 
   `(No! It can't be!)`;
   waitForClick; clearText; marker; appendText; 
   `I was once again overwhelmed by feelings of 
denial.`;
   waitForClick; clearText; marker; appendText; 
   `Sara and I were 16.`;
   waitForClick; clearText; marker; appendText; 
   `If Tsugumi had given birth to us, then it 
would have been 16 years ago....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   `I suddenly felt as if I had been hit by 
lightning.`;
   waitForClick; clearText; marker; appendText; 
   `My head was filled with a blinding light.`;
   waitForClick; clearText; marker; appendText; 
   `Suddenly kicking off the floor, I broke into 
a run.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG26A3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `It was 2017 now, so 16 years ago would have 
been 2001.`;
   waitForClick; clearText; marker; appendText; 
   `The world I had seen was 2000....`;
   waitForClick; clearText; marker; appendText; 
   `Wait a minute....`;
   waitForClick; clearText; marker; appendText; 
   `What if....`;
   waitForClick; clearText; marker; appendText; 
   `If this year wasn't 2017....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG11A1`, transition: 26 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `I opened the door of the Security Office and 
stumbled into the room.`;
   waitForClick; clearText; marker; appendText; 
   `As I suspected, I found You there.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You!"`;
   waitForClick; clearText; marker; appendText; 
   `Breathing heavily, I approached You.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A321`); appendText; 
   You`"Wh-what is it? All of a sudden!?"`;
   waitForClick; clearText; marker; sound(`C5A322`); appendText; 
   You`"What is it? ...What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This year...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What...year is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A323`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just answer me!"`;
   waitForClick; clearText; marker; appendText; 
   `You blinked slowly, her mouth half-open.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well?"`;
   waitForClick; clearText; marker; appendText; 
   `I glared at You, and pressed her for an answer.`;
   waitForClick; clearText; marker; appendText; 
   `A little overwhelmed by my enthusiasm, You 
seemed a bit disconcerted.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A324`); appendText; 
   You`"On the standard calendar...."`;
   waitForClick; clearText; marker; sound(`C5A325`); appendText; 
   You`"20...."`;
   waitForClick; clearText; marker; sound(`C5A326`); appendText; 
   You`"...34. Why?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GREEN);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: false });
playBGM({ num: 21, volume: 95 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`12:36`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"It's 2017...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So 2013 was four years ago?"`;
   waitForClick; clearText; marker; appendText; 
   `I said to You.`;
   waitForClick; clearText; marker; appendText; 
   `You and I were alone in the Security Office....`;
   waitForClick; clearText; marker; appendText; 
   `All the sudden You had asked me to come see 
her, and had started talking about what had 
happened in 2013.`;
   waitForClick; clearText; marker; appendText; 
   `No, I probably had seen it coming.`;
   waitForClick; clearText; marker; appendText; 
   `Just before she had spoken to me, You had 
hinted indirectly that she had changed her 
mind and needed someone to confide in.`;
   waitForClick; clearText; marker; appendText; 
   `Her expression was solemn, like a nun about 
to seek redemption.`;
   waitForClick; clearText; marker; appendText; 
   `You's eyes were empty of emotion.`;
   waitForClick; clearText; marker; appendText; 
   `And at the same time, her gaze showed an 
unconditional compassion: impartial, demanding 
nothing, asking nothing.`;
   waitForClick; clearText; marker; appendText; 
   `After a short while....`;
   waitForClick; clearText; marker; sound(`C5A327`); appendText; 
   You`"That's right."`;
   waitForClick; clearText; marker; sound(`C5A328`); appendText; 
   You`"It was four years ago...."`;
   waitForClick; clearText; marker; sound(`C5A329`); appendText; 
   You`"When I was 14."`;
   waitForClick; clearText; marker; appendText; 
   `You began quietly to tell her story....`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `Yubiseiharukana had a serious heart condition.`;
   waitForClick; clearText; marker; appendText; 
   `She hadn't been born with it.`;
   waitForClick; clearText; marker; appendText; 
   `In 2013, when she was 14, she suddenly had 
fallen ill.`;
   waitForClick; clearText; marker; appendText; 
   `One day, You had suddenly collapsed.`;
   waitForClick; clearText; marker; appendText; 
   `She was examined at the hospital and the 
doctor told her...`;
   waitForClick; clearText; marker; appendText; 
   Doctor`"This is very hard for me to tell you, so I 
want you to please listen calmly."`;
   waitForClick; clearText; marker; appendText; 
   Doctor`"You have a very serious heart condition."`;
   waitForClick; clearText; marker; appendText; 
   Doctor`"It's unclear whether you'll even make it to 
the end of high school."`;
   waitForClick; clearText; marker; appendText; 
   `This meant that she only had three or four 
more years to live.`;
   waitForClick; clearText; marker; appendText; 
   `A transplant was out of the question. And 
even with treatment, she would only suffer 
and they couldn't guarantee her a cure.`;
   waitForClick; clearText; marker; appendText; 
   `There was no way left for her to survive.`;
   waitForClick; clearText; marker; appendText; 
   `She had received a death sentence.`;
   waitForClick; clearText; marker; appendText; 
   Doctor`"But medical treatment is advancing daily."`;
   waitForClick; clearText; marker; appendText; 
   Doctor`"In a few years, we may still find a cure."`;
   waitForClick; clearText; marker; appendText; 
   Doctor`"So don't give up. You have to fight this 
illness."`;
   waitForClick; clearText; marker; appendText; 
   `With the doctor's hollow consolation, 
emptiness took over her mind.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `2014.`;
   waitForClick; 
   `
`;
   appendText; 
   `Her fear of her approaching death was growing.`;
   waitForClick; 
   `
`;
   appendText; 
   `One day, while she was at the hospital, she 
met a gentleman.`;
   waitForClick; 
   `
`;
   appendText; 
   `Through the course of their meetings, she and 
the gentlemen came to trust one another, and 
became very close.`;
   waitForClick; 
   `
`;
   appendText; 
   `It was a close relationship, like the bond 
between a parent and a child....`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Between a father and a daughter.`;
   waitForClick; 
   `
`;
   appendText; 
   `Yubiseiharukana had grown up without knowing a 
father's warmth.`;
   waitForClick; 
   `
`;
   appendText; 
   `Perhaps she was seeking from him the love 
from the father she had never known.`;
   waitForClick; 
   `
`;
   appendText; 
   `As for the gentleman, he had a daughter close 
to her age.`;
   waitForClick; 
   `
`;
   appendText; 
   `When he found out about You's illness, he 
felt as much sympathy as he would have for 
his own daughter.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `They were close like a parent and a child, 
joined by a strong feeling like love.`;
   waitForClick; 
   `
`;
   appendText; 
   `Having built up a trust, Yubiseiharukana one 
day confessed her fear, her despair and agony 
to him.`;
   waitForClick; 
   `
`;
   appendText; 
   `With a serious look on his face, the 
gentleman said - `;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `"Come to my lab."`;
   waitForClick; 
   `
`;
   appendText; 
   `
`;
   
});
showTextbox();
text(() => {
   appendText; 
   `His name was Shigezo Morino.`;
   waitForClick; 
   `
`;
   appendText; 
   `Doctor Morino was a world authority in genetic 
engineering.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `In November of that year...`;
   waitForClick; 
   `
`;
   appendText; 
   `After making up her mind, Yubiseiharukana 
visited the doctor's lab.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `"There are three types of immortality."`;
   waitForClick; 
   `
`;
   appendText; 
   `"The first is immortality of the body."`;
   waitForClick; 
   `
`;
   appendText; 
   `"The second is immortality of the memory."`;
   waitForClick; 
   `
`;
   appendText; 
   `"The third is genetic immortality."`;
   waitForClick; 
   `
`;
   appendText; 
   `"How would you like to try the third kind?"`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The doctor presented this extraordinary plan 
to her with the calmness of a scientist, his 
tone matter-of-fact.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `"Your heart problem was acquired after birth, 
rather being something you were born with."`;
   waitForClick; 
   `
`;
   appendText; 
   `"So, if you choose the third option..."`;
   waitForClick; 
   `
`;
   appendText; 
   `"You don't have to worry about passing the 
condition onto your 'children'."`;
   waitForClick; 
   `
`;
   appendText; 
   `"There is nothing for you to worry about."`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Ever since being told that she would die, she 
had been terrified at the approaching shadow 
of death.`;
   waitForClick; 
   `
`;
   appendText; 
   `Not a night would go by that she didn't rail 
against her misfortune, all the while clawing 
at her chest in agony. `;
   waitForClick; 
   `
`;
   appendText; 
   `She had given up on life, and was no more 
than an empty shell.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `But this day, she was suddenly able to see a 
glimmer of hope.`;
   waitForClick; 
   `
`;
   appendText; 
   `The doctor's words convinced her, and her way 
of thinking gradually changed.`;
   waitForClick; 
   `
`;
   appendText; 
   `'If I only have a few more years to live, I 
at least want to leave something of myself 
behind in this world.'`;
   waitForClick; 
   `
`;
   appendText; 
   `Her tenacity for life defied imagination.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `She finally made the decision.`;
   waitForClick; 
   `
`;
   appendText; 
   `She chose the third option.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `One month later. December, 2014.`;
   waitForClick; 
   `
`;
   appendText; 
   `Yubiseiharukana had the nucleus from one of 
her own cells implanted in her own ovaries, 
which then began to grow in her womb.`;
   waitForClick; 
   `
`;
   appendText; 
   `Of course, Doctor Morino performed the surgery.`;
   waitForClick; 
   `
`;
   appendText; 
   `She was pregnant with her 'new self'.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `IMG05A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `Nine months later - September 22, 2015.`;
   waitForClick; 
   `
`;
   appendText; 
   `Yubiseiharukana safely gave birth.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `EV_YU16A`, transition: 0 });
showTextbox();
text(() => {
   marker; sound(`C5A330`); appendText; 
   `"My baby!"`;
   waitForClick; 
   `
`;
   sound(`C5A331`); appendText; 
   `"You are my sister."`;
   waitForClick; 
   `
`;
   sound(`C5A332`); appendText; 
   `"You are... me, myself."`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Yubiseiharukana loved the new child with all 
of her heart, and gave her a name. `;
   waitForClick; 
   `
`;
   appendText; 
   `She called her Yubiseiakikana.`;
   waitForClick; 
   `
`;
   appendText; 
   `That's right, Yubiseiakikana was 
Yubiseiharukana's daughter.`;
   waitForClick; 
   `
`;
   appendText; 
   `And at the same time, they not only were 
mother and daughter, but also shared the same 
genetic design, just like twins.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `What a twist of fate....`;
   waitForClick; 
   `
`;
   appendText; 
   `Did she do it out of the madness that comes 
from being so close to death?`;
   waitForClick; 
   `
`;
   appendText; 
   `But...still....`;
   waitForClick; 
   `
`;
   appendText; 
   `Look at the lively face of the newborn child!`;
   waitForClick; 
   `
`;
   appendText; 
   `Look at how pure its smile is! How bright 
its new life shines!`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Could anyone watch something as simple as its 
earnest attempts to grab something, and 
believe that the baby was a tragedy?`;
   waitForClick; 
   `
`;
   appendText; 
   `Was it a sin to create a life? Was it a sin 
to want life?`;
   waitForClick; 
   `
`;
   appendText; 
   `The baby smiled happily. Sometimes it cried.`;
   waitForClick; 
   `
`;
   appendText; 
   `As if it were asking - 'Is it a sin to be 
alive?'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG38A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `Monday, May 1, 2017.`;
   waitForClick; 
   `
`;
   appendText; 
   `Yubiseiharukana, who was now a student at 
Kyumeikan Women's College, had started 
working part-time at LeMU during the holidays.`;
   waitForClick; 
   `
`;
   appendText; 
   `She wanted to find a clue about her father, 
Yoichi, who had gone missing 17 years before.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Her mother, Yukie, kept telling her, 'Your 
father fell into the ocean and drowned,' but 
You didn't believe it.`;
   waitForClick; 
   `
`;
   appendText; 
   `She held on to the hope that he was still 
alive somewhere.`;
   waitForClick; 
   `
`;
   appendText; 
   `She had left her one-year-old daughter, 
Yubiseiakikana, with her mother, so she was 
not worried about her.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Yubiseiharukana's heart had almost reached its 
limit.`;
   waitForClick; 
   `
`;
   appendText; 
   `She had given birth safely, but could no 
longer escape the fate, which awaited her.`;
   waitForClick; 
   `
`;
   appendText; 
   `There was only one thing left that she wanted 
to do.`;
   waitForClick; 
   `
`;
   appendText; 
   `Before she died, she wanted to find out 
whether her father was still alive.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The father who had disappeared when she was a 
year old....`;
   waitForClick; 
   `
`;
   appendText; 
   `She had looked at his photo until it had 
become ragged and torn, but had no memories 
of his warmth, or ever having been held by him.`;
   waitForClick; 
   `
`;
   appendText; 
   `For that reason she waved off all of the 
Doctor's attempts to stop her, and had come 
to LeMU.`;
   waitForClick; 
   `
`;
   appendText; 
   `She wanted to find out about her father....`;
   waitForClick; 
   `
`;
   appendText; 
   `What had happened 17 years ago? She wanted to 
reveal the truth....`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG11A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `As her story ended, You reached for a file 
that was on the control panel.`;
   waitForClick; clearText; marker; appendText; 
   `She opened it, and silently passed it to me....`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU16A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"So the baby was...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"WAS your child?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Which means you were lying to me...."`;
   waitForClick; clearText; marker; sound(`C5A333`); appendText; 
   You`"It wasn't...a lie...."`;
   waitForClick; clearText; marker; sound(`C5A334`); appendText; 
   You`"She is my daughter...."`;
   waitForClick; clearText; marker; sound(`C5A335`); appendText; 
   You`"But she's also my twin sister...."`;
   waitForClick; clearText; marker; sound(`C5A336`); appendText; 
   You`"And...."`;
   waitForClick; clearText; marker; sound(`C5A337`); appendText; 
   You`"She's another me...."`;
   waitForClick; clearText; marker; sound(`C5A338`); appendText; 
   You`"She is...myself...."`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know what to say.`;
   waitForClick; clearText; marker; sound(`C5A339`); appendText; 
   You`"This was my sin...."`;
   waitForClick; clearText; marker; sound(`C5A340`); appendText; 
   You`"I know I'll never be forgiven, and will 
never be able to atone for it...."`;
   waitForClick; clearText; marker; sound(`C5A341`); appendText; 
   You`"But...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A342`); appendText; 
   You`"Like I told you, I have no regrets."`;
   waitForClick; clearText; marker; sound(`C5A343`); appendText; 
   You`"I'm glad I had her...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`C5A344`); appendText; 
   You`"I'll never forget the moment that new life 
was created."`;
   waitForClick; clearText; marker; sound(`C5A345`); appendText; 
   You`"It was...such an unbelievably happy 
moment...."`;
   waitForClick; clearText; marker; sound(`C5A346`); appendText; 
   You`"The first time she said, 'Mama... Mama....'"`;
   waitForClick; clearText; marker; sound(`C5A347`); appendText; 
   You`"I...I can't explain it...."`;
   waitForClick; clearText; marker; sound(`C5A348`); appendText; 
   You`"It was more than a precious feeling, or 
love, or that good fortune had come my 
way...I felt as if I were wrapped in light...."`;
   waitForClick; clearText; marker; sound(`C5A349`); appendText; 
   You`"I don't care if I burn in hell."`;
   waitForClick; clearText; marker; sound(`C5A350`); appendText; 
   You`"I don't care if I burn in the fires of hell 
for thousands, millions of years...."`;
   waitForClick; clearText; marker; sound(`C5A351`); appendText; 
   You`"But...I knew I wanted to protect...my 
daughter....no matter what."`;
   waitForClick; clearText; marker; sound(`C5A352`); appendText; 
   You`"I didn't want her to suffer...."`;
   waitForClick; clearText; marker; sound(`C5A353`); appendText; 
   You`"Her smile is so beautiful...."`;
   waitForClick; clearText; marker; sound(`C5A354`); appendText; 
   You`"Her tiny hands are so cute...."`;
   waitForClick; clearText; marker; sound(`C5A355`); appendText; 
   You`"She is everything to me...."`;
   waitForClick; clearText; marker; sound(`C5A356`); appendText; 
   You`"She is irreplaceable...."`;
   waitForClick; clearText; marker; sound(`C5A357`); appendText; 
   You`"Besides, none of this is her fault."`;
   waitForClick; clearText; marker; sound(`C5A358`); appendText; 
   You`"She was welcomed to this world...just like 
any other soul born who comes here."`;
   waitForClick; clearText; marker; sound(`C5A359`); appendText; 
   You`"But at the same time...the moment I gave 
birth to her...I died."`;
   waitForClick; clearText; marker; sound(`C5A360`); appendText; 
   You`"It was as if I no longer existed...."`;
   waitForClick; clearText; marker; sound(`C5A361`); appendText; 
   You`"You see...."`;
   waitForClick; clearText; marker; sound(`C5A362`); appendText; 
   You`"I gave all my life, my existence, to my 
child...."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU16A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   `You showed me the photograph again.`;
   waitForClick; clearText; marker; appendText; 
   `The baby in the picture was reaching out, 
trying to grab something.`;
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
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: false });
playBGM({ num: 13, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 117 });
clock(`9:29`);
showTextbox();
text(() => {
   marker; sound(`C5A363`); appendText; 
   You`"Hey! Hello—, are you listening to me?"`;
   waitForClick; clearText; marker; appendText; 
   `You grabbed my shoulders and shook me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A364`); appendText; 
   You`"What's the matter with you? Kid?"`;
   waitForClick; clearText; marker; sound(`C5A365`); appendText; 
   You`"You can't possibly have forgotten what year 
it is?"`;
   waitForClick; clearText; marker; appendText; 
   `Her words made no impression on me.`;
   waitForClick; clearText; marker; appendText; 
   `(What on earth....)`;
   waitForClick; clearText; marker; appendText; 
   `My mouth was dry, and the palm of my clenched 
fist was drenched with sweat.`;
   waitForClick; clearText; marker; appendText; 
   `(First of all....)`;
   waitForClick; clearText; marker; appendText; 
   `I began to think things through.`;
   waitForClick; clearText; marker; appendText; 
   `The You that I knew...the You standing in 
front of me, Yubi'aki'kana, was born on 22nd 
of September, 2015.`;
   waitForClick; clearText; marker; appendText; 
   `Her mother was Yubisei'haru'kana.`;
   waitForClick; clearText; marker; appendText; 
   `That meant....`;
   waitForClick; clearText; marker; appendText; 
   `This was now 2034, 17 years after 
Yubiseiharukana's time in 2017....`;
   waitForClick; clearText; marker; appendText; 
   `No, but wait....`;
   waitForClick; clearText; marker; appendText; 
   `What about the date on that mail?`;
   waitForClick; clearText; marker; appendText; 
   `It had been received on 02/07/19.`;
   waitForClick; clearText; marker; appendText; 
   `My voice came out strangled.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's 2034 now...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yukie died 15 years ago...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Which would have been in 2019...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But the date on that says on...'02/07/19'...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A366`); appendText; 
   You`"Oh, that?"`;
   waitForClick; clearText; marker; sound(`C5A367`); appendText; 
   You`"You were worried about that?"`;
   waitForClick; clearText; marker; appendText; 
   `You laughed.`;
   waitForClick; clearText; marker; sound(`C5A368`); appendText; 
   You`"Well, I can understand why you might make 
that mistake...."`;
   waitForClick; clearText; marker; sound(`C5A369`); appendText; 
   You`"Do you see?"`;
   waitForClick; clearText; marker; sound(`C5A370`); appendText; 
   You`"The date on that mail was written in the 
German style."`;
   waitForClick; clearText; marker; sound(`C5A371`); appendText; 
   You`"Not the Japanese order of year/month/day, but 
month/day/year."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So are you telling me that...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That wasn't the July 19, 2002...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It was February, 7 2019...?"`;
   waitForClick; clearText; marker; appendText; 
   `You nodded.`;
   waitForClick; clearText; marker; sound(`C5A372`); appendText; 
   You`"Any other questions?"`;
   waitForClick; clearText; marker; appendText; 
   `I shook my head weakly, and trudged out of the 
Security Office.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG26A3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `I had figured out the relationship between 
You and her mother, but wondered whether I 
should tell her.`;
   waitForClick; clearText; marker; appendText; 
   `(No, it's probably better that I don't. 
That's better for You in the long run.)`;
   waitForClick; clearText; marker; appendText; 
   `But first, I had to take care of my own 
problems.`;
   waitForClick; clearText; marker; appendText; 
   `There was somewhere I had to go.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG05A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `SA04ADM`, name2: `TU18ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`9:41`);
showTextbox();
text(() => {
   marker; sound(`C5A373`); appendText; 
   Sara`"What is it?"`;
   waitForClick; clearText; marker; sound(`C5A374`); appendText; 
   Sara`"What did you bring me here for?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wanted to...talk to you guys alone...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A375`); appendText; 
   Sara`"About what?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was silent. She seemed to be afraid 
of something.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi perhaps already sensed what I was 
going to say.`;
   waitForClick; clearText; marker; appendText; 
   `Her eyes gazed around, wildly.`;
   waitForClick; clearText; marker; sound(`C5A376`); appendText; 
   Sara`"Is it important?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yes, very."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's something I don't want the others to 
hear...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wait, I don't mind if they hear it, but I 
wanted you and Tsugumi to know first."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So that's why I asked you to come over here."`;
   waitForClick; clearText; marker; sound(`C5A377`); appendText; 
   Sara`"Hmmmm."`;
   waitForClick; clearText; marker; sound(`C5A378`); appendText; 
   Sara`"So, what's so important?"`;
   waitForClick; clearText; marker; appendText; 
   `Hadn't Sara noticed anything?`;
   waitForClick; clearText; marker; appendText; 
   `Her blank, unguarded expression....`;
   waitForClick; clearText; marker; appendText; 
   `She had to have noticed something.`;
   waitForClick; clearText; marker; appendText; 
   `The May 1st, after Sara met Tsugumi for the 
first time, she had looked totally dazed.`;
   waitForClick; clearText; marker; appendText; 
   `Surely, Sara had sensed something.`;
   waitForClick; clearText; marker; appendText; 
   `To be standing there calmly, she had to be in 
denial.`;
   waitForClick; clearText; marker; appendText; 
   `Reason was telling her that what she suspected 
couldn't be true.`;
   waitForClick; clearText; marker; appendText; 
   `The coincidence of meeting her mother again 
was probably too much for Sara to believe.`;
   waitForClick; clearText; marker; sound(`C5A379`); appendText; 
   Sara`"Well, are you going to say anything? Could 
you hurry up...?"`;
   waitForClick; clearText; marker; appendText; 
   `Sara urged me to get to the point.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi said nothing, but her breathing 
seemed a little rough.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara? Could you lend me your pendant and 
lighter for a moment?"`;
   waitForClick; clearText; marker; sound(`C5A380`); appendText; 
   Sara`"Alright."`;
   waitForClick; clearText; marker; appendText; 
   `She took them out of her pocket and gave them 
to me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgload({ name: `EV_ET02A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `-Shick.`;
   waitForClick; clearText; marker; appendText; 
   `I struck a flame, illuminating the pendant.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Takeshi.......`;
   waitForClick; clearText; marker; appendText; 
   `This was...the real Takeshi Kuranari....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG05A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `SA05ADM`, name2: `TU18ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `I held the pendant and the flame closer to 
Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi kept her head down, refusing to look 
up at the pendant.`;
   waitForClick; clearText; marker; appendText; 
   `Her brow was furrowed, and she was biting her 
lip.`;
   waitForClick; clearText; marker; appendText; 
   `Her arms pressed tightly to her sides....`;
   waitForClick; clearText; marker; appendText; 
   `Her clenched fists were shaking.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look closer...."`;
   waitForClick; clearText; marker; appendText; 
   `I whispered to her.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You've seen this pendant before...haven't 
you?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The real Takeshi Kuranari is right here!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU15ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `The moment I said these words, Tsugumi's eyes 
flew open.`;
   waitForClick; clearText; marker; appendText; 
   `Stripped of expression, she wore a face like a 
mask...only her eyes burned with a fierce 
light.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A381`); appendText; 
   Sara`"W-wait just a minute! What are you talking 
about?"`;
   waitForClick; clearText; marker; sound(`C5A382`); appendText; 
   Sara`"Takeshi...you mean Takeshi!?"`;
   waitForClick; clearText; marker; sound(`C5A383`); appendText; 
   Sara`"Takeshi's...the one in this pendant!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Umm, no..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The Takeshi we know isn't really 'Takeshi.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think he's lying to us."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A384`); appendText; 
   Sara`".........?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The real Takeshi...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The real Takeshi Kuranari...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is your and my...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Father...."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi closed her eyes.`;
   waitForClick; clearText; marker; appendText; 
   `She breathed out a long sigh.`;
   waitForClick; clearText; marker; appendText; 
   `I could see the tension leave Tsugumi's body. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A385`); appendText; 
   Sara`"Hey, what's this all about?"`;
   waitForClick; clearText; marker; sound(`C5A386`); appendText; 
   Sara`"Explain what's happening...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"All right."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But before I do, I want to check 
something...."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `I hesitated about what to say next.`;
   waitForClick; clearText; marker; appendText; 
   `I looked above my head.`;
   waitForClick; clearText; marker; appendText; 
   `The sky was full of stars.`;
   waitForClick; clearText; marker; appendText; 
   `The single whale twisted and floated through 
space.`;
   waitForClick; clearText; marker; appendText; 
   `(Whale, where do you go all by yourself?)`;
   waitForClick; clearText; marker; appendText; 
   `(Will you meet someone special one day?)`;
   waitForClick; clearText; marker; appendText; 
   `Snap.`;
   waitForClick; clearText; marker; appendText; 
   `I extinguished the lighter.`;
   waitForClick; clearText; marker; appendText; 
   `I gripped the pendant and the lighter in my 
hand.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's outline was hazy in the dark....`;
   waitForClick; clearText; marker; appendText; 
   `She was....`;
   waitForClick; clearText; marker; appendText; 
   `our....`;
   waitForClick; clearText; marker; appendText; 
   `long sought-after....`;
   waitForClick; clearText; 
});
playBGM({ num: 21, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Mother...."`;
   waitForClick; clearText; marker; appendText; 
   `When I called out to her, warm tears ran down 
my cheeks.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You are our mother...aren't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara's and my mother...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Mother...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You are, aren't you...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A387`); appendText; 
   Sara`"...What!?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU18ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi slowly opened her eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She looked at Sara and me.`;
   waitForClick; clearText; marker; appendText; 
   `I could see the tears in her eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Mother, please say something...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't blame you...for anything...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I've waited for you...for so long...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I've been waiting for you...."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Say something!"`;
   waitForClick; clearText; marker; appendText; 
   `I screamed at her.`;
   waitForClick; clearText; marker; appendText; 
   `Sara clung to my arm.`;
   waitForClick; clearText; marker; appendText; 
   `Shaking her head, she buried her face in my 
chest.`;
   waitForClick; clearText; marker; appendText; 
   `Her thin body was shaking.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't just stand there, say something!"`;
   waitForClick; clearText; marker; appendText; 
   `Holding Sara tightly, I stepped forward.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A388`); appendText; 
   Tsugumi`"No...."`;
   waitForClick; clearText; marker; sound(`C5A389`); appendText; 
   Tsugumi`"I'm not...your mother...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't you lie to me!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know everything!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Seventeen years ago, there was another 
accident just like this one, here at LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You and Takeshi became a couple...."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi was crying huge tears.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi tried to stop them.`;
   waitForClick; clearText; marker; appendText; 
   `Her breath was ragged, and came out in hiccups.`;
   waitForClick; clearText; marker; appendText; 
   `Her face twisted as she struggled to keep 
control of her emotions.`;
   waitForClick; clearText; marker; appendText; 
   `Tears welled in her eyes and rolled down her 
cheeks.`;
   waitForClick; clearText; marker; sound(`C5A390`); appendText; 
   Tsugumi`"Yes...that's right...."`;
   waitForClick; clearText; marker; sound(`C5A391`); appendText; 
   Tsugumi`"You're right...."`;
   waitForClick; clearText; marker; sound(`C5A392`); appendText; 
   Tsugumi`"I gave birth to you...."`;
   waitForClick; clearText; marker; sound(`C5A393`); appendText; 
   Tsugumi`"But..."`;
   waitForClick; clearText; marker; sound(`C5A394`); appendText; 
   Tsugumi`"I have no right...to be called 'Mother'...."`;
   waitForClick; clearText; marker; sound(`C5A395`); appendText; 
   Tsugumi`"You have...a real mother...don't you?"`;
   waitForClick; clearText; marker; sound(`C5A396`); appendText; 
   Tsugumi`"Someone who took care of you...?"`;
   waitForClick; clearText; marker; sound(`C5A397`); appendText; 
   Tsugumi`"I...I...wasn't able to protect you both...."`;
   waitForClick; clearText; marker; sound(`C5A398`); appendText; 
   Tsugumi`"I couldn't take care of you...."`;
   waitForClick; clearText; marker; sound(`C5A399`); appendText; 
   Tsugumi`"I pretty much abandoned you...."`;
   waitForClick; clearText; marker; sound(`C5A400`); appendText; 
   Tsugumi`"I left you...and walked away."`;
   waitForClick; clearText; marker; sound(`C5A401`); appendText; 
   Tsugumi`"I'm terrible...And I don't expect you to be 
able to forgive me...."`;
   waitForClick; clearText; marker; sound(`C5A402`); appendText; 
   Tsugumi`"That's why I... "`;
   waitForClick; clearText; marker; sound(`C5A403`); appendText; 
   Tsugumi`"I'm not your mother...."`;
   waitForClick; clearText; marker; sound(`C5A404`); appendText; 
   Tsugumi`"Please...don't call me 'mother'."`;
   waitForClick; clearText; marker; sound(`C5A405`); appendText; 
   Tsugumi`"Please don't...."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi put her head in her hands, and sobbed.`;
   waitForClick; clearText; marker; appendText; 
   `At that moment...`;
   waitForClick; clearText; marker; sound(`C5A406`); appendText; 
   Sara`"Mama...."`;
   waitForClick; clearText; marker; sound(`C5A407`); appendText; 
   Sara`"...Mama...."`;
   waitForClick; clearText; marker; sound(`C5A408`); appendText; 
   Sara`"MAMA!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgload({ name: `EV_TU18A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   `Sara tore her self away from me, and flew into 
Tsugumi's arms.`;
   waitForClick; clearText; marker; appendText; 
   `Following her lead, I clung to Tsugumi and 
cried as well. `;
   waitForClick; clearText; marker; appendText; 
   `The first thing I noticed was her familiar 
smell.`;
   waitForClick; clearText; marker; appendText; 
   `I breathed in her scent deeply.`;
   waitForClick; clearText; marker; appendText; 
   `Covered in tears, wallowing in the warmth, I 
felt as if I had regained everything I had 
ever lost.`;
   waitForClick; clearText; marker; appendText; 
   `The three of us held each other tightly, 
relishing the touch of one another, entwined 
our hearts became one.`;
   waitForClick; clearText; marker; appendText; 
   `We were no longer our individual selves, but 
one collective identity.`;
   waitForClick; clearText; marker; appendText; 
   `There were no boundaries between us.`;
   waitForClick; clearText; marker; appendText; 
   `My whole being was filled with warmth...`;
   waitForClick; clearText; marker; appendText; 
   `Beside me, Sara's cheeks were wet with tears.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was soft, and her skin was sweet and 
sticky...`;
   waitForClick; clearText; marker; appendText; 
   `I recalled the long-forgotten memories of my 
mother's smell.`;
   waitForClick; clearText; marker; appendText; 
   `It wasn't exactly the same feeling as 
nostalgia.`;
   waitForClick; clearText; marker; appendText; 
   `It was primitive, something instinctive...a 
sweetness that had been wired directly into my 
brain.`;
   waitForClick; clearText; marker; sound(`C5A409`); appendText; 
   Sara`"Mama...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Mother...."`;
   waitForClick; clearText; marker; appendText; 
   `As if in response, Tsugumi pulled us closer, 
gripping us with a fierce determination.`;
   waitForClick; clearText; marker; appendText; 
   `She buried her face in Sara's and my hair, 
drew us close, and stroked the back of our 
heads.`;
   waitForClick; clearText; marker; sound(`C5A410`); appendText; 
   Tsugumi`"I'm sorry...."`;
   waitForClick; clearText; marker; sound(`C5A411`); appendText; 
   Tsugumi`"I'm so, so sorry...."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's voice was choked up.`;
   waitForClick; clearText; marker; sound(`C5A412`); appendText; 
   Tsugumi`"I can't ask you...to forgive me...."`;
   waitForClick; clearText; marker; sound(`C5A413`); appendText; 
   Tsugumi`"I...I...."`;
   waitForClick; clearText; marker; sound(`C5A414`); appendText; 
   Tsugumi`"I never...once forgot about you...."`;
   waitForClick; clearText; marker; sound(`C5A415`); appendText; 
   Tsugumi`"All...this...time...."`;
   waitForClick; clearText; marker; sound(`C5A416`); appendText; 
   Tsugumi`"I have wanted to see you...."`;
   waitForClick; clearText; marker; sound(`C5A417`); appendText; 
   Tsugumi`"Find you...and apologize...."`;
   waitForClick; clearText; marker; sound(`C5A418`); appendText; 
   Sara`"It's alright...."`;
   waitForClick; clearText; marker; sound(`C5A419`); appendText; 
   Sara`"Mama...."`;
   waitForClick; clearText; marker; sound(`C5A420`); appendText; 
   Sara`"You don't need to apologize...."`;
   waitForClick; clearText; marker; sound(`C5A421`); appendText; 
   Sara`"I...it's enough just to...be with you..."`;
   waitForClick; clearText; marker; appendText; 
   `As we held onto each other, we understood 
everything.`;
   waitForClick; clearText; marker; appendText; 
   `Sara and I accepted everything, understood and 
forgave.`;
   waitForClick; clearText; marker; appendText; 
   `Reasons weren't important.`;
   waitForClick; clearText; marker; appendText; 
   `At that moment, a quiet peace filled us...`;
   waitForClick; clearText; marker; appendText; 
   `It was enough.`;
   waitForClick; clearText; marker; appendText; 
   `We didn't require anything else.`;
   waitForClick; clearText; marker; appendText; 
   `I relaxed, and leaned against my mother.`;
   waitForClick; clearText; marker; appendText; 
   `She was warm.`;
   waitForClick; clearText; marker; appendText; 
   `I closed my eyes, and was intoxicated by her 
warmth.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Mother...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Mother...."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   `A cozy slumber....`;
   waitForClick; clearText; marker; appendText; 
   `A soft breeze under the May sunshine....`;
   waitForClick; clearText; marker; appendText; 
   `Peace....`;
   waitForClick; clearText; marker; appendText; 
   `It was like floating on the calm ocean....`;
   waitForClick; clearText; marker; appendText; 
   `Swaying comfortably....`;
   waitForClick; clearText; marker; appendText; 
   `Cuddled up together....`;
   waitForClick; clearText; marker; appendText; 
   `before I knew it I had stopped crying...`;
   waitForClick; clearText; marker; appendText; 
   `All I could hear was...just our calm breathing 
and...`;
   waitForClick; clearText; marker; appendText; 
   `My mother's heartbeat....`;
   waitForClick; clearText; marker; appendText; 
   `Thump, thump...Thump, thump...Thump, thump.`;
   waitForClick; clearText; marker; appendText; 
   `I was alive.`;
   waitForClick; clearText; marker; appendText; 
   `Or maybe I had just been born. `;
   waitForClick; clearText; marker; appendText; 
   `Thump, thump...Thump, thump...Thump, thump.`;
   waitForClick; clearText; marker; appendText; 
   `Everything was affirmed and accepted and 
forgiven.`;
   waitForClick; clearText; marker; appendText; 
   `There was no me, nor Sara, nor Tsugumi....`;
   waitForClick; clearText; marker; appendText; 
   `There was only one life connected together....`;
   waitForClick; clearText; marker; appendText; 
   `Just one single soul.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
bgload({ name: `BG38A2`, transition: 26 });
showDimOverlay();
playBGM({ num: 22, volume: 95 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `In the year 2017, May 7th, 11 a.m.`;
   waitForClick; 
   `
`;
   appendText; 
   `The men from the Leiblich were waiting for 
Tsugumi when she got to the floating island.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi, a carrier of the Cure Virus....`;
   waitForClick; 
   `
`;
   appendText; 
   `To them she was a valuable sample...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Their eyes glaring, and mouths half open, she 
could see their dark wet tongues.`;
   waitForClick; 
   `
`;
   appendText; 
   `It was almost possible for Tsugumi to smell 
the reek of their excitement.`;
   waitForClick; 
   `
`;
   appendText; 
   `Like the smell of men lusting after flesh....`;
   waitForClick; 
   `
`;
   appendText; 
   `It was a fetid stench, greasy and rotten.`;
   waitForClick; 
   `
`;
   appendText; 
   `For it was Tsugumi's body that they were after.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `What they wanted was nothing more that to 
perform human experiments under the pretext 
of 'Making the ultimate human dream come true.'`;
   waitForClick; 
   `
`;
   appendText; 
   `By using Tsugumi's body, they were planning 
to gain knowledge, fame and fortune.`;
   waitForClick; 
   `
`;
   appendText; 
   `That was indeed their desire.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'We've been waiting for you.' One of them 
took a deep bow.`;
   waitForClick; 
   `
`;
   appendText; 
   `Behind his veneer of politeness, was an evil 
that threatened to spill forth, making 
Tsugumi sick to her stomach.`;
   waitForClick; 
   `
`;
   appendText; 
   `Some of the others in his entourage licked 
their lips...swallowing their saliva like 
dogs gone mad with the hunt.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `That instant, Tsugumi kicked hard off the 
ground, breaking into a run.`;
   waitForClick; 
   `
`;
   appendText; 
   `She ran across the wide surface of the huge 
artificial island, desperately scaling the 
high surrounding fence and fled into the 
nearby foliage.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG39A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Their cacophony of screams and angry cursing 
faded behind her.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi hid and waited until nightfall.`;
   waitForClick; 
   `
`;
   appendText; 
   `She held a single hamster to her chest....`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG38A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   `At night -`;
   waitForClick; 
   `
`;
   appendText; 
   `A supply-carrying vessel slipped out of the 
floating island's port.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi had stowed away on the vessel, hiding 
herself among the cargo. She was headed to the 
mainland.`;
   waitForClick; 
   `
`;
   appendText; 
   `From that moment on, Tsugumi's life was 
consumed with one thought 'how to escape from 
them.'`;
   waitForClick; 
   `
`;
   appendText; 
   `Although she wasn't a criminal, she avoided 
people, preferring to hide in the darkness. 
All the while threatened by ominous feelings 
of being hunted. `;
   waitForClick; nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   `Nothing changed after she safely made it to 
land.`;
   waitForClick; 
   `
`;
   appendText; 
   `Every few weeks she moved from a town to a 
different town, wandering in the darkness....`;
   waitForClick; 
   `
`;
   appendText; 
   `She slept under bridges, under back street 
eaves, pipes pouring into the ocean and even 
in public restrooms.`;
   waitForClick; 
   `
`;
   appendText; 
   `It was an endless cycle of running. She never 
had a second's peace.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `She couldn't turn to the police.`;
   waitForClick; 
   `
`;
   appendText; 
   `She had no place to live, her identity was 
uncertain, and her age and appearance didn't 
match....`;
   waitForClick; 
   `
`;
   appendText; 
   `The police would only doubt her.`;
   waitForClick; 
   `
`;
   appendText; 
   `Information regarding Tsugumi had spread 
through the national police network, it was 
only a matter of time before Leiblich would 
find her.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Leiblich's influence even extended to national 
politics.`;
   waitForClick; 
   `
`;
   appendText; 
   `There was nothing else for Tsugumi to do but 
continue to hide in back alleys.`;
   waitForClick; 
   `
`;
   appendText; 
   `She hated Leiblich.`;
   waitForClick; 
   `
`;
   appendText; 
   `They had destroyed everything Tsugumi had 
cared about, and made her life a living 
hell...what's more.... `;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `They had taken away the love of her 
life...Takeshi Kuranari.`;
   waitForClick; 
   `
`;
   appendText; 
   `She wanted to get revenge on Leiblich with 
every fiber of her being.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi came to hate this world, and her heart 
became even more hardened to it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `IMG06A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Two months had passed. It was summertime.`;
   waitForClick; 
   `
`;
   appendText; 
   `All of a sudden she began feeling sick....`;
   waitForClick; 
   `
`;
   appendText; 
   `She knew she had stopped menstruating, but she 
didn't want to think about the possibility.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `She went to visit an illegal doctor who was 
well-known in the back streets.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi was pregnant.`;
   waitForClick; 
   `
`;
   appendText; 
   `She was sure it was Takeshi's baby. She'd 
never been with anyone else.`;
   waitForClick; 
   `
`;
   appendText; 
   `She was pregnant....`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `At night, she went to the deserted coastal 
area of a small, nearby town.`;
   waitForClick; 
   `
`;
   appendText; 
   `There were nothing but printing factories and 
abandoned houses.`;
   waitForClick; 
   `
`;
   appendText; 
   `Unsure if it was a river or the ocean, she 
sat on a boat dock, looking at a neon sign by 
the highway.`;
   waitForClick; 
   `
`;
   appendText; 
   `She touched her stomach.`;
   waitForClick; 
   `
`;
   appendText; 
   `She felt a sense of awe and joy, at the fact 
there was life growing in her stomach, and 
that it was connected to her.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The neon light glittered and flickered off of 
the water's surface.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi looked at the lights...with her hands 
on her stomach....`;
   waitForClick; 
   `
`;
   appendText; 
   `Realizing that Takeshi's babies were inside 
her, she couldn't stop crying.`;
   waitForClick; 
   `
`;
   appendText; 
   `They might have only been only an inch big at 
that time....`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `But the survival of the two babies 
outstripped the needs of the mother's body 
that surrounded them....`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi almost had the illusion that 'it 
wasn't her who bore the children, but it was 
actually they who bore her.'`;
   waitForClick; 
   `
`;
   appendText; 
   `Everything that she was, she poured into her 
two babies.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `She felt that she was part of the babies, not 
the other way around.`;
   waitForClick; 
   `
`;
   appendText; 
   `I was then that Tsugumi decided to sacrifice 
everything for the two tiny lives.`;
   waitForClick; 
   `
`;
   appendText; 
   `Love was a concept to her, but if love could 
be brought into physical form, to her, it 
seemed it must be the babies in her stomach.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `That was it, love was growing in her stomach.`;
   waitForClick; 
   `
`;
   appendText; 
   `Takeshi and Tsugumi's babies....`;
   waitForClick; 
   `
`;
   appendText; 
   `Before long, the hatred she had felt towards 
everything had disappeared without a trace.`;
   waitForClick; 
   `
`;
   appendText; 
   `For the first time, Tsugumi felt as though 
there were a higher power guiding her life.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 0 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `Seven months later. January 21, 2018.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi was suddenly struck with contractions.`;
   waitForClick; 
   `
`;
   appendText; 
   `When they came, the back alley doctor had gone 
somewhere.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `She visited a nearby clinic.  `;
   waitForClick; 
   `
`;
   appendText; 
   `She had no medical insurance, no 
identification. Most importantly she had no 
money...`;
   waitForClick; 
   `
`;
   appendText; 
   `When he found out that she couldn't pay, the 
doctor beat Tsugumi as though she were a 
stray animal.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `With nowhere else to go, the two babies were 
born in an old boat shack.`;
   waitForClick; 
   `
`;
   appendText; 
   `An old woman was living there, but Tsugumi 
could not tell whether she lived there or was 
just sleeping there temporally.`;
   waitForClick; 
   `
`;
   appendText; 
   `It was this old woman who helped Tsugumi 
through the birth.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'Ooh how precious, so precious...you done a 
fine job, deary.'`;
   waitForClick; 
   `
`;
   appendText; 
   `The old lady repeated this many times, as she 
gently rinsed the babies in a tin basin.`;
   waitForClick; 
   `
`;
   appendText; 
   `The sweat-covered Tsugumi was lying down, 
with only a thin towel between her and a 
hardwood floor.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi's eyes gazed unfocused out a nearby 
window.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
openSnowFallingAnim();
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   marker; appendText; 
   `Snow was falling outside.`;
   waitForClick; 
   `
`;
   appendText; 
   `'How darling...yes a precious boy-child and a 
girl...which one'll ya hold first?'`;
   waitForClick; 
   `
`;
   appendText; 
   `The illegal doctor had told her, so she was 
expecting twins, but she never imagined that 
they would be fraternal. `;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `A bit surprised, she said...`;
   waitForClick; 
   `
`;
   appendText; 
   `'Both at the same time.... '`;
   waitForClick; 
   `
`;
   appendText; 
   `Wrapped in an old cloth, Tsugumi gently held 
them to her chest.`;
   waitForClick; 
   `
`;
   appendText; 
   `'Not to worry, my deary. I boiled them cloth 
and the scissors what cut their cord in hot 
water good, I did.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'Thank you.'`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi thanked her.`;
   waitForClick; 
   `
`;
   appendText; 
   `'Thank you...thank you very much....'`;
   waitForClick; 
   `
`;
   appendText; 
   `She gave thanks for the two lives who had 
been born safely.`;
   waitForClick; 
   `
`;
   appendText; 
   `'Thank you....'`;
   waitForClick; 
   `
`;
   appendText; 
   `And these last words were directed toward the 
deep darkness beyond the window.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The snow was falling.`;
   waitForClick; 
   `
`;
   appendText; 
   `The two babies pressed to Tsugumi's chest 
with eyes closed, let out small yawns.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
closeSnowFallingAnim();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `The Cure Virus.`;
   waitForClick; 
   `
`;
   appendText; 
   `Soon after she had given birth, Tsugumi's 
thoughts were turned to the possibility.`;
   waitForClick; 
   `
`;
   appendText; 
   `'If they got infected by Cure while they were 
inside of me....'`;
   waitForClick; 
   `
`;
   appendText; 
   `'And if their DNA was altered just like me....'`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi visited the illegal doctor.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `EV_YU10A`, transition: 26, x: 400, y: 0, hx: 400, hy: 300 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   `'Don't worry about it.' He explained 
laughing...`;
   waitForClick; 
   `
`;
   appendText; 
   `According to taxonomic classification, a pure 
human would belong to 'Primates Anthropoidea 
Hominoidea Hominidae Homo Genus Sapiens.'`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi, whose DNA information was altered by 
the Cure Virus, was not a pure human anymore, 
but rather a subspecies of it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'Let's just call you subspecies 'Cure' for 
now....'`;
   waitForClick; 
   `
`;
   appendText; 
   `'Now any kids who were born from 'Takeshi, 
the Homo Sapiens' and 'Tsugumi, the Cure' 
would technically be 'hybrids.''`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'Now, by the way I guess I should tell you 
that the Cure Virus only infects pure humans, 
the 'Homo Sapiens.''`;
   waitForClick; 
   `
`;
   appendText; 
   `'So, there's no way the Cure Virus possibly 
affect your two 'little hybrids' there.'`;
   waitForClick; 
   `
`;
   appendText; 
   `'While not much is know about the Cure Virus, 
some of the unique functions scientists have 
discovered, such as 'regenerating telomeres' 
and 'regenerative healing' are inherited 
recessively.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'For blood types, without exception all 
children born from a 'type AA father' and a 
'type OO mother,' for instance, can only be 
'type AO,' with a 'type A' predisposition.'`;
   waitForClick; 
   `
`;
   appendText; 
   `'Why? Because type A factors are inherited 
dominantly, and type O factors are inherited 
recessively.'`;
   waitForClick; 
   `
`;
   appendText; 
   `'In order for a child's blood type to be 
'type O'....'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'...you'd have to have a mixture of either 
'AO x AO', 'AO x BO', 'AO x OO', 'BO x BO', 
'BO x OO', or 'OO x OO'....'`;
   waitForClick; 
   `
`;
   appendText; 
   `'...it can only be one of the above, meaning 
that BOTH the parents gotta add that type 'O' 
factor to the genetic milkshake.'`;
   waitForClick; 
   `
`;
   appendText; 
   `'Same goes for the Cure Virus.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'Any child born from a pureblooded 'Sapiens' 
and 'Cure' will...'`;
   waitForClick; 
   `
`;
   appendText; 
   `'...all be 'Sapiens-Cure,' and inherit the 
dominant physical traits of both.'`;
   waitForClick; 
   `
`;
   appendText; 
   `'For them rug rats to become full-blooded 
'Cure.'....'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'...the parents'd have be 'Cure x Cure', 
'Sapiens Cure x Cure', or 'Sapiens Cure x 
Sapiens Cure.'...'`;
   waitForClick; 
   `
`;
   appendText; 
   `'...any of those combinations, meaning that 
both parents have to be part or all Cure.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'And since these two little critters were 
born from a 'pure Sapiens' and 'pure Cure...''`;
   waitForClick; 
   `
`;
   appendText; 
   `'They'll have the same physical traits as a 
pure human, and won't possess the Cure traits 
like perpetual youth.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'So, you don't have nothing to worry about, 
alright?' The doctor held up the two babies 
Tsugumi had brought, and laughed again.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi didn't know his background.`;
   waitForClick; 
   `
`;
   appendText; 
   `It was probable that he had been part of 
Leiblich's laboratory staff in the past, 
since he knew so much about the Cure Virus.`;
   waitForClick; 
   `
`;
   appendText; 
   `But he didn't seem to be one of them. Tsugumi 
figured she could trust him.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Among outcasts, there is an unspoken law: You 
don't go nosing around in other people's pasts.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi didn't ask him anything more, and he 
didn't demand to know about her either.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   `A year after giving birth.`;
   waitForClick; 
   `
`;
   appendText; 
   `It was winter again.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi had rented a tiny room and lived 
together with the two babies.`;
   waitForClick; 
   `
`;
   appendText; 
   `Of course Chami was there as well.`;
   waitForClick; 
   `
`;
   appendText; 
   `It was a quiet, rustic little coastal town.`;
   waitForClick; 
   `
`;
   appendText; 
   `It wasn't a city or tourist town, no fishing 
or farming...nothing...just a dreary port town.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `During the day, Tsugumi worked for next to 
nothing at a sewing factory, while the babies 
stayed at a daycare center.`;
   waitForClick; 
   `
`;
   appendText; 
   `She spent every day, glued to a sewing 
machine from early morning to 4 p.m., and 
after that she would spend time with the 
babies.`;
   waitForClick; 
   `
`;
   appendText; 
   `Her wages were very low and of course they 
were poor. She couldn't even afford 
disposable diapers.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi collected small scraps of cloth, 
leftovers from the factory and sewed diapers 
and clothes for the babies.`;
   waitForClick; 
   `
`;
   appendText; 
   `Despite the harsh living conditions, the 
babies were growing healthily.`;
   waitForClick; 
   `
`;
   appendText; 
   `Their life was a peaceful one, and although 
they were poor, the poverty didn't threaten 
them. They were content.`;
   waitForClick; 
   `
`;
   appendText; 
   `The three of them were always smiling.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'Momma...momma....' 'Oh... Chammiii, 
Chammiii...'`;
   waitForClick; 
   `
`;
   appendText; 
   `They were already beginning to talk.`;
   waitForClick; 
   `
`;
   appendText; 
   `The boy had starting walking a few steps at a 
time. The was girl able to stand, barely, as 
she held onto things.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The girl had begun to speak 'Oh...Chammiii, 
Chammiii....' which was very unusual for a 
one-year-old.`;
   waitForClick; 
   `
`;
   appendText; 
   `The boy, it seemed, grew faster physically 
and the girl grew faster intellectually.`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi tenderly watched over their cute 
gestures. She was filled with happiness.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `EV_SA13D`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   `May 7, 2019.`;
   waitForClick; 
   `
`;
   appendText; 
   `The two babies were 15 months old. `;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi had taken them to the beach.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The boy ran around the sand, falling and 
getting back up over and over.`;
   waitForClick; 
   `
`;
   appendText; 
   `The girl was sitting by the water putting her 
hands in the waves....`;
   waitForClick; 
   `
`;
   appendText; 
   `She was giggling saying 'Cooold...so cold....'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Watching out over the flat surface of the 
ocean, Tsugumi's thoughts turned to Takeshi.`;
   waitForClick; 
   `
`;
   appendText; 
   `'So live! As long as you're alive, live! Don't 
worry...I'm not going to die - those were 
Takeshi's last words to her.`;
   waitForClick; 
   `
`;
   appendText; 
   `It had been two years already.`;
   waitForClick; 
   `
`;
   appendText; 
   `'I'm not going to die.'  After saying that, 
he sunk to the bottom of the ocean, 
protecting the woman he loved, protecting the 
children right in front of her.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'You fool, you're a liar.' Tsugumi whispered 
to the ocean.`;
   waitForClick; 
   `
`;
   appendText; 
   `But at the same time, she still hadn't given 
up hope.`;
   waitForClick; 
   `
`;
   appendText; 
   `'No...He must be alive somewhere. He's a man 
of his word.'`;
   waitForClick; 
   `
`;
   appendText; 
   `Just then.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `A wave swallowed the girl, who had been 
playing near the edge of the water.`;
   waitForClick; 
   `
`;
   appendText; 
   `For an adult, it would hardly have reached 
their shin, but for a one-year-old baby, it 
was as big as tsunami.`;
   waitForClick; 
   `
`;
   appendText; 
   `The girl disappeared in a splash of water and 
was sucked out into the ocean like a piece of 
driftwood by the tide.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi ran as hard as she could, held back 
by the resistance of the sand.`;
   waitForClick; 
   `
`;
   appendText; 
   `But before she could get there, something 
unbelievable happened.`;
   waitForClick; 
   `
`;
   appendText; 
   `The boy, who was only one year and three 
months old, jumped into the water and saved 
the girl.  `;
   waitForClick; 
   `
`;
   appendText; 
   `Hardly able to believe what she had seen, 
Tsugumi rushed toward them.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `She carried them to dry sand.`;
   waitForClick; 
   `
`;
   appendText; 
   `The girl started crying.`;
   waitForClick; 
   `
`;
   appendText; 
   `The boy, seemingly unaware of what had 
happened, looked at his sister crying.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `A few seconds later...he fell over as all his 
strength had left him.`;
   waitForClick; 
   `
`;
   appendText; 
   `That night, both of them came down with a 
high fever.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `IMG05A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   `It was summertime. A year and a half had 
passed since the birth.`;
   waitForClick; 
   `
`;
   appendText; 
   `All of that time in the past year and a half 
had been filled with happiness.`;
   waitForClick; 
   `
`;
   appendText; 
   `Nothing special had happened...and that was 
why it had been so peaceful....`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgload({ name: `EV_TU17A`, transition: 26 });
dimOff_ac = 0;
closeDimOverlay();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `The boy was a wild one, and Tsugumi could 
hardly take her eyes off of him for a second.`;
   waitForClick; 
   `
`;
   appendText; 
   `He constantly was putting everything (even 
Chami) in his mouth....`;
   waitForClick; 
   `
`;
   appendText; 
   `Any electric appliance that he touched seemed 
to break, and he wouldn't stop jamming metal 
wires into the outlets.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The girl wasn't quite as much of a challenge, 
since she moved about less, but still Tsugumi 
had to put up with her stubbornness.`;
   waitForClick; 
   `
`;
   appendText; 
   `She refused to eat things she didn't like, 
and when she got in a bad mood, she wouldn't 
stop fussing...`;
   waitForClick; 
   `
`;
   appendText; 
   `And no matter how much Tsugumi warned her, she 
wouldn't stop playing with her brother's hair.`;
   waitForClick; 
   `
`;
   appendText; 
   `And she would always demand for 'More Chami! 
More Chami!'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `Those days were filled with being buffeted 
about by her two rambunctious children....`;
   waitForClick; 
   `
`;
   appendText; 
   `But no matter how challenging, even those 
days were filled with happiness.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `At night, all three of them slept together 
cuddled up on a thin mattress. `;
   waitForClick; 
   `
`;
   appendText; 
   `'Momma...momma....'`;
   waitForClick; 
   `
`;
   appendText; 
   `'Aaah...Chammiii, Chammmiii....'`;
   waitForClick; 
   `
`;
   appendText; 
   `Talking in their sleep, the two babies sought 
their mother's touch. `;
   waitForClick; 
   `
`;
   appendText; 
   `Looking down at their sweet innocent gestures, 
Tsugumi felt bliss she had never know.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
removeBG({ mode: RED, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `One day.`;
   waitForClick; 
   `
`;
   appendText; 
   `Her peaceful world was shattered to bits.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `IMG04A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `It all happened so unexpectedly....`;
   waitForClick; 
   `
`;
   appendText; 
   `Caught up in her life of happiness, Tsugumi 
had forgotten to watch out for 'them.'`;
   waitForClick; 
   `
`;
   appendText; 
   `She didn't know how they had found out, but 
they had somehow gathered information and 
showed up without warning. `;
   waitForClick; 
   `
`;
   appendText; 
   `Them...the people from Leiblich....`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `With no time to collect anything, all 
Tsugumi could bring with her was her two 
babies and her hamster as she fled.`;
   waitForClick; 
   `
`;
   appendText; 
   `So they ran, but....`;
   waitForClick; 
   `
`;
   appendText; 
   `It was obvious to Tsugumi that eventually 
Leiblich would hunt them down.`;
   waitForClick; 
   `
`;
   appendText; 
   `As they continued running, Tsugumi thought to 
herself. `;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'Even if I could keep escaping, would it 
really be happiness for the two children?'`;
   waitForClick; 
   `
`;
   appendText; 
   `'They wouldn't be able to go to school.'`;
   waitForClick; 
   `
`;
   appendText; 
   `'And it would be too hard on them to keep 
moving from town to town.'`;
   waitForClick; 
   `
`;
   appendText; 
   `'Besides...if we ever get caught, what would 
they do to my children at Leiblich?'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'It's too dangerous for them to be with me....'`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi made up her mind.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `She researched an orphanage she could trust 
and decided to leave them there.`;
   waitForClick; 
   `
`;
   appendText; 
   `The two children were just too young...`;
   waitForClick; 
   `
`;
   appendText; 
   `Even if Tsugumi had tried to explain, they 
couldn't have understood.`;
   waitForClick; 
   `
`;
   appendText; 
   `With no other option, she left the pendant 
she had kept with her, making a wish as she 
gave it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `'I will come back for you. I will come to get 
you, I promise.'`;
   waitForClick; 
   `
`;
   appendText; 
   `Being too young to understand the situation, 
the two children just stared at their mother 
crying.`;
   waitForClick; 
   `
`;
   appendText; 
   `Weeping bitter tears, Tsugumi looked back many 
times as she walked away.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `All she had now was Chami.`;
   waitForClick; 
   `
`;
   appendText; 
   `From Tsugumi's chest pocket, Chami looked up 
at her face in puzzlement.`;
   waitForClick; 
   `
`;
   appendText; 
   `But even Chami's cute gestures could do 
little to ease Tsugumi's broken heart.`;
   waitForClick; 
   `
`;
   appendText; 
   `She spent many nights in the depth of despair, 
crying in her sorrow.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `A few years later.`;
   waitForClick; 
   `
`;
   appendText; 
   `By the time Tsugumi went back to the 
orphanage, the children were already gone.`;
   waitForClick; 
   `
`;
   appendText; 
   `From that time on she had gone through life....`;
   waitForClick; 
   `
`;
   appendText; 
   `No more than an empty husk...`;
   waitForClick; 
   `
`;
   appendText; 
   `Until that day, until that very moment....`;
   waitForClick; 
   `
`;
   appendText; 
   `Tsugumi had kept searching for her children....`;
   waitForClick; 
   `
`;
   appendText; 
   `Wandering through darkness.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG05A3`, transition: 10 });
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi finished telling her story and closed 
her eyes gently.`;
   waitForClick; clearText; marker; appendText; 
   `She never once mentioned the names 'Hokuto' 
or 'Sara' in the story.`;
   waitForClick; clearText; marker; appendText; 
   `Because those names weren't the names Tsugumi 
had given them. `;
   waitForClick; clearText; marker; appendText; 
   `Someone else had named them 'Hokuto' and 
'Sara'.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `..................`;
   waitForClick; clearText; marker; appendText; 
   `............`;
   waitForClick; clearText; marker; appendText; 
   `......`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG25B3`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`14:54`);
showTextbox();
text(() => {
   marker; appendText; 
   `I left Tsugumi and Sara.`;
   waitForClick; clearText; marker; appendText; 
   `If I could, I wanted to stay with them 
forever, but it wasn't possible.`;
   waitForClick; clearText; marker; appendText; 
   `There were still many unsolved matters that I 
needed to take care of.`;
   waitForClick; clearText; marker; appendText; 
   `Listening to Tsugumi's story had caused me to 
suddenly remember something.`;
   waitForClick; clearText; marker; appendText; 
   `I had received a phone call before coming to 
LeMU.`;
   waitForClick; clearText; marker; appendText; 
   `Over the phone, a voice had said to me. `;
   waitForClick; clearText; marker; appendText; 
   `'If you come to LeMU, you can see your mother 
and sister.'`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, so that was it...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Before the accident took place, I had been 
waiting for someone at the rest area."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It must have been my mother and Sara...."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi must have been roped in to coming to 
LeMU in the same way I was. `;
   waitForClick; clearText; marker; appendText; 
   `—wait, roped in!? `;
   waitForClick; clearText; marker; appendText; 
   `—What for...!?`;
   waitForClick; clearText; marker; appendText; 
   `I still didn't know the answer to that.`;
   waitForClick; clearText; marker; appendText; 
   `But I had some clues....`;
   waitForClick; clearText; marker; appendText; 
   `The voice on the phone had been male.`;
   waitForClick; clearText; marker; appendText; 
   `Without a doubt I knew whose voice it had been.`;
   waitForClick; clearText; marker; appendText; 
   `I ran to him.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
bgload({ name: `BG21B1`, transition: 26 });
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"You...you..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You aren't Takeshi Kuranari!"`;
   waitForClick; clearText; marker; appendText; 
   `Barging into the rest area I demanded an 
answer from the man in front of me.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't call him 'Takeshi' anymore.`;
   waitForClick; clearText; marker; appendText; 
   `This guy had been deceiving us the whole time.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A422`); appendText; 
   Takeshi`"Look I don't have any clue what you're 
talking about...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't play dumb!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know that the real Takeshi is Sara's and my 
father!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A423`); appendText; 
   Takeshi`"Father? Me? You and Sara's?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, not you!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara and I are the children of Takeshi and 
Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A424`); appendText; 
   Takeshi`"Wait, so Tsugumi and I...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I keep telling you, you're not Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm talking about Takeshi from the other 
world!"`;
   waitForClick; clearText; marker; sound(`C5A425`); appendText; 
   Takeshi`"Other world? What the heck's that supposed 
to mean?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The world back in 2017!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A426`); appendText; 
   Takeshi`"Um...2017, huh...?"`;
   waitForClick; clearText; marker; sound(`C5A427`); appendText; 
   Takeshi`"And when were you born?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"On January 21, 16 years ago."`;
   waitForClick; clearText; marker; sound(`C5A428`); appendText; 
   Takeshi`"In what year?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"In 2018!"`;
   waitForClick; clearText; marker; sound(`C5A429`); appendText; 
   Takeshi`"I see."`;
   waitForClick; clearText; marker; sound(`C5A430`); appendText; 
   Takeshi`"So, how could you possibly know what 
happened in 2017?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I dunno, I just do! What do you expect me to 
do about it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Besides, we're not talking about me now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who...who are you anyway!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And why did you lie about the year 2017!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why are you pretending to be 'Takeshi 
Kuranari!?'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What was the reason you tried to trick us by 
repeating the same incident as 17 years ago 
and by using the same words!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A431`); appendText; 
   Takeshi`"To trick you...to trick you, huh...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A432`); appendText; 
   Takeshi`"Think twice, will you, Kid?"`;
   waitForClick; clearText; marker; sound(`C5A433`); appendText; 
   Takeshi`"For instance, if I was repeating the 
incident in 2017,"`;
   waitForClick; clearText; marker; sound(`C5A434`); appendText; 
   Takeshi`"How could I possibly trick you who were born 
in 2018?"`;
   waitForClick; clearText; marker; sound(`C5A435`); appendText; 
   Takeshi`"Practically speaking, it is impossible to 
trick you into believing ''the same incident 
from 17 years ago is taking place.'"`;
   waitForClick; clearText; marker; sound(`C5A436`); appendText; 
   Takeshi`"Do you get it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A437`); appendText; 
   Takeshi`"Besides, how could you tell it was the same 
incident?"`;
   waitForClick; clearText; marker; sound(`C5A438`); appendText; 
   Takeshi`"How could you tell that I'm using the same 
phrase?"`;
   waitForClick; clearText; marker; sound(`C5A439`); appendText; 
   Takeshi`"How could you know the history before you 
were even born!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A440`); appendText; 
   Takeshi`"Why don't you appear your true self?"`;
   waitForClick; clearText; marker; sound(`C5A441`); appendText; 
   Takeshi`"Who are you anyway!?"`;
   waitForClick; clearText; marker; appendText; 
   `Somehow, I couldn't say a word.`;
   waitForClick; clearText; marker; appendText; 
   `(Who am I anyway...?)`;
   waitForClick; clearText; marker; appendText; 
   `The same question was repeated in my mind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A442`); appendText; 
   Takeshi`"Oh, I see, when it comes to your story, you 
clam up, huh...?"`;
   waitForClick; clearText; marker; sound(`C5A443`); appendText; 
   Takeshi`"Alright then."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A444`); appendText; 
   Takeshi`"I'll tell you my real name."`;
   waitForClick; clearText; marker; sound(`C5A445`); appendText; 
   Takeshi`"Yes, as you said, I am not Takeshi Kuranari."`;
   waitForClick; clearText; marker; sound(`C5A446`); appendText; 
   Takeshi`"My real name is...."`;
   waitForClick; clearText; marker; sound(`C5A447`); appendText; 
   Kaburaki`"Kaburaki."`;
   waitForClick; clearText; marker; sound(`C5A448`); appendText; 
   Kaburaki`"Ryogo Kaburaki."`;
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
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GREEN);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG21B1`, transition: 26 });
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`15:19`);
showTextbox();
text(() => {
   marker; sound(`C5A449`); appendText; 
   Kaburaki`"Ryogo Kaburaki."`;
   waitForClick; clearText; marker; sound(`C5A450`); appendText; 
   Kaburaki`"I just remembered my name...."`;
   waitForClick; clearText; marker; appendText; 
   `The Kid repeated it slowly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A451`); appendText; 
   Kaburaki`"Ryogo..., Ka...bu...ra...ki...."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ryogo Kaburaki...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So I see...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Way to go."`;
   waitForClick; clearText; marker; appendText; 
   `I smiled and patted his head.`;
   waitForClick; clearText; marker; appendText; 
   `The young Kaburaki smiled shyly.... `;
   waitForClick; clearText; 
});
bgload({ name: `IT05G`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Without a word, the young Kaburaki went 
behind the statue and started scratching. `;
   waitForClick; clearText; marker; appendText; 
   `He had a screwdriver in his hand....`;
   waitForClick; clearText; marker; appendText; 
   `"Ryogo Kaburaki."`;
   waitForClick; clearText; marker; appendText; 
   `With thin sharp writing, The young Kaburaki 
carved his name deeply into the statue.`;
   waitForClick; clearText; marker; appendText; 
   `He must have been pretty happy to have 
remembered his name?`;
   waitForClick; clearText; marker; appendText; 
   `Or was it so that he wouldn't forget it 
again...?`;
   waitForClick; clearText; marker; appendText; 
   `Although I didn't know the reason, he carved 
his name into the statue.`;
   waitForClick; clearText; marker; appendText; 
   `He continued on....`;
   waitForClick; clearText; marker; appendText; 
   `Without stopping his hands, he also carved the 
following letters.`;
   waitForClick; clearText; marker; appendText; 
   `"Coco Yagami"`;
   waitForClick; clearText; marker; appendText; 
   `"Yubiseiharukana Tanaka"`;
   waitForClick; clearText; marker; appendText; 
   `"Tsugumi Komachi"`;
   waitForClick; clearText; marker; appendText; 
   `"Sora Akanegasaki"`;
   waitForClick; clearText; marker; appendText; 
   `"Takeshi Kuranari"`;
   waitForClick; clearText; marker; appendText; 
   `"Pipi" and "Chami"`;
   waitForClick; clearText; 
});
bgload({ name: `IT05H`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `The young Kaburaki carved all of our names 
who had been confined here.`;
   waitForClick; clearText; marker; appendText; 
   `He smiled happily after finishing up....`;
   waitForClick; clearText; marker; appendText; 
   `The statue kept silent with its hand on the 
chest.... `;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG21B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`16:22`);
showTextbox();
text(() => {
   marker; appendText; 
   `That boy's name was also...Ryogo Kaburaki!?`;
   waitForClick; clearText; marker; appendText; 
   `Which meant that... the 'Kid from the 17 
years ago' and...'this guy pretending to be 
Takeshi' were...actually same person!?`;
   waitForClick; clearText; marker; appendText; 
   `He looked so young that it was hard to 
believe it had been 17 years.`;
   waitForClick; clearText; marker; appendText; 
   `If the young Kaburaki was 15 years old, that 
would make him 32 years old in this world.`;
   waitForClick; clearText; marker; appendText; 
   `But the Kaburaki I spoke to looked around 
20... there was no way he could have been 
over 30 years old.`;
   waitForClick; clearText; marker; appendText; 
   `Which meant...?`;
   waitForClick; clearText; marker; appendText; 
   `.................`;
   waitForClick; clearText; marker; appendText; 
   `Before I realized it, the man who called 
himself Kaburaki had disappeared.`;
   waitForClick; clearText; marker; appendText; 
   `He had left a while before.`;
   waitForClick; clearText; marker; appendText; 
   `I'd been standing there lost in thought for 
some time.`;
   waitForClick; clearText; marker; appendText; 
   `I remembered back to the scene in 2017, which 
I had just witnessed earlier....`;
   waitForClick; clearText; 
});
bgload({ name: `IT05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I went around one of the statues, as if being 
called over to it.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `On its back were carved childish stick figures.`;
   waitForClick; clearText; marker; appendText; 
   `Six human-like figures and two unfamiliar 
animal shapes were drawn there.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...What?"`;
   waitForClick; clearText; marker; appendText; 
   `I looked at the statue.`;
   waitForClick; clearText; marker; appendText; 
   `The statue pointed south.`;
   waitForClick; clearText; marker; appendText; 
   Kid`".........?"`;
   waitForClick; clearText; 
});
bgload({ name: `IT05C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I looked at the back of other statues as well.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Surprisingly, there were similar drawings on 
the statue pointing to the sky.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05G`, transition: 20 });
delay({ interval: 60 });
bgload({ name: `IT05H`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `There were also six people's names and as 
well as 'Pipi' and 'Chami' carved into the 
statue which stood with its hand on its chest.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `There was no writing on the statue pointing 
east.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, just what is this supposed to mean!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What is up with this world anyway!?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Puzzled and confused, my head felt like it 
was about to explode.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know things that I was supposed to 
know...I knew things that I wasn't supposed 
to....`;
   waitForClick; clearText; marker; appendText; 
   `(That must be why my head is so confused.)`;
   waitForClick; clearText; marker; appendText; 
   `(I still haven't recalled any of my memories.)`;
   waitForClick; clearText; marker; appendText; 
   `Some parts of it had come back, but nothing 
really important.`;
   waitForClick; clearText; marker; appendText; 
   `To begin with, I still didn't know what kind 
of person this 'Hokuto' was.`;
   waitForClick; clearText; marker; appendText; 
   `And at the same time, I knew what I wasn't 
supposed to know and I could see what I 
wasn't supposed to see. `;
   waitForClick; clearText; marker; appendText; 
   `For instance, the world 17 years into the 
past. `;
   waitForClick; clearText; marker; appendText; 
   `About the legend of Pygmalion, the Tief Blau 
Virus, the Cure Virus, Pipi, and Chami....`;
   waitForClick; clearText; marker; appendText; 
   `I knew about all of them now.`;
   waitForClick; clearText; marker; appendText; 
   `I knew exactly what had happened during the 
dramatic escape 17 years ago, and what had 
happened on May 6th and 7th.`;
   waitForClick; clearText; marker; appendText; 
   `And the world in 2034.`;
   waitForClick; clearText; marker; appendText; 
   `I could sense even the different history 
flows in this world.`;
   waitForClick; clearText; marker; appendText; 
   `I knew about escaping using the principle of a 
siphon and about swimming to the ocean 
surface from 104 feet under the water.`;
   waitForClick; clearText; marker; appendText; 
   `The third eye...Blick Winkel...those words 
were clear in my head.`;
   waitForClick; clearText; marker; appendText; 
   `And...then....`;
   waitForClick; clearText; marker; appendText; 
   `I remembered running into Ms. Tanaka on the 
floating island.`;
   waitForClick; clearText; marker; appendText; 
   `Or maybe more precisely I should say 'I could 
see it' rather than 'remember it'.`;
   waitForClick; clearText; marker; appendText; 
   `Anyway, I saw her.`;
   waitForClick; clearText; marker; appendText; 
   `The woman who was called Ms. 
Tanaka...Yubiseiakikana's mother....`;
   waitForClick; clearText; marker; appendText; 
   `Meaning, she was actually Yubiseiharukana.`;
   waitForClick; clearText; marker; appendText; 
   `Although their relationship defied the norm, 
still Yubiseiharukana and Yubiseiakikana 
were mother and daughter.`;
   waitForClick; clearText; marker; appendText; 
   `.................`;
   waitForClick; clearText; marker; appendText; 
   `Pieces of my thoughts scattered....`;
   waitForClick; clearText; marker; appendText; 
   `I tried gathering them and struggled to come 
up with some kind of conclusion.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's 2034 now...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And Coco was in 2017...."`;
   waitForClick; clearText; marker; appendText; 
   `I whispered to confirm the facts.`;
   waitForClick; clearText; marker; appendText; 
   `Yes, that's right, it was 2034 now....`;
   waitForClick; clearText; marker; appendText; 
   `That was why Tsugumi had been so suspicious 
of us.`;
   waitForClick; clearText; marker; appendText; 
   `Because the same thing that had happened 17 
years ago was repeating....`;
   waitForClick; clearText; marker; appendText; 
   `How about the others?`;
   waitForClick; clearText; marker; appendText; 
   `Since Yubiseiakikana had been one 17 years 
ago, she couldn't possibly have known about 
the incident.`;
   waitForClick; clearText; marker; appendText; 
   `And since Sara hadn't been born yet, she 
wouldn't know either.`;
   waitForClick; clearText; marker; appendText; 
   `Sora, being AI, couldn't lie. And she didn't 
seem to be lying either.`;
   waitForClick; clearText; marker; appendText; 
   `So that only left Kaburaki.`;
   waitForClick; clearText; marker; appendText; 
   `Did that mean Kaburaki was the mastermind 
behind this whole incident in 2034?`;
   waitForClick; clearText; marker; appendText; 
   `No, wait....`;
   waitForClick; clearText; marker; appendText; 
   `There had been two others who had survived the 
incident 17 years ago....`;
   waitForClick; clearText; marker; appendText; 
   `Yubiseiharukana and Coco.`;
   waitForClick; clearText; marker; appendText; 
   `On May 6, 2017.`;
   waitForClick; clearText; marker; appendText; 
   `Kaburaki, Yubiseiharukana, and Coco who had 
been infected with the Tief Blau Virus, had 
been rescued by the mini-sub, which came to 
the pool in IBF.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, wait...."`;
   waitForClick; clearText; marker; appendText; 
   `How did the three of them recover from the 
virus after they'd been infected?`;
   waitForClick; clearText; marker; appendText; 
   `Because of the injection of antibodies made 
from Tsugumi's blood...?`;
   waitForClick; clearText; marker; appendText; 
   `But Coco hadn't received the antibodies.`;
   waitForClick; clearText; marker; appendText; 
   `Because she had been under high-pressure 
oxygen treatment in the capsule pod at the 
time....`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   `(No, no, even before that)`;
   waitForClick; clearText; marker; appendText; 
   `(Yubiseiharukana suffered from 'critical 
heart disease,' right?)`;
   waitForClick; clearText; marker; appendText; 
   `(But Yubiseiharukana is still alive and well 
now)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What is going on here...?"`;
   waitForClick; clearText; marker; appendText; 
   `(Well I guess there's just one answer....)`;
   waitForClick; clearText; marker; appendText; 
   `(It's the only explanation...)`;
   waitForClick; clearText; marker; appendText; 
   `Yubiseiharukana and Kaburaki must have been 
infected with the Cure Virus.`;
   waitForClick; clearText; marker; appendText; 
   `Their bodies must had repeated five years 
worth of cell division, and when all their 
DNA had been replaced, they stopped aging.`;
   waitForClick; clearText; marker; appendText; 
   `That must have been why they looked younger 
than their real age.`;
   waitForClick; clearText; marker; appendText; 
   `And Yubiseiharukana's heart disease would 
have been fixed by the Cure Virus. `;
   waitForClick; clearText; marker; appendText; 
   Kid`"But still...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is that really what happened...?"`;
   waitForClick; clearText; marker; appendText; 
   `In a different history flow, Kaburaki 
couldn't see the image in the pendant.`;
   waitForClick; clearText; marker; appendText; 
   `If he wasn't lying or acting, he must not have 
possessed infrared vision.`;
   waitForClick; clearText; marker; appendText; 
   `And although I didn't have proof my instincts 
told me Yubiseiharukana didn't possess 
infrared vision, either.`;
   waitForClick; clearText; marker; appendText; 
   `Then again in the world of 2017....`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi had mentioned she was 'special' among 
carriers of the Cure Virus.`;
   waitForClick; clearText; marker; appendText; 
   `Perhaps she was a rare example of DNA 
replacement that had taken place safely over 
the whole body.`;
   waitForClick; clearText; marker; appendText; 
   `That meant...?`;
   waitForClick; clearText; marker; appendText; 
   `Yubiseiharukana and Kaburaki were not 
complete Cure, then?`;
   waitForClick; clearText; marker; appendText; 
   `But...it didn't seem to me that there could 
be any such thing as an 'incomplete Cure'..... `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Um...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's no use...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can't figure it out...."`;
   waitForClick; clearText; marker; appendText; 
   `But I still had far serious matter to deal 
with.`;
   waitForClick; clearText; marker; appendText; 
   `I needed to think about this problem first.`;
   waitForClick; clearText; marker; appendText; 
   `The problem was....`;
   waitForClick; clearText; marker; appendText; 
   `'How was I able to sense incidents that had 
taken place before I was born, or in separate 
time continua?'`;
   waitForClick; clearText; marker; appendText; 
   `And....`;
   waitForClick; clearText; marker; appendText; 
   `'Why is the same accident as 17 years earlier 
taking place again?'`;
   waitForClick; clearText; marker; appendText; 
   `It couldn't have been a coincidence. `;
   waitForClick; clearText; marker; appendText; 
   `Obviously someone had planned it.`;
   waitForClick; clearText; marker; appendText; 
   `There was only one clue....`;
   waitForClick; clearText; marker; appendText; 
   `Coco.`;
   waitForClick; clearText; marker; appendText; 
   `I wanted to see Coco.`;
   waitForClick; clearText; marker; appendText; 
   `I felt that Coco would know everything there 
was to know about this incident.`;
   waitForClick; clearText; marker; appendText; 
   `But how could I find Coco who seemed to just 
pop up randomly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, I know...."`;
   waitForClick; clearText; marker; appendText; 
   `I had a sudden inspiration....`;
   waitForClick; clearText; marker; appendText; 
   `I had a hunch.`;
   waitForClick; clearText; marker; appendText; 
   `At this hour on the 5th....`;
   waitForClick; clearText; marker; appendText; 
   `Coco would show up....`;
   waitForClick; clearText; marker; appendText; 
   `In the Cosmic Whale Room....`;
   waitForClick; clearText; 
});
l_choice = 0;
jump(`YC6A`);
