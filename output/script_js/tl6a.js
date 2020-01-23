l_b0 = 5;
l_dayA = 6;
l_dayB = 6;
setDialogBoxColor(GREEN);
setSceneTitle({ index: 45 });
playBGM({ num: 19, volume: 100 });
bgload({ name: `BG35A1`, transition: 20 });
clock(`16:42`);
showTextbox();
text(() => {
   `We finished making our rounds.`;
   `The Kid and Tsugumi went back to the 
examination room where Coco was.`;
   `Trading places, You left the room, and 
Tsugumi took her place at the console, 
watching her vital signs.`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You and I talked in the corridor, about what 
course of action we should take.`;
   Takeshi`"Looks like we don't have any options..."`;
   You(T6L000)`"Yeah..."`;
   You(T6L001)`"So, what do you want to do?"`;
   Takeshi`"What do I...? Um, I'm thinking about it."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L002)`"Really..."`;
   `You smiled slightly.`;
   You(T6L003)`"Takeshi, you know you're always the same."`;
   Takeshi`"What's that supposed to mean?"`;
   You(T6L004)`"You never know when to quit.... Ahhh, I'm 
sorry, I didn't mean it in a bad way."`;
   You(T6L005)`"You always try to be positive... I just have 
to admire that."`;
   You(T6L006)`"I mean it."`;
   Takeshi`"Really? You think so?"`;
   Takeshi`"I wouldn't say I was positive, as I probably 
just don't notice the really dangerous things."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L007)`"There you go again, joking around..."`;
   You(T6L008)`"You sure you're not doing it on purpose?"`;
   `You puffed up a little.`;
   Takeshi`"Nah, not at all. I'm too dumb for that."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Takeshi`"And because I'm not so smart, I've got to 
think really hard about everything."`;
   Takeshi`"But you know what? I think we're going to be 
okay. I mean, we got this far, didn't we?"`;
   `You laughed in response to my earnest reply.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L009)`"Yeah... I'm sure we'll be 'fine.'"`;
   Takeshi`"Sure... it's gonna be alright."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `A sound roared in the distance. It was 
probably being transmitted through the water 
to IBF, where we were.`;
   `Was it...the sound of the thermal vents?`;
   `I wondered if LeMU was still hanging in 
there...`;
   `Although the situation we were in didn't look 
great, there were still various options 
available to us.`;

});
showTextbox();
text(() => {
   Takeshi`"Hey, You...it's about that old guy, but..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L010)`"The researcher...? In the end we couldn't 
save him..."`;
   Takeshi`"Yeah. But I was thinking, why was he the 
only one left here? Everyone else got out 
earlier, right?"`;
   Takeshi`"Well, besides those guys that didn't make 
it..."`;
   You(T6L011)`"Yeah...I wonder."`;
   You(T6L012)`"I don't know..."`;
   You(T6L013)`"I don't know, but..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L014)`"I'm sure some kind of circumstances kept him 
from escaping. And circumstances that kept him 
alive..."`;
   Takeshi`"Circumstances?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L015)`"Before he died, and everyone was off 
searching...I had the chance to talk with him 
some."`;
   You(T6L016)`"I tried to get him to stop, because he 
seemed like he was suffering, but...."`;
   You(T6L017)`"He said talking made him feel better, so..."`;
   Takeshi`"I see.... Well, what did he talk about?"`;
   You(T6L018)`"Um......"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L019)`"He got TB, and wandered around IBF 
half-dead..."`;
   You(T6L020)`"But he was worried about LeMU the whole 
time..."`;
   You(T6L021)`"Before coming to IBF, he said that he'd been 
involved with the project to develop LeMU's 
system."`;
   You(T6L022)`"He was one of the staff that engineered 
LeMU's management software."`;
   Takeshi`"Meaning...that..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L023)`"HIMMEL, LeMMIH, and...Sora. Everything he 
left behind is here in LeMU."`;
   You(T6L024)`"For a programmer—"`;
   You(T6L025)`"The system here at LeMU was like his own 
child."`;
   Takeshi`"Meaning...he was worried about his 
'children?'"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L026)`"Yeah...that must have been it."`;
   You(T6L027)`"Worrying about his children is what helped 
him live a while longer."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG33A2`, transition: 20 });
showTextbox();
text(() => {
   `Leaning against the wall we looked as waves 
calmly lapped in the pool.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L028)`"Oh yeah. There was one other thing I heard 
from him that I was able to check up on."`;
   You(T6L029)`"I wasn't sure about it when I found it on the 
terminal in the Security Office..."`;
   Takeshi`"What's that?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L030)`"Well, I had partially bypassed LeMMIH's 
security...and that's when I found it."`;
   Takeshi`"So what is it already!?"`;
   You(T6L031)`"Sora's location..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L032)`"Sora is...the Sora that we know, isn't in 
Insel null."`;
   Takeshi`"Eh?"`;
   You(T6L033)`"We know that LeMMIH's central processing 
unit - the main super computer - is on the 
floating island..."`;
   You(T6L034)`"It seems that everything that happens here 
on LeMU, is saved in LeMU's memory storage."`;
   Takeshi`"What??"`;
   Takeshi`"I mean...can you tell me that in simpler 
language?"`;
   Takeshi`"So that someone, even dumb like me, can 
understand?"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L035)`"Okay..."`;
   You(T6L036)`"Leiblich Pharmaceutical keeps an original 
system program for 'Sora Akanegasaki.'"`;
   You(T6L037)`"So even if they lose the copy here at LeMU, 
it won't hurt them at all."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L038)`"So basically...it is possible to make many 
different versions of the 'Sora' system."`;
   You(T6L039)`"Even the Sora here might just be a copy."`;
   Takeshi`"......."`;
   `More than one Sora.`;
   `Multiple copies...clones...present 
everywhere...that's what she meant.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L040)`"But, think about it?"`;
   You(T6L041)`"Sora is Sora, right?"`;
   You(T6L042)`"There is only one 'Sora' that we know, right?"`;
   You(T6L043)`"So what's the only thing that separates the 
Sora we know, from other Soras?"`;
   Takeshi`"Separates..."`;
   `Separates...`;
   `Differences...`;
   `Truth...`;
   `Sora and the impostor...`;
   Takeshi`"Ah..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L044)`"Do you get it Takeshi?"`;
   You(T6L045)`"Memory."`;
   You(T6L046)`"The only thing that we and the Sora here 
share is..."`;
   You(T6L047)`"Memory. That's it."`;
   Takeshi`"Really..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Even if Sora was everywhere...`;
   `There was only one Sora Akanegasaki that I 
knew.`;
   Takeshi`"Meaning..."`;
   Takeshi`"Sora's memory is here at LeMU..."`;
   Takeshi`"Sora...HIMMEL!?"`;
   Takeshi`"So, then! That means—"`;
   Takeshi`"Sora's mind, and spirit are here in HIMMEL!?"`;
   `I couldn't hold back. You gave me a nod when 
I asked this question.`;
   Takeshi`"But if Dritte stock starts flooding..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L048)`"Yeah..."`;
   You(T6L049)`"The Sora that we know is gone forever."`;
   Takeshi`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I kicked a dirty old bottle that was at my 
feet.`;
   `It landed in the pool and slowly sunk.`;

});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   `We went back to the corridor.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L050)`"Takeshi..."`;
   Takeshi`"........."`;
   You(T6L051)`"I'm sorry, I didn't mean to confuse you 
earlier..."`;
   You(T6L052)`"Saying that Sora might be in Insel null..."`;
   Takeshi`"Don't worry about it."`;
   Takeshi`"We know where she is now."`;
   You(T6L053)`"Yeah......"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Even if we were able to get out of LeMU 
safely...`;
   `The Sora up at Insel null wouldn't be the 
Sora that we knew.`;
   `She would have the same thought processes, 
and look the same, but would be a different 
Sora.`;
   `That Sora wouldn't be the one who loved 
flowerbeds, and who had made it rain.`;
   `It wouldn't be the Sora who looked at me from 
the other side of the glass window.`;
   `The Sora who...`;
   `Who told a hopeless guy like me that she 
loved me...`;
   `The only place she existed...was here.`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `'Hey Takeshi...'`;
   `'Why was I created?'`;
   `"What is the purpose of my being alive?"`;

});
bgload({ name: `BG35A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Huh...?"`;
   `I felt strange and stopped suddenly.`;
   `I looked up.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L054)`"Takeshi...what's wrong?"`;
   `You followed my gaze to the ceiling.`;
   `There was nothing there.`;
   `She returned her gaze to me.`;
   Takeshi`"Uh..."`;
   Takeshi`"I'm not really sure, but..."`;
   Takeshi`"For some reason it's hard to breathe all of a 
sudden..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L055)`"Takeshi...?"`;
   You(T6L056)`"Your nose is bleeding."`;
   Takeshi`"?"`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L057)`"You've got a nose bleed."`;
   Takeshi`"Eh?"`;
   `I quickly put my hand to my nose.`;
   `My upper lip was wet with something.`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L058)`"He-hey? Are you okay?"`;
   `You looked worriedly at my face.`;
   Takeshi`"F-fine, I'm fine..."`;
   `I looked up, and wiped under my nose, as I 
replied.`;
   Takeshi`"I wasn't thinking anything sexual! 
Absolutely! Positively!"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L059)`"...I don't know if I should believe you."`;
   Takeshi`"A-as if! Not at a time like this."`;
   `My nose wouldn't stop bleeding.`;
   You(T6L060)`"Huh? It looks pretty bad."`;
   Takeshi`"Look, I told you, right? I really wasn't 
thinking anything perverted, 
okay?...huuuh....huuuh..."`;

});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L061)`"Huuuh?"`;
   You(T6L062)`"Huuuuh, what?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L063)`"Come on, what...?"`;
   `You started shaking my shoulder.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
shakeScreen();
showTextbox();
text(() => {
   Takeshi`"Wuuuuaaaachoooo!!"`;
   `I let out a huge sneeze.`;

});
hideTextbox();
removeBG({ mode: RED, transition: 3 });
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `SPLAT!${noWait}`;

});
bgload_keepFg({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   Append``;

});
showTextbox();
text(() => {
   `Blood flew not only from my nose, but also 
from my mouth in large amounts.`;
   `It splattered all over the floor and onto the 
wall.`;

});
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
showTextbox();
text(() => {
   Takeshi`"Woooah...!?"`;
   `I was suddenly assaulted by dizziness.`;
   `The world felt like it was spinning.`;
   Takeshi`"For some reason, I can't keep steady..."`;
   `Although I didn't feel so great, it seemed 
funny for some reason, and I laughed.`;
   Takeshi`"A, ha, ha, ha...what's with this?"`;

});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L064)`"T-Takeshi!"`;
   You(T6L065)`"Hang in there!"`;
   Takeshi`"Huh...quit shaking me, it's making me feel 
ill."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L066)`"S-sorry..."`;
   Takeshi`"Hey, I'm fine. Don't worry, You."`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L067)`"This is no time to be joking around!"`;
   You(T6L068)`"You're bleeding all over, Takeshi!!"`;
   You(T6L069)`"We should go to the examination room, and 
take a look at you at once."`;
   Takeshi`"Uh, yeah. *cough*"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(This isn't good...)`;
   `(I gotta get a hold of myself...)`;
   `I tried to calm myself down.`;
   `With You supporting me, I walked down the 
corridor.`;
   `Just then a door flew open in front of us.`;
   `It was the examination room. Out of it flew 
Tsugumi.`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L070)`"You, Takeshi! The Kid! The Kid's in bad 
shape!"`;
   `With eyes that showed the gravity of the 
situation, she yelled at us.`;
   You(T6L071)`"The Kid? What's wrong?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L072)`"He's in trouble! It'll be faster if you come 
in and look...ah!"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L073)`"No...Takeshi, you too!?"`;
   `Tsugumi noticed the shape I was in and opened 
her eyes in shock.`;
   You(T6L074)`"Takeshi 'too'?"`;
   Takeshi`"What are you talking about...?"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
closeDimInAndOutAndFilterAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 16, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`16:57`);
showTextbox();
text(() => {
   `The Kid was sleeping on the L-MRI table.`;
   `His results from the scan came up on the 
control panel's monitor.`;
   `"Tief Blau 2017-Rev.17"`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L075)`"The Kid's been infected with Tief Blau, 
too..."`;
   Takeshi`"How could that happen!?"`;
   Takeshi`"Why? He's been with us the whole time. So 
why did he get...?"`;
   Takeshi`"Why and where did he get TB!? ...*cough*"`;
   `I mumbled to myself, finding it hard to 
breathe all of a sudden.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L076)`"Takeshi, just calm down..."`;
   Tsugumi(T6L077)`"None of us know where he got exposed to it."`;
   Takeshi`"........."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU17ADM`, name2: `YU04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6L078)`"Takeshi, I want you to get scanned, too."`;
   Takeshi`"W-why!?"`;
   You(T6L079)`"Just let me scan you...please."`;
   You(T6L080)`"It isn't normal to start spewing blood from 
your nose and mouth, okay?"`;
   Takeshi`"Yeah I know...but."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L081)`"I'll help."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi gently took the Kid off of the L-MRI 
examination table and forcefully put me up on 
it.`;
   `Pressing on both of my shoulders, she forced 
me down on the table.`;
   Takeshi`"Y-you don't have to do that...fine, I'll let 
you check me."`;
   `I brushed Tsugumi's hands off of me.`;
   Takeshi`"See? I'm lying down now."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L082)`"Okay...You, please start the scan."`;
   You(T6L083)`"O-okay."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You started operating the control panel.`;

});
playSFX({ name: `SE03_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The scanning light from the laser crawled 
slowly up my body.`;
   `After a while...`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L084)`"The scan's finished..."`;
   Takeshi`"W-what's it say?"`;
   `My voice cracked when I asked the question.`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Takeshi`"A-at least say something, You."`;
   You(T6L085)`"The results are..."`;
   `You stared at the panel without moving.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L086)`"The results are black.... You're infected 
too, Takeshi."`;
   `Tsugumi read the monitor for me.`;
   `(Why...?)`;
   `(Why did I catch TB?)`;
   `(Because we came to IBF?)`;
   `(No, it couldn't be that...!)`;
   `(I must've had it longer than that...)`;
   `(Since getting to LeMU?)`;
   `(Maybe we're all infected...!?)`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Damn it..."`;
   `I stood up from the L-MRI, and was assaulted 
by a terrible dizzy spell.`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   Takeshi`"Whooaaah..."`;

});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6L087)`"Takeshi, watch out...!"`;
   `The one to steady me from falling was the Kid.`;

});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But from the looks of it, his legs weren't 
very steady either.`;
   `Putting my hand on a wall, I somehow held 
myself up.`;
   Kid(T6L088)`"We're in trouble, huh...?"`;
   Takeshi`"Y-you can say that again..."`;

});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6L089)`"If only we had that serum...the orange 
one...agh."`;
   `The Kid pressed his hand to his face.`;
   `As he wiped his mouth, I noticed a thin trail 
of blood there.`;
   Takeshi`"Y-yeah, the serum.... If they've been 
handling TB here at IBF, they should have 
some of that."`;
   Takeshi`"If we use that, then the symptoms should 
lessen..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I went around the examination room, and 
checked to see if I could find it anywhere.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADS`, name2: `YU18ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi and You hurriedly started checking 
through the medicine cabinets.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The Kid sank to the floor. He didn't look 
very good.`;
   `His breathing was ragged. He had lines of pain 
etched on his face.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6L090)`"It's no good. It doesn't look like there's 
any here."`;
   Tsugumi(T6L091)`"I can't find any either."`;
   `The two of them were shaking their heads.`;
   Takeshi`"Damn...what are we gonna do?"`;
   You`"........."`;
   Tsugumi`"........."`;
   Pipi(PIPI_04)`"Woof, woof!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey Pipi, you seem like you're doing pretty 
well."`;
   `Without me noticing, Pipi had come up and was 
darting around my legs.`;
   `His tail was wagging frantically.`;

});
playSFX({ name: `SE08_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `He suddenly dropped a few small objects from 
his mouth.`;
   Takeshi`"!?"`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   Takeshi`"H-hey! Where'd you get...?"`;
   You(T6L092)`"What's wrong? ...Ah!"`;
   `You ran over to where we were.`;
   You(T6L093)`"This is...the orange serum."`;
   `She picked up one of the fallen objects in 
front of Pipi.`;
   `It was a small capsule - a capsule with orange 
liquid inside of it.`;
   `Four of them had fallen on the floor.`;
   Takeshi`"Where'd you find that Pipi?"`;
   `I didn't know if he'd understand me, but I 
asked Pipi anyway.`;
   Pipi(PIPI_06)`"Whine...."`;
   `Pipi shook his head from side-to-side.`;
   Takeshi`"Were there any more of these?"`;
   Pipi(PIPI_06)`"Whiiiine..."`;
   `He shook his head.`;
   Takeshi`"This is...all of them?"`;
   Pipi(PIPI_00)`"Woof!"`;
   `He nodded.`;
   Takeshi`"........."`;
   Takeshi`"W-well we need to take these immediately..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Sorry You, but get these ready. You're the 
only one who knows how to give shots."`;
   Tsugumi(T6L094)`"I found some syringes over here, You."`;
   You(T6L095)`"O-okay!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We gathered all of the cartridges of serum 
from the floor, and put them on the bed.`;
   `Looking slightly doubtful, You prepared the 
syringes one at a time and gave the Kid and 
me our shots.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Phew.... We can relax for a while now."`;
   Kid(T6L096)`"Thanks, You..."`;
   You(T6L097)`"You're welcome."`;
   `Sitting with his back against the wall, the 
Kid gave You a thumbs up.`;
   `After that he smiled and closed his eyes. He 
must have fallen asleep.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"What do we do about Coco?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L098)`"She's still undergoing the oxygen treatment. 
So we can't open the pod."`;
   Tsugumi(T6L099)`"It looks like the treatment is progressing 
normally. As long as she's in there, I don't 
think her condition will get much worse..."`;
   Takeshi`"Yeah, okay..."`;
   Takeshi`"By the way, what about you Tsugumi...are you 
okay?"`;

});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L100)`"I scanned myself earlier..."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L101)`"I'm okay for now. But maybe I just don't 
have any symptoms."`;
   `Looking slightly worried, Tsugumi said this.`;
   Takeshi`"Oh...You, why don't you give Tsugumi a shot."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You opened up another of the containers and 
gave Tsugumi a shot.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Oh yeah, you should probably give yourself a 
shot too, don't you think, You?"`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T089)`"Huh? Um, no I..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   `The next shot had already been prepared, but 
for some reason You was stalling.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T090)`"*Cough*...*cough*"`;
   `She started coughing suddenly.`;
   Takeshi`"Hey! Give yourself a shot quickly!"`;
   You(T6T091)`"But, I-I just...*cough* "`;
   `She wouldn't stop coughing.`;
   `Her arm holding onto the syringe started to 
shake.`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6T092)`"Breathe deep...fuuu....haaa..."`;
   `Her coughing finally stopped.`;
   `But her hands wouldn't go still.`;
   Takeshi`"W-what's wrong? You aren't feeling well? You 
want me to give the shot to you?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T093)`"Huh, n-no way..."`;
   You(T6T094)`"I...I don't like shots..."`;
   Takeshi`"Huh!?"`;
   Tsugumi`"........."`;
   Takeshi`"You didn't have any problem sticking everyone 
else!?"`;
   Tsugumi(T6T095)`"You don't like getting them yourself?"`;

});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T096)`"Well yeah. 'Cause they hurt!"`;
   `You puffed out her cheeks stubbornly.`;
   Takeshi`"What are you talking about, your life's on 
the line here...!"`;
   Takeshi`"What'll ya do! Give me that syringe, You!"`;

});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6T097)`"Aagh!"`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `Reaching out quickly, I latched onto You's arm.`;
   Takeshi`"Tsugumi, hold her down!"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T098)`"Roger."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi forced You to sit on the bed, and 
held her so that she couldn't move.`;
   You(T6T099)`"Hey...*cough* what are you doing! Ouch!"`;
   Takeshi`"Stop complaining!"`;
   `I grabbed onto You's arm, and stuck the 
needle in it.`;
   You(T6T100)`"Hey! Where do you think you're sticking that!"`;
   You(T6T101)`"You've got it all wrong! Not there! Aaaa, 
stop mangling me!"`;
   You(T6T102)`"Ow! Ouch! Stop! Go more slowly!"`;
   Takeshi`"Well stop squirming around so much!"`;
   You(T6T103)`"The angle's all wrong!"`;
   You(T6T104)`"You're going to get air bubbles in it!"`;
   Takeshi`"Stop complaining! You can't do it yourself!"`;
   You(T6T105)`"You suck!"`;
   Takeshi`"Shut up!"`;
   You(T6T106)`"Stop iiiit! Lemmee goooo! I'm dyyyinnnng! 
Oooooowwwch!"`;
   Takeshi`"You idiot! We're giving you this so you WON'T 
die!"`;
   Tsugumi(T6T107)`"*Sigh...*"`;
   `Tsugumi slumped her shoulders.`;
   `You was throwing a tantrum like a spoiled 
child.`;
   `Small droplets of red stained the bed's white 
sheets.`;
   `..............`;
   `.........`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `After that You got scanned on the L-MRI. As 
suspected had come down with TB.`;
   `We didn't have room to mess around anymore.`;
   `In the end You wouldn't let me do it, so she 
ended up giving herself the shot.`;
   `Complaining the whole time, with tears in her 
eyes...`;

});
hideTextbox();
stopBGM();
delay({ interval: 60 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`17:36`);
showTextbox();
text(() => {
   Takeshi`"I'm not sure how long our condition will 
hold with just one shot..."`;
   Takeshi`"Hey, You? Do you think we can do anything 
after it stops working?"`;
   You`"........."`;
   `She was sitting at the computer terminal, 
silently typing on the keyboard.`;
   Takeshi`"You, tell me what we can expect?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L102)`"Don't talk to me, I can't concentrate."`;
   Takeshi`"Alright, alright."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L103)`"I'm trying my best..."`;
   You(T6L104)`"But someone has put a lock on the 
communications protocol, and we can't make 
contact with the surface."`;
   You(T6L105)`"But, every once in a while, I've found some 
communication data that crosses through."`;
   You(T6L106)`"If I can release that lock, or...well 
anyway, we just might be able to get through 
somehow."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6L107)`"At least it is better than LeMU, where we 
had no way of making contact."`;
   Takeshi`"Alright, show me what you got, genius!"`;
   You(T6L108)`"Okay..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I left You for a while, and went to look at 
the monitor attached to the capsule pod.`;
   `Tsugumi came over to stand next to me and 
looked at the monitor.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L109)`"How is Coco doing?"`;
   Takeshi`"She's in 'serious but stable' condition."`;
   Tsugumi(T6L110)`"Really..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `According to the monitor, it would be four 
hours before Coco could leave the pod.`;
   `The pod was full of high-pressure oxygen.`;
   `We couldn't take Coco out of there until the 
time had come.`;
   `The Kid snored next to Coco's pod, frowning 
slightly`;
   `I couldn't say that his condition looked good.`;
   `I could only pray that he would hang on a 
little longer.`;

});
removeBG({ mode: BLACK, transition: 2 });
playBGM({ num: 24, volume: 100 });
delay({ interval: 60 });
showTextbox();
text(() => {
   `............`;
   `................................`;
   `For a little while after that, my attention 
wandered.`;
   `I don't know how much time passed.`;
   `I was not sure whether things were real or a 
dream.`;
   `Was I alive?`;
   `Was I dead?`;
   `I didn't know.`;
   `I slept like I was dead.`;
   `Was I dead?`;
   `Was I sleeping?`;
   `Which was it?`;
   `And where was the me that was thinking about 
everything?`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   You(T6L111)`"If we just had a little more time..."`;
   You(T6L112)`"I could have gotten at the data..."`;
   You(T6L113)`"The terminal in the Security Office..."`;
   You(T6L114)`"We even figured out that final password..."`;
   You(T6L115)`"Hey, if it's from HIMMEL..."`;
   You(T6L116)`"We could copy it to a terabyte disk..."`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `That's right...`;
   `Just a little more...`;
   `Just have to stay alive for a little bit 
more...`;
   `........................`;
   `......`;

});
hideTextbox();
delay({ interval: 60 });
bgload({ name: `BG34A1`, transition: 0 });
clock(`21:15`);
showTextbox();
text(() => {
   `I woke from my stupor.`;
   `A stale cold feeling...`;
   `I realized I had been sleeping sprawled on the 
floor.`;
   `I slowly raised my body.`;
   `I tried opening and closing my fists.`;
   `Strange.`;
   `The movement left me with an uncomfortable 
sensation, like it wasn't my own.`;
   `I shook my head.`;
   `I tried slapping my cheek.`;
   `I breathed in the cold air and breathed out.  `;
   `Strange...`;
   `The inside of my head stayed dull and murky.`;
   `I dragged myself to consciousness, forcefully 
reeling myself back to clarity.`;
   `Putting my hands on the floor, I pulled up my 
heavy, aching body.`;
   `My feet faltered.`;
   `But somehow I managed to stand.`;
   `I looked around the infirmary.`;
   `I saw several used syringes scattered on the 
floor.`;
   `The Kid was still slumped against Coco's pod. `;
   `He looked disturbingly bad, just completely 
out of it.`;
   `Tsugumi was nowhere to be seen.`;
   `I wonder where she had gone to...?`;
   `You was half slumped over the terminal 
console, snoring away.`;
   `She looked like she was in some pain and was 
perspiring in her sleep.`;
   `Her hand was pushed against the panel as if 
she had been in the middle of typing.`;
   `On the monitor, auto-repeated strands of 
letters were lined up without meaning.`;

});
hideTextbox();
showTextbox();
text(() => {
   //??
   Unk(VSE03_06)`"......! ......!"`;
   `What the...?`;
   `I heard a strange sound.`;
   `I re-inserted the voice converter into my ear.`;
   `...it wasn't a problem with the converter.`;

});
showTextbox();
text(() => {
   //??
   Unk(T6T222)`"Come in..."`;
   //??
   Unk(T6T223)`"IBF 3, please respond"`;
   //??
   Unk(T6T224)`"This is the emergency rescue team from the 
Maritime Defense Force."`;
   //??
   Unk(T6T225)`"We are under the direction of Insel null."`;
   `Was I actually hearing someone's voice over 
the speaker!?`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I hurried over to the terminal, and removed 
You's hands from it, taking over the control 
panel.`;
   Takeshi`"H-hello!"`;
   Takeshi`"This is the IBF infirmary... over!"`;
   //Mission Control
   Mission_Control(T6T226)`"IBF 3!? I repeat, this is the emergency 
rescue team from the Maritime Defense Force."`;
   //Mission Control
   Mission_Control(T6T227)`"Can you hear me?"`;
   Takeshi`"Yeah! Okay...loud and clear!"`;
   `I was somehow able to force out an answer.`;
   `Voices spilled out from the other end of the 
line.`;
   `'Hey, there are survivors down there!'`;
   `'I can't believe it!'`;
   `'That's amazing!'`;
   `That's what I wanted to say.`;
   `It seemed like You had been able to restore 
the communication lines...`;
   //Mission Control
   Mission_Control(T6T228)`"We're sending a rescue team immediately. Can 
you access the pool in IBF 3?"`;
   Takeshi`"Uh, yeah, it should be fine."`;
   //Mission Control
   Mission_Control(T6T229)`"Do you know how many survivors there are, 
and where they are located?"`;
   Takeshi`"In the examination room there are five...no 
six."`;
   //Mission Control
   Mission_Control(T6T230)`"Six. I copy."`;
   //Mission Control
   Mission_Control(T6T231)`"A rescue team is headed there in a private 
sector salvage vessel. When it arrives, 
I want you to follow its directions and 
get out of there."`;
   Takeshi`"How long 'till they get here?"`;
   //Mission Control
   Mission_Control(T6T232)`"They're going as fast as they can, but it'll 
take about an hour."`;
   `One hour...`;
   `(Coco should be able to get out of the pod by 
then.)`;
   `(I just hope we have that long...)`;
   //Mission Control
   Mission_Control(T6T233)`"But, if something goes wrong..."`;
   //Mission Control
   Mission_Control(T6T234)`"There should be a small deep-exploration 
submarine left in the research facility. I 
hate to make you do this, but I want you to 
escape to that area."`;
   Takeshi`"S-something goes wrong...? W-what do you 
mean...?"`;
   //Mission Control
   Mission_Control(T6T235)`"LeMU's partition strength threshold 
is already being exceeding."`;
   //Mission Control
   Mission_Control(T6T236)`"If one section implodes, there's the risk 
that another area could collapse and 
sinking could ensue."`;
   //Mission Control
   Mission_Control(T6T237)`"If that happens, we think there's a high 
possibility that heavy pieces could crash 
down on the research facility."`;
   Takeshi`"You don't say...?"`;
   //Mission Control
   Mission_Control(T6T238)`"Of course, we're doing everything we can to 
get to you before that happens."`;
   //Mission Control
   Mission_Control(T6T239)`"We're heading there, no matter what! 
So, please hang on a little longer!"
${noWait}`;
   Append`*Click* ...`;
   `The communications cut out suddenly.`;
   Takeshi`"Ah, hey! W-wait a sec!"`;
   `I hit the 'Call' button repeatedly, but there 
was no answer.`;
   Takeshi`"Damn it, we can't open up communications 
from this side..."`;
   `I didn't have any other choice.`;
   `I began reading through the manual on the 
side of communication terminal.`;
   `A mini-submersible for deep-sea exploration...`;
   `We hadn't found it when we'd searched the 
place...`;
   Takeshi`"Ah, here it is!"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Following the instructions, I used the control 
panel to call up information on the monitor.`;
   Takeshi`"It's a small electric submersible..."`;
   `The submarine was in a separate sealed 
sector attached to IBF.`;
   `The specifications said it was a 'neutral 
buoyancy' miniature-submarine, for saturation 
diving.`;
   `The important thing was, it could be brought 
over to the pool by remote control.`;
   Takeshi`"If things get dangerous, I guess they want 
us to board this."`;

});
hideTextbox();
playSFX({ name: `SE04_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I quickly went about setting up the remote 
control program, so that we could move the 
submarine at a moment's notice, if we had to.`;
   Takeshi`"Alright..."`;
   Takeshi`"All we have to do now is..."`;
   Takeshi`"Get Tsugumi and Sora over here..."`;
   `(Sora...)`;
   `(How are we going to get Sora here...)`;
   `I was overcome by unease.`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
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
   `——BOOOOOooooM!!!`;
   `Suddenly a low metallic crash reverberated 
throughout the installation.`;
   `The sound...seemed to come from above....`;

});
hideTextbox();
playBGM({ num: 10, volume: 100 });
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `An alarm sounded from the terminal, and the 
screen changed.`;
   `'Warning: LeMU hull breach : Flooding'`;
   Takeshi`"LeMU....!?"`;
   Takeshi`"This is bad..."`;
   Takeshi`"This means... Sora...and Tsugumi...!"`;

});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   `I ran out into the corridor.`;
   `It was only slight, but the floor was 
trembling.`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Takeshi`"Agh..."`;
   `I suddenly became dizzy again.`;

});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Losing my balance, I crashed into a wall.`;
   `My recovery wasn't complete yet.`;
   Takeshi`"I...still gotta go..."`;
   Takeshi`"I have to GO!!"`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `I took all of the strength I could muster and 
headed to the poolroom.`;

});
bgload({ name: `BG33A2`, transition: 20 });
fgload({ id: 1, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"T-Tsugumi You've been in here!? Thank god..."`;
   `Just as I headed through the watertight door, 
I met with Tsugumi.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L117)`"Takeshi...you're awake...?"`;
   `She looked at me strangely.`;
   Takeshi`"Yeah. Tsugumi, there's a rescue team on the 
way. They said it would take about an 
hour...I want you to wait for them in the 
examination room!"`;
   Tsugumi(T6L118)`"Rescue?"`;
   Takeshi`"They said they were from the Maritime Defense 
Force."`;
   Takeshi`"You was able to open up a communication line 
up to Insel null."`;
   Tsugumi(T6L119)`"To Insel null...?"`;
   Takeshi`"Tsugumi, are you okay?"`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L120)`"Yeah...that serum seems to be working. I'm 
fine."`;
   Takeshi`"Okay, then I want you to get back to the 
examination room right away. Everyone else is 
in bad shape. I want you to look after them."`;
   `And saying that I headed for the lift.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L121)`"W-wait, Takeshi! Where are you going!?"`;
   Takeshi`"Up. To LeMU."`;
   Takeshi`"We've still got an hour. I'm going to go get 
Sora!"`;

});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L122)`"W-wait! That's crazy!"`;
   `Tsugumi chased after me and grabbed onto my 
arm.`;
   Tsugumi(T6L123)`"How? Sora can't come down here from LeMU!"`;
   Takeshi`"I know...I've got to think of a way..."`;
   Takeshi`"No, wait..."`;
   Takeshi`"I already know what I've got to do!"`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6L124)`"Ah!!"`;

});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreen();
fgload({ id: 1, name: `TU09ADL`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I tore myself away from her grip and tossed 
her aside.`;
   Tsugumi(T6L125)`"Don't go!"`;
   Tsugumi(T6L126)`"Don't...don't leave me!"`;
   Tsugumi(T6L127)`"Don't leave me alone!!"`;
   `Tsugumi called out at me in a tearful voice, 
as she lay sprawled on the floor.`;
   `But I didn't turn back.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `As soon as the door opened, I flew into the 
lift.`;
   `The elevator headed up.`;
   Announcement(T6L128)`"Depth 270 feet..."`;
   Announcement(T6L129)`"Depth 240 feet..."`;
   Announcement(T6L130)`"Depth 210 feet..."`;
   `Upwards...`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `The elevator stopped.`;
   `Forcing open the door, I slipped into the 
pressurization chamber.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   `The entrance had closed automatically.`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I pressed on the intercom button repeatedly.`;
   Takeshi`"Sora! Soraaa!"`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Sora(T6L131)`"Ta-Takeshi!? What are you...?"`;
   Takeshi`"Hey! It's been a while!"`;
   `I realized how much I had missed that voice.`;
   `I waved to Sora as she appeared outside the 
window.`;
   Sora(T6L132)`"Wh-what are you doing here!"`;
   Takeshi`"Well, it's obvious isn't it? I came back."`;
   Sora`"......"`;
   Takeshi`"What's the damage?"`;
   Sora(T6L133)`"There's flooding in Zweite stock."`;
   `Sora explained the situation diligently.`;
   Sora(T6L134)`"The warehouse area has been breached, and 
cracks are beginning to form in the elevator 
shaft. The situation is serious."`;
   Sora(T6L135)`"There is over six inches of flooding in 
almost all of the corridors."`;
   Takeshi`"That's pretty bad..."`;
   Sora`"........."`;
   Takeshi`"What about Dritte stock?"`;
   Sora(T6L136)`"Water is coming in from the upper floors via 
ducts."`;
   Takeshi`"Are you able to drain it okay?"`;
   Sora(T6L137)`"Yes, I'm doing the best I can..."`;
   Sora(T6L138)`"But flooding is only a matter of time."`;
   Takeshi`"Well, don't worry about it, I'll be right 
back."`;
   Sora(T6L139)`"No!"`;
   `Sora's eyes flashed from the other side of the 
glass.`;
   Sora(T6L140)`"Let's decompress the chamber, and follow the 
proper entrance protocol."`;
   Takeshi`"Decompression? Are you telling me to just 
wait here?"`;
   Sora(T6L141)`"Yes. It is a rule. If you won't...I'm going 
to have to ask you to go back to IBF."`;
   Takeshi`"How long will it take?"`;
   Sora(T6L142)`"I will complete it as soon as possible."`;
   Takeshi`"I need to know how much time!"`;
   Sora(T6L143)`"If I hurry...12 hours."`;
   Takeshi`"Tw-twelve hours!? We don't have that long!"`;
   Sora(T6L144)`"If we don't dissolve the nitrogen in your 
blood, you will get decompression sickness."`;
   Takeshi`"I don't care! Open that door now!"`;
   Sora(T6L145)`"I can't do that...!"`;
   Takeshi`"Just open it now, please!"`;
   Sora(T6L146)`"Why!?"`;
   Sora(T6L147)`"If we open that door now, due to the rapid 
decompression, the nitrogen in your 
bloodstream will form bubbles, causing blood 
clots, and in the worst case..."`;
   Takeshi`"I don't care, you get that door OPEN NOW!!!"`;

});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I found an emergency escape lever inside the 
chamber and I pulled on it.`;

});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `I kicked the door.`;

});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
removeBG({ mode: WHITE, transition: 3 });
playSFX({ name: `SE07_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `——KABOooM!!!`;
   `There was a horrible noise, as though all the 
air inside had exploded.`;
   `My body was thrown from the room, along with 
the high-pressure gas that had been built up 
inside.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playSFX({ name: `SE10_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I was tossed like a piece of confetti, 
sliding and rolling along the floor all the 
way to the Control Room.`;
   `My body crashed heavily against the wall.`;

});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   Takeshi`"Gaagh!"`;
   Takeshi`"...eeeaaAAAAGGHH"`;
   Takeshi`"WAAAAaaaah......"`;
   `Pain wracked my body.`;
   `And it wasn't because I had smacked into a 
wall.`;
   `Although I kept spewing out my breath, 
it felt like air kept bubbling up in my lungs.`;
   `Then came a terrible exhaustion.`;
   `My body felt like it was expanding.`;
   `My eyes felt swollen and painful.`;
   `The muscles in my limbs began to jerk and 
spasm.`;
   `Numbness. Pain. Headache.`;
   `I felt like I had no room to move.`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"*Urgh*....*uurrgh*..."`;
   `According to astronomers, humans can live for 
a short period of time even if they are 
thrown out of a spaceship into space.`;
   `But fish brought quickly up from the sea 
depths to sea level die instantly, because 
the pressure difference causes their organs 
to burst.`;
   `So was I an astronaut, or...`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L148)`"Takeshi, your voice converter!!"`;

});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
showTextbox();
text(() => {
   `I felt a splitting pain deep in both ears.`;
   `Repelled by my eardrums, the voice converter 
flew out of my ears.`;
   `I hurriedly, held both ears with the palms of 
my hands and knocked them, as though trying 
to drain water from them.`;
   Sora(T6L149)`"......! .........!"`;
   `I couldn't hear what Sora was screaming.`;
   `All I could do was lie on the floor, trying 
to suck in air.`;
   `Like a fish that had been pulled out of the 
water...`;
   `A few minutes passed...`;
   `.........`;

});
hideTextbox();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `The earphones that I had been wearing had 
broken in half.`;
   `I got up weakly.`;

});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   `I saw some extra voice converters on the edge 
of the console.`;
   `I crammed them forcefully into my ears.`;

});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L150)`"Takeshi...!!"`;
   `Sora ran over to me with a painful expression 
on her face.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She tried to wrap her arms around me. `;
   `Even though she couldn't touch me, she was 
trying to help me up.`;
   Takeshi`"Okay, okay. I'm still alive."`;
   `I stuck out my hand to the console, stood up 
and smiled for her.`;
   Sora(T6L151)`"Takeshi...!!"`;
   `I could hear Sora's voice.`;
   `It seemed that my eardrums hadn't burst...`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L152)`"Why...! Why did you come here!"`;
   `She wiped away tears and her expression 
darkened.`;
   Sora(T6L153)`"Go back to IBF this instant! It's too 
dangerous here!"`;
   `And although she was crying, her face 
reddened with anger.`;
   Takeshi`"I'm not going back."`;
   Takeshi`"I came here knowing how dangerous it would 
be."`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L154)`"No, go back! Please!"`;

});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L155)`"I can't believe...that you would do this."`;

});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L156)`"Run away...please, just go back."`;

});
fgload({ id: 1, name: `SO17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L157)`"Flooding, I, go back, Takeshi, please, If I 
don't save, danger..."`;
   Takeshi`"Calm down. Calm down Sora..."`;
   Takeshi`"You're totally incoherent."`;
   `I held up my hand as I spoke, hoping to calm 
her down.`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   `But I couldn't stop her anger.`;
   `Her lips pursed, she glared at me slightly.`;
   Takeshi`"Do you know why I'm here?"`;

});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L158)`"Yes..."`;
   Sora(T6L159)`"I, no, I don't know..."`;
   Sora(T6L160)`"Even if I know, I can't accept it."`;
   `She seemed sad and angry at the same time.`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L161)`"Am...I contradicting myself?"`;
   Takeshi`"No, I think it's pretty much common sense."`;
   Takeshi`"But, in other words, I..."`;
   Takeshi`"I came up from IBF BECAUSE LeMU is dangerous."`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L162)`"You know that it is 'dangerous,' so why..."`;

});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L163)`"Why won't you listen to me!?"`;
   Sora(T6L164)`"Will you please go back to IBF?"`;
   Takeshi`"I know I should listen to you, but I can't."`;
   Takeshi`"I knew that LeMU was dangerous so I couldn't 
just stay there at IBF, where it is safe."`;
   Takeshi`"I wonder if that's strange? You think so?"`;

});
fgload({ id: 1, name: `SO14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L165)`"It is strange, and it is self-contradictory."`;

});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L166)`"Because, because, if you stay here...Takeshi, 
you'll..."`;
   Sora(T6L167)`"You may die..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L168)`"Agh..."`;
   `Her shoulders started shaking and she started 
to cry.`;
   Takeshi`"I keep telling you not to rush to 
conclusions, Sora."`;
   Takeshi`"I came here to get you."`;
   Takeshi`"I know a way to help you."`;
   Takeshi`"Well, I'm not sure about it yet, but..."`;
   Takeshi`"If I've got a little time, I can get you to 
IBF with me..."`;

});
hideTextbox();
playSFX({ name: `SE06_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Grrrrooooaaan...`;
   `As I if it were responding to my words, the 
floor started to shake. `;

});
playSFX({ name: `SE03_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Beep, beep...`;
   `And soon an alarm rang from the HIMMEL console.`;
   Takeshi`"What was that sound?"`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L169)`"Ah..."`;
   Takeshi`"Sora...tell me what is was?"`;

});
fgload({ id: 1, name: `SO17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L170)`"Ah, ah, um..."`;
   Sora`"......"`;
   `Sora's gaze wandered and she spoke to me with 
a pained expression.`;

});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L171)`"The elevator leading to IBF was destroyed 
with that tremor."`;
   `The elevator...?`;
   `Was destroyed...?`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L172)`"It is no longer working..."`;
   `Holding back tears, she gazed down at her feet.`;
   Takeshi`"Eh!? Ah, uh, you...don't say..."`;
   `Trying to keep my calm, I responded to her.`;

});
if (g_tsugumi_gd_cleared == 0) goto(lbl_0000104f);
showTextbox();
text(() => {
   `The ruin of LeMU was happening faster than I 
had expected.`;
   `(It shouldn't have been this way.)`;
   `(We should have had more time than this...)`;

});
let lbl_0000104f;
showTextbox();
text(() => {
   `I was pretending to be cool...`;
   `But I was actually in trouble.`;

});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `(This is bad...)`;
   `I couldn't put on an act.`;
   `If we couldn't go down to IBF...`;
   `Our escape route was really gone.`;
   Takeshi`"Uh...well..."`;
   Takeshi`"Well, that throws a bit of a wrench in our 
plans...but, hey, that's okay, right?"`;
   `I laughed sheepishly and scratched the tip of 
my nose.`;
   `There really wasn't anything to do but to 
laugh.`;

});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L173)`"It's certainly not all right!"`;
   Sora(T6L174)`"Not all right at all...!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I sprang to the HIMMEL console, checking once 
more the damage shown there.`;
   `The IBF elevator wasn't moving due to a break 
in the shaft.`;
   `Thankfully, no one was in the elevator when 
the accident happened.`;
   `It seemed that in the IBF case, we had 
escaped damage again...`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Sora(T6L175)`"Haaaa....."`;
   `She let out a deep, deep sigh.`;
   `Sora stopped crying.`;
   `Suddenly tightening her expression, she stood 
at attention.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L176)`"It's come to this..."`;
   Sora(T6L177)`"In any case, I'll think of a way to help 
Takeshi get out."`;
   Sora(T6L178)`"That is my duty..."`;
   `She had an unassailably earnest expression.`;
   `She stared directly into my eyes.`;
   Takeshi`"Duty..."`;
   `I tried repeating it in my own mouth.`;
   Takeshi`"Hey, is that really your only reason?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L179)`"Yes."`;
   `She nodded calmly.`;
   Sora(T6L180)`"I will definitely get you to the ground 
level."`;
   Sora(T6L181)`"It's the function that was given to me, it 
is my task."`;
   Sora(T6L182)`"Because I'm..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L183)`"I'm...Sora Akanegasaki, Artificial 
Intelligence of LeMMIH's System."`;
   `She threw off all emotion as she said it.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
bgload({ name: `IMG01B`, transition: 20 });
playBGM({ num: 14, volume: 100 });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   `This was Sora's proposed escape plan.`;
   Sora(T6L184)`"There is a huge cylinder that cuts through 
LeMU."`;
   Sora(T6L185)`"The elevator shaft that rises in the middle 
of that..."`;
   Sora(T6L186)`"If you can get through this, you can emerge 
on the surface of the sea."`;
   Takeshi`"What are you talking about...?"`;
   Takeshi`"Didn't the central elevator get sunk in the 
first flood?"`;
   Sora(T6L187)`"Yes."`;
   Sora(T6L188)`"But the tube itself is thankfully still fine."`;
   Sora(T6L189)`"The ocean water only came through the cracks 
in another area..."`;
   Takeshi`"Really? Still...even so..."`;
   Takeshi`"That tube is 103 feet high."`;
   Takeshi`"That huge pipe is completely full of 
pressurized sea water!"`;
   Takeshi`"You're not telling me to swim through that?"`;
   Sora(T6L190)`"No, not that."`;
   Sora(T6L191)`"We'll first drain the water filling the pipe."`;
   Takeshi`"Drain it? ...How?"`;
   Sora(T6L192)`"First, we close off all the flood hatches 
around the tube, so that no water can get in."`;
   Sora(T6L193)`"After we take care of that, we open the 
doors on the lowest part of the tube and let 
all the water that has built up inside flow 
over to Dritte stock."`;

});
bgload({ name: `MAP05A`, transition: 10 });
delay({ interval: 120 });
bgload({ name: `MAP05B`, transition: 10 });
showTextbox();
text(() => {
   Takeshi`"Okay. Let's say something like that were 
possible ? "`;
   Takeshi`"How could I climb up that ridiculously high 
tube?"`;
   Takeshi`"There's no ladders or anything in that tube, 
is there?"`;
   Sora(T6L194)`"It is as you say."`;
   Sora(T6L195)`"That is why I said we would drain it 'first'."`;
   Takeshi`"?"`;
   Sora(T6L196)`"After the drainage has completely finished, 
we open door A."`;
   Sora(T6L197)`"At that point, you will go to Zweite stock's 
elevator tube."`;
   Sora(T6L198)`"If you do that, as the water level rises, 
you will just float right up to Insel null."`;

});
bgload({ name: `MAP05C`, transition: 10 });
delay({ interval: 120 });
bgload({ name: `MAP05D`, transition: 10 });
showTextbox();
text(() => {
   Sora(T6L199)`"At first, all the water pressure will make 
the level of the water swell up violently, 
but as you approach sea level, it will slow 
down."`;
   Takeshi`"Hey, Sora?  Can we go back to our first 
conversation?"`;
   Sora(T6L200)`"Yes, certainly."`;
   Takeshi`"You said before that we would move the water 
to Dritte stock."`;
   Takeshi`"So you mean, in other words, that we would 
entirely flood Dritte stock?"`;
   Sora(T6L201)`"Yes."`;
   Takeshi`"What do you mean, yes?"`;
   Takeshi`"If we flood Dritte stock, the HIMMEL 
computer room will be flooded too."`;
   Sora(T6L202)`"Yes."`;
   Sora(T6L203)`"But you don't need to worry about me."`;
   Sora(T6L204)`"My brain is in Insel null."`;
   Sora(T6L205)`"So even if all the computers inside LeMU go 
down, it won't extinguish me."`;

});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   Takeshi`"Oh, I see..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L206)`"Do you need me to explain this plan again to 
you?"`;
   Takeshi`"No, I've got it. It's okay."`;
   Takeshi`"The water rises up the elevator tube. I just 
zoom up and out with it, and I escape."`;
   Takeshi`"Is that right?"`;
   Sora(T6L207)`"That is right."`;
   `I understood the proposal.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `I understood it, but...`;

});
hideTextbox();
playBGM({ num: 21, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"No!"`;
   Takeshi`"If HIMMEL floods, what happens to you?"`;
   Takeshi`"Your memory, your recollections...aren't 
they all here?"`;
   Takeshi`"They'll all be drowned!"`;
   `I pointed at the computers lined up next to 
the console.`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`".........."`;
   `She looked down and didn't answer.`;
   Takeshi`"No, no..."`;
   Takeshi`"No way am I going to let you take this kind 
of 'suicidal' act, Sora!"`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: WHITE, transition: 62 });
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Sizzle!`;
   Takeshi`"Owww...ow...ow!!"`;
   `Suddenly a searing, burning pain hit my eyes.`;
   `I covered my eyes frantically.`;

});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   Takeshi`"What in the hell was that!?"`;
   `Fearfully, I pulled away my hands and opened 
my eyes.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L208)`"Takeshi..."`;
   Sora(T6L209)`"We don't have any more time. Please, do as I 
say."`;
   `She said this without emotion.`;
   `Furrowing her eyebrows, Sora glared at me.`;
   Sora(T6L210)`"I fiddled around a bit with the RSD laser 
levels..."`;
   Sora(T6L211)`"And so I seared your eye..."`;
   Takeshi`"Wha, what!?!"`;
   Sora(T6L212)`"Actually, it's not something I should be 
able to do..."`;
   Sora(T6L213)`"But right now I just did it somehow. It's 
like the limiter has been turned off..."`;
   `She stared at me.`;
   `It was a gaze that sent chills down my spine.`;
   Takeshi`"Hey...hey, come on, now."`;
   Takeshi`"Are you threatening me, Sora?"`;

});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L214)`"Hurry...hurry and do as I say!"`;
   Sora(T6L215)`"Takeshi..."`;
   Sora(T6L216)`"If I make even a tiny mistake with the laser 
levels, next time I really might hurt your 
eyes."`;
   Takeshi`"......"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L217)`"Do you think that I am lying?"`;
   Sora(T6L218)`"I am serious."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `And thus Sora's plan became reality.`;
   Sora(T6L219)`"Takeshi, you will go to the predetermined 
place in Zweite stock and wait there."`;
   Sora(T6L220)`"I'll let you know the timing of when to get 
into the tube."`;
   Sora(T6L221)`"Until then...I'll stay at HIMMEL and keep 
watch on LeMU."`;
   Sora(T6L222)`"I'll control the drainage duct and try to 
stop the fall...I'll try to keep the whole 
place going for as long as I can, even a 
minute, no, even a second longer. So - "`;
   Sora(T6L223)`"Please, Takeshi. You have to get out alive - 
please promise me."`;
   Takeshi`"I promise."`;

});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I left HIMMEL and looked upstairs.  `;
   `I checked my PDA display.`;

});
hideTextbox();
bgload({ name: `MAP2F_B2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 0 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   `It showed a map of LeMU and my escape 
route......`;
   `Just a little bit ago, I had installed a 
data-linking program from HIMMEL's console 
that linked my PDA to LeMU's center. `;
   `Sora had prepared it for me.`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_B2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `At this point...`;
   `I had to just do it.`;
   `It was a gamble.`;

});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   `I reached Zweite stock's second floor.`;
   `The hallway was flooded just like the third 
floor.`;
   Takeshi`"Sora, I've come to the second floor. What 
should I do?"`;
   Sora(T6L224)`"Got it, Takeshi. I've checked your current 
location and your direction."`;
   `I couldn't see her, but I could hear her 
voice in my ear.`;
   Sora(T6L225)`"Please wait there for a minute. I'm going to 
re-close the flood hatches to the central 
area."`;
   Takeshi`"Ok."`;

});
hideTextbox();
playSFX({ name: `SE00_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bang, bang, bang...`;
   `A hollow sound echoed through the building.`;

});
playSFX({ name: `SE00_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Presumably she had blocked off the flood 
hatches in the flooded area.`;
   Sora(T6L226)`"I've finished closing the hatches. The Zweite 
elevator tube is sealed..."`;
   Sora(T6L227)`"Now then, please go into the Dolphin 
Carousel room and wait for your next 
instructions.  Do you know where it is?"`;
   Takeshi`"Yeah, I know the Dolphin Carousel reeeeaaally 
well."`;
   Takeshi`"That's where you and I rode dolphins 
together."`;
   Takeshi`"That's where you showed me the art of my 
other self..."`;
   Sora`"........."`;
   Sora(T6L228)`"Please hurry, Takeshi."`;
   Sora(T6L229)`"Go straight down that hall and turn left at 
the end. If you can't figure it out, check 
your PDA map."`;
   Takeshi`"No, I'll be all right."`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   `Defying Sora's directions, I turned left down 
at a nearby corner and headed toward a certain 
corridor.`;
   Sora(T6L230)`"What are you doing!? It's not that way!!"`;
   Takeshi`"Sorry Sora, I remembered that I had forgotten 
something."`;
   Sora(T6L231)`"There's no time! Please stick to the plan!"`;
   `Sora's voice grew shrill.`;
   Takeshi`"It will only take a minute. It won't make a 
difference."`;
   Sora(T6L232)`"No! We only have...not even ten minutes left!"`;
   Takeshi`"I can do this in ten minutes."`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `I slid into the Security Office.`;
   `Phew...`;
   `It hadn't flooded yet in there and the 
machines were still going.`;
   `I looked at the terminal monitor.`;
   `The window that was open showed a message 
confirming the last entered password.`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I hit enter.`;

});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `"Willkommener LeMMIH Login : T.Y"`;
   `The manager-exclusive maintenance mode was in 
operation.`;
   `In other words, we had cleared all of LeMMIH's 
security.`;
   `'The terminal in the Security Office...'`;
   `'I finally figured out the password...'`;
   `You's voice, which I had heard through my 
stupor, had been right.`;
   `You...had made it in the nick of time...`;
   Takeshi`"Next time I see her, I'm buying her a 
fantastic dinner."`;
   `Alone, I began quickly searching for a way to 
back up the data.`;
   `I wondered what should I do......`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I opened a menu on the monitor.`;
   `I didn't know how to work it.`;
   `And I would need a disk to copy the data...`;
   Sora(T6L233)`"Takeshi!!"`;
   Takeshi`"Whoah!"`;
   `All of a sudden Sora's voice thundered right 
in my ear.`;
   Sora(T6L234)`"What are you doing!? Hurry, hurry!"`;
   Takeshi`"I know!"`;
   Sora(T6L235)`"Seven minutes left!"`;
   Takeshi`"...Damn."`;
   `It was no good. I couldn't figure it out.`;
   `Giving up, I left the room.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_01`, a1: 1, volume: 95 });
waitForSFX();
playSFX({ name: `SE00_05`, a1: 0, volume: 90 });
bgload({ name: `BG26A1R`, transition: 20 });
showTextbox();
text(() => {
   `The corridor outside the room had been 
drained and the flood hatches had been closed 
again.`;
   Sora(T6L236)`"Please, don't make any detours..."`;
   `She spoke in a troubled, exhausted voice.`;
   Takeshi`"...Alright..."`;

});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `I turned around to see that the corridor on 
the other side was open.`;
   Takeshi`"This way?"`;
   Sora(T6L237)`"Yes. Six minutes left. Take the corridor and 
get to the right position."`;
   Takeshi`"......"`;
   `All the side routes were closed off.`;
   `I'd have to head toward the Dolphin Carousel.`;

});
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   `............`;

});
bgload({ name: `BG02A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Look, Sora, I'm here."`;
   `I spoke with bitterness in my voice.`;
   Sora(T6L238)`"Understood and confirmed. Now then -"`;
   Sora(T6L239)`"I'm going to drain the water from the 
central area into Dritte."`;
   `No.`;
   `I didn't make it in time...`;
   Sora(T6L240)`"Five minutes until the tube is operational. 
Please be ready to move at any time."`;
   `Sora spoke coldly, still invisible.`;
   `I was in front of the dolphins.`;
   `The dolphins had been so pleasant and smiling 
before...now, they were hateful.`;
   Takeshi`"Sora..."`;
   Takeshi`"Sora, won't you come over here?"`;
   Takeshi`"You like dolphins, right?"`;
   Sora(T6L241)`"I can't. If I don't...concentrate...I might 
make a mistake."`;
   Takeshi`"Don't say that, come on..."`;
   Takeshi`"Don't you want to ride the dolphins again 
together, one last time?"`;
   Sora(T6L242)`"Please don't speak to me, you'll distract me."`;
   Takeshi`"........."`;
   Sora`"..............."`;
   Takeshi`"....................."`;
   Sora(T6L243)`"Even after Dritte stock is flooded, HIMMEL 
should be all right for a little while."`;
   Sora(T6L244)`"I'll make sure that we definitely - no, 
absolutely - hang on until you make it to the 
top."`;
   Takeshi`".................."`;
   Sora`".................."`;
   Takeshi`"............"`;
   Sora(T6L245)`"It's nearly time...to part..."`;
   `So this was it.`;
   `Was there no way I could save Sora?`;
   `The five minutes passed quickly, mercilessly.`;
   `............................................`;
   `................................`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   `I closed my eyes.`;
   `Plugged my ears.`;
   `I didn't want to see anything else.`;
   `I didn't want to hear anything else.`;
   `If I couldn't save her......`;
   `It would have been better for us to throw our 
bodies from a cliff.`;
   `.............................................`;
   Sora(T6L246)`"Takeshi ? "`;
   Sora(T6L247)`"I'm sorry, Takeshi..."`;
   `What...?`;
   `Even with my eyes closed, she was definitely 
there.`;
   `I was hearing her voice from inside my ears.`;

});
bgload({ name: `BG02A1`, transition: 20 });
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"What's the matter, Sora? The five minutes 
should be up."`;
   Sora(T6L248)`"Well, you see, actually..."`;
   `Through the voice converter I could hear 
Sora's troubled voice.`;
   Sora(T6L249)`"The door won't open."`;
   Takeshi`"What?"`;
   Sora(T6L250)`"The central area's flood hatches aren't 
receiving the 'open' signal. Something's been 
disconnected."`;
   Takeshi`"Disconnected!?"`;
   Sora(T6L251)`"Yes. But I've found the damaged section."`;
   Sora(T6L252)`"I'm so sorry...but Takeshi, will you go fix 
it?"`;
   Takeshi`"Of...of course. No problem!"`;
   `Heaven, fate.........they were on my side.`;
   `They had not abandoned me. `;

});
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   `I ran out of the room.`;
   `Sora opened the doors blocking my way.`;

});
hideTextbox();
playSFX({ name: `SE00_03`, a1: 0, volume: 100 });
delay({ interval: 30 });
bgload({ name: `BG25A3`, transition: 10 });
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Where's the disconnection?"`;
   Sora(T6L253)`"Dritte stock, near the Control Room."`;
   Takeshi`"Alright. I'll go right there!"`;

});
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `Down, down.`;
   `Run, run, run.`;
   `In reality, my body was probably wracked with 
decompression sickness, and riddled with TB...`;
   `But it wasn't something I was aware of.`;
   `More importantly I had to move, faster, 
faster......`;
   `Hurry there!`;
   `Falling again and again, covered in bruises, 
slipping down the stairs, I headed for the 
third floor.`;

});
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"I'm here, Sora!"`;
   Sora(T6L254)`"Thank you..."`;
   `Her voice resonated gently in my ear.`;
   Takeshi`"Now then, where's the place?"`;
   Takeshi`"Hey wait, what about tools? Can I fix it 
with just my hands?"`;
   Sora(T6L255)`"There are some simple tools in the Control 
Room. The main repair room is under the floor 
of the hallway you are in."`;
   Takeshi`"Under the floor?"`;
   Sora(T6L256)`"In any case, let's hurry."`;
   Sora(T6L257)`"I'm going to apply pressure and blast out 
the floor panel. For now, hide in the Control 
Room."`;
   Takeshi`"What??"`;

});
playSFX({ name: `SE07_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Sora(T6L258)`"5, 4, 3..."`;
   Takeshi`"Hey!  Wa, wait!!"`;
   Sora(T6L259)`"2, 1..."`;

});
removeBG({ mode: BLACK, transition: 3 });
playSFX({ name: `SE07_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Booom!!!!`;

});
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   `I wrenched open the Control Room door and 
sprang inside in the nick of time.`;
   `As I flew through the air, a blue-white light 
beamed through the entire corridor behind me.`;
   `One second later and I would have been fried...`;
   Takeshi`"Soraaaaaaaaaaaaaaaaa!!!!!"`;
   Takeshi`"What the hell!! You trying to kill me!?"`;
   Sora(T6L260)`"Ooooohhh! I—I'm sorry!!"`;
   `From the sound of her voice, I could picture 
just how flustered she was.`;
   Sora(T6L261)`"Sorrysorrysorrysorrysorry...."`;
   Sora(T6L262)`"Forgive me, forgive me..."`;
   Sora(T6L263)`"I'm so sorry, I just lost my wits..."`;
   `Her voice gradually grew smaller.`;
   Takeshi`"Okay...you don't have to feel so bad. I'm 
fine. You just scared the crap out of me, 
that's all."`;
   Takeshi`"I'm all right. I'm fine. Look, see, I'm 
alive and everything."`;
   Sora(T6L264)`"Al-alright..."`;
   Takeshi`"You can't kill me off that easy. I've still 
got things to do!"`;
   Sora(T6L265)`"Yes."`;
   Takeshi`"So you calm down, okay, Sora?"`;
   Sora(T6L266)`"Yes...I will."`;
   `I had to hurry. That much was clear.`;
   `But calmly, rationally, carefully.`;
   `I looked slowly around the room.`;
   `Next to the console there was a small 
toolbox. It held radio pincers, nippers, and 
a screwdriver.`;
   `I wondered if it would be enough.`;
   `I looked around a little more...`;
   `I caught sight of a polycarbonate disc in a 
square case.`;
   `I put it in my empty pocket.`;
   `Clutching the toolbox, I left the room.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
bgload({ name: `BG15B1`, transition: 20 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   Takeshi`"Sora, there's something wrong with the 
lights."`;
   Sora(T6L267)`"It does seem that way."`;
   Takeshi`"It seems.... What are you...?"`;
   Takeshi`"Hey! Damn, I'm back in the hall, but you 
aren't going to blast me again, are you?"`;
   `Suddenly remembering, I hopped around the 
corridor.`;
   Sora(T6L268)`"It's alright. I blocked the underground 
circuits to that section."`;
   Sora(T6L269)`"That's probably why the ceiling lights are 
acting strange."`;
   Takeshi`"Got it..."`;
   `I was relieved to hear that.`;
   Takeshi`"So, where do I need to fix?"`;
   Sora(T6L270)`"Nearby, there should be a place where the 
floorboards have come up. The blast succeeded 
at that."  `;
   Takeshi`"Which way? Which way from my perspective?"`;
   Sora(T6L271)`"I-I'm sorry. That's the thing..."`;
   Takeshi`"Sora? What's wrong?"`;
   Sora(T6L272)`"The bio sensor is down. I am unable to tell 
where you are. The camera isn't functioning, 
either."`;
   Takeshi`"Because you do crazy stuff like short out 
high-voltage..."`;
   Sora(T6L273)`"I'm sorry."`;
   `I heard her sigh.`;
   `I sighed along with her.`;
   Sora(T6L274)`"The place is 51 feet away from the door of 
the Control Room, to the left."`;
   Takeshi`"Alright. I'll find it myself. Don't worry."`;

});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   `I had room for one more sigh.`;
   `Surely I could find one stupid, lousy 
floorboard.`;

});
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I took the toolbox to the hole in the floor 
and crouched down.`;
   `Pushing aside the nearby water, I searched 
with my hand under the floor for wiring.`;
   `A cable about the size of a water pipe hose 
was attached to the connector.`;
   `The cable was twisted in places, and I could 
tell the connector was bent.`;
   `I cut it with my nippers, dug out the copper 
wire with my pliers, replaced the connector, 
and reattached the cable.`;
   Takeshi`"I think I fixed it. What do you think, Sora, 
will it go through?"`;
   Sora(T6L275)`"Yes, probably."`;
   Takeshi`"That's good."`;
   Sora(T6L276)`"Well, Takeshi?"`;
   Sora(T6L277)`"I'll begin operations for your escape. 
Please go back to Zweite stock."`;
   Takeshi`"Okay. Right away."`;
   Sora(T6L278)`"Yes...I'll be praying for your safety and a 
successful escape."`;

});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
stopBGM();
showTextbox();
text(() => {
   Sora`"..............."`;
   Sora(T6L279)`"......???"`;
   Sora(T6L280)`"Takeshi?"`;
   Sora(T6L281)`"Where are you, Takeshi!?"`;
   Sora(T6L282)`"I can't monitor you with the bio scan."`;
   Sora(T6L283)`"Where did you go from the corridor in Dritte 
stock?"`;
   Sora(T6L284)`"I can't see any trace of you on the emergency 
stairs."`;
   Sora(T6L285)`"Please tell me your location, Takeshi..."`;

});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   Takeshi`"I'm right here, Sora."`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L286)`"What...what are you doing here!?"`;
   `She looked thunderstruck.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Sora, you really need to learn more about 
hide-and-seek..."`;
   `I tried to say it lightly.`;
   Takeshi`"When we played kick the can, you hid in a 
place where you'd get found right away!"`;
   Sora(T6L287)`"What are you talking about?"`;
   Takeshi`"Even if you can't monitor me with the bio 
scan, you could just listen to the sounds."`;
   Takeshi`"That is, if you wanted to find out where I 
was, right?"`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"..............."`;
   Takeshi`"Well, you made it easy for me come back here 
without being discovered."`;
   Takeshi`"I didn't know what I'd do if you wouldn't 
let me in the room."`;

});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L288)`"S-stop fooling around!"`;
   `She yelled.`;
   Sora(T6L289)`"We've only got one shot at this escape plan! 
And LeMU is reaching its limit..."`;
   Takeshi`"We're way past its limits."`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L290)`".........Yes, that's right. Which is why -"`;
   Takeshi`"Do you really think I could leave you here?"`;
   Sora`"........."`;
   Takeshi`"Do you know why I came back here from IBF?"`;

});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L291)`"...But."`;
   `Hesitating, she turned her gaze away from me.`;
   Sora(T6L292)`"Please, go back to Zweite."`;
   Takeshi`"No."`;
   Takeshi`"Open all the flood gates in Dritte stock's 
passageways."`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L293)`"I can't."`;
   Sora(T6L294)`"Please go back to Zweite, quickly, Takeshi."`;
   Takeshi`"Just hurry up and open them!"`;
   Sora(T6L295)`"I can't. If I open the doors, Dritte stock 
will be completely flooded."`;
   Sora(T6L296)`"Everything outside of HIMMEL will be covered 
in seawater."`;
   Sora(T6L297)`"If I do that, you'll never again be able 
to..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"If you won't open them, I'll open them by 
hand."`;
   `I grabbed HIMMEL's console.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L298)`"Forget it. You can't control things from 
there."`;
   Takeshi`"That's a lie..."`;
   Takeshi`"You're lying."`;
   Sora`"............"`;
   Takeshi`"Right now LeMMIH is in system-administrator 
only maintenance mode."`;
   Takeshi`"From the big terminal you can control all of 
LeMU."`;
   Takeshi`"Sora Akanegasaki can't override the 
sys-admin's authority."`;
   `I wasn't sure, but I said it anyway.`;
   `This was a huge risk...`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I touched the panel and hit the keys.`;
   `I didn't know how to operate it, but 
something came up that looked about right.`;

});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6L299)`"Takeshi! Stop this, please!"`;
   `She glared at me.`;
   Sora(T6L300)`"If you don't hurry, The central area will 
collapse! You have to get out of here!"`;

});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `I selected the command to open all the flood 
hatches in the corridors, and hit enter.`;
   Sora(T6L301)`"Stop it! Don't move!!"`;
   Sora(T6L302)`"Takeshi, if you do any more...this time, I 
swear, I'll use this laser and burn your 
retinas off!"`;
   `I...`;
   `I covered both of my eyes with the palm of one 
hand...`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
l_choice = 0;
jump(`TL7A`);
