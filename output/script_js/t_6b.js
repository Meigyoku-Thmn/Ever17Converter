varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 6`);
varop(`(28 0a a4) b2 := (00) 6`);
setDialogBoxColor(GREEN);
playSFX({ name: `SE00_00`, a1: 0, volume: 90 });
bgload({ name: `BG09A1`, transition: 20 });
setSceneTitle({ index: 40 });
clock(`13:50`);
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B000`); appendText; 
   //You
   You`"I'm going to scan her, so put her up on the 
table!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You pointed to the "L-MRI."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi and I laid Coco down on the flat table.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco continued to breathe in her short, 
shallow manner. Although she had stopped 
coughing up blood, she seemed to be in a lot 
of pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her body lay still.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The arm of the "L-MRI" soon came to life and 
started a laser scan.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid came up to the side of the table and 
stared at Coco, looking as if he would burst 
into tears.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, put the results up on the screen, so 
everyone can see them."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B001`); appendText; 
   //Sora
   Sora`"Okay..."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly a few holographic windows appeared 
in the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Images, including a thermal scan, ultrasound 
analysis, showing cross-sectional 
representations of her body, and a laser 
sampling, were all displayed, one after 
another.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, none of us were doctors, so there 
was little we could understand about her 
condition by looking at the pictures.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All we could do was wait for the scanning 
equipment and LeMMIH's system to give us an 
answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We stared as the images that flashed by on 
the screen and prayed.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The results suddenly appeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Tief Blau 2017-Rev.17"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T6B002`); appendText; 
   //Sora
   Sora`"Tief Blau...!"`;
   waitForClick; clearText; marker; sound(`T6B003`); appendText; 
   //You
   You`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What'd you say?"`;
   waitForClick; clearText; marker; sound(`T6B004`); appendText; 
   //Sora
   Sora`"No...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora hurriedly shut down the holographic 
window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She bit her lip and stared down in shock.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO13ADM`, name2: `YU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her expression showed how serious the 
situation was.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora...?"`;
   waitForClick; clearText; marker; sound(`T6B005`); appendText; 
   //You
   You`"What's wrong, Sora? If you don't tell us..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B006`); appendText; 
   //You
   You`"If you don't tell us, we don't know what's 
going on..."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T6B007`); appendText; 
   //Sora
   Sora`"...I can't believe it."`;
   waitForClick; clearText; marker; sound(`T6B008`); appendText; 
   //Sora
   Sora`"I just can't believe it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What...what don't you believe?"`;
   waitForClick; clearText; marker; sound(`T6B009`); appendText; 
   //Sora
   Sora`"Coco's been..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B010`); appendText; 
   //Sora
   Sora`"Coco has been infected."`;
   waitForClick; clearText; marker; sound(`T6B011`); appendText; 
   //You
   You`"Infected...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What!?"`;
   waitForClick; clearText; marker; sound(`T6B012`); appendText; 
   //Sora
   Sora`"...it's..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was unable to suppress her agitation and 
opened her mouth hesitantly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B013`); appendText; 
   //Sora
   Sora`"Tief Blau."`;
   waitForClick; clearText; marker; sound(`T6B014`); appendText; 
   //Sora
   Sora`"It is a powerful virus with a very high 
mortality rate."`;
   waitForClick; clearText; marker; sound(`T6B015`); appendText; 
   //You
   You`"Tief...Blau..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tief Blau...?`;
   waitForClick; clearText; 
});
goto(lbl_000001b0).if(var_d9 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A virus that was totally different than the 
one Tsugumi had...?`;
   waitForClick; clearText; 
});
let lbl_000001b0;
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B016`); appendText; 
   //Kid
   Kid`"Coco, Coco!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid ran over to Coco's side, and held on 
to the table.`;
   waitForClick; clearText; marker; sound(`T6B017`); appendText; 
   //Kid
   Kid`"Coco, hold on!"`;
   waitForClick; clearText; marker; sound(`T6B018`); appendText; 
   //Kid
   Kid`"... No! Don't you die on me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He held onto Coco's arm as she lay there 
unconscious.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B019`); appendText; 
   //Kid
   Kid`"Open your eyes, Coco!"`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`T6B020`); appendText; 
   //Kid
   Kid`"Please! Get up!"`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid grabbed a hold of Coco's shoulders 
and shook her violently.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, cut it out! Stop it Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pried his hands off Coco, and pulled him 
away from her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B021`); appendText; 
   //Kid
   Kid`"What are you doing?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Jackass! Calm the hell down!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What do you think that's going to accomplish, 
huh!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B022`); appendText; 
   //Kid
   Kid`"But, Coco's gonna...she's gonna!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B023`); appendText; 
   //Kid
   Kid`"If we don't do anything, Coco's...going to 
die!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid groaned in despair.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Calm down. There's got to be something we can 
do..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't get crazy. Let's just calm down and 
think..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid somehow quieted down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He breathed heavily and glared at me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What do you think we should do, You?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B024`); appendText; 
   //You
   You`"Don't ask me...I have no idea."`;
   waitForClick; clearText; marker; sound(`T6B025`); appendText; 
   //You
   You`"Sora, isn't there anything we can do?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `YU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B026`); appendText; 
   //Sora
   Sora`"...If we take emergency measures, it is 
possible."`;
   waitForClick; clearText; marker; sound(`T6B027`); appendText; 
   //Sora
   Sora`"But in order to do this..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B028`); appendText; 
   //You
   You`"Whatever it takes! If we don't hurry, 
then...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stopped herself just short of screaming 
out.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B029`); appendText; 
   //You
   You`"Please Sora...you're the only one who can 
help us."`;
   waitForClick; clearText; marker; sound(`T6B030`); appendText; 
   //You
   You`"Please tell us what to do."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B031`); appendText; 
   //Sora
   Sora`"You'll need serum. A serum to lessen the 
symptoms."`;
   waitForClick; clearText; marker; sound(`T6B032`); appendText; 
   //You
   You`"Serum? What kind?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B033`); appendText; 
   //Sora
   Sora`"It's...I don't know if it is here or not..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B034`); appendText; 
   //You
   You`"W-what...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You ran up to the wall and opened up a shelf 
filled with medical tools.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You repeatedly asked Sora about the contents 
as she tore through them.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B035`); appendText; 
   //You
   You`"What about this!?"`;
   waitForClick; clearText; marker; sound(`T6B036`); appendText; 
   //Sora
   Sora`"No..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B037`); appendText; 
   //You
   You`"It isn't this one!?"`;
   waitForClick; clearText; marker; sound(`T6B038`); appendText; 
   //Sora
   Sora`"No, it is not..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B039`); appendText; 
   //You
   You`"How about this one!?"`;
   waitForClick; clearText; marker; sound(`T6B040`); appendText; 
   //Sora
   Sora`"Not that one either..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"......."`;
   waitForClick; clearText; marker; sound(`T6B041`); appendText; 
   //Sora
   Sora`"That one...isn't it either..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE07_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You dropped bottle after bottle of medicine 
onto the floor.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Many of them exploded into pieces when they 
hit.`;
   waitForClick; clearText; marker; sound(`T6B042`); appendText; 
   //You
   You`"What are we going to do...!?"`;
   waitForClick; clearText; marker; sound(`T6B043`); appendText; 
   //You
   You`"What should we do? Answer me, Sora...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B044`); appendText; 
   //Sora
   Sora`"I am sorry......"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Pipi
   Pipi`"........."`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   //Pipi
   Pipi`"*Whine*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi came over to me and whined softly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B045`); appendText; 
   //Sora
   Sora`"....Oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's face suddenly changed colors.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B046`); appendText; 
   //Sora
   Sora`"Pipi, bring that over here!! Quickly!!"`;
   waitForClick; clearText; marker; sound(`T6B047`); appendText; 
   //You
   You`"Eh!?"`;
   waitForClick; clearText; marker; sound(`T6B048`); appendText; 
   //Sora
   Sora`"That thing that Pipi has in his mouth! 
That's it!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I quickly snatched whatever it was out of 
Pipi's mouth and lifted it up.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"T-this!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B049`); appendText; 
   //You
   You`"It's the serum...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a transparent capsule with orange 
liquid inside of it.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How do we use it?"`;
   waitForClick; clearText; marker; sound(`T6B050`); appendText; 
   //Sora
   Sora`"Break off the tip, and inject the contents 
into Coco!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"O-okay!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You, do your magic!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You ran over to where I was, and grabbed the 
serum out of my hand.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco held out a shaking arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You silently inserted the syringe into her 
arm and administered the serum.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After a few minutes......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although it was gradual, Coco's breathing 
became more even, and the tremors in her body 
settled down.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B051`); appendText; 
   //Sora
   Sora`"It looks like it is taking effect."`;
   waitForClick; clearText; marker; sound(`T6B052`); appendText; 
   //Sora
   Sora`"Her condition has improved somewhat. The 
danger seems over for now..."`;
   waitForClick; clearText; marker; sound(`T6B053`); appendText; 
   //You
   You`"Thank goodness..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both You and Sora looked relieved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked as if she could cry.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU13ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid looked up and let out a big sigh of 
relief.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stared at Coco in silence.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey Pipi.."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who would've thought you'd find the serum.... 
When did you get this?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where'd you find it?"`;
   waitForClick; clearText; marker; sound(`PIPI_07`); appendText; 
   //Pipi
   Pipi`"*whine* *whiiiine*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi whined pitifully.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG09A1`, transition: 20 });
clock(`13:58`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone gathered around the "L-MRI" where 
Coco slept.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, tell us what you can about the Tief 
Blau virus."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's the first time I've ever heard of it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Does anyone else know anything about it?"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU03ADS`, name2: `KA08ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I asked the question, You, the Kid, 
Tsugumi, even Pipi... all shook their heads. `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You said it has a high mortality rate..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't have any idea when or how Coco got 
this do you?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`".........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't care if it is only a guess. Or, if 
you give me only the limited data you have."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I just want to know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco came down with this out of nowhere. It 
doesn't help the rest of us to be ignorant."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B054`); appendText; 
   //Sora
   Sora`"You are right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora got a strange expression on her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After thinking for a moment, she gave us a 
wholehearted explanation.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B055`); appendText; 
   //Sora
   Sora`"Alright. I will tell you everything I know 
about the Tief Blau virus."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A heavy silence descended upon the emergency 
room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Every once in a while the sensor from the 
"L-MRI" would sound out Coco's vital signs, 
the only noise to echo through the room.`;
   waitForClick; clearText; marker; sound(`T6B056`); appendText; 
   //Sora
   Sora`"Tief Blau, or TB was..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora started talking softly.`;
   waitForClick; clearText; marker; sound(`T6B057`); appendText; 
   //Sora
   Sora`"TB was developed at a research facility 
under LeMU. It is an extremely deadly virus."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B058`); appendText; 
   //You
   You`"At a research facility? Under us...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's eyes opened wide.`;
   waitForClick; clearText; marker; sound(`T6B059`); appendText; 
   //Sora
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T6B060`); appendText; 
   //Sora
   Sora`"There's an installation called IBF, right 
below us."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B061`); appendText; 
   //You
   You`"IBF..."`;
   waitForClick; clearText; marker; sound(`T6B062`); appendText; 
   //Tsugumi
   Tsugumi`"I knew it..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi frowned.`;
   waitForClick; clearText; marker; sound(`T6B063`); appendText; 
   //Tsugumi
   Tsugumi`"Well, it looks like this AI's programming CAN 
change after all. If the situation gets 
critical enough...we can actually get 
information we need..."`;
   waitForClick; clearText; marker; sound(`T6B064`); appendText; 
   //Tsugumi
   Tsugumi`"I guess it isn't in your programming to keep 
a secret when someone's life is on the line."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B065`); appendText; 
   //Tsugumi
   Tsugumi`"I'm sorry. Please continue Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After shaking her head lightly, Tsugumi let 
out a sigh.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B066`); appendText; 
   //Sora
   Sora`"Okay..."`;
   waitForClick; clearText; marker; sound(`T6B067`); appendText; 
   //Sora
   Sora`"The management company that built LeMU is 
Leiblich Pharmaceutical. Its research 
facility is IBF."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `IMG02B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`357 feet beneath LeMU there are thermal 
seafloor vents.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Living there are special microbes, which 
cannot be found in any other environment and 
Leiblich Pharmaceutical created a research 
institute in order to study them.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It is called 'IBF'—`;
   delay(30); waitForClick; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; 
   Narr`Institute für Biologische Forschung.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Translated it means the Institute for 
Biological Research.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`LeMU and the research facility...of the two, 
the first to be built was the research 
facility.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Building a theme park was apparently just a 
front.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The researchers at IBF were listed as 
managers of LeMU and were able to come and go 
as they pleased.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That way, nobody would suspect that there was 
actually a research facility.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At the same time, they could also get 
much-needed funds for research.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`If they set up a successful theme park, they 
could get pretty much all the money they 
needed to run the research facility...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`So Leiblich Pharmaceutical continued to carry 
out research into bacteria and viruses on the 
bottom of the ocean...357 feet under water.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
bgload({ name: `BG09A1`, transition: 20 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B068`); appendText; 
   //Sora
   Sora`"The existence of IBF is highly confidential."`;
   waitForClick; clearText; marker; sound(`T6B069`); appendText; 
   //Sora
   Sora`"Only a select number of people know about it 
at Leiblich, even at LeMU..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B070`); appendText; 
   //Sora
   Sora`"IBF and LeMU are controlled by separate 
computer systems..."`;
   waitForClick; clearText; marker; sound(`T6B071`); appendText; 
   //Sora
   Sora`"Even I am only given limited information."`;
   waitForClick; clearText; marker; sound(`T6B072`); appendText; 
   //Sora
   Sora`"I only became sure of IBF's existence after 
connecting together fragments of information 
from this accident...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; sound(`T6B073`); appendText; 
   //You
   You`"Anyway, there is a strange and deadly virus 
called TB they're doing research about at 
some research center under LeMU."`;
   waitForClick; clearText; marker; sound(`T6B074`); appendText; 
   //You
   You`"That is probably in order to find a cure for 
TB, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B075`); appendText; 
   //Sora
   Sora`"Yes, you are probably correct. In addition..."`;
   waitForClick; clearText; marker; sound(`T6B076`); appendText; 
   //Sora
   Sora`"There is a medical center there that is far 
superior to this one."`;
   waitForClick; clearText; marker; sound(`T6B077`); appendText; 
   //Sora
   Sora`"At least from the information I can gather 
from LeMMIH's database..."`;
   waitForClick; clearText; marker; sound(`T6B078`); appendText; 
   //Sora
   Sora`"It appears that they have a new type of 
'High-pressure Oxygen Treatment Device' 
there..."`;
   waitForClick; clearText; marker; sound(`T6B079`); appendText; 
   //Sora
   Sora`"And if we can treat her with that, her 
leukocyte, er, white blood cell activity 
should increase..."`;
   waitForClick; clearText; marker; sound(`T6B080`); appendText; 
   //Sora
   Sora`"That should ease Coco's condition somewhat."`;
   waitForClick; clearText; marker; sound(`T6B081`); appendText; 
   //Sora
   Sora`"We might even encounter more of the serum 
that is effective in stabilizing the 
symptoms.... the orange one that we found 
previously."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"IBF, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can we go there? How do we get there?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B082`); appendText; 
   //Kid
   Kid`"W-wait...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid interrupted with a shout.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B083`); appendText; 
   //Kid
   Kid`"Wait! This is crazy..."`;
   waitForClick; clearText; marker; sound(`T6B084`); appendText; 
   //Kid
   Kid`"Why would Coco suddenly come down with TB?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B085`); appendText; 
   //Kid
   Kid`"It doesn't make sense that she'd come down 
with that awful virus all of a sudden..."`;
   waitForClick; clearText; marker; sound(`T6B086`); appendText; 
   //Kid
   Kid`"You don't think that's strange?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B087`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah. But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B088`); appendText; 
   //Tsugumi
   Tsugumi`"Even if we want to help Coco, there isn't any 
equipment here to do that."`;
   waitForClick; clearText; marker; sound(`T6B089`); appendText; 
   //Tsugumi
   Tsugumi`"The only lead we have for treating her is 
that research facility - IBF."`;
   waitForClick; clearText; marker; sound(`T6B090`); appendText; 
   //Tsugumi
   Tsugumi`"We'll have to look for reasons afterward."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B091`); appendText; 
   //Tsugumi
   Tsugumi`"All we can do is trust what Sora tells us 
for now."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO05ADM`, name2: `TU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B092`); appendText; 
   //Tsugumi
   Tsugumi`"She isn't good enough at lying to make up 
something like this, right?"`;
   waitForClick; clearText; marker; sound(`T6B093`); appendText; 
   //Tsugumi
   Tsugumi`"I'm sorry for doubting you earlier..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B094`); appendText; 
   //Tsugumi
   Tsugumi`"I believe what Sora's telling us."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi smiled slightly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B095`); appendText; 
   //Sora
   Sora`"...Thank you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora nodded sincerely.`;
   waitForClick; clearText; marker; sound(`T6B096`); appendText; 
   //You
   You`"Yeah, I believe her too."`;
   waitForClick; clearText; marker; sound(`T6B097`); appendText; 
   //You
   You`"We can't just sit back twiddling our thumbs."`;
   waitForClick; clearText; marker; sound(`T6B098`); appendText; 
   //You
   You`"Let's consider the best option."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at You and Sora and nodded.`;
   waitForClick; clearText; marker; sound(`T6B099`); appendText; 
   //You
   You`"Does that sound good to you? Kid?"`;
   waitForClick; clearText; marker; sound(`T6B100`); appendText; 
   //Kid
   Kid`"Y-yeah. Okay."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright, then..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So it's decided then. We're going to IBF."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's the only chance we've got at saving 
Coco."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B101`); appendText; 
   //Sora
   Sora`"However, in order to get to IBF, we have to 
get through HIMMEL... And HIMMEL's door isn't 
opening."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't care, we're going! We don't have any 
other options. Show me the way."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It might not work..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But we don't know that unless we try, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey Kid...give me a hand!"`;
   waitForClick; clearText; marker; sound(`T6B102`); appendText; 
   //Kid
   Kid`"O-okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I picked up Coco's inert body and carried her 
piggyback.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG28A3R`, transition: 20 });
playBGM({ num: 11, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We went down the lift and to the cramped 
emergency corridor.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi and the Kid supported Coco, who was 
on my back, from both sides.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora and Pipi went on ahead. You brought 
along a first-aid kit just in case.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were headed for Dritte Stock some 17 meters 
below...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG26B1R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We made it to the third floor.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `EV_CO08B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We ran as quickly as we could go.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To where the locked door was waiting for us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Using all the strength we had.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And all the power of our prayers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We flew forward.`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B1`, transition: 20 });
stopSFX()
setSceneTitle({ index: 41 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Here we are..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all stopped in front of the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I briefly put Coco down, and leaned her up 
against the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid went up to Coco, and lent her his 
shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'HIMMEL'—`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door that wouldn't open.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, I'm just asking to make sure..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B103`); appendText; 
   //Sora
   Sora`"What...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What does HIMMEL mean?"`;
   waitForClick; clearText; marker; sound(`T6B104`); appendText; 
   //Sora
   Sora`"It means 'Sky' in German."`;
   waitForClick; clearText; marker; sound(`T6B105`); appendText; 
   //Sora
   Sora`"Or 'Heaven'..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Heaven, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`They sure had given it an ironic name.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So...the question was, how in the world were 
we going to open that door?`;
   waitForClick; 
});
varop(`(28 0a a4) bb := (00) 0`);
varop(`(28 0a a4) d0 := (00) 1`);
varop(`(28 0a a4) d1 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 1`);
let lbl_000008eb;
choice(
   cond(`[cond (28 0a a4) d0 14 (00)]Ask Sora.`, var_d0)
   cond(`[cond (28 0a a4) d1 14 (00)]Ask You.`, var_d1)
   cond(`[cond (28 0a a4) d2 14 (00)]Ask Tsugumi.`, var_d2)
);
switch (choice) {
   case 0: goto(lbl_00000915);
   case 1: goto(lbl_00000b96);
   case 2: goto(lbl_00000d3c);
}
let lbl_00000915;
varop(`(28 0a a4) b8 += (00) 1`);
varop(`(28 0a a4) d0 := (00) 0`);
varop(`(28 0a a4) bb += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Can you tell me what the access code to the 
electronic lock is?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked Sora again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B106`); appendText; 
   //Sora
   Sora`"It is unknown to me. It was only given to 
the IBF researchers, and exclusive staff."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Even a hint would help..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B107`); appendText; 
   //Sora
   Sora`"I will try to find what it is!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as she said this, a transparent 
keyboard and console appeared in front of her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B108`); appendText; 
   //Sora
   Sora`"Accessing the security block for LeMMIH's 
system..."`;
   waitForClick; clearText; marker; sound(`T6B109`); appendText; 
   //Sora
   Sora`"Bypassing HIMMEL's protection key."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The buttons on the electronic lock started to 
flash.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B110`); appendText; 
   //Sora
   Sora`"LeMMIH, please listen to me..."`;
   waitForClick; clearText; marker; sound(`T6B111`); appendText; 
   //Sora
   Sora`"Please don't fight me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was tapping furiously on the keyboard, 
battling with the system that was locking the 
door.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B112`); appendText; 
   //Sora
   Sora`"Ah!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Snap!`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked to me almost as if sparks were 
flying in the air...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's hands flew across the virtual keyboard.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B113`); appendText; 
   //Sora
   Sora`"Agh...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Unfazed, she continued to type.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crack!`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`SNAP!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sparks violently scattered out one after 
another.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_03`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreenHard();
showTextbox();
text(() => {
   marker; sound(`T6B114`); appendText; 
   //Sora
   Sora`"Ow!"`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her RSD image wavered, and the virtual 
keyboard disappeared.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, are you okay!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B115`); appendText; 
   //Sora
   Sora`"I'm sorry, I was denied access..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her image continued to flicker for a while.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
goto(lbl_00000eb7).if(var_bb > 1);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next thing to try was...`;
   waitForClick; 
});
goto(lbl_000008eb);
let lbl_00000b96;
varop(`(28 0a a4) d1 := (00) 0`);
varop(`(28 0a a4) bb += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey You, is there any way to get around this 
lock that you know of?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh? Where'd You go?"`;
   waitForClick; clearText; marker; sound(`T6B116`); appendText; 
   //You
   You`"Takeshi! Outta the way!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Eh?"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Turning toward the voice coming from behind, 
a few yards away I saw You throw down the 
first-aid kit she had been carrying.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Uwwaaaah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She immediately came hurtling toward me as if 
possessed.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B117`); appendText; 
   //You
   You`"Wwoooooooooooooooaaaah!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked furious.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stumbled back away from the door.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B118`); appendText; 
   //You
   You`"Aaaaaiiiiii!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_04`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`——CRASH!`;
   waitForClick; clearText; marker; appendText; 
   Narr`With a perfect flying drop-kick, she threw 
open the panel to the electronic lock.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-w-what are you doing! This isn't the time 
to be goofing off!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B119`); appendText; 
   //You
   You`"If it won't open any other way, I'm going to 
break it down!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shouted, as she leaned over panting.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's a little extreme..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, how about it? Does it look like it's 
going to open?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B120`); appendText; 
   //You
   You`"Aaagh! It won't budge an inch!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Neither the door, nor the panel had changed 
at all.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T6B121`); appendText; 
   //You
   You`"Ai! Ya! Hai! Wah! WachoO!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You began hitting the lock with a renewed 
vigor, uttering strange noises.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But, all the lock did was make error sounds, 
and ask politely for her to re-enter the 
password.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B122`); appendText; 
   //You
   You`"*sigh*..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B123`); appendText; 
   //You
   You`"Ouch..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, You ended up with a sprained 
finger and went back to the first-aid kit.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_00000eb7).if(var_bb > 1);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next I...`;
   waitForClick; 
});
goto(lbl_000008eb);
let lbl_00000d3c;
varop(`(28 0a a4) b7 += (00) 1`);
varop(`(28 0a a4) d2 := (00) 0`);
varop(`(28 0a a4) bb += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, do you think there's a way to open 
it up?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B124`); appendText; 
   //Tsugumi
   Tsugumi`"What are you talking about, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T6B125`); appendText; 
   //Tsugumi
   Tsugumi`"I'm wracking my brains thinking about the 
same thing."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, oooh...yeah, right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After thinking for a bit, Tsugumi asked Sora a 
question.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU18ADM`, name2: `SO05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B126`); appendText; 
   //Tsugumi
   Tsugumi`"Do you know what kind of process this door 
goes through when it opens?"`;
   waitForClick; clearText; marker; sound(`T6B127`); appendText; 
   //Sora
   Sora`"Okay, let me see..."`;
   waitForClick; clearText; marker; sound(`T6B128`); appendText; 
   //Sora
   Sora`"After the correct keys are input, a lever 
embedded inside the hatch should start to 
raise."`;
   waitForClick; clearText; marker; sound(`T6B129`); appendText; 
   //Sora
   Sora`"As that lever turns, the lock on the door is 
released."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B130`); appendText; 
   //Sora
   Sora`"However the lever is nothing more than an 
ornament now. It is turned automatically using 
electricity...and the motor is usually locked 
in place."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B131`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah...I suppose they designed it so that you 
couldn't open it up during an emergency on 
purpose."`;
   waitForClick; clearText; marker; sound(`T6B132`); appendText; 
   //Tsugumi
   Tsugumi`"In that case—"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She pulled out a flat-head screwdriver.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where'd she get that from...?)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B133`); appendText; 
   //Tsugumi
   Tsugumi`"If we can get that lever off, maybe we can 
open this up manually."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She began to insert the tip of the 
screwdriver into the gap between the door's 
panel lines.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B134`); appendText; 
   //Tsugumi
   Tsugumi`"Haaa!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi jammed the screwdriver in with all her 
might.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She tried to dig out the lever buried in the 
hatch by force.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The alloy screwdriver crushed like a piece of 
candy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lever budged slightly towards the surface 
of the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slam!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The screwdriver bent into two equal parts 
from it's handle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the lever snapped back into place.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T6B135`); appendText; 
   //Tsugumi
   Tsugumi`"There's nothing I can do."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi threw the bent screwdriver on the 
floor.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_00000eb7).if(var_bb > 1);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What next...`;
   waitForClick; 
});
goto(lbl_000008eb);
let lbl_00000eb7;
varop(`(28 0a a4) bb := (00) 0`);
varop(`(28 0a a4) d0 := (00) 0`);
varop(`(28 0a a4) d1 := (00) 0`);
varop(`(28 0a a4) d2 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Damn! What are we going to do!?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   //Pipi
   Pipi`"*whine*..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO08AWM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco was being supported by the Kid. She 
couldn't stand by herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She soon was hunched over on the floor.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I tried pulling her up again but...her face 
quickly drained of all color.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This is bad...if we don't...get in there 
quickly...!)`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T6B136A`); appendText; 
   //Announcement
   Announcement`"Öffnen Sie `;
   waitForSound; sound(`T6B136B`); appendText; 
   Narr`die Tür von HIMMEL"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly a voice that I hadn't heard before 
sounded from the corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's it saying?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B137`); appendText; 
   //Sora
   Sora`"Someone is trying to access LeMMIH's system!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora flashed open her eyes and shouted.`;
   waitForClick; clearText; marker; sound(`T6B138`); appendText; 
   //Sora
   Sora`"From inside the room...from a terminal inside 
HIMMEL!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
hideTextbox();
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The access indicator light for the electronic 
lock turned green.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The hatch's lever raised and turned 
automatically...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door opened suddenly....`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) ce := (00) 0`);
monoColorOverlay({ interval: 4, color: WHITE });
tweenZoom({ x: 320, y: 197, hx: 200, hy: 150, duration: 20 });
playSFX({ name: `SE00_04`, a1: 1, volume: 100 });
waitForSFX();
removeBG({ mode: WHITE, transition: 62 });
playBGM({ num: 15, volume: 100 });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 0, y: 0, hx: 800, hy: 600 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
clock(`14:19`);
varop(`(28 0a a4) ce := (00) 0`);
tweenZoom({ x: 400, y: 0, hx: 800, hy: 600, duration: 120 });
tweenZoom({ x: 240, y: 0, hx: 800, hy: 600, duration: 120 });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Stagnant air poured out of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason the humidity felt like it was 
lower than outside. The air-conditioning was 
humming quietly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was white...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was pure white inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whiteness of the wall and floor was 
emphasized by the brightness of the lighting 
and seemed to leap out at us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`HIMMEL - It didn't necessarily seem like a 
mistake to have named the room heaven.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were nameplates on the machines with 
'HIMMEL' written on them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that we were in the computer 
control room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey! There's someone here..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Did he open up the door just now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a single person in the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was a man who appeared to be in his 40's, 
dressed in a white lab coat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood was coming from his mouth and he had 
passed out at a console.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey mister! Are you alright!?"`;
   waitForClick; clearText; marker; appendText; 
   //??
   Unk`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The man didn't reply to me. He just lay there 
motionless.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who is this guy...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, do you have any idea who this is?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B139`); appendText; 
   //Sora
   Sora`"No, I am unable to verify his ID..."`;
   waitForClick; clearText; marker; sound(`T6B140`); appendText; 
   //Sora
   Sora`"But judging from the way he is dressed, it 
is safe to assume he was a researcher at the 
IBF Facility."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I put my hands on his shoulder and raised him 
into a sitting position.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked over his white clothing to see if he 
had any name tags, or other way to determine 
his name.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he didn't have any ID card, or nameplate 
to check.`;
   waitForClick; clearText; marker; sound(`T6B141`); appendText; 
   //Researcher
   Researcher`"Uuugh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, are you one of the staff from the 
research facility?"`;
   waitForClick; clearText; marker; sound(`T6B142`); appendText; 
   //Researcher
   Researcher`"Y-yeah...that's right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Breathing faintly, the researcher replied.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He seemed to be unable to open his eyes, and 
searched for me by my voice.`;
   waitForClick; clearText; marker; sound(`T6B143`); appendText; 
   //Researcher
   Researcher`"Doesn't seem like you're...here to rescue 
me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He grabbed onto me with shaking hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were covered in blood...`;
   waitForClick; clearText; marker; sound(`T6B144`); appendText; 
   //Researcher
   Researcher`"So there were still people in LeMU...and 
it's been six days since..."`;
   waitForClick; clearText; marker; sound(`T6B145`); appendText; 
   //Researcher
   Researcher`"Ha, ha, ha, what a surprise.... *Gagh*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood trickled from his mouth, and he smiled, 
wryly.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey! Don't strain yourself. You don't have 
to talk!"`;
   waitForClick; clearText; marker; sound(`T6B146`); appendText; 
   //Researcher
   Researcher`"I'm so sorry...it's all our fault..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What happened? Did something happen down 
there?"`;
   waitForClick; clearText; marker; appendText; 
   //Researcher
   Researcher`"........."`;
   waitForClick; clearText; marker; sound(`T6B147`); appendText; 
   //Researcher
   Researcher`"But, why all this..."`;
   waitForClick; clearText; marker; sound(`T6B148`); appendText; 
   //Researcher
   Researcher`"This..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that he was silent.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey! Hey! Hang in there!"`;
   waitForClick; clearText; marker; appendText; 
   //Researcher
   Researcher`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook his shoulders, but he didn't reply.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B149`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, cut it out, you're shaking him too 
hard."`;
   waitForClick; clearText; marker; sound(`T6B150`); appendText; 
   //Tsugumi
   Tsugumi`"He's unconscious. Just leave him alone for 
now."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"O-okay..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B151`); appendText; 
   //Tsugumi
   Tsugumi`"We'll...we'll have to bring him with us."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered what was going on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...Wait, more importantly, we've got to 
hurry.) `;
   waitForClick; clearText; marker; appendText; 
   Narr`(I don't have a clue what's going on, but I 
can't worry about that now.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(We've got to get Coco to IBF right away...)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You, who had been waiting at the entrance to 
HIMMEL, went inside with Pipi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO08AWS`, name2: `KA08ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid followed behind, carrying Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door had an electronic lock on it, so we 
left it open.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B152`); appendText; 
   //Sora
   Sora`"Everyone, at the far end of this room is 
another room, can you see it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`T6B153`); appendText; 
   //Tsugumi
   Tsugumi`"Yes, I see it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all nodded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a room on the other side of the 
glass in front of us.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B154`); appendText; 
   //Sora
   Sora`"That is the compression chamber for IBF."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora straightened up and explained the 
situation without emotion.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B155`); appendText; 
   //Sora
   Sora`"Judging from my incomplete data..."`;
   waitForClick; clearText; marker; sound(`T6B156`); appendText; 
   //Sora
   Sora`"IBF is enclosed in higher-pressure gas than 
LeMU. The IBF area is set to what is known as 
'saturated diving specifications'."`;
   waitForClick; clearText; marker; sound(`T6B157`); appendText; 
   //Sora
   Sora`"This type of area is also probably more 
suitable for research with bacteria.... The 
atmospheric pressure of IBF is actually at 
about 12.5 atmospheres."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B158`); appendText; 
   //Sora
   Sora`"I want all of you to enter that room."`;
   waitForClick; clearText; marker; sound(`T6B159`); appendText; 
   //Sora
   Sora`"And after you spend about one hour in the 
compression chamber, you'll take the access 
elevator down to IBF."`;
   waitForClick; clearText; marker; sound(`T6B160`); appendText; 
   //Sora
   Sora`"And I should tell you this as a precaution, 
but..."`;
   waitForClick; clearText; marker; sound(`T6B161`); appendText; 
   //Sora
   Sora`"You will not be able to retrace your steps 
easily from this point on. Please give this 
due consideration."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ahhh..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We can't go back...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We've got to make a decision.`;
   waitForClick; 
});
choice(
   `Alright, we're going!`
   `Wait just a second`
);
switch (choice) {
   case 0: goto(lbl_000011a7);
   case 1: goto(lbl_000011bb);
}
let lbl_000011a7;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright, we're going!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at everyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, the Kid, Tsugumi, Sora and Pipi...all 
nodded.`;
   waitForClick; clearText; 
});
goto(lbl_0000123f);
let lbl_000011bb;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, wait just a second!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As soon as I said that Tsugumi glared needles 
at me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B162`); appendText; 
   //Tsugumi
   Tsugumi`"What's the matter, Takeshi? You aren't 
chickening out now, are you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, that's not it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If we're going to spend an hour stuffed into 
that little room, I just wanted to make sure 
everyone was ready."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You know, check to see if everyone had gone 
to the bathroom,"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Brushed their teeth, taken a shower."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And if you're going to bring a snack, make 
sure it's reasonable..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO07ADM`, name2: `TU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B163`); appendText; 
   //Tsugumi
   Tsugumi`"*sigh*..."`;
   waitForClick; clearText; marker; sound(`T6B164`); appendText; 
   //Sora
   Sora`"*sigh*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard two rather large sighs.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `TU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B165`); appendText; 
   //Tsugumi
   Tsugumi`"Saying something like that at a time like 
this...you really are a moron."`;
   waitForClick; clearText; marker; sound(`T6B166`); appendText; 
   //Sora
   Sora`"Takeshi, it will only take one hour. I'm sure 
everyone can wait."`;
   waitForClick; clearText; marker; sound(`T6B167`); appendText; 
   //Sora
   Sora`"More importantly, we need to hurry, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that everyone was tired of my jokes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had just wanted to put everyone at ease...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, okay, I'm sorry."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"So let's get moving then!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I said this again, You, the Kid, 
Tsugumi, Sora, and Pipi...all nodded in unison.`;
   waitForClick; clearText; 
});
let lbl_0000123f;
multifgload3({ name1: `YU18ADS`, name2: `CO08AWS`, name3: `KA08ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid and You held the unconscious Coco 
between them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I picked up the researcher, and 
Pipi took up the rear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone lined up at the transparent sliding 
door on the far side of the room.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora used the control panel on a terminal to 
open it up.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All of us entered the room together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A single panel of reinforced glass lay in 
between the control room and the compression 
chamber.`;
   waitForClick; clearText; marker; appendText; 
   Narr`More precisely, a chamber was set in the 
middle of the room...had been constructed 
there.`;
   waitForClick; clearText; 
});
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We brought Coco and the researcher into the 
room first and sat them down on chairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both of their breathing was ragged, and they 
looked in pain. Their faces were extremely 
pale and sickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We needed to hurry...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hated to waste an hour here.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU03ADS`, name2: `KA08ADS`, name3: `TU15ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You, the Kid, Tsugumi and Pipi all stood in 
the open space available.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With everyone in there it was fairly crowded.`;
   waitForClick; clearText; marker; sound(`T6B168`); appendText; 
   //Sora
   Sora`"Once the compression is completed, the door 
on the far side should open, and you can 
enter the elevator."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason Sora didn't enter the room, 
but spoke to us from in front of the entrance.`;
   waitForClick; clearText; marker; sound(`T6B169`); appendText; 
   //Sora
   Sora`"I will expedite the compression process. It 
may be a little uncomfortable, but please 
bear with it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And saying this, Sora went to close the door.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Sora, what's wrong? You aren't coming with 
us?"`;
   waitForClick; clearText; marker; sound(`T6B170`); appendText; 
   //Sora
   Sora`"Uh, no, I..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Come on, let's get started. What are you 
waiting for?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I casually reached out toward Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew I couldn't grab her, but I did it 
anyway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_03`, a1: 0, volume: 100 });
varop(`(28 0a a2) 41 := (00) 13`);
varop(`(28 0a a2) 42 := (00) 7`);
varop(`(28 0a a2) 50 := (00) 144`);
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`T6B171`); appendText; 
   //Sora
   Sora`"Kyaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As soon as I tried to touch her, sparks flew 
into the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt as though a shock had gone through me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A transparent wall suddenly appeared in front 
of the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a red wall of flame...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What!?"`;
   waitForClick; clearText; 
});
hideTextbox();
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Alarmed, I drew back my hand, and the door 
closed.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora! Sora! What was...?"`;
   waitForClick; clearText; marker; sound(`T6B172`); appendText; 
   //Sora
   Sora`"From this point on, this is the jurisdiction 
of a different computer system."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard Sora's voice talking to us calmly 
over the speaker of the compression chamber's 
intercom.`;
   waitForClick; clearText; marker; sound(`T6B173`); appendText; 
   //Sora
   Sora`"I am but a single part of the LeMMIH system, 
therefore...I am unable to go to IBF. I do 
not have the authority to access the area."`;
   waitForClick; clearText; marker; sound(`T6B174`); appendText; 
   //Sora
   Sora`"I am sorry, but I will have to see you off."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wall of fire had vanished.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were in the compression chamber shut off 
from the rest of the world.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of pumping gas, which was slowly 
raising the air pressure, could be heard 
throughout the chamber.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey...everyone take out your voice 
converters. They get in the way when you're 
adjusting to the pressure."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone did as I said, and removed their 
voice alternators.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took out Coco's, myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked the researcher, but it didn't seem 
he was wearing any.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hardly anyone said a word.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were all waiting for the time to pass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora could be seen outside of the chamber's 
window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't move, only stood and watched us.`;
   waitForClick; clearText; 
});
clock(`15:32`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_18`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lock from the door on the far side of the 
chamber clicked, and released.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a subtle change in pressure and the 
lift down to IBF opened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all filed into it one by one.`;
   waitForClick; clearText; marker; sound(`T6B175`); appendText; 
   //Sora
   Sora`"Everyone...take care."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could hear her voice from the speaker on 
the other side of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But we couldn't see her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if I would ever see her up close 
again...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cocking my head to one side, I thrust the 
voice alternators back in my ears.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
stopSFX()
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone got aboard the lift.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And as soon as the doors closed, the elevator 
started sliding down.`;
   waitForClick; clearText; marker; sound(`T6B176`); appendText; 
   //Announcement
   Announcement`"Depth 210 feet..."`;
   waitForClick; clearText; marker; sound(`T6B177`); appendText; 
   //Announcement
   Announcement`"Depth 240 feet..."`;
   waitForClick; clearText; marker; sound(`T6B178`); appendText; 
   //Announcement
   Announcement`"Depth 270 feet..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`What could be below Heaven?`;
   waitForClick; clearText; marker; appendText; 
   Narr`More heaven, or...`;
   waitForClick; clearText; marker; sound(`T6B179`); appendText; 
   //Announcement
   Announcement`"Depth 357 feet"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door to the elevator opened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The passage extended in two directions from 
the elevator room. I went in one of these.`;
   waitForClick; clearText; 
});
bgload({ name: `BG33A8`, transition: 10 });
setSceneTitle({ index: 42 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everything was totally dark, and I could 
hardly tell where I was headed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fearfully I took a step forward.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_11`, a1: 0, volume: 90 });
bgload({ name: `BG33A4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And suddenly, as if someone had noticed our 
arrival, the lights went on in the room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is someone there?"`;
   waitForClick; clearText; marker; sound(`T6B180`); appendText; 
   //You
   You`"Umm, I think they just turned on by 
themselves..."`;
   waitForClick; clearText; marker; sound(`T6B181`); appendText; 
   //Tsugumi
   Tsugumi`"The sensors reacted, and the computer 
activated the lights?"`;
   waitForClick; clearText; marker; sound(`T6B182`); appendText; 
   //Kid
   Kid`"I'm not sure, but...it's possible."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that there was a pool where a small 
submarine could dock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pool was a two-layer structure, but there 
was no sign that seawater would flow in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt a little hot in there, but it seemed 
as if the air-conditioning was still working 
properly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perhaps the place was even more comfortable 
than the flooded Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...there was no sign of anyone.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, let's get to where we have to go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We opened a watertight door at the other side 
of the room and continued deeper into the 
installation.`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A2`, transition: 10 });
playSFX({ name: `SE03_11`, a1: 0, volume: 90 });
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A passageway the same size as LeMU's emergency 
corridors...no, maybe even smaller led off 
into the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason the whole place seemed 
colder, less alive than the structure above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we continued down the corridor, lights 
would go on automatically, a few feet in 
front of us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Well...it certainly seems computer 
controlled).`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we continued moving, the lights followed 
us, lighting up the only the areas around us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The corridor branched off in a few 
directions, but all of them ended at 
watertight doors that were closed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if IBF had flooded except for one 
part?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Anyway, the number of areas that we could 
enter was limited.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Luckily we found the examination room, right 
away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I quickly turned the handle and opened the 
door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG34A2`, transition: 10 });
playSFX({ name: `SE03_11`, a1: 0, volume: 90 });
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and the Kid laid Coco down on a nearby 
table.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I put the researcher down in a 
chair, slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were a few ordinary beds in the 
examination room, and the same kind of 
'L-MRI' that we had found in LeMU's infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were numerous medical instruments that 
looked like things that you might only see in 
a science fiction movie.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what in the world they were for?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, You? Where is that 'high-pressure 
oxygen' thing that Sora was talking about?"`;
   waitForClick; clearText; marker; sound(`T6B183`); appendText; 
   //You
   You`"H-how should I know...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, what should we do?"`;
   waitForClick; clearText; marker; sound(`T6B184`); appendText; 
   //Tsugumi
   Tsugumi`"Well, we'll have to look for it. None of us 
knows a thing about this place."`;
   waitForClick; clearText; marker; sound(`T6B185`); appendText; 
   //Researcher
   Researcher`"Gagh.... W-wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The researcher coughed as he spoke.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey, don't move! Are you okay!?"`;
   waitForClick; clearText; marker; sound(`T6B186`); appendText; 
   //Researcher
   Researcher`"I've been better...but at least I'm alive..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With his eyes closed, he raised his hands 
weakly in response.`;
   waitForClick; clearText; marker; sound(`T6B187`); appendText; 
   //Researcher
   Researcher`"This smell...this is IBF?"`;
   waitForClick; clearText; marker; sound(`T6B188`); appendText; 
   //Researcher
   Researcher`"So I'm back where I started... *cough*"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, you WERE working here...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well then, there's something I want to ask 
you. We're looking for something called a 
'high-pressure oxygen treatment device.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We've come as far as the examination room, 
but we don't have a clue what to look for. 
Can you help us? Please!"`;
   waitForClick; clearText; marker; sound(`T6B189`); appendText; 
   //Researcher
   Researcher`"Oxygen treatment...yeah, you're looking for 
the pods."`;
   waitForClick; clearText; marker; sound(`T6B190`); appendText; 
   //Researcher
   Researcher`"There should be some alloy capsules, with a 
mat set inside of them."`;
   waitForClick; clearText; marker; sound(`T6B191`); appendText; 
   //Researcher
   Researcher`"They look like a bunch of cylinders stuck to 
a pillar.... You see them?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO09B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, they're right in front of me."`;
   waitForClick; clearText; marker; sound(`T6B192`); appendText; 
   //Researcher
   Researcher`"That's them... *cough*"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hang in there! ...We found them. So, don't 
waste your energy talking anymore, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`New blood appeared on the researcher's closed 
hand, as he wiped his mouth.`;
   waitForClick; clearText; marker; sound(`T6B193`); appendText; 
   //Researcher
   Researcher`"Just take a look at the manual...they should 
be...easy to operate."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, I gotcha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The strength left the researcher's hand...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just before he collapsed, I grabbed onto his 
shoulder to support his body.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's put him in a pod. And Coco too..."`;
   waitForClick; clearText; marker; sound(`T6B194`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I got on either side of the 
researcher and supported him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We brought him over to where the three pods 
were.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I pressed the button on the side of one, 
its hatch opened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put him down gently inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I pressed the button again, the capsule 
pod closed again silently.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO09A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid and You laid Coco down in another pod.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hatch to the pod closed soon after.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO09C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Did you find the manual?"`;
   waitForClick; clearText; marker; sound(`T6B195`); appendText; 
   //You
   You`"Yeah. This is the control panel..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You started operating a terminal a short 
distance away.`;
   waitForClick; clearText; marker; sound(`T6B196`); appendText; 
   //You
   You`"High-pressure oxygen treatment...set..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The screens on the monitors attached to the 
tubes flickered, and both of the pods seemed 
to be functioning normally.`;
   waitForClick; clearText; marker; sound(`T6B197`); appendText; 
   //You
   You`"That should do it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The condition of the people inside the pods 
was monitored and appeared on the control 
panel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood pressure, heart rate, respiration rate...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The expressions on their faces were even 
visible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I watched them for a few minutes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and the researcher whose name we didn't 
know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a slow process, but they both seemed 
to be gradually returning to normal.`;
   waitForClick; clearText; 
});
bgload({ name: `BG34A1`, transition: 20 });
multifgload3({ name1: `YU17ADS`, name2: `KA08ADS`, name3: `TU11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T6B198`); appendText; 
   //You
   You`"I'm so relieved..."`;
   waitForClick; clearText; marker; sound(`T6B199`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah...tell me about it."`;
   waitForClick; clearText; marker; sound(`T6B200`); appendText; 
   //Kid
   Kid`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Looks like we made it in time."`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   //Pipi
   Pipi`"*Woof*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We let out a collective sigh of relief.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed as if we had escaped the worst, for 
the moment.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Well......"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We don't have time to hang around, you know?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't know if the situation here at IBF 
was any different than LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There might be other survivors, or a way out, 
even communications...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could possibly even find information about 
TB.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was best to search as much as time would 
allow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone agreed, so Tsugumi, the Kid and I 
went looking around IBF.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had the most medical knowledge, so she 
stayed in the examination room with Pipi, to 
look after Coco and the researcher.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
bgload({ name: `BG35A1`, transition: 20 });
playBGM({ num: 4, volume: 100 });
clock(`15:54`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Because we were unfamiliar with the area the 
three of us set out together to look around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We walked all around IBF.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Since there were only a few places, there 
wasn't much to see.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Almost all of the corridors had been blocked 
off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there were many doors that didn't open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I tried forcing open one of the doors...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A terrible smell started pouring out, so I 
hurriedly closed it again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From what I had seen during the brief moment 
the door was open...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A few researchers covered in blood had died 
clawing at their throats.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't really want to think of what had 
happened there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't hard to imagine that the situation 
had been the same or worse than what happened 
at LeMU.`;
   waitForClick; clearText; 
});
bgload({ name: `IMG02B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Another room was empty of people and there 
were a few computer terminals there.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Operating the terminals, we were able to scan 
through some of the information left there.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`There was some information about Tief Blau—`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Name : Tief Blau.`;
   waitForClick; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; 
   Narr`Symptoms: Fever, chills, headache, aching 
muscles, loss of appetite, vomiting, 
diarrhea, stomach pains, etc.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`As it progresses, the patient begins to 
hemorrhage from the mouth, gums, conjunctiva, 
nasal cavity, the skin, as well as the 
alimentary canal, and has a high probability 
of dying.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Death rate after contracting the disease: 
over 85%.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Symptoms first appear similar that of a 
common cold, and while they may temporarily 
improve, the patient's condition will again 
rapidly deteriorate, resulting in hemorrhaging.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Incubation Period: normally 2-7 days.`;
   waitForClick; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; 
   Narr`.........`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`After that point all the data was corrupted 
and it was not clear what else was written.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Other than that, we came across some 
interesting information by accident.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`In the corner of a business log...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`"IBF Visitor Registry: Coco Yagami"`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Coco's name had been listed.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Looking further into the file was what seemed 
like a personal memo written by somebody.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'I get to see my daughter for the first time 
in a while.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'Her school is on vacation, so she has a 
10-day break.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'I've been trapped for so long in this tin 
can doing virus research that I'm jealous....'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'That aside, when I told her that special 
permission had been granted for her to come 
down and see IBF, she sent me a happy reply 
saying she would.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'We've exchanged mail every once in a while, 
but I wonder how long it's been since we've 
actually seen each other?'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'I'll just be happy if she hasn't forgotten 
what I look like.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'T.Y'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`T.Y.... I thought they were probably the 
initials of Mr. Yagami, Coco's dad.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Which meant that Coco had been to IBF once 
before May 1.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`To meet her father...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`16:23`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We didn't find any other survivors in IBF.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid, Tsugumi and I all went back to the 
examination room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You, how're they doing?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B201`); appendText; 
   //You
   You`"Ah...yeah. It looks like they're doing okay 
for now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked tired as she sat down and faced 
the pod's control panel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the monitor showing vital signs. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood pressure, heart rate, respiration 
rate...they all seemed to have stabilized for 
the moment...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B202`); appendText; 
   //You
   You`"Oh yeah, Takeshi. I checked the medical 
database on this terminal earlier, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hesitantly asked You...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, did you find something?"`;
   waitForClick; clearText; marker; sound(`T6B203`); appendText; 
   //You
   You`"Yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B204`); appendText; 
   //You
   You`"It looks as if they still haven't found any 
definite way...to treat the Tief Blau virus."`;
   waitForClick; clearText; marker; sound(`T6B205`); appendText; 
   //You
   You`"Although the symptoms can be temporarily 
treated by injecting that orange serum..."`;
   waitForClick; clearText; marker; sound(`T6B206`); appendText; 
   //You
   You`"Otherwise, the only option is to hope for 
the small chance that it will clear up by 
itself."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That sucks..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B207`); appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`T6B208`); appendText; 
   //Kid
   Kid`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`T6B209`); appendText; 
   //You
   You`"Um..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had trouble finding the words, so Tsugumi 
took over for her.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B210`); appendText; 
   //Tsugumi
   Tsugumi`"Well, basically..."`;
   waitForClick; clearText; marker; sound(`T6B211`); appendText; 
   //Tsugumi
   Tsugumi`"If Coco is going to heal, her immune system 
is going to have to work a little harder."`;
   waitForClick; clearText; marker; sound(`T6B212`); appendText; 
   //Tsugumi
   Tsugumi`"We've brought her to the treatment pod, all 
we can do now is hope."`;
   waitForClick; clearText; marker; sound(`T6B213`); appendText; 
   //You
   You`"Yeah, that's all we can do."`;
   waitForClick; clearText; marker; sound(`T6B214`); appendText; 
   //Kid
   Kid`"No..."`;
   waitForClick; clearText; marker; sound(`T6B215`); appendText; 
   //Kid
   Kid`"Coco isn't going to get better?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid looked like he was about to cry.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nobody said that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whether she gets better or not...is up to 
Coco's will to live."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid walked up next to the capsule pod.`;
   waitForClick; clearText; marker; sound(`T6B216`); appendText; 
   //Kid
   Kid`"Coco..."`;
   waitForClick; clearText; marker; sound(`T6B217`); appendText; 
   //Kid
   Kid`"Coco..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He latched firmly onto the pod, as though he 
would embrace it and started to cry.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO09C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6B218`); appendText; 
   //You
   You`"We still don't know how much this pod is 
going to help Coco."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You murmured softly as she read the life 
signs on the monitor.`;
   waitForClick; clearText; marker; sound(`T6B219`); appendText; 
   //You
   You`"It seems that this pod can also do laser 
disinfecting as well as simple surgery, in 
addition to the oxygen treatment."`;
   waitForClick; clearText; marker; sound(`T6B220`); appendText; 
   //You
   You`"And depending on how you use it, even 
cryogenic suspension..."`;
   waitForClick; clearText; marker; sound(`T6B221`); appendText; 
   //Tsugumi
   Tsugumi`"Suspension?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's that...You?"`;
   waitForClick; clearText; marker; sound(`T6B222`); appendText; 
   //You
   You`"I'm not sure. It was just in the manual..."`;
   waitForClick; clearText; marker; sound(`T6B223`); appendText; 
   //You
   You`"We don't really know is going to happen to 
us."`;
   waitForClick; clearText; marker; sound(`T6B224`); appendText; 
   //You
   You`"All we can do is have faith and wait."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   //Pipi
   Pipi`"*Whine*..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE03_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Beeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sharp alarm sounded from control panel 
monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not knowing what it was, we all looked at the 
monitor at once.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid ran over to where we were.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 24, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6B225`); appendText; 
   //Researcher
   Researcher`"Aagh....!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`An agonized expression came over the face of 
the researcher.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He thrashed and contorted inside of the 
cramped capsule.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B226`); appendText; 
   //You
   You`"Aaah!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey mister!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The researcher coughed violently and clawed 
at his throat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His hand and the area around his mouth were 
stained red.`;
   waitForClick; clearText; marker; sound(`T6B227`); appendText; 
   //Researcher
   Researcher`"Aaaaaaghhh...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The color quickly drained from his skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His breathing became shallow, and he groaned 
in a low voice.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6B228`); appendText; 
   //You
   You`"No! I can't believe his condition would 
change like this!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey mister! Stop grabbing at your throat like 
that! You'll crush it!"`;
   waitForClick; clearText; marker; sound(`T6B229`); appendText; 
   //Researcher
   Researcher`"Gaaguh..."`;
   waitForClick; clearText; marker; sound(`T6B230`); appendText; 
   //Researcher
   Researcher`"Huuugh...huuugh...huuugh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He slowly lowered the hands, which he been 
thrashing at his throat with.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey mister, are you alright!?"`;
   waitForClick; clearText; marker; sound(`T6B231`); appendText; 
   //Researcher
   Researcher`"No..."`;
   waitForClick; clearText; marker; sound(`T6B232`); appendText; 
   //Researcher
   Researcher`"This...is as far...as I make it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The researcher was barely breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was trying to breathe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He let out a gasp....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But wasn't able to bring in air.`;
   waitForClick; clearText; marker; sound(`T6B233`); appendText; 
   //Researcher
   Researcher`"So this...is...my...reward..."`;
   waitForClick; clearText; marker; sound(`T6B234`); appendText; 
   //You
   You`"!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You poured over the manual, and desperately 
searched the control panel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing she could do.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way for her to keep him alive.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She pounded on the manual.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then placed both elbows on the panel and 
covered her face with her hands.`;
   waitForClick; clearText; marker; sound(`T6B235`); appendText; 
   //You
   You`"Aaah...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She burst into tears.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and the Kid gazed at the monitor with 
strained expressions.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The researcher's vital signs were getting 
weaker.`;
   waitForClick; clearText; marker; sound(`T6B236`); appendText; 
   //Researcher
   Researcher`"...My daughter..."`;
   waitForClick; clearText; marker; sound(`T6B237`); appendText; 
   //Researcher
   Researcher`"Daughter...take care...of her..."`;
   waitForClick; clearText; marker; appendText; 
   //Researcher
   Researcher`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked as though he were smiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; marker; appendText; 
   Narr`His eyes closed...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He would never move again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeeep......`;
   waitForClick; clearText; marker; appendText; 
   Narr`The life readings from the capsule pod went 
blank, and an electronic alarm sounded what 
seemed like forever.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We couldn't save him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't have the power to save that man, 
whose name we didn't even know.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Pipi
   Pipi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I reached out my hand and turned off the 
alarm on the panel.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How is...Coco?"`;
   waitForClick; clearText; marker; sound(`T6B238`); appendText; 
   //You
   You`"Normal..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You replied in a voice filled with tears.`;
   waitForClick; clearText; marker; sound(`T6B239`); appendText; 
   //You
   You`"There doesn't seem to be anything wrong, for 
the moment..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay...thanks."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We'll have to make sure...he gets a proper 
burial..."`;
   waitForClick; clearText; marker; sound(`T6B240`); appendText; 
   //You
   You`"...Yeah."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone was motionless for a while.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Proof of how serious the situation was lay 
right before our eyes...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But time rolled ever forward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't have any more room to play around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dragging my legs, which seemed suddenly very 
heavy, I went to check all the areas in IBF 
once again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had to find a way out as soon as possible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After searching again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only thing we realized was...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That all of the escape pods were gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The researchers had probably used them to get 
out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no deepwater diving gear, no oxygen 
tanks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Meaning—`;
   waitForClick; clearText; marker; appendText; 
   Narr`All routes of escape had been cut off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were quickly approaching the earliest 
estimated time for LeMU's implosion....it was 
almost May 6, 4:30 p.m.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 120 });
goto(lbl_000017f7).if(var_d9 != 0);
goto(lbl_0000181f).if(var_da != 0);
goto(lbl_00001846);
let lbl_000017f7;
goto(lbl_00001846).if(var_b7 < 17);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`TT6A`);
let lbl_0000181f;
goto(lbl_00001846).if(var_b8 < 14);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`TL6A`);
let lbl_00001846;
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_BD`);
