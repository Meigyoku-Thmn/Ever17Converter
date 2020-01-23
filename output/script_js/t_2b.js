l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG24A3`, transition: 20 });
setSceneTitle({ index: 11 });
clock(`7:5`);
showTextbox();
text(() => {
   `- The neutral buoyancy elevator 'EI.'`;
   `'EI' meant egg in German.`;
   `It was also a literal take on the egg-shaped 
elevator that traveled up and down rails into 
the ocean on the side of LeMU.`;
   `A ballast tank was attached to the floor.`;
   `It would take in or release seawater from the 
tank as necessary to increase or reduce 
buoyancy, making the elevator rise 
or sink.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Once Tsugumi and I were inside, we sealed the 
watertight doors on the LeMU side of the 
elevator.`;
   `All we had to do was release the lock 
connecting us to LeMU and the 'egg' would 
sink away.`;

});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tsugumi pulled the operating lever next to 
the door.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"........."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   Tsugumi`"........."`;
   `Nothing happened.`;
   Takeshi`"What's going on? We're not sinking at all."`;
   Tsugumi(T2B000)`"Doesn't look like it, does it."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE10_22`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tsugumi calmly opened up the toolbox she had 
brought with her.`;
   `Inside were an electric screwdriver, hydraulic 
cutting machine, some kind of laser or welding 
device, a small gas burner...`;
   `The box was packed with any and all kinds of 
tools.`;
   Takeshi`"Huh? What're you going to do...with that?"`;

});
fgload({ id: 1, name: `TU11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B001)`"If it won't sink..."`;

});
fgload({ id: 1, name: `TU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B002)`"Then we'll just have to sink it."`;
   Takeshi`"...Huh?"`;

});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE10_20`, a1: 0, volume: 100 });
bgload({ name: `EV_TU05A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"What? T-T-T-Tsugumi! Are you crazy!?"`;
   `Tsugumi took the lit torch in hand and slowly 
stood up.`;
   `Blue flame erupted from it like a jet engine, 
hissing in the dim light.`;
   Takeshi`"N-n-n-n-no way..."`;
   Takeshi`"You're kidding, right? Tsugumi..."`;
   `Tsugumi didn't answer.`;
   `Tsugumi grinned triumphantly.`;

});
playSFX({ name: `SE10_21`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She put the flame to the edge of the 
elevator's shell.`;
   Takeshi`"Yikes!"`;
   `There was no time to stop her.`;

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
   `A coin-sized hole opened in the egg-shaped 
elevator and seawater came spurting in with 
tremendous force.`;
   Takeshi`"You idiot! Idiot! Idiooot!"`;
   Takeshi`"W-w-w-w-what're you trying to do?"`;
   Takeshi`"A hole! There's a hole!"`;
   Tsugumi(T2B003)`"Yeah, I made it."`;
   `Tsugumi was as calm as ever.`;

});
playSFX({ name: `SE02_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She extinguished the flame as if nothing had 
happened. She placed it in the toolbox and 
shut the lid.`;
   `The seawater created a mist, descending all 
around us.`;
   `Tsugumi licked the droplet off of her lips.`;
   Takeshi`"You're crazy, right!?"`;
   Takeshi`"Yeah, being cooped in here's made you 
crazy!"`;
   Tsugumi(T2B004)`"Heh, heh, heh...."`;
   `Tsugumi just snickered.`;

});
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `As we continued this exchange, water 
continued to pour in.`;
   `It pooled in the bottom of the egg.`;
   `It covered our ankles, then our shins, 
swallowing our knees and the lapping at our 
thighs.`;
   `I...`;

});
choice(
   `Decided to escape`,
   `Thought maybe I'd wash my hair`,
);
bgload({ name: `BG24A3`, transition: 20 });
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
switch (l_choice) {
   case 0: goto(lbl_00000222);
   case 1: goto(lbl_00000278);
}
let lbl_00000222;
showTextbox();
text(() => {
   `I decided it would be best to escape.`;
   `I didn't want to be around that crazy woman 
anymore.`;
   `I discreetly reached for the handle of the 
watertight door....`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B005)`"What are you doing...?"`;

});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B006)`"You said...you would come along with me...."`;
   `Tsugumi grabbed my wrist.`;
   `Tsugumi's palm was soft and wet...`;
   `There was a soft, suction-like, feeling as she 
grabbed me.`;

});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi stared at me.`;
   `It was a serious, hard look.`;
   Takeshi`"F-fine, have it your way!"`;
   Takeshi`"I'll go along with you to the end - even if 
we sink to the bottom of the ocean!"`;
   `I made up my mind.`;

});
goto(lbl_00000294);
let lbl_00000278;
showTextbox();
text(() => {
   `I thought it was good timing. I was due for a 
wash anyway.`;
   `I'd missed bathing the day before....`;
   `I dunked my head under the inflowing water and 
mussed up my hair.`;
   `Yup. It was invigorating.`;
   `I could really feel the minerals seeping into 
my scalp.`;
   `The water was cold, but it was actually 
refreshing.`;
   Takeshi`"Hey, can you get the shampoo for me?"`;
   Takeshi`"Er, what the heck am I doing?"`;

});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi gave me the evil eye.`;

});
let lbl_00000294;
showTextbox();
text(() => {
   `Just then....`;

});
hideTextbox();
playSFX({ name: `SE10_07`, a1: 0, volume: 90 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_c6_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   `Boom! The egg elevator took a big jolt and 
started to move.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
closeShakeScreenAnim();
bgload({ name: `IMG01B`, transition: 20 });
showTextbox();
text(() => {
   `EI began to inch down ever so slowly ...`;
   `Peeking through the window and into the 
blue we could see the outside of LeMU.`;
   `The blue gradually got darker and the steel 
bulkhead appeared to move further away upward.`;

});
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The higher water pressure increased the force 
of the water pouring in.`;
   `The speed of our descent picked up.`;
   `I wondered how many feet we had dropped.`;
   `I shifted my gaze toward the sea bottom, but 
Dritte stock still had not come into view.`;
   `The water in the elevator had already reached 
my chest.`;
   `My legs were floating...I was on my toes....`;

});
bgload({ name: `IMG06A`, transition: 20 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `I kicked with all my power off the floor and 
seized an edge of the ceiling.`;
   Takeshi`"H-hey..."`;
   Takeshi`"Don't you think this is pretty dangerous?"`;
   `A strained smile appeared on Tsugumi's face.`;
   `It seemed she was getting a little worried.`;
   Takeshi`"I wonder if...we'll die like this..."`;
   Tsugumi(T2B007)`"M-maybe..."`;
   Takeshi`"No, not 'maybe'!"`;
   Takeshi`"This harebrained idea was all your...cough, 
splutter..."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `The surface of the water reached my throat 
and cold seawater rushed into my mouth.`;
   `I lifted my chin and desperately tried to 
stick to the ceiling.`;
   Takeshi`"Tsugumi! Tsugumi!"`;
   `I screamed crazily.`;

});
bgload({ name: `EV_TU05C`, transition: 20 });
dimOff_ac = 0;
closeDimOverlay();
stopSFX()
showTextbox();
text(() => {
   `I looked sideways and saw Tsugumi struggling 
to stay above the water.`;
   `Just then...`;

});
hideTextbox();
playSFX({ name: `SE10_07`, a1: 0, volume: 100 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 7;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
openShakeScreenAnim();
showTextbox();
text(() => {
   `Boom! The egg was shaken by a strong shock.`;

});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   `'We made it to the third floor!'`;
   `I wanted to shout this, but it was impossible.`;
   `There was no longer enough air for me to yell.`;
   `I didn't know if she had panicked or what, but 
Tsugumi was thrashing her arms and legs around 
desperately.`;
   `In the blur underwater...I pinned down 
Tsugumi's shoulder.`;
   `"It's alright. I'll take care of it."`;
   `I felt Tsugumi's body relax.`;

});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `I kicked against the wall and clung to the 
handle of watertight door.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I focused every ounce of strength in my body 
on turning the heavy handle...`;
   `Because my body would float, I couldn't gain 
traction with my feet.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bracing one leg on the handrail, I continued 
turning and turning it....`;
   `The water pressure began pressing in on my 
eardrums.`;
   `My body was screaming for oxygen.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `"Open!"`;
   `"Open!!"`;
   `"Ooppppppeeeeeeeen!!!"`;

});
hideTextbox();
removeBG({ mode: WHITE, transition: 2 });
stopSFX()
stopBGM();
playSFX({ name: `SE00_08`, a1: 0, volume: 100 });
bgload({ name: `BG23B2`, transition: 20 });
showTextbox();
text(() => {
   `The double-ply door opened.`;
   `The mass of water and Tsugumi and I were all 
spit out of the elevator and on to the floor.`;
   `But we didn't have time to catch our breath.`;

});
playSFX({ name: `SE02_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Seawater was flooding into the hole in the 
elevator more ferociously than ever.`;
   `I got up immediately and rushed to the 
watertight door on the elevator.`;
   `First I closed that door, locked it and then 
closed the door on the LeMU side as well.`;

});
hideTextbox();
playSFX({ name: `SE00_02`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   Takeshi`"........."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   Tsugumi`"........."`;
   `For a while, I couldn't move.`;

});
hideTextbox();
playBGM({ num: 7, volume: 100 });
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi, too, lay sprawled out on the floor.`;
   `I didn't feel angry with her.`;
   `Because relief was the dominant emotion...`;
   `(That was such a stupid thing to do...)`;
   `(What if we really had died...?)`;
   `Tsugumi was coughing a little, looking down.`;
   `She didn't try to look at me.`;
   `I thought that maybe she was reflecting on 
what she had done.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(That's it, maybe...)`;
   `(Maybe she just isn't a 'people person' and 
has a hard time getting along with others...)`;
   `She seemed fragile, and lonely...`;
   `Maybe she needs someone's help...?`;
   `It was the first time that I had realized 
there was anything weak about her.`;
   `Sitting all alone in the middle of that 
sprawling floor she look so small, like a 
newly born chick.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
clock(`7:22`);
showTextbox();
text(() => {
   `The hallway was dark.`;
   `The darkness hid our surroundings from us and 
felt oppressive.`;
   `I walked slowly forward making sure of each 
step.`;
   `In my right hand I had a huge toolbox.... It 
was so heavy it felt like my shoulder might 
break under its strain.`;
   Takeshi`"I wonder if this area is full of water from 
yesterday's flooding."`;
   `Tsugumi shot a question back at me.`;

});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B008)`"So what?"`;
   `Two syllables...that was all she said.`;
   Takeshi`"What's your problem, anyway?"`;
   Tsugumi`"........."`;
   Takeshi`"Just a minute ago you were desperately 
screaming for help to keep from drowning."`;

});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B009)`"I didn't scream anything."`;
   Takeshi`"Yeah, but your eyes did."`;
   Tsugumi(T2B010)`"Did not."`;
   Takeshi`"There you go, acting all tough again."`;
   Tsugumi(T2B011)`"I'm not acting tough."`;
   Tsugumi(T2B012)`"Besides..."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_c6_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   `Bump.`;

});
closeShakeScreenAnim();
showTextbox();
text(() => {
   Takeshi`"Ouch. Don't just stop all of a sudden like 
that."`;
   Takeshi`"It's dark and I can't see."`;

});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B013)`"Listen up. I'll only tell you once more. I 
never, ever asked for help." `;
   `Tsugumi turned back to me.`;
   `Shrouded in the darkness, I couldn't really 
make out her expression.`;
   Takeshi`"Yeah, but if I hadn't opened up that door the 
chances are you and I would both be floating 
drowned in that egg."`;
   Tsugumi(T2B014)`"If I have to be saved by you, then I'd 
rather die."`;
   Takeshi`"Oh reeeallly..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(Geez. Why can't this girl ever be honest with 
people...?)`;
   `I went around Tsugumi and walked further 
along the flooded corridor.`;
   Takeshi`"One more thing I wanna get off my chest - 
what were those words all about anyway?"`;
   Tsugumi(T2B015)`"What words?"`;

});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `As she fired another short question at me, 
Tsugumi passed me again.`;
   Takeshi`"What you said before we got in the egg on 
the second floor."`;
   Takeshi`"'I really...really need you!'"`;
   Takeshi`"Your eyes were watery. You were begging me, 
right?"`;

});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B016)`"Yes. I did."`;
   `(Oh. That was an unexpected answer....)`;
   Tsugumi(T2B017)`"What about it?"`;
   Takeshi`"S-s-so you are depending on me after all."`;
   Takeshi`"And now you finally admit it?"`;
   Tsugumi`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi continued forward without talking....`;
   Takeshi`"In other words, IF something were to happen, 
you want to be with someone you can rely on."`;
   Takeshi`"You're afraid to be alone. That's why you 
wanted me to come."`;

});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B018)`"You..."`;

});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B019)`"...are SUCH an idiot."`;
   Takeshi`"Huh?"`;
   Tsugumi(T2B020)`"Don't you get it yet?"`;
   Takeshi`"...?"`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B021)`"That EI elevator is a neutral buoyancy 
elevator so for the most part it doesn't 
require outside power."`;
   Tsugumi(T2B022)`"But it does need power for the intake and 
release of water from the ballast tank...in 
fact that's the only time it needs power."`;
   Tsugumi(T2B023)`"And since this is a blackout..."`;
   Takeshi`"You couldn't operate the ballast 
valve...that much I know."`;
   Tsugumi(T2B024)`"Well, do you know Archimedes principle?"`;

});
choice(
   `I know it`,
   `I don't know it`,
);
switch (l_choice) {
   case 0: goto(lbl_000006bd);
   case 1: goto(lbl_000006c6);
}
let lbl_000006bd;
showTextbox();
text(() => {
   Takeshi`"Dang you're annoying..."`;
   Takeshi`"Of course I know about that."`;
   Takeshi`"The buoyancy of a submerged object is equal 
to the weight of the liquid displaced by the 
object."`;
   Takeshi`"And what does that have to do with what we're 
talking about?"`;

});
goto(lbl_000006cb);
let lbl_000006c6;
showTextbox();
text(() => {
   Takeshi`"Nah. Can't say I understand that."`;
   Takeshi`"I remember hearing about it a long time ago 
at school...but I forget."`;
   Tsugumi(T2B025)`"The buoyancy of a submerged object is equal 
to the weight of the liquid displaced by the 
object."`;
   Takeshi`"Oh, you mean that. That's the Archimedes 
principle?"`;
   Takeshi`"And? What's that got to do with this...?"`;

});
let lbl_000006cb;
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B026)`"How about you figure the rest out yourself?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `There she went again...`;
   `She would tease me along...but that was it....`;
   Takeshi`"Hmmm..."`;
   `I gave a deep sigh and shook my head.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `I switched the heavy toolbox to my other hand 
and continued walking.`;
   `After walking a while, Tsugumi turned right 
ahead of me.`;
   `I followed after her.`;

});
bgload({ name: `BG26B4L`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Oh!"`;
   `Turning the corner it finally hit me.`;
   Takeshi`"I see.... So that's what you meant..."`;
   Takeshi`"I thought it was weird you inviting me along."`;

});
fgload({ id: 1, name: `TU14AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"To sink that egg elevator to the third floor 
its total weight had to be greater than the 
force of the buoyancy."`;
   Takeshi`"So just one skinny girl like you wasn't 
going to be enough weight."`;

});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B027)`"Right."`;
   Tsugumi(T2B028)`"So don't get me wrong."`;
   Tsugumi(T2B029)`"Of the five people trapped here, you're the 
heaviest, weight-wise, right?"`;
   Takeshi`"Y-you...I'm not just some big rock 
paperweight!"`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B030)`"No. You're more than a rock..."`;
   Tsugumi(T2B031)`"You're a rock head."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG18B2`, transition: 20 });
clock(`7:26`);
showTextbox();
text(() => {
   `As I was thinking of a comeback to rock head, 
we arrived at our destination.`;
   `Yellow and black stripes appeared 
dimly ahead.`;
   Takeshi`"This it? This the Generator Room...?"`;
   `There was a plate with information in front 
of the door, but it was too dark to read.`;
   Takeshi`"I'll take a look."`;
   `I reached toward the door handle....`;

});
fgload({ id: 1, name: `TU08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B032)`"Wait!"`;
   `Tsugumi grabbed my arm.`;
   Takeshi`"Huh? What's up?"`;

});
fgload({ id: 1, name: `TU05AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"What?"`;

});
fgload({ id: 1, name: `TU13AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"If you don't talk, I don't understand."`;
   `Tsugumi held my arm firmly.`;
   `The wet palm of her hand felt cool.`;
   `I didn't know what she wanted to say. I tried 
to read something from her expression, but it 
was too dark to see.`;

});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B033)`"I don't think you should open it..."`;
   Takeshi`"Why not?"`;
   Tsugumi(T2B034)`"It's dangerous...maybe..."`;
   Takeshi`"Dangerous? Inside this room?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi nodded and gently removed her hand 
from my arm.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And then she quietly approached the door.`;
   `She tossed some of the water droplets from 
her hand at the steel door.`;

});
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The droplets sizzled on the door, evaporating 
away.`;
   Takeshi`"Is there a fire or something inside?"`;
   `Tsugumi shook her head.`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B035)`"The generator uses hot water, so I don't 
think it could be a fire."`;
   Takeshi`"Then..."`;

});
fgload({ id: 1, name: `TU03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B036)`"It's probably steam..."`;
   Tsugumi(T2B037)`"I think it's just packed full of extremely 
hot steam."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B038)`"This generator is designed to operate 
normally at 6 atmospheres."`;
   Tsugumi(T2B039)`"But right now LeMU's air pressure is at 1 
atmosphere."`;
   Tsugumi(T2B040)`"There is a possibility that a tank or pipe 
filled with high-pressure steam could have 
ruptured."`;
   Tsugumi(T2B041)`"Or that some abnormality was detected and 
triggered a safety valve to be opened..."`;
   Takeshi`"Oh, I get it."`;
   Takeshi`"Either way, steam is leaking from somewhere 
and there isn't enough power to turn the 
turbine..."`;
   Takeshi`"And so the generator stopped."`;
   Takeshi`"If that is what happened..."`;
   Takeshi`"...Then that could've been pretty 
dangerous..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The instant I opened the door my whole body 
would have been showered with several 
hundred-degree steam....`;
   `Like Tsugumi, I tossed some water on the door.`;

});
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Fwishhhhhh!`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   `After that...`;
   `Tsugumi and I made for the room next door to 
the Generator Room.`;
   `We were implementing Tsugumi's plan: 'First 
shut off the hot water flowing to the 
Generator Room.'`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG20B2`, transition: 20 });
showTextbox();
text(() => {
   `It was dark and I couldn't see everything, 
but the room was covered in an astounding 
network of pipes.`;
   `The pipes continued into the Generator Room 
next door. It seemed that opening and closing 
the valves could adjust the water and oil 
pressure.`;
   `"Normally LeMMIH is responsible for 
maintaining the Generator Room, but even 
LeMMIH can't do much when the generator 
itself goes out."`;
   `"Anyhow, this is all because 
the power supply is down."`;
   `"This room is designed so that maintenance 
can be performed manually at times like this, 
or during blackouts."`;
   `...That was what Tsugumi told me.`;
   `(Why does Tsugumi know so much about LeMU?)`;
   `(She seemed to know where the Generator Room 
and the room with all of the pipes was...)`;
   `These doubts nagged at my mind.`;
   `As I was thinking these thoughts, Tsugumi 
plugged away next to me.`;
   `Tsugumi selected one pipe from the countless 
rows of them and closed its valve.`;
   `I had no idea which pipe was doing what.`;
   `But Tsugumi had known.`;
   `(What...kind of girl is Tsugumi anyway?)`;
   `I still hadn't found out how she had known 
that the inside of the Generator Room was 
'dangerous.'`;
   `(I wonder if Tsugumi has some kind of 
connection with LeMU...)`;

});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B042)`"Whew..."`;
   Tsugumi(T2B043)`"I think this should do it."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As soon as the work was done, Tsugumi left.`;
   `I was left alone in the room...`;
   `There were still a number of nagging doubts 
that I hadn't resolved.`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG18B2`, transition: 20 });
setSceneTitle({ index: 12 });
clock(`8:0`);
showTextbox();
text(() => {
   `With this we would be able to shut off 
the hot water flowing to the Generator Room.`;
   `Even so, on the other side of the door, it 
was still hot enough to scald.`;
   `Tsugumi and I waited in front of the 
Generator Room until the temperature inside 
had cooled down sufficiently.`;
   `We sat on the water-covered floor and leaned 
against the wall.`;
   `We sat next to each other.`;
   `We were both already drenched so we didn't 
have any problem about sitting in water.`;
   `Besides, the water was warmer than it 
looked....`;
   `I thought it was probably the heat from the 
Generator Room.`;
   Takeshi`"Hey, how long do you think we're gonna have 
to wait?"`;
   `I asked Tsugumi this.`;

});
fgload({ id: 1, name: `TU13AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"An hour?"`;
   Tsugumi`"........."`;
   `Tsugumi didn't even try to answer.`;
   `It was so dark that I couldn't even tell if 
she had nodded or shaken her head.`;

});
playSFX({ name: `SE04_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `In the darkness there were intermittent and 
repeated clicking noises.`;
   `It was like the sound of dry plastic 
crinkling, like on the top of a champagne 
bottle.`;

});
playSFX({ name: `SE04_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `It sounded like it was coming from near 
Tsugumi's hands.`;
   Takeshi`"What's that?"`;

});
fgload({ id: 1, name: `TU06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B044)`"...What?"`;
   Takeshi`"That crackly sound you're making?"`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The sound stopped.`;
   `Tsugumi took whatever it was and put it away 
in her pocket.`;
   `I thought it might be her way of saying: 'I'm 
not going to tell.'`;
   Takeshi`"What is it with you? You only answer when 
you feel like it?"`;
   Tsugumi`"........."`;
   Takeshi`"You're like a cat."`;

});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B045)`"I hate cats."`;
   Takeshi`"Huh?"`;
   Tsugumi(T2B046)`"Because they eat mice."`;
   Takeshi`"I don't have a clue what you're talking 
about."`;

});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B047)`"I..."`;
   Tsugumi(T2B048)`"...I'm not a cat."`;
   Takeshi`"That's for sure!"`;

});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B049)`"My answering has nothing to do with my mood."`;
   Tsugumi(T2B050)`"If a question has meaning, I answer. If it 
doesn't, I don't...that's all."`;
   Takeshi`"Really?"`;
   Tsugumi`"........."`;
   Takeshi`"So you are serious."`;

});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B051)`"So that's the kind of question I don't want 
to answer."`;
   Tsugumi(T2B052)`"A question to check something..."`;
   Tsugumi(T2B053)`"A question about something you don't need to 
know..."`;
   Tsugumi(T2B054)`"Or questions about things that you know I 
don't know, but you ask anyway..."`;

});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B055)`"There is more than enough pointless 
conversation in the world.... Don't you 
think?"`;
   Takeshi`"Alright. I got it already."`;
   Takeshi`"How about I ask you a meaningful question?"`;
   `I want to ask...`;

});
choice(
   `About the air pressure of a Generator Room`,
   `Why do you know so much about LeMU?`,
);
switch (l_choice) {
   case 0: goto(lbl_00000a20);
   case 1: goto(lbl_00000a64);
}
let lbl_00000a20;
showTextbox();
text(() => {
   `There was something that had been bugging me.`;
   `So I decided to take this opportunity to ask 
about it.`;
   Takeshi`"It's about the air pressure of the Generator 
Room..."`;
   Takeshi`"A while ago, until you closed that valve, 
super hot water was being pumped in, right?"`;
   Takeshi`"And that water turns to steam and it gets 
more and more packed in there."`;
   Takeshi`"What's more, it's steam at a temperature of 
several hundred degrees."`;
   Takeshi`"So that means that the air pressure in the 
room is just getting higher."`;
   Takeshi`"For example, it's like if you poured a bunch 
of water into a kettle, welded it shut, 
blocked the spout and put it on a fire."`;
   Takeshi`"Then finally it would go and explode, 'Boom!' 
Right?"`;
   Takeshi`"And if that's what happened in the Generator 
Room...why's it fine?"`;
   Tsugumi(T2B056)`"And?"`;
   Takeshi`"Uh, I mean, why is that...?"`;

});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B057)`"*Sigh*..."`;
   Tsugumi(T2B058)`"Is that what you call a 'meaningful 
question'?"`;
   Takeshi`"You bet. Because it's a matter of life and 
death."`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B059)`"Hmph..."`;
   Tsugumi(T2B060)`"It sounds to me like a typical stupid 
question...but whatever."`;
   Tsugumi(T2B061)`"First, you have to think about when the 
generator was functioning normally."`;
   Tsugumi(T2B062)`"At that time, steam would spout on and off 
and turning the turbine."`;
   Tsugumi(T2B063)`"Where would the steam usually go once it was 
used...?"`;
   Tsugumi(T2B064)`"I think it was probably sent outside of LeMU."`;
   Tsugumi(T2B065)`"In other word the kettle's spout wasn't 
plugged."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey, I see."`;
   Takeshi`"So the Generator Room was connected to the 
outside by a pipe or something."`;
   `Hmmmm...that made sense.`;
   `I nodded to myself.`;

});
goto(lbl_00000abb);
let lbl_00000a64;
showTextbox();
text(() => {
   `I decided to ask about something that had been 
nagging me for a while.`;
   Takeshi`"Tsugumi, why do you know so much about LeMU?"`;
   Takeshi`"I mean, you seem to know all about the 
details of stuff, like this Generator Room or 
the pipe room or whatever."`;
   Tsugumi`"........."`;
   `I couldn't check her expression, but it 
seemed like she was deep in thought about 
something.`;
   Takeshi`"How's that for a meaningful question?"`;

});
fgload({ id: 1, name: `TU15AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Tsugumi(T2B066)`"Completely..."`;

});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B067)`"...devoid of meaning."`;
   `Tsugumi muttered that.`;

});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B068)`"How is my answer to that going to help you?"`;
   Tsugumi(T2B069)`"It doesn't really matter whether you know 
about me or not."`;
   Tsugumi(T2B070)`"It's something you don't need to know..."`;
   Takeshi`"Oh, I see."`;
   Takeshi`"If you don't wanna tell me, that's fine."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Still, I really did want to know.`;
   `Tsugumi's evasion of the question had made me 
interested in finding out what there really 
was to her.`;
   `But I didn't think that she would answer if I 
badgered her about it anymore.`;
   `I was feeling irritated, but decided to play 
it cool and pretend like I didn't care.`;

});
let lbl_00000abb;
showTextbox();
text(() => {
   `Then...`;

});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B071)`"Hey."`;
   `I didn't know what she was thinking, but 
Tsugumi suddenly put her face in front of mine.`;
   Takeshi`"Wh-what?"`;
   Tsugumi(T2B072)`"Now it's my turn."`;
   Takeshi`"...Y-yeah?"`;
   Tsugumi(T2B073)`"Can I ask you a question?"`;
   Takeshi`"Uh, sure...go ahead..."`;

});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B074)`"Will you close...your eyes?"`;
   Takeshi`"...Is...that the question?"`;

});
fgload({ id: 1, name: `TU02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B075)`"It's more of a favor."`;
   `There in the darkness....`;
   `In that narrow corridor....`;
   `Just a few inches from my nose...`;
   `The two of us....`;
   `My mind turned to steam and evaporated.`;
   Tsugumi(T2B076)`"Are they closed?"`;
   `Almost as if I were hypnotized my eyes began 
to sink.`;

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
   `And immediately after that...`;

});
playSFX({ name: `SE10_22`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `- Shake, shake, shake!`;

});
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `- Splish, splash!`;

});
playSFX({ name: `SE10_23`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `- Slosh, slosh!`;

});
playSFX({ name: `SE10_24`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Click!`;
   `I didn't know what to make of these noises.`;
   `I opened my eyes without thinking....`;

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
   `Tsugumi was grinning mischievously right in 
front of me.`;
   Tsugumi(T2B077)`"Close them!"`;
   `Tsugumi covered my eyes with one hand.`;

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
   `And then...`;

});
hideTextbox();
playBGM({ num: 10, volume: 100 });
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Fwwwiiiiiiiiish!`;
   Takeshi`"Hey, hey, what're you doing?"`;
   Tsugumi(T2B078)`"You jerk! You dumb jerk!"`;
   `I screamed.`;
   Takeshi`"W-what are you doing?"`;

});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `A liquid spray like something showered my face.`;
   Takeshi`"You...you...that went in my mouth..."`;

});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(T2B079)`"Take that! You loser!"`;
   Takeshi`"Stop! Stop it! What's the matter with you...?"`;

});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I desperately tried to resist, but my body 
wouldn't do what I told it.`;
   `Tsugumi had me by the neck.`;

});
playSFX({ name: `SE10_25`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(T2B080)`"How's that you slug?!"`;
   Tsugumi(T2B081)`"You scum on the pond of life!"`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   `With those words, the eruption in my face 
stopped.`;
   Takeshi`"My mwouth...iz nwumb..whaddya spway won me..."`;
   Tsugumi(T2B082)`"Hee, hee, hee..."`;
   `I thought she was laughing, but the next 
thing I knew Tsugumi had started rubbing my 
face with a cloth.`;
   `It was rough and her technique wasn't any 
better....`;
   Takeshi`"Ohhhh...ahhhh..."`;
   `I stopped my futile resistance.`;
   `I was almost choking.`;
   Tsugumi`"........."`;
   Tsugumi(T2B083)`"That's...just about right..."`;
   `Tsugumi took her hand off of my neck.`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Unable to open my eyes I scooped up seawater 
from the floor and put it in my mouth.`;
   `It was salty, but I didn't have any other 
choice.`;

});
playSFX({ name: `SE10_15`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Takeshi`"Swish, swish, swish..."`;

});
playSFX({ name: `SE10_28`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Takeshi`"Blah!"`;
   Tsugumi(T2B084)`"H-hey!"`;
   Tsugumi(T2B085)`"That's dirty so don't go spitting it over 
here!"`;
   Takeshi`"You! You! Yoooooou!"`;
   `I wanted to say something to her, but washing 
my face took priority.`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I scooped more water splashed it on my face 
and gargled again.`;
   `I opened my eyes.`;

});
bgload({ name: `BG18B2`, transition: 20 });
fgload({ id: 1, name: `TU10AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Whaaaaaaaaaaaat do you think you're doing?"`;
   Takeshi`"What did you put on my face?"`;

});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B086)`"Acetone."`;
   Takeshi`"Oh GREAT! I'm so HAPPY it wasn't some 
pesticide."`;
   Takeshi`"You think I'm serious? You idiot! I'm 
kidding!"`;
   Takeshi`"Whaddya doing spraying that on me all of the 
sudden?"`;
   Tsugumi(T2B087)`"It was hard to look at."`;
   Takeshi`"Huh? What was?"`;
   Tsugumi(T2B088)`"Your face."`;
   Takeshi`"Whose?"`;
   Tsugumi(T2B089)`"Yours."`;
   Takeshi`"Y-y-y-y-you..."`;
   `And then I realized something.`;
   `I remembered...`;
   `The black ink that had been on the palms of my 
hands....`;
   Takeshi`"I see..."`;
   Takeshi`"It was the graffiti..."`;
   Takeshi`"It was still there...?"`;
   Takeshi`"You erased all of the writing..."`;
   `I had completely forgotten about it until 
just then.`;
   `When I was making sandwiches, looking for 
Sora and coming here, the writing had been on 
my face since that morning.`;
   Takeshi`"And the acetone..."`;
   Takeshi`"Acetone...that's supposed to be like nail 
remover, right?"`;

});
fgload({ id: 1, name: `TU03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B090)`"I found it...in the toolbox..."`;
   `There was a strong stench from it in the air.`;
   `It stung my nose like overripe fruit...`;
   `It smelled like a hangover.`;
   Takeshi`"T-thanks."`;
   `I thanked her...`;
   Takeshi`"So what did the writing say?"`;
   `I asked her about the graffiti.`;
   Tsugumi`"........."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU13AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B091)`"You can wait if you want, but I'm not 
answering."`;
   Tsugumi(T2B092)`"Because it's a meaningless question."`;

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
   `In the end, I never did find out why she 
called me a slug.`;

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
   `We waited for the Generator Room to cool 
before going inside.`;
   `The heat inside just about defied imagination.`;
   `The air in the steam-filled room was heavy 
and stuck to the skin.`;
   `Inhaling felt like swallowing globs of sticky 
hot steam.`;
   `I was opening and closing his mouth like a 
fish out of water.`;
   Takeshi`"Isn't it hard to breathe?"`;
   `Tsugumi seemed to have ruled this question of 
mine meaningless as well.`;
   `She completely ignored me as she started 
working to get the generator up and running 
again.`;

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
   `We did the work together.`;
   `Tsugumi gave commands. I followed them.`;
   `I did the grunt work...tightening bolts, 
loosening valves and working on pipes.`;
   `And when I finished tightening the last 
bolt....`;

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
   Takeshi`"Whew. That should do it."`;
   `I wiped my sweat away with my collar.`;
   `It was just like Tsugumi had said. The 
blackout was caused when the safety valve had 
opened due to the drop in air pressure.`;
   `'When pressure from the steam becomes 
excessive, the valve automatically opens to 
release the gas and prevent damage.'`;
   `'Normally after a release of surplus gas, the 
valve is designed to shut automatically...but 
we're at 1 atmosphere, so...'`;
   `'Because the safety valve never closed, the 
steam continued leaking.'`;
   `...Anyway, that was the gist of the 
explanation.`;

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
   `Tsugumi and I went to the Generator Room and 
went to the pipe room...`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `There we opened the valve we had closed 
before the repairs...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG19B2`, transition: 20 });
showFog2();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `And returned to the Generator Room.`;
   Takeshi`"So should we try to fire it up?"`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"I'm turning it on."`;
   Tsugumi`"........."`;
   Takeshi`"You ready?"`;
   Tsugumi`"........."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Let's start the countdown..."`;
   Tsugumi`"........."`;
   Takeshi`"30 seconds..."`;
   Tsugumi`"........."`;
   Takeshi`"25 seconds..."`;
   Tsugumi`"........."`;
   Takeshi`"20...19...18...17"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Click.`;
   `Tsugumi pushed the button.`;

});
playSFX({ name: `SE03_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Hey! What are you doing? We still had 17 
seconds to go!"`;

});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"You can't wait a little more than a mere 10 
seconds?"`;
   Tsugumi`"........."`;
   Takeshi`"This...this is kind of like a 
ritual...anyway, it's very important..."`;

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
   Tsugumi(T2B093)`"Zero..."`;
   `The lights lit up all at once.`;
   `The light poured down, illuminating even the 
corners of the room.`;
   `It was like our field of vision had expanded 
in an instant.`;

});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B094)`"See...it took exactly 17 seconds for the 
lights to come on..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi flashed me a condescending glance and 
strolled out of the room.`;
   Takeshi`"Tsk."`;
   `I shouldered the weighty toolbox and followed 
after Tsugumi.`;

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
   `We found ourselves back in front of the 
neutral buoyancy elevator.`;
   `Tsugumi was waiting with her arms crossed.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B095)`"You're slow."`;
   Takeshi`"Whaddya expect? I'm the one carrying this 
leaden toolbox!"`;
   Tsugumi(T2B096)`"I know."`;
   `(Oh, yeah...)`;
   `(I forgot it was Tsugumi that took the 
toolbox out of the warehouse...)`;
   `As I recalled that, I turned my eyes to the 
egg-like elevator.`;
   `On the other side of that door the egg that 
we came in should have been waiting.`;
   `It was an egg with a hole in it. It was 
useless to us.`;
   `To the left...`;
   `The floor display was lit up with a number 
three.`;
   Takeshi`"Did you know there was another egg elevator 
stopped down here...?"`;
   Tsugumi(T2B097)`"Wouldn't have come if I didn't."`;
   Takeshi`"I suppose not..."`;

});
bgload({ name: `BG24A2`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Oh this is heavy."`;

});
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Inside the egg elevator, I put the toolbox on 
the floor.`;

});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B098)`"You sound like an old man..."`;
   Takeshi`"Shut up. I AM an old man compared to you."`;

});
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `As I said that, I pushed the up button next 
to the elevator door.`;
   `The internal and external watertight doors had 
already sealed automatically.`;

});
playSFX({ name: `SE10_17`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `We could hear air being sent into the ballast 
tank under the floor.`;
   `Finally, the egg-shaped elevator...`;
   `...didn't start to float up.`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   Takeshi`"Huh? Are you serious?"`;
   `The sound beneath the floor had stopped and 
silence had returned.`;
   Takeshi`"Not again..."`;
   Takeshi`"Why do we keep running into problem after 
problem..."`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Knowing it was useless, I pushed 
the up button repeatedly.`;

});
fgload({ id: 1, name: `TU11AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi was as matter-of-fact as always....`;
   `She was playing with and coiling her long, 
still damp hair with her finger.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Alright, so what do we do...?"`;
   `Just as I said that...`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `A monitor just to the right of the round 
window flickered to life.`;

});
hideTextbox();
stopSFX()
stopBGM();
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   Sora(T2B099)`"Takeshi, Tsugumi."`;
   Takeshi`"Sora! Where have you been? We looked 
everywhere for you!"`;
   Sora(T2B100)`"I'm terribly sorry. Please accept my 
apologies."`;
   `The image of Sora in the monitor bowed deeply.`;
   Takeshi`"That's not important right now."`;
   Takeshi`"Tsugumi and I fixed the generator."`;
   Sora(T2B101)`"It would appear so."`;
   Sora(T2B102)`"Thank you so much. Thank you..."`;
   Takeshi`"I think you know this, but we are in this 
egg...uh, this EI..."`;
   Sora(T2B103)`"Yes, I know."`;
   Sora(T2B104)`"The EI is not moving, correct?"`;
   Takeshi`"What should we do?"`;
   Sora(T2B105)`"First, in regard to the cause..."`;
   Sora(T2B106)`"It is likely the result of a decrease in 
internal air pressure that has made the 
device incapable of sufficiently expelling 
the seawater in the ballast tank."`;
   Sora(T2B107)`"In other words..."`;
   Takeshi`"You mean it isn't buoyant enough?"`;
   Sora(T2B108)`"Correct."`;
   Sora(T2B109)`"There are a number of feasible methods for 
making it rise, but..."`;
   `It was then that Tsugumi acted.`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `She suddenly opened the watertight door.`;
   Takeshi`"H-hey! Wait! Whaddya think you're doing?"`;

});
hideTextbox();
playBGM({ num: 15, volume: 100 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Without answering, Tsugumi also opened the 
LeMU side door.`;

});
fgload({ id: 1, name: `TU10AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B110)`"Okay then..."`;
   Takeshi`"Huh?"`;
   `Tsugumi tried to get out of the elevator....`;
   `I grabbed her arm, trying to stop her.`;

});
hideTextbox();
fgload({ id: 1, name: `TU06AWM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU04AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B111)`"Don't touch me!"`;

});
hideTextbox();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Slap!`;
   `It was a solid smack....`;

});
fgload({ id: 1, name: `TU08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B112)`"I told you...don't touch me..."`;
   `My cheek didn't hurt.`;

});
fgload({ id: 1, name: `TU17AWL`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I absently watched Tsugumi return to the floor.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Announcement(T2B113)`"Start"`;
   `The egg quietly started to ascend.`;
   `I could no longer see her on the other side 
of the door.`;
   Announcement(T2B114)`"Depth 150 feet."`;
   Announcement(T2B115)`"Depth 135 feet."`;
   Announcement(T2B116)`"Depth 120 feet."`;
   `The recorded announcement echoed with a tinny 
sound.`;

});
removeBG({ mode: WHITE, transition: 2 });
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG23A1`, transition: 20 });
multifgload3({ name1: `KA07ADS`, name2: `YU07ADS`, name3: `CO07ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"Oh, no! Tsugumi! Tsugumi!"`;
   `When I met everyone on the Zweite stock they 
greeted me with friendly shouts.`;
   Kid(T2B117)`"What happened...to Tsugumi?"`;
   Takeshi`"That idiot decided to stay alone on the floor 
below..."`;
   You(T2B118)`"It sure looks like it."`;
   Takeshi`"No it doesn't 'look like it' - she did!"`;
   Takeshi`"She's all alone down there!"`;
   Takeshi`"Aren't you worried about her?"`;
   Coco(T2B119)`"But..."`;
   Takeshi`"I'm going back down!"`;
   Takeshi`"I'm going down and I'm bringing Tsugumi back!"`;
   You(T2B120)`"Huh?"`;
   Takeshi`"We can't leave Tsugumi alone down there!"`;
   Takeshi`"Look...she's...really not as tough as she 
acts..."`;
   Takeshi`"Somebody...has to be with her..."`;
   Kid(T2B121)`"Hmmm..."`;
   Coco(T2B122)`"Wow..."`;
   Takeshi`"Hey, what are you doing? Get your act 
together!"`;
   Takeshi`"Tsugumi can be a bit of an ass, but that 
doesn't mean you have to be so cold to her!"`;
   Takeshi`"Enough!"`;
   Takeshi`"Anyway, I'm going back for her!"`;
   `With that, I went back to the entrance to the 
egg and waited in front of the doors.`;
   `Next...`;

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
   `When the doors opened...`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `TU01AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"........."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B123)`"Uh..."`;
   Tsugumi(T2B124)`"Will you move?"`;

});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2B125)`"You're in my way."`;
   `I simply stood there....`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi pushed me out of the way and walked by.`;

});
removeBG({ mode: WHITE, transition: 2 });
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
bgload({ name: `BG24A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `If there were a rock there, I would have 
crawled under it.`;
   `So I did the next closest thing I could think 
of.`;
   Announcement(T2B126)`"Depth 105 feet."`;
   Announcement(T2B127)`"Depth 120 feet."`;
   Announcement(T2B128)`"Depth 135 feet."`;
   `I went back down to Dritte stock in the egg 
for no reason.`;
   `(It didn't have enough buoyancy so we had to 
come up one-by-one...)`;
   `(Gosh, I'm dense...)`;
   `If I could have, right then I would have 
liked to sink down to the bottom of the ocean.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_2C`);
