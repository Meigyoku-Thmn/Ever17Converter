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
   `—Dawn.`;
   `I was in the middle of a white darkness. `;
   `Before I knew it...'I' had become lost in another world.`;
   `I didn't even have time to wonder where I was, before I found the answer.`;
   `The year was 2017...`;
   `I could see it.`;
   `I could see everything.`;
   `I already knew...'What had happened at that time...'`;

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
   Tsugumi(T7T082)`"Takeshi..."`;
   Tsugumi(T7T083)`"Takeshi, get up."`;
   Tsugumi(T7T084)`"The taxi's here."`;
   Takeshi(C7A072)`"Oh, yeah..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA15ADM`, name2: `TU12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Takeshi jumped out of bed and stood up.`;
   `He stretched his arms and loosened his shoulders.`;
   `Takeshi and Tsugumi were still stuck in the examination room of the research facility.`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T085)`"Chami. Chami...come here."`;
   Tsugumi(T7T086)`"Come on, we've got to get going now."`;

});
showTextbox();
text(() => {
   `Tsugumi scooped up Chami, who'd been running around on the floor and held him to her chest.`;
   Tsugumi(T7T087)`"Huh...?"`;
   `Stooping down, Tsugumi let out a cry of alarm.`;

});
fgload({ id: 1, name: `TA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A073)`"What's wrong, Tsugumi?"`;
   Tsugumi(T7T088)`"Takeshi...under the bed."`;
   Takeshi(C7A074)`"Under the bed? Mine?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `He looked under the bed he had been sleeping on.`;
   `Something was lying there...`;
   `Reaching out, he pulled whatever it was closer to him.`;
   Takeshi(C7A075)`"Huh???"`;
   Tsugumi(T7T089)`"Pipi..."`;

});
showTextbox();
text(() => {
   Takeshi(C7A076)`"Hey Pipi, what's going on? What are you doing here?"`;
   `Takeshi picked Pipi up in both hands and shook him lightly.`;
   Pipi`"........."`;

});
showTextbox();
text(() => {
   `There was no response, and all of the color had vanished from his eyes.`;
   `He didn't move at all. Pipi was frozen...as if he were dead.`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `Suddenly...a faded, fragment of a memory appeared in the back of 'my' mind.`;
   `Although it had been weathered and tinged by the flow of the time, it was a scene that I was positive I knew.`;
   `It was a scrap of a conversation between Sara and Yubiseiakikana.`;
   //You'aki'
   You_aki_(S3A040)`"But really, that Konnie...I tell you, that robot dog looks so much like the real thing that I'll bet he is treating it like a normal pet."`;
   Sara(S3A041)`"Hey, didn't you have a robotic dog at your house?"`;
   //You'aki'
   You_aki_(S3A042)`"Yup, sure do. Actually, it's my mom's though..."`;
   //You'aki'
   You_aki_(S3A043)`"I think it's one of those really old types, but it just keeps ticking along happily. It never breaks."`;
   `If they were talking about Pipi that would mean...`;
   `Pipi was a robot...an electronic dog.`;
   `There wasn't any proof, but looking at Pipi's motionless body it was obvious that it wasn't the dead body of an animal.`;
   `Like a wind-up toy that had stopped moving, Pipi's limbs had frozen in an unnatural position.`;

});
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   `Takeshi and Tsugumi both observed Pipi, who had become nothing more than a broken toy.`;
   `Takeshi opened his mouth slightly.`;
   `It seemed like he was about to say something.`;

});
stopBGM();
showTextbox();
text(() => {
   `—Suddenly...`;

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
   `—Boooooooommm!!!`;

});
showTextbox();
text(() => {
   `With a roaring sound, the whole room shook violently.`;

});
closeDimInAndOutAndFilterAnim();
closeShakeScreenAnim();
showTextbox();
text(() => {
   `Takeshi's body flipped like a small twig and flew into the wall.`;
   `Tsugumi tumbled, and danced through the air to fall on the floor with a thud.`;

});
playBGM({ num: 17, volume: 95 });
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
eff_41 = 11;
eff_42 = 8;
eff_50 = 144;
showDimInAndOutAnim();
showTextbox();
text(() => {
   Announcement(C7A077A)`"Five minutes ${waitVoice}${voice(C7A077B)}until implosion."`;

});
fgload({ id: 1, name: `TA04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A078)`"Hey, WHAT did that announcement just say!?"`;
   `Holding Pipi under his arm, Takeshi looked up at the ceiling.`;

});
fgload({ id: 2, name: `TU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi quickly got up.`;

});
showTextbox();
text(() => {
   Tsugumi(T7T091)`"We've got five minutes...until this place implodes."`;

});
fgload({ id: 1, name: `TA18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A079)`"FIVE MINUTES!?"`;
   Takeshi(C7A080)`"Give me a break!"`;

});
fgload({ id: 1, name: `TA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A081)`"Why do they gotta tell us when there's only FIVE minutes left."`;
   Takeshi(C7A082)`"Give us some more warning... for cryin' out loud!"`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T092)`"*Sigh*..."`;
   Tsugumi(T7T093)`"Anyway, we've only got five minutes."`;
   `Tsugumi shrugged her shoulders exaggeratedly, and stared at Takeshi.`;

});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T094)`"You've just got to accept reality. You could learn something from me, you know?"`;

});
fgload({ id: 1, name: `TA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A083)`"Ha, ha, ha, listen to yourself, Tsugumi."`;
   Takeshi(C7A084)`"Telling jokes at a time like this is more MY style, don't you think?"`;

});
fgload({ id: 2, name: `TU02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T095)`"Ha, ha, well I guess you're right..."`;
   Tsugumi(T7T096)`"But we should be okay if we've got five minutes, right?"`;
   `A smile floated to her lips, and Tsugumi held out a hand to Takeshi.`;
   Takeshi(C7A085)`"Of course."`;
   `Takeshi took her hand firmly.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
removeFG({ id: 1, useAnim: false });
removeBG({ mode: RED, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(C7A086)}



${noWait}`;
   Append`${center}Four minutes until implosion.`;
   clearPage();
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
   `'I' continued to observe.`;
   `I accepted the world as it was, understood it, and input it.`;
   `I had no feelings.`;
   `Feelings seemed to me, to be something people give out in response to the world, as a way of igniting change in their surroundings.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG04B2`, transition: 26 });
closeDimInAndOutAndFilterAnim();
delay({ interval: 60 });
showTextbox();
text(() => {
   `But there at that time, I had no physical body.`;
   `I had no hands, nor feet, no voice, no lungs, no organs for generating heat.`;
   `In other words, I had no way of interacting with the world.`;
   `Therefore, even if I were to have had emotions, there was nothing I could do with them.`;
   `The only thing I could do was to watch...`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG20B2`, transition: 26 });
delay({ interval: 60 });
showTextbox();
text(() => {
   `What's more, the act of 'watching,' was much different that what normally be associated with 'sight.'`;
   `This type of 'vision' went far beyond feelings or thought—it was completely isolated, completely removed.`;
   `The passage of time had condensed down to one moment, and that had exploded in front of me.`;
   `I had seen everything in one instant.`;
   fadeClearPage();
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
   `One instant...`;
   `Standing still in a world where time had stopped, I saw everything.`;
   fadeClearPage();
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
ADV_Mode();
showTextbox();
text(() => {
   Takeshi(C7A087)`"Yes! At least something's going right..."`;
   Takeshi(C7A088)`"The taxi's even waiting for us!"`;

});
fgload({ id: 2, name: `TU12ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T098)`"Well, of course."`;
   Tsugumi(T7T099)`"It's a TAXI..."`;
   Tsugumi(T7T100)`"They aren't going to just leave us high-tipping customers here."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `In front of them, the small submarine bobbed gently in the waves.`;

});
showTextbox();
text(() => {
   Announcement(C7A093A)`"Three minutes ${waitVoice}${voice(C7A093B)}until implosion."`;

});
showTextbox();
text(() => {
   `Only three minutes left—`;
   `Takeshi and Tsugumi hurriedly scrambled onto the sub, and jumped down the hatch.`;

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
   `Tsugumi slid over to the driver's side of the cockpit, checked to see if the gauges were in order and flipped some switches.`;
   `The hatch overhead closed automatically.`;
   `Tsugumi took the controls.`;

});
playSFX({ name: `SE03_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The mini-sub made bubbling sounds and sunk quickly into the water.`;
   `As soon as they passed under the bottom of IBF, the ocean current pushed on the heavy hull of their vessel.`;
   `Takeshi looked out into the ocean from a small window attached to the wall.`;

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
   `LeMU was...breaking apart...`;
   `The frame started to warp and fold on itself, like some crumpled old newspaper.`;
   `Partitions cracked into small pieces and fluttered in the water as if they were petals falling from a flower...`;
   `Letting out its final breath, LeMU spewed out fine air bubbles into the sea, which flowed gently in the current...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `From the twisted wreckage, black smoke rose in the water.`;
   `The pieces of iron drifting in the ocean glittered from the sunlight coming from above.`;
   `And the edge of his rapidly clearing field of view, the sinking shadow of the brutal wreckage could be seen...`;
   `Paradise sank into dark blue darkness, raising a spine chilling death-cry.`;
   fadeClearPage();
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
ADV_Mode();
showTextbox();
text(() => {
   Tsugumi(T7T106)`"What...do we do from here?"`;
   `Tsugumi asked in a quiet voice.`;
   `The small egg-shaped vessel holding the two of them headed silently toward the surface.`;
   Takeshi(C7A094)`"There's so much that I want to do."`;
   Takeshi(C7A095)`"But, first..."`;
   Takeshi(C7A096)`"I'm thinking more about where to start."`;
   `Takeshi spoke as he placed the motionless Pipi, on the seat next to him.`;
   Tsugumi(T7T107)`"Hmmm..."`;
   Takeshi(C7A097)`"What about you Tsugumi, what do you want to do?"`;
   Tsugumi`"........."`;
   Takeshi(C7A098)`"What, you didn't like the question?"`;
   Tsugumi(T7T108)`"No, it's not that."`;
   Tsugumi(T7T109)`"Can I have a minute to think about it?"`;
   Takeshi(C7A099)`"Sure."`;
   `Takeshi smiled.`;
   `But that smile would soon fade...`;

});
stopBGM();
playSFX({ name: `SE10_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Wham...`;
   `A heavy ringing filled the submarine.`;

});
bgload({ name: `EV_TU15B`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(C7A100)`"What???"`;

});
showTextbox();
text(() => {
   Tsugumi(T7T110)`"What was that sound?"`;
   `Tsugumi looked at Takeshi worriedly...`;
   Takeshi(C7A101)`"I...dunno."`;

});
playSFX({ name: `SE03_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beep, beep.....`;
   `The operating console made a funny sound.`;
   Tsugumi(T7T111)`"What's that noise...?"`;
   Takeshi(C7A102)`"No clue..."`;
   Takeshi(C7A103)`"Hey, something just came up on that screen over there."`;
   `The monitor behind Tsugumi started blinking.`;
   Tsugumi(T7T112)`"What does it say...?"`;
   Takeshi(C7A104)`"You're closer than I am, why don't you turn around and look at it yourself."`;
   Tsugumi(T7T113)`"N...no..."`;
   Tsugumi(T7T114)`"I don't want to see it..."`;
   Tsugumi(T7T115)`"I've got...a really bad feeling about this."`;
   Takeshi(C7A105)`"Don't be so selfish."`;
   `Looking like he didn't have any other choice, Takeshi peeked at the monitor.`;
   Takeshi(C7A106)`"Ah...which one, which one..."`;
   Takeshi(C7A107)`"Uumm..."`;
   Takeshi(C7A108)`"'Low battery'"`;
   Takeshi(C7A109)`"...That's what it says."`;

});
bgload({ name: `EV_TU15C`, transition: 20 });
showTextbox();
text(() => {
   `As if responding to what Takeshi said, the lights in the sub suddenly went out.`;
   `The monitor went dark and all of the power went out.`;
   `The electrical equipment went silent.`;
   `The only thing still working was the analog pressure gauge.`;
   `Present depth—189 feet`;
   `Internal pressure—12.5 Atmospheres`;
   Tsugumi(T7T116)`"Ta-Takeshi..."`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 89 });
showTextbox();
text(() => {
   `Tsugumi's voice was shaking.`;
   Takeshi(C7A110)`"It's okay. We're going to be fine."`;
   Takeshi(C7A111)`"Stop looking like you're going to cry."`;
   `Depth—192 feet.`;
   `Its momentum lost...the submarine began sinking slowly, very slowly.`;
   `Residual air pressure: 0`;
   `Ballast Tank: Unable to drain.`;
   Takeshi(C7A112)`"Wonderful, we hitched a ride on a junker..."`;
   Takeshi(C7A113)`"You know, this cab always seems to stall on these country roads..."`;
   Takeshi(C7A114)`"I'm terribly sorry ma'am..."`;
   Tsugumi`"........."`;
   `Depth—195 feet.`;
   `Takeshi looked at the aft hatch.`;
   `It had a two-ply hatch...`;
   `An inner side was made of reinforced glass and FRP, and the outer side had a door made from high-strength steel.`;
   Takeshi(C7A115)`"Hey, you think if we let some of the high pressure gas out of the hatch we'd start rising again?"`;
   Tsugumi(T7T117)`"No..."`;
   Tsugumi(T7T118)`"I don't think we'll go straight up and our momentum would be limited. "`;
   Tsugumi(T7T119)`"Not to mention the fact that if we do that, we'll start flooding..."`;
   Tsugumi(T7T120)`"Because we don't have any more compressed air."`;
   Tsugumi(T7T121)`"And we don't have enough buoyancy in the main fuselage."`;
   Takeshi(C7A116)`"Buoyancy..."`;
   Tsugumi(T7T122)`"We've got to get rid of ballast..."`;
   Takeshi(C7A117)`"Ballast..."`;
   Tsugumi(T7T123)`"The valve used to release ballast is usually electronically controlled."`;
   Tsugumi(T7T124)`"But now, we're..."`;
   Takeshi(C7A118)`"Alright, let's just stay calm."`;
   Takeshi(C7A119)`"Judging by how fast we're sinking... we only need to be a little bit lighter, right?" `;
   Takeshi(C7A120)`"If we can get rid of about 100 pounds or so, we should be fine."`;
   Takeshi(C7A121)`"Let's try pulling out a few of those machines over there? That should make us lighter."`;
   Tsugumi(T7T125)`"You think it's going to be easy?"`;
   Takeshi(C7A122)`"Well...they seem to be welded on fairly good. Probably not easy to do bare-handed."`;
   Takeshi(C7A123)`"And unfortunately we don't have any tools..."`;
   Tsugumi(T7T126)`"So that's it, huh..."`;
   `Tsugumi bit her lip and looked down.`;
   Takeshi(C7A124)`"Yeah..."`;
   Takeshi(C7A125)`"We're screwed..."`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 86 });
showTextbox();
text(() => {
   `Depth—201 feet.`;
   `They were sinking...`;
   `Without any electricity the submarine was just a hunk of metal.`;
   Tsugumi(T7T127)`"Looks like we celebrated too soon..."`;
   Tsugumi(T7T128)`"Doesn't it..."`;
   Tsugumi(T7T129)`"Ha, ha, ha..."`;
   Tsugumi(T7T130)`"So stupid..."`;
   Tsugumi(T7T131)`"I'm so stupid..."`;
   `Tears began to fill Tsugumi's eyes...`;
   Tsugumi(T7T132)`"Ah!?"`;
   `Tsugumi raised her voice.`;
   `A single tear fell, rolling down cheek.`;
   Tsugumi(T7T133)`"W-what are you doing Takeshi!?"`;
   Takeshi(C7A126)`"What...you can't tell by looking?"`;
   Takeshi(C7A127)`"I'm opening the hatch."`;
   Tsugumi(T7T134)`"That's why I'm asking you! What are you doing!"`;
   Takeshi(C7A128)`"Do you even need to ask?"`;
   Tsugumi(T7T135)`"Stop it!!"`;
   Tsugumi(T7T136)`"What are you planning to do!?"`;
   `Tsugumi grabbed onto Takeshi's arm.`;
   Takeshi(C7A129)`"Don't try to stop me..."`;

});
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   `He threw off Tsugumi's arm and raised up the glass hatch.`;
   `It was just large enough for one person to go through.`;
   Takeshi(C7A130)`"Please don't touch me..."`;
   Takeshi(C7A131)`"Don't touch me."`;
   Tsugumi(T7T137)`"No! I won't let you go!"`;
   `Tsugumi grabbed onto Takeshi's arm fiercely.`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 89 });
showTextbox();
text(() => {
   Tsugumi(T7T138)`"I don't care if I die... I'm not letting go."`;
   `Depth—207 feet.`;
   `They wouldn't stop sinking.`;
   `Slowly and steadily they fell.`;
   `Headed for the dark bottom of the ocean.`;
   Takeshi(C7A132)`"Hmmm..."`;
   Takeshi(C7A133)`"You know you really are selfish."`;
   Tsugumi`"........."`;
   Takeshi(C7A134)`"Hey, Tsugumi...?"`;
   Takeshi(C7A135)`"Do you know what the Archimedes principle is?"`;
   Tsugumi(T7T139)`"Huh?"`;
   `For that instant Tsugumi's grip relaxed.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `In that brief instant, Takeshi tore himself forcefully away from her grasp.`;

});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `He quickly opened the glass hatch, and slipped to the back of the airlock.`;
   `The area between the hatches was extremely cramped.`;
   `Takeshi closed the glass hatch from inside, and shut the latch right away.`;
   `They had passed a depth of 210 feet.`;

});
bgload({ name: `EV_TU16A`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T7T140)`"Takeshi! Takeshi!"`;

});
playSFX({ name: `SE00_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Tsugumi(T7T141)`"What are you doing? Open it up! Get out of there!"`;
   `Tsugumi wildly pounded on the reinforced glass with her fist.`;
   Takeshi(C7A136)`"Tsugumi...what are you saying?"`;
   Takeshi(C7A137)`"The glass is pretty thick you know, I really can't hear very well."`;
   Tsugumi(T7T142)`"You stupid idiot! Open it up this instant!"`;
   Tsugumi(T7T143)`"What are you thinkiiing!"`;

});
playSFX({ name: `SE00_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Tears started falling from Tsugumi's wide-open eyes.`;
   `Tsugumi desperately pounded the flat of her tear-covered hand against the glass.`;
   Takeshi(C7A138)`"Hey, wait a second didn't you..."`;
   Takeshi(C7A139)`"I thought you knew about Archimedes' principle ?"`;
   Takeshi(C7A140)`"I mean, I think you were the one that taught me about it?"`;
   Takeshi(C7A141)`"I guess you'd know then. Sorry about that. Ha, ha, ha..."`;
   Tsugumi(T7T144)`"This isn't funny! Stop joking!"`;
   Tsugumi(T7T145)`"This isn't...it's not about that!!"`;
   Tsugumi(T7T146)`"You fool...Takeshi, you idiot!!!"`;
   `Tsugumi sobbed as she screamed.`;
   Takeshi(C7A142)`"Yeah, I'm an idiot—The biggest one there is!"`;
   Takeshi(C7A143)`"You didn't know that? Tsugumi..."`;
   `Takeshi put one hand behind him on the other hatch.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `And slowly turned the handle.`;
   Tsugumi(T7T147)`"Ta...Takeshi...?"`;
   `Tsugumi froze in place.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(T7T148)`"No..."`;
   Tsugumi(T7T149)`"Do you really..."`;
   Tsugumi(T7T150)`"Want...to...die...?"`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi(C7A146)`"Don't worry."`;
   Takeshi(C7A147)`"I may be stupid but..."`;
   Takeshi(C7A148)`"I'm not that stupid."`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `And saying this, Takeshi continued to turn the handle on the other door without stopping.`;
   `Depth—219 feet.`;
   Tsugumi(T7T151)`"Please..."`;
   Tsugumi(T7T152)`"Don't leave me..."`;
   Tsugumi(T7T153)`"Don't leave me all by myself!"`;
   Takeshi(C7A149)`"There you go, always worrying..."`;
   `Takeshi forced a smile.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi(C7A150)`"I keep telling you, it's going to be okay, right?"`;
   Tsugumi(T7T154)`"Yes..."`;
   Takeshi(C7A151)`"You want to live, don't you...?"`;
   Tsugumi(T7T155)`"Yes..."`;
   Takeshi(C7A152)`"So live!"`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi(C7A153)`"As long as you're alive, live!"`;
   Takeshi(C7A154)`"Don't worry..."`;

});
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi(C7A155)`"I?"`;
   Takeshi(C7A156)`"I'm not going to die."`;

});
bgload({ name: `EV_TU16B`, transition: 0 });
showTextbox();
text(() => {
   `—222 feet.`;
   `The hatch on the bottom of the submarine opened.`;
   `The air, which had been compressed in the airlock, was jettisoned into the ocean. `;

});
hideTextbox();
stopSFX()
showDimOverlay();
showTextbox();
text(() => {
   `Takeshi's body shot out like a bullet into the water.`;
   `Bubbles flew everywhere.`;
   `An infinite number of white bubbles floated toward the surface.`;
   `They seemed like powdery snow caught in the wind...`;
   `Snow that flew toward the heavens.`;
   Tsugumi(T7T156)`"........!!"`;
   `He could no longer hear her voice.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `From the other side of the glass, he could make out her blurry outline .`;
   `Her face covered with tears. Her face was broken with sadness....`;

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
   `—225 feet.`;
   `Takeshi paddled through the water, holding on to the railing.`;
   `He closed the outside hatch.`;
   `He couldn't see her any more.`;
   `—228 feet.`;
   `He let go of his last source of support.`;
   `And kicked the sub.`;
   `Takeshi's body spun out as if it were dancing into a blue world.`;
   `—231 feet`;
   `He sank toward the bottom of the ocean.`;
   `White bubbles extended out beyond his field of vision...`;
   `Wobbling slowly upwards toward the heavens.`;
   `...........`;
   `........`;
   `...`;
   `Depth—357 feet.`;
   `Everything that he could see dissipated into the water.`;
   `Outlines faded, nothing came into focus, only light and shadow reflected in his eyes.`;
   `There was one thing, however, that he could see clearly through the haze.`;
   `A small white dot swaying in the distance.`;
   `Dazzling light from the sky, poured down on him from a single point. Its image burned into both his eyes.`;
   `*Blub*...He let out his last gasp of air.`;
   `Cold seawater poured into his lungs.`;
   `A blanket of blue darkness covered him in his final resting place.`;
   `His limbs, sprawled out on the rocky ocean floor, had stopped moving, like a marionette with its strings cut.`;

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
   Kid`"Dad..."`;
   `Back in the world of 2034`;
   `When I returned to consciousness I was crying.`;
   `Feelings overcame me in torrents, rushing through me hotly.`;
   `'Dad...is dead...'`;
   `The weight of my sadness pressed down on me, and a sense of futility tore a hole in my heart.`;
   `But...it was no time to be overcome by sadness.`;
   `Wiping the wetness from my cheeks, I looked at my surroundings.`;
   `A new day was breaking, just as it had been in 2017.`;
   `Through my tears, the blue sky and ocean came into my vision.`;

});
bgload({ name: `BG39A2`, transition: 20 });
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   `It seemed that I was above the floating island.`;
   `I could analyze the situation calmly, but the tears wouldn't stop.`;
   `I wiped them away with the palm of my hand and licked the large drops as they rolled past my mouth.`;
   `Squeezing my eyes shut tightly, I took in deep breaths to calm down.`;
   `I trembled slightly as I let out a sigh and looked around at my surroundings again.`;
   `It was definitely above the floating island...`;
   `The wind was blowing lightly and the green trees were swaying gently.`;
   `The morning sun was letting out golden rays onto the surface of the ocean.`;
   `It had been a while since I had been outdoors.... The wide blue sky.... The smell of the warm humid breeze...`;
   `But as beautiful as it seemed, it didn't help me one bit.`;
   `Rather, the richness of it all made me feel even more alienated.`;
   `(I'm all alone...and so terribly sad...)`;
   `I wiped away the tears, which continued to flow, and tried hard to suppress my urge to cry out.`;
   `I had to think...`;
   `It was no time to be crying...`;
   `I shook my head repeatedly and tried with all of my strength to collect my atrophied thoughts.`;
   Kid`"Think, think, THINK..."`;
   `First I needed to grasp the situation I was in.`;
   `I followed the threads of my memory...`;
   `I remembered having gotten safely out of LeMU, but had no memories after that.`;
   `I had no idea of what had happened after that.`;
   `I couldn't imagine that I had been standing outside all night...`;
   Kid`"H-huh?"`;
   `I suddenly realized that nobody else was there.`;
   `As I began to walk on grass, I looked wildly in all directions.`;
   `Soon...`;
   `I became aware of one solitary figure.`;
   `It was Kaburaki.`;
   `He had his back to a tree trunk and was staring out at the vast ocean.`;
   `I ran over to him and screamed at him.`;

});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Why would you do something like this!"`;
   Kaburaki`"........"`;
   Kid`"Answer me! I know everything now!"`;
   `Kaburaki was silent.`;
   `He wouldn't even look at me.`;
   `It was obvious that he was the closest person to being responsible for everything happening here.`;
   `'Takeshi Kuranari'— My father's name.`;
   `He had used this name to deceive us the whole time.`;
   `I drew even closer.`;
   Kid`"Say something! Don't just stand there!"`;
   Kaburaki`"........."`;
   Kid`"I said say something!"`;
   `I grabbed onto his shirt.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kaburaki(C7A000)`"I'm sorry, but I can't tell you anything..."`;
   `Kaburaki's eyes were wet.`;
   `He seemed to be thinking deeply about something as he gazed at me.`;
   Kaburaki(C7A001)`"But...I will tell you this..."`;
   Kaburaki(C7A002)`"This isn't over, okay?"`;
   Kaburaki(C7A003)`"It all starts from here..."`;
   Kaburaki(C7A004)`"Yeah...all of it starts from right now."`;
   `I relaxed my grip.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Kaburaki didn't say anything more, and walked away gazing in the direction of the distant horizon.`;
   `I stood there, vacantly staring at his back, while it became smaller and smaller.`;

});
stopBGM();
showTextbox();
text(() => {
   `Somebody tapped me on the shoulder.`;
   `I turned around and...`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora was standing right in front of me.`;
   Sora(C7A005)`"We've been waiting for you.."`;
   `'What are you doing here...?'`;
   `Only this thought didn't reach my lips.`;
   `There clearly was no RSD on this floating island.`;
   `But she had just...tapped me on the shoulder.`;
   `I couldn't process the information, and stood there gaping in confusion.`;
   `I reached out to touch Sora's arm, absentmindedly.`;
   `Her skin was smooth....it's texture slightly elastic...and warm to the touch...`;
   Sora(C7A006)`"Come this way..."`;
   `Sora grinned. `;
   `There was Sora, smiling as always.`;
   `I felt saved by her smile.`;

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
   `I was lead by Sora into the forest.`;
   `A small stone covered path was overgrown in a deep thicket...`;
   `The tips of the trees stretched up high, almost entangling one another. Hardly any light squeezed through.`;
   `There was no breeze here either.`;
   `The air was wet, and everything felt heavy and stagnant.`;
   `The small stone path snaked around randomly, and I soon lost all sense of direction as I continued walking.`;
   `I moved forward along that passage with no exit.`;
   `For some reason I did not say a word to Sora, whose back was in front of me.`;

});
bgload({ name: `EV_SO15B`, transition: 20 });
showTextbox();
text(() => {
   `I walked up beside her and interlaced my fingers in hers.`;
   `I didn't know why I did that.`;
   `Was I just curious, or had I wanted a sense of security?`;
   `Sora looked over at me and smiled.`;
   `Maybe the reason I grabbed onto her was just because I wanted to see her smile at me.`;
   `Not long afterward...`;
   `We finally emerged from the forest.`;
   `My field of view widened and beyond spread out an area of lush green grass, and the rich blue ocean.`;
   `My line of sight was drawn to the back of someone very familiar to me.`;

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
   `You was standing right in the center of the open space, and she was standing with her back to me.`;
   `And someone else...a woman who looked just like her. They were facing each other and standing still.`;
   `I braced against the rising tide of emotion within me, and went to stand over by them.`;
   `I flashed a look back.`;
   `Sora was standing at the entrance to the forest, and didn't appear to be coming closer.`;
   `In the center of that area were You, the lady and I..`;
   `The other lady—.`;
   `Of course I knew her name.`;
   `Tanaka...Yubiseiharukana...`;
   `She had been infected with the Cure virus, and although she seemed young she didn't look quite 17.`;
   `It was probably since her cells had divided for five years, which had caused her to age slightly.`;
   `In other words, her body was that of a 23 year old, but she was actually 35.`;
   `I looked over at You (Yubiseiakikana) standing next to me.`;
   `She had her hand curled into a fist and was glaring at her mother.`;
   `She was so mad she was shaking.`;
   `I realized...`;
   `That the person who had been manipulating everything behind the scenes had been the person standing in front of me - Yubisei'haru'kana, You's mother.`;
   `She'd been up here safe and sound on the island, relaxing, looking down at our plight and had probably been laughing the whole time.`;
   `I glared over at her along with You'aki'`;
   `You'haru' appeared indifferent to our stares, and said nonchalantly...`;
   //You'haru'
   You_haru_(C7A007)`"Do you have any questions?"`;
   `I laughed without thinking.`;
   `What the hell kind of thing was that to say?`;
   Kid`"Why..."`;
   Kid`"Why would you do something like this!?"`;
   //You'haru'
   You_haru_(C7A008)`"In order to call forth Blick Winkel."`;
   Kid`"What the heck is Blick Winkel!?"`;
   //You'haru'
   You_haru_(C7A009)`"You already know that, don't you?"`;
   //You'haru'
   You_haru_(C7A010)`"Blick Winkel—"`;
   //You'haru'
   You_haru_(C7A011)`"Is...you."`;
   Kid`"Me? I'm...Blick Winkel?"`;
   //You'haru'
   You_haru_(C7A012)`"Yes."`;
   //You'haru'
   You_haru_(C7A013)`"I'm not talking to Hokuto."`;
   //You'haru'
   You_haru_(C7A014)`"I'm talking to the 'perspective' on the other side of Hokuto."`;
   Kid`"......Perspective?"`;
   //You'haru'
   You_haru_(C7A015)`"Yes."`;
   //You'haru'
   You_haru_(C7A016)`"The third eye—Blick Winkel—"`;
   //You'haru'
   You_haru_(C7A017)`"The 'You' on the other side of Hokuto—"`;
   //You'haru'
   You_haru_(C7A018)`"That's right, the part of you that is looking at me right now..."`;
   //You'haru'
   You_haru_(C7A019)`"It is you who I am talking about."`;
   Kid`"........."`;
   //You'haru'
   You_haru_(C7A020)`"From the beginning, you've been the Kid."`;
   //You'haru'
   You_haru_(C7A021)`"When you overlapped with Hokuto, he lost his memory and became you."`;
   //You'haru'
   You_haru_(C7A022)`"So it makes sense that he had amnesia."`;
   //You'haru'
   You_haru_(C7A023)`"You had never lived in this world before."`;
   //You'haru'
   You_haru_(C7A024)`"You have no history here, no memories of this place."`;
   //You'haru'
   You_haru_(C7A025)`"On May 1, 2034 at 3:17 p.m.—You uttered your first words in this world, Kid."`;
   Kid`"........."`;

});
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A026)`"You aren't from this world."`;
   //You'haru'
   You_haru_(C7A027)`"You are looking down at this world from one dimension higher than this."`;
   //You'haru'
   You_haru_(C7A028)`"That's why you can see the future and the past."`;
   //You'haru'
   You_haru_(C7A029)`"Well...that's not all."`;
   //You'haru'
   You_haru_(C7A030)`"You can probably also see other time continua."`;
   //You'haru'
   You_haru_(C7A031)`"The reason the Kid could see the future is, you know all there is to know about this world."`;
   //You'haru'
   You_haru_(C7A032)`"It only makes sense that you didn't respond to the name Hokuto."`;
   //You'haru'
   You_haru_(C7A033)`"I mean, your real name isn't Hokuto, right?"`;
   Kid`"...I'm...I'm..."`;
   //You'haru'
   You_haru_(C7A034)`"You don't have to be afraid."`;
   //You'haru'
   You_haru_(C7A035)`"You don't have to lie to yourself."`;
   //You'haru'
   You_haru_(C7A036)`"So, show your true self -"`;
   //You'haru'
   You_haru_(C7A037)`"Answer me - truthfully..."`;

});
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A038)`"You aren't really a kid named Hokuto, are you?"`;
   Kid`"................."`;

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
   `${center}Who...am I?`;
   `${center}Who...are you?`;
   `${center}I am...Hokuto.`;
   `${center}Who...are you?`;
   `${center}Who...am I?`;
   `${center}You are...Hokuto.`;
   `${center}I am not...Hokuto...`;
   `${center}I am not Hokuto.... I am...me.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${center}I am...me.`;
   `${center}Yes...I remember...`;
   `${center}I am....I am me.`;
   `${center}I have...watched...your world... ${noWait}`;
   `${center}For...so long...watching...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${center}I am but a 'perspective'...`;
   `${center}An eye that transcends ${noWait}`;
   `${center}dimensional boundaries...`;
   `${center}I am the third eye...`;
   `${center}I am...`;
   `${center}I am...`;

});
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   `${center}${nextPage(0)}Blick...Winkel...${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG39A2`, transition: 26 });
fgload({ id: 1, name: `YH01ADM`, x: 320, useAnim: false });
setKomoreType(1);
showKomoreAnim();
hideTextbox();
ADV_Mode();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   BW`"I am..."`;
   BW`"I am.... I remember now..."`;
   BW`"I am...not from your world...am I...?"`;
   BW`"I am...not...Hokuto..."`;

});
fgload({ id: 1, name: `YH02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A039)`"Ha, ha, it sure has been a long time..."`;
   BW`"...A long time?"`;
   //You'haru'
   You_haru_(C7A040)`"No, don't worry about it..."`;
   //You'haru'
   You_haru_(C7A041)`"Thank you, for showing yourself..."`;
   BW`"Why...?"`;
   BW`"Please? Tell me, why?"`;
   BW`"Why did you have to do this?"`;

});
fgload({ id: 1, name: `YH01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A042)`"I already told you."`;
   //You'haru'
   You_haru_(C7A043)`"In order to...well, I suppose you could call it a summoning."`;
   BW`"In order to reach me, did you really have to do something so reckless and dangerous?"`;
   //You'haru'
   You_haru_(C7A044)`"Yes..."`;
   //You'haru'
   You_haru_(C7A045)`"Just as I explained earlier..."`;
   //You'haru'
   You_haru_(C7A046)`"You have been looking down on our world from your dimension...right?"`;
   BW`"........."`;
   //You'haru'
   You_haru_(C7A047)`"Let's say that there was a conscious being from the second dimension."`;
   //You'haru'
   You_haru_(C7A048)`"What do you think that the 2nd dimensional being would have to do, in order to make contact with the 3rd dimension?"`;
   //You'haru'
   You_haru_(C7A049)`"For instance, on an XY plane, there are some two-dimensional beings, points A B and C..."`;
   //You'haru'
   You_haru_(C7A050)`"And on in XYZ space, you have a three-dimensional being, point D."`;
   //You'haru'
   You_haru_(C7A051)`"Points A, B, and C can only move on an XY axis."`;
   //You'haru'
   You_haru_(C7A052)`"So how can they draw point D to them?"`;
   //You'haru'
   You_haru_(C7A053)`"You have point C move on the same line as points A & B."`;
   //You'haru'
   You_haru_(C7A054)`"When that happens, points A, B and C, form a line, and create a common plane with point D."`;
   //You'haru'
   You_haru_(C7A055)`"Meaning, point D becomes part of the same plane as points A, B and C."`;
   //You'haru'
   You_haru_(C7A056)`"When that happens, for the first time point D has the illusion that it is in the same world as A, B and C."`;
   //You'haru'
   You_haru_(C7A057)`"That's what we did..."`;
   //You'haru'
   You_haru_(C7A058)`"In creating a world where you couldn't tell if it was 2034 or 2017..."`;
   //You'haru'
   You_haru_(C7A059)`"Point D...in other words we were able to create the illusion that the 4th dimensional being 'The perspective: Blick Winkel,' was in our same reality."`;
   //You'haru'
   You_haru_(C7A060)`"And you showed yourself to us, descending into the space in front of us...."`;
   //You'haru'
   You_haru_(C7A061)`"We were waiting for you...all of us..."`;
   //You'haru'
   You_haru_(C7A062)`"We have been waiting for you for so long..."`;
   BW`"Why? Why were you waiting for me?"`;
   BW`"What reason could you have...to call for me?"`;
   //You'haru'
   You_haru_(C7A063)`"We just were following your directions."`;
   BW`"Huh?"`;
   //You'haru'
   You_haru_(C7A064)`"You called yourself."`;
   BW`"What do you mean?"`;
   //You'haru'
   You_haru_(C7A065)`"You needed us, and we needed you."`;
   BW`"Why?"`;

});
fgload({ id: 1, name: `YH03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A066)`"In order to save Coco and Takeshi we needed to borrow your powers."`;
   BW`"To save Coco, and Takeshi...?"`;
   //You'haru'
   You_haru_(C7A067)`"We are powerless to fight the flow of time."`;
   //You'haru'
   You_haru_(C7A068)`"There is nothing we can do about the past."`;

});
fgload({ id: 1, name: `YH01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A069)`"But you can."`;
   //You'haru'
   You_haru_(C7A070)`"The reason being that someone like you from the 4th dimension.."`;
   //You'haru'
   You_haru_(C7A071)`"Can travel freely through time..."`;

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
   `I saw it then. I saw everything.`;
   `My consciousness had detached from Hokuto, and gone back to the world of 2017.`;
   `Hokuto's feelings and thoughts, hadn't reached me.`;
   `But, our perspectives had overlapped.`;
   `An observer with no feelings...`;
   `All I could do was witness events as they passed...`;

});
hideTextbox();
stopBGM();
bgload({ name: `EV_TU15C`, transition: 20 });
showTextbox();
text(() => {
   `The submarine that Tsugumi was on had continued floating up and had already made it to the surface.`;
   `It was a small white vessel, rocking in the waves...`;
   `Shut inside the small submarine, Tsugumi's shoulders drooped as she sat in the cockpit in shock.`;
   `Having lost everything, she sat there spiritlessly, looking empty, like a glass ornament.`;
   `Just then...`;

});
playSFX({ name: `SE03_11`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Whiiiirrr...`;
   `The light came back on in Pipi's eyes, who moments before had been motionless at Tsugumi's feet.`;
   `He got up quickly.`;
   Tsugumi`"........."`;
   `She seemed to be unable to comprehend what was happening.`;
   `Pipi shook off his body, flashed a look up to Tsugumi's face walked over to stand in front of the glass hatch.`;

});
playSFX({ name: `SE08_06`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE08_06`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Scratch, scratch....`;
   `Pipi began pawing at the hatch.`;
   Tsugumi(C7A157)`"W-what's wrong...?"`;
   `Tsugumi mumbled weakly.`;
   Pipi(PIPI_12)`"Bow! Wow, wow! Wooo!"`;
   `Pipi stood facing the hatch and barked.`;
   Tsugumi(C7A158)`"...You want...to go outside?"`;
   Pipi(PIPI_01)`"Woof!"`;
   `Tsugumi's gaze wandered about as if she were thinking something over.`;
   `Pipi continued barking the whole time.`;
   `The submarine rocked gently in the waves...`;
   `Tsugumi put both her hands on the wall and looked outside of the window.`;
   Tsugumi(C7A159)`"...Um...okay."`;
   `Saying that, Tsugumi opened the hatch - not the glass one, but the heavy one on the top of the submarine.`;

});
hideTextbox();
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `A pure, white light flashed into the interior of the ship like the sharp edge of a blade.`;
   `Tsugumi squinted against the brightness...`;
   `She held up one hand to fend off the light and with the other pushed on the hatch with all her might.`;
   `She picked up Pipi and brought him outside of the boat.`;
   `Pipi kicked hard against the hull to fly into the air, and drawing a beautiful arch, he splashed into the ocean.`;

});
bgload({ name: `EV_SA13D`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `One mechanical dog, swimming in the ocean...`;
   `Down, down, down he went...`;

});
bgload({ name: `IMG06A`, transition: 20 });
showTextbox();
text(() => {
   `He didn't stop at 51 feet...102 feet...153 feet...`;
   `...204 feet...255 feet...306 feet...`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `—357 feet.`;
   `The hard rock surface deep in the blue darkness.`;
   `A man's body lay on the ocean bed...`;
   `Pipi bit onto his clothing and pulled`;
   `Was he trying to bring him somewhere?`;
   `Of course the man didn't move at all.`;
   `Pipi bit on some exposed flesh.`;
   `The man didn't respond. His life had expired.`;
   `All that remained there was a cold corpse...nothing more.`;
   `Something had fallen to his side.`;

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
   `A disk...`;
   `A terabyte disk...`;
   `Pipi picked it up in his mouth, and left the body behind.`;

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
   `He started swimming in the ocean...`;
   `Going sideways, he cut across the water...`;
   `At the bottom of the dark sea...there was only the cold surface of the rock and dark black sea water.`;
   `Occasionally delicate streams of light would pass by...`;
   `Perhaps Pipi had found something?`;
   `Without hesitation, Pipi swam straight toward the white building.`;

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
   `—Splash!`;
   `The face of a single dog broke the surface of the pool.`;
   `He stuck out his front legs onto the edge and climbed onto the floor.`;
   `He shook himself off.`;
   `Small droplets of water flew off in all directions, forming a mist.`;
   `The terabyte disk was still in his mouth.`;
   `Pipi ran.`;
   `He lost his footing on the wet floor, slipped and fell.`;
   `Standing up again, he readied himself and dashed off at a full gallop.`;

});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   `His pliant body shot like a coiled spring...`;
   `Pipi ran down the passages, breaking to the right, and turning to the left. He was aiming for something.`;
   //??
   Unk(C7A160)`"Pipi..."`;
   //??
   Unk(C7A161)`"...Pi...pi..."`;
   `Only her voice could be heard.`;
   Pipi(PIPI_01)`"Woof!"`;
   `Pipi barked loudly.`;
   `The disk fell out of his mouth to spin across the floor with a rattle.`;
   `Pipi quickly braked with all four legs, turned around to get the disk and dashed across the floor again.`;
   //??
   Unk(C7A162)`"Pipi..."`;
   //??
   Unk(C7A163)`"...Take...pyon..."`;

});
bgloadCrop({ name: `EV_CO18A`, transition: 0, x: 0, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   `When he turned the corner, her figure jumped out at him.`;
   `She was lying down in the middle of the passage.`;
   `Pipi ran over to her side.`;
   `He set down the disk on the floor, and biting at her clothes started pulling on her.`;
   `He tried desperately to pull her along, but just as he could not budge the man before, it was too much for his small frame to budge her.`;
   Pipi(PIPI_15)`"Woof! Woof woof!"`;
   //??
   Unk(C7A164)`"Pi-Pipi..."`;
   `She opened her eyes weakly.`;
   //??
   Unk(C7A165)`"Oh...where did you go...?"`;
   //??
   Unk(C7A166)`"I was...so worried...about you..."`;
   `Pipi licked her face.`;
   //??
   Unk(C7A167)`"...Where is...everyone...?"`;
   Pipi(PIPI_05)`"*whine* *whine*"`;
   //??
   Unk(C7A168)`"I don't understand when you whine..."`;
   `Pipi pulled on her clothes, and scratched her shoulder, grunting with his effort.`;
   Pipi(PIPI_14)`"Woof! Woof woof! Woof!"`;
   `Perhaps he realized there was nothing he could do, but Pipi barked frantically.`;
   //??
   Unk(C7A169)`"Hey, Pipi...?"`;
   //??
   Unk(C7A170)`"...Let's...go...home...?"`;
   //??
   Unk(C7A171)`"Daddy and...mommy...are waiting...for us..."`;
   //??
   Unk(C7A172)`"So..."`;
   //??
   Unk(C7A173)`"...let's...go..."`;
   //??
   Unk(C7A174)`"go...home..."`;
   //??
   Unk(C7A175)`"Okay...? Pipi..."`;

});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   `She closed her eyes quietly.`;
   Pipi(PIPI_15)`"Bow! Wow! Wow!"`;
   `No matter how much he barked at her, she wouldn't open her eyes.`;
   `Pipi started walking around the area.`;
   `He finally stopped, and picked up the disk that he had left on the floor and started running again.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG33A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Going back the way he came, he made it to the pool.`;
   `Without hesitating, he threw himself into the pool.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `He started swimming in the ocean...`;
   `Rising up, and up...`;
   `He didn't stop...306 feet...255 feet...204 feet...`;
   `153 feet...102 feet...51 feet...`;
   `—0 feet.`;

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
   `—SPLASH!`;
   `Pipi's face broke the surface.`;
   `The blue expanse of the sky loomed above him...`;
   `The sun had changed the water to a silvery color.`;

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
   `Someone was there to pick up Pipi, it was You'haru'.`;
   `She took the terabyte disk from his mouth, and looked at the digital recording of IBF that Pipi had taken with his eyes.`;
   `That was the first time that she realized the truth...`;
   `That left behind at the bottom of the ocean in the research facility was a single girl...`;
   fadeClearPage();
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
   `That girl was...Coco.`;
   `'It was Coco Yagami,' Yubiseiharukana said.`;
   fadeClearPage();
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
ADV_Mode();
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A176)`"Kaburaki and I, who had been infected by the TB virus were rescued by the salvage vessel."`;
   //You'haru'
   You_haru_(C7A177)`"But Coco wasn't aboard the submarine with us."`;
   //You'haru'
   You_haru_(C7A178)`"I was unconscious then, so I hadn't noticed..."`;
   //You'haru'
   You_haru_(C7A179)`"But I realized it afterwards."`;
   //You'haru'
   You_haru_(C7A180)`"Coco had been left behind in IBF..."`;
   BW`"I can't...believe it..."`;

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
   //Mission Control
   Mission_Control(C6A411)`"This is Insel null Control. Please respond."`;
   Takeshi(C6A412)`"This is the Examination Room in IBF 3, over!"`;
   //Mission Control
   Mission_Control(C6A413)`"Thank goodness...that's were you were."`;
   //Mission Control
   Mission_Control(C6A414)`"A little while ago we got a message from the dispatch team that they couldn't find you. You had us worried there."`;
   Takeshi(C6A415)`"I'm sorry, I was out for a bit."`;
   //Mission Control
   Mission_Control(C6A416)`"We were able to rescue the other three people in the examination room, and they are being cared for in the salvage vessel."`;
   Takeshi(C6A417)`"Is everyone okay!?"`;
   //Mission Control
   Mission_Control(C6A418)`"We can't say for sure...their conditions are serious."`;
   //Mission Control
   Mission_Control(C6A419)`"We're fighting against time. The submersible is going to surface soon, and we'll transfer them to a floating medical center."`;
   Takeshi(C6A420)`"Okay. You take care of them."`;

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
   BW`"The control center said..."`;
   BW`"They had rescued the other 3 people in the examination room..."`;
   BW`"So, why...?"`;
   //You'haru'
   You_haru_(C7A187)`"Those 'three people' were...me...Kaburaki and..."`;
   //You'haru'
   You_haru_(C7A188)`"One more...my father—Yoichi Tanaka."`;
   BW`"Why..."`;
   BW`"Why did the rescue team leave Coco there!?"`;
   //You'haru'
   You_haru_(C7A189)`"I heard it from them afterwards, but they said they couldn't find her..."`;
   BW`"Oh...I remember..."`;
   BW`"By the time the rescue squad got there, Coco wasn't in the examination room..."`;
   BW`"I don't know why, but for some reason Coco had gotten out of her capsule pod."`;
   BW`"So the only people left there were You, Kaburaki, and Mr. Tanaka, who was already dead..."`;
   //You'haru'
   You_haru_(C7A190)`"Yeah..."`;
   BW`"You and Kaburaki's condition was extremely serious."`;
   BW`"So they put the highest priority on saving the lives of those two...and the rescue squad left..."`;
   BW`"Meaning they...overlooked Coco... no...they abandoned her..."`;
   //You'haru'
   You_haru_`"........."`;
   `You pinched her eyes shut, her face distorted in sadness.`;
   BW`"What do you want me to do?"`;

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
   `By the time these words left my mouth, I had already returned to 2017.`;

});
monoColorOverlay({ interval: 0, color: WHITE });
showDimOverlay();
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `To that vast blue world...`;
   `On the bottom of the ocean lay the cruelly broken body of a man....`;
   `It didn't move...`;
   `What do you want me to do?`;
   `I'm not from this world.`;
   `The only thing that I can do is look...`;
   `Just look on...`;
   `You wanted to show me this dead body...?`;
   `It makes me sad.`;
   `Terribly sad.`;
   `He had thrown his life away to protect the woman he loved. It was heartbreaking.`;
   `His body had lost all warmth...`;
   `I kept staring`;
   `—just then!`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `(Dad!)`;
   `(DAD!!)`;
   `(DAAAAD!!!!`;
   `My awareness split, broke, fractured, as a powerful force of will woke up inside of me.`;
   `I was infused with an overwhelming passion.`;
   `Hokuto's indomitable belief, willpower, emotions, and psyche were like a raging inferno that engulfed me.`;
   `This ferocious and wild 'power' raged within me, and superseded my existence.`;
   `It exploded in a shower of white sparks of light, and roared like thunder.`;
   `Overwhelmed by the raw vigor, I withdrew.`;
   `It was no place for me to be...`;
   `Hokuto exploded with bottled-up emotions and threw his instinctive 'power' free into darkness.`;
   Kid(C7A191)`"Dad! Daad! Don't you die on me!"`;
   Kid(C7A192)`"Please don't die!"`;
   Kid(C7A193)`"I still haven't met you yet!"`;
   Kid(C7A194)`"Please don't leave me! Daaaad!"`;
   Kid(C7A195)`"Sara and I are waiting for you!"`;
   Kid(C7A196)`"Mom is waiting for you!"`;
   Kid(C7A197)`"Please don't leave her sad! Help us!"`;
   Kid(C7A198)`"You promised! You said 'I'm not going to die, no matter what!' Right?"`;
   Kid(C7A199)`"You swore you wouldn't let even one person die!"`;
   Kid(C7A200)`"Coco is still in the research facility!"`;
   Kid(C7A201)`"If you don't do something she's going to die!"`;
   Kid(C7A202)`"Daad!! Daaaaaaad!!"`;

});
hideTextbox();
playBGM({ num: 15, volume: 100 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `Takeshi...opened his eyes...`;
   `At the bottom of the seabed...under unbearable pressure...`;
   `He regained consciousness.`;
   `How many minutes had it been since he last breathed?`;
   `But he was undeniably alive.`;
   `He had revived...`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `'I...'`;
   `'I'm not going to die!'`;
   `'I promised her...!'`;
   `I could hear the screams of his mind in my ears.`;

});
bgload({ name: `IMG06A`, transition: 20 });
showTextbox();
text(() => {
   `Takeshi flipped over his body, kicking off the reef and began to swim.`;
   `He cut the water with his arms, and kicked with his legs, continuing to swim wildly through the water.`;
   `The water pressure did not phase him, and his body felt no resistance. He moved forward in the darkness as if he were skating on ice.`;
   `Bubbles trailed in an arc behind him.`;
   `He maintained an unthinkable speed, tearing apart the wall of water in front of him. His only source of guidance was a faint light visible ahead.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG33A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `—Splash!`;
   `His momentum carried him flying out of the water.`;
   `Takeshi pushed his face out of the water, wracked by a fit of violent coughing, and spewed out seawater from his lungs.`;
   `He clung to the edge of the pool.`;
   `Sucking in deep breaths of air.`;
   `He would partly take in a breath, only to throw up massive amounts of water.`;
   `He repeated this many times.`;
   `When the painful fits had finally died down, Takeshi lay exhausted like the dead.`;
   `Truth be told, he probably had been dead...`;
   `Takeshi crawled across the floor.`;
   `He flipped over on his back with a thud.`;
   `He couldn't move...`;
   `The sound of his heavy breathing echoed off of the walls.`;
   Kid(C7A203)`"Dad! Dad! Hang in there!"`;
   `Hokuto called out.`;
   Takeshi(C7A204)`"Ha, ha..."`;
   `Takeshi laughed.`;
   Takeshi(C7A205)`"I don't know...who the heck you are..."`;
   Takeshi(C7A206)`"But don't call me 'dad.'"`;
   Kid(C7A207)`"Dad..."`;
   Takeshi(C7A208)`"I'm telling you, I don't have any kids."`;
   Kid(C7A209)`"But I'm your son!"`;
   Takeshi(C7A210)`"Okay then, who's your mom?"`;
   Kid(C7A211)`"Tsugumi. Tsugumi is."`;
   Takeshi(C7A212)`"Ha, ha, ha, ha, ha!"`;
   Kid(C7A213)`"Um, laughing isn't going to change anything."`;
   Kid(C7A214)`"But, there's no way you're going to believe me..."`;
   Kid(C7A215)`"Because...I'm talking to you from...17 years in the future..."`;
   Takeshi(C7A216)`"Hmmm....17 years...that'd make it 2034, right...?"`;
   Takeshi(C7A217)`"By the way, where are you? I can't see you...anywhere..."`;
   Kid(C7A218)`"I'm close by you."`;

});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Takeshi peeled himself off the floor where he'd been lying and rose slowly.`;
   `He looked all around.`;
   Kid(C7A219)`"Even if you look for me, I don't think you can see me."`;
   Kid(C7A220)`"I'm only looking at you, dad."`;
   Takeshi(C7A221)`"I don't have a clue what you're talking about, but..."`;
   Kid(C7A222)`"My body isn't in your time."`;
   Kid(C7A223)`"And it isn't like I'm using a speaker to send my words to you."`;
   Kid(C7A224)`"I'm connected to your mind, talking to you."`;
   `Takeshi put his finger in his ear and wiggled it.`;

});
fgload({ id: 1, name: `TA03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A225)`"I must be hallucinating this. I wonder if I'm...."`;
   Kid(C7A226)`"No!"`;
   Kid(C7A227)`"You don't have time for this!"`;
   Kid(C7A228)`"We don't have time to waste!"`;

});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A229)`"Oh yeah, you mentioned earlier about Coco in the research facility, right?"`;
   Kid(C7A230)`"That's right."`;
   Kid(C7A231)`"Coco didn't get out in one of the submersibles."`;
   Kid(C7A232)`"The man from the rescue squad who told you about the survivors...he was talking about You, Kaburaki and...the researcher."`;

});
fgload({ id: 1, name: `TA03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A233)`"You've got to be joking...?"`;
   Kid(C7A234)`"You've got to go back and check the research facility one more time."`;
   Kid(C7A235)`"Coco's still in there."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
showTextbox();
text(() => {
   `Takeshi hurried down the corridor.`;
   `The research facility was almost entirely silent.`;
   `The only sound was the echo of Takeshi's shoes against the floor.`;
   `The corridor wound left and right. He searched around, but didn't find any signs of anyone.`;

});
hideTextbox();
bgload({ name: `BG35A1`, transition: 26 });
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Takeshi(C7A236)`"Hey, I don't see anyone..."`;
   Kid(C7A237)`"That's impossible!"`;
   Kid(C7A238)`"I'm telling you she's got to be there somewhere!"`;
   `Takeshi tilted his head, a bit quizzically.`;

});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A239)`"Well, I suppose I should thank you."`;
   Takeshi(C7A240)`"If you hadn't woken me up saying something stupid like 'Dad!'..."`;
   Takeshi(C7A241)`"I probably would have drowned..."`;
   Kid(C7A242)`"Are you alright?"`;

});
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A243)`"What do you think!?"`;
   Takeshi(C7A244)`"Just think about everything that has happened to me in the last few hours will you!?"`;
   Takeshi(C7A245)`"It started with getting Tief Blau, I got decompressed, re-compressed, and pumped up with Tsugumi's antibodies..."`;
   Takeshi(C7A246)`"And finally ended with getting sucked out to the bottom of the sea...and practically drowning..."`;

});
fgload({ id: 1, name: `TA03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A247)`"Well, I guess I DID kind of throw myself out there..."`;
   Kid(C7A248)`"In spite of all that...you seem to be doing alright to me..."`;

});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"........."`;
   Kid`"........."`;
   Takeshi(C7A249)`"W-well, I suppose.... Tsugumi's anti-bodies must've kicked in."`;
   `(Or maybe...)`;
   `(The effects of the Cure virus have already started)`;
   `(Nah, there's no way his DNA could be re-written so quickly...)`;
   `(But that might be another explanation for why Takeshi recovered so quickly from jumping into the water...)`;
   `(I have no way of knowing.)`;
   `(It doesn't matter though, he looks a lot better after walking around for a while.)`;
   `He looked strong even.`;
   `Takeshi walked down the passageway on steady legs.`;

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
   `He came to an intersection.`;
   `Checking quickly to the left and right, he set down the path to the left.`;
   `It was right after that.`;

});
fgload({ id: 1, name: `TA15AWM`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Takeshi(C7A250)`"Wait a sec..."`;
   Takeshi(C7A251)`"Did, something just...move right now?"`;
   `Without waiting for Hokuto's reply, Takeshi started running.`;

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
   Takeshi(C7A252)`"C-Coco!!"`;
   `Coco had fallen down in the corridor.`;

});
stopSFX()
showTextbox();
text(() => {
   `Takeshi rushed over to Coco and lifted up her motionless body.`;

});
bgload({ name: `EV_CO17A`, transition: 20 });
showTextbox();
text(() => {
   Coco(C7A253)`"Ta-Takepyon..."`;
   `Coco spoke faintly`;
   Takeshi(C7A254)`"What...what are you doing here...!?"`;
   Coco(C7A255)`"Umm... well...Pipi wasn't, um...I couldn't find him, and..."`;
   Coco(C7A256)`"So I...I went...looking for him..."`;
   `It appeared that Coco had gotten out of the pod by herself, before the rescue squad had arrive, and had gone off looking for Pipi.`;
   Takeshi(C7A257)`"You are the most...totally...totally..."`;
   `Takeshi shook his head dumbfounded.`;
   `Coco looked innocently at the exasperated Takeshi and said the following words.`;
   Coco(C7A258)`"Hey...?"`;
   Coco(C7A259)`"...Is everyone else...?"`;
   Coco(C7A260)`"...still... sleeping...?"`;

});
bgload({ name: `EV_CO17B`, transition: 20 });
showTextbox();
text(() => {
   `That was all Coco could say before she passed out.`;
   `The next instant....`;

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
   `——BOOOOOooooom!`;

});
showTextbox();
text(() => {
   `A loud explosion shook the walls of IBF.`;
   `The sound came from up above.`;
   `The falling wreckage from LeMU had probably collided with the roof of the research facility.`;
   `Paradise was still collapsing it seemed.`;
   `Takeshi quickly scooped up Coco's body and dashed across the floor.`;

});
closeDimInAndOutAndFilterAnim();
l_choice = 0;
jump(`YC7B`);
