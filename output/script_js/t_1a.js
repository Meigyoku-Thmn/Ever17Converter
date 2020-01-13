varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
setDialogBoxColor(GREEN);
removeBG({ mode: WHITE, transition: 02 });
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
bgload({ name: `BG22A5`, transition: 00 });
setSceneTitle({ index: 4 });
clock(`15:17`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned the knob and the door to the 
elevator opened slowly.`;
   waitForClick; clearText; marker; sound(`T1A000`); appendText; 
   //Announcement
   Announcement`"System wiederaufnahme."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard the mechanical announcement, but 
didn't understand what it meant. `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The battery...is probably dead..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the button, but my PDA didn't respond.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thanks to the help of the backlight of my 
display, I had found the emergency manual 
opening mechanism for the door...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, are you alive?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spoke to the girl.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A001`); appendText; 
   //Girl
   Girl`"...Yes."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked a little tired.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The floor was silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard the sound of water flowing somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a muffled sound....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was no sign of anyone around.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's going on here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A002`); appendText; 
   //Girl
   Girl`"...I don't...know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's go see if we can find anyone else."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG26A1R`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We went into the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Most of doors were locked as if to keep us 
from intruding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We found a floor directory, so we decided to 
look around the rooms listed on it.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG21A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We came out to an open space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was called the 'rest area.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the floor, there were scattered a mess of 
bags, a pair of shoes, wrapping paper from 
the souvenir shop and other stuff. `;
   waitForClick; clearText; marker; appendText; 
   Narr`As I had expected, there was no one there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a thick set of shutters in the 
circular space in the center of the area.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Ah, ha, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed an empty laugh.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if this area is under construction."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's probably why nobody's here. Yeah, 
I'll bet that's why."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Girl
   Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's try the next place."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We continued down the path we had been walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door down the corridor was shut firmly. `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Doesn't this door open?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A003`); appendText; 
   //Girl
   Girl`"I don't think it will. I don't see a switch."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We chose a corridor, which was open and walked 
slowly down it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't come across anyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like we were walking a route that 
someone had set up for us....`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG07A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A door on the side of the corridor had been 
left open and we went in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a stand selling tuna sandwiches.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It smelled like they had been cooking until 
recently.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, mister, I'll take two of the sandwiches 
that are half-price on weekdays."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...If only someone were here..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Looks like he ran off and left his stand. 
Doesn't he have any pride?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? There aren't any other customers here!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Business isn't exactly booming, is it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Girl
   Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm hungry..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wasted too much energy walking around..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And my friends take off somewhere without 
telling me..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't you think that's rude?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A004`); appendText; 
   //Girl
   Girl`"...Not really."`;
   waitForClick; clearText; marker; sound(`T1A005`); appendText; 
   //Girl
   Girl`"We just met, and I don't particularly care 
about you."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, okay. Whatever you say."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We returned to the corridor we'd come from, 
turned at an intersection and looked for 
other rooms.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everywhere looked the same.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if everyone is hiding somewhere."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe they are trying to surprise us."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A006`); appendText; 
   //Girl
   Girl`"What? Why do you think so?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, it's just kind of a feeling..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to speak to stay calm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like if I went quiet, I would return 
to the darkness of before.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG04A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the room we next went in, ruins were 
awaiting us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Lemurian Ruins..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were filled with silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If it weren't for the paper garbage strewn 
across the floor, it would have been hard to 
believe that anyone had been around.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where is everybody...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Gimme a break here!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where did everybody go?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...There's a limit to how far you can take a 
joke..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Girl
   Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG26A3L`, transition: 20 });
clock(`15:39`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"*Sigh...*"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why doesn't anyone come out...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sank to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know why but I was having trouble 
breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Against my will, I started to sweat.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What do you think? What happened here? Why 
haven't we seen anyone...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A007`); appendText; 
   //Girl
   Girl`"I don't know...there's only one thing for 
sure."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said this without changing the expression 
on her face.`;
   waitForClick; clearText; marker; sound(`T1A008`); appendText; 
   //Girl
   Girl`"This is not normal."`;
   waitForClick; clearText; marker; sound(`T1A009`); appendText; 
   //Girl
   Girl`"If this keeps up..."`;
   waitForClick; clearText; marker; sound(`T1A010`); appendText; 
   //Girl
   Girl`"We could be in danger..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A011`); appendText; 
   //Girl
   Girl`"Don't you think so?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stared at me with calm eyes.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_12`, a1: 0, volume: 90 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought I heard a low groan from somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swallowed nervously...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded uncomfortably...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next instant, the girl dashed to the 
other side of the corridor.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I quickly stood up and followed her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was exhausted, but I used every ounce of my 
power to push ahead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We jumped into a small entrance on the side 
of the corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We headed up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We started climbing up stairs at top speed.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 03 });
playSFX({ name: `SE01_06`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We ignored our pounding hearts. We simply ran.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We ran without looking back.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We ran...`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
playSFX({ name: `SE01_08`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We reached the top floor and I put my hand on 
the emergency hatch connected to the floating 
island.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The knob didn't budge.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Damn, why won't it open?"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gabaaaang!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whole structure rocked.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_18`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The hatch gave off a squeaking sound and the 
knob bent unnaturally.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"!?"`;
   waitForClick; clearText; marker; sound(`T1A012`); appendText; 
   //Girl
   Girl`"This way!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl screamed.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We rushed back to the stairs again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had no time to go down each step.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We jumped down toward the direction where we 
could see the corridor.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_08`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The impact with the ground rattled my knees 
terribly, but I ignored the pain.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Pant, pant..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Phew, *pant* *pant*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was out of breath. I gasped.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Haaaa, haaaa, haaaaa."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Fwaaaa, Huuuu, haaaaa."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hiihii, Huuuu, haaaaa."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Safe place, pokopon."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A013`); appendText; 
   //Girl
   Girl`"...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl's expression didn't change.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Anyways, she hasn't lost her breath much 
after the running that hard...)`;
   waitForClick; clearText; 
});
bgload({ name: `BG01A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, don't you want to rest?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I want to rest..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A014`); appendText; 
   //Girl
   Girl`"Go ahead. Do what you want..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Fine then."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sat down on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl walked slowly ahead down the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could see hundreds of colorful fish 
swimming comfortably outside of the windows.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room was quiet, too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just the two of us. Me and her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I remembered that I still didn't know 
who she was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had told me to 'do what I want,' but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Until then we'd been trying to escape together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what she was all about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was all...a mystery to me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A015`); appendText; 
   //Girl
   Girl`"...Who?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice caused me to look up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She hadn't said it to me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, was somebody there?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked this as I stood.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Girl
   Girl`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl stood still. Her eyes were focused 
in the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed her gaze.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO05A`, transition: 10 });
clock(`15:54`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A lady had appeared where there had been no 
sign of anyone a moment before and she was 
dressed as a park employee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't heard any footsteps.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What in the...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(When did she get here?)`;
   waitForClick; clearText; marker; sound(`T1A016`); appendText; 
   //Park staff
   Park_staff`"...from here."`;
   waitForClick; clearText; marker; sound(`T1A017`); appendText; 
   //Park staff
   Park_staff`"This area is not safe. Please escape..."`;
   waitForClick; clearText; marker; sound(`T1A018`); appendText; 
   //Park staff
   Park_staff`"Please. Please you must escape from here."`;
   waitForClick; clearText; marker; sound(`T1A019`); appendText; 
   //Park staff
   Park_staff`"It is dangerous, it is dangerous..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked slightly panicked.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, hey. What's happened? What's dangerous? 
Stay calm. Explain what's going on..."`;
   waitForClick; clearText; marker; sound(`T1A020`); appendText; 
   //Park staff
   Park_staff`"You need to escape...we have had... 
unexpected...trouble."`;
   waitForClick; clearText; marker; sound(`T1A021`); appendText; 
   //Park staff
   Park_staff`"Level...Delta...Tief...Blau."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She mumbled this again.`;
   waitForClick; clearText; marker; sound(`T1A022`); appendText; 
   //Park staff
   Park_staff`"Please escape. Please."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T1A023`); appendText; 
   //Park staff
   Park_staff`"Please get out of here!"`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
playBGM({ num: 10, volume: 100 });
playSFX({ name: `SE07_08`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 62 });
bgload({ name: `EV_SO05B`, transition: 20 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crash!`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c7_0_6`);
varop(`(28 0a a2) 3d := (00) 2`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
playSFX({ name: `SE02_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fwaaaaaash!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"UuuuwwWWAAaaaahh!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Glass shattered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A massive amount of seawater...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And countless fish came flooding in.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c7_0_6`);
varop(`(28 0a a2) 3d := (00) 4`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
playSFX({ name: `SE02_11L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was as if they were attacking me!`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
stopSFX()
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`MOV01A`);
unSkippableDelay(1);
unSkippableDelay(1);
playSFX({ name: `SE02_11L`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 62 });
showTextbox();
text(() => {
   marker; sound(`T1A024`); appendText; 
   //Girl
   Girl`"What're you doing? Hurry!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-whoaaa!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c7_0_6`);
varop(`(28 0a a2) 3d := (00) 3`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
bgload({ name: `EV_TU04A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The force of the water and destruction was 
incredible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The approaching swell mowed down everything 
in its path.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It swirled and swallowed debris on the floor, 
someone's dropped purse, a floor guide for the 
facility - anything and everything it 
encountered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder how fast that water is moving...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ridiculous thoughts flashed through my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(And, I wonder how fast I can run.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no guarantee the water wouldn't 
catch me.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_11L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whoa! Whoaaa! Whoaaaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran frantically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And jumped in the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was water flowing underfoot.`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 30 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whoooooa...."`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I slipped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew this was bad.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I took a spill, I would be sleeping with 
these fish!`;
   waitForClick; clearText; marker; sound(`T1A025`); appendText; 
   //Girl
   Girl`"You are so much trouble...!"`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 2`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
bgload({ name: `EV_TU04B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was carried along into the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl had grabbed my arm and yanked me 
forward with incredible force.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She ran lithely, like a tiny gazelle....`;
   waitForClick; clearText; marker; appendText; 
   Narr`And her speed - it felt I had just hopped 
into a car.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It almost felt as though she might rip my arm 
off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her strength was unbelievable.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`T1A026`); appendText; 
   //Park staff
   Park_staff`"Over here! Hurry! Hurry!"`;
   waitForClick; clearText; marker; sound(`T1A027`); appendText; 
   //Girl
   Girl`"I know!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And even harder to believe was that the park 
attendant was running ahead of us, leading 
the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(When did she...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she had just been sucked into 
the swirling waters ahead, but...no...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
varop(`(28 0a a2) 41 := (00) 11`);
varop(`(28 0a a2) 42 := (00) 9`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgload({ name: `BG25A1`, transition: 20 });
delay({ interval: 60 });
bgload({ name: `BG25B1`, transition: 10 });
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE00_04`, a1: 0, volume: 95 });
bgload({ name: `BG22A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADS`, name2: `SO14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A028`); appendText; 
   //Girl
   Girl`"Damn..."`;
   waitForClick; clearText; marker; sound(`T1A029`); appendText; 
   //Park staff
   Park_staff`"This is no good! It's not functioning! Go 
back!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A030`); appendText; 
   //Girl
   Girl`"There's no time!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
varop(`(28 0a a2) 41 := (00) 11`);
varop(`(28 0a a2) 42 := (00) 9`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We bounded from the slope into another 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Crap. Which way do we take to get outta here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all ran without stopping, looking for an 
exit.`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A1L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"It's a dead end...!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU18ADM`, name2: `SO14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A031`); appendText; 
   //Girl
   Girl`"Can we go through here?"`;
   waitForClick; clearText; marker; sound(`T1A032`); appendText; 
   //Park staff
   Park_staff`"Yes!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A033`); appendText; 
   //Girl
   Girl`"I'm going!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 2, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
closeDimInAndOutAndFilterAnim();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE10_19`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey...this isn't a corridor.... Aggh!"`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`MOV02A`);
unSkippableDelay(1);
unSkippableDelay(1);
removeBG({ mode: WHITE, transition: 62 });
playSFX({ name: `SE02_11L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She kicked through some metal mesh and into a 
big air exhaust duct.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a sloping pipe-like tube.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We shot down the incline stumbling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like there was a crazed froth of 
angry water roaring behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, I was already caught up in it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was just flushed along.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were spun in circles. I had no idea which 
way was up and which down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then we were all spit out in a corridor 
on the lower level.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_04`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saved by a hair, the shutter on the duct 
clanked shut solidly behind us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flow of water finally stopped.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 00 });
stopSFX()
stopBGM();
delay({ interval: 120 });
bgload({ name: `BG26B1R`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Aaah....`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was solid ground.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was safe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't in the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was alive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was good...`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Good?)`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_1B`);
