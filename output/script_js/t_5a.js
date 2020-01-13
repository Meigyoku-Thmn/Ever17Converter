l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
setDialogBoxColor(GREEN);
playBGM({ num: 24, volume: 100 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG06A`, transition: 10 });
if (l_da != 0) goto(lbl_000000d3);
setSceneTitle({ index: 29 });
goto(lbl_000000e1);
let lbl_000000d3;
setSceneTitle({ index: 30 });
let lbl_000000e1;
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Darkness spread out before my eyes.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Without limit it spread. Nothingness.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The void was endless.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And I was in the middle of it.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I could find nothing by which to judge 
distance.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I searched for light, but couldn't even see 
the movement of my body.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was nothing below my feet.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Nothing held me up.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And so I fell.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I fell.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Deeper and deeper, I sank into the void.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Further and further.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `IMG04A`, transition: 20 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No, that wasn't it...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It seemed to me, rather, that the darkness was 
coming toward me.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It approached me at a terrifying speed.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But there was no sound.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Yet it was creeping closer and closer.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And finally it...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It penetrated me.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`There was no way for me to shake it off.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It seeped completely into me.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was strange, but there was no feel to it.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The blackness invaded and settled inside me.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It overtook me, never to part again.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Agh, I'm becoming the darkness.)`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`(The darkness is becoming me.)`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`(My body, becoming the darkness itself...)`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The void was endless, it had no ceiling.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Nothing existed to cover it.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was an abyss.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimOverlay();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everything was buried in the pitch black.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And the dark of the night was crushing me.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That is how...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Everyone dies.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was dying.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was dead.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Death.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
delay({ interval: 90 });
stopBGM();
bgload({ name: `BG17A2`, transition: 20 });
clock(`3:17`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I awoke, my shirt was soaked with sweat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What an awful way to start the day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled out my PDA to check the time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It read 3:18 a.m.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But all drowsiness had left me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Attempting sleep again would have been a waste 
of time. I thought I'd only have another 
nightmare.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nearby I could hear soft breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi were nestled together 
comfortably, asleep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Trying not to wake them, I opened the 
Conference Room door and sneaked out.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 95 });
removeBG({ mode: BLACK, transition: 2 });
chapterCutin({ name: `00000000` });
bgload({ name: `BG25B3`, transition: 20 });
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Outside, the hallway seemed endless...`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a moment, I had the illusion it went on 
forever.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Stop being stupid...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without hesitation I stepped into the cold 
water filling the hallway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized how oddly accustomed I'd grown to 
this spectacle, this strange situation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This daily routine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Being continually enclosed by walls.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Walls that, in a matter of time, were doomed 
to come crashing down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where will I be when it happens...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I decided not to think too deeply about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had already decided not to think about 
things like that...`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Climbing the emergency stairway, I headed 
toward Zweite stock.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Reaching the infirmary, I pushed the button to 
open the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
bgload({ name: `EV_TU10E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(She's not here...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The bed was empty.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The spilled nuts were gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if Tsugumi had cleaned them up, 
or was it someone else....`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the meantime, no one was in the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Reaching out to the LeMMIH terminal, I touched 
the screen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No reaction. The monitor lights were out.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I walked toward the Security Office. I thought 
that maybe the terminal there would be online.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Opening the door, I hesitated at the smell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As always, the room smelled like smoke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried the terminal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The screen read 'Periodic Maintenance in 
Progress.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`The message continued.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'LeMMIH: Full System Periodic 
Maintenance Program in Operation.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Until completion, portions of LeMMIH 
functions are inaccessible.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Estimated completion time: 6 a.m.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'While under maintenance, automatic control 
systems throughout the compound will be 
partially off-line. However, facilities and 
attractions will operate normally.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Note: Since all sensors and recording systems 
operations will be checked during maintenance, 
function may be erratic.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Therefore, it will not be possible to access 
data through the terminals.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'WARNING : This maintenance program should not 
be aborted except in cases of emergency. If 
aborted, there is the danger of making the 
LeMMIH system unstable...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'...Therefore, please refrain from accessing 
LeMMIH until after maintenance completion.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Thank you for your cooperation.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Additional note :'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Until the maintenance completes, I will be 
unavailable. Everybody should be asleep at 
this time anyway, right?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I informed everyone about this operation at 
dinnertime, but in case any of you forgot 
what I said, I am leaving this message...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'That is all, good night.—Sora'`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Well, how about that?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Geez, Sora. I guess you forgot to tell me 
about this.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Or then again maybe I just wasn't 
listening...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was probably busy eyeing that extra piece of 
sausage in the refrigerator. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Trying not to be seen by the others, as I hid 
the sausage...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And later, cooked it up...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd been gloating over it until being caught, 
and then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Certainly not expecting to be throwing it up 
only a half an hour later...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Was I stupid or what...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was lucky it wasn't worse. Oddly enough, I 
hadn't felt hungry since...`;
   waitForClick; clearText; 
});
bgload({ name: `BG22A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Anyway, having no particular place to go, I 
found myself in front of an elevator.`;
   waitForClick; 
});
choice(
   `Push the button`
   `Don't push the button`
);
switch (l_choice) {
   case 0: goto(lbl_000002f5);
   case 1: goto(lbl_0000031f);
}
let lbl_000002f5;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With no clear reason in mind, I pushed the 
elevator call button.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Click, click...`;
   waitForClick; clearText; marker; appendText; 
   Narr`All it did was make a noise. The elevator 
showed no sign of budging.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But of course.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the elevators in this section of the 
compound had been shut down.`;
   waitForClick; clearText; 
});
goto(lbl_00000324);
let lbl_0000031f;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Absentmindedly, I stared at the elevator call 
button.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At that moment, the button was truly 
meaningless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I thought about reaching out to push it 
again, but decided against it.`;
   waitForClick; clearText; 
});
let lbl_00000324;
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T5A000`); appendText; 
   Tsugumi`"Hi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hearing a voice from behind me, I turned my 
head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there was Tsugumi standing quietly.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A001`); appendText; 
   Tsugumi`"Hey, what were you up to?"`;
   waitForClick; clearText; marker; sound(`T5A002`); appendText; 
   Tsugumi`"There's no point waiting around. That 
elevator's not coming."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have an answer to give.`;
   waitForClick; clearText; marker; sound(`T5A003`); appendText; 
   Tsugumi`"Takeshi, what's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A004`); appendText; 
   Tsugumi`"Are you deaf?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Heh, heh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't help but laugh.`;
   waitForClick; clearText; marker; sound(`T5A005`); appendText; 
   Tsugumi`"Come on, what's going on...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ha, ha, ha..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A006`); appendText; 
   Tsugumi`"What's so funny?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi seemed slightly disturbed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's...nothing. No special reason."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's just that, well, I thought your question 
was pointless."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At first, Tsugumi started to frown...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But then she laughed back at me.`;
   waitForClick; clearText; marker; sound(`T5A007`); appendText; 
   Tsugumi`"You've started to catch on, haven't you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I suppose..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I was just out for a little walk. What have 
you been doing?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, that's okay, you don't have to answer."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A008`); appendText; 
   Tsugumi`"In that case, don't ask..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Turning her eyes away, Tsugumi frowned 
slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking at the floor she seemed lost in 
thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a moment she lifted her eyes and spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A009`); appendText; 
   Tsugumi`"Say Takeshi, do you know what 'Qualle' is?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Qualle?"`;
   waitForClick; clearText; marker; sound(`T5A010`); appendText; 
   Tsugumi`"That's right, Qualle."`;
   waitForClick; 
});
choice(
   `I don't know`
   `I know`
);
switch (l_choice) {
   case 0: goto(lbl_00000413);
   case 1: goto(lbl_00000433);
}
let lbl_00000413;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I don't know."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Actually, I think I knew, but then I forgot."`;
   waitForClick; clearText; marker; sound(`T5A011`); appendText; 
   Tsugumi`"Right..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A012`); appendText; 
   Tsugumi`"Okay, I'll tell you."`;
   waitForClick; clearText; marker; sound(`T5A013`); appendText; 
   Tsugumi`"Qualle is..."`;
   waitForClick; clearText; marker; sound(`T5A014`); appendText; 
   Tsugumi`"...the Jellyfish Gondola ride."`;
   waitForClick; clearText; marker; sound(`T5A015`); appendText; 
   Tsugumi`"And it's located just behind this elevator 
room."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hooo, is that so?"`;
   waitForClick; clearText; 
});
goto(lbl_0000044f);
let lbl_00000433;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Yeah I know what it is."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's the Jellyfish Gondola attraction."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A016`); appendText; 
   Tsugumi`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, what about it?"`;
   waitForClick; clearText; marker; sound(`T5A017`); appendText; 
   Tsugumi`"Well, Qualle is just behind this elevator 
room."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, come to think about it, you're right."`;
   waitForClick; clearText; 
});
let lbl_0000044f;
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then we both fell silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi started to giggle and gave me a hard 
look. `;
   waitForClick; clearText; marker; appendText; 
   Narr`We both knew what we were going to do next.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With Tsugumi in the lead, we headed for the 
Qualle entrance.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Say, how do you make this thing work?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A018`); appendText; 
   Tsugumi`"Go figure."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"'Go figure'? Come on, tell me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A019`); appendText; 
   Tsugumi`"It's already turned on, dummy, just get in 
and it'll go."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's it?"`;
   waitForClick; clearText; marker; sound(`T5A020`); appendText; 
   Tsugumi`"Look, I tried it out already, so I'm pretty 
sure."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm, well, if you say so..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...wait a second! You've already tried it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A021`); appendText; 
   Tsugumi`"Well, yeah...I tested it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's face looked troubled, as if she'd 
been caught at something.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're saying you rode it alone?"`;
   waitForClick; clearText; marker; sound(`T5A022`); appendText; 
   Tsugumi`"...well, not exactly alone."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, who was with you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A023`); appendText; 
   Tsugumi`"It's not 'who' I was with..."`;
   waitForClick; clearText; marker; sound(`T5A024`); appendText; 
   Tsugumi`"You see, well...I was with Chami..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You mean your hamster?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A025`); appendText; 
   Tsugumi`"Well, yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In other words, one adult and one 
'critter'."`;
   waitForClick; clearText; marker; sound(`T5A026`); appendText; 
   Tsugumi`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You rode Qualle with Chami?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A027`); appendText; 
   Tsugumi`"Yes...Don't make me repeat myself."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, then how was it? Fun?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A028`); appendText; 
   Tsugumi`"Chami fell asleep. I guess he was bored."`;
   waitForClick; clearText; marker; sound(`T5A029`); appendText; 
   Tsugumi`"But as for me..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A030`); appendText; 
   Tsugumi`"Who cares?"`;
   waitForClick; clearText; marker; sound(`T5A031`); appendText; 
   Tsugumi`"It's a meaningless question."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi hadn't said much, which was a lot more 
than usual.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In other words, you were lonely, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If I was there, I could have cheered you up."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A032`); appendText; 
   Tsugumi`"What do you mean, 'Cheer me up'?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, you know...you've been through a 
lot..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And I thought, maybe the two of us together 
would..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A034`); appendText; 
   Tsugumi`"Yeah, right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But then suddenly, Tsugumi's expression lost 
its tension.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2B004`); appendText; 
   Tsugumi`"Heh, heh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A035`); appendText; 
   Tsugumi`"Heh, heh, heh.... Ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of a sudden she let out a laugh.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey...what's going on with you...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Did I say something stupid?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A036`); appendText; 
   Tsugumi`"Nah, not really."`;
   waitForClick; clearText; marker; sound(`T5A037`); appendText; 
   Tsugumi`"It's nothing important."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A038`); appendText; 
   Tsugumi`"It's just that...I needed to laugh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then suddenly, her expression hardened 
again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But then again, I thought...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That a slight smile still remained on her face.`;
   waitForClick; clearText; marker; sound(`T5A039`); appendText; 
   Tsugumi`"Let's go."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, if you say so..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeFG({ id: 1, useAnim: false });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Together we got inside the ride.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Immediately after the hatch closed, the 
gondola began to move forward smoothly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just as Tsugumi had said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The jellyfish shaped gondola picked up speed, 
and headed toward the outskirts of Zweite 
stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The corrugated tube carrying the gondola 
wrapped its way along the perimeter of the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Floating comfortably inside the tube, the 
gondola skirted its way along.`;
   waitForClick; clearText; 
});
bgload({ name: `BG36A1`, transition: 20 });
if (l_d9 == 0) goto(lbl_0000064a);
showTextbox();
text(() => {
   marker; sound(`T5A040`); appendText; 
   Tsugumi`"I've been wanting to talk to you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"About what?"`;
   waitForClick; clearText; marker; sound(`T5A041`); appendText; 
   Tsugumi`"Well, some things I need to say..."`;
   waitForClick; clearText; marker; sound(`T5A042`); appendText; 
   Tsugumi`"Things to say...things I need to let you 
know..."`;
   waitForClick; clearText; marker; sound(`T5A043`); appendText; 
   Tsugumi`"And I figured, no one could interrupt us 
here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It must really be something important..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Something serious...?"`;
   waitForClick; clearText; marker; sound(`T5A044`); appendText; 
   Tsugumi`"Well, yeah...at least for me it is."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Having her approach me to talk was unusual.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi fixed her eyes firmly on mine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes were serious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With no sign of mischief in them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Whatever the consequences, I had to listen...`;
   waitForClick; clearText; marker; sound(`T5A045`); appendText; 
   Tsugumi`"Twelve years ago..."`;
   waitForClick; clearText; marker; sound(`T5A046`); appendText; 
   Tsugumi`"In August of 2005."`;
   waitForClick; clearText; marker; sound(`T5A047`); appendText; 
   Tsugumi`"On a summer day..."`;
   waitForClick; clearText; marker; sound(`T5A048`); appendText; 
   Tsugumi`"I was infected."`;
   waitForClick; clearText; marker; sound(`T5A049`); appendText; 
   Tsugumi`"...I was infected with a virus..."`;
   waitForClick; clearText; marker; sound(`T5A050`); appendText; 
   Tsugumi`"Yes, 2005. Twelve years ago."`;
   waitForClick; clearText; marker; sound(`T5A051`); appendText; 
   Tsugumi`"I was only 12 years old at the time..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A virus?"`;
   waitForClick; clearText; marker; sound(`T5A052`); appendText; 
   Tsugumi`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And are you still...infected?"`;
   waitForClick; clearText; marker; sound(`T5A053`); appendText; 
   Tsugumi`"Yeah."`;
   waitForClick; clearText; marker; sound(`T5A054`); appendText; 
   Tsugumi`"I'm a carrier..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...a carrier? What? Wait a second!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Come on! Wait a just a second here!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You mean to tell me...twelve years ago, at 
age 12?"`;
   waitForClick; clearText; marker; sound(`T5A055`); appendText; 
   Tsugumi`"That's what I'm saying."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Twelve years ago, at age 12...means your age 
now is..."`;
   waitForClick; clearText; marker; sound(`T5A056`); appendText; 
   Tsugumi`"That's right, I'm 23."`;
   waitForClick; clearText; marker; sound(`T5A057`); appendText; 
   Tsugumi`"I'll be 24 in another two months."`;
   waitForClick; clearText; marker; sound(`T5A058`); appendText; 
   Tsugumi`"You see...I was born 24 years ago. In July 
1993."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scrutinized Tsugumi's face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way she looked 23.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But then again, I knew she wasn't lying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had never touched upon the subject of her 
age.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I had assumed her to be a "high school 
student" at the most. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"23 years old..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I muttered to myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To think...she was three years older than me...`;
   waitForClick; clearText; marker; sound(`T5A059`); appendText; 
   Tsugumi`"Takeshi, where are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She suddenly changed the topic.`;
   waitForClick; clearText; 
});
goto(lbl_0000064f);
let lbl_0000064a;
showTextbox();
text(() => {
   marker; sound(`T5A060`); appendText; 
   Tsugumi`"There's something I've been meaning to ask 
you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What is it...?"`;
   waitForClick; clearText; marker; sound(`T5A061`); appendText; 
   Tsugumi`"Well, it's something I wanted to 
ask...something I wanted to confirm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was strange that Tsugumi would have 
something she wanted to say just to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her behavior seemed extremely odd.`;
   waitForClick; clearText; marker; sound(`T5A062`); appendText; 
   Tsugumi`"It's strange, but..."`;
   waitForClick; clearText; marker; sound(`T5A063`); appendText; 
   Tsugumi`"It's strange, but it seems that..."`;
   waitForClick; clearText; marker; sound(`T5A064`); appendText; 
   Tsugumi`"Like I'm beginning to lose it..."`;
   waitForClick; clearText; marker; sound(`T5A065`); appendText; 
   Tsugumi`"Like I'm going crazy..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh...?"`;
   waitForClick; clearText; marker; sound(`T5A066`); appendText; 
   Tsugumi`"So tell me, where are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Out of nowhere she asked me again.`;
   waitForClick; clearText; 
});
let lbl_0000064f;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What do you mean, 'where?' I'm right 
here."`;
   waitForClick; clearText; marker; sound(`T5A067`); appendText; 
   Tsugumi`"Yeah but, where is here?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You know, here is 'here,' right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I beat the palm of my hand against my chest.`;
   waitForClick; clearText; marker; sound(`T5A068`); appendText; 
   Tsugumi`"Have you ever cut you finger nails?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's up with you all of a sudden?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi leaned over urgently, right in front 
of my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In her eyes I could see something, like a 
distant light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could just glimpse the tip of her tongue, 
wet and smooth.`;
   waitForClick; clearText; marker; sound(`T5A069`); appendText; 
   Tsugumi`"Just answer, okay..."`;
   waitForClick; clearText; marker; sound(`T5A070`); appendText; 
   Tsugumi`"Have you ever cut your finger nails?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course I have."`;
   waitForClick; clearText; marker; sound(`T5A071`); appendText; 
   Tsugumi`"Well then, is the nail that's been cut away 
still you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`T5A072`); appendText; 
   Tsugumi`"I mean, are you there in the nail?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No...I guess once it's gone from my body, 
it's not me anymore."`;
   waitForClick; clearText; marker; sound(`T5A073`); appendText; 
   Tsugumi`"How about hair?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The same goes for hair."`;
   waitForClick; clearText; marker; sound(`T5A074`); appendText; 
   Tsugumi`"In that case, this hair here is you right? 
But if I pull it out..."`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ouch!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reflexively put my hand to my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi had yanked out a couple strands.`;
   waitForClick; clearText; marker; sound(`T5A075`); appendText; 
   Tsugumi`"This isn't you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi held the hair up, waving it around.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm...that's tough."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It isn't me but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I guess you could call it, 'ex-me.'"`;
   waitForClick; clearText; marker; sound(`T5A076`); appendText; 
   Tsugumi`"Okay then...What if I ripped your arm off?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You gotta be kidding!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grabbed my arm.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU08A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And before I could react, I was drawn into her 
body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although she wasn't abnormally strong, I found 
it impossible to resist her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a natural, flowing movement.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside the white gondola...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Tsugumi's body covered mine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel her breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel her pulse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel the warmth of her body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could smell her scent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smell of musk...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It made me slightly dizzy...`;
   waitForClick; clearText; marker; sound(`T5A077`); appendText; 
   Tsugumi`"Well? If I ripped your arm off?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Gazing intensely at me, Tsugumi continued 
shooting me questions.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5A078`); appendText; 
   Tsugumi`"Would you be there, in the arm?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I suppose I wouldn't be there."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU08B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5A079`); appendText; 
   Tsugumi`"Okay, then what if I took off your leg?"`;
   waitForClick; clearText; marker; sound(`T5A080`); appendText; 
   Tsugumi`"Or if I cut your torso away?"`;
   waitForClick; clearText; marker; sound(`T5A081`); appendText; 
   Tsugumi`"Or even if I took out your brain?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still gazing at me, she moved her hands and 
put them on my neck.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like I was being hunted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The illusion was intense.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked straight at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't shake myself away from her gaze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I peered deeply into her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I was being sucked inside her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Those eyes, full of that distant light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where the light originated from...`;
   waitForClick; clearText; marker; sound(`T5A082`); appendText; 
   Tsugumi`"Tell me, Takeshi, where are you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...where am I?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 2, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG04A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Me...Takeshi Kuranari. Since the moment I was 
born I had existed as one person. One 
continuous, linear, cohesive individual.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`There was no doubt about that fact.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The 'me' as a baby in the photo album, the 
'me' running around in elementary school and 
finally, the 'me' sitting there...they were 
all the same organism called 'Kuranari 
Takeshi.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So where exactly did the entity called 'me' 
exist?`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`In the past, people thought the soul existed 
in a person's heart.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Descartes believed the soul inhabited the 
pineal gland in the brain.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The brain.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I wondered briefly if I existed only in my 
memories?`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But if that were the truth, then if I lost my 
memory like the Kid, wouldn't that mean I was 
no longer 'Kuranari Takeshi?'`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Thoughts? Senses? Emotions? Sensations? 
Character? Values?`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`All of those things were nothing but functions 
of the organ called the brain.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`For one thing, the 'me' that ran around in 
elementary school was composed of different 
molecules than the 'me' there.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`From purely a material point of view, my 
younger 'me' was entirely different than my 
older 'me.'`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Cells die and are replaced daily.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Every cell that is replaced will also die.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They say the cells in the entire human body 
are completely replaced every three to five 
years.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`By comparison, a rock would be composed of the 
exact same molecules five years before, or 
five years hence. `;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But a human body was different.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The cells of 'me' five years ago were not the 
same as the cells of 'me' then.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even so, the 'me' of five years before and the 
'me' then were definitely the same.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Then, just what was it that defined 'me'?`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And where did that 'me' exist...?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
if (l_d9 == 0) goto(lbl_000007a8);
bgload({ name: `EV_TU08A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi took her hand off of my neck. I 
breathed easier.`;
   waitForClick; clearText; marker; sound(`T5A083`); appendText; 
   Tsugumi`"You see. Your existence has no substance."`;
   waitForClick; clearText; marker; sound(`T5A084`); appendText; 
   Tsugumi`"All you are is a concept."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A concept?"`;
   waitForClick; clearText; marker; sound(`T5A085`); appendText; 
   Tsugumi`"You are just a packet of 
information...'software'."`;
   waitForClick; clearText; marker; sound(`T5A086`); appendText; 
   Tsugumi`"The information written on a CD has no 
physical body, right?"`;
   waitForClick; clearText; marker; sound(`T5A087`); appendText; 
   Tsugumi`"The CD itself is just plastic, a hard mass of 
polycarbonate."`;
   waitForClick; clearText; marker; sound(`T5A088`); appendText; 
   Tsugumi`"But that mass has nothing to do with the 
information it holds."`;
   waitForClick; clearText; marker; sound(`T5A089`); appendText; 
   Tsugumi`"Information can't have a physical body, 
that's impossible."`;
   waitForClick; clearText; marker; sound(`T5A090`); appendText; 
   Tsugumi`"Information does not have shape or 
substance."`;
   waitForClick; clearText; marker; sound(`T5A091`); appendText; 
   Tsugumi`"The embodiment of information only takes 
place through its application."`;
   waitForClick; clearText; marker; sound(`T5A092`); appendText; 
   Tsugumi`"However, the embodied information itself has 
no actual body."`;
   waitForClick; clearText; marker; sound(`T5A093`); appendText; 
   Tsugumi`"The essence of information is the information 
itself..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5A094`); appendText; 
   Tsugumi`"Takeshi, it's the same for you."`;
   waitForClick; clearText; marker; sound(`T5A095`); appendText; 
   Tsugumi`"There is no physical substance to your 
'essence.'"`;
   waitForClick; clearText; marker; sound(`T5A096`); appendText; 
   Tsugumi`"Instead, the human called 'Takeshi Kuranari' 
is no more than a concept, information, 
software."`;
   waitForClick; clearText; marker; sound(`T5A097`); appendText; 
   Tsugumi`"And that essence is realized only through 
your body, the hardware."`;
   waitForClick; clearText; marker; sound(`T5A098`); appendText; 
   Tsugumi`"That's it. Your body is just the hardware."`;
   waitForClick; clearText; marker; sound(`T5A099`); appendText; 
   Tsugumi`"It's just a device in which the entity of 
'you' is embodied."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...I see. Hmm."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, okay. I understand you perfectly."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, actually I hardly understand you at 
all...but if what you say is true..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Then what?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What does that have to do with what you were 
talking about?"`;
   waitForClick; clearText; marker; sound(`T5A100`); appendText; 
   Tsugumi`"Twelve years ago, I was infected with a 
virus."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, you said that."`;
   waitForClick; clearText; marker; sound(`T5A101`); appendText; 
   Tsugumi`"Because of that virus...the virus..."`;
   waitForClick; clearText; marker; sound(`T5A102`); appendText; 
   Tsugumi`"It rewrote my genetic code."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? Your genetic code?"`;
   waitForClick; clearText; marker; sound(`T5A103`); appendText; 
   Tsugumi`"Cells in peoples body are replaced daily."`;
   waitForClick; clearText; marker; sound(`T5A104`); appendText; 
   Tsugumi`"They are reborn, and then die."`;
   waitForClick; clearText; marker; sound(`T5A105`); appendText; 
   Tsugumi`"Normally, the human body is totally replaced 
with new cells within five years."`;
   waitForClick; clearText; marker; sound(`T5A106`); appendText; 
   Tsugumi`"When I was twelve, the cells in my body were 
infected. And from that moment on, they 
divided and replaced themselves."`;
   waitForClick; clearText; marker; sound(`T5A107`); appendText; 
   Tsugumi`"Five years later, all cells had been 
replaced."`;
   waitForClick; clearText; marker; sound(`T5A108`); appendText; 
   Tsugumi`"In five years, every cell that made up 
my body had been genetically altered."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".........?"`;
   waitForClick; clearText; marker; sound(`T5A109`); appendText; 
   Tsugumi`"And when the last of the cells had died..."`;
   waitForClick; clearText; marker; sound(`T5A110`); appendText; 
   Tsugumi`"...the last trace of my 12-year-old self 
disappeared."`;
   waitForClick; clearText; marker; sound(`T5A111`); appendText; 
   Tsugumi`"In that moment the old me died."`;
   waitForClick; clearText; marker; sound(`T5A112`); appendText; 
   Tsugumi`"The old me died, but the new me became a body 
that never dies."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A body that never dies...?"`;
   waitForClick; clearText; marker; sound(`T5A113`); appendText; 
   Tsugumi`"My immune system and my metabolic 
rate were remarkably improved..."`;
   waitForClick; clearText; marker; sound(`T5A114`); appendText; 
   Tsugumi`"My telomeres began to regenerate 
themselves..."`;
   waitForClick; clearText; marker; sound(`T5A115`); appendText; 
   Tsugumi`"That's right..."`;
   waitForClick; clearText; marker; sound(`T5A116`); appendText; 
   Tsugumi`"I will never grow old, and never die."`;
   waitForClick; clearText; marker; sound(`T5A117`); appendText; 
   Tsugumi`"My physical growth stopped at that 
moment in time."`;
   waitForClick; clearText; marker; sound(`T5A118`); appendText; 
   Tsugumi`"I'll never grow older than 17."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"'Highly improved immune system and 
increased metabolic efficiency'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"'Telomeres that continue to rejuvenate'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, if what she said was to be believed....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's body would never die on its own.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as her body had the energy to 
continue, it would not die.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as she continued to have the will to 
live, her body would be sustained forever.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Semi-eternal life.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, was such a thing even conceivable?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The concept of never growing old, never 
dying - was it possible?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why do living creatures age? ...Essentially, 
it is to protect against exhaustion and 
deterioration of function.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The life cycle needs aging so it can have 
succession and renewal through subsequent 
generations.`;
   waitForClick; clearText; 
});
bgload({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I couldn't help but laugh.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ha..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's a good story. But no way...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But I guess it's a good joke, pretty 
solid."`;
   waitForClick; clearText; marker; sound(`T5A119`); appendText; 
   Tsugumi`"Yeah...I guess your right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi snickered at my words.`;
   waitForClick; clearText; marker; sound(`T5A120`); appendText; 
   Tsugumi`"Yep, it's just a little joke."`;
   waitForClick; clearText; marker; sound(`T5A121`); appendText; 
   Tsugumi`"I thought you might fall for it, but I guess 
not."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What else would you expect? Crazy talk like 
that."`;
   waitForClick; clearText; marker; sound(`T5A122`); appendText; 
   Tsugumi`"Well, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5A123`); appendText; 
   Tsugumi`"I guess you're not so stupid after all."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU03A`, transition: 0 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi got up slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her disheveled clothes showed just a peek of 
her legs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And a glimpse of her sleek thighs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her clean satin skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...and a scar.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the...?"`;
   waitForClick; clearText; marker; sound(`T5A124`); appendText; 
   Tsugumi`"What's the matter?"`;
   waitForClick; clearText; marker; sound(`T5A125`); appendText; 
   Tsugumi`"Takeshi...what are you looking at?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Your right thigh, at the scar...`;
   waitForClick; clearText; marker; sound(`T5A126`); appendText; 
   Tsugumi`"Do you want a closer look?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well...yeah...no..."`;
   waitForClick; clearText; marker; sound(`T5A127`); appendText; 
   Tsugumi`"Shall I show you...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, really..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's okay..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sure enough, it was a scar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like something that had healed years 
ago, just a scar where once several stitches 
closed a wound.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 90 });
goto(lbl_000009a9);
let lbl_000007a8;
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All this time, Tsugumi continued to hold my 
neck with her hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Little by little, she began to apply more 
pressure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a time, it became difficult to breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind began to fog over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was slowly drifting toward chaos...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 24, volume: 100 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `EV_TU08B`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T5A128`); appendText; 
   Tsugumi`"You see. Your existence has no substance."`;
   waitForClick; clearText; marker; sound(`T5A129`); appendText; 
   Tsugumi`"All you are is a concept."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".........?"`;
   waitForClick; clearText; marker; sound(`T5A130`); appendText; 
   Tsugumi`"You are just a packet of 
information...'software'."`;
   waitForClick; clearText; marker; sound(`T5A131`); appendText; 
   Tsugumi`"The information written on a CD has no 
physical body, right?"`;
   waitForClick; clearText; marker; sound(`T5A132`); appendText; 
   Tsugumi`"The CD itself is just plastic, a hard mass of 
polycarbonate."`;
   waitForClick; clearText; marker; sound(`T5A133`); appendText; 
   Tsugumi`"But that mass has nothing to do with the 
information it holds."`;
   waitForClick; clearText; marker; sound(`T5A134`); appendText; 
   Tsugumi`"Information can't have a physical body, 
that's impossible."`;
   waitForClick; clearText; marker; sound(`T5A135`); appendText; 
   Tsugumi`"Information does not have shape or 
substance."`;
   waitForClick; clearText; marker; sound(`T5A136`); appendText; 
   Tsugumi`"The embodiment of information only takes 
place through it application."`;
   waitForClick; clearText; marker; sound(`T5A137`); appendText; 
   Tsugumi`"However, the embodied information itself has 
no actual body."`;
   waitForClick; clearText; marker; sound(`T5A138`); appendText; 
   Tsugumi`"The essence of information is the information 
itself..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"..."`;
   waitForClick; clearText; marker; sound(`T5A139`); appendText; 
   Tsugumi`"Takeshi, it's the same for you."`;
   waitForClick; clearText; marker; sound(`T5A140`); appendText; 
   Tsugumi`"There is no physical substance to the essence 
of Takeshi."`;
   waitForClick; clearText; marker; sound(`T5A141`); appendText; 
   Tsugumi`"Instead, the human called 'Takeshi Kuranari' 
is no more than a concept, information, 
software."`;
   waitForClick; clearText; marker; sound(`T5A142`); appendText; 
   Tsugumi`"And that essence is realized only through 
your body, the hardware."`;
   waitForClick; clearText; marker; sound(`T5A143`); appendText; 
   Tsugumi`"That's it. Your body is just the hardware."`;
   waitForClick; clearText; marker; sound(`T5A144`); appendText; 
   Tsugumi`"It's just a device in which the entity of you 
is embodied."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why...do...you...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spit out the words with difficulty.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How...come...you...are...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I making any sense to her? I couldn't tell.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The weight of Tsugumi's whole body was on my 
neck.`;
   waitForClick; clearText; marker; sound(`T5A145`); appendText; 
   Tsugumi`"I can't..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"..."`;
   waitForClick; clearText; marker; sound(`T5A146`); appendText; 
   Tsugumi`"I can't..."`;
   waitForClick; clearText; marker; sound(`T5A147`); appendText; 
   Tsugumi`"I just can't..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For an instant, her grip loosened slightly.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU08C`, transition: 0 });
showTextbox();
text(() => {
   marker; sound(`T5A148`); appendText; 
   Tsugumi`"I can never escape."`;
   waitForClick; clearText; marker; sound(`T5A149`); appendText; 
   Tsugumi`"I'm bound eternally to this horrid body."`;
   waitForClick; clearText; marker; sound(`T5A150`); appendText; 
   Tsugumi`"My soul is forever in chains."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi became teary eyed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So that was the light deep in her eyes...tears.`;
   waitForClick; clearText; marker; sound(`T5A151`); appendText; 
   Tsugumi`"Hey? Takeshi...?"`;
   waitForClick; clearText; marker; sound(`T5A152`); appendText; 
   Tsugumi`"Would... you kill me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Half lying on her side, she grabbed my wrists.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She tried to force my hands to her own neck.`;
   waitForClick; clearText; marker; sound(`T5A153`); appendText; 
   Tsugumi`"Please...?"`;
   waitForClick; clearText; marker; sound(`T5A154`); appendText; 
   Tsugumi`"Kill me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W...what are you talking about!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I broke away from her grasp.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why are you talking like this...?"`;
   waitForClick; clearText; marker; sound(`T5A155`); appendText; 
   Tsugumi`"Yeah, I get it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi muttered, her voice shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And her gaze drifted off.`;
   waitForClick; clearText; marker; sound(`T5A156`); appendText; 
   Tsugumi`"You're just a coward..."`;
   waitForClick; clearText; marker; sound(`T5A157`); appendText; 
   Tsugumi`"...Just a gutless man..."`;
   waitForClick; clearText; marker; sound(`T5A158`); appendText; 
   Tsugumi`"In fact, you're not even a 'man.'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's got nothing to do with this!"`;
   waitForClick; clearText; marker; sound(`T5A159`); appendText; 
   Tsugumi`"Come on, please..."`;
   waitForClick; clearText; marker; sound(`T5A160`); appendText; 
   Tsugumi`"Kill me...!"`;
   waitForClick; clearText; marker; sound(`T5A161`); appendText; 
   Tsugumi`"Can't you do it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you crazy!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's no way I could do such a thing!!"`;
   waitForClick; clearText; marker; sound(`T5A162`); appendText; 
   Tsugumi`"Why not? Why can't you...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course I can't! I..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...I don't need a reason!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't want to..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why do you want to die so badly, anyway?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why do you need someone to kill you!"`;
   waitForClick; clearText; marker; sound(`T5A163`); appendText; 
   Tsugumi`"Please. It's because..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Forget it!"`;
   waitForClick; clearText; marker; sound(`T5A164`); appendText; 
   Tsugumi`"Are you really so unwilling...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're damn right I'm unwilling."`;
   waitForClick; clearText; marker; sound(`T5A165`); appendText; 
   Tsugumi`"Well, in that case..."`;
   waitForClick; clearText; marker; sound(`T5A166`); appendText; 
   Tsugumi`"In that case, I know..."`;
   waitForClick; clearText; marker; sound(`T5A167`); appendText; 
   Tsugumi`"I will kill you instead."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_07`, a1: 0, volume: 100 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_c2_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 6;
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With all her strength Tsugumi slammed me to 
the floor and started choking me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Gah."`;
   waitForClick; clearText; 
});
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; sound(`T5A168`); appendText; 
   Tsugumi`"I'll give you the gift of death! And then 
I'll..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Argh......!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_11`, a1: 0, volume: 95 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With all her strength, she slammed me down.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_11`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slammed me down.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_03`, a1: 0, volume: 95 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And slammed me down.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Again and again.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop...it......"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I would die, if she kept it up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, I WAS dying.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(If she doesn't stop, I'm a goner...)`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
removeBG_unk(3, 0, 3);
closeDimInAndOutAndFilterAnim();
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG04A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Attempting to force her off, I scratched her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something red started to drip from her lips.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She's bleeding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood mixed with tears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly her shadow loomed over me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see a thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then her mouth closed on mine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our lips pressed hard together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mouth was filled with the taste of her 
blood...and tears...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Narr`........................`;
   waitForClick; clearText; marker; sound(`T5A169`); appendText; 
   Tsugumi`"I'll kill you..."`;
   waitForClick; clearText; marker; sound(`T5A170`); appendText; 
   Tsugumi`"I will...I'll kill you..."`;
   waitForClick; clearText; marker; sound(`T5A171`); appendText; 
   Tsugumi`"...oh, oh..."`;
   waitForClick; clearText; marker; sound(`T5A172`); appendText; 
   Tsugumi`"No!..."`;
   waitForClick; clearText; marker; sound(`T5A173`); appendText; 
   Tsugumi`"Don't leave me alone..."`;
   waitForClick; clearText; marker; sound(`T5A174`); appendText; 
   Tsugumi`"No, please don't leave me alone..."`;
   waitForClick; clearText; marker; sound(`T5A175`); appendText; 
   Tsugumi`"Please...Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5A176`); appendText; 
   Tsugumi`"Please."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Darkness surrounded me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or, maybe I wasn't there at all...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A darkness without awareness...I heard only 
the slight rustle of clothing, and Tsugumi's 
sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hearing that sound, I felt a craziness swell 
up inside me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two shadows overlapped to become one. `;
   waitForClick; clearText; marker; appendText; 
   Narr`And I plunged into the chaos, further and 
further and became one.`;
   waitForClick; clearText; marker; appendText; 
   Narr`........................`;
   waitForClick; clearText; marker; appendText; 
   Narr`............`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
delay({ interval: 120 });
let lbl_000009a9;
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
clock(`6:34`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Afterwards, I went straight back to the 
Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both my mind and body were exhausted...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even though little remained of the night, I 
slept soundly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I awoke, I felt refreshed and fully 
recharged.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently, no one had noticed my 
disappearance during the night.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A177`); appendText; 
   Sora`"Good morning everybody."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU01BDS`, name2: `CO02ADS`, name3: `KA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T5A178`); appendText; 
   You`"Good morning!"`;
   waitForClick; clearText; marker; sound(`T5A179`); appendText; 
   Coco`"Good...morning, Sora!!"`;
   waitForClick; clearText; marker; sound(`T5A180`); appendText; 
   Kid`"Morning!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, hi there, Sora."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A little later than usual, Sora presented 
herself in the Conference Room.`;
   waitForClick; clearText; marker; sound(`T5A181`); appendText; 
   You`"So how about it Sora? How did the maintenance 
go?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A182`); appendText; 
   Sora`"Well, yes..."`;
   waitForClick; clearText; marker; sound(`T5A183`); appendText; 
   Sora`"The system is in sound condition. Although, 
there would be no way to repair any mechanical 
damage if it were to occur."`;
   waitForClick; clearText; marker; sound(`T5A184`); appendText; 
   Sora`"The scheduled maintenance program checked 
out. I can assure you that the entire 
compound is functioning normally."`;
   waitForClick; clearText; marker; sound(`T5A185`); appendText; 
   You`"Well, that's good to hear."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A186`); appendText; 
   Sora`"After carefully assessing the situation, I 
have found a slight noise in my thought 
processor..."`;
   waitForClick; clearText; marker; sound(`T5A187`); appendText; 
   Sora`"Normal function will not be compromised, so 
no modifications are necessary."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A188`); appendText; 
   Coco`"Hey, Sora, what does that mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A189`); appendText; 
   Sora`"Well, Coco. It means that..."`;
   waitForClick; clearText; marker; sound(`T5A190`); appendText; 
   Sora`"You see, sometimes certain customers want to 
play pranks on me. They tell lies, or try to 
confuse me."`;
   waitForClick; clearText; marker; sound(`T5A191`); appendText; 
   Sora`"And because of that, my memories or 
programmed responses get a little out of 
alignment. It tends to cause issues in my 
thought processing."`;
   waitForClick; clearText; marker; sound(`T5A192`); appendText; 
   Sora`"Sometimes older data gets mixed with newer 
information, making it difficult to determine 
which is correct."`;
   waitForClick; clearText; marker; sound(`T5A193`); appendText; 
   Sora`"When this problem becomes severe, it's 
necessary to fiddle with the system and 
overwrite the problematic data."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A194`); appendText; 
   Sora`"However, at this time, nothing too drastic 
has occurred, so please don't worry."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A195`); appendText; 
   Coco`"Okay."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A196`); appendText; 
   Sora`"Other than that...I have yet to complete a 
full check of the sensor data which was 
recorded throughout the compound while you 
all were sleeping."`;
   waitForClick; clearText; marker; sound(`T5A197`); appendText; 
   Sora`"I doubt any new leakage has occurred...but I 
will report back to you, once I've checked the 
sensor data."`;
   waitForClick; clearText; marker; sound(`T5A198`); appendText; 
   Kid`"Thanks, Sora. We're counting on you."`;
   waitForClick; clearText; marker; sound(`T5A199`); appendText; 
   Sora`"Yes, leave it to me."`;
   waitForClick; clearText; marker; sound(`T5A200`); appendText; 
   Sora`"By the way, thanks to the maintenance 
program, the LeMMIH terminal response has 
greatly improved."`;
   waitForClick; clearText; marker; sound(`T5A201`); appendText; 
   Sora`"There was a slight problem concerning LeMMIH 
traffic, but it has been resolved. Terminal 
communication functions were optimized to 
adjust to LeMU's current status."`;
   waitForClick; clearText; marker; sound(`T5A202`); appendText; 
   Kid`"Hmm..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey Sora, what do you mean by 'traffic'? 
I'd like to know more about what exactly has 
was tweaked in the terminals."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5A203`); appendText; 
   Sora`"Alright everyone, why don't we go to 
breakfast?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"W...What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is it me, or did she just totally ignore my 
question?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Oh well...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perhaps she just couldn't hear me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everybody relocated to the chicken sandwich 
shop.`;
   waitForClick; clearText; 
});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And as always, I cooked up breakfast for 
everyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking at their faces as they ate, I suddenly 
felt relieved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The faces of You, Coco, and the Kid seemed so 
happy...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora just stood by quietly watching them enjoy 
the meal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was nowhere to be seen.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_5B`);
