g_b0 = 5;
g_b1 = 1;
g_b2 = 1;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She sat in the dark room on the bed.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03A`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Uh, I...um..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was at a loss for words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know where to start.`;
   waitForClick; clearText; marker; appendText; 
   //Young Girl
   Young_Girl`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl just stared at me intently.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's..al-alright..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't worry...everything is alright..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't answer.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...um..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anyway, let's go where everybody else is!"`;
   waitForClick; clearText; marker; sound(`C1S296`); appendText; 
   //Young Girl
   Young_Girl`"Everybody?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, it's not just me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There are lots of other people..."`;
   waitForClick; clearText; marker; sound(`C1S297`); appendText; 
   //Young Girl
   Young_Girl`"Help?...Did you come to help?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y-yeah...that's right."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C1S298`); appendText; 
   //Young Girl
   Young_Girl`"But...it's probably impossible..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`C1S299`); appendText; 
   //Young Girl
   Young_Girl`"There is...no way out anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl's eyes were sad and moist.`;
   waitForClick; clearText; 
});
goto(lbl_000000ce).if(g_f0 == 0);
goto(lbl_000000ce).if(g_ba != 3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to...`;
   waitForClick; 
});
choice(
   `Ask her why she said that`
   `Take the girl out`
);
switch (choice) {
   case 0: goto(lbl_000000ce);
   case 1: goto(lbl_00000203);
}
let lbl_000000ce;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Why do you say that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We'll be fine! A rescue team should be here 
any time!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C1S300`); appendText; 
   //Young Girl
   Young_Girl`"Liar..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not a lie!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The people that escaped know that we're 
here..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Someone will come for sure!"`;
   waitForClick; clearText; marker; appendText; 
   //Young Girl
   Young_Girl`"..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why do you say that?"`;
   waitForClick; clearText; marker; sound(`S1C237`); appendText; 
   //Young Girl
   Young_Girl`"Because...because..."`;
   waitForSound; clearText; 
});
bgload({ name: `EV_CO03C`, transition: 26 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then suddenly a shocked look appeared on 
the girl's face as her eyes focused behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed her gaze.`;
   waitForClick; clearText; 
});
bgload({ name: `BG10A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the other side of the door...was Takeshi 
peeking in.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S302`); appendText; 
   Takeshi`"Who are you talking to?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Takeshi! What great timing...!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It seems like this girl here 
didn't get out either..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S303`); appendText; 
   Takeshi`"Girl?"`;
   waitForClick; clearText; marker; sound(`C1S304`); appendText; 
   Takeshi`"What girl...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S305`); appendText; 
   Takeshi`"...There's nobody there."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl had vanished and there was no sign 
that anyone had been sitting where she had 
been.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Im...impossible..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S306`); appendText; 
   Takeshi`"Stop it already. What? Are you tired of 
memory loss and working on delusions now?"`;
   waitForClick; clearText; marker; sound(`C1S307`); appendText; 
   Takeshi`"You're worse off than we thought..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No! No! I'm not seeing things!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There was a girl here! She was sitting 
on this bed!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S308`); appendText; 
   Takeshi`"Listen, Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-what...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S309`); appendText; 
   Takeshi`"Aren't you hungry?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hungry...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-who cares about that right now?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There was a girl here...a girl I tell you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S310`); appendText; 
   Takeshi`"I know, I know."`;
   waitForClick; clearText; marker; sound(`C1S311`); appendText; 
   Takeshi`"There was a girl there. I heard you..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You don't get it at all!"`;
   waitForClick; clearText; marker; sound(`C1S312`); appendText; 
   Takeshi`"Alright, alright. I'll listen to the whole 
story later."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S313`); appendText; 
   Takeshi`"But nothing! You're going to piss me off 
if you keep this up!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S314`); appendText; 
   Takeshi`"Everyone is waiting for you...
to eat together..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, then, what are we going to do about 
the girl?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm sure the girl is probably starving, 
too..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S315`); appendText; 
   Takeshi`"Oh man...you've completely lost it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm not crazy!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There was a girl...a girl...right here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, I couldn't get Takeshi to listen 
to me.`;
   waitForClick; clearText; 
});
goto(lbl_000003e9);
let lbl_00000203;
g_ba += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Let's go!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I said.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C1S316`); appendText; 
   //Young Girl
   Young_Girl`"...Uh...where?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anywhere. Let's just get out of here."`;
   waitForClick; clearText; marker; sound(`C1S317`); appendText; 
   //Young Girl
   Young_Girl`"Why...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Coco, because if we stay here, then we'll 
probably..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sucked in my breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow I knew her name as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco Yagami.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then I had a premonition that something 
was about to happen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that when I took my eyes off of 
her...Coco would vanish...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a ghost...`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I would take her out of here...`;
   waitForClick; clearText; marker; sound(`C1S318`); appendText; 
   Coco`"Don't go...please..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W-what?"`;
   waitForClick; clearText; marker; sound(`C1S319`); appendText; 
   Coco`"Please, don't go..."`;
   waitForClick; clearText; marker; sound(`C1S320`); appendText; 
   Coco`"Don't leave me alone..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't understand what she meant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't understand...but my mouth had an 
answer.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I won't go."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I will stay with you, Coco."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Please, don't go'...just now the two of our 
minds had overlapped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt if I took my eyes off of her, she would 
disappear. `;
   waitForClick; clearText; marker; appendText; 
   Narr`And Coco felt the same way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's eyes watered as if she were sad.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then suddenly a shocked look appeared on her 
face as her eyes focused behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed Coco's eyes.`;
   waitForClick; clearText; 
});
bgload({ name: `BG10A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the other side of the door...was Takeshi 
peeking in.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S321`); appendText; 
   Takeshi`"Who are you talking to?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I hurriedly looked back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Coco was no longer there.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Coco! Coco!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My voice echoed and died in that small, 
steel-plated room.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Cocoooooo!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one was there to answer my shouts.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign of anyone and it felt as if 
it might have been that way from the start.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no wrinkles where Coco had been 
sitting. No warmth either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was just a faint smell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like the frozen smell that follows the north 
wind across snowfields.`;
   waitForClick; clearText; marker; sound(`C1S322`); appendText; 
   Takeshi`"Co...Coco...?"`;
   waitForClick; clearText; marker; sound(`C1S323`); appendText; 
   Takeshi`"Did...did you just say...Coco?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 16, volume: 100 });
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked back at Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was different about Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His lips were trembling.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Takeshi...do you know Coco?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You do know her!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S324`); appendText; 
   Takeshi`"No...I don't..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Liar!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The way you said that, I know you know her!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S325`); appendText; 
   Takeshi`"Really...I don't..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why are you lying?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The girl was here just now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But when you showed your face, she 
vanished..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S326`); appendText; 
   Takeshi`"You are the one that is lying."`;
   waitForClick; clearText; marker; sound(`C1S327`); appendText; 
   Takeshi`"There's no girl in here..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yes there was! I'm positive that Coco was 
sitting on that bed!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"............"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tell me! Who is she?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S328`); appendText; 
   Takeshi`"I said I don't know anything about her..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S329`); appendText; 
   Takeshi`"You're asking the wrong guy."`;
   waitForClick; clearText; marker; sound(`C1S330`); appendText; 
   Takeshi`"I didn't see a thing."`;
   waitForClick; clearText; marker; sound(`C1S331`); appendText; 
   Takeshi`"You're the one who said you're seeing things, 
right?"`;
   waitForClick; clearText; marker; sound(`C1S332`); appendText; 
   Takeshi`"I should be asking that question to you."`;
   waitForClick; clearText; marker; sound(`C1S333`); appendText; 
   Takeshi`"Who is Coco? Some friend of yours?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S334`); appendText; 
   Takeshi`"So why do you know her name?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know why! But it just suddenly popped 
into my head!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S335`); appendText; 
   Takeshi`"Oh, not this crap again..."`;
   waitForClick; clearText; marker; sound(`C1S336`); appendText; 
   Takeshi`"You've got a pretty tricky case of amnesia..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S337`); appendText; 
   Takeshi`"Alright, Kid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S338`); appendText; 
   Takeshi`"Let's say you happened to meet some girl in 
this compression chamber."`;
   waitForClick; clearText; marker; sound(`C1S339`); appendText; 
   Takeshi`"And you don't know why, but you knew her 
name."`;
   waitForClick; clearText; marker; sound(`C1S340`); appendText; 
   Takeshi`"And then, like some phantom, she just 
disappears without a trace."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S341`); appendText; 
   Takeshi`"You're telling me to believe that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm telling the truth!"`;
   waitForClick; clearText; marker; sound(`C1S342`); appendText; 
   Takeshi`"Sure you are."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's true, I said!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S343`); appendText; 
   Takeshi`"I know, I know."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You don't get it at all!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S344`); appendText; 
   Takeshi`"Look, I'm getting outta here."`;
   waitForClick; clearText; marker; sound(`C1S345`); appendText; 
   Takeshi`"You coming?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; sound(`C1S346`); appendText; 
   Takeshi`"Everyone is waiting for you...we're going to 
eat together..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who cares about eating?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S347`); appendText; 
   Takeshi`"Hmmph..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S348`); appendText; 
   Takeshi`"Fine, do what you want."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi left me with those harsh words 
and departed.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Before going to the Conference Room I peeked 
into the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The bio scan figure was eating at my mind.`;
   waitForClick; clearText; 
});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 5'`;
   waitForClick; clearText; marker; appendText; 
   Narr`The number had dropped from six to five.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Everyone was in the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were fried chicken sandwiches and drinks 
secured from the sandwich shop there for 
everyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Tsugumi was absent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where she had gone....but more 
than that, I was worried about her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I told everyone about the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone just laughed and no one listened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one else had seen the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I remembered the bio scan figure.`;
   waitForClick; clearText; 
});
goto(lbl_00000527).if(g_f0 != 0);
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
   marker; appendText; 
   Narr`'7'`;
   waitForClick; clearText; marker; appendText; 
   Narr`That girl was probably person number seven.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the number had been five and six as well.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`What could it mean?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The image of the girl had been burned into my 
mind and there was no getting away from it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it was, like Takeshi had 
said ? a hallucination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If not, then...a ghost?`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`'5,6,7'`;
   waitForClick; clearText; marker; appendText; 
   Narr`What could it mean?`;
   waitForClick; clearText; marker; appendText; 
   Narr`If the girl was in fact a ghost, that would 
mean that the number five was correct.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora wouldn't be included, and the four of 
here plus Tsugumi would equal five.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the number had jumped to six and even to 
seven.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`What...in the world could that girl be...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`That reminded me of what You had said.`;
   waitForClick; clearText; 
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
   marker; sound(`C1S149`); appendText; 
   You`"You think somebody would suddenly appear, 
disappear or split into two people?"`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`If that were the case, it would explain 
everything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When the girl disappeared the number would be 
five. When she appeared six, and when she 
split, then seven.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Split???`;
   waitForClick; clearText; 
});
let lbl_00000662;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Ha, ha. That was crazy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head at my own silliness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I was losing it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something had to be wrong with me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I needed to calm down, collect myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While I thought this I flipped up the tab on 
the can of cola.`;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fushaaaww!`;
   waitForClick; clearText; marker; appendText; 
   Narr`At first I didn't know what had happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I licked the liquid around my lips.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was sweet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed as if the cola had exploded into my 
face.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA09ADS`, name2: `SO02ADS`, name3: `YU09BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`C1S349`); appendText; 
   Sara`"KYA, HA, HA, HA"`;
   waitForClick; clearText; marker; sound(`C1S350`); appendText; 
   You`"AH, HA, HA, HA"`;
   waitForClick; clearText; marker; sound(`C1S351`); appendText; 
   Sora`"FU, FU, FU, FU, FU"`;
   waitForClick; clearText; marker; sound(`C1S352`); appendText; 
   Everyone`"GA, HA, HA, HA, HA"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone exploded in a chorus of laughter.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S353`); appendText; 
   You`"Hey, what the heck are you doing, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this laughing.`;
   waitForClick; clearText; marker; sound(`C1S354`); appendText; 
   You`"These cans contain pop made with special gas 
so that they are made at 6 atmospheres."`;
   waitForClick; clearText; marker; sound(`C1S355`); appendText; 
   You`"But right now we are at 1 atmosphere, right?"`;
   waitForClick; clearText; marker; sound(`C1S356`); appendText; 
   You`"So if you don't hold it down when you open 
it, the carbonation inside explodes..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As she laughed, Sara took out a handkerchief.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took it and wiped my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was enveloped in laughter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without noticing, I'd forgotten about 
everything that had been weighing on my mind.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
delay({ interval: 60 });
removeBG({ mode: BLACK, transition: 62 });
g_b3 = 3;
jump(`S_1C`);
