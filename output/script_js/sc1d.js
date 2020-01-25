l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
showTextbox();
text(() => {
   `She sat in the dark room on the bed.`;

});
bgload({ name: `EV_CO03A`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   Kid`"Uh, I...um..."`;
   `I was at a loss for words.`;
   `I didn't know where to start.`;
   //Young Girl
   Young_Girl`"..."`;
   `The girl just stared at me intently.`;
   Kid`"It's..al-alright..."`;
   Kid`"Don't worry...everything is alright..."`;
   `She didn't answer.`;
   Kid`"Uh...um..."`;
   Kid`"Anyway, let's go where everybody else is!"`;
   //Young Girl
   Young_Girl(C1S296)`"Everybody?"`;
   Kid`"Yeah, it's not just me."`;
   Kid`"There are lots of other people..."`;
   //Young Girl
   Young_Girl(C1S297)`"Help?...Did you come to help?"`;
   Kid`"Y-yeah...that's right."`;

});
bgload({ name: `EV_CO03B`, transition: 20 });
showTextbox();
text(() => {
   //Young Girl
   Young_Girl(C1S298)`"But...it's probably impossible..."`;
   Kid`"Huh?"`;
   //Young Girl
   Young_Girl(C1S299)`"There is...no way out anymore..."`;
   `The girl's eyes were sad and moist.`;

});
if (l_know_sora_is_an_ai == 0) goto(lbl_000000ce);
if (l_coco_point != 3) goto(lbl_000000ce);
showTextbox();
text(() => {
   `I decided to...`;

});
choice(
   `Ask her why she said that`,
   `Take the girl out`,
);
switch (l_choice) {
   case 0: goto(lbl_000000ce);
   case 1: goto(lbl_00000203);
}
let lbl_000000ce;
showTextbox();
text(() => {
   Kid`"Why do you say that?"`;
   Kid`"We'll be fine! A rescue team should be here any time!"`;

});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   //Young Girl
   Young_Girl(C1S300)`"Liar..."`;
   Kid`"It's not a lie!"`;
   Kid`"The people that escaped know that we're here..."`;
   Kid`"Someone will come for sure!"`;
   //Young Girl
   Young_Girl`"..."`;
   Kid`"Why do you say that?"`;
   //Young Girl
   Young_Girl(S1C237)`"Because...because..."${waitVoice}${noWait}`;

});
bgload({ name: `EV_CO03C`, transition: 26 });
showTextbox();
text(() => {
   `Then suddenly a shocked look appeared on the girl's face as her eyes focused behind me.`;
   `I followed her gaze.`;

});
bgload({ name: `BG10A2`, transition: 20 });
showTextbox();
text(() => {
   `On the other side of the door...was Takeshi peeking in.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S302)`"Who are you talking to?"`;
   Kid`"Takeshi! What great timing...!"`;
   Kid`"It seems like this girl here didn't get out either..."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S303)`"Girl?"`;
   Takeshi(C1S304)`"What girl...?"`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S305)`"...There's nobody there."`;
   Kid`"Huh!?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked back.`;
   `The girl had vanished and there was no sign that anyone had been sitting where she had been.`;
   Kid`"Im...impossible..."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S306)`"Stop it already. What? Are you tired of memory loss and working on delusions now?"`;
   Takeshi(C1S307)`"You're worse off than we thought..."`;
   Kid`"No! No! I'm not seeing things!"`;
   Kid`"There was a girl here! She was sitting on this bed!"`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S308)`"Listen, Kid..."`;
   Kid`"Wh-what...?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S309)`"Aren't you hungry?"`;
   Kid`"Hungry...?"`;
   Kid`"Wh-who cares about that right now?"`;
   Kid`"There was a girl here...a girl I tell you..."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S310)`"I know, I know."`;
   Takeshi(C1S311)`"There was a girl there. I heard you..."`;
   Kid`"You don't get it at all!"`;
   Takeshi(C1S312)`"Alright, alright. I'll listen to the whole story later."`;
   Kid`"But..."`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S313)`"But nothing! You're going to piss me off if you keep this up!"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S314)`"Everyone is waiting for you... to eat together..."`;
   Kid`"Well, then, what are we going to do about the girl?"`;
   Kid`"I'm sure the girl is probably starving, too..."`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S315)`"Oh man...you've completely lost it..."`;
   Kid`"I'm not crazy!"`;
   Kid`"There was a girl...a girl...right here..."`;
   `In the end, I couldn't get Takeshi to listen to me.`;

});
goto(lbl_000003e9);
let lbl_00000203;
l_coco_point += 1;
showTextbox();
text(() => {
   Kid`"Let's go!"`;
   `That was what I said.`;

});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   //Young Girl
   Young_Girl(C1S316)`"...Uh...where?"`;
   Kid`"Anywhere. Let's just get out of here."`;
   //Young Girl
   Young_Girl(C1S317)`"Why...?"`;
   Kid`"Coco, because if we stay here, then we'll probably..."`;

});
stopBGM();
showTextbox();
text(() => {
   `I sucked in my breath.`;
   `Somehow I knew her name as well.`;
   `Coco Yagami.`;
   `And then I had a premonition that something was about to happen.`;
   `I thought that when I took my eyes off of her...Coco would vanish...`;
   `Like a ghost...`;
   `So I would take her out of here...`;
   Coco(C1S318)`"Don't go...please..."`;
   Kid`"W-what?"`;
   Coco(C1S319)`"Please, don't go..."`;
   Coco(C1S320)`"Don't leave me alone..."`;
   `I couldn't understand what she meant.`;
   `I couldn't understand...but my mouth had an answer.`;
   Kid`"I won't go."`;
   Kid`"I will stay with you, Coco."`;
   `'Please, don't go'...just now the two of our minds had overlapped.`;
   `I felt if I took my eyes off of her, she would disappear. `;
   `And Coco felt the same way.`;
   `Coco's eyes watered as if she were sad.`;

});
bgload({ name: `EV_CO03C`, transition: 20 });
showTextbox();
text(() => {
   `Then suddenly a shocked look appeared on her face as her eyes focused behind me.`;
   `I followed Coco's eyes.`;

});
bgload({ name: `BG10A2`, transition: 20 });
showTextbox();
text(() => {
   `On the other side of the door...was Takeshi peeking in.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S321)`"Who are you talking to?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I hurriedly looked back.`;
   `But Coco was no longer there.`;
   Kid`"Coco! Coco!"`;
   `My voice echoed and died in that small, steel-plated room.`;
   Kid`"Cocoooooo!"`;
   `No one was there to answer my shouts.`;
   `There was no sign of anyone and it felt as if it might have been that way from the start.`;
   `There were no wrinkles where Coco had been sitting. No warmth either.`;
   `There was just a faint smell.`;
   `Like the frozen smell that follows the north wind across snowfields.`;
   Takeshi(C1S322)`"Co...Coco...?"`;
   Takeshi(C1S323)`"Did...did you just say...Coco?"`;

});
hideTextbox();
playBGM({ num: 16, volume: 100 });
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I looked back at Takeshi.`;
   `Something was different about Takeshi.`;
   `His lips were trembling.`;
   Kid`"Takeshi...do you know Coco?"`;
   Takeshi`"........."`;
   Kid`"You do know her!"`;

});
fgload({ id: 1, name: `KB13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S324)`"No...I don't..."`;
   Kid`"Liar!"`;
   Kid`"The way you said that, I know you know her!"`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S325)`"Really...I don't..."`;
   Kid`"Why are you lying?"`;
   Kid`"The girl was here just now."`;
   Kid`"But when you showed your face, she vanished..."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S326)`"You are the one that is lying."`;
   Takeshi(C1S327)`"There's no girl in here..."`;
   Kid`"Yes there was! I'm positive that Coco was sitting on that bed!"`;
   Takeshi`"............"`;
   Kid`"Tell me! Who is she?"`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S328)`"I said I don't know anything about her..."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S329)`"You're asking the wrong guy."`;
   Takeshi(C1S330)`"I didn't see a thing."`;
   Takeshi(C1S331)`"You're the one who said you're seeing things, right?"`;
   Takeshi(C1S332)`"I should be asking that question to you."`;
   Takeshi(C1S333)`"Who is Coco? Some friend of yours?"`;
   Kid`"No. But..."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S334)`"So why do you know her name?"`;
   Kid`"I don't know why! But it just suddenly popped into my head!"`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S335)`"Oh, not this crap again..."`;
   Takeshi(C1S336)`"You've got a pretty tricky case of amnesia..."`;
   Kid`"............"`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S337)`"Alright, Kid."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S338)`"Let's say you happened to meet some girl in this compression chamber."`;
   Takeshi(C1S339)`"And you don't know why, but you knew her name."`;
   Takeshi(C1S340)`"And then, like some phantom, she just disappears without a trace."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S341)`"You're telling me to believe that?"`;
   Kid`"I'm telling the truth!"`;
   Takeshi(C1S342)`"Sure you are."`;
   Kid`"It's true, I said!"`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S343)`"I know, I know."`;
   Kid`"You don't get it at all!"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S344)`"Look, I'm getting outta here."`;
   Takeshi(C1S345)`"You coming?"`;
   Kid`"...Huh?"`;
   Takeshi(C1S346)`"Everyone is waiting for you...we're going to eat together..."`;
   Kid`"Who cares about eating?"`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S347)`"Hmmph..."`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S348)`"Fine, do what you want."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi left me with those harsh words and departed.`;

});
let lbl_000003e9;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG16A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`22:24`);
showTextbox();
text(() => {
   `Before going to the Conference Room I peeked into the Control Room.`;
   `The bio scan figure was eating at my mind.`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 5'`;
   `The number had dropped from six to five.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG17A1`, transition: 26 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`22:28`);
showTextbox();
text(() => {
   `Everyone was in the Conference Room.`;
   `There were fried chicken sandwiches and drinks secured from the sandwich shop there for everyone.`;
   `Only Tsugumi was absent.`;
   `I wondered where she had gone....but more than that, I was worried about her.`;
   `I told everyone about the girl.`;
   `But...`;
   `Everyone just laughed and no one listened.`;
   `No one else had seen the girl.`;
   `Then I remembered the bio scan figure.`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_00000527);
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `IT04E`, transition: 26 });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `'7'`;
   `That girl was probably person number seven.`;
   `But the number had been five and six as well.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG17A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `What could it mean?`;
   `The image of the girl had been burned into my mind and there was no getting away from it.`;
   `I wondered if it was, like Takeshi had said ? a hallucination.`;
   `If not, then...a ghost?`;

});
goto(lbl_00000662);
let lbl_00000527;
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `IT04C`, transition: 26 });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `'5,6,7'`;
   `What could it mean?`;
   `If the girl was in fact a ghost, that would mean that the number five was correct.`;
   `Sora wouldn't be included, and the four of here plus Tsugumi would equal five.`;
   `But the number had jumped to six and even to seven.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG17A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `What...in the world could that girl be...?`;
   `That reminded me of what You had said.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG16A1`, transition: 26 });
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: false });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   You(C1S149)`"You think somebody would suddenly appear, disappear or split into two people?"`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG17A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `If that were the case, it would explain everything.`;
   `When the girl disappeared the number would be five. When she appeared six, and when she split, then seven.`;
   `Split???`;

});
let lbl_00000662;
showTextbox();
text(() => {
   `Ha, ha. That was crazy.`;
   `I shook my head at my own silliness.`;
   `Maybe I was losing it...`;
   `Something had to be wrong with me.`;
   `I needed to calm down, collect myself.`;
   `While I thought this I flipped up the tab on the can of cola.`;

});
stopBGM();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Fushaaaww!`;
   `At first I didn't know what had happened.`;
   `I licked the liquid around my lips.`;
   `It was sweet.`;
   `It seemed as if the cola had exploded into my face.`;

});
multifgload3({ name1: `SA09ADS`, name2: `SO02ADS`, name3: `YU09BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Sara(C1S349)`"KYA, HA, HA, HA"`;
   You(C1S350)`"AH, HA, HA, HA"`;
   Sora(C1S351)`"FU, FU, FU, FU, FU"`;
   Everyone(C1S352)`"GA, HA, HA, HA, HA"`;
   `Everyone exploded in a chorus of laughter.`;

});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S353)`"Hey, what the heck are you doing, Kid?"`;
   `You said this laughing.`;
   You(C1S354)`"These cans contain pop made with special gas so that they are made at 6 atmospheres."`;
   You(C1S355)`"But right now we are at 1 atmosphere, right?"`;
   You(C1S356)`"So if you don't hold it down when you open it, the carbonation inside explodes..."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `As she laughed, Sara took out a handkerchief.`;
   `I took it and wiped my face.`;
   `I was enveloped in laughter...`;
   `Without noticing, I'd forgotten about everything that had been weighing on my mind.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
delay({ interval: 60 });
removeBG({ mode: BLACK, transition: 62 });
l_choice = 3;
jump(`S_1C`);
