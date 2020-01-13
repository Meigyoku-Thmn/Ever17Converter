varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S000`); appendText; 
   //Mayo
   Mayo`"No. I was all alone."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S001`); appendText; 
   //Mayo
   Mayo`"There was nobody..."`;
   waitForClick; 
});
choice(
   `Was that right...?`
   `Really?`
);
switch (choice) {
   case 0: goto(lbl_0000009a);
   case 1: goto(lbl_000000ad);
}
let lbl_0000009a;
varop(`(28 0a a4) b3 := (00) 1`);
jump(`S_1A2`);
let lbl_000000ad;
varop(`(28 0a a4) ba += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Really?"`;
   waitForClick; clearText; marker; sound(`C1S002`); appendText; 
   //Mayo
   Mayo`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You're sure there was nobody else there?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S003`); appendText; 
   //Mayo
   Mayo`"I said there was nobody there."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Even in the elevator next to you?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S004`); appendText; 
   //Mayo
   Mayo`"No. I don't think there was anybody riding 
in it."`;
   waitForClick; clearText; marker; sound(`C1S005`); appendText; 
   //Mayo
   Mayo`"I was shouting for help the whole time and 
nobody answered me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered why not. The voice that I had heard 
a little bit ago was grating on my mind.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I just want to make sure one more time..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara, there was really no one riding 
in the elevator except for you?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06BWM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S006`); appendText; 
   //Sara
   Sara`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So there was somebody?"`;
   waitForClick; clearText; marker; sound(`C1S007`); appendText; 
   //Sara
   Sara`"N-no...there wasn't, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S008`); appendText; 
   //Sara
   Sara`"Why...?"`;
   waitForClick; clearText; marker; sound(`C1S009`); appendText; 
   //Sara
   Sara`"...How...how do you know?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`C1S010`); appendText; 
   //Sara
   Sara`"My..."`;
   waitForClick; clearText; marker; sound(`C1S011`); appendText; 
   //Sara
   Sara`"My...name..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"N-name...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S012`); appendText; 
   //You
   You`"What? Oh, that's right. We haven't told you 
Mayo's real name..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That instant, my vision shook crazily.`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Something spine-chilling was squirming in the 
core of my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The feeling spread through my network of 
nerves to the far corners of my body in an 
instant.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S013`); appendText; 
   //Sara
   Sara`"Hey! I asked you why!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S014`); appendText; 
   //Sara
   Sara`"Do...do you know...me?"`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara Matsunaga.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; 
   Narr`Yes. I was sure. Her name was Sara Matsunaga.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But...how...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`How did I know her name?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"I don't know...I really don't know..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I cradled my head and shook it several times.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S015`); appendText; 
   //Sara
   Sara`"What is this?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't know..."`;
   waitForClick; clearText; marker; sound(`C1S016`); appendText; 
   //Sara
   Sara`"If you don't know, then I don't know!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I dunno...I dunno...I dunno..."`;
   waitForClick; clearText; marker; sound(`C1S017`); appendText; 
   //Sara
   Sara`"Hey! Answer me!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C1S018`); appendText; 
   //Sara
   Sara`"How do you know me?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S019`); appendText; 
   //Sara
   Sara`"Who..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S020`); appendText; 
   //Sara
   Sara`"...Who are you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I said I don't know!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't know myself! I don't know!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why do....I....know...your name...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My temples started to throb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The power drained from my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crumpled on the spot as if I had been sucked 
dry of energy.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S021`); appendText; 
   //You
   You`"W-wait...not another one of your fits!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S022`); appendText; 
   //You
   You`"Gimme a break. Geez..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's voice sounded far away.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S023`); appendText; 
   //Sara
   Sara`"Fits?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S024`); appendText; 
   //You
   You`"He's..."`;
   waitForClick; clearText; marker; sound(`C1S025`); appendText; 
   //You
   You`"...lost his memory."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S026`); appendText; 
   //Sara
   Sara`"Lost...his...memory?"`;
   waitForClick; clearText; marker; sound(`C1S027`); appendText; 
   //You
   You`"Yup."`;
   waitForClick; clearText; marker; sound(`C1S028`); appendText; 
   //You
   You`"No matter how much you ask him, he doesn't 
remember..."`;
   waitForClick; clearText; marker; sound(`C1S029`); appendText; 
   //You
   You`"If you try to make him remember, then..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Ooohhh...arggghhh...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S030`); appendText; 
   //You
   You`"See? He gets like this."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S031`); appendText; 
   //You
   You`"Now stand up! Get a hold of yourself!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You grabbed both of my shoulders and stood 
me up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S032`); appendText; 
   //You
   You`"Listen. Listen good. Look at me..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S033`); appendText; 
   //You
   You`"I think you have lost touch with who you are, 
and it scares you."`;
   waitForClick; clearText; marker; sound(`C1S034`); appendText; 
   //You
   You`"Because you have no memory...because you 
have no past..."`;
   waitForClick; clearText; marker; sound(`C1S035`); appendText; 
   //You
   You`"You've lost your past and feel like you've 
lost yourself...you are afraid..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S036`); appendText; 
   //You
   You`"But you know what? There is nothing to be 
afraid of."`;
   waitForClick; clearText; marker; sound(`C1S037`); appendText; 
   //You
   You`"You are right here, right now."`;
   waitForClick; clearText; marker; sound(`C1S038`); appendText; 
   //You
   You`"Standing right in front of me."`;
   waitForClick; clearText; marker; sound(`C1S039`); appendText; 
   //You
   You`"No matter what happens, there is no way you 
are just going to disappear."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C1S040`); appendText; 
   //You
   You`"Okay? Look me in the eyes, alright?"`;
   waitForClick; clearText; marker; sound(`C1S041`); appendText; 
   //You
   You`"That's better..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S042`); appendText; 
   //You
   You`"Now try to smile."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S043`); appendText; 
   //You
   You`"Just, smile..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I made a conscious effort to move my cheek 
muscles.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S044`); appendText; 
   //You
   You`"No, no, no. More. Like say....'Cheeeeeeese.'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put more effort into moving the muscles 
in my face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S045`); appendText; 
   //You
   You`"That's a pretty forced grin, but...I guess 
it's good enough."`;
   waitForClick; clearText; marker; sound(`C1S046`); appendText; 
   //You
   You`"How's that? I'll bet you've forgotten to 
worry about your past, right?"`;
   waitForClick; 
});
choice(
   `Yeah`
   `Nope`
);
switch (choice) {
   case 0: goto(lbl_00000394);
   case 1: goto(lbl_000003b9);
}
let lbl_00000394;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I answered You.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C1S047`); appendText; 
   //You
   You`"See? The past isn't important."`;
   waitForClick; clearText; marker; sound(`C1S048`); appendText; 
   //You
   You`"What is important is whether or not you can 
smile right now..."`;
   waitForClick; clearText; marker; sound(`C1S049`); appendText; 
   //You
   You`"That is proof of your existence..."`;
   waitForClick; clearText; marker; sound(`C1S050`); appendText; 
   //You
   You`"So you have to smile."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S051`); appendText; 
   //You
   You`"I know you are better at smiling than that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Enticed by You's smile, my own cheeks started 
to loosen naturally.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gently touched my hair...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as if her hand sucked the pain away.`;
   waitForClick; clearText; 
});
goto(lbl_000005ac);
let lbl_000003b9;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Nope...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"It's not your problem so it's easy for you 
to say that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S052`); appendText; 
   //You
   You`"But at least you've gotten better so that you 
can talk."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C1S053`); appendText; 
   //You
   You`"And do you know why?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S054`); appendText; 
   //You
   You`"You can speak because you are aware of 
this moment, right now."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Right now?"`;
   waitForClick; clearText; marker; sound(`C1S055`); appendText; 
   //You
   You`"People have no choice but to live in the 
moment."`;
   waitForClick; clearText; marker; sound(`C1S056`); appendText; 
   //You
   You`"The past and the future are simply an 
illusion..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S057`); appendText; 
   //You
   You`"Trying to grab that empty image is...it's 
meaningless."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S058`); appendText; 
   //You
   You`"So right now you should just smile as if you 
don't care."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S059`); appendText; 
   //You
   You`"Smile."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU04BWL`, x: 320, useAnim: true });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C1S060`); appendText; 
   //You
   You`"Now smile!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I can't JUST smile..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S061`); appendText; 
   //You
   You`"If you don't smile...then I'll put my finger 
up Mayo's nose."`;
   waitForClick; clearText; marker; sound(`C1S062`); appendText; 
   //Sara
   Sara`"...Huh?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02BWM`, name2: `SA08ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S063`); appendText; 
   //You
   You`"I'll put finger in that gooey pit..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she talked, You did exactly as she said.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S064`); appendText; 
   //Sara
   Sara`"W-wait! Stop! Nakkyu!"`;
   waitForClick; clearText; marker; sound(`C1S065`); appendText; 
   //You
   You`"Pick, pick...goooooey..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S066`); appendText; 
   //Sara
   Sara`"Hey...hey! Nakkyu...Nakkyu..."`;
   waitForClick; clearText; marker; sound(`C1S067`); appendText; 
   //Sara
   Sara`"Nakkyu...your finger's in my nose..."`;
   waitForClick; clearText; marker; sound(`C1S068`); appendText; 
   //You
   You`"Pickity, pickity...."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S069`); appendText; 
   //Sara
   Sara`"And now Nakkyu and I become one..."*`;
   waitForClick; clearText; marker; sound(`C1S070`); appendText; 
   //You
   You`"Goooooeeey..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA14ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S071`); appendText; 
   //Sara
   Sara`"...Wait, just what do you think you are 
doing?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU08BWM`, x: 176, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whack!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara smacked You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Watching that scene, my cheeks just naturally 
relaxed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU09BWM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S072`); appendText; 
   //You
   You`"Ha! He smiled, he smiled!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA09ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S073`); appendText; 
   //Sara
   Sara`"He is! He is! A, HA, HA, HA!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S074`); appendText; 
   //Sara
   Sara`"...But - do you think I'm happy about this?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S075`); appendText; 
   //Sara
   Sara`"What are you thinking? Sticking your finger 
in somebody's nose...geez."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BWM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S076`); appendText; 
   //You
   You`"Hee, hee, hee."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I was watching their exchange, at some 
point the pain in my head had also eased.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a 'painful' exchange in a different 
meaning of the word, but...`;
   waitForClick; clearText; 
});
let lbl_000005ac;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 30 });
bgload({ name: `BG26B3R`, transition: 26 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`17:49`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After I had calmed down again, we went to find 
an exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, Sara couldn't hide her surprise at 
what had happened to the inside of the complex.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A292`); appendText; 
   //Sara
   Sara`"What is this?"`;
   waitForClick; clearText; marker; sound(`S1A293`); appendText; 
   //Sara
   Sara`"Why is everything wet?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A294`); appendText; 
   //Sara
   Sara`"And there isn't anyone around..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As we walked, You explained to Sara the 
sequence of events to that point.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'You was working at LeMU on a part-time basis.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I collapsed at the kiosk.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'The warning alarm sounded, everyone 
disappeared from LeMU and the 
flooding started.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stunned, Sara listened to You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A while after You had finished the story...`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if she had just thought of it, You blurted 
out suddenly - `;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07BWM`, name2: `SA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S077`); appendText; 
   //You
   You`"But you know what is really strange..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S078`); appendText; 
   //Sara
   Sara`"What?"`;
   waitForClick; clearText; marker; sound(`C1S079`); appendText; 
   //You
   You`"What this kid was just saying..."`;
   waitForClick; clearText; marker; sound(`C1S080`); appendText; 
   //You
   You`"I mean, Mayo, you don't remember him from 
anywhere, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S081`); appendText; 
   //Sara
   Sara`"Right..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S082`); appendText; 
   //You
   You`"But he knew your name..."`;
   waitForClick; clearText; marker; sound(`C1S083`); appendText; 
   //You
   You`"So that means that somewhere in his lost 
memory there is some information stored 
about you, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S084`); appendText; 
   //You
   You`"I wonder why."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S085`); appendText; 
   //You
   You`"If it were the other way around, it'd make 
sense."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S086`); appendText; 
   //You
   You`"If you knew something about him...but he had 
forgotten you because of amnesia..."`;
   waitForClick; clearText; marker; sound(`C1S087`); appendText; 
   //You
   You`"That would make sense to me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S088`); appendText; 
   //You
   You`"But this is like going backward on a one-way 
street." `;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S089`); appendText; 
   //Sara
   Sara`"One-way street, huh...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S090`); appendText; 
   //Sara
   Sara`"Oh, I know! This is probably what happened."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S091`); appendText; 
   //You
   You`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S092`); appendText; 
   //Sara
   Sara`"This kid probably used to be a big Sara 
Matsunaga fan!"`;
   waitForClick; clearText; marker; sound(`C1S093`); appendText; 
   //Sara
   Sara`"I'll bet I never noticed him, but he used to 
watch me from a distance, like from the 
shadows."`;
   waitForClick; clearText; marker; sound(`C1S094`); appendText; 
   //Sara
   Sara`"That would explain it completely."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S095`); appendText; 
   //You
   You`"You're saying he is a stalker?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S096`); appendText; 
   //Sara
   Sara`"Yup. That's exactly it."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S097`); appendText; 
   //Sara
   Sara`"Hey. Is that it? Did you used to stalk her?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Just because I lost my memory, don't go 
making one up for me!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S098`); appendText; 
   //Sara
   Sara`"Am I wrong?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yes!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S099`); appendText; 
   //You
   You`"Mayo, I'll only ask you one more time..." `;
   waitForClick; clearText; marker; sound(`C1S100`); appendText; 
   //You
   You`"Are you really sure that you don't remember 
seeing this kid before?"`;
   waitForClick; clearText; marker; sound(`C1S101`); appendText; 
   //Sara
   Sara`"Remember him...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S102`); appendText; 
   //Sara
   Sara`"Hmmm...hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara brought her face close to me and stared 
at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could almost feel her breath.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S103`); appendText; 
   //Sara
   Sara`"Well now that you mention it..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S104`); appendText; 
   //You
   You`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S105`); appendText; 
   //Sara
   Sara`"No...I'm kidding...I'm just joking."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S106`); appendText; 
   //Sara
   Sara`"There's no reason I should remember him."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'No reason???`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what she meant by that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe she really did know who 
I was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My heart started to pound again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered when I had seen Sara for the 
first time a little bit ago.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgload({ name: `EV_SA01A`, transition: 26 });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I had felt something along the lines of 
nostalgia.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason, I felt that I had witnessed 
the same scene somewhere before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I had met her in the past after all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't be sure of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if I did know a name, or even feel 
nostalgic...it wasn't in my memory.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 18, color: WHITE });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG26B3R`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara's smile felt far away, so that no matter 
how much I reached out for it, I would never 
be able to touch it.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
varop(`(28 0a a4) b3 := (00) 2`);
jump(`S_1A2`);
