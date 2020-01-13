l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
setSceneTitle({ index: 120 });
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
chapterCutin({ name: `00000000` });
monoColorOverlay({ interval: 0, color: BLACK });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Dawn.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was in the middle of a white darkness. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Before I knew it...'I' had become lost in 
another world.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't even have time to wonder where I was, 
before I found the answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The year was 2017...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see everything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I already knew...'What had happened at that 
time...'`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG34A1`, transition: 26 });
playBGM({ num: 7, volume: 100 });
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`4:11`);
showTextbox();
text(() => {
   marker; sound(`T7T082`); appendText; 
   Tsugumi`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T7T083`); appendText; 
   Tsugumi`"Takeshi, get up."`;
   waitForClick; clearText; marker; sound(`T7T084`); appendText; 
   Tsugumi`"The taxi's here."`;
   waitForClick; clearText; marker; sound(`C7A072`); appendText; 
   Takeshi`"Oh, yeah..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA15ADM`, name2: `TU12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi jumped out of bed and stood up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He stretched his arms and loosened his 
shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Tsugumi were still stuck in the 
examination room of the research facility.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7T085`); appendText; 
   Tsugumi`"Chami. Chami...come here."`;
   waitForClick; clearText; marker; sound(`T7T086`); appendText; 
   Tsugumi`"Come on, we've got to get going now."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi scooped up Chami, who'd been running 
around on the floor and held him to her chest.`;
   waitForClick; clearText; marker; sound(`T7T087`); appendText; 
   Tsugumi`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stooping down, Tsugumi let out a cry of alarm.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A073`); appendText; 
   Takeshi`"What's wrong, Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T7T088`); appendText; 
   Tsugumi`"Takeshi...under the bed."`;
   waitForClick; clearText; marker; sound(`C7A074`); appendText; 
   Takeshi`"Under the bed? Mine?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He looked under the bed he had been sleeping 
on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was lying there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Reaching out, he pulled whatever it was 
closer to him.`;
   waitForClick; clearText; marker; sound(`C7A075`); appendText; 
   Takeshi`"Huh???"`;
   waitForClick; clearText; marker; sound(`T7T089`); appendText; 
   Tsugumi`"Pipi..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C7A076`); appendText; 
   Takeshi`"Hey Pipi, what's going on? What are you doing 
here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi picked Pipi up in both hands and 
shook him lightly.`;
   waitForClick; clearText; marker; appendText; 
   Pipi`"........."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was no response, and all of the color 
had vanished from his eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't move at all. Pipi was frozen...as 
if he were dead.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly...a faded, fragment of a memory 
appeared in the back of 'my' mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although it had been weathered and tinged by 
the flow of the time, it was a scene that I 
was positive I knew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a scrap of a conversation between Sara 
and Yubiseiakikana.`;
   waitForClick; clearText; marker; sound(`S3A040`); appendText; 
   //You'aki'
   You_aki_`"But really, that Konnie...I tell you, that 
robot dog looks so much like the real thing 
that I'll bet he is treating it like a normal 
pet."`;
   waitForClick; clearText; marker; sound(`S3A041`); appendText; 
   Sara`"Hey, didn't you have a robotic dog at your 
house?"`;
   waitForClick; clearText; marker; sound(`S3A042`); appendText; 
   //You'aki'
   You_aki_`"Yup, sure do. Actually, it's my mom's 
though..."`;
   waitForClick; clearText; marker; sound(`S3A043`); appendText; 
   //You'aki'
   You_aki_`"I think it's one of those really old types, 
but it just keeps ticking along happily. It 
never breaks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`If they were talking about Pipi that would 
mean...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi was a robot...an electronic dog.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There wasn't any proof, but looking at Pipi's 
motionless body it was obvious that it wasn't 
the dead body of an animal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a wind-up toy that had stopped moving, 
Pipi's limbs had frozen in an unnatural 
position.`;
   waitForClick; clearText; 
});
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi and Tsugumi both observed Pipi, who 
had become nothing more than a broken toy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi opened his mouth slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like he was about to say something.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Suddenly...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
eff_4f = 120;
eff_3b = 1;
eff_3c = VAR_cc_0_6;
eff_3d = 12;
eff_3e = 2;
eff_3f = VAR_c8_0_6;
eff_40 = 5;
openShakeScreenAnim();
delay({ interval: 30 });
eff_41 = 4;
eff_42 = 12;
eff_50 = 0;
showDimInAndOutAnim();
delay({ interval: 5 });
monoColorOverlay({ interval: 0, color: BLACK });
setMonoColorOverlayFadeOutDuration(21);
fadeOutMonoColorOverlay();
unSkippableDelay(8);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Boooooooommm!!!`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With a roaring sound, the whole room shook 
violently.`;
   waitForClick; clearText; 
});
closeDimInAndOutAndFilterAnim();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi's body flipped like a small twig and 
flew into the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi tumbled, and danced through the air 
to fall on the floor with a thud.`;
   waitForClick; clearText; 
});
playBGM({ num: 17, volume: 95 });
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
eff_41 = 11;
eff_42 = 8;
eff_50 = 144;
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; sound(`C7A077A`); appendText; 
   Announcement`"Five minutes `;
   waitForSound; sound(`C7A077B`); appendText; 
   Narr`until implosion."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A078`); appendText; 
   Takeshi`"Hey, WHAT did that announcement just say!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding Pipi under his arm, Takeshi looked up 
at the ceiling.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi quickly got up.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T7T091`); appendText; 
   Tsugumi`"We've got five minutes...until this place 
implodes."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A079`); appendText; 
   Takeshi`"FIVE MINUTES!?"`;
   waitForClick; clearText; marker; sound(`C7A080`); appendText; 
   Takeshi`"Give me a break!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A081`); appendText; 
   Takeshi`"Why do they gotta tell us when there's only 
FIVE minutes left."`;
   waitForClick; clearText; marker; sound(`C7A082`); appendText; 
   Takeshi`"Give us some more warning... for cryin' out 
loud!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7T092`); appendText; 
   Tsugumi`"*Sigh*..."`;
   waitForClick; clearText; marker; sound(`T7T093`); appendText; 
   Tsugumi`"Anyway, we've only got five minutes."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi shrugged her shoulders exaggeratedly, 
and stared at Takeshi.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7T094`); appendText; 
   Tsugumi`"You've just got to accept reality. You could 
learn something from me, you know?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A083`); appendText; 
   Takeshi`"Ha, ha, ha, listen to yourself, Tsugumi."`;
   waitForClick; clearText; marker; sound(`C7A084`); appendText; 
   Takeshi`"Telling jokes at a time like this is more MY 
style, don't you think?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7T095`); appendText; 
   Tsugumi`"Ha, ha, well I guess you're right..."`;
   waitForClick; clearText; marker; sound(`T7T096`); appendText; 
   Tsugumi`"But we should be okay if we've got five 
minutes, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A smile floated to her lips, and Tsugumi held 
out a hand to Takeshi.`;
   waitForClick; clearText; marker; sound(`C7A085`); appendText; 
   Takeshi`"Of course."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi took her hand firmly.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
removeFG({ id: 1, useAnim: false });
removeBG_unk(3, 6, 2);
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`C7A086`); appendText; delay(0); 
   Narr`         Four minutes until implosion.`;
   waitForClick; clearText; 
});
monoColorOverlay({ interval: 0, color: BLACK });
stopSFX()
showDimOverlay();
bgload({ name: `BG27A1`, transition: 26 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c1_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 2;
openShakeScreenAnim();
eff_41 = 11;
eff_42 = 8;
eff_50 = 144;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'I' continued to observe.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I accepted the world as it was, understood 
it, and input it.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had no feelings.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Feelings seemed to me, to be something people 
give out in response to the world, as a way 
of igniting change in their surroundings.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG04B2`, transition: 26 });
closeDimInAndOutAndFilterAnim();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But there at that time, I had no physical body.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had no hands, nor feet, no voice, no lungs, 
no organs for generating heat.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`In other words, I had no way of interacting 
with the world.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Therefore, even if I were to have had 
emotions, there was nothing I could do with 
them.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The only thing I could do was to watch...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG20B2`, transition: 26 });
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What's more, the act of 'watching,' was much 
different that what normally be associated 
with 'sight.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This type of 'vision' went far beyond 
feelings or thought—it was completely 
isolated, completely removed.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The passage of time had condensed down to one 
moment, and that had exploded in front of me.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had seen everything in one instant.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `IMG02B`, transition: 26 });
closeShakeScreenAnim();
delay({ interval: 60 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One instant...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Standing still in a world where time had 
stopped, I saw everything.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
bgload({ name: `BG33A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TA16ADS`, name2: `TU11ADS`, x1: 176, x2: 464, useAnim: false });
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
eff_41 = 11;
eff_42 = 8;
eff_50 = 144;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`C7A087`); appendText; 
   Takeshi`"Yes! At least something's going right..."`;
   waitForClick; clearText; marker; sound(`C7A088`); appendText; 
   Takeshi`"The taxi's even waiting for us!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T7T098`); appendText; 
   Tsugumi`"Well, of course."`;
   waitForClick; clearText; marker; sound(`T7T099`); appendText; 
   Tsugumi`"It's a TAXI..."`;
   waitForClick; clearText; marker; sound(`T7T100`); appendText; 
   Tsugumi`"They aren't going to just leave us 
high-tipping customers here."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In front of them, the small submarine bobbed 
gently in the waves.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C7A093A`); appendText; 
   Announcement`"Three minutes `;
   waitForSound; sound(`C7A093B`); appendText; 
   Narr`until implosion."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Only three minutes left—`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Tsugumi hurriedly scrambled onto 
the sub, and jumped down the hatch.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopSFX()
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `EV_TU15A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi slid over to the driver's side of the 
cockpit, checked to see if the gauges were in 
order and flipped some switches.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hatch overhead closed automatically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took the controls.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The mini-sub made bubbling sounds and sunk 
quickly into the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As soon as they passed under the bottom of 
IBF, the ocean current pushed on the heavy 
hull of their vessel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked out into the ocean from a small 
window attached to the wall.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `IMG06A`, transition: 26 });
showFog2();
showDimOverlay();
playSFX({ name: `SE09_00L`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`LeMU was...breaking apart...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The frame started to warp and fold on itself, 
like some crumpled old newspaper.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Partitions cracked into small pieces and 
fluttered in the water as if they were petals 
falling from a flower...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Letting out its final breath, LeMU spewed out 
fine air bubbles into the sea, which flowed 
gently in the current...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`From the twisted wreckage, black smoke rose 
in the water.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The pieces of iron drifting in the ocean 
glittered from the sunlight coming from above.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And the edge of his rapidly clearing field of 
view, the sinking shadow of the brutal 
wreckage could be seen...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Paradise sank into dark blue darkness, 
raising a spine chilling death-cry.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
closeFog2();
delay({ interval: 60 });
stopBGM();
delay({ interval: 30 });
stopSFX()
delay({ interval: 30 });
bgload({ name: `EV_TU15A`, transition: 26 });
playBGM({ num: 19, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`T7T106`); appendText; 
   Tsugumi`"What...do we do from here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi asked in a quiet voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The small egg-shaped vessel holding the two 
of them headed silently toward the surface.`;
   waitForClick; clearText; marker; sound(`C7A094`); appendText; 
   Takeshi`"There's so much that I want to do."`;
   waitForClick; clearText; marker; sound(`C7A095`); appendText; 
   Takeshi`"But, first..."`;
   waitForClick; clearText; marker; sound(`C7A096`); appendText; 
   Takeshi`"I'm thinking more about where to start."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi spoke as he placed the motionless 
Pipi, on the seat next to him.`;
   waitForClick; clearText; marker; sound(`T7T107`); appendText; 
   Tsugumi`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`C7A097`); appendText; 
   Takeshi`"What about you Tsugumi, what do you want to 
do?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`C7A098`); appendText; 
   Takeshi`"What, you didn't like the question?"`;
   waitForClick; clearText; marker; sound(`T7T108`); appendText; 
   Tsugumi`"No, it's not that."`;
   waitForClick; clearText; marker; sound(`T7T109`); appendText; 
   Tsugumi`"Can I have a minute to think about it?"`;
   waitForClick; clearText; marker; sound(`C7A099`); appendText; 
   Takeshi`"Sure."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi smiled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that smile would soon fade...`;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE10_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Wham...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A heavy ringing filled the submarine.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU15B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C7A100`); appendText; 
   Takeshi`"What???"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T7T110`); appendText; 
   Tsugumi`"What was that sound?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked at Takeshi worriedly...`;
   waitForClick; clearText; marker; sound(`C7A101`); appendText; 
   Takeshi`"I...dunno."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beep, beep.....`;
   waitForClick; clearText; marker; appendText; 
   Narr`The operating console made a funny sound.`;
   waitForClick; clearText; marker; sound(`T7T111`); appendText; 
   Tsugumi`"What's that noise...?"`;
   waitForClick; clearText; marker; sound(`C7A102`); appendText; 
   Takeshi`"No clue..."`;
   waitForClick; clearText; marker; sound(`C7A103`); appendText; 
   Takeshi`"Hey, something just came up on that screen 
over there."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The monitor behind Tsugumi started blinking.`;
   waitForClick; clearText; marker; sound(`T7T112`); appendText; 
   Tsugumi`"What does it say...?"`;
   waitForClick; clearText; marker; sound(`C7A104`); appendText; 
   Takeshi`"You're closer than I am, why don't you turn 
around and look at it yourself."`;
   waitForClick; clearText; marker; sound(`T7T113`); appendText; 
   Tsugumi`"N...no..."`;
   waitForClick; clearText; marker; sound(`T7T114`); appendText; 
   Tsugumi`"I don't want to see it..."`;
   waitForClick; clearText; marker; sound(`T7T115`); appendText; 
   Tsugumi`"I've got...a really bad feeling about this."`;
   waitForClick; clearText; marker; sound(`C7A105`); appendText; 
   Takeshi`"Don't be so selfish."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking like he didn't have any other choice, 
Takeshi peeked at the monitor.`;
   waitForClick; clearText; marker; sound(`C7A106`); appendText; 
   Takeshi`"Ah...which one, which one..."`;
   waitForClick; clearText; marker; sound(`C7A107`); appendText; 
   Takeshi`"Uumm..."`;
   waitForClick; clearText; marker; sound(`C7A108`); appendText; 
   Takeshi`"'Low battery'"`;
   waitForClick; clearText; marker; sound(`C7A109`); appendText; 
   Takeshi`"...That's what it says."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU15C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As if responding to what Takeshi said, the 
lights in the sub suddenly went out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The monitor went dark and all of the power 
went out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The electrical equipment went silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only thing still working was the analog 
pressure gauge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Present depth—189 feet`;
   waitForClick; clearText; marker; appendText; 
   Narr`Internal pressure—12.5 Atmospheres`;
   waitForClick; clearText; marker; sound(`T7T116`); appendText; 
   Tsugumi`"Ta-Takeshi..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_02`, a1: 0, volume: 89 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi's voice was shaking.`;
   waitForClick; clearText; marker; sound(`C7A110`); appendText; 
   Takeshi`"It's okay. We're going to be fine."`;
   waitForClick; clearText; marker; sound(`C7A111`); appendText; 
   Takeshi`"Stop looking like you're going to cry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Depth—192 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Its momentum lost...the submarine began 
sinking slowly, very slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Residual air pressure: 0`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ballast Tank: Unable to drain.`;
   waitForClick; clearText; marker; sound(`C7A112`); appendText; 
   Takeshi`"Wonderful, we hitched a ride on a junker..."`;
   waitForClick; clearText; marker; sound(`C7A113`); appendText; 
   Takeshi`"You know, this cab always seems to stall on 
these country roads..."`;
   waitForClick; clearText; marker; sound(`C7A114`); appendText; 
   Takeshi`"I'm terribly sorry ma'am..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Depth—195 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked at the aft hatch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had a two-ply hatch...`;
   waitForClick; clearText; marker; appendText; 
   Narr`An inner side was made of reinforced glass 
and FRP, and the outer side had a door made 
from high-strength steel.`;
   waitForClick; clearText; marker; sound(`C7A115`); appendText; 
   Takeshi`"Hey, you think if we let some of the high 
pressure gas out of the hatch we'd start 
rising again?"`;
   waitForClick; clearText; marker; sound(`T7T117`); appendText; 
   Tsugumi`"No..."`;
   waitForClick; clearText; marker; sound(`T7T118`); appendText; 
   Tsugumi`"I don't think we'll go straight up and our 
momentum would be limited. "`;
   waitForClick; clearText; marker; sound(`T7T119`); appendText; 
   Tsugumi`"Not to mention the fact that if we do that, 
we'll start flooding..."`;
   waitForClick; clearText; marker; sound(`T7T120`); appendText; 
   Tsugumi`"Because we don't have any more compressed 
air."`;
   waitForClick; clearText; marker; sound(`T7T121`); appendText; 
   Tsugumi`"And we don't have enough buoyancy in the main 
fuselage."`;
   waitForClick; clearText; marker; sound(`C7A116`); appendText; 
   Takeshi`"Buoyancy..."`;
   waitForClick; clearText; marker; sound(`T7T122`); appendText; 
   Tsugumi`"We've got to get rid of ballast..."`;
   waitForClick; clearText; marker; sound(`C7A117`); appendText; 
   Takeshi`"Ballast..."`;
   waitForClick; clearText; marker; sound(`T7T123`); appendText; 
   Tsugumi`"The valve used to release ballast is usually 
electronically controlled."`;
   waitForClick; clearText; marker; sound(`T7T124`); appendText; 
   Tsugumi`"But now, we're..."`;
   waitForClick; clearText; marker; sound(`C7A118`); appendText; 
   Takeshi`"Alright, let's just stay calm."`;
   waitForClick; clearText; marker; sound(`C7A119`); appendText; 
   Takeshi`"Judging by how fast we're sinking... we only 
need to be a little bit lighter, right?" `;
   waitForClick; clearText; marker; sound(`C7A120`); appendText; 
   Takeshi`"If we can get rid of about 100 pounds or so, 
we should be fine."`;
   waitForClick; clearText; marker; sound(`C7A121`); appendText; 
   Takeshi`"Let's try pulling out a few of those 
machines over there? That should make us 
lighter."`;
   waitForClick; clearText; marker; sound(`T7T125`); appendText; 
   Tsugumi`"You think it's going to be easy?"`;
   waitForClick; clearText; marker; sound(`C7A122`); appendText; 
   Takeshi`"Well...they seem to be welded on fairly good. 
Probably not easy to do bare-handed."`;
   waitForClick; clearText; marker; sound(`C7A123`); appendText; 
   Takeshi`"And unfortunately we don't have any tools..."`;
   waitForClick; clearText; marker; sound(`T7T126`); appendText; 
   Tsugumi`"So that's it, huh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi bit her lip and looked down.`;
   waitForClick; clearText; marker; sound(`C7A124`); appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`C7A125`); appendText; 
   Takeshi`"We're screwed..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_02`, a1: 0, volume: 86 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Depth—201 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were sinking...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without any electricity the submarine was 
just a hunk of metal.`;
   waitForClick; clearText; marker; sound(`T7T127`); appendText; 
   Tsugumi`"Looks like we celebrated too soon..."`;
   waitForClick; clearText; marker; sound(`T7T128`); appendText; 
   Tsugumi`"Doesn't it..."`;
   waitForClick; clearText; marker; sound(`T7T129`); appendText; 
   Tsugumi`"Ha, ha, ha..."`;
   waitForClick; clearText; marker; sound(`T7T130`); appendText; 
   Tsugumi`"So stupid..."`;
   waitForClick; clearText; marker; sound(`T7T131`); appendText; 
   Tsugumi`"I'm so stupid..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tears began to fill Tsugumi's eyes...`;
   waitForClick; clearText; marker; sound(`T7T132`); appendText; 
   Tsugumi`"Ah!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi raised her voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A single tear fell, rolling down cheek.`;
   waitForClick; clearText; marker; sound(`T7T133`); appendText; 
   Tsugumi`"W-what are you doing Takeshi!?"`;
   waitForClick; clearText; marker; sound(`C7A126`); appendText; 
   Takeshi`"What...you can't tell by looking?"`;
   waitForClick; clearText; marker; sound(`C7A127`); appendText; 
   Takeshi`"I'm opening the hatch."`;
   waitForClick; clearText; marker; sound(`T7T134`); appendText; 
   Tsugumi`"That's why I'm asking you! What are you 
doing!"`;
   waitForClick; clearText; marker; sound(`C7A128`); appendText; 
   Takeshi`"Do you even need to ask?"`;
   waitForClick; clearText; marker; sound(`T7T135`); appendText; 
   Tsugumi`"Stop it!!"`;
   waitForClick; clearText; marker; sound(`T7T136`); appendText; 
   Tsugumi`"What are you planning to do!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grabbed onto Takeshi's arm.`;
   waitForClick; clearText; marker; sound(`C7A129`); appendText; 
   Takeshi`"Don't try to stop me..."`;
   waitForClick; clearText; 
});
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He threw off Tsugumi's arm and raised up the 
glass hatch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just large enough for one person to go 
through.`;
   waitForClick; clearText; marker; sound(`C7A130`); appendText; 
   Takeshi`"Please don't touch me..."`;
   waitForClick; clearText; marker; sound(`C7A131`); appendText; 
   Takeshi`"Don't touch me."`;
   waitForClick; clearText; marker; sound(`T7T137`); appendText; 
   Tsugumi`"No! I won't let you go!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grabbed onto Takeshi's arm fiercely.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_02`, a1: 0, volume: 89 });
showTextbox();
text(() => {
   marker; sound(`T7T138`); appendText; 
   Tsugumi`"I don't care if I die... I'm not letting go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Depth—207 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They wouldn't stop sinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Slowly and steadily they fell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Headed for the dark bottom of the ocean.`;
   waitForClick; clearText; marker; sound(`C7A132`); appendText; 
   Takeshi`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`C7A133`); appendText; 
   Takeshi`"You know you really are selfish."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`C7A134`); appendText; 
   Takeshi`"Hey, Tsugumi...?"`;
   waitForClick; clearText; marker; sound(`C7A135`); appendText; 
   Takeshi`"Do you know what the Archimedes principle 
is?"`;
   waitForClick; clearText; marker; sound(`T7T139`); appendText; 
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`For that instant Tsugumi's grip relaxed.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In that brief instant, Takeshi tore himself 
forcefully away from her grasp.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He quickly opened the glass hatch, and 
slipped to the back of the airlock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The area between the hatches was extremely 
cramped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi closed the glass hatch from inside, 
and shut the latch right away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They had passed a depth of 210 feet.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU16A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T7T140`); appendText; 
   Tsugumi`"Takeshi! Takeshi!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`T7T141`); appendText; 
   Tsugumi`"What are you doing? Open it up! Get out of 
there!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi wildly pounded on the reinforced 
glass with her fist.`;
   waitForClick; clearText; marker; sound(`C7A136`); appendText; 
   Takeshi`"Tsugumi...what are you saying?"`;
   waitForClick; clearText; marker; sound(`C7A137`); appendText; 
   Takeshi`"The glass is pretty thick you know, I really 
can't hear very well."`;
   waitForClick; clearText; marker; sound(`T7T142`); appendText; 
   Tsugumi`"You stupid idiot! Open it up this instant!"`;
   waitForClick; clearText; marker; sound(`T7T143`); appendText; 
   Tsugumi`"What are you thinkiiing!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tears started falling from Tsugumi's wide-open 
eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi desperately pounded the flat of her 
tear-covered hand against the glass.`;
   waitForClick; clearText; marker; sound(`C7A138`); appendText; 
   Takeshi`"Hey, wait a second didn't you..."`;
   waitForClick; clearText; marker; sound(`C7A139`); appendText; 
   Takeshi`"I thought you knew about Archimedes' 
principle ?"`;
   waitForClick; clearText; marker; sound(`C7A140`); appendText; 
   Takeshi`"I mean, I think you were the one that taught 
me about it?"`;
   waitForClick; clearText; marker; sound(`C7A141`); appendText; 
   Takeshi`"I guess you'd know then. Sorry about that. 
Ha, ha, ha..."`;
   waitForClick; clearText; marker; sound(`T7T144`); appendText; 
   Tsugumi`"This isn't funny! Stop joking!"`;
   waitForClick; clearText; marker; sound(`T7T145`); appendText; 
   Tsugumi`"This isn't...it's not about that!!"`;
   waitForClick; clearText; marker; sound(`T7T146`); appendText; 
   Tsugumi`"You fool...Takeshi, you idiot!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi sobbed as she screamed.`;
   waitForClick; clearText; marker; sound(`C7A142`); appendText; 
   Takeshi`"Yeah, I'm an idiot—The biggest one there 
is!"`;
   waitForClick; clearText; marker; sound(`C7A143`); appendText; 
   Takeshi`"You didn't know that? Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi put one hand behind him on the other 
hatch.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And slowly turned the handle.`;
   waitForClick; clearText; marker; sound(`T7T147`); appendText; 
   Tsugumi`"Ta...Takeshi...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi froze in place.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T7T148`); appendText; 
   Tsugumi`"No..."`;
   waitForClick; clearText; marker; sound(`T7T149`); appendText; 
   Tsugumi`"Do you really..."`;
   waitForClick; clearText; marker; sound(`T7T150`); appendText; 
   Tsugumi`"Want...to...die...?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C7A146`); appendText; 
   Takeshi`"Don't worry."`;
   waitForClick; clearText; marker; sound(`C7A147`); appendText; 
   Takeshi`"I may be stupid but..."`;
   waitForClick; clearText; marker; sound(`C7A148`); appendText; 
   Takeshi`"I'm not that stupid."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And saying this, Takeshi continued to turn the 
handle on the other door without stopping.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Depth—219 feet.`;
   waitForClick; clearText; marker; sound(`T7T151`); appendText; 
   Tsugumi`"Please..."`;
   waitForClick; clearText; marker; sound(`T7T152`); appendText; 
   Tsugumi`"Don't leave me..."`;
   waitForClick; clearText; marker; sound(`T7T153`); appendText; 
   Tsugumi`"Don't leave me all by myself!"`;
   waitForClick; clearText; marker; sound(`C7A149`); appendText; 
   Takeshi`"There you go, always worrying..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi forced a smile.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C7A150`); appendText; 
   Takeshi`"I keep telling you, it's going to be okay, 
right?"`;
   waitForClick; clearText; marker; sound(`T7T154`); appendText; 
   Tsugumi`"Yes..."`;
   waitForClick; clearText; marker; sound(`C7A151`); appendText; 
   Takeshi`"You want to live, don't you...?"`;
   waitForClick; clearText; marker; sound(`T7T155`); appendText; 
   Tsugumi`"Yes..."`;
   waitForClick; clearText; marker; sound(`C7A152`); appendText; 
   Takeshi`"So live!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C7A153`); appendText; 
   Takeshi`"As long as you're alive, live!"`;
   waitForClick; clearText; marker; sound(`C7A154`); appendText; 
   Takeshi`"Don't worry..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C7A155`); appendText; 
   Takeshi`"I?"`;
   waitForClick; clearText; marker; sound(`C7A156`); appendText; 
   Takeshi`"I'm not going to die."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU16B`, transition: 0 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—222 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hatch on the bottom of the submarine 
opened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air, which had been compressed in the 
airlock, was jettisoned into the ocean. `;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi's body shot out like a bullet into the 
water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Bubbles flew everywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An infinite number of white bubbles floated 
toward the surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They seemed like powdery snow caught in the 
wind...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Snow that flew toward the heavens.`;
   waitForClick; clearText; marker; sound(`T7T156`); appendText; 
   Tsugumi`"........!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He could no longer hear her voice.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`From the other side of the glass, he could 
make out her blurry outline .`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face covered with tears. Her face was 
broken with sadness....`;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 26 });
showDimOverlay();
delay({ interval: 60 });
delay({ interval: 20 });
delay({ interval: 20 });
stopBGM();
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—225 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi paddled through the water, holding on 
to the railing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He closed the outside hatch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't see her any more.`;
   waitForClick; clearText; marker; appendText; 
   Narr`—228 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He let go of his last source of support.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And kicked the sub.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's body spun out as if it were dancing 
into a blue world.`;
   waitForClick; clearText; marker; appendText; 
   Narr`—231 feet`;
   waitForClick; clearText; marker; appendText; 
   Narr`He sank toward the bottom of the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`White bubbles extended out beyond his field of 
vision...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wobbling slowly upwards toward the heavens.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...........`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; marker; appendText; 
   Narr`...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Depth—357 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything that he could see dissipated into 
the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Outlines faded, nothing came into focus, only 
light and shadow reflected in his eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was one thing, however, that he could 
see clearly through the haze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A small white dot swaying in the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dazzling light from the sky, poured down on 
him from a single point. Its image burned 
into both his eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`*Blub*...He let out his last gasp of air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cold seawater poured into his lungs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A blanket of blue darkness covered him in his 
final resting place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His limbs, sprawled out on the rocky ocean 
floor, had stopped moving, like a marionette 
with its strings cut.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
setDialogBoxColor(BLUE);
bgload({ name: `BG38A2`, transition: 26 });
delay({ interval: 60 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`5:36`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Dad..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Back in the world of 2034`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I returned to consciousness I was crying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Feelings overcame me in torrents, rushing 
through me hotly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Dad...is dead...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`The weight of my sadness pressed down on me, 
and a sense of futility tore a hole in my 
heart.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...it was no time to be overcome by sadness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wiping the wetness from my cheeks, I looked 
at my surroundings.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A new day was breaking, just as it had been 
in 2017.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Through my tears, the blue sky and ocean came 
into my vision.`;
   waitForClick; clearText; 
});
bgload({ name: `BG39A2`, transition: 20 });
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It seemed that I was above the floating island.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could analyze the situation calmly, but the 
tears wouldn't stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wiped them away with the palm of my hand 
and licked the large drops as they rolled 
past my mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Squeezing my eyes shut tightly, I took in deep 
breaths to calm down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I trembled slightly as I let out a sigh and 
looked around at my surroundings again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was definitely above the floating island...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wind was blowing lightly and the green 
trees were swaying gently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The morning sun was letting out golden rays 
onto the surface of the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been a while since I had been 
outdoors.... The wide blue sky.... The smell 
of the warm humid breeze...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But as beautiful as it seemed, it didn't help 
me one bit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rather, the richness of it all made me feel 
even more alienated.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'm all alone...and so terribly sad...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wiped away the tears, which continued to 
flow, and tried hard to suppress my urge to 
cry out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to think...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no time to be crying...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head repeatedly and tried with all 
of my strength to collect my atrophied 
thoughts.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Think, think, THINK..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`First I needed to grasp the situation I was in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed the threads of my memory...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered having gotten safely out of 
LeMU, but had no memories after that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea of what had happened after that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't imagine that I had been standing 
outside all night...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"H-huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suddenly realized that nobody else was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I began to walk on grass, I looked wildly 
in all directions.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I became aware of one solitary figure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was Kaburaki.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had his back to a tree trunk and was 
staring out at the vast ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran over to him and screamed at him.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Why would you do something like this!"`;
   waitForClick; clearText; marker; appendText; 
   Kaburaki`"........"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Answer me! I know everything now!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kaburaki was silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wouldn't even look at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was obvious that he was the closest person 
to being responsible for everything happening 
here.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Takeshi Kuranari'— My father's name.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had used this name to deceive us the whole 
time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I drew even closer.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Say something! Don't just stand there!"`;
   waitForClick; clearText; marker; appendText; 
   Kaburaki`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I said say something!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed onto his shirt.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A000`); appendText; 
   Kaburaki`"I'm sorry, but I can't tell you anything..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kaburaki's eyes were wet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He seemed to be thinking deeply about 
something as he gazed at me.`;
   waitForClick; clearText; marker; sound(`C7A001`); appendText; 
   Kaburaki`"But...I will tell you this..."`;
   waitForClick; clearText; marker; sound(`C7A002`); appendText; 
   Kaburaki`"This isn't over, okay?"`;
   waitForClick; clearText; marker; sound(`C7A003`); appendText; 
   Kaburaki`"It all starts from here..."`;
   waitForClick; clearText; marker; sound(`C7A004`); appendText; 
   Kaburaki`"Yeah...all of it starts from right now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I relaxed my grip.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kaburaki didn't say anything more, and walked 
away gazing in the direction of the distant 
horizon.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood there, vacantly staring at his back, 
while it became smaller and smaller.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Somebody tapped me on the shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned around and...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora was standing right in front of me.`;
   waitForClick; clearText; marker; sound(`C7A005`); appendText; 
   Sora`"We've been waiting for you.."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'What are you doing here...?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only this thought didn't reach my lips.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There clearly was no RSD on this floating 
island.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she had just...tapped me on the shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't process the information, and stood 
there gaping in confusion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out to touch Sora's arm, 
absentmindedly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her skin was smooth....it's texture slightly 
elastic...and warm to the touch...`;
   waitForClick; clearText; marker; sound(`C7A006`); appendText; 
   Sora`"Come this way..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora grinned. `;
   waitForClick; clearText; marker; appendText; 
   Narr`There was Sora, smiling as always.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt saved by her smile.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeFG({ id: 1, useAnim: false });
bgload({ name: `EV_SO15A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was lead by Sora into the forest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A small stone covered path was overgrown in a 
deep thicket...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tips of the trees stretched up high, 
almost entangling one another. Hardly any 
light squeezed through.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no breeze here either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air was wet, and everything felt heavy and 
stagnant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The small stone path snaked around randomly, 
and I soon lost all sense of direction as I 
continued walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I moved forward along that passage with no 
exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason I did not say a word to Sora, 
whose back was in front of me.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO15B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I walked up beside her and interlaced my 
fingers in hers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know why I did that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I just curious, or had I wanted a sense of 
security?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked over at me and smiled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe the reason I grabbed onto her was just 
because I wanted to see her smile at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not long afterward...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We finally emerged from the forest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My field of view widened and beyond spread 
out an area of lush green grass, and the rich 
blue ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My line of sight was drawn to the back of 
someone very familiar to me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_YU14A`, transition: 26 });
playBGM({ num: 16, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You was standing right in the center of the 
open space, and she was standing with her 
back to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And someone else...a woman who looked just 
like her. They were facing each other and 
standing still.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I braced against the rising tide of emotion 
within me, and went to stand over by them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I flashed a look back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was standing at the entrance to the 
forest, and didn't appear to be coming closer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the center of that area were You, the lady 
and I..`;
   waitForClick; clearText; marker; appendText; 
   Narr`The other lady—.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course I knew her name.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tanaka...Yubiseiharukana...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had been infected with the Cure virus, and 
although she seemed young she didn't look 
quite 17.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably since her cells had divided 
for five years, which had caused her to age 
slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In other words, her body was that of a 23 
year old, but she was actually 35.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked over at You (Yubiseiakikana) 
standing next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had her hand curled into a fist and was 
glaring at her mother.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was so mad she was shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That the person who had been manipulating 
everything behind the scenes had been the 
person standing in front of 
me - Yubisei'haru'kana, You's mother.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd been up here safe and sound on the 
island, relaxing, looking down at our plight 
and had probably been laughing the whole time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I glared over at her along with You'aki'`;
   waitForClick; clearText; marker; appendText; 
   Narr`You'haru' appeared indifferent to our stares, 
and said nonchalantly...`;
   waitForClick; clearText; marker; sound(`C7A007`); appendText; 
   //You'haru'
   You_haru_`"Do you have any questions?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed without thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What the hell kind of thing was that to say?`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why would you do something like this!?"`;
   waitForClick; clearText; marker; sound(`C7A008`); appendText; 
   //You'haru'
   You_haru_`"In order to call forth Blick Winkel."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What the heck is Blick Winkel!?"`;
   waitForClick; clearText; marker; sound(`C7A009`); appendText; 
   //You'haru'
   You_haru_`"You already know that, don't you?"`;
   waitForClick; clearText; marker; sound(`C7A010`); appendText; 
   //You'haru'
   You_haru_`"Blick Winkel—"`;
   waitForClick; clearText; marker; sound(`C7A011`); appendText; 
   //You'haru'
   You_haru_`"Is...you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Me? I'm...Blick Winkel?"`;
   waitForClick; clearText; marker; sound(`C7A012`); appendText; 
   //You'haru'
   You_haru_`"Yes."`;
   waitForClick; clearText; marker; sound(`C7A013`); appendText; 
   //You'haru'
   You_haru_`"I'm not talking to Hokuto."`;
   waitForClick; clearText; marker; sound(`C7A014`); appendText; 
   //You'haru'
   You_haru_`"I'm talking to the 'perspective' on the 
other side of Hokuto."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......Perspective?"`;
   waitForClick; clearText; marker; sound(`C7A015`); appendText; 
   //You'haru'
   You_haru_`"Yes."`;
   waitForClick; clearText; marker; sound(`C7A016`); appendText; 
   //You'haru'
   You_haru_`"The third eye—Blick Winkel—"`;
   waitForClick; clearText; marker; sound(`C7A017`); appendText; 
   //You'haru'
   You_haru_`"The 'You' on the other side of Hokuto—"`;
   waitForClick; clearText; marker; sound(`C7A018`); appendText; 
   //You'haru'
   You_haru_`"That's right, the part of you that is 
looking at me right now..."`;
   waitForClick; clearText; marker; sound(`C7A019`); appendText; 
   //You'haru'
   You_haru_`"It is you who I am talking about."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C7A020`); appendText; 
   //You'haru'
   You_haru_`"From the beginning, you've been the Kid."`;
   waitForClick; clearText; marker; sound(`C7A021`); appendText; 
   //You'haru'
   You_haru_`"When you overlapped with Hokuto, he lost his 
memory and became you."`;
   waitForClick; clearText; marker; sound(`C7A022`); appendText; 
   //You'haru'
   You_haru_`"So it makes sense that he had amnesia."`;
   waitForClick; clearText; marker; sound(`C7A023`); appendText; 
   //You'haru'
   You_haru_`"You had never lived in this world before."`;
   waitForClick; clearText; marker; sound(`C7A024`); appendText; 
   //You'haru'
   You_haru_`"You have no history here, no memories of this 
place."`;
   waitForClick; clearText; marker; sound(`C7A025`); appendText; 
   //You'haru'
   You_haru_`"On May 1, 2034 at 3:17 p.m.—You uttered 
your first words in this world, Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C7A026`); appendText; 
   //You'haru'
   You_haru_`"You aren't from this world."`;
   waitForClick; clearText; marker; sound(`C7A027`); appendText; 
   //You'haru'
   You_haru_`"You are looking down at this world from one 
dimension higher than this."`;
   waitForClick; clearText; marker; sound(`C7A028`); appendText; 
   //You'haru'
   You_haru_`"That's why you can see the future and the 
past."`;
   waitForClick; clearText; marker; sound(`C7A029`); appendText; 
   //You'haru'
   You_haru_`"Well...that's not all."`;
   waitForClick; clearText; marker; sound(`C7A030`); appendText; 
   //You'haru'
   You_haru_`"You can probably also see other time 
continua."`;
   waitForClick; clearText; marker; sound(`C7A031`); appendText; 
   //You'haru'
   You_haru_`"The reason the Kid could see the future is, 
you know all there is to know about this 
world."`;
   waitForClick; clearText; marker; sound(`C7A032`); appendText; 
   //You'haru'
   You_haru_`"It only makes sense that you didn't respond 
to the name Hokuto."`;
   waitForClick; clearText; marker; sound(`C7A033`); appendText; 
   //You'haru'
   You_haru_`"I mean, your real name isn't Hokuto, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...I'm...I'm..."`;
   waitForClick; clearText; marker; sound(`C7A034`); appendText; 
   //You'haru'
   You_haru_`"You don't have to be afraid."`;
   waitForClick; clearText; marker; sound(`C7A035`); appendText; 
   //You'haru'
   You_haru_`"You don't have to lie to yourself."`;
   waitForClick; clearText; marker; sound(`C7A036`); appendText; 
   //You'haru'
   You_haru_`"So, show your true self -"`;
   waitForClick; clearText; marker; sound(`C7A037`); appendText; 
   //You'haru'
   You_haru_`"Answer me - truthfully..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C7A038`); appendText; 
   //You'haru'
   You_haru_`"You aren't really a kid named Hokuto, are 
you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"................."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; delay(0); 
   Narr`                  Who...am I?`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 Who...are you?`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 I am...Hokuto.`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 Who...are you?`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                  Who...am I?`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`               You are...Hokuto.`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`              I am not...Hokuto...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`         I am not Hokuto.... I am...me.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; delay(0); 
   Narr`                   I am...me.`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`              Yes...I remember...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                I am....I am me.`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`        I have...watched...your world...
`;
   appendText; delay(0); 
   Narr`          For...so long...watching...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; delay(0); 
   Narr`          I am but a 'perspective'...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`             An eye that transcends 
`;
   appendText; delay(0); 
   Narr`           dimensional boundaries...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`             I am the third eye...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                    I am...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                    I am...`;
   waitForClick; 
   Narr`
`;
   
});
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`Blick...Winkel...`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG39A2`, transition: 26 });
fgload({ id: 1, name: `YH01ADM`, x: 320, useAnim: false });
setKomoreType(1);
showKomoreAnim();
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   BW`"I am..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"I am.... I remember now..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"I am...not from your world...am I...?"`;
   waitForClick; clearText; marker; appendText; 
   BW`"I am...not...Hokuto..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YH02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A039`); appendText; 
   //You'haru'
   You_haru_`"Ha, ha, it sure has been a long time..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"...A long time?"`;
   waitForClick; clearText; marker; sound(`C7A040`); appendText; 
   //You'haru'
   You_haru_`"No, don't worry about it..."`;
   waitForClick; clearText; marker; sound(`C7A041`); appendText; 
   //You'haru'
   You_haru_`"Thank you, for showing yourself..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Why...?"`;
   waitForClick; clearText; marker; appendText; 
   BW`"Please? Tell me, why?"`;
   waitForClick; clearText; marker; appendText; 
   BW`"Why did you have to do this?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YH01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A042`); appendText; 
   //You'haru'
   You_haru_`"I already told you."`;
   waitForClick; clearText; marker; sound(`C7A043`); appendText; 
   //You'haru'
   You_haru_`"In order to...well, I suppose you could call 
it a summoning."`;
   waitForClick; clearText; marker; appendText; 
   BW`"In order to reach me, did you really have to 
do something so reckless and dangerous?"`;
   waitForClick; clearText; marker; sound(`C7A044`); appendText; 
   //You'haru'
   You_haru_`"Yes..."`;
   waitForClick; clearText; marker; sound(`C7A045`); appendText; 
   //You'haru'
   You_haru_`"Just as I explained earlier..."`;
   waitForClick; clearText; marker; sound(`C7A046`); appendText; 
   //You'haru'
   You_haru_`"You have been looking down on our world from 
your dimension...right?"`;
   waitForClick; clearText; marker; appendText; 
   BW`"........."`;
   waitForClick; clearText; marker; sound(`C7A047`); appendText; 
   //You'haru'
   You_haru_`"Let's say that there was a conscious being 
from the second dimension."`;
   waitForClick; clearText; marker; sound(`C7A048`); appendText; 
   //You'haru'
   You_haru_`"What do you think that the 2nd dimensional 
being would have to do, in order to make 
contact with the 3rd dimension?"`;
   waitForClick; clearText; marker; sound(`C7A049`); appendText; 
   //You'haru'
   You_haru_`"For instance, on an XY plane, there are some 
two-dimensional beings, points A B and C..."`;
   waitForClick; clearText; marker; sound(`C7A050`); appendText; 
   //You'haru'
   You_haru_`"And on in XYZ space, you have a 
three-dimensional being, point D."`;
   waitForClick; clearText; marker; sound(`C7A051`); appendText; 
   //You'haru'
   You_haru_`"Points A, B, and C can only move on an XY 
axis."`;
   waitForClick; clearText; marker; sound(`C7A052`); appendText; 
   //You'haru'
   You_haru_`"So how can they draw point D to them?"`;
   waitForClick; clearText; marker; sound(`C7A053`); appendText; 
   //You'haru'
   You_haru_`"You have point C move on the same line as 
points A & B."`;
   waitForClick; clearText; marker; sound(`C7A054`); appendText; 
   //You'haru'
   You_haru_`"When that happens, points A, B and C, form a 
line, and create a common plane with point D."`;
   waitForClick; clearText; marker; sound(`C7A055`); appendText; 
   //You'haru'
   You_haru_`"Meaning, point D becomes part of the same 
plane as points A, B and C."`;
   waitForClick; clearText; marker; sound(`C7A056`); appendText; 
   //You'haru'
   You_haru_`"When that happens, for the first time point 
D has the illusion that it is in the same 
world as A, B and C."`;
   waitForClick; clearText; marker; sound(`C7A057`); appendText; 
   //You'haru'
   You_haru_`"That's what we did..."`;
   waitForClick; clearText; marker; sound(`C7A058`); appendText; 
   //You'haru'
   You_haru_`"In creating a world where you couldn't tell 
if it was 2034 or 2017..."`;
   waitForClick; clearText; marker; sound(`C7A059`); appendText; 
   //You'haru'
   You_haru_`"Point D...in other words we were able to 
create the illusion that the 4th dimensional 
being 'The perspective: Blick Winkel,' was in 
our same reality."`;
   waitForClick; clearText; marker; sound(`C7A060`); appendText; 
   //You'haru'
   You_haru_`"And you showed yourself to us, descending 
into the space in front of us...."`;
   waitForClick; clearText; marker; sound(`C7A061`); appendText; 
   //You'haru'
   You_haru_`"We were waiting for you...all of us..."`;
   waitForClick; clearText; marker; sound(`C7A062`); appendText; 
   //You'haru'
   You_haru_`"We have been waiting for you for so long..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Why? Why were you waiting for me?"`;
   waitForClick; clearText; marker; appendText; 
   BW`"What reason could you have...to call for me?"`;
   waitForClick; clearText; marker; sound(`C7A063`); appendText; 
   //You'haru'
   You_haru_`"We just were following your directions."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Huh?"`;
   waitForClick; clearText; marker; sound(`C7A064`); appendText; 
   //You'haru'
   You_haru_`"You called yourself."`;
   waitForClick; clearText; marker; appendText; 
   BW`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`C7A065`); appendText; 
   //You'haru'
   You_haru_`"You needed us, and we needed you."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Why?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YH03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A066`); appendText; 
   //You'haru'
   You_haru_`"In order to save Coco and Takeshi we needed 
to borrow your powers."`;
   waitForClick; clearText; marker; appendText; 
   BW`"To save Coco, and Takeshi...?"`;
   waitForClick; clearText; marker; sound(`C7A067`); appendText; 
   //You'haru'
   You_haru_`"We are powerless to fight the flow of time."`;
   waitForClick; clearText; marker; sound(`C7A068`); appendText; 
   //You'haru'
   You_haru_`"There is nothing we can do about the past."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YH01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A069`); appendText; 
   //You'haru'
   You_haru_`"But you can."`;
   waitForClick; clearText; marker; sound(`C7A070`); appendText; 
   //You'haru'
   You_haru_`"The reason being that someone like you from 
the 4th dimension.."`;
   waitForClick; clearText; marker; sound(`C7A071`); appendText; 
   //You'haru'
   You_haru_`"Can travel freely through time..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
closeKomoreAnim();
setDialogBoxColor(BLUE);
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setSceneTitle({ index: 121 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I saw it then. I saw everything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My consciousness had detached from Hokuto, 
and gone back to the world of 2017.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokuto's feelings and thoughts, hadn't 
reached me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, our perspectives had overlapped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An observer with no feelings...`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was witness events as they 
passed...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `EV_TU15C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The submarine that Tsugumi was on had 
continued floating up and had already made it 
to the surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a small white vessel, rocking in the 
waves...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shut inside the small submarine, Tsugumi's 
shoulders drooped as she sat in the cockpit in 
shock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Having lost everything, she sat there 
spiritlessly, looking empty, like a glass 
ornament.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_11`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whiiiirrr...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light came back on in Pipi's eyes, who 
moments before had been motionless at 
Tsugumi's feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He got up quickly.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed to be unable to comprehend what was 
happening.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi shook off his body, flashed a look up to 
Tsugumi's face walked over to stand in front 
of the glass hatch.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_06`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE08_06`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Scratch, scratch....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi began pawing at the hatch.`;
   waitForClick; clearText; marker; sound(`C7A157`); appendText; 
   Tsugumi`"W-what's wrong...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi mumbled weakly.`;
   waitForClick; clearText; marker; sound(`PIPI_12`); appendText; 
   Pipi`"Bow! Wow, wow! Wooo!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi stood facing the hatch and barked.`;
   waitForClick; clearText; marker; sound(`C7A158`); appendText; 
   Tsugumi`"...You want...to go outside?"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's gaze wandered about as if she were 
thinking something over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi continued barking the whole time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The submarine rocked gently in the waves...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi put both her hands on the wall and 
looked outside of the window.`;
   waitForClick; clearText; marker; sound(`C7A159`); appendText; 
   Tsugumi`"...Um...okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, Tsugumi opened the hatch - not the 
glass one, but the heavy one on the top of 
the submarine.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A pure, white light flashed into the interior 
of the ship like the sharp edge of a blade.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi squinted against the brightness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She held up one hand to fend off the light 
and with the other pushed on the hatch with 
all her might.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She picked up Pipi and brought him outside of 
the boat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi kicked hard against the hull to fly into 
the air, and drawing a beautiful arch, he 
splashed into the ocean.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA13D`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One mechanical dog, swimming in the ocean...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Down, down, down he went...`;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He didn't stop at 51 feet...102 feet...153 
feet...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...204 feet...255 feet...306 feet...`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—357 feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hard rock surface deep in the blue 
darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A man's body lay on the ocean bed...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi bit onto his clothing and pulled`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was he trying to bring him somewhere?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course the man didn't move at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi bit on some exposed flesh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The man didn't respond. His life had expired.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All that remained there was a cold 
corpse...nothing more.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something had fallen to his side.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 3, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `IT09A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A disk...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A terabyte disk...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi picked it up in his mouth, and left the 
body behind.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
showDimOverlay();
bgload({ name: `EV_SA13D`, transition: 20 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He started swimming in the ocean...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Going sideways, he cut across the water...`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the bottom of the dark sea...there was 
only the cold surface of the rock and dark 
black sea water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Occasionally delicate streams of light would 
pass by...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perhaps Pipi had found something?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without hesitation, Pipi swam straight toward 
the white building.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG33A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Splash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The face of a single dog broke the surface of 
the pool.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He stuck out his front legs onto the edge and 
climbed onto the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He shook himself off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Small droplets of water flew off in all 
directions, forming a mist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The terabyte disk was still in his mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi ran.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He lost his footing on the wet floor, slipped 
and fell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Standing up again, he readied himself and 
dashed off at a full gallop.`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`His pliant body shot like a coiled spring...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi ran down the passages, breaking to the 
right, and turning to the left. He was aiming 
for something.`;
   waitForClick; clearText; marker; sound(`C7A160`); appendText; 
   //??
   Unk`"Pipi..."`;
   waitForClick; clearText; marker; sound(`C7A161`); appendText; 
   //??
   Unk`"...Pi...pi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only her voice could be heard.`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi barked loudly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The disk fell out of his mouth to spin across 
the floor with a rattle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi quickly braked with all four legs, turned 
around to get the disk and dashed across the 
floor again.`;
   waitForClick; clearText; marker; sound(`C7A162`); appendText; 
   //??
   Unk`"Pipi..."`;
   waitForClick; clearText; marker; sound(`C7A163`); appendText; 
   //??
   Unk`"...Take...pyon..."`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_CO18A`, transition: 0, x: 0, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When he turned the corner, her figure jumped 
out at him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was lying down in the middle of the 
passage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi ran over to her side.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He set down the disk on the floor, and biting 
at her clothes started pulling on her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He tried desperately to pull her along, but 
just as he could not budge the man before, it 
was too much for his small frame to budge her.`;
   waitForClick; clearText; marker; sound(`PIPI_15`); appendText; 
   Pipi`"Woof! Woof woof!"`;
   waitForClick; clearText; marker; sound(`C7A164`); appendText; 
   //??
   Unk`"Pi-Pipi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She opened her eyes weakly.`;
   waitForClick; clearText; marker; sound(`C7A165`); appendText; 
   //??
   Unk`"Oh...where did you go...?"`;
   waitForClick; clearText; marker; sound(`C7A166`); appendText; 
   //??
   Unk`"I was...so worried...about you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi licked her face.`;
   waitForClick; clearText; marker; sound(`C7A167`); appendText; 
   //??
   Unk`"...Where is...everyone...?"`;
   waitForClick; clearText; marker; sound(`PIPI_05`); appendText; 
   Pipi`"*whine* *whine*"`;
   waitForClick; clearText; marker; sound(`C7A168`); appendText; 
   //??
   Unk`"I don't understand when you whine..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi pulled on her clothes, and scratched her 
shoulder, grunting with his effort.`;
   waitForClick; clearText; marker; sound(`PIPI_14`); appendText; 
   Pipi`"Woof! Woof woof! Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perhaps he realized there was nothing he 
could do, but Pipi barked frantically.`;
   waitForClick; clearText; marker; sound(`C7A169`); appendText; 
   //??
   Unk`"Hey, Pipi...?"`;
   waitForClick; clearText; marker; sound(`C7A170`); appendText; 
   //??
   Unk`"...Let's...go...home...?"`;
   waitForClick; clearText; marker; sound(`C7A171`); appendText; 
   //??
   Unk`"Daddy and...mommy...are waiting...for us..."`;
   waitForClick; clearText; marker; sound(`C7A172`); appendText; 
   //??
   Unk`"So..."`;
   waitForClick; clearText; marker; sound(`C7A173`); appendText; 
   //??
   Unk`"...let's...go..."`;
   waitForClick; clearText; marker; sound(`C7A174`); appendText; 
   //??
   Unk`"go...home..."`;
   waitForClick; clearText; marker; sound(`C7A175`); appendText; 
   //??
   Unk`"Okay...? Pipi..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She closed her eyes quietly.`;
   waitForClick; clearText; marker; sound(`PIPI_15`); appendText; 
   Pipi`"Bow! Wow! Wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how much he barked at her, she 
wouldn't open her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi started walking around the area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He finally stopped, and picked up the disk 
that he had left on the floor and started 
running again.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG33A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Going back the way he came, he made it to the 
pool.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without hesitating, he threw himself into the 
pool.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He started swimming in the ocean...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rising up, and up...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't stop...306 feet...255 feet...204 
feet...`;
   waitForClick; clearText; marker; appendText; 
   Narr`153 feet...102 feet...51 feet...`;
   waitForClick; clearText; marker; appendText; 
   Narr`—0 feet.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeBG({ mode: WHITE, transition: 2 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—SPLASH!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi's face broke the surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The blue expanse of the sky loomed above him...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sun had changed the water to a silvery 
color.`;
   waitForClick; clearText; 
});
hideTextbox();
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `IMG06A`, transition: 20 });
showDimOverlay();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Someone was there to pick up Pipi, it was 
You'haru'.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She took the terabyte disk from his mouth, and 
looked at the digital recording of IBF that 
Pipi had taken with his eyes.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That was the first time that she realized the 
truth...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That left behind at the bottom of the ocean 
in the research facility was a single girl...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 1 });
dimOff_ac = 0;
closeDimOverlay();
bgloadCrop({ name: `EV_CO18A`, transition: 20, x: 0, y: 0, hx: 800, hy: 600 });
tweenZoom({ x: 800, y: 0, hx: 800, hy: 600, duration: 120 });
bgloadCrop({ name: `EV_CO18A`, transition: 26, x: 800, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That girl was...Coco.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'It was Coco Yagami,' Yubiseiharukana said.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
setKomoreType(1);
showKomoreAnim();
bgload({ name: `BG39A2`, transition: 26 });
fgload({ id: 1, name: `YH03ADM`, x: 320, useAnim: true });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`C7A176`); appendText; 
   //You'haru'
   You_haru_`"Kaburaki and I, who had been infected by the 
TB virus were rescued by the salvage vessel."`;
   waitForClick; clearText; marker; sound(`C7A177`); appendText; 
   //You'haru'
   You_haru_`"But Coco wasn't aboard the submarine with us."`;
   waitForClick; clearText; marker; sound(`C7A178`); appendText; 
   //You'haru'
   You_haru_`"I was unconscious then, so I hadn't 
noticed..."`;
   waitForClick; clearText; marker; sound(`C7A179`); appendText; 
   //You'haru'
   You_haru_`"But I realized it afterwards."`;
   waitForClick; clearText; marker; sound(`C7A180`); appendText; 
   //You'haru'
   You_haru_`"Coco had been left behind in IBF..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"I can't...believe it..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
closeKomoreAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; sound(`C6A411`); appendText; 
   //Mission Control
   Mission_Control`"This is Insel null Control. Please respond."`;
   waitForClick; clearText; marker; sound(`C6A412`); appendText; 
   Takeshi`"This is the Examination Room in IBF 3, over!"`;
   waitForClick; clearText; marker; sound(`C6A413`); appendText; 
   //Mission Control
   Mission_Control`"Thank goodness...that's were you were."`;
   waitForClick; clearText; marker; sound(`C6A414`); appendText; 
   //Mission Control
   Mission_Control`"A little while ago we got a message from the 
dispatch team that they couldn't find you. 
You had us worried there."`;
   waitForClick; clearText; marker; sound(`C6A415`); appendText; 
   Takeshi`"I'm sorry, I was out for a bit."`;
   waitForClick; clearText; marker; sound(`C6A416`); appendText; 
   //Mission Control
   Mission_Control`"We were able to rescue the other three 
people in the examination room, and they are 
being cared for in the salvage vessel."`;
   waitForClick; clearText; marker; sound(`C6A417`); appendText; 
   Takeshi`"Is everyone okay!?"`;
   waitForClick; clearText; marker; sound(`C6A418`); appendText; 
   //Mission Control
   Mission_Control`"We can't say for sure...their conditions are 
serious."`;
   waitForClick; clearText; marker; sound(`C6A419`); appendText; 
   //Mission Control
   Mission_Control`"We're fighting against time. The submersible 
is going to surface soon, and we'll transfer 
them to a floating medical center."`;
   waitForClick; clearText; marker; sound(`C6A420`); appendText; 
   Takeshi`"Okay. You take care of them."`;
   waitForClick; clearText; 
});
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG39A2`, transition: 26 });
fgload({ id: 1, name: `YH03ADM`, x: 320, useAnim: true });
setKomoreType(1);
showKomoreAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   BW`"The control center said..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"They had rescued the other 3 people in the 
examination room..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"So, why...?"`;
   waitForClick; clearText; marker; sound(`C7A187`); appendText; 
   //You'haru'
   You_haru_`"Those 'three people' were...me...Kaburaki 
and..."`;
   waitForClick; clearText; marker; sound(`C7A188`); appendText; 
   //You'haru'
   You_haru_`"One more...my father—Yoichi Tanaka."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Why..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Why did the rescue team leave Coco there!?"`;
   waitForClick; clearText; marker; sound(`C7A189`); appendText; 
   //You'haru'
   You_haru_`"I heard it from them afterwards, but they 
said they couldn't find her..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Oh...I remember..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"By the time the rescue squad got there, Coco 
wasn't in the examination room..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"I don't know why, but for some reason Coco 
had gotten out of her capsule pod."`;
   waitForClick; clearText; marker; appendText; 
   BW`"So the only people left there were You, 
Kaburaki, and Mr. Tanaka, who was already 
dead..."`;
   waitForClick; clearText; marker; sound(`C7A190`); appendText; 
   //You'haru'
   You_haru_`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"You and Kaburaki's condition was extremely 
serious."`;
   waitForClick; clearText; marker; appendText; 
   BW`"So they put the highest priority on saving 
the lives of those two...and the rescue squad 
left..."`;
   waitForClick; clearText; marker; appendText; 
   BW`"Meaning they...overlooked Coco... no...they 
abandoned her..."`;
   waitForClick; clearText; marker; appendText; 
   //You'haru'
   You_haru_`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You pinched her eyes shut, her face distorted 
in sadness.`;
   waitForClick; clearText; marker; appendText; 
   BW`"What do you want me to do?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
closeKomoreAnim();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setSceneTitle({ index: 122 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`By the time these words left my mouth, I had 
already returned to 2017.`;
   waitForClick; clearText; 
});
monoColorOverlay({ interval: 0, color: WHITE });
showDimOverlay();
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`To that vast blue world...`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the bottom of the ocean lay the cruelly 
broken body of a man....`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't move...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What do you want me to do?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'm not from this world.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only thing that I can do is look...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just look on...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You wanted to show me this dead body...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It makes me sad.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Terribly sad.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had thrown his life away to protect the 
woman he loved. It was heartbreaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His body had lost all warmth...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept staring`;
   waitForClick; clearText; marker; appendText; 
   Narr`—just then!`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Dad!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(DAD!!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(DAAAAD!!!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`My awareness split, broke, fractured, as a 
powerful force of will woke up inside of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was infused with an overwhelming passion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokuto's indomitable belief, willpower, 
emotions, and psyche were like a raging 
inferno that engulfed me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This ferocious and wild 'power' raged within 
me, and superseded my existence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It exploded in a shower of white sparks of 
light, and roared like thunder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Overwhelmed by the raw vigor, I withdrew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no place for me to be...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokuto exploded with bottled-up emotions and 
threw his instinctive 'power' free into 
darkness.`;
   waitForClick; clearText; marker; sound(`C7A191`); appendText; 
   Kid`"Dad! Daad! Don't you die on me!"`;
   waitForClick; clearText; marker; sound(`C7A192`); appendText; 
   Kid`"Please don't die!"`;
   waitForClick; clearText; marker; sound(`C7A193`); appendText; 
   Kid`"I still haven't met you yet!"`;
   waitForClick; clearText; marker; sound(`C7A194`); appendText; 
   Kid`"Please don't leave me! Daaaad!"`;
   waitForClick; clearText; marker; sound(`C7A195`); appendText; 
   Kid`"Sara and I are waiting for you!"`;
   waitForClick; clearText; marker; sound(`C7A196`); appendText; 
   Kid`"Mom is waiting for you!"`;
   waitForClick; clearText; marker; sound(`C7A197`); appendText; 
   Kid`"Please don't leave her sad! Help us!"`;
   waitForClick; clearText; marker; sound(`C7A198`); appendText; 
   Kid`"You promised! You said 'I'm not going to 
die, no matter what!' Right?"`;
   waitForClick; clearText; marker; sound(`C7A199`); appendText; 
   Kid`"You swore you wouldn't let even one person 
die!"`;
   waitForClick; clearText; marker; sound(`C7A200`); appendText; 
   Kid`"Coco is still in the research facility!"`;
   waitForClick; clearText; marker; sound(`C7A201`); appendText; 
   Kid`"If you don't do something she's going to die!"`;
   waitForClick; clearText; marker; sound(`C7A202`); appendText; 
   Kid`"Daad!! Daaaaaaad!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 15, volume: 100 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi...opened his eyes...`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the bottom of the seabed...under unbearable 
pressure...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He regained consciousness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How many minutes had it been since he last 
breathed?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he was undeniably alive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had revived...`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'I...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I'm not going to die!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I promised her...!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear the screams of his mind in my 
ears.`;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi flipped over his body, kicking off 
the reef and began to swim.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He cut the water with his arms, and kicked 
with his legs, continuing to swim wildly 
through the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water pressure did not phase him, and his 
body felt no resistance. He moved forward in 
the darkness as if he were skating on ice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Bubbles trailed in an arc behind him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He maintained an unthinkable speed, tearing 
apart the wall of water in front of him. His 
only source of guidance was a faint light 
visible ahead.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG33A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Splash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`His momentum carried him flying out of the 
water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi pushed his face out of the water, 
wracked by a fit of violent coughing, and 
spewed out seawater from his lungs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He clung to the edge of the pool.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sucking in deep breaths of air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He would partly take in a breath, only to 
throw up massive amounts of water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He repeated this many times.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When the painful fits had finally died down, 
Takeshi lay exhausted like the dead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Truth be told, he probably had been dead...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi crawled across the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He flipped over on his back with a thud.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He couldn't move...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of his heavy breathing echoed off 
of the walls.`;
   waitForClick; clearText; marker; sound(`C7A203`); appendText; 
   Kid`"Dad! Dad! Hang in there!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokuto called out.`;
   waitForClick; clearText; marker; sound(`C7A204`); appendText; 
   Takeshi`"Ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi laughed.`;
   waitForClick; clearText; marker; sound(`C7A205`); appendText; 
   Takeshi`"I don't know...who the heck you are..."`;
   waitForClick; clearText; marker; sound(`C7A206`); appendText; 
   Takeshi`"But don't call me 'dad.'"`;
   waitForClick; clearText; marker; sound(`C7A207`); appendText; 
   Kid`"Dad..."`;
   waitForClick; clearText; marker; sound(`C7A208`); appendText; 
   Takeshi`"I'm telling you, I don't have any kids."`;
   waitForClick; clearText; marker; sound(`C7A209`); appendText; 
   Kid`"But I'm your son!"`;
   waitForClick; clearText; marker; sound(`C7A210`); appendText; 
   Takeshi`"Okay then, who's your mom?"`;
   waitForClick; clearText; marker; sound(`C7A211`); appendText; 
   Kid`"Tsugumi. Tsugumi is."`;
   waitForClick; clearText; marker; sound(`C7A212`); appendText; 
   Takeshi`"Ha, ha, ha, ha, ha!"`;
   waitForClick; clearText; marker; sound(`C7A213`); appendText; 
   Kid`"Um, laughing isn't going to change anything."`;
   waitForClick; clearText; marker; sound(`C7A214`); appendText; 
   Kid`"But, there's no way you're going to believe 
me..."`;
   waitForClick; clearText; marker; sound(`C7A215`); appendText; 
   Kid`"Because...I'm talking to you from...17 years 
in the future..."`;
   waitForClick; clearText; marker; sound(`C7A216`); appendText; 
   Takeshi`"Hmmm....17 years...that'd make it 2034, 
right...?"`;
   waitForClick; clearText; marker; sound(`C7A217`); appendText; 
   Takeshi`"By the way, where are you? I can't see 
you...anywhere..."`;
   waitForClick; clearText; marker; sound(`C7A218`); appendText; 
   Kid`"I'm close by you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi peeled himself off the floor where 
he'd been lying and rose slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked all around.`;
   waitForClick; clearText; marker; sound(`C7A219`); appendText; 
   Kid`"Even if you look for me, I don't think you 
can see me."`;
   waitForClick; clearText; marker; sound(`C7A220`); appendText; 
   Kid`"I'm only looking at you, dad."`;
   waitForClick; clearText; marker; sound(`C7A221`); appendText; 
   Takeshi`"I don't have a clue what you're talking 
about, but..."`;
   waitForClick; clearText; marker; sound(`C7A222`); appendText; 
   Kid`"My body isn't in your time."`;
   waitForClick; clearText; marker; sound(`C7A223`); appendText; 
   Kid`"And it isn't like I'm using a speaker to 
send my words to you."`;
   waitForClick; clearText; marker; sound(`C7A224`); appendText; 
   Kid`"I'm connected to your mind, talking to you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi put his finger in his ear and wiggled 
it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A225`); appendText; 
   Takeshi`"I must be hallucinating this. I wonder if 
I'm...."`;
   waitForClick; clearText; marker; sound(`C7A226`); appendText; 
   Kid`"No!"`;
   waitForClick; clearText; marker; sound(`C7A227`); appendText; 
   Kid`"You don't have time for this!"`;
   waitForClick; clearText; marker; sound(`C7A228`); appendText; 
   Kid`"We don't have time to waste!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A229`); appendText; 
   Takeshi`"Oh yeah, you mentioned earlier about Coco in 
the research facility, right?"`;
   waitForClick; clearText; marker; sound(`C7A230`); appendText; 
   Kid`"That's right."`;
   waitForClick; clearText; marker; sound(`C7A231`); appendText; 
   Kid`"Coco didn't get out in one of the 
submersibles."`;
   waitForClick; clearText; marker; sound(`C7A232`); appendText; 
   Kid`"The man from the rescue squad who told you 
about the survivors...he was talking about 
You, Kaburaki and...the researcher."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A233`); appendText; 
   Takeshi`"You've got to be joking...?"`;
   waitForClick; clearText; marker; sound(`C7A234`); appendText; 
   Kid`"You've got to go back and check the research 
facility one more time."`;
   waitForClick; clearText; marker; sound(`C7A235`); appendText; 
   Kid`"Coco's still in there."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi hurried down the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The research facility was almost entirely 
silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only sound was the echo of Takeshi's shoes 
against the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The corridor wound left and right. He searched 
around, but didn't find any signs of anyone.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG35A1`, transition: 26 });
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C7A236`); appendText; 
   Takeshi`"Hey, I don't see anyone..."`;
   waitForClick; clearText; marker; sound(`C7A237`); appendText; 
   Kid`"That's impossible!"`;
   waitForClick; clearText; marker; sound(`C7A238`); appendText; 
   Kid`"I'm telling you she's got to be there 
somewhere!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi tilted his head, a bit quizzically.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A239`); appendText; 
   Takeshi`"Well, I suppose I should thank you."`;
   waitForClick; clearText; marker; sound(`C7A240`); appendText; 
   Takeshi`"If you hadn't woken me up saying something 
stupid like 'Dad!'..."`;
   waitForClick; clearText; marker; sound(`C7A241`); appendText; 
   Takeshi`"I probably would have drowned..."`;
   waitForClick; clearText; marker; sound(`C7A242`); appendText; 
   Kid`"Are you alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A243`); appendText; 
   Takeshi`"What do you think!?"`;
   waitForClick; clearText; marker; sound(`C7A244`); appendText; 
   Takeshi`"Just think about everything that has 
happened to me in the last few hours will 
you!?"`;
   waitForClick; clearText; marker; sound(`C7A245`); appendText; 
   Takeshi`"It started with getting Tief Blau, I got 
decompressed, re-compressed, and pumped up 
with Tsugumi's antibodies..."`;
   waitForClick; clearText; marker; sound(`C7A246`); appendText; 
   Takeshi`"And finally ended with getting sucked out to 
the bottom of the sea...and practically 
drowning..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C7A247`); appendText; 
   Takeshi`"Well, I guess I DID kind of throw myself out 
there..."`;
   waitForClick; clearText; marker; sound(`C7A248`); appendText; 
   Kid`"In spite of all that...you seem to be doing 
alright to me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C7A249`); appendText; 
   Takeshi`"W-well, I suppose.... Tsugumi's anti-bodies 
must've kicked in."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Or maybe...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The effects of the Cure virus have already 
started)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Nah, there's no way his DNA could be 
re-written so quickly...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(But that might be another explanation for why 
Takeshi recovered so quickly from jumping 
into the water...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I have no way of knowing.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It doesn't matter though, he looks a lot 
better after walking around for a while.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked strong even.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi walked down the passageway on steady 
legs.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG35A1`, transition: 26 });
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He came to an intersection.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Checking quickly to the left and right, he 
set down the path to the left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was right after that.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15AWM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`C7A250`); appendText; 
   Takeshi`"Wait a sec..."`;
   waitForClick; clearText; marker; sound(`C7A251`); appendText; 
   Takeshi`"Did, something just...move right now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without waiting for Hokuto's reply, Takeshi 
started running.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 60 });
bgload({ name: `EV_CO17B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C7A252`); appendText; 
   Takeshi`"C-Coco!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco had fallen down in the corridor.`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi rushed over to Coco and lifted up her 
motionless body.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO17A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C7A253`); appendText; 
   Coco`"Ta-Takepyon..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco spoke faintly`;
   waitForClick; clearText; marker; sound(`C7A254`); appendText; 
   Takeshi`"What...what are you doing here...!?"`;
   waitForClick; clearText; marker; sound(`C7A255`); appendText; 
   Coco`"Umm... well...Pipi wasn't, um...I couldn't 
find him, and..."`;
   waitForClick; clearText; marker; sound(`C7A256`); appendText; 
   Coco`"So I...I went...looking for him..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It appeared that Coco had gotten out of the 
pod by herself, before the rescue squad had 
arrive, and had gone off looking for Pipi.`;
   waitForClick; clearText; marker; sound(`C7A257`); appendText; 
   Takeshi`"You are the most...totally...totally..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi shook his head dumbfounded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco looked innocently at the exasperated 
Takeshi and said the following words.`;
   waitForClick; clearText; marker; sound(`C7A258`); appendText; 
   Coco`"Hey...?"`;
   waitForClick; clearText; marker; sound(`C7A259`); appendText; 
   Coco`"...Is everyone else...?"`;
   waitForClick; clearText; marker; sound(`C7A260`); appendText; 
   Coco`"...still... sleeping...?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO17B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was all Coco could say before she passed 
out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next instant....`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG35A1`, transition: 26 });
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
eff_4f = 120;
eff_3b = 1;
eff_3c = VAR_cc_0_6;
eff_3d = 12;
eff_3e = 2;
eff_3f = VAR_c8_0_6;
eff_40 = 5;
openShakeScreenAnim();
delay({ interval: 30 });
eff_41 = 4;
eff_42 = 12;
eff_50 = 0;
showDimInAndOutAnim();
delay({ interval: 5 });
monoColorOverlay({ interval: 0, color: BLACK });
setMonoColorOverlayFadeOutDuration(21);
fadeOutMonoColorOverlay();
unSkippableDelay(8);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`——BOOOOOooooom!`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A loud explosion shook the walls of IBF.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound came from up above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The falling wreckage from LeMU had probably 
collided with the roof of the research 
facility.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Paradise was still collapsing it seemed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi quickly scooped up Coco's body and 
dashed across the floor.`;
   waitForClick; clearText; 
});
closeDimInAndOutAndFilterAnim();
l_choice = 0;
jump(`YC7B`);
