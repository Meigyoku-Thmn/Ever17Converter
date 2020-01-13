hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `IMG02B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After waiting for Tsugumi to compose 
herself...they carried out the procedure.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Drawing blood from Tsugumi's arm, they 
extracted the antibodies, and gave shots to 
Takeshi, You, and the young Kaburaki.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`They weren't able to give Coco a shot, 
because she was still in the pod undergoing 
treatment.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And it would still be a while before she 
could leave.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`They made another dose of antibodies for when 
Coco was ready, and put it in the equipment 
storage container on the desk.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...almost an hour had passed since the shot...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The antibodies didn't seem to be having any 
effect.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The three infected 'patients' were lying, 
worn out, on their beds.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Tsugumi said something briefly to Takeshi, 
and went back to LeMU.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'I'm going to go get Chami, and bring him 
back' - were the words she left him with.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Takeshi nodded weakly, and closed his eyes.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG34A1`, transition: 26 });
stopBGM();
delay({ interval: 120 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
AVL_Mode();
clock(`21:16`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`——Suddenly!`;
   waitForClick; clearText; marker; appendText; 
   Narr`From his barely conscious state, a noise from 
the speaker reached Takeshi's ears.`;
   waitForClick; clearText; marker; sound(`T6T222`); appendText; 
   //Mission Control
   Mission_Control`"Come in..."`;
   waitForClick; clearText; marker; sound(`T6T223`); appendText; 
   //Mission Control
   Mission_Control`"IBF 3, please respond."`;
   waitForClick; clearText; marker; sound(`T6T224`); appendText; 
   //Mission Control
   Mission_Control`"This is the emergency rescue team from the 
Maritime Defense Force."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi rushed over to the terminal.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A293`); appendText; 
   Takeshi`"H-hello!"`;
   waitForClick; clearText; marker; sound(`C6A294`); appendText; 
   Takeshi`"This is the IBF Infirmary... over!"`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T6T226`); appendText; 
   //Mission Control
   Mission_Control`"IBF 3!? I repeat, this is the emergency 
rescue team from the Maritime Defense Force."`;
   waitForClick; clearText; marker; sound(`T6T227`); appendText; 
   //Mission Control
   Mission_Control`"Can you hear me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A295`); appendText; 
   Takeshi`"Yeah! We can hear you! We hear you! Loud and 
clear!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Voices spilled out from the other end of the 
line.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Hey, there are survivors down there!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I can't believe it!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'That's amazing!'`;
   waitForClick; clearText; marker; sound(`T6T228`); appendText; 
   //Mission Control
   Mission_Control`"We're sending a rescue team immediately. Can 
you access the pool in IBF 3?"`;
   waitForClick; clearText; marker; sound(`C6A296`); appendText; 
   Takeshi`"Uh, ah, yeah, it should be fine."`;
   waitForClick; clearText; marker; sound(`T6T229`); appendText; 
   //Mission Control
   Mission_Control`"Do you know how many survivors there are and 
where they are located?"`;
   waitForClick; clearText; marker; sound(`C6A297`); appendText; 
   Takeshi`"In the examination room there are five...no, 
six."`;
   waitForClick; clearText; marker; sound(`T6T230`); appendText; 
   //Mission Control
   Mission_Control`"Six. I copy."`;
   waitForClick; clearText; marker; sound(`T6T231`); appendText; 
   //Mission Control
   Mission_Control`"A rescue team is headed there in a private 
sector salvage vessel. When it arrives, I 
want you to follow their directions and get 
out of there."`;
   waitForClick; clearText; marker; sound(`C6A298`); appendText; 
   Takeshi`"How long 'till they get here?"`;
   waitForClick; clearText; marker; sound(`T6T232`); appendText; 
   //Mission Control
   Mission_Control`"They're going as fast as they can, but it'll 
take about an hour."`;
   waitForClick; clearText; marker; sound(`T6T233`); appendText; 
   //Mission Control
   Mission_Control`"But, if something goes wrong..."`;
   waitForClick; clearText; marker; sound(`T6T234`); appendText; 
   //Mission Control
   Mission_Control`"There should be a small, deep-exploration 
submarine left in the research facility. I 
hate to make you do this, but I want you to 
escape to that area."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A299`); appendText; 
   Takeshi`"S-something goes wrong...? W-what do you 
mean...?"`;
   waitForClick; clearText; marker; sound(`T6T235`); appendText; 
   //Mission Control
   Mission_Control`"The partition strength threshold is already 
being exceeded."`;
   waitForClick; clearText; marker; sound(`T6T236`); appendText; 
   //Mission Control
   Mission_Control`"If one section implodes, there's the risk 
that another area could collapse and start 
sinking."`;
   waitForClick; clearText; marker; sound(`T6T237`); appendText; 
   //Mission Control
   Mission_Control`"If that happens, we think there's a high 
possibility that heavy pieces could crash 
down on the research facility."`;
   waitForClick; clearText; marker; sound(`C6A300`); appendText; 
   Takeshi`"A-alright... I understand..."`;
   waitForClick; clearText; marker; sound(`T6T238`); appendText; 
   //Mission Control
   Mission_Control`"Of course, we're doing everything we can to 
get to you before that happens."`;
   waitForClick; clearText; marker; sound(`T6T239`); appendText; 
   //Mission Control
   Mission_Control`"We're heading there, no matter what! So, 
please hold out a little longer!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`*Click* ...the connection cut out suddenly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A301`); appendText; 
   Takeshi`"Ah, hey! W-wait a sec!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi hit the 'Call' button repeatedly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was no answer.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A302`); appendText; 
   Takeshi`"Damn it, we can't open up communications 
from this side..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi began to pour through the manual on 
the side of communication terminal.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A303`); appendText; 
   Takeshi`"Ah, here it is!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Following the instructions in the manual, he 
used the control panel to call up information 
on the monitor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A304`); appendText; 
   Takeshi`"It's a small electric submersible..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The submarine was in a separate sealed sector 
attached to IBF.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The specifications said it was a 'neutral 
buoyancy' miniature-submarine, for saturation 
diving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The important thing was, it could be 
brought over to the pool by remote control.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C6A305`); appendText; 
   Takeshi`"If things get dangerous, I guess they want 
us to board this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He quickly went about setting up the remote 
control program, so that they could move the 
submarine at a moment's notice, if necessary.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A306`); appendText; 
   Takeshi`"Alright..."`;
   waitForClick; clearText; marker; sound(`C6A307`); appendText; 
   Takeshi`"All we have to do now is..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A308`); appendText; 
   Takeshi`"Get Tsugumi and Sora over here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The second Takeshi said this—`;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
varop(`(28 0a a2) 4f := (00) 60`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c2_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`——BOOOOOooooM!!!`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly a low metallic crashing sound 
reverberated throughout the installation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound seemed to come from above.`;
   waitForClick; clearText; 
});
playBGM({ num: 10, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`An alarm sounded from the terminal and the 
screen changed.`;
   waitForClick; clearText; 
});
varop(`(28 0a a2) 41 := (00) 12`);
varop(`(28 0a a2) 42 := (00) 7`);
varop(`(28 0a a2) 50 := (00) 144`);
showDimInAndOutAnim();
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Warning: LeMU hull breach : Flooding'`;
   waitForClick; clearText; marker; sound(`C6A309`); appendText; 
   Takeshi`"LeMU....!?"`;
   waitForClick; clearText; marker; sound(`C6A310`); appendText; 
   Takeshi`"This is bad..."`;
   waitForClick; clearText; marker; sound(`C6A311`); appendText; 
   Takeshi`"That means...Tsugumi and Sora...!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
stopSFX()
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c1_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c2_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
bgload({ name: `BG35A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi ran out into the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was only slight, but the floor was 
trembling.`;
   waitForClick; clearText; marker; sound(`C6A312`); appendText; 
   Takeshi`"Agh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He suddenly seemed to get dizzy, and lost his 
balance, crashing into a wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding his fingers to his temples, Takeshi 
shook his head to clear it.`;
   waitForClick; clearText; marker; sound(`C6A313`); appendText; 
   Takeshi`"I...still gotta go..."`;
   waitForClick; clearText; marker; sound(`C6A314`); appendText; 
   Takeshi`"I have to GO!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Staggering while he ran, Takeshi took off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His legs moved as if he couldn't distinguish 
up from down but, still, he kept running.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He stumbled into the elevator...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lift he was on started moving up...`;
   waitForClick; clearText; marker; sound(`C6A315`); appendText; 
   Announcement`"Depth 270 feet..."`;
   waitForClick; clearText; marker; sound(`C6A316`); appendText; 
   Announcement`"Depth 240 feet..."`;
   waitForClick; clearText; marker; sound(`C6A317`); appendText; 
   Announcement`"Depth 210 feet..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He ran from the lift to the compression 
chamber...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi hit the intercom button violently.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A318`); appendText; 
   Takeshi`"Sora! Soraaa!"`;
   waitForClick; clearText; marker; sound(`T6T243`); appendText; 
   Sora`"Ta-Takeshi!? What are you...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi waved to Sora as she appeared outside 
the window.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A319`); appendText; 
   Takeshi`"Hey! Long time, no see!"`;
   waitForClick; clearText; marker; sound(`T6T244`); appendText; 
   Sora`"Wh-what are you doing here!"`;
   waitForClick; clearText; marker; sound(`C6A320`); appendText; 
   Takeshi`"Well, it's obvious isn't it? I came back."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A321`); appendText; 
   Takeshi`"What's the damage?"`;
   waitForClick; clearText; marker; sound(`T6T245`); appendText; 
   Sora`"There's flooding in Zweite stock."`;
   waitForClick; clearText; marker; sound(`T6T246`); appendText; 
   Sora`"The warehouse area has been breached and 
cracks are beginning to form in the elevator 
shaft. The situation is serious."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T6T247`); appendText; 
   Sora`"There is over six inches of flooding 
in almost all of the corridors."`;
   waitForClick; clearText; marker; sound(`C6A322`); appendText; 
   Takeshi`"Where's Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T6T248`); appendText; 
   Sora`"She's...trapped in the infirmary..."`;
   waitForClick; clearText; marker; sound(`C6A323`); appendText; 
   Takeshi`"What about the door?"`;
   waitForClick; clearText; marker; sound(`T6T249`); appendText; 
   Sora`"The electronic lock has been released. But..."`;
   waitForClick; clearText; marker; sound(`C6A324`); appendText; 
   Takeshi`"It won't open 'cause of the water pressure?"`;
   waitForClick; clearText; marker; sound(`T6T250`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T6T251`); appendText; 
   Sora`"Takeshi, I'm going to start decompressing the 
chamber."`;
   waitForClick; clearText; marker; sound(`C6A325`); appendText; 
   Takeshi`"How long will it take?"`;
   waitForClick; clearText; marker; sound(`T6T252`); appendText; 
   Sora`"I will complete it as soon as possible."`;
   waitForClick; clearText; marker; sound(`C6A326`); appendText; 
   Takeshi`"I need to know how much time!"`;
   waitForClick; clearText; marker; sound(`T6T253`); appendText; 
   Sora`"If I hurry...12 hours."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A327`); appendText; 
   Takeshi`"Tw-twelve hours!? We don't have that long!"`;
   waitForClick; clearText; marker; sound(`T6T254`); appendText; 
   Sora`"If we don't dissolve the nitrogen in your 
blood, you will get decompression sickness."`;
   waitForClick; clearText; marker; sound(`C6A328`); appendText; 
   Takeshi`"I don't care! Open that door now!"`;
   waitForClick; clearText; marker; sound(`T6T255`); appendText; 
   Sora`"I can't do that...!"`;
   waitForClick; clearText; marker; sound(`C6A329`); appendText; 
   Takeshi`"If we don't act fast, Tsugumi is dead!"`;
   waitForClick; clearText; marker; sound(`T6T256`); appendText; 
   Sora`"If we open that door now, due to the rapid 
decompression, the nitrogen in your 
bloodstream will form bubbles, causing blood 
clots, and in the worst case..."`;
   waitForClick; clearText; marker; sound(`C6A330`); appendText; 
   Takeshi`"I don't care, you get that door OPEN NOW!!!"`;
   waitForClick; clearText; marker; sound(`T6T257`); appendText; 
   Sora`"I can't...it's too..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking around, Takeshi's eyes fell on an 
emergency escape lever on inside the chamber.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without hesitating, he pulled it down, and 
kicked the door.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 400, y: 0, hx: 800, hy: 600 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—KABOooM!!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a horrible noise, as though all the 
air inside had exploded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's body was thrown from the room, 
along with the high-pressure gas that had 
been built up inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was tossed like a piece of confetti, 
sliding and rolling along the floor, only to 
stop when he crashed into the wall.`;
   waitForClick; clearText; marker; sound(`C6A331`); appendText; 
   Takeshi`"Gaagh!"`;
   waitForClick; clearText; marker; sound(`C6A332`); appendText; 
   Takeshi`"...eeeaaAAAAGGHH"`;
   waitForClick; clearText; marker; sound(`C6A333`); appendText; 
   Takeshi`"WAAAAaaaah......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi twisted in agony.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He flailed his four limbs as though he were a 
man gone insane.`;
   waitForClick; clearText; marker; sound(`C6A334`); appendText; 
   Takeshi`"*Urgh*....*uurrgh*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`From his unnatural contorted position on the 
floor, Takeshi began vomiting.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T260`); appendText; 
   Sora`"Takeshi!"`;
   waitForClick; clearText; marker; sound(`T6T261`); appendText; 
   Sora`"Takeshi...are you okay?"`;
   waitForClick; clearText; marker; sound(`C6A335`); appendText; 
   Takeshi`"W-well...it looks like...I'm still alive..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi crawled weakly over the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He crawled and stood, fell again and rose 
again...then he fell backward....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Repeating this process over and over, he 
finally made it to the door and said, leaning 
his shoulder against the wall...`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `BG31A1`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
multifgload2({ id1: 1, id2: 2, name1: `TA18ADM`, name2: `SO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A336`); appendText; 
   Takeshi`"Don't you stop me, you hear? No matter what 
you say, I'm going."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T262`); appendText; 
   Sora`"Alright, Takeshi. It seems that you've made 
up your mind..."`;
   waitForClick; clearText; marker; sound(`T6T263`); appendText; 
   Sora`"I'll stay here in Himmel, to keep track of 
the situation at LeMU, and send updates to 
your PDA."`;
   waitForClick; clearText; marker; sound(`T6T264`); appendText; 
   Sora`"I'll do what I can to stop the partitions 
from falling...to see that this place stays 
together, even a little while longer. So—"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T265`); appendText; 
   Sora`"Promise me...that you'll come back here with 
Tsugumi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A337`); appendText; 
   Takeshi`"Yeah, it's a promise."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And saying that he laughed weakly.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgload({ name: `BG29A1`, transition: 26 });
varop(`(28 0a a2) 41 := (00) 12`);
varop(`(28 0a a2) 42 := (00) 7`);
varop(`(28 0a a2) 50 := (00) 144`);
showDimInAndOutAnim();
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Running up the stairs, he looked down at his 
PDA. `;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a life reading in the Infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The map showed that the surrounding corridors 
were flooded and that there was no way to 
access the area.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Arriving at Zweite stock, he threw himself 
into the water.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`In order to reach the corridor connecting to 
the infirmary... Takeshi dove.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`At this point, there was no way to access it 
without swimming.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi turned the PDA's backlight on.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It shed a weak light on the area before him.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Maybe he realized that there wasn't any 
point, but Takeshi turned off the light and 
kept swimming in total darkness.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`He swam. And kept swimming.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Takeshi propelled himself forward as though 
possessed.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was no sign of fear, or unease in the 
way that he moved.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`He fiercely tore at the wall of water 
surrounding him, progressing steadily forward.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`He was being reckless, perhaps even acting 
insane...but he was willing to sacrifice it 
all for what he was convinced he had to do.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And neither the water nor the intense 
pressure could defeat the power of his faith 
and courage of that conviction.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`He kept swimming on and on strongly, 
purposefully.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Heading for the light...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`*SPLASH!*—Takeshi sucked in air greedily 
as he brought his head out of the water. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Ignoring his burning lungs, he quickly 
climbed up the open hole of the elevator 
shaft and began scrambling toward the 
infirmary.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A338`); appendText; 
   Takeshi`"Tsugumi! Tsugumi!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was in a corner of the room, hugging her 
knees to herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At her feet was the slightly wet, furry, 
figure of Chami.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TA15AWM`, name2: `TU06AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T267`); appendText; 
   Tsugumi`"Ta-Takeshi...what...WHY...!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi opened up her eyes wide.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A339`); appendText; 
   Takeshi`"What are you so surprised about, Tsugumi?"`;
   waitForClick; clearText; marker; sound(`C6A340`); appendText; 
   Takeshi`"I came back, right now! I came back for you!"`;
   waitForClick; clearText; marker; sound(`C6A341`); appendText; 
   Takeshi`"Well, I was a bit late, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi scratched his nose.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU04AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T268`); appendText; 
   Tsugumi`"Y-you idiot! What are you doing here!!?"`;
   waitForClick; clearText; marker; sound(`T6T269`); appendText; 
   Tsugumi`"Do you...want do die!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A342`); appendText; 
   Takeshi`"Listen..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi was laughing as he spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A343`); appendText; 
   Takeshi`"I came back for something I forget, um, yeah 
that's it."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T270`); appendText; 
   Tsugumi`"You...forgot...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Picking up Chami in both hands, she stood up 
slowly.`;
   waitForClick; clearText; marker; sound(`C6A344`); appendText; 
   Takeshi`"Yeah. Left it here, silly me..."`;
   waitForClick; clearText; marker; sound(`C6A345`); appendText; 
   Takeshi`"My irreplaceable..."`;
   waitForClick; clearText; marker; sound(`C6A346`); appendText; 
   Takeshi`"More important to me than anything 
else...friend..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU13AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T271`); appendText; 
   Tsugumi`"...how..."`;
   waitForClick; clearText; marker; sound(`T6T272`); appendText; 
   Tsugumi`"How...did you get here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked at Takeshi as if she still couldn't 
believe he was really there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A347`); appendText; 
   Takeshi`"Well, I'm a good swimmer."`;
   waitForClick; clearText; marker; sound(`C6A348`); appendText; 
   Takeshi`"Actually, in a 25 meter pool...I made it 
down and back, once..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A349`); appendText; 
   Takeshi`"I kicked off wall coming back, but still..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi mimed swimming as he spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A350`); appendText; 
   Takeshi`"Wait, I think I just beat my record a while 
a go..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C6A351`); appendText; 
   Takeshi`"Hey? Do you remember the furthest I've ever 
swam underwater?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU02AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T273`); appendText; 
   Tsugumi`"...Fif..."`;
   waitForClick; clearText; marker; sound(`T6T274`); appendText; 
   Tsugumi`"Fifty one meters...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She answered, her expression beginning to 
break down.`;
   waitForClick; clearText; marker; sound(`C6A352`); appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`C6A353`); appendText; 
   Takeshi`"You think I'd die in a place like this?"`;
   waitForClick; clearText; marker; sound(`C6A354`); appendText; 
   Takeshi`"I mean..."`;
   waitForClick; clearText; marker; sound(`C6A355`); appendText; 
   Takeshi`"I still haven't gotten enough abuse from you 
yet."`;
   waitForClick; clearText; marker; sound(`C6A356`); appendText; 
   Takeshi`"I want to hear what you've got to say, from 
here on out..."`;
   waitForClick; clearText; marker; sound(`T6T275`); appendText; 
   Tsugumi`"Aaagh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A357`); appendText; 
   Takeshi`"So..."`;
   waitForClick; clearText; marker; sound(`C6A358`); appendText; 
   Takeshi`"I came for you, Tsugumi."`;
   waitForClick; clearText; marker; sound(`T6T276`); appendText; 
   Tsugumi`"Takeshi...Takeshi!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They both ran toward each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Reaching out their hands to one another, they 
came together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And in the center of the infirmary they 
hugged each other close, embracing firmly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Riding on Tsugumi's shoulder was Chami...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami snorted, and looked at the two.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`......`;
   waitForClick; clearText; marker; appendText; 
   Narr`...`;
   waitForClick; clearText; 
});
bgload({ name: `BG31A1`, transition: 26 });
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:48`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Having rescued Tsugumi from the Infirmary, 
Takeshi made it safely back to Himmel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was waiting for them back in the room.`;
   waitForClick; clearText; marker; sound(`T6T278`); appendText; 
   Sora`"Takeshi, Tsugumi!"`;
   waitForClick; clearText; marker; sound(`T6T279`); appendText; 
   Sora`"I've prepared the chamber for you, get inside 
quickly!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA16AWM`, name2: `SO14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A360`); appendText; 
   Takeshi`"Hey, what's the rush, Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although Takeshi was out of breath, he waved 
the flustered Sora off with his hands.`;
   waitForClick; clearText; marker; sound(`C6A361`); appendText; 
   Sora`"C-come on! You have to hurry!"`;
   waitForClick; clearText; marker; sound(`C6A362`); appendText; 
   Takeshi`"Relax.... I still have one more thing I've 
forgotten..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A363`); appendText; 
   Sora`"F-forgotten...? What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A364`); appendText; 
   Takeshi`"This."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi pointed to Himmel's console.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The following words were written on the 
monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Willkommener LeMMIH Login: T.Y"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"LM-RSDS-4913A Sora Akanegasaki"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Aktenkopie wird vervollständigt."`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly there was an intense flash of 
light——`;
   waitForClick; clearText; marker; appendText; 
   Narr`And from the blinding flood of light a voice 
could be heard...`;
   waitForClick; clearText; marker; sound(`C6A366`); appendText; 
   You`"I was able to finish the transfer just in 
time."`;
   waitForClick; clearText; marker; sound(`C6A367`); appendText; 
   You`"The last password, and name, T.Y..."`;
   waitForClick; clearText; marker; sound(`C6A368`); appendText; 
   You`"TANAKA, YOICHI..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where is this?—'I' wondered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I inside someone...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could hear was a voice coming from 
somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A warm voice`;
   waitForClick; clearText; marker; appendText; 
   Narr`A murmuring filled with peace...`;
   waitForClick; clearText; marker; sound(`C6A369`); appendText; 
   You`"It was in Himmel, along with Sora's memory—"`;
   waitForClick; clearText; marker; sound(`C6A370`); appendText; 
   You`"It's on that terabyte disk."`;
   waitForClick; clearText; marker; sound(`C6A371`); appendText; 
   You`"Thank you...dad."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The voice cut out with a crackle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light faded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Color gradually returned to Takeshi's field of 
vision.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG31A1`, transition: 26 });
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And when color had finally returned, Takeshi 
opened his mouth.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A372`); appendText; 
   Takeshi`"Haa—!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A373`); appendText; 
   Takeshi`"Keep it simple!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And letting out a strange shout, Takeshi 
pounded the Enter key on the console.`;
   waitForClick; clearText; 
});
bgload({ name: `IT09A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A round, flat wafer shot out of the disk drive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a single terabyte disk made out of 
polycarbonate.`;
   waitForClick; clearText; marker; sound(`C6A374`); appendText; 
   Takeshi`"Okay, I'm taking this with me."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Had Takeshi been able to hear You's voice?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He stuffed the disk in his pocket.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C6A375`); appendText; 
   Sora`"Y-yes..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Taking a side-glance at the dumbfounded Sora, 
Takeshi went along with Tsugumi to the other 
side of the glass...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG32A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TA01AWM`, name2: `TU09AWM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Into IBF's compression chamber.`;
   waitForClick; clearText; marker; sound(`T6T280`); appendText; 
   Tsugumi`"Haaa....Haaaa...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi slumped over in her chair, breathing 
with her whole body.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C6A376`); appendText; 
   Takeshi`"Whew..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi breathed deeply...and looked out of 
the window to the Control Room on the other 
side of the window.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door to the chamber sealed, and 
compression started...`;
   waitForClick; clearText; 
});
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C6A377`); appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; sound(`C6A378`); appendText; 
   Takeshi`"I guess this means good-bye for a while?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was standing still on the other side of 
the chamber.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Smiling softly, Sora shook her head left to 
right.`;
   waitForClick; clearText; marker; sound(`C6A380`); appendText; 
   Sora`"No, this isn't good-bye."`;
   waitForClick; clearText; marker; sound(`C6A381`); appendText; 
   Sora`"I don't say...good-bye..."`;
   waitForClick; clearText; marker; sound(`C6A382`); appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`C6A383`); appendText; 
   Takeshi`"Me neither."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi returned her smile.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C6A384`); appendText; 
   Sora`"I don't exist."`;
   waitForClick; clearText; marker; sound(`C6A385`); appendText; 
   Sora`"And yet—I am everywhere."`;
   waitForClick; clearText; marker; sound(`C6A386`); appendText; 
   Sora`"There will be a time when we meet again. I'm 
sure of it."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C6A388`); appendText; 
   Sora`"So, please..."`;
   waitForClick; clearText; marker; sound(`C6A389`); appendText; 
   Sora`"Don't ask me anything now."`;
   waitForClick; clearText; marker; sound(`C6A390`); appendText; 
   Takeshi`"Okay..."`;
   waitForClick; clearText; marker; sound(`C6A391`); appendText; 
   Takeshi`"I understand...now."`;
   waitForClick; clearText; marker; sound(`C6A392`); appendText; 
   Takeshi`"I don't how, but I understand now."`;
   waitForClick; clearText; marker; sound(`C6A393`); appendText; 
   Takeshi`"That the only place to find you is here, yet 
I can find you anywhere..."`;
   waitForClick; clearText; marker; sound(`C6A394`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO07C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C6A395`); appendText; 
   Takeshi`"O-oh, and..."`;
   waitForClick; clearText; marker; sound(`C6A396`); appendText; 
   Takeshi`"When you hit a button, don't forget to say 
'Keep it simple'. Remember that."`;
   waitForClick; clearText; marker; sound(`C6A397`); appendText; 
   Sora`"Yeah...heh, heh."`;
   waitForClick; clearText; marker; sound(`C6A398`); appendText; 
   Sora`"Don't worry. I will remember."`;
   waitForClick; clearText; marker; sound(`C6A400`); appendText; 
   Sora`"That's a promise. Mine and yours, 
professor..."`;
   waitForClick; clearText; marker; sound(`C6A401`); appendText; 
   Sora`"Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The RSD image started to warp and break up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A fog enveloped Sora from behind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's image changed to a rainbow hue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then even the rainbow...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Started to fade.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's form disappeared...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi watched it all happen, and nodded as 
though he had confirmed something.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
delay({ interval: 90 });
stopBGM();
clock(`23:0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Compression complete.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Tsugumi loaded into the elevator 
and headed back to the research facility.`;
   waitForClick; clearText; 
});
bgload({ name: `BG33A2`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `TU03ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`T6T295`); appendText; 
   Tsugumi`"It's quiet..."`;
   waitForClick; clearText; marker; sound(`C6A402`); appendText; 
   Takeshi`"Yeah, you're right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flooding should have been fairly advanced 
in the area above them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to know if any of the sections had 
collapsed yet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But for the moment, everything was normal at 
IBF.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the surface of the pool, there was not 
even a ripple.`;
   waitForClick; clearText; 
});
bgload({ name: `BG35A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `TA04ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A403`); appendText; 
   Takeshi`"Ah..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T296`); appendText; 
   Tsugumi`"What's wrong?"`;
   waitForClick; clearText; marker; sound(`C6A404`); appendText; 
   Takeshi`"The time...we're past the scheduled time."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T297`); appendText; 
   Tsugumi`"What schedule?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A405`); appendText; 
   Takeshi`"Actually, there's a rescue team on their way."`;
   waitForClick; clearText; marker; sound(`T6T298`); appendText; 
   Tsugumi`"Rescue...?"`;
   waitForClick; clearText; marker; sound(`C6A406`); appendText; 
   Takeshi`"Yeah, they called themselves the Maritime 
Defense Force, I think."`;
   waitForClick; clearText; marker; sound(`C6A407`); appendText; 
   Takeshi`"You was able to open up the communications 
line, so we got a hold of Insel null."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And talking this way, they made their way to 
the examination room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They opened the door and went inside.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG34A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADS`, name2: `TU06ADS`, x1: 176, x2: 464, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`T6T299`); appendText; 
   Tsugumi`"Ah..."`;
   waitForClick; clearText; marker; sound(`T6T300`); appendText; 
   Tsugumi`"They aren't here...nobody's here!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi raised her voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was nobody in the room to respond.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi checked each of the capsule pods.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But they were all empty.`;
   waitForClick; clearText; marker; sound(`C6A408`); appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`C6A409`); appendText; 
   Takeshi`"You, the Kid, Coco, that old guy...they're 
all gone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T301`); appendText; 
   Tsugumi`"Where did they go?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A410`); appendText; 
   Takeshi`"Hey, hold on. I'm sure the rescue team found 
them."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A recognizable voice came over the speaker.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TA04ADS`, name2: `TU06ADS`, x1: 176, x2: 464, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`C6A411`); appendText; 
   //Mission Control
   Mission_Control`"This is Insel null Control. Please respond."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi jumped over to the terminal and hit 
the 'Talk' button.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A412`); appendText; 
   Takeshi`"This is the Examination Room in IBF 3, over!"`;
   waitForClick; clearText; marker; sound(`C6A413`); appendText; 
   //Mission Control
   Mission_Control`"Thank goodness...that's where you were."`;
   waitForClick; clearText; marker; sound(`C6A414`); appendText; 
   //Mission Control
   Mission_Control`"A little while ago we got a message from the 
dispatch team that they couldn't find you. 
You had us worried there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A415`); appendText; 
   Takeshi`"I'm sorry, I was out for a bit."`;
   waitForClick; clearText; marker; sound(`C6A416`); appendText; 
   //Mission Control
   Mission_Control`"We were able to rescue the other three 
people in the examination room, and they are 
being cared for in the salvage vessel."`;
   waitForClick; clearText; marker; sound(`C6A417`); appendText; 
   Takeshi`"Is everyone okay!?"`;
   waitForClick; clearText; marker; sound(`C6A418`); appendText; 
   //Mission Control
   Mission_Control`"We can't say for sure...their conditions are 
serious."`;
   waitForClick; clearText; marker; sound(`C6A419`); appendText; 
   //Mission Control
   Mission_Control`"We're fighting against time. The submersible 
is going to surface soon, and we'll transfer 
them to a floating medical center."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A420`); appendText; 
   Takeshi`"Okay. You take care of them."`;
   waitForClick; clearText; marker; sound(`C6A421`); appendText; 
   //Mission Control
   Mission_Control`"How many people are there with you?"`;
   waitForClick; clearText; marker; sound(`C6A422`); appendText; 
   Takeshi`"Two, including me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A423`); appendText; 
   Takeshi`"The other person didn't make it......"`;
   waitForClick; clearText; marker; sound(`C6A424`); appendText; 
   //Mission Control
   Mission_Control`"Roger. We'll send the team back there as 
soon as we can."`;
   waitForClick; clearText; marker; sound(`C6A425`); appendText; 
   //Mission Control
   Mission_Control`"But there is the possibility that the team 
won't be able to approach IBF if it starts to 
break up."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A426`); appendText; 
   Takeshi`"I've got the exploration vessel standing by. 
I can call it here by remote control, right?"`;
   waitForClick; clearText; marker; sound(`C6A427`); appendText; 
   //Mission Control
   Mission_Control`"Ah, yeah...I'm sorry to have to ask you to 
use it, but there's nothing else we can do."`;
   waitForClick; clearText; marker; sound(`C6A428`); appendText; 
   //Mission Control
   Mission_Control`"We'll do the best we can. Whatever happens, 
you hang in there."`;
   waitForClick; clearText; marker; sound(`C6A429`); appendText; 
   Takeshi`"Roger."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And after that the communications cut out.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `TU13ADM`, x1: 128, x2: 512, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T6T313`); appendText; 
   Tsugumi`"What's that supposed to mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A430`); appendText; 
   Takeshi`"You weren't listening?"`;
   waitForClick; clearText; marker; sound(`C6A432`); appendText; 
   Takeshi`"All this would be for nothing, if everyone 
died while they were waiting for us."`;
   waitForClick; clearText; marker; sound(`C6A433`); appendText; 
   Takeshi`"The rescue team decided to put a higher 
priority on getting You, the Kid, and Coco, 
to the hospital, than waiting for us."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T314`); appendText; 
   Tsugumi`"Yeah...you're right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The color in Tsugumi's face slowly returned to 
normal, as her sense of panic faded.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C6A434`); appendText; 
   Takeshi`"Well..."`;
   waitForClick; clearText; marker; sound(`C6A435`); appendText; 
   Takeshi`"I might just take a nap until the next bus 
comes..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T315`); appendText; 
   Tsugumi`"B-bus?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A436`); appendText; 
   Takeshi`"If you think the bus is going to be late, 
call a cab for me, will you?"`;
   waitForClick; clearText; marker; sound(`T6T316`); appendText; 
   Tsugumi`"T-taxi?"`;
   waitForClick; clearText; marker; sound(`T6T317`); appendText; 
   Tsugumi`"What are you talking about...Takeshi?"`;
   waitForClick; clearText; marker; sound(`C6A437`); appendText; 
   Takeshi`"If you push that button, a small submarine 
will come over here by remote control—Our 
very own private taxi should come here from 
another area of IBF."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T318`); appendText; 
   Tsugumi`"O-okay..."`;
   waitForClick; clearText; marker; sound(`C6A438`); appendText; 
   Takeshi`"Anyway..."`;
   waitForClick; clearText; marker; sound(`C6A439`); appendText; 
   Takeshi`"I'm just glad that everyone's alright..."`;
   waitForClick; clearText; marker; sound(`C6A440`); appendText; 
   Takeshi`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A look of relief flooded softly over his face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C6A441`); appendText; 
   Takeshi`"I'm just...so...glad..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a marionette that had its strings cut, 
Takeshi's body collapsed.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T6T319`); appendText; 
   Tsugumi`"Ta-Takeshi!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi ran over to Takeshi and struggled to 
hold him up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She shook him by the shoulders, but Takeshi 
would not wake up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was breathing. And his heartbeat seemed 
normal. Although he felt slightly hot, it 
didn't seem like his life was in danger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi carried Takeshi over to a bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And placing her head on his chest, she closed 
her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light sound of their breathing gradually 
took on the same timing, and softly filled 
the room.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They fell into a deep sleep....`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
monoColorOverlay({ interval: 12, color: WHITE });
hideTextbox();
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:31`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At the same—time I woke up suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU's infirmary...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had been sprawled out, sleeping on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Getting up, I looked around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a pain in my left hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And looked at my palm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a large bandage on the edge of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's right...I injured my hand in the Whale 
Room...and then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`... and then...I lost my memory again, and was 
probably brought to this room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where is everyone...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slowly got off the bed and slipped on my 
shoes.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_02`, a1: 0, volume: 92 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Creak, Creeeaak, Creeeeaaaaaaaaaaak.....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_18`, a1: 0, volume: 92 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Groan, groan, groooooooaaaaaaaaaaaannn....`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of metal screeching and rubbing 
together came from somewhere in the immediate 
vicinity.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Another sound came to my ears, and I could 
tell it was an alarm ringing somewhere far off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But strangely, I didn't feel any fear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I must not have been completely awake.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside my head was still dim, and it was hard 
to grasp the situation completely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Whhhiiirr!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_03L`, a1: 0, volume: 84 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door to the infirmary opened.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A089`); appendText; 
   You`"Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You jumped into the room, as though she were 
possessed by a demon.`;
   waitForClick; clearText; marker; sound(`S6A091`); appendText; 
   You`"I found an exit we can escape through!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was screaming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I found an exit'...I said these words to 
myself over and over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It took me a few seconds to grasp the 
enormity of those words.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where did you find it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind was still not fully up and running.`;
   waitForClick; clearText; marker; sound(`S6A090`); appendText; 
   You`"I'll explain later, just hurry!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, You ran out of the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, it took a few more seconds for my legs 
to get moving.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B3`, transition: 26 });
playBGM({ num: 13, volume: 100 });
playSFX({ name: `SE09_03L`, a1: 0, volume: 92 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It felt as though I were running on fog.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body was half-paralyzed, and wouldn't move 
in the direction I wanted it. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head, trying to get rid of the 
grogginess.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No mater how much I ran, I couldn't return to 
normal.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where is everyone else...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was barely able to hold onto my 
consciousness as I somehow got this 
question off to You.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A093`); appendText; 
   You`"Takeshi's going to get Mayo, and Tsugumi's 
already in the emergency corridor."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Takeshi's going to get Mayo..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi's in the emergency corridor..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For no reason in particular I repeated You's 
words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she finally noticed my odd state. You 
looked at me suspiciously.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG27A3`, transition: 26 });
varop(`(28 0a a2) 41 := (00) 12`);
varop(`(28 0a a2) 42 := (00) 7`);
varop(`(28 0a a2) 50 := (00) 144`);
showDimInAndOutAnim();
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We made it to the emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kaburaki, Tsugumi and Sara were already there 
waiting.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A094`); appendText; 
   Kaburaki`"Hurry, we don't have much time."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Not much time...?"`;
   waitForClick; clearText; marker; sound(`S6A095`); appendText; 
   Kaburaki`"Just hurry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kaburaki grabbed my shoulder hard and, turning 
around, started running.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara and Tsugumi followed Kaburaki's lead.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A096`); appendText; 
   You`"Listen up - LeMU has started to implode."`;
   waitForClick; clearText; marker; sound(`S6A097`); appendText; 
   You`"We were finally able to make contact with the 
surface and access the emergency stairs."`;
   waitForClick; clearText; marker; sound(`S6A098`); appendText; 
   You`"But if we don't hurry, they're going to 
flood."`;
   waitForClick; clearText; marker; sound(`S6A099`); appendText; 
   You`"So hurry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You grabbed my arm tightly.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And tugging on it violently, You started 
pounding forward at full speed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like I was about to fall forward and 
I braced myself as best I could, trying to 
keep pace with her as she pulled me forward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We flew liked the wind down the painfully 
cramped passage...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And soon...`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 26 });
playSFX({ name: `SE09_03L`, a1: 0, volume: 87 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We had all jumped into the emergency exit 
stairwell, and were running up the stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear Kaburaki, Sara and 
Tsugumi...their footsteps right above me.`;
   waitForClick; clearText; marker; sound(`S6A100`); appendText; 
   Kaburaki`"Hurry up! This way!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see from where Kaburaki was calling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But his booming voice thundered off the sides 
of the metal bulkhead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's eyes met mine and nodding to one 
another we pumped our legs harder, climbing 
as fast as we could.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The surface of the stairs was wet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The metal tube surrounding us on the emergency 
staircase was shaking violently left and right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slipped and whacked my shin hard against a 
corner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I felt nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both of my legs kept moving as if they were 
separate from me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My thoughts and feelings were indistinct, 
vague.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An irresistible, primal 'FORCE' was 
propelling me forward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I handed over the reins to that 'force'.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a state almost free of thought. All I 
could do was to climb and climb and keep 
climbing...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sharp, metallic sound echoed painfully in 
my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The angry cacophony shook my body to its core.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the screaming of a terrible 
monster...or the groan of death itself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The terrible voice was slowly and certainly 
closing in on us from behind.`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; sound(`S6A101`); appendText; 
   Kaburaki`"Just a little more! We're almost there!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kaburaki screamed at us from up above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I briefly saw the backs of Sara and Tsugumi 
who were running up ahead. `;
   waitForClick; clearText; marker; appendText; 
   Narr`The meaning of Kaburaki's words, 'Just a 
little more,' hit me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Just a little more...and we can escape from 
here...) `;
   waitForClick; clearText; marker; appendText; 
   Narr`(From the bottom of the deep ocean...from out 
of that cage we were trapped in...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(We're finally getting out. We're going to be 
free...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`But along with that hope...`;
   waitForClick; clearText; marker; appendText; 
   Narr`An indistinct fear was still inside of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A heavy, dark, sensation wriggled at the 
center of my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was rotten, filthy...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had stuck to the walls of my heart, 
stagnant and putrid.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It doesn't matter...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Even if you get out of here, nothing will 
have been solved...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`And as the doubts went through my mind, my 
legs faltered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Two steps, three steps, four steps, I carried 
forward and the doubt swelled up replacing my 
elation at rescue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(You think...you're really going to be let 
out of here...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`And as this thought filled my mind, I had 
already arrived at the last step in front of 
the door.`;
   waitForClick; clearText; marker; appendText; 
   Kaburaki`"............"`;
   waitForClick; clearText; marker; appendText; 
   You`"............"`;
   waitForClick; clearText; marker; appendText; 
   Sara`"............"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"............"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody said a word.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We wiped our sweat and struggled for breath 
as we glared at the huge door, which rose 
before us.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright, let's go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand on the door's lever.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`*Clank* `;
   waitForClick; clearText; marker; appendText; 
   Narr`The door unlocked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And bracing my chest and shoulder against the 
door, I threw all my weight into opening it.`;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Creeeeeeeaaakk.....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`BOOM....`;
   waitForClick; clearText; marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
bgload({ name: `IMG05C`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Outside of the door—`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sight that greeted us was a sky filled 
with stars.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Covering the dark blue sky above was an 
infinite number of shimmering stars.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Beyond time and beyond space, the light 
poured down gently on our heads from above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of us, me, You, Sara, Tsugumi and 
Kaburaki... had lost all words. We could only 
stare at the sky above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I raised my hand it seemed I could touch 
the sky...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But not there...because it was a real night 
sky.`;
   waitForClick; clearText; 
});
bgload({ name: `BG38A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In this way the drama of our escape ended...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Or at least so it seemed. But, I realized 
nothing had been solved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The slimy sense of unease still gnawed inside 
of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And that indistinct notion had changed to a 
simmering sense of impatience - one that was 
ready to boil.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That's right, it isn't finished.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'm not going to let it end here.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Because I...don't know...the reasons behind 
any of this.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The time was 11:43 p.m.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A new day was just waiting to begin...`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 0`);
jump(`YC7A`);
