l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
bgload({ name: `BG09A2`, transition: 10 });
clock(`23:45`);
if (l_coco_point == 5) goto(lbl_00000097);
setSceneTitle({ index: 105 });
showTextbox();
text(() => {
   `In the infirmary...`;
   `Deciding to sleep was fine, but where to sleep?`;
   `There were four legitimate beds in the dry 
areas.`;
   `There was one in the compression chamber, 
two in the infirmary and an examination 
table there as well.`;
   `Tsugumi was AWOL, Sora didn't need sleep, 
so there were exactly four of us.`;
   `Takeshi had been relegated to the compression 
chamber as a potential danger to the women.`;
   `You and Sara had said that since they were 
vulnerable young women they would take the 
two beds.`;
   `So I...got stuck on the hard examination table.`;

});
let lbl_00000097;
hideTextbox();
playBGM({ num: 18, volume: 97 });
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S251)`"Hey...Kid..."`;
   Takeshi(C2S252)`"Kid..."`;

});
showTextbox();
text(() => {
   Takeshi(C2S253)`"You asleep already?"`;
   `Takeshi was shaking me.`;
   Kid`"I'd wake up even if I were asleep with you 
shaking me that hard."`;

});
fgload({ id: 1, name: `KB08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S254)`"So? Which is? You awake or asleep?"`;
   Kid`"It should be obvious."`;
   Kid`"I'm sleeping like a log..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `I closed my eyes.`;
   Takeshi(C2S255)`"Hey, come on, don't be like that."`;
   Kid`"..."`;
   Takeshi(C2S256)`"I can't sleep..."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG09A2`, transition: 26 });
fgload({ id: 1, name: `KB03ADL`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid`"Last night you seemed like you were 
sleeping FINE!"`;
   Takeshi(C2S257)`"But I'm all alone in this tiny little cramped 
space."`;
   Takeshi(C2S258)`"It's like being cooped up in a coffin. 
It makes me feel..."`;
   Kid`"It's the same place you were snoring away 
last night!"`;
   Kid`"You could sleep in a coffin. You could sleep 
in a cup of coffee."`;

});
fgload({ id: 1, name: `KB02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S259)`"Hey, that almost rhymes or something..."`;

});
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S260)`"Coffin and coffee..."`;
   Takeshi(C2S261)`"'Coffee has caffeine in it. That wakes 
you up.'"`;
   Takeshi(C2S262)`"'So there's no way a normal person could 
catch a wink in a cup of coffee...'"`;
   Takeshi(C2S263)`"'But...caffeine wouldn't phase a big lunk 
like that Takeshi. He'd sleep like a baby.'"`;
   Takeshi(C2S264)`"Is that what you are trying to say with that 
almost rhyme of yours?"`;
   Kid`"Stupid."`;

});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S265)`"Ha! Is that any way to talk to your elders?"`;
   Kid`"I'm going to sleep."`;

});
fgload({ id: 1, name: `KB03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S266)`"Hey! Come on K-I-D!...Stay up with me a bit!"`;
   Kid`"Good night."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I turned away from him.`;
   `Tug, tug, tug...`;

});
hideTextbox();
playSFX({ name: `SE05_10`, a1: 0, volume: 90 });
shakeScreenHard();
showTextbox();
text(() => {
   `Thud!`;
   `Takeshi had pulled me off of the examination 
table.`;

});
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Hey, what are you doing? I'll sue you!"`;

});
fgload({ id: 1, name: `KB02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S267)`"Come on, take it easy. Calm down..."`;
   Takeshi(C2S268)`"Let's have a drink. Y'know, man-to-man..."`;
   Kid`"No thanks!"`;

});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S269)`"My thoughts exactly!"`;
   Takeshi(C2S270)`"Yuck, yuck, yuck, yuck, yuckity, yuck!"`;

});
fgload({ id: 1, name: `KB03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S271)`"I'm nothing without you, Kid!"`;

});
removeFG({ id: 1, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `And then...`;

});
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
bgload({ name: `EV_YU18A`, transition: 20 });
delay({ interval: 60 });
showTextbox();
text(() => {
   You(C2S272)`"Be quiet!"`;
   You(C2S273)`"Cut it out the two of you! Just go to sleep!"`;
   `You, lying in the bed next to me, had snapped.`;
   `She sat upright, a strange light emanating 
from her.`;
   Takeshi(C2S274)`"Oh, sorry for causing such a ruckus milady..."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
showTextbox();
text(() => {
   `I walked out of the room with Takeshi's hand 
pushing me from behind.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
playBGM({ num: 18, volume: 97 });
bgload({ name: `BG08A1`, transition: 20 });
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Takeshi(C2S275)`"Hey, for now...why don't we hit the kiosk 
and get some beers." `;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi started walking.`;
   `I stayed where I was.`;
   Kid`"Is there beer in LeMU?"`;
   Takeshi(C2S276)`"Uh, I don't think it was for sale, but it was 
stashed in the back of the fridge."`;
   Takeshi(C2S277)`"I figure some worker hid it in there..."`;
   Kid`"But...I can't drink beer."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S278)`"Huh? Why not?"`;
   `I stopped and turned around.`;
   Kid`"I'm not old enough."`;
   Takeshi(C2S279)`"So what?"`;
   Kid`"Underage means you can't drink alcohol. It's 
the law."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S280)`"So, what are you saying, you don't want 
to 'go break any laws there' boy scout?"`;
   Kid`"Y-yeah..."`;
   Takeshi(C2S281)`"But you ate sandwiches and cola, right? 
And you didn't pay a cent."`;
   Kid`"That's...because I had to survive..."`;

});
fgload({ id: 1, name: `KB13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S282)`"Yuck, yuck...YUCK!"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S283)`"I bet you're the kind of kid that'll nark 
on the kid next to you in class if he's 
passing notes to his friends."`;
   Kid`"I...I am not..."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S284)`"You don't know if you are or not, 'cause you 
don't got any memory."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S285)`"Oh, alright, alright."`;
   Takeshi(C2S286)`"You can drink cream soda then."`;
   Kid`"Why cream soda?"`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S287)`"Because you're just a wittle baby!"`;
   Kid`"I'm not a baby!"`;
   Kid`"I'm 16..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S288)`"Ha, ha! Sixteen, huh?"`;
   Takeshi(C2S289)`"Sixteen...old enough to lead a whole gang of 
snot-nosed brats on your own."`;
   Kid`"Stop it."`;
   Kid`"Sixteen is still underage, but I'm not a kid 
anymore."`;
   Kid`"I'm still not an adult, but I'm not a kid 
anymore...that's what I am."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S290)`"Just WHAT about you is more than a kid?"`;
   Takeshi(C2S291)`"Kid...?"`;
   Kid`"I'm...going back to bed."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S292)`"Liar, liar pants on fire!"`;
   Takeshi(C2S293)`"Right, right! Because you're a BIG boy... 
all grown up...nya, nya, nya..."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S294)`"What? Hey! Hold on a sec!"`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S295)`"Kid...you got no memory, right?"`;
   Kid`"R-right..."`;
   Takeshi(C2S296)`"So...how do you know that you're 16?"`;
   Kid`"Because...because..."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid`"I...I dunno...why..."`;
   `As I mumbled I unconsciously held open the 
palm of my right hand.`;
   `I stared absently at the palm of my hand.`;
   `I still didn't have any idea what had happened 
to my finger.`;
   `There was no doubt that I had said I was 16.`;
   `But I couldn't be sure I was right.`;
   `I wondered if I was really that age - if I 
could believe my words.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S297)`"Well, whatever."`;
   Takeshi(C2S298)`"Anyway, it's good that you remembered your 
age..."`;
   Takeshi(C2S299)`"Proof that you're slowly getting your 
memory back."`;
   Kid`"........."`;
   Takeshi(C2S300)`"Hmmmm, 16, huh?"`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S301)`"So my guess wasn't that far off, huh?"`;
   Kid`"...Huh?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S302)`"Yesterday I guessed, right? I said you were 
around 14 or 15."`;
   Takeshi(C2S303)`"I suppose someone like you could be 16.... 
Could be possible enough..."`;

});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `(Could be...?)`;
   `(Could be? What's that supposed to mean?)`;
   `I looked at my arms, my legs and my whole body 
as if to check.`;
   `And lastly I touched my hands to my face...`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S304)`"What?"`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S305)`"Don't tell me you..."`;
   Takeshi(C2S306)`"You didn't forget your own face, did ya?"`;
   Kid`"...face ...?"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG12A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   `I put all my power into opening the door.`;
   `The room had a high ceiling...and I ran toward 
the mirror on the room's far wall.`;

});
playSFX({ name: `SE05_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bam!`;
   `My leg caught on the bench and I crashed to 
the floor.`;
   `I lifted my head slowly.`;
   `The mirror was right in front of me.`;
   `And I was inside it.`;
   `I looked at me.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `For some reason, all of the sudden I felt 
scared. I squeezed my eyes shut and looked 
down.`;
   `I willed my legs to stand me up.`;
   `My knees shook. I stumbled two or three steps.`;
   `I put my hand on the locker to keep myself 
from falling. I tried to walk...`;
   `It was as if the mirror were sucking 
me...toward it...`;
   `I put both hands on the mirror.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG12A1`, transition: 26 });
showDimOverlay();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c1_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 2;
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   `Both of my eyes were slightly open, but 
I wasn't able to raise my face yet.`;
   `I was facing me and both of us had our hands 
facing each other.`;
   `I could only see his body.`;
   `His legs quivered. His palms shook. The mirror 
rattled as it shook.`;
   `I took a breath.`;

});
hideTextbox();
closeShakeScreenAnim();
stopBGM();
showTextbox();
text(() => {
   `My shaking stopped.`;
   `At that moment, sound suddenly disappeared.`;
   `I didn't move.`;
   `The other 'me' didn't move either.`;
   `I waited for him to move.`;
   `I looked up ever so slightly.`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `I saw a whole other world behind his back.`;
   `A bench lay knocked over...and clothing was 
scattered everywhere...`;
   `Someone was standing on the other side of the 
open door.`;
   Takeshi(C2S307)`"Hey, Kid!"`;
   Takeshi(C2S308)`"What's up with you? Running off like that..."`;

});
fgload({ id: 1, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I turned around.`;
   `Takeshi stood with one hand on the door.`;

});
fgload({ id: 1, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C2S309)`"...A mirror?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `His voice made me want to look.`;
   `I turned my eyes around looking...`;
   `Inside the massive mirror...`;

});
playBGM({ num: 17, volume: 100 });
bgload({ name: `EV_ET01A`, transition: 10 });
showTextbox();
text(() => {
   `'The face of some kid' who I didn't know was 
staring back at me.`;
   Kid`"Ah...aaaahh...."`;
   `He screamed as if it were the end of the world.`;
   `His face contorted in a way that chilled my 
spine. He clutched at his hair.`;
   `His body shook, wracked with convulsions.`;
   Takeshi(C2S310)`"Wh-what is it? What's going on! Kid!!!"`;
   `He put his fingernails on his cheek then 
scratched harshly the flesh around his neck. 
His neck jutted forward, drooping downward 
and his tongue hung out.`;
   Kid`"No...no...no..."`;
   Kid`"No...no...no...no...no...... 
no...no...no...no..."`;
   Takeshi(C2S311)`"What is it? What's wrong?"`;
   Kid`"This...this...this..."`;
   Kid`"It's not me..."`;
   Kid`"It's not me..."`;
   Kid`"It's not me..."`;
   Takeshi(C2S312)`"What's not you?"`;
   Kid`"AAAaaah....ohhhhhh....."`;
   Takeshi(C2S313)`"Damn...what am I supposed to do!?"`;
   Kid`"No...no...no..."`;
   Kid`"It's not me...it's not me...it's not me..."`;
   Takeshi(C2S314)`"J-just hold on!"`;
   Takeshi(C2S315)`"I'll go get everyone!"`;
   `I didn't know who the 'me' was in the other 
side of the mirror.`;
   `It wasn't the face of the Kid that I knew.`;
   `It wasn't the sick color of his skin, or his 
bloodshot eyes or the way his tongue hung 
limply.`;
   `His whole appearance was completely different 
than anything I had in my memory of myself.`;
   `He wasn't me.`;
   `No...I wasn't him.`;
   `Who was he...?`;
   `Who in the world was I...?`;
   `The me that was standing there didn't 
know who I was....`;
   `Where....was the real me...?`;
   Kid`"Who...are you?"`;
   `I asked him...and he asked me.`;
   Kid`"Who...am I?"`;
   `I asked me and he asked he.`;

});
eff_41 = 21;
eff_42 = 4;
eff_50 = rgb(240,240,240);
showDimInAndOutAnim();
showTextbox();
text(() => {
   `I was confused and losing touch with reality.`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `                 ${nextPage(0)}Who...are you?${nextPage(1)}${wait(60)}${noWait}`;
   `                  ${nextPage(0)}Who...am I?${nextPage(1)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Someone whispered in my ear.`;
   `I didn't know if it were me or him...`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `                 ${nextPage(0)}Who...are you?${nextPage(1)}${wait(60)}${noWait}`;
   `                  ${nextPage(0)}Who...am I?${nextPage(1)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `My eyes clouded over and I couldn't see 
clearly.`;
   `His body swung back and forth like a pendulum, 
finally disappearing from my sight.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
closeDimInAndOutAndFilterAnim();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Pure white darkness drifted, floating.`;
   `But it wasn't me or him floating but both 
me and him.`;
   `I lost sight of where I ended and the world 
began.`;
   `I had lost all sense of everything. I had no 
way to confirm my existence.`;
   `I just let myself drift.`;
   `Like a baby floating in the womb...`;
   `Dissolving...`;
   `Dissolving...dissolving...dissolving...`;
   `I dissolved into pure white darkness, the pure 
white darkness becoming me.`;
   `I was nowhere.`;
   `The me that was nowhere, was everywhere.`;
   `So...where...was the real me...?`;

});
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   `


${noWait}`;
   `                 ${nextPage(0)}Who...are you?${nextPage(1)}${wait(60)}${noWait}`;
   `                  ${nextPage(0)}Who...am I?${nextPage(1)}${wait(60)}${noWait}`;
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
   `And the whispering voice disappeared, 
swallowed by the dark light.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
if (l_coco_point != 5) goto(lbl_0000074b);
l_choice = 1;
l_sc2f_clear = 1;
jump(`YC3A`);
let lbl_0000074b;
l_choice = 0;
jump(`YC3A`);
