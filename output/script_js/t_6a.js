varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 6`);
varop(`(28 0a a4) b2 := (00) 6`);
setDialogBoxColor(GREEN);
goto(lbl_00000091).if(var_da != 0);
setSceneTitle({ index: 37 });
goto(lbl_0000009d);
let lbl_00000091;
setSceneTitle({ index: 38 });
let lbl_0000009d;
chapterCutin({ name: `00000000` });
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
clock(`7:26`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of boiling, bubbling oil filled the 
room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I fried the chicken in silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After getting up, we all gathered in front of 
the sandwich shop as usual.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As luck would have it, everyone showed up at 
the same time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I guess I could have called it lucky...`;
   waitForClick; clearText; 
});
multifgload3({ name1: `CO13ADS`, name2: `KA03ADS`, name3: `YU17ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO13ADS`, name2: `TU17ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Pipi
   Pipi`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Hardly anyone said a thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone had glum expressions on their faces 
and ate silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a strange atmosphere surrounding 
us. For some reason it had become hard for us 
to look one another in the eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like the beginning of a bottomless 
rift amongst us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And at the same time, there was a strange 
smell in the air...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sizzle!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Aggghh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was smoke coming from the tip of my 
finger!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Smoke! Smoke! Aaaggggh that's hot....!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had been firmly pressing it against the 
grill.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hastily cut the power.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A juicy smell, not unlike sausage, was coming 
from the burnt tip of my finger.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ooooooww, that hurts...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm such an idiot..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I blew on my finger to cool it off, I 
looked around at everyone.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `CO03ADS`, name2: `KA03ADS`, name3: `YU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADS`, name2: `TU03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They had noticed, but they all turned their 
gazes down.`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   //Pipi
   Pipi`"*whine*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Pipi was kind enough to acknowledge me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah Pipi, I burnt myself pretty good, ha, 
ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   //Pipi
   Pipi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But soon, even Pipi turned his face away from 
me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like everyone hated me. I felt 
totally alone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sandwich I had just finished cooled and 
soon it no longer tasted palatable.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like the morning after a funeral.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone knew why things had sunk so low.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone knew, but nobody wanted to say 
anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A moment of carelessness had opened our 
hearts up to despair...`;
   waitForClick; clearText; marker; appendText; 
   Narr`They shoveled the chicken sandwiches into 
their mouths in silence.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After we were all finished eating, everyone 
went to the Conference Room.`;
   waitForClick; clearText; 
});
clock(`8:9`);
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A000`); appendText; 
   //Sora
   Sora`"There is an important reason why I've called 
all of you here."`;
   waitForClick; clearText; marker; sound(`T6A001`); appendText; 
   //Sora
   Sora`"There is something that I wanted to inform 
you about as soon as possible."`;
   waitForClick; clearText; marker; sound(`T6A002`); appendText; 
   //Sora
   Sora`"I know it is difficult, but it is important 
for you to accurately realize the full 
gravity of this situation."`;
   waitForClick; clearText; marker; sound(`T6A003`); appendText; 
   //Sora
   Sora`"Please don't panic, settle down...and listen 
carefully."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora paused for a second.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked at all five of us in turn....You, 
Tsugumi, Coco, the Kid and me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Conference Room was silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I could hear the sound of water, faintly 
coming from somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was it water lapping in the hallways...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Moments later I couldn't hear it anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if Sora was waiting for this cue, she 
slowly opened her mouth.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A004`); appendText; 
   //Sora
   Sora`"The situation...is not good."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora extended her hand and a holographic 
window appeared in the space in front of us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I hadn't seen her do that for a 
while.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6A005`); appendText; 
   //Sora
   Sora`"Currently, there are no areas that 
show signs of new flooding."`;
   waitForClick; clearText; marker; sound(`T6A006`); appendText; 
   //Sora
   Sora`"Since the flooding of the Cosmic Whale area 
in Dritte stock last night, there have been 
no further reports of significant damage."`;
   waitForClick; clearText; marker; sound(`T6A007`); appendText; 
   //Sora
   Sora`"The burden being placed on LeMU's support 
columns has increased, due to the flooding." `;
   waitForClick; clearText; marker; sound(`T6A008`); appendText; 
   //Sora
   Sora`"The structural distortion between floors is 
increasing."`;
   waitForClick; clearText; marker; sound(`T6A009`); appendText; 
   //Sora
   Sora`"As this continues, LeMU will eventually lose 
its equilibrium and tilt dramatically."`;
   waitForClick; clearText; marker; sound(`T6A010`); appendText; 
   //Sora
   Sora`"If the damage to the areas connecting the 
floors of different sectors increases, there 
is the possibility that pipe leaks could 
flood the dry sectors."`;
   waitForClick; clearText; marker; sound(`T6A011`); appendText; 
   //Sora
   Sora`"In other words...we can't afford to be 
careless. Things are critical."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6A012`); appendText; 
   //Sora
   Sora`"I think that I told you this before..."`;
   waitForClick; clearText; marker; sound(`T6A013`); appendText; 
   //Sora
   Sora`"Implosion of LeMU is estimated to occur at 
4:30 a.m. on May 7."`;
   waitForClick; clearText; marker; sound(`T6A014`); appendText; 
   //Sora
   Sora`"The calculation has a margin of error of +/- 
12 hours."`;
   waitForClick; clearText; marker; sound(`T6A015`); appendText; 
   //Sora
   Sora`"There has been no significant change in this 
prediction."`;
   waitForClick; clearText; marker; sound(`T6A016`); appendText; 
   //Sora
   Sora`"In one area, the strength limits of 
partitions have already been exceeded."`;
   waitForClick; clearText; marker; sound(`T6A017`); appendText; 
   //Sora
   Sora`"The destruction of LeMU will be gradual, but 
it will inevitably and steadily occur."`;
   waitForClick; clearText; marker; sound(`T6A018`); appendText; 
   //Sora
   Sora`"It is...only a matter of time."`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora told all of us this with a calm look on 
her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all swallowed and held our breath as we 
listened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We knew we were reaching our time limit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had no choice but to accept the reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no avoiding the situation.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A019`); appendText; 
   //Sora
   Sora`"Presently, the power generator is functioning 
normally."`;
   waitForClick; clearText; marker; sound(`T6A020`); appendText; 
   //Sora
   Sora`"However, if by chance there is a 
blackout...we will switch to the emergency 
power source battery."`;
   waitForClick; clearText; marker; sound(`T6A021`); appendText; 
   //Sora
   Sora`"This is generally meant for supporting the 
emergency lighting and the maintenance for 
LeMU's system...it should last for about two 
hours."`;
   waitForClick; clearText; 
});
goto(lbl_000002bc).if(var_da == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I listened to Sora's report, I couldn't 
help thinking about yesterday...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...with Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How much of her thought processing had been 
'repaired'?`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Speaking in front of me was a Sora who was 
practical, businesslike and simply responding 
to the situation at hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked at me as if nothing had 
transpired, and I was of little importance to 
her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which Sora is she? The real one or the fake 
one...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`This sucks...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't the time to be thinking about that.`;
   waitForClick; clearText; 
});
goto(lbl_00000304);
let lbl_000002bc;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I needed to be listening more attentively to 
Sora's report.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just like You, Coco, Kid, Pipi...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...and even Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was listening calmly to what Sora 
had to say. No one was panicking, yet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Last night, Tsugumi's yells had pierced my 
heart. Yet her bitter bullet didn't come out 
my back—it remained lodged inside as a 
constant reminder.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She refused to look at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Instead, Tsugumi just stared blankly in front 
of her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perhaps that was for the best...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, that wasn't just it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Something else was bothering me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I tuned back in to the affairs at hand, 
listening carefully to Sora's report.`;
   waitForClick; clearText; 
});
let lbl_00000304;
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A022`); appendText; 
   //Sora
   Sora`"The normal communication channels are still 
not functioning." `;
   waitForClick; clearText; marker; sound(`T6A023`); appendText; 
   //Sora
   Sora`"Neither have I found an escape route."`;
   waitForClick; clearText; marker; sound(`T6A024`); appendText; 
   //Sora
   Sora`"However..."`;
   waitForClick; clearText; marker; sound(`T6A025`); appendText; 
   //Sora
   Sora`"I have made protecting you my top priority 
and LeMMIH is devoting all of its resources 
to that objective."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A026`); appendText; 
   //Sora
   Sora`"I am also using all sensors, lights, 
manipulators and means at my disposal outside 
of the complex..."`;
   waitForClick; clearText; marker; sound(`T6A027`); appendText; 
   //Sora
   Sora`"And I am still investigating whether there 
are any means of communicating with the 
outside using light, radio or sound."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora nodded her head, straightened her back, 
and surveyed the room. We were all silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a look of determination in her eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A028`); appendText; 
   //Sora
   Sora`"Let me say one thing more..."`;
   waitForClick; clearText; marker; sound(`T6A029`); appendText; 
   //Sora
   Sora`"That as long as I...Sora Akanegasaki exist..."`;
   waitForClick; clearText; marker; sound(`T6A030`); appendText; 
   //Sora
   Sora`"And while my powers are limited, as long as 
you are here..."`;
   waitForClick; clearText; marker; sound(`T6A031`); appendText; 
   //Sora
   Sora`"I will do my utmost to find a way for you to 
escape to safety."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A032`); appendText; 
   //Sora
   Sora`"We do not have much longer together, but I 
Sora Akanegasaki, am at your service."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She concluded with a serious nod.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We also nodded in agreement.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A033`); appendText; 
   //Sora
   Sora`"We must wait...and believe that help is on 
its way."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's serious expression gave way to a smile.`;
   waitForClick; clearText; marker; sound(`T6A034`); appendText; 
   //Sora
   Sora`"Everyone, let's pray for a safe rescue."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_000003ce).if(var_da == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her calmness was the result of her efficiently 
functioning A.I..`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thankfully, nobody panicked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Was that a genuine smile from Sora?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was pretty sure it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because if that were fake smile...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, even if were Sora's real smile...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking about it there was something sad 
about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not wanting anyone to realize my thoughts, I 
bit my lip. `;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The gloomy atmosphere that had been hanging 
over the gathering lightened and everyone 
started thinking about how they should spend 
their time.`;
   waitForClick; clearText; 
});
goto(lbl_000003d3);
let lbl_000003ce;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The gloomy atmosphere that had been hanging 
over the gathering lightened and everyone 
started thinking about how they should spend 
their time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's smile instilled everyone with courage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was grateful for that piece of code in 
Sora's A.I.—the function that allowed her 
to be calm in times of trouble.`;
   waitForClick; clearText; 
});
let lbl_000003d3;
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
bgload({ name: `BG21B1`, transition: 20 });
clock(`10:51`);
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We transferred to the rest area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone found a seat around the central stage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A ripple ran through the water on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A wave swashed back and forth, from wall to 
wall.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This is serious..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What are we going we do...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have any ideas. `;
   waitForClick; clearText; marker; appendText; 
   Narr`A few quiet discussions were going on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yet from where I stood, it seemed the more 
people spoke, the murkier the answers became.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the beginning it was the same debate 
repeated over and over again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Should we wait for help?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Should we seek an escape route?`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was look to the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign that any bright ideas were 
on their way to my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were just waiting for the walls and 
ceiling to come crumbling down.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A035`); appendText; 
   //Kid
   Kid`"Ahhhh!"`;
   waitForClick; clearText; marker; sound(`T6A036`); appendText; 
   //You
   You`"Kid, what happened?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A037`); appendText; 
   //Kid
   Kid`"Everyone, be careful!"`;
   waitForClick; clearText; marker; sound(`T6A038`); appendText; 
   //Kid
   Kid`"Don't move! Don't stand up!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 153`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A deep moan rumbled through the room as the 
floor began to shake.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A wave of fear ran through us.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Soon the shaking ceased.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A039`); appendText; 
   //Kid
   Kid`"Y-You..."`;
   waitForClick; clearText; marker; sound(`T6A040`); appendText; 
   //You
   You`"Don't worry! It's okay."`;
   waitForClick; clearText; marker; sound(`T6A041`); appendText; 
   //You
   You`"Right, Sora?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A042`); appendText; 
   //Sora
   Sora`"Yes. The shaking right now was..."`;
   waitForClick; clearText; marker; sound(`T6A043`); appendText; 
   //Sora
   Sora`"I believe it was only due to a large amount 
of activity from the thermal vents, on the 
ocean floor. It should only be temporary."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But her facial coloring still hadn't returned 
to normal.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone looked around the room, exchanging 
glances.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And just like that, nervous tension refilled 
the room again.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not again..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to take charge.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright! Listen up everyone!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rose to my feet and shouted to everyone.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Listen, just stay where you all are!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm going to check the kiosk on the second 
floor!"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `KA07ADS`, name2: `CO06ADS`, name3: `YU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone looked shocked as I yelled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Some jaws even dropped.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO07ADS`, name2: `TU06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They may have been half put off by me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I didn't concern myself with that.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No matter how stupid it seemed, I continued...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm going above to grab some snacks for 
everybody. There is plenty up there, and we 
still should be able to eat it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It'll be a pain to go get it later, and it 
doesn't make sense to let them go to waste."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright? We're going to eat here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And let's have a good time..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, that's right. Does anybody want beer...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A044`); appendText; 
   //You
   You`"What? B-but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You raised her hand timidly.`;
   waitForClick; clearText; marker; sound(`T6A045`); appendText; 
   //You
   You`"But we don't sell alcohol at the LeMU kiosks."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A046`); appendText; 
   //You
   You`"We've had a lot of complaints about customers 
having bad hangovers due to the differences 
in air pressure down here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's too bad."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, hardly any of you look like you could 
hold your drink anyway. I guess it'll have to 
be juice..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A047`); appendText; 
   //Kid
   Kid`"Excuse me, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now it was Kid who raised his hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A048`); appendText; 
   //Kid
   Kid`"There are probably plenty of drinks at the 
chicken sandwich shop. That way you won't 
have to go above."`;
   waitForClick; clearText; marker; sound(`T6A049`); appendText; 
   //Kid
   Kid`"There's canned juice and paper cups.... Why 
don't I go and get them?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, Kid, you do that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A050`); appendText; 
   //Kid
   Kid`"Alright. Leave it to me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid laughed. It seemed he was over the 
events from the day before. `;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A051`); appendText; 
   //Coco
   Coco`"Hey, let me help!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`An excited Coco raised her hand, volunteering.`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; marker; sound(`T6A052`); appendText; 
   //Coco
   Coco`"I think Pipi wants to help too!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Great! Alright, let's go and get the 
supplies."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADS`, name2: `SO11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A053`); appendText; 
   //You
   You`"Sora, do we still have time?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You asked Sora this in a small voice.`;
   waitForClick; clearText; marker; sound(`T6A054`); appendText; 
   //Sora
   Sora`"I am sorry. I am not able to run an accurate 
simulation..."`;
   waitForClick; clearText; marker; sound(`T6A055`); appendText; 
   //Sora
   Sora`"There may not be much time, but we will be 
safe until 2 p.m. That I can guarantee."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora replied casually.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A056`); appendText; 
   //You
   You`"Alright..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You nodded and looked up.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU16ADM`, name2: `KA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A057`); appendText; 
   //You
   You`"Kid, are you ready? Let's grab all the 
drinks we can carry."`;
   waitForClick; clearText; marker; sound(`T6A058`); appendText; 
   //Kid
   Kid`"Okay, let's go."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A059`); appendText; 
   //You
   You`"Oh, that's right!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You slammed her fist into her hand excitedly 
and looked about the room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A060`); appendText; 
   //You
   You`"What about Tsugumi?" `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A061`); appendText; 
   //You
   You`"Tsugumi? H-huh...?"`;
   waitForClick; clearText; marker; sound(`T6A062`); appendText; 
   //You
   You`"She's not here..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What!?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I frantically surveyed the room as well, but 
Tsugumi was nowhere in sight.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where the heck did she go? And when'd she 
leave?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO09ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A063`); appendText; 
   //Sora
   Sora`"I believe Tsugumi slipped out of here just a 
short while ago."`;
   waitForClick; clearText; marker; sound(`T6A064`); appendText; 
   //Sora
   Sora`"She seems to have left for the second 
floor..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A065`); appendText; 
   //You
   You`"There's nothing we can do."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A066`); appendText; 
   //You
   You`"She'll be back soon, right Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Aah, yeah..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A067`); appendText; 
   //You
   You`"Okay everyone, let's get ready to party!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO02ADS`, name2: `CO02ADS`, name3: `KA02ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T6A068`); appendText; 
   //Coco
   Coco`"Okay!"`;
   waitForClick; clearText; marker; sound(`T6A069`); appendText; 
   //Kid
   Kid`"Alright!"`;
   waitForClick; clearText; marker; sound(`T6A070`); appendText; 
   //Sora
   Sora`"Yes!"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   //Pipi
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Y-yeah!"`;
   waitForClick; clearText; marker; sound(`T6A071`); appendText; 
   //Coco
   Coco`"Let's party! Party!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had only thrown out the idea as a way to 
lighten the mood...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And before I knew it, we had ourselves a 
full-blown party in the making.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Well, whatever.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was better than having everyone moping 
around.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Soon, Coco, Pipi, and I left to get food. We 
took the emergency stairs.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6A072`); appendText; 
   //Coco
   Coco`"Laaaa,la la, la la la la."`;
   waitForClick; clearText; marker; sound(`T6A073`); appendText; 
   //Coco
   Coco`"Fa la la la la, la la la la."`;
   waitForClick; clearText; marker; sound(`T6A074`); appendText; 
   //Coco
   Coco`"Fa la la fa la la."`;
   waitForClick; clearText; marker; sound(`T6A075`); appendText; 
   //Coco
   Coco`"LA LA LA!" `;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   //Pipi
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we climbed the stairs, Coco sang some 
crazy song.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You seem like you're in a good mood, Coco."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A076`); appendText; 
   //Coco
   Coco`"Well, you know, I just get excited 
sometimes..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A077`); appendText; 
   //Coco
   Coco`"Looks like we've come to the climax!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A078`); appendText; 
   //Coco
   Coco`"The damsel in distress is in a pinch and in 
waltzes our dashing hero!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A079`); appendText; 
   //Coco
   Coco`"Young lady, are you alright? Are you not 
injured?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO18ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A080`); appendText; 
   //Coco
   Coco`"And there is our masked villain. I can't 
forgive you this, you evil scoundrel!"`;
   waitForClick; clearText; marker; sound(`T6A081`); appendText; 
   //Coco
   Coco`"Using my neutrino energy power...I'll kill 
you! Ayah!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A082`); appendText; 
   //Coco
   Coco`"Oh I can pretend can't I?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A083`); appendText; 
   //Coco
   Coco`"Huh, Takepyon? Are you fed up with me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"N-no..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A084`); appendText; 
   //Coco
   Coco`"You think I'm just a silly girl, don't you? 
Ah! So sad! But you want to see what kind of 
parents could have raised me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, no. It's not that...Not at all!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mussed up her hair affectionately.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A085`); appendText; 
   //Coco
   Coco`"Heh, heh, he..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A086`); appendText; 
   //Coco
   Coco`"If I were in a pinch like that, I'm sure 
someone would come to my rescue!"`;
   waitForClick; clearText; marker; sound(`T6A087`); appendText; 
   //Coco
   Coco`"I just can't help but think of how wonderful 
that would be..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A088`); appendText; 
   //Coco
   Coco`"You know? What's wrong with dreaming like 
that?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, you're right."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You know...to tell you the truth, I'm 
thinking the same way."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I think that someone might come to rescue us!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't know about the neutrino stuff though."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A089`); appendText; 
   //Coco
   Coco`"Yeah yeah! You're right!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We wanted to believe that a hero was on the 
way...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...and that went for Coco, Pipi and me, too.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We reached the second floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We turned down the corridor and entered the 
souvenir shop.`;
   waitForClick; clearText; 
});
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Someone had beaten us there.`;
   waitForClick; clearText; marker; sound(`T6A090`); appendText; 
   //Coco
   Coco`"Hey, is that you? Tsugumi?"`;
   waitForClick; clearText; 
});
goto(lbl_00000a30).if(var_d9 == 0);
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A091`); appendText; 
   //Tsugumi
   Tsugumi`"Hi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was shocked to see her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I totally blanked and went speechless.`;
   waitForClick; clearText; marker; sound(`T6A092`); appendText; 
   //Tsugumi
   Tsugumi`"Is there a reason I shouldn't be here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi spit out her words coldly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was typical Tsugumi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU17ADM`, name2: `CO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A093`); appendText; 
   //Coco
   Coco`"No, not at all..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A094`); appendText; 
   //Coco
   Coco`"Tsugumi, how about you help us out?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A095`); appendText; 
   //Tsugumi
   Tsugumi`"Well, alright. I don't suppose I really have 
a choice."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi nodded reluctantly.`;
   waitForClick; clearText; marker; sound(`T6A096`); appendText; 
   //Tsugumi
   Tsugumi`"So what should I do, Coco?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A097`); appendText; 
   //Coco
   Coco`"Well...let's see..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi glanced at me...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She didn't say anything and looked away 
quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes seemed dead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking about it made me sad.`;
   waitForClick; clearText; 
});
goto(lbl_00000a75);
let lbl_00000a30;
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A098`); appendText; 
   //Tsugumi
   Tsugumi`"You're taking too long..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked a little miffed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A099`); appendText; 
   //Tsugumi
   Tsugumi`"Well, what is it you want me to carry?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A100`); appendText; 
   //Tsugumi
   Tsugumi`"What is it, Takeshi? You look like a pigeon 
caught in a shotgun blast."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, it's nothing. Nothing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was surprised she even said anything to me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, let's get started!"`;
   waitForClick; clearText; 
});
let lbl_00000a75;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
bgload({ name: `IMG01B`, transition: 20 });
playBGM({ num: 1, volume: 100 });
hideTextbox();
NVL_Mode();
clock(`11:43`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One hour later—`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We began our party in an elevated part of the 
rest area.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Even without alcohol, the party was lively.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The Kid and I distributed the snacks and 
drinks to everyone.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was then that You volunteered to provide 
some entertainment.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`First she performed an impersonation of a 
strange old archaeologist, who had a talent 
for cracking a whip..`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Then Coco came out in a makeshift sumo outfit 
and stomped her feet on the stage...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Sora kept busy filling the room with hologram 
projections of rainbows.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The rainbow-colored bubbles that floated from 
the water surface through the air were 
particularly pretty.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that Tsugumi joined us...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She added a little magic to the show as she 
dropped her hamster in her skirt pocket only 
to have it reappear in her breast pocket.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That really impressed the crowd. `;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Although I knew about her hamster, Chami, many 
didn't even know Tsugumi kept a pet.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then Kid and I performed a comedy skit.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We pulled out one-liners and impromptu gags 
which got huge laughter from everyone.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
bgload({ name: `BG21B1`, transition: 20 });
clock(`12:55`);
fgload({ id: 1, name: `KA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A101`); appendText; 
   //Kid
   Kid`"Thank you! Thank you very much!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Thanks!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kid and I exited the stage to thunderous 
applause.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO09ADM`, name2: `YU09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A102`); appendText; 
   //Coco
   Coco`"Ha ha ha ha ha! That was great!"`;
   waitForClick; clearText; marker; sound(`T6A103`); appendText; 
   //You
   You`"That was absolutely wonderful!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO08ADM`, name2: `TU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A104`); appendText; 
   //Tsugumi
   Tsugumi`"Better than I expected..."`;
   waitForClick; clearText; marker; sound(`T6A105`); appendText; 
   //Sora
   Sora`"Those two were perfect together."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Thank you, thank you..."`;
   waitForClick; clearText; marker; sound(`T6A106`); appendText; 
   //Kid
   Kid`"Thank you everyone..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Actually, I was surprised too that you poked 
fun at yourself using the truth about you 
losing your memory as a gag." `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A107`); appendText; 
   //Kid
   Kid`"Well, that's just how the skit flowed. It 
fit perfectly into our act."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, I guess you're right..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, it looks like I've got nothing more to 
teach you! So, go ahead and follow in my 
comedy footsteps!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A108`); appendText; 
   //Kid
   Kid`"Ah, sorry. I've already forgot everything 
you taught me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, that's too bad...you should at least 
take notes. Notes!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But never fear! I ain't taught you nothin' 
yet!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A109`); appendText; 
   //Kid
   Kid`"Is that true?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And that was about it...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The party gradually wound down.`;
   waitForClick; clearText; 
});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I then took a trip back to the chicken 
sandwich stand and brought sandwiches back 
for everyone.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
multifgload3({ name1: `YU16ADS`, name2: `CO02ADS`, name3: `KA12ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We all munched on hot sandwiches.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(These...are so good!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't exactly the ideal breakfast food.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone happily downed their food.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Food...`;
   waitForClick; clearText; marker; appendText; 
   Narr`If LeMU collapsed soon...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that could be everyone's last meal...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone understood that, yet said nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone understood, which is why they said 
nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...............`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
delay({ interval: 60 });
goto(lbl_00000d5e).if(var_d9 == 0);
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After finishing my sandwich, I got up the 
nerve to speak to Tsugumi.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A110`); appendText; 
   //Tsugumi
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; sound(`T6A111`); appendText; 
   //Tsugumi
   Tsugumi`"What do you want, Takeshi...?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi crouched on the stage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crouched beside her, and looked to see what 
she was doing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There, Tsugumi was drawing something on the 
stage with a thick marker.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As usual, Tsugumi didn't look at me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, well...it's..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stopped scribbling for a moment. I 
decided to come out and say what I had to say.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"About yesterday..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry. I didn't know what to say...but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A112`); appendText; 
   //Tsugumi
   Tsugumi`"About what?"`;
   waitForClick; clearText; marker; sound(`T6A113`); appendText; 
   //Tsugumi
   Tsugumi`"I don't really know what you're talking 
about."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was curt in her response.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsu-Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're joking, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's no way you could've forgotten."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know I haven't."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not just something you can...just 
simply forget about."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I realize it's not something you can talk 
about casually, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes wandered around the room for a moment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then, she looked down again at the scribbles 
she had been drawing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A114`); appendText; 
   //Tsugumi
   Tsugumi`"I don't really care."`;
   waitForClick; clearText; marker; sound(`T6A115`); appendText; 
   //Tsugumi
   Tsugumi`"I don't care about what happened yesterday..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A116`); appendText; 
   //Tsugumi
   Tsugumi`"So, would you please stop talking about it?"`;
   waitForClick; clearText; marker; sound(`T6A117`); appendText; 
   //Tsugumi
   Tsugumi`"Don't say anything."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was back to her drawing on the stage 
floor.`;
   waitForClick; clearText; marker; sound(`T6A118`); appendText; 
   //Tsugumi
   Tsugumi`"I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A119`); appendText; 
   //Tsugumi
   Tsugumi`"I'm trying to think of a way to get out of 
here, too."`;
   waitForClick; clearText; marker; sound(`T6A120`); appendText; 
   //Tsugumi
   Tsugumi`"So don't...bother me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi refused to look at me as she spoke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that I felt a little gun-shy.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okaaaay, then."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stood up and left her there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked over toward where Sora was.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A121`); appendText; 
   //Sora
   Sora`"Hello. What may I help you with, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled softly when she looked at me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nothing much...I just have a lot on my mind."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A122`); appendText; 
   //Sora
   Sora`"Right now LeMMIH is handling operations and 
will alert me if any troubles arise."`;
   waitForClick; clearText; marker; sound(`T6A123`); appendText; 
   //Sora
   Sora`"LeMMIH is also currently continuing 
investigation of means of escape as well as 
communication with the outside."`;
   waitForClick; clearText; marker; sound(`T6A124`); appendText; 
   //Sora
   Sora`"Please do not worry."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Thanks, Sora.... That helps."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can I ask what time it is? I need to set it 
on my..."`;
   waitForClick; clearText; marker; sound(`T6A125`); appendText; 
   //Sora
   Sora`"No problem. The current time is——."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hold on for a second."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took my PDA from my pocket.`;
   waitForClick; clearText; 
});
goto(lbl_00000e0d);
let lbl_00000d5e;
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I made up my mind to speak to her about the 
important things I had on my mind...right 
after finishing my sandwich.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A126`); appendText; 
   //Sora
   Sora`"Yes, what is it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With a slight smile, Sora gazed at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes were like a clear, cloudless sky.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, well, it's just that..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I saw her smile, I wavered slightly. 
Yet, I continued to speak.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Um, about yesterday..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry. I don't know what to say but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A127`); appendText; 
   //Sora
   Sora`"What is it?"`;
   waitForClick; clearText; marker; sound(`T6A128`); appendText; 
   //Sora
   Sora`"I am not quite sure what you are talking 
about."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora spoke brusquely.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"S-Sora!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're lying, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You haven't forgotten, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know I haven't forgotten."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not just something you...just forget 
about."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I realize it's not something you can 
casually address, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A129`); appendText; 
   //Sora
   Sora`"Ha ha ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora gave me a bitter smile.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A130`); appendText; 
   //Sora
   Sora`"I'm sorry, Takeshi. I really do not remember 
the events of last night."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`T6A131`); appendText; 
   //Sora
   Sora`"I...do not remember."`;
   waitForClick; clearText; marker; sound(`T6A132`); appendText; 
   //Sora
   Sora`I am sorry.`;
   waitForClick; clearText; marker; sound(`T6A133`); appendText; 
   //Sora
   Sora`"I forgot them. There is a gap in my memory 
of a few hours."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How...why?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're lying...you've got to be..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to believe it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A134`); appendText; 
   //Sora
   Sora`"Listen, Takeshi...I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She laughed again and gazed out at the others 
around the stage.`;
   waitForClick; clearText; marker; sound(`T6A135`); appendText; 
   //Sora
   Sora`"I love this."`;
   waitForClick; clearText; marker; sound(`T6A136`); appendText; 
   //Sora
   Sora`"Seeing the people around me laugh...I love 
that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A137`); appendText; 
   //Sora
   Sora`"Right now LeMMIH is handling operations and 
will alert me if any troubles arise."`;
   waitForClick; clearText; marker; sound(`T6A138`); appendText; 
   //Sora
   Sora`"I have been hoping that no trouble befalls 
us..."`;
   waitForClick; clearText; marker; sound(`T6A139`); appendText; 
   //Sora
   Sora`"It is my duty to watch over you all."`;
   waitForClick; clearText; marker; sound(`T6A140`); appendText; 
   //Sora
   Sora`"When people return a smile, it warms my 
heart..."`;
   waitForClick; clearText; marker; sound(`T6A141`); appendText; 
   //Sora
   Sora`"And for that very reason..."`;
   waitForClick; clearText; marker; sound(`T6A142`); appendText; 
   //Sora
   Sora`"That is why I am always able to laugh."`;
   waitForClick; clearText; marker; sound(`T6A143`); appendText; 
   //Sora
   Sora`"That was how my creator made me..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to talk about herself as 
something 'made,' or how she was 
'manufactured.' `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A144`); appendText; 
   //Sora
   Sora`"Takeshi, please do not look at me as if you 
are going to cry."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, right...fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wished that I hadn't gone overboard last 
night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I was wishing for the impossible...`;
   waitForClick; clearText; 
});
let lbl_00000e0d;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...what I did.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `TU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A145`); appendText; 
   //Tsugumi
   Tsugumi`"Excuse me, Sora."`;
   waitForClick; clearText; marker; sound(`T6A146`); appendText; 
   //Sora
   Sora`"Ah, yes. Tsugumi.... What is on your mind?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was suddenly standing right between 
Sora and I.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi let out a nervous laugh.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A147`); appendText; 
   //Tsugumi
   Tsugumi`"There's something I want to tell you, in 
private..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A148`); appendText; 
   //Sora
   Sora`"In private?"`;
   waitForClick; clearText; marker; sound(`T6A149`); appendText; 
   //Tsugumi
   Tsugumi`"Yes...Please."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A150`); appendText; 
   //Tsugumi
   Tsugumi`"It's about escaping this place. I have a 
proposal for you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A151`); appendText; 
   //Sora
   Sora`"Is that so? What is it? You know of a way?"`;
   waitForClick; clearText; marker; sound(`T6A152`); appendText; 
   //Tsugumi
   Tsugumi`"Yes. I might be able to help in some way."`;
   waitForClick; clearText; marker; sound(`T6A153`); appendText; 
   //Tsugumi
   Tsugumi`"I want to hear from you whether or not my 
idea is feasible."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What? Wait a second, Tsugumi. Sora and I..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A154`); appendText; 
   //Tsugumi
   Tsugumi`"Shut up, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi held out her hand as if stopping my 
mouth in one motion.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6A155`); appendText; 
   //Tsugumi
   Tsugumi`"I want to speak to Sora. Alone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A156`); appendText; 
   //Tsugumi
   Tsugumi`"You don't mind, do you Sora?"`;
   waitForClick; clearText; marker; sound(`T6A157`); appendText; 
   //Sora
   Sora`"No. Let's go talk in the Central Control 
Room."`;
   waitForClick; clearText; marker; sound(`T6A158`); appendText; 
   //Tsugumi
   Tsugumi`"Right, let's go."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The two got down from the stage and set off 
with very serious looks on their faces.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wait! Hold up you two! Don't go starting 
something without telling everyone!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why can't you just talk here!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A159`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi turned around and shot a sharp glare 
at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes were ice.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A160`); appendText; 
   //Tsugumi
   Tsugumi`"I told you to shut up, didn't I?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora and Tsugumi turned their backs to me and 
left together.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Things around me got quiet.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the hell."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the hell is going on here...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt alone. Balling up the sandwich 
wrapper, I threw it as hard as I could.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wrapper fell in the water, creating a 
series of ripples.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
setSceneTitle({ index: 39 });
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A161`); appendText; 
   //You
   You`"Takeshi...what do you think you're doing?"`;
   waitForClick; clearText; marker; sound(`T6A162`); appendText; 
   //You
   You`"You shouldn't litter, you know?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You picked the wrapper out of the water and 
twisted it around her finger.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wh-who cares? It doesn't matter at this point 
anyway..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A163`); appendText; 
   //You
   You`"Oh, not that again. Quit your sulking, mister!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm not sulking."`;
   waitForClick; clearText; marker; sound(`T6A164`); appendText; 
   //You
   You`"If you saaay so..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shrugged and let out a deep sigh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A165`); appendText; 
   //You
   You`"*siiiigggggghhhhhh*"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A166`); appendText; 
   //You
   You`"Alright!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I glanced over to the corner of the room and 
saw Coco and Kid climbing a statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking over at them...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I sat down on the circular stage.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A167`); appendText; 
   //You
   You`"The reason is totally obvious."`;
   waitForClick; clearText; marker; sound(`T6A168`); appendText; 
   //You
   You`"You don't have to say anything."`;
   waitForClick; clearText; marker; sound(`T6A169`); appendText; 
   //You
   You`"Even if you look fine, I know it's just for 
show."`;
   waitForClick; clearText; marker; sound(`T6A170`); appendText; 
   //You
   You`"I know you're depressed, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-well because! I mean, i-it isn't like that 
at all...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A171`); appendText; 
   //You
   You`"Because? What's this 'because'?"`;
   waitForClick; clearText; marker; sound(`T6A172`); appendText; 
   //You
   You`"Obviously you're hiding something. You said 
'because.'"`;
   waitForClick; clearText; marker; sound(`T6A173`); appendText; 
   //You
   You`"That's a little strange, don't you think?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A174`); appendText; 
   //You
   You`"Come on, try to prove me wrong."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was pretending I was fine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even I knew the reason was obvious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was worried about 'her'...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A175`); appendText; 
   //You
   You`"*siiiigggggghhhhhh*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You let out another fake sigh again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A176`); appendText; 
   //You
   You`"Well, if you're not going to tell me, do you 
mind if I ask a question?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Go ahead..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"As you wish..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"*sigh*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`This time I was the one to sigh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A177`); appendText; 
   //You
   You`"Okay! Here I go!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, hurry up already."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A178`); appendText; 
   //You
   You`"What are you so angry about?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm not angry about anything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A179`); appendText; 
   //You
   You`"Okay, okay..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid and Pipi were playing sumo. Coco was 
the referee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I watching them...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...as You spoke.`;
   waitForClick; clearText; 
});
goto(lbl_00001090).if(var_da == 0);
showTextbox();
text(() => {
   marker; sound(`T6A180`); appendText; 
   //You
   You`"Hey, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T6A181`); appendText; 
   //You
   You`"Do you know about the malfunction in Sora's 
thought process?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, wait, maybe I do know."`;
   waitForClick; clearText; marker; sound(`T6A182`); appendText; 
   //You
   You`"Well, which one is it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I can't say either way."`;
   waitForClick; clearText; marker; sound(`T6A183`); appendText; 
   //You
   You`"Ah, so you're one of those indecisive types, 
huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, alright..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But I can't talk about it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's a secret, between Sora and me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was likely that Sora was jealous of 
Tsugumi and me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I was pretty sure A.I. didn't understand 
emotions like jealousy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Always bothered by emotions that she didn't 
understand. Sora...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Asking me to explain them to her. Sora...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sharp twinges nagged at my heart.`;
   waitForClick; clearText; marker; sound(`T6A184`); appendText; 
   //You
   You`"Oh really? I see. It's a secret, huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6A185`); appendText; 
   //You
   You`"By the way..."`;
   waitForClick; clearText; marker; sound(`T6A186`); appendText; 
   //You
   You`"When I was searching through LeMMIH I found 
this out... "`;
   waitForClick; clearText; marker; sound(`T6A187`); appendText; 
   //You
   You`"One feature of Sora's system is the ability 
to engage in self-study, but she is unable to 
manipulate memories."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What did you just say?"`;
   waitForClick; clearText; marker; sound(`T6A188`); appendText; 
   //You
   You`"She is able to - by herself - store 
information she accumulates through 
self-study."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, the part after that..."`;
   waitForClick; clearText; marker; sound(`T6A189`); appendText; 
   //You
   You`"She isn't able to manipulate or delete 
memories...by herself. The only thing that 
can change is the priority she puts on 
information in her database."`;
   waitForClick; clearText; marker; sound(`T6A190`); appendText; 
   //You
   You`"The only way to perform a system recovery is 
when the system crashes. As a last resort..."`;
   waitForClick; clearText; marker; sound(`T6A191`); appendText; 
   //You
   You`"And only humans approved by the system can 
restart her."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Meaning that she couldn't have undergone a 
system recovery last night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She told me the truth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But at the same time she lied.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A computer program that could only accept 
'yes' or 'no,' 'ones' and 'zeros,' had tried 
desperately to accept a contradiction.`;
   waitForClick; clearText; marker; sound(`T6A192`); appendText; 
   //You
   You`"In a sense, A.I. is similar to people."`;
   waitForClick; clearText; marker; sound(`T6A193`); appendText; 
   //You
   You`"It can pretend that it didn't notice 
something, but it's not easy for it to forget 
things..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why are you telling me this?"`;
   waitForClick; clearText; marker; sound(`T6A194`); appendText; 
   //You
   You`"I wonder...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this sarcastically, playing dumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she laughed mischievously.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Listen...You..."`;
   waitForClick; clearText; marker; sound(`T6A195`); appendText; 
   //You
   You`"Whaaat?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Even if Sora's memory was being stored 
somewhere above us, do you think she really 
wants to be rescued with the rest of us?"`;
   waitForClick; clearText; marker; sound(`T6A196`); appendText; 
   //You
   You`"What do you think Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Of course I...I want her to be saved along 
with everyone."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"LeMU is Sora's eyes, her body. Even if her 
mind is in another section, if this part 
sinks, part of her will go down with it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And if that's the case, no matter what we 
do, there's no way to rescue her from here 
completely..."`;
   waitForClick; clearText; marker; sound(`T6A197`); appendText; 
   //You
   You`"Yeah. I really hope that we can all escape 
together."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It sure would be nice for that wish to come 
true..."`;
   waitForClick; clearText; marker; sound(`T6A198`); appendText; 
   //You
   You`"Yeah...it would."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear splashes as they ran.`;
   waitForClick; clearText; marker; sound(`T6A199`); appendText; 
   //You
   You`"Actually, a close friend of mine told me 
this once, but..."`;
   waitForClick; clearText; marker; sound(`T6A200`); appendText; 
   //You
   You`"Believe it, desire it and it can come true..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Believe it, desire it, and it can..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What is that, something you read in a book?"`;
   waitForClick; clearText; marker; sound(`T6A201`); appendText; 
   //You
   You`"Well...not exactly."`;
   waitForClick; clearText; marker; sound(`T6A202`); appendText; 
   //You
   You`"It's a sort of phenomenon. I don't know if 
it's true or not. It's just a kind of 
hypothesis."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hypothesis?"`;
   waitForClick; clearText; marker; sound(`T6A203`); appendText; 
   //You
   You`"Yeah."`;
   waitForClick; clearText; marker; sound(`T6A204`); appendText; 
   //You
   You`"It's called..."`;
   waitForClick; clearText; marker; sound(`T6A205`); appendText; 
   //You
   You`"Cure."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Cure?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cure...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pondered the word for a moment.`;
   waitForClick; clearText; 
});
goto(lbl_00001095);
let lbl_00001090;
showTextbox();
text(() => {
   marker; sound(`T6A206`); appendText; 
   //You
   You`"Hey...Takeshi..."`;
   waitForClick; clearText; marker; sound(`T6A207`); appendText; 
   //You
   You`"About Tsugumi's injury..."`;
   waitForClick; clearText; marker; sound(`T6A208`); appendText; 
   //You
   You`"It is healing really quickly..."`;
   waitForClick; clearText; marker; sound(`T6A209`); appendText; 
   //You
   You`"She didn't even need stitches, you know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6A210`); appendText; 
   //You
   You`"Tsugumi seems like she leads a normal life, 
just like you and me..."`;
   waitForClick; clearText; marker; sound(`T6A211`); appendText; 
   //You
   You`"And I try not to worry too much about her 
and just accept things as I see them, but..."`;
   waitForClick; clearText; marker; sound(`T6A212`); appendText; 
   //You
   You`"But that just isn't normal."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked down at her feet when she spoke.`;
   waitForClick; clearText; marker; sound(`T6A213`); appendText; 
   //You
   You`"Have you heard about Tsugumi's condition?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No I haven't..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wait, I might have."`;
   waitForClick; clearText; marker; sound(`T6A214`); appendText; 
   //You
   You`"You can really be vague, sometimes, you know?"`;
   waitForClick; clearText; marker; sound(`T6A215`); appendText; 
   //You
   You`"Which one is it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry...I forgot."`;
   waitForClick; clearText; marker; sound(`T6A216`); appendText; 
   //You
   You`"You forgot!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6A217`); appendText; 
   //You
   You`"So you're one of those indecisive type of 
guys, hmmm?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6A218`); appendText; 
   //You
   You`"Come on! Say something..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured it was something just between 
Tsugumi and me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't really know enough about her 
condition to say 'yeah, I know something.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Plus, I was still having a difficult time 
believing the whole thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even when I saw it with my own eyes, part of 
my brain refused to accept it.`;
   waitForClick; clearText; marker; sound(`T6A219`); appendText; 
   //You
   You`"Let's just drop it..."`;
   waitForClick; clearText; marker; sound(`T6A220`); appendText; 
   //You
   You`"Ha ha. You really forgot didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6A221`); appendText; 
   //You
   You`"Well I guess there's nothing we can do about 
it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How come you asked me about it?"`;
   waitForClick; clearText; marker; sound(`T6A222`); appendText; 
   //You
   You`"I wonder why?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this sarcastically, playing dumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then a serious look formed on her face.`;
   waitForClick; clearText; marker; sound(`T6A223`); appendText; 
   //You
   You`"The truth is..."`;
   waitForClick; clearText; marker; sound(`T6A224`); appendText; 
   //You
   You`"When I was looking at LeMMIH, I came upon 
some interesting information in the medical 
database."`;
   waitForClick; clearText; marker; sound(`T6A225`); appendText; 
   //You
   You`"It was from the Leiblich Pharmaceutical 
database..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Leiblich Pharmaceutical?"`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Database?"`;
   waitForClick; clearText; marker; sound(`T6A226`); appendText; 
   //You
   You`"I think they use it during treatment in the 
infirmary, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear the splashes from their running 
echo.`;
   waitForClick; clearText; marker; sound(`T6A227`); appendText; 
   //You
   You`"When I scoured the database...I couldn't 
believe what I read."`;
   waitForClick; clearText; marker; sound(`T6A228`); appendText; 
   //You
   You`"A body that doesn't grow old..."`;
   waitForClick; clearText; marker; sound(`T6A229`); appendText; 
   //You
   You`"A mutated body type because of a virus..."`;
   waitForClick; clearText; marker; sound(`T6A230`); appendText; 
   //You
   You`"It shakes the foundations of modern 
science..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6A231`); appendText; 
   //You
   You`"I might have found something related to 
Tsugumi's condition."`;
   waitForClick; clearText; marker; sound(`T6A232`); appendText; 
   //You
   You`"In the database I searched through a number 
of old medical records."`;
   waitForClick; clearText; marker; sound(`T6A233`); appendText; 
   //You
   You`"I found one that mirrors Tsugumi's condition."`;
   waitForClick; clearText; marker; sound(`T6A234`); appendText; 
   //You
   You`"Generally speaking, the number of cases of 
victims of this virus known is very small.."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey hey! Hold on a sec..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How come LeMU has that kind of information?"`;
   waitForClick; clearText; marker; sound(`T6A235`); appendText; 
   //You
   You`"I don't know! Why ask me?"`;
   waitForClick; clearText; marker; sound(`T6A236`); appendText; 
   //You
   You`"All I do know is that data and the name of 
the virus."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The name of the...virus?"`;
   waitForClick; clearText; marker; sound(`T6A237`); appendText; 
   //You
   You`"Yeah, the name."`;
   waitForClick; clearText; marker; sound(`T6A238`); appendText; 
   //You
   You`"It's called..."`;
   waitForClick; clearText; marker; sound(`T6A239`); appendText; 
   //You
   You`"Cure."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Cure?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pondered the name for a moment.`;
   waitForClick; clearText; 
});
let lbl_00001095;
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 90 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; marker; sound(`T6A240`); appendText; 
   //Kid
   Kid`"Everyone! We've got trouble!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kid came running into the room yelling.`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Kid? Where the heck did you just go?"`;
   waitForClick; clearText; marker; sound(`T6A241`); appendText; 
   //You
   You`"Problem? What kind of problem?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 12, volume: 100 });
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A242`); appendText; 
   //Kid
   Kid`"C-come on! We've gotta go and stop it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kid was breathing heavily, yelling between 
breaths.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stop what? Hey, explain what's going on."`;
   waitForClick; clearText; marker; sound(`T6A243`); appendText; 
   //Coco
   Coco`"W-what happened?"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   //Pipi
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi came over to see what all the 
commotion was about.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `YU18ADS`, name2: `CO06ADS`, name3: `KA08ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T6A244`); appendText; 
   //Kid
   Kid`"The Central Control Room...!"`;
   waitForClick; clearText; marker; sound(`T6A245`); appendText; 
   //Kid
   Kid`"Sora and Tsugumi were gone for such a long 
time, I..."`;
   waitForClick; clearText; marker; sound(`T6A246`); appendText; 
   //Kid
   Kid`"I went to go find them..."`;
   waitForClick; clearText; marker; sound(`T6A247`); appendText; 
   //Kid
   Kid`"And they were in a brutal argument!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"!!"`;
   waitForClick; clearText; marker; sound(`T6A248`); appendText; 
   //Kid
   Kid`"I just couldn't watch, so I..."`;
   waitForClick; clearText; marker; sound(`T6A249`); appendText; 
   //You
   You`"This is bad news...at a time like this."`;
   waitForClick; clearText; marker; sound(`T6A250`); appendText; 
   //Coco
   Coco`"L-let's go! We've got to stop them!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Y-yeah! We'd better hurry!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow wow!"`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
clock(`13:27`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid, Coco, Pipi, You and myself...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We sped along the wet floor to the Central 
Control Room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6A251`); appendText; 
   //You
   You`"Sora!"`;
   waitForClick; clearText; marker; sound(`T6A252`); appendText; 
   //Coco
   Coco`"Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the button to open the door.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T6A253`); appendText; 
   //Tsugumi
   Tsugumi`".........!"`;
   waitForClick; clearText; marker; sound(`T6A254`); appendText; 
   //Sora
   Sora`".........!"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 15, volume: 100 });
bgload({ name: `BG16A1`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We burst into the room...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU18ADM`, name2: `SO14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...We found Tsugumi and Sora screaming at each 
other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Neither one would give an inch. They just 
glared at one another.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked as though they had been fighting 
for several minutes. The room was filled with 
tension.`;
   waitForClick; clearText; marker; sound(`T6A255`); appendText; 
   //Sora
   Sora`"Beneath us?"`;
   waitForClick; clearText; marker; sound(`T6A256`); appendText; 
   //Sora
   Sora`"There aren't any floors underneath Dritte 
stock. We can't go down any further."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A257`); appendText; 
   //Tsugumi
   Tsugumi`"Liar..."`;
   waitForClick; clearText; marker; sound(`T6A258`); appendText; 
   //Tsugumi
   Tsugumi`"You're lying..."`;
   waitForClick; clearText; marker; sound(`T6A259`); appendText; 
   //Tsugumi
   Tsugumi`"I saw down from Qualle, and borrowing your 
eyes, I was able to access LeMMIH, it took a 
while though..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A260`); appendText; 
   //Tsugumi
   Tsugumi`"I finally got proof. There is more to LeMU 
below us."`;
   waitForClick; clearText; marker; sound(`T6A261`); appendText; 
   //Tsugumi
   Tsugumi`"Um, there's another installation other than 
LeMU...and it's right below us. Really far 
down."`;
   waitForClick; clearText; marker; sound(`T6A262`); appendText; 
   //Tsugumi
   Tsugumi`"I'm right, aren't I?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`".........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A263`); appendText; 
   //Sora
   Sora`"I can't answer that question..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A264`); appendText; 
   //Tsugumi
   Tsugumi`"Don't tell me that, just answer me!"`;
   waitForClick; clearText; marker; sound(`T6A265`); appendText; 
   //Tsugumi
   Tsugumi`"I did a Turing test, and I found out that 
you really are A.I."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A266`); appendText; 
   //Tsugumi
   Tsugumi`"As long as you aren't blocked by a protect 
routine, you have to answer humans honestly."`;
   waitForClick; clearText; marker; sound(`T6A267`); appendText; 
   //Tsugumi
   Tsugumi`"That's part of your functioning."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........"`;
   waitForClick; clearText; marker; sound(`T6A268`); appendText; 
   //Tsugumi
   Tsugumi`"It isn't possible to get there using normal 
elevators."`;
   waitForClick; clearText; marker; sound(`T6A269`); appendText; 
   //Tsugumi
   Tsugumi`"The only way there is through a locked door."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A270`); appendText; 
   //Tsugumi
   Tsugumi`"That room..."`;
   waitForClick; clearText; marker; sound(`T6A271`); appendText; 
   //Tsugumi
   Tsugumi`"HIMMEL...That's your name, isn't it Sora?"`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A272`); appendText; 
   //Tsugumi
   Tsugumi`"We aren't getting anywhere just sitting 
around."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A273`); appendText; 
   //Tsugumi
   Tsugumi`"We're fighting against time!"`;
   waitForClick; clearText; marker; sound(`T6A274`); appendText; 
   //Tsugumi
   Tsugumi`"The truth is behind that door."`;
   waitForClick; clearText; marker; sound(`T6A275`); appendText; 
   //Tsugumi
   Tsugumi`"Tell us the password to that door...the one 
leading to HIMMEL, Sora!"`;
   waitForClick; clearText; marker; sound(`T6A276`); appendText; 
   //Sora
   Sora`"It is true..."`;
   waitForClick; clearText; marker; sound(`T6A277`); appendText; 
   //Sora
   Sora`"That HIMMEL...in German means sky, or 'Sora' 
in Japanese..."`;
   waitForClick; clearText; marker; sound(`T6A278`); appendText; 
   //Sora
   Sora`"But Tsugumi, I..."`;
   waitForClick; clearText; marker; sound(`T6A279`); appendText; 
   //Sora
   Sora`"I don't have the security access to open 
that door."`;
   waitForClick; clearText; marker; sound(`T6A280`); appendText; 
   //Sora
   Sora`"I'm sorry..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A281`); appendText; 
   //Tsugumi
   Tsugumi`"That's a lie!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A282`); appendText; 
   //Sora
   Sora`"It is not!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A283`); appendText; 
   //Tsugumi
   Tsugumi`"Some A.I. you are! You think I'm stupid? You 
think you can fool me?"`;
   waitForClick; clearText; marker; sound(`T6A284`); appendText; 
   //Sora
   Sora`"It is not a lie! I am telling the truth!!"`;
   waitForClick; clearText; marker; sound(`T6A285`); appendText; 
   //Sora
   Sora`"I don't have any information of what's 
behind that door..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A286`); appendText; 
   //Coco
   Coco`"Stop it!!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco jumped between them.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A287`); appendText; 
   //Coco
   Coco`"Stop it, both of you!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU06ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Both of them flinched for a moment, but 
continued to look bitter.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A288`); appendText; 
   //Sora
   Sora`"Coco..."`;
   waitForClick; clearText; marker; sound(`T6A289`); appendText; 
   //Tsugumi
   Tsugumi`"Coco..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A290`); appendText; 
   //Coco
   Coco`"Stop it...okay? Please!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `TU05ADS`, name2: `CO05ADS`, name3: `SO13ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T6A291`); appendText; 
   //Sora
   Sora`"Coco, this is between Tsugumi and me."`;
   waitForClick; clearText; marker; sound(`T6A292`); appendText; 
   //Tsugumi
   Tsugumi`"Get back Coco...or I'm really going to get 
mad."`;
   waitForClick; clearText; marker; sound(`T6A293`); appendText; 
   //Coco
   Coco`"Why?"`;
   waitForClick; clearText; marker; sound(`T6A294`); appendText; 
   //Coco
   Coco`"Tsugumi, Sora, stop it!"`;
   waitForClick; clearText; marker; sound(`T6A295`); appendText; 
   //Coco
   Coco`"Why are you arguing?"`;
   waitForClick; clearText; marker; sound(`T6A296`); appendText; 
   //Sora
   Sora`"This isn't an argument."`;
   waitForClick; clearText; marker; sound(`T6A297`); appendText; 
   //Tsugumi
   Tsugumi`"We aren't."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A298`); appendText; 
   //Coco
   Coco`"You're lying...it's a lie...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A299`); appendText; 
   //Coco
   Coco`"We shouldn't be fighting...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Large tears welled and flowed from Coco's eyes.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tears had a freezing effect on Sora and 
Tsugumi.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A300`); appendText; 
   //Coco
   Coco`"Agh..."`;
   waitForClick; clearText; marker; sound(`T6A301`); appendText; 
   //Coco
   Coco`"Aaaghh...."`;
   waitForClick; clearText; marker; sound(`T6A302`); appendText; 
   //Coco
   Coco`"Waagghh...."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_05`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco started gasping.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She suddenly ran to the corner of the console.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Or...rather fell there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She leaned against the console, barely able 
to support herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's body was shaking slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her lips trembled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see that her lips had gone pale 
quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was different than crying... `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey, what...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's up with you all of a sudden...?"`;
   waitForClick; clearText; 
});
removeBG_unk(3, 0, 2);
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T6A303`); appendText; 
   //Coco
   Coco`"Agh...!!"`;
   delay(0); 
});
bgload_keepFg({ name: `IMG04A`, transition: 10 });
bgload_keepFg({ name: `KURO_BG`, transition: 20 });
showTextbox();
text(() => {
   appendText; waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco's lips were suddenly...stained red.`;
   waitForClick; clearText; marker; sound(`T6A304`); appendText; 
   //Kid
   Kid`"Coco!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid opened his eyes wide, looking shocked.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 11, volume: 100 });
bgload({ name: `EV_CO06A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T6A305`); appendText; 
   //Coco
   Coco`"Ugh...uh...uuugh..."`;
   waitForClick; clearText; marker; sound(`T6A306`); appendText; 
   //Coco
   Coco`"Gah...uuuugh...uuugh..."`;
   waitForClick; clearText; marker; sound(`T6A307`); appendText; 
   //Coco
   Coco`"Nngagh...uuuh...uuugh..."`;
   waitForClick; clearText; marker; sound(`T6A308`); appendText; 
   //You
   You`"Coco!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood was flowing onto the floor of the 
Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wouldn't stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It kept falling from her mouth.`;
   waitForClick; clearText; marker; sound(`T6A309`); appendText; 
   //Tsugumi
   Tsugumi`"What's happening!?"`;
   waitForClick; clearText; marker; sound(`T6A310`); appendText; 
   //Sora
   Sora`"Coco!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco shook her head and trembled violently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had her hand to her mouth, desperately 
trying not to cough.`;
   waitForClick; clearText; marker; sound(`T6A311`); appendText; 
   //Sora
   Sora`"It can't be...!"`;
   waitForClick; clearText; marker; sound(`T6A312`); appendText; 
   //Sora
   Sora`"These...these symptoms are...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked as if she were about to panic.`;
   waitForClick; clearText; marker; sound(`T6A313`); appendText; 
   //Tsugumi
   Tsugumi`"Symptoms!? Who cares about that!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi screamed, furious.`;
   waitForClick; clearText; marker; sound(`T6A314`); appendText; 
   //Tsugumi
   Tsugumi`"Can't you tell! If this keeps up, Coco's 
going to...!!"`;
   waitForClick; clearText; marker; sound(`T6A315`); appendText; 
   //Kid
   Kid`"Coco, hang in there!"`;
   waitForClick; clearText; marker; sound(`T6A316`); appendText; 
   //You
   You`"Ta-Takeshi...what are we going to do!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hang on! Everyone don't panic! You've got to 
stay calm!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I screamed out in a loud voice to everyone.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Just calm the heck down, okay!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh wait...maybe I need to calm down too..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whew..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone took deep breaths trying to settle 
down.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco, just relax. You're going to be okay..."`;
   waitForClick; clearText; marker; sound(`T6A317`); appendText; 
   //Coco
   Coco`"Ugh..."`;
   waitForClick; clearText; marker; sound(`T6A318`); appendText; 
   //Coco
   Coco`"I'm...Al...right...Take...pyon."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Steadying her trembling eyes, Coco looked at 
me firmly.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Good girl..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Now hang onto me, Coco!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned around and thrust out my back toward 
her.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can you get on?"`;
   waitForClick; clearText; marker; sound(`T6A319`); appendText; 
   //Coco
   Coco`"Ye...yeah."`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   //Pipi
   Pipi`"*Whine*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi looked up worriedly at Coco.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We're going to the infirmary on Zweite."`;
   waitForClick; clearText; marker; sound(`T6A320`); appendText; 
   //You
   You`"O-okay!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Woof, woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized that I was holding onto Coco.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B1L`, transition: 20 });
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were rushing up to Zweite stock 
some 56 feet above us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held Coco on my back, with You and Tsugumi 
supporting her from the sides.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora went ahead to guide us, and the kid 
followed a short distance behind.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG29A1`, transition: 10 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We emerged at the second floor 
emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Which was is it, left or right!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A321`); appendText; 
   //Sora
   Sora`"Straight ahead!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6A322`); appendText; 
   //Tsugumi
   Tsugumi`"Don't run so fast! Stop shaking her so much!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know! Just pipe down, would you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco was groaning in pain on my back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I could still make it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way I was going to fail.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't going to say 'It's no use, we're too 
late,' and I wasn't going to let anyone else 
say it either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as there was some hope left, I 
wouldn't give up.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took a shortcut to the nearest elevator, 
and rushed Coco to the infirmary.`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_6B`);
