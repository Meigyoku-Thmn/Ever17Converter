if (l_choice == 1) goto(lbl_0000046e);
if (l_choice == 2) goto(lbl_00000473);
if (l_choice == 3) goto(lbl_00001b06);
if (l_choice == 4) goto(lbl_00001e3c);
l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
setSceneTitle({ index: 6 });
clock(`18:40`);
showTextbox();
text(() => {
   `We arrived at Zweite stock, the second floor.`;
   `Sora gave us 30 minutes of free time.`;
   `But that still didn't mean we could go running 
around as we pleased.`;
   `So we decided to randomly hit some of the 
rooms, and search them.`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Sora held her hands out in front of her and a 
holographic window appeared.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C000)`"Unlike the floor below, all of the scanning 
sensors on this floor seem to be functioning 
normally. This floor appears safer as well."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C001)`"Oh...Tsugumi is on this floor.... She seems 
to be walking in the vicinity of the elevator."`;
   Takeshi`"You can tell that?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C002)`"Yes. I will work in the Security Office while 
monitoring everyone's activities. If a problem 
arises, I will announce it via the intercom..."`;
   Sora(T1C003)`"And if something happens, please contact me 
immediately."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C004)`"Alright. Okay then. Let's split up and meet 
in the Security Office in half an hour."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C005)`"Okay."`;
   Coco(T1C006)`"Okie Dokie."`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   Takeshi`"Sure. Whatever."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `After closing the holographic window, Sora 
went into a room a little ways down the 
corridor. Apparently that was the Security 
Office.`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Everyone headed out in a different direction 
from the corridor intersection.`;
   `I took my PDA out of my pocket and pushed the 
button.`;
   `It was recharged and the backlight was working 
without a problem.`;
   `I reset the time.`;
   `After that I tested it a number of times, but 
it didn't seem to be able make a call or go 
online.`;
   `(Maybe I ought to give up using this to get 
in touch with the outside...)`;
   `I pushed the PDA back into my pocket.`;
   `I had thirty minutes left. `;
   `I was trying to decide which area of the park 
to visit first.`;

});
l_selection_0_available = 1;
l_selection_1_available = 1;
l_selection_2_available = 1;
let lbl_00000221;
if (l_selection_0_available != 0) goto(lbl_00000260);
if (l_selection_1_available != 0) goto(lbl_00000260);
if (l_selection_2_available == 0) goto(lbl_000006a3);
let lbl_00000260;
choice(
   cond(l_selection_0_available != 0)`The Dolphin Merry-go-round`,
   cond(l_selection_1_available != 0)`The souvenir shop`,
   cond(l_selection_2_available != 0)`The Security Office`,
);
switch (l_choice) {
   case 0: goto(lbl_0000028a);
   case 1: goto(lbl_00000508);
   case 2: goto(lbl_0000062a);
}
let lbl_0000028a;
bgload({ name: `BG02A2`, transition: 20 });
l_selection_0_available = 0;
showTextbox();
text(() => {
   `I headed to the room with the attractions.`;
   `There was a carousel there.`;
   `Only instead of horses, it was set to a 
dolphin theme...`;
   `It looked like its official name was the 
Dolphin Carousel.`;
   `With no visitors around, the ride seemed a 
little spooky and very lonely.`;
   `Even the dolphins themselves looked sad.`;

});
hideTextbox();
stopBGM();
playBGM({ num: 8, volume: 100 });
playSFX({ name: `SE03_11`, a1: 0, volume: 95 });
bgload({ name: `BG02A1`, transition: 30 });
showTextbox();
text(() => {
   Takeshi`"Whoa!"`;
   `Suddenly a happy melody started and the ride 
began to rotate.`;
   `Of course, no one was riding it....`;
   `All of the sudden, it no longer seemed so 
lonely, but that much more spooky.`;
   Takeshi`"Wh-wh-wh-what is this?"`;
   Takeshi`"Watch out! This place is haunted."`;
   Takeshi`"Even thinking about it gives me the creeps..."`;
   `Then from somewhere I heard someone snickering.`;

});
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C007)`"Mwa, ha, ha, ha"`;
   `You came skipping over to me.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C008)`"Hey, Takeshi. When did you get here?"`;
   Takeshi`"Looks like you are having a lot of fun..."`;
   You(T1C009)`"But it is fun, isn't? Doesn't it make you 
happy?" `;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C010)`"Hee, hee. I always wanted to give this ride 
a whirl once."`;
   `You pointed to the merry-go-round.`;
   Takeshi`"Don't just turn it on without any warning!"`;
   Takeshi`"You almost gave me a heart attack!"`;
   Takeshi`"You surprised the heck out of me!"`;
   `I shook my fist at her.`;
   `I might have been exaggerating a little, but...`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C011)`"Takeshi, how could you be scared of a silly 
pod of wooden dolphins...?"`;
   `You looked at me sideways, and grinned at me 
mischievously.`;
   Takeshi`"Nobody is supposed to be here in the theme 
park. It was like a horror movie!"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C012)`"Geez. You're such a chicken."`;
   Takeshi`"Well...you were wasting energy by turning it 
on, too."`;
   Takeshi`"What if there were a blackout?"`;
   Takeshi`"And we've no idea how long LeMU's back-up 
power is good for."`;
   Takeshi`"Besides, everybody knows that you should save 
energy!"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C013)`"So, you're not only chicken, but you worry a 
lot, too."`;
   Takeshi`"What're you talking about? It's common 
sense..."`;
   You(T1C014)`"Oh, Takeshi, so you don't know?"`;
   `Next she held her palms out and feigned 
exaggerated surprise.`;
   You(T1C015)`"This LeMU doesn't get any of its power from 
outside."`;
   You(T1C016)`"It is all generated inside this complex."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C017)`"Down more than 300 feet underwater on the 
ocean floor are thermal seafloor vents - 
basically hot springs. So LeMU takes hot 
water from there and uses it for steam."`;
   You(T1C018)`"The power of that steam is used to turn the 
turbines and that's how we generate our power."`;
   You(T1C019)`"While LeMU is a theme park, it is also a 
closed-cycle plant and a test case for 
self-sufficient power generation."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C020)`"And that's all memorized from the new 
employee manual."`;
   Takeshi`"I see."`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C021)`"I explain it in that kind of depth and all 
you can say is, 'I see'?"`;
   Takeshi`"I mean, what a WONDERFUL explanation, you're 
a model employee!"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C022)`"Hmmm..."`;
   You(T1C023)`"Takeshi, that was sure a sexy scream you let 
out when the dolphins started moving. You 
were scared, weren't you!"`;

});
showTextbox();
text(() => {
   You(T1C024)`"I think I'll tell everyone about it..."`;
   Takeshi`"Do what you want."`;
   You`"........."`;
   Takeshi`"........."`;
   Takeshi`"Then again, maybe you shouldn't."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `The dolphins had stopped moving of their own 
accord.`;
   `You explained that the ride ran for about 
three minutes each time before shutting off 
automatically. `;
   `We leaned against the fence surrounding the 
Dolphin Carousel.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"So you only work here part-time during the 
holidays?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C025)`"Yup. I started the end of April and have been 
staying here. This is my fourth day..."`;
   Takeshi`"And then out of the blue you get this. Pretty 
rough."`;
   You(T1C026)`"Takeshi, how many times have you come to 
LeMU?"`;
   Takeshi`"This is the first time."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C027)`"Ha. Then I've only got a three day head 
start on you."`;
   `You laughed happily.`;
   `She was sure cheerful. I had to respect her 
unflagging optimism and energy.`;
   Takeshi`"You're tough...I mean this situation is so 
depressing and it doesn't seem to faze you."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C028)`"No, I'm really not. It's just easier. I said 
it earlier, didn't I - would you rather I get 
depressed?"`;
   Takeshi`"I think it's better to laugh."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C029)`"You're right. That's all we can do."`;
   `Then she laughed again.`;
   `I tried to force a smile.`;

});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C030)`"Whew..."`;
   `You stretched like a cat.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Then she sat there and hugged her knees.`;
   `I followed suit and sat down next to her.`;
   You(T1C031)`"To tell you the truth..."`;
   You(T1C032)`"I came to work here because I thought my dad 
might be here."`;
   Takeshi`"Your dad?"`;
   You(T1C033)`"Actually, my father worked in the Research 
and Development Division of LeMU."`;
   Takeshi`"Research and development?"`;
   You(T1C034)`"Uh, well...he worked on a computer program. 
It's the hologram that Sora uses, the LeMMIH 
terminals and the complex control system..."`;
   You(T1C035)`"I don't know the details, he worked on all 
of it from when LeMU was first being built."`;
   You(T1C036)`"Of course, he didn't do it alone."`;
   You(T1C037)`"He was one of the members involved in 
developing the project."`;
   Takeshi`"Huh? Is that so...?_"`;
   You(T1C038)`"But my father..."`;
   You(T1C039)`"My father...disappeared one day."`;
   Takeshi`"...What?"`;
   You(T1C040)`"He just went missing..."`;
   Takeshi`"W-when?"`;
   You(T1C041)`"He...."`;
   You(T1C042)`"He has been missing as long as I can 
remember..."`;
   You(T1C043)`"It was when I was one year old, 17 years 
ago..."`;
   Takeshi`"17 years ago..."`;
   Takeshi`"So you don't remember...your father?"`;
   You(T1C044)`"No..."`;
   You(T1C045)`"I've only seen pictures and movies of him..."`;
   You(T1C046)`"I don't really have any memories..."`;
   You(T1C047)`"Everything I just told you I heard from my 
mother..."`;
   Takeshi`"But why? Why did he disappear?"`;
   You(T1C048)`"If I knew that, I wouldn't have come here."`;
   You(T1C049)`"But the only clue to what happened is 
probably here..."`;
   You(T1C050)`"The last time my father was seen was in LeMU."`;
   You(T1C051)`"So I thought that if I came here maybe I 
would find some clue about my father..."`;
   `It seems like my mom has already given up, 
so I can't count on her...`;

});
let lbl_0000046e;
showTextbox();
text(() => {
   You(T1C052)`"My mom seems to think my dad is 
already dead..."`;
   `'Dead'...`;
   `The word 'dead' had a heavy ring to it.`;
   You(T1C053)`"But you know?"`;
   You(T1C054)`"I believe!"`;
   You(T1C055)`"I believe that he is alive somewhere!"`;
   You(T1C056)`"He has to be!"`;
   You(T1C057)`"He just went missing. 
They never found his body."`;

});
let lbl_00000473;
showTextbox();
text(() => {
   You(T1C058)`"I heard that some of my father's research is 
being used in the new programs on some of the 
latest attractions."`;
   You(T1C059)`"There has to be a clue somewhere in this 
place about the work my father was doing..."`;
   You(T1C060)`"Well the original..."`;
   You(T1C061)`"The attractions are already under water."`;
   Takeshi`"........."`;
   You`"........."`;
   `After that we lapsed into silence.`;
   `I didn't know if I should say something to her.`;
   `I tried to think of what to say but didn't 
hit upon anything.`;

});
fgload({ id: 1, name: `YU13BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C062)`"........."`;
   `Suddenly You stood up.`;

});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C063)`"I'm kind of in the mood for some music."`;
   You(T1C064)`"Something light and fun if you know what I 
mean."`;

});
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C065)`"So I think I'll get the dolphins spinning 
again?"`;
   You(T1C066)`"Takeshi, why don't you finish looking around?"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `With that she darted away.`;
   Takeshi`"Hey, You...?"`;

});
hideTextbox();
stopBGM();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   `The dolphins started spinning again.`;
   `You didn't come back.`;
   `It looked like she had disappeared to the 
corridor behind the merry-go-round.`;
   `(...I guess I'll get out of here...)`;
   `It was as if the dolphins saw me off. I left 
the room behind.`;

});
showTextbox();
text(() => {
   `
      Dolphin Carousel: Situation normal`;

});
bgload({ name: `BG25A3`, transition: 20 });
hideTextbox();
goto(lbl_00000221);
let lbl_00000508;
bgload({ name: `BG06A1`, transition: 20 });
l_selection_1_available = 0;
showTextbox();
text(() => {
   `Adjacent to the corridor was a little room for 
visitors to rest as well as a shop selling 
theme park goods.`;
   `There was a sign with the LeMU mascot on it.`;
   `This was where I had peeled the mascot 
costume off of the kid.`;

});
if (l_blamed_the_tanuki == 0) goto(lbl_00000544);
showTextbox();
text(() => {
   `That lemur thing called Myumyun.`;
   `In the shop were those lemur stuffed animals 
next to all kinds of key chains, hologram 
pendants, seafood snacks and other stuff as 
well as lemur stuffed animals.`;

});
goto(lbl_00000549);
let lbl_00000544;
showTextbox();
text(() => {
   `That Myumyun raccoon dog mascot...`;
   `I didn't see any raccoon dog stuffed animals 
next to all kinds of key chains, hologram 
pendants, seafood snacks and other stuff.`;
   `I still had no idea what that raccoon dog was.`;

});
let lbl_00000549;
fgload({ id: 1, name: `KA09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `...The kid was sitting on the bench next to me.`;
   `He wasn't really looking at anything, but his 
gaze seemed fixed.`;
   `He just kept staring at the ground.`;
   `I expected to see a hole open up in the 
ground he was staring so intensely.`;
   `He had his hands on his temples.`;
   Takeshi`"How's your headache, Kid?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C067)`"Uh..."`;
   Takeshi`"What's the matter? Did you find something?"`;
   Takeshi`"Or did you remember something?"`;
   Kid(T1C068)`"Uh...? I...um..."`;
   Kid(T1C069)`"Who...are you?"`;
   Takeshi`"I just told you a bit ago. I introduced 
myself. I'm Takeshi. Takeshi Kuranari."`;
   Kid(T1C070)`"Oh. Is that right?"`;
   Kid(T1C071)`"This is...?"`;
   Kid(T1C072)`"What am I doing here?"`;
   Takeshi`"*sigh* Oh great."`;
   `It's that amnesia thing.`;
   `The Kid couldn't even remember what he had 
just said.`;
   `He just moved from one topic to the next, 
forgetting the last.`;
   Takeshi`"This is the marine theme park LeMU."`;
   Takeshi`"Something happened and we are trapped here."`;

});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C073)`"Le...mur?"`;
   Kid(T1C074)`"What do you mean 'trapped'?"`;
   Takeshi`"That's something I would like answered 
myself."`;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C075)`"Uh..."`;
   Kid(T1C076)`"And who are you?"`;
   Takeshi`"Takeshi Kuranari."`;
   Kid(T1C077)`"Takeshi...Kuranari?"`;
   Takeshi`"Takeshi means samurai in Japanese."`;
   Kid(T1C078)`"Uh..."`;
   Takeshi`"Maybe you should start taking notes. You 
know, keeping track of my name, the other 
people, where we are and stuff."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C079)`"Notes? Yeah, maybe I should..."`;
   Takeshi`"It looks like you understand what taking 
notes means. Take good ones. Even when you 
are eating."`;
   Takeshi`"And if you can remember, you can make a memo 
of your name, too."`;
   `I gave the Kid a memo pad and pen I had 
filched from the kiosk.`;
   Kid(T1C080)`"Thanks."`;
   Kid(T1C081)`"Hey, can you tell me what year it is?"`;
   Takeshi`"You forgot that, too?"`;
   Kid(T1C082)`"Yeah..."`;
   Takeshi`"It's 20..."`;
   Takeshi`"...Uh, what year IS it?"`;
   `I searched around in my pocket.`;
   `My entrance ticket stub was crumpled and 
stuck to the back of my PDA.`;
   Takeshi`"Oh, that's right! It's 2017! Take notes! 
Write it down!"`;
   Kid(T1C083)`"Okay. 2017..."`;
   `He was taking it down.`;
   `It looked like he hadn't forgotten how to take 
notes.`;
   Takeshi`"So why'd you wanna know the year?"`;
   Kid(T1C084)`"Yeah, kind of."`;
   Takeshi`"Kind of?"`;
   Kid(T1C085)`"I thought that if I heard the year then I 
might be able to remember at least my 
birthday."`;
   Takeshi`"I see. Come to think of it, you don't even 
know how old you are, huh?"`;
   Kid(T1C086)`"No..."`;
   Takeshi`"By the looks of it, I'd say you're not a day 
over 42."`;

});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C087)`"What!?"`;
   `Surprised the Kid felt his face.`;
   Takeshi`"HA, HA, HA. I'm kidding! Relax! There's no 
way."`;
   Takeshi`"You're probably in the neighborhood of 14 or 
15."`;
   Takeshi`"If you are 18, then you've got a baby face."`;
   Takeshi`"Geez! Don't tell me you forget your own face?"`;

});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C088)`"...F-face?"`;
   Takeshi`"If you're worried about it, go take a look 
in the mirror. You could sketch a 
self-portrait in case you forget later..."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C089)`"Oh. Yeah...maybe I will."`;
   `(Geez. He's got it rough...)`;
   `But his serious expression had relaxed. That 
at least was good.`;
   Takeshi`"Alright. Well I'm gonna get going. When it's 
time, you come to the Security Office."`;
   Kid(T1C090)`"Oh, the Security Office. Where is that? 
...And where is this again?"`;
   Kid(T1C091)`"I'm sorry. I really don't know."`;
   Takeshi`"It's alright. I understand. If you don't 
come, then I'll come looking for you."`;
   Kid(T1C092)`"Okay. Thanks...Takeshi."`;
   Takeshi`"Hey, you remembered."`;
   Kid(T1C093)`"Takeshi is your name...right?"`;
   `The Kid had been taking notes and sure enough 
there it was.`;
   `My name, Takeshi, on his pad, but spelled 
wrong.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `
        <LeMU Kiosk:  Situation normal>`;

});
bgload({ name: `BG25A3`, transition: 20 });
hideTextbox();
goto(lbl_00000221);
let lbl_0000062a;
l_selection_2_available = 0;
showTextbox();
text(() => {
   `Sora had said that she would be working in the 
Security Office...`;
   `But I wondered what she was doing there.`;
   `Besides, she was the only one that had been 
doing deskwork the whole time we'd been 
trapped.`;
   `I imagined she would be getting a different 
kind of tired from what we got walking 
around. Mentally tired, maybe.`;
   `As I was thinking that I knocked on the 
Security Office door.`;

});
playSFX({ name: `SE00_14`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Knock, knock.`;
   Takeshi`"Hello? Sora, you there?"`;
   Takeshi`"Wait, this metal door is so thick you 
couldn't even hear me if you were..."`;
   `I pushed the button for the intercom on the 
panel next to the door.`;
   `But Sora didn't reply.`;
   Takeshi`"I wonder if she isn't in there."`;
   `The door wasn't locked, so I pushed the open 
button and it opened.`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `The Security Office was small.`;
   `And it was dirty.`;
   `The front wall was packed with monitors. They 
were all stained dark from cigarette smoke.`;
   `Ashtrays were stacked up like it was normal.`;
   `And there was a huge sign plastered on the 
wall that said 'NO SMOKING'.`;
   `I recalled the sloppy clubroom back at 
college - it had 25 years of history being 
only used by guys - and couldn't help but 
chuckle.`;
   `But I restrained myself and kept looking. Sora 
wasn't there.`;
   Takeshi`"Sora?"`;
   Takeshi`"Hey, Sora? Where are you?"`;
   Takeshi`"I didn't think you were the type to go 
running off without telling anyone..."`;
   `I took another step inside the room.`;
   Sora(T1C094)`"Kyaaa!"`;
   Takeshi`"Waaaa!"`;
   `All of the windows in the wall monitors 
opened and closed.`;
   Sora(T1C095)`"T-Takeshi...when did you get here?"`;
   `For some reason the voice sounded like it 
came from the shadow of the desk.`;
   `It was a blind spot and I couldn't see Sora.`;
   Takeshi`"So you are here Sora...I thought you'd 
probably be all stressed out from the work 
and situation so I came to take a look."`;
   Takeshi`"What are you doing in that weird place?"`;
   `I approached the rear of the desk as I talked.`;
   Sora(T1C096)`"Oh, no! Takeshi no! Please don't..."`;
   Takeshi`"Huh?"`;
   Sora(T1C097)`"I'm busy right now..."`;
   `I couldn't see her face, but she sounded 
embarrassed.`;
   Sora(T1C098)`"If you don't mind, can you wait outside for 
a little bit."`;
   `She spoke hesitantly.`;
   Takeshi`"Oh! Are you changing?"`;
   Takeshi`"I'm sorry..."`;
   Sora(T1C099)`"Uh, no, not exactly. But I suppose it is 
something like that...Takeshi, you aren't 
going to change?"`;
   Sora(T1C100)`"If you don't mind employee work outfits...the 
changing room is directly behind this room. 
Just turn on the corner of the corridor and 
you'll find it."`;
   Takeshi`"Nah, I'm alright. I'm just a little damp and 
uncomfortable, but I'm used to it."`;
   Sora(T1C101)`"I see..."`;
   Sora(T1C102)`"I'm sorry, but I'm still working and I need 
to concentrate...but I'll be done by the 
appointed time."`;
   Takeshi`"I'm sorry to bother you. I'll go look around 
a little more."`;
   Takeshi`"Okay. Good luck."`;
   Sora(T1C103)`"Thank you."`;
   `During our whole exchange, Sora was hidden 
and I didn't see her.`;
   `I waved in Sora's direction - though I 
figured she couldn't see me - and headed for 
the exit.`;
   Takeshi`"Hey, it's not good for you to stay cooped up 
in here. Take a break once in a while."`;
   `I said it without looking back.`;
   Sora(T1C104)`"Okay. But please do not worry about me."`;
   Sora(T1C105)`"I like my work. If I really get into it...I 
can go for days without sleep just fine."`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   `(Sleep without days. That's insane.)`;
   `I didn't really understand what she meant.`;
   `(But I suppose...)`;
   `(She's probably really into her job.)`;
   `I imagined that system engineer was probably 
just an occupation that drew 'interesting 
types' and felt satisfied with that.`;

});
showTextbox();
text(() => {
   `
      <Security Office:  Situation normal>`;

});
hideTextbox();
goto(lbl_00000221);
let lbl_000006a3;
showTextbox();
text(() => {
   `I took my PDA from my pocket and checked the 
time.`;
   `There were 17 minutes until the time Sora had 
said.`;
   `I wondered where I should hit next.`;

});
l_selection_0_available = 1;
l_selection_1_available = 1;
l_selection_2_available = 1;
let lbl_000006c9;
if (l_selection_0_available != 0) goto(lbl_00000708);
if (l_selection_1_available != 0) goto(lbl_00000708);
if (l_selection_2_available == 0) goto(lbl_00000baa);
let lbl_00000708;
choice(
   cond(l_selection_0_available != 0)`The visitor elevator`,
   cond(l_selection_1_available != 0)`The warehouse`,
   cond(l_selection_2_available != 0)`The infirmary`,
);
switch (l_choice) {
   case 0: goto(lbl_00000732);
   case 1: goto(lbl_0000097a);
   case 2: goto(lbl_000009c1);
}
let lbl_00000732;
l_selection_0_available = 0;
showTextbox();
text(() => {
   `I continued to the next corner in the 
corridor and hung a left.`;
   `I went in the far door, which was open.`;

});
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   `(Huh?)`;
   `(Where am I?)`;
   `I had been aiming for the elevator, but wound 
up somewhere else.`;
   `The sign said 'Qualle'.`;
   `I had no clue what that meant.`;
   `Reading the explanation, I learned that this 
was a gondola in the shape of a jellyfish.`;
   `I wasn't particularly in the mood for a 
ride....`;
   `I checked to see that there was no damage to 
the floors or the walls and left.`;

});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG22A3`, transition: 20 });
showTextbox();
text(() => {
   `The elevator was next to the Jellyfish Gondola.`;

});
fgload({ id: 1, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Oh..."`;
   `Tsugumi was standing there silently.`;
   `She was in front of the closed elevator doors 
with a stern look on her face.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"So this is where you were..."`;

});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `It looked like Tsugumi had noticed me, but she 
didn't reply.`;
   `Her eyes stayed fixed on the door.`;
   Takeshi`"This elevator doesn't go to the surface."`;
   `I was reading a nearby sign.`;
   Takeshi`"It says that to go to the floating island, 
Insel null, we should use the elevator in the 
center of the floor."`;
   Tsugumi`"........."`;
   Takeshi`"Hey, Tsugumi. Just standing there isn't 
going to make the elevator come."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C106)`"I know that."`;
   `Tsugumi finally answered me.`;
   Tsugumi(T1C107)`"I know because I just saw it."`;
   Takeshi`"Saw what?"`;
   Tsugumi(T1C108)`"The elevator."`;
   `As soon as she said that she placed her hand 
on the closed elevator doors and started 
prying them apart.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `The door was stopped half open. I thought it 
might be broken.`;
   `Tsugumi looked inside.`;
   Tsugumi(T1C109)`"See the elevator is stopped on the third 
floor."`;
   `Scared, I peeked in.`;
   Takeshi`"Oh...that's the one we rode down in?"`;
   Tsugumi(T1C110)`"It's still there from when we escaped."`;
   `A little box in the abyss.`;
   `The elevator was a bout 20 yards down.`;
   `I thought that the floors were fairly far 
apart, but I didn't realize actually how far.`;

});
hideTextbox();
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Whoa!"`;
   `Tsugumi suddenly gave a little push on my 
shoulder from behind.`;
   Takeshi`"Don't push.... Whaddya think would happen if 
I fell from here?"`;
   Tsugumi(T1C111)`"If you fell...I think that you would die. 
Most definitely."`;
   `Tsugumi said it without a trace of emotion.`;
   Takeshi`"Geez...why do you wanna go and try to scare 
me?"`;
   Tsugumi(T1C112)`"You're just a coward."`;

});
hideTextbox();
playSFX({ name: `SE00_10`, a1: 1, volume: 95 });
waitForSFX();
bgload({ name: `BG22A3`, transition: 20 });
showTextbox();
text(() => {
   `Tsugumi pulled on the doors, putting them 
back in their original positions.`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Just to be sure, I tapped on the elevator 
button a couple of times.`;
   `There was no response. The lamp didn't light 
up.`;
   Takeshi`"It doesn't look like it's getting any power."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C113)`"Yes. And the elevator shaft is warped. So, 
even if it was getting power, it probably 
couldn't move normally."`;
   Tsugumi(T1C114)`"That's right, this elevator is useless..."`;
   Tsugumi`"........."`;
   `After that, Tsugumi went quiet again.`;
   `Silence was the rule for a while.`;
   `Tsugumi rarely talked.`;
   `She only said the minimum necessary....`;
   `I thought that maybe she was trying to be 
careful of me for some reason.`;
   `I wondered what it could be....`;
   `I wanted to know.`;
   Takeshi`"Hey, why don't you tell me what happened?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C115)`"It's got nothing to do with you."`;
   `That might have been true, but still.`;
   `It's got nothing to do with me...`;
   `It's got something to do with me...`;
   Takeshi`"Hey, you know something I don't?"`;
   Tsugumi(T1C116)`"Something...like what?"`;
   Takeshi`"Like about this accident."`;
   Takeshi`"Like maybe something..."`;
   Takeshi`"Something to do with the reason you're all 
quiet?"`;
   Tsugumi(T1C117)`"Accident? This wasn't an accident..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C118)`"It was planned."`;
   Takeshi`"What makes you say that?"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C119)`"Huh...you're not surprised?"`;
   `Tsugumi gave me a strange look.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C120)`"So you feel like something isn't right, too."`;
   Takeshi`"Well, maybe I guess."`;
   Takeshi`"Like everything is just too neat..."`;
   Tsugumi`"........."`;
   Takeshi`"We can't communicate with the outside and our 
escape routes are all closed."`;
   Takeshi`"But we've got electricity and the air 
conditioning still works."`;
   Takeshi`"It's almost like someone trapped us here on 
purpose..."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C121)`"Hmmm...? I guess you're not as dumb 
as you look."`;
   `Tsugumi's expression loosened into a slight 
smile.`;
   `It was a provocative smile.`;
   Takeshi`"What do you mean by that?"`;
   Tsugumi(T1C122)`"I mean exactly what I said."`;
   Tsugumi(T1C123)`"You don't look that smart."`;
   `(Whhhhhhaaaaat!?)`;
   `(This chick...!)`;
   `(I'd love to tell her what I REALLY think of 
her...)`;
   `That thought ran through my mind.`;
   `But I thought that could really make me look 
stupid...so I resisted the urge.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C124)`"This is a trap."`;
   `Tsugumi's expression returned to normal.`;
   Tsugumi(T1C125)`"And you probably aren't going to get out."`;
   Tsugumi(T1C126)`"No, not just you, but everyone else 
as well, all four of them."`;
   Tsugumi(T1C127)`"You're all the same."`;
   Takeshi`"Huh?"`;
   Takeshi`"Well, what about you then, Tsugumi?"`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C128)`"I......"`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C129)`"Yeah. I suppose I could die in 
a place like this."`;
   Tsugumi(T1C130)`"It wouldn't be bad at all, I guess."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi looked upward.`;
   `The ceiling was covered with artificial 
materials.`;
   `It felt oppressive....`;
   `She laughed again.`;

});
bgload({ name: `BG25A3`, transition: 20 });
fgload({ id: 1, name: `TU10ADS`, x: 320, useAnim: true });
delay({ interval: 60 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Then she left disappearing down the corridor 
and I was alone. `;

});
showTextbox();
text(() => {
   `
          <Jellyfish Gondola 'Qualle': 
               Situation normal>`;

});
showTextbox();
text(() => {
   `
            <Elevator out of order>`;

});
hideTextbox();
goto(lbl_000006c9);
let lbl_0000097a;
l_selection_1_available = 0;
showTextbox();
text(() => {
   `There was a room with no sign indicating what 
it was for.`;
   `It caught my curiosity and I decided to have 
a look.`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG13A1`, transition: 20 });
showTextbox();
text(() => {
   `It appeared it was a warehouse of some kind.`;
   `There were loads of boxes made of reinforced 
plastic all piled up.`;
   `There was a pushcart and boxes too big to 
carry and some long and narrow that a person 
could just hold.`;
   `There were all kinds of marks, symbols and 
letters on the boxes and I couldn't make 
sense of them.`;
   `There were a bunch of round, carbon capsules 
and drum-like looking objects.`;
   `I wondered what was inside them.`;
   `I figured I didn't really need to know.`;
   `There was a hissing noise coming from 
somewhere.`;
   `Looking for the sound led me to an air 
conditioner that was in bad shape, but still 
working.`;
   `On the room's ceiling was a crane complete 
with guide rails.`;
   `One container was still suspended from above. 
It looked like it had been abandoned in the 
middle of work.`;
   `No one had had any time to clean up.`;
   `Everyone had fled at once....`;
   Takeshi`"Hey, is there anybody here?"`;
   `I called out once, but nobody answered.`;
   Takeshi`"........."`;
   Takeshi`"There's no reason anybody would be here..."`;
   `There was no reply.`;

});
showTextbox();
text(() => {
   `
         <Warehouse:  Situation normal>`;

});
bgload({ name: `BG25A3`, transition: 20 });
hideTextbox();
goto(lbl_000006c9);
let lbl_000009c1;
bgload({ name: `BG08A1`, transition: 20 });
l_selection_2_available = 0;
showTextbox();
text(() => {
   `'Infirmary'`;
   `I arrived in front of the infirmary.`;
   `While this was a theme park, it was also deep 
in the ocean and had other facilities.`;
   `LeMU's atmosphere was maintained using a mix 
of gases at an air pressure different from 
the outside world. It seemed that it could 
make some people feel ill...`;
   `I reckoned that was the reason this room was 
so large.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `Beyond the huge sliding door was a room 
decked out elaborately in shiny new medical 
equipment.`;
   `I thought it could have something to do with 
LeMU's sponsor being a major pharmaceutical 
company.`;
   `The room was so clean and white it was nearly 
blinding.`;
   `There were two normal beds and one that 
looked like it was for surgery.`;
   `There was also a huge machine attached to one 
of them.`;
   `L-MRI was written on it.`;

});
showTextbox();
text(() => {
   `I didn't know what it was, but it looked like 
it was some kind of scanner.`;
   `I saw a shelf in the wall filled with medical 
tools and medicine.`;
   `It was probably in case somebody fell ill or 
got injured here. It wouldn't be possible to 
move anyone outside, so they would have to be 
treated here.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   //??
   Unk(T1C131)`"Yeah. I don't think there's any way out now."`;
   `(!?)`;
   `I was getting used to surprises, but the voice 
startled me.`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `I didn't know who was talking.`;
   `But somebody sure was.`;
   //??
   Unk(C1S296)`"Everybody?"`;
   //??
   Unk(C1S297)`"Help?...Did you come to help?"`;
   `It sounded like Coco....`;
   `But I didn't know who she was talking to.`;
   `I couldn't tell where they were.`;
   Coco(C1S298)`"But...it's probably impossible..."`;
   Coco(C1S299)`"There is...no way out anymore..."`;
   `What was she saying...?`;
   `I wondered if something had happened to Coco...`;
   `I carefully inched toward the rear of the room.`;
   `I noticed a squarish hole cut out of the floor.`;
   `I peered down inside.`;
   `Inside there was a small elevator stopped.`;
   `It appeared that there was another room 
directly below the infirmary. The voice was 
coming from there.`;
   `I pushed the button. When the lift came, I 
jumped in.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `It descended slowly and silently.`;
   `I arrived below.`;
   `I noticed that the hatch there was slightly 
ajar.`;
   Coco(C1S300)`"Liar..."`;
   Coco(C1S301)`"Because...because..."`;
   `I eased closer and opened the hatch.`;

});
hideTextbox();
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `EV_CO03B`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Who are you talking to?"`;

});
bgload({ name: `EV_CO03C`, transition: 20 });
showTextbox();
text(() => {
   `Coco jumped as if she had been stung.`;
   `She was sitting on the bed. Nothing looked 
out of the ordinary....`;

});
hideTextbox();
playBGM({ num: 9, volume: 100 });
bgload({ name: `BG10A2`, transition: 20 });
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C137)`"Oh, Takepyon..."`;
   Takeshi`"Takepyon?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C138)`"Yup. You're Takepyon!"`;
   Takeshi`"Huh?"`;
   Coco(T1C139)`"Pyon, pyon - Takepyon"`;
   Takeshi`"...Safe place, pokopon"`;
   Coco(T1C140)`"Yeah, you got it..."`;
   Takeshi`"I know the Ninneko Song 17."`;
   Takeshi`"But it's not 'pyon, pyon'. It's 'pokopon', 
right?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C141)`"Yes, yes!"`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C142)`"But..."`;
   Takeshi`"....Huh?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C143)`"Coco."`;
   `Coco pointed to herself as she said her name.`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C144)`"Takepyon."`;
   `Then she pointed at me.`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C145)`"And Pipi is three years old."`;
   Pipi(PIPI_02)`"Woof!"`;
   `A puppy face peeked out from under the bed.`;
   Coco(T1C146)`"Nice to meet you!"`;
   Takeshi`"Oh, nice to meet you, too!"`;
   Takeshi`"...But haven't we already introduced 
ourselves...?"`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `I returned upstairs with Coco.`;
   Takeshi`"So you're calling me Takepyon. Is that it?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C147)`"Yup."`;
   Pipi(PIPI_01)`"Woof."`;
   Takeshi`"Alright. I got it."`;
   Takeshi`"So who were you talking with, Coco?"`;
   Coco(T1C148)`"What?"`;
   Takeshi`"Wasn't someone just in that room?"`;
   Coco(T1C149)`"No. Nobody was there."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C150)`"I was just playing around with Pipi"`;
   Coco(T1C151)`"Pyon, pyon, Takepyon"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Whatever...`;
   `I didn't think Coco would lie to me.`;
   `There wasn't anyone else around.`;

});
showTextbox();
text(() => {
   `
         <Infirmary: Situation normal>`;

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
   Takeshi`"Now..."`;
   `I took my PDA from my pocket and looked at 
the time.`;
   Takeshi`"Oh, no!"`;
   `We were only two minutes late, but still, we 
were late.`;

});
playSFX({ name: `SE01_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I jogged toward the Security Office.`;
   `Coco and Pipi were close behind me.`;
   `We went in through the sliding door.`;

});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
setSceneTitle({ index: 7 });
clock(`19:12`);
multifgload2({ id1: 1, id2: 2, name1: `YU04BDM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C152)`"Takeshi, you're late!"`;
   `You was standing like a guard in the narrow 
entranceway.`;
   `The kid was next to her.`;
   Kid(T1C153)`"Yeah. I got here a little before you..."`;
   Takeshi`"Sorry. My bad. I was late."`;
   You(T1C154)`"You know that in a group and in our 
situation we have to be punctual, right?"`;
   Takeshi`"Don't get so mad. It's only two minutes give 
or take."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1C155)`"But two minutes could make all the 
difference in the world."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C156)`"I was late too!"`;

});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1C157)`"Oh, Coco. You didn't get lost or have any 
problems? You're alright?"`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C158)`"Yup. I'm fine. I came straight here."`;

});
fgload({ id: 1, name: `YU16BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1C159)`"Oh, that's good."`;
   Takeshi`"...You're sure treating her a lot different 
than me..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C160)`"Well, everyone made it here in one piece, so 
that should be sufficient."`;
   `Sora looked up from the LeMMIH terminal and 
smiled. She walked toward us.`;
   Takeshi`"So everybody's here..."`;
   Takeshi`"What about Tsugumi?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADS`, name2: `TU14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C161)`"I'm here..."`;
   `Tsugumi was leaning against the lockers on 
the far side of the room.`;
   Tsugumi(T1C162)`"If you've found out anything new, I'd like 
to hear about it. Did you?"`;

});
fgload({ id: 1, name: `SO01ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C163)`"Oh, yes. I will tell you."`;
   Sora(T1C164)`"First there are a few things I want to 
review..."`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `IMG01B`, transition: 20 });
playBGM({ num: 14, volume: 100 });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   `Sora gave us a lecture about the structure of 
LeMU.`;

});
bgload({ name: `MAP03A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T1C165)`"LeMU has three layers below the ocean's 
surface."`;
   Sora(T1C166)`"Erste boden, Zweite stock, Dritte stock..."`;
   Sora(T1C167)`"There are nearly 56 feet (17 meters) 
between each floor. If you go down a floor, 
then you go almost 56 feet (17 meters) deeper."`;
   Sora(T1C168)`"Thus, the third floor, Dritte stock, 
is located at around a depth of 167 feet."`;
   Sora(T1C169)`"Outside of Dritte is a total of 6 
atmospheres of pressure, 5 atmospheres 
water pressure and 1 atmosphere air pressure."`;
   Sora(T1C170)`"Even if hypothetically, you were to suddenly 
go out into the ocean from Dritte..."`;
   Sora(T1C171)`"Your lungs would be crushed to about 
one-sixth of their size, and approximately 
five-sixth of your lungs would be flooded. 
You would likely die in a matter of minutes."`;
   Takeshi`"Uh, I've gotta question."`;
   Sora(T1C172)`"Go ahead..."`;
   Takeshi`"I've heard that skin divers can dive to 
depths of about 30 meters. Couldn't somebody 
just tough out the water pressure on the way 
up?"`;
   Sora(T1C173)`"The current world record for free diving 
is around 492 feet."`;
   Sora(T1C174)`"With an aqualung and pauses along the way, 
probably just about anyone could dive around 
115 feet."`;
   Sora(T1C175)`"However, the air sent to your lungs would be 
highly pressurized gas."`;
   Sora(T1C176)`"But with skin diving, they don't stop to 
breathe along the way. Amateurs can't 
make it past 65 feet."`;
   Takeshi`"Wow. Is that right?"`;
   Sora(T1C177)`"And there is one other important thing."`;
   Sora(T1C178)`"Even if you could withstand 5 atmospheres of 
water pressure..."`;
   Sora(T1C179)`"Could you really swim over 
167 feet to the surface?"`;
   Takeshi`"You making fun of me?"`;
   Takeshi`"Hey, I may not look like it, but in high 
school I swam a mile."`;
   Sora(T1C180)`"But aren't you talking about swimming on the 
surface?"`;
   Sora(T1C181)`"Swimming 51 meters across something is 
nothing like swimming 51 meters up something."`;
   Sora(T1C182)`"I am talking about 51 meters in height."`;
   Sora(T1C183)`"It would be the equivalent of swimming a 
15-story building."`;

});
choice(
   `Satisfied with the explanation`,
   `Unsatisfied with the explanation`,
);
switch (l_choice) {
   case 0: goto(lbl_00000d80);
   case 1: goto(lbl_00000d9f);
}
let lbl_00000d80;
l_tsugumi_point += 1;
l_sora_point += 1;
showTextbox();
text(() => {
   `Swimming a 15-story building...?`;
   `That was insanity.`;
   `Even from Zweite stock at a depth of 34 
meters that would be about 10 stories.`;
   `Just climbing that would be a bear.`;
   `And besides, how would one get outside of 
LeMU in the first place....`;
   Takeshi`"Yeah. You're right. That's something that 
just guts alone couldn't get you through."`;
   `I nodded.`;

});
goto(lbl_00000da4);
let lbl_00000d9f;
showTextbox();
text(() => {
   Takeshi`"But wait!"`;
   `I persisted.`;
   Takeshi`"That's still the same distance, right? It's 
just vertical instead of horizontal."`;
   Takeshi`"I'd just have to try extra hard..."`;
   Takeshi`"And with float rings or something buoyant it 
would be even easier..."`;
   You(T1C184)`"Hey, Takeshi. How fast do you think you 
could run 50 meters on mattresses?"`;
   `You suddenly shot me the question.`;
   Takeshi`"Why mattresses?"`;
   You(T1C185)`"Because. Just answer the question."`;
   Takeshi`"Fifty meters. Maybe six or seven seconds."`;
   You(T1C186)`"So how about if the mattresses were piled on 
you?"`;
   Takeshi`"...Huh?"`;
   You(T1C187)`"How long would it take to get them off of 
you?"`;
   Takeshi`"How would I know? I've never tried that."`;
   You(T1C188)`"Think you could do it in seven seconds?"`;
   Takeshi`"You know I couldn't!"`;
   Takeshi`"Running on something and taking them off of 
you are two different things."`;
   `I gasped.`;
   Takeshi`"...Oh, I get it..."`;
   You(T1C189)`"Now do you finally see?"`;

});
let lbl_00000da4;
hideTextbox();
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C190)`"And the ocean is pitch black. It would be 
suicide."`;
   Sora(T1C191)`"That is correct."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C192)`"There is something else I want to say. It is 
an announcement..."`;
   Sora(T1C193)`"I am still working to gather information and 
reconnect LeMU's communication network with 
the outside, however..."`;
   Sora(T1C194)`"All cable, radio and network functions are 
down due to malfunctions, physically severed 
cables or flooding."`;
   Sora(T1C195)`"I cannot provide an estimation of when we 
will be in touch with the outside."`;
   Sora(T1C196)`"Sonic communication to the outside is also 
down."`;
   Sora(T1C197)`"Therefore I have not been able to dispatch 
an SOS."`;
   Sora(T1C198)`"That concludes my report..."`;

});
removeBG({ mode: BLACK, transition: 1 });
delay({ interval: 90 });
showTextbox();
text(() => {
   `Two hours had passed.`;
   `There was no sign of help.`;
   `If there were people up on the floating the 
island, the least they could do was send 
someone to check on us...`;
   `I was trying to be upbeat about things, but 
with the first floor flooded and the 
partitions shut no one was going to be coming 
through there.`;
   `And coming through the ocean...that seemed 
even more impossible.`;
   `The flooding of LeMU had disrupted the flow 
of the currents around it.`;
   `It would be hard for a diver or small 
submersible to get anywhere near it.`;

});
hideTextbox();
stopBGM();
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG06A1`, transition: 20 });
clock(`21:18`);
showTextbox();
text(() => {
   `We left behind the Security Office that 
reeked of smoke, and gathered in front of the 
souvenir stand.`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C199)`"Ready go"`;
   Pipi(PIPI_25)`"Ggrrrr."`;
   Pipi(PIPI_26)`"Waff."`;
   Takeshi`"...Heeee."`;
   Takeshi`"Ah, ha, ha, ha,ha!"`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C200)`"Yeah! That's another win for Pipi."`;
   Pipi(PIPI_01)`"Woof."`;
   `I had just finished my 34th match against Pipi.`;
   `And I had lost 34 times.`;
   `It was a pretty one-sided affair.`;
   Takeshi`"Is there anyway that Pipi could lose?"`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C201)`"Oh, are you making excuses?"`;
   Takeshi`"First off, you're the one who's making 
Pipi's face all funny. I can't make faces 
that crazy by myself."`;
   Coco(T1C202)`"Well, there's no other way to do it. Pipi 
can't make faces alone."`;
   Pipi(PIPI_00)`"Woof."`;
   Takeshi`"Besides, I don't know how to make a dog 
laugh, so it's not really fair."`;

});
fgload({ id: 1, name: `CO11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C203)`"Well...that's just something you have to get 
used to."`;
   `I wondered if was really just getting used to 
it.`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C204)`"Pipi laughs when he's happy. Right, Pipi?"`;
   Pipi(PIPI_04)`"Woof, woof."`;
   Takeshi`"Well, I'll just have to admit defeat. Kid, 
you wanna take my place?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA06ADS`, name2: `YU11BDS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C205)`"Me?"`;
   Takeshi`"Yeah. I'm begging you. I'll be the referee."`;
   `The Kid had been talking with You but he came 
over.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C206)`"Alright! Game time!"`;
   Kid(T1C207)`"Don't be too hard on me."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C208)`"Oh, what game are you playing? It looks 
fun..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora, who appeared taken with the game, also 
came over.`;
   Takeshi`"It's a staring contest - canine vs. human."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C209)`"Well, that seems pretty incredible."`;
   `Sora covered her mouth with her hand and 
giggled.`;
   Takeshi`"Actually, Pipi is incredible...I think I'm 
gonna have nightmares about this."`;
   `I shuddered.`;

});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `CO02ADS`, name2: `KA01ADS`, name3: `SO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"And now, in their first contest we have the 
Champion Pipi vs. the challenger, The Kid 
facing off in a face fight..."`;
   Takeshi`"I want to get underway, but first..."`;

});
fgload({ id: 1, name: `CO06ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C210)`"Let's hurry up and do this."`;
   Takeshi`"Well, I think we need to decide what we're 
going to call the kid here. Is 'Kid' okay? 
What do you think?"`;

});
fgload({ id: 2, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C211)`"Well, I don't know..."`;

});
fgload({ id: 1, name: `CO15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C212)`"We could call him Kiddo."`;

});
fgload({ id: 2, name: `KA11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C213)`"Uh...um...sure."`;
   Coco(T1C214)`"Kiddo Kiddo Kiddo"`;
   Takeshi`"Kiddo, huh.... You want me to call you that, 
too? There's gotta be a more normal name than 
that."`;
   Takeshi`"John."`;
   Takeshi`"It's a little random, but I like John Doe."`;

});
fgload({ id: 4, name: `SO07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C215)`"Don't you think that would be a little rude 
to all of the people named John?"`;
   Takeshi`"Well, it's only for a little while, so it 
doesn't have to be perfect."`;
   Sora(T1C216)`"Takeshi, I thought you wanted a more 
name-like name than Kiddo."`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADS`, name2: `KA07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C217)`"Well then...Coco will think up another name!"`;
   Coco(T1C218)`"Kiddo's other name could be ? "`;

});
fgload({ id: 1, name: `CO16ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C219)`"Pablo Diego Jose Francisco de Hora Juan 
Novecino Maria de Los Remedios..."`;
   Coco(T1C220)`"Siburiano Critiano de la Santeshima 
Trinidado Luis Picasso!"`;
   Takeshi`"That's too long! Anything longer than 
Yubiseiharukana Tanaka is out!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C221)`"Hey Takeshi! Don't just go blurting out my 
full name..."`;
   `You, who had been standing over by the shop, 
came walking directly toward me.`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU05BDS`, name2: `KA07ADS`, name3: `SO13ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"Ah! What a pain!"`;

});
if (l_blamed_the_tanuki == 0) goto(lbl_000010bb);
showTextbox();
text(() => {
   Takeshi`"In honor of the mascot, I name you Earl Myun 
of Hamburger!"`;

});
goto(lbl_000010c0);
let lbl_000010bb;
showTextbox();
text(() => {
   Takeshi`"In honor of the mascot, I name you John 
Raccoon Dog Smith!"`;

});
let lbl_000010c0;
showTextbox();
text(() => {
   Kid`"........."`;

});
fgload({ id: 4, name: `SO09ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C222)`"That's crude, Takeshi..."`;
   Pipi(PIPI_03)`"Woof?"`;

});
fgload({ id: 4, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C223)`"Well, let's see. Why don't I think of one... 
How about Melos?"`;
   Takeshi`"Why Melos?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU17BDS`, name2: `SO13ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C224)`"Well, he's got no memory."`;
   Takeshi`"Nah, it's bad luck to name him that..."`;
   Sora(T1C225)`"Sorry. I didn't mean to be so direct..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C226)`"What are you all bickering about?"`;
   `Tsugumi cut in.`;
   Tsugumi(T1C227)`"If we come up with some random name, it'll 
be a hassle when he remembers his real one."`;
   Tsugumi(T1C228)`"He is a kid..."`;
   Tsugumi(T1C229)`"So why don't we just stick with Kid?"`;
   `The conversation had come full circle.`;

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
eff_4f = 153;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
showTextbox();
text(() => {
   `The lights suddenly went out and then flashed 
back on.`;
   `There was a dull, heavy metallic echo....`;
   `At the same time, there was a slight tremor.`;

});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   Takeshi`"What's that?"`;

});
fgload({ id: 4, name: `TU03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C230)`"That tremor felt like it came from below..."`;
   You(T1C231)`"Below? I wonder if something happened below?"`;
   Sora(T1C232)`"I will try to investigate."`;
   `Saying that, Sora held her hands out in front 
of her.`;

});
hideTextbox();
playBGM({ num: 12, volume: 100 });
playSFX({ name: `SE06_00`, a1: 0, volume: 100 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 7;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
openShakeScreenAnim();
fgload({ id: 1, name: `SO17ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C233)`"Oh...!"`;
   `Just then a strong lateral vibration jolted 
the floor.`;
   `The holographic window that Sora had conjured 
vanished.`;

});
fgload({ id: 2, name: `YU14BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C234)`"Sora!"`;

});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADS`, name2: `YU13BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C235)`"It's alright.... The monitor is back online, 
I am initiating a scan..."`;

});
playSFX({ name: `SE06_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Sora(T1C236)`"Water has penetrated the material storage 
space in Sector 6 of Dritte stock."`;
   Takeshi`"It's flooding? I didn't see any signs of 
that when I made the rounds..."`;

});
hideTextbox();
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
eff_4f = 0;
eff_3b = 2;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 3;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
fgload({ id: 2, name: `YU06BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Boom, boom, boom...`;

});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 2;
showTextbox();
text(() => {
   `The sound of metal giving way accompanied the 
massive shaking.`;
   `Scenes from old movies of luxury liners being 
swallowed by the ocean flashed across my mind.`;

});
hideTextbox();
playSFX({ name: `SE06_02`, a1: 0, volume: 95 });
eff_4f = 0;
eff_3b = 2;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 3;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
showTextbox();
text(() => {
   Sora(T1C237)`"There is damage to the passageways 
connecting the sectors."`;
   Sora(T1C238)`"Multiple leak areas, and increasing."`;
   Tsugumi(T1C239)`"Hey..."`;
   Tsugumi(T1C240)`"Don't you think we should grab hold of 
something?"`;
   You(T1C241)`"Yes. Everyone grab something and steady 
yourself!"`;
   Takeshi`"O-okay."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   `I reached out for a support pillar nearby.`;
   `Coco crouched down as she squeezed Pipi 
tightly.`;
   `Everyone held their breath.`;

});
hideTextbox();
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Boom, boom, boom....`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Boom, boom, boom.`;

});
hideTextbox();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 7;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
showTextbox();
text(() => {
   `Bam!`;

});
playSFX({ name: `SE09_00L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `A huge shockwave rocked us.`;
   `The whole floor, or rather the whole of LeMU 
shook.`;
   `I thought I would be thrown into the ceiling 
one second or pulverized into the floor the 
next.`;

});
hideTextbox();
showTextbox();
text(() => {
   `The souvenir shop in front of me trembled.`;
   `The display of dishes in the shop fell to the 
floor and shattered...`;
   `The pile of empty cans clattered and gave 
way...`;
   `A stuffed animal made a beeping noise as it 
fell on its stomach.`;
   `We all steadied ourselves against the shaking.`;
   `All we could do was endure it.`;
   `No one said anything.`;
   `We could hear the squeal of steel twisting.`;

});
hideTextbox();
stopSFX()
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Boom, boom, boom.`;

});
hideTextbox();
eff_4f = 0;
eff_3b = 2;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 3;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Boom, boom, boom...`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   `Finally the sound seemed to get further away.`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The vibrations also gradually subsided.`;

});
removeBG({ mode: BLACK, transition: 2 });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
stopBGM();
delay({ interval: 120 });
playBGM({ num: 16, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
clock(`21:35`);
showTextbox();
text(() => {
   `Sora announced that the second wave of 
flooding had finished.`;
   `Still wary, we headed downstairs.`;
   `We carefully moved forward down the wet and 
slippery stairs.`;
   `With every step, the scent of seawater seemed 
to grow stronger.`;

});
bgload({ name: `BG26B1L`, transition: 20 });
showTextbox();
text(() => {
   `We arrived at Dritte stock - basement floor 
three.`;
   `The water level in the corridor reached 
around my shin...`;
   `It must have been around six inches deep.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU13BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C242)`"LeMU can't pump out all this water?"`;
   Sora(T1C243)`"It appears not."`;
   Sora(T1C244)`"All major areas where leaking has occurred 
have been closed off by shutting a partition, 
however, water is continuing to flow in 
through small ducts, even now."`;
   Sora(T1C245)`"The water clearing pumps are operating at 
full capacity, but to make the water level 
recede..."`;
   Takeshi`"The big hole will have to be plugged. Is 
that what you were gonna say?"`;
   You(T1C246)`"But with the partition shutting off the 
sector of the original leak, there is no way 
to access it..."`;
   Sora(T1C247)`"Yes, that is so..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG15B1`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
showTextbox();
text(() => {
   `We entered the Central Control Room.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Sora checked the damage via the LeMMIH console.`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C248)`"But I must sincerely apologize..."`;
   Sora(T1C249)`"Even though the second flooding was about to 
occur, I failed to notice and warn you all..."`;
   `As she manipulated the keys, Sora bowed her 
head looking deeply apologetic.`;

});
choice(
   `Hey, everybody makes mistakes`,
   `It's not your fault, Sora`,
);
switch (l_choice) {
   case 0: goto(lbl_000016e7);
   case 1: goto(lbl_000016f8);
}
let lbl_000016e7;
showTextbox();
text(() => {
   Takeshi`"Hey, everybody makes mistakes."`;
   Takeshi`"We may have even overlooked the cause of 
this when we were checking around a little 
bit ago.... We're all in this together."`;
   Takeshi`"Everyone is fine, so let's just consider 
ourselves lucky."`;
   Sora(T1C250)`"I am really sorry..."`;
   `Sora answered this without looking away from 
the monitor.`;
   Sora(T1C251)`"Thank you for being so kind, Takeshi."`;
   Takeshi`"It's nothing..."`;
   `I scratched the tip of my nose.`;

});
removeFG({ id: 1, useAnim: true });
goto(lbl_0000175a);
let lbl_000016f8;
l_said_it_is_not_soras_fault = 1;
showTextbox();
text(() => {
   Takeshi`It's not your fault, Sora`;
   Takeshi`"We may have even overlooked the cause of 
this when we were checking around a little 
bit ago.... We're all in this together."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C252)`"Not at all!"`;
   `Sora answered this without looking away from 
the monitor.`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C253)`"My calculations and predictions were 
irresponsible..."`;
   Takeshi`"Don't you go trying to blame yourself for 
this."`;
   Takeshi`"Everyone is fine, so let's just consider 
ourselves lucky."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `With her head bowed in silence Sora kept 
working.`;

});
let lbl_0000175a;
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   `Finally her hands stopped typing the keyboard.`;
   `Sora turned and stood up.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C254)`"I have gauged our situation. I will now 
display it."`;
   Sora(T1C255)`"Everyone, please do not be shocked or let 
this get you down..."`;

});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C256)`"Sora, when you say it like that it makes us 
nervous."`;

});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C257)`"Oh, I'm sorry..."`;
   You(T1C258)`"Still, I'm fairly confident that there are 
few things that will shock me."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C259)`"I see. In that case -"`;
   `I thought everyone was probably numbed by 
what we had experienced so far.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T1C260)`"Simply put, the cause of the second influx 
of water we experienced a short while ago..."`;
   Sora(T1C261)`"The sectors that were able to avoid damage 
during the first flooding were isolated from 
the flooded sections and forced ventilation 
created a sudden reduction in air pressure."`;
   Sora(T1C262)`"However, the inundated sectors were not able 
to withstand the weight of the water and 
tilted, causing a rupture of the joint in the 
adjacent sector."`;
   Sora(T1C263)`"The gap in the internal and external air 
pressure caused seawater to be sucked into 
the complex through the rupture."`;
   Sora(T1C264)`"So many of the sectors that were stable 
until that moment, were instantly flooded..."`;

});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   Sora(T1C265)`"That is the current situation of Dritte 
stock."`;
   Sora(T1C266)`"This blinking area is the Central Control 
Room. And..."`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
bgload({ name: `MAP2F_A2`, transition: 30 });
delay({ interval: 90 });
showTextbox();
text(() => {
   Sora(T1C267)`"This is the status of Zweite stock."`;
   Kid`"........."`;
   Tsugumi`"........."`;
   Takeshi`"You serious?"`;
   You(T1C268)`"You mean nearly half of LeMU is underwater."`;

});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   Sora(T1C269)`"There are three sectors in Dritte that are 
not flooded."`;
   Sora(T1C270)`"The area displayed in the center of this map 
is Sector 8, where we are."`;
   Kid(T1C271)`"Huh? It looks like the map is displaying 
roughly two areas, but where is the third 
sector?"`;
   Sora(T1C272)`"Actually, due to a flaw in the system, a 
detailed map cannot be displayed..."`;
   Sora(T1C273)`"One part of Sector 4, diagonally above 
Sector 8, is stable."`;
   Kid(T1C274)`"There's no way to get there?"`;
   Sora(T1C275)`"Correct. It is impossible."`;
   Kid(T1C276)`"Why?"`;
   Sora(T1C277)`"Because all of the corridors connecting the 
sectors are submerged."`;
   Sora(T1C278)`"In terms of distance, it is roughly 100 
yards."`;
   Sora(T1C279)`"I don't think there is anyone among you that 
is capable of swimming 100 yards without 
breathing."`;
   Sora(T1C280)`"Therefore I say it is impossible."`;
   Sora(T1C281)`"Furthermore...even if someone did reach 
Sector 4, I don't think it would improve our 
situation at all."`;
   Kid(T1C282)`"?"`;
   Sora(T1C283)`"Section 4 is in the same predicament as here."`;
   Sora(T1C284)`"All of the emergency stairs to get to the 
floating island are completely flooded."`;
   Tsugumi(T1C285)`"So, even going there would be a waste?"`;
   Sora(T1C286)`"That's correct."`;
   Kid(T1C287)`"Well, then there's nothing we can do..."`;
   Tsugumi(T1C288)`"So we should forget about Sector 4."`;
   Takeshi`"We'll just have to sit quietly and wait for 
help to come."`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
delay({ interval: 120 });
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
setSceneTitle({ index: 8 });
clock(`21:48`);
showTextbox();
text(() => {
   Takeshi`"Well, I guess we can take it easy for now."`;
   `I left the room and hit the food stand, 
snagging some cola for everyone.`;
   Takeshi`"Alright, cola time! I'm gonna toss everybody 
one! Ready?"`;
   Takeshi`"Oops. I got one, two, three, four..."`;
   Takeshi`"Five...I'm one short!"`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C289)`"Oh, I don't need one."`;
   Takeshi`"Oh don't worry about it. I'll go get one 
more. You can have mine."`;
   Sora(T1C290)`"No, really. I'm fine. I'm not thirsty and I 
don't really like cola..."`;
   `Sora smiled.`;
   Takeshi`"Well, in that case..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I tossed out a cola to everyone in order.`;
   `You, Tsugumi and the Kid all took one.`;

});
fgload({ id: 1, name: `KA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But then the Kid started shaking his can!`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"S-stupid! What do you think you're doing?"`;

});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C291)`"Huh?"`;
   Takeshi`"If you do that, it's going to explode 
everywhere!"`;
   Kid(T1C292)`"R-really? Is it dangerous?"`;
   Takeshi`"Did you forget that cola is carbonated?"`;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C293)`"I'm sorry."`;
   Takeshi`"Geez. I'll give you mine. Here."`;
   `I switched cans with him.`;
   `This time, the Kid slowly lifted the tab 
without shaking the can.`;

});
hideTextbox();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Fwashhhhaaaa!`;
   `The cola erupted powerfully. The rest of us 
hurriedly jumped to get out of the way.`;
   `The Kid got a blast of cola in the face.`;

});
fgload({ id: 1, name: `KA07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Takeshi`"Hey, are you alright? Just so you know, that 
wasn't my doing..."`;

});
fgload({ id: 1, name: `KA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C294)`"This cola...it's sweet..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1C295)`"Oh, guys! You should be more careful."`;
   `You said as if she were at her wit's end.`;
   You(T1C296)`"These cans contain pop made with special 
gas so that they are made at 6 atmospheres."`;
   You(T1C297)`"Weren't you listening when they said that the 
bringing in and taking home of canned 
beverages was strictly prohibited?"`;
   Takeshi`"Whoa! I didn't know that! I must have missed 
it!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `It was true. Normally, the inside of the LeMU 
complex was maintained at 6 atmospheres using 
a mixture of gases.`;
   `Now that the floor had become 1 atmosphere, 
the gas in the can was still highly 
pressurized and the gap in pressure with the 
atmosphere made them burst when opened.`;

});
multifgload2({ id1: 1, id2: 2, name1: `KA01AWM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T1C298)`"I didn't know that."`;
   `"The Kid wiped his face with a nearby towel."`;
   Takeshi`"...Hey, Kid. No one would expect you to know 
that."`;
   Takeshi`"You, you gotta tell Mr. Amnesia here these 
things..."`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C299)`"Alright, alright. I didn't notice until 
after the fact."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Coco`"........."`;
   Takeshi`"Huh? Coco, what's wrong?"`;

});
fgload({ id: 1, name: `CO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Coco was embracing Pipi and looked downcast.`;
   `Thinking about it, I realized that Coco 
hadn't said anything for a while.`;
   `It didn't seem like her.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey, aren't you going to drink your cola?"`;
   `I held out a can of cola in front of Coco.`;
   Takeshi`"It's a little warm, but it's the best I can 
do."`;
   Coco(T1C300)`"I don't want it..."`;
   `Coco mumbled this.`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `CO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1C301)`"I don't feel very good..."`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   Coco(T1C302)`"I've been thinking about it since before..."`;
   Coco(T1C303)`"And I haven't been able...to think of any 
jokes..."`;
   Takeshi`"Jokes?"`;
   `I peered down at Coco.`;
   `She didn't look too good.`;
   `She was sweating and having a hard time 
breathing.`;
   Takeshi`"Hey, you don't look very good..."`;
   You(T1C304)`"Takeshi, get outta the way!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You came rushing over to Coco, pushed me out 
of the way and put her hands on the girl's 
shoulders.`;

});
if (l_is_coco_route == 0) goto(lbl_00001b06);
if (l_coco_point != 1) goto(lbl_00001b06);
l_choice = 0;
jump(`TC1D`);
let lbl_00001b06;
multifgload2({ id1: 1, id2: 2, name1: `CO08ADM`, name2: `YU13BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C305)`"Coco...do you have a headache?"`;
   Coco(T1C306)`"Yeah, a bit. I feel kinda dizzy..."`;
   You(T1C307)`"What about if you swing your arms 
around - does that hurt?"`;
   Coco(T1C308)`"Just a little..."`;
   `It looked like it hurt more than a little.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO17ADS`, name2: `CO08ADS`, name3: `YU13BDS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Sora(T1C309)`"I suspect it might be decompression 
sickness, due to the sudden loss of 
pressure on the floor."`;
   You(T1C310)`"Yeah, it could well be."`;
   `Pipi was looking up at Coco worriedly.`;

});
fgload({ id: 4, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C311)`"Let's get her to the Zweite infirmary. 
Takeshi, carry her."`;
   Takeshi`"Huh?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
multifgload2({ id1: 1, id2: 2, name1: `CO08ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C312)`"On your back! Hurry up and squat down!"`;
   Takeshi`"Alright, alright!"`;
   You(T1C313)`"I want you to carry Coco!"`;
   Takeshi`"I got it! 
You don't have to scream in my ear!"`;

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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We were rushing up to Zweite stock some 
56 feet above us.`;
   `Coco held onto my back from behind. You and 
Tsugumi supported her from the sides.`;
   `Sora led the way and the Kid brought 
up the rear.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   `We emerged at the second floor emergency 
corridor.`;
   Takeshi`"Hey, are you sure we shouldn't take a normal 
corridor?"`;

});
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C314)`"Please proceed straight ahead. This is a 
shortcut."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `The emergency corridor was directly connected 
to the lift below the infirmary.`;
   Takeshi`"Whew! We made it. Let's get her up there."`;
   Sora(T1C315)`"No, Takeshi. Please go ahead into that room 
there."`;
   Takeshi`"Huh?"`;

});
bgload({ name: `BG10A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU04BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C316)`"This is a medical compression chamber. We 
can treat decompression sickness here."`;
   You(T1C317)`"Lay Coco down in there."`;
   Takeshi`"Oh, alright..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Coco lay on the bed.`;
   `The Kid and Tsugumi watched all of this from 
beside me.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"So, You, what are you gonna do in this tiny 
room? Isn't it a little cramped for examining 
her?"`;
   `The space was so small that with everyone in 
there we could hardly move.`;
   You(T1C318)`"I'm not going to do anything."`;
   Takeshi`"...What're you talking about?"`;
   You(T1C319)`"We're going to have Coco relax in this room 
for a while."`;
   Takeshi`"??"`;
   `I tilted my head, confused.`;
   Sora(T1C320)`"This is hyperbaric oxygen therapy. Allow me 
to explain."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C321)`"Decompression sickness occurs when there is 
a sudden change in the surrounding air 
pressure and gas bubbles that can't be 
discharged accrue in the body."`;
   Sora(T1C322)`"Gas becomes air bubbles and these gather in 
tissues or veins. When gas bubbles remain 
inside the body, the oxygen respiration 
efficiency drops dramatically."`;
   Takeshi`"So...no matter how many deep breaths you 
take it feels like you are suffocating?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T901)`"That is correct. But also, if any nitrogen 
which had dissolved in the blood turns to gas, 
it could produce a thrombus, or blood clot.`;
   Sora(C1T902)`Of course this could hinder blood circulation 
which is very dangerous...."`;
   Sora(T1C324)`"So we seal this room and pump in a high 
concentration of oxygen slowly taking it up to 
roughly 3 atmospheres..."`;
   Sora(T1C325)`"Then we slowly decompress you back down to 1 
atmosphere."`;
   Sora(T1C326)`"Using this difference in pressure we 
dissolve the gas bubbles in her body 
back into the blood, where she get 
rid of them naturally by breathing."`;
   Takeshi`"So basically, you make us like a can of cola 
that won't blow up..."`;
   Sora(T1C327)`"Yes, precisely."`;
   Takeshi`"Okay, I got it."`;
   `I lifted my hand.`;
   Takeshi`"Gosh that dash up the stairs sure wore me 
out..."`;
   `I heaved a breath.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1C328)`"Oh, Takeshi, are you in pain at all?"`;
   Takeshi`"Huh, me? My muscles feel kinda sore and I'm 
a bit sluggish, but..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1C329)`"Hey, Takeshi, don't you think you should 
probably go in the room, too?"`;
   You(T1C330)`"In light cases of decompression sickness, 
you are not necessarily aware of it 
immediately."`;
   Takeshi`"After you figure out you're in trouble, it's 
too late...?"`;
   You(T1C331)`"Yeah. And the symptoms can be drawn out."`;
   Sora(T1C332)`"Yes.... Just to be on the safe side, I want 
you all to enter the room."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `The decompression process took place over 
several hours.`;
   `Coco lay on the only bed.`;
   `The Kid, You, Pipi and I sat next to her. `;
   `It was cramped...`;
   `We were like sardines in a can. There was 
nowhere to move.`;

});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 120 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
bgload({ name: `BG10A1`, transition: 20 });
clock(`23:54`);
showTextbox();
text(() => {
   `I wondered what time it was.`;
   `I took out my PDA and checked.`;
   `11:54 p.m.....`;
   `I was sleepy.`;
   `Coco was sleeping and her breathing was 
relaxed. It looked like she was doing better.`;
   `It didn't look like You or the Kid were 
sleeping, but they sat quietly with 
their eyes closed.`;
   `Pipi had crawled under the bed.`;
   `Sora had sealed the hatch from outside and was 
adjusting the pressure as necessary.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Takeshi`"Sora, what about you? Don't you need to be 
treated?"`;
   `Before the process had started I had asked 
Sora this.`;
   Sora(T1C333)`"No. I'm used to this..."`;
   Sora(T1C334)`"Oh, also...everyone, please remove your voice 
converters during the repressurization process."`;
   Sora(T1C335)`"They are designed to protect your eardrums 
from the change in air pressure...however 
during pressurization they can interfere."`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
let lbl_00001e3c;
showTextbox();
text(() => {
   `I removed the earphones that I had become 
completely used to and held them in my hand.`;
   `Sora still stood just outside the hatch window.`;
   `Tsugumi...wasn't inside or visible outside 
the room. She had left just before the 
pressurization process had started.`;

});
choice(
   `Where did she go?`,
   `When was Sora going to sleep?`,
);
switch (l_choice) {
   case 0: goto(lbl_00001e64);
   case 1: goto(lbl_00001f3e);
}
let lbl_00001e64;
l_tsugumi_point += 2;
showTextbox();
text(() => {
   `Where the heck did Tsugumi go, anyway?`;
   `Just before the hatch was closed, she had 
suddenly started talking.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
delay({ interval: 30 });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Tsugumi(T1C336)`"Uh..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C337)`"I'm leaving."`;
   Takeshi`"Hey, where are you going?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C338)`"There...is a place that 
I just realized I need to go to."`;
   Takeshi`"Where? Treatment is more urgent than that."`;
   Tsugumi(T1C339)`"I don't need it."`;
   Takeshi`"Tsugumi, that's irresponsible and selfish!"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C340)`"I can't stay cooped up in this cramped 
place..."`;
   Tsugumi(T1C341)`"Well, I won't go off escaping alone, so just 
take it easy."`;
   Takeshi`"That's not the point."`;
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1C342)`"To be blunt, I don't have the patience for 
you. Any of you."`;
   `Tsugumi ignored You and me and went off 
somewhere.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
delay({ interval: 30 });
removeFG({ id: 1, useAnim: true });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `Sora had reported to us that she was 
somewhere on the floor and safe...`;
   `But it still bothered me a bit.`;
   `But it was Tsugumi after all. I was sure she'd 
probably be back in a little while saying 
something else.`;
   `That was what I thought, but nearly two hours 
had passed.`;
   `(I'll wait just a little bit longer.)`;

});
goto(lbl_00001f4e);
let lbl_00001f3e;
l_sora_point += 1;
showTextbox();
text(() => {
   `When was Sora going to sleep?`;
   `This simple doubt jumped into my mind.`;
   `She was doing minute, complex work nonstop 
and she was always on her feet.`;
   `Maybe she never got tired?`;
   `When I spoke with her over the interphone and 
asked her if she were alright, she laughed 
and said she was just fine.`;
   `And she was still standing outside the room 
as if she were a sentinel guarding it.`;
   `Her back was straight and she never slouched, 
always looking like she was at attention.`;
   `I wondered if what she had said about being 
fine not sleeping days on end was true...?`;
   `(That really bothers me...)`;
   `I thought that I'd follow up on it later.`;

});
let lbl_00001f4e;
showTextbox();
text(() => {
   `Even as I thought that, my eyelids 
got heavier and heavier.`;
   `(But still....even so...)`;
   `(Today...really was...an eventful day...)`;
   `And then I fell away into slumber.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopSFX()
delay({ interval: 150 });
l_choice = 0;
jump(`T_2A`);
