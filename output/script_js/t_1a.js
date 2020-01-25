l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
setDialogBoxColor(GREEN);
removeBG({ mode: WHITE, transition: 2 });
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
bgload({ name: `BG22A5`, transition: 0 });
setSceneTitle({ index: 4 });
clock(`15:17`);
showTextbox();
text(() => {
   `I turned the knob and the door to the elevator opened slowly.`;
   Announcement(T1A000)`"System wiederaufnahme."`;
   `I heard the mechanical announcement, but didn't understand what it meant. `;
   Takeshi`"The battery...is probably dead..."`;
   `I pushed the button, but my PDA didn't respond.`;
   `Thanks to the help of the backlight of my display, I had found the emergency manual opening mechanism for the door...`;
   Takeshi`"Hey, are you alive?"`;
   `I spoke to the girl.`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A001)`"...Yes."`;
   `She looked a little tired.`;
   `The floor was silent.`;
   `I heard the sound of water flowing somewhere.`;
   `It was a muffled sound....`;
   `But there was no sign of anyone around.`;
   Takeshi`"What's going on here?"`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A002)`"...I don't...know."`;
   Takeshi`"Let's go see if we can find anyone else."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG26A1R`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `We went into the corridor.`;
   `Most of doors were locked as if to keep us from intruding.`;
   `We found a floor directory, so we decided to look around the rooms listed on it.`;

});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG21A3`, transition: 20 });
showTextbox();
text(() => {
   `We came out to an open space.`;
   `It was called the 'rest area.'`;
   `On the floor, there were scattered a mess of bags, a pair of shoes, wrapping paper from the souvenir shop and other stuff. `;
   `As I had expected, there was no one there.`;
   `There was a thick set of shutters in the circular space in the center of the area.`;
   Takeshi`"...Ah, ha, ha, ha."`;
   `I laughed an empty laugh.`;
   Takeshi`"I wonder if this area is under construction."`;
   Takeshi`"That's probably why nobody's here. Yeah, I'll bet that's why."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl`"........."`;
   Takeshi`"Let's try the next place."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   `We continued down the path we had been walking.`;
   `The door down the corridor was shut firmly. `;
   Takeshi`"Doesn't this door open?"`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A003)`"I don't think it will. I don't see a switch."`;
   `We chose a corridor, which was open and walked slowly down it.`;
   `We didn't come across anyone.`;
   `It felt like we were walking a route that someone had set up for us....`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG07A1`, transition: 20 });
showTextbox();
text(() => {
   `A door on the side of the corridor had been left open and we went in.`;
   `There was a stand selling tuna sandwiches.`;
   `It smelled like they had been cooking until recently.`;
   Takeshi`"Hey, mister, I'll take two of the sandwiches that are half-price on weekdays."`;
   Takeshi`"...If only someone were here..."`;
   Takeshi`"Looks like he ran off and left his stand. Doesn't he have any pride?"`;
   Takeshi`"Huh? There aren't any other customers here!"`;
   Takeshi`"Business isn't exactly booming, is it."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl`"........."`;
   Takeshi`"I'm hungry..."`;
   Takeshi`"I wasted too much energy walking around..."`;
   Takeshi`"And my friends take off somewhere without telling me..."`;
   Takeshi`"Don't you think that's rude?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A004)`"...Not really."`;
   Girl(T1A005)`"We just met, and I don't particularly care about you."`;
   Takeshi`"Okay, okay. Whatever you say."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   `We returned to the corridor we'd come from, turned at an intersection and looked for other rooms.`;

});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `Everywhere looked the same.`;
   Takeshi`"I wonder if everyone is hiding somewhere."`;
   Takeshi`"Maybe they are trying to surprise us."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A006)`"What? Why do you think so?"`;
   Takeshi`"Well, it's just kind of a feeling..."`;
   `I had to speak to stay calm.`;
   `I felt like if I went quiet, I would return to the darkness of before.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG04A1`, transition: 20 });
showTextbox();
text(() => {
   `In the room we next went in, ruins were awaiting us.`;
   `"Lemurian Ruins..."`;
   `They were filled with silence.`;
   `If it weren't for the paper garbage strewn across the floor, it would have been hard to believe that anyone had been around.`;
   Takeshi`"Where is everybody...?"`;
   Takeshi`"Hey!"`;
   Takeshi`"Gimme a break here!"`;
   Takeshi`"Where did everybody go?"`;
   Takeshi`"...There's a limit to how far you can take a joke..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl`"........."`;
   Takeshi`"..."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG26A3L`, transition: 20 });
clock(`15:39`);
showTextbox();
text(() => {
   Takeshi`"*Sigh...*"`;
   Takeshi`"Why doesn't anyone come out...?"`;
   `I sank to the floor.`;
   `I didn't know why but I was having trouble breathing.`;
   `Against my will, I started to sweat.`;
   Takeshi`"What do you think? What happened here? Why haven't we seen anyone...?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A007)`"I don't know...there's only one thing for sure."`;
   `She said this without changing the expression on her face.`;
   Girl(T1A008)`"This is not normal."`;
   Girl(T1A009)`"If this keeps up..."`;
   Girl(T1A010)`"We could be in danger..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A011)`"Don't you think so?"`;
   Takeshi`"........."`;
   `She stared at me with calm eyes.`;

});
hideTextbox();
playSFX({ name: `SE07_12`, a1: 0, volume: 90 });
stopBGM();
showTextbox();
text(() => {
   `I thought I heard a low groan from somewhere.`;
   `I swallowed nervously...`;
   `I nodded uncomfortably...`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `The next instant, the girl dashed to the other side of the corridor.`;

});
hideTextbox();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `I quickly stood up and followed her.`;
   `I was exhausted, but I used every ounce of my power to push ahead.`;
   `We jumped into a small entrance on the side of the corridor.`;

});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `We headed up.`;
   `We started climbing up stairs at top speed.`;

});
removeBG({ mode: BLACK, transition: 3 });
playSFX({ name: `SE01_06`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We ignored our pounding hearts. We simply ran.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We ran without looking back.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 10 });
showTextbox();
text(() => {
   `We ran...`;

});
removeBG({ mode: WHITE, transition: 2 });
playSFX({ name: `SE01_08`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `We reached the top floor and I put my hand on the emergency hatch connected to the floating island.`;
   `The knob didn't budge.`;
   Takeshi`"Damn, why won't it open?"`;

});
hideTextbox();
playSFX({ name: `SE06_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Gabaaaang!`;
   `The whole structure rocked.`;

});
playSFX({ name: `SE10_18`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The hatch gave off a squeaking sound and the knob bent unnaturally.`;
   Takeshi`"!?"`;
   Girl(T1A012)`"This way!!"`;
   `The girl screamed.`;

});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We rushed back to the stairs again.`;
   `We had no time to go down each step.`;
   `We jumped down toward the direction where we could see the corridor.`;

});
hideTextbox();
playSFX({ name: `SE01_08`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `The impact with the ground rattled my knees terribly, but I ignored the pain.`;

});
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Pant, pant..."`;
   Takeshi`"Phew, *pant* *pant*..."`;
   `I was out of breath. I gasped.`;
   Takeshi`"Haaaa, haaaa, haaaaa."`;
   Takeshi`"Fwaaaa, Huuuu, haaaaa."`;
   Takeshi`"Hiihii, Huuuu, haaaaa."`;
   Takeshi`"...Safe place, pokopon."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A013)`"...?"`;
   `The girl's expression didn't change.`;
   `(Anyways, she hasn't lost her breath much after the running that hard...)`;

});
bgload({ name: `BG01A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Hey, don't you want to rest?"`;
   Takeshi`"I want to rest..."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A014)`"Go ahead. Do what you want..."`;
   Takeshi`"...Fine then."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I sat down on the floor.`;
   `The girl walked slowly ahead down the corridor.`;
   `We could see hundreds of colorful fish swimming comfortably outside of the windows.`;
   `The room was quiet, too.`;
   `It was just the two of us. Me and her.`;
   `Then I remembered that I still didn't know who she was.`;
   `She had told me to 'do what I want,' but...`;
   `Until then we'd been trying to escape together.`;
   `I wondered what she was all about.`;
   `It was all...a mystery to me.`;

});
fgload({ id: 1, name: `TU04ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A015)`"...Who?"`;
   `Her voice caused me to look up.`;
   `She hadn't said it to me.`;
   Takeshi`"Hey, was somebody there?"`;
   `I asked this as I stood.`;

});
fgload({ id: 1, name: `TU18ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Girl`"..."`;
   `The girl stood still. Her eyes were focused in the distance.`;
   `I followed her gaze.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO05A`, transition: 10 });
clock(`15:54`);
showTextbox();
text(() => {
   `A lady had appeared where there had been no sign of anyone a moment before and she was dressed as a park employee.`;
   `I hadn't heard any footsteps.`;
   `(What in the...?)`;
   `(When did she get here?)`;
   //Park staff
   Park_staff(T1A016)`"...from here."`;
   //Park staff
   Park_staff(T1A017)`"This area is not safe. Please escape..."`;
   //Park staff
   Park_staff(T1A018)`"Please. Please you must escape from here."`;
   //Park staff
   Park_staff(T1A019)`"It is dangerous, it is dangerous..."`;
   `She looked slightly panicked.`;
   Takeshi`"Hey, hey. What's happened? What's dangerous? Stay calm. Explain what's going on..."`;
   //Park staff
   Park_staff(T1A020)`"You need to escape...we have had... unexpected...trouble."`;
   //Park staff
   Park_staff(T1A021)`"Level...Delta...Tief...Blau."`;
   `She mumbled this again.`;
   //Park staff
   Park_staff(T1A022)`"Please escape. Please."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1A023)`"Please get out of here!"`;

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
   `Crash!`;

});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c7_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
playSFX({ name: `SE02_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Fwaaaaaash!`;
   Takeshi`"UuuuwwWWAAaaaahh!!"`;
   `Glass shattered.`;
   `A massive amount of seawater...`;
   `And countless fish came flooding in.`;

});
hideTextbox();
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c7_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
playSFX({ name: `SE02_11L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `It was as if they were attacking me!`;

});
removeBG({ mode: WHITE, transition: 2 });
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
   Girl(T1A024)`"What're you doing? Hurry!"`;
   Takeshi`"W-whoaaa!"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c7_0_6;
eff_3d = 3;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
bgload({ name: `EV_TU04A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `The force of the water and destruction was incredible.`;
   `The approaching swell mowed down everything in its path.`;
   `It swirled and swallowed debris on the floor, someone's dropped purse, a floor guide for the facility - anything and everything it encountered.`;
   `(I wonder how fast that water is moving...)`;
   `Ridiculous thoughts flashed through my mind.`;
   `(And, I wonder how fast I can run.)`;
   `There was no guarantee the water wouldn't catch me.`;

});
hideTextbox();
playSFX({ name: `SE02_11L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Whoa! Whoaaa! Whoaaaaaa!"`;
   `I ran frantically.`;
   `And jumped in the air.`;
   `There was water flowing underfoot.`;

});
hideTextbox();
delay({ interval: 30 });
showTextbox();
text(() => {
   Takeshi`"Whoooooa...."`;

});
hideTextbox();
showTextbox();
text(() => {
   `I slipped.`;
   `I knew this was bad.`;
   `If I took a spill, I would be sleeping with these fish!`;
   Girl(T1A025)`"You are so much trouble...!"`;

});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
bgload({ name: `EV_TU04B`, transition: 20 });
showTextbox();
text(() => {
   `I was carried along into the air.`;
   `The girl had grabbed my arm and yanked me forward with incredible force.`;
   `She ran lithely, like a tiny gazelle....`;
   `And her speed - it felt I had just hopped into a car.`;
   `It almost felt as though she might rip my arm off.`;
   `Her strength was unbelievable.`;

});
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1A026)`"Over here! Hurry! Hurry!"`;
   Girl(T1A027)`"I know!"`;
   Takeshi`"!?"`;
   `And even harder to believe was that the park attendant was running ahead of us, leading the way.`;
   `(When did she...?)`;
   `It looked like she had just been sucked into the swirling waters ahead, but...no...`;

});
removeBG({ mode: BLACK, transition: 2 });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
eff_41 = 11;
eff_42 = 9;
eff_50 = 0;
showDimInAndOutAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgload({ name: `BG25A1`, transition: 20 });
delay({ interval: 60 });
bgload({ name: `BG25B1`, transition: 10 });
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_04`, a1: 0, volume: 95 });
bgload({ name: `BG22A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADS`, name2: `SO14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A028)`"Damn..."`;
   //Park staff
   Park_staff(T1A029)`"This is no good! It's not functioning! Go back!"`;

});
fgload({ id: 1, name: `TU04ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A030)`"There's no time!"`;

});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
eff_41 = 11;
eff_42 = 9;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   `We bounded from the slope into another corridor.`;
   Takeshi`"Crap. Which way do we take to get outta here?"`;
   `We all ran without stopping, looking for an exit.`;

});
bgload({ name: `BG28A1L`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"It's a dead end...!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU18ADM`, name2: `SO14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A031)`"Can we go through here?"`;
   //Park staff
   Park_staff(T1A032)`"Yes!"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A033)`"I'm going!"`;

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
   Takeshi`"Hey...this isn't a corridor.... Aggh!"`;

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
   `She kicked through some metal mesh and into a big air exhaust duct.`;
   `It was a sloping pipe-like tube.`;
   `We shot down the incline stumbling.`;
   `It sounded like there was a crazed froth of angry water roaring behind me.`;
   `No, I was already caught up in it.`;
   `Everyone was just flushed along.`;
   `We were spun in circles. I had no idea which way was up and which down.`;
   `And then we were all spit out in a corridor on the lower level.`;

});
hideTextbox();
playSFX({ name: `SE00_04`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Saved by a hair, the shutter on the duct clanked shut solidly behind us.`;
   `The flow of water finally stopped.`;

});
removeBG({ mode: BLACK, transition: 0 });
stopSFX()
stopBGM();
delay({ interval: 120 });
bgload({ name: `BG26B1R`, transition: 0 });
showTextbox();
text(() => {
   `....`;
   `Aaah....`;
   `It was solid ground.`;
   `It was a floor.`;
   `I was safe.`;
   `I wasn't in the water.`;
   `I was alive.`;
   `That was good...`;
   `....`;
   `(Good?)`;

});
hideTextbox();
l_choice = 0;
jump(`T_1B`);
