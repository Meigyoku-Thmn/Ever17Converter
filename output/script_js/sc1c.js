varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I waited for the rest of the explanation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora didn't say anything more.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I guess she was trying to say, 'Figure the 
rest out yourself.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought...`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I figured that if it were the Leiblich 
Pharmaceutical Japanese-German joint venture 
that had control of LeMU...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There had to be a reason that a pharmaceutical 
company would build a theme park in a place 
like this...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That reason and in-house power generation... 
what could they have to do with each other...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Power generation—thermal seafloor vents — the 
first word that popped into my head was...`;
   waitForClick; 
});
choice(
   `Hot springs`
   `Microorganisms`
);
switch (choice) {
   case 0: goto(lbl_00000072);
   case 1: goto(lbl_000000df);
}
let lbl_00000072;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Hot springs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hot springs?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to me that a pharmaceutical company 
and hot springs...would be totally unrelated...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how much I thought about it, 
I couldn't find a connection.`;
   waitForClick; clearText; 
});
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to go ask Sora.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, does that have anything to do with what 
we were just talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora ignored my question and instead said...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C190`); appendText; 
   //Sora
   Sora`"Do you mind if I get back to work?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like the conversation would 
lead anywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I gave up and went elsewhere.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
varop(`(28 0a a4) b3 := (00) 2`);
jump(`S_1C`);
let lbl_000000df;
varop(`(28 0a a4) ba += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Microorganisms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was it! Microorganisms!`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were unique kinds of microorganisms 
found around thermal seafloor vents that 
weren't seen anywhere else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was why Leiblich Pharmaceuticals was 
researching microorganisms on the seafloor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Himmel' - 'IBF' - 'High pressure oxygen 
treatment device'`;
   waitForClick; clearText; marker; appendText; 
   Narr`All these words that I had known flashed on to 
the screen of my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As usual, I had no idea why I knew them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea about the reasons or causes 
behind them, but I was convinced that 
they were facts.`;
   waitForClick; clearText; 
});
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"On the ocean floor...below LeMU...Leiblich 
Pharmaceutical has a research lab, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said this straight out to Sora.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S283`); appendText; 
   //Sora
   Sora`"H-how do...you...know about that?!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I thought so..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Leiblich made IBF on the seafloor to research 
germs and viruses."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The theme park was just a kind of cover..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The researchers acted like staff members for 
LeMU, going above the ocean and back down to 
the seafloor."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"In that way, nobody would suspect that there 
was a lab here."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Or it might have been a way of securing 
capital."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Working in conjunction with a bustling 
amusement park...you would never be short 
of research funds."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"I'm right, aren't I?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S284`); appendText; 
   //Sora
   Sora`"Kid..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S285`); appendText; 
   //Sora
   Sora`"Exactly...who are you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't even know myself..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"All I know is that I DO know these things..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I know it all. Like a prophecy playing like a 
film in my mind."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S286`); appendText; 
   //Sora
   Sora`"You...you couldn't."`;
   waitForClick; clearText; marker; sound(`C1S287`); appendText; 
   //Sora
   Sora`"Are you lying to me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S288`); appendText; 
   //Sora
   Sora`"Are...are you hiding something...?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm not hiding a thing."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I am being completely open about it...about 
everything I know...everything..."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S289`); appendText; 
   //Sora
   Sora`"I see."`;
   waitForClick; clearText; marker; sound(`C1S290`); appendText; 
   //Sora
   Sora`"Anyway, I please forget about the 
conversation we just had."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I know. I won't tell anybody."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S291`); appendText; 
   //Sora
   Sora`"That's not what I mean....I mean forget it."`;
   waitForClick; clearText; marker; sound(`C1S292`); appendText; 
   //Sora
   Sora`"There is no research station on the seafloor."`;
   waitForClick; clearText; marker; sound(`C1S293`); appendText; 
   //Sora
   Sora`"In the past there was, but it has been 
closed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S294`); appendText; 
   //Sora
   Sora`"Please...just pretend that is the truth."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Okay. I understand."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"If it is that important to you...then I will 
forget it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S295`); appendText; 
   //Sora
   Sora`"Do you promise?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swore that I would. Then I left the Control 
Room.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
varop(`(28 0a a4) b3 := (00) 2`);
jump(`S_1C`);
