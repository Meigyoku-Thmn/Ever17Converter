l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
bgload({ name: `BG09A2`, transition: 10 });
clock(`23:45`);
if (l_coco_point == 5) goto(lbl_00000097);
setSceneTitle({ index: 105 });
showTextbox();
text(() => {
   marker; appendText; 
   `In the infirmary...`;
   waitForClick; clearText; marker; appendText; 
   `Deciding to sleep was fine, but where to sleep?`;
   waitForClick; clearText; marker; appendText; 
   `There were four legitimate beds in the dry 
areas.`;
   waitForClick; clearText; marker; appendText; 
   `There was one in the compression chamber, 
two in the infirmary and an examination 
table there as well.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was AWOL, Sora didn't need sleep, 
so there were exactly four of us.`;
   waitForClick; clearText; marker; appendText; 
   `Takeshi had been relegated to the compression 
chamber as a potential danger to the women.`;
   waitForClick; clearText; marker; appendText; 
   `You and Sara had said that since they were 
vulnerable young women they would take the 
two beds.`;
   waitForClick; clearText; marker; appendText; 
   `So I...got stuck on the hard examination table.`;
   waitForClick; clearText; 
});
let lbl_00000097;
hideTextbox();
playBGM({ num: 18, volume: 97 });
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S251`); appendText; 
   Takeshi`"Hey...Kid..."`;
   waitForClick; clearText; marker; sound(`C2S252`); appendText; 
   Takeshi`"Kid..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C2S253`); appendText; 
   Takeshi`"You asleep already?"`;
   waitForClick; clearText; marker; appendText; 
   `Takeshi was shaking me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'd wake up even if I were asleep with you 
shaking me that hard."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S254`); appendText; 
   Takeshi`"So? Which is? You awake or asleep?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It should be obvious."`;
   waitForClick; clearText; marker; appendText; 
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
   `I closed my eyes.`;
   waitForClick; clearText; marker; sound(`C2S255`); appendText; 
   Takeshi`"Hey, come on, don't be like that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; sound(`C2S256`); appendText; 
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
   Kid`"Last night you seemed like you were 
sleeping FINE!"`;
   waitForClick; clearText; marker; sound(`C2S257`); appendText; 
   Takeshi`"But I'm all alone in this tiny little cramped 
space."`;
   waitForClick; clearText; marker; sound(`C2S258`); appendText; 
   Takeshi`"It's like being cooped up in a coffin. 
It makes me feel..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's the same place you were snoring away 
last night!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You could sleep in a coffin. You could sleep 
in a cup of coffee."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S259`); appendText; 
   Takeshi`"Hey, that almost rhymes or something..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S260`); appendText; 
   Takeshi`"Coffin and coffee..."`;
   waitForClick; clearText; marker; sound(`C2S261`); appendText; 
   Takeshi`"'Coffee has caffeine in it. That wakes 
you up.'"`;
   waitForClick; clearText; marker; sound(`C2S262`); appendText; 
   Takeshi`"'So there's no way a normal person could 
catch a wink in a cup of coffee...'"`;
   waitForClick; clearText; marker; sound(`C2S263`); appendText; 
   Takeshi`"'But...caffeine wouldn't phase a big lunk 
like that Takeshi. He'd sleep like a baby.'"`;
   waitForClick; clearText; marker; sound(`C2S264`); appendText; 
   Takeshi`"Is that what you are trying to say with that 
almost rhyme of yours?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Stupid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S265`); appendText; 
   Takeshi`"Ha! Is that any way to talk to your elders?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm going to sleep."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S266`); appendText; 
   Takeshi`"Hey! Come on K-I-D!...Stay up with me a bit!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Good night."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I turned away from him.`;
   waitForClick; clearText; marker; appendText; 
   `Tug, tug, tug...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_10`, a1: 0, volume: 90 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   `Thud!`;
   waitForClick; clearText; marker; appendText; 
   `Takeshi had pulled me off of the examination 
table.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, what are you doing? I'll sue you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S267`); appendText; 
   Takeshi`"Come on, take it easy. Calm down..."`;
   waitForClick; clearText; marker; sound(`C2S268`); appendText; 
   Takeshi`"Let's have a drink. Y'know, man-to-man..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No thanks!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S269`); appendText; 
   Takeshi`"My thoughts exactly!"`;
   waitForClick; clearText; marker; sound(`C2S270`); appendText; 
   Takeshi`"Yuck, yuck, yuck, yuck, yuckity, yuck!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S271`); appendText; 
   Takeshi`"I'm nothing without you, Kid!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `And then...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
bgload({ name: `EV_YU18A`, transition: 20 });
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; sound(`C2S272`); appendText; 
   You`"Be quiet!"`;
   waitForClick; clearText; marker; sound(`C2S273`); appendText; 
   You`"Cut it out the two of you! Just go to sleep!"`;
   waitForClick; clearText; marker; appendText; 
   `You, lying in the bed next to me, had snapped.`;
   waitForClick; clearText; marker; appendText; 
   `She sat upright, a strange light emanating 
from her.`;
   waitForClick; clearText; marker; sound(`C2S274`); appendText; 
   Takeshi`"Oh, sorry for causing such a ruckus milady..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   `I walked out of the room with Takeshi's hand 
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
   Takeshi`"Hey, for now...why don't we hit the kiosk 
and get some beers." `;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Takeshi started walking.`;
   waitForClick; clearText; marker; appendText; 
   `I stayed where I was.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is there beer in LeMU?"`;
   waitForClick; clearText; marker; sound(`C2S276`); appendText; 
   Takeshi`"Uh, I don't think it was for sale, but it was 
stashed in the back of the fridge."`;
   waitForClick; clearText; marker; sound(`C2S277`); appendText; 
   Takeshi`"I figure some worker hid it in there..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...I can't drink beer."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S278`); appendText; 
   Takeshi`"Huh? Why not?"`;
   waitForClick; clearText; marker; appendText; 
   `I stopped and turned around.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm not old enough."`;
   waitForClick; clearText; marker; sound(`C2S279`); appendText; 
   Takeshi`"So what?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Underage means you can't drink alcohol. It's 
the law."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S280`); appendText; 
   Takeshi`"So, what are you saying, you don't want 
to 'go break any laws there' boy scout?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y-yeah..."`;
   waitForClick; clearText; marker; sound(`C2S281`); appendText; 
   Takeshi`"But you ate sandwiches and cola, right? 
And you didn't pay a cent."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's...because I had to survive..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S282`); appendText; 
   Takeshi`"Yuck, yuck...YUCK!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S283`); appendText; 
   Takeshi`"I bet you're the kind of kid that'll nark 
on the kid next to you in class if he's 
passing notes to his friends."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I am not..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S284`); appendText; 
   Takeshi`"You don't know if you are or not, 'cause you 
don't got any memory."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S285`); appendText; 
   Takeshi`"Oh, alright, alright."`;
   waitForClick; clearText; marker; sound(`C2S286`); appendText; 
   Takeshi`"You can drink cream soda then."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why cream soda?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S287`); appendText; 
   Takeshi`"Because you're just a wittle baby!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm not a baby!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm 16..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S288`); appendText; 
   Takeshi`"Ha, ha! Sixteen, huh?"`;
   waitForClick; clearText; marker; sound(`C2S289`); appendText; 
   Takeshi`"Sixteen...old enough to lead a whole gang of 
snot-nosed brats on your own."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Stop it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sixteen is still underage, but I'm not a kid 
anymore."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm still not an adult, but I'm not a kid 
anymore...that's what I am."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S290`); appendText; 
   Takeshi`"Just WHAT about you is more than a kid?"`;
   waitForClick; clearText; marker; sound(`C2S291`); appendText; 
   Takeshi`"Kid...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm...going back to bed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S292`); appendText; 
   Takeshi`"Liar, liar pants on fire!"`;
   waitForClick; clearText; marker; sound(`C2S293`); appendText; 
   Takeshi`"Right, right! Because you're a BIG boy... 
all grown up...nya, nya, nya..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S294`); appendText; 
   Takeshi`"What? Hey! Hold on a sec!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S295`); appendText; 
   Takeshi`"Kid...you got no memory, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"R-right..."`;
   waitForClick; clearText; marker; sound(`C2S296`); appendText; 
   Takeshi`"So...how do you know that you're 16?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Because...because..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I...I dunno...why..."`;
   waitForClick; clearText; marker; appendText; 
   `As I mumbled I unconsciously held open the 
palm of my right hand.`;
   waitForClick; clearText; marker; appendText; 
   `I stared absently at the palm of my hand.`;
   waitForClick; clearText; marker; appendText; 
   `I still didn't have any idea what had happened 
to my finger.`;
   waitForClick; clearText; marker; appendText; 
   `There was no doubt that I had said I was 16.`;
   waitForClick; clearText; marker; appendText; 
   `But I couldn't be sure I was right.`;
   waitForClick; clearText; marker; appendText; 
   `I wondered if I was really that age - if I 
could believe my words.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S297`); appendText; 
   Takeshi`"Well, whatever."`;
   waitForClick; clearText; marker; sound(`C2S298`); appendText; 
   Takeshi`"Anyway, it's good that you remembered your 
age..."`;
   waitForClick; clearText; marker; sound(`C2S299`); appendText; 
   Takeshi`"Proof that you're slowly getting your 
memory back."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C2S300`); appendText; 
   Takeshi`"Hmmmm, 16, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S301`); appendText; 
   Takeshi`"So my guess wasn't that far off, huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S302`); appendText; 
   Takeshi`"Yesterday I guessed, right? I said you were 
around 14 or 15."`;
   waitForClick; clearText; marker; sound(`C2S303`); appendText; 
   Takeshi`"I suppose someone like you could be 16.... 
Could be possible enough..."`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `(Could be...?)`;
   waitForClick; clearText; marker; appendText; 
   `(Could be? What's that supposed to mean?)`;
   waitForClick; clearText; marker; appendText; 
   `I looked at my arms, my legs and my whole body 
as if to check.`;
   waitForClick; clearText; marker; appendText; 
   `And lastly I touched my hands to my face...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S304`); appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S305`); appendText; 
   Takeshi`"Don't tell me you..."`;
   waitForClick; clearText; marker; sound(`C2S306`); appendText; 
   Takeshi`"You didn't forget your own face, did ya?"`;
   waitForClick; clearText; marker; appendText; 
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
   `I put all my power into opening the door.`;
   waitForClick; clearText; marker; appendText; 
   `The room had a high ceiling...and I ran toward 
the mirror on the room's far wall.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Bam!`;
   waitForClick; clearText; marker; appendText; 
   `My leg caught on the bench and I crashed to 
the floor.`;
   waitForClick; clearText; marker; appendText; 
   `I lifted my head slowly.`;
   waitForClick; clearText; marker; appendText; 
   `The mirror was right in front of me.`;
   waitForClick; clearText; marker; appendText; 
   `And I was inside it.`;
   waitForClick; clearText; marker; appendText; 
   `I looked at me.`;
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
   `For some reason, all of the sudden I felt 
scared. I squeezed my eyes shut and looked 
down.`;
   waitForClick; clearText; marker; appendText; 
   `I willed my legs to stand me up.`;
   waitForClick; clearText; marker; appendText; 
   `My knees shook. I stumbled two or three steps.`;
   waitForClick; clearText; marker; appendText; 
   `I put my hand on the locker to keep myself 
from falling. I tried to walk...`;
   waitForClick; clearText; marker; appendText; 
   `It was as if the mirror were sucking 
me...toward it...`;
   waitForClick; clearText; marker; appendText; 
   `I put both hands on the mirror.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   `Both of my eyes were slightly open, but 
I wasn't able to raise my face yet.`;
   waitForClick; clearText; marker; appendText; 
   `I was facing me and both of us had our hands 
facing each other.`;
   waitForClick; clearText; marker; appendText; 
   `I could only see his body.`;
   waitForClick; clearText; marker; appendText; 
   `His legs quivered. His palms shook. The mirror 
rattled as it shook.`;
   waitForClick; clearText; marker; appendText; 
   `I took a breath.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `My shaking stopped.`;
   waitForClick; clearText; marker; appendText; 
   `At that moment, sound suddenly disappeared.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't move.`;
   waitForClick; clearText; marker; appendText; 
   `The other 'me' didn't move either.`;
   waitForClick; clearText; marker; appendText; 
   `I waited for him to move.`;
   waitForClick; clearText; marker; appendText; 
   `I looked up ever so slightly.`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `I saw a whole other world behind his back.`;
   waitForClick; clearText; marker; appendText; 
   `A bench lay knocked over...and clothing was 
scattered everywhere...`;
   waitForClick; clearText; marker; appendText; 
   `Someone was standing on the other side of the 
open door.`;
   waitForClick; clearText; marker; sound(`C2S307`); appendText; 
   Takeshi`"Hey, Kid!"`;
   waitForClick; clearText; marker; sound(`C2S308`); appendText; 
   Takeshi`"What's up with you? Running off like that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I turned around.`;
   waitForClick; clearText; marker; appendText; 
   `Takeshi stood with one hand on the door.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C2S309`); appendText; 
   Takeshi`"...A mirror?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `His voice made me want to look.`;
   waitForClick; clearText; marker; appendText; 
   `I turned my eyes around looking...`;
   waitForClick; clearText; marker; appendText; 
   `Inside the massive mirror...`;
   waitForClick; clearText; 
});
playBGM({ num: 17, volume: 100 });
bgload({ name: `EV_ET01A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   `'The face of some kid' who I didn't know was 
staring back at me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah...aaaahh...."`;
   waitForClick; clearText; marker; appendText; 
   `He screamed as if it were the end of the world.`;
   waitForClick; clearText; marker; appendText; 
   `His face contorted in a way that chilled my 
spine. He clutched at his hair.`;
   waitForClick; clearText; marker; appendText; 
   `His body shook, wracked with convulsions.`;
   waitForClick; clearText; marker; sound(`C2S310`); appendText; 
   Takeshi`"Wh-what is it? What's going on! Kid!!!"`;
   waitForClick; clearText; marker; appendText; 
   `He put his fingernails on his cheek then 
scratched harshly the flesh around his neck. 
His neck jutted forward, drooping downward 
and his tongue hung out.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...no...no..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...no...no...no...no...... 
no...no...no...no..."`;
   waitForClick; clearText; marker; sound(`C2S311`); appendText; 
   Takeshi`"What is it? What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This...this...this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not me..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not me..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not me..."`;
   waitForClick; clearText; marker; sound(`C2S312`); appendText; 
   Takeshi`"What's not you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"AAAaaah....ohhhhhh....."`;
   waitForClick; clearText; marker; sound(`C2S313`); appendText; 
   Takeshi`"Damn...what am I supposed to do!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...no...no..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not me...it's not me...it's not me..."`;
   waitForClick; clearText; marker; sound(`C2S314`); appendText; 
   Takeshi`"J-just hold on!"`;
   waitForClick; clearText; marker; sound(`C2S315`); appendText; 
   Takeshi`"I'll go get everyone!"`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know who the 'me' was in the other 
side of the mirror.`;
   waitForClick; clearText; marker; appendText; 
   `It wasn't the face of the Kid that I knew.`;
   waitForClick; clearText; marker; appendText; 
   `It wasn't the sick color of his skin, or his 
bloodshot eyes or the way his tongue hung 
limply.`;
   waitForClick; clearText; marker; appendText; 
   `His whole appearance was completely different 
than anything I had in my memory of myself.`;
   waitForClick; clearText; marker; appendText; 
   `He wasn't me.`;
   waitForClick; clearText; marker; appendText; 
   `No...I wasn't him.`;
   waitForClick; clearText; marker; appendText; 
   `Who was he...?`;
   waitForClick; clearText; marker; appendText; 
   `Who in the world was I...?`;
   waitForClick; clearText; marker; appendText; 
   `The me that was standing there didn't 
know who I was....`;
   waitForClick; clearText; marker; appendText; 
   `Where....was the real me...?`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who...are you?"`;
   waitForClick; clearText; marker; appendText; 
   `I asked him...and he asked me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who...am I?"`;
   waitForClick; clearText; marker; appendText; 
   `I asked me and he asked he.`;
   waitForClick; clearText; 
});
eff_41 = 21;
eff_42 = 4;
eff_50 = rgb(240,240,240);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   `I was confused and losing touch with reality.`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `


`;
   appendText; delay(0); 
   `                 `;
   nextPage(00); 
   `Who...are you?`;
   nextPage(01); delay(60); 
   `
`;
   appendText; delay(0); 
   `                  `;
   nextPage(00); 
   `Who...am I?`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `Someone whispered in my ear.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know if it were me or him...`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `


`;
   appendText; delay(0); 
   `                 `;
   nextPage(00); 
   `Who...are you?`;
   nextPage(01); delay(60); 
   `
`;
   appendText; delay(0); 
   `                  `;
   nextPage(00); 
   `Who...am I?`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `My eyes clouded over and I couldn't see 
clearly.`;
   waitForClick; clearText; marker; appendText; 
   `His body swung back and forth like a pendulum, 
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
   `Pure white darkness drifted, floating.`;
   waitForClick; clearText; marker; appendText; 
   `But it wasn't me or him floating but both 
me and him.`;
   waitForClick; clearText; marker; appendText; 
   `I lost sight of where I ended and the world 
began.`;
   waitForClick; clearText; marker; appendText; 
   `I had lost all sense of everything. I had no 
way to confirm my existence.`;
   waitForClick; clearText; marker; appendText; 
   `I just let myself drift.`;
   waitForClick; clearText; marker; appendText; 
   `Like a baby floating in the womb...`;
   waitForClick; clearText; marker; appendText; 
   `Dissolving...`;
   waitForClick; clearText; marker; appendText; 
   `Dissolving...dissolving...dissolving...`;
   waitForClick; clearText; marker; appendText; 
   `I dissolved into pure white darkness, the pure 
white darkness becoming me.`;
   waitForClick; clearText; marker; appendText; 
   `I was nowhere.`;
   waitForClick; clearText; marker; appendText; 
   `The me that was nowhere, was everywhere.`;
   waitForClick; clearText; marker; appendText; 
   `So...where...was the real me...?`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `


`;
   appendText; delay(0); 
   `                 `;
   nextPage(00); 
   `Who...are you?`;
   nextPage(01); delay(60); 
   `
`;
   appendText; delay(0); 
   `                  `;
   nextPage(00); 
   `Who...am I?`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `And the whispering voice disappeared, 
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
if (l_coco_point != 5) goto(lbl_0000074b);
l_choice = 1;
l_sc2f_cleared = 1;
jump(`YC3A`);
let lbl_0000074b;
l_choice = 0;
jump(`YC3A`);
