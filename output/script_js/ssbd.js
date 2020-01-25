setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
setSceneTitle({ index: 102 });
bgload({ name: `EV_SA12A`, transition: 10 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Kid`"Sara!"`;
   `I swam up next to Sara.`;
   Sara(SBD000)`"Y-you're...alright..."`;
   Kid`"Are you okay, Sara?"`;
   Sara(SBD001)`"Yeah...I'm alright."`;
   `She smiled weakly.`;
   `She was spent and unsteady on her feet.`;
   Sara(SBD002)`"Why...why did you come back?"`;
   Kid`"I came back to get you of course!"`;
   Sara(SBD003)`"To get me...?"`;
   Kid`"Sure. I promised, didn't I...?"`;

});
bgload({ name: `EV_SA12C`, transition: 20 });
showTextbox();
text(() => {
   Sara(SBD004)`"I see...you finally...came to get me..."`;
   Kid`"Oh...I'm so sorry, Sara."`;
   Kid`"I...I know I made you wait such a long time..."`;
   Sara(SBD005)`"No...it's alright."`;
   Sara(SBD006)`"I mean you came and everything..."`;
   Kid`"Sara...why did you come back...?"`;

});
bgload({ name: `EV_SA12A`, transition: 20 });
showTextbox();
text(() => {
   Sara(SBD007)`"Uh...to...um..."`;
   Sara(SBD008)`"To get...this..."`;
   `Saying that, Sara removed the fragment that was embedded in my finger.`;
   Kid`"That's..."`;
   Sara(SBD009)`"I forgot...this..."`;
   Kid`"You came back...for that...?"`;
   Sara(SBD010)`"Because...this is proof of how you looked after me..."`;
   Sara(SBD011)`"I felt like...if this disappeared...then my connection to you...would be gone..."`;
   Kid`"Sara..."`;
   Sara(SBD012)`"I'm sorry...I got you...involved in this mess."`;
   Kid`"Sara, it's okay."`;
   Sara(SBD013)`"I'm so sorry..."`;
   Kid`"It's alright. I only came...to keep my promise."`;
   Sara(SBD014)`"Th...thank you..."`;
   `I desperately tried to prop up Sara to keep her from sinking. `;

});
bgload({ name: `EV_SA12B`, transition: 20 });
showTextbox();
text(() => {
   Sara(SBD015)`"I'm sorry...I can't keep...up...anymore..."`;
   Kid`"Sara, hold on!"`;
   Sara(SBD016)`"I'm sorry...so sorry..."`;
   Kid`"Sara, hang on! Fight Sara!"`;
   Sara(SBD017)`"For...some reason...I'm dizzy..."`;
   Kid`"Sara!"`;
   `I remembered that the air pressure here was compressed to 4.5 atmospheres because of the water pressure.`;
   `Sara had probably gotten oxygen poisoning from breathing the oxygen-heavy air.`;
   `That compounded with the fatigue from treading water in the cold seawater...`;
   `The combination had probably rapidly robbed Sara of her strength.`;
   Kid`"Sara, hang in there!"`;
   Sara(SBD018)`"I...I'll...try"`;
   Sara(SBD019)`"But...my body...won't move anymore..."`;
   `I didn't know what to do.`;
   `And I'd finally found Sara.`;
   Kid`"Anyway, let's head for the emergency corridor!"`;
   `Before the water hadn't flooded into the emergency corridor.`;
   `If we could just get there...`;
   Kid`"Listen, Sara!"`;
   `I grabbed the weakened Sara and tried to dive under water.`;
   `It was then that it happened`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
shakeScreen();
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Screeeeeeeeeeeeeeeech!`;
   `A metallic scream echoed through LeMU as a shock wracked the structure.`;
   `At the same time, the flow of the water increased dramatically.`;
   `The shock shook Sara loose from my grasp.`;
   `I hurriedly struggled to lift her up.`;
   Sara(SBD020)`"Cough...cough..."`;
   Sara(SBD021)`"Pant, pant, pant..."`;
   `It looked like she had swallowed some water.`;
   `Her breathing was labored...`;
   `What should I do...what could I do...?`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
shakeScreen();
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `With a dull groan, LeMU tilted causing the water to ripple.`;
   Kid`"Hang on Sara! Just hang on!"`;
   `I called to Sara as I desperately floated in the waves on the surface.`;
   Sara(SBD022)`"I'm sorry...so sorry."`;
   Sara(SBD023)`"My body...it won't move..."`;
   Kid`"No! Sara! Hang on!"`;
   Kid`"We've finally found each other!"`;
   Kid`"Sara! Open your eyes! Sara!"`;

});
playBGM({ num: 21, volume: 100 });
bgload({ name: `EV_SA12C`, transition: 20 });
showTextbox();
text(() => {
   Sara(SBD024)`"Brother..."`;
   Sara(SBD025)`"Thanks for...coming back...thank you..."`;
   `Sara's body went limp.`;
   `I swore inside my mind.`;
   `Why, why, why?`;
   `I wondered if there was no way that I could save Sara?`;
   `I took a big breath and, holding Sara, dove under water.`;

});
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   `I meant to get us out of LeMU.`;
   `If I let us stick around, we would have been crushed.`;
   `The irregular shocks continued and the sounds of metal on metal echoed harshly.`;
   `LeMU was already mostly filled with water.`;
   `I ducked into a crack running down the wall that was just big enough and slipped outside. `;

});
bgload({ name: `EV_SA13D`, transition: 20 });
showTextbox();
text(() => {
   `There the sprawling darkness of the ocean surrounded me.`;
   `My only hope was the light piercing through the water from above.`;
   `Clutching Sara, I swam toward it.`;
   `But swimming with my injured arm and holding a limp Sara was nearly impossible.`;
   `The water pressure constricted my chest, forcing out my air.`;
   `But I kept swimming.`;
   `My body was screaming for air.`;

});
eff_41 = 13;
eff_42 = 7;
eff_50 = rgb(240,240,240);
showDimInAndOutAnim();
showTextbox();
text(() => {
   `My eyes clouded. Flashes of white light darted across my vision...`;

});
hideTextbox();
delay({ interval: 60 });
monoColorOverlay({ interval: 24, color: WHITE });
closeDimInAndOutAndFilterAnim();
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `${center}${nextPage(0)}It was no good. I couldn't see...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I wasn't sure if I were heading upward.${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}Or maybe downward...${nextPage(1)}${wait(60)}${noWait}`;
   `${nextPage(0)}In my right arm, Sara felt cold, nearly frozen.${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I didn't think I'd make it...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}My arms refused to move...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}And my legs...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I took Sara and...${nextPage(1)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${center}${nextPage(0)}*GULP*${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I couldn't take anymore...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I swallowed water...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}*GULP* *COUGH*${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}My consciousness was slipping...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}My body had no power...${nextPage(1)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}${bigChar}Sara...${nextPage(1)}${wait(99)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${center}${nextPage(0)}I'm sorry Sara...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I...just couldn't quite...${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}...seem to save Sara...${nextPage(1)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}${bigChar}Sara...${nextPage(1)}${wait(90)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}The darkness enveloped me, ${noWait}`;
   `${center}stealing away my consciousness...${nextPage(1)}${wait(90)}${wait(90)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
delay({ interval: 60 });
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
ADV_Mode();
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
g_sara_bd_cleared = 1;
g_kid_bd__cleared = 1;
l_ending = `sara_bd`;
l_choice = 0;
jump(`Y_ED`);
