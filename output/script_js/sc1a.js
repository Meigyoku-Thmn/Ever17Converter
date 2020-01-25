l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(C1S000)`"No. I was all alone."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Mayo(C1S001)`"There was nobody..."`;

});
choice(
   `Was that right...?`,
   `Really?`,
);
switch (l_choice) {
   case 0: goto(lbl_0000009a);
   case 1: goto(lbl_000000ad);
}
let lbl_0000009a;
l_choice = 1;
jump(`S_1A2`);
let lbl_000000ad;
l_coco_point += 1;
showTextbox();
text(() => {
   Kid`"Really?"`;
   Mayo(C1S002)`"Yeah..."`;
   Kid`"You're sure there was nobody else there?"`;

});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(C1S003)`"I said there was nobody there."`;
   Kid`"Even in the elevator next to you?"`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(C1S004)`"No. I don't think there was anybody riding in it."`;
   Mayo(C1S005)`"I was shouting for help the whole time and nobody answered me."`;
   `I wondered why not. The voice that I had heard a little bit ago was grating on my mind.`;
   Kid`"I just want to make sure one more time..."`;
   Kid`"Sara, there was really no one riding in the elevator except for you?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06BWM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S006)`"Uh..."`;
   Kid`"So there was somebody?"`;
   Sara(C1S007)`"N-no...there wasn't, but..."`;
   Kid`"But...?"`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S008)`"Why...?"`;
   Sara(C1S009)`"...How...how do you know?"`;
   Kid`"?"`;
   Sara(C1S010)`"My..."`;
   Sara(C1S011)`"My...name..."`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"N-name...?"`;

});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S012)`"What? Oh, that's right. We haven't told you Mayo's real name..."`;
   `That instant, my vision shook crazily.`;

});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `Something spine-chilling was squirming in the core of my body.`;
   `The feeling spread through my network of nerves to the far corners of my body in an instant.`;

});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S013)`"Hey! I asked you why!"`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S014)`"Do...do you know...me?"`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Sara Matsunaga.`;
   `${noWait}`;
   `Yes. I was sure. Her name was Sara Matsunaga.`;
   `But...how...`;
   `How did I know her name?`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"I don't know...I really don't know..."`;
   `I cradled my head and shook it several times.`;

});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S015)`"What is this?"`;
   Kid`"I don't know..."`;
   Sara(C1S016)`"If you don't know, then I don't know!"`;
   Kid`"I dunno...I dunno...I dunno..."`;
   Sara(C1S017)`"Hey! Answer me!"`;
   Kid`"........."`;
   Sara(C1S018)`"How do you know me?"`;
   Kid`"........."`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S019)`"Who..."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S020)`"...Who are you?"`;
   Kid`"I said I don't know!"`;
   Kid`"I don't know myself! I don't know!"`;
   Kid`"Why do....I....know...your name...?"`;
   `My temples started to throb.`;
   `The power drained from my body.`;
   `I crumpled on the spot as if I had been sucked dry of energy.`;

});
fgload({ id: 1, name: `YU06BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S021)`"W-wait...not another one of your fits!?"`;

});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S022)`"Gimme a break. Geez..."`;
   `You's voice sounded far away.`;

});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S023)`"Fits?"`;

});
fgload({ id: 1, name: `YU17BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S024)`"He's..."`;
   You(C1S025)`"...lost his memory."`;

});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S026)`"Lost...his...memory?"`;
   You(C1S027)`"Yup."`;
   You(C1S028)`"No matter how much you ask him, he doesn't remember..."`;
   You(C1S029)`"If you try to make him remember, then..."`;
   Kid`"Ooohhh...arggghhh...."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S030)`"See? He gets like this."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara`"........."`;

});
fgload({ id: 1, name: `YU04BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S031)`"Now stand up! Get a hold of yourself!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `You grabbed both of my shoulders and stood me up.`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S032)`"Listen. Listen good. Look at me..."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S033)`"I think you have lost touch with who you are, and it scares you."`;
   You(C1S034)`"Because you have no memory...because you have no past..."`;
   You(C1S035)`"You've lost your past and feel like you've lost yourself...you are afraid..."`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S036)`"But you know what? There is nothing to be afraid of."`;
   You(C1S037)`"You are right here, right now."`;
   You(C1S038)`"Standing right in front of me."`;
   You(C1S039)`"No matter what happens, there is no way you are just going to disappear."`;
   Kid`"........."`;

});
showTextbox();
text(() => {
   You(C1S040)`"Okay? Look me in the eyes, alright?"`;
   You(C1S041)`"That's better..."`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S042)`"Now try to smile."`;
   Kid`"...What?"`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S043)`"Just, smile..."`;
   `I made a conscious effort to move my cheek muscles.`;

});
fgload({ id: 1, name: `YU08BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S044)`"No, no, no. More. Like say....'Cheeeeeeese.'"`;
   `I put more effort into moving the muscles in my face.`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S045)`"That's a pretty forced grin, but...I guess it's good enough."`;
   You(C1S046)`"How's that? I'll bet you've forgotten to worry about your past, right?"`;

});
choice(
   `Yeah`,
   `Nope`,
);
switch (l_choice) {
   case 0: goto(lbl_00000394);
   case 1: goto(lbl_000003b9);
}
let lbl_00000394;
showTextbox();
text(() => {
   Kid`"Yeah..."`;
   `I answered You.`;

});
showTextbox();
text(() => {
   You(C1S047)`"See? The past isn't important."`;
   You(C1S048)`"What is important is whether or not you can smile right now..."`;
   You(C1S049)`"That is proof of your existence..."`;
   You(C1S050)`"So you have to smile."`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S051)`"I know you are better at smiling than that."`;
   `Enticed by You's smile, my own cheeks started to loosen naturally.`;
   `You gently touched my hair...`;
   `It was as if her hand sucked the pain away.`;

});
goto(lbl_000005ac);
let lbl_000003b9;
showTextbox();
text(() => {
   Kid`"Nope...."`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"It's not your problem so it's easy for you to say that..."`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S052)`"But at least you've gotten better so that you can talk."`;
   Kid`"........."`;
   You(C1S053)`"And do you know why?"`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S054)`"You can speak because you are aware of this moment, right now."`;
   Kid`"Right now?"`;
   You(C1S055)`"People have no choice but to live in the moment."`;
   You(C1S056)`"The past and the future are simply an illusion..."`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S057)`"Trying to grab that empty image is...it's meaningless."`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S058)`"So right now you should just smile as if you don't care."`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S059)`"Smile."`;
   Kid`"........."`;

});
hideTextbox();
fgload({ id: 1, name: `YU04BWL`, x: 320, useAnim: true });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   You(C1S060)`"Now smile!"`;
   Kid`"I can't JUST smile..."`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S061)`"If you don't smile...then I'll put my finger up Mayo's nose."`;
   Sara(C1S062)`"...Huh?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02BWM`, name2: `SA08ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(C1S063)`"I'll put finger in that gooey pit..."`;
   `As she talked, You did exactly as she said.`;

});
fgload({ id: 2, name: `SA06ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S064)`"W-wait! Stop! Nakkyu!"`;
   You(C1S065)`"Pick, pick...goooooey..."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S066)`"Hey...hey! Nakkyu...Nakkyu..."`;
   Sara(C1S067)`"Nakkyu...your finger's in my nose..."`;
   You(C1S068)`"Pickity, pickity...."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S069)`"And now Nakkyu and I become one..."*`;
   You(C1S070)`"Goooooeeey..."`;

});
fgload({ id: 2, name: `SA14ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S071)`"...Wait, just what do you think you are doing?"`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU08BWM`, x: 176, useAnim: false });
showTextbox();
text(() => {
   `Whack!`;
   `Sara smacked You.`;
   `Watching that scene, my cheeks just naturally relaxed.`;

});
fgload({ id: 1, name: `YU09BWM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(C1S072)`"Ha! He smiled, he smiled!"`;

});
fgload({ id: 2, name: `SA09ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S073)`"He is! He is! A, HA, HA, HA!"`;

});
fgload({ id: 2, name: `SA04ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S074)`"...But - do you think I'm happy about this?"`;

});
fgload({ id: 2, name: `SA05ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S075)`"What are you thinking? Sticking your finger in somebody's nose...geez."`;

});
fgload({ id: 1, name: `YU08BWM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(C1S076)`"Hee, hee, hee."`;
   `As I was watching their exchange, at some point the pain in my head had also eased.`;
   `It was a 'painful' exchange in a different meaning of the word, but...`;

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
   `After I had calmed down again, we went to find an exit.`;
   `Of course, Sara couldn't hide her surprise at what had happened to the inside of the complex.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A292)`"What is this?"`;
   Sara(S1A293)`"Why is everything wet?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A294)`"And there isn't anyone around..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As we walked, You explained to Sara the sequence of events to that point.`;
   `'You was working at LeMU on a part-time basis.'`;
   `'I collapsed at the kiosk.'`;
   `'The warning alarm sounded, everyone disappeared from LeMU and the flooding started.'`;
   `Stunned, Sara listened to You.`;
   `A while after You had finished the story...`;
   `As if she had just thought of it, You blurted out suddenly - `;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07BWM`, name2: `SA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S077)`"But you know what is really strange..."`;

});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S078)`"What?"`;
   You(C1S079)`"What this kid was just saying..."`;
   You(C1S080)`"I mean, Mayo, you don't remember him from anywhere, right?"`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S081)`"Right..."`;

});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S082)`"But he knew your name..."`;
   You(C1S083)`"So that means that somewhere in his lost memory there is some information stored about you, right?"`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S084)`"I wonder why."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;

});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S085)`"If it were the other way around, it'd make sense."`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S086)`"If you knew something about him...but he had forgotten you because of amnesia..."`;
   You(C1S087)`"That would make sense to me..."`;

});
fgload({ id: 1, name: `YU01BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S088)`"But this is like going backward on a one-way street." `;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S089)`"One-way street, huh...?"`;

});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S090)`"Oh, I know! This is probably what happened."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S091)`"?"`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S092)`"This kid probably used to be a big Sara Matsunaga fan!"`;
   Sara(C1S093)`"I'll bet I never noticed him, but he used to watch me from a distance, like from the shadows."`;
   Sara(C1S094)`"That would explain it completely."`;

});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S095)`"You're saying he is a stalker?"`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S096)`"Yup. That's exactly it."`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S097)`"Hey. Is that it? Did you used to stalk her?"`;
   Kid`"Just because I lost my memory, don't go making one up for me!"`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S098)`"Am I wrong?"`;
   Kid`"Yes!"`;

});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S099)`"Mayo, I'll only ask you one more time..." `;
   You(C1S100)`"Are you really sure that you don't remember seeing this kid before?"`;
   Sara(C1S101)`"Remember him...?"`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S102)`"Hmmm...hmmm..."`;
   `Sara brought her face close to me and stared at me.`;
   `I could almost feel her breath.`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S103)`"Well now that you mention it..."`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"Huh?"`;

});
fgload({ id: 1, name: `YU06BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S104)`"Huh?"`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S105)`"No...I'm kidding...I'm just joking."`;

});
fgload({ id: 2, name: `SA17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S106)`"There's no reason I should remember him."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `'No reason???`;
   `I wondered what she meant by that.`;
   `I thought that maybe she really did know who I was.`;
   `My heart started to pound again.`;
   `I remembered when I had seen Sara for the first time a little bit ago.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgload({ name: `EV_SA01A`, transition: 26 });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `I had felt something along the lines of nostalgia.`;
   `For some reason, I felt that I had witnessed the same scene somewhere before.`;
   `Maybe I had met her in the past after all.`;
   `But I couldn't be sure of it.`;
   `Even if I did know a name, or even feel nostalgic...it wasn't in my memory.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG26B3R`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Sara's smile felt far away, so that no matter how much I reached out for it, I would never be able to touch it.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
l_choice = 2;
jump(`S_1A2`);
