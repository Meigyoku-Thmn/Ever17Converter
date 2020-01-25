l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
showTextbox();
text(() => {
   `I waited for the rest of the explanation.`;
   `But Sora didn't say anything more.`;
   `...I guess she was trying to say, 'Figure the rest out yourself.'`;
   `I thought...`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `I figured that if it were the Leiblich Pharmaceutical Japanese-German joint venture that had control of LeMU...`;
   `There had to be a reason that a pharmaceutical company would build a theme park in a place like this...`;
   `That reason and in-house power generation... what could they have to do with each other...?`;
   `Power generation—thermal seafloor vents — the first word that popped into my head was...`;

});
choice(
   `Hot springs`,
   `Microorganisms`,
);
switch (l_choice) {
   case 0: goto(lbl_00000072);
   case 1: goto(lbl_000000df);
}
let lbl_00000072;
showTextbox();
text(() => {
   `Hot springs.`;
   `Hot springs?`;
   `It seemed to me that a pharmaceutical company and hot springs...would be totally unrelated...`;
   `No matter how much I thought about it, I couldn't find a connection.`;

});
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `I decided to go ask Sora.`;
   Kid`"Hey, does that have anything to do with what we were just talking about?"`;
   `Sora ignored my question and instead said...`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C190)`"Do you mind if I get back to work?"`;
   `It didn't look like the conversation would lead anywhere.`;
   `So I gave up and went elsewhere.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
l_choice = 2;
jump(`S_1C`);
let lbl_000000df;
l_coco_point += 1;
showTextbox();
text(() => {
   `Microorganisms.`;
   `That was it! Microorganisms!`;
   `There were unique kinds of microorganisms found around thermal seafloor vents that weren't seen anywhere else.`;
   `That was why Leiblich Pharmaceuticals was researching microorganisms on the seafloor...`;
   `'Himmel' - 'IBF' - 'High pressure oxygen treatment device'`;
   `All these words that I had known flashed on to the screen of my mind.`;
   `As usual, I had no idea why I knew them.`;
   `I had no idea about the reasons or causes behind them, but I was convinced that they were facts.`;

});
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   Kid`"On the ocean floor...below LeMU...Leiblich Pharmaceutical has a research lab, right?"`;
   `I said this straight out to Sora.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S283)`"H-how do...you...know about that?!"`;
   Kid`"I thought so..."`;
   Kid`"Leiblich made IBF on the seafloor to research germs and viruses."`;
   Kid`"The theme park was just a kind of cover..."`;
   Kid`"The researchers acted like staff members for LeMU, going above the ocean and back down to the seafloor."`;
   Kid`"In that way, nobody would suspect that there was a lab here."`;
   Kid`"Or it might have been a way of securing capital."`;
   Kid`"Working in conjunction with a bustling amusement park...you would never be short of research funds."`;

});
showTextbox();
text(() => {
   Kid`"I'm right, aren't I?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S284)`"Kid..."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S285)`"Exactly...who are you?"`;
   Kid`"I don't even know myself..."`;
   Kid`"All I know is that I DO know these things..."`;
   Kid`"I know it all. Like a prophecy playing like a film in my mind."`;

});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S286)`"You...you couldn't."`;
   Sora(C1S287)`"Are you lying to me?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S288)`"Are...are you hiding something...?"`;
   Kid`"I'm not hiding a thing."`;
   Kid`"I am being completely open about it...about everything I know...everything..."`;
   Sora`"........."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S289)`"I see."`;
   Sora(C1S290)`"Anyway, I please forget about the conversation we just had."`;
   Kid`"I know. I won't tell anybody."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S291)`"That's not what I mean....I mean forget it."`;
   Sora(C1S292)`"There is no research station on the seafloor."`;
   Sora(C1S293)`"In the past there was, but it has been closed."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S294)`"Please...just pretend that is the truth."`;
   Kid`"Okay. I understand."`;
   Kid`"If it is that important to you...then I will forget it."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S295)`"Do you promise?"`;
   `I swore that I would. Then I left the Control Room.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
l_choice = 2;
jump(`S_1C`);
