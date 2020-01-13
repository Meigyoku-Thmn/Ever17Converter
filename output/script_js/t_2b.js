varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 2`);
varop(`(28 0a a4) b2 := (00) 2`);
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG24A3`, transition: 20 });
setSceneTitle({ index: 11 });
clock(`7:5`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- The neutral buoyancy elevator 'EI.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'EI' meant egg in German.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was also a literal take on the egg-shaped 
elevator that traveled up and down rails into 
the ocean on the side of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A ballast tank was attached to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It would take in or release seawater from the 
tank as necessary to increase or reduce 
buoyancy, making the elevator rise 
or sink.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Once Tsugumi and I were inside, we sealed the 
watertight doors on the LeMU side of the 
elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All we had to do was release the lock 
connecting us to LeMU and the 'egg' would 
sink away.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi pulled the operating lever next to 
the door.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nothing happened.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's going on? We're not sinking at all."`;
   waitForClick; clearText; marker; sound(`T2B000`); appendText; 
   //Tsugumi
   Tsugumi`"Doesn't look like it, does it."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE10_22`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi calmly opened up the toolbox she had 
brought with her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside were an electric screwdriver, hydraulic 
cutting machine, some kind of laser or welding 
device, a small gas burner...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The box was packed with any and all kinds of 
tools.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? What're you going to do...with that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B001`); appendText; 
   //Tsugumi
   Tsugumi`"If it won't sink..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B002`); appendText; 
   //Tsugumi
   Tsugumi`"Then we'll just have to sink it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh?"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE10_20`, a1: 0, volume: 100 });
bgload({ name: `EV_TU05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What? T-T-T-Tsugumi! Are you crazy!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took the lit torch in hand and slowly 
stood up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blue flame erupted from it like a jet engine, 
hissing in the dim light.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"N-n-n-n-no way..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're kidding, right? Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi didn't answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grinned triumphantly.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_21`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She put the flame to the edge of the 
elevator's shell.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yikes!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no time to stop her.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
bgload({ name: `EV_TU05B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A coin-sized hole opened in the egg-shaped 
elevator and seawater came spurting in with 
tremendous force.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You idiot! Idiot! Idiooot!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-w-w-w-what're you trying to do?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A hole! There's a hole!"`;
   waitForClick; clearText; marker; sound(`T2B003`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah, I made it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was as calm as ever.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She extinguished the flame as if nothing had 
happened. She placed it in the toolbox and 
shut the lid.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The seawater created a mist, descending all 
around us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi licked the droplet off of her lips.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're crazy, right!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, being cooped in here's made you 
crazy!"`;
   waitForClick; clearText; marker; sound(`T2B004`); appendText; 
   //Tsugumi
   Tsugumi`"Heh, heh, heh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi just snickered.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As we continued this exchange, water 
continued to pour in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It pooled in the bottom of the egg.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It covered our ankles, then our shins, 
swallowing our knees and the lapping at our 
thighs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...`;
   waitForClick; 
});
choice(
   `Decided to escape`
   `Thought maybe I'd wash my hair`
);
bgload({ name: `BG24A3`, transition: 20 });
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
switch (choice) {
   case 0: goto(lbl_00000222);
   case 1: goto(lbl_00000278);
}
let lbl_00000222;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided it would be best to escape.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to be around that crazy woman 
anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I discreetly reached for the handle of the 
watertight door....`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B005`); appendText; 
   //Tsugumi
   Tsugumi`"What are you doing...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B006`); appendText; 
   //Tsugumi
   Tsugumi`"You said...you would come along with me...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grabbed my wrist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's palm was soft and wet...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a soft, suction-like, feeling as she 
grabbed me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi stared at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a serious, hard look.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"F-fine, have it your way!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'll go along with you to the end - even if 
we sink to the bottom of the ocean!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I made up my mind.`;
   waitForClick; clearText; 
});
goto(lbl_00000294);
let lbl_00000278;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought it was good timing. I was due for a 
wash anyway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd missed bathing the day before....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I dunked my head under the inflowing water and 
mussed up my hair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yup. It was invigorating.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could really feel the minerals seeping into 
my scalp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water was cold, but it was actually 
refreshing.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, can you get the shampoo for me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Er, what the heck am I doing?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi gave me the evil eye.`;
   waitForClick; clearText; 
});
let lbl_00000294;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then....`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_07`, a1: 0, volume: 90 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 3d := (00) 4`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom! The egg elevator took a big jolt and 
started to move.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
closeShakeScreenAnim();
bgload({ name: `IMG01B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`EI began to inch down ever so slowly ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Peeking through the window and into the 
blue we could see the outside of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The blue gradually got darker and the steel 
bulkhead appeared to move further away upward.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The higher water pressure increased the force 
of the water pouring in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The speed of our descent picked up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered how many feet we had dropped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shifted my gaze toward the sea bottom, but 
Dritte stock still had not come into view.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water in the elevator had already reached 
my chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My legs were floating...I was on my toes....`;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 20 });
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I kicked with all my power off the floor and 
seized an edge of the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't you think this is pretty dangerous?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A strained smile appeared on Tsugumi's face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed she was getting a little worried.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if...we'll die like this..."`;
   waitForClick; clearText; marker; sound(`T2B007`); appendText; 
   //Tsugumi
   Tsugumi`"M-maybe..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, not 'maybe'!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This harebrained idea was all your...cough, 
splutter..."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The surface of the water reached my throat 
and cold seawater rushed into my mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my chin and desperately tried to 
stick to the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi! Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I screamed crazily.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU05C`, transition: 20 });
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked sideways and saw Tsugumi struggling 
to stay above the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_07`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_cb_0_6`);
varop(`(28 0a a2) 3d := (00) 7`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 4`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom! The egg was shaken by a strong shock.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'We made it to the third floor!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to shout this, but it was impossible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no longer enough air for me to yell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if she had panicked or what, but 
Tsugumi was thrashing her arms and legs around 
desperately.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the blur underwater...I pinned down 
Tsugumi's shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"It's alright. I'll take care of it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt Tsugumi's body relax.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I kicked against the wall and clung to the 
handle of watertight door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I focused every ounce of strength in my body 
on turning the heavy handle...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because my body would float, I couldn't gain 
traction with my feet.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bracing one leg on the handrail, I continued 
turning and turning it....`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water pressure began pressing in on my 
eardrums.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body was screaming for oxygen.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Open!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Open!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Ooppppppeeeeeeeen!!!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG({ mode: WHITE, transition: 02 });
stopSFX()
stopBGM();
playSFX({ name: `SE00_08`, a1: 0, volume: 100 });
bgload({ name: `BG23B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The double-ply door opened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The mass of water and Tsugumi and I were all 
spit out of the elevator and on to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But we didn't have time to catch our breath.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Seawater was flooding into the hole in the 
elevator more ferociously than ever.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I got up immediately and rushed to the 
watertight door on the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`First I closed that door, locked it and then 
closed the door on the LeMU side as well.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_02`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a while, I couldn't move.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 7, volume: 100 });
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi, too, lay sprawled out on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't feel angry with her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because relief was the dominant emotion...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That was such a stupid thing to do...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What if we really had died...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was coughing a little, looking down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't try to look at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe she was reflecting on 
what she had done.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(That's it, maybe...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe she just isn't a 'people person' and 
has a hard time getting along with others...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed fragile, and lonely...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she needs someone's help...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the first time that I had realized 
there was anything weak about her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sitting all alone in the middle of that 
sprawling floor she look so small, like a 
newly born chick.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
clock(`7:22`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The hallway was dark.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The darkness hid our surroundings from us and 
felt oppressive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked slowly forward making sure of each 
step.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In my right hand I had a huge toolbox.... It 
was so heavy it felt like my shoulder might 
break under its strain.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if this area is full of water from 
yesterday's flooding."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi shot a question back at me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B008`); appendText; 
   //Tsugumi
   Tsugumi`"So what?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two syllables...that was all she said.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's your problem, anyway?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Just a minute ago you were desperately 
screaming for help to keep from drowning."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B009`); appendText; 
   //Tsugumi
   Tsugumi`"I didn't scream anything."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, but your eyes did."`;
   waitForClick; clearText; marker; sound(`T2B010`); appendText; 
   //Tsugumi
   Tsugumi`"Did not."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There you go, acting all tough again."`;
   waitForClick; clearText; marker; sound(`T2B011`); appendText; 
   //Tsugumi
   Tsugumi`"I'm not acting tough."`;
   waitForClick; clearText; marker; sound(`T2B012`); appendText; 
   //Tsugumi
   Tsugumi`"Besides..."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 3d := (00) 4`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bump.`;
   waitForClick; clearText; 
});
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Ouch. Don't just stop all of a sudden like 
that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's dark and I can't see."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B013`); appendText; 
   //Tsugumi
   Tsugumi`"Listen up. I'll only tell you once more. I 
never, ever asked for help." `;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi turned back to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shrouded in the darkness, I couldn't really 
make out her expression.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, but if I hadn't opened up that door the 
chances are you and I would both be floating 
drowned in that egg."`;
   waitForClick; clearText; marker; sound(`T2B014`); appendText; 
   //Tsugumi
   Tsugumi`"If I have to be saved by you, then I'd 
rather die."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh reeeallly..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Geez. Why can't this girl ever be honest with 
people...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went around Tsugumi and walked further 
along the flooded corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"One more thing I wanna get off my chest - 
what were those words all about anyway?"`;
   waitForClick; clearText; marker; sound(`T2B015`); appendText; 
   //Tsugumi
   Tsugumi`"What words?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As she fired another short question at me, 
Tsugumi passed me again.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What you said before we got in the egg on 
the second floor."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"'I really...really need you!'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Your eyes were watery. You were begging me, 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B016`); appendText; 
   //Tsugumi
   Tsugumi`"Yes. I did."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh. That was an unexpected answer....)`;
   waitForClick; clearText; marker; sound(`T2B017`); appendText; 
   //Tsugumi
   Tsugumi`"What about it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"S-s-so you are depending on me after all."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And now you finally admit it?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi continued forward without talking....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"In other words, IF something were to happen, 
you want to be with someone you can rely on."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're afraid to be alone. That's why you 
wanted me to come."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B018`); appendText; 
   //Tsugumi
   Tsugumi`"You..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B019`); appendText; 
   //Tsugumi
   Tsugumi`"...are SUCH an idiot."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T2B020`); appendText; 
   //Tsugumi
   Tsugumi`"Don't you get it yet?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B021`); appendText; 
   //Tsugumi
   Tsugumi`"That EI elevator is a neutral buoyancy 
elevator so for the most part it doesn't 
require outside power."`;
   waitForClick; clearText; marker; sound(`T2B022`); appendText; 
   //Tsugumi
   Tsugumi`"But it does need power for the intake and 
release of water from the ballast tank...in 
fact that's the only time it needs power."`;
   waitForClick; clearText; marker; sound(`T2B023`); appendText; 
   //Tsugumi
   Tsugumi`"And since this is a blackout..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You couldn't operate the ballast 
valve...that much I know."`;
   waitForClick; clearText; marker; sound(`T2B024`); appendText; 
   //Tsugumi
   Tsugumi`"Well, do you know Archimedes principle?"`;
   waitForClick; 
});
choice(
   `I know it`
   `I don't know it`
);
switch (choice) {
   case 0: goto(lbl_000006bd);
   case 1: goto(lbl_000006c6);
}
let lbl_000006bd;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Dang you're annoying..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Of course I know about that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The buoyancy of a submerged object is equal 
to the weight of the liquid displaced by the 
object."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And what does that have to do with what we're 
talking about?"`;
   waitForClick; clearText; 
});
goto(lbl_000006cb);
let lbl_000006c6;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Nah. Can't say I understand that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I remember hearing about it a long time ago 
at school...but I forget."`;
   waitForClick; clearText; marker; sound(`T2B025`); appendText; 
   //Tsugumi
   Tsugumi`"The buoyancy of a submerged object is equal 
to the weight of the liquid displaced by the 
object."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, you mean that. That's the Archimedes 
principle?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And? What's that got to do with this...?"`;
   waitForClick; clearText; 
});
let lbl_000006cb;
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B026`); appendText; 
   //Tsugumi
   Tsugumi`"How about you figure the rest out yourself?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There she went again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She would tease me along...but that was it....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave a deep sigh and shook my head.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I switched the heavy toolbox to my other hand 
and continued walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After walking a while, Tsugumi turned right 
ahead of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed after her.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Turning the corner it finally hit me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I see.... So that's what you meant..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I thought it was weird you inviting me along."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"To sink that egg elevator to the third floor 
its total weight had to be greater than the 
force of the buoyancy."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So just one skinny girl like you wasn't 
going to be enough weight."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B027`); appendText; 
   //Tsugumi
   Tsugumi`"Right."`;
   waitForClick; clearText; marker; sound(`T2B028`); appendText; 
   //Tsugumi
   Tsugumi`"So don't get me wrong."`;
   waitForClick; clearText; marker; sound(`T2B029`); appendText; 
   //Tsugumi
   Tsugumi`"Of the five people trapped here, you're the 
heaviest, weight-wise, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Y-you...I'm not just some big rock 
paperweight!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B030`); appendText; 
   //Tsugumi
   Tsugumi`"No. You're more than a rock..."`;
   waitForClick; clearText; marker; sound(`T2B031`); appendText; 
   //Tsugumi
   Tsugumi`"You're a rock head."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG18B2`, transition: 20 });
clock(`7:26`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As I was thinking of a comeback to rock head, 
we arrived at our destination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yellow and black stripes appeared 
dimly ahead.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This it? This the Generator Room...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a plate with information in front 
of the door, but it was too dark to read.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'll take a look."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached toward the door handle....`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B032`); appendText; 
   //Tsugumi
   Tsugumi`"Wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grabbed my arm.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? What's up?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you don't talk, I don't understand."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi held my arm firmly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wet palm of her hand felt cool.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what she wanted to say. I tried 
to read something from her expression, but it 
was too dark to see.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B033`); appendText; 
   //Tsugumi
   Tsugumi`"I don't think you should open it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why not?"`;
   waitForClick; clearText; marker; sound(`T2B034`); appendText; 
   //Tsugumi
   Tsugumi`"It's dangerous...maybe..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Dangerous? Inside this room?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi nodded and gently removed her hand 
from my arm.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then she quietly approached the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She tossed some of the water droplets from 
her hand at the steel door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The droplets sizzled on the door, evaporating 
away.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is there a fire or something inside?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi shook her head.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B035`); appendText; 
   //Tsugumi
   Tsugumi`"The generator uses hot water, so I don't 
think it could be a fire."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Then..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B036`); appendText; 
   //Tsugumi
   Tsugumi`"It's probably steam..."`;
   waitForClick; clearText; marker; sound(`T2B037`); appendText; 
   //Tsugumi
   Tsugumi`"I think it's just packed full of extremely 
hot steam."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B038`); appendText; 
   //Tsugumi
   Tsugumi`"This generator is designed to operate 
normally at 6 atmospheres."`;
   waitForClick; clearText; marker; sound(`T2B039`); appendText; 
   //Tsugumi
   Tsugumi`"But right now LeMU's air pressure is at 1 
atmosphere."`;
   waitForClick; clearText; marker; sound(`T2B040`); appendText; 
   //Tsugumi
   Tsugumi`"There is a possibility that a tank or pipe 
filled with high-pressure steam could have 
ruptured."`;
   waitForClick; clearText; marker; sound(`T2B041`); appendText; 
   //Tsugumi
   Tsugumi`"Or that some abnormality was detected and 
triggered a safety valve to be opened..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, I get it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Either way, steam is leaking from somewhere 
and there isn't enough power to turn the 
turbine..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And so the generator stopped."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If that is what happened..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Then that could've been pretty 
dangerous..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The instant I opened the door my whole body 
would have been showered with several 
hundred-degree steam....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like Tsugumi, I tossed some water on the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fwishhhhhh!`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I made for the room next door to 
the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were implementing Tsugumi's plan: 'First 
shut off the hot water flowing to the 
Generator Room.'`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG20B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was dark and I couldn't see everything, 
but the room was covered in an astounding 
network of pipes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pipes continued into the Generator Room 
next door. It seemed that opening and closing 
the valves could adjust the water and oil 
pressure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Normally LeMMIH is responsible for 
maintaining the Generator Room, but even 
LeMMIH can't do much when the generator 
itself goes out."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Anyhow, this is all because 
the power supply is down."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"This room is designed so that maintenance 
can be performed manually at times like this, 
or during blackouts."`;
   waitForClick; clearText; marker; appendText; 
   Narr`...That was what Tsugumi told me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why does Tsugumi know so much about LeMU?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(She seemed to know where the Generator Room 
and the room with all of the pipes was...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`These doubts nagged at my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I was thinking these thoughts, Tsugumi 
plugged away next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi selected one pipe from the countless 
rows of them and closed its valve.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea which pipe was doing what.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Tsugumi had known.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What...kind of girl is Tsugumi anyway?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still hadn't found out how she had known 
that the inside of the Generator Room was 
'dangerous.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder if Tsugumi has some kind of 
connection with LeMU...)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B042`); appendText; 
   //Tsugumi
   Tsugumi`"Whew..."`;
   waitForClick; clearText; marker; sound(`T2B043`); appendText; 
   //Tsugumi
   Tsugumi`"I think this should do it."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as the work was done, Tsugumi left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was left alone in the room...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were still a number of nagging doubts 
that I hadn't resolved.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG18B2`, transition: 20 });
setSceneTitle({ index: 12 });
clock(`8:0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With this we would be able to shut off 
the hot water flowing to the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even so, on the other side of the door, it 
was still hot enough to scald.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I waited in front of the 
Generator Room until the temperature inside 
had cooled down sufficiently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We sat on the water-covered floor and leaned 
against the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We sat next to each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were both already drenched so we didn't 
have any problem about sitting in water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Besides, the water was warmer than it 
looked....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it was probably the heat from the 
Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, how long do you think we're gonna have 
to wait?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked Tsugumi this.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"An hour?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi didn't even try to answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was so dark that I couldn't even tell if 
she had nodded or shaken her head.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the darkness there were intermittent and 
repeated clicking noises.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like the sound of dry plastic 
crinkling, like on the top of a champagne 
bottle.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It sounded like it was coming from near 
Tsugumi's hands.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B044`); appendText; 
   //Tsugumi
   Tsugumi`"...What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That crackly sound you're making?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sound stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took whatever it was and put it away 
in her pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it might be her way of saying: 'I'm 
not going to tell.'`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What is it with you? You only answer when 
you feel like it?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're like a cat."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B045`); appendText; 
   //Tsugumi
   Tsugumi`"I hate cats."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T2B046`); appendText; 
   //Tsugumi
   Tsugumi`"Because they eat mice."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't have a clue what you're talking 
about."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B047`); appendText; 
   //Tsugumi
   Tsugumi`"I..."`;
   waitForClick; clearText; marker; sound(`T2B048`); appendText; 
   //Tsugumi
   Tsugumi`"...I'm not a cat."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's for sure!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B049`); appendText; 
   //Tsugumi
   Tsugumi`"My answering has nothing to do with my mood."`;
   waitForClick; clearText; marker; sound(`T2B050`); appendText; 
   //Tsugumi
   Tsugumi`"If a question has meaning, I answer. If it 
doesn't, I don't...that's all."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you are serious."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B051`); appendText; 
   //Tsugumi
   Tsugumi`"So that's the kind of question I don't want 
to answer."`;
   waitForClick; clearText; marker; sound(`T2B052`); appendText; 
   //Tsugumi
   Tsugumi`"A question to check something..."`;
   waitForClick; clearText; marker; sound(`T2B053`); appendText; 
   //Tsugumi
   Tsugumi`"A question about something you don't need to 
know..."`;
   waitForClick; clearText; marker; sound(`T2B054`); appendText; 
   //Tsugumi
   Tsugumi`"Or questions about things that you know I 
don't know, but you ask anyway..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B055`); appendText; 
   //Tsugumi
   Tsugumi`"There is more than enough pointless 
conversation in the world.... Don't you 
think?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. I got it already."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How about I ask you a meaningful question?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I want to ask...`;
   waitForClick; 
});
choice(
   `About the air pressure of a Generator Room`
   `Why do you know so much about LeMU?`
);
switch (choice) {
   case 0: goto(lbl_00000a20);
   case 1: goto(lbl_00000a64);
}
let lbl_00000a20;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was something that had been bugging me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I decided to take this opportunity to ask 
about it.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's about the air pressure of the Generator 
Room..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A while ago, until you closed that valve, 
super hot water was being pumped in, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And that water turns to steam and it gets 
more and more packed in there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's more, it's steam at a temperature of 
several hundred degrees."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So that means that the air pressure in the 
room is just getting higher."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"For example, it's like if you poured a bunch 
of water into a kettle, welded it shut, 
blocked the spout and put it on a fire."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Then finally it would go and explode, 'Boom!' 
Right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And if that's what happened in the Generator 
Room...why's it fine?"`;
   waitForClick; clearText; marker; sound(`T2B056`); appendText; 
   //Tsugumi
   Tsugumi`"And?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, I mean, why is that...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B057`); appendText; 
   //Tsugumi
   Tsugumi`"*Sigh*..."`;
   waitForClick; clearText; marker; sound(`T2B058`); appendText; 
   //Tsugumi
   Tsugumi`"Is that what you call a 'meaningful 
question'?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You bet. Because it's a matter of life and 
death."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B059`); appendText; 
   //Tsugumi
   Tsugumi`"Hmph..."`;
   waitForClick; clearText; marker; sound(`T2B060`); appendText; 
   //Tsugumi
   Tsugumi`"It sounds to me like a typical stupid 
question...but whatever."`;
   waitForClick; clearText; marker; sound(`T2B061`); appendText; 
   //Tsugumi
   Tsugumi`"First, you have to think about when the 
generator was functioning normally."`;
   waitForClick; clearText; marker; sound(`T2B062`); appendText; 
   //Tsugumi
   Tsugumi`"At that time, steam would spout on and off 
and turning the turbine."`;
   waitForClick; clearText; marker; sound(`T2B063`); appendText; 
   //Tsugumi
   Tsugumi`"Where would the steam usually go once it was 
used...?"`;
   waitForClick; clearText; marker; sound(`T2B064`); appendText; 
   //Tsugumi
   Tsugumi`"I think it was probably sent outside of LeMU."`;
   waitForClick; clearText; marker; sound(`T2B065`); appendText; 
   //Tsugumi
   Tsugumi`"In other word the kettle's spout wasn't 
plugged."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, I see."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So the Generator Room was connected to the 
outside by a pipe or something."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hmmmm...that made sense.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded to myself.`;
   waitForClick; clearText; 
});
goto(lbl_00000abb);
let lbl_00000a64;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to ask about something that had been 
nagging me for a while.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, why do you know so much about LeMU?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I mean, you seem to know all about the 
details of stuff, like this Generator Room or 
the pipe room or whatever."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't check her expression, but it 
seemed like she was deep in thought about 
something.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How's that for a meaningful question?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T2B066`); appendText; 
   //Tsugumi
   Tsugumi`"Completely..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B067`); appendText; 
   //Tsugumi
   Tsugumi`"...devoid of meaning."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi muttered that.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B068`); appendText; 
   //Tsugumi
   Tsugumi`"How is my answer to that going to help you?"`;
   waitForClick; clearText; marker; sound(`T2B069`); appendText; 
   //Tsugumi
   Tsugumi`"It doesn't really matter whether you know 
about me or not."`;
   waitForClick; clearText; marker; sound(`T2B070`); appendText; 
   //Tsugumi
   Tsugumi`"It's something you don't need to know..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, I see."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you don't wanna tell me, that's fine."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Still, I really did want to know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's evasion of the question had made me 
interested in finding out what there really 
was to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't think that she would answer if I 
badgered her about it anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was feeling irritated, but decided to play 
it cool and pretend like I didn't care.`;
   waitForClick; clearText; 
});
let lbl_00000abb;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B071`); appendText; 
   //Tsugumi
   Tsugumi`"Hey."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what she was thinking, but 
Tsugumi suddenly put her face in front of mine.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wh-what?"`;
   waitForClick; clearText; marker; sound(`T2B072`); appendText; 
   //Tsugumi
   Tsugumi`"Now it's my turn."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Y-yeah?"`;
   waitForClick; clearText; marker; sound(`T2B073`); appendText; 
   //Tsugumi
   Tsugumi`"Can I ask you a question?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, sure...go ahead..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B074`); appendText; 
   //Tsugumi
   Tsugumi`"Will you close...your eyes?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Is...that the question?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B075`); appendText; 
   //Tsugumi
   Tsugumi`"It's more of a favor."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There in the darkness....`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that narrow corridor....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just a few inches from my nose...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of us....`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind turned to steam and evaporated.`;
   waitForClick; clearText; marker; sound(`T2B076`); appendText; 
   //Tsugumi
   Tsugumi`"Are they closed?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Almost as if I were hypnotized my eyes began 
to sink.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And immediately after that...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_22`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- Shake, shake, shake!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- Splish, splash!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_23`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- Slosh, slosh!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_24`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Click!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to make of these noises.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened my eyes without thinking....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG18B2`, transition: 26 });
fgload({ id: 1, name: `TU10AWL`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was grinning mischievously right in 
front of me.`;
   waitForClick; clearText; marker; sound(`T2B077`); appendText; 
   //Tsugumi
   Tsugumi`"Close them!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi covered my eyes with one hand.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 10, volume: 100 });
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fwwwiiiiiiiiish!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, hey, what're you doing?"`;
   waitForClick; clearText; marker; sound(`T2B078`); appendText; 
   //Tsugumi
   Tsugumi`"You jerk! You dumb jerk!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I screamed.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-what are you doing?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A liquid spray like something showered my face.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You...you...that went in my mouth..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T2B079`); appendText; 
   //Tsugumi
   Tsugumi`"Take that! You loser!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stop! Stop it! What's the matter with you...?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I desperately tried to resist, but my body 
wouldn't do what I told it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi had me by the neck.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T2B080`); appendText; 
   //Tsugumi
   Tsugumi`"How's that you slug?!"`;
   waitForClick; clearText; marker; sound(`T2B081`); appendText; 
   //Tsugumi
   Tsugumi`"You scum on the pond of life!"`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With those words, the eruption in my face 
stopped.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"My mwouth...iz nwumb..whaddya spway won me..."`;
   waitForClick; clearText; marker; sound(`T2B082`); appendText; 
   //Tsugumi
   Tsugumi`"Hee, hee, hee..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought she was laughing, but the next 
thing I knew Tsugumi had started rubbing my 
face with a cloth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was rough and her technique wasn't any 
better....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ohhhh...ahhhh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped my futile resistance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was almost choking.`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T2B083`); appendText; 
   //Tsugumi
   Tsugumi`"That's...just about right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took her hand off of my neck.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Unable to open my eyes I scooped up seawater 
from the floor and put it in my mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was salty, but I didn't have any other 
choice.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_15`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Swish, swish, swish..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_28`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Blah!"`;
   waitForClick; clearText; marker; sound(`T2B084`); appendText; 
   //Tsugumi
   Tsugumi`"H-hey!"`;
   waitForClick; clearText; marker; sound(`T2B085`); appendText; 
   //Tsugumi
   Tsugumi`"That's dirty so don't go spitting it over 
here!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You! You! Yoooooou!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to say something to her, but washing 
my face took priority.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I scooped more water splashed it on my face 
and gargled again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened my eyes.`;
   waitForClick; clearText; 
});
bgload({ name: `BG18B2`, transition: 20 });
fgload({ id: 1, name: `TU10AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whaaaaaaaaaaaat do you think you're doing?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What did you put on my face?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B086`); appendText; 
   //Tsugumi
   Tsugumi`"Acetone."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh GREAT! I'm so HAPPY it wasn't some 
pesticide."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You think I'm serious? You idiot! I'm 
kidding!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whaddya doing spraying that on me all of the 
sudden?"`;
   waitForClick; clearText; marker; sound(`T2B087`); appendText; 
   //Tsugumi
   Tsugumi`"It was hard to look at."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? What was?"`;
   waitForClick; clearText; marker; sound(`T2B088`); appendText; 
   //Tsugumi
   Tsugumi`"Your face."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whose?"`;
   waitForClick; clearText; marker; sound(`T2B089`); appendText; 
   //Tsugumi
   Tsugumi`"Yours."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Y-y-y-y-you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then I realized something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The black ink that had been on the palms of my 
hands....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It was the graffiti..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It was still there...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You erased all of the writing..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had completely forgotten about it until 
just then.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I was making sandwiches, looking for 
Sora and coming here, the writing had been on 
my face since that morning.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And the acetone..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Acetone...that's supposed to be like nail 
remover, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B090`); appendText; 
   //Tsugumi
   Tsugumi`"I found it...in the toolbox..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a strong stench from it in the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It stung my nose like overripe fruit...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It smelled like a hangover.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"T-thanks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thanked her...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So what did the writing say?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked her about the graffiti.`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B091`); appendText; 
   //Tsugumi
   Tsugumi`"You can wait if you want, but I'm not 
answering."`;
   waitForClick; clearText; marker; sound(`T2B092`); appendText; 
   //Tsugumi
   Tsugumi`"Because it's a meaningless question."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the end, I never did find out why she 
called me a slug.`;
   waitForClick; clearText; 
});
monoColorOverlay({ interval: 0, color: BLACK });
hideTextbox();
playBGM({ num: 3, volume: 100 });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
showFog2();
bgload({ name: `BG19B2`, transition: 20 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`9:42`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We waited for the Generator Room to cool 
before going inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The heat inside just about defied imagination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air in the steam-filled room was heavy 
and stuck to the skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inhaling felt like swallowing globs of sticky 
hot steam.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was opening and closing his mouth like a 
fish out of water.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Isn't it hard to breathe?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi seemed to have ruled this question of 
mine meaningless as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She completely ignored me as she started 
working to get the generator up and running 
again.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeFog2();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We did the work together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi gave commands. I followed them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I did the grunt work...tightening bolts, 
loosening valves and working on pipes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And when I finished tightening the last 
bolt....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG19B2`, transition: 20 });
showFog2();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`10:16`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whew. That should do it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wiped my sweat away with my collar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just like Tsugumi had said. The 
blackout was caused when the safety valve had 
opened due to the drop in air pressure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'When pressure from the steam becomes 
excessive, the valve automatically opens to 
release the gas and prevent damage.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Normally after a release of surplus gas, the 
valve is designed to shut automatically...but 
we're at 1 atmosphere, so...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Because the safety valve never closed, the 
steam continued leaking.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Anyway, that was the gist of the 
explanation.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeFog2();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG20B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi and I went to the Generator Room and 
went to the pipe room...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There we opened the valve we had closed 
before the repairs...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG19B2`, transition: 20 });
showFog2();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And returned to the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So should we try to fire it up?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm turning it on."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You ready?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Let's start the countdown..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"30 seconds..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"25 seconds..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"20...19...18...17"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Click.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi pushed the button.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey! What are you doing? We still had 17 
seconds to go!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You can't wait a little more than a mere 10 
seconds?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This...this is kind of like a 
ritual...anyway, it's very important..."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE03_11`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 1, color: WHITE });
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG19B1`, transition: 26 });
fgload({ id: 1, name: `TU10AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`T2B093`); appendText; 
   //Tsugumi
   Tsugumi`"Zero..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights lit up all at once.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light poured down, illuminating even the 
corners of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like our field of vision had expanded 
in an instant.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B094`); appendText; 
   //Tsugumi
   Tsugumi`"See...it took exactly 17 seconds for the 
lights to come on..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi flashed me a condescending glance and 
strolled out of the room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsk."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shouldered the weighty toolbox and followed 
after Tsugumi.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeFog2();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG23B1`, transition: 20 });
clock(`10:50`);
fgload({ id: 1, name: `TU05AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We found ourselves back in front of the 
neutral buoyancy elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was waiting with her arms crossed.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B095`); appendText; 
   //Tsugumi
   Tsugumi`"You're slow."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whaddya expect? I'm the one carrying this 
leaden toolbox!"`;
   waitForClick; clearText; marker; sound(`T2B096`); appendText; 
   //Tsugumi
   Tsugumi`"I know."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh, yeah...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I forgot it was Tsugumi that took the 
toolbox out of the warehouse...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I recalled that, I turned my eyes to the 
egg-like elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the other side of that door the egg that 
we came in should have been waiting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was an egg with a hole in it. It was 
useless to us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To the left...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The floor display was lit up with a number 
three.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Did you know there was another egg elevator 
stopped down here...?"`;
   waitForClick; clearText; marker; sound(`T2B097`); appendText; 
   //Tsugumi
   Tsugumi`"Wouldn't have come if I didn't."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I suppose not..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG24A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oh this is heavy."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Inside the egg elevator, I put the toolbox on 
the floor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B098`); appendText; 
   //Tsugumi
   Tsugumi`"You sound like an old man..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Shut up. I AM an old man compared to you."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As I said that, I pushed the up button next 
to the elevator door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The internal and external watertight doors had 
already sealed automatically.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_17`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We could hear air being sent into the ballast 
tank under the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, the egg-shaped elevator...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...didn't start to float up.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Are you serious?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound beneath the floor had stopped and 
silence had returned.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not again..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why do we keep running into problem after 
problem..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Knowing it was useless, I pushed 
the up button repeatedly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was as matter-of-fact as always....`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was playing with and coiling her long, 
still damp hair with her finger.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright, so what do we do...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as I said that...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A monitor just to the right of the round 
window flickered to life.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
stopBGM();
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T2B099`); appendText; 
   //Sora
   Sora`"Takeshi, Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora! Where have you been? We looked 
everywhere for you!"`;
   waitForClick; clearText; marker; sound(`T2B100`); appendText; 
   //Sora
   Sora`"I'm terribly sorry. Please accept my 
apologies."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The image of Sora in the monitor bowed deeply.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not important right now."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi and I fixed the generator."`;
   waitForClick; clearText; marker; sound(`T2B101`); appendText; 
   //Sora
   Sora`"It would appear so."`;
   waitForClick; clearText; marker; sound(`T2B102`); appendText; 
   //Sora
   Sora`"Thank you so much. Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I think you know this, but we are in this 
egg...uh, this EI..."`;
   waitForClick; clearText; marker; sound(`T2B103`); appendText; 
   //Sora
   Sora`"Yes, I know."`;
   waitForClick; clearText; marker; sound(`T2B104`); appendText; 
   //Sora
   Sora`"The EI is not moving, correct?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What should we do?"`;
   waitForClick; clearText; marker; sound(`T2B105`); appendText; 
   //Sora
   Sora`"First, in regard to the cause..."`;
   waitForClick; clearText; marker; sound(`T2B106`); appendText; 
   //Sora
   Sora`"It is likely the result of a decrease in 
internal air pressure that has made the 
device incapable of sufficiently expelling 
the seawater in the ballast tank."`;
   waitForClick; clearText; marker; sound(`T2B107`); appendText; 
   //Sora
   Sora`"In other words..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You mean it isn't buoyant enough?"`;
   waitForClick; clearText; marker; sound(`T2B108`); appendText; 
   //Sora
   Sora`"Correct."`;
   waitForClick; clearText; marker; sound(`T2B109`); appendText; 
   //Sora
   Sora`"There are a number of feasible methods for 
making it rise, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was then that Tsugumi acted.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She suddenly opened the watertight door.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey! Wait! Whaddya think you're doing?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 15, volume: 100 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Without answering, Tsugumi also opened the 
LeMU side door.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B110`); appendText; 
   //Tsugumi
   Tsugumi`"Okay then..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi tried to get out of the elevator....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed her arm, trying to stop her.`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `TU06AWM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU04AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B111`); appendText; 
   //Tsugumi
   Tsugumi`"Don't touch me!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slap!`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a solid smack....`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B112`); appendText; 
   //Tsugumi
   Tsugumi`"I told you...don't touch me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My cheek didn't hurt.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWL`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I absently watched Tsugumi return to the floor.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`T2B113`); appendText; 
   //Announcement
   Announcement`"Start"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The egg quietly started to ascend.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could no longer see her on the other side 
of the door.`;
   waitForClick; clearText; marker; sound(`T2B114`); appendText; 
   //Announcement
   Announcement`"Depth 150 feet."`;
   waitForClick; clearText; marker; sound(`T2B115`); appendText; 
   //Announcement
   Announcement`"Depth 135 feet."`;
   waitForClick; clearText; marker; sound(`T2B116`); appendText; 
   //Announcement
   Announcement`"Depth 120 feet."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The recorded announcement echoed with a tinny 
sound.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG23A1`, transition: 20 });
multifgload3({ name1: `KA07ADS`, name2: `YU07ADS`, name3: `CO07ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oh, no! Tsugumi! Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I met everyone on the Zweite stock they 
greeted me with friendly shouts.`;
   waitForClick; clearText; marker; sound(`T2B117`); appendText; 
   //Kid
   Kid`"What happened...to Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That idiot decided to stay alone on the floor 
below..."`;
   waitForClick; clearText; marker; sound(`T2B118`); appendText; 
   //You
   You`"It sure looks like it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No it doesn't 'look like it' - she did!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She's all alone down there!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Aren't you worried about her?"`;
   waitForClick; clearText; marker; sound(`T2B119`); appendText; 
   //Coco
   Coco`"But..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm going back down!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm going down and I'm bringing Tsugumi back!"`;
   waitForClick; clearText; marker; sound(`T2B120`); appendText; 
   //You
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We can't leave Tsugumi alone down there!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Look...she's...really not as tough as she 
acts..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Somebody...has to be with her..."`;
   waitForClick; clearText; marker; sound(`T2B121`); appendText; 
   //Kid
   Kid`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`T2B122`); appendText; 
   //Coco
   Coco`"Wow..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, what are you doing? Get your act 
together!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi can be a bit of an ass, but that 
doesn't mean you have to be so cold to her!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Enough!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, I'm going back for her!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that, I went back to the entrance to the 
egg and waited in front of the doors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next...`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
stopBGM();
playSFX({ name: `SE03_12`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_02`, a1: 0, volume: 90 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When the doors opened...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `TU01AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B123`); appendText; 
   //Tsugumi
   Tsugumi`"Uh..."`;
   waitForClick; clearText; marker; sound(`T2B124`); appendText; 
   //Tsugumi
   Tsugumi`"Will you move?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T2B125`); appendText; 
   //Tsugumi
   Tsugumi`"You're in my way."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I simply stood there....`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi pushed me out of the way and walked by.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
bgload({ name: `BG24A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`If there were a rock there, I would have 
crawled under it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I did the next closest thing I could think 
of.`;
   waitForClick; clearText; marker; sound(`T2B126`); appendText; 
   //Announcement
   Announcement`"Depth 105 feet."`;
   waitForClick; clearText; marker; sound(`T2B127`); appendText; 
   //Announcement
   Announcement`"Depth 120 feet."`;
   waitForClick; clearText; marker; sound(`T2B128`); appendText; 
   //Announcement
   Announcement`"Depth 135 feet."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went back down to Dritte stock in the egg 
for no reason.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It didn't have enough buoyancy so we had to 
come up one-by-one...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Gosh, I'm dense...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I could have, right then I would have 
liked to sink down to the bottom of the ocean.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 120 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_2C`);
