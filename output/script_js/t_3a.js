varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 3`);
varop(`(28 0a a4) b2 := (00) 3`);
setDialogBoxColor(GREEN);
setSceneTitle({ index: 15 });
chapterCutin({ name: `00000000` });
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
clock(`5:49`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I awoke from my slumber.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt something cold and hard...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered slouching in the chair and 
slumping forward on the table.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even then, the sleep that I'd gotten was far 
better than the day before.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, g'mornin'..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A000`); appendText; 
   //You
   You`"Oh, good morning Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It appeared that You had gotten up just 
before me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What time is it?"`;
   waitForClick; clearText; marker; sound(`T3A001`); appendText; 
   //You
   You`"Almost 5:50 a.m. I think..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You sure are an early riser."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A002`); appendText; 
   //You
   You`"What are you talking about? You're just 
lazy..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, You let out a big yawn.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A003`); appendText; 
   //You
   You`"Then again, being all tense for so long just 
gets you tired. It's probably better to sleep 
when you can."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A004`); appendText; 
   //You
   You`"Being in a situation like this, we really 
need to keep well rested."`;
   waitForClick; clearText; marker; sound(`T3A005`); appendText; 
   //You
   You`"'Cause when it comes down to it, if we can't 
think our way out of this situation we're in 
trouble!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, I said that yesterday!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A006`); appendText; 
   //You
   You`"Yeah...I suppose you did..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dodging the subject, You laughed slightly.`;
   waitForClick; clearText; marker; sound(`T3A007`); appendText; 
   //You
   You`"Hey, since you're up, why don't you go wash 
your face?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, I might as well..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah! Hey, you didn't write on my face again 
did you...!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I instinctively rubbed my cheeks.`;
   waitForClick; clearText; marker; sound(`T3A008`); appendText; 
   //You
   You`"Don't worry, I didn't write anything."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stood up slowly and checked my surroundings.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco had arranged some chairs to create a 
makeshift bed. She was asleep on top of them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And at the base of her pillow, Pipi's neck was 
cocked to the side.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like he was sleeping too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I got up, squeezed by the sleeping Coco and 
opened the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A009`); appendText; 
   //Kid
   Kid`"Hey."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Oh, mornin' Kid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A010`); appendText; 
   //Kid
   Kid`"Hey, don't look so depressed Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What are you talking about. I'm just sleepy's 
all."`;
   waitForClick; clearText; marker; sound(`T3A011`); appendText; 
   //Kid
   Kid`"Well, a lot's happened in the last couple 
of days. Are you tired?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm alright. I just need to wake up is all. 
See ya."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
delay({ interval: 30 });
playSFX({ name: `SE01_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I headed to the nearest bathroom.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water covering the floor seeped into my 
shoes, which had only just finished drying. 
They were wet all over again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My socks got heavy and clung to my feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My pace slowed.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"......."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Argh! What a freakin' pain!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`SPLASH!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scooping up water from around my feet, I 
splashed it on my face.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whoa, that's cold...!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was shivering, but at the same time, my 
whole body felt awake.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So that's why people wash their faces in the 
morning...`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I went back to the Conference Room, the 
conversation quickly turned to what we were 
going to eat.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi and Sora aren't here, you sure it's 
okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A012`); appendText; 
   //You
   You`"Yeah...but they're sure to show up soon."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, knowing those two, you're probably 
right."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to wake up Coco.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, get up. It's morning."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook her shoulder gently.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A013`); appendText; 
   //Coco
   Coco`"Funyuu...hmmmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rubbing her eyes, Coco got up slowly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A014`); appendText; 
   //Coco
   Coco`"Oh, good morning...Brother..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, yeah. Coco you have a brother? But, hey, 
you got the two of us mixed up..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A015`); appendText; 
   //Coco
   Coco`"No...brother..."`;
   waitForClick; clearText; marker; sound(`T3A016`); appendText; 
   //Coco
   Coco`"We need to get ready, or we'll be late for 
school..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was still half in dreamland.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Late for school?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A017`); appendText; 
   //Coco
   Coco`"Well, that's just the setting it is..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, listen..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stop messing around, we're going to eat."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A018`); appendText; 
   //Coco
   Coco`"Ah.... Okay, Takepyon."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
clock(`6:15`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We all made our way to the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Everyone okay with hotdogs?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO06ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A019`); appendText; 
   //Coco
   Coco`"Hotdogs?"`;
   waitForClick; clearText; marker; sound(`T3A020`); appendText; 
   //You
   You`"They have hotdogs here?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, I found a few in the back of the 
fridge. Must've been on the 'stealth menu.'"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was relegated cook duty again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A021`); appendText; 
   //You
   You`"Hey, Takeshi, are they done yet?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A022`); appendText; 
   //You
   You`"Why do I have to be so hungryyy?"`;
   waitForClick; clearText; marker; sound(`T3A023`); appendText; 
   //You
   You`"My stomach is going to cave in..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A024`); appendText; 
   //You
   You`"I'm going to become two dimensional."`;
   waitForClick; clearText; marker; sound(`T3A025`); appendText; 
   //You
   You`"And float away on the wind."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Would you shut up already?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A026`); appendText; 
   //You
   You`"Ha, ha, ha..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was inside the kiosk that had been made to 
look like a submarine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sausages were sizzling in a frying pan.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They sold sub sandwiches here, so I guess the 
exterior of the place was a sorry play on that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Why am I thinking about...stupid things like 
that...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`In a little while, the place started to smell 
great.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I carefully placed a sausage in the toasted, 
lightly buttered hotdog buns.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, whoever wants to eat, get in line!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A027`); appendText; 
   //Coco
   Coco`"I'm first!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh!? Well, here ya go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A028`); appendText; 
   //Coco
   Coco`"Thank you!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Help yourself to ketchup and mustard."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A029`); appendText; 
   //Kid
   Kid`"Uh, I'd like one too..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A030`); appendText; 
   //You
   You`"Hey, wait in line! The next person is M-E-!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This was probably the way things usually were 
at this shop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There still wasn't any schedule as to when we 
might get out of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But in the meantime, we'd stopped thinking 
about the difficult and negative things.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A031`); appendText; 
   //Kid
   Kid`"I'm not sure why, but you look like you're 
having fun."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who, me? You think so? Fun...I guess maybe..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wiped the sweat caused by the heat of 
cooking from my face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO02ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A032`); appendText; 
   //Coco
   Coco`"Yeah, you look like you might even be 
enjoying your life here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder how that'd feel...I guess it'd be 
kind of fun, owning a stand like this!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A033`); appendText; 
   //Kid
   Kid`"Owning...a stand..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid stifled a laugh.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A034`); appendText; 
   //Coco
   Coco`"Takepyon, you really do look like you work 
here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hotdogs, get your hotdogs! They're on the 
house!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A035`); appendText; 
   //Coco
   Coco`"You don't think, that maybe you could have 
sold hotdogs in a past life?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Aw shucks, ma'am you're just sayin' that..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A036`); appendText; 
   //You
   You`"No, Coco, I don't think he was a hotdog man, 
I think he was..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A037`); appendText; 
   //You
   You`"...a sandwich man?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, come on, You!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A038`); appendText; 
   //You
   You`"A ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Ha, ha, ha."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I suppose we were just happy to be eating hot 
food.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could worry about the details after our 
stomachs were full.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For the moment, we were enjoying eating that 
simple meal.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
clock(`6:38`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After spending some time laughing...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A039`); appendText; 
   //Kid
   Kid`"Ah...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid suddenly looked up at the ceiling.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA14ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A040`); appendText; 
   //Kid
   Kid`"Wh-what's that...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He blinked, his eyes were focused on the 
ceiling as if he had seen something.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"H-hey, what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My curiosity piqued, I asked him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And following his gaze, I looked up at the 
ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, I couldn't see anything out of the 
ordinary...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A041`); appendText; 
   //Kid
   Kid`"I wonder..."`;
   waitForClick; clearText; marker; sound(`T3A042`); appendText; 
   //Kid
   Kid`"I don't know what it was, 
but I swear I saw something."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Saw something? Like what?"`;
   waitForClick; clearText; marker; sound(`T3A043`); appendText; 
   //Kid
   Kid`"Uhh...well, I didn't really see it..."`;
   waitForClick; clearText; marker; sound(`T3A044`); appendText; 
   //Kid
   Kid`"I just have a bad feeling...
about the second floor...somewhere."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the heck are you talking about?"`;
   waitForClick; clearText; marker; sound(`T3A045`); appendText; 
   //Kid
   Kid`"Um, I think we should check that floor one 
more time..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`His eyes looked upward again and started 
mumbling incoherently. Concerned, I shook his 
shoulder.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then he snapped out of it.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't worry about it. If something's up, Sora 
would warn us about it, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A046`); appendText; 
   //Kid
   Kid`"Yeah...you're right...but still..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Looks like I'm not the only one who's tired."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then Tsugumi appeared out of nowhere.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A047`); appendText; 
   //Tsugumi
   Tsugumi`"What just happened?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nah, we were all just eating hotdogs. 
Look, I made one for you, too."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took it without saying anything.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 3, volume: 100 });
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I could hear the sound of her taking the 
hotdog out of its wrapper.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I watched her motions carefully.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swallowed, watching her...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi placed the wrapper on the counter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Slowly, with the ketchup in her right hand 
and the mustard in her left, she squeezed the 
tubes. Their contents gushed out.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey, Tsugumi!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A048`); appendText; 
   //Tsugumi
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hotdog was entirely covered in red and 
yellow.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You eat that much mustard and...it'll kill 
you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A049`); appendText; 
   //Tsugumi
   Tsugumi`"...Really?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi bit into the hotdog.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey? Is it spicy? I bet it's spicy?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A050`); appendText; 
   //Tsugumi
   Tsugumi`"Not really."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're probably thinking to yourself 'Dang, 
I put way too much on!' Right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A051`); appendText; 
   //Tsugumi
   Tsugumi`"...I don't...really care."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And after that she continued eating, in 
silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, I thought I'd seen a glimmer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of eyes slightly starting to tear.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, don't strain yourself."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A052`); appendText; 
   //Tsugumi
   Tsugumi`"I'm not. I'm finished."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh..."`;
   waitForClick; 
});
choice(
   `Where'd you go this morning?`
   `Do you want another one?`
);
switch (choice) {
   case 0: goto(lbl_0000067c);
   case 1: goto(lbl_000006e1);
}
let lbl_0000067c;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"By the way, where'd you go this morning?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A053`); appendText; 
   //Tsugumi
   Tsugumi`"...Why? What do you want to know that for?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, when everyone went to bed, you were 
still with us, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But when we got up, we couldn't find you 
so..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A054`); appendText; 
   //Tsugumi
   Tsugumi`"So what..."`;
   waitForClick; clearText; marker; sound(`T3A055`); appendText; 
   //Tsugumi
   Tsugumi`"It's none of your business."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not true."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm in charge of breakfast, right? So, I just 
wanted to know if you wanted some."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A056`); appendText; 
   //Tsugumi
   Tsugumi`"I ate, okay? Enough already."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What? No, uh, I mean, YEAH, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It was on my mind, you know? I guess I was 
worried..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wondered, what happened to you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where'd you go? Where do you always 
disappear to?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I guess I just wanted to know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, I got it...You just had to find a place 
to go by yourself, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As usual these questions were getting me 
nowhere.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, if you don't want to answer, don't 
worry about it."`;
   waitForClick; clearText; 
});
goto(lbl_00000736);
let lbl_000006e1;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, you want another one? I can make you 
one."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A057`); appendText; 
   //Tsugumi
   Tsugumi`"No thanks."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You always just wolf your food down. I don't 
know, but there just isn't much satisfaction 
in cooking for you."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Besides, with all that ketchup and mustard 
on it, you probably can't even taste it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A058`); appendText; 
   //Tsugumi
   Tsugumi`"It doesn't matter how it tastes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Of course it matters!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm doing my best to show you how real 
cookin' tastes!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You just wait, I'll cook you up a meal that 
will wake up your tastebuds...!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A059`); appendText; 
   //Tsugumi
   Tsugumi`"I've had enough to eat, okay?"`;
   waitForClick; clearText; marker; sound(`T3A060`); appendText; 
   //Tsugumi
   Tsugumi`"I'm full..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Hmph."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, if you say so."`;
   waitForClick; clearText; 
});
let lbl_00000736;
hideTextbox();
stopBGM();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_cb_0_6`);
varop(`(28 0a a2) 3d := (00) 7`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 4`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boooooom!`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly, a low metallic sound reverberated 
throughout the installation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a dull, muffled sound.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Wh-what was that!?"`;
   waitForClick; clearText; marker; sound(`T3A061`); appendText; 
   //Tsugumi
   Tsugumi`"This whole place just shook...a little."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's eyes darted around, as if searching 
for something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Moments later the Kid and Coco, who'd both 
been resting in another room, appeared.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `CO06ADS`, name2: `KA08ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey kid, what was that?"`;
   waitForClick; clearText; marker; sound(`T3A062`); appendText; 
   //Kid
   Kid`"Uh, I don't know..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, this doesn't have anything to do with 
that 'bad feeling' you had earlier, does it?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid shook his head.`;
   waitForClick; clearText; marker; sound(`T3A063`); appendText; 
   //Kid
   Kid`"I don't know. Maybe we should ask Sora..."`;
   waitForClick; clearText; marker; sound(`T3A064`); appendText; 
   //Sora
   Sora`"Did you call for me?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`From out of nowhere Sora appeared in midair 
and floated down in front of us.`;
   waitForClick; clearText; marker; sound(`T3A065`); appendText; 
   //Coco
   Coco`"Ah, hi Sora!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Sora! Where were you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A066`); appendText; 
   //Sora
   Sora`"I'm terribly sorry. I overslept."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked embarrassed.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Overslept? But you're..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Nah, we'll save that for later."`;
   waitForClick; clearText; marker; sound(`T3A067`); appendText; 
   //Kid
   Kid`"Hey, did something just happen? There was an 
awful noise just now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A068`); appendText; 
   //Sora
   Sora`"One of the shafts that supports this floor 
has started to warp."`;
   waitForClick; clearText; marker; sound(`T3A069`); appendText; 
   //Kid
   Kid`"We didn't see any signs of it yesterday..."`;
   waitForClick; clearText; marker; sound(`T3A070`); appendText; 
   //Sora
   Sora`"Yes, well, it wasn't in my calculations. It 
appears as if the ocean currents may have 
influenced this outcome."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How dangerous are we talking about here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A071`); appendText; 
   //Sora
   Sora`"Well it should be within the margin of error, 
but...no, wait a second."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A072`); appendText; 
   //Sora
   Sora`"There is an anomaly in one the of 
pressure-regulating pipelines, 
at Zweite stock's warehouse."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"'What are pressure-regulating pipes?"`;
   waitForClick; clearText; marker; sound(`T3A073`); appendText; 
   //Sora
   Sora`"These pipelines are responsible for adjusting 
the pressure inside the multi-layered 
bulkheads comprising LeMU."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A074`); appendText; 
   //Sora
   Sora`"If any of them should rupture, for whatever 
reason, I am incapable of repairing them."`;
   waitForClick; clearText; marker; sound(`T3A075`); appendText; 
   //Sora
   Sora`"The anomaly is only slight, so you shouldn't 
have to hurry, but...I think it is best if 
someone goes to check on it. Would you 
please go for me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sure, leave it to me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I volunteered right away.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `TU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A076`); appendText; 
   //Tsugumi
   Tsugumi`"I'll go, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Unexpectedly, Tsugumi also agreed to go.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi? You sure?"`;
   waitForClick; clearText; marker; sound(`T3A077`); appendText; 
   //Tsugumi
   Tsugumi`"Well, if we're going to fix something, we'll 
need tools, right? I know my way around a 
workshop."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright.... Let's go."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(2, 1, 4);
multifgload3({ name1: `CO15ADS`, name2: `SO11ADS`, name3: `KA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T3A078`); appendText; 
   //Coco
   Coco`"I'll help too!"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   //Pipi
   Pipi`"Woof."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, you can come too Coco.... Hey. Does 
anyone know where You went?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around but didn't see You anywhere.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A079`); appendText; 
   //Kid
   Kid`"She went to the Control Room when things were 
shaking earlier."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A080`); appendText; 
   //Sora
   Sora`"We must have just missed each other."`;
   waitForClick; clearText; marker; sound(`T3A081`); appendText; 
   //Kid
   Kid`"I'll go and tell her that you're going up 
above."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright Kid. I'll leave it to you. Keep an 
eye on things from the Control Room, will 
you? Just to make sure we don't miss 
anything..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A082`); appendText; 
   //Sora
   Sora`"If something comes up, use LeMMIH to contact 
me."`;
   waitForClick; clearText; marker; sound(`T3A083`); appendText; 
   //Kid
   Kid`"Alright, see you!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bounding across the water's surface, the Kid 
shot down the corridor.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(4, 2, 1);
bgload({ name: `BG29A1`, transition: 20 });
clock(`6:57`);
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We climbed the emergency stairs quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if there wasn't any need to hurry, we 
couldn't afford to waste any time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi set her sights on the floor above and 
started lugging the heavy toolbox.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi followed right behind.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"By the way, Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked Sora, who was gliding alongside me, 
something that had been on my mind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A084`); appendText; 
   //Sora
   Sora`"Yes, Takeshi. What is it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You mention you'd 'overslept' earlier...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A085`); appendText; 
   //Sora
   Sora`"Y-yes, I'm sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's face went a deep shade of red.`;
   waitForClick; clearText; marker; sound(`T3A086`); appendText; 
   //Sora
   Sora`"Actually, there was a routine maintenance on 
one of the servers, where my data is stored. 
It initiated automatically this morning."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A087`); appendText; 
   //Sora
   Sora`"It appears that it took some time for the 
return processing. I was a little too 
optimistic on the preliminary check. I'm 
terribly sorry."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmm, so that's what it was."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...A, ha, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed for some reason.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A088`); appendText; 
   //Sora
   Sora`"Um, er, what...did I say something amusing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was confused.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, I just thought it was funny that even 
YOU could oversleep, Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A089`); appendText; 
   //Sora
   Sora`"Ahh...that's funny...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How should I put it?...It's cute."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A090`); appendText; 
   //Sora
   Sora`"'Cute'...!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah."`;
   waitForClick; clearText; marker; sound(`T3A091`); appendText; 
   //Sora
   Sora`"Sleeping in is...cute??"`;
   waitForClick; clearText; marker; sound(`T3A092`); appendText; 
   //Sora
   Sora`"That does not compute..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's eyes went round.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was because this particular use of 
the word wasn't in her database.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A093`); appendText; 
   //Sora
   Sora`"I've caused all of you such trouble..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, nobody's angry. Don't let it bother you."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Everyone knows that you're working hard."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A094`); appendText; 
   //Sora
   Sora`"Ah, yes. Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although Sora looked somewhat puzzled, her 
cheeks seemed to glow with joy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And for some reason I found that amusing too.`;
   waitForClick; clearText; marker; sound(`T3A095`); appendText; 
   //Sora
   Sora`"Really...is it...cute...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it was a charmingly innocent 
reaction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I supposed it was the kind of thing you'd call 
'cute.'`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We reached Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like there was anything wrong 
with the floor, but I could hear a small 
hissing sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I headed in the direction of the noise.`;
   waitForClick; clearText; 
});
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `SO03ADS`, name2: `CO11ADS`, name3: `TU11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Still, there wasn't any sign of this 
yesterday."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why do you think this happened all of a 
sudden?"`;
   waitForClick; clearText; marker; sound(`T3A096`); appendText; 
   //Sora
   Sora`"Well.... Everything doesn't always go 
according to plan..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A097`); appendText; 
   //Coco
   Coco`"Is it because everyone was bouncing around so 
much?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco said this casually.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Eh?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A098`); appendText; 
   //Coco
   Coco`"Well, because everyone was making such a 
commotion."`;
   waitForClick; clearText; marker; sound(`T3A099`); appendText; 
   //Coco
   Coco`"I wonder if that's why LeMU started to tilt?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I, I don't think so."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"......"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `CO15ADS`, name2: `TU10ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A100`); appendText; 
   //Tsugumi
   Tsugumi`"Ha, ha, maybe it is."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi laughed softly.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A101`); appendText; 
   //Tsugumi
   Tsugumi`"But if we make some repairs, everything 
should be fine."`;
   waitForClick; clearText; marker; sound(`T3A102`); appendText; 
   //Coco
   Coco`"Yeah, I guess so. Right, Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T3A103`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah. Don't worry about it, Coco."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A104`); appendText; 
   //Coco
   Coco`"Whew! I'm so relieved."`;
   waitForClick; clearText; marker; sound(`T3A105`); appendText; 
   //Coco
   Coco`"Woo hoo! Alright!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Rrruff! Rrruf!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `MAP2F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 10 });
openMapCommentAnim();
delay({ interval: 180 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We stood in front of the room where the 
hissing sound was coming from.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yep, the noise is coming from the warehouse."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A106`); appendText; 
   //Sora
   Sora`"I'm going to perform a scan to determine the 
status of the area."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that Sora disappeared.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The steam in there isn't going to explode, 
if we open the door, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`After I asked that, Tsugumi eyed the door 
uncertainly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A107`); appendText; 
   //Tsugumi
   Tsugumi`"Hmmm..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A108`); appendText; 
   //Tsugumi
   Tsugumi`"It's probably fine."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You can tell? Hey, you aren't..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A109`); appendText; 
   //Tsugumi
   Tsugumi`"I'm just saying what you want to hear."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora suddenly appeared near the door.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A110`); appendText; 
   //Sora
   Sora`"I've run the diagnostic."`;
   waitForClick; clearText; marker; sound(`T3A111`); appendText; 
   //Sora
   Sora`"Atmospheric pressure is normal. No traces of 
toxic gas detected. The temperature and 
humidity of the room are rising in slight 
increments."`;
   waitForClick; clearText; marker; sound(`T3A112`); appendText; 
   //Sora
   Sora`"An area of the pipe has ruptured, and there 
is a slight water leak. The water is about 
four inches at its deepest point."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A113`); appendText; 
   //Tsugumi
   Tsugumi`"That's hardly anything at all."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A114`); appendText; 
   //Sora
   Sora`"Well, yes, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's go in. If we fix it, there won't be a 
problem, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A115`); appendText; 
   //Sora
   Sora`"Yes. Please hurry."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playSFX({ name: `SE09_02L`, a1: 0, volume: 95 });
bgload({ name: `BG13B1`, transition: 20 });
setSceneTitle({ index: 16 });
showFog2();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I opened the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the wall where the hissing sound 
was coming from.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a faint crack in the 
pressure-regulating pipe, and water was 
dancing out of it in a fine mist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If that's all it was, it didn't seem like we 
had anything to worry about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought we'd be able to fix it in no time.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_22`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi had opened up the toolbox, and started 
spreading a few tools out in front of her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What do we need to do?"`;
   waitForClick; clearText; marker; sound(`T3A116`); appendText; 
   //Tsugumi
   Tsugumi`"The pipe is bent a little bit...I'm going to 
clamp a metal sleeve on it, would you support 
the pipe for me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Roger that!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A117`); appendText; 
   //Coco
   Coco`"What should I do?"`;
   waitForClick; clearText; marker; sound(`T3A118`); appendText; 
   //Tsugumi
   Tsugumi`"On the other side of this...there should be 
a valve attached to this pipe. You see it? I 
want you to loosen that a bit."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A119`); appendText; 
   //Coco
   Coco`"Okaaaay, gotcha."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We all started working in unison.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_20`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We opened and closed the valves on a number 
of pipes, re-attached pipes and welded shut 
cracks...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"You seem really used to all this."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A120`); appendText; 
   //Tsugumi
   Tsugumi`"What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Welding. Where'd you learn that?"`;
   waitForClick; clearText; marker; sound(`T3A121`); appendText; 
   //Tsugumi
   Tsugumi`"You want to know?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, well it's just that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A122`); appendText; 
   //Tsugumi
   Tsugumi`"You know, asking meaningless questions is a 
bad habit of yours."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And after that, I didn't feel I could ask 
anything else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora just stayed close to us, watching.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After a while an intercom rang from the 
corner of the room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Huh, did someone call?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A123`); appendText; 
   //Sora
   Sora`"I'm sorry everyone, It seems like You is 
calling me. I need to go."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, go for it. We should be able to handle 
the rest ourselves."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A124`); appendText; 
   //Sora
   Sora`"Okay. I'll leave the rest to you."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora got close to the intercom, and it looked 
like she got sucked into the receiver.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I knew she could travel instantly, but 
still...it was disconcerting.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A125`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi? Don't just stand there, on to the 
next pipe."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Oh, okay."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A126`); appendText; 
   //Tsugumi
   Tsugumi`"First take that blue valve and..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water underfoot hadn't gone down at all. 
Although the drain pump was moving, the 
drainage pipe was broken.`;
   waitForClick; clearText; marker; sound(`T3A127`); appendText; 
   //Tsugumi
   Tsugumi`"After that I want you to turn the red 
valve..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We'd fixed a number of pipes, but the sound of 
escaping steam still hadn't stopped.`;
   waitForClick; clearText; marker; sound(`T3A128`); appendText; 
   //Tsugumi
   Tsugumi`"Alright Coco, wait just a bit."`;
   waitForClick; clearText; marker; sound(`T3A129`); appendText; 
   //Coco
   Coco`"Okay, I'm ready."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A130`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, move the valves in the order I told 
you. Now."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A131`); appendText; 
   //Tsugumi
   Tsugumi`"Hey, you listening Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Yeah, alright, alright. I'm sorry. Blue 
then red, right?"`;
   waitForClick; clearText; marker; sound(`T3A132`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah. Loosen them and then shut them again."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I set to work upon the blue valve in front of 
me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was supposed to loosen this...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Eh? Which way was I supposed to turn this 
again...?)`;
   waitForClick; 
});
choice(
   `Clockwise`
   `Counterclockwise`
);
switch (choice) {
   case 0: goto(lbl_00000f5c);
   case 1: goto(lbl_00000f9f);
}
let lbl_00000f5c;
varop(`(28 0a a4) eb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I'm supposed to turn this clockwise, yeah...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned the blue valve with all of my 
strength.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sound of rushing air grew louder.`;
   waitForClick; clearText; 
});
goto(lbl_00000fde);
let lbl_00000f9f;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I'm supposed to turn this counterclockwise, 
yeah...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned the blue valve with all of my 
strength.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sound of rushing steam grew softer.`;
   waitForClick; clearText; 
});
let lbl_00000fde;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Alright, next close the red valve...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next valve was nearby.`;
   waitForClick; 
});
choice(
   `Clockwise`
   `Counterclockwise`
);
switch (choice) {
   case 0: goto(lbl_00001006);
   case 1: goto(lbl_00001048);
}
let lbl_00001006;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This one goes clockwise, right...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned the red valve.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The strength of the steam coming from the pipe 
weakened.`;
   waitForClick; clearText; 
});
goto(lbl_00001086);
let lbl_00001048;
varop(`(28 0a a4) eb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This one goes counterclockwise, right...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned the red valve.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The strength of the steam coming from the 
pipe got stronger.`;
   waitForClick; clearText; 
});
let lbl_00001086;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Alright, that does it.)`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay!"`;
   waitForClick; clearText; marker; sound(`T3A133`); appendText; 
   //Tsugumi
   Tsugumi`"Coco, hold on just a little longer."`;
   waitForClick; clearText; marker; sound(`T3A134`); appendText; 
   //Coco
   Coco`"Okay."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_21`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Holding up her left hand to shield her face, 
Tsugumi operated the welding torch with her 
right hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The crack in the pipe closed visibly.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
goto(lbl_00001176).if(var_eb == 0);
showTextbox();
text(() => {
   marker; sound(`T3A135`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, go support that pipe, it looks like 
it's shaking."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi barked the order to me as she was 
welding.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright! Geez!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out to touch the pipe, with the 
valve I'd just closed.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Ouch!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pipe was scalding hot, and I pulled my 
hand back instinctively.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A136`); appendText; 
   //Tsugumi
   Tsugumi`"Huh? That shouldn't be.... Did you turn the 
valve the right way?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, I think so."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A137`); appendText; 
   //Tsugumi
   Tsugumi`"That's strange..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, we're going to have to support this 
pipe somehow. I'll try to find a cover..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the moment I took my eyes off the pipe.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Creak, crackle....crack!!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Turning toward the sound, I could see the pipe 
swelling rapidly.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`BOOM!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cap burst off, and flew toward my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled back, dodging suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flying metal ricocheted off the floor and 
came to a stop.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That was close....WoooAAH!?"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`BAM!!!`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`KA-BOOM!!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`One after another metal pipes bent and then 
exploded around me, `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Waaagh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I panicked and got the hell out of there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there were stacks of crates and old 
containers in the direction I tried to escape.`;
   waitForClick; clearText; 
});
goto(lbl_0000122b);
let lbl_00001176;
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A138`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, after I've finished attaching this, 
return the valves to their original positions."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, gotcha."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi finished welding.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A139`); appendText; 
   //Tsugumi
   Tsugumi`"The valve! Hurry!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright! Geez!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I quickly turned the valve back in the other 
direction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel the steam flowing through the 
valve.`;
   waitForClick; clearText; marker; sound(`T3A140`); appendText; 
   //Tsugumi
   Tsugumi`"Coco, this pipe's done. Go on to the next 
one."`;
   waitForClick; clearText; marker; sound(`T3A141`); appendText; 
   //Coco
   Coco`"Okay, where is it?"`;
   waitForClick; clearText; marker; sound(`T3A142`); appendText; 
   //Tsugumi
   Tsugumi`"Hmmm...hold on just a second."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water underfoot still hadn't gone down at 
all and was swirling around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air conditioner on the wall was sucking 
in water and gurgling it out.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It appeared it had also shorted out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see blue-white sparks jumping around 
inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I hope it doesn't shock me...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was starting to get a little scared.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`CRACK!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air conditioner made an awful sound.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And all of a sudden, muddy water started 
overflowing from the exhaust vent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The area around my legs was quickly getting 
grimy.`;
   waitForClick; clearText; marker; sound(`T3A143`); appendText; 
   //Tsugumi
   Tsugumi`"The drainage is starting to back-flow, be 
careful!"`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Wagh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My leg got caught up in the jet of muddy 
water and I lost my balance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out to grab something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I caught on to a stack of crates and old 
containers lying nearby.`;
   waitForClick; clearText; 
});
let lbl_0000122b;
hideTextbox();
stopBGM();
playSFX({ name: `SE05_04`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_cb_0_6`);
varop(`(28 0a a2) 3d := (00) 7`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 4`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`CRASH!!`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_00`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 2`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Although the crates caught my weight, they 
shifted and began spilling over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Countless containers and rusty pipes started 
raining down.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They passed me and headed on a direct course 
to hit the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And in their path was—`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco, watch out!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A144`); appendText; 
   //Coco
   Coco`"Wha...?"`;
   waitForClick; clearText; marker; sound(`T3A145`); appendText; 
   //Tsugumi
   Tsugumi`"Get back!!"`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
delay({ interval: 5 });
shakeScreen();
monoColorOverlay({ interval: 1, color: WHITE });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
closeFog2();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE07_00`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Metal was raining down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The old pipe broke apart into thousands of 
pieces.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The containers were splintering.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They all struck the surface of the shallow 
water violently.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sound of hard, heavy objects falling 
echoed in the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whole room quivered.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A few pipes along the wall had ruptured and 
were spewing out water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And where Coco had been sitting only a moment 
earlier... `;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playBGM({ num: 12, volume: 100 });
playSFX({ name: `SE02_07`, a1: 0, volume: 90 });
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
bgload({ name: `EV_TU07A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi lay...fallen over.`;
   waitForClick; clearText; marker; sound(`T3A146`); appendText; 
   //Coco
   Coco`"...!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco looked around at the spectacle and 
hugged Pipi to her tightly, her hands 
trembling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just before the metallic objects had crashed 
down on Coco's back, Tsugumi had thrust her 
out of the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd protected her...while risking her own 
life...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi!!"`;
   waitForClick; clearText; marker; sound(`T3A147`); appendText; 
   //Tsugumi
   Tsugumi`"Agh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A metal shard had dug deeply into Tsugumi's 
right thigh, and it didn't look like she 
could move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Steam was pouring out of the burst pipes 
surrounding us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the drainage pump, not doing its job, 
continued belching out muddy water in large 
quantities.`;
   waitForClick; clearText; marker; sound(`T3A148`); appendText; 
   //Tsugumi
   Tsugumi`"I guess I messed up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grimaced, and clasped her thigh 
tightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was losing a lot of blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The murky water was getting redder by the 
moment...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, you okay!?"`;
   waitForClick; clearText; marker; sound(`T3A149`); appendText; 
   //Tsugumi
   Tsugumi`"Heh, heh. Does this LOOK okay to you?"`;
   waitForClick; clearText; marker; sound(`T3A150`); appendText; 
   //Tsugumi
   Tsugumi`"Always asking stupid questions."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"S-stop laughing! I'm going to get that stuff 
off you, just wait!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurried through the water to Tsugumi and 
tried to lift the metal off of her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, no matter how hard I tried, the heavy 
chunk wouldn't budge.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Damn it!"`;
   waitForClick; clearText; marker; sound(`T3A151`); appendText; 
   //Tsugumi
   Tsugumi`"Looks like it's no use..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the meantime, the water level had risen 
from ankle to knee height.`;
   waitForClick; clearText; marker; sound(`T3A152`); appendText; 
   //Coco
   Coco`"Tsugumiii!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco crawled over to get closer to Tsugumi.`;
   waitForClick; clearText; marker; sound(`T3A153`); appendText; 
   //Tsugumi
   Tsugumi`"Get away from me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stung by Tsugumi's cold words, Coco stiffened 
and stopped.`;
   waitForClick; clearText; marker; sound(`T3A154`); appendText; 
   //Tsugumi
   Tsugumi`"Get out of here, Coco."`;
   waitForClick; clearText; marker; sound(`T3A155`); appendText; 
   //Tsugumi
   Tsugumi`"You too Takeshi, get out while you can..."`;
   waitForClick; clearText; marker; sound(`T3A156`); appendText; 
   //Tsugumi
   Tsugumi`"At this rate, this room's partitions won't 
last."`;
   waitForClick; clearText; marker; sound(`T3A157`); appendText; 
   //Tsugumi
   Tsugumi`"You'll all die if you stay."`;
   waitForClick; clearText; marker; sound(`T3A158`); appendText; 
   //Tsugumi
   Tsugumi`"So, hurry..."`;
   waitForClick; clearText; marker; sound(`T3A159`); appendText; 
   //Tsugumi
   Tsugumi`"Get out of here."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"......"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"....But-"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stupid idiot!! You think 
I can just leave you!?"`;
   waitForClick; clearText; marker; sound(`T3A160`); appendText; 
   //Tsugumi
   Tsugumi`"There's nothing you can do, right? I'm stuck 
here."`;
   waitForClick; clearText; marker; sound(`T3A161`); appendText; 
   //Tsugumi
   Tsugumi`"And with this injury, you can't help me 
anyway——"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Shut up!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I roared out.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I won't let you give up on me now, dammit!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey Coco! What are you standing there for!?"`;
   waitForClick; clearText; marker; sound(`T3A162`); appendText; 
   //Coco
   Coco`"Wah! Y-yes!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Get on that intercom and contact the others!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With all her might Coco moved her trembling 
legs to get closer to the intercom.`;
   waitForClick; clearText; marker; sound(`T3A163`); appendText; 
   //Coco
   Coco`"It's no use.... It's broken! I pushed the 
button, but nothing happens!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So run up and tell the others to get over 
here!"`;
   waitForClick; clearText; marker; sound(`T3A164`); appendText; 
   //Coco
   Coco`"O-okay, I'm going!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although she looked flustered, Coco nodded 
and ran off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door to the warehouse closed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon, water came up to the bottom of the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
bgload({ name: `EV_TU07B`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water continued to rise.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From her waist down, Tsugumi was almost 
completely underwater.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water level was almost over my knees.`;
   waitForClick; clearText; marker; sound(`T3A165`); appendText; 
   //Tsugumi
   Tsugumi`"What are you trying to prove..."`;
   waitForClick; clearText; marker; sound(`T3A166`); appendText; 
   //Tsugumi
   Tsugumi`"It doesn't mean anything...just leave. I 
don't want you here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wouldn't be here if there wasn't a reason."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I can't just leave you here."`;
   waitForClick; clearText; marker; sound(`T3A167`); appendText; 
   //Tsugumi
   Tsugumi`"Why not?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I've taken nothing but abuse from you, and 
you still haven't thanked me properly yet."`;
   waitForClick; clearText; marker; sound(`T3A168`); appendText; 
   //Tsugumi
   Tsugumi`"Oh, really...heh, heh. Well that's reason 
enough I suppose. "`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi laughed weakly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her lips were trembling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The murky water was spreading.`;
   waitForClick; clearText; marker; sound(`T3A169`); appendText; 
   //Tsugumi
   Tsugumi`"It's gotten cold in here..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright Tsugumi...I need you to stay with me, 
now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I chose my words as carefully as possible.`;
   waitForClick; clearText; marker; sound(`T3A170`); appendText; 
   //Tsugumi
   Tsugumi`"I'm perfectly sane."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You'll be okay. The wound isn't that deep, so 
don't worry."`;
   waitForClick; clearText; marker; sound(`T3A171`); appendText; 
   //Tsugumi
   Tsugumi`"'You'll be okay'...what makes you think that?"`;
   waitForClick; clearText; marker; sound(`T3A172`); appendText; 
   //Tsugumi
   Tsugumi`"You're the one who's crazy..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry, it's all my fault. I wasn't paying 
attention, and you got hurt..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 10 });
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The water level was rising up to Tsugumi's 
head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A section of the partitioning had broken and 
seawater was rushing in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water was ice cold, and seemed like it 
would freeze us. `;
   waitForClick; clearText; marker; appendText; 
   Narr`The water volume increased mercilessly.`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face contorted with pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In agony, she labored for breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There wasn't any time.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 90 });
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Making up my mind, I dove into the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't open my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was search the bottom using my 
intuition.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(aaaaaAAAAGGGH!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(DAMN IT!!!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Using all of my strength, I heaved up the 
large mass of metal sticking into Tsugumi's 
leg.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Aided slightly by the buoyancy of the water, 
the metal hunk moved slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi pulled her leg out at once.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
varop(`(28 0a a0) ac := (00) 1`);
closeDimOverlay();
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 20`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 30`);
varop(`(28 0a a2) 3f := (00) VAR_cc_0_6`);
varop(`(28 0a a2) 40 := (00) 1`);
openShakeScreenAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgloadCrop({ name: `EV_TU09A`, transition: 20, x: 12, y: 12, hx: 775, hy: 581 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I lifted my face out of the water, gulping 
greedily for air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flooding wouldn't stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water level was already above my shoulders.`;
   waitForClick; clearText; marker; sound(`T3A173`); appendText; 
   //Tsugumi
   Tsugumi`"You are..."`;
   waitForClick; clearText; marker; sound(`T3A174`); appendText; 
   //Tsugumi
   Tsugumi`"Such a stubborn idiot..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Shut up and just keep quiet."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With her leg injured, there was no way 
Tsugumi could swim.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding onto her, I headed for the exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the door was already under water.`;
   waitForClick; clearText; marker; sound(`T3A175`); appendText; 
   //Tsugumi
   Tsugumi`"Look, there's no way you can save me..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I told you to keep quiet!"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's got to be another exit. I'll look 
for it."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It'll be okay. We'll find a way out of this."`;
   waitForClick; clearText; marker; sound(`T3A176`); appendText; 
   //Tsugumi
   Tsugumi`"There you go again, saying 'It'll be 
okay'...you're so irresponsible..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Would you keep quiet!?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I probably could have forced open the door if 
I had tried, but it would have put the 
second floor in danger of flooding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I searched desperately for an emergency exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My legs wouldn't touch the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hardly breathe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was at my limit.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".....!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's a ladder! In the corner of the room 
there's a ladder. We can use it to get to the 
emergency passage."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We're going to make it Tsugumi!!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
closeShakeScreenAnim();
closeDimInAndOutAndFilterAnim();
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I swam with all my might to get to the ladder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With Tsugumi draped over my back, I climbed 
up the ladder.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I opened the flood hatch at the end of the 
ladder and pushed Tsugumi through.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 10, volume: 100 });
bgload({ name: `BG28A3L`, transition: 20 });
playSFX({ name: `SE00_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Going up immediately behind her, I quickly 
shut the hatch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of the flood, faded away....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there wasn't time to rest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was still losing blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took her up on my back and began to run.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Damn, which way should I go...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A dead end in the passage had me totally lost.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A177`); appendText; 
   //Sora
   Sora`"Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora appeared suddenly in front of me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora! Tsugumi is...Tsugumi is!!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A178`); appendText; 
   //Sora
   Sora`"I know. I heard everything from Coco."`;
   waitForClick; clearText; marker; sound(`T3A179`); appendText; 
   //Sora
   Sora`"Bring her to the infirmary immediately, You 
is currently preparing to treat her."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, I'm on my way! Now, which way do I 
go?"`;
   waitForClick; clearText; marker; sound(`T3A180`); appendText; 
   //Sora
   Sora`"Return back along this passage, go down the 
stairs on the right and take the standard 
passage to..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG25A3`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's okay, it's going to be okay....!"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"....."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi groaned painfully from her place on 
my back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if she thought it was irresponsible of 
me, I couldn't bring myself to tell her 'It's 
no use, it's too late.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as I had even a little hope, I didn't 
want to throw it away.`;
   waitForClick; clearText; 
});
bgload({ name: `BG08A1`, transition: 20 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I burst into the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I set the injured Tsugumi down on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd lost so much blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had to take emergency measures immediately.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, what are we going to do!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A181`); appendText; 
   //You
   You`"Get out of the way!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, who'd been waiting in the room, pushed 
me out of the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A tourniquet was taken out from a rack of 
medical instruments on the wall and fastened 
around Tsugumi's thigh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A182`); appendText; 
   //You
   You`"This is bad..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's the status? How bad is it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can't we use that scanner to check it out?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed to the L-MRI.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A183`); appendText; 
   //You
   You`"It seems to be broken."`;
   waitForClick; clearText; marker; sound(`T3A184`); appendText; 
   //Sora
   Sora`"I'll have a look."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora put her hand on Tsugumi. A holographic 
window appeared in the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A small sensor, or camera started moving on 
the ceiling.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `YU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A185`); appendText; 
   //Sora
   Sora`"Well, this is just a bio scan, 
so I can't tell for certain, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A186`); appendText; 
   //Sora
   Sora`"Her femur is fractured. And it looks like it 
might be compound."`;
   waitForClick; clearText; marker; sound(`T3A187`); appendText; 
   //Sora
   Sora`"That and the artery is severed. She'll need 
sutures."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A188`); appendText; 
   //You
   You`"I've stitched up my finger before. It was 
with a survival kit, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A189`); appendText; 
   //Sora
   Sora`"Well, You, do you think you can assist me?"`;
   waitForClick; clearText; marker; sound(`T3A190`); appendText; 
   //You
   You`"I'll do my best! Do we have anesthetic?"`;
   waitForClick; clearText; marker; sound(`T3A191`); appendText; 
   //Sora
   Sora`"I'll get it ready. The laser scalpel, 
forceps and sutures ...everything we need, is 
already in the room."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora moved the electric wagon, and used its 
robotic arm to gather the necessary surgical 
tools.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You flipped up Tsugumi's skirt, and started 
wiping off the wound.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A192`); appendText; 
   //You
   You`"Takeshi!!"`;
   waitForClick; clearText; marker; sound(`T3A193`); appendText; 
   //You
   You`"Don't stand there! You're in the way!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You pointed angrily at the exit.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, yeah, sorry...take care of her, okay!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A194`); appendText; 
   //You
   You`"Leave it to me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked determined to show us all what she 
was capable of.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as I left the tense atmosphere of the 
emergency room, my fatigue hit me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"*sigh*...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I set myself down on a nearby chair.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A195`); appendText; 
   //Coco
   Coco`"Oh, Takepyon... Is Tsugumi going to be..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was holding onto Pipi, but looked as if 
she was having a hard time relaxing.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You let them know right away so...she should 
be fine."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A196`); appendText; 
   //Coco
   Coco`"Really...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's eyes were moist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to tell, but she had probably 
been crying moments earlier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even still, she tried to smile.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A197`); appendText; 
   //Coco
   Coco`"Hey, you think Tsugumi's..."`;
   waitForClick; clearText; marker; sound(`T3A198`); appendText; 
   //Coco
   Coco`"Tsugumi's...gonna be okay, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still looking worried, she tilted her head as 
she asked me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. She'll be okay."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Absolutely fine...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I closed my hand into a fist...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And told myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She's going to be okay.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
bgload({ name: `BG08A1`, transition: 10 });
clock(`12:23`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After what seemed like an eternity, You 
appeared from the infirmary with Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The surgery was over—`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was going to live.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A199`); appendText; 
   //Sora
   Sora`"It required a total of 40 stitches 
and will take two months to heal completely."`;
   waitForClick; clearText; marker; sound(`T3A200`); appendText; 
   //Sora
   Sora`"And it will take her a few more months to be 
able to walk normally..."`;
   waitForClick; clearText; marker; sound(`T3A201`); appendText; 
   //Sora
   Sora`"Until a rescue team arrives at LeMU, and we 
can get her out of here, she's going to have 
to rest."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. Thanks Sora."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And...good job, You."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You? What's wrong?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A202`); appendText; 
   //You
   You`"...What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A203`); appendText; 
   //You
   You`"Oh...um, nothing, I'm just really tired...you 
know..."`;
   waitForClick; clearText; marker; sound(`T3A204`); appendText; 
   //You
   You`"I've never done an operation like that 
before..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that You looked down and didn't say much.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A205`); appendText; 
   //Sora
   Sora`"By the way, it looks like the flooding 
stopped in the Zweite stock warehouse."`;
   waitForClick; clearText; marker; sound(`T3A901`); appendText; 
   //Sora
   Sora`"All pipelines connecting to the warehouse 
have been closed as an emergency measure and 
the whole area has been sealed off from 
Zweite. `;
   waitForClick; clearText; sound(`T3A902`); appendText; 
   //Sora
   Sora`So, we don't have to worry about the 
flood damage expanding."`;
   waitForClick; clearText; marker; sound(`T3A207`); appendText; 
   //Sora
   Sora`"That's it then."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `MAP2F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 10 });
openMapCommentAnim();
delay({ interval: 180 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A2`, transition: 30 });
unSkippableDelay(1);
bgload({ name: `MAP2F_B2`, transition: 20 });
delay({ interval: 180 });
removeBG({ mode: BLACK, transition: 02 });
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_3B`);
