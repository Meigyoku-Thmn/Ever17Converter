goto(lbl_0000046e).if(var_b3 == 1);
goto(lbl_00000473).if(var_b3 == 2);
goto(lbl_00001b06).if(var_b3 == 3);
goto(lbl_00001e3c).if(var_b3 == 4);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
setSceneTitle({ index: 6 });
clock(`18:40`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We arrived at Zweite stock, the second floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora gave us 30 minutes of free time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that still didn't mean we could go running 
around as we pleased.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So we decided to randomly hit some of the 
rooms, and search them.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora held her hands out in front of her and a 
holographic window appeared.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C000`); appendText; 
   //Sora
   Sora`"Unlike the floor below, all of the scanning 
sensors on this floor seem to be functioning 
normally. This floor appears safer as well."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C001`); appendText; 
   //Sora
   Sora`"Oh...Tsugumi is on this floor.... She seems 
to be walking in the vicinity of the elevator."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You can tell that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C002`); appendText; 
   //Sora
   Sora`"Yes. I will work in the Security Office while 
monitoring everyone's activities. If a problem 
arises, I will announce it via the intercom..."`;
   waitForClick; clearText; marker; sound(`T1C003`); appendText; 
   //Sora
   Sora`"And if something happens, please contact me 
immediately."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C004`); appendText; 
   //You
   You`"Alright. Okay then. Let's split up and meet 
in the Security Office in half an hour."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C005`); appendText; 
   //Kid
   Kid`"Okay."`;
   waitForClick; clearText; marker; sound(`T1C006`); appendText; 
   //Coco
   Coco`"Okie Dokie."`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sure. Whatever."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After closing the holographic window, Sora 
went into a room a little ways down the 
corridor. Apparently that was the Security 
Office.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone headed out in a different direction 
from the corridor intersection.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took my PDA out of my pocket and pushed the 
button.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was recharged and the backlight was working 
without a problem.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reset the time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that I tested it a number of times, but 
it didn't seem to be able make a call or go 
online.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe I ought to give up using this to get 
in touch with the outside...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the PDA back into my pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had thirty minutes left. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I was trying to decide which area of the park 
to visit first.`;
   waitForClick; 
});
varop(`(28 0a a4) d0 := (00) 1`);
varop(`(28 0a a4) d1 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 1`);
let lbl_00000221;
goto(lbl_00000260).if(var_d0 != 0);
goto(lbl_00000260).if(var_d1 != 0);
goto(lbl_000006a3).if(var_d2 == 0);
let lbl_00000260;
choice(
   cond(`[cond (28 0a a4) d0 14 (00)]The Dolphin Merry-go-round`, var_d0)
   cond(`[cond (28 0a a4) d1 14 (00)]The souvenir shop`, var_d1)
   cond(`[cond (28 0a a4) d2 14 (00)]The Security Office`, var_d2)
);
switch (choice) {
   case 0: goto(lbl_0000028a);
   case 1: goto(lbl_00000508);
   case 2: goto(lbl_0000062a);
}
let lbl_0000028a;
bgload({ name: `BG02A2`, transition: 20 });
varop(`(28 0a a4) d0 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I headed to the room with the attractions.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a carousel there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only instead of horses, it was set to a 
dolphin theme...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like its official name was the 
Dolphin Carousel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With no visitors around, the ride seemed a 
little spooky and very lonely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even the dolphins themselves looked sad.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 8, volume: 100 });
playSFX({ name: `SE03_11`, a1: 0, volume: 95 });
bgload({ name: `BG02A1`, transition: 30 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whoa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly a happy melody started and the ride 
began to rotate.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, no one was riding it....`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the sudden, it no longer seemed so 
lonely, but that much more spooky.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wh-wh-wh-what is this?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Watch out! This place is haunted."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Even thinking about it gives me the creeps..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then from somewhere I heard someone snickering.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C007`); appendText; 
   //You
   You`"Mwa, ha, ha, ha"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You came skipping over to me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C008`); appendText; 
   //You
   You`"Hey, Takeshi. When did you get here?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Looks like you are having a lot of fun..."`;
   waitForClick; clearText; marker; sound(`T1C009`); appendText; 
   //You
   You`"But it is fun, isn't? Doesn't it make you 
happy?" `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C010`); appendText; 
   //You
   You`"Hee, hee. I always wanted to give this ride 
a whirl once."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You pointed to the merry-go-round.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't just turn it on without any warning!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You almost gave me a heart attack!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You surprised the heck out of me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my fist at her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I might have been exaggerating a little, but...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C011`); appendText; 
   //You
   You`"Takeshi, how could you be scared of a silly 
pod of wooden dolphins...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked at me sideways, and grinned at me 
mischievously.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nobody is supposed to be here in the theme 
park. It was like a horror movie!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C012`); appendText; 
   //You
   You`"Geez. You're such a chicken."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well...you were wasting energy by turning it 
on, too."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What if there were a blackout?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And we've no idea how long LeMU's back-up 
power is good for."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Besides, everybody knows that you should save 
energy!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C013`); appendText; 
   //You
   You`"So, you're not only chicken, but you worry a 
lot, too."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What're you talking about? It's common 
sense..."`;
   waitForClick; clearText; marker; sound(`T1C014`); appendText; 
   //You
   You`"Oh, Takeshi, so you don't know?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next she held her palms out and feigned 
exaggerated surprise.`;
   waitForClick; clearText; marker; sound(`T1C015`); appendText; 
   //You
   You`"This LeMU doesn't get any of its power from 
outside."`;
   waitForClick; clearText; marker; sound(`T1C016`); appendText; 
   //You
   You`"It is all generated inside this complex."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C017`); appendText; 
   //You
   You`"Down more than 300 feet underwater on the 
ocean floor are thermal seafloor vents - 
basically hot springs. So LeMU takes hot 
water from there and uses it for steam."`;
   waitForClick; clearText; marker; sound(`T1C018`); appendText; 
   //You
   You`"The power of that steam is used to turn the 
turbines and that's how we generate our power."`;
   waitForClick; clearText; marker; sound(`T1C019`); appendText; 
   //You
   You`"While LeMU is a theme park, it is also a 
closed-cycle plant and a test case for 
self-sufficient power generation."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C020`); appendText; 
   //You
   You`"And that's all memorized from the new 
employee manual."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I see."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C021`); appendText; 
   //You
   You`"I explain it in that kind of depth and all 
you can say is, 'I see'?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I mean, what a WONDERFUL explanation, you're 
a model employee!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C022`); appendText; 
   //You
   You`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`T1C023`); appendText; 
   //You
   You`"Takeshi, that was sure a sexy scream you let 
out when the dolphins started moving. You 
were scared, weren't you!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T1C024`); appendText; 
   //You
   You`"I think I'll tell everyone about it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Do what you want."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Then again, maybe you shouldn't."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The dolphins had stopped moving of their own 
accord.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You explained that the ride ran for about 
three minutes each time before shutting off 
automatically. `;
   waitForClick; clearText; marker; appendText; 
   Narr`We leaned against the fence surrounding the 
Dolphin Carousel.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"So you only work here part-time during the 
holidays?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C025`); appendText; 
   //You
   You`"Yup. I started the end of April and have been 
staying here. This is my fourth day..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And then out of the blue you get this. Pretty 
rough."`;
   waitForClick; clearText; marker; sound(`T1C026`); appendText; 
   //You
   You`"Takeshi, how many times have you come to 
LeMU?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This is the first time."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C027`); appendText; 
   //You
   You`"Ha. Then I've only got a three day head 
start on you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You laughed happily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sure cheerful. I had to respect her 
unflagging optimism and energy.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're tough...I mean this situation is so 
depressing and it doesn't seem to faze you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C028`); appendText; 
   //You
   You`"No, I'm really not. It's just easier. I said 
it earlier, didn't I - would you rather I get 
depressed?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I think it's better to laugh."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C029`); appendText; 
   //You
   You`"You're right. That's all we can do."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she laughed again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to force a smile.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C030`); appendText; 
   //You
   You`"Whew..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stretched like a cat.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then she sat there and hugged her knees.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed suit and sat down next to her.`;
   waitForClick; clearText; marker; sound(`T1C031`); appendText; 
   //You
   You`"To tell you the truth..."`;
   waitForClick; clearText; marker; sound(`T1C032`); appendText; 
   //You
   You`"I came to work here because I thought my dad 
might be here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Your dad?"`;
   waitForClick; clearText; marker; sound(`T1C033`); appendText; 
   //You
   You`"Actually, my father worked in the Research 
and Development Division of LeMU."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Research and development?"`;
   waitForClick; clearText; marker; sound(`T1C034`); appendText; 
   //You
   You`"Uh, well...he worked on a computer program. 
It's the hologram that Sora uses, the LeMMIH 
terminals and the complex control system..."`;
   waitForClick; clearText; marker; sound(`T1C035`); appendText; 
   //You
   You`"I don't know the details, he worked on all 
of it from when LeMU was first being built."`;
   waitForClick; clearText; marker; sound(`T1C036`); appendText; 
   //You
   You`"Of course, he didn't do it alone."`;
   waitForClick; clearText; marker; sound(`T1C037`); appendText; 
   //You
   You`"He was one of the members involved in 
developing the project."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Is that so...?_"`;
   waitForClick; clearText; marker; sound(`T1C038`); appendText; 
   //You
   You`"But my father..."`;
   waitForClick; clearText; marker; sound(`T1C039`); appendText; 
   //You
   You`"My father...disappeared one day."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...What?"`;
   waitForClick; clearText; marker; sound(`T1C040`); appendText; 
   //You
   You`"He just went missing..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-when?"`;
   waitForClick; clearText; marker; sound(`T1C041`); appendText; 
   //You
   You`"He...."`;
   waitForClick; clearText; marker; sound(`T1C042`); appendText; 
   //You
   You`"He has been missing as long as I can 
remember..."`;
   waitForClick; clearText; marker; sound(`T1C043`); appendText; 
   //You
   You`"It was when I was one year old, 17 years 
ago..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"17 years ago..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you don't remember...your father?"`;
   waitForClick; clearText; marker; sound(`T1C044`); appendText; 
   //You
   You`"No..."`;
   waitForClick; clearText; marker; sound(`T1C045`); appendText; 
   //You
   You`"I've only seen pictures and movies of him..."`;
   waitForClick; clearText; marker; sound(`T1C046`); appendText; 
   //You
   You`"I don't really have any memories..."`;
   waitForClick; clearText; marker; sound(`T1C047`); appendText; 
   //You
   You`"Everything I just told you I heard from my 
mother..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But why? Why did he disappear?"`;
   waitForClick; clearText; marker; sound(`T1C048`); appendText; 
   //You
   You`"If I knew that, I wouldn't have come here."`;
   waitForClick; clearText; marker; sound(`T1C049`); appendText; 
   //You
   You`"But the only clue to what happened is 
probably here..."`;
   waitForClick; clearText; marker; sound(`T1C050`); appendText; 
   //You
   You`"The last time my father was seen was in LeMU."`;
   waitForClick; clearText; marker; sound(`T1C051`); appendText; 
   //You
   You`"So I thought that if I came here maybe I 
would find some clue about my father..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seems like my mom has already given up, 
so I can't count on her...`;
   waitForClick; clearText; 
});
let lbl_0000046e;
showTextbox();
text(() => {
   marker; sound(`T1C052`); appendText; 
   //You
   You`"My mom seems to think my dad is 
already dead..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Dead'...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The word 'dead' had a heavy ring to it.`;
   waitForClick; clearText; marker; sound(`T1C053`); appendText; 
   //You
   You`"But you know?"`;
   waitForClick; clearText; marker; sound(`T1C054`); appendText; 
   //You
   You`"I believe!"`;
   waitForClick; clearText; marker; sound(`T1C055`); appendText; 
   //You
   You`"I believe that he is alive somewhere!"`;
   waitForClick; clearText; marker; sound(`T1C056`); appendText; 
   //You
   You`"He has to be!"`;
   waitForClick; clearText; marker; sound(`T1C057`); appendText; 
   //You
   You`"He just went missing. 
They never found his body."`;
   waitForClick; clearText; 
});
let lbl_00000473;
showTextbox();
text(() => {
   marker; sound(`T1C058`); appendText; 
   //You
   You`"I heard that some of my father's research is 
being used in the new programs on some of the 
latest attractions."`;
   waitForClick; clearText; marker; sound(`T1C059`); appendText; 
   //You
   You`"There has to be a clue somewhere in this 
place about the work my father was doing..."`;
   waitForClick; clearText; marker; sound(`T1C060`); appendText; 
   //You
   You`"Well the original..."`;
   waitForClick; clearText; marker; sound(`T1C061`); appendText; 
   //You
   You`"The attractions are already under water."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that we lapsed into silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if I should say something to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to think of what to say but didn't 
hit upon anything.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C062`); appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly You stood up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C063`); appendText; 
   //You
   You`"I'm kind of in the mood for some music."`;
   waitForClick; clearText; marker; sound(`T1C064`); appendText; 
   //You
   You`"Something light and fun if you know what I 
mean."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C065`); appendText; 
   //You
   You`"So I think I'll get the dolphins spinning 
again?"`;
   waitForClick; clearText; marker; sound(`T1C066`); appendText; 
   //You
   You`"Takeshi, why don't you finish looking around?"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With that she darted away.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, You...?"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The dolphins started spinning again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You didn't come back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she had disappeared to the 
corridor behind the merry-go-round.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...I guess I'll get out of here...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as if the dolphins saw me off. I left 
the room behind.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`      Dolphin Carousel: Situation normal`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
hideTextbox();
goto(lbl_00000221);
let lbl_00000508;
bgload({ name: `BG06A1`, transition: 20 });
varop(`(28 0a a4) d1 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Adjacent to the corridor was a little room for 
visitors to rest as well as a shop selling 
theme park goods.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a sign with the LeMU mascot on it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This was where I had peeled the mascot 
costume off of the kid.`;
   waitForClick; clearText; 
});
goto(lbl_00000544).if(var_de == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That lemur thing called Myumyun.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the shop were those lemur stuffed animals 
next to all kinds of key chains, hologram 
pendants, seafood snacks and other stuff as 
well as lemur stuffed animals.`;
   waitForClick; clearText; 
});
goto(lbl_00000549);
let lbl_00000544;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That Myumyun raccoon dog mascot...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't see any raccoon dog stuffed animals 
next to all kinds of key chains, hologram 
pendants, seafood snacks and other stuff.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still had no idea what that raccoon dog was.`;
   waitForClick; clearText; 
});
let lbl_00000549;
fgload({ id: 1, name: `KA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...The kid was sitting on the bench next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wasn't really looking at anything, but his 
gaze seemed fixed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He just kept staring at the ground.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I expected to see a hole open up in the 
ground he was staring so intensely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had his hands on his temples.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How's your headache, Kid?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C067`); appendText; 
   //Kid
   Kid`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's the matter? Did you find something?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Or did you remember something?"`;
   waitForClick; clearText; marker; sound(`T1C068`); appendText; 
   //Kid
   Kid`"Uh...? I...um..."`;
   waitForClick; clearText; marker; sound(`T1C069`); appendText; 
   //Kid
   Kid`"Who...are you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I just told you a bit ago. I introduced 
myself. I'm Takeshi. Takeshi Kuranari."`;
   waitForClick; clearText; marker; sound(`T1C070`); appendText; 
   //Kid
   Kid`"Oh. Is that right?"`;
   waitForClick; clearText; marker; sound(`T1C071`); appendText; 
   //Kid
   Kid`"This is...?"`;
   waitForClick; clearText; marker; sound(`T1C072`); appendText; 
   //Kid
   Kid`"What am I doing here?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"*sigh* Oh great."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It's that amnesia thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid couldn't even remember what he had 
just said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He just moved from one topic to the next, 
forgetting the last.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This is the marine theme park LeMU."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Something happened and we are trapped here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C073`); appendText; 
   //Kid
   Kid`"Le...mur?"`;
   waitForClick; clearText; marker; sound(`T1C074`); appendText; 
   //Kid
   Kid`"What do you mean 'trapped'?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's something I would like answered 
myself."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C075`); appendText; 
   //Kid
   Kid`"Uh..."`;
   waitForClick; clearText; marker; sound(`T1C076`); appendText; 
   //Kid
   Kid`"And who are you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Takeshi Kuranari."`;
   waitForClick; clearText; marker; sound(`T1C077`); appendText; 
   //Kid
   Kid`"Takeshi...Kuranari?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Takeshi means samurai in Japanese."`;
   waitForClick; clearText; marker; sound(`T1C078`); appendText; 
   //Kid
   Kid`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe you should start taking notes. You 
know, keeping track of my name, the other 
people, where we are and stuff."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C079`); appendText; 
   //Kid
   Kid`"Notes? Yeah, maybe I should..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It looks like you understand what taking 
notes means. Take good ones. Even when you 
are eating."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And if you can remember, you can make a memo 
of your name, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave the Kid a memo pad and pen I had 
filched from the kiosk.`;
   waitForClick; clearText; marker; sound(`T1C080`); appendText; 
   //Kid
   Kid`"Thanks."`;
   waitForClick; clearText; marker; sound(`T1C081`); appendText; 
   //Kid
   Kid`"Hey, can you tell me what year it is?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You forgot that, too?"`;
   waitForClick; clearText; marker; sound(`T1C082`); appendText; 
   //Kid
   Kid`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's 20..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Uh, what year IS it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I searched around in my pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My entrance ticket stub was crumpled and 
stuck to the back of my PDA.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, that's right! It's 2017! Take notes! 
Write it down!"`;
   waitForClick; clearText; marker; sound(`T1C083`); appendText; 
   //Kid
   Kid`"Okay. 2017..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was taking it down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like he hadn't forgotten how to take 
notes.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So why'd you wanna know the year?"`;
   waitForClick; clearText; marker; sound(`T1C084`); appendText; 
   //Kid
   Kid`"Yeah, kind of."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Kind of?"`;
   waitForClick; clearText; marker; sound(`T1C085`); appendText; 
   //Kid
   Kid`"I thought that if I heard the year then I 
might be able to remember at least my 
birthday."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I see. Come to think of it, you don't even 
know how old you are, huh?"`;
   waitForClick; clearText; marker; sound(`T1C086`); appendText; 
   //Kid
   Kid`"No..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"By the looks of it, I'd say you're not a day 
over 42."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C087`); appendText; 
   //Kid
   Kid`"What!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surprised the Kid felt his face.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"HA, HA, HA. I'm kidding! Relax! There's no 
way."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're probably in the neighborhood of 14 or 
15."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you are 18, then you've got a baby face."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Geez! Don't tell me you forget your own face?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C088`); appendText; 
   //Kid
   Kid`"...F-face?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you're worried about it, go take a look 
in the mirror. You could sketch a 
self-portrait in case you forget later..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C089`); appendText; 
   //Kid
   Kid`"Oh. Yeah...maybe I will."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Geez. He's got it rough...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`But his serious expression had relaxed. That 
at least was good.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. Well I'm gonna get going. When it's 
time, you come to the Security Office."`;
   waitForClick; clearText; marker; sound(`T1C090`); appendText; 
   //Kid
   Kid`"Oh, the Security Office. Where is that? 
...And where is this again?"`;
   waitForClick; clearText; marker; sound(`T1C091`); appendText; 
   //Kid
   Kid`"I'm sorry. I really don't know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's alright. I understand. If you don't 
come, then I'll come looking for you."`;
   waitForClick; clearText; marker; sound(`T1C092`); appendText; 
   //Kid
   Kid`"Okay. Thanks...Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, you remembered."`;
   waitForClick; clearText; marker; sound(`T1C093`); appendText; 
   //Kid
   Kid`"Takeshi is your name...right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid had been taking notes and sure enough 
there it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My name, Takeshi, on his pad, but spelled 
wrong.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`        <LeMU Kiosk:  Situation normal>`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
hideTextbox();
goto(lbl_00000221);
let lbl_0000062a;
varop(`(28 0a a4) d2 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora had said that she would be working in the 
Security Office...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I wondered what she was doing there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Besides, she was the only one that had been 
doing deskwork the whole time we'd been 
trapped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I imagined she would be getting a different 
kind of tired from what we got walking 
around. Mentally tired, maybe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I was thinking that I knocked on the 
Security Office door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_14`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Knock, knock.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hello? Sora, you there?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wait, this metal door is so thick you 
couldn't even hear me if you were..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the button for the intercom on the 
panel next to the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora didn't reply.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if she isn't in there."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door wasn't locked, so I pushed the open 
button and it opened.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Security Office was small.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And it was dirty.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The front wall was packed with monitors. They 
were all stained dark from cigarette smoke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ashtrays were stacked up like it was normal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there was a huge sign plastered on the 
wall that said 'NO SMOKING'.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I recalled the sloppy clubroom back at 
college - it had 25 years of history being 
only used by guys - and couldn't help but 
chuckle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I restrained myself and kept looking. Sora 
wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Sora? Where are you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I didn't think you were the type to go 
running off without telling anyone..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took another step inside the room.`;
   waitForClick; clearText; marker; sound(`T1C094`); appendText; 
   //Sora
   Sora`"Kyaaa!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Waaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the windows in the wall monitors 
opened and closed.`;
   waitForClick; clearText; marker; sound(`T1C095`); appendText; 
   //Sora
   Sora`"T-Takeshi...when did you get here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason the voice sounded like it 
came from the shadow of the desk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a blind spot and I couldn't see Sora.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you are here Sora...I thought you'd 
probably be all stressed out from the work 
and situation so I came to take a look."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What are you doing in that weird place?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I approached the rear of the desk as I talked.`;
   waitForClick; clearText; marker; sound(`T1C096`); appendText; 
   //Sora
   Sora`"Oh, no! Takeshi no! Please don't..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T1C097`); appendText; 
   //Sora
   Sora`"I'm busy right now..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see her face, but she sounded 
embarrassed.`;
   waitForClick; clearText; marker; sound(`T1C098`); appendText; 
   //Sora
   Sora`"If you don't mind, can you wait outside for 
a little bit."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spoke hesitantly.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh! Are you changing?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry..."`;
   waitForClick; clearText; marker; sound(`T1C099`); appendText; 
   //Sora
   Sora`"Uh, no, not exactly. But I suppose it is 
something like that...Takeshi, you aren't 
going to change?"`;
   waitForClick; clearText; marker; sound(`T1C100`); appendText; 
   //Sora
   Sora`"If you don't mind employee work outfits...the 
changing room is directly behind this room. 
Just turn on the corner of the corridor and 
you'll find it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nah, I'm alright. I'm just a little damp and 
uncomfortable, but I'm used to it."`;
   waitForClick; clearText; marker; sound(`T1C101`); appendText; 
   //Sora
   Sora`"I see..."`;
   waitForClick; clearText; marker; sound(`T1C102`); appendText; 
   //Sora
   Sora`"I'm sorry, but I'm still working and I need 
to concentrate...but I'll be done by the 
appointed time."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry to bother you. I'll go look around 
a little more."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay. Good luck."`;
   waitForClick; clearText; marker; sound(`T1C103`); appendText; 
   //Sora
   Sora`"Thank you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`During our whole exchange, Sora was hidden 
and I didn't see her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I waved in Sora's direction - though I 
figured she couldn't see me - and headed for 
the exit.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, it's not good for you to stay cooped up 
in here. Take a break once in a while."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said it without looking back.`;
   waitForClick; clearText; marker; sound(`T1C104`); appendText; 
   //Sora
   Sora`"Okay. But please do not worry about me."`;
   waitForClick; clearText; marker; sound(`T1C105`); appendText; 
   //Sora
   Sora`"I like my work. If I really get into it...I 
can go for days without sleep just fine."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Sleep without days. That's insane.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't really understand what she meant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(But I suppose...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(She's probably really into her job.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I imagined that system engineer was probably 
just an occupation that drew 'interesting 
types' and felt satisfied with that.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`      <Security Office:  Situation normal>`;
   waitForClick; clearText; 
});
hideTextbox();
goto(lbl_00000221);
let lbl_000006a3;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took my PDA from my pocket and checked the 
time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were 17 minutes until the time Sora had 
said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where I should hit next.`;
   waitForClick; 
});
varop(`(28 0a a4) d0 := (00) 1`);
varop(`(28 0a a4) d1 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 1`);
let lbl_000006c9;
goto(lbl_00000708).if(var_d0 != 0);
goto(lbl_00000708).if(var_d1 != 0);
goto(lbl_00000baa).if(var_d2 == 0);
let lbl_00000708;
choice(
   cond(`[cond (28 0a a4) d0 14 (00)]The visitor elevator`, var_d0)
   cond(`[cond (28 0a a4) d1 14 (00)]The warehouse`, var_d1)
   cond(`[cond (28 0a a4) d2 14 (00)]The infirmary`, var_d2)
);
switch (choice) {
   case 0: goto(lbl_00000732);
   case 1: goto(lbl_0000097a);
   case 2: goto(lbl_000009c1);
}
let lbl_00000732;
varop(`(28 0a a4) d0 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I continued to the next corner in the 
corridor and hung a left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went in the far door, which was open.`;
   waitForClick; clearText; 
});
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where am I?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had been aiming for the elevator, but wound 
up somewhere else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sign said 'Qualle'.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no clue what that meant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Reading the explanation, I learned that this 
was a gondola in the shape of a jellyfish.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't particularly in the mood for a 
ride....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked to see that there was no damage to 
the floors or the walls and left.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG22A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The elevator was next to the Jellyfish Gondola.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was standing there silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was in front of the closed elevator doors 
with a stern look on her face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"So this is where you were..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like Tsugumi had noticed me, but she 
didn't reply.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes stayed fixed on the door.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This elevator doesn't go to the surface."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was reading a nearby sign.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It says that to go to the floating island, 
Insel null, we should use the elevator in the 
center of the floor."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Tsugumi. Just standing there isn't 
going to make the elevator come."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C106`); appendText; 
   //Tsugumi
   Tsugumi`"I know that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi finally answered me.`;
   waitForClick; clearText; marker; sound(`T1C107`); appendText; 
   //Tsugumi
   Tsugumi`"I know because I just saw it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Saw what?"`;
   waitForClick; clearText; marker; sound(`T1C108`); appendText; 
   //Tsugumi
   Tsugumi`"The elevator."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As soon as she said that she placed her hand 
on the closed elevator doors and started 
prying them apart.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door was stopped half open. I thought it 
might be broken.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked inside.`;
   waitForClick; clearText; marker; sound(`T1C109`); appendText; 
   //Tsugumi
   Tsugumi`"See the elevator is stopped on the third 
floor."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scared, I peeked in.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh...that's the one we rode down in?"`;
   waitForClick; clearText; marker; sound(`T1C110`); appendText; 
   //Tsugumi
   Tsugumi`"It's still there from when we escaped."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A little box in the abyss.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator was a bout 20 yards down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that the floors were fairly far 
apart, but I didn't realize actually how far.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Whoa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi suddenly gave a little push on my 
shoulder from behind.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't push.... Whaddya think would happen if 
I fell from here?"`;
   waitForClick; clearText; marker; sound(`T1C111`); appendText; 
   //Tsugumi
   Tsugumi`"If you fell...I think that you would die. 
Most definitely."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said it without a trace of emotion.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Geez...why do you wanna go and try to scare 
me?"`;
   waitForClick; clearText; marker; sound(`T1C112`); appendText; 
   //Tsugumi
   Tsugumi`"You're just a coward."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_10`, a1: 1, volume: 95 });
waitForSFX();
bgload({ name: `BG22A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi pulled on the doors, putting them 
back in their original positions.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just to be sure, I tapped on the elevator 
button a couple of times.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no response. The lamp didn't light 
up.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It doesn't look like it's getting any power."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C113`); appendText; 
   //Tsugumi
   Tsugumi`"Yes. And the elevator shaft is warped. So, 
even if it was getting power, it probably 
couldn't move normally."`;
   waitForClick; clearText; marker; sound(`T1C114`); appendText; 
   //Tsugumi
   Tsugumi`"That's right, this elevator is useless..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that, Tsugumi went quiet again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Silence was the rule for a while.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi rarely talked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She only said the minimum necessary....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe she was trying to be 
careful of me for some reason.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what it could be....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to know.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, why don't you tell me what happened?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C115`); appendText; 
   //Tsugumi
   Tsugumi`"It's got nothing to do with you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That might have been true, but still.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It's got nothing to do with me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It's got something to do with me...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, you know something I don't?"`;
   waitForClick; clearText; marker; sound(`T1C116`); appendText; 
   //Tsugumi
   Tsugumi`"Something...like what?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Like about this accident."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Like maybe something..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Something to do with the reason you're all 
quiet?"`;
   waitForClick; clearText; marker; sound(`T1C117`); appendText; 
   //Tsugumi
   Tsugumi`"Accident? This wasn't an accident..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C118`); appendText; 
   //Tsugumi
   Tsugumi`"It was planned."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What makes you say that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C119`); appendText; 
   //Tsugumi
   Tsugumi`"Huh...you're not surprised?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi gave me a strange look.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C120`); appendText; 
   //Tsugumi
   Tsugumi`"So you feel like something isn't right, too."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, maybe I guess."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Like everything is just too neat..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We can't communicate with the outside and our 
escape routes are all closed."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But we've got electricity and the air 
conditioning still works."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's almost like someone trapped us here on 
purpose..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C121`); appendText; 
   //Tsugumi
   Tsugumi`"Hmmm...? I guess you're not as dumb 
as you look."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's expression loosened into a slight 
smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a provocative smile.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What do you mean by that?"`;
   waitForClick; clearText; marker; sound(`T1C122`); appendText; 
   //Tsugumi
   Tsugumi`"I mean exactly what I said."`;
   waitForClick; clearText; marker; sound(`T1C123`); appendText; 
   //Tsugumi
   Tsugumi`"You don't look that smart."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Whhhhhhaaaaat!?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This chick...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'd love to tell her what I REALLY think of 
her...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That thought ran through my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I thought that could really make me look 
stupid...so I resisted the urge.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C124`); appendText; 
   //Tsugumi
   Tsugumi`"This is a trap."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's expression returned to normal.`;
   waitForClick; clearText; marker; sound(`T1C125`); appendText; 
   //Tsugumi
   Tsugumi`"And you probably aren't going to get out."`;
   waitForClick; clearText; marker; sound(`T1C126`); appendText; 
   //Tsugumi
   Tsugumi`"No, not just you, but everyone else 
as well, all four of them."`;
   waitForClick; clearText; marker; sound(`T1C127`); appendText; 
   //Tsugumi
   Tsugumi`"You're all the same."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, what about you then, Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C128`); appendText; 
   //Tsugumi
   Tsugumi`"I......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C129`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah. I suppose I could die in 
a place like this."`;
   waitForClick; clearText; marker; sound(`T1C130`); appendText; 
   //Tsugumi
   Tsugumi`"It wouldn't be bad at all, I guess."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi looked upward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ceiling was covered with artificial 
materials.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt oppressive....`;
   waitForClick; clearText; marker; appendText; 
   Narr`She laughed again.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
fgload({ id: 1, name: `TU10ADS`, x: 320, useAnim: true });
delay({ interval: 60 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then she left disappearing down the corridor 
and I was alone. `;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`          <Jellyfish Gondola 'Qualle': 
`;
   appendText; delay(0); 
   Narr`               Situation normal>`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`            <Elevator out of order>`;
   waitForClick; clearText; 
});
hideTextbox();
goto(lbl_000006c9);
let lbl_0000097a;
varop(`(28 0a a4) d1 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was a room with no sign indicating what 
it was for.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It caught my curiosity and I decided to have 
a look.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG13A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It appeared it was a warehouse of some kind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were loads of boxes made of reinforced 
plastic all piled up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a pushcart and boxes too big to 
carry and some long and narrow that a person 
could just hold.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were all kinds of marks, symbols and 
letters on the boxes and I couldn't make 
sense of them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were a bunch of round, carbon capsules 
and drum-like looking objects.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what was inside them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured I didn't really need to know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a hissing noise coming from 
somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking for the sound led me to an air 
conditioner that was in bad shape, but still 
working.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the room's ceiling was a crane complete 
with guide rails.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One container was still suspended from above. 
It looked like it had been abandoned in the 
middle of work.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one had had any time to clean up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone had fled at once....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, is there anybody here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out once, but nobody answered.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's no reason anybody would be here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no reply.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`         <Warehouse:  Situation normal>`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
hideTextbox();
goto(lbl_000006c9);
let lbl_000009c1;
bgload({ name: `BG08A1`, transition: 20 });
varop(`(28 0a a4) d2 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Infirmary'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I arrived in front of the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While this was a theme park, it was also deep 
in the ocean and had other facilities.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU's atmosphere was maintained using a mix 
of gases at an air pressure different from 
the outside world. It seemed that it could 
make some people feel ill...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reckoned that was the reason this room was 
so large.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beyond the huge sliding door was a room 
decked out elaborately in shiny new medical 
equipment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it could have something to do with 
LeMU's sponsor being a major pharmaceutical 
company.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room was so clean and white it was nearly 
blinding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were two normal beds and one that 
looked like it was for surgery.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was also a huge machine attached to one 
of them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`L-MRI was written on it.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't know what it was, but it looked like 
it was some kind of scanner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw a shelf in the wall filled with medical 
tools and medicine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably in case somebody fell ill or 
got injured here. It wouldn't be possible to 
move anyone outside, so they would have to be 
treated here.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T1C131`); appendText; 
   //??
   Unk`"Yeah. I don't think there's any way out now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(!?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was getting used to surprises, but the voice 
startled me.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't know who was talking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somebody sure was.`;
   waitForClick; clearText; marker; sound(`C1S296`); appendText; 
   //??
   Unk`"Everybody?"`;
   waitForClick; clearText; marker; sound(`C1S297`); appendText; 
   //??
   Unk`"Help?...Did you come to help?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like Coco....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't know who she was talking to.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't tell where they were.`;
   waitForClick; clearText; marker; sound(`C1S298`); appendText; 
   //Coco
   Coco`"But...it's probably impossible..."`;
   waitForClick; clearText; marker; sound(`C1S299`); appendText; 
   //Coco
   Coco`"There is...no way out anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was she saying...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if something had happened to Coco...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I carefully inched toward the rear of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I noticed a squarish hole cut out of the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I peered down inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside there was a small elevator stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It appeared that there was another room 
directly below the infirmary. The voice was 
coming from there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the button. When the lift came, I 
jumped in.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It descended slowly and silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I arrived below.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I noticed that the hatch there was slightly 
ajar.`;
   waitForClick; clearText; marker; sound(`C1S300`); appendText; 
   //Coco
   Coco`"Liar..."`;
   waitForClick; clearText; marker; sound(`C1S301`); appendText; 
   //Coco
   Coco`"Because...because..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I eased closer and opened the hatch.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `EV_CO03B`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Who are you talking to?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco jumped as if she had been stung.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sitting on the bed. Nothing looked 
out of the ordinary....`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 9, volume: 100 });
bgload({ name: `BG10A2`, transition: 20 });
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C137`); appendText; 
   //Coco
   Coco`"Oh, Takepyon..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Takepyon?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C138`); appendText; 
   //Coco
   Coco`"Yup. You're Takepyon!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T1C139`); appendText; 
   //Coco
   Coco`"Pyon, pyon - Takepyon"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Safe place, pokopon"`;
   waitForClick; clearText; marker; sound(`T1C140`); appendText; 
   //Coco
   Coco`"Yeah, you got it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know the Ninneko Song 17."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But it's not 'pyon, pyon'. It's 'pokopon', 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C141`); appendText; 
   //Coco
   Coco`"Yes, yes!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C142`); appendText; 
   //Coco
   Coco`"But..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"....Huh?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C143`); appendText; 
   //Coco
   Coco`"Coco."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco pointed to herself as she said her name.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C144`); appendText; 
   //Coco
   Coco`"Takepyon."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she pointed at me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C145`); appendText; 
   //Coco
   Coco`"And Pipi is three years old."`;
   waitForClick; clearText; marker; sound(`PIPI_02`); appendText; 
   //Pipi
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A puppy face peeked out from under the bed.`;
   waitForClick; clearText; marker; sound(`T1C146`); appendText; 
   //Coco
   Coco`"Nice to meet you!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, nice to meet you, too!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...But haven't we already introduced 
ourselves...?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I returned upstairs with Coco.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you're calling me Takepyon. Is that it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C147`); appendText; 
   //Coco
   Coco`"Yup."`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   //Pipi
   Pipi`"Woof."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. I got it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So who were you talking with, Coco?"`;
   waitForClick; clearText; marker; sound(`T1C148`); appendText; 
   //Coco
   Coco`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wasn't someone just in that room?"`;
   waitForClick; clearText; marker; sound(`T1C149`); appendText; 
   //Coco
   Coco`"No. Nobody was there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C150`); appendText; 
   //Coco
   Coco`"I was just playing around with Pipi"`;
   waitForClick; clearText; marker; sound(`T1C151`); appendText; 
   //Coco
   Coco`"Pyon, pyon, Takepyon"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whatever...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think Coco would lie to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There wasn't anyone else around.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`         <Infirmary: Situation normal>`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
hideTextbox();
goto(lbl_000006c9);
let lbl_00000baa;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Now..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took my PDA from my pocket and looked at 
the time.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, no!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were only two minutes late, but still, we 
were late.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I jogged toward the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi were close behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We went in through the sliding door.`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
setSceneTitle({ index: 7 });
clock(`19:12`);
multifgload2({ id1: 1, id2: 2, name1: `YU04BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C152`); appendText; 
   //You
   You`"Takeshi, you're late!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was standing like a guard in the narrow 
entranceway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kid was next to her.`;
   waitForClick; clearText; marker; sound(`T1C153`); appendText; 
   //Kid
   Kid`"Yeah. I got here a little before you..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sorry. My bad. I was late."`;
   waitForClick; clearText; marker; sound(`T1C154`); appendText; 
   //You
   You`"You know that in a group and in our 
situation we have to be punctual, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't get so mad. It's only two minutes give 
or take."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C155`); appendText; 
   //You
   You`"But two minutes could make all the 
difference in the world."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C156`); appendText; 
   //Coco
   Coco`"I was late too!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C157`); appendText; 
   //You
   You`"Oh, Coco. You didn't get lost or have any 
problems? You're alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C158`); appendText; 
   //Coco
   Coco`"Yup. I'm fine. I came straight here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C159`); appendText; 
   //You
   You`"Oh, that's good."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...You're sure treating her a lot different 
than me..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C160`); appendText; 
   //Sora
   Sora`"Well, everyone made it here in one piece, so 
that should be sufficient."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked up from the LeMMIH terminal and 
smiled. She walked toward us.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So everybody's here..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What about Tsugumi?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADS`, name2: `TU14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C161`); appendText; 
   //Tsugumi
   Tsugumi`"I'm here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was leaning against the lockers on 
the far side of the room.`;
   waitForClick; clearText; marker; sound(`T1C162`); appendText; 
   //Tsugumi
   Tsugumi`"If you've found out anything new, I'd like 
to hear about it. Did you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C163`); appendText; 
   //Sora
   Sora`"Oh, yes. I will tell you."`;
   waitForClick; clearText; marker; sound(`T1C164`); appendText; 
   //Sora
   Sora`"First there are a few things I want to 
review..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
bgload({ name: `IMG01B`, transition: 20 });
playBGM({ num: 14, volume: 100 });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora gave us a lecture about the structure of 
LeMU.`;
   waitForClick; clearText; 
});
bgload({ name: `MAP03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T1C165`); appendText; 
   //Sora
   Sora`"LeMU has three layers below the ocean's 
surface."`;
   waitForClick; clearText; marker; sound(`T1C166`); appendText; 
   //Sora
   Sora`"Erste boden, Zweite stock, Dritte stock..."`;
   waitForClick; clearText; marker; sound(`T1C167`); appendText; 
   //Sora
   Sora`"There are nearly 56 feet (17 meters) 
between each floor. If you go down a floor, 
then you go almost 56 feet (17 meters) deeper."`;
   waitForClick; clearText; marker; sound(`T1C168`); appendText; 
   //Sora
   Sora`"Thus, the third floor, Dritte stock, 
is located at around a depth of 167 feet."`;
   waitForClick; clearText; marker; sound(`T1C169`); appendText; 
   //Sora
   Sora`"Outside of Dritte is a total of 6 
atmospheres of pressure, 5 atmospheres 
water pressure and 1 atmosphere air pressure."`;
   waitForClick; clearText; marker; sound(`T1C170`); appendText; 
   //Sora
   Sora`"Even if hypothetically, you were to suddenly 
go out into the ocean from Dritte..."`;
   waitForClick; clearText; marker; sound(`T1C171`); appendText; 
   //Sora
   Sora`"Your lungs would be crushed to about 
one-sixth of their size, and approximately 
five-sixth of your lungs would be flooded. 
You would likely die in a matter of minutes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, I've gotta question."`;
   waitForClick; clearText; marker; sound(`T1C172`); appendText; 
   //Sora
   Sora`"Go ahead..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I've heard that skin divers can dive to 
depths of about 30 meters. Couldn't somebody 
just tough out the water pressure on the way 
up?"`;
   waitForClick; clearText; marker; sound(`T1C173`); appendText; 
   //Sora
   Sora`"The current world record for free diving 
is around 492 feet."`;
   waitForClick; clearText; marker; sound(`T1C174`); appendText; 
   //Sora
   Sora`"With an aqualung and pauses along the way, 
probably just about anyone could dive around 
115 feet."`;
   waitForClick; clearText; marker; sound(`T1C175`); appendText; 
   //Sora
   Sora`"However, the air sent to your lungs would be 
highly pressurized gas."`;
   waitForClick; clearText; marker; sound(`T1C176`); appendText; 
   //Sora
   Sora`"But with skin diving, they don't stop to 
breathe along the way. Amateurs can't 
make it past 65 feet."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wow. Is that right?"`;
   waitForClick; clearText; marker; sound(`T1C177`); appendText; 
   //Sora
   Sora`"And there is one other important thing."`;
   waitForClick; clearText; marker; sound(`T1C178`); appendText; 
   //Sora
   Sora`"Even if you could withstand 5 atmospheres of 
water pressure..."`;
   waitForClick; clearText; marker; sound(`T1C179`); appendText; 
   //Sora
   Sora`"Could you really swim over 
167 feet to the surface?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You making fun of me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, I may not look like it, but in high 
school I swam a mile."`;
   waitForClick; clearText; marker; sound(`T1C180`); appendText; 
   //Sora
   Sora`"But aren't you talking about swimming on the 
surface?"`;
   waitForClick; clearText; marker; sound(`T1C181`); appendText; 
   //Sora
   Sora`"Swimming 51 meters across something is 
nothing like swimming 51 meters up something."`;
   waitForClick; clearText; marker; sound(`T1C182`); appendText; 
   //Sora
   Sora`"I am talking about 51 meters in height."`;
   waitForClick; clearText; marker; sound(`T1C183`); appendText; 
   //Sora
   Sora`"It would be the equivalent of swimming a 
15-story building."`;
   waitForClick; 
});
choice(
   `Satisfied with the explanation`
   `Unsatisfied with the explanation`
);
switch (choice) {
   case 0: goto(lbl_00000d80);
   case 1: goto(lbl_00000d9f);
}
let lbl_00000d80;
varop(`(28 0a a4) b7 += (00) 1`);
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Swimming a 15-story building...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was insanity.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even from Zweite stock at a depth of 34 
meters that would be about 10 stories.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just climbing that would be a bear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And besides, how would one get outside of 
LeMU in the first place....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. You're right. That's something that 
just guts alone couldn't get you through."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded.`;
   waitForClick; clearText; 
});
goto(lbl_00000da4);
let lbl_00000d9f;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"But wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I persisted.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's still the same distance, right? It's 
just vertical instead of horizontal."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'd just have to try extra hard..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And with float rings or something buoyant it 
would be even easier..."`;
   waitForClick; clearText; marker; sound(`T1C184`); appendText; 
   //You
   You`"Hey, Takeshi. How fast do you think you 
could run 50 meters on mattresses?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You suddenly shot me the question.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why mattresses?"`;
   waitForClick; clearText; marker; sound(`T1C185`); appendText; 
   //You
   You`"Because. Just answer the question."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Fifty meters. Maybe six or seven seconds."`;
   waitForClick; clearText; marker; sound(`T1C186`); appendText; 
   //You
   You`"So how about if the mattresses were piled on 
you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh?"`;
   waitForClick; clearText; marker; sound(`T1C187`); appendText; 
   //You
   You`"How long would it take to get them off of 
you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How would I know? I've never tried that."`;
   waitForClick; clearText; marker; sound(`T1C188`); appendText; 
   //You
   You`"Think you could do it in seven seconds?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You know I couldn't!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Running on something and taking them off of 
you are two different things."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gasped.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Oh, I get it..."`;
   waitForClick; clearText; marker; sound(`T1C189`); appendText; 
   //You
   You`"Now do you finally see?"`;
   waitForClick; clearText; 
});
let lbl_00000da4;
hideTextbox();
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C190`); appendText; 
   //Tsugumi
   Tsugumi`"And the ocean is pitch black. It would be 
suicide."`;
   waitForClick; clearText; marker; sound(`T1C191`); appendText; 
   //Sora
   Sora`"That is correct."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C192`); appendText; 
   //Sora
   Sora`"There is something else I want to say. It is 
an announcement..."`;
   waitForClick; clearText; marker; sound(`T1C193`); appendText; 
   //Sora
   Sora`"I am still working to gather information and 
reconnect LeMU's communication network with 
the outside, however..."`;
   waitForClick; clearText; marker; sound(`T1C194`); appendText; 
   //Sora
   Sora`"All cable, radio and network functions are 
down due to malfunctions, physically severed 
cables or flooding."`;
   waitForClick; clearText; marker; sound(`T1C195`); appendText; 
   //Sora
   Sora`"I cannot provide an estimation of when we 
will be in touch with the outside."`;
   waitForClick; clearText; marker; sound(`T1C196`); appendText; 
   //Sora
   Sora`"Sonic communication to the outside is also 
down."`;
   waitForClick; clearText; marker; sound(`T1C197`); appendText; 
   //Sora
   Sora`"Therefore I have not been able to dispatch 
an SOS."`;
   waitForClick; clearText; marker; sound(`T1C198`); appendText; 
   //Sora
   Sora`"That concludes my report..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
delay({ interval: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Two hours had passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign of help.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If there were people up on the floating the 
island, the least they could do was send 
someone to check on us...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was trying to be upbeat about things, but 
with the first floor flooded and the 
partitions shut no one was going to be coming 
through there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And coming through the ocean...that seemed 
even more impossible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flooding of LeMU had disrupted the flow 
of the currents around it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It would be hard for a diver or small 
submersible to get anywhere near it.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG06A1`, transition: 20 });
clock(`21:18`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We left behind the Security Office that 
reeked of smoke, and gathered in front of the 
souvenir stand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C199`); appendText; 
   //Coco
   Coco`"Ready go"`;
   waitForClick; clearText; marker; sound(`PIPI_25`); appendText; 
   //Pipi
   Pipi`"Ggrrrr."`;
   waitForClick; clearText; marker; sound(`PIPI_26`); appendText; 
   //Pipi
   Pipi`"Waff."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Heeee."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, ha, ha, ha,ha!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C200`); appendText; 
   //Coco
   Coco`"Yeah! That's another win for Pipi."`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   //Pipi
   Pipi`"Woof."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had just finished my 34th match against Pipi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I had lost 34 times.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a pretty one-sided affair.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is there anyway that Pipi could lose?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C201`); appendText; 
   //Coco
   Coco`"Oh, are you making excuses?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"First off, you're the one who's making 
Pipi's face all funny. I can't make faces 
that crazy by myself."`;
   waitForClick; clearText; marker; sound(`T1C202`); appendText; 
   //Coco
   Coco`"Well, there's no other way to do it. Pipi 
can't make faces alone."`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   //Pipi
   Pipi`"Woof."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Besides, I don't know how to make a dog 
laugh, so it's not really fair."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C203`); appendText; 
   //Coco
   Coco`"Well...that's just something you have to get 
used to."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if was really just getting used to 
it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C204`); appendText; 
   //Coco
   Coco`"Pipi laughs when he's happy. Right, Pipi?"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Woof, woof."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, I'll just have to admit defeat. Kid, 
you wanna take my place?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA06ADS`, name2: `YU11BDS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C205`); appendText; 
   //Kid
   Kid`"Me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. I'm begging you. I'll be the referee."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid had been talking with You but he came 
over.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C206`); appendText; 
   //Coco
   Coco`"Alright! Game time!"`;
   waitForClick; clearText; marker; sound(`T1C207`); appendText; 
   //Kid
   Kid`"Don't be too hard on me."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C208`); appendText; 
   //Sora
   Sora`"Oh, what game are you playing? It looks 
fun..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora, who appeared taken with the game, also 
came over.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's a staring contest - canine vs. human."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C209`); appendText; 
   //Sora
   Sora`"Well, that seems pretty incredible."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora covered her mouth with her hand and 
giggled.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Actually, Pipi is incredible...I think I'm 
gonna have nightmares about this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shuddered.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `CO02ADS`, name2: `KA01ADS`, name3: `SO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"And now, in their first contest we have the 
Champion Pipi vs. the challenger, The Kid 
facing off in a face fight..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I want to get underway, but first..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C210`); appendText; 
   //Coco
   Coco`"Let's hurry up and do this."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, I think we need to decide what we're 
going to call the kid here. Is 'Kid' okay? 
What do you think?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C211`); appendText; 
   //Kid
   Kid`"Well, I don't know..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C212`); appendText; 
   //Coco
   Coco`"We could call him Kiddo."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C213`); appendText; 
   //Kid
   Kid`"Uh...um...sure."`;
   waitForClick; clearText; marker; sound(`T1C214`); appendText; 
   //Coco
   Coco`"Kiddo Kiddo Kiddo"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Kiddo, huh.... You want me to call you that, 
too? There's gotta be a more normal name than 
that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"John."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's a little random, but I like John Doe."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C215`); appendText; 
   //Sora
   Sora`"Don't you think that would be a little rude 
to all of the people named John?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, it's only for a little while, so it 
doesn't have to be perfect."`;
   waitForClick; clearText; marker; sound(`T1C216`); appendText; 
   //Sora
   Sora`"Takeshi, I thought you wanted a more 
name-like name than Kiddo."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADS`, name2: `KA07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C217`); appendText; 
   //Coco
   Coco`"Well then...Coco will think up another name!"`;
   waitForClick; clearText; marker; sound(`T1C218`); appendText; 
   //Coco
   Coco`"Kiddo's other name could be ? "`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C219`); appendText; 
   //Coco
   Coco`"Pablo Diego Jose Francisco de Hora Juan 
Novecino Maria de Los Remedios..."`;
   waitForClick; clearText; marker; sound(`T1C220`); appendText; 
   //Coco
   Coco`"Siburiano Critiano de la Santeshima 
Trinidado Luis Picasso!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's too long! Anything longer than 
Yubiseiharukana Tanaka is out!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C221`); appendText; 
   //You
   You`"Hey Takeshi! Don't just go blurting out my 
full name..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, who had been standing over by the shop, 
came walking directly toward me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU05BDS`, name2: `KA07ADS`, name3: `SO13ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Ah! What a pain!"`;
   waitForClick; clearText; 
});
goto(lbl_000010bb).if(var_de == 0);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"In honor of the mascot, I name you Earl Myun 
of Hamburger!"`;
   waitForClick; clearText; 
});
goto(lbl_000010c0);
let lbl_000010bb;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"In honor of the mascot, I name you John 
Raccoon Dog Smith!"`;
   waitForClick; clearText; 
});
let lbl_000010c0;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO09ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C222`); appendText; 
   //Sora
   Sora`"That's crude, Takeshi..."`;
   waitForClick; clearText; marker; sound(`PIPI_03`); appendText; 
   //Pipi
   Pipi`"Woof?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C223`); appendText; 
   //Sora
   Sora`"Well, let's see. Why don't I think of one... 
How about Melos?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why Melos?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU17BDS`, name2: `SO13ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C224`); appendText; 
   //You
   You`"Well, he's got no memory."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nah, it's bad luck to name him that..."`;
   waitForClick; clearText; marker; sound(`T1C225`); appendText; 
   //Sora
   Sora`"Sorry. I didn't mean to be so direct..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C226`); appendText; 
   //Tsugumi
   Tsugumi`"What are you all bickering about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi cut in.`;
   waitForClick; clearText; marker; sound(`T1C227`); appendText; 
   //Tsugumi
   Tsugumi`"If we come up with some random name, it'll 
be a hassle when he remembers his real one."`;
   waitForClick; clearText; marker; sound(`T1C228`); appendText; 
   //Tsugumi
   Tsugumi`"He is a kid..."`;
   waitForClick; clearText; marker; sound(`T1C229`); appendText; 
   //Tsugumi
   Tsugumi`"So why don't we just stick with Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The conversation had come full circle.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
setFGRenderOrder(2, 1, 4);
multifgload3({ name1: `SO06ADS`, name2: `YU06BDS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
varop(`(28 0a a2) 4f := (00) 153`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lights suddenly went out and then flashed 
back on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a dull, heavy metallic echo....`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the same time, there was a slight tremor.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What's that?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C230`); appendText; 
   //Tsugumi
   Tsugumi`"That tremor felt like it came from below..."`;
   waitForClick; clearText; marker; sound(`T1C231`); appendText; 
   //You
   You`"Below? I wonder if something happened below?"`;
   waitForClick; clearText; marker; sound(`T1C232`); appendText; 
   //Sora
   Sora`"I will try to investigate."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, Sora held her hands out in front 
of her.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 12, volume: 100 });
playSFX({ name: `SE06_00`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_cb_0_6`);
varop(`(28 0a a2) 3d := (00) 7`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 4`);
openShakeScreenAnim();
fgload({ id: 1, name: `SO17ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C233`); appendText; 
   //Sora
   Sora`"Oh...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then a strong lateral vibration jolted 
the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The holographic window that Sora had conjured 
vanished.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C234`); appendText; 
   //You
   You`"Sora!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADS`, name2: `YU13BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C235`); appendText; 
   //Sora
   Sora`"It's alright.... The monitor is back online, 
I am initiating a scan..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; sound(`T1C236`); appendText; 
   //Sora
   Sora`"Water has penetrated the material storage 
space in Sector 6 of Dritte stock."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's flooding? I didn't see any signs of 
that when I made the rounds..."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 2`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 3`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
fgload({ id: 2, name: `YU06BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom, boom, boom...`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_cb_0_6`);
varop(`(28 0a a2) 3d := (00) 4`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sound of metal giving way accompanied the 
massive shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scenes from old movies of luxury liners being 
swallowed by the ocean flashed across my mind.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_02`, a1: 0, volume: 95 });
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 2`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 3`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
showTextbox();
text(() => {
   marker; sound(`T1C237`); appendText; 
   //Sora
   Sora`"There is damage to the passageways 
connecting the sectors."`;
   waitForClick; clearText; marker; sound(`T1C238`); appendText; 
   //Sora
   Sora`"Multiple leak areas, and increasing."`;
   waitForClick; clearText; marker; sound(`T1C239`); appendText; 
   //Tsugumi
   Tsugumi`"Hey..."`;
   waitForClick; clearText; marker; sound(`T1C240`); appendText; 
   //Tsugumi
   Tsugumi`"Don't you think we should grab hold of 
something?"`;
   waitForClick; clearText; marker; sound(`T1C241`); appendText; 
   //You
   You`"Yes. Everyone grab something and steady 
yourself!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"O-okay."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I reached out for a support pillar nearby.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco crouched down as she squeezed Pipi 
tightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone held their breath.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom, boom, boom....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom, boom, boom.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_cb_0_6`);
varop(`(28 0a a2) 3d := (00) 7`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 4`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_00L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A huge shockwave rocked us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whole floor, or rather the whole of LeMU 
shook.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I would be thrown into the ceiling 
one second or pulverized into the floor the 
next.`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The souvenir shop in front of me trembled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The display of dishes in the shop fell to the 
floor and shattered...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pile of empty cans clattered and gave 
way...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A stuffed animal made a beeping noise as it 
fell on its stomach.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all steadied ourselves against the shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All we could do was endure it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one said anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could hear the squeal of steel twisting.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom, boom, boom.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 2`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 3`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom, boom, boom...`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally the sound seemed to get further away.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The vibrations also gradually subsided.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
stopBGM();
delay({ interval: 120 });
playBGM({ num: 16, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
clock(`21:35`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora announced that the second wave of 
flooding had finished.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still wary, we headed downstairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We carefully moved forward down the wet and 
slippery stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With every step, the scent of seawater seemed 
to grow stronger.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We arrived at Dritte stock - basement floor 
three.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water level in the corridor reached 
around my shin...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It must have been around six inches deep.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU13BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C242`); appendText; 
   //You
   You`"LeMU can't pump out all this water?"`;
   waitForClick; clearText; marker; sound(`T1C243`); appendText; 
   //Sora
   Sora`"It appears not."`;
   waitForClick; clearText; marker; sound(`T1C244`); appendText; 
   //Sora
   Sora`"All major areas where leaking has occurred 
have been closed off by shutting a partition, 
however, water is continuing to flow in 
through small ducts, even now."`;
   waitForClick; clearText; marker; sound(`T1C245`); appendText; 
   //Sora
   Sora`"The water clearing pumps are operating at 
full capacity, but to make the water level 
recede..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The big hole will have to be plugged. Is 
that what you were gonna say?"`;
   waitForClick; clearText; marker; sound(`T1C246`); appendText; 
   //You
   You`"But with the partition shutting off the 
sector of the original leak, there is no way 
to access it..."`;
   waitForClick; clearText; marker; sound(`T1C247`); appendText; 
   //Sora
   Sora`"Yes, that is so..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG15B1`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We entered the Central Control Room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora checked the damage via the LeMMIH console.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C248`); appendText; 
   //Sora
   Sora`"But I must sincerely apologize..."`;
   waitForClick; clearText; marker; sound(`T1C249`); appendText; 
   //Sora
   Sora`"Even though the second flooding was about to 
occur, I failed to notice and warn you all..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she manipulated the keys, Sora bowed her 
head looking deeply apologetic.`;
   waitForClick; 
});
choice(
   `Hey, everybody makes mistakes`
   `It's not your fault, Sora`
);
switch (choice) {
   case 0: goto(lbl_000016e7);
   case 1: goto(lbl_000016f8);
}
let lbl_000016e7;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, everybody makes mistakes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We may have even overlooked the cause of 
this when we were checking around a little 
bit ago.... We're all in this together."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Everyone is fine, so let's just consider 
ourselves lucky."`;
   waitForClick; clearText; marker; sound(`T1C250`); appendText; 
   //Sora
   Sora`"I am really sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora answered this without looking away from 
the monitor.`;
   waitForClick; clearText; marker; sound(`T1C251`); appendText; 
   //Sora
   Sora`"Thank you for being so kind, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's nothing..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scratched the tip of my nose.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_0000175a);
let lbl_000016f8;
varop(`(28 0a a4) e8 := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`It's not your fault, Sora`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We may have even overlooked the cause of 
this when we were checking around a little 
bit ago.... We're all in this together."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C252`); appendText; 
   //Sora
   Sora`"Not at all!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora answered this without looking away from 
the monitor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C253`); appendText; 
   //Sora
   Sora`"My calculations and predictions were 
irresponsible..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't you go trying to blame yourself for 
this."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Everyone is fine, so let's just consider 
ourselves lucky."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With her head bowed in silence Sora kept 
working.`;
   waitForClick; clearText; 
});
let lbl_0000175a;
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally her hands stopped typing the keyboard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora turned and stood up.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C254`); appendText; 
   //Sora
   Sora`"I have gauged our situation. I will now 
display it."`;
   waitForClick; clearText; marker; sound(`T1C255`); appendText; 
   //Sora
   Sora`"Everyone, please do not be shocked or let 
this get you down..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C256`); appendText; 
   //You
   You`"Sora, when you say it like that it makes us 
nervous."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C257`); appendText; 
   //Sora
   Sora`"Oh, I'm sorry..."`;
   waitForClick; clearText; marker; sound(`T1C258`); appendText; 
   //You
   You`"Still, I'm fairly confident that there are 
few things that will shock me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C259`); appendText; 
   //Sora
   Sora`"I see. In that case -"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought everyone was probably numbed by 
what we had experienced so far.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T1C260`); appendText; 
   //Sora
   Sora`"Simply put, the cause of the second influx 
of water we experienced a short while ago..."`;
   waitForClick; clearText; marker; sound(`T1C261`); appendText; 
   //Sora
   Sora`"The sectors that were able to avoid damage 
during the first flooding were isolated from 
the flooded sections and forced ventilation 
created a sudden reduction in air pressure."`;
   waitForClick; clearText; marker; sound(`T1C262`); appendText; 
   //Sora
   Sora`"However, the inundated sectors were not able 
to withstand the weight of the water and 
tilted, causing a rupture of the joint in the 
adjacent sector."`;
   waitForClick; clearText; marker; sound(`T1C263`); appendText; 
   //Sora
   Sora`"The gap in the internal and external air 
pressure caused seawater to be sucked into 
the complex through the rupture."`;
   waitForClick; clearText; marker; sound(`T1C264`); appendText; 
   //Sora
   Sora`"So many of the sectors that were stable 
until that moment, were instantly flooded..."`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; sound(`T1C265`); appendText; 
   //Sora
   Sora`"That is the current situation of Dritte 
stock."`;
   waitForClick; clearText; marker; sound(`T1C266`); appendText; 
   //Sora
   Sora`"This blinking area is the Central Control 
Room. And..."`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
bgload({ name: `MAP2F_A2`, transition: 30 });
delay({ interval: 90 });
showTextbox();
text(() => {
   marker; sound(`T1C267`); appendText; 
   //Sora
   Sora`"This is the status of Zweite stock."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You serious?"`;
   waitForClick; clearText; marker; sound(`T1C268`); appendText; 
   //You
   You`"You mean nearly half of LeMU is underwater."`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; sound(`T1C269`); appendText; 
   //Sora
   Sora`"There are three sectors in Dritte that are 
not flooded."`;
   waitForClick; clearText; marker; sound(`T1C270`); appendText; 
   //Sora
   Sora`"The area displayed in the center of this map 
is Sector 8, where we are."`;
   waitForClick; clearText; marker; sound(`T1C271`); appendText; 
   //Kid
   Kid`"Huh? It looks like the map is displaying 
roughly two areas, but where is the third 
sector?"`;
   waitForClick; clearText; marker; sound(`T1C272`); appendText; 
   //Sora
   Sora`"Actually, due to a flaw in the system, a 
detailed map cannot be displayed..."`;
   waitForClick; clearText; marker; sound(`T1C273`); appendText; 
   //Sora
   Sora`"One part of Sector 4, diagonally above 
Sector 8, is stable."`;
   waitForClick; clearText; marker; sound(`T1C274`); appendText; 
   //Kid
   Kid`"There's no way to get there?"`;
   waitForClick; clearText; marker; sound(`T1C275`); appendText; 
   //Sora
   Sora`"Correct. It is impossible."`;
   waitForClick; clearText; marker; sound(`T1C276`); appendText; 
   //Kid
   Kid`"Why?"`;
   waitForClick; clearText; marker; sound(`T1C277`); appendText; 
   //Sora
   Sora`"Because all of the corridors connecting the 
sectors are submerged."`;
   waitForClick; clearText; marker; sound(`T1C278`); appendText; 
   //Sora
   Sora`"In terms of distance, it is roughly 100 
yards."`;
   waitForClick; clearText; marker; sound(`T1C279`); appendText; 
   //Sora
   Sora`"I don't think there is anyone among you that 
is capable of swimming 100 yards without 
breathing."`;
   waitForClick; clearText; marker; sound(`T1C280`); appendText; 
   //Sora
   Sora`"Therefore I say it is impossible."`;
   waitForClick; clearText; marker; sound(`T1C281`); appendText; 
   //Sora
   Sora`"Furthermore...even if someone did reach 
Sector 4, I don't think it would improve our 
situation at all."`;
   waitForClick; clearText; marker; sound(`T1C282`); appendText; 
   //Kid
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`T1C283`); appendText; 
   //Sora
   Sora`"Section 4 is in the same predicament as here."`;
   waitForClick; clearText; marker; sound(`T1C284`); appendText; 
   //Sora
   Sora`"All of the emergency stairs to get to the 
floating island are completely flooded."`;
   waitForClick; clearText; marker; sound(`T1C285`); appendText; 
   //Tsugumi
   Tsugumi`"So, even going there would be a waste?"`;
   waitForClick; clearText; marker; sound(`T1C286`); appendText; 
   //Sora
   Sora`"That's correct."`;
   waitForClick; clearText; marker; sound(`T1C287`); appendText; 
   //Kid
   Kid`"Well, then there's nothing we can do..."`;
   waitForClick; clearText; marker; sound(`T1C288`); appendText; 
   //Tsugumi
   Tsugumi`"So we should forget about Sector 4."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We'll just have to sit quietly and wait for 
help to come."`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
delay({ interval: 120 });
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
setSceneTitle({ index: 8 });
clock(`21:48`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Well, I guess we can take it easy for now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I left the room and hit the food stand, 
snagging some cola for everyone.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, cola time! I'm gonna toss everybody 
one! Ready?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oops. I got one, two, three, four..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Five...I'm one short!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C289`); appendText; 
   //Sora
   Sora`"Oh, I don't need one."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh don't worry about it. I'll go get one 
more. You can have mine."`;
   waitForClick; clearText; marker; sound(`T1C290`); appendText; 
   //Sora
   Sora`"No, really. I'm fine. I'm not thirsty and I 
don't really like cola..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, in that case..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I tossed out a cola to everyone in order.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Tsugumi and the Kid all took one.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But then the Kid started shaking his can!`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"S-stupid! What do you think you're doing?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C291`); appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you do that, it's going to explode 
everywhere!"`;
   waitForClick; clearText; marker; sound(`T1C292`); appendText; 
   //Kid
   Kid`"R-really? Is it dangerous?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Did you forget that cola is carbonated?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C293`); appendText; 
   //Kid
   Kid`"I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Geez. I'll give you mine. Here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I switched cans with him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This time, the Kid slowly lifted the tab 
without shaking the can.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fwashhhhaaaa!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cola erupted powerfully. The rest of us 
hurriedly jumped to get out of the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid got a blast of cola in the face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, are you alright? Just so you know, that 
wasn't my doing..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C294`); appendText; 
   //Kid
   Kid`"This cola...it's sweet..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C295`); appendText; 
   //You
   You`"Oh, guys! You should be more careful."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said as if she were at her wit's end.`;
   waitForClick; clearText; marker; sound(`T1C296`); appendText; 
   //You
   You`"These cans contain pop made with special 
gas so that they are made at 6 atmospheres."`;
   waitForClick; clearText; marker; sound(`T1C297`); appendText; 
   //You
   You`"Weren't you listening when they said that the 
bringing in and taking home of canned 
beverages was strictly prohibited?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whoa! I didn't know that! I must have missed 
it!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was true. Normally, the inside of the LeMU 
complex was maintained at 6 atmospheres using 
a mixture of gases.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now that the floor had become 1 atmosphere, 
the gas in the can was still highly 
pressurized and the gap in pressure with the 
atmosphere made them burst when opened.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `KA01AWM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C298`); appendText; 
   //Kid
   Kid`"I didn't know that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"The Kid wiped his face with a nearby towel."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Hey, Kid. No one would expect you to know 
that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You, you gotta tell Mr. Amnesia here these 
things..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C299`); appendText; 
   //You
   You`"Alright, alright. I didn't notice until 
after the fact."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Coco, what's wrong?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco was embracing Pipi and looked downcast.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking about it, I realized that Coco 
hadn't said anything for a while.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't seem like her.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, aren't you going to drink your cola?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held out a can of cola in front of Coco.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's a little warm, but it's the best I can 
do."`;
   waitForClick; clearText; marker; sound(`T1C300`); appendText; 
   //Coco
   Coco`"I don't want it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco mumbled this.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `CO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C301`); appendText; 
   //Coco
   Coco`"I don't feel very good..."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T1C302`); appendText; 
   //Coco
   Coco`"I've been thinking about it since before..."`;
   waitForClick; clearText; marker; sound(`T1C303`); appendText; 
   //Coco
   Coco`"And I haven't been able...to think of any 
jokes..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Jokes?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I peered down at Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't look too good.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sweating and having a hard time 
breathing.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, you don't look very good..."`;
   waitForClick; clearText; marker; sound(`T1C304`); appendText; 
   //You
   You`"Takeshi, get outta the way!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You came rushing over to Coco, pushed me out 
of the way and put her hands on the girl's 
shoulders.`;
   waitForClick; clearText; 
});
goto(lbl_00001b06).if(var_f1 == 0);
goto(lbl_00001b06).if(var_ba != 1);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`TC1D`);
let lbl_00001b06;
multifgload2({ id1: 1, id2: 2, name1: `CO08ADM`, name2: `YU13BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C305`); appendText; 
   //You
   You`"Coco...do you have a headache?"`;
   waitForClick; clearText; marker; sound(`T1C306`); appendText; 
   //Coco
   Coco`"Yeah, a bit. I feel kinda dizzy..."`;
   waitForClick; clearText; marker; sound(`T1C307`); appendText; 
   //You
   You`"What about if you swing your arms 
around - does that hurt?"`;
   waitForClick; clearText; marker; sound(`T1C308`); appendText; 
   //Coco
   Coco`"Just a little..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like it hurt more than a little.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO17ADS`, name2: `CO08ADS`, name3: `YU13BDS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T1C309`); appendText; 
   //Sora
   Sora`"I suspect it might be decompression 
sickness, due to the sudden loss of 
pressure on the floor."`;
   waitForClick; clearText; marker; sound(`T1C310`); appendText; 
   //You
   You`"Yeah, it could well be."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi was looking up at Coco worriedly.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C311`); appendText; 
   //You
   You`"Let's get her to the Zweite infirmary. 
Takeshi, carry her."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
multifgload2({ id1: 1, id2: 2, name1: `CO08ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C312`); appendText; 
   //You
   You`"On your back! Hurry up and squat down!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, alright!"`;
   waitForClick; clearText; marker; sound(`T1C313`); appendText; 
   //You
   You`"I want you to carry Coco!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I got it! 
You don't have to scream in my ear!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 10, volume: 100 });
bgload({ name: `BG26B1L`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were rushing up to Zweite stock some 
56 feet above us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco held onto my back from behind. You and 
Tsugumi supported her from the sides.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora led the way and the Kid brought 
up the rear.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We emerged at the second floor emergency 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, are you sure we shouldn't take a normal 
corridor?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C314`); appendText; 
   //Sora
   Sora`"Please proceed straight ahead. This is a 
shortcut."`;
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
   Narr`The emergency corridor was directly connected 
to the lift below the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whew! We made it. Let's get her up there."`;
   waitForClick; clearText; marker; sound(`T1C315`); appendText; 
   //Sora
   Sora`"No, Takeshi. Please go ahead into that room 
there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG10A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU04BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C316`); appendText; 
   //Sora
   Sora`"This is a medical compression chamber. We 
can treat decompression sickness here."`;
   waitForClick; clearText; marker; sound(`T1C317`); appendText; 
   //You
   You`"Lay Coco down in there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, alright..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco lay on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid and Tsugumi watched all of this from 
beside me.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"So, You, what are you gonna do in this tiny 
room? Isn't it a little cramped for examining 
her?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The space was so small that with everyone in 
there we could hardly move.`;
   waitForClick; clearText; marker; sound(`T1C318`); appendText; 
   //You
   You`"I'm not going to do anything."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...What're you talking about?"`;
   waitForClick; clearText; marker; sound(`T1C319`); appendText; 
   //You
   You`"We're going to have Coco relax in this room 
for a while."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tilted my head, confused.`;
   waitForClick; clearText; marker; sound(`T1C320`); appendText; 
   //Sora
   Sora`"This is hyperbaric oxygen therapy. Allow me 
to explain."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C321`); appendText; 
   //Sora
   Sora`"Decompression sickness occurs when there is 
a sudden change in the surrounding air 
pressure and gas bubbles that can't be 
discharged accrue in the body."`;
   waitForClick; clearText; marker; sound(`T1C322`); appendText; 
   //Sora
   Sora`"Gas becomes air bubbles and these gather in 
tissues or veins. When gas bubbles remain 
inside the body, the oxygen respiration 
efficiency drops dramatically."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So...no matter how many deep breaths you 
take it feels like you are suffocating?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1T901`); appendText; 
   //Sora
   Sora`"That is correct. But also, if any nitrogen 
which had dissolved in the blood turns to gas, 
it could produce a thrombus, or blood clot.`;
   waitForClick; clearText; sound(`C1T902`); appendText; 
   //Sora
   Sora`Of course this could hinder blood circulation 
which is very dangerous...."`;
   waitForClick; clearText; marker; sound(`T1C324`); appendText; 
   //Sora
   Sora`"So we seal this room and pump in a high 
concentration of oxygen slowly taking it up to 
roughly 3 atmospheres..."`;
   waitForClick; clearText; marker; sound(`T1C325`); appendText; 
   //Sora
   Sora`"Then we slowly decompress you back down to 1 
atmosphere."`;
   waitForClick; clearText; marker; sound(`T1C326`); appendText; 
   //Sora
   Sora`"Using this difference in pressure we 
dissolve the gas bubbles in her body 
back into the blood, where she get 
rid of them naturally by breathing."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So basically, you make us like a can of cola 
that won't blow up..."`;
   waitForClick; clearText; marker; sound(`T1C327`); appendText; 
   //Sora
   Sora`"Yes, precisely."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, I got it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my hand.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Gosh that dash up the stairs sure wore me 
out..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heaved a breath.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C328`); appendText; 
   //Sora
   Sora`"Oh, Takeshi, are you in pain at all?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh, me? My muscles feel kinda sore and I'm 
a bit sluggish, but..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C329`); appendText; 
   //You
   You`"Hey, Takeshi, don't you think you should 
probably go in the room, too?"`;
   waitForClick; clearText; marker; sound(`T1C330`); appendText; 
   //You
   You`"In light cases of decompression sickness, 
you are not necessarily aware of it 
immediately."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"After you figure out you're in trouble, it's 
too late...?"`;
   waitForClick; clearText; marker; sound(`T1C331`); appendText; 
   //You
   You`"Yeah. And the symptoms can be drawn out."`;
   waitForClick; clearText; marker; sound(`T1C332`); appendText; 
   //Sora
   Sora`"Yes.... Just to be on the safe side, I want 
you all to enter the room."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The decompression process took place over 
several hours.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco lay on the only bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid, You, Pipi and I sat next to her. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was cramped...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were like sardines in a can. There was 
nowhere to move.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
delay({ interval: 120 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
bgload({ name: `BG10A1`, transition: 20 });
clock(`23:54`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered what time it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took out my PDA and checked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`11:54 p.m.....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sleepy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was sleeping and her breathing was 
relaxed. It looked like she was doing better.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like You or the Kid were 
sleeping, but they sat quietly with 
their eyes closed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi had crawled under the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had sealed the hatch from outside and was 
adjusting the pressure as necessary.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Sora, what about you? Don't you need to be 
treated?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before the process had started I had asked 
Sora this.`;
   waitForClick; clearText; marker; sound(`T1C333`); appendText; 
   //Sora
   Sora`"No. I'm used to this..."`;
   waitForClick; clearText; marker; sound(`T1C334`); appendText; 
   //Sora
   Sora`"Oh, also...everyone, please remove your voice 
converters during the repressurization process."`;
   waitForClick; clearText; marker; sound(`T1C335`); appendText; 
   //Sora
   Sora`"They are designed to protect your eardrums 
from the change in air pressure...however 
during pressurization they can interfere."`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
let lbl_00001e3c;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I removed the earphones that I had become 
completely used to and held them in my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora still stood just outside the hatch window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi...wasn't inside or visible outside 
the room. She had left just before the 
pressurization process had started.`;
   waitForClick; 
});
choice(
   `Where did she go?`
   `When was Sora going to sleep?`
);
switch (choice) {
   case 0: goto(lbl_00001e64);
   case 1: goto(lbl_00001f3e);
}
let lbl_00001e64;
varop(`(28 0a a4) b7 += (00) 2`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Where the heck did Tsugumi go, anyway?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just before the hatch was closed, she had 
suddenly started talking.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; sound(`T1C336`); appendText; 
   //Tsugumi
   Tsugumi`"Uh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C337`); appendText; 
   //Tsugumi
   Tsugumi`"I'm leaving."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, where are you going?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C338`); appendText; 
   //Tsugumi
   Tsugumi`"There...is a place that 
I just realized I need to go to."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where? Treatment is more urgent than that."`;
   waitForClick; clearText; marker; sound(`T1C339`); appendText; 
   //Tsugumi
   Tsugumi`"I don't need it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, that's irresponsible and selfish!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C340`); appendText; 
   //Tsugumi
   Tsugumi`"I can't stay cooped up in this cramped 
place..."`;
   waitForClick; clearText; marker; sound(`T1C341`); appendText; 
   //Tsugumi
   Tsugumi`"Well, I won't go off escaping alone, so just 
take it easy."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not the point."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T1C342`); appendText; 
   //Tsugumi
   Tsugumi`"To be blunt, I don't have the patience for 
you. Any of you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi ignored You and me and went off 
somewhere.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora had reported to us that she was 
somewhere on the floor and safe...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it still bothered me a bit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was Tsugumi after all. I was sure she'd 
probably be back in a little while saying 
something else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I thought, but nearly two hours 
had passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'll wait just a little bit longer.)`;
   waitForClick; clearText; 
});
goto(lbl_00001f4e);
let lbl_00001f3e;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When was Sora going to sleep?`;
   waitForClick; clearText; marker; appendText; 
   Narr`This simple doubt jumped into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was doing minute, complex work nonstop 
and she was always on her feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she never got tired?`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I spoke with her over the interphone and 
asked her if she were alright, she laughed 
and said she was just fine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And she was still standing outside the room 
as if she were a sentinel guarding it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her back was straight and she never slouched, 
always looking like she was at attention.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if what she had said about being 
fine not sleeping days on end was true...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That really bothers me...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that I'd follow up on it later.`;
   waitForClick; clearText; 
});
let lbl_00001f4e;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even as I thought that, my eyelids 
got heavier and heavier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(But still....even so...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Today...really was...an eventful day...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then I fell away into slumber.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopSFX()
delay({ interval: 150 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_2A`);
