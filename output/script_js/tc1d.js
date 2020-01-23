multifgload2({ id1: 1, id2: 2, name1: `YU17BDM`, name2: `CO08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1T093)`"Coco...do you have a headache?"  `;
   Coco(C1T094)`"Yeah, a bit. I feel kinda dizzy..."`;
   You(C1T095)`"What about if you swing your arms around - 
does that hurt?"`;
   Coco(C1T096)`"Just a little..."`;
   `But it looked like it hurt more than 'just a 
little.'`;
   Sora(C1T097)`"Due to the sudden loss of pressure on the 
floor, I suspect it might be decompression 
sickness."`;
   You(C1T098)`"Yeah, it could well be."`;

});
l_selection_0_available = 1;
if (l_is_coco_route == 0) goto(lbl_000000a7);
if (l_coco_point != 1) goto(lbl_000000a7);
goto(lbl_000000b2);
let lbl_000000a7;
l_selection_0_available = 0;
let lbl_000000b2;
choice(
   `Decompression sickness, what is that?`,
   cond(l_selection_0_available != 0)`Is it really a decompression sickness?`,
);
switch (l_choice) {
   case 0: goto(lbl_000000d5);
   case 1: goto(lbl_0000010c);
}
let lbl_000000d5;
showTextbox();
text(() => {
   Takeshi`"Just hold on a second!"`;
   Sora(C1T099)`"........."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1T100)`"........."`;
   Takeshi`"What is this decompression whatever?"`;
   Sora(C1T101)`"I will explain about it later." `;
   You(C1T102)`"That can wait. We need to get Coco to the 
Infirmary."`;
   You(C1T103)`"Hey Takeshi...give her a piggy-back ride..."`;
   Takeshi`"Huh?"`;

});
fgload({ id: 1, name: `YU04BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1C312)`"On your back! Hurry up and squat down!"`;
   Takeshi`"Huh? You want me to carry you?"`;
   You(C1T104)`"You idiot! This is no time for joking around!"`;
   You(C1T105)`"Coco! You're gonna carry Coco on your back."`;
   Takeshi`"Alright already! You don't have to scream in 
my ear!"`;
   `I crouched down in front of Coco and loaded 
her on my back.`;

});
goto(lbl_00000249);
let lbl_0000010c;
l_skeptical_about_coco_having_decompression_sickness = 1;
l_coco_point += 1;
showTextbox();
text(() => {
   Takeshi`"Wait a minute!"`;

});
removeFG({ id: 2, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T106)`"........."`;
   You(C1T107)`"........."`;
   Takeshi`"Do you really think this is decompression 
sickness?"`;
   You(C1T108)`"What!?!"`;
   Sora(C1T109)`"What exactly do you mean?"`;
   Takeshi`"I mean, well, you know....it might be 
something else..."`;
   Takeshi`"You know, I just kinda thought ..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1T110)`"Okay, wise guy, what do you think she's got?"`;
   Takeshi`"I've got no idea. How should I know?"`;
   Takeshi`"It's just...you know...aren't the symptoms 
different?" `;
   Sora(C1T111)`"Do you have any specialized knowledge about 
medical matters, Takeshi?"`;
   Takeshi`"Nope, not at all. Not a clue."`;
   Takeshi`"But, but, I'm just kinda worried!."`;
   `You and Sora tilted their heads curiously.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `TU08ADS`, name2: `CO08ADS`, name3: `KA03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `The Kid, his face anxious, was holding Pipi.`;
   `Coco was clearly exhausted and it looked hard 
for her to stand.`;
   `It was Tsugumi who was holding Coco's body up. `;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU17BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1T112)`"Hey Sora, what's that thing in the 
infirmary...uh, you know, the thing..."`;
   You(C1T113)`"Wasn't there some device that can diagnose 
medical conditions?"`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T114)`"Do you mean the L-MRI?"`;

});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1T115)`"Yeah, yeah, that's it!"`;
   You(C1T116)`"So if we scan her with that, we can tell for 
sure whether it is decompression sickness, 
right?"`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T117)`"Unfortunately, that will not be possible."`;
   You(C1T118)`"Really? Why not?"`;
   Sora(C1T119)`"I already checked into that. The machine is 
broken." `;
   Sora(C1T120)`"I'm afraid it may take some time to both 
inspect and repair the device."`;

});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1T121)`"Oh, really..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(C1T122)`"Well anyway there's no use talking about it 
here!"`;
   Kid(C1T123)`"We've gotta get Coco to the infirmary right 
away!"`;
   Takeshi`"Yeah, we should get going."`;
   `I crouched in front of Coco and took her over 
my shoulders.`;

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
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We were rushing up to Zweite stock some 
55 feet above us.`;
   `I held Coco on my back, with You and 
Tsugumi supporting her from the sides.`;
   `Sora went ahead to guide us, and the kid 
followed a short distance behind.`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   `We emerged at the second floor emergency 
corridor.`;
   Takeshi`"Hey, are you sure we shouldn't take a normal 
corridor?"`;

});
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T124)`"Please proceed straight ahead. This is a 
shortcut."`;

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
   `The emergency corridor was directly connected 
to the lift below the infirmary.`;
   Takeshi`"Whew! We made it. Let's get her up there."`;
   Sora(C1T125)`"No, Takeshi. Please go ahead into that room 
there."`;
   Takeshi`"Huh?"`;

});
bgload({ name: `BG10A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T126)`"This is a medical compression chamber. 
We can treat decompression sickness here."`;

});
if (l_skeptical_about_coco_having_decompression_sickness == 0) goto(lbl_000003bc);
showTextbox();
text(() => {
   Sora(C1T127)`"Indeed, as Takeshi observed, we cannot be 
certain whether or not it is decompression 
sickness just now."`;
   Sora(C1T128)`"However, assuming that it is decompression 
sickness, if we do not act immediately, her 
chances of recovery decrease immensely..."`;
   Takeshi`"So this uh, recompression thing, we can do it 
here?"`;
   Sora(C1T129)`"Yes, that is correct."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I laid Coco down on the bed.`;
   `You, Tsugumi, and the Kid all studied Coco's 
face.`;
   Takeshi`"Hey, wait a minute, Sora. What are we gonna 
do if it turns out to be something else?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T130)`"Compression treatment has no side effects in 
and of itself."`;
   Sora(C1T131)`"Furthermore, even if it is a different 
illness, I do not think it will make her 
condition worse."`;
   Sora(C1T132)`"Therefore, I think we should try this once 
and observe her condition. If there is no 
improvement, we should then consider another 
approach."`;
   Sora(C1T133)`"This seems to me to be the most appropriate 
treatment at the moment."`;

});
goto(lbl_00000428);
let lbl_000003bc;
showTextbox();
text(() => {
   You(C1T134)`"Just let her sleep there."`;
   Takeshi`"Okay, I got it."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I set Coco down on the bed.`;
   `Tsugumi and the Kid stood next to me and 
looked down at Coco.`;
   Takeshi`"So, You, what are you going to do in this 
tiny room? Isn't it a little cramped for 
examining her?"`;
   `The space was so small that with everyone in 
there we could hardly move.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1T135)`"I'm not going to do anything."`;
   Takeshi`"...What're you talking about?"`;
   You(C1T136)`"We're going to have Coco relax in this room 
for a while."`;
   Takeshi`"??"`;
   `I tilted my head, confused.`;
   Sora(C1T137)`"This is hyperbaric oxygen therapy. Allow me 
to explain."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T138)`"Decompression sickness occurs when there is a 
sudden change in the surrounding air pressure 
and gas bubbles that can't be discharged 
accrue in the body."`;
   Sora(C1T139)`"Gas becomes air bubbles and these gather in 
tissues or veins. When gas bubbles remain 
inside the body, the oxygen respiration 
efficiency drops dramatically."`;
   Takeshi`"So...no matter how many deep breaths you take 
it feels like you are suffocating?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T901)`"That is correct. But also, if any nitrogen 
which had dissolved in the blood turns to gas, 
it could produce a thrombus, or blood clot.`;
   Sora(C1T902)`Of course this could hinder blood circulation 
which is very dangerous...."`;
   Sora(C1T141)`"So we will seal this room and pump in a high 
concentration of oxygen, raising the level to 
approximately 3 atmospheres..."`;
   Sora(C1T142)`"Then we slowly decompress you back down to 1 
atmosphere."`;
   Sora(C1T143)`"Using this difference in pressure we dissolve 
the gas bubbles in her body back into the 
blood, where she get rid of them naturally by 
breathing."`;
   Takeshi`"So basically, you make us like 
a can of cola that won't blow up..."`;
   Sora(C1T144)`"Yes, precisely."`;

});
let lbl_00000428;
showTextbox();
text(() => {
   Takeshi`"Okay, I got it."`;
   `I lifted my hand.`;
   Takeshi`"Gosh that dash up the stairs sure wore me 
out..."`;
   `I heaved a breath.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T145)`"Oh, Takeshi, are you in pain at all?"`;
   Takeshi`"Huh, me? My muscles feel kinda sore and I'm a 
bit sluggish, but..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1T146)`"Hey, Takeshi, don't you think you should 
probably go in the room, too?"`;
   You(C1T147)`"In light cases of decompression sickness, you 
are not necessarily aware of it immediately."`;
   Takeshi`"After you figure out you're in trouble, it's 
too late...?"`;
   You(C1T148)`"Yeah. And the symptoms can be drawn out."`;
   Sora(C1T149)`"Yes...Just to be on the safe side, I want you 
all to enter the room."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `The decompression process took 
place over several hours.`;
   `Coco lay on the only bed.`;
   `The Kid, You, Pipi and I sat next to her.`;
   `It was cramped. `;
   `We were like sardines in a can. There was 
nowhere to move.`;

});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 120 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
bgload({ name: `BG10A1`, transition: 20 });
clock(`23:54`);
showTextbox();
text(() => {
   `I wondered what time it was...`;
   `I took out my PDA and checked.`;
   `11:54 p.m.....`;
   `I was sleepy.`;
   `Coco was sleeping and her breathing was 
relaxed. It looked like she was doing better.`;
   `It didn't look like You or the Kid were 
sleeping, but they sat quietly with their eyes 
closed.`;
   `Pipi had crawled under the bed.`;
   `Sora had sealed the hatch from outside and was 
adjusting the pressure as necessary.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Takeshi`"Sora, what about you? Don't you need to be 
treated?"`;
   `Before the process had started I had asked 
Sora this.`;
   Sora(C1T150)`"No. I'm used to this..."`;
   Sora(C1T151)`"Oh, also...everyone, please remove your 
voice converters during the 
repressurization process."`;
   Sora(C1T152)`"They are designed to protect your eardrum 
from the change in air pressure...however 
during pressurization they can interfere."`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
l_selection_0_available = 1;
if (l_is_coco_route == 0) goto(lbl_00000574);
if (l_skeptical_about_coco_having_decompression_sickness == 0) goto(lbl_00000574);
if (l_coco_point != 2) goto(lbl_00000574);
goto(lbl_00000591);
let lbl_00000574;
l_selection_0_available = 0;
l_choice = 4;
jump(`T_1C`);
let lbl_00000591;
showTextbox();
text(() => {
   `I removed the earphones that I had become 
completely used to, and held them in my hand.`;
   `Sora was still standing just outside the 
window by the hatch.`;
   `Tsugumi...wasn't inside or visible outside the 
room. She had left just before the 
pressurization process had started.`;

});
choice(
   `Where did Tsugumi go?`,
   `When was Sora going to sleep?`,
   cond(l_selection_0_available != 0)`Maybe Coco had some other illness after all?`,
);
switch (l_choice) {
   case 0: goto(lbl_000005c0);
   case 1: goto(lbl_0000069f);
   case 2: goto(lbl_000006b3);
}
let lbl_000005c0;
l_tsugumi_point += 2;
showTextbox();
text(() => {
   `Where the heck did Tsugumi go, anyway?`;
   `Just before the hatch was closed, 
she had suddenly started talking.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Tsugumi(T1C336)`"Uh..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C337)`"I'm leaving."`;
   Takeshi`"Hey, where are you going?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C338)`"There...is a place that I just realized I 
need to go to."`;
   Takeshi`"Where? Treatment is more urgent than that."`;

});
showTextbox();
text(() => {
   Tsugumi(T1C339)`"I don't need it."`;
   Takeshi`"Tsugumi, that's irresponsible and selfish!"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C340)`"I can't stay cooped up in this 
cramped place..."`;
   Tsugumi(T1C341)`"Well, I won't go escaping alone, so just 
take it easy."`;
   Takeshi`"That's not the point."`;
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C342)`"To be blunt, I don't have the patience 
for you. Any of you."`;
   `Tsugumi ignored You and me and went off 
somewhere.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `Sora had reported to us that she was 
somewhere on the floor and safe...`;
   `But it still bothered me a bit.`;
   `But it was Tsugumi after all. I was sure 
she'd probably be back in a little while 
saying something else.`;
   `That was what I thought, but nearly two hours 
had passed.`;
   `(I'll wait just a little bit longer.)`;
   `Still waiting, my eyelids grew heavier and 
heavier.`;

});
goto(lbl_000006c3);
let lbl_0000069f;
l_sora_point += 1;
showTextbox();
text(() => {
   `I wondered when Sora intended to sleep.`;
   `This simple doubt jumped into my mind.`;
   `She was doing minute, complex work nonstop 
and she was always on her feet.`;
   `Maybe she never got tired?`;
   `When I spoke with her over the interphone and 
asked her if she were alright, she laughed 
and said she was just fine.`;
   `And she was still standing outside the room 
as if sure were a sentinel guarding it.`;
   `Her back was straight and she never slouched, 
always looking like she was at attention.`;
   `I wondered if what she had said about being 
fine not sleeping days on end were true...?`;
   `(That really bothers me...)`;
   `I thought that I'd follow up on it later.`;
   `Even as I thought that, my eyelids got 
heavier and heavier.`;

});
goto(lbl_000006c3);
let lbl_000006b3;
l_coco_point += 1;
showTextbox();
text(() => {
   `Yeah, maybe Coco has something else after all.`;
   `I couldn't help that doubt from floating 
around my head.`;
   `I stole a glance at Coco's face.`;
   `She looked so calm while sleeping....`;
   `Two hours since we started repressurization - 
she was recovering well, just as Sora had 
said she would. It must've just been the 
bends after all. `;
   `That is, I had it wrong all along...`;
   `But even so, I couldn't help noticing a 
strange and uneasy feeling rising in me.`;
   `What was going on?`;
   `Why was I so convinced that she had some other 
illness from the start?`;
   `I couldn't figure it out at all.`;
   `It's just that something, I don't know what, 
kept whispering in my ear. `;
   `'This is no good, this is no good.'`;
   `Maybe I was just too tired?`;
   `I crouched next to her and patted Coco's soft 
hair.`;
   `My eyelids were weighty...`;

});
let lbl_000006c3;
showTextbox();
text(() => {
   `(But still....even so...)`;
   `(Today...really was...an eventful day...)`;
   `With that, I fell asleep.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopSFX()
delay({ interval: 150 });
l_choice = 0;
jump(`T_2A`);
