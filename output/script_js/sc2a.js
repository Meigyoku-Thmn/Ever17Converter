l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
showTextbox();
text(() => {
   You(C2S005)`"Anyway, let's go looking for Takeshi and Tsugumi."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S006)`"And Sora...?"`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_00000113);
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S007)`"Sora is..."`;
   You(C2S008)`"...Let's not worry about her for now."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"What?"`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S009)`"I'll tell you later. Looking for those two is the top priority right now."`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `You started running.`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Sara and I followed her without knowing what was going on.`;

});
goto(lbl_00000172);
let lbl_00000113;
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S010)`"Mayo? We're in the middle of a blackout now."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S011)`"So what?"`;
   Kid`"Oh, I see..."`;
   Kid`"Sora's brain is AI, and her body is made by RSD."`;
   Kid`"Which means...if the power is down then, Sora can't appear."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA01ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S012)`"That's right."`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `Saying that, You started running.`;
   `I took Sara by the hand and followed after You.`;

});
let lbl_00000172;
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
bgload({ name: `BG26B4L`, transition: 26 });
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I didn't know where Takeshi and Tsugumi were.`;
   `And I couldn't imagine that they would be just wandering around during this crisis.`;
   `So where would they go first?`;

});
bgload({ name: `BG15B2`, transition: 20 });
clock(`6:34`);
showTextbox();
text(() => {
   `—The Control Room`;
   `I couldn't think of anywhere else.`;
   `The power was out, so the door didn't open automatically.`;
   `You pulled the lever next to the door and opened it manually.`;

});
bgload({ name: `BG16A2`, transition: 10 });
showTextbox();
text(() => {
   `The three of us went inside...`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S013)`"Takeshi! Tsugumi! If you are here, answer me!"`;
   `You called into the darkness.`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_0000021c);
showTextbox();
text(() => {
   `I wondered why she only called out for Takeshi and Tsugumi.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid`"Sora! Sora!"`;
   `I called to Sora but there was no answer.`;
   Kid`"Sora should have been here. I wonder where she could have gone."`;

});
goto(lbl_0000022e);
let lbl_0000021c;
showTextbox();
text(() => {
   Kid`"Hello!"`;
   Sara(C2S014)`"Takeshi! Tsugumi!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `There was no answer.`;

});
let lbl_0000022e;
showTextbox();
text(() => {
   `You had picked up a flashlight at some point.`;
   `I thought that maybe she had found it somewhere in the Control Room.`;
   `You turned on it...`;
   `A round, white light appeared on the wall.`;
   `You shined the flashlight right and left, lighting up all corners of the room.`;
   `The electricity was completely out.`;
   `Like an abandoned castle, there was no sign of warmth left.`;
   `There was clearly nobody there.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S015)`"It doesn't seem...like there is anyone here..."`;

});
bgload({ name: `BG15B2`, transition: 20 });
showTextbox();
text(() => {
   `We left the room.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S016)`"Can you carry this?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You handed me the flashlight and shut the Control Room door.`;
   `Just then...`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash, splash, splash...`;
   `We heard the sounds of someone running toward us through water.`;
   `After a short while, two figures emerged from the darkness.`;
   Kid`"Oh, Takeshi!"`;
   Sara(C2S017)`"Tsugumi!"`;
   `Takeshi and Tsugumi approached, walking through water.`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_000004ae);
stopSFX()
multifgload3({ name1: `SA03ADS`, name2: `TU05ADS`, name3: `KB01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Kid`"Hey, have you seen Sora?"`;

});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S018)`"I thought she was in the Control Room."`;
   Sara(C2S019)`"It was empty..."`;

});
fgload({ id: 4, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S020)`"Really?"`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Takeshi used the manual lever to open the door.`;
   `Takeshi looked inside...`;
   Kid`"Do you want a flashlight?"`;

});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S021)`"Yeah. Thanks."`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Takeshi took the flashlight, turned it on and went into the room.`;
   `.....................`;

});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S022)`"Geez...Where would Sora go at a time like this?"`;
   `Takeshi said that when he emerged from the Control Room.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S023)`"So...what are we going to do?"`;
   `You said it with her hands on her hips. She appeared calm.`;
   `It had been a series of strange things happening since the day before...`;
   `Maybe we were all completely used to it. In any case, none of us were freaking out.`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S024)`"Anyway..."`;
   Sara(C2S025)`"All we can do is split up and look for Sora." `;

});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S026)`"Without Sora, we won't know why there's been this blackout..."`;
   Kid`"Yeah. Sora knows more about LeMU than anyone."`;

});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S027)`"Uh...Sora..."`;

});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2S028)`"Sora..."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S029)`"?"`;
   Kid`"?"`;
   Takeshi(C2S030)`"?"`;

});
fgload({ id: 2, name: `YU03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S031)`"Maybe it's time..."`;

});
fgload({ id: 2, name: `YU07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S032)`"Since it has come to this, I'll tell you..."`;
   You(C2S033)`"I don't think we'll find Sora, even if we look."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA06ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S034)`"Huh?"`;
   Kid`"What?"`;
   Takeshi(C2S035)`"Why not?"`;

});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S036)`"I can't tell you the reason."`;
   You(C2S037)`"That's something that you should hear from Sora herself..."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S038)`"???"`;
   Kid`"???"`;

});
fgload({ id: 4, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S039)`"???"`;

});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S040)`"Anyway, just take my word for it."`;
   You(C2S041)`"You don't have to worry. Sora is just fine."`;
   You(C2S042)`"And she will come back for sure."`;
   Kid`"Come back?"`;
   `You didn't answer my question.`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C2S043)`"Alright..."`;
   Tsugumi(C2S044)`"So, what are you going to do?"`;

});
goto(lbl_00000558);
let lbl_000004ae;
stopSFX()
multifgload3({ name1: `KB05ADS`, name2: `YU05ADS`, name3: `TU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi(C2S045)`"Hey, are you all right? Everybody's okay?"`;

});
fgload({ id: 4, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C2S046)`"It's only a blackout. You worry too much..."`;

});
fgload({ id: 1, name: `KB07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S047)`"But...Sora's missing!"`;
   Kid`"It's a blackout, so Sora is..."`;
   Takeshi(C2S048)`"Yeah, I know that..."`;
   Takeshi(C2S049)`"I know that, but...let's see..."`;

});
fgload({ id: 1, name: `KB03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S050)`"If this blackout goes on, don't you think that Sora might never appear again?"`;

});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S051)`"That is something you don't have to worry about."`;
   You(C2S052)`"I've got an idea."`;

});
multifgload2({ id1: 1, id2: 4, name1: `KB08ADS`, name2: `TU01ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C2S053)`"...An idea?"`;

});
let lbl_00000558;
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S054)`"I think we should try the Generator Room..."`;

});
if (l_know_sora_is_an_ai == 0) goto(lbl_0000058b);
removeFG({ id: 1, useAnim: true });
let lbl_0000058b;
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S055)`"The Generator Room?"`;
   You(C2S056)`"I figure that the cause of this blackout is trouble in the Generator Room."`;
   `That reminded me of something Sora had said the day before...`;
   `LeMU didn't receive any power from the outside, but had an in-house generating system.`;
   `It draws hot water from a thermal seafloor vent and operates the generator using this heat.`;

});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S057)`"Tsugumi, you'll come along, won't you?"`;

});
fgload({ id: 4, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C2S058)`"Sorry, but I'm not up for it."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADS`, name2: `YU06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S059)`"What?"`;

});
fgload({ id: 4, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C2S060)`"I'm not going."`;
   Tsugumi(C2S061)`"If you want to go, be my guest."`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `After saying that, Tsugumi left.`;
   `It didn't look like it would be any use calling after her.`;

});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S062)`"Geez. I have no clue what is going on in that girl's head."`;

});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S063)`"Oh well. The four of us will have to go."`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C2S064)`"Nakkyu, where is the Generator Room?"`;
   You(C2S065)`"The Generator Room is here - in Dritte stock."`;

});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S066)`"Okay! Let's hop to it, everybody!"`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Takeshi started walking toward the corridor.`;

});
fgload({ id: 2, name: `YU04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S067)`"Hey Takeshi, where do you think you are going?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA08ADS`, name2: `KB07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S068)`"Where? To the Generator Room of course. It was your idea to start with, right?"`;
   You(C2S069)`"And? How were you thinking of going there?"`;

});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S070)`"Huh? By walking through the corridors, dummy."`;

});
fgload({ id: 2, name: `YU07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S071)`"Oh please...you really don't get anything, do you?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S072)`"Huh? What's that suppose to mean?"`;
   Kid`"Hey, You. I don't think I get it either..."`;
   Sara(C2S073)`"Me neither."`;

});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S074)`"You guys don't remember the map of LeMU we saw yesterday?"`;

});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S075)`"Map? Map...map..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `MAP3F_A1`, transition: 30 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setMapCommentToDisplay({ slot: 1 });
pickMapComment2({ index: 6 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   Sara(C2S076)`"Oh...you mean the three story map that was split into two areas?" `;
   Kid`"Oh, that's right..."`;
   You(C2S077)`"You remember it too, Takeshi?"`;

});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 7 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   Takeshi(C2S078)`"I can't say I remember it exactly...but kinda, yeah."`;

});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   You(C2S079)`"And what was between those two areas?"`;
   Takeshi(C2S080)`"Between them? How am I supposed to know...?"`;
   Kid`"Hmmm...I don't think that there was anything."`;

});
hideTextbox();
show_map_root_image_blinking_Anim();
show_map_root_image_blinking_Anim();
waitForClick();
showTextbox();
text(() => {
   You(C2S081)`"Bingo."`;
   You(C2S082)`"Meaning what?"`;
   Kid`"The two areas are divided by a block which is now under water...?"`;
   You(C2S083)`"And?"`;
   Sara(C2S084)`"We can't go directly from the Control Room area to the Generator Room area."`;
   Kid`"Besides that, the emergency stairs of one of those areas was also flooded..."`;

});
closeMapIndicatorAnim();
showTextbox();
text(() => {
   You(C2S085)`"So what?"`;
   Takeshi(C2S086)`"I got it..."`;
   Takeshi(C2S087)`"To get to the Generator Room's area, we have to access the second floor..."`;

});
bgload({ name: `MAP2F_A1`, transition: 30 });
showTextbox();
text(() => {
   Takeshi(C2S088)`"And the only way we can do that is by using the neutral buoyancy elevator."`;

});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 4 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   You(C2S089)`"Correct."`;
   You(C2S090)`"So, we have to go to..."`;
   Kid`"To the entrance to the neutral buoyancy elevator."`;

});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   You(C2S091)`"That's right."`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG15B2`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2S092)`"Now that you've got it...let's get going!"`;
   Sara(C2S093)`"Okey-dokey!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sara took a bizarre kung fu pose and started spinning like a top.`;
   `But I had no clue what she was trying to do.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
l_choice = 0;
jump(`S_2B`);
