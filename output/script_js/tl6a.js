g_b0 = 5;
g_b1 = 6;
g_b2 = 6;
setDialogBoxColor(GREEN);
setSceneTitle({ index: 45 });
playBGM({ num: 19, volume: 100 });
bgload({ name: `BG35A1`, transition: 20 });
clock(`16:42`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We finished making our rounds.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid and Tsugumi went back to the 
examination room where Coco was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Trading places, You left the room, and 
Tsugumi took her place at the console, 
watching her vital signs.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and I talked in the corridor, about what 
course of action we should take.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Looks like we don't have any options..."`;
   waitForClick; clearText; marker; sound(`T6L000`); appendText; 
   You`"Yeah..."`;
   waitForClick; clearText; marker; sound(`T6L001`); appendText; 
   You`"So, what do you want to do?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do I...? Um, I'm thinking about it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L002`); appendText; 
   You`"Really..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You smiled slightly.`;
   waitForClick; clearText; marker; sound(`T6L003`); appendText; 
   You`"Takeshi, you know you're always the same."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's that supposed to mean?"`;
   waitForClick; clearText; marker; sound(`T6L004`); appendText; 
   You`"You never know when to quit.... Ahhh, I'm 
sorry, I didn't mean it in a bad way."`;
   waitForClick; clearText; marker; sound(`T6L005`); appendText; 
   You`"You always try to be positive... I just have 
to admire that."`;
   waitForClick; clearText; marker; sound(`T6L006`); appendText; 
   You`"I mean it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really? You think so?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wouldn't say I was positive, as I probably 
just don't notice the really dangerous things."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L007`); appendText; 
   You`"There you go again, joking around..."`;
   waitForClick; clearText; marker; sound(`T6L008`); appendText; 
   You`"You sure you're not doing it on purpose?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You puffed up a little.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nah, not at all. I'm too dumb for that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And because I'm not so smart, I've got to 
think really hard about everything."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But you know what? I think we're going to be 
okay. I mean, we got this far, didn't we?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You laughed in response to my earnest reply.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L009`); appendText; 
   You`"Yeah... I'm sure we'll be 'fine.'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sure... it's gonna be alright."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A sound roared in the distance. It was 
probably being transmitted through the water 
to IBF, where we were.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was it...the sound of the thermal vents?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if LeMU was still hanging in 
there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although the situation we were in didn't look 
great, there were still various options 
available to us.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey, You...it's about that old guy, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L010`); appendText; 
   You`"The researcher...? In the end we couldn't 
save him..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. But I was thinking, why was he the 
only one left here? Everyone else got out 
earlier, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, besides those guys that didn't make 
it..."`;
   waitForClick; clearText; marker; sound(`T6L011`); appendText; 
   You`"Yeah...I wonder."`;
   waitForClick; clearText; marker; sound(`T6L012`); appendText; 
   You`"I don't know..."`;
   waitForClick; clearText; marker; sound(`T6L013`); appendText; 
   You`"I don't know, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L014`); appendText; 
   You`"I'm sure some kind of circumstances kept him 
from escaping. And circumstances that kept him 
alive..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Circumstances?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L015`); appendText; 
   You`"Before he died, and everyone was off 
searching...I had the chance to talk with him 
some."`;
   waitForClick; clearText; marker; sound(`T6L016`); appendText; 
   You`"I tried to get him to stop, because he 
seemed like he was suffering, but...."`;
   waitForClick; clearText; marker; sound(`T6L017`); appendText; 
   You`"He said talking made him feel better, so..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I see.... Well, what did he talk about?"`;
   waitForClick; clearText; marker; sound(`T6L018`); appendText; 
   You`"Um......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L019`); appendText; 
   You`"He got TB, and wandered around IBF 
half-dead..."`;
   waitForClick; clearText; marker; sound(`T6L020`); appendText; 
   You`"But he was worried about LeMU the whole 
time..."`;
   waitForClick; clearText; marker; sound(`T6L021`); appendText; 
   You`"Before coming to IBF, he said that he'd been 
involved with the project to develop LeMU's 
system."`;
   waitForClick; clearText; marker; sound(`T6L022`); appendText; 
   You`"He was one of the staff that engineered 
LeMU's management software."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Meaning...that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L023`); appendText; 
   You`"HIMMEL, LeMMIH, and...Sora. Everything he 
left behind is here in LeMU."`;
   waitForClick; clearText; marker; sound(`T6L024`); appendText; 
   You`"For a programmer—"`;
   waitForClick; clearText; marker; sound(`T6L025`); appendText; 
   You`"The system here at LeMU was like his own 
child."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Meaning...he was worried about his 
'children?'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L026`); appendText; 
   You`"Yeah...that must have been it."`;
   waitForClick; clearText; marker; sound(`T6L027`); appendText; 
   You`"Worrying about his children is what helped 
him live a while longer."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG33A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Leaning against the wall we looked as waves 
calmly lapped in the pool.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L028`); appendText; 
   You`"Oh yeah. There was one other thing I heard 
from him that I was able to check up on."`;
   waitForClick; clearText; marker; sound(`T6L029`); appendText; 
   You`"I wasn't sure about it when I found it on the 
terminal in the Security Office..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L030`); appendText; 
   You`"Well, I had partially bypassed LeMMIH's 
security...and that's when I found it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So what is it already!?"`;
   waitForClick; clearText; marker; sound(`T6L031`); appendText; 
   You`"Sora's location..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L032`); appendText; 
   You`"Sora is...the Sora that we know, isn't in 
Insel null."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Eh?"`;
   waitForClick; clearText; marker; sound(`T6L033`); appendText; 
   You`"We know that LeMMIH's central processing 
unit - the main super computer - is on the 
floating island..."`;
   waitForClick; clearText; marker; sound(`T6L034`); appendText; 
   You`"It seems that everything that happens here 
on LeMU, is saved in LeMU's memory storage."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What??"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I mean...can you tell me that in simpler 
language?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So that someone, even dumb like me, can 
understand?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L035`); appendText; 
   You`"Okay..."`;
   waitForClick; clearText; marker; sound(`T6L036`); appendText; 
   You`"Leiblich Pharmaceutical keeps an original 
system program for 'Sora Akanegasaki.'"`;
   waitForClick; clearText; marker; sound(`T6L037`); appendText; 
   You`"So even if they lose the copy here at LeMU, 
it won't hurt them at all."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L038`); appendText; 
   You`"So basically...it is possible to make many 
different versions of the 'Sora' system."`;
   waitForClick; clearText; marker; sound(`T6L039`); appendText; 
   You`"Even the Sora here might just be a copy."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......."`;
   waitForClick; clearText; marker; appendText; 
   Narr`More than one Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Multiple copies...clones...present 
everywhere...that's what she meant.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L040`); appendText; 
   You`"But, think about it?"`;
   waitForClick; clearText; marker; sound(`T6L041`); appendText; 
   You`"Sora is Sora, right?"`;
   waitForClick; clearText; marker; sound(`T6L042`); appendText; 
   You`"There is only one 'Sora' that we know, right?"`;
   waitForClick; clearText; marker; sound(`T6L043`); appendText; 
   You`"So what's the only thing that separates the 
Sora we know, from other Soras?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Separates..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Separates...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Differences...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Truth...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora and the impostor...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L044`); appendText; 
   You`"Do you get it Takeshi?"`;
   waitForClick; clearText; marker; sound(`T6L045`); appendText; 
   You`"Memory."`;
   waitForClick; clearText; marker; sound(`T6L046`); appendText; 
   You`"The only thing that we and the Sora here 
share is..."`;
   waitForClick; clearText; marker; sound(`T6L047`); appendText; 
   You`"Memory. That's it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even if Sora was everywhere...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was only one Sora Akanegasaki that I 
knew.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Meaning..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora's memory is here at LeMU..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora...HIMMEL!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, then! That means—"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora's mind, and spirit are here in HIMMEL!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't hold back. You gave me a nod when 
I asked this question.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But if Dritte stock starts flooding..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L048`); appendText; 
   You`"Yeah..."`;
   waitForClick; clearText; marker; sound(`T6L049`); appendText; 
   You`"The Sora that we know is gone forever."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I kicked a dirty old bottle that was at my 
feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It landed in the pool and slowly sunk.`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We went back to the corridor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L050`); appendText; 
   You`"Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T6L051`); appendText; 
   You`"I'm sorry, I didn't mean to confuse you 
earlier..."`;
   waitForClick; clearText; marker; sound(`T6L052`); appendText; 
   You`"Saying that Sora might be in Insel null..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't worry about it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We know where she is now."`;
   waitForClick; clearText; marker; sound(`T6L053`); appendText; 
   You`"Yeah......"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even if we were able to get out of LeMU 
safely...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Sora up at Insel null wouldn't be the 
Sora that we knew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She would have the same thought processes, 
and look the same, but would be a different 
Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That Sora wouldn't be the one who loved 
flowerbeds, and who had made it rain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wouldn't be the Sora who looked at me from 
the other side of the glass window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Sora who...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who told a hopeless guy like me that she 
loved me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only place she existed...was here.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Hey Takeshi...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Why was I created?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`"What is the purpose of my being alive?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt strange and stopped suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L054`); appendText; 
   You`"Takeshi...what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You followed my gaze to the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She returned her gaze to me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not really sure, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"For some reason it's hard to breathe all of a 
sudden..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L055`); appendText; 
   You`"Takeshi...?"`;
   waitForClick; clearText; marker; sound(`T6L056`); appendText; 
   You`"Your nose is bleeding."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L057`); appendText; 
   You`"You've got a nose bleed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Eh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I quickly put my hand to my nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My upper lip was wet with something.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L058`); appendText; 
   You`"He-hey? Are you okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked worriedly at my face.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"F-fine, I'm fine..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up, and wiped under my nose, as I 
replied.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wasn't thinking anything sexual! 
Absolutely! Positively!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L059`); appendText; 
   You`"...I don't know if I should believe you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A-as if! Not at a time like this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My nose wouldn't stop bleeding.`;
   waitForClick; clearText; marker; sound(`T6L060`); appendText; 
   You`"Huh? It looks pretty bad."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Look, I told you, right? I really wasn't 
thinking anything perverted, 
okay?...huuuh....huuuh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L061`); appendText; 
   You`"Huuuh?"`;
   waitForClick; clearText; marker; sound(`T6L062`); appendText; 
   You`"Huuuuh, what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L063`); appendText; 
   You`"Come on, what...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You started shaking my shoulder.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Wuuuuaaaachoooo!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I let out a huge sneeze.`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG_unk(3, 0, 3);
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`SPLAT!`;
   delay(0); 
});
bgload_keepFg({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   appendText; waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Blood flew not only from my nose, but also 
from my mouth in large amounts.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It splattered all over the floor and onto the 
wall.`;
   waitForClick; clearText; 
});
eff_41 = 22;
eff_42 = 9;
eff_50 = 80;
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Woooah...!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was suddenly assaulted by dizziness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The world felt like it was spinning.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"For some reason, I can't keep steady..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although I didn't feel so great, it seemed 
funny for some reason, and I laughed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A, ha, ha, ha...what's with this?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L064`); appendText; 
   You`"T-Takeshi!"`;
   waitForClick; clearText; marker; sound(`T6L065`); appendText; 
   You`"Hang in there!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh...quit shaking me, it's making me feel 
ill."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L066`); appendText; 
   You`"S-sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, I'm fine. Don't worry, You."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L067`); appendText; 
   You`"This is no time to be joking around!"`;
   waitForClick; clearText; marker; sound(`T6L068`); appendText; 
   You`"You're bleeding all over, Takeshi!!"`;
   waitForClick; clearText; marker; sound(`T6L069`); appendText; 
   You`"We should go to the examination room, and 
take a look at you at once."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, yeah. *cough*"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(This isn't good...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I gotta get a hold of myself...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to calm myself down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With You supporting me, I walked down the 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then a door flew open in front of us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the examination room. Out of it flew 
Tsugumi.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L070`); appendText; 
   Tsugumi`"You, Takeshi! The Kid! The Kid's in bad 
shape!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With eyes that showed the gravity of the 
situation, she yelled at us.`;
   waitForClick; clearText; marker; sound(`T6L071`); appendText; 
   You`"The Kid? What's wrong?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L072`); appendText; 
   Tsugumi`"He's in trouble! It'll be faster if you come 
in and look...ah!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L073`); appendText; 
   Tsugumi`"No...Takeshi, you too!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi noticed the shape I was in and opened 
her eyes in shock.`;
   waitForClick; clearText; marker; sound(`T6L074`); appendText; 
   You`"Takeshi 'too'?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about...?"`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The Kid was sleeping on the L-MRI table.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His results from the scan came up on the 
control panel's monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Tief Blau 2017-Rev.17"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L075`); appendText; 
   Tsugumi`"The Kid's been infected with Tief Blau, 
too..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How could that happen!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why? He's been with us the whole time. So 
why did he get...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why and where did he get TB!? ...*cough*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mumbled to myself, finding it hard to 
breathe all of a sudden.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L076`); appendText; 
   Tsugumi`"Takeshi, just calm down..."`;
   waitForClick; clearText; marker; sound(`T6L077`); appendText; 
   Tsugumi`"None of us know where he got exposed to it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU17ADM`, name2: `YU04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L078`); appendText; 
   You`"Takeshi, I want you to get scanned, too."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-why!?"`;
   waitForClick; clearText; marker; sound(`T6L079`); appendText; 
   You`"Just let me scan you...please."`;
   waitForClick; clearText; marker; sound(`T6L080`); appendText; 
   You`"It isn't normal to start spewing blood from 
your nose and mouth, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah I know...but."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L081`); appendText; 
   Tsugumi`"I'll help."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi gently took the Kid off of the L-MRI 
examination table and forcefully put me up on 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pressing on both of my shoulders, she forced 
me down on the table.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-you don't have to do that...fine, I'll let 
you check me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I brushed Tsugumi's hands off of me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"See? I'm lying down now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L082`); appendText; 
   Tsugumi`"Okay...You, please start the scan."`;
   waitForClick; clearText; marker; sound(`T6L083`); appendText; 
   You`"O-okay."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You started operating the control panel.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The scanning light from the laser crawled 
slowly up my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a while...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L084`); appendText; 
   You`"The scan's finished..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-what's it say?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My voice cracked when I asked the question.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A-at least say something, You."`;
   waitForClick; clearText; marker; sound(`T6L085`); appendText; 
   You`"The results are..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stared at the panel without moving.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L086`); appendText; 
   Tsugumi`"The results are black.... You're infected 
too, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi read the monitor for me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why did I catch TB?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Because we came to IBF?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(No, it couldn't be that...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I must've had it longer than that...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Since getting to LeMU?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe we're all infected...!?)`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Damn it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood up from the L-MRI, and was assaulted 
by a terrible dizzy spell.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Whooaaah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L087`); appendText; 
   Kid`"Takeshi, watch out...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The one to steady me from falling was the Kid.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But from the looks of it, his legs weren't 
very steady either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Putting my hand on a wall, I somehow held 
myself up.`;
   waitForClick; clearText; marker; sound(`T6L088`); appendText; 
   Kid`"We're in trouble, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-you can say that again..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L089`); appendText; 
   Kid`"If only we had that serum...the orange 
one...agh."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid pressed his hand to his face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As he wiped his mouth, I noticed a thin trail 
of blood there.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-yeah, the serum.... If they've been 
handling TB here at IBF, they should have 
some of that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If we use that, then the symptoms should 
lessen..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went around the examination room, and 
checked to see if I could find it anywhere.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADS`, name2: `YU18ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi and You hurriedly started checking 
through the medicine cabinets.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid sank to the floor. He didn't look 
very good.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His breathing was ragged. He had lines of pain 
etched on his face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L090`); appendText; 
   You`"It's no good. It doesn't look like there's 
any here."`;
   waitForClick; clearText; marker; sound(`T6L091`); appendText; 
   Tsugumi`"I can't find any either."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of them were shaking their heads.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn...what are we gonna do?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Woof, woof!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey Pipi, you seem like you're doing pretty 
well."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without me noticing, Pipi had come up and was 
darting around my legs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His tail was wagging frantically.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He suddenly dropped a few small objects from 
his mouth.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"!?"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey! Where'd you get...?"`;
   waitForClick; clearText; marker; sound(`T6L092`); appendText; 
   You`"What's wrong? ...Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You ran over to where we were.`;
   waitForClick; clearText; marker; sound(`T6L093`); appendText; 
   You`"This is...the orange serum."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She picked up one of the fallen objects in 
front of Pipi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a small capsule - a capsule with orange 
liquid inside of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Four of them had fallen on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where'd you find that Pipi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if he'd understand me, but I 
asked Pipi anyway.`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   Pipi`"Whine...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi shook his head from side-to-side.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Were there any more of these?"`;
   waitForClick; clearText; marker; sound(`PIPI_06`); appendText; 
   Pipi`"Whiiiine..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He shook his head.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is...all of them?"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He nodded.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-well we need to take these immediately..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sorry You, but get these ready. You're the 
only one who knows how to give shots."`;
   waitForClick; clearText; marker; sound(`T6L094`); appendText; 
   Tsugumi`"I found some syringes over here, You."`;
   waitForClick; clearText; marker; sound(`T6L095`); appendText; 
   You`"O-okay!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We gathered all of the cartridges of serum 
from the floor, and put them on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking slightly doubtful, You prepared the 
syringes one at a time and gave the Kid and 
me our shots.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Phew.... We can relax for a while now."`;
   waitForClick; clearText; marker; sound(`T6L096`); appendText; 
   Kid`"Thanks, You..."`;
   waitForClick; clearText; marker; sound(`T6L097`); appendText; 
   You`"You're welcome."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sitting with his back against the wall, the 
Kid gave You a thumbs up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that he smiled and closed his eyes. He 
must have fallen asleep.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What do we do about Coco?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L098`); appendText; 
   Tsugumi`"She's still undergoing the oxygen treatment. 
So we can't open the pod."`;
   waitForClick; clearText; marker; sound(`T6L099`); appendText; 
   Tsugumi`"It looks like the treatment is progressing 
normally. As long as she's in there, I don't 
think her condition will get much worse..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, okay..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"By the way, what about you Tsugumi...are you 
okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L100`); appendText; 
   Tsugumi`"I scanned myself earlier..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L101`); appendText; 
   Tsugumi`"I'm okay for now. But maybe I just don't 
have any symptoms."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking slightly worried, Tsugumi said this.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh...You, why don't you give Tsugumi a shot."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You opened up another of the containers and 
gave Tsugumi a shot.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Oh yeah, you should probably give yourself a 
shot too, don't you think, You?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T089`); appendText; 
   You`"Huh? Um, no I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next shot had already been prepared, but 
for some reason You was stalling.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T090`); appendText; 
   You`"*Cough*...*cough*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She started coughing suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! Give yourself a shot quickly!"`;
   waitForClick; clearText; marker; sound(`T6T091`); appendText; 
   You`"But, I-I just...*cough* "`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wouldn't stop coughing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her arm holding onto the syringe started to 
shake.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T092`); appendText; 
   You`"Breathe deep...fuuu....haaa..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her coughing finally stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But her hands wouldn't go still.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-what's wrong? You aren't feeling well? You 
want me to give the shot to you?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T093`); appendText; 
   You`"Huh, n-no way..."`;
   waitForClick; clearText; marker; sound(`T6T094`); appendText; 
   You`"I...I don't like shots..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh!?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You didn't have any problem sticking everyone 
else!?"`;
   waitForClick; clearText; marker; sound(`T6T095`); appendText; 
   Tsugumi`"You don't like getting them yourself?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T096`); appendText; 
   You`"Well yeah. 'Cause they hurt!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You puffed out her cheeks stubbornly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about, your life's on 
the line here...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What'll ya do! Give me that syringe, You!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T097`); appendText; 
   You`"Aagh!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Reaching out quickly, I latched onto You's arm.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi, hold her down!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T098`); appendText; 
   Tsugumi`"Roger."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi forced You to sit on the bed, and 
held her so that she couldn't move.`;
   waitForClick; clearText; marker; sound(`T6T099`); appendText; 
   You`"Hey...*cough* what are you doing! Ouch!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop complaining!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed onto You's arm, and stuck the 
needle in it.`;
   waitForClick; clearText; marker; sound(`T6T100`); appendText; 
   You`"Hey! Where do you think you're sticking that!"`;
   waitForClick; clearText; marker; sound(`T6T101`); appendText; 
   You`"You've got it all wrong! Not there! Aaaa, 
stop mangling me!"`;
   waitForClick; clearText; marker; sound(`T6T102`); appendText; 
   You`"Ow! Ouch! Stop! Go more slowly!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well stop squirming around so much!"`;
   waitForClick; clearText; marker; sound(`T6T103`); appendText; 
   You`"The angle's all wrong!"`;
   waitForClick; clearText; marker; sound(`T6T104`); appendText; 
   You`"You're going to get air bubbles in it!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop complaining! You can't do it yourself!"`;
   waitForClick; clearText; marker; sound(`T6T105`); appendText; 
   You`"You suck!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up!"`;
   waitForClick; clearText; marker; sound(`T6T106`); appendText; 
   You`"Stop iiiit! Lemmee goooo! I'm dyyyinnnng! 
Oooooowwwch!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You idiot! We're giving you this so you WON'T 
die!"`;
   waitForClick; clearText; marker; sound(`T6T107`); appendText; 
   Tsugumi`"*Sigh...*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi slumped her shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was throwing a tantrum like a spoiled 
child.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Small droplets of red stained the bed's white 
sheets.`;
   waitForClick; clearText; marker; appendText; 
   Narr`..............`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that You got scanned on the L-MRI. As 
suspected had come down with TB.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't have room to mess around anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end You wouldn't let me do it, so she 
ended up giving herself the shot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Complaining the whole time, with tears in her 
eyes...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
delay({ interval: 60 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`17:36`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I'm not sure how long our condition will 
hold with just one shot..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, You? Do you think we can do anything 
after it stops working?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sitting at the computer terminal, 
silently typing on the keyboard.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You, tell me what we can expect?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L102`); appendText; 
   You`"Don't talk to me, I can't concentrate."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, alright."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L103`); appendText; 
   You`"I'm trying my best..."`;
   waitForClick; clearText; marker; sound(`T6L104`); appendText; 
   You`"But someone has put a lock on the 
communications protocol, and we can't make 
contact with the surface."`;
   waitForClick; clearText; marker; sound(`T6L105`); appendText; 
   You`"But, every once in a while, I've found some 
communication data that crosses through."`;
   waitForClick; clearText; marker; sound(`T6L106`); appendText; 
   You`"If I can release that lock, or...well 
anyway, we just might be able to get through 
somehow."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L107`); appendText; 
   You`"At least it is better than LeMU, where we 
had no way of making contact."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, show me what you got, genius!"`;
   waitForClick; clearText; marker; sound(`T6L108`); appendText; 
   You`"Okay..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I left You for a while, and went to look at 
the monitor attached to the capsule pod.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi came over to stand next to me and 
looked at the monitor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L109`); appendText; 
   Tsugumi`"How is Coco doing?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She's in 'serious but stable' condition."`;
   waitForClick; clearText; marker; sound(`T6L110`); appendText; 
   Tsugumi`"Really..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`According to the monitor, it would be four 
hours before Coco could leave the pod.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pod was full of high-pressure oxygen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We couldn't take Coco out of there until the 
time had come.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid snored next to Coco's pod, frowning 
slightly`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't say that his condition looked good.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could only pray that he would hang on a 
little longer.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
playBGM({ num: 24, volume: 100 });
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Narr`................................`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a little while after that, my attention 
wandered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I don't know how much time passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was not sure whether things were real or a 
dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I alive?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I dead?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slept like I was dead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I dead?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I sleeping?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which was it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`And where was the me that was thinking about 
everything?`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; sound(`T6L111`); appendText; 
   You`"If we just had a little more time..."`;
   waitForClick; clearText; marker; sound(`T6L112`); appendText; 
   You`"I could have gotten at the data..."`;
   waitForClick; clearText; marker; sound(`T6L113`); appendText; 
   You`"The terminal in the Security Office..."`;
   waitForClick; clearText; marker; sound(`T6L114`); appendText; 
   You`"We even figured out that final password..."`;
   waitForClick; clearText; marker; sound(`T6L115`); appendText; 
   You`"Hey, if it's from HIMMEL..."`;
   waitForClick; clearText; marker; sound(`T6L116`); appendText; 
   You`"We could copy it to a terabyte disk..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That's right...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just a little more...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just have to stay alive for a little bit 
more...`;
   waitForClick; clearText; marker; appendText; 
   Narr`........................`;
   waitForClick; clearText; marker; appendText; 
   Narr`......`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
bgload({ name: `BG34A1`, transition: 0 });
clock(`21:15`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I woke from my stupor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A stale cold feeling...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized I had been sleeping sprawled on the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slowly raised my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried opening and closing my fists.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The movement left me with an uncomfortable 
sensation, like it wasn't my own.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried slapping my cheek.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I breathed in the cold air and breathed out.  `;
   waitForClick; clearText; marker; appendText; 
   Narr`Strange...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The inside of my head stayed dull and murky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I dragged myself to consciousness, forcefully 
reeling myself back to clarity.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Putting my hands on the floor, I pulled up my 
heavy, aching body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My feet faltered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somehow I managed to stand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw several used syringes scattered on the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid was still slumped against Coco's pod. `;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked disturbingly bad, just completely 
out of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was nowhere to be seen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wonder where she had gone to...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was half slumped over the terminal 
console, snoring away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked like she was in some pain and was 
perspiring in her sleep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her hand was pushed against the panel as if 
she had been in the middle of typing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the monitor, auto-repeated strands of 
letters were lined up without meaning.`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; sound(`VSE03_06`); appendText; 
   //??
   Unk`"......! ......!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`What the...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard a strange sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I re-inserted the voice converter into my ear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...it wasn't a problem with the converter.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T6T222`); appendText; 
   //??
   Unk`"Come in..."`;
   waitForClick; clearText; marker; sound(`T6T223`); appendText; 
   //??
   Unk`"IBF 3, please respond"`;
   waitForClick; clearText; marker; sound(`T6T224`); appendText; 
   //??
   Unk`"This is the emergency rescue team from the 
Maritime Defense Force."`;
   waitForClick; clearText; marker; sound(`T6T225`); appendText; 
   //??
   Unk`"We are under the direction of Insel null."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I actually hearing someone's voice over 
the speaker!?`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I hurried over to the terminal, and removed 
You's hands from it, taking over the control 
panel.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hello!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is the IBF infirmary... over!"`;
   waitForClick; clearText; marker; sound(`T6T226`); appendText; 
   //Mission Control
   Mission_Control`"IBF 3!? I repeat, this is the emergency 
rescue team from the Maritime Defense Force."`;
   waitForClick; clearText; marker; sound(`T6T227`); appendText; 
   //Mission Control
   Mission_Control`"Can you hear me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah! Okay...loud and clear!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was somehow able to force out an answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Voices spilled out from the other end of the 
line.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Hey, there are survivors down there!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I can't believe it!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'That's amazing!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's what I wanted to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like You had been able to restore 
the communication lines...`;
   waitForClick; clearText; marker; sound(`T6T228`); appendText; 
   //Mission Control
   Mission_Control`"We're sending a rescue team immediately. Can 
you access the pool in IBF 3?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, yeah, it should be fine."`;
   waitForClick; clearText; marker; sound(`T6T229`); appendText; 
   //Mission Control
   Mission_Control`"Do you know how many survivors there are, 
and where they are located?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In the examination room there are five...no 
six."`;
   waitForClick; clearText; marker; sound(`T6T230`); appendText; 
   //Mission Control
   Mission_Control`"Six. I copy."`;
   waitForClick; clearText; marker; sound(`T6T231`); appendText; 
   //Mission Control
   Mission_Control`"A rescue team is headed there in a private 
sector salvage vessel. When it arrives, 
I want you to follow its directions and 
get out of there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How long 'till they get here?"`;
   waitForClick; clearText; marker; sound(`T6T232`); appendText; 
   //Mission Control
   Mission_Control`"They're going as fast as they can, but it'll 
take about an hour."`;
   waitForClick; clearText; marker; appendText; 
   Narr`One hour...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Coco should be able to get out of the pod by 
then.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I just hope we have that long...)`;
   waitForClick; clearText; marker; sound(`T6T233`); appendText; 
   //Mission Control
   Mission_Control`"But, if something goes wrong..."`;
   waitForClick; clearText; marker; sound(`T6T234`); appendText; 
   //Mission Control
   Mission_Control`"There should be a small deep-exploration 
submarine left in the research facility. I 
hate to make you do this, but I want you to 
escape to that area."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"S-something goes wrong...? W-what do you 
mean...?"`;
   waitForClick; clearText; marker; sound(`T6T235`); appendText; 
   //Mission Control
   Mission_Control`"LeMU's partition strength threshold 
is already being exceeding."`;
   waitForClick; clearText; marker; sound(`T6T236`); appendText; 
   //Mission Control
   Mission_Control`"If one section implodes, there's the risk 
that another area could collapse and 
sinking could ensue."`;
   waitForClick; clearText; marker; sound(`T6T237`); appendText; 
   //Mission Control
   Mission_Control`"If that happens, we think there's a high 
possibility that heavy pieces could crash 
down on the research facility."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't say...?"`;
   waitForClick; clearText; marker; sound(`T6T238`); appendText; 
   //Mission Control
   Mission_Control`"Of course, we're doing everything we can to 
get to you before that happens."`;
   waitForClick; clearText; marker; sound(`T6T239`); appendText; 
   //Mission Control
   Mission_Control`"We're heading there, no matter what! 
So, please hang on a little longer!"
`;
   marker; appendText; 
   Narr`*Click* ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The communications cut out suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, hey! W-wait a sec!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hit the 'Call' button repeatedly, but there 
was no answer.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn it, we can't open up communications 
from this side..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have any other choice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I began reading through the manual on the 
side of communication terminal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A mini-submersible for deep-sea exploration...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We hadn't found it when we'd searched the 
place...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, here it is!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Following the instructions, I used the control 
panel to call up information on the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's a small electric submersible..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The submarine was in a separate sealed 
sector attached to IBF.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The specifications said it was a 'neutral 
buoyancy' miniature-submarine, for saturation 
diving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The important thing was, it could be brought 
over to the pool by remote control.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If things get dangerous, I guess they want 
us to board this."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE04_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I quickly went about setting up the remote 
control program, so that we could move the 
submarine at a moment's notice, if we had to.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All we have to do now is..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Get Tsugumi and Sora over here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Sora...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(How are we going to get Sora here...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was overcome by unease.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`——BOOOOOooooM!!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly a low metallic crash reverberated 
throughout the installation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound...seemed to come from above....`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 10, volume: 100 });
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`An alarm sounded from the terminal, and the 
screen changed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Warning: LeMU hull breach : Flooding'`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"LeMU....!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is bad..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This means... Sora...and Tsugumi...!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran out into the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was only slight, but the floor was 
trembling.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Agh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suddenly became dizzy again.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Losing my balance, I crashed into a wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My recovery wasn't complete yet.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I...still gotta go..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I have to GO!!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took all of the strength I could muster and 
headed to the poolroom.`;
   waitForClick; clearText; 
});
bgload({ name: `BG33A2`, transition: 20 });
fgload({ id: 1, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"T-Tsugumi You've been in here!? Thank god..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as I headed through the watertight door, 
I met with Tsugumi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L117`); appendText; 
   Tsugumi`"Takeshi...you're awake...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked at me strangely.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. Tsugumi, there's a rescue team on the 
way. They said it would take about an 
hour...I want you to wait for them in the 
examination room!"`;
   waitForClick; clearText; marker; sound(`T6L118`); appendText; 
   Tsugumi`"Rescue?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"They said they were from the Maritime Defense 
Force."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You was able to open up a communication line 
up to Insel null."`;
   waitForClick; clearText; marker; sound(`T6L119`); appendText; 
   Tsugumi`"To Insel null...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi, are you okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L120`); appendText; 
   Tsugumi`"Yeah...that serum seems to be working. I'm 
fine."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, then I want you to get back to the 
examination room right away. Everyone else is 
in bad shape. I want you to look after them."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And saying that I headed for the lift.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L121`); appendText; 
   Tsugumi`"W-wait, Takeshi! Where are you going!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Up. To LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We've still got an hour. I'm going to go get 
Sora!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L122`); appendText; 
   Tsugumi`"W-wait! That's crazy!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi chased after me and grabbed onto my 
arm.`;
   waitForClick; clearText; marker; sound(`T6L123`); appendText; 
   Tsugumi`"How? Sora can't come down here from LeMU!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know...I've got to think of a way..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, wait..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I already know what I've got to do!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L124`); appendText; 
   Tsugumi`"Ah!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreen();
fgload({ id: 1, name: `TU09ADL`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I tore myself away from her grip and tossed 
her aside.`;
   waitForClick; clearText; marker; sound(`T6L125`); appendText; 
   Tsugumi`"Don't go!"`;
   waitForClick; clearText; marker; sound(`T6L126`); appendText; 
   Tsugumi`"Don't...don't leave me!"`;
   waitForClick; clearText; marker; sound(`T6L127`); appendText; 
   Tsugumi`"Don't leave me alone!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi called out at me in a tearful voice, 
as she lay sprawled on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't turn back.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as the door opened, I flew into the 
lift.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator headed up.`;
   waitForClick; clearText; marker; sound(`T6L128`); appendText; 
   Announcement`"Depth 270 feet..."`;
   waitForClick; clearText; marker; sound(`T6L129`); appendText; 
   Announcement`"Depth 240 feet..."`;
   waitForClick; clearText; marker; sound(`T6L130`); appendText; 
   Announcement`"Depth 210 feet..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Upwards...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The elevator stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Forcing open the door, I slipped into the 
pressurization chamber.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The entrance had closed automatically.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I pressed on the intercom button repeatedly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora! Soraaa!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; sound(`T6L131`); appendText; 
   Sora`"Ta-Takeshi!? What are you...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! It's been a while!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized how much I had missed that voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I waved to Sora as she appeared outside the 
window.`;
   waitForClick; clearText; marker; sound(`T6L132`); appendText; 
   Sora`"Wh-what are you doing here!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, it's obvious isn't it? I came back."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's the damage?"`;
   waitForClick; clearText; marker; sound(`T6L133`); appendText; 
   Sora`"There's flooding in Zweite stock."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora explained the situation diligently.`;
   waitForClick; clearText; marker; sound(`T6L134`); appendText; 
   Sora`"The warehouse area has been breached, and 
cracks are beginning to form in the elevator 
shaft. The situation is serious."`;
   waitForClick; clearText; marker; sound(`T6L135`); appendText; 
   Sora`"There is over six inches of flooding in 
almost all of the corridors."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's pretty bad..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What about Dritte stock?"`;
   waitForClick; clearText; marker; sound(`T6L136`); appendText; 
   Sora`"Water is coming in from the upper floors via 
ducts."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you able to drain it okay?"`;
   waitForClick; clearText; marker; sound(`T6L137`); appendText; 
   Sora`"Yes, I'm doing the best I can..."`;
   waitForClick; clearText; marker; sound(`T6L138`); appendText; 
   Sora`"But flooding is only a matter of time."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, don't worry about it, I'll be right 
back."`;
   waitForClick; clearText; marker; sound(`T6L139`); appendText; 
   Sora`"No!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's eyes flashed from the other side of the 
glass.`;
   waitForClick; clearText; marker; sound(`T6L140`); appendText; 
   Sora`"Let's decompress the chamber, and follow the 
proper entrance protocol."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Decompression? Are you telling me to just 
wait here?"`;
   waitForClick; clearText; marker; sound(`T6L141`); appendText; 
   Sora`"Yes. It is a rule. If you won't...I'm going 
to have to ask you to go back to IBF."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How long will it take?"`;
   waitForClick; clearText; marker; sound(`T6L142`); appendText; 
   Sora`"I will complete it as soon as possible."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I need to know how much time!"`;
   waitForClick; clearText; marker; sound(`T6L143`); appendText; 
   Sora`"If I hurry...12 hours."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tw-twelve hours!? We don't have that long!"`;
   waitForClick; clearText; marker; sound(`T6L144`); appendText; 
   Sora`"If we don't dissolve the nitrogen in your 
blood, you will get decompression sickness."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't care! Open that door now!"`;
   waitForClick; clearText; marker; sound(`T6L145`); appendText; 
   Sora`"I can't do that...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just open it now, please!"`;
   waitForClick; clearText; marker; sound(`T6L146`); appendText; 
   Sora`"Why!?"`;
   waitForClick; clearText; marker; sound(`T6L147`); appendText; 
   Sora`"If we open that door now, due to the rapid 
decompression, the nitrogen in your 
bloodstream will form bubbles, causing blood 
clots, and in the worst case..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't care, you get that door OPEN NOW!!!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I found an emergency escape lever inside the 
chamber and I pulled on it.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I kicked the door.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
removeBG({ mode: WHITE, transition: 3 });
playSFX({ name: `SE07_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`——KABOooM!!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a horrible noise, as though all the 
air inside had exploded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body was thrown from the room, along with 
the high-pressure gas that had been built up 
inside.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I was tossed like a piece of confetti, 
sliding and rolling along the floor all the 
way to the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body crashed heavily against the wall.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Gaagh!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...eeeaaAAAAGGHH"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"WAAAAaaaah......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pain wracked my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And it wasn't because I had smacked into a 
wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although I kept spewing out my breath, 
it felt like air kept bubbling up in my lungs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then came a terrible exhaustion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body felt like it was expanding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My eyes felt swollen and painful.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The muscles in my limbs began to jerk and 
spasm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Numbness. Pain. Headache.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I had no room to move.`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"*Urgh*....*uurrgh*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`According to astronomers, humans can live for 
a short period of time even if they are 
thrown out of a spaceship into space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But fish brought quickly up from the sea 
depths to sea level die instantly, because 
the pressure difference causes their organs 
to burst.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So was I an astronaut, or...`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L148`); appendText; 
   Sora`"Takeshi, your voice converter!!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I felt a splitting pain deep in both ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Repelled by my eardrums, the voice converter 
flew out of my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly, held both ears with the palms of 
my hands and knocked them, as though trying 
to drain water from them.`;
   waitForClick; clearText; marker; sound(`T6L149`); appendText; 
   Sora`"......! .........!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't hear what Sora was screaming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was lie on the floor, trying 
to suck in air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a fish that had been pulled out of the 
water...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A few minutes passed...`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; 
});
hideTextbox();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The earphones that I had been wearing had 
broken in half.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I got up weakly.`;
   waitForClick; clearText; 
});
bgload({ name: `IT08A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I saw some extra voice converters on the edge 
of the console.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crammed them forcefully into my ears.`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L150`); appendText; 
   Sora`"Takeshi...!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora ran over to me with a painful expression 
on her face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She tried to wrap her arms around me. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Even though she couldn't touch me, she was 
trying to help me up.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, okay. I'm still alive."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stuck out my hand to the console, stood up 
and smiled for her.`;
   waitForClick; clearText; marker; sound(`T6L151`); appendText; 
   Sora`"Takeshi...!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear Sora's voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that my eardrums hadn't burst...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L152`); appendText; 
   Sora`"Why...! Why did you come here!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wiped away tears and her expression 
darkened.`;
   waitForClick; clearText; marker; sound(`T6L153`); appendText; 
   Sora`"Go back to IBF this instant! It's too 
dangerous here!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And although she was crying, her face 
reddened with anger.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not going back."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I came here knowing how dangerous it would 
be."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L154`); appendText; 
   Sora`"No, go back! Please!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L155`); appendText; 
   Sora`"I can't believe...that you would do this."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L156`); appendText; 
   Sora`"Run away...please, just go back."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L157`); appendText; 
   Sora`"Flooding, I, go back, Takeshi, please, If I 
don't save, danger..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Calm down. Calm down Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're totally incoherent."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held up my hand as I spoke, hoping to calm 
her down.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't stop her anger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her lips pursed, she glared at me slightly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Do you know why I'm here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L158`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T6L159`); appendText; 
   Sora`"I, no, I don't know..."`;
   waitForClick; clearText; marker; sound(`T6L160`); appendText; 
   Sora`"Even if I know, I can't accept it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed sad and angry at the same time.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L161`); appendText; 
   Sora`"Am...I contradicting myself?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I think it's pretty much common sense."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But, in other words, I..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I came up from IBF BECAUSE LeMU is dangerous."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L162`); appendText; 
   Sora`"You know that it is 'dangerous,' so why..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L163`); appendText; 
   Sora`"Why won't you listen to me!?"`;
   waitForClick; clearText; marker; sound(`T6L164`); appendText; 
   Sora`"Will you please go back to IBF?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know I should listen to you, but I can't."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I knew that LeMU was dangerous so I couldn't 
just stay there at IBF, where it is safe."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wonder if that's strange? You think so?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L165`); appendText; 
   Sora`"It is strange, and it is self-contradictory."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L166`); appendText; 
   Sora`"Because, because, if you stay here...Takeshi, 
you'll..."`;
   waitForClick; clearText; marker; sound(`T6L167`); appendText; 
   Sora`"You may die..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L168`); appendText; 
   Sora`"Agh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her shoulders started shaking and she started 
to cry.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I keep telling you not to rush to 
conclusions, Sora."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I came here to get you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know a way to help you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I'm not sure about it yet, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If I've got a little time, I can get you to 
IBF with me..."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_00`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Grrrrooooaaan...`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I if it were responding to my words, the 
floor started to shake. `;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beep, beep...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And soon an alarm rang from the HIMMEL console.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What was that sound?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L169`); appendText; 
   Sora`"Ah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora...tell me what is was?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L170`); appendText; 
   Sora`"Ah, ah, um..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's gaze wandered and she spoke to me with 
a pained expression.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L171`); appendText; 
   Sora`"The elevator leading to IBF was destroyed 
with that tremor."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was destroyed...?`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L172`); appendText; 
   Sora`"It is no longer working..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding back tears, she gazed down at her feet.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Eh!? Ah, uh, you...don't say..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Trying to keep my calm, I responded to her.`;
   waitForClick; clearText; 
});
goto(lbl_0000104f).if(g_0f == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The ruin of LeMU was happening faster than I 
had expected.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It shouldn't have been this way.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(We should have had more time than this...)`;
   waitForClick; clearText; 
});
let lbl_0000104f;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was pretending to be cool...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I was actually in trouble.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(This is bad...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't put on an act.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If we couldn't go down to IBF...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our escape route was really gone.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh...well..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, that throws a bit of a wrench in our 
plans...but, hey, that's okay, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed sheepishly and scratched the tip of 
my nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There really wasn't anything to do but to 
laugh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L173`); appendText; 
   Sora`"It's certainly not all right!"`;
   waitForClick; clearText; marker; sound(`T6L174`); appendText; 
   Sora`"Not all right at all...!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sprang to the HIMMEL console, checking once 
more the damage shown there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The IBF elevator wasn't moving due to a break 
in the shaft.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thankfully, no one was in the elevator when 
the accident happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that in the IBF case, we had 
escaped damage again...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T6L175`); appendText; 
   Sora`"Haaaa....."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She let out a deep, deep sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora stopped crying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly tightening her expression, she stood 
at attention.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L176`); appendText; 
   Sora`"It's come to this..."`;
   waitForClick; clearText; marker; sound(`T6L177`); appendText; 
   Sora`"In any case, I'll think of a way to help 
Takeshi get out."`;
   waitForClick; clearText; marker; sound(`T6L178`); appendText; 
   Sora`"That is my duty..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had an unassailably earnest expression.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stared directly into my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Duty..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried repeating it in my own mouth.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, is that really your only reason?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L179`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She nodded calmly.`;
   waitForClick; clearText; marker; sound(`T6L180`); appendText; 
   Sora`"I will definitely get you to the ground 
level."`;
   waitForClick; clearText; marker; sound(`T6L181`); appendText; 
   Sora`"It's the function that was given to me, it 
is my task."`;
   waitForClick; clearText; marker; sound(`T6L182`); appendText; 
   Sora`"Because I'm..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L183`); appendText; 
   Sora`"I'm...Sora Akanegasaki, Artificial 
Intelligence of LeMMIH's System."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She threw off all emotion as she said it.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`This was Sora's proposed escape plan.`;
   waitForClick; clearText; marker; sound(`T6L184`); appendText; 
   Sora`"There is a huge cylinder that cuts through 
LeMU."`;
   waitForClick; clearText; marker; sound(`T6L185`); appendText; 
   Sora`"The elevator shaft that rises in the middle 
of that..."`;
   waitForClick; clearText; marker; sound(`T6L186`); appendText; 
   Sora`"If you can get through this, you can emerge 
on the surface of the sea."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Didn't the central elevator get sunk in the 
first flood?"`;
   waitForClick; clearText; marker; sound(`T6L187`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`T6L188`); appendText; 
   Sora`"But the tube itself is thankfully still fine."`;
   waitForClick; clearText; marker; sound(`T6L189`); appendText; 
   Sora`"The ocean water only came through the cracks 
in another area..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really? Still...even so..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That tube is 103 feet high."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That huge pipe is completely full of 
pressurized sea water!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're not telling me to swim through that?"`;
   waitForClick; clearText; marker; sound(`T6L190`); appendText; 
   Sora`"No, not that."`;
   waitForClick; clearText; marker; sound(`T6L191`); appendText; 
   Sora`"We'll first drain the water filling the pipe."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Drain it? ...How?"`;
   waitForClick; clearText; marker; sound(`T6L192`); appendText; 
   Sora`"First, we close off all the flood hatches 
around the tube, so that no water can get in."`;
   waitForClick; clearText; marker; sound(`T6L193`); appendText; 
   Sora`"After we take care of that, we open the 
doors on the lowest part of the tube and let 
all the water that has built up inside flow 
over to Dritte stock."`;
   waitForClick; clearText; 
});
bgload({ name: `MAP05A`, transition: 10 });
delay({ interval: 120 });
bgload({ name: `MAP05B`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Okay. Let's say something like that were 
possible ? "`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How could I climb up that ridiculously high 
tube?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's no ladders or anything in that tube, 
is there?"`;
   waitForClick; clearText; marker; sound(`T6L194`); appendText; 
   Sora`"It is as you say."`;
   waitForClick; clearText; marker; sound(`T6L195`); appendText; 
   Sora`"That is why I said we would drain it 'first'."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`T6L196`); appendText; 
   Sora`"After the drainage has completely finished, 
we open door A."`;
   waitForClick; clearText; marker; sound(`T6L197`); appendText; 
   Sora`"At that point, you will go to Zweite stock's 
elevator tube."`;
   waitForClick; clearText; marker; sound(`T6L198`); appendText; 
   Sora`"If you do that, as the water level rises, 
you will just float right up to Insel null."`;
   waitForClick; clearText; 
});
bgload({ name: `MAP05C`, transition: 10 });
delay({ interval: 120 });
bgload({ name: `MAP05D`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T6L199`); appendText; 
   Sora`"At first, all the water pressure will make 
the level of the water swell up violently, 
but as you approach sea level, it will slow 
down."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora?  Can we go back to our first 
conversation?"`;
   waitForClick; clearText; marker; sound(`T6L200`); appendText; 
   Sora`"Yes, certainly."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You said before that we would move the water 
to Dritte stock."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So you mean, in other words, that we would 
entirely flood Dritte stock?"`;
   waitForClick; clearText; marker; sound(`T6L201`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean, yes?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If we flood Dritte stock, the HIMMEL 
computer room will be flooded too."`;
   waitForClick; clearText; marker; sound(`T6L202`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`T6L203`); appendText; 
   Sora`"But you don't need to worry about me."`;
   waitForClick; clearText; marker; sound(`T6L204`); appendText; 
   Sora`"My brain is in Insel null."`;
   waitForClick; clearText; marker; sound(`T6L205`); appendText; 
   Sora`"So even if all the computers inside LeMU go 
down, it won't extinguish me."`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Oh, I see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L206`); appendText; 
   Sora`"Do you need me to explain this plan again to 
you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I've got it. It's okay."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The water rises up the elevator tube. I just 
zoom up and out with it, and I escape."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is that right?"`;
   waitForClick; clearText; marker; sound(`T6L207`); appendText; 
   Sora`"That is right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I understood the proposal.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I understood it, but...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 21, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"No!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If HIMMEL floods, what happens to you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your memory, your recollections...aren't 
they all here?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"They'll all be drowned!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed at the computers lined up next to 
the console.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`".........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked down and didn't answer.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No way am I going to let you take this kind 
of 'suicidal' act, Sora!"`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Sizzle!`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Owww...ow...ow!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly a searing, burning pain hit my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I covered my eyes frantically.`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What in the hell was that!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fearfully, I pulled away my hands and opened 
my eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L208`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T6L209`); appendText; 
   Sora`"We don't have any more time. Please, do as I 
say."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said this without emotion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Furrowing her eyebrows, Sora glared at me.`;
   waitForClick; clearText; marker; sound(`T6L210`); appendText; 
   Sora`"I fiddled around a bit with the RSD laser 
levels..."`;
   waitForClick; clearText; marker; sound(`T6L211`); appendText; 
   Sora`"And so I seared your eye..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wha, what!?!"`;
   waitForClick; clearText; marker; sound(`T6L212`); appendText; 
   Sora`"Actually, it's not something I should be 
able to do..."`;
   waitForClick; clearText; marker; sound(`T6L213`); appendText; 
   Sora`"But right now I just did it somehow. It's 
like the limiter has been turned off..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stared at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a gaze that sent chills down my spine.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey...hey, come on, now."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you threatening me, Sora?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L214`); appendText; 
   Sora`"Hurry...hurry and do as I say!"`;
   waitForClick; clearText; marker; sound(`T6L215`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T6L216`); appendText; 
   Sora`"If I make even a tiny mistake with the laser 
levels, next time I really might hurt your 
eyes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L217`); appendText; 
   Sora`"Do you think that I am lying?"`;
   waitForClick; clearText; marker; sound(`T6L218`); appendText; 
   Sora`"I am serious."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`And thus Sora's plan became reality.`;
   waitForClick; clearText; marker; sound(`T6L219`); appendText; 
   Sora`"Takeshi, you will go to the predetermined 
place in Zweite stock and wait there."`;
   waitForClick; clearText; marker; sound(`T6L220`); appendText; 
   Sora`"I'll let you know the timing of when to get 
into the tube."`;
   waitForClick; clearText; marker; sound(`T6L221`); appendText; 
   Sora`"Until then...I'll stay at HIMMEL and keep 
watch on LeMU."`;
   waitForClick; clearText; marker; sound(`T6L222`); appendText; 
   Sora`"I'll control the drainage duct and try to 
stop the fall...I'll try to keep the whole 
place going for as long as I can, even a 
minute, no, even a second longer. So - "`;
   waitForClick; clearText; marker; sound(`T6L223`); appendText; 
   Sora`"Please, Takeshi. You have to get out alive - 
please promise me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I promise."`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I left HIMMEL and looked upstairs.  `;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked my PDA display.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP2F_B2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 0 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It showed a map of LeMU and my escape 
route......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just a little bit ago, I had installed a 
data-linking program from HIMMEL's console 
that linked my PDA to LeMU's center. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had prepared it for me.`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_B2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At this point...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to just do it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a gamble.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I reached Zweite stock's second floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hallway was flooded just like the third 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, I've come to the second floor. What 
should I do?"`;
   waitForClick; clearText; marker; sound(`T6L224`); appendText; 
   Sora`"Got it, Takeshi. I've checked your current 
location and your direction."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see her, but I could hear her 
voice in my ear.`;
   waitForClick; clearText; marker; sound(`T6L225`); appendText; 
   Sora`"Please wait there for a minute. I'm going to 
re-close the flood hatches to the central 
area."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ok."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang, bang, bang...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A hollow sound echoed through the building.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Presumably she had blocked off the flood 
hatches in the flooded area.`;
   waitForClick; clearText; marker; sound(`T6L226`); appendText; 
   Sora`"I've finished closing the hatches. The Zweite 
elevator tube is sealed..."`;
   waitForClick; clearText; marker; sound(`T6L227`); appendText; 
   Sora`"Now then, please go into the Dolphin 
Carousel room and wait for your next 
instructions.  Do you know where it is?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I know the Dolphin Carousel reeeeaaally 
well."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's where you and I rode dolphins 
together."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's where you showed me the art of my 
other self..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T6L228`); appendText; 
   Sora`"Please hurry, Takeshi."`;
   waitForClick; clearText; marker; sound(`T6L229`); appendText; 
   Sora`"Go straight down that hall and turn left at 
the end. If you can't figure it out, check 
your PDA map."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I'll be all right."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Defying Sora's directions, I turned left down 
at a nearby corner and headed toward a certain 
corridor.`;
   waitForClick; clearText; marker; sound(`T6L230`); appendText; 
   Sora`"What are you doing!? It's not that way!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sorry Sora, I remembered that I had forgotten 
something."`;
   waitForClick; clearText; marker; sound(`T6L231`); appendText; 
   Sora`"There's no time! Please stick to the plan!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's voice grew shrill.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It will only take a minute. It won't make a 
difference."`;
   waitForClick; clearText; marker; sound(`T6L232`); appendText; 
   Sora`"No! We only have...not even ten minutes left!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can do this in ten minutes."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I slid into the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Phew...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It hadn't flooded yet in there and the 
machines were still going.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the terminal monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The window that was open showed a message 
confirming the last entered password.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I hit enter.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Willkommener LeMMIH Login : T.Y"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The manager-exclusive maintenance mode was in 
operation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In other words, we had cleared all of LeMMIH's 
security.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'The terminal in the Security Office...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I finally figured out the password...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's voice, which I had heard through my 
stupor, had been right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You...had made it in the nick of time...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Next time I see her, I'm buying her a 
fantastic dinner."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Alone, I began quickly searching for a way to 
back up the data.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what should I do......`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I opened a menu on the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know how to work it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I would need a disk to copy the data...`;
   waitForClick; clearText; marker; sound(`T6L233`); appendText; 
   Sora`"Takeshi!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Whoah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of a sudden Sora's voice thundered right 
in my ear.`;
   waitForClick; clearText; marker; sound(`T6L234`); appendText; 
   Sora`"What are you doing!? Hurry, hurry!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know!"`;
   waitForClick; clearText; marker; sound(`T6L235`); appendText; 
   Sora`"Seven minutes left!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Damn."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no good. I couldn't figure it out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Giving up, I left the room.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_01`, a1: 1, volume: 95 });
waitForSFX();
playSFX({ name: `SE00_05`, a1: 0, volume: 90 });
bgload({ name: `BG26A1R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The corridor outside the room had been 
drained and the flood hatches had been closed 
again.`;
   waitForClick; clearText; marker; sound(`T6L236`); appendText; 
   Sora`"Please, don't make any detours..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spoke in a troubled, exhausted voice.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Alright..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned around to see that the corridor on 
the other side was open.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This way?"`;
   waitForClick; clearText; marker; sound(`T6L237`); appendText; 
   Sora`"Yes. Six minutes left. Take the corridor and 
get to the right position."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All the side routes were closed off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd have to head toward the Dolphin Carousel.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`............`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Look, Sora, I'm here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spoke with bitterness in my voice.`;
   waitForClick; clearText; marker; sound(`T6L238`); appendText; 
   Sora`"Understood and confirmed. Now then -"`;
   waitForClick; clearText; marker; sound(`T6L239`); appendText; 
   Sora`"I'm going to drain the water from the 
central area into Dritte."`;
   waitForClick; clearText; marker; appendText; 
   Narr`No.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't make it in time...`;
   waitForClick; clearText; marker; sound(`T6L240`); appendText; 
   Sora`"Five minutes until the tube is operational. 
Please be ready to move at any time."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora spoke coldly, still invisible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was in front of the dolphins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The dolphins had been so pleasant and smiling 
before...now, they were hateful.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, won't you come over here?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You like dolphins, right?"`;
   waitForClick; clearText; marker; sound(`T6L241`); appendText; 
   Sora`"I can't. If I don't...concentrate...I might 
make a mistake."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't say that, come on..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't you want to ride the dolphins again 
together, one last time?"`;
   waitForClick; clearText; marker; sound(`T6L242`); appendText; 
   Sora`"Please don't speak to me, you'll distract me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"..............."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"....................."`;
   waitForClick; clearText; marker; sound(`T6L243`); appendText; 
   Sora`"Even after Dritte stock is flooded, HIMMEL 
should be all right for a little while."`;
   waitForClick; clearText; marker; sound(`T6L244`); appendText; 
   Sora`"I'll make sure that we definitely - no, 
absolutely - hang on until you make it to the 
top."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".................."`;
   waitForClick; clearText; marker; appendText; 
   Sora`".................."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"............"`;
   waitForClick; clearText; marker; sound(`T6L245`); appendText; 
   Sora`"It's nearly time...to part..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`So this was it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was there no way I could save Sora?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The five minutes passed quickly, mercilessly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`............................................`;
   waitForClick; clearText; marker; appendText; 
   Narr`................................`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I closed my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Plugged my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to see anything else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to hear anything else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I couldn't save her......`;
   waitForClick; clearText; marker; appendText; 
   Narr`It would have been better for us to throw our 
bodies from a cliff.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.............................................`;
   waitForClick; clearText; marker; sound(`T6L246`); appendText; 
   Sora`"Takeshi ? "`;
   waitForClick; clearText; marker; sound(`T6L247`); appendText; 
   Sora`"I'm sorry, Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`What...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even with my eyes closed, she was definitely 
there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was hearing her voice from inside my ears.`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A1`, transition: 20 });
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What's the matter, Sora? The five minutes 
should be up."`;
   waitForClick; clearText; marker; sound(`T6L248`); appendText; 
   Sora`"Well, you see, actually..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Through the voice converter I could hear 
Sora's troubled voice.`;
   waitForClick; clearText; marker; sound(`T6L249`); appendText; 
   Sora`"The door won't open."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`T6L250`); appendText; 
   Sora`"The central area's flood hatches aren't 
receiving the 'open' signal. Something's been 
disconnected."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Disconnected!?"`;
   waitForClick; clearText; marker; sound(`T6L251`); appendText; 
   Sora`"Yes. But I've found the damaged section."`;
   waitForClick; clearText; marker; sound(`T6L252`); appendText; 
   Sora`"I'm so sorry...but Takeshi, will you go fix 
it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of...of course. No problem!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Heaven, fate.........they were on my side.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They had not abandoned me. `;
   waitForClick; clearText; 
});
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran out of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora opened the doors blocking my way.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_03`, a1: 0, volume: 100 });
delay({ interval: 30 });
bgload({ name: `BG25A3`, transition: 10 });
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Where's the disconnection?"`;
   waitForClick; clearText; marker; sound(`T6L253`); appendText; 
   Sora`"Dritte stock, near the Control Room."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright. I'll go right there!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Down, down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Run, run, run.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In reality, my body was probably wracked with 
decompression sickness, and riddled with TB...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it wasn't something I was aware of.`;
   waitForClick; clearText; marker; appendText; 
   Narr`More importantly I had to move, faster, 
faster......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hurry there!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Falling again and again, covered in bruises, 
slipping down the stairs, I headed for the 
third floor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I'm here, Sora!"`;
   waitForClick; clearText; marker; sound(`T6L254`); appendText; 
   Sora`"Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice resonated gently in my ear.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Now then, where's the place?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey wait, what about tools? Can I fix it 
with just my hands?"`;
   waitForClick; clearText; marker; sound(`T6L255`); appendText; 
   Sora`"There are some simple tools in the Control 
Room. The main repair room is under the floor 
of the hallway you are in."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Under the floor?"`;
   waitForClick; clearText; marker; sound(`T6L256`); appendText; 
   Sora`"In any case, let's hurry."`;
   waitForClick; clearText; marker; sound(`T6L257`); appendText; 
   Sora`"I'm going to apply pressure and blast out 
the floor panel. For now, hide in the Control 
Room."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What??"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; sound(`T6L258`); appendText; 
   Sora`"5, 4, 3..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey!  Wa, wait!!"`;
   waitForClick; clearText; marker; sound(`T6L259`); appendText; 
   Sora`"2, 1..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 3 });
playSFX({ name: `SE07_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Booom!!!!`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wrenched open the Control Room door and 
sprang inside in the nick of time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I flew through the air, a blue-white light 
beamed through the entire corridor behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One second later and I would have been fried...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Soraaaaaaaaaaaaaaaaa!!!!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the hell!! You trying to kill me!?"`;
   waitForClick; clearText; marker; sound(`T6L260`); appendText; 
   Sora`"Ooooohhh! I—I'm sorry!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the sound of her voice, I could picture 
just how flustered she was.`;
   waitForClick; clearText; marker; sound(`T6L261`); appendText; 
   Sora`"Sorrysorrysorrysorrysorry...."`;
   waitForClick; clearText; marker; sound(`T6L262`); appendText; 
   Sora`"Forgive me, forgive me..."`;
   waitForClick; clearText; marker; sound(`T6L263`); appendText; 
   Sora`"I'm so sorry, I just lost my wits..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice gradually grew smaller.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay...you don't have to feel so bad. I'm 
fine. You just scared the crap out of me, 
that's all."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm all right. I'm fine. Look, see, I'm 
alive and everything."`;
   waitForClick; clearText; marker; sound(`T6L264`); appendText; 
   Sora`"Al-alright..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You can't kill me off that easy. I've still 
got things to do!"`;
   waitForClick; clearText; marker; sound(`T6L265`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So you calm down, okay, Sora?"`;
   waitForClick; clearText; marker; sound(`T6L266`); appendText; 
   Sora`"Yes...I will."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to hurry. That much was clear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But calmly, rationally, carefully.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked slowly around the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next to the console there was a small 
toolbox. It held radio pincers, nippers, and 
a screwdriver.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it would be enough.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around a little more...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I caught sight of a polycarbonate disc in a 
square case.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put it in my empty pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Clutching the toolbox, I left the room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
bgload({ name: `BG15B1`, transition: 20 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora, there's something wrong with the 
lights."`;
   waitForClick; clearText; marker; sound(`T6L267`); appendText; 
   Sora`"It does seem that way."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It seems.... What are you...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! Damn, I'm back in the hall, but you 
aren't going to blast me again, are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly remembering, I hopped around the 
corridor.`;
   waitForClick; clearText; marker; sound(`T6L268`); appendText; 
   Sora`"It's alright. I blocked the underground 
circuits to that section."`;
   waitForClick; clearText; marker; sound(`T6L269`); appendText; 
   Sora`"That's probably why the ceiling lights are 
acting strange."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Got it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was relieved to hear that.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, where do I need to fix?"`;
   waitForClick; clearText; marker; sound(`T6L270`); appendText; 
   Sora`"Nearby, there should be a place where the 
floorboards have come up. The blast succeeded 
at that."  `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Which way? Which way from my perspective?"`;
   waitForClick; clearText; marker; sound(`T6L271`); appendText; 
   Sora`"I-I'm sorry. That's the thing..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora? What's wrong?"`;
   waitForClick; clearText; marker; sound(`T6L272`); appendText; 
   Sora`"The bio sensor is down. I am unable to tell 
where you are. The camera isn't functioning, 
either."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Because you do crazy stuff like short out 
high-voltage..."`;
   waitForClick; clearText; marker; sound(`T6L273`); appendText; 
   Sora`"I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard her sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sighed along with her.`;
   waitForClick; clearText; marker; sound(`T6L274`); appendText; 
   Sora`"The place is 51 feet away from the door of 
the Control Room, to the left."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright. I'll find it myself. Don't worry."`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I had room for one more sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surely I could find one stupid, lousy 
floorboard.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took the toolbox to the hole in the floor 
and crouched down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pushing aside the nearby water, I searched 
with my hand under the floor for wiring.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A cable about the size of a water pipe hose 
was attached to the connector.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cable was twisted in places, and I could 
tell the connector was bent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I cut it with my nippers, dug out the copper 
wire with my pliers, replaced the connector, 
and reattached the cable.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I think I fixed it. What do you think, Sora, 
will it go through?"`;
   waitForClick; clearText; marker; sound(`T6L275`); appendText; 
   Sora`"Yes, probably."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's good."`;
   waitForClick; clearText; marker; sound(`T6L276`); appendText; 
   Sora`"Well, Takeshi?"`;
   waitForClick; clearText; marker; sound(`T6L277`); appendText; 
   Sora`"I'll begin operations for your escape. 
Please go back to Zweite stock."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay. Right away."`;
   waitForClick; clearText; marker; sound(`T6L278`); appendText; 
   Sora`"Yes...I'll be praying for your safety and a 
successful escape."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"..............."`;
   waitForClick; clearText; marker; sound(`T6L279`); appendText; 
   Sora`"......???"`;
   waitForClick; clearText; marker; sound(`T6L280`); appendText; 
   Sora`"Takeshi?"`;
   waitForClick; clearText; marker; sound(`T6L281`); appendText; 
   Sora`"Where are you, Takeshi!?"`;
   waitForClick; clearText; marker; sound(`T6L282`); appendText; 
   Sora`"I can't monitor you with the bio scan."`;
   waitForClick; clearText; marker; sound(`T6L283`); appendText; 
   Sora`"Where did you go from the corridor in Dritte 
stock?"`;
   waitForClick; clearText; marker; sound(`T6L284`); appendText; 
   Sora`"I can't see any trace of you on the emergency 
stairs."`;
   waitForClick; clearText; marker; sound(`T6L285`); appendText; 
   Sora`"Please tell me your location, Takeshi..."`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A1`, transition: 20, x: 240, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I'm right here, Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L286`); appendText; 
   Sora`"What...what are you doing here!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked thunderstruck.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora, you really need to learn more about 
hide-and-seek..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to say it lightly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When we played kick the can, you hid in a 
place where you'd get found right away!"`;
   waitForClick; clearText; marker; sound(`T6L287`); appendText; 
   Sora`"What are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Even if you can't monitor me with the bio 
scan, you could just listen to the sounds."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That is, if you wanted to find out where I 
was, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"..............."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, you made it easy for me come back here 
without being discovered."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I didn't know what I'd do if you wouldn't 
let me in the room."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L288`); appendText; 
   Sora`"S-stop fooling around!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She yelled.`;
   waitForClick; clearText; marker; sound(`T6L289`); appendText; 
   Sora`"We've only got one shot at this escape plan! 
And LeMU is reaching its limit..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We're way past its limits."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L290`); appendText; 
   Sora`".........Yes, that's right. Which is why -"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Do you really think I could leave you here?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Do you know why I came back here from IBF?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L291`); appendText; 
   Sora`"...But."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hesitating, she turned her gaze away from me.`;
   waitForClick; clearText; marker; sound(`T6L292`); appendText; 
   Sora`"Please, go back to Zweite."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Open all the flood gates in Dritte stock's 
passageways."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L293`); appendText; 
   Sora`"I can't."`;
   waitForClick; clearText; marker; sound(`T6L294`); appendText; 
   Sora`"Please go back to Zweite, quickly, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just hurry up and open them!"`;
   waitForClick; clearText; marker; sound(`T6L295`); appendText; 
   Sora`"I can't. If I open the doors, Dritte stock 
will be completely flooded."`;
   waitForClick; clearText; marker; sound(`T6L296`); appendText; 
   Sora`"Everything outside of HIMMEL will be covered 
in seawater."`;
   waitForClick; clearText; marker; sound(`T6L297`); appendText; 
   Sora`"If I do that, you'll never again be able 
to..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"If you won't open them, I'll open them by 
hand."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed HIMMEL's console.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L298`); appendText; 
   Sora`"Forget it. You can't control things from 
there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's a lie..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're lying."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"............"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Right now LeMMIH is in system-administrator 
only maintenance mode."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"From the big terminal you can control all of 
LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora Akanegasaki can't override the 
sys-admin's authority."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't sure, but I said it anyway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This was a huge risk...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I touched the panel and hit the keys.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know how to operate it, but 
something came up that looked about right.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6L299`); appendText; 
   Sora`"Takeshi! Stop this, please!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She glared at me.`;
   waitForClick; clearText; marker; sound(`T6L300`); appendText; 
   Sora`"If you don't hurry, The central area will 
collapse! You have to get out of here!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I selected the command to open all the flood 
hatches in the corridors, and hit enter.`;
   waitForClick; clearText; marker; sound(`T6L301`); appendText; 
   Sora`"Stop it! Don't move!!"`;
   waitForClick; clearText; marker; sound(`T6L302`); appendText; 
   Sora`"Takeshi, if you do any more...this time, I 
swear, I'll use this laser and burn your 
retinas off!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I covered both of my eyes with the palm of one 
hand...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
g_b3 = 0;
jump(`TL7A`);
