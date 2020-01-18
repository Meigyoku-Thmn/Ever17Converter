l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
setDialogBoxColor(GREEN);
setSceneTitle({ index: 15 });
chapterCutin({ name: `00000000` });
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
clock(`5:49`);
showTextbox();
text(() => {
   marker; appendText; 
   `I awoke from my slumber.`;
   waitForClick; clearText; marker; appendText; 
   `I felt something cold and hard...`;
   waitForClick; clearText; marker; appendText; 
   `I remembered slouching in the chair and 
slumping forward on the table.`;
   waitForClick; clearText; marker; appendText; 
   `Even then, the sleep that I'd gotten was far 
better than the day before.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, g'mornin'..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A000`); appendText; 
   You`"Oh, good morning Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   `It appeared that You had gotten up just 
before me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What time is it?"`;
   waitForClick; clearText; marker; sound(`T3A001`); appendText; 
   You`"Almost 5:50 a.m. I think..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You sure are an early riser."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A002`); appendText; 
   You`"What are you talking about? You're just 
lazy..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Saying that, You let out a big yawn.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A003`); appendText; 
   You`"Then again, being all tense for so long just 
gets you tired. It's probably better to sleep 
when you can."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A004`); appendText; 
   You`"Being in a situation like this, we really 
need to keep well rested."`;
   waitForClick; clearText; marker; sound(`T3A005`); appendText; 
   You`"'Cause when it comes down to it, if we can't 
think our way out of this situation we're in 
trouble!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, I said that yesterday!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A006`); appendText; 
   You`"Yeah...I suppose you did..."`;
   waitForClick; clearText; marker; appendText; 
   `Dodging the subject, You laughed slightly.`;
   waitForClick; clearText; marker; sound(`T3A007`); appendText; 
   You`"Hey, since you're up, why don't you go wash 
your face?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I might as well..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah! Hey, you didn't write on my face again 
did you...!?"`;
   waitForClick; clearText; marker; appendText; 
   `I instinctively rubbed my cheeks.`;
   waitForClick; clearText; marker; sound(`T3A008`); appendText; 
   You`"Don't worry, I didn't write anything."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I stood up slowly and checked my surroundings.`;
   waitForClick; clearText; marker; appendText; 
   `Coco had arranged some chairs to create a 
makeshift bed. She was asleep on top of them.`;
   waitForClick; clearText; marker; appendText; 
   `And at the base of her pillow, Pipi's neck was 
cocked to the side.`;
   waitForClick; clearText; marker; appendText; 
   `It looked like he was sleeping too.`;
   waitForClick; clearText; marker; appendText; 
   `I got up, squeezed by the sleeping Coco and 
opened the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A009`); appendText; 
   Kid`"Hey."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Oh, mornin' Kid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A010`); appendText; 
   Kid`"Hey, don't look so depressed Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about. I'm just sleepy's 
all."`;
   waitForClick; clearText; marker; sound(`T3A011`); appendText; 
   Kid`"Well, a lot's happened in the last couple 
of days. Are you tired?"`;
   waitForClick; clearText; marker; appendText; 
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
   `I headed to the nearest bathroom.`;
   waitForClick; clearText; marker; appendText; 
   `The water covering the floor seeped into my 
shoes, which had only just finished drying. 
They were wet all over again.`;
   waitForClick; clearText; marker; appendText; 
   `My socks got heavy and clung to my feet.`;
   waitForClick; clearText; marker; appendText; 
   `My pace slowed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Argh! What a freakin' pain!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `SPLASH!!`;
   waitForClick; clearText; marker; appendText; 
   `Scooping up water from around my feet, I 
splashed it on my face.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Whoa, that's cold...!!!"`;
   waitForClick; clearText; marker; appendText; 
   `I was shivering, but at the same time, my 
whole body felt awake.`;
   waitForClick; clearText; marker; appendText; 
   `So that's why people wash their faces in the 
morning...`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `When I went back to the Conference Room, the 
conversation quickly turned to what we were 
going to eat.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi and Sora aren't here, you sure it's 
okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A012`); appendText; 
   You`"Yeah...but they're sure to show up soon."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, knowing those two, you're probably 
right."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I decided to wake up Coco.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, get up. It's morning."`;
   waitForClick; clearText; marker; appendText; 
   `I shook her shoulder gently.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A013`); appendText; 
   Coco`"Funyuu...hmmmmm..."`;
   waitForClick; clearText; marker; appendText; 
   `Rubbing her eyes, Coco got up slowly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A014`); appendText; 
   Coco`"Oh, good morning...Brother..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, yeah. Coco you have a brother? But, hey, 
you got the two of us mixed up..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A015`); appendText; 
   Coco`"No...brother..."`;
   waitForClick; clearText; marker; sound(`T3A016`); appendText; 
   Coco`"We need to get ready, or we'll be late for 
school..."`;
   waitForClick; clearText; marker; appendText; 
   `Coco was still half in dreamland.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Late for school?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A017`); appendText; 
   Coco`"Well, that's just the setting it is..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, listen..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop messing around, we're going to eat."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A018`); appendText; 
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
   `We all made our way to the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Everyone okay with hotdogs?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO06ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A019`); appendText; 
   Coco`"Hotdogs?"`;
   waitForClick; clearText; marker; sound(`T3A020`); appendText; 
   You`"They have hotdogs here?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I found a few in the back of the 
fridge. Must've been on the 'stealth menu.'"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I was relegated cook duty again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A021`); appendText; 
   You`"Hey, Takeshi, are they done yet?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A022`); appendText; 
   You`"Why do I have to be so hungryyy?"`;
   waitForClick; clearText; marker; sound(`T3A023`); appendText; 
   You`"My stomach is going to cave in..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A024`); appendText; 
   You`"I'm going to become two dimensional."`;
   waitForClick; clearText; marker; sound(`T3A025`); appendText; 
   You`"And float away on the wind."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Would you shut up already?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A026`); appendText; 
   You`"Ha, ha, ha..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I was inside the kiosk that had been made to 
look like a submarine.`;
   waitForClick; clearText; marker; appendText; 
   `Sausages were sizzling in a frying pan.`;
   waitForClick; clearText; marker; appendText; 
   `They sold sub sandwiches here, so I guess the 
exterior of the place was a sorry play on that.`;
   waitForClick; clearText; marker; appendText; 
   `(Why am I thinking about...stupid things like 
that...?)`;
   waitForClick; clearText; marker; appendText; 
   `In a little while, the place started to smell 
great.`;
   waitForClick; clearText; marker; appendText; 
   `I carefully placed a sausage in the toasted, 
lightly buttered hotdog buns.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, whoever wants to eat, get in line!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A027`); appendText; 
   Coco`"I'm first!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh!? Well, here ya go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A028`); appendText; 
   Coco`"Thank you!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Help yourself to ketchup and mustard."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A029`); appendText; 
   Kid`"Uh, I'd like one too..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A030`); appendText; 
   You`"Hey, wait in line! The next person is M-E-!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `This was probably the way things usually were 
at this shop.`;
   waitForClick; clearText; marker; appendText; 
   `There still wasn't any schedule as to when we 
might get out of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   `But in the meantime, we'd stopped thinking 
about the difficult and negative things.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A031`); appendText; 
   Kid`"I'm not sure why, but you look like you're 
having fun."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Who, me? You think so? Fun...I guess maybe..."`;
   waitForClick; clearText; marker; appendText; 
   `I wiped the sweat caused by the heat of 
cooking from my face.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO02ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A032`); appendText; 
   Coco`"Yeah, you look like you might even be 
enjoying your life here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wonder how that'd feel...I guess it'd be 
kind of fun, owning a stand like this!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A033`); appendText; 
   Kid`"Owning...a stand..."`;
   waitForClick; clearText; marker; appendText; 
   `The Kid stifled a laugh.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A034`); appendText; 
   Coco`"Takepyon, you really do look like you work 
here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hotdogs, get your hotdogs! They're on the 
house!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A035`); appendText; 
   Coco`"You don't think, that maybe you could have 
sold hotdogs in a past life?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Aw shucks, ma'am you're just sayin' that..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A036`); appendText; 
   You`"No, Coco, I don't think he was a hotdog man, 
I think he was..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A037`); appendText; 
   You`"...a sandwich man?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, come on, You!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A038`); appendText; 
   You`"A ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Ha, ha, ha."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I suppose we were just happy to be eating hot 
food.`;
   waitForClick; clearText; marker; appendText; 
   `We could worry about the details after our 
stomachs were full.`;
   waitForClick; clearText; marker; appendText; 
   `For the moment, we were enjoying eating that 
simple meal.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
clock(`6:38`);
showTextbox();
text(() => {
   marker; appendText; 
   `After spending some time laughing...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A039`); appendText; 
   Kid`"Ah...!"`;
   waitForClick; clearText; marker; appendText; 
   `The Kid suddenly looked up at the ceiling.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA14ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A040`); appendText; 
   Kid`"Wh-what's that...?"`;
   waitForClick; clearText; marker; appendText; 
   `He blinked, his eyes were focused on the 
ceiling as if he had seen something.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"H-hey, what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   `My curiosity piqued, I asked him.`;
   waitForClick; clearText; marker; appendText; 
   `And following his gaze, I looked up at the 
ceiling.`;
   waitForClick; clearText; marker; appendText; 
   `But, I couldn't see anything out of the 
ordinary...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A041`); appendText; 
   Kid`"I wonder..."`;
   waitForClick; clearText; marker; sound(`T3A042`); appendText; 
   Kid`"I don't know what it was, 
but I swear I saw something."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Saw something? Like what?"`;
   waitForClick; clearText; marker; sound(`T3A043`); appendText; 
   Kid`"Uhh...well, I didn't really see it..."`;
   waitForClick; clearText; marker; sound(`T3A044`); appendText; 
   Kid`"I just have a bad feeling...
about the second floor...somewhere."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the heck are you talking about?"`;
   waitForClick; clearText; marker; sound(`T3A045`); appendText; 
   Kid`"Um, I think we should check that floor one 
more time..."`;
   waitForClick; clearText; marker; appendText; 
   `His eyes looked upward again and started 
mumbling incoherently. Concerned, I shook his 
shoulder.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `And then he snapped out of it.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't worry about it. If something's up, Sora 
would warn us about it, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A046`); appendText; 
   Kid`"Yeah...you're right...but still..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Looks like I'm not the only one who's tired."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Then Tsugumi appeared out of nowhere.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A047`); appendText; 
   Tsugumi`"What just happened?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nah, we were all just eating hotdogs. 
Look, I made one for you, too."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi took it without saying anything.`;
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
   `I could hear the sound of her taking the 
hotdog out of its wrapper.`;
   waitForClick; clearText; marker; appendText; 
   `And I watched her motions carefully.`;
   waitForClick; clearText; marker; appendText; 
   `I swallowed, watching her...`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi placed the wrapper on the counter...`;
   waitForClick; clearText; marker; appendText; 
   `Slowly, with the ketchup in her right hand 
and the mustard in her left, she squeezed the 
tubes. Their contents gushed out.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey, Tsugumi!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A048`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   `The hotdog was entirely covered in red and 
yellow.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You eat that much mustard and...it'll kill 
you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A049`); appendText; 
   Tsugumi`"...Really?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi bit into the hotdog.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey? Is it spicy? I bet it's spicy?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A050`); appendText; 
   Tsugumi`"Not really."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're probably thinking to yourself 'Dang, 
I put way too much on!' Right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A051`); appendText; 
   Tsugumi`"...I don't...really care."`;
   waitForClick; clearText; marker; appendText; 
   `And after that she continued eating, in 
silence.`;
   waitForClick; clearText; marker; appendText; 
   `But, I thought I'd seen a glimmer.`;
   waitForClick; clearText; marker; appendText; 
   `Of eyes slightly starting to tear.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, don't strain yourself."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A052`); appendText; 
   Tsugumi`"I'm not. I'm finished."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh..."`;
   waitForClick; 
});
choice(
   `Where'd you go this morning?`,
   `Do you want another one?`,
);
switch (l_choice) {
   case 0: goto(lbl_0000067c);
   case 1: goto(lbl_000006e1);
}
let lbl_0000067c;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"By the way, where'd you go this morning?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A053`); appendText; 
   Tsugumi`"...Why? What do you want to know that for?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, when everyone went to bed, you were 
still with us, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But when we got up, we couldn't find you 
so..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A054`); appendText; 
   Tsugumi`"So what..."`;
   waitForClick; clearText; marker; sound(`T3A055`); appendText; 
   Tsugumi`"It's none of your business."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's not true."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm in charge of breakfast, right? So, I just 
wanted to know if you wanted some."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A056`); appendText; 
   Tsugumi`"I ate, okay? Enough already."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? No, uh, I mean, YEAH, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It was on my mind, you know? I guess I was 
worried..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wondered, what happened to you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where'd you go? Where do you always 
disappear to?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I guess I just wanted to know."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, I got it...You just had to find a place 
to go by yourself, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `As usual these questions were getting me 
nowhere.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, if you don't want to answer, don't 
worry about it."`;
   waitForClick; clearText; 
});
goto(lbl_00000736);
let lbl_000006e1;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey, you want another one? I can make you 
one."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A057`); appendText; 
   Tsugumi`"No thanks."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You always just wolf your food down. I don't 
know, but there just isn't much satisfaction 
in cooking for you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Besides, with all that ketchup and mustard 
on it, you probably can't even taste it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A058`); appendText; 
   Tsugumi`"It doesn't matter how it tastes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course it matters!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm doing my best to show you how real 
cookin' tastes!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You just wait, I'll cook you up a meal that 
will wake up your tastebuds...!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A059`); appendText; 
   Tsugumi`"I've had enough to eat, okay?"`;
   waitForClick; clearText; marker; sound(`T3A060`); appendText; 
   Tsugumi`"I'm full..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Hmph."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, if you say so."`;
   waitForClick; clearText; 
});
let lbl_00000736;
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
   `Boooooom!`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Suddenly, a low metallic sound reverberated 
throughout the installation.`;
   waitForClick; clearText; marker; appendText; 
   `It was a dull, muffled sound.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Wh-what was that!?"`;
   waitForClick; clearText; marker; sound(`T3A061`); appendText; 
   Tsugumi`"This whole place just shook...a little."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's eyes darted around, as if searching 
for something.`;
   waitForClick; clearText; marker; appendText; 
   `Moments later the Kid and Coco, who'd both 
been resting in another room, appeared.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `CO06ADS`, name2: `KA08ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey kid, what was that?"`;
   waitForClick; clearText; marker; sound(`T3A062`); appendText; 
   Kid`"Uh, I don't know..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, this doesn't have anything to do with 
that 'bad feeling' you had earlier, does it?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `The Kid shook his head.`;
   waitForClick; clearText; marker; sound(`T3A063`); appendText; 
   Kid`"I don't know. Maybe we should ask Sora..."`;
   waitForClick; clearText; marker; sound(`T3A064`); appendText; 
   Sora`"Did you call for me?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `From out of nowhere Sora appeared in midair 
and floated down in front of us.`;
   waitForClick; clearText; marker; sound(`T3A065`); appendText; 
   Coco`"Ah, hi Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora! Where were you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A066`); appendText; 
   Sora`"I'm terribly sorry. I overslept."`;
   waitForClick; clearText; marker; appendText; 
   `Sora looked embarrassed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Overslept? But you're..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Nah, we'll save that for later."`;
   waitForClick; clearText; marker; sound(`T3A067`); appendText; 
   Kid`"Hey, did something just happen? There was an 
awful noise just now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A068`); appendText; 
   Sora`"One of the shafts that supports this floor 
has started to warp."`;
   waitForClick; clearText; marker; sound(`T3A069`); appendText; 
   Kid`"We didn't see any signs of it yesterday..."`;
   waitForClick; clearText; marker; sound(`T3A070`); appendText; 
   Sora`"Yes, well, it wasn't in my calculations. It 
appears as if the ocean currents may have 
influenced this outcome."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How dangerous are we talking about here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A071`); appendText; 
   Sora`"Well it should be within the margin of error, 
but...no, wait a second."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A072`); appendText; 
   Sora`"There is an anomaly in one the of 
pressure-regulating pipelines, 
at Zweite stock's warehouse."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"'What are pressure-regulating pipes?"`;
   waitForClick; clearText; marker; sound(`T3A073`); appendText; 
   Sora`"These pipelines are responsible for adjusting 
the pressure inside the multi-layered 
bulkheads comprising LeMU."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A074`); appendText; 
   Sora`"If any of them should rupture, for whatever 
reason, I am incapable of repairing them."`;
   waitForClick; clearText; marker; sound(`T3A075`); appendText; 
   Sora`"The anomaly is only slight, so you shouldn't 
have to hurry, but...I think it is best if 
someone goes to check on it. Would you 
please go for me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sure, leave it to me."`;
   waitForClick; clearText; marker; appendText; 
   `I volunteered right away.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `TU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A076`); appendText; 
   Tsugumi`"I'll go, too."`;
   waitForClick; clearText; marker; appendText; 
   `Unexpectedly, Tsugumi also agreed to go.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi? You sure?"`;
   waitForClick; clearText; marker; sound(`T3A077`); appendText; 
   Tsugumi`"Well, if we're going to fix something, we'll 
need tools, right? I know my way around a 
workshop."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright.... Let's go."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(2, 1, 4);
multifgload3({ name1: `CO15ADS`, name2: `SO11ADS`, name3: `KA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`T3A078`); appendText; 
   Coco`"I'll help too!"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   Pipi`"Woof."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, you can come too Coco.... Hey. Does 
anyone know where You went?"`;
   waitForClick; clearText; marker; appendText; 
   `I looked around but didn't see You anywhere.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A079`); appendText; 
   Kid`"She went to the Control Room when things were 
shaking earlier."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A080`); appendText; 
   Sora`"We must have just missed each other."`;
   waitForClick; clearText; marker; sound(`T3A081`); appendText; 
   Kid`"I'll go and tell her that you're going up 
above."`;
   waitForClick; clearText; marker; appendText; 
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
   Sora`"If something comes up, use LeMMIH to contact 
me."`;
   waitForClick; clearText; marker; sound(`T3A083`); appendText; 
   Kid`"Alright, see you!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Bounding across the water's surface, the Kid 
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
   `We climbed the emergency stairs quickly.`;
   waitForClick; clearText; marker; appendText; 
   `Even if there wasn't any need to hurry, we 
couldn't afford to waste any time.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi set her sights on the floor above and 
started lugging the heavy toolbox.`;
   waitForClick; clearText; marker; appendText; 
   `Coco and Pipi followed right behind.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"By the way, Sora..."`;
   waitForClick; clearText; marker; appendText; 
   `I asked Sora, who was gliding alongside me, 
something that had been on my mind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A084`); appendText; 
   Sora`"Yes, Takeshi. What is it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You mention you'd 'overslept' earlier...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A085`); appendText; 
   Sora`"Y-yes, I'm sorry..."`;
   waitForClick; clearText; marker; appendText; 
   `Sora's face went a deep shade of red.`;
   waitForClick; clearText; marker; sound(`T3A086`); appendText; 
   Sora`"Actually, there was a routine maintenance on 
one of the servers, where my data is stored. 
It initiated automatically this morning."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A087`); appendText; 
   Sora`"It appears that it took some time for the 
return processing. I was a little too 
optimistic on the preliminary check. I'm 
terribly sorry."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm, so that's what it was."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...A, ha, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   `I laughed for some reason.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A088`); appendText; 
   Sora`"Um, er, what...did I say something amusing?"`;
   waitForClick; clearText; marker; appendText; 
   `Sora was confused.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I just thought it was funny that even 
YOU could oversleep, Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A089`); appendText; 
   Sora`"Ahh...that's funny...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How should I put it?...It's cute."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A090`); appendText; 
   Sora`"'Cute'...!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah."`;
   waitForClick; clearText; marker; sound(`T3A091`); appendText; 
   Sora`"Sleeping in is...cute??"`;
   waitForClick; clearText; marker; sound(`T3A092`); appendText; 
   Sora`"That does not compute..."`;
   waitForClick; clearText; marker; appendText; 
   `Sora's eyes went round.`;
   waitForClick; clearText; marker; appendText; 
   `Maybe it was because this particular use of 
the word wasn't in her database.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A093`); appendText; 
   Sora`"I've caused all of you such trouble..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, nobody's angry. Don't let it bother you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Everyone knows that you're working hard."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A094`); appendText; 
   Sora`"Ah, yes. Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   `Although Sora looked somewhat puzzled, her 
cheeks seemed to glow with joy.`;
   waitForClick; clearText; marker; appendText; 
   `And for some reason I found that amusing too.`;
   waitForClick; clearText; marker; sound(`T3A095`); appendText; 
   Sora`"Really...is it...cute...?"`;
   waitForClick; clearText; marker; appendText; 
   `I thought it was a charmingly innocent 
reaction.`;
   waitForClick; clearText; marker; appendText; 
   `I supposed it was the kind of thing you'd call 
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
   `We reached Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   `It didn't look like there was anything wrong 
with the floor, but I could hear a small 
hissing sound.`;
   waitForClick; clearText; marker; appendText; 
   `I headed in the direction of the noise.`;
   waitForClick; clearText; 
});
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `SO03ADS`, name2: `CO11ADS`, name3: `TU11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Still, there wasn't any sign of this 
yesterday."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why do you think this happened all of a 
sudden?"`;
   waitForClick; clearText; marker; sound(`T3A096`); appendText; 
   Sora`"Well.... Everything doesn't always go 
according to plan..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A097`); appendText; 
   Coco`"Is it because everyone was bouncing around so 
much?"`;
   waitForClick; clearText; marker; appendText; 
   `Coco said this casually.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Eh?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A098`); appendText; 
   Coco`"Well, because everyone was making such a 
commotion."`;
   waitForClick; clearText; marker; sound(`T3A099`); appendText; 
   Coco`"I wonder if that's why LeMU started to tilt?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I, I don't think so."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `CO15ADS`, name2: `TU10ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A100`); appendText; 
   Tsugumi`"Ha, ha, maybe it is."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi laughed softly.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A101`); appendText; 
   Tsugumi`"But if we make some repairs, everything 
should be fine."`;
   waitForClick; clearText; marker; sound(`T3A102`); appendText; 
   Coco`"Yeah, I guess so. Right, Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T3A103`); appendText; 
   Tsugumi`"Yeah. Don't worry about it, Coco."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A104`); appendText; 
   Coco`"Whew! I'm so relieved."`;
   waitForClick; clearText; marker; sound(`T3A105`); appendText; 
   Coco`"Woo hoo! Alright!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
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
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `We stood in front of the room where the 
hissing sound was coming from.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yep, the noise is coming from the warehouse."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A106`); appendText; 
   Sora`"I'm going to perform a scan to determine the 
status of the area."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Saying that Sora disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The steam in there isn't going to explode, 
if we open the door, right?"`;
   waitForClick; clearText; marker; appendText; 
   `After I asked that, Tsugumi eyed the door 
uncertainly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A107`); appendText; 
   Tsugumi`"Hmmm..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A108`); appendText; 
   Tsugumi`"It's probably fine."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You can tell? Hey, you aren't..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A109`); appendText; 
   Tsugumi`"I'm just saying what you want to hear."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora suddenly appeared near the door.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A110`); appendText; 
   Sora`"I've run the diagnostic."`;
   waitForClick; clearText; marker; sound(`T3A111`); appendText; 
   Sora`"Atmospheric pressure is normal. No traces of 
toxic gas detected. The temperature and 
humidity of the room are rising in slight 
increments."`;
   waitForClick; clearText; marker; sound(`T3A112`); appendText; 
   Sora`"An area of the pipe has ruptured, and there 
is a slight water leak. The water is about 
four inches at its deepest point."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A113`); appendText; 
   Tsugumi`"That's hardly anything at all."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A114`); appendText; 
   Sora`"Well, yes, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let's go in. If we fix it, there won't be a 
problem, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A115`); appendText; 
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
   `I opened the door.`;
   waitForClick; clearText; marker; appendText; 
   `I looked at the wall where the hissing sound 
was coming from.`;
   waitForClick; clearText; marker; appendText; 
   `There was a faint crack in the 
pressure-regulating pipe, and water was 
dancing out of it in a fine mist.`;
   waitForClick; clearText; marker; appendText; 
   `If that's all it was, it didn't seem like we 
had anything to worry about.`;
   waitForClick; clearText; marker; appendText; 
   `I thought we'd be able to fix it in no time.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_22`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi had opened up the toolbox, and started 
spreading a few tools out in front of her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What do we need to do?"`;
   waitForClick; clearText; marker; sound(`T3A116`); appendText; 
   Tsugumi`"The pipe is bent a little bit...I'm going to 
clamp a metal sleeve on it, would you support 
the pipe for me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Roger that!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A117`); appendText; 
   Coco`"What should I do?"`;
   waitForClick; clearText; marker; sound(`T3A118`); appendText; 
   Tsugumi`"On the other side of this...there should be 
a valve attached to this pipe. You see it? I 
want you to loosen that a bit."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A119`); appendText; 
   Coco`"Okaaaay, gotcha."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `We all started working in unison.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_20`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `We opened and closed the valves on a number 
of pipes, re-attached pipes and welded shut 
cracks...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"You seem really used to all this."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A120`); appendText; 
   Tsugumi`"What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Welding. Where'd you learn that?"`;
   waitForClick; clearText; marker; sound(`T3A121`); appendText; 
   Tsugumi`"You want to know?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, well it's just that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A122`); appendText; 
   Tsugumi`"You know, asking meaningless questions is a 
bad habit of yours."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `And after that, I didn't feel I could ask 
anything else.`;
   waitForClick; clearText; marker; appendText; 
   `Sora just stayed close to us, watching.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `After a while an intercom rang from the 
corner of the room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Huh, did someone call?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A123`); appendText; 
   Sora`"I'm sorry everyone, It seems like You is 
calling me. I need to go."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, go for it. We should be able to handle 
the rest ourselves."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A124`); appendText; 
   Sora`"Okay. I'll leave the rest to you."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora got close to the intercom, and it looked 
like she got sucked into the receiver.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I knew she could travel instantly, but 
still...it was disconcerting.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A125`); appendText; 
   Tsugumi`"Takeshi? Don't just stand there, on to the 
next pipe."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Oh, okay."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A126`); appendText; 
   Tsugumi`"First take that blue valve and..."`;
   waitForClick; clearText; marker; appendText; 
   `The water underfoot hadn't gone down at all. 
Although the drain pump was moving, the 
drainage pipe was broken.`;
   waitForClick; clearText; marker; sound(`T3A127`); appendText; 
   Tsugumi`"After that I want you to turn the red 
valve..."`;
   waitForClick; clearText; marker; appendText; 
   `We'd fixed a number of pipes, but the sound of 
escaping steam still hadn't stopped.`;
   waitForClick; clearText; marker; sound(`T3A128`); appendText; 
   Tsugumi`"Alright Coco, wait just a bit."`;
   waitForClick; clearText; marker; sound(`T3A129`); appendText; 
   Coco`"Okay, I'm ready."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A130`); appendText; 
   Tsugumi`"Takeshi, move the valves in the order I told 
you. Now."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A131`); appendText; 
   Tsugumi`"Hey, you listening Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? Yeah, alright, alright. I'm sorry. Blue 
then red, right?"`;
   waitForClick; clearText; marker; sound(`T3A132`); appendText; 
   Tsugumi`"Yeah. Loosen them and then shut them again."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I set to work upon the blue valve in front of 
me.`;
   waitForClick; clearText; marker; appendText; 
   `I was supposed to loosen this...`;
   waitForClick; clearText; marker; appendText; 
   `(Eh? Which way was I supposed to turn this 
again...?)`;
   waitForClick; 
});
choice(
   `Clockwise`,
   `Counterclockwise`,
);
switch (l_choice) {
   case 0: goto(lbl_00000f5c);
   case 1: goto(lbl_00000f9f);
}
let lbl_00000f5c;
l_made_the_pipe_steam_sounds_louder = 1;
showTextbox();
text(() => {
   marker; appendText; 
   `I'm supposed to turn this clockwise, yeah...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `I turned the blue valve with all of my 
strength.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `The sound of rushing air grew louder.`;
   waitForClick; clearText; 
});
goto(lbl_00000fde);
let lbl_00000f9f;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   `I'm supposed to turn this counterclockwise, 
yeah...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `I turned the blue valve with all of my 
strength.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `The sound of rushing steam grew softer.`;
   waitForClick; clearText; 
});
let lbl_00000fde;
showTextbox();
text(() => {
   marker; appendText; 
   `Alright, next close the red valve...`;
   waitForClick; clearText; marker; appendText; 
   `The next valve was nearby.`;
   waitForClick; 
});
choice(
   `Clockwise`,
   `Counterclockwise`,
);
switch (l_choice) {
   case 0: goto(lbl_00001006);
   case 1: goto(lbl_00001048);
}
let lbl_00001006;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   `This one goes clockwise, right...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `I turned the red valve.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `The strength of the steam coming from the pipe 
weakened.`;
   waitForClick; clearText; 
});
goto(lbl_00001086);
let lbl_00001048;
l_made_the_pipe_steam_sounds_louder = 1;
showTextbox();
text(() => {
   marker; appendText; 
   `This one goes counterclockwise, right...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `I turned the red valve.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `The strength of the steam coming from the 
pipe got stronger.`;
   waitForClick; clearText; 
});
let lbl_00001086;
showTextbox();
text(() => {
   marker; appendText; 
   `(Alright, that does it.)`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay!"`;
   waitForClick; clearText; marker; sound(`T3A133`); appendText; 
   Tsugumi`"Coco, hold on just a little longer."`;
   waitForClick; clearText; marker; sound(`T3A134`); appendText; 
   Coco`"Okay."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_21`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Holding up her left hand to shield her face, 
Tsugumi operated the welding torch with her 
right hand.`;
   waitForClick; clearText; marker; appendText; 
   `The crack in the pipe closed visibly.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
if (l_made_the_pipe_steam_sounds_louder == 0) goto(lbl_00001176);
showTextbox();
text(() => {
   marker; sound(`T3A135`); appendText; 
   Tsugumi`"Takeshi, go support that pipe, it looks like 
it's shaking."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi barked the order to me as she was 
welding.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright! Geez!"`;
   waitForClick; clearText; marker; appendText; 
   `I reached out to touch the pipe, with the 
valve I'd just closed.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ouch!"`;
   waitForClick; clearText; marker; appendText; 
   `The pipe was scalding hot, and I pulled my 
hand back instinctively.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A136`); appendText; 
   Tsugumi`"Huh? That shouldn't be.... Did you turn the 
valve the right way?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I think so."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A137`); appendText; 
   Tsugumi`"That's strange..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, we're going to have to support this 
pipe somehow. I'll try to find a cover..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I looked around.`;
   waitForClick; clearText; marker; appendText; 
   `And the moment I took my eyes off the pipe.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Creak, crackle....crack!!`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   `Turning toward the sound, I could see the pipe 
swelling rapidly.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `BOOM!`;
   waitForClick; clearText; marker; appendText; 
   `The cap burst off, and flew toward my head.`;
   waitForClick; clearText; marker; appendText; 
   `I pulled back, dodging suddenly.`;
   waitForClick; clearText; marker; appendText; 
   `The flying metal ricocheted off the floor and 
came to a stop.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That was close....WoooAAH!?"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `BAM!!!`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `KA-BOOM!!!`;
   waitForClick; clearText; marker; appendText; 
   `One after another metal pipes bent and then 
exploded around me, `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Waaagh!"`;
   waitForClick; clearText; marker; appendText; 
   `I panicked and got the hell out of there.`;
   waitForClick; clearText; marker; appendText; 
   `But there were stacks of crates and old 
containers in the direction I tried to escape.`;
   waitForClick; clearText; 
});
goto(lbl_0000122b);
let lbl_00001176;
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A138`); appendText; 
   Tsugumi`"Takeshi, after I've finished attaching this, 
return the valves to their original positions."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, gotcha."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi finished welding.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A139`); appendText; 
   Tsugumi`"The valve! Hurry!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright! Geez!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I quickly turned the valve back in the other 
direction.`;
   waitForClick; clearText; marker; appendText; 
   `I could feel the steam flowing through the 
valve.`;
   waitForClick; clearText; marker; sound(`T3A140`); appendText; 
   Tsugumi`"Coco, this pipe's done. Go on to the next 
one."`;
   waitForClick; clearText; marker; sound(`T3A141`); appendText; 
   Coco`"Okay, where is it?"`;
   waitForClick; clearText; marker; sound(`T3A142`); appendText; 
   Tsugumi`"Hmmm...hold on just a second."`;
   waitForClick; clearText; marker; appendText; 
   `The water underfoot still hadn't gone down at 
all and was swirling around.`;
   waitForClick; clearText; marker; appendText; 
   `The air conditioner on the wall was sucking 
in water and gurgling it out.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `It appeared it had also shorted out.`;
   waitForClick; clearText; marker; appendText; 
   `I could see blue-white sparks jumping around 
inside.`;
   waitForClick; clearText; marker; appendText; 
   `(I hope it doesn't shock me...)`;
   waitForClick; clearText; marker; appendText; 
   `I was starting to get a little scared.`;
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
   `CRACK!`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   `The air conditioner made an awful sound.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `And all of a sudden, muddy water started 
overflowing from the exhaust vent.`;
   waitForClick; clearText; marker; appendText; 
   `The area around my legs was quickly getting 
grimy.`;
   waitForClick; clearText; marker; sound(`T3A143`); appendText; 
   Tsugumi`"The drainage is starting to back-flow, be 
careful!"`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Wagh!"`;
   waitForClick; clearText; marker; appendText; 
   `My leg got caught up in the jet of muddy 
water and I lost my balance.`;
   waitForClick; clearText; marker; appendText; 
   `I reached out to grab something.`;
   waitForClick; clearText; marker; appendText; 
   `I caught on to a stack of crates and old 
containers lying nearby.`;
   waitForClick; clearText; 
});
let lbl_0000122b;
hideTextbox();
stopBGM();
playSFX({ name: `SE05_04`, a1: 0, volume: 100 });
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
   `CRASH!!`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_00`, a1: 0, volume: 100 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   `Although the crates caught my weight, they 
shifted and began spilling over.`;
   waitForClick; clearText; marker; appendText; 
   `Countless containers and rusty pipes started 
raining down.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `They passed me and headed on a direct course 
to hit the wall.`;
   waitForClick; clearText; marker; appendText; 
   `And in their path was—`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Coco, watch out!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A144`); appendText; 
   Coco`"Wha...?"`;
   waitForClick; clearText; marker; sound(`T3A145`); appendText; 
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
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `Metal was raining down.`;
   waitForClick; clearText; marker; appendText; 
   `The old pipe broke apart into thousands of 
pieces.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `The containers were splintering.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `They all struck the surface of the shallow 
water violently.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `The sound of hard, heavy objects falling 
echoed in the room.`;
   waitForClick; clearText; marker; appendText; 
   `The whole room quivered.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `A few pipes along the wall had ruptured and 
were spewing out water.`;
   waitForClick; clearText; marker; appendText; 
   `And where Coco had been sitting only a moment 
earlier... `;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playBGM({ num: 12, volume: 100 });
playSFX({ name: `SE02_07`, a1: 0, volume: 90 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `EV_TU07A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi lay...fallen over.`;
   waitForClick; clearText; marker; sound(`T3A146`); appendText; 
   Coco`"...!!"`;
   waitForClick; clearText; marker; appendText; 
   `Coco looked around at the spectacle and 
hugged Pipi to her tightly, her hands 
trembling.`;
   waitForClick; clearText; marker; appendText; 
   `Just before the metallic objects had crashed 
down on Coco's back, Tsugumi had thrust her 
out of the way.`;
   waitForClick; clearText; marker; appendText; 
   `She'd protected her...while risking her own 
life...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Tsugumi!!"`;
   waitForClick; clearText; marker; sound(`T3A147`); appendText; 
   Tsugumi`"Agh..."`;
   waitForClick; clearText; marker; appendText; 
   `A metal shard had dug deeply into Tsugumi's 
right thigh, and it didn't look like she 
could move.`;
   waitForClick; clearText; marker; appendText; 
   `Steam was pouring out of the burst pipes 
surrounding us.`;
   waitForClick; clearText; marker; appendText; 
   `And the drainage pump, not doing its job, 
continued belching out muddy water in large 
quantities.`;
   waitForClick; clearText; marker; sound(`T3A148`); appendText; 
   Tsugumi`"I guess I messed up."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi grimaced, and clasped her thigh 
tightly.`;
   waitForClick; clearText; marker; appendText; 
   `She was losing a lot of blood.`;
   waitForClick; clearText; marker; appendText; 
   `The murky water was getting redder by the 
moment...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, you okay!?"`;
   waitForClick; clearText; marker; sound(`T3A149`); appendText; 
   Tsugumi`"Heh, heh. Does this LOOK okay to you?"`;
   waitForClick; clearText; marker; sound(`T3A150`); appendText; 
   Tsugumi`"Always asking stupid questions."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"S-stop laughing! I'm going to get that stuff 
off you, just wait!!"`;
   waitForClick; clearText; marker; appendText; 
   `I hurried through the water to Tsugumi and 
tried to lift the metal off of her.`;
   waitForClick; clearText; marker; appendText; 
   `But, no matter how hard I tried, the heavy 
chunk wouldn't budge.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn it!"`;
   waitForClick; clearText; marker; sound(`T3A151`); appendText; 
   Tsugumi`"Looks like it's no use..."`;
   waitForClick; clearText; marker; appendText; 
   `In the meantime, the water level had risen 
from ankle to knee height.`;
   waitForClick; clearText; marker; sound(`T3A152`); appendText; 
   Coco`"Tsugumiii!!"`;
   waitForClick; clearText; marker; appendText; 
   `Coco crawled over to get closer to Tsugumi.`;
   waitForClick; clearText; marker; sound(`T3A153`); appendText; 
   Tsugumi`"Get away from me!"`;
   waitForClick; clearText; marker; appendText; 
   `Stung by Tsugumi's cold words, Coco stiffened 
and stopped.`;
   waitForClick; clearText; marker; sound(`T3A154`); appendText; 
   Tsugumi`"Get out of here, Coco."`;
   waitForClick; clearText; marker; sound(`T3A155`); appendText; 
   Tsugumi`"You too Takeshi, get out while you can..."`;
   waitForClick; clearText; marker; sound(`T3A156`); appendText; 
   Tsugumi`"At this rate, this room's partitions won't 
last."`;
   waitForClick; clearText; marker; sound(`T3A157`); appendText; 
   Tsugumi`"You'll all die if you stay."`;
   waitForClick; clearText; marker; sound(`T3A158`); appendText; 
   Tsugumi`"So, hurry..."`;
   waitForClick; clearText; marker; sound(`T3A159`); appendText; 
   Tsugumi`"Get out of here."`;
   waitForClick; clearText; marker; appendText; 
   Coco`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"....But-"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stupid idiot!! You think 
I can just leave you!?"`;
   waitForClick; clearText; marker; sound(`T3A160`); appendText; 
   Tsugumi`"There's nothing you can do, right? I'm stuck 
here."`;
   waitForClick; clearText; marker; sound(`T3A161`); appendText; 
   Tsugumi`"And with this injury, you can't help me 
anyway——"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up!!"`;
   waitForClick; clearText; marker; appendText; 
   `I roared out.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I won't let you give up on me now, dammit!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey Coco! What are you standing there for!?"`;
   waitForClick; clearText; marker; sound(`T3A162`); appendText; 
   Coco`"Wah! Y-yes!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Get on that intercom and contact the others!"`;
   waitForClick; clearText; marker; appendText; 
   `With all her might Coco moved her trembling 
legs to get closer to the intercom.`;
   waitForClick; clearText; marker; sound(`T3A163`); appendText; 
   Coco`"It's no use.... It's broken! I pushed the 
button, but nothing happens!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So run up and tell the others to get over 
here!"`;
   waitForClick; clearText; marker; sound(`T3A164`); appendText; 
   Coco`"O-okay, I'm going!!"`;
   waitForClick; clearText; marker; appendText; 
   `Although she looked flustered, Coco nodded 
and ran off.`;
   waitForClick; clearText; marker; appendText; 
   `The door to the warehouse closed.`;
   waitForClick; clearText; marker; appendText; 
   `Soon, water came up to the bottom of the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
bgload({ name: `EV_TU07B`, transition: 0 });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   `The water continued to rise.`;
   waitForClick; clearText; marker; appendText; 
   `From her waist down, Tsugumi was almost 
completely underwater.`;
   waitForClick; clearText; marker; appendText; 
   `The water level was almost over my knees.`;
   waitForClick; clearText; marker; sound(`T3A165`); appendText; 
   Tsugumi`"What are you trying to prove..."`;
   waitForClick; clearText; marker; sound(`T3A166`); appendText; 
   Tsugumi`"It doesn't mean anything...just leave. I 
don't want you here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wouldn't be here if there wasn't a reason."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't just leave you here."`;
   waitForClick; clearText; marker; sound(`T3A167`); appendText; 
   Tsugumi`"Why not?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've taken nothing but abuse from you, and 
you still haven't thanked me properly yet."`;
   waitForClick; clearText; marker; sound(`T3A168`); appendText; 
   Tsugumi`"Oh, really...heh, heh. Well that's reason 
enough I suppose. "`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi laughed weakly.`;
   waitForClick; clearText; marker; appendText; 
   `Her lips were trembling.`;
   waitForClick; clearText; marker; appendText; 
   `The murky water was spreading.`;
   waitForClick; clearText; marker; sound(`T3A169`); appendText; 
   Tsugumi`"It's gotten cold in here..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright Tsugumi...I need you to stay with me, 
now."`;
   waitForClick; clearText; marker; appendText; 
   `I chose my words as carefully as possible.`;
   waitForClick; clearText; marker; sound(`T3A170`); appendText; 
   Tsugumi`"I'm perfectly sane."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You'll be okay. The wound isn't that deep, so 
don't worry."`;
   waitForClick; clearText; marker; sound(`T3A171`); appendText; 
   Tsugumi`"'You'll be okay'...what makes you think that?"`;
   waitForClick; clearText; marker; sound(`T3A172`); appendText; 
   Tsugumi`"You're the one who's crazy..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm sorry, it's all my fault. I wasn't paying 
attention, and you got hurt..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG06A`, transition: 10 });
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `The water level was rising up to Tsugumi's 
head.`;
   waitForClick; clearText; marker; appendText; 
   `A section of the partitioning had broken and 
seawater was rushing in.`;
   waitForClick; clearText; marker; appendText; 
   `The water was ice cold, and seemed like it 
would freeze us. `;
   waitForClick; clearText; marker; appendText; 
   `The water volume increased mercilessly.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Her face contorted with pain.`;
   waitForClick; clearText; marker; appendText; 
   `In agony, she labored for breath.`;
   waitForClick; clearText; marker; appendText; 
   `There wasn't any time.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 90 });
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `Making up my mind, I dove into the water.`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't open my eyes.`;
   waitForClick; clearText; marker; appendText; 
   `All I could do was search the bottom using my 
intuition.`;
   waitForClick; clearText; marker; appendText; 
   `(aaaaaAAAAGGGH!)`;
   waitForClick; clearText; marker; appendText; 
   `(DAMN IT!!!)`;
   waitForClick; clearText; marker; appendText; 
   `Using all of my strength, I heaved up the 
large mass of metal sticking into Tsugumi's 
leg.`;
   waitForClick; clearText; marker; appendText; 
   `Aided slightly by the buoyancy of the water, 
the metal hunk moved slightly.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi pulled her leg out at once.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 1;
closeDimOverlay();
eff_4f = 0;
eff_3b = 20;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 30;
eff_3f = VAR_cc_0_6;
eff_40 = 1;
openShakeScreenAnim();
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgloadCrop({ name: `EV_TU09A`, transition: 20, x: 12, y: 12, hx: 775, hy: 581 });
showTextbox();
text(() => {
   marker; appendText; 
   `I lifted my face out of the water, gulping 
greedily for air.`;
   waitForClick; clearText; marker; appendText; 
   `The flooding wouldn't stop.`;
   waitForClick; clearText; marker; appendText; 
   `The water level was already above my shoulders.`;
   waitForClick; clearText; marker; sound(`T3A173`); appendText; 
   Tsugumi`"You are..."`;
   waitForClick; clearText; marker; sound(`T3A174`); appendText; 
   Tsugumi`"Such a stubborn idiot..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up and just keep quiet."`;
   waitForClick; clearText; marker; appendText; 
   `With her leg injured, there was no way 
Tsugumi could swim.`;
   waitForClick; clearText; marker; appendText; 
   `Holding onto her, I headed for the exit.`;
   waitForClick; clearText; marker; appendText; 
   `But the door was already under water.`;
   waitForClick; clearText; marker; sound(`T3A175`); appendText; 
   Tsugumi`"Look, there's no way you can save me..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I told you to keep quiet!"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's got to be another exit. I'll look 
for it."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It'll be okay. We'll find a way out of this."`;
   waitForClick; clearText; marker; sound(`T3A176`); appendText; 
   Tsugumi`"There you go again, saying 'It'll be 
okay'...you're so irresponsible..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Would you keep quiet!?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `I probably could have forced open the door if 
I had tried, but it would have put the 
second floor in danger of flooding.`;
   waitForClick; clearText; marker; appendText; 
   `I searched desperately for an emergency exit.`;
   waitForClick; clearText; marker; appendText; 
   `My legs wouldn't touch the floor.`;
   waitForClick; clearText; marker; appendText; 
   `I could hardly breathe.`;
   waitForClick; clearText; marker; appendText; 
   `I was at my limit.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".....!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's a ladder! In the corner of the room 
there's a ladder. We can use it to get to the 
emergency passage."`;
   waitForClick; clearText; marker; appendText; 
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
   `I swam with all my might to get to the ladder.`;
   waitForClick; clearText; marker; appendText; 
   `With Tsugumi draped over my back, I climbed 
up the ladder.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I opened the flood hatch at the end of the 
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
   `Going up immediately behind her, I quickly 
shut the hatch.`;
   waitForClick; clearText; marker; appendText; 
   `The sound of the flood, faded away....`;
   waitForClick; clearText; marker; appendText; 
   `But there wasn't time to rest.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was still losing blood.`;
   waitForClick; clearText; marker; appendText; 
   `I took her up on my back and began to run.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Damn, which way should I go...?"`;
   waitForClick; clearText; marker; appendText; 
   `A dead end in the passage had me totally lost.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A177`); appendText; 
   Sora`"Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   `Sora appeared suddenly in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora! Tsugumi is...Tsugumi is!!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A178`); appendText; 
   Sora`"I know. I heard everything from Coco."`;
   waitForClick; clearText; marker; sound(`T3A179`); appendText; 
   Sora`"Bring her to the infirmary immediately, You 
is currently preparing to treat her."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, I'm on my way! Now, which way do I 
go?"`;
   waitForClick; clearText; marker; sound(`T3A180`); appendText; 
   Sora`"Return back along this passage, go down the 
stairs on the right and take the standard 
passage to..."`;
   waitForClick; clearText; marker; appendText; 
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
   Takeshi`"Tsugumi, Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's okay, it's going to be okay....!"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"....."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi groaned painfully from her place on 
my back.`;
   waitForClick; clearText; marker; appendText; 
   `Even if she thought it was irresponsible of 
me, I couldn't bring myself to tell her 'It's 
no use, it's too late.'`;
   waitForClick; clearText; marker; appendText; 
   `As long as I had even a little hope, I didn't 
want to throw it away.`;
   waitForClick; clearText; 
});
bgload({ name: `BG08A1`, transition: 20 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I burst into the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   `I set the injured Tsugumi down on the bed.`;
   waitForClick; clearText; marker; appendText; 
   `She'd lost so much blood.`;
   waitForClick; clearText; marker; appendText; 
   `We had to take emergency measures immediately.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, what are we going to do!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A181`); appendText; 
   You`"Get out of the way!!"`;
   waitForClick; clearText; marker; appendText; 
   `You, who'd been waiting in the room, pushed 
me out of the way.`;
   waitForClick; clearText; marker; appendText; 
   `A tourniquet was taken out from a rack of 
medical instruments on the wall and fastened 
around Tsugumi's thigh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A182`); appendText; 
   You`"This is bad..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's the status? How bad is it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Can't we use that scanner to check it out?"`;
   waitForClick; clearText; marker; appendText; 
   `I pointed to the L-MRI.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A183`); appendText; 
   You`"It seems to be broken."`;
   waitForClick; clearText; marker; sound(`T3A184`); appendText; 
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
   `Sora put her hand on Tsugumi. A holographic 
window appeared in the air.`;
   waitForClick; clearText; marker; appendText; 
   `A small sensor, or camera started moving on 
the ceiling.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `YU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A185`); appendText; 
   Sora`"Well, this is just a bio scan, 
so I can't tell for certain, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A186`); appendText; 
   Sora`"Her femur is fractured. And it looks like it 
might be compound."`;
   waitForClick; clearText; marker; sound(`T3A187`); appendText; 
   Sora`"That and the artery is severed. She'll need 
sutures."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A188`); appendText; 
   You`"I've stitched up my finger before. It was 
with a survival kit, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A189`); appendText; 
   Sora`"Well, You, do you think you can assist me?"`;
   waitForClick; clearText; marker; sound(`T3A190`); appendText; 
   You`"I'll do my best! Do we have anesthetic?"`;
   waitForClick; clearText; marker; sound(`T3A191`); appendText; 
   Sora`"I'll get it ready. The laser scalpel, 
forceps and sutures ...everything we need, is 
already in the room."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sora moved the electric wagon, and used its 
robotic arm to gather the necessary surgical 
tools.`;
   waitForClick; clearText; marker; appendText; 
   `You flipped up Tsugumi's skirt, and started 
wiping off the wound.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A192`); appendText; 
   You`"Takeshi!!"`;
   waitForClick; clearText; marker; sound(`T3A193`); appendText; 
   You`"Don't stand there! You're in the way!"`;
   waitForClick; clearText; marker; appendText; 
   `You pointed angrily at the exit.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, yeah, sorry...take care of her, okay!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A194`); appendText; 
   You`"Leave it to me!"`;
   waitForClick; clearText; marker; appendText; 
   `You looked determined to show us all what she 
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
   `As soon as I left the tense atmosphere of the 
emergency room, my fatigue hit me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"*sigh*...."`;
   waitForClick; clearText; marker; appendText; 
   `I set myself down on a nearby chair.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A195`); appendText; 
   Coco`"Oh, Takepyon... Is Tsugumi going to be..."`;
   waitForClick; clearText; marker; appendText; 
   `Coco was holding onto Pipi, but looked as if 
she was having a hard time relaxing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You let them know right away so...she should 
be fine."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A196`); appendText; 
   Coco`"Really...?"`;
   waitForClick; clearText; marker; appendText; 
   `Coco's eyes were moist.`;
   waitForClick; clearText; marker; appendText; 
   `It was hard to tell, but she had probably 
been crying moments earlier.`;
   waitForClick; clearText; marker; appendText; 
   `Even still, she tried to smile.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A197`); appendText; 
   Coco`"Hey, you think Tsugumi's..."`;
   waitForClick; clearText; marker; sound(`T3A198`); appendText; 
   Coco`"Tsugumi's...gonna be okay, right?"`;
   waitForClick; clearText; marker; appendText; 
   `Still looking worried, she tilted her head as 
she asked me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. She'll be okay."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Absolutely fine...?"`;
   waitForClick; clearText; marker; appendText; 
   `I closed my hand into a fist...`;
   waitForClick; clearText; marker; appendText; 
   `And told myself.`;
   waitForClick; clearText; marker; appendText; 
   `She's going to be okay.`;
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
   `After what seemed like an eternity, You 
appeared from the infirmary with Sora.`;
   waitForClick; clearText; marker; appendText; 
   `The surgery was over—`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was going to live.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A199`); appendText; 
   Sora`"It required a total of 40 stitches 
and will take two months to heal completely."`;
   waitForClick; clearText; marker; sound(`T3A200`); appendText; 
   Sora`"And it will take her a few more months to be 
able to walk normally..."`;
   waitForClick; clearText; marker; sound(`T3A201`); appendText; 
   Sora`"Until a rescue team arrives at LeMU, and we 
can get her out of here, she's going to have 
to rest."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright. Thanks Sora."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And...good job, You."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You? What's wrong?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A202`); appendText; 
   You`"...What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A203`); appendText; 
   You`"Oh...um, nothing, I'm just really tired...you 
know..."`;
   waitForClick; clearText; marker; sound(`T3A204`); appendText; 
   You`"I've never done an operation like that 
before..."`;
   waitForClick; clearText; marker; appendText; 
   `After that You looked down and didn't say much.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A205`); appendText; 
   Sora`"By the way, it looks like the flooding 
stopped in the Zweite stock warehouse."`;
   waitForClick; clearText; marker; sound(`T3A901`); appendText; 
   Sora`"All pipelines connecting to the warehouse 
have been closed as an emergency measure and 
the whole area has been sealed off from 
Zweite. `;
   waitForClick; clearText; sound(`T3A902`); appendText; 
   Sora`So, we don't have to worry about the 
flood damage expanding."`;
   waitForClick; clearText; marker; sound(`T3A207`); appendText; 
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
removeBG({ mode: BLACK, transition: 2 });
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
l_choice = 0;
jump(`T_3B`);
