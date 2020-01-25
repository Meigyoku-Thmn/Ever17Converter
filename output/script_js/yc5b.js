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
   `The hologram pendant.`;
   `I thought back to the image in Sara's hologram pendant.`;
   `(That means...the image in the pendant...was of a DIFFERENT Takeshi Kuranari....)`;
   `(And Tsugumi...has infrared vision, like Sara and me.)`;
   `(Which means....which means...)`;
   `(Both Sara and my parents were....)`;

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
   Tsugumi(C5A317)`"What is it?"`;
   Sora(C5A318)`"Are you all right, Kid?"`;
   Sora(C5A319)`"You don't look so good...."`;
   `I shook my head and shivered as I stepped slowly backwards.`;
   `My back bumped against the wall.`;
   Kid`"It can't be...."`;
   Tsugumi(C5A320)`"Huh?"`;
   Kid`"No! No! No!"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
showTextbox();
text(() => {
   `I let out a cry that was almost a scream.`;
   `Swinging around, I opened the door, and ran out of the Control Room.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I wanted get as far away as I could.`;
   `I wanted to find a place where no one could find me.`;

});
showTextbox();
text(() => {
   `I pounded up the emergency stairs.`;

});
showTextbox();
text(() => {
   `I ran forward in a dark haze.`;
   `I ran as if I could escape the fear that threatened to overwhelm me....`;
   `Further and further away....`;
   `But in this confined space, there was nowhere I could run away to.`;
   `Eventually I reached the end of the corridor.`;

});
bgload({ name: `BG03A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `And ended up in front of the Jellyfish Gondola - `;
   `There was no way past the closed flood doors.`;
   `I stood in front of a decorated arch.`;
   `The gondola had to be somewhere beyond the gates, which were veiled in darkness.`;
   `In the gondola, Tsugumi and the real Takeshi....`;
   `(It's impossible!)`;
   `I tried to purge the thought from my mind.`;
   `But the suspicion mercilessly attacked my brain until I could no longer think straight.`;
   `The battle between denial and acceptance...I writhed in pain, sinking further into a trench of despair.`;
   `In my mind, there was only one possibility.`;
   `I was almost convinced of the certainty of it.`;
   `On the other hand, I hated the possibility so much that I wanted with all of my heart to reject it.`;
   `I put my hand on my chest, breathing in deeply, and I tried to calm my thoughts.`;
   `If it was true that Tsugumi had infrared vision....`;
   `And if the incident I witnessed in the Jellyfish Gondola really did happen....`;
   `The Takeshi and Tsugumi who had existed in the other world....`;
   `Would be....`;
   `Sara's and my parents.`;
   `(No! It can't be!)`;
   `I was once again overwhelmed by feelings of denial.`;
   `Sara and I were 16.`;
   `If Tsugumi had given birth to us, then it would have been 16 years ago....`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Kid`"Huh?"`;
   `I suddenly felt as if I had been hit by lightning.`;
   `My head was filled with a blinding light.`;
   `Suddenly kicking off the floor, I broke into a run.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG26A3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `It was 2017 now, so 16 years ago would have been 2001.`;
   `The world I had seen was 2000....`;
   `Wait a minute....`;
   `What if....`;
   `If this year wasn't 2017....`;

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
   `I opened the door of the Security Office and stumbled into the room.`;
   `As I suspected, I found You there.`;
   Kid`"You!"`;
   `Breathing heavily, I approached You.`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C5A321)`"Wh-what is it? All of a sudden!?"`;
   You(C5A322)`"What is it? ...What's wrong?"`;
   Kid`"This year...."`;
   Kid`"What...year is it?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C5A323)`"Huh?"`;
   Kid`"Just answer me!"`;
   `You blinked slowly, her mouth half-open.`;
   Kid`"Well?"`;
   `I glared at You, and pressed her for an answer.`;
   `A little overwhelmed by my enthusiasm, You seemed a bit disconcerted.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C5A324)`"On the standard calendar...."`;
   You(C5A325)`"20...."`;
   You(C5A326)`"...34. Why?"`;

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
   Takeshi`"It's 2017...."`;
   Takeshi`"So 2013 was four years ago?"`;
   `I said to You.`;
   `You and I were alone in the Security Office....`;
   `All the sudden You had asked me to come see her, and had started talking about what had happened in 2013.`;
   `No, I probably had seen it coming.`;
   `Just before she had spoken to me, You had hinted indirectly that she had changed her mind and needed someone to confide in.`;
   `Her expression was solemn, like a nun about to seek redemption.`;
   `You's eyes were empty of emotion.`;
   `And at the same time, her gaze showed an unconditional compassion: impartial, demanding nothing, asking nothing.`;
   `After a short while....`;
   You(C5A327)`"That's right."`;
   You(C5A328)`"It was four years ago...."`;
   You(C5A329)`"When I was 14."`;
   `You began quietly to tell her story....`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `Yubiseiharukana had a serious heart condition.`;
   `She hadn't been born with it.`;
   `In 2013, when she was 14, she suddenly had fallen ill.`;
   `One day, You had suddenly collapsed.`;
   `She was examined at the hospital and the doctor told her...`;
   Doctor`"This is very hard for me to tell you, so I want you to please listen calmly."`;
   Doctor`"You have a very serious heart condition."`;
   Doctor`"It's unclear whether you'll even make it to the end of high school."`;
   `This meant that she only had three or four more years to live.`;
   `A transplant was out of the question. And even with treatment, she would only suffer and they couldn't guarantee her a cure.`;
   `There was no way left for her to survive.`;
   `She had received a death sentence.`;
   Doctor`"But medical treatment is advancing daily."`;
   Doctor`"In a few years, we may still find a cure."`;
   Doctor`"So don't give up. You have to fight this illness."`;
   `With the doctor's hollow consolation, emptiness took over her mind.`;

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
   `2014.`;
   `Her fear of her approaching death was growing.`;
   `One day, while she was at the hospital, she met a gentleman.`;
   `Through the course of their meetings, she and the gentlemen came to trust one another, and became very close.`;
   `It was a close relationship, like the bond between a parent and a child....`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Between a father and a daughter.`;
   `Yubiseiharukana had grown up without knowing a father's warmth.`;
   `Perhaps she was seeking from him the love from the father she had never known.`;
   `As for the gentleman, he had a daughter close to her age.`;
   `When he found out about You's illness, he felt as much sympathy as he would have for his own daughter.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `They were close like a parent and a child, joined by a strong feeling like love.`;
   `Having built up a trust, Yubiseiharukana one day confessed her fear, her despair and agony to him.`;
   `With a serious look on his face, the gentleman said - `;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `"Come to my lab."`;
   `${noWait}`;

});
showTextbox();
text(() => {
   `His name was Shigezo Morino.`;
   `Doctor Morino was a world authority in genetic engineering.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `In November of that year...`;
   `After making up her mind, Yubiseiharukana visited the doctor's lab.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `"There are three types of immortality."`;
   `"The first is immortality of the body."`;
   `"The second is immortality of the memory."`;
   `"The third is genetic immortality."`;
   `"How would you like to try the third kind?"`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The doctor presented this extraordinary plan to her with the calmness of a scientist, his tone matter-of-fact.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `"Your heart problem was acquired after birth, rather being something you were born with."`;
   `"So, if you choose the third option..."`;
   `"You don't have to worry about passing the condition onto your 'children'."`;
   `"There is nothing for you to worry about."`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Ever since being told that she would die, she had been terrified at the approaching shadow of death.`;
   `Not a night would go by that she didn't rail against her misfortune, all the while clawing at her chest in agony. `;
   `She had given up on life, and was no more than an empty shell.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `But this day, she was suddenly able to see a glimmer of hope.`;
   `The doctor's words convinced her, and her way of thinking gradually changed.`;
   `'If I only have a few more years to live, I at least want to leave something of myself behind in this world.'`;
   `Her tenacity for life defied imagination.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `She finally made the decision.`;
   `She chose the third option.`;
   fadeClearPage();
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
   `One month later. December, 2014.`;
   `Yubiseiharukana had the nucleus from one of her own cells implanted in her own ovaries, which then began to grow in her womb.`;
   `Of course, Doctor Morino performed the surgery.`;
   `She was pregnant with her 'new self'.`;
   fadeClearPage();
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
   `Nine months later - September 22, 2015.`;
   `Yubiseiharukana safely gave birth.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `EV_YU16A`, transition: 0 });
showTextbox();
text(() => {
   `${voice(C5A330)}${noWait}`;
   Append(C5A331)`"My baby!"${wait} ${noWait}`;
   Append(C5A332)`"You are my sister."${wait} ${noWait}`;
   Append`"You are... me, myself."`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Yubiseiharukana loved the new child with all of her heart, and gave her a name. `;
   `She called her Yubiseiakikana.`;
   `That's right, Yubiseiakikana was Yubiseiharukana's daughter.`;
   `And at the same time, they not only were mother and daughter, but also shared the same genetic design, just like twins.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `What a twist of fate....`;
   `Did she do it out of the madness that comes from being so close to death?`;
   `But...still....`;
   `Look at the lively face of the newborn child!`;
   `Look at how pure its smile is! How bright its new life shines!`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Could anyone watch something as simple as its earnest attempts to grab something, and believe that the baby was a tragedy?`;
   `Was it a sin to create a life? Was it a sin to want life?`;
   `The baby smiled happily. Sometimes it cried.`;
   `As if it were asking - 'Is it a sin to be alive?'`;
   fadeClearPage();
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
   `Monday, May 1, 2017.`;
   `Yubiseiharukana, who was now a student at Kyumeikan Women's College, had started working part-time at LeMU during the holidays.`;
   `She wanted to find a clue about her father, Yoichi, who had gone missing 17 years before.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Her mother, Yukie, kept telling her, 'Your father fell into the ocean and drowned,' but You didn't believe it.`;
   `She held on to the hope that he was still alive somewhere.`;
   `She had left her one-year-old daughter, Yubiseiakikana, with her mother, so she was not worried about her.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Yubiseiharukana's heart had almost reached its limit.`;
   `She had given birth safely, but could no longer escape the fate, which awaited her.`;
   `There was only one thing left that she wanted to do.`;
   `Before she died, she wanted to find out whether her father was still alive.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The father who had disappeared when she was a year old....`;
   `She had looked at his photo until it had become ragged and torn, but had no memories of his warmth, or ever having been held by him.`;
   `For that reason she waved off all of the Doctor's attempts to stop her, and had come to LeMU.`;
   `She wanted to find out about her father....`;
   `What had happened 17 years ago? She wanted to reveal the truth....`;
   fadeClearPage();
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
ADV_Mode();
showTextbox();
text(() => {
   `As her story ended, You reached for a file that was on the control panel.`;
   `She opened it, and silently passed it to me....`;

});
bgload({ name: `EV_YU16A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"So the baby was...."`;
   Takeshi`"WAS your child?"`;

});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Takeshi`"Which means you were lying to me...."`;
   You(C5A333)`"It wasn't...a lie...."`;
   You(C5A334)`"She is my daughter...."`;
   You(C5A335)`"But she's also my twin sister...."`;
   You(C5A336)`"And...."`;
   You(C5A337)`"She's another me...."`;
   You(C5A338)`"She is...myself...."`;
   `I didn't know what to say.`;
   You(C5A339)`"This was my sin...."`;
   You(C5A340)`"I know I'll never be forgiven, and will never be able to atone for it...."`;
   You(C5A341)`"But...."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C5A342)`"Like I told you, I have no regrets."`;
   You(C5A343)`"I'm glad I had her...."`;
   Takeshi`"........."`;
   You(C5A344)`"I'll never forget the moment that new life was created."`;
   You(C5A345)`"It was...such an unbelievably happy moment...."`;
   You(C5A346)`"The first time she said, 'Mama... Mama....'"`;
   You(C5A347)`"I...I can't explain it...."`;
   You(C5A348)`"It was more than a precious feeling, or love, or that good fortune had come my way...I felt as if I were wrapped in light...."`;
   You(C5A349)`"I don't care if I burn in hell."`;
   You(C5A350)`"I don't care if I burn in the fires of hell for thousands, millions of years...."`;
   You(C5A351)`"But...I knew I wanted to protect...my daughter....no matter what."`;
   You(C5A352)`"I didn't want her to suffer...."`;
   You(C5A353)`"Her smile is so beautiful...."`;
   You(C5A354)`"Her tiny hands are so cute...."`;
   You(C5A355)`"She is everything to me...."`;
   You(C5A356)`"She is irreplaceable...."`;
   You(C5A357)`"Besides, none of this is her fault."`;
   You(C5A358)`"She was welcomed to this world...just like any other soul born who comes here."`;
   You(C5A359)`"But at the same time...the moment I gave birth to her...I died."`;
   You(C5A360)`"It was as if I no longer existed...."`;
   You(C5A361)`"You see...."`;
   You(C5A362)`"I gave all my life, my existence, to my child...."`;

});
bgload({ name: `EV_YU16A`, transition: 10 });
showTextbox();
text(() => {
   `You showed me the photograph again.`;
   `The baby in the picture was reaching out, trying to grab something.`;

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
   You(C5A363)`"Hey! Hello—, are you listening to me?"`;
   `You grabbed my shoulders and shook me.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C5A364)`"What's the matter with you? Kid?"`;
   You(C5A365)`"You can't possibly have forgotten what year it is?"`;
   `Her words made no impression on me.`;
   `(What on earth....)`;
   `My mouth was dry, and the palm of my clenched fist was drenched with sweat.`;
   `(First of all....)`;
   `I began to think things through.`;
   `The You that I knew...the You standing in front of me, Yubi'aki'kana, was born on 22nd of September, 2015.`;
   `Her mother was Yubisei'haru'kana.`;
   `That meant....`;
   `This was now 2034, 17 years after Yubiseiharukana's time in 2017....`;
   `No, but wait....`;
   `What about the date on that mail?`;
   `It had been received on 02/07/19.`;
   `My voice came out strangled.`;
   Kid`"It's 2034 now...."`;
   Kid`"Yukie died 15 years ago...."`;
   Kid`"Which would have been in 2019...."`;
   Kid`"But the date on that says on...'02/07/19'...."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C5A366)`"Oh, that?"`;
   You(C5A367)`"You were worried about that?"`;
   `You laughed.`;
   You(C5A368)`"Well, I can understand why you might make that mistake...."`;
   You(C5A369)`"Do you see?"`;
   You(C5A370)`"The date on that mail was written in the German style."`;
   You(C5A371)`"Not the Japanese order of year/month/day, but month/day/year."`;
   Kid`"So are you telling me that...."`;
   Kid`"That wasn't the July 19, 2002...."`;
   Kid`"It was February, 7 2019...?"`;
   `You nodded.`;
   You(C5A372)`"Any other questions?"`;
   `I shook my head weakly, and trudged out of the Security Office.`;

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
   `I had figured out the relationship between You and her mother, but wondered whether I should tell her.`;
   `(No, it's probably better that I don't. That's better for You in the long run.)`;
   `But first, I had to take care of my own problems.`;
   `There was somewhere I had to go.`;

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
   Sara(C5A373)`"What is it?"`;
   Sara(C5A374)`"What did you bring me here for?"`;
   Kid`"I wanted to...talk to you guys alone...."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C5A375)`"About what?"`;
   Tsugumi`"........."`;
   `Tsugumi was silent. She seemed to be afraid of something.`;
   `Tsugumi perhaps already sensed what I was going to say.`;
   `Her eyes gazed around, wildly.`;
   Sara(C5A376)`"Is it important?"`;
   Kid`"Yes, very."`;
   Kid`"It's something I don't want the others to hear...."`;
   Kid`"Wait, I don't mind if they hear it, but I wanted you and Tsugumi to know first."`;
   Kid`"So that's why I asked you to come over here."`;
   Sara(C5A377)`"Hmmmm."`;
   Sara(C5A378)`"So, what's so important?"`;
   `Hadn't Sara noticed anything?`;
   `Her blank, unguarded expression....`;
   `She had to have noticed something.`;
   `The May 1st, after Sara met Tsugumi for the first time, she had looked totally dazed.`;
   `Surely, Sara had sensed something.`;
   `To be standing there calmly, she had to be in denial.`;
   `Reason was telling her that what she suspected couldn't be true.`;
   `The coincidence of meeting her mother again was probably too much for Sara to believe.`;
   Sara(C5A379)`"Well, are you going to say anything? Could you hurry up...?"`;
   `Sara urged me to get to the point.`;
   `Tsugumi said nothing, but her breathing seemed a little rough.`;
   Kid`"Sara? Could you lend me your pendant and lighter for a moment?"`;
   Sara(C5A380)`"Alright."`;
   `She took them out of her pocket and gave them to me.`;

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
   `-Shick.`;
   `I struck a flame, illuminating the pendant.`;

});
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   `Takeshi.......`;
   `This was...the real Takeshi Kuranari....`;

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
   `I held the pendant and the flame closer to Tsugumi.`;
   `Tsugumi kept her head down, refusing to look up at the pendant.`;
   `Her brow was furrowed, and she was biting her lip.`;
   `Her arms pressed tightly to her sides....`;
   `Her clenched fists were shaking.`;
   Kid`"Look closer...."`;
   `I whispered to her.`;
   Kid`"You've seen this pendant before...haven't you?"`;
   Tsugumi`"........."`;
   Kid`"It's Takeshi."`;
   Kid`"The real Takeshi Kuranari is right here!"`;

});
fgload({ id: 2, name: `TU15ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `The moment I said these words, Tsugumi's eyes flew open.`;
   `Stripped of expression, she wore a face like a mask...only her eyes burned with a fierce light.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C5A381)`"W-wait just a minute! What are you talking about?"`;
   Sara(C5A382)`"Takeshi...you mean Takeshi!?"`;
   Sara(C5A383)`"Takeshi's...the one in this pendant!?"`;
   Kid`"Umm, no..."`;
   Kid`"The Takeshi we know isn't really 'Takeshi.'"`;
   Kid`"I think he's lying to us."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C5A384)`".........?"`;
   Kid`"The real Takeshi...."`;
   Kid`"The real Takeshi Kuranari...."`;
   Kid`"Is your and my...."`;
   Kid`"Father...."`;

});
fgload({ id: 2, name: `TU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi closed her eyes.`;
   `She breathed out a long sigh.`;
   `I could see the tension leave Tsugumi's body. `;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C5A385)`"Hey, what's this all about?"`;
   Sara(C5A386)`"Explain what's happening...."`;
   Kid`"All right."`;
   Kid`"But before I do, I want to check something...."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `I hesitated about what to say next.`;
   `I looked above my head.`;
   `The sky was full of stars.`;
   `The single whale twisted and floated through space.`;
   `(Whale, where do you go all by yourself?)`;
   `(Will you meet someone special one day?)`;
   `Snap.`;
   `I extinguished the lighter.`;
   `I gripped the pendant and the lighter in my hand.`;
   `Tsugumi's outline was hazy in the dark....`;
   `She was....`;
   `our....`;
   `long sought-after....`;

});
playBGM({ num: 21, volume: 100 });
showTextbox();
text(() => {
   Kid`"Mother...."`;
   `When I called out to her, warm tears ran down my cheeks.`;
   Kid`"You are our mother...aren't you?"`;
   Kid`"Sara's and my mother...."`;
   Kid`"Mother...."`;
   Kid`"You are, aren't you...?"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C5A387)`"...What!?"`;

});
fgload({ id: 2, name: `TU18ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi slowly opened her eyes.`;

});
fgload({ id: 2, name: `TU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `She looked at Sara and me.`;
   `I could see the tears in her eyes.`;

});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Mother, please say something...."`;
   Kid`"I don't blame you...for anything...."`;
   Kid`"I've waited for you...for so long...."`;
   Kid`"I've been waiting for you...."`;
   Tsugumi`"........."`;
   Sara`"........."`;
   Kid`"Say something!"`;
   `I screamed at her.`;
   `Sara clung to my arm.`;
   `Shaking her head, she buried her face in my chest.`;
   `Her thin body was shaking.`;
   Kid`"Don't just stand there, say something!"`;
   `Holding Sara tightly, I stepped forward.`;

});
fgload({ id: 2, name: `TU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C5A388)`"No...."`;
   Tsugumi(C5A389)`"I'm not...your mother...."`;
   Kid`"Don't you lie to me!"`;
   Kid`"I know everything!"`;
   Kid`"Seventeen years ago, there was another accident just like this one, here at LeMU."`;
   Kid`"You and Takeshi became a couple...."`;

});
fgload({ id: 2, name: `TU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi was crying huge tears.`;
   `Tsugumi tried to stop them.`;
   `Her breath was ragged, and came out in hiccups.`;
   `Her face twisted as she struggled to keep control of her emotions.`;
   `Tears welled in her eyes and rolled down her cheeks.`;
   Tsugumi(C5A390)`"Yes...that's right...."`;
   Tsugumi(C5A391)`"You're right...."`;
   Tsugumi(C5A392)`"I gave birth to you...."`;
   Tsugumi(C5A393)`"But..."`;
   Tsugumi(C5A394)`"I have no right...to be called 'Mother'...."`;
   Tsugumi(C5A395)`"You have...a real mother...don't you?"`;
   Tsugumi(C5A396)`"Someone who took care of you...?"`;
   Tsugumi(C5A397)`"I...I...wasn't able to protect you both...."`;
   Tsugumi(C5A398)`"I couldn't take care of you...."`;
   Tsugumi(C5A399)`"I pretty much abandoned you...."`;
   Tsugumi(C5A400)`"I left you...and walked away."`;
   Tsugumi(C5A401)`"I'm terrible...And I don't expect you to be able to forgive me...."`;
   Tsugumi(C5A402)`"That's why I... "`;
   Tsugumi(C5A403)`"I'm not your mother...."`;
   Tsugumi(C5A404)`"Please...don't call me 'mother'."`;
   Tsugumi(C5A405)`"Please don't...."`;
   `Tsugumi put her head in her hands, and sobbed.`;
   `At that moment...`;
   Sara(C5A406)`"Mama...."`;
   Sara(C5A407)`"...Mama...."`;
   Sara(C5A408)`"MAMA!"`;

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
   `Sara tore her self away from me, and flew into Tsugumi's arms.`;
   `Following her lead, I clung to Tsugumi and cried as well. `;
   `The first thing I noticed was her familiar smell.`;
   `I breathed in her scent deeply.`;
   `Covered in tears, wallowing in the warmth, I felt as if I had regained everything I had ever lost.`;
   `The three of us held each other tightly, relishing the touch of one another, entwined our hearts became one.`;
   `We were no longer our individual selves, but one collective identity.`;
   `There were no boundaries between us.`;
   `My whole being was filled with warmth...`;
   `Beside me, Sara's cheeks were wet with tears.`;
   `Tsugumi was soft, and her skin was sweet and sticky...`;
   `I recalled the long-forgotten memories of my mother's smell.`;
   `It wasn't exactly the same feeling as nostalgia.`;
   `It was primitive, something instinctive...a sweetness that had been wired directly into my brain.`;
   Sara(C5A409)`"Mama...."`;
   Kid`"Mother...."`;
   `As if in response, Tsugumi pulled us closer, gripping us with a fierce determination.`;
   `She buried her face in Sara's and my hair, drew us close, and stroked the back of our heads.`;
   Tsugumi(C5A410)`"I'm sorry...."`;
   Tsugumi(C5A411)`"I'm so, so sorry...."`;
   `Tsugumi's voice was choked up.`;
   Tsugumi(C5A412)`"I can't ask you...to forgive me...."`;
   Tsugumi(C5A413)`"I...I...."`;
   Tsugumi(C5A414)`"I never...once forgot about you...."`;
   Tsugumi(C5A415)`"All...this...time...."`;
   Tsugumi(C5A416)`"I have wanted to see you...."`;
   Tsugumi(C5A417)`"Find you...and apologize...."`;
   Sara(C5A418)`"It's alright...."`;
   Sara(C5A419)`"Mama...."`;
   Sara(C5A420)`"You don't need to apologize...."`;
   Sara(C5A421)`"I...it's enough just to...be with you..."`;
   `As we held onto each other, we understood everything.`;
   `Sara and I accepted everything, understood and forgave.`;
   `Reasons weren't important.`;
   `At that moment, a quiet peace filled us...`;
   `It was enough.`;
   `We didn't require anything else.`;
   `I relaxed, and leaned against my mother.`;
   `She was warm.`;
   `I closed my eyes, and was intoxicated by her warmth.`;
   Kid`"Mother...."`;
   Kid`"...Mother...."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `A cozy slumber....`;
   `A soft breeze under the May sunshine....`;
   `Peace....`;
   `It was like floating on the calm ocean....`;
   `Swaying comfortably....`;
   `Cuddled up together....`;
   `before I knew it I had stopped crying...`;
   `All I could hear was...just our calm breathing and...`;
   `My mother's heartbeat....`;
   `Thump, thump...Thump, thump...Thump, thump.`;
   `I was alive.`;
   `Or maybe I had just been born. `;
   `Thump, thump...Thump, thump...Thump, thump.`;
   `Everything was affirmed and accepted and forgiven.`;
   `There was no me, nor Sara, nor Tsugumi....`;
   `There was only one life connected together....`;
   `Just one single soul.`;

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
   `In the year 2017, May 7th, 11 a.m.`;
   `The men from the Leiblich were waiting for Tsugumi when she got to the floating island.`;
   `Tsugumi, a carrier of the Cure Virus....`;
   `To them she was a valuable sample...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Their eyes glaring, and mouths half open, she could see their dark wet tongues.`;
   `It was almost possible for Tsugumi to smell the reek of their excitement.`;
   `Like the smell of men lusting after flesh....`;
   `It was a fetid stench, greasy and rotten.`;
   `For it was Tsugumi's body that they were after.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `What they wanted was nothing more that to perform human experiments under the pretext of 'Making the ultimate human dream come true.'`;
   `By using Tsugumi's body, they were planning to gain knowledge, fame and fortune.`;
   `That was indeed their desire.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'We've been waiting for you.' One of them took a deep bow.`;
   `Behind his veneer of politeness, was an evil that threatened to spill forth, making Tsugumi sick to her stomach.`;
   `Some of the others in his entourage licked their lips...swallowing their saliva like dogs gone mad with the hunt.`;
   fadeClearPage();
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `That instant, Tsugumi kicked hard off the ground, breaking into a run.`;
   `She ran across the wide surface of the huge artificial island, desperately scaling the high surrounding fence and fled into the nearby foliage.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG39A2`, transition: 20 });
showTextbox();
text(() => {
   `Their cacophony of screams and angry cursing faded behind her.`;
   `Tsugumi hid and waited until nightfall.`;
   `She held a single hamster to her chest....`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG38A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `At night -`;
   `A supply-carrying vessel slipped out of the floating island's port.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Tsugumi had stowed away on the vessel, hiding herself among the cargo. She was headed to the mainland.`;
   `From that moment on, Tsugumi's life was consumed with one thought 'how to escape from them.'`;
   `Although she wasn't a criminal, she avoided people, preferring to hide in the darkness. All the while threatened by ominous feelings of being hunted. `;
   fadeClearPage();
});
hideTextbox();
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   `Nothing changed after she safely made it to land.`;
   `Every few weeks she moved from a town to a different town, wandering in the darkness....`;
   `She slept under bridges, under back street eaves, pipes pouring into the ocean and even in public restrooms.`;
   `It was an endless cycle of running. She never had a second's peace.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `She couldn't turn to the police.`;
   `She had no place to live, her identity was uncertain, and her age and appearance didn't match....`;
   `The police would only doubt her.`;
   `Information regarding Tsugumi had spread through the national police network, it was only a matter of time before Leiblich would find her.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Leiblich's influence even extended to national politics.`;
   `There was nothing else for Tsugumi to do but continue to hide in back alleys.`;
   `She hated Leiblich.`;
   `They had destroyed everything Tsugumi had cared about, and made her life a living hell...what's more.... `;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `They had taken away the love of her life...Takeshi Kuranari.`;
   `She wanted to get revenge on Leiblich with every fiber of her being.`;
   `Tsugumi came to hate this world, and her heart became even more hardened to it.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `IMG06A`, transition: 20 });
showTextbox();
text(() => {
   `Two months had passed. It was summertime.`;
   `All of a sudden she began feeling sick....`;
   `She knew she had stopped menstruating, but she didn't want to think about the possibility.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `She went to visit an illegal doctor who was well-known in the back streets.`;
   `Tsugumi was pregnant.`;
   `She was sure it was Takeshi's baby. She'd never been with anyone else.`;
   `She was pregnant....`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `At night, she went to the deserted coastal area of a small, nearby town.`;
   `There were nothing but printing factories and abandoned houses.`;
   `Unsure if it was a river or the ocean, she sat on a boat dock, looking at a neon sign by the highway.`;
   `She touched her stomach.`;
   `She felt a sense of awe and joy, at the fact there was life growing in her stomach, and that it was connected to her.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The neon light glittered and flickered off of the water's surface.`;
   `Tsugumi looked at the lights...with her hands on her stomach....`;
   `Realizing that Takeshi's babies were inside her, she couldn't stop crying.`;
   `They might have only been only an inch big at that time....`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `But the survival of the two babies outstripped the needs of the mother's body that surrounded them....`;
   `Tsugumi almost had the illusion that 'it wasn't her who bore the children, but it was actually they who bore her.'`;
   `Everything that she was, she poured into her two babies.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `She felt that she was part of the babies, not the other way around.`;
   `I was then that Tsugumi decided to sacrifice everything for the two tiny lives.`;
   `Love was a concept to her, but if love could be brought into physical form, to her, it seemed it must be the babies in her stomach.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `That was it, love was growing in her stomach.`;
   `Takeshi and Tsugumi's babies....`;
   `Before long, the hatred she had felt towards everything had disappeared without a trace.`;
   `For the first time, Tsugumi felt as though there were a higher power guiding her life.`;
   fadeClearPage();
});
hideTextbox();
removeBG({ mode: BLACK, transition: 0 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `Seven months later. January 21, 2018.`;
   `Tsugumi was suddenly struck with contractions.`;
   `When they came, the back alley doctor had gone somewhere.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `She visited a nearby clinic.  `;
   `She had no medical insurance, no identification. Most importantly she had no money...`;
   `When he found out that she couldn't pay, the doctor beat Tsugumi as though she were a stray animal.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `With nowhere else to go, the two babies were born in an old boat shack.`;
   `An old woman was living there, but Tsugumi could not tell whether she lived there or was just sleeping there temporally.`;
   `It was this old woman who helped Tsugumi through the birth.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'Ooh how precious, so precious...you done a fine job, deary.'`;
   `The old lady repeated this many times, as she gently rinsed the babies in a tin basin.`;
   `The sweat-covered Tsugumi was lying down, with only a thin towel between her and a hardwood floor.`;
   `Tsugumi's eyes gazed unfocused out a nearby window.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
openSnowFallingAnim();
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   `Snow was falling outside.`;
   `'How darling...yes a precious boy-child and a girl...which one'll ya hold first?'`;
   `The illegal doctor had told her, so she was expecting twins, but she never imagined that they would be fraternal. `;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `A bit surprised, she said...`;
   `'Both at the same time.... '`;
   `Wrapped in an old cloth, Tsugumi gently held them to her chest.`;
   `'Not to worry, my deary. I boiled them cloth and the scissors what cut their cord in hot water good, I did.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'Thank you.'`;
   `Tsugumi thanked her.`;
   `'Thank you...thank you very much....'`;
   `She gave thanks for the two lives who had been born safely.`;
   `'Thank you....'`;
   `And these last words were directed toward the deep darkness beyond the window.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The snow was falling.`;
   `The two babies pressed to Tsugumi's chest with eyes closed, let out small yawns.`;
   fadeClearPage();
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
   `The Cure Virus.`;
   `Soon after she had given birth, Tsugumi's thoughts were turned to the possibility.`;
   `'If they got infected by Cure while they were inside of me....'`;
   `'And if their DNA was altered just like me....'`;
   `Tsugumi visited the illegal doctor.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `EV_YU10A`, transition: 26, x: 400, y: 0, hx: 400, hy: 300 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `'Don't worry about it.' He explained laughing...`;
   `According to taxonomic classification, a pure human would belong to 'Primates Anthropoidea Hominoidea Hominidae Homo Genus Sapiens.'`;
   `Tsugumi, whose DNA information was altered by the Cure Virus, was not a pure human anymore, but rather a subspecies of it.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'Let's just call you subspecies 'Cure' for now....'`;
   `'Now any kids who were born from 'Takeshi, the Homo Sapiens' and 'Tsugumi, the Cure' would technically be 'hybrids.''`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'Now, by the way I guess I should tell you that the Cure Virus only infects pure humans, the 'Homo Sapiens.''`;
   `'So, there's no way the Cure Virus possibly affect your two 'little hybrids' there.'`;
   `'While not much is know about the Cure Virus, some of the unique functions scientists have discovered, such as 'regenerating telomeres' and 'regenerative healing' are inherited recessively.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'For blood types, without exception all children born from a 'type AA father' and a 'type OO mother,' for instance, can only be 'type AO,' with a 'type A' predisposition.'`;
   `'Why? Because type A factors are inherited dominantly, and type O factors are inherited recessively.'`;
   `'In order for a child's blood type to be 'type O'....'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'...you'd have to have a mixture of either 'AO x AO', 'AO x BO', 'AO x OO', 'BO x BO', 'BO x OO', or 'OO x OO'....'`;
   `'...it can only be one of the above, meaning that BOTH the parents gotta add that type 'O' factor to the genetic milkshake.'`;
   `'Same goes for the Cure Virus.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'Any child born from a pureblooded 'Sapiens' and 'Cure' will...'`;
   `'...all be 'Sapiens-Cure,' and inherit the dominant physical traits of both.'`;
   `'For them rug rats to become full-blooded 'Cure.'....'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'...the parents'd have be 'Cure x Cure', 'Sapiens Cure x Cure', or 'Sapiens Cure x Sapiens Cure.'...'`;
   `'...any of those combinations, meaning that both parents have to be part or all Cure.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'And since these two little critters were born from a 'pure Sapiens' and 'pure Cure...''`;
   `'They'll have the same physical traits as a pure human, and won't possess the Cure traits like perpetual youth.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'So, you don't have nothing to worry about, alright?' The doctor held up the two babies Tsugumi had brought, and laughed again.`;
   `Tsugumi didn't know his background.`;
   `It was probable that he had been part of Leiblich's laboratory staff in the past, since he knew so much about the Cure Virus.`;
   `But he didn't seem to be one of them. Tsugumi figured she could trust him.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Among outcasts, there is an unspoken law: You don't go nosing around in other people's pasts.`;
   `Tsugumi didn't ask him anything more, and he didn't demand to know about her either.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `A year after giving birth.`;
   `It was winter again.`;
   `Tsugumi had rented a tiny room and lived together with the two babies.`;
   `Of course Chami was there as well.`;
   `It was a quiet, rustic little coastal town.`;
   `It wasn't a city or tourist town, no fishing or farming...nothing...just a dreary port town.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `During the day, Tsugumi worked for next to nothing at a sewing factory, while the babies stayed at a daycare center.`;
   `She spent every day, glued to a sewing machine from early morning to 4 p.m., and after that she would spend time with the babies.`;
   `Her wages were very low and of course they were poor. She couldn't even afford disposable diapers.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Tsugumi collected small scraps of cloth, leftovers from the factory and sewed diapers and clothes for the babies.`;
   `Despite the harsh living conditions, the babies were growing healthily.`;
   `Their life was a peaceful one, and although they were poor, the poverty didn't threaten them. They were content.`;
   `The three of them were always smiling.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'Momma...momma....' 'Oh... Chammiii, Chammiii...'`;
   `They were already beginning to talk.`;
   `The boy had starting walking a few steps at a time. The was girl able to stand, barely, as she held onto things.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The girl had begun to speak 'Oh...Chammiii, Chammiii....' which was very unusual for a one-year-old.`;
   `The boy, it seemed, grew faster physically and the girl grew faster intellectually.`;
   `Tsugumi tenderly watched over their cute gestures. She was filled with happiness.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `EV_SA13D`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `May 7, 2019.`;
   `The two babies were 15 months old. `;
   `Tsugumi had taken them to the beach.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The boy ran around the sand, falling and getting back up over and over.`;
   `The girl was sitting by the water putting her hands in the waves....`;
   `She was giggling saying 'Cooold...so cold....'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Watching out over the flat surface of the ocean, Tsugumi's thoughts turned to Takeshi.`;
   `'So live! As long as you're alive, live! Don't worry...I'm not going to die - those were Takeshi's last words to her.`;
   `It had been two years already.`;
   `'I'm not going to die.'  After saying that, he sunk to the bottom of the ocean, protecting the woman he loved, protecting the children right in front of her.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'You fool, you're a liar.' Tsugumi whispered to the ocean.`;
   `But at the same time, she still hadn't given up hope.`;
   `'No...He must be alive somewhere. He's a man of his word.'`;
   `Just then.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `A wave swallowed the girl, who had been playing near the edge of the water.`;
   `For an adult, it would hardly have reached their shin, but for a one-year-old baby, it was as big as tsunami.`;
   `The girl disappeared in a splash of water and was sucked out into the ocean like a piece of driftwood by the tide.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Tsugumi ran as hard as she could, held back by the resistance of the sand.`;
   `But before she could get there, something unbelievable happened.`;
   `The boy, who was only one year and three months old, jumped into the water and saved the girl.  `;
   `Hardly able to believe what she had seen, Tsugumi rushed toward them.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `She carried them to dry sand.`;
   `The girl started crying.`;
   `The boy, seemingly unaware of what had happened, looked at his sister crying.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `A few seconds later...he fell over as all his strength had left him.`;
   `That night, both of them came down with a high fever.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `IMG05A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `It was summertime. A year and a half had passed since the birth.`;
   `All of that time in the past year and a half had been filled with happiness.`;
   `Nothing special had happened...and that was why it had been so peaceful....`;
   fadeClearPage();
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
   `The boy was a wild one, and Tsugumi could hardly take her eyes off of him for a second.`;
   `He constantly was putting everything (even Chami) in his mouth....`;
   `Any electric appliance that he touched seemed to break, and he wouldn't stop jamming metal wires into the outlets.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The girl wasn't quite as much of a challenge, since she moved about less, but still Tsugumi had to put up with her stubbornness.`;
   `She refused to eat things she didn't like, and when she got in a bad mood, she wouldn't stop fussing...`;
   `And no matter how much Tsugumi warned her, she wouldn't stop playing with her brother's hair.`;
   `And she would always demand for 'More Chami! More Chami!'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Those days were filled with being buffeted about by her two rambunctious children....`;
   `But no matter how challenging, even those days were filled with happiness.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `At night, all three of them slept together cuddled up on a thin mattress. `;
   `'Momma...momma....'`;
   `'Aaah...Chammiii, Chammmiii....'`;
   `Talking in their sleep, the two babies sought their mother's touch. `;
   `Looking down at their sweet innocent gestures, Tsugumi felt bliss she had never know.`;
   fadeClearPage();
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
   `One day.`;
   `Her peaceful world was shattered to bits.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `IMG04A`, transition: 20 });
showTextbox();
text(() => {
   `It all happened so unexpectedly....`;
   `Caught up in her life of happiness, Tsugumi had forgotten to watch out for 'them.'`;
   `She didn't know how they had found out, but they had somehow gathered information and showed up without warning. `;
   `Them...the people from Leiblich....`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `With no time to collect anything, all Tsugumi could bring with her was her two babies and her hamster as she fled.`;
   `So they ran, but....`;
   `It was obvious to Tsugumi that eventually Leiblich would hunt them down.`;
   `As they continued running, Tsugumi thought to herself. `;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'Even if I could keep escaping, would it really be happiness for the two children?'`;
   `'They wouldn't be able to go to school.'`;
   `'And it would be too hard on them to keep moving from town to town.'`;
   `'Besides...if we ever get caught, what would they do to my children at Leiblich?'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'It's too dangerous for them to be with me....'`;
   `Tsugumi made up her mind.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `She researched an orphanage she could trust and decided to leave them there.`;
   `The two children were just too young...`;
   `Even if Tsugumi had tried to explain, they couldn't have understood.`;
   `With no other option, she left the pendant she had kept with her, making a wish as she gave it.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'I will come back for you. I will come to get you, I promise.'`;
   `Being too young to understand the situation, the two children just stared at their mother crying.`;
   `Weeping bitter tears, Tsugumi looked back many times as she walked away.`;
   fadeClearPage();
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `All she had now was Chami.`;
   `From Tsugumi's chest pocket, Chami looked up at her face in puzzlement.`;
   `But even Chami's cute gestures could do little to ease Tsugumi's broken heart.`;
   `She spent many nights in the depth of despair, crying in her sorrow.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `A few years later.`;
   `By the time Tsugumi went back to the orphanage, the children were already gone.`;
   `From that time on she had gone through life....`;
   `No more than an empty husk...`;
   `Until that day, until that very moment....`;
   `Tsugumi had kept searching for her children....`;
   `Wandering through darkness.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG05A3`, transition: 10 });
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Tsugumi finished telling her story and closed her eyes gently.`;
   `She never once mentioned the names 'Hokuto' or 'Sara' in the story.`;
   `Because those names weren't the names Tsugumi had given them. `;
   `Someone else had named them 'Hokuto' and 'Sara'.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
showTextbox();
text(() => {
   `..................`;
   `............`;
   `......`;

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
   `I left Tsugumi and Sara.`;
   `If I could, I wanted to stay with them forever, but it wasn't possible.`;
   `There were still many unsolved matters that I needed to take care of.`;
   `Listening to Tsugumi's story had caused me to suddenly remember something.`;
   `I had received a phone call before coming to LeMU.`;
   `Over the phone, a voice had said to me. `;
   `'If you come to LeMU, you can see your mother and sister.'`;
   Kid`"Oh, so that was it...."`;
   Kid`"Before the accident took place, I had been waiting for someone at the rest area."`;
   Kid`"It must have been my mother and Sara...."`;
   `Tsugumi must have been roped in to coming to LeMU in the same way I was. `;
   `—wait, roped in!? `;
   `—What for...!?`;
   `I still didn't know the answer to that.`;
   `But I had some clues....`;
   `The voice on the phone had been male.`;
   `Without a doubt I knew whose voice it had been.`;
   `I ran to him.`;

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
   Kid`"You...you..."`;
   Kid`"You aren't Takeshi Kuranari!"`;
   `Barging into the rest area I demanded an answer from the man in front of me.`;
   `I couldn't call him 'Takeshi' anymore.`;
   `This guy had been deceiving us the whole time.`;

});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A422)`"Look I don't have any clue what you're talking about...?"`;
   Kid`"Don't play dumb!"`;
   Kid`"I know that the real Takeshi is Sara's and my father!"`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A423)`"Father? Me? You and Sara's?"`;
   Kid`"No, not you!"`;
   Kid`"Sara and I are the children of Takeshi and Tsugumi."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A424)`"Wait, so Tsugumi and I...."`;
   Kid`"I keep telling you, you're not Takeshi!"`;
   Kid`"I'm talking about Takeshi from the other world!"`;
   Takeshi(C5A425)`"Other world? What the heck's that supposed to mean?"`;
   Kid`"The world back in 2017!"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A426)`"Um...2017, huh...?"`;
   Takeshi(C5A427)`"And when were you born?"`;
   Kid`"On January 21, 16 years ago."`;
   Takeshi(C5A428)`"In what year?"`;
   Kid`"In 2018!"`;
   Takeshi(C5A429)`"I see."`;
   Takeshi(C5A430)`"So, how could you possibly know what happened in 2017?"`;
   Kid`"I dunno, I just do! What do you expect me to do about it?"`;
   Takeshi`"........."`;
   Kid`"Besides, we're not talking about me now."`;
   Kid`"Who...who are you anyway!?"`;
   Kid`"And why did you lie about the year 2017!?"`;
   Kid`"Why are you pretending to be 'Takeshi Kuranari!?'"`;
   Kid`"What was the reason you tried to trick us by repeating the same incident as 17 years ago and by using the same words!?"`;

});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A431)`"To trick you...to trick you, huh...?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A432)`"Think twice, will you, Kid?"`;
   Takeshi(C5A433)`"For instance, if I was repeating the incident in 2017,"`;
   Takeshi(C5A434)`"How could I possibly trick you who were born in 2018?"`;
   Takeshi(C5A435)`"Practically speaking, it is impossible to trick you into believing ''the same incident from 17 years ago is taking place.'"`;
   Takeshi(C5A436)`"Do you get it?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A437)`"Besides, how could you tell it was the same incident?"`;
   Takeshi(C5A438)`"How could you tell that I'm using the same phrase?"`;
   Takeshi(C5A439)`"How could you know the history before you were even born!?"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A440)`"Why don't you appear your true self?"`;
   Takeshi(C5A441)`"Who are you anyway!?"`;
   `Somehow, I couldn't say a word.`;
   `(Who am I anyway...?)`;
   `The same question was repeated in my mind.`;

});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A442)`"Oh, I see, when it comes to your story, you clam up, huh...?"`;
   Takeshi(C5A443)`"Alright then."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C5A444)`"I'll tell you my real name."`;
   Takeshi(C5A445)`"Yes, as you said, I am not Takeshi Kuranari."`;
   Takeshi(C5A446)`"My real name is...."`;
   Kaburaki(C5A447)`"Kaburaki."`;
   Kaburaki(C5A448)`"Ryogo Kaburaki."`;

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
   Kaburaki(C5A449)`"Ryogo Kaburaki."`;
   Kaburaki(C5A450)`"I just remembered my name...."`;
   `The Kid repeated it slowly.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kaburaki(C5A451)`"Ryogo..., Ka...bu...ra...ki...."`;

});
showTextbox();
text(() => {
   Takeshi`"Ryogo Kaburaki...."`;
   Takeshi`"So I see...."`;
   Takeshi`"Way to go."`;
   `I smiled and patted his head.`;
   `The young Kaburaki smiled shyly.... `;

});
bgload({ name: `IT05G`, transition: 20 });
showTextbox();
text(() => {
   `Without a word, the young Kaburaki went behind the statue and started scratching. `;
   `He had a screwdriver in his hand....`;
   `"Ryogo Kaburaki."`;
   `With thin sharp writing, The young Kaburaki carved his name deeply into the statue.`;
   `He must have been pretty happy to have remembered his name?`;
   `Or was it so that he wouldn't forget it again...?`;
   `Although I didn't know the reason, he carved his name into the statue.`;
   `He continued on....`;
   `Without stopping his hands, he also carved the following letters.`;
   `"Coco Yagami"`;
   `"Yubiseiharukana Tanaka"`;
   `"Tsugumi Komachi"`;
   `"Sora Akanegasaki"`;
   `"Takeshi Kuranari"`;
   `"Pipi" and "Chami"`;

});
bgload({ name: `IT05H`, transition: 20 });
showTextbox();
text(() => {
   `The young Kaburaki carved all of our names who had been confined here.`;
   `He smiled happily after finishing up....`;
   `The statue kept silent with its hand on the chest.... `;

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
   `That boy's name was also...Ryogo Kaburaki!?`;
   `Which meant that... the 'Kid from the 17 years ago' and...'this guy pretending to be Takeshi' were...actually same person!?`;
   `He looked so young that it was hard to believe it had been 17 years.`;
   `If the young Kaburaki was 15 years old, that would make him 32 years old in this world.`;
   `But the Kaburaki I spoke to looked around 20... there was no way he could have been over 30 years old.`;
   `Which meant...?`;
   `.................`;
   `Before I realized it, the man who called himself Kaburaki had disappeared.`;
   `He had left a while before.`;
   `I'd been standing there lost in thought for some time.`;
   `I remembered back to the scene in 2017, which I had just witnessed earlier....`;

});
bgload({ name: `IT05A`, transition: 20 });
showTextbox();
text(() => {
   `I went around one of the statues, as if being called over to it.`;

});
bgload({ name: `IT05B`, transition: 20 });
showTextbox();
text(() => {
   `On its back were carved childish stick figures.`;
   `Six human-like figures and two unfamiliar animal shapes were drawn there.`;
   Kid`"...What?"`;
   `I looked at the statue.`;
   `The statue pointed south.`;
   Kid`".........?"`;

});
bgload({ name: `IT05C`, transition: 20 });
showTextbox();
text(() => {
   `I looked at the back of other statues as well.`;

});
bgload({ name: `IT05D`, transition: 20 });
showTextbox();
text(() => {
   `Surprisingly, there were similar drawings on the statue pointing to the sky.`;

});
bgload({ name: `IT05G`, transition: 20 });
delay({ interval: 60 });
bgload({ name: `IT05H`, transition: 20 });
showTextbox();
text(() => {
   `There were also six people's names and as well as 'Pipi' and 'Chami' carved into the statue which stood with its hand on its chest.`;

});
bgload({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   `There was no writing on the statue pointing east.`;
   Kid`"Oh, just what is this supposed to mean!?"`;
   Kid`"What is up with this world anyway!?"`;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   `Puzzled and confused, my head felt like it was about to explode.`;
   `I didn't know things that I was supposed to know...I knew things that I wasn't supposed to....`;
   `(That must be why my head is so confused.)`;
   `(I still haven't recalled any of my memories.)`;
   `Some parts of it had come back, but nothing really important.`;
   `To begin with, I still didn't know what kind of person this 'Hokuto' was.`;
   `And at the same time, I knew what I wasn't supposed to know and I could see what I wasn't supposed to see. `;
   `For instance, the world 17 years into the past. `;
   `About the legend of Pygmalion, the Tief Blau Virus, the Cure Virus, Pipi, and Chami....`;
   `I knew about all of them now.`;
   `I knew exactly what had happened during the dramatic escape 17 years ago, and what had happened on May 6th and 7th.`;
   `And the world in 2034.`;
   `I could sense even the different history flows in this world.`;
   `I knew about escaping using the principle of a siphon and about swimming to the ocean surface from 104 feet under the water.`;
   `The third eye...Blick Winkel...those words were clear in my head.`;
   `And...then....`;
   `I remembered running into Ms. Tanaka on the floating island.`;
   `Or maybe more precisely I should say 'I could see it' rather than 'remember it'.`;
   `Anyway, I saw her.`;
   `The woman who was called Ms. Tanaka...Yubiseiakikana's mother....`;
   `Meaning, she was actually Yubiseiharukana.`;
   `Although their relationship defied the norm, still Yubiseiharukana and Yubiseiakikana were mother and daughter.`;
   `.................`;
   `Pieces of my thoughts scattered....`;
   `I tried gathering them and struggled to come up with some kind of conclusion.`;
   Kid`"It's 2034 now...."`;
   Kid`"And Coco was in 2017...."`;
   `I whispered to confirm the facts.`;
   `Yes, that's right, it was 2034 now....`;
   `That was why Tsugumi had been so suspicious of us.`;
   `Because the same thing that had happened 17 years ago was repeating....`;
   `How about the others?`;
   `Since Yubiseiakikana had been one 17 years ago, she couldn't possibly have known about the incident.`;
   `And since Sara hadn't been born yet, she wouldn't know either.`;
   `Sora, being AI, couldn't lie. And she didn't seem to be lying either.`;
   `So that only left Kaburaki.`;
   `Did that mean Kaburaki was the mastermind behind this whole incident in 2034?`;
   `No, wait....`;
   `There had been two others who had survived the incident 17 years ago....`;
   `Yubiseiharukana and Coco.`;
   `On May 6, 2017.`;
   `Kaburaki, Yubiseiharukana, and Coco who had been infected with the Tief Blau Virus, had been rescued by the mini-sub, which came to the pool in IBF.`;
   Kid`"Oh, wait...."`;
   `How did the three of them recover from the virus after they'd been infected?`;
   `Because of the injection of antibodies made from Tsugumi's blood...?`;
   `But Coco hadn't received the antibodies.`;
   `Because she had been under high-pressure oxygen treatment in the capsule pod at the time....`;
   Kid`"Huh...?"`;
   `(No, no, even before that)`;
   `(Yubiseiharukana suffered from 'critical heart disease,' right?)`;
   `(But Yubiseiharukana is still alive and well now)`;
   Kid`"What is going on here...?"`;
   `(Well I guess there's just one answer....)`;
   `(It's the only explanation...)`;
   `Yubiseiharukana and Kaburaki must have been infected with the Cure Virus.`;
   `Their bodies must had repeated five years worth of cell division, and when all their DNA had been replaced, they stopped aging.`;
   `That must have been why they looked younger than their real age.`;
   `And Yubiseiharukana's heart disease would have been fixed by the Cure Virus. `;
   Kid`"But still...."`;
   Kid`"Is that really what happened...?"`;
   `In a different history flow, Kaburaki couldn't see the image in the pendant.`;
   `If he wasn't lying or acting, he must not have possessed infrared vision.`;
   `And although I didn't have proof my instincts told me Yubiseiharukana didn't possess infrared vision, either.`;
   `Then again in the world of 2017....`;
   `Tsugumi had mentioned she was 'special' among carriers of the Cure Virus.`;
   `Perhaps she was a rare example of DNA replacement that had taken place safely over the whole body.`;
   `That meant...?`;
   `Yubiseiharukana and Kaburaki were not complete Cure, then?`;
   `But...it didn't seem to me that there could be any such thing as an 'incomplete Cure'..... `;
   Kid`"Um...."`;
   Kid`"It's no use...."`;
   Kid`"I can't figure it out...."`;
   `But I still had far serious matter to deal with.`;
   `I needed to think about this problem first.`;
   `The problem was....`;
   `'How was I able to sense incidents that had taken place before I was born, or in separate time continua?'`;
   `And....`;
   `'Why is the same accident as 17 years earlier taking place again?'`;
   `It couldn't have been a coincidence. `;
   `Obviously someone had planned it.`;
   `There was only one clue....`;
   `Coco.`;
   `I wanted to see Coco.`;
   `I felt that Coco would know everything there was to know about this incident.`;
   `But how could I find Coco who seemed to just pop up randomly.`;
   Kid`"Oh, I know...."`;
   `I had a sudden inspiration....`;
   `I had a hunch.`;
   `At this hour on the 5th....`;
   `Coco would show up....`;
   `In the Cosmic Whale Room....`;

});
l_choice = 0;
jump(`YC6A`);
