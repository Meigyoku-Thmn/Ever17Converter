g_b0 = 5;
g_b1 = 2;
g_b2 = 2;
showTextbox();
text(() => {
   marker; sound(`C2S005`); appendText; 
   You`"Anyway, let's go looking for 
Takeshi and Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S006`); appendText; 
   Sara`"And Sora...?"`;
   waitForClick; clearText; 
});
goto(lbl_00000113).if(g_f0 != 0);
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S007`); appendText; 
   You`"Sora is..."`;
   waitForClick; clearText; marker; sound(`C2S008`); appendText; 
   You`"...Let's not worry about her for now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S009`); appendText; 
   You`"I'll tell you later. Looking for those two 
is the top priority right now."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You started running.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara and I followed her without knowing what 
was going on.`;
   waitForClick; clearText; 
});
goto(lbl_00000172);
let lbl_00000113;
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S010`); appendText; 
   You`"Mayo? We're in the middle of a blackout now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S011`); appendText; 
   Sara`"So what?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, I see..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora's brain is AI, and her body is made by 
RSD."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Which means...if the power is down then, Sora 
can't appear."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA01ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S012`); appendText; 
   You`"That's right."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, You started running.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took Sara by the hand and followed after You.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I didn't know where Takeshi and Tsugumi were.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I couldn't imagine that they would be just 
wandering around during this crisis.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So where would they go first?`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B2`, transition: 20 });
clock(`6:34`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—The Control Room`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't think of anywhere else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The power was out, so the door didn't open 
automatically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You pulled the lever next to the door 
and opened it manually.`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A2`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The three of us went inside...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S013`); appendText; 
   You`"Takeshi! Tsugumi! If you are here, answer me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You called into the darkness.`;
   waitForClick; clearText; 
});
goto(lbl_0000021c).if(g_f0 != 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered why she only called out for Takeshi 
and Tsugumi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sora! Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called to Sora but there was no answer.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora should have been here. 
I wonder where she could have gone."`;
   waitForClick; clearText; 
});
goto(lbl_0000022e);
let lbl_0000021c;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hello!"`;
   waitForClick; clearText; marker; sound(`C2S014`); appendText; 
   Sara`"Takeshi! Tsugumi!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was no answer.`;
   waitForClick; clearText; 
});
let lbl_0000022e;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You had picked up a flashlight at some point.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe she had found it 
somewhere in the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You turned on it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A round, white light appeared on the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shined the flashlight right and left, 
lighting up all corners of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The electricity was completely out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like an abandoned castle, 
there was no sign of warmth left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was clearly nobody there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S015`); appendText; 
   Sara`"It doesn't seem...like there is 
anyone here..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We left the room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S016`); appendText; 
   You`"Can you carry this?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You handed me the flashlight and shut the 
Control Room door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash, splash, splash...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We heard the sounds of someone running 
toward us through water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a short while, two figures emerged from 
the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, Takeshi!"`;
   waitForClick; clearText; marker; sound(`C2S017`); appendText; 
   Sara`"Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Tsugumi approached, walking 
through water.`;
   waitForClick; clearText; 
});
goto(lbl_000004ae).if(g_f0 != 0);
stopSFX()
multifgload3({ name1: `SA03ADS`, name2: `TU05ADS`, name3: `KB01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, have you seen Sora?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S018`); appendText; 
   Takeshi`"I thought she was in the Control Room."`;
   waitForClick; clearText; marker; sound(`C2S019`); appendText; 
   Sara`"It was empty..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S020`); appendText; 
   Takeshi`"Really?"`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi used the manual lever to open the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked inside...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you want a flashlight?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S021`); appendText; 
   Takeshi`"Yeah. Thanks."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi took the flashlight, turned it on and 
went into the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.....................`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S022`); appendText; 
   Takeshi`"Geez...Where would Sora go at a time like 
this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said that when he emerged from the 
Control Room.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S023`); appendText; 
   You`"So...what are we going to do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said it with her hands on her hips. 
She appeared calm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been a series of strange things 
happening since the day before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe we were all completely used to it. 
In any case, none of us were freaking out.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S024`); appendText; 
   Sara`"Anyway..."`;
   waitForClick; clearText; marker; sound(`C2S025`); appendText; 
   Sara`"All we can do is split up and look for Sora." `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S026`); appendText; 
   Sara`"Without Sora, we won't know 
why there's been this blackout..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. Sora knows more about 
LeMU than anyone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S027`); appendText; 
   You`"Uh...Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S028`); appendText; 
   You`"Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S029`); appendText; 
   Sara`"?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`C2S030`); appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S031`); appendText; 
   You`"Maybe it's time..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S032`); appendText; 
   You`"Since it has come to this, I'll tell you..."`;
   waitForClick; clearText; marker; sound(`C2S033`); appendText; 
   You`"I don't think we'll find Sora, even if we 
look."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA06ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S034`); appendText; 
   Sara`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`C2S035`); appendText; 
   Takeshi`"Why not?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S036`); appendText; 
   You`"I can't tell you the reason."`;
   waitForClick; clearText; marker; sound(`C2S037`); appendText; 
   You`"That's something that you should hear from 
Sora herself..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S038`); appendText; 
   Sara`"???"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S039`); appendText; 
   Takeshi`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S040`); appendText; 
   You`"Anyway, just take my word for it."`;
   waitForClick; clearText; marker; sound(`C2S041`); appendText; 
   You`"You don't have to worry. Sora is just fine."`;
   waitForClick; clearText; marker; sound(`C2S042`); appendText; 
   You`"And she will come back for sure."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Come back?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You didn't answer my question.`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S043`); appendText; 
   Tsugumi`"Alright..."`;
   waitForClick; clearText; marker; sound(`C2S044`); appendText; 
   Tsugumi`"So, what are you going to do?"`;
   waitForClick; clearText; 
});
goto(lbl_00000558);
let lbl_000004ae;
stopSFX()
multifgload3({ name1: `KB05ADS`, name2: `YU05ADS`, name3: `TU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`C2S045`); appendText; 
   Takeshi`"Hey, are you all right? Everybody's okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S046`); appendText; 
   Tsugumi`"It's only a blackout. You worry too much..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S047`); appendText; 
   Takeshi`"But...Sora's missing!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's a blackout, so Sora is..."`;
   waitForClick; clearText; marker; sound(`C2S048`); appendText; 
   Takeshi`"Yeah, I know that..."`;
   waitForClick; clearText; marker; sound(`C2S049`); appendText; 
   Takeshi`"I know that, but...let's see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S050`); appendText; 
   Takeshi`"If this blackout goes on, don't you think 
that Sora might never appear again?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S051`); appendText; 
   You`"That is something you don't have to worry 
about."`;
   waitForClick; clearText; marker; sound(`C2S052`); appendText; 
   You`"I've got an idea."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `KB08ADS`, name2: `TU01ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S053`); appendText; 
   Tsugumi`"...An idea?"`;
   waitForClick; clearText; 
});
let lbl_00000558;
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S054`); appendText; 
   You`"I think we should try the Generator Room..."`;
   waitForClick; clearText; 
});
goto(lbl_0000058b).if(g_f0 == 0);
removeFG({ id: 1, useAnim: true });
let lbl_0000058b;
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S055`); appendText; 
   Sara`"The Generator Room?"`;
   waitForClick; clearText; marker; sound(`C2S056`); appendText; 
   You`"I figure that the cause of this blackout is 
trouble in the Generator Room."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That reminded me of something Sora had said 
the day before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU didn't receive any power from the 
outside, but had an in-house generating 
system.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It draws hot water from a thermal seafloor 
vent and operates the generator using this 
heat.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S057`); appendText; 
   You`"Tsugumi, you'll come along, won't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S058`); appendText; 
   Tsugumi`"Sorry, but I'm not up for it."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADS`, name2: `YU06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S059`); appendText; 
   You`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S060`); appendText; 
   Tsugumi`"I'm not going."`;
   waitForClick; clearText; marker; sound(`C2S061`); appendText; 
   Tsugumi`"If you want to go, be my guest."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After saying that, Tsugumi left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like it would be any use 
calling after her.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S062`); appendText; 
   Takeshi`"Geez. I have no clue what is going 
on in that girl's head."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S063`); appendText; 
   You`"Oh well. The four of us will have to go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S064`); appendText; 
   Sara`"Nakkyu, where is the Generator Room?"`;
   waitForClick; clearText; marker; sound(`C2S065`); appendText; 
   You`"The Generator Room is here - in Dritte stock."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S066`); appendText; 
   Takeshi`"Okay! Let's hop to it, everybody!"`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi started walking toward the corridor.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S067`); appendText; 
   You`"Hey Takeshi, where do you think you are 
going?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA08ADS`, name2: `KB07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S068`); appendText; 
   Takeshi`"Where? To the Generator Room of course. It 
was your idea to start with, right?"`;
   waitForClick; clearText; marker; sound(`C2S069`); appendText; 
   You`"And? How were you thinking of going there?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S070`); appendText; 
   Takeshi`"Huh? By walking through the corridors, 
dummy."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S071`); appendText; 
   You`"Oh please...you really don't get anything, 
do you?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S072`); appendText; 
   Takeshi`"Huh? What's that suppose to mean?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You. I don't think I get it either..."`;
   waitForClick; clearText; marker; sound(`C2S073`); appendText; 
   Sara`"Me neither."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S074`); appendText; 
   You`"You guys don't remember the map of LeMU we 
saw yesterday?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S075`); appendText; 
   Takeshi`"Map? Map...map..."`;
   waitForClick; clearText; 
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
   marker; sound(`C2S076`); appendText; 
   Sara`"Oh...you mean the three story map that 
was split into two areas?" `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, that's right..."`;
   waitForClick; clearText; marker; sound(`C2S077`); appendText; 
   You`"You remember it too, Takeshi?"`;
   waitForClick; clearText; 
});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 7 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   marker; sound(`C2S078`); appendText; 
   Takeshi`"I can't say I remember it exactly...but 
kinda, yeah."`;
   waitForClick; clearText; 
});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   marker; sound(`C2S079`); appendText; 
   You`"And what was between those two areas?"`;
   waitForClick; clearText; marker; sound(`C2S080`); appendText; 
   Takeshi`"Between them? How am I supposed to know...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm...I don't think that there was anything."`;
   waitForClick; clearText; 
});
hideTextbox();
show_map_root_image_blinking_Anim();
show_map_root_image_blinking_Anim();
waitForClick();
showTextbox();
text(() => {
   marker; sound(`C2S081`); appendText; 
   You`"Bingo."`;
   waitForClick; clearText; marker; sound(`C2S082`); appendText; 
   You`"Meaning what?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The two areas are divided by a block which 
is now under water...?"`;
   waitForClick; clearText; marker; sound(`C2S083`); appendText; 
   You`"And?"`;
   waitForClick; clearText; marker; sound(`C2S084`); appendText; 
   Sara`"We can't go directly from the Control Room 
area to the Generator Room area."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Besides that, the emergency stairs of one of 
those areas was also flooded..."`;
   waitForClick; clearText; 
});
closeMapIndicatorAnim();
showTextbox();
text(() => {
   marker; sound(`C2S085`); appendText; 
   You`"So what?"`;
   waitForClick; clearText; marker; sound(`C2S086`); appendText; 
   Takeshi`"I got it..."`;
   waitForClick; clearText; marker; sound(`C2S087`); appendText; 
   Takeshi`"To get to the Generator Room's area, 
we have to access the second floor..."`;
   waitForClick; clearText; 
});
bgload({ name: `MAP2F_A1`, transition: 30 });
showTextbox();
text(() => {
   marker; sound(`C2S088`); appendText; 
   Takeshi`"And the only way we can do that is 
by using the neutral buoyancy elevator."`;
   waitForClick; clearText; 
});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 4 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   marker; sound(`C2S089`); appendText; 
   You`"Correct."`;
   waitForClick; clearText; marker; sound(`C2S090`); appendText; 
   You`"So, we have to go to..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"To the entrance to the neutral buoyancy 
elevator."`;
   waitForClick; clearText; 
});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   marker; sound(`C2S091`); appendText; 
   You`"That's right."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG15B2`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S092`); appendText; 
   You`"Now that you've got it...let's get going!"`;
   waitForClick; clearText; marker; sound(`C2S093`); appendText; 
   Sara`"Okey-dokey!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara took a bizarre kung fu pose and 
started spinning like a top.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I had no clue what she was trying to do.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
g_b3 = 0;
jump(`S_2B`);
