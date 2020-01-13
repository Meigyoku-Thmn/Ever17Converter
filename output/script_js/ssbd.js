setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
setSceneTitle({ index: 102 });
bgload({ name: `EV_SA12A`, transition: 10 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swam up next to Sara.`;
   waitForClick; clearText; marker; sound(`SBD000`); appendText; 
   Sara`"Y-you're...alright..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are you okay, Sara?"`;
   waitForClick; clearText; marker; sound(`SBD001`); appendText; 
   Sara`"Yeah...I'm alright."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled weakly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was spent and unsteady on her feet.`;
   waitForClick; clearText; marker; sound(`SBD002`); appendText; 
   Sara`"Why...why did you come back?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I came back to get you of course!"`;
   waitForClick; clearText; marker; sound(`SBD003`); appendText; 
   Sara`"To get me...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sure. I promised, didn't I...?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`SBD004`); appendText; 
   Sara`"I see...you finally...came to get me..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...I'm so sorry, Sara."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I know I made you wait such a 
long time..."`;
   waitForClick; clearText; marker; sound(`SBD005`); appendText; 
   Sara`"No...it's alright."`;
   waitForClick; clearText; marker; sound(`SBD006`); appendText; 
   Sara`"I mean you came and everything..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara...why did you come back...?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`SBD007`); appendText; 
   Sara`"Uh...to...um..."`;
   waitForClick; clearText; marker; sound(`SBD008`); appendText; 
   Sara`"To get...this..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, Sara removed the fragment 
that was embedded in my finger.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's..."`;
   waitForClick; clearText; marker; sound(`SBD009`); appendText; 
   Sara`"I forgot...this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You came back...for that...?"`;
   waitForClick; clearText; marker; sound(`SBD010`); appendText; 
   Sara`"Because...this is proof of how you looked 
after me..."`;
   waitForClick; clearText; marker; sound(`SBD011`); appendText; 
   Sara`"I felt like...if this disappeared...then my 
connection to you...would be gone..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara..."`;
   waitForClick; clearText; marker; sound(`SBD012`); appendText; 
   Sara`"I'm sorry...I got you...involved in this 
mess."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, it's okay."`;
   waitForClick; clearText; marker; sound(`SBD013`); appendText; 
   Sara`"I'm so sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's alright. I only came...to keep 
my promise."`;
   waitForClick; clearText; marker; sound(`SBD014`); appendText; 
   Sara`"Th...thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I desperately tried to prop up Sara to keep 
her from sinking. `;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`SBD015`); appendText; 
   Sara`"I'm sorry...I can't keep...up...anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, hold on!"`;
   waitForClick; clearText; marker; sound(`SBD016`); appendText; 
   Sara`"I'm sorry...so sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, hang on! Fight Sara!"`;
   waitForClick; clearText; marker; sound(`SBD017`); appendText; 
   Sara`"For...some reason...I'm dizzy..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered that the air pressure here was 
compressed to 4.5 atmospheres because of the 
water pressure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara had probably gotten oxygen poisoning from 
breathing the oxygen-heavy air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That compounded with the fatigue from treading 
water in the cold seawater...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The combination had probably rapidly robbed 
Sara of her strength.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, hang in there!"`;
   waitForClick; clearText; marker; sound(`SBD018`); appendText; 
   Sara`"I...I'll...try"`;
   waitForClick; clearText; marker; sound(`SBD019`); appendText; 
   Sara`"But...my body...won't move anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to do.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I'd finally found Sara.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anyway, let's head for the emergency 
corridor!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before the water hadn't flooded into the 
emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If we could just get there...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Listen, Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed the weakened Sara and tried to dive 
under water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was then that it happened`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
shakeScreen();
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Screeeeeeeeeeeeeeeech!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A metallic scream echoed through LeMU as a 
shock wracked the structure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the same time, the flow of the water 
increased dramatically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The shock shook Sara loose from my grasp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly struggled to lift her up.`;
   waitForClick; clearText; marker; sound(`SBD020`); appendText; 
   Sara`"Cough...cough..."`;
   waitForClick; clearText; marker; sound(`SBD021`); appendText; 
   Sara`"Pant, pant, pant..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she had swallowed some water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her breathing was labored...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What should I do...what could I do...?`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
shakeScreen();
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With a dull groan, LeMU tilted causing the 
water to ripple.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hang on Sara! Just hang on!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called to Sara as I desperately floated in 
the waves on the surface.`;
   waitForClick; clearText; marker; sound(`SBD022`); appendText; 
   Sara`"I'm sorry...so sorry."`;
   waitForClick; clearText; marker; sound(`SBD023`); appendText; 
   Sara`"My body...it won't move..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No! Sara! Hang on!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We've finally found each other!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara! Open your eyes! Sara!"`;
   waitForClick; clearText; 
});
playBGM({ num: 21, volume: 100 });
bgload({ name: `EV_SA12C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`SBD024`); appendText; 
   Sara`"Brother..."`;
   waitForClick; clearText; marker; sound(`SBD025`); appendText; 
   Sara`"Thanks for...coming back...thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's body went limp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swore inside my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why, why, why?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if there was no way that I could 
save Sara?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took a big breath and, holding Sara, dove 
under water.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I meant to get us out of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I let us stick around, we would have been 
crushed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The irregular shocks continued and the sounds 
of metal on metal echoed harshly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU was already mostly filled with water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ducked into a crack running down the wall 
that was just big enough and slipped outside. `;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA13D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There the sprawling darkness of the ocean 
surrounded me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My only hope was the light piercing through 
the water from above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Clutching Sara, I swam toward it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But swimming with my injured arm and holding a 
limp Sara was nearly impossible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water pressure constricted my chest, 
forcing out my air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I kept swimming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body was screaming for air.`;
   waitForClick; clearText; 
});
eff_41 = 13;
eff_42 = 7;
eff_50 = rgb(240,240,240);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My eyes clouded. Flashes of white light darted 
across my vision...`;
   waitForClick; clearText; 
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
   marker; appendText; delay(0); 
   Narr`       `;
   nextPage(00); 
   Narr`It was no good. I couldn't see...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`    `;
   nextPage(00); 
   Narr`I wasn't sure if I were heading upward.`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`Or maybe downward...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); nextPage(00); 
   Narr`In my right arm, Sara felt cold, nearly frozen.`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`I didn't think I'd make it...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`My arms refused to move...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`And my legs...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`I took Sara and...`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; delay(0); 
   Narr`                     `;
   nextPage(00); 
   Narr`*GULP*`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`I couldn't take anymore...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`              `;
   nextPage(00); 
   Narr`I swallowed water...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`*GULP* *COUGH*`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`        `;
   nextPage(00); 
   Narr`My consciousness was slipping...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`My body had no power...`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`                    `;
   nextPage(00); bigChar; clearText; 
   Narr`Sara...`;
   nextPage(01); delay(99); nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`I'm sorry Sara...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`I...just couldn't quite...`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`...seem to save Sara...`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`                    `;
   nextPage(00); bigChar; clearText; 
   Narr`Sara...`;
   nextPage(01); delay(90); delay(60); nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`The darkness enveloped me, 
`;
   appendText; delay(0); 
   Narr`       stealing away my consciousness...`;
   nextPage(01); delay(90); delay(90); nextPage(04); 
});
hideTextbox();
hideTextbox();
delay({ interval: 60 });
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
AVL_Mode();
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
g_sara_bd_clear = 1;
g_kid_bd_reach = 1;
l_ending = `sara_bd`;
l_choice = 0;
jump(`Y_ED`);
