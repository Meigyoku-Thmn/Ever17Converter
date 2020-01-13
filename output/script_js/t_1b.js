goto(lbl_00000291).if(var_b3 == 1);
goto(lbl_00000426).if(var_b3 == 2);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
setDialogBoxColor(GREEN);
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG26A1R`, transition: 00 });
setSceneTitle({ index: 5 });
clock(`16:13`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There were still fish flopping around on the 
floor, but the water had receded a while 
earlier.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A034`); appendText; 
   //Park staff
   Park_staff`"This sector has been confirmed drained free 
of water..."`;
   waitForClick; clearText; marker; sound(`T1A035`); appendText; 
   //Park staff
   Park_staff`"However, 30 percent of the facility is 
already..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A036`); appendText; 
   //Park staff
   Park_staff`"Believed to be submerged or completely 
flooded..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, wait just a second..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I thought we were going to escape UP!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If we go down...!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey! What are we supposed to do now?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU17AWM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A037`); appendText; 
   //Girl
   Girl`"There's no point arguing about this."`;
   waitForClick; clearText; marker; sound(`T1A038`); appendText; 
   //Park staff
   Park_staff`"I'm sorry, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The employee looked extremely sorry and was 
bowing.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A039`); appendText; 
   //Park staff
   Park_staff`"It is my responsibility."`;
   waitForClick; 
});
choice(
   `That's right! The person in charge is who!`
   `It's not your fault`
   `That's not important right now...`
);
switch (choice) {
   case 0: goto(lbl_0000016f);
   case 1: goto(lbl_000001bd);
   case 2: goto(lbl_000001dc);
}
let lbl_0000016f;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"That's right! Get me the person in charge!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's no good blaming someone that works here 
like you, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How could this happen? I want an explanation!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I came here with my friends and just missed 
taking the elevator..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't believe this...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A040`); appendText; 
   //Girl
   Girl`"Take it easy..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You be quiet..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A041`); appendText; 
   //Girl
   Girl`"Stop it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl was glaring at me intensely.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A042`); appendText; 
   //Girl
   Girl`"Why don't you just be quiet..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her icy, threatening voice overwhelmed me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Al-alright."`;
   waitForClick; clearText; 
});
goto(lbl_0000021b);
let lbl_000001bd;
varop(`(28 0a a4) b8 += (00) 2`);
varop(`(28 0a a4) e8 := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"It's not your fault."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't think that this is any one person's 
fault."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But why has this happened?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's...the issue."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sorry. I'm just a little aggravated. I 
didn't mean to take it out on you..."`;
   waitForClick; clearText; marker; sound(`T1A043`); appendText; 
   //Park staff
   Park_staff`"It's okay..."`;
   waitForClick; clearText; 
});
goto(lbl_0000021b);
let lbl_000001dc;
varop(`(28 0a a4) b7 += (00) 1`);
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"No, relax...yeah, let's all relax..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm glad to be safe, but more important than 
that right now is who are you guys?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The chick in black ran like something 
bionic..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"When the glass broke, that attendant was 
right next to it. But she took off at warp 
speed..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's up with that?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And don't tell me that this is part of the 
this theme park atmosphere?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU05AWM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Girl
   Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Park staff
   Park_staff`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Neither of them tried to answer.`;
   waitForClick; clearText; 
});
let lbl_0000021b;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The fish on the floor were still jumping 
around.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1A044`); appendText; 
   //Park staff
   Park_staff`"I'm really, really sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The park employee was bowing so low that her 
head approached the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason her clothes were completely 
dry.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_00000279).if(var_1a == 0);
varop(`(28 0a a4) f1 := (00) 1`);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`TC1A`);
let lbl_00000279;
showTextbox();
text(() => {
   marker; sound(`T1B000`); appendText; 
   //Girl
   Girl`"It doesn't do us any good just standing 
around here, can you show us the way?"`;
   waitForClick; clearText; marker; sound(`T1B001`); appendText; 
   //Park staff
   Park_staff`"Certainly. There is a relatively safe place 
nearby. I will take you there..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(RELATIVELY safe...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was about the same as saying that 
everywhere else was dangerous.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We turned around and started heading back the 
corridor we'd been washed down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at a panel and finally realized that 
we were in Zweite stock—basement level two.`;
   waitForClick; clearText; 
});
let lbl_00000291;
bgload({ name: `BG02A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We went in a nearby attraction.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So are we the only folks here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B002`); appendText; 
   //Park staff
   Park_staff`"I do not know. I am currently investigating."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yeah, right, 'Investigating what?' I thought 
as we walked...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B003`); appendText; 
   //Park staff
   Park_staff`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B004`); appendText; 
   //Park staff
   Park_staff`"Three other people are approaching."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...What?"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
playBGM({ num: 3, volume: 100 });
clock(`16:41`);
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B005`); appendText; 
   //Park staff
   Park_staff`"*Sigh*"`;
   waitForClick; clearText; marker; sound(`T1B006`); appendText; 
   //Park staff
   Park_staff`"For a while I wondered what was going to 
happen to us, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was one of the female employees that 
I'd met once before.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B007`); appendText; 
   //Park staff
   Park_staff`"I'm glad we survived..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B008`); appendText; 
   //Park staff
   Park_staff`"Hey, aren't you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl finally noticed us.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I didn't think there'd be anybody else here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B009`); appendText; 
   //Park staff
   Park_staff`"Yeah. How are you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Bout as good as I look, I suppose."`;
   waitForClick; clearText; marker; sound(`T1B010`); appendText; 
   //Park staff
   Park_staff`"Seems like you had a rough time of it, too..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, lucky guess..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Relaxing a bit, I returned her smile.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU15BDS`, name2: `KA03ADS`, name3: `CO01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There were two people behind the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One of them was the girl who I thought was 
named Coco.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `CO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When our eyes met, Coco grinned.`;
   waitForClick; clearText; marker; sound(`T1B011`); appendText; 
   //Coco
   Coco`"Oh, we meet again."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's been a while."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It doesn't have to be right now, but Coco, 
will you tell me a joke later? I'm really in 
the mood for one."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `CO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B012`); appendText; 
   //Coco
   Coco`"Sure. No problem, I'll think of one."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She nodded brightly.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T1B013`); appendText; 
   //Kid
   Kid`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The other person was the kid I helped to the 
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His expression looked darker somehow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If he'd become super upbeat all of the 
sudden that would have been weird too, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason it bothered me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is something wrong with him? He doesn't look 
so hot."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B014`); appendText; 
   //Park staff
   Park_staff`"Oh, he's, a bit..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The attendant hesitated.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B015`); appendText; 
   //Park staff
   Park_staff`"By the way..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B016`); appendText; 
   //Park staff
   Park_staff`"Hey, Sora, do you have any idea what 
our situation is?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl attendant addressed the question to 
the staff member in the dress.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B017`); appendText; 
   //Sora
   Sora`"Well, the communication lines are down.... 
I've been investigating ways to restore our 
connection, but is going to take some time."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The attendant called Sora said this.`;
   waitForClick; clearText; 
});
let lbl_00000426;
showTextbox();
text(() => {
   marker; sound(`T1B018`); appendText; 
   //Park staff
   Park_staff`"In that case, let's go to the Central 
Control Room. We can monitor things in detail 
from there, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B019`); appendText; 
   //Sora
   Sora`"That sounds good. I wish I were more 
useful..."`;
   waitForClick; clearText; marker; sound(`T1B020`); appendText; 
   //Park staff
   Park_staff`"Don't worry about it, Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With that, the girl addressed me again.`;
   waitForClick; clearText; marker; sound(`T1B021`); appendText; 
   //Park staff
   Park_staff`"We're going down to Dritte stock - the third 
floor underwater."`;
   waitForClick; clearText; marker; sound(`T1B022`); appendText; 
   //Park staff
   Park_staff`"You're coming, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Y-yeah. I'll go."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We took an emergency corridor behind one of 
the attractions.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like there were a number of these 
narrow corridors above and below other 
corridors and rooms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured that they were probably used as 
shortcuts by employees as well.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B023`); appendText; 
   //Park staff
   Park_staff`"My name's You."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B024`); appendText; 
   //You
   You`"You Tanaka. My real name is really a lot 
longer, but just call me You. What's your 
name?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B025`); appendText; 
   //You
   You`"Takeshi Kuranari."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Good to know you, You."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Girl
   Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whole time the girl in the dark clothes 
silently watched our exchange.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We went down the stairs together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Me, Coco, You, Sora, the Kid, the girl in 
black - six of us total...`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We arrived at Dritte stock, the third floor 
underwater.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We used the ladder in the emergency corridor 
to descend to another corridor and turned 
around the corner.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A1R`, transition: 20 });
bgload({ name: `BG15A1`, transition: 20 });
clock(`17:6`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Control Room'`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that this was the Central Control 
Room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A3`, transition: 20 });
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADS`, name2: `YU11BDS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B026`); appendText; 
   //You
   You`"What do you think? Can you learn anything 
from the computers here?"`;
   waitForClick; clearText; marker; sound(`T1B027`); appendText; 
   //Sora
   Sora`"Let's see. It looks like directly accessing 
it would be the fastest route."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora faced the monitor and held up both hands.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Instantly the content of the screen began to 
change, with a number of windows opening, 
closing and searches for data underway.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey...you can operate these computers 
without even touching them?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I've got the latest cell phone and it's 
gotta touch panel."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And it's got a kinetic-recharge function..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B028`); appendText; 
   //Coco
   Coco`"What's that?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Oh, it means that even if the battery 
dies, if you walk around with it or shake it, 
it will recharge itself. It takes a while 
though."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took my PDA from my pocket and lent it to 
Coco.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B029`); appendText; 
   //Coco
   Coco`"Like this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco took the PDA and shook it using short 
movements like she was shaking maracas.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, like that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lamp that had indicated the battery was 
dead lit up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B030`); appendText; 
   //Coco
   Coco`"Oh, you're right."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The harder you shake it, the more it lights 
up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lamp flickered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if she was having fun or what, 
but Coco kept up her maraca act for a while.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It looked like the PDA wasn't broken. All I 
had to do was wait and it would probably work 
again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed the professional diving waterproof 
specifications it had boasted were actually 
true.`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora typed quietly on the keyboard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was typing the keyboard, but....`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like her hands weren't even 
touching the keyboard. I figured that was my 
imagination.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B031`); appendText; 
   //Sora
   Sora`"...I've learned something."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora said it in businesslike manner. She 
seemed done with the computer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone looked at her.`;
   waitForClick; clearText; marker; sound(`T1B032`); appendText; 
   //Sora
   Sora`"Everyone, please be calm."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she said that, I notice she looked a 
little pale.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room went quiet as the focus shifted to 
her.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
monoColorOverlay({ interval: 3, color: WHITE });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 15, volume: 100 });
bgload({ name: `IMG03A`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T1B033`); appendText; 
   //Sora
   Sora`"First, the first floor, Erste boden..."`;
   waitForClick; clearText; marker; sound(`T1B034`); appendText; 
   //Sora
   Sora`"The whole floor is flooded, except for one 
segment of stairs,"`;
   waitForClick; clearText; marker; sound(`T1B035`); appendText; 
   //You
   You`"Flooded? The whole first floor?"`;
   waitForClick; clearText; marker; sound(`T1B036`); appendText; 
   //Sora
   Sora`"Yeah. All of the partitions have dropped and 
it isn't possible to get through any of its 
corridors"`;
   waitForClick; clearText; marker; sound(`T1B037`); appendText; 
   //Girl
   Girl`"In other words...there's no way up."`;
   waitForClick; clearText; marker; sound(`T1B038`); appendText; 
   //Sora
   Sora`"That is correct."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"..."`;
   waitForClick; clearText; marker; sound(`T1B039`); appendText; 
   //Sora
   Sora`"And as for Zweite stock and Dritte stock..."`;
   waitForClick; clearText; marker; sound(`T1B040`); appendText; 
   //Sora
   Sora`"The watertight doors did not close in time 
and Sector 3 is completely flooded."`;
   waitForClick; clearText; 
});
bgload({ name: `MAP03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T1B041`); appendText; 
   //Sora
   Sora`"All other sectors on the other floors are 
currently fine."`;
   waitForClick; clearText; marker; sound(`T1B042`); appendText; 
   //Sora
   Sora`"However, some rooms do have water from the 
flood we just experienced."`;
   waitForClick; clearText; marker; sound(`T1B043`); appendText; 
   //Sora
   Sora`"Currently the bilge pumps are functioning, 
but it will take a lot of time for the water 
to completely drain."`;
   waitForClick; clearText; marker; sound(`T1B044`); appendText; 
   //You
   You`"Bilge pumps?"`;
   waitForClick; clearText; marker; sound(`T1B045`); appendText; 
   //Coco
   Coco`"Does that mean that we have electricity?"`;
   waitForClick; clearText; marker; sound(`T1B046`); appendText; 
   //Sora
   Sora`"Let's see..."`;
   waitForClick; clearText; marker; sound(`T1B901`); appendText; 
   //Sora
   Sora`"Some parts of the electric system, including 
the elevator are not functioning.`;
   waitForClick; clearText; sound(`T1B902`); appendText; 
   //Sora
   Sora`The cause of this is unclear, 
but it would seem that circuit damage 
in each section is playing a role."`;
   waitForClick; clearText; marker; sound(`T1B048`); appendText; 
   //Sora
   Sora`"That is another reason that I was not able 
to survey the situation adequately before."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What does she mean 'she' wasn't able to...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something about her words nagged at my mind, 
but I listened to the rest of what she had to 
say.`;
   waitForClick; clearText; marker; sound(`T1B049`); appendText; 
   //Sora
   Sora`"However the generator is functioning 
normally and supplying power."`;
   waitForClick; clearText; marker; sound(`T1B050`); appendText; 
   //Sora
   Sora`"So as long as the generator is operating as 
well as the circuitry, the water should be 
cleared with time."`;
   waitForClick; clearText; marker; sound(`T1B051`); appendText; 
   //Sora
   Sora`"Incidentally, the internal air pressure of 
the complex is 1 atmosphere."`;
   waitForClick; clearText; marker; sound(`T1B052`); appendText; 
   //Sora
   Sora`"The air is 22 percent oxygen, 75 percent 
nitrogen, 3 percent helium and the 
temperatures is 24 degrees Celsius..."`;
   waitForClick; clearText; marker; sound(`T1B053`); appendText; 
   //Girl
   Girl`"So, what you're basically saying is, we're 
safe for a while, right?"`;
   waitForClick; clearText; marker; sound(`T1B054`); appendText; 
   //Sora
   Sora`"I'm sorry. That is correct..."`;
   waitForClick; clearText; marker; sound(`T1B055`); appendText; 
   //Sora
   Sora`"Everyone, we will be forced to wait 
inside the complex for a while."`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A1`, transition: 20 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"For a while? How long is that?"`;
   waitForClick; clearText; marker; sound(`T1B056`); appendText; 
   //Sora
   Sora`"Until help comes."`;
   waitForClick; clearText; marker; sound(`T1B057`); appendText; 
   //Sora
   Sora`"I am continuously sending out a request for 
assistance. However..."`;
   waitForClick; clearText; marker; sound(`T1B058`); appendText; 
   //Sora
   Sora`"Right now there is no guarantee that it will 
reach anyone."`;
   waitForClick; clearText; marker; sound(`T1B059`); appendText; 
   //Sora
   Sora`"All communication lines to Insel null, 
including the emergency ones, have been 
physically severed and are unusable."`;
   waitForClick; clearText; marker; sound(`T1B060`); appendText; 
   //Sora
   Sora`"I have also been attempting to make contact 
via a seafloor cable network, using sonar..."`;
   waitForClick; clearText; marker; sound(`T1B061`); appendText; 
   //Sora
   Sora`"Right now I cannot estimate when the network 
will be back online."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So we're like little kids lost smack in the 
middle of the ocean and nobody can hear our 
SOS..."`;
   waitForClick; clearText; marker; sound(`T1B062`); appendText; 
   //Sora
   Sora`"Exactly."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Those were the cold, hard facts we had to face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was every reason for everyone to get 
depressed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sighed....`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B063`); appendText; 
   //You
   You`"Alright! We've got to stay in good spirits!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`One of the group was determined to dispel the 
gloomy atmosphere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You spoke so fast it was almost scary.`;
   waitForClick; clearText; marker; sound(`T1B064`); appendText; 
   //You
   You`"I'm a first year student at Kyumeikan Girl's 
College and I work here part-time. My name is 
Yubiseiharukana Tanaka. I will be your guide 
until the rescue team comes."`;
   waitForClick; clearText; marker; sound(`T1B065`); appendText; 
   //You
   You`"Rap-tap-tap-tap Ta-da!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Hey, wait, wait! What did you just say?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B066`); appendText; 
   //You
   You`"I'm a freshman at Kyumeikan Girl's College."`;
   waitForClick; clearText; marker; sound(`T1B067`); appendText; 
   //You
   You`"I work here part-time and only over the 
holidays."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B068`); appendText; 
   //You
   You`"Well, I'm kind of new to this whole tour 
thing, but I will be leading the tour..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, no. After that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B069`); appendText; 
   //You
   You`"Huh? You mean my name?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B070`); appendText; 
   //You
   You`"Yubiseiharukana Tanaka."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yubise...what?"`;
   waitForClick; clearText; marker; sound(`T1B071`); appendText; 
   //You
   You`"Yubiseiharukana Tanaka."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I can't get my tongue around that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B072`); appendText; 
   //You
   You`"That's why I said you can call me You. The 
long name is a pain, isn't it?"`;
   waitForClick; clearText; marker; sound(`T1B073`); appendText; 
   //Coco
   Coco`"Hey, I have a question?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Another gloom destroyer appeared...`;
   waitForClick; clearText; marker; sound(`T1B074`); appendText; 
   //You
   You`"What might that be?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B075`); appendText; 
   //Coco
   Coco`"Can I call you Nakkyu?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B076`); appendText; 
   //You
   You`"Yes, please do. And what is your name?"`;
   waitForClick; clearText; marker; sound(`T1B077`); appendText; 
   //Coco
   Coco`"Coco Yagami!!"`;
   waitForClick; clearText; marker; sound(`T1B078`); appendText; 
   //Coco
   Coco`"And this is Pipi!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her pet dog appeared from nowhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Boy was she full of energy. Leave it to 
elementary school kids...`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B079`); appendText; 
   //You
   You`"And how old are you?"`;
   waitForClick; clearText; marker; sound(`T1B080`); appendText; 
   //Coco
   Coco`"I'm in ninth grade."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wh-what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B081`); appendText; 
   //Coco
   Coco`"What? What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No...it's nothing..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it that surprises never cease.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B082`); appendText; 
   //You
   You`"Okay, nice to meet you, Coco and Pipi!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B083`); appendText; 
   //Coco
   Coco`"Thank you!"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   //Pipi
   Pipi`"Woof!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B084`); appendText; 
   //You
   You`"What a cute dog!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B085`); appendText; 
   //You
   You`"And so smart, too!"`;
   waitForClick; clearText; marker; sound(`T1B086`); appendText; 
   //Coco
   Coco`"I think so, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if maybe there wasn't enough 
oxygen in the room...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was getting a headache....`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Girl
   Girl`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl in the black clothes gave our upbeat 
companions a cool stare.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You noticed the look.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02BDM`, name2: `TU15ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B087`); appendText; 
   //You
   You`"Uh, and how about you over there?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Why're you asking me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B088`); appendText; 
   //You
   You`"...Aren't you together?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stupid. What are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B089`); appendText; 
   //You
   You`"Hmmmm....."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's that supposed to mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B090`); appendText; 
   //Tsugumi
   Tsugumi`"Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I realized the girl had spoken.`;
   waitForClick; clearText; marker; sound(`T1B091`); appendText; 
   //Tsugumi
   Tsugumi`"Tsugumi Komachi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just loud enough to make out what she 
was saying.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B092`); appendText; 
   //Tsugumi
   Tsugumi`"That's my name..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B093`); appendText; 
   //You
   You`"Hi Tsugumi! Nice to meet you!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU18ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She turned her back. You shrugged slightly.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought Tsugumi might have been embarrassed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was something kinda cute about her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Tsugumi, Tsugumi...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I think that's a bird's name...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered her tugging me along in the 
aquarium and running like the wind.`;
   waitForClick; 
});
choice(
   `Thanks for helping back there`
   `What are you mad about?`
);
switch (choice) {
   case 0: goto(lbl_000009d6);
   case 1: goto(lbl_00000a0d);
}
let lbl_000009d6;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Tsugumi...thanks for helping back there."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked over to her and said this.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B094`); appendText; 
   //Tsugumi
   Tsugumi`"What are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You saved me in the aquarium, right?"`;
   waitForClick; clearText; marker; sound(`T1B095`); appendText; 
   //Tsugumi
   Tsugumi`"I didn't mean to save you."`;
   waitForClick; clearText; marker; sound(`T1B096`); appendText; 
   //Tsugumi
   Tsugumi`"You were in the way."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...What?"`;
   waitForClick; clearText; marker; sound(`T1B097`); appendText; 
   //Tsugumi
   Tsugumi`"If you had tumbled there, you would have 
been in the way."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B098`); appendText; 
   //Tsugumi
   Tsugumi`"I mean you were an obstacle."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked annoyed as she said this.`;
   waitForClick; clearText; 
});
goto(lbl_00000a40);
let lbl_00000a0d;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What are you so mad about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked over to her and said this.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B099`); appendText; 
   //Tsugumi
   Tsugumi`"This is how I am. Normally."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I won't ask you to pretend to be happy..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But how about being a little more friendly? 
We're going to have to put up with each other 
until we get outta here."`;
   waitForClick; clearText; marker; sound(`T1B100`); appendText; 
   //Tsugumi
   Tsugumi`"Why?"`;
   waitForClick; clearText; marker; sound(`T1B101`); appendText; 
   //Tsugumi
   Tsugumi`"I don't know any of you. We just happen to 
all be here together."`;
   waitForClick; clearText; marker; sound(`T1B102`); appendText; 
   //Tsugumi
   Tsugumi`"That's right we don't have any connection to 
each other..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B103`); appendText; 
   //Tsugumi
   Tsugumi`"We're just an unlucky gathering of strangers."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked annoyed.`;
   waitForClick; clearText; 
});
let lbl_00000a40;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(This chick's intense! And scary...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`In my mind, I retracted my earlier thoughts 
about her being cute.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I glared at each other for a while.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU08BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B104`); appendText; 
   //You
   You`"Hey, hey! You two! Let's get along now!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You jumped in between us.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I walked away from Tsugumi and she looked 
away from me.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B105`); appendText; 
   //You
   You`"Sora, it's your turn to introduce yourself."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You, who was totally in control of the 
situation, turned to Sora who was working on 
the computer.`;
   waitForClick; clearText; marker; sound(`T1B106`); appendText; 
   //Sora
   Sora`"Oh, you mean me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora took her hands from the machine and came 
towards us as if she were gliding.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B107`); appendText; 
   //Sora
   Sora`"Pardon me for the belated introduction. I am 
Sora Akanegasaki. I am a system engineer in 
LeMU's Development Division."`;
   waitForClick; clearText; marker; sound(`T1B108`); appendText; 
   //Sora
   Sora`"Actually...I am the assistant chief."`;
   waitForClick; 
});
choice(
   `...I thought that was something else.`
   `Assistant chief, huh?`
);
switch (choice) {
   case 0: goto(lbl_00000adc);
   case 1: goto(lbl_00000aed);
}
let lbl_00000adc;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(...Wow?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`But something struck me as strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, it had been bothering me since 
before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Basically...the assistant chief.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spoke about herself as if she were 
someone else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I was not able to gauge the situation.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spoke as if the problems in the system 
were her own.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Please do excuse me.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`(System engineer...I wonder if she talks like 
that because of her job?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I thought...but I held my tongue.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...I'm Takeshi Kuranari. I'm 20 years old 
and a junior in college. Thanks."`;
   waitForClick; clearText; marker; sound(`T1B109`); appendText; 
   //Sora
   Sora`"Takeshi, nice to meet you."`;
   waitForClick; clearText; marker; sound(`T1B110`); appendText; 
   //Coco
   Coco`"Yeah, it sure is!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_00000bb7);
let lbl_00000aed;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Assistant chief...so you're pretty 
high up then?"`;
   waitForClick; clearText; marker; sound(`T1B111`); appendText; 
   //Sora
   Sora`"Only in name, I'm really just an 
assistant. It's no big deal."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But, hey, Sora weren't you up at the gate 
above ground?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You were giving some kind of explanation at 
the entrance, right? I only heard half of it, 
but..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_00000b59).if(var_ba != 0);
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B112`); appendText; 
   //Coco
   Coco`"Oh, you might be right. Are you the girl from 
before?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B113`); appendText; 
   //Sora
   Sora`"That's right. So you noticed...."`;
   waitForClick; clearText; 
});
goto(lbl_00000b7c);
let lbl_00000b59;
multifgload2({ id1: 1, id2: 2, name1: `SO02ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
goto(lbl_00000b7c);
let lbl_00000b7c;
showTextbox();
text(() => {
   marker; sound(`T1B114`); appendText; 
   //Sora
   Sora`"We are short of people here. From time to 
time I do that kind of work."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, I'm Takeshi Kuranari."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm 20. I'm a junior at university."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B115`); appendText; 
   //Coco
   Coco`"Nice to meet you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B116`); appendText; 
   //Sora
   Sora`"Yes. Nice to meet you."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
let lbl_00000bb7;
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `YU16BDS`, name2: `SO01ADS`, name3: `CO12ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T1B117`); appendText; 
   //You
   You`"Yup. Mucho gusto."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone laughed cheerfully.`;
   waitForClick; clearText; marker; sound(`T1B118`); appendText; 
   //Tsugumi
   Tsugumi`"...Dumb."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everybody laughed except Tsugumi that is...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It took a little effort, but the atmosphere 
finally loosened up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You started gathering us up.`;
   waitForClick; clearText; marker; sound(`T1B119`); appendText; 
   //You
   You`"Okay now everyone!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B120`); appendText; 
   //You
   You`"Now that we have just started having so much 
fun, it's time to say good-bye—"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `CO06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B121`); appendText; 
   //Coco
   Coco`"Uh, Nakkyu! Wait a second!"`;
   waitForClick; clearText; marker; sound(`T1B122`); appendText; 
   //Coco
   Coco`"We haven't asked somebody's name yet."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco pointed to the corner of the room.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B123`); appendText; 
   //Kid
   Kid`"Uh, do you mean me...?"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   //Pipi
   Pipi`"Woof."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We'd completely forgotten him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He'd been quiet the whole time, trying to 
stay out of the way and mostly kept to the 
corner of the room.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked at the boy and it looked like her 
face stiffened a little.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B124`); appendText; 
   //Coco
   Coco`"So let's ask..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B126`); appendText; 
   //Coco
   Coco`"What is your name?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco tilted her head as she asked him the 
question.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`T1B127`); appendText; 
   //Kid
   Kid`"I..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B128`); appendText; 
   //Kid
   Kid`"My..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't figure what he was waiting for....`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T1B129`); appendText; 
   //Kid
   Kid`"I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B130`); appendText; 
   //Kid
   Kid`"Who am I...?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(2, 4, 1);
multifgload3({ name1: `SO06ADS`, name2: `CO06ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T1B131`); appendText; 
   //Tsugumi
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`T1B132`); appendText; 
   //Coco
   Coco`"Huh?"`;
   waitForClick; clearText; marker; sound(`T1B133`); appendText; 
   //Sora
   Sora`"...?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B134`); appendText; 
   //Kid
   Kid`"I can't remember..."`;
   waitForClick; clearText; marker; sound(`T1B135`); appendText; 
   //Kid
   Kid`"My...name..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe you've got amnesia."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Retrograde: `;
   delay(30); waitForClick; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; 
   Narr`Amnesia:`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Refers to memories lost for a certain period 
of time. It is more common with new memories 
than with old memories.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`During the period of memory loss, if the 
person has no memories at all, it is called 
'complete amnesia,' but in instances in which 
some memories can be recalled it is called 
'partial amnesia.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Generally, amnesia results from trauma to the 
head, epileptic seizures, mental diseases and 
disorders that manifest themselves as memory 
impairments.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`When a person has trouble recollecting events 
prior to the impairment, this is called 
retrograde amnesia. An instance in which 
memory impairment is significant and 
continues after consciousness is restored is 
known as 'anterograde amnesia.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Amnesia caused by inherent mental factors is 
referred to as 'organic amnesia,' while that 
induced by psychological stress is typically 
known as 'psychogenic amnesia,' 'hysterical 
amnesia' being the most typical example.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This is an affliction in which the victim 
often cannot recall knowledge relating to his 
or her personal history, such as one's name, 
history family or friends...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And is often a reaction to incidents too hard 
to endure, which incite an unconscious desire 
to escape, forget or repress these 
experiences or events.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Symptoms do not manifest in any particular way 
physically, and a person's brain functioning 
remains normal.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`People found wandering in this state are 
often taken in or seek help from authorities, 
such as the police.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Young people in their 20s under severe 
psychological stress, such as those facing 
domestic violence or academic problems, 
marriage or financial difficulties, are the 
most typical victims. However, this illness 
can be used as a cover for criminal 
activities and it can be difficult to detect 
the difference.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This is especially seen in individuals with 
demonstrative personalities or pathological 
tendencies to lie.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Normally in a few days or months, or with the 
help of hypnosis or shock therapy, the 
memories should return.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Complete amnesia can be spurred by retrograde 
life amnesia. Memories are usually restored 
gradually beginning with older ones and 
treatment methods include psychiatric care, 
and hypnosis both narcotic and naturally 
induced.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO17ADS`, name2: `KA03ADS`, name3: `YU13BDS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Amnesia?"`;
   waitForClick; clearText; marker; sound(`T1B136`); appendText; 
   //You
   You`"That's right...he can't remember anything."`;
   waitForClick; clearText; marker; sound(`T1B137`); appendText; 
   //Sora
   Sora`"Did you suffer a concussion?"`;
   waitForClick; clearText; marker; sound(`T1B138`); appendText; 
   //Sora
   Sora`"You might have bumped your head severely 
somewhere."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, you coulda taken a tumble...like when 
trying to escape."`;
   waitForClick; clearText; marker; sound(`T1B139`); appendText; 
   //Tsugumi
   Tsugumi`"Hmmph..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi had let loose a nasty snort when I 
said 'tumble'.`;
   waitForClick; clearText; marker; sound(`T1B140`); appendText; 
   //Kid
   Kid`"I don't know...I don't remember anything."`;
   waitForClick; clearText; marker; sound(`T1B141`); appendText; 
   //Kid
   Kid`"Hey. Where is this?"`;
   waitForClick; clearText; marker; sound(`T1B142`); appendText; 
   //You
   You`"We are in LeMU, a marine theme park."`;
   waitForClick; clearText; marker; sound(`T1B143`); appendText; 
   //Kid
   Kid`"La...my...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The kid glanced at Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He tilted his head.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco was playing rock, paper, scissors with 
her dog, Pipi....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG07A1`, transition: 20 });
clock(`17:32`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We moved to a room with a kiosk in it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thankfully at least the electric drink 
dispenser was working.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Each person poured the drink they wanted in a 
paper cup.`;
   waitForClick; clearText; 
});
setFGRenderOrder(1, 2, 4);
multifgload3({ name1: `CO01ADS`, name2: `YU02BDS`, name3: `SO01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T1B144`); appendText; 
   //You
   You`"For now, let's just make a toast and a 
prayer to everyone's safety!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B145`); appendText; 
   //Coco
   Coco`"Cheers!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay then. Cheers."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B146`); appendText; 
   //Kid
   Kid`"C-cheers."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `TU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The string of events leading to the sudden 
toast went something like this - `;
   waitForClick; clearText; marker; appendText; 
   Narr`'Hey, kid, don't you know anything about 
before?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Not even something personal about yourself?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'What do I know...Oh!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I know...I'm kinda thirsty.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was the reason.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But reason aside, we needed a breather, so the 
timing was good.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Sora, what about you? Don't you wanna 
drink?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was standing stiffly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B147`); appendText; 
   //Sora
   Sora`"Uh, no thanks. I'm not thirsty."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, how about taking a load off? You been 
standing the whole time."`;
   waitForClick; clearText; marker; sound(`T1B148`); appendText; 
   //Sora
   Sora`"I'm fine. But thanks for your concern."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sure...I thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora seemed older than me. She seemed polite 
and serious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed the typical, Japanese woman.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Prim and proper' could be one way of 
describing Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around at my surroundings.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was next to the kid and chatting with him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sometimes he would laugh or shake his head 
weakly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could overhear bits of their conversation. 
They were talking about his memory.`;
   waitForClick; clearText; marker; sound(`T1B149`); appendText; 
   //You
   You`"It's not that out of the ordinary."`;
   waitForClick; clearText; marker; sound(`T1B150`); appendText; 
   //You
   You`"You'll be fine. It'll fix itself in time."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like the two of them were drinking 
orange juice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was a way off from everyone and 
looking into the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea what she was drinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have any idea what she was thinking 
either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After agonizing over whether to drink apple 
juice or cocoa, Coco finally decided on both.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she proceeded to forget about her drink 
immediately and Coco took a hold of Pipi's 
front legs and started dancing around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a cute scene...`;
   waitForClick; clearText; marker; appendText; 
   Narr`After things had calmed down, You and everyone 
gathered in front of the kiosk.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B151`); appendText; 
   //You
   You`"For a while, it looks like we are going to 
have to spend sometime in LeMU. So there are 
a few things I would like to go over."`;
   waitForClick; clearText; marker; sound(`T1B152`); appendText; 
   //You
   You`"First is what has happened."`;
   waitForClick; clearText; marker; sound(`T1B153`); appendText; 
   //You
   You`"Next is what we should do now."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B154`); appendText; 
   //Sora
   Sora`"You, would you mind if I addressed the first 
of those topics?"`;
   waitForClick; clearText; marker; sound(`T1B155`); appendText; 
   //You
   You`"Please do, Sora."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora stood in front of everyone and held out 
her arms.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly, a holographic window materialized 
in the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea how the whole system worked, 
but I figured that it was the same one they 
had used at the entrance to the park.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B156`); appendText; 
   //Sora
   Sora`"I will explain..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And this is what she said...`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
bgload({ name: `IMG01A`, transition: 20 });
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `IMG01B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`12:45 p.m.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Suddenly a blackout occurred - cause unknown.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Next, the emergency alarms began ringing - 
the cause of this was also unknown.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`12:54 p.m.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The Insel null elevator shifted to its 
emergency power source and an evacuation 
order was issued for the entire complex. 
Employees and visitors evacuated the premises. `;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At this point, some people panicked and in the 
confusion opened the emergency corridor to the 
outside without going through decompression. 
It is highly probable that they are 
experiencing serious decompression sickness 
at this moment.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The emergency corridor to the outside was 
left open for several minutes.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`1:03 p.m.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The opening of the emergency corridor, 
disrupted the air pressure balance inside the 
complex and the devices responsible for 
adjusting the air pressure encountered 
problems. The complex started automatically 
pulling in air from the outside.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As a result, the mixture of gas in the complex 
designed to maintain 6 atmospheres of air 
pressure escaped.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Apparently helium, which is lighter that 
oxygen or nitrogen, leaked out first. `;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Air pressure in the complex dropped to 1 
atmosphere, the same as the level outside.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`2:39 p.m.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The major power source came back on line. 
LeMMIH, the computer system responsible for 
overseeing LeMU rebooted and reset the air 
pressure adjustment mechanism. The air 
ventilation ducts were closed.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`However, LeMU was built to saturation diving 
specifications, meaning that as long as the 
internal air pressure was the same level or 
higher than the outside water pressure, it 
was designed not to collapse.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Which meant...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`3:55 p.m.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`When the internal air pressure dropped to 1 
atmosphere, it became impossible for the 
external partitions to withstand the external 
water pressure, causing the glass to crack 
under the pressure, thus resulting in flooding.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Subsequently, to minimize the damage from the 
flooding, the emergency watertight doors had 
automatically shut.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Which brought us up to speed.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
bgload({ name: `BG07A1`, transition: 20 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; sound(`T1B157`); appendText; 
   //Sora
   Sora`"I would like to be able to gauge the current 
situation more accurately...however, some 
monitors and sensors are still not 
functioning normally."`;
   waitForClick; clearText; marker; sound(`T1B158`); appendText; 
   //Sora
   Sora`"As a result, I can't obtain accurate data... 
and can only provide an outline of the 
situation..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, sorry to ask you the same question 
again, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The first floor...above us is flooded, yeah?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B159`); appendText; 
   //Sora
   Sora`"Correct. I have requested confirmation from 
our complex management system, LeMMIH, and it 
has been confirmed."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So we can't get outta here."`;
   waitForClick; clearText; marker; sound(`T1B160`); appendText; 
   //Sora
   Sora`"Currently, the top priority is requesting 
assistance so I am doing my utmost to get the 
communications system back online. I must 
request your patience..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora bowed her head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was feeling depressed again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to admit it, but we were in deep 
trouble.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B161`); appendText; 
   //You
   You`"Well, all we can do for now is just wait for 
help. Right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You just keep trying to make everyone feel 
better, don't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B162`); appendText; 
   //You
   You`"Oh, I'm sorry. Would you prefer my dark, 
despondent, we're doomed approach?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not what I'm saying..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B163`); appendText; 
   //You
   You`"Anyway, how about another drink?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You came out with a huge industrial sized 
bottle and held it up comically.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I just can't get over how cheerful you are, 
given how totally screwed we are."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I complained again without thinking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B164`); appendText; 
   //You
   You`"I said that's not it at all. I'm like this 
precisely BECAUSE of the situation."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this with a bit of a sulk.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, you're right...sorry."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B165`); appendText; 
   //You
   You`"There's no need to apologize. Here you go."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_14`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gulp, gulp, gulp....`;
   waitForClick; clearText; marker; appendText; 
   Narr`She filled my cup to the brim with juice.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, hey..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sluuuuuuuurp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But most of it was just bubbles.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This is good!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B166`); appendText; 
   //You
   You`"Isn't it?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sluuuuuuuurp.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Thanks for the juice."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T1B167`); appendText; 
   //You
   You`"Anytime. And it's on the house."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You shouldered the massive bottle and took it 
back inside the shop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Carrying it she teetered like a penguin, 
which was funny because it really didn't suit 
her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Geez, she's a funny one...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed without thinking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was leaning against the shop wall and 
staring after You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face was expressionless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what she was thinking....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Even if we are going to wait for help..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We can't just sit on our butts doing nothing. 
Right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I casually tried to strike up a conversation 
with Tsugumi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B168`); appendText; 
   //Tsugumi
   Tsugumi`"You..."`;
   waitForClick; clearText; marker; sound(`T1B169`); appendText; 
   //Tsugumi
   Tsugumi`"You act like you're all serious, but there's 
really nothing going on in that head of yours 
is there?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What? That's not true!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm thinking. I'm always thinking."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. I was just thinking of a way to keep 
us from getting bored..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rattled off the first thing that jumped to 
mind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B170`); appendText; 
   //Tsugumi
   Tsugumi`"...Sure. Whatever."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi gave me an annoyed look.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She seemed exasperated....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want her to expect anything from me, 
but her attitude was frustrating.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Arrghh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey! Alright everyone listen up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had an idea.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called to everybody.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B171`); appendText; 
   //Tsugumi
   Tsugumi`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B172`); appendText; 
   //Coco
   Coco`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B173`); appendText; 
   //Sora
   Sora`"What's the matter, Takeshi, all of the 
sudden?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B174`); appendText; 
   //You
   You`"What? What? What happened?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B175`); appendText; 
   //Kid
   Kid`"...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everybody gathered around.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We're not gonna accomplish anything just 
spending time like this, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So I just thought, why don't we all split up 
and look around the complex?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `KA03ADS`, name2: `SO07ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B176`); appendText; 
   //Sora
   Sora`"Why? Don't you think that staying in one 
place would be safer?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No. I think we should check to see if 
'staying in one place' and doing nothing is 
really the safest thing to do."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You know, walk around, see what we can find 
and scope out any dangers..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If we find some, we can tell everyone to 
watch out for them or do something to get rid 
of them."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And we can see if there is a safer 
place...and then we could all gather there."`;
   waitForClick; clearText; marker; sound(`T1B177`); appendText; 
   //Sora
   Sora`"But Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's not like the rescue squad is about to 
burst in the door."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So if we're going to have to be here in LeMU 
for half a day or a day or so, then..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We should find out what kinda place this is 
and get to know it like our own house."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B178`); appendText; 
   //Sora
   Sora`"In that case, I can provide you with an 
abundance of information..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No that's not what I mean. Listen. Sora, you 
have to look after the communications 
network, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You were just talking about how some sensors 
or monitors weren't working right and you 
can't get a full sense of the current 
situation."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B179`); appendText; 
   //You
   You`"Oh, I see."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You clapped her hands together.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B180`); appendText; 
   //You
   You`"So, while Sora is trying to send an SOS, we 
should use our own two legs to see what kind 
of a situation we're in."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B181`); appendText; 
   //You
   You`"How about it? Sora, that would be easier on 
you wouldn't it?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `KA01ADS`, name2: `SO13ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B182`); appendText; 
   //Sora
   Sora`"Yes...I suppose it would. But...there are 
still the dangers..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that Sora was unsure.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B183`); appendText; 
   //Tsugumi
   Tsugumi`"Alright, I'll go then.".`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi suddenly laughed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she were laughing, but her lips 
curled nastily.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Tsugumi! Where are you going?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B184`); appendText; 
   //Tsugumi
   Tsugumi`"We are going to split up and check things 
out, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's expression was blank again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Turning around she headed for the entrance to 
the emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, you can't just..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Come back here! Hey idiot!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was already out of sight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her shoes clacked on the metal stairs as she 
climbed.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
setFGRenderOrder(2, 1, 4);
multifgload3({ name1: `YU03BDS`, name2: `SO03ADS`, name3: `CO03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T1B185`); appendText; 
   //Coco
   Coco`"Tsugumi's gone. What are we going to do?"`;
   waitForClick; clearText; marker; sound(`T1B186`); appendText; 
   //Sora
   Sora`"I'm worried..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's brow furrowed and her expression 
stiffened.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B187`); appendText; 
   //Kid
   Kid`"I think it's alright."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU06BDS`, name2: `CO06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The kid had broken his silence and I was a 
little surprised.`;
   waitForClick; clearText; marker; sound(`T1B188`); appendText; 
   //Kid
   Kid`"It's like Takeshi says. It doesn't do us any 
good to just stay here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He continued without pausing.`;
   waitForClick; clearText; marker; sound(`T1B189`); appendText; 
   //Kid
   Kid`"Tsugumi just went to the second floor. I'll 
bet she is just going to look around there."`;
   waitForClick; clearText; marker; sound(`T1B190`); appendText; 
   //Kid
   Kid`"So why don't we look around the third floor?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B191`); appendText; 
   //You
   You`"Hmmm..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU15BDS`, name2: `CO11ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B192`); appendText; 
   //You
   You`"Alright then. I'm in."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `CO12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B193`); appendText; 
   //Coco
   Coco`"Okay. Let's do that then."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sounds like a plan..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave a big nod.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B194`); appendText; 
   //Sora
   Sora`"I guess there is nothing I can do to stop 
you. Please, be careful everyone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora finally nodded slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Once everyone's minds were set, things picked 
up.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora said she was going back to the Control 
Room to get data, so went our separate ways.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Coco and the kid, and I went to search 
around the complex.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We decided to check the normal corridors and 
the emergency corridors above and below them 
on the third floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Splitting into pairs where the corridor 
forked, we agreed to meet back at the fork 
when we had checked the corridor ahead...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We did that over and over.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We walked every corridor that we could walk 
down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if water was leaking anywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured that the water pressure would send 
water spurting through any crack it could find.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Also, I thought there might be other people 
that had been left behind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`According to Sora, the system had told her 
that there were six people in the complex. 
Still, there was no guarantee that was right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that if we found somebody else, it 
might change our situation.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There could also have been a corridor that the 
broken sensors weren't picking up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hoped there might be a door to the surface 
that we simply were unaware of...I couldn't 
throw away that shred of hope.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`While we were out searching, Sora continued 
to try to get into contact with LeMU's 
central computer, LeMMIH, and gather more 
information.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had said that she wanted to establish a 
means of communicating with the outside.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG07A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We returned to in front of the kiosk. Sora had 
arrived first and was waiting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Tsugumi was nowhere to be seen.`;
   waitForClick; clearText; marker; sound(`T1B195`); appendText; 
   //You
   You`"Tsugumi hasn't come back."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We can't just let her run loose...I wonder 
where she is."`;
   waitForClick; clearText; marker; sound(`T1B196`); appendText; 
   //Sora
   Sora`"Shall I check?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG15A1`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
clock(`18:29`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We all went into the Central Control Room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B197`); appendText; 
   //Sora
   Sora`"We checked the life reading scan of people 
inside the complex. Even if Tsugumi were 
moving around, she should still appear in the 
results of this scan."`;
   waitForClick; clearText; marker; sound(`T1B198`); appendText; 
   //Sora
   Sora`"That is of course if she is in the complex..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(And if she is alive...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I managed to keep that thought from coming 
out of my mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It only took a moment for a map of LeMU and 
data from the sensors to appear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was one fuzzy light on the second floor.`;
   waitForClick; clearText; marker; sound(`T1B199`); appendText; 
   //Sora
   Sora`"That would be Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were a number of lights in a room on 
the third floor. I figured that was the 
Control Room where we were.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B200`); appendText; 
   //Kid
   Kid`"Oh!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18BDM`, name2: `KA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B201`); appendText; 
   //You
   You`"What is it?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 16, volume: 100 });
fgload({ id: 2, name: `KA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B202`); appendText; 
   //Kid
   Kid`"Hey, isn't that strange?"`;
   waitForClick; clearText; marker; sound(`T1B203`); appendText; 
   //Kid
   Kid`"Look..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The kid pointed at a corner of the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It indicated a single digit number.`;
   waitForClick; clearText; 
});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 6'`;
   waitForClick; clearText; marker; sound(`T1B204`); appendText; 
   //Kid
   Kid`"Watch it closely..."`;
   waitForClick; clearText; 
});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 5'`;
   waitForClick; clearText; 
});
bgload({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 7'`;
   waitForClick; clearText; 
});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 6'`;
   waitForClick; clearText; 
});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`5...`;
   waitForClick; 
});
bgload_keepFg({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`7...`;
   waitForClick; 
});
bgload_keepFg({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`6...`;
   waitForClick; 
});
bgload_keepFg({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`5...`;
   waitForClick; 
});
bgload_keepFg({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`7...`;
   waitForClick; 
});
bgload_keepFg({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`6...`;
   waitForClick; clearText; 
});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T1B205`); appendText; 
   //Sora
   Sora`"Oh, my. You're right.... I wonder what it 
could be..."`;
   waitForClick; clearText; 
});
bgload({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora fiddled with the console, but the 
numbers on the monitor continued to fluctuate.`;
   waitForClick; clearText; 
});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The number changed every few seconds.`;
   waitForClick; clearText; 
});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But even while the life scan numbers changed, 
no new lights appeared or disappeared.`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `KA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B206`); appendText; 
   //Kid
   Kid`"Maybe..."`;
   waitForClick; clearText; marker; sound(`T1B207`); appendText; 
   //Kid
   Kid`"Maybe there is somebody besides us in LeMU."`;
   waitForClick; clearText; marker; sound(`T1B208`); appendText; 
   //Kid
   Kid`"If the number really is supposed to be 
'7'..." `;
   waitForClick; clearText; marker; sound(`T1B209`); appendText; 
   //You
   You`"That's what it would mean."`;
   waitForClick; clearText; marker; sound(`T1B210`); appendText; 
   //Kid
   Kid`"Don't you think we should go look for that 
person?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B211`); appendText; 
   //Kid
   Kid`"I mean...they could be in trouble. We have 
to help them!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hang on, kid. Calm down."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`For a while all of our eyes were glued to the 
changing numbers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Watching them change was unsettling....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally - `;
   waitForClick; clearText; 
});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 6'`;
   waitForClick; clearText; marker; appendText; 
   Narr`The monitor settled on the number six.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light on the second floor was moving 
around slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The five lights on the third floor were all 
in one room, unmoving.`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `KA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1B212`); appendText; 
   //Sora
   Sora`"Perhaps it...was just because of a 
malfunctioning sensor. The cause is unclear. 
Would you like to see what else we can find 
out?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nah. Tsugumi's on the second floor and there 
are five of us here..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So that number '6' is probably right. Don't 
you think?"`;
   waitForClick; clearText; marker; sound(`T1B213`); appendText; 
   //Kid
   Kid`"But..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, I figure if we go look around a little 
more, we'll find out soon enough."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`T1B214`); appendText; 
   //You
   You`"...Yeah."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright then."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, do you all wanna head to the second 
floor...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it was best if we actually took in 
the situation with our own eyes. `;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We climbed to the top of the long emergency 
stairs together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, we didn't find anybody else on 
the third floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't see any routes that looked like 
they might lead out either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had told us there was no schedule for the 
communications system to be back online.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could look at the information displayed on 
some of the LeMMIH terminals, which were set 
in some attractions and in the corridors, but 
we couldn't operate them in any way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cause for this was unclear, too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fact that there were no leaks on that 
floor was our one saving grace.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 120 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_1C`);
