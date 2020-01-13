setDialogBoxColor(BLUE);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 3`);
varop(`(28 0a a4) b2 := (00) 3`);
setSceneTitle({ index: 71 });
bgload({ name: `EV_SA13D`, transition: 10 });
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We finally gathered again in the Conference 
Room.`;
   waitForClick; clearText; 
});
goto(lbl_000000b4).if(var_db == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even though I had just embarrassed myself in 
front of everyone, they all acted as if 
nothing had happened.`;
   waitForClick; clearText; 
});
let lbl_000000b4;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were killing time...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We still couldn't think of any way to escape.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, we didn't want to feel like we were 
completely wasting our time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So we all decided to wander around LeMU one 
more time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we made the rounds Takeshi said - `;
   waitForClick; clearText; marker; appendText; 
   Narr`'Whaddya think the record is for running from 
one end of LeMU to the other?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I think we should try to give the chicken 
sandwiches a completely new flavor, somehow!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`He made a number of stupid comments.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all (with the exception of Tsugumi of 
course) listened half exasperated and half 
interested.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all knew...`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as we were doing something, it kept 
our minds off things we couldn't change...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like about how there was no way out, or 
remembering where we were.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
bgload({ name: `BG25A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We decided to meet at 8 p.m. for dinner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was left to wander around freely 
until then.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to help You try to repair the 
infirmary scanning machine.`;
   waitForClick; clearText; 
});
goto(lbl_0000010a).if(var_db != 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Of course, it was kind of an indirect thank 
you to her for looking after me when I was 
feeling down two days before.`;
   waitForClick; clearText; 
});
goto(lbl_0000010f);
let lbl_0000010a;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Of course, it was kind of an indirect thank 
you for her looking after me twice and 
worrying about my lost memory.`;
   waitForClick; clearText; 
});
let lbl_0000010f;
bgload({ name: `BG09A1`, transition: 20 });
playBGM({ num: 1, volume: 100 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
clock(`18:34`);
showTextbox();
text(() => {
   marker; sound(`S3C000`); appendText; 
   //You
   You`"Alright then...shall we get started?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You plopped down on the floor with the tools 
and parts, spreading out the repair manual.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course the repairs were You's job ? I was 
just there to help.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was getting used to handing her the tools, 
and was getting better at predicting which 
tool would be used next.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that if there were an exam for 
expertise in handing pliers or screws, I would 
pass with flying colors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the repairs were tougher than I imagined.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C001`); appendText; 
   //You
   You`"Ummmphhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You grunted as she stared at the diagram.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You still haven't figured it out?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C002`); appendText; 
   //You
   You`"Maybe if you'd be quiet I might!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C003`); appendText; 
   //You
   You`"It's not here..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She searched all over, but couldn't find the 
cause of the problem.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said everything looked normal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In other words, there was no sign of anything 
broken.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C004`); appendText; 
   //You
   You`"Geez! This good for nothing! Stupid, 
idiotic....!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C005`); appendText; 
   //You
   You`"Argghhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the sudden, You lost her cool, pounded 
on the diagram and kicked the toolbox.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Wham!`;
   waitForClick; clearText; marker; sound(`S3C006`); appendText; 
   //You
   You`"Pant, pant, pant..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, that's not very grown-up of you."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You know, you could ask Sora about how to fix 
it later."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You want to clean up for now?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C007`); appendText; 
   //You
   You`"Oh...sorry."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C008`); appendText; 
   //Takeshi
   Takeshi`"Hey, so here the two of you are."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh, hey Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C009`); appendText; 
   //You
   You`"What are you doing here, Takeshi?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C010`); appendText; 
   //Takeshi
   Takeshi`"Nothing really. I just thought I'd get 
some coffee or something to wake me up."`;
   waitForClick; clearText; marker; sound(`S3C011`); appendText; 
   //Takeshi
   Takeshi`"What about you two? What are you and the Kid 
up to?"`;
   waitForClick; clearText; marker; sound(`S3C012`); appendText; 
   //You
   You`"You can't tell by looking?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C013`); appendText; 
   //Takeshi
   Takeshi`"If I could, do you think I'd be asking?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Takeshi, do you think you could lend us a 
hand?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C014`); appendText; 
   //Takeshi
   Takeshi`"Sure...I can do that. You want help picking 
up this stuff?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We split up and started picking up the tools 
strewn around the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Screwdrivers and screws had flown all the way 
to the walls.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....................`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C015`); appendText; 
   //You
   You`"Uh, do you think we got everything?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No. There's one more right there..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was something in the corner.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C016`); appendText; 
   //Takeshi
   Takeshi`"Hey, what's this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi picked up something that looked like 
an electric plug...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, it WAS an electric plug.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cable continued, disappearing under the 
floor. It was embedded there.`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C017`); appendText; 
   //Takeshi
   Takeshi`"I wonder what this is supposed to power."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the wall was an outlet the same as in the 
home.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi stuck the plug into the wall.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whiiiiiiiiiiir....`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Hey, something is moving!"`;
   waitForClick; clearText; marker; sound(`S3C018`); appendText; 
   //Takeshi
   Takeshi`"Oh. Hey, looks like it was for that machine 
over there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Which means..."`;
   waitForClick; clearText; marker; sound(`S3C019`); appendText; 
   //You
   You`"...It would appear unplugged."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"..."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `KB07ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C020`); appendText; 
   //Takeshi
   Takeshi`"Hey...by the way..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi shot a question at me and You who were 
speechless.`;
   waitForClick; clearText; marker; sound(`S3C021`); appendText; 
   //Takeshi
   Takeshi`"What were you doing here anyway?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`".........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C022`); appendText; 
   //Takeshi
   Takeshi`"???"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
delay({ interval: 30 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then somebody else appeared.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setSceneTitle({ index: 72 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...It was Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But when she saw us she...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C023`); appendText; 
   //Tsugumi
   Tsugumi`"Tsk."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She clicked her tongue in an irritated way 
and turned to leave the room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door opened again immediately.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `TU18ADS`, name2: `SA14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...This time it was Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It could have been my imagination, but she 
looked kind of angry about something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stood her ground, blocking the exit so 
that Tsugumi couldn't leave.`;
   waitForClick; clearText; marker; sound(`S3C024`); appendText; 
   //Tsugumi
   Tsugumi`"Get outta the way."`;
   waitForClick; clearText; marker; sound(`S3C025`); appendText; 
   //Sara
   Sara`"Quit running away and answer."`;
   waitForClick; clearText; marker; sound(`S3C026`); appendText; 
   //Tsugumi
   Tsugumi`"I said, outta the way."`;
   waitForClick; clearText; marker; sound(`S3C027`); appendText; 
   //Sara
   Sara`"I said give me an answer!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like the two of them were fighting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(But I wonder why...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't think of any reason for the two of 
them would want to fight.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C028`); appendText; 
   //Tsugumi
   Tsugumi`"If you keep shouting, the three of them will 
hear."`;
   waitForClick; clearText; marker; sound(`S3C029`); appendText; 
   //Sara
   Sara`"I don't care!"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `KB07ADS`, name2: `SA14ADS`, name3: `TU17ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S3C030`); appendText; 
   //Takeshi
   Takeshi`"Hey...you two, what's up?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi asked this as he approached them.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C031`); appendText; 
   //Tsugumi
   Tsugumi`"That's what I want to know."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said this mixed with a sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then she gave Takeshi the evil eye.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C032`); appendText; 
   //Tsugumi
   Tsugumi`"What are you all planning anyway?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C033`); appendText; 
   //Takeshi
   Takeshi`"Wh-what...are we? What are YOU planning? Stop 
with the nonsense already."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`S3C034`); appendText; 
   //You
   You`"Hey, Mayo, what happened?"`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said it as if to calm Sara's nerves.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She still looked pretty riled up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was staring at Tsugumi bitterly.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Tsugumi..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU03ADS`, x: 320, useAnim: true });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`For an instant I thought that...Tsugumi drew 
up her face up sadly.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C035`); appendText; 
   //Tsugumi
   Tsugumi`"Now get outta my way!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she turned around, Tsugumi tried to push 
Sara out of the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara resisted.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C036`); appendText; 
   //Sara
   Sara`"So what? Did you run away from him the same 
as you are trying to run from me now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara said that as the two of them wrestled.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stopped moving.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C037`); appendText; 
   //Sara
   Sara`"So you did..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara crossed her arms tightly.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA10ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C038`); appendText; 
   //Sara
   Sara`"You suck..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA14ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C039`); appendText; 
   //Sara
   Sara`"You are inhuman!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `KB06ADS`, name2: `TU04ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C040`); appendText; 
   //Tsugumi
   Tsugumi`"!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi lifted up her right hand as if to hit 
Sara.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But Takeshi grabbed her hand.`;
   waitForClick; clearText; marker; sound(`S3C041`); appendText; 
   //Takeshi
   Takeshi`"Hey! Calm down!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara didn't miss her chance.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
fgload({ id: 4, name: `TU18ADS`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slap!`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara's open palm echoed on Tsugumi's cheek.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C042`); appendText; 
   //Tsugumi
   Tsugumi`"You little!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C043`); appendText; 
   //Sara
   Sara`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The raging Tsugumi, threw off Takeshi and 
stole from Sara whatever it was she was 
holding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She went to throw whatever it was she had 
against the wall...`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C044`); appendText; 
   //Tsugumi
   Tsugumi`"Agh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she stopped an instant before.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3C045`); appendText; 
   //Takeshi
   Takeshi`"Stop!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi went to grab her arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's arm went slack and something slipped 
to the floor.`;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE08_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It clattered loudly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something glittered as it bounced.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...It looked like a pendant.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara scooped up the pendant as if she were 
picking up a fragile piece of ice.`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's back quivered tensely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked down, dropping her head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The she squeezed her fist around the pendant.`;
   waitForClick; clearText; marker; sound(`S3C046`); appendText; 
   //You
   You`"Mayo?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said it softly, but Sara didn't appear to 
hear.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA04A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara lifted her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Biting her lip she glared at Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both of her eyes were welling up with tears.`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"............"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stared coldly at Sara as if looking 
down at her from far above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara withstood the glare, and stared back at 
Tsugumi, enraged. She continued to resist 
silently, trying not to shed tears, not to 
sob.  `;
   waitForClick; clearText; marker; appendText; 
   Narr`The scene was just like...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just like...`;
   waitForClick; clearText; 
});
goto(lbl_000006e2).if(var_db != 0);
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just like...how to put it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like the emotion that was about to 
explode to the surface had sunk away to 
nothingness.`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next thing I knew, Tsugumi had turned to 
leave the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara still focused her glare on Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked back and forth between the two of 
them...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally I let my eyes trail off after Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was there to help Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But first I wanted to find out what the fight 
was all about.`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 0`);
jump(`S_3E`);
let lbl_000006e2;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was just like...`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`S3B095`); appendText; delay(0); 
   Narr`              It's all your fault`;
   waitForSound; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `IMG04A`, transition: 26 });
hideTextbox();
AVL_Mode();
showDimOverlay();
playSFX({ name: `SE10_11`, a1: 1, volume: 100 });
waitForSFX();
setMonoColorOverlayFadeOutDuration(21);
fadeOutMonoColorOverlay();
unSkippableDelay(8);
monoColorOverlay({ interval: 4, color: WHITE });
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
bgload({ name: `EV_SA04A`, transition: 26 });
playBGM({ num: 17, volume: 97 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Y...you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A hot surge of hate raced through me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Who the hell do you think you are! You good 
for nothing...!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I screamed and grabbed Tsugumi by the collar.`;
   waitForClick; clearText; marker; sound(`S3C047`); appendText; 
   //You
   You`"What are you doing? Stop it!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You grabbed me from behind and pulled me away 
from Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Let go! Let go! I said, let go of me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I continued to struggle violently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was like a desperate beast, devoid of all 
reason.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With my fangs bared and a thirst for blood.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What was left of my mind had ceased to be 'me.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`.......`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`...`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SS4A`);
