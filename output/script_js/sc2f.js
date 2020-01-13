varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 2`);
varop(`(28 0a a4) b2 := (00) 2`);
bgload({ name: `BG09A2`, transition: 10 });
clock(`23:45`);
goto(lbl_00000097).if(var_ba == 5);
setSceneTitle({ index: 105 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the infirmary...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Deciding to sleep was fine, but where to sleep?`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were four legitimate beds in the dry 
areas.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was one in the compression chamber, 
two in the infirmary and an examination 
table there as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was AWOL, Sora didn't need sleep, 
so there were exactly four of us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi had been relegated to the compression 
chamber as a potential danger to the women.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sara had said that since they were 
vulnerable young women they would take the 
two beds.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I...got stuck on the hard examination table.`;
   waitForClick; clearText; 
});
let lbl_00000097;
hideTextbox();
playBGM({ num: 18, volume: 97 });
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S251`); appendText; 
   //Takeshi
   Takeshi`"Hey...Kid..."`;
   waitForClick; clearText; marker; sound(`C2S252`); appendText; 
   //Takeshi
   Takeshi`"Kid..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C2S253`); appendText; 
   //Takeshi
   Takeshi`"You asleep already?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was shaking me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'd wake up even if I were asleep with you 
shaking me that hard."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S254`); appendText; 
   //Takeshi
   Takeshi`"So? Which is? You awake or asleep?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It should be obvious."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm sleeping like a log..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I closed my eyes.`;
   waitForClick; clearText; marker; sound(`C2S255`); appendText; 
   //Takeshi
   Takeshi`"Hey, come on, don't be like that."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; marker; sound(`C2S256`); appendText; 
   //Takeshi
   Takeshi`"I can't sleep..."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   //Kid
   Kid`"Last night you seemed like you were 
sleeping FINE!"`;
   waitForClick; clearText; marker; sound(`C2S257`); appendText; 
   //Takeshi
   Takeshi`"But I'm all alone in this tiny little cramped 
space."`;
   waitForClick; clearText; marker; sound(`C2S258`); appendText; 
   //Takeshi
   Takeshi`"It's like being cooped up in a coffin. 
It makes me feel..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's the same place you were snoring away 
last night!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You could sleep in a coffin. You could sleep 
in a cup of coffee."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S259`); appendText; 
   //Takeshi
   Takeshi`"Hey, that almost rhymes or something..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S260`); appendText; 
   //Takeshi
   Takeshi`"Coffin and coffee..."`;
   waitForClick; clearText; marker; sound(`C2S261`); appendText; 
   //Takeshi
   Takeshi`"'Coffee has caffeine in it. That wakes 
you up.'"`;
   waitForClick; clearText; marker; sound(`C2S262`); appendText; 
   //Takeshi
   Takeshi`"'So there's no way a normal person could 
catch a wink in a cup of coffee...'"`;
   waitForClick; clearText; marker; sound(`C2S263`); appendText; 
   //Takeshi
   Takeshi`"'But...caffeine wouldn't phase a big lunk 
like that Takeshi. He'd sleep like a baby.'"`;
   waitForClick; clearText; marker; sound(`C2S264`); appendText; 
   //Takeshi
   Takeshi`"Is that what you are trying to say with that 
almost rhyme of yours?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Stupid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S265`); appendText; 
   //Takeshi
   Takeshi`"Ha! Is that any way to talk to your elders?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm going to sleep."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S266`); appendText; 
   //Takeshi
   Takeshi`"Hey! Come on K-I-D!...Stay up with me a bit!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Good night."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned away from him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tug, tug, tug...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_10`, a1: 0, volume: 90 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thud!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi had pulled me off of the examination 
table.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Hey, what are you doing? I'll sue you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S267`); appendText; 
   //Takeshi
   Takeshi`"Come on, take it easy. Calm down..."`;
   waitForClick; clearText; marker; sound(`C2S268`); appendText; 
   //Takeshi
   Takeshi`"Let's have a drink. Y'know, man-to-man..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No thanks!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S269`); appendText; 
   //Takeshi
   Takeshi`"My thoughts exactly!"`;
   waitForClick; clearText; marker; sound(`C2S270`); appendText; 
   //Takeshi
   Takeshi`"Yuck, yuck, yuck, yuck, yuckity, yuck!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S271`); appendText; 
   //Takeshi
   Takeshi`"I'm nothing without you, Kid!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
bgload({ name: `EV_YU18A`, transition: 20 });
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; sound(`C2S272`); appendText; 
   //You
   You`"Be quiet!"`;
   waitForClick; clearText; marker; sound(`C2S273`); appendText; 
   //You
   You`"Cut it out the two of you! Just go to sleep!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, lying in the bed next to me, had snapped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She sat upright, a strange light emanating 
from her.`;
   waitForClick; clearText; marker; sound(`C2S274`); appendText; 
   //Takeshi
   Takeshi`"Oh, sorry for causing such a ruckus milady..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I walked out of the room with Takeshi's hand 
pushing me from behind.`;
   waitForClick; clearText; 
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
   marker; sound(`C2S275`); appendText; 
   //Takeshi
   Takeshi`"Hey, for now...why don't we hit the kiosk 
and get some beers." `;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi started walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stayed where I was.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Is there beer in LeMU?"`;
   waitForClick; clearText; marker; sound(`C2S276`); appendText; 
   //Takeshi
   Takeshi`"Uh, I don't think it was for sale, but it was 
stashed in the back of the fridge."`;
   waitForClick; clearText; marker; sound(`C2S277`); appendText; 
   //Takeshi
   Takeshi`"I figure some worker hid it in there..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But...I can't drink beer."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S278`); appendText; 
   //Takeshi
   Takeshi`"Huh? Why not?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped and turned around.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm not old enough."`;
   waitForClick; clearText; marker; sound(`C2S279`); appendText; 
   //Takeshi
   Takeshi`"So what?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Underage means you can't drink alcohol. It's 
the law."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S280`); appendText; 
   //Takeshi
   Takeshi`"So, what are you saying, you don't want 
to 'go break any laws there' boy scout?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Y-yeah..."`;
   waitForClick; clearText; marker; sound(`C2S281`); appendText; 
   //Takeshi
   Takeshi`"But you ate sandwiches and cola, right? 
And you didn't pay a cent."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's...because I had to survive..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S282`); appendText; 
   //Takeshi
   Takeshi`"Yuck, yuck...YUCK!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S283`); appendText; 
   //Takeshi
   Takeshi`"I bet you're the kind of kid that'll nark 
on the kid next to you in class if he's 
passing notes to his friends."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I...I am not..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S284`); appendText; 
   //Takeshi
   Takeshi`"You don't know if you are or not, 'cause you 
don't got any memory."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S285`); appendText; 
   //Takeshi
   Takeshi`"Oh, alright, alright."`;
   waitForClick; clearText; marker; sound(`C2S286`); appendText; 
   //Takeshi
   Takeshi`"You can drink cream soda then."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why cream soda?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S287`); appendText; 
   //Takeshi
   Takeshi`"Because you're just a wittle baby!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm not a baby!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm 16..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S288`); appendText; 
   //Takeshi
   Takeshi`"Ha, ha! Sixteen, huh?"`;
   waitForClick; clearText; marker; sound(`C2S289`); appendText; 
   //Takeshi
   Takeshi`"Sixteen...old enough to lead a whole gang of 
snot-nosed brats on your own."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Stop it."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sixteen is still underage, but I'm not a kid 
anymore."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm still not an adult, but I'm not a kid 
anymore...that's what I am."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S290`); appendText; 
   //Takeshi
   Takeshi`"Just WHAT about you is more than a kid?"`;
   waitForClick; clearText; marker; sound(`C2S291`); appendText; 
   //Takeshi
   Takeshi`"Kid...?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm...going back to bed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S292`); appendText; 
   //Takeshi
   Takeshi`"Liar, liar pants on fire!"`;
   waitForClick; clearText; marker; sound(`C2S293`); appendText; 
   //Takeshi
   Takeshi`"Right, right! Because you're a BIG boy... 
all grown up...nya, nya, nya..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S294`); appendText; 
   //Takeshi
   Takeshi`"What? Hey! Hold on a sec!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S295`); appendText; 
   //Takeshi
   Takeshi`"Kid...you got no memory, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"R-right..."`;
   waitForClick; clearText; marker; sound(`C2S296`); appendText; 
   //Takeshi
   Takeshi`"So...how do you know that you're 16?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Because...because..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"I...I dunno...why..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I mumbled I unconsciously held open the 
palm of my right hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stared absently at the palm of my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still didn't have any idea what had happened 
to my finger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no doubt that I had said I was 16.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't be sure I was right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if I was really that age - if I 
could believe my words.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S297`); appendText; 
   //Takeshi
   Takeshi`"Well, whatever."`;
   waitForClick; clearText; marker; sound(`C2S298`); appendText; 
   //Takeshi
   Takeshi`"Anyway, it's good that you remembered your 
age..."`;
   waitForClick; clearText; marker; sound(`C2S299`); appendText; 
   //Takeshi
   Takeshi`"Proof that you're slowly getting your 
memory back."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C2S300`); appendText; 
   //Takeshi
   Takeshi`"Hmmmm, 16, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S301`); appendText; 
   //Takeshi
   Takeshi`"So my guess wasn't that far off, huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S302`); appendText; 
   //Takeshi
   Takeshi`"Yesterday I guessed, right? I said you were 
around 14 or 15."`;
   waitForClick; clearText; marker; sound(`C2S303`); appendText; 
   //Takeshi
   Takeshi`"I suppose someone like you could be 16.... 
Could be possible enough..."`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Could be...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Could be? What's that supposed to mean?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at my arms, my legs and my whole body 
as if to check.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And lastly I touched my hands to my face...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S304`); appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S305`); appendText; 
   //Takeshi
   Takeshi`"Don't tell me you..."`;
   waitForClick; clearText; marker; sound(`C2S306`); appendText; 
   //Takeshi
   Takeshi`"You didn't forget your own face, did ya?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...face ...?"`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I put all my power into opening the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room had a high ceiling...and I ran toward 
the mirror on the room's far wall.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam!`;
   waitForClick; clearText; marker; appendText; 
   Narr`My leg caught on the bench and I crashed to 
the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my head slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The mirror was right in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I was inside it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`For some reason, all of the sudden I felt 
scared. I squeezed my eyes shut and looked 
down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I willed my legs to stand me up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My knees shook. I stumbled two or three steps.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand on the locker to keep myself 
from falling. I tried to walk...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as if the mirror were sucking 
me...toward it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put both hands on the mirror.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG12A1`, transition: 26 });
showDimOverlay();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c1_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c2_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Both of my eyes were slightly open, but 
I wasn't able to raise my face yet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was facing me and both of us had our hands 
facing each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could only see his body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His legs quivered. His palms shook. The mirror 
rattled as it shook.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took a breath.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My shaking stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At that moment, sound suddenly disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The other 'me' didn't move either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I waited for him to move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up ever so slightly.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I saw a whole other world behind his back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A bench lay knocked over...and clothing was 
scattered everywhere...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Someone was standing on the other side of the 
open door.`;
   waitForClick; clearText; marker; sound(`C2S307`); appendText; 
   //Takeshi
   Takeshi`"Hey, Kid!"`;
   waitForClick; clearText; marker; sound(`C2S308`); appendText; 
   //Takeshi
   Takeshi`"What's up with you? Running off like that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi stood with one hand on the door.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S309`); appendText; 
   //Takeshi
   Takeshi`"...A mirror?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`His voice made me want to look.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned my eyes around looking...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside the massive mirror...`;
   waitForClick; clearText; 
});
playBGM({ num: 17, volume: 100 });
bgload({ name: `EV_ET01A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'The face of some kid' who I didn't know was 
staring back at me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Ah...aaaahh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He screamed as if it were the end of the world.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His face contorted in a way that chilled my 
spine. He clutched at his hair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His body shook, wracked with convulsions.`;
   waitForClick; clearText; marker; sound(`C2S310`); appendText; 
   //Takeshi
   Takeshi`"Wh-what is it? What's going on! Kid!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He put his fingernails on his cheek then 
scratched harshly the flesh around his neck. 
His neck jutted forward, drooping downward 
and his tongue hung out.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No...no...no..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No...no...no...no...no...... 
no...no...no...no..."`;
   waitForClick; clearText; marker; sound(`C2S311`); appendText; 
   //Takeshi
   Takeshi`"What is it? What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"This...this...this..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's not me..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's not me..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's not me..."`;
   waitForClick; clearText; marker; sound(`C2S312`); appendText; 
   //Takeshi
   Takeshi`"What's not you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"AAAaaah....ohhhhhh....."`;
   waitForClick; clearText; marker; sound(`C2S313`); appendText; 
   //Takeshi
   Takeshi`"Damn...what am I supposed to do!?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No...no...no..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's not me...it's not me...it's not me..."`;
   waitForClick; clearText; marker; sound(`C2S314`); appendText; 
   //Takeshi
   Takeshi`"J-just hold on!"`;
   waitForClick; clearText; marker; sound(`C2S315`); appendText; 
   //Takeshi
   Takeshi`"I'll go get everyone!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know who the 'me' was in the other 
side of the mirror.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't the face of the Kid that I knew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't the sick color of his skin, or his 
bloodshot eyes or the way his tongue hung 
limply.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His whole appearance was completely different 
than anything I had in my memory of myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wasn't me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No...I wasn't him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who was he...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who in the world was I...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The me that was standing there didn't 
know who I was....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where....was the real me...?`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Who...are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked him...and he asked me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Who...am I?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked me and he asked he.`;
   waitForClick; clearText; 
});
varop(`(28 0a a2) 41 := (00) 21`);
varop(`(28 0a a2) 42 := (00) 4`);
varop(`(28 0a a2) 50 := (00) rgb(240,240,240)`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was confused and losing touch with reality.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`Who...are you?`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`                  `;
   nextPage(00); 
   Narr`Who...am I?`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Someone whispered in my ear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if it were me or him...`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`Who...are you?`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`                  `;
   nextPage(00); 
   Narr`Who...am I?`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My eyes clouded over and I couldn't see 
clearly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His body swung back and forth like a pendulum, 
finally disappearing from my sight.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Pure white darkness drifted, floating.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it wasn't me or him floating but both 
me and him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lost sight of where I ended and the world 
began.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had lost all sense of everything. I had no 
way to confirm my existence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just let myself drift.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a baby floating in the womb...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dissolving...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dissolving...dissolving...dissolving...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I dissolved into pure white darkness, the pure 
white darkness becoming me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was nowhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The me that was nowhere, was everywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So...where...was the real me...?`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`Who...are you?`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`                  `;
   nextPage(00); 
   Narr`Who...am I?`;
   nextPage(01); delay(60); nextPage(04); 
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
   Narr`And the whispering voice disappeared, 
swallowed by the dark light.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
goto(lbl_0000074b).if(var_ba != 5);
varop(`(28 0a a4) b3 := (00) 1`);
varop(`(28 0a a4) f2 := (00) 1`);
jump(`YC3A`);
let lbl_0000074b;
varop(`(28 0a a4) b3 := (00) 0`);
jump(`YC3A`);
