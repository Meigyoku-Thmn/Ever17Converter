multifgload2({ id1: 1, id2: 2, name1: `YU17BDM`, name2: `CO08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T093`); appendText; 
   //You
   You`"Coco...do you have a headache?"  `;
   waitForClick; clearText; marker; sound(`C1T094`); appendText; 
   //Coco
   Coco`"Yeah, a bit. I feel kinda dizzy..."`;
   waitForClick; clearText; marker; sound(`C1T095`); appendText; 
   //You
   You`"What about if you swing your arms around - 
does that hurt?"`;
   waitForClick; clearText; marker; sound(`C1T096`); appendText; 
   //Coco
   Coco`"Just a little..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it looked like it hurt more than 'just a 
little.'`;
   waitForClick; clearText; marker; sound(`C1T097`); appendText; 
   //Sora
   Sora`"Due to the sudden loss of pressure on the 
floor, I suspect it might be decompression 
sickness."`;
   waitForClick; clearText; marker; sound(`C1T098`); appendText; 
   //You
   You`"Yeah, it could well be."`;
   waitForClick; 
});
varop(`(28 0a a4) d0 := (00) 1`);
goto(lbl_000000a7).if(var_f1 == 0);
goto(lbl_000000a7).if(var_ba != 1);
goto(lbl_000000b2);
let lbl_000000a7;
varop(`(28 0a a4) d0 := (00) 0`);
let lbl_000000b2;
choice(
   `Decompression sickness, what is that?`
   cond(`[cond (28 0a a4) d0 14 (00)]Is it really a decompression sickness?`, var_d0)
);
switch (choice) {
   case 0: goto(lbl_000000d5);
   case 1: goto(lbl_0000010c);
}
let lbl_000000d5;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Just hold on a second!"`;
   waitForClick; clearText; marker; sound(`C1T099`); appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T100`); appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What is this decompression whatever?"`;
   waitForClick; clearText; marker; sound(`C1T101`); appendText; 
   //Sora
   Sora`"I will explain about it later." `;
   waitForClick; clearText; marker; sound(`C1T102`); appendText; 
   //You
   You`"That can wait. We need to get Coco to the 
Infirmary."`;
   waitForClick; clearText; marker; sound(`C1T103`); appendText; 
   //You
   You`"Hey Takeshi...give her a piggy-back ride..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C312`); appendText; 
   //You
   You`"On your back! Hurry up and squat down!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? You want me to carry you?"`;
   waitForClick; clearText; marker; sound(`C1T104`); appendText; 
   //You
   You`"You idiot! This is no time for joking around!"`;
   waitForClick; clearText; marker; sound(`C1T105`); appendText; 
   //You
   You`"Coco! You're gonna carry Coco on your back."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright already! You don't have to scream in 
my ear!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crouched down in front of Coco and loaded 
her on my back.`;
   waitForClick; clearText; 
});
goto(lbl_00000249);
let lbl_0000010c;
varop(`(28 0a a4) ee := (00) 1`);
varop(`(28 0a a4) ba += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Wait a minute!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T106`); appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`C1T107`); appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Do you really think this is decompression 
sickness?"`;
   waitForClick; clearText; marker; sound(`C1T108`); appendText; 
   //You
   You`"What!?!"`;
   waitForClick; clearText; marker; sound(`C1T109`); appendText; 
   //Sora
   Sora`"What exactly do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I mean, well, you know....it might be 
something else..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You know, I just kinda thought ..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T110`); appendText; 
   //You
   You`"Okay, wise guy, what do you think she's got?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I've got no idea. How should I know?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's just...you know...aren't the symptoms 
different?" `;
   waitForClick; clearText; marker; sound(`C1T111`); appendText; 
   //Sora
   Sora`"Do you have any specialized knowledge about 
medical matters, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nope, not at all. Not a clue."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But, but, I'm just kinda worried!."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sora tilted their heads curiously.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `TU08ADS`, name2: `CO08ADS`, name3: `KA03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid, his face anxious, was holding Pipi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was clearly exhausted and it looked hard 
for her to stand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was Tsugumi who was holding Coco's body up. `;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU17BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T112`); appendText; 
   //You
   You`"Hey Sora, what's that thing in the 
infirmary...uh, you know, the thing..."`;
   waitForClick; clearText; marker; sound(`C1T113`); appendText; 
   //You
   You`"Wasn't there some device that can diagnose 
medical conditions?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T114`); appendText; 
   //Sora
   Sora`"Do you mean the L-MRI?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T115`); appendText; 
   //You
   You`"Yeah, yeah, that's it!"`;
   waitForClick; clearText; marker; sound(`C1T116`); appendText; 
   //You
   You`"So if we scan her with that, we can tell for 
sure whether it is decompression sickness, 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T117`); appendText; 
   //Sora
   Sora`"Unfortunately, that will not be possible."`;
   waitForClick; clearText; marker; sound(`C1T118`); appendText; 
   //You
   You`"Really? Why not?"`;
   waitForClick; clearText; marker; sound(`C1T119`); appendText; 
   //Sora
   Sora`"I already checked into that. The machine is 
broken." `;
   waitForClick; clearText; marker; sound(`C1T120`); appendText; 
   //Sora
   Sora`"I'm afraid it may take some time to both 
inspect and repair the device."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T121`); appendText; 
   //You
   You`"Oh, really..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T122`); appendText; 
   //Kid
   Kid`"Well anyway there's no use talking about it 
here!"`;
   waitForClick; clearText; marker; sound(`C1T123`); appendText; 
   //Kid
   Kid`"We've gotta get Coco to the infirmary right 
away!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, we should get going."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crouched in front of Coco and took her over 
my shoulders.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
let lbl_00000249;
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 10, volume: 100 });
bgload({ name: `BG26B1L`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were rushing up to Zweite stock some 
55 feet above us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held Coco on my back, with You and 
Tsugumi supporting her from the sides.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora went ahead to guide us, and the kid 
followed a short distance behind.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We emerged at the second floor emergency 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, are you sure we shouldn't take a normal 
corridor?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T124`); appendText; 
   //Sora
   Sora`"Please proceed straight ahead. This is a 
shortcut."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The emergency corridor was directly connected 
to the lift below the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whew! We made it. Let's get her up there."`;
   waitForClick; clearText; marker; sound(`C1T125`); appendText; 
   //Sora
   Sora`"No, Takeshi. Please go ahead into that room 
there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG10A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T126`); appendText; 
   //Sora
   Sora`"This is a medical compression chamber. 
We can treat decompression sickness here."`;
   waitForClick; clearText; 
});
goto(lbl_000003bc).if(var_ee == 0);
showTextbox();
text(() => {
   marker; sound(`C1T127`); appendText; 
   //Sora
   Sora`"Indeed, as Takeshi observed, we cannot be 
certain whether or not it is decompression 
sickness just now."`;
   waitForClick; clearText; marker; sound(`C1T128`); appendText; 
   //Sora
   Sora`"However, assuming that it is decompression 
sickness, if we do not act immediately, her 
chances of recovery decrease immensely..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So this uh, recompression thing, we can do it 
here?"`;
   waitForClick; clearText; marker; sound(`C1T129`); appendText; 
   //Sora
   Sora`"Yes, that is correct."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I laid Coco down on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Tsugumi, and the Kid all studied Coco's 
face.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, wait a minute, Sora. What are we gonna 
do if it turns out to be something else?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T130`); appendText; 
   //Sora
   Sora`"Compression treatment has no side effects in 
and of itself."`;
   waitForClick; clearText; marker; sound(`C1T131`); appendText; 
   //Sora
   Sora`"Furthermore, even if it is a different 
illness, I do not think it will make her 
condition worse."`;
   waitForClick; clearText; marker; sound(`C1T132`); appendText; 
   //Sora
   Sora`"Therefore, I think we should try this once 
and observe her condition. If there is no 
improvement, we should then consider another 
approach."`;
   waitForClick; clearText; marker; sound(`C1T133`); appendText; 
   //Sora
   Sora`"This seems to me to be the most appropriate 
treatment at the moment."`;
   waitForClick; clearText; 
});
goto(lbl_00000428);
let lbl_000003bc;
showTextbox();
text(() => {
   marker; sound(`C1T134`); appendText; 
   //You
   You`"Just let her sleep there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, I got it."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I set Coco down on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and the Kid stood next to me and 
looked down at Coco.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, You, what are you going to do in this 
tiny room? Isn't it a little cramped for 
examining her?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The space was so small that with everyone in 
there we could hardly move.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T135`); appendText; 
   //You
   You`"I'm not going to do anything."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...What're you talking about?"`;
   waitForClick; clearText; marker; sound(`C1T136`); appendText; 
   //You
   You`"We're going to have Coco relax in this room 
for a while."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tilted my head, confused.`;
   waitForClick; clearText; marker; sound(`C1T137`); appendText; 
   //Sora
   Sora`"This is hyperbaric oxygen therapy. Allow me 
to explain."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T138`); appendText; 
   //Sora
   Sora`"Decompression sickness occurs when there is a 
sudden change in the surrounding air pressure 
and gas bubbles that can't be discharged 
accrue in the body."`;
   waitForClick; clearText; marker; sound(`C1T139`); appendText; 
   //Sora
   Sora`"Gas becomes air bubbles and these gather in 
tissues or veins. When gas bubbles remain 
inside the body, the oxygen respiration 
efficiency drops dramatically."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So...no matter how many deep breaths you take 
it feels like you are suffocating?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T901`); appendText; 
   //Sora
   Sora`"That is correct. But also, if any nitrogen 
which had dissolved in the blood turns to gas, 
it could produce a thrombus, or blood clot.`;
   waitForClick; clearText; sound(`C1T902`); appendText; 
   //Sora
   Sora`Of course this could hinder blood circulation 
which is very dangerous...."`;
   waitForClick; clearText; marker; sound(`C1T141`); appendText; 
   //Sora
   Sora`"So we will seal this room and pump in a high 
concentration of oxygen, raising the level to 
approximately 3 atmospheres..."`;
   waitForClick; clearText; marker; sound(`C1T142`); appendText; 
   //Sora
   Sora`"Then we slowly decompress you back down to 1 
atmosphere."`;
   waitForClick; clearText; marker; sound(`C1T143`); appendText; 
   //Sora
   Sora`"Using this difference in pressure we dissolve 
the gas bubbles in her body back into the 
blood, where she get rid of them naturally by 
breathing."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So basically, you make us like 
a can of cola that won't blow up..."`;
   waitForClick; clearText; marker; sound(`C1T144`); appendText; 
   //Sora
   Sora`"Yes, precisely."`;
   waitForClick; clearText; 
});
let lbl_00000428;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Okay, I got it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my hand.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Gosh that dash up the stairs sure wore me 
out..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heaved a breath.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T145`); appendText; 
   //Sora
   Sora`"Oh, Takeshi, are you in pain at all?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh, me? My muscles feel kinda sore and I'm a 
bit sluggish, but..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T146`); appendText; 
   //You
   You`"Hey, Takeshi, don't you think you should 
probably go in the room, too?"`;
   waitForClick; clearText; marker; sound(`C1T147`); appendText; 
   //You
   You`"In light cases of decompression sickness, you 
are not necessarily aware of it immediately."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"After you figure out you're in trouble, it's 
too late...?"`;
   waitForClick; clearText; marker; sound(`C1T148`); appendText; 
   //You
   You`"Yeah. And the symptoms can be drawn out."`;
   waitForClick; clearText; marker; sound(`C1T149`); appendText; 
   //Sora
   Sora`"Yes...Just to be on the safe side, I want you 
all to enter the room."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The decompression process took 
place over several hours.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco lay on the only bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid, You, Pipi and I sat next to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was cramped. `;
   waitForClick; clearText; marker; appendText; 
   Narr`We were like sardines in a can. There was 
nowhere to move.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
delay({ interval: 120 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
bgload({ name: `BG10A1`, transition: 20 });
clock(`23:54`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered what time it was...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took out my PDA and checked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`11:54 p.m.....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sleepy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was sleeping and her breathing was 
relaxed. It looked like she was doing better.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like You or the Kid were 
sleeping, but they sat quietly with their eyes 
closed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi had crawled under the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had sealed the hatch from outside and was 
adjusting the pressure as necessary.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Sora, what about you? Don't you need to be 
treated?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before the process had started I had asked 
Sora this.`;
   waitForClick; clearText; marker; sound(`C1T150`); appendText; 
   //Sora
   Sora`"No. I'm used to this..."`;
   waitForClick; clearText; marker; sound(`C1T151`); appendText; 
   //Sora
   Sora`"Oh, also...everyone, please remove your 
voice converters during the 
repressurization process."`;
   waitForClick; clearText; marker; sound(`C1T152`); appendText; 
   //Sora
   Sora`"They are designed to protect your eardrum 
from the change in air pressure...however 
during pressurization they can interfere."`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
varop(`(28 0a a4) d0 := (00) 1`);
goto(lbl_00000574).if(var_f1 == 0);
goto(lbl_00000574).if(var_ee == 0);
goto(lbl_00000574).if(var_ba != 2);
goto(lbl_00000591);
let lbl_00000574;
varop(`(28 0a a4) d0 := (00) 0`);
varop(`(28 0a a4) b3 := (00) 4`);
jump(`T_1C`);
let lbl_00000591;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I removed the earphones that I had become 
completely used to, and held them in my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was still standing just outside the 
window by the hatch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi...wasn't inside or visible outside the 
room. She had left just before the 
pressurization process had started.`;
   waitForClick; clearText; 
});
choice(
   `Where did Tsugumi go?`
   `When was Sora going to sleep?`
   cond(`[cond (28 0a a4) d0 14 (00)]Maybe Coco had some other illness after all?`, var_d0)
);
switch (choice) {
   case 0: goto(lbl_000005c0);
   case 1: goto(lbl_0000069f);
   case 2: goto(lbl_000006b3);
}
let lbl_000005c0;
varop(`(28 0a a4) b7 += (00) 2`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Where the heck did Tsugumi go, anyway?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just before the hatch was closed, 
she had suddenly started talking.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; sound(`T1C336`); appendText; 
   //Tsugumi
   Tsugumi`"Uh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C337`); appendText; 
   //Tsugumi
   Tsugumi`"I'm leaving."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, where are you going?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C338`); appendText; 
   //Tsugumi
   Tsugumi`"There...is a place that I just realized I 
need to go to."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where? Treatment is more urgent than that."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T1C339`); appendText; 
   //Tsugumi
   Tsugumi`"I don't need it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, that's irresponsible and selfish!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C340`); appendText; 
   //Tsugumi
   Tsugumi`"I can't stay cooped up in this 
cramped place..."`;
   waitForClick; clearText; marker; sound(`T1C341`); appendText; 
   //Tsugumi
   Tsugumi`"Well, I won't go escaping alone, so just 
take it easy."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not the point."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C342`); appendText; 
   //Tsugumi
   Tsugumi`"To be blunt, I don't have the patience 
for you. Any of you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi ignored You and me and went off 
somewhere.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora had reported to us that she was 
somewhere on the floor and safe...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it still bothered me a bit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was Tsugumi after all. I was sure 
she'd probably be back in a little while 
saying something else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I thought, but nearly two hours 
had passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'll wait just a little bit longer.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still waiting, my eyelids grew heavier and 
heavier.`;
   waitForClick; clearText; 
});
goto(lbl_000006c3);
let lbl_0000069f;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered when Sora intended to sleep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This simple doubt jumped into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was doing minute, complex work nonstop 
and she was always on her feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she never got tired?`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I spoke with her over the interphone and 
asked her if she were alright, she laughed 
and said she was just fine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And she was still standing outside the room 
as if sure were a sentinel guarding it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her back was straight and she never slouched, 
always looking like she was at attention.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if what she had said about being 
fine not sleeping days on end were true...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That really bothers me...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that I'd follow up on it later.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even as I thought that, my eyelids got 
heavier and heavier.`;
   waitForClick; clearText; 
});
goto(lbl_000006c3);
let lbl_000006b3;
varop(`(28 0a a4) ba += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Yeah, maybe Coco has something else after all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't help that doubt from floating 
around my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stole a glance at Coco's face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked so calm while sleeping....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two hours since we started repressurization - 
she was recovering well, just as Sora had 
said she would. It must've just been the 
bends after all. `;
   waitForClick; clearText; marker; appendText; 
   Narr`That is, I had it wrong all along...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But even so, I couldn't help noticing a 
strange and uneasy feeling rising in me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was going on?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why was I so convinced that she had some other 
illness from the start?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't figure it out at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It's just that something, I don't know what, 
kept whispering in my ear. `;
   waitForClick; clearText; marker; appendText; 
   Narr`'This is no good, this is no good.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I was just too tired?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crouched next to her and patted Coco's soft 
hair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My eyelids were weighty...`;
   waitForClick; clearText; 
});
let lbl_000006c3;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(But still....even so...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Today...really was...an eventful day...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that, I fell asleep.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopSFX()
delay({ interval: 150 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_2A`);
