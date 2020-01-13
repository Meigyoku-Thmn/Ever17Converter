playBGM({ num: 3, volume: 100 });
bgload({ name: `BG26B3L`, transition: 20 });
setDialogBoxColor(GREEN);
setSceneTitle({ index: 14 });
clock(`22:2`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was nighttime.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But from the center of the ocean it was only 
slightly darker than before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fortunately, the damage to LeMU hadn't 
worsened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had a light dinner at the chicken sandwich 
shop and gathered in the Conference Room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C240`); appendText; 
   //You
   You`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C241`); appendText; 
   //Kid
   Kid`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C242`); appendText; 
   //Tsugumi
   Tsugumi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; sound(`T2C243`); appendText; 
   //Sora
   Sora`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My yawn spread from one person to the next.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C244`); appendText; 
   //Coco
   Coco`"Still..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C245`); appendText; 
   //Coco
   Coco`"Everybody looks so sleepy..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well.... There's really nothing to do either."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only person that seemed completely awake 
was Coco. `;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone else was slouched in chairs, just 
spacing out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no impending danger. No new 
developments.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The situation we were in remained unchanged, 
and it somehow felt as though time had stopped.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C246`); appendText; 
   //You
   You`"Takeshi, you're such a slob..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this, in a tired sounding voice.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T2C247`); appendText; 
   //You
   You`"And stop dawdling..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Look, there's no reason to go wandering 
around the complex now, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We're just...going have to wait for 
help to come anyway, right?"`;
   waitForClick; clearText; marker; sound(`T2C248`); appendText; 
   //You
   You`"Yeah...I suppose..."`;
   waitForClick; clearText; marker; sound(`T2C249`); appendText; 
   //You
   You`"Alright...I'm off for a little bit..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Twisting her neck around, You stood up.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C250`); appendText; 
   //Coco
   Coco`"Hey, Nakkyu, where are you going?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C251`); appendText; 
   //You
   You`"Nowhere in particular. Just a walk..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C252`); appendText; 
   //You
   You`"I've got to move around or I'll get tired..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C253`); appendText; 
   //Coco
   Coco`"Oh! I know, let's run a race!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's eyes lit up.`;
   waitForClick; clearText; marker; sound(`T2C254`); appendText; 
   //You
   You`"A race...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C255`); appendText; 
   //Coco
   Coco`"You don't want to...?"`;
   waitForClick; clearText; marker; sound(`T2C256`); appendText; 
   //You
   You`"No, I didn't say that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You made a face, but she didn't seem to be 
in a bad mood.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C257`); appendText; 
   //Coco
   Coco`"Then, then, how about tag!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C258`); appendText; 
   //You
   You`"Alright. I'm in."`;
   waitForClick; clearText; marker; sound(`T2C259`); appendText; 
   //You
   You`"But tag with two people doesn't sound very 
fun."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(1, 2, 4);
multifgload3({ name1: `YU15ADS`, name2: `CO15ADS`, name3: `KA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C260`); appendText; 
   //Kid
   Kid`"Want me to play?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid stood up.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADS`, name2: `CO11ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C261`); appendText; 
   //Sora
   Sora`"May I participate as well?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora approached Coco and the others.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C262`); appendText; 
   //Coco
   Coco`"Yeah! Let's play together."`;
   waitForClick; clearText; marker; sound(`T2C263`); appendText; 
   //Sora
   Sora`"Yes, let's."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C264`); appendText; 
   //Kid
   Kid`"Alright! I'm gonna win!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't tell why, but everyone was excited 
to play.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I supposed everyone was bored....`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C265`); appendText; 
   //You
   You`"Hey, where do you wanna play?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C266`); appendText; 
   //Coco
   Coco`"Hmmm. How about...in this room?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco looked around the Conference Room.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I surveyed it, too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi sat alone with an annoyed expression 
on her face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C267`); appendText; 
   //Tsugumi
   Tsugumi`"*Sigh*"`;
   waitForClick; clearText; marker; sound(`T2C268`); appendText; 
   //Tsugumi
   Tsugumi`"You never shut up..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She lazily stood from her chair and walked 
briskly to the corner of the room...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And flipped off the light switch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi returned to her original seat and 
again sat down slowly.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU06B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Wh-what are you thinking? It's dark."`;
   waitForClick; clearText; marker; sound(`T2C269`); appendText; 
   //Tsugumi
   Tsugumi`"It was too bright for me to concentrate."`;
   waitForClick; clearText; marker; sound(`T2C270`); appendText; 
   //Tsugumi
   Tsugumi`"Some people want to rest..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, that doesn't mean you just go turning 
off the lights!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Just because YOU want to rest..."`;
   waitForClick; clearText; marker; sound(`T2C271`); appendText; 
   //Tsugumi
   Tsugumi`"What about you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T2C272`); appendText; 
   //Tsugumi
   Tsugumi`"Don't you want to rest...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, I...I'm..."`;
   waitForClick; clearText; marker; sound(`T2C273`); appendText; 
   //Kid
   Kid`"Oh, yeah. Hey Takeshi, you wanna play tag?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Tag, huh...?)`;
   waitForClick; 
});
choice(
   `I'll pass`
   `I'm in`
);
switch (choice) {
   case 0: goto(lbl_000002fd);
   case 1: goto(lbl_00000327);
}
let lbl_000002fd;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Nah...I think I'll pass."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wanna rest like Tsugumi said...I think 
I'll hold off for now."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Once you get older like me, tag takes its 
toll on your body."`;
   waitForClick; clearText; marker; sound(`T2C274`); appendText; 
   //You
   You`"Hmph. Older, huh...?"`;
   waitForClick; clearText; marker; sound(`T2C275`); appendText; 
   //You
   You`"Well, you must be older than you look."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...What?"`;
   waitForClick; clearText; marker; sound(`T2C276`); appendText; 
   //You
   You`"Yeah, and besides Takeshi doesn't seem too 
sharp anyways."`;
   waitForClick; clearText; marker; sound(`T2C277`); appendText; 
   //You
   You`"I'll bet he'd be caught right away."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_08`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"You don't know what you're talkin' 'bout!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood up menacingly.`;
   waitForClick; clearText; marker; sound(`T2C278`); appendText; 
   //You
   You`"Oh, does that mean Takeshi wants to plaaaay 
now?"`;
   waitForClick; clearText; marker; sound(`T2C279`); appendText; 
   //Coco
   Coco`"Come on, Takepyon It'll be fun!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wait a sec! I didn't say that I'm playin'!"`;
   waitForClick; clearText; marker; sound(`T2C280`); appendText; 
   //Kid
   Kid`"Oh, you're not going to play?"`;
   waitForClick; clearText; marker; sound(`T2C281`); appendText; 
   //You
   You`"Surrendering without a fight? Sounds like a 
chicken to me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...OH! Alright! I'll play your dumb game!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was overruled by the majority.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, I figured it was better than sitting 
there doing nothing....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was playing, but I wasn't happy about it.`;
   waitForClick; clearText; 
});
goto(lbl_00000342);
let lbl_00000327;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It all sounded childish to me...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well I suppose..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Just sitting around here doing nothing would 
get kinda boring..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright! I'm in!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood up enthusiastically.`;
   waitForClick; clearText; marker; sound(`T2C282`); appendText; 
   //You
   You`"Oh, does that mean Takeshi wants to plaaaay?"`;
   waitForClick; clearText; marker; sound(`T2C283`); appendText; 
   //Coco
   Coco`"Roger that!"`;
   waitForClick; clearText; 
});
let lbl_00000342;
bgload({ name: `EV_TU06A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi glanced at me out of the corner of 
her eye and then looked away.`;
   waitForClick; clearText; marker; sound(`T2C284`); appendText; 
   //Kid
   Kid`"...Shall we leave the lights off?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid whispered this to me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The emergency lights are on, but it's kinda 
dark. You okay with that?"`;
   waitForClick; clearText; marker; sound(`T2C285`); appendText; 
   //Kid
   Kid`"Let's go with what Tsugumi thinks."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But this doesn't seem like tag at all..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG17A2`, transition: 20 });
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C286`); appendText; 
   //Coco
   Coco`"Eenie, meenie, miney, mo!"`;
   waitForClick; clearText; marker; sound(`T2C287`); appendText; 
   //Coco
   Coco`"Give me a flashlight to go!"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 9, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco pulled out a flashlight as she recited 
the rhyme.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `SO15ADS`, name2: `CO01ADS`, name3: `KA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C288`); appendText; 
   //Coco
   Coco`"Yeah. Well, kick the can is pretty cool. 
Don't you think?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco lit up her face with the flashlight from 
under her chin trying to get everyone to agree.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Kick the can?"`;
   waitForClick; clearText; marker; sound(`T2C289`); appendText; 
   //Sora
   Sora`"What is kick the can?"`;
   waitForClick; clearText; marker; sound(`T2C290`); appendText; 
   //Coco
   Coco`"Um...it's...um..."`;
   waitForClick; clearText; marker; sound(`T2C291`); appendText; 
   //Coco
   Coco`"You pick someone to be it in a dark place. 
Then everyone hides..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, that's just hide and seek tag."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C292`); appendText; 
   //Coco
   Coco`"No it's not! Listen!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, sorry..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C293`); appendText; 
   //Coco
   Coco`"The person that's 'it' puts a can somewhere 
in the room..."`;
   waitForClick; clearText; marker; sound(`T2C294`); appendText; 
   //Coco
   Coco`"And the people that hide try to kick the can 
before the person that's 'it' finds them."`;
   waitForClick; clearText; marker; sound(`T2C295`); appendText; 
   //Coco
   Coco`"If a person kicks the can, then he or she 
wins."`;
   waitForClick; clearText; marker; sound(`T2C296`); appendText; 
   //Coco
   Coco`"If the person that's 'it' finds somebody and 
steps on the can calling out his or her 
name..."`;
   waitForClick; clearText; marker; sound(`T2C297`); appendText; 
   //Coco
   Coco`"Then the found person can't kick the can 
anymore and loses."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU16ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C298`); appendText; 
   //You
   You`"Oh, so that's a kind of hide and seek, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, well everybody knows how to play that."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C299`); appendText; 
   //Coco
   Coco`"No, it's kick the can."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C300`); appendText; 
   //You
   You`"That's a glorified kind of hide and seek."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C301`); appendText; 
   //Coco
   Coco`"It's kick the can!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C302`); appendText; 
   //Coco
   Coco`"KICK THE CAN!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, who cares about the name? Let's play."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C303`); appendText; 
   //Tsugumi
   Tsugumi`"...Geez."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we were getting all pumped for the game, 
Tsugumi let out a sigh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C304`); appendText; 
   //Tsugumi
   Tsugumi`"You are SO noisy..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi quietly stood up and walked to the 
far exit, leaving the room.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU17ADS`, name2: `CO01ADS`, name3: `KA07ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C305`); appendText; 
   //Kid
   Kid`"Is Tsugumi mad?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who knows? Anyway..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She'll come back after a while. You'll see."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We decided who was 'it' using rock, paper, 
scissors.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T2C306`); appendText; 
   //Coco
   Coco`"Ready go!"`;
   waitForClick; clearText; marker; sound(`T2C307`); appendText; 
   //Coco
   Coco`"Ready go!"`;
   waitForClick; clearText; marker; sound(`T2C308`); appendText; 
   //Coco
   Coco`"Ready go!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Damn. I lost!"`;
   waitForClick; clearText; 
});
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `YU02ADS`, name2: `CO02ADS`, name3: `SO02ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C309`); appendText; 
   //You
   You`"Alright. So Takeshi is 'it' first."`;
   waitForClick; clearText; marker; sound(`T2C310`); appendText; 
   //Coco
   Coco`"Oh goodie!"`;
   waitForClick; clearText; marker; sound(`T2C311`); appendText; 
   //Sora
   Sora`"Good luck."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was grinning at me. Damn.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C312`); appendText; 
   //Kid
   Kid`"Here you go, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid handed me the empty can.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C313`); appendText; 
   //You
   You`"But...hiding anywhere is okay, as long as 
it's on this third floor. Okay, let's hide."`;
   waitForClick; clearText; marker; sound(`T2C314`); appendText; 
   //You
   You`"Ready..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-wait a sec!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held up a hand hurriedly stopping You from 
sending everyone off.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"You, what did you just say?"`;
   waitForClick; clearText; marker; sound(`T2C315`); appendText; 
   //You
   You`"Let's hide."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No. Before that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C316`); appendText; 
   //You
   You`"You can hide anywhere on this third floor."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Are you serious?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not just the Conference Room?"`;
   waitForClick; clearText; marker; sound(`T2C317`); appendText; 
   //You
   You`"This room is too small. And there aren't 
that many places to hide."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But the WHOLE third floor?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C318`); appendText; 
   //You
   You`"Oh, of course, the areas you can't walk from 
here are off limits. And the emergency 
corridors and stairs are no good either."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's still too big."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's not fair to the person that's 'it'. 
While he's looking, he's sure to get it from 
somebody else..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C319`); appendText; 
   //You
   You`"I think it's fine."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's not fine. The game won't work. This is 
a MAJOR problem."`;
   waitForClick; clearText; marker; sound(`T2C320`); appendText; 
   //You
   You`"Gosh. You sure complain a lot."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C321`); appendText; 
   //Sora
   Sora`"Well, he would certainly appear to be at a 
disadvantage..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C322`); appendText; 
   //Sora
   Sora`"I will dim the lights on the third 
floor...but in return I will make it so that 
sounds carry better."`;
   waitForClick; clearText; marker; sound(`T2C323`); appendText; 
   //Sora
   Sora`"If sounds carry, then you can hear when 
someone moves across a corridor with water. 
That will give the person who is 'it' an 
advantage."`;
   waitForClick; clearText; marker; sound(`T2C324`); appendText; 
   //Sora
   Sora`"And I will make it so that you know when 
people are moving. I will synthesize 
footsteps and dispatch the data to voice 
converters."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. Please do."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C325`); appendText; 
   //Sora
   Sora`"Oh, but...what should I do if I should get 
to the can first?"`;
   waitForClick; clearText; marker; sound(`T2C326`); appendText; 
   //Kid
   Kid`"Huh? Oh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's right. You can't kick the can!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We'd only just noticed. If we played tag, 
we just would have had to ban Sora from 
jumping about as an image...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C327`); appendText; 
   //Coco
   Coco`"Then you can be with me, Sora."`;
   waitForClick; clearText; marker; sound(`T2C328`); appendText; 
   //Coco
   Coco`"We'll make it so that Sora and I have to be 
within a yard of each other when we hide or 
when we are 'it'."`;
   waitForClick; clearText; marker; sound(`T2C329`); appendText; 
   //Coco
   Coco`"So I can kick the can..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C330`); appendText; 
   //Coco
   Coco`"Okay? Let's try it this way."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C331`); appendText; 
   //Sora
   Sora`"Okay. Thanks."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On top of that we made Sora promise not to 
use the bio scan or LeMU to monitor the 
location of anyone.`;
   waitForClick; clearText; marker; sound(`T2C332`); appendText; 
   //Kid
   Kid`"Yeah, that makes it fair then."`;
   waitForClick; clearText; marker; sound(`T2C333`); appendText; 
   //You
   You`"Alright. All set."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like everyone was ready.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took the can, closed my eyes and counted to 
one hundred in the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`During that time the others had scattered out 
around the floor.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG17A2`, transition: 20 });
clock(`22:19`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"One hundred..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put the can by my feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around in the dim light. There was 
no one around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I guess I'll have to go look...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I faced the nearby door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of my shoes on the ground 
reverberated as a deep sound. It sounded 
unnatural.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was kind of like I imagined sonar would 
sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I see.... So this is what Sora means by 
making the sound bigger...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I was in a submarine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I'd best be careful of my footsteps 
to make sure they weren't heard by the others.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All of the lights were off, but the doors 
opened automatically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`First, I thought I would head for the...`;
   waitForClick; 
});
varop(`(28 0a a4) bb := (00) 0`);
choice(
   `Central Control Room`
   `Elevator hall`
);
switch (choice) {
   case 0: goto(lbl_0000071e);
   case 1: goto(lbl_00000807);
}
let lbl_0000071e;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to hit the Control Room.`;
   waitForClick; clearText; 
});
let lbl_00000723;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG15B2`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The monitors in the room were off and the 
room only dimly lit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The computers weren't moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I peeked into the lockers and under the 
desks, but no one was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well...I figured no one would want to hide in 
a place that would be cramped and hard to get 
out of.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave up looking any more thoroughly and 
left the room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B4L`, transition: 20 });
goto(lbl_000007f3).if(var_bb == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought about where I should go next....`;
   waitForClick; clearText; 
});
goto(lbl_000008c0);
let lbl_000007f3;
varop(`(28 0a a4) bb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The elevator hall was one idea.`;
   waitForClick; clearText; 
});
goto(lbl_0000080c);
let lbl_00000807;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But the elevator wasn't moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure no one would be there....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But wait...that might be exactly what some 
one was hoping I would think.`;
   waitForClick; clearText; 
});
let lbl_0000080c;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 12 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG22B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I entered the elevator hall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was really no place for anyone to 
hide.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked along the walls, but there wasn't 
anyone there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the elevators were stopped and there 
was no sign of anything moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe I should ignore this area...)`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4L`, transition: 20 });
goto(lbl_000008ac).if(var_bb == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thinking about where to go next...`;
   waitForClick; clearText; 
});
goto(lbl_000008c0);
let lbl_000008ac;
varop(`(28 0a a4) bb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought the Central Control Room might be 
good.`;
   waitForClick; clearText; 
});
goto(lbl_00000723);
let lbl_000008c0;
hideTextbox();
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then I heard a sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Someone was running along the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The footsteps were heading toward the 
Conference Room from the Lemurian Ruins.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh no!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rushed back the way I'd come.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Who is that?"`;
   waitForClick; clearText; marker; sound(`T2C334`); appendText; 
   //Kid
   Kid`"Ooops!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I shouted, the moving person flinched.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The person I found at the corner was the Kid.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if he had given up because I 
ran after him, but he had stopped in the 
corridor.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C335`); appendText; 
   //Kid
   Kid`"Oh, no. You caught me... Am I the first one?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yup."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C336`); appendText; 
   //Kid
   Kid`"Dang. That means if you catch everyone, then 
I'm 'it' next?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I reckon so."`;
   waitForClick; clearText; marker; sound(`T2C337`); appendText; 
   //Kid
   Kid`"I wonder if someone will show up to help me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C338`); appendText; 
   //Kid
   Kid`"Takeshi, if you don't go step on the can, 
then I'll go kick it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You sure know your kick-the-can rules."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T2C339`); appendText; 
   //You
   You`"Whack!"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `YU10ADL`, x: 320, useAnim: true });
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Crash!!"`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Umpphh!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Splash!"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly You came flying from the side and 
completely cold-cocked me with a jumping chop 
to the neck.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_17`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Gurgle, gurgle..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head went underwater.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mouth filled with salt water.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C340`); appendText; 
   //You
   You`"NYA,HA,HA,HA!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was pointing at me in the water and 
cackling crazily.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Cough, cough...pwahh!"`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Floundering about in the water, I stood up.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey, you!!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C341`); appendText; 
   //You
   You`"Hee, hee...I won this battle!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey you. Wait!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`T2C342`); appendText; 
   //You
   You`"Wait for you to catch me? No thanks!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey you! I'll get you back for that! Just 
you wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took off in a mad dash after You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You disappeared into the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She tried to close the door before I got 
there, but I made it in first.`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A2`, transition: 20 });
stopSFX()
fgload({ id: 1, name: `YU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was lucky!`;
   waitForClick; clearText; marker; appendText; 
   Narr`You couldn't find the can and was wandering 
about.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran by You...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I caught sight of the can and slid into it!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put the can under my foot and declared.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I found You! I stomped on the can!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon after that the Kid came in.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I found the Kid! I stomped on the can!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I continued my declaration.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ha, ha, ha! Did you really think you could 
outwit me?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU04ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C343`); appendText; 
   //You
   You`"Takeshi you cheat! You changed the place of 
the can!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nobody said where we had to put the can, 
right? Besides, you smacked me so I figure 
we're even."`;
   waitForClick; clearText; marker; sound(`T2C344`); appendText; 
   //You
   You`"Alright, alright. Whatever. Anyway, so I'm 
the first person you caught?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You got it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C345`); appendText; 
   //You
   You`"Well, that plan was sure a failure..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh? What plan?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As they were talking, the sound of 
splashing footsteps could be heard 
approaching the door...`;
   waitForClick; clearText; 
});
hideTextbox();
multifgload2({ id1: 1, id2: 2, name1: `SO01ADS`, name2: `CO02ADS`, x1: 176, x2: 464, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`T2C346`); appendText; 
   //Coco
   Coco`"Heeellllloooo!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I found Sora and Coco and Pipi."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stepped on the can.`;
   waitForClick; clearText; 
});
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO15ADS`, name2: `CO15ADS`, name3: `YU11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C347`); appendText; 
   //Sora
   Sora`"Oh, did you get beaten here, You?"`;
   waitForClick; clearText; marker; sound(`T2C348`); appendText; 
   //You
   You`"Things didn't quite work out as planned."`;
   waitForClick; clearText; marker; sound(`T2C349`); appendText; 
   //Coco
   Coco`"Nakkyu, don't you think you jumped the gun 
just a little bit?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA01ADS`, name2: `CO11ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C350`); appendText; 
   //Kid
   Kid`"You said we would all charge together."`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   //Pipi
   Pipi`"Wooof."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So that was your plan..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `CO01ADS`, name2: `YU01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C351`); appendText; 
   //You
   You`"Yeah. I thought if we all went for the can 
at once, you wouldn't be able to stop us."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's pretty tricky."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C352`); appendText; 
   //You
   You`"You really think so?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You laughed mischievously and 
with a hint of embarrassment.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We gathered in the center of the room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, finding all of you was easier than I 
thought..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"First of all, mob-style kicking of the can is 
definitely outlawed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C353`); appendText; 
   //You
   You`"Huh? Why?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You think I can stop you if you all come 
attack at once?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C354`); appendText; 
   //You
   You`"Impossible."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's why. It takes all the fun out of it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Timing your rush, just right, for when the 
person who is 'it' goes searching...all of 
that would disappear from the game."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C355`); appendText; 
   //You
   You`"Well, alright..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You reluctantly agreed to be 'it' the next 
time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe she was used to 
hand-to-hand, full-contact battles of kick 
the can.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO01ADS`, name2: `CO01ADS`, name3: `KA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright. Everybody good with that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone - Sora, Coco, Kid and Pipi - nodded.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay then. You is 'it' next."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The can is over there, so you get it. Put it 
where you want and count..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kabing!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clatter, clatter, clatter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of a can being kicked rang out in 
the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The can went rolling powerfully toward the 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey! Who kicked that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C356`); appendText; 
   //You
   You`"It wasn't me!"`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU16ADM`, x: 320, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as she got this out of her mouth, You 
started to run away.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You scoundrel...!"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone scattered like scared butterflies.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The splashing sound of footsteps echoed as 
they receded down the corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Geez. This means I gotta be 'it' again!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one responded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one was left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder if...Tsugumi kicked the can.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter what she said, Tsugumi was probably 
playing on the sly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(She should've said so then...geez...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh well...)`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. I'm counting to a hundred. O-n-e..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"T-e-n, e-l-e-v-e-n, o-n-e-h-u-n-d-r-e-d..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Here I go."`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B4`, transition: 20 });
clock(`22:28`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(I'm gonna get all of you....)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about where I should start looking.`;
   waitForClick; 
});
varop(`(28 0a a4) d0 := (00) 1`);
varop(`(28 0a a4) d1 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 1`);
varop(`(28 0a a4) bb := (00) 0`);
let lbl_00000d74;
choice(
   cond(`[cond (28 0a a4) d0 14 (00)]Lemurian Ruins`, var_d0)
   cond(`[cond (28 0a a4) d1 14 (00)]Rest area`, var_d1)
   cond(`[cond (28 0a a4) d2 14 (00)]Chicken sandwich stand`, var_d2)
);
switch (choice) {
   case 0: goto(lbl_00000d9e);
   case 1: goto(lbl_00000f0a);
   case 2: goto(lbl_0000118e);
}
let lbl_00000d9e;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 2 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG04B2`, transition: 20 });
varop(`(28 0a a4) d0 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stood in front of the Lemurian Ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights inside the attraction were off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently the inside was like a maze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder if somebody's hiding in the maze...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about going in, but inside was even 
darker than the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if I did go in, coming back out would 
have been a royal pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Getting out of there looked a lot more 
difficult than going in....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured it was silly to take the risk and 
go look in there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took a look around the perimeter and didn't 
see anyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I strained to listen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't hear anything....`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 5, volume: 100 });
delay({ interval: 30 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whoa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, I heard music from within the 
attraction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it might be the attraction's song.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mixed in with that noise, I was sure that I 
heard someone running....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You! Stop!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran to head off the exit in the direction I 
thought the footsteps were heading.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"I knew it..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C357`); appendText; 
   //You
   You`"Hey, how'd you know it was me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's the same trick you used to scare me 
with the dolphin merry-go-round before. I 
don't fall for the same trick twice."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C358`); appendText; 
   //You
   You`"Oh, that's right! I forgot I'd already done 
that..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're not going to try to tackle me now 
that I've got you are you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C359`); appendText; 
   //You
   You`"Ah, you knew I was going to do that too? 
Dang. A, ha ha..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I can read you like a book!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was the kind of person that was mostly 
transparent once you knew what they were about.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C360`); appendText; 
   //You
   You`"Alright. You got me. I give up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You held up her hands. I reckoned she knew she 
couldn't squeeze by me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd given up on getting to the can.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She walked behind me with her hands in the air.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`      <I found You. I stepped on the can>`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 13, volume: 100 });
goto(lbl_00000ee8).if(var_bb == 0);
goto(lbl_000012d0);
let lbl_00000ee8;
varop(`(28 0a a4) bb := (00) 1`);
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought I'd check some other rooms.`;
   waitForClick; 
});
goto(lbl_00000d74);
let lbl_00000f0a;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 13 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG21B2`, transition: 20 });
varop(`(28 0a a4) d1 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I visited the rest area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I soon noticed that there was someone there.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I could hear the sound of someone walking 
through water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I got closer, the direction of the 
footsteps changed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was someone short and moving slowly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a battle of patience....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash, splash...`;
   waitForClick; clearText; marker; appendText; 
   Narr`My opponent's feet made a dash for the exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I circled around to the side again and again 
to block off the person.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The footsteps gradually moved away from the 
exit into a corner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I moved a little bit closer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a hunch whoever it was would make a 
break for it....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I moved to head them off and prepared to trip 
them by catching his or her leg!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splaaaaaash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard someone fall spectacularly.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, I dunno who you are, but are you 
alright?"`;
   waitForClick; clearText; marker; appendText; 
   //??
   Unk`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I was near where the person had 
stumbled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was dark and I couldn't see much.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if this might work..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took my PDA from my pocket and set the 
monitor backlight on maximum brightness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was weak and nothing compared to a 
flashlight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it might be brighter, but it was 
dim and didn't amount to much.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a2) 4f := (00) 34`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 2`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oooops!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My hand slipped. My PDA looked like it was 
headed for the water.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I snatched it right before it hit the water's 
surface.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I glimpsed something reflected on the water's 
surface, moving...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just about the biggest 'fish' I'd ever seen 
started sliding away in the water....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, if it isn't the Kid." `;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I scooped up a handful of seawater from 
around my feet and dumped it on his head.`;
   waitForClick; clearText; marker; sound(`T2C361`); appendText; 
   //Kid
   Kid`"Oh no! You found me!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
fgload({ id: 1, name: `KA06AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splaaaaaash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`As soon as the Kid stood up, he tried to get 
away.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C362`); appendText; 
   //Kid
   Kid`"Ahhhhh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he had a hood on and...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That hood was filled with water...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kersplash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The weight of the hood dragged him backward 
as he kicked his legs into the air and 
plopped backed down in the water on his back.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C363`); appendText; 
   //Kid
   Kid`"Hey, this feels pretty good."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid swam a kind of breaststroke in the 
small pool of water six inches deep.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is the water cold?"`;
   waitForClick; clearText; marker; sound(`T2C364`); appendText; 
   //Kid
   Kid`"A bit..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He glided along, enjoying himself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was probably what people meant by, 
"taking to water like a fish."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness, he swam to the other side of 
the room....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, just so you know, that exit is the long 
way around."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C365`); appendText; 
   //Kid
   Kid`"Huh? Read my mind?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid gave up and stood.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA02AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C366`); appendText; 
   //Kid
   Kid`"I thought you wouldn't see me if I were in 
the water."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He laughed as he said it.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Keeping me on my toes. You're like a ninja or 
something."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C367`); appendText; 
   //Kid
   Kid`"Nin! Nin! Ninja!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid took some kind of ninja pose.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He jumped in the water again and swam some 
more.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`    <I found the Kid, I stepped on the can.>`;
   waitForClick; clearText; 
});
goto(lbl_0000116c).if(var_bb == 0);
goto(lbl_000012d0);
let lbl_0000116c;
varop(`(28 0a a4) bb := (00) 1`);
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought I'd check some other rooms.`;
   waitForClick; 
});
goto(lbl_00000d74);
let lbl_0000118e;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 9 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG07B2`, transition: 20 });
varop(`(28 0a a4) d2 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I arrived at the chicken sandwich shop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The area was dark, but it still smelled 
delicious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Dang, I'm hungry...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe I'll just stop for a bite...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached for some of the sandwiches packaged 
and lined up on the counter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took off the wrapping and took a bite.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ouch...that's hard!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh...it's a plastic sample..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had taken a bite of a wax sample and it was 
tasteless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way I was eating that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh well...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went around to the back of the shop and went 
inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I'd make myself a chicken sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light inside the shop dim.... `;
   waitForClick; clearText; marker; appendText; 
   Narr`But since I'd been appointed chairman of the 
breakfast committee this morning I knew 
exactly where the food and cooking equipment 
was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stooped over to open the fridge by my feet.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There should still be loads of food in 
here..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was there sticking out beside the 
fridge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a pair of white hands. I'd seen them 
before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Above them was a face I'd seen before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was staring around nervously.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey...what're you doing?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
bgload({ name: `EV_SO08A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T2C368`); appendText; 
   //Sora
   Sora`"Eh? Kyaaaaaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I guess she hadn't noticed me. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking up and seeing me she stiffened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed flustered, her mouth agape and eyes 
looking around desperately.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C369`); appendText; 
   //Sora
   Sora`"Uhhhh....I um....."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO08B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T2C370`); appendText; 
   //Sora
   Sora`"W-welcome...to our restaurant!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Bent over awkwardly, Sora shifted gears and 
suddenly shot me a smile.`;
   waitForClick; clearText; marker; sound(`T2C371`); appendText; 
   //Sora
   Sora`"Oh, another customer? What'll you have?"`;
   waitForClick; clearText; marker; sound(`T2C372`); appendText; 
   //Sora
   Sora`"What can I get you today?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'll take a chicken sandwich."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But I'm pretty sure that's all you've got 
anyway..."`;
   waitForClick; clearText; marker; sound(`T2C373`); appendText; 
   //Sora
   Sora`"Oh? Is that right...I'll get right on it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C374`); appendText; 
   //Sora
   Sora`"Uh...and would you like a drink with that?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C375`); appendText; 
   //Sora
   Sora`"...Let's see..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, I'm amazed that you were obeying the 
rules of the game so strictly."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I thought maybe you'd vanished somewhere or 
gone off where I couldn't find you."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO08C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T2C376`); appendText; 
   //Sora
   Sora`"But that would ruin the game wouldn't it? I 
play by the rules."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know...but still."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you're going to the trouble to hide, you 
should try to hide a little better."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had simply squatted down and covered her 
head.`;
   waitForClick; clearText; marker; sound(`T2C377`); appendText; 
   //Sora
   Sora`"Is that right? I didn't think I would be 
that easy to find..."`;
   waitForClick; clearText; marker; sound(`T2C378`); appendText; 
   //Sora
   Sora`"Well, since you've found me there's not much 
I can do about it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took some bread out of the fridge for a 
sandwich.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Munch, munch..."`;
   waitForClick; clearText; marker; sound(`T2C379`); appendText; 
   //Sora
   Sora`"Takeshi, I'm not out until you step on the 
can."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, I know."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO08B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T2C380`); appendText; 
   //Sora
   Sora`"Don't you think this is not the time to be 
eating bread...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, it's okay."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"With you here it means that Coco is around 
here also, right?"`;
   waitForClick; clearText; marker; sound(`T2C381`); appendText; 
   //Sora
   Sora`"Uh, yes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't worry. I'll hound her out after I 
finish this."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Right, Coco?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang, bang! I pounded on the stainless steel 
kitchen counter.`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know you're hiding in the back of the shop 
already."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, if that's where you wanna be, that's 
fine..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you aren't there, then tell me."`;
   waitForClick; clearText; marker; sound(`T2C382`); appendText; 
   //Coco
   Coco`"I'm not!"`;
   waitForClick; clearText; marker; sound(`T2C383`); appendText; 
   //Sora
   Sora`"Coco you silly, if you talk, he will find 
you."`;
   waitForClick; clearText; marker; sound(`T2C384`); appendText; 
   //Coco
   Coco`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Girl, you fell for the oldest trick in the 
book."`;
   waitForClick; clearText; marker; sound(`T2C385`); appendText; 
   //Coco
   Coco`".....Ooooops."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi came out from under the counter 
together.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`         <I found Sora, Coco and Pipi. 
`;
   appendText; delay(0); 
   Narr`             I stepped on the can.>`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 13, volume: 100 });
goto(lbl_000012ae).if(var_bb == 0);
goto(lbl_000012d0);
let lbl_000012ae;
varop(`(28 0a a4) bb := (00) 1`);
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Again, I thought I'd check some other rooms.`;
   waitForClick; 
});
goto(lbl_00000d74);
let lbl_000012d0;
varop(`(28 0a a4) d0 := (00) 0`);
varop(`(28 0a a4) d1 := (00) 0`);
varop(`(28 0a a4) d2 := (00) 0`);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In that way I rounded up everyone, stepped on 
the can and ended the game.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Tsugumi was left....`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whhhhaaaaat?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around outside of the room and was 
surprised.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU06A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was sitting calmly in a chair waiting.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I found TSUGUMI!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU06B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T2C386`); appendText; 
   //Tsugumi
   Tsugumi`"....Eh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't play dumb with me."`;
   waitForClick; clearText; marker; sound(`T2C387`); appendText; 
   //Tsugumi
   Tsugumi`"I have no idea what you're talking about."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Heh, heh. I know better than that. You're 
playing dumb. I know it."`;
   waitForClick; clearText; marker; sound(`T2C388`); appendText; 
   //Tsugumi
   Tsugumi`"Dumb?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're the one that kicked the can, right?"`;
   waitForClick; clearText; marker; sound(`T2C389`); appendText; 
   //Tsugumi
   Tsugumi`"Can?"`;
   waitForClick; clearText; marker; sound(`T2C390`); appendText; 
   //Tsugumi
   Tsugumi`"What...are you talking about?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A2`, transition: 20 });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi stood up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I jumped. If Tsugumi kicked the can first, I 
thought I'd lose.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I frantically ran to where the can was.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I found Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I stepped on the can."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? What's...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C391`); appendText; 
   //Tsugumi
   Tsugumi`"Geez..."`;
   waitForClick; clearText; marker; sound(`T2C392`); appendText; 
   //Tsugumi
   Tsugumi`"What're you doing, Takeshi...?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Huh?????????????"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My foot was searching for the can, but found 
only space.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The can is gone!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I squinted scouring the area around me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The can shined in the emergency lights 
visible dimly in a corner of the room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey! Once you've been caught, 
it's against the rules to kick the can!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shouted this into the darkness, but 
everyone had already run away.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 3, volume: 100 });
bgload({ name: `IMG01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was nothing I could do. I was 'it' 
again. I had to go search.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid, You, Coco, Pipi, Sora....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew they couldn't have gone far and 
thought I'd find them quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stayed around in the Conference Room. 
It didn't look like she felt like going 
anywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just to be safe, I got everyone and stepped 
on the can again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next time nobody kicked the can....`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A2`, transition: 20 });
clock(`23:8`);
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"This time the Kid is 'it.'"`;
   waitForClick; clearText; marker; sound(`T2C393`); appendText; 
   //Kid
   Kid`"Alright. So I count to one hundred, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid took the can and sat in the chair 
with his face down.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C394`); appendText; 
   //Kid
   Kid`"Alright, here I go..."`;
   waitForClick; clearText; marker; sound(`T2C395`); appendText; 
   //Kid
   Kid`"O-n-e, t-w-o, t-h-r-e-e..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We left the Conference Room running around the 
floor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4R`, transition: 20 });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco, Pipi and Sora vanished down the corridor 
amidst the sound of splashing.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You approached me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C396`); appendText; 
   //You
   You`"Takeshi, whaddya say we work together?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Ganging up is against the rules. I 
think I'll pass."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C397`); appendText; 
   //You
   You`"Don't be so stubborn..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Why did you approach me?"`;
   waitForClick; clearText; marker; sound(`T2C398`); appendText; 
   //You
   You`"We just happened to be going in the same 
direction. That's all."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I see..."`;
   waitForClick; clearText; marker; sound(`T2C399`); appendText; 
   //You
   You`"I wonder if here would be safe."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The bathroom could be against the rules. 
It's not a good idea."`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B2`, transition: 20 });
fgload({ id: 1, name: `YU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C400`); appendText; 
   //You
   You`"...Oh...and this way's a dead end, huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's go back."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if we still have time..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I strained by ears to listen.`;
   waitForClick; clearText; marker; sound(`T2C401`); appendText; 
   //Kid
   Kid`"...t-h-i-r-t-y-f-o-u-r, 
t-h-i-r-t-y-f-i-v-e..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could faintly hear the Kid counting.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It seems like we've still got some time."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG25B4`, transition: 20 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C402`); appendText; 
   //You
   You`"I think it would have been more fun if we 
had made the emergency corridors part of the 
game."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That would make searching a hassle."`;
   waitForClick; clearText; marker; sound(`T2C403`); appendText; 
   //You
   You`"But there are only a few routes to the 
Conference Room so it's kind of boring..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, that's because you run around so 
loudly that anyone can hear you coming a mile 
away."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C404`); appendText; 
   //You
   You`"Oh thanks a lot..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C405`); appendText; 
   //You
   You`"Hey, wait! Be quiet."`;
   waitForClick; clearText; marker; sound(`T2C406`); appendText; 
   //Kid
   Kid`"...f-i-f-t-y-o-n-e, f-i-f-t-y-t-w-o..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could still hear counting.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Let's find somewhere to hide."`;
   waitForClick; clearText; marker; sound(`T2C407`); appendText; 
   //You
   You`"Yeah."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG04B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We ended up at the Lemurian Ruins.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C408`); appendText; 
   //You
   You`"You wanna go in the ruins?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The maze? Getting out will probably be a 
pain, but..."`;
   waitForClick; clearText; marker; sound(`T2C409`); appendText; 
   //You
   You`"Don't say that..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You pushed me toward the entrance of the ruins.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I peered into the attraction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But inside was dark as if it had been painted 
pitch black. I couldn't tell anything.`;
   waitForClick; clearText; marker; sound(`T2C410`); appendText; 
   //You
   You`"Oh, that might be too dark..."`;
   waitForClick; clearText; marker; sound(`T2C411`); appendText; 
   //You
   You`"The lights and emergency lights are both off."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I strained looking into the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked as if the darkness went on forever.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Heading in there like this would be 
reckless.... Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something moved in the darkness.`;
   waitForClick; clearText; 
});
bgload({ name: `BG04B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A person appeared from the ruins.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"You were in there, Tsugumi?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C412`); appendText; 
   //Tsugumi
   Tsugumi`"Yes. I took a look around."`;
   waitForClick; clearText; marker; sound(`T2C413`); appendText; 
   //Tsugumi
   Tsugumi`"It's completely dark. You best not go in."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Completely dark, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `TU17ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi left us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking tired, Tsugumi kicked the water under 
her feet lightly.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And I heard the sound of something click in 
her hand...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a sound I'd heard before...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, did you take the flashlight?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C414`); appendText; 
   //You
   You`"It'd be impossible to walk inside without it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T2C415`); appendText; 
   //Coco
   Coco`"HEY! HEY!"`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco came running and splashing up with Sora 
in tow.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `CO15ADS`, name2: `YU11ADS`, name3: `SO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C416`); appendText; 
   //Coco
   Coco`"So this is where everybody was?"`;
   waitForClick; clearText; marker; sound(`T2C417`); appendText; 
   //You
   You`"Hey."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's Coco and Sara. Welcome."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...But if we're supposed to be hiding, 
clumping up like this isn't too bright, is it?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO05ADS`, name2: `YU08ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C418`); appendText; 
   //Coco
   Coco`"Oh, you're right..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C419`); appendText; 
   //Coco
   Coco`"But he's probably just finishing counting to 
one hundred."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C420`); appendText; 
   //Sora
   Sora`"You're right."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And Tsugumi's playing, too. Right?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C421`); appendText; 
   //Tsugumi
   Tsugumi`"I'm not playing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C422`); appendText; 
   //Tsugumi
   Tsugumi`"I just happened to be around here."`;
   waitForClick; clearText; marker; sound(`T2C423`); appendText; 
   //Tsugumi
   Tsugumi`"Look, I wish you'd stop talking that way 
about me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, alright."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C424`); appendText; 
   //??
   Unk`"...e-i-g-h-t-y-s-e-v-e-n... 
e-i-g-h-t-y-e-i-g-h-t..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C425`); appendText; 
   //Kid
   Kid`"What are you all doing here? You planning a 
strategy?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, not exactly..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, I guess we better scatter and hide."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C426`); appendText; 
   //Kid
   Kid`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, what's the Kid doing here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C427`); appendText; 
   //Kid
   Kid`"Huh? What are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Kid, you're..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Did you forget that you're 'it'?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C428`); appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T2C429`); appendText; 
   //??
   Unk`"...n-i-n-e-t-y-e-i-g-h-t... 
n-i-n-e-t-y-n-i-n-e..."`;
   waitForClick; clearText; marker; sound(`T2C430`); appendText; 
   //Kid
   Kid`"Hey...whose voice is that?"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 16, volume: 100 });
playSFX({ name: `SE03_11`, a1: 0, volume: 100 });
bgload({ name: `BG04B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lights turned on.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-who turned the lights on?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C431`); appendText; 
   //Sora
   Sora`"I did..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were now able to see the area around us.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU06ADS`, name2: `CO06ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You, Sora, Coco, Tsugumi, the Kid, me....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was accounted for.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C432`); appendText; 
   //Sora
   Sora`"Everyone appears to be present."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora extended her hand out in the air.`;
   waitForClick; clearText; marker; sound(`T2C433`); appendText; 
   //Sora
   Sora`"The life readings of the complex do not 
appear to be abnormal."`;
   waitForClick; clearText; marker; sound(`T2C434`); appendText; 
   //Sora
   Sora`"There is nothing moving around Conference 
Room."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU03ADS`, name2: `CO06ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't get it."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C435`); appendText; 
   //Kid
   Kid`"Who could have been counting?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It wasn't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C436`); appendText; 
   //Kid
   Kid`"N-no!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I thought it sounded like you.... So then 
who?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C437`); appendText; 
   //Kid
   Kid`"I d-dunno."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE08_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kabing!`;
   waitForClick; clearText; 
});
goto(lbl_000018e4).if(var_f1 == 0);
goto(lbl_000018e4).if(var_ba != 5);
stopBGM();
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SC2E`);
let lbl_000018e4;
multifgload3({ name1: `YU03ADS`, name2: `CO07ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T2C438`); appendText; 
   //You
   You`"H-hey..."`;
   waitForClick; clearText; marker; sound(`T2C439`); appendText; 
   //Coco
   Coco`"That was...the can being kicked."`;
   waitForClick; clearText; marker; sound(`T2C440`); appendText; 
   //Tsugumi
   Tsugumi`"Who?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `SO11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C441`); appendText; 
   //Sora
   Sora`"Could it be a ghost?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora said it with a straight face.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C442`); appendText; 
   //Sora
   Sora`"If it is a ghost, I would like to make its 
acquaintance..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splish, splash...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of someone moving through the water 
reached us from outside the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then the empty can came rolling to a stop 
in front of us.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clatter, clatter, clatter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The can stopped in a shallow area with a 
hollow metallic sound.`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Woooooooof!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2C443`); appendText; 
   //Coco
   Coco`"Hey, Pipi. Where have you been?"`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Pipi took the can in his mouth again and ran 
circles around us.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was the end of kick the can.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, it remained a mystery who was 
counting...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We passed the rest of the night uneventfully...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a peaceful time...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I decided to enjoy a satisfying rest.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
delay({ interval: 150 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_3A`);
