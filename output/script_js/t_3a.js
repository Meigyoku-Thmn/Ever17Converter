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
   `I awoke from my slumber.`;
   `I felt something cold and hard...`;
   `I remembered slouching in the chair and slumping forward on the table.`;
   `Even then, the sleep that I'd gotten was far better than the day before.`;
   Takeshi`"Hey, g'mornin'..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A000)`"Oh, good morning Takeshi."`;
   `It appeared that You had gotten up just before me.`;
   Takeshi`"What time is it?"`;
   You(T3A001)`"Almost 5:50 a.m. I think..."`;
   Takeshi`"You sure are an early riser."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A002)`"What are you talking about? You're just lazy..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Saying that, You let out a big yawn.`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A003)`"Then again, being all tense for so long just gets you tired. It's probably better to sleep when you can."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A004)`"Being in a situation like this, we really need to keep well rested."`;
   You(T3A005)`"'Cause when it comes down to it, if we can't think our way out of this situation we're in trouble!"`;
   Takeshi`"Hey, I said that yesterday!"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A006)`"Yeah...I suppose you did..."`;
   `Dodging the subject, You laughed slightly.`;
   You(T3A007)`"Hey, since you're up, why don't you go wash your face?"`;
   Takeshi`"Yeah, I might as well..."`;
   Takeshi`"Ah! Hey, you didn't write on my face again did you...!?"`;
   `I instinctively rubbed my cheeks.`;
   You(T3A008)`"Don't worry, I didn't write anything."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I stood up slowly and checked my surroundings.`;
   `Coco had arranged some chairs to create a makeshift bed. She was asleep on top of them.`;
   `And at the base of her pillow, Pipi's neck was cocked to the side.`;
   `It looked like he was sleeping too.`;
   `I got up, squeezed by the sleeping Coco and opened the door.`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A009)`"Hey."`;
   Takeshi`"...Oh, mornin' Kid."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A010)`"Hey, don't look so depressed Takeshi."`;
   Takeshi`"What are you talking about. I'm just sleepy's all."`;
   Kid(T3A011)`"Well, a lot's happened in the last couple of days. Are you tired?"`;
   Takeshi`"I'm alright. I just need to wake up is all. See ya."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
delay({ interval: 30 });
playSFX({ name: `SE01_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I headed to the nearest bathroom.`;
   `The water covering the floor seeped into my shoes, which had only just finished drying. They were wet all over again.`;
   `My socks got heavy and clung to my feet.`;
   `My pace slowed.`;
   Takeshi`"......."`;
   Takeshi`"......"`;
   Takeshi`"...Argh! What a freakin' pain!!"`;

});
hideTextbox();
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `SPLASH!!`;
   `Scooping up water from around my feet, I splashed it on my face.`;
   Takeshi`"Whoa, that's cold...!!!"`;
   `I was shivering, but at the same time, my whole body felt awake.`;
   `So that's why people wash their faces in the morning...`;

});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   `When I went back to the Conference Room, the conversation quickly turned to what we were going to eat.`;
   Takeshi`"Tsugumi and Sora aren't here, you sure it's okay?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A012)`"Yeah...but they're sure to show up soon."`;
   Takeshi`"Yeah, knowing those two, you're probably right."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I decided to wake up Coco.`;
   Takeshi`"Hey, get up. It's morning."`;
   `I shook her shoulder gently.`;

});
fgload({ id: 1, name: `CO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A013)`"Funyuu...hmmmmm..."`;
   `Rubbing her eyes, Coco got up slowly.`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A014)`"Oh, good morning...Brother..."`;
   Takeshi`"...Huh?"`;
   Takeshi`"Oh, yeah. Coco you have a brother? But, hey, you got the two of us mixed up..."`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A015)`"No...brother..."`;
   Coco(T3A016)`"We need to get ready, or we'll be late for school..."`;
   `Coco was still half in dreamland.`;
   Takeshi`"Late for school?"`;
   Takeshi`"What are you talking about?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A017)`"Well, that's just the setting it is..."`;
   Takeshi`"Uh, listen..."`;
   Takeshi`"Stop messing around, we're going to eat."`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A018)`"Ah.... Okay, Takepyon."`;

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
   `We all made our way to the kiosk.`;
   Takeshi`"Everyone okay with hotdogs?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO06ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A019)`"Hotdogs?"`;
   You(T3A020)`"They have hotdogs here?"`;
   Takeshi`"Well, I found a few in the back of the fridge. Must've been on the 'stealth menu.'"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I was relegated cook duty again.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A021)`"Hey, Takeshi, are they done yet?"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A022)`"Why do I have to be so hungryyy?"`;
   You(T3A023)`"My stomach is going to cave in..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A024)`"I'm going to become two dimensional."`;
   You(T3A025)`"And float away on the wind."`;
   Takeshi`"Would you shut up already?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A026)`"Ha, ha, ha..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I was inside the kiosk that had been made to look like a submarine.`;
   `Sausages were sizzling in a frying pan.`;
   `They sold sub sandwiches here, so I guess the exterior of the place was a sorry play on that.`;
   `(Why am I thinking about...stupid things like that...?)`;
   `In a little while, the place started to smell great.`;
   `I carefully placed a sausage in the toasted, lightly buttered hotdog buns.`;
   Takeshi`"Alright, whoever wants to eat, get in line!"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A027)`"I'm first!"`;
   Takeshi`"Oh!? Well, here ya go."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A028)`"Thank you!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Help yourself to ketchup and mustard."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A029)`"Uh, I'd like one too..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A030)`"Hey, wait in line! The next person is M-E-!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `This was probably the way things usually were at this shop.`;
   `There still wasn't any schedule as to when we might get out of LeMU.`;
   `But in the meantime, we'd stopped thinking about the difficult and negative things.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A031)`"I'm not sure why, but you look like you're having fun."`;
   Takeshi`"Who, me? You think so? Fun...I guess maybe..."`;
   `I wiped the sweat caused by the heat of cooking from my face.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO02ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A032)`"Yeah, you look like you might even be enjoying your life here."`;
   Takeshi`"I wonder how that'd feel...I guess it'd be kind of fun, owning a stand like this!"`;

});
fgload({ id: 2, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A033)`"Owning...a stand..."`;
   `The Kid stifled a laugh.`;

});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A034)`"Takepyon, you really do look like you work here."`;
   Takeshi`"Hotdogs, get your hotdogs! They're on the house!"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A035)`"You don't think, that maybe you could have sold hotdogs in a past life?"`;
   Takeshi`"Aw shucks, ma'am you're just sayin' that..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A036)`"No, Coco, I don't think he was a hotdog man, I think he was..."`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A037)`"...a sandwich man?"`;
   Takeshi`"Ah, come on, You!"`;

});
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A038)`"A ha, ha, ha, ha..."`;
   Takeshi`"...Ha, ha, ha."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I suppose we were just happy to be eating hot food.`;
   `We could worry about the details after our stomachs were full.`;
   `For the moment, we were enjoying eating that simple meal.`;

});
hideTextbox();
stopBGM();
clock(`6:38`);
showTextbox();
text(() => {
   `After spending some time laughing...`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A039)`"Ah...!"`;
   `The Kid suddenly looked up at the ceiling.`;

});
fgload({ id: 1, name: `KA14ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A040)`"Wh-what's that...?"`;
   `He blinked, his eyes were focused on the ceiling as if he had seen something.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"H-hey, what's wrong?"`;
   `My curiosity piqued, I asked him.`;
   `And following his gaze, I looked up at the ceiling.`;
   `But, I couldn't see anything out of the ordinary...`;

});
fgload({ id: 1, name: `KA13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A041)`"I wonder..."`;
   Kid(T3A042)`"I don't know what it was, but I swear I saw something."`;
   Takeshi`"Saw something? Like what?"`;
   Kid(T3A043)`"Uhh...well, I didn't really see it..."`;
   Kid(T3A044)`"I just have a bad feeling... about the second floor...somewhere."`;
   Takeshi`"What the heck are you talking about?"`;
   Kid(T3A045)`"Um, I think we should check that floor one more time..."`;
   `His eyes looked upward again and started mumbling incoherently. Concerned, I shook his shoulder.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And then he snapped out of it.`;
   Takeshi`"Don't worry about it. If something's up, Sora would warn us about it, right?"`;

});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A046)`"Yeah...you're right...but still..."`;
   Takeshi`"Looks like I'm not the only one who's tired."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Then Tsugumi appeared out of nowhere.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A047)`"What just happened?"`;
   Takeshi`"Nah, we were all just eating hotdogs. Look, I made one for you, too."`;
   Tsugumi`"......"`;
   `Tsugumi took it without saying anything.`;

});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 3, volume: 100 });
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I could hear the sound of her taking the hotdog out of its wrapper.`;
   `And I watched her motions carefully.`;
   `I swallowed, watching her...`;
   `Tsugumi placed the wrapper on the counter...`;
   `Slowly, with the ketchup in her right hand and the mustard in her left, she squeezed the tubes. Their contents gushed out.`;
   Takeshi`"H-hey, Tsugumi!"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A048)`"What?"`;
   `The hotdog was entirely covered in red and yellow.`;
   Takeshi`"You eat that much mustard and...it'll kill you..."`;

});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A049)`"...Really?"`;
   `Tsugumi bit into the hotdog.`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"......"`;
   Takeshi`"H-hey? Is it spicy? I bet it's spicy?"`;

});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A050)`"Not really."`;
   Takeshi`"You're probably thinking to yourself 'Dang, I put way too much on!' Right?"`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A051)`"...I don't...really care."`;
   `And after that she continued eating, in silence.`;
   `But, I thought I'd seen a glimmer.`;
   `Of eyes slightly starting to tear.`;
   Takeshi`"Hey, don't strain yourself."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A052)`"I'm not. I'm finished."`;
   Takeshi`"Oh..."`;

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
   Takeshi`"By the way, where'd you go this morning?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A053)`"...Why? What do you want to know that for?"`;
   Takeshi`"Well, when everyone went to bed, you were still with us, right?"`;
   Takeshi`"But when we got up, we couldn't find you so..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A054)`"So what..."`;
   Tsugumi(T3A055)`"It's none of your business."`;
   Takeshi`"That's not true."`;
   Takeshi`"I'm in charge of breakfast, right? So, I just wanted to know if you wanted some."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A056)`"I ate, okay? Enough already."`;
   Takeshi`"What? No, uh, I mean, YEAH, but..."`;
   Takeshi`"It was on my mind, you know? I guess I was worried..."`;
   Takeshi`"I wondered, what happened to you?"`;
   Takeshi`"Where'd you go? Where do you always disappear to?"`;
   Takeshi`"I guess I just wanted to know."`;
   Takeshi`"Hey, I got it...You just had to find a place to go by yourself, right?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `As usual these questions were getting me nowhere.`;
   Takeshi`"Well, if you don't want to answer, don't worry about it."`;

});
goto(lbl_00000736);
let lbl_000006e1;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"Hey, you want another one? I can make you one."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A057)`"No thanks."`;
   Takeshi`"You always just wolf your food down. I don't know, but there just isn't much satisfaction in cooking for you."`;
   Takeshi`"Besides, with all that ketchup and mustard on it, you probably can't even taste it."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A058)`"It doesn't matter how it tastes."`;
   Takeshi`"Of course it matters!"`;
   Takeshi`"I'm doing my best to show you how real cookin' tastes!"`;
   Takeshi`"You just wait, I'll cook you up a meal that will wake up your tastebuds...!!"`;

});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A059)`"I've had enough to eat, okay?"`;
   Tsugumi(T3A060)`"I'm full..."`;
   Takeshi`"...Hmph."`;
   Takeshi`"Well, if you say so."`;

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
   `Boooooom!`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Suddenly, a low metallic sound reverberated throughout the installation.`;
   `It was a dull, muffled sound.`;

});
hideTextbox();
closeShakeScreenAnim();
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Wh-what was that!?"`;
   Tsugumi(T3A061)`"This whole place just shook...a little."`;
   `Tsugumi's eyes darted around, as if searching for something.`;
   `Moments later the Kid and Coco, who'd both been resting in another room, appeared.`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `CO06ADS`, name2: `KA08ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"Hey kid, what was that?"`;
   Kid(T3A062)`"Uh, I don't know..."`;
   Takeshi`"Hey, this doesn't have anything to do with that 'bad feeling' you had earlier, does it?"`;

});
fgload({ id: 2, name: `KA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The Kid shook his head.`;
   Kid(T3A063)`"I don't know. Maybe we should ask Sora..."`;
   Sora(T3A064)`"Did you call for me?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `From out of nowhere Sora appeared in midair and floated down in front of us.`;
   Coco(T3A065)`"Ah, hi Sora!"`;
   Takeshi`"Hey, Sora! Where were you?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A066)`"I'm terribly sorry. I overslept."`;
   `Sora looked embarrassed.`;
   Takeshi`"Overslept? But you're..."`;
   Takeshi`"...Nah, we'll save that for later."`;
   Kid(T3A067)`"Hey, did something just happen? There was an awful noise just now."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A068)`"One of the shafts that supports this floor has started to warp."`;
   Kid(T3A069)`"We didn't see any signs of it yesterday..."`;
   Sora(T3A070)`"Yes, well, it wasn't in my calculations. It appears as if the ocean currents may have influenced this outcome."`;
   Takeshi`"How dangerous are we talking about here?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A071)`"Well it should be within the margin of error, but...no, wait a second."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A072)`"There is an anomaly in one the of pressure-regulating pipelines, at Zweite stock's warehouse."`;
   Takeshi`"'What are pressure-regulating pipes?"`;
   Sora(T3A073)`"These pipelines are responsible for adjusting the pressure inside the multi-layered bulkheads comprising LeMU."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A074)`"If any of them should rupture, for whatever reason, I am incapable of repairing them."`;
   Sora(T3A075)`"The anomaly is only slight, so you shouldn't have to hurry, but...I think it is best if someone goes to check on it. Would you please go for me?"`;
   Takeshi`"Sure, leave it to me."`;
   `I volunteered right away.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `TU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A076)`"I'll go, too."`;
   `Unexpectedly, Tsugumi also agreed to go.`;
   Takeshi`"Tsugumi? You sure?"`;
   Tsugumi(T3A077)`"Well, if we're going to fix something, we'll need tools, right? I know my way around a workshop."`;
   Takeshi`"Alright.... Let's go."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(2, 1, 4);
multifgload3({ name1: `CO15ADS`, name2: `SO11ADS`, name3: `KA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T3A078)`"I'll help too!"`;
   Pipi(PIPI_00)`"Woof."`;
   Takeshi`"Okay, you can come too Coco.... Hey. Does anyone know where You went?"`;
   `I looked around but didn't see You anywhere.`;

});
fgload({ id: 4, name: `KA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3A079)`"She went to the Control Room when things were shaking earlier."`;

});
fgload({ id: 2, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A080)`"We must have just missed each other."`;
   Kid(T3A081)`"I'll go and tell her that you're going up above."`;
   Takeshi`"Alright Kid. I'll leave it to you. Keep an eye on things from the Control Room, will you? Just to make sure we don't miss anything..."`;

});
fgload({ id: 2, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A082)`"If something comes up, use LeMMIH to contact me."`;
   Kid(T3A083)`"Alright, see you!!"`;

});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Bounding across the water's surface, the Kid shot down the corridor.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(4, 2, 1);
bgload({ name: `BG29A1`, transition: 20 });
clock(`6:57`);
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `We climbed the emergency stairs quickly.`;
   `Even if there wasn't any need to hurry, we couldn't afford to waste any time.`;
   `Tsugumi set her sights on the floor above and started lugging the heavy toolbox.`;
   `Coco and Pipi followed right behind.`;
   Takeshi`"By the way, Sora..."`;
   `I asked Sora, who was gliding alongside me, something that had been on my mind.`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A084)`"Yes, Takeshi. What is it?"`;
   Takeshi`"You mention you'd 'overslept' earlier...?"`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A085)`"Y-yes, I'm sorry..."`;
   `Sora's face went a deep shade of red.`;
   Sora(T3A086)`"Actually, there was a routine maintenance on one of the servers, where my data is stored. It initiated automatically this morning."`;

});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A087)`"It appears that it took some time for the return processing. I was a little too optimistic on the preliminary check. I'm terribly sorry."`;
   Takeshi`"Hmm, so that's what it was."`;
   Takeshi`"...A, ha, ha, ha."`;
   `I laughed for some reason.`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A088)`"Um, er, what...did I say something amusing?"`;
   `Sora was confused.`;
   Takeshi`"No, I just thought it was funny that even YOU could oversleep, Sora."`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A089)`"Ahh...that's funny...?"`;
   Takeshi`"How should I put it?...It's cute."`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A090)`"'Cute'...!?"`;
   Takeshi`"Yeah."`;
   Sora(T3A091)`"Sleeping in is...cute??"`;
   Sora(T3A092)`"That does not compute..."`;
   `Sora's eyes went round.`;
   `Maybe it was because this particular use of the word wasn't in her database.`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A093)`"I've caused all of you such trouble..."`;
   Takeshi`"Hey, nobody's angry. Don't let it bother you."`;
   Takeshi`"Everyone knows that you're working hard."`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A094)`"Ah, yes. Thank you..."`;
   `Although Sora looked somewhat puzzled, her cheeks seemed to glow with joy.`;
   `And for some reason I found that amusing too.`;
   Sora(T3A095)`"Really...is it...cute...?"`;
   `I thought it was a charmingly innocent reaction.`;
   `I supposed it was the kind of thing you'd call 'cute.'`;

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
   `We reached Zweite stock.`;
   `It didn't look like there was anything wrong with the floor, but I could hear a small hissing sound.`;
   `I headed in the direction of the noise.`;

});
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `SO03ADS`, name2: `CO11ADS`, name3: `TU11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"Still, there wasn't any sign of this yesterday."`;
   Takeshi`"Why do you think this happened all of a sudden?"`;
   Sora(T3A096)`"Well.... Everything doesn't always go according to plan..."`;

});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A097)`"Is it because everyone was bouncing around so much?"`;
   `Coco said this casually.`;

});
fgload({ id: 1, name: `SO15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Eh?"`;

});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A098)`"Well, because everyone was making such a commotion."`;
   Coco(T3A099)`"I wonder if that's why LeMU started to tilt?"`;
   Takeshi`"I, I don't think so."`;
   Tsugumi`"......"`;

});
multifgload2({ id1: 2, id2: 4, name1: `CO15ADS`, name2: `TU10ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A100)`"Ha, ha, maybe it is."`;
   `Tsugumi laughed softly.`;

});
fgload({ id: 4, name: `TU12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A101)`"But if we make some repairs, everything should be fine."`;
   Coco(T3A102)`"Yeah, I guess so. Right, Tsugumi?"`;
   Tsugumi(T3A103)`"Yeah. Don't worry about it, Coco."`;

});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A104)`"Whew! I'm so relieved."`;
   Coco(T3A105)`"Woo hoo! Alright!"`;
   Pipi(PIPI_04)`"Rrruff! Rrruf!"`;

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
   `We stood in front of the room where the hissing sound was coming from.`;
   Takeshi`"Yep, the noise is coming from the warehouse."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A106)`"I'm going to perform a scan to determine the status of the area."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that Sora disappeared.`;
   Takeshi`"The steam in there isn't going to explode, if we open the door, right?"`;
   `After I asked that, Tsugumi eyed the door uncertainly.`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A107)`"Hmmm..."`;

});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A108)`"It's probably fine."`;
   Takeshi`"You can tell? Hey, you aren't..."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A109)`"I'm just saying what you want to hear."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora suddenly appeared near the door.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A110)`"I've run the diagnostic."`;
   Sora(T3A111)`"Atmospheric pressure is normal. No traces of toxic gas detected. The temperature and humidity of the room are rising in slight increments."`;
   Sora(T3A112)`"An area of the pipe has ruptured, and there is a slight water leak. The water is about four inches at its deepest point."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A113)`"That's hardly anything at all."`;

});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A114)`"Well, yes, but..."`;
   Takeshi`"Let's go in. If we fix it, there won't be a problem, right?"`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A115)`"Yes. Please hurry."`;

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
   `I opened the door.`;
   `I looked at the wall where the hissing sound was coming from.`;
   `There was a faint crack in the pressure-regulating pipe, and water was dancing out of it in a fine mist.`;
   `If that's all it was, it didn't seem like we had anything to worry about.`;
   `I thought we'd be able to fix it in no time.`;

});
playSFX({ name: `SE10_22`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Tsugumi had opened up the toolbox, and started spreading a few tools out in front of her.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"What do we need to do?"`;
   Tsugumi(T3A116)`"The pipe is bent a little bit...I'm going to clamp a metal sleeve on it, would you support the pipe for me?"`;
   Takeshi`"Roger that!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A117)`"What should I do?"`;
   Tsugumi(T3A118)`"On the other side of this...there should be a valve attached to this pipe. You see it? I want you to loosen that a bit."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A119)`"Okaaaay, gotcha."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We all started working in unison.`;

});
playSFX({ name: `SE10_20`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `We opened and closed the valves on a number of pipes, re-attached pipes and welded shut cracks...`;

});
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"You seem really used to all this."`;

});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A120)`"What do you mean?"`;
   Takeshi`"Welding. Where'd you learn that?"`;
   Tsugumi(T3A121)`"You want to know?"`;
   Takeshi`"Uh, well it's just that..."`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A122)`"You know, asking meaningless questions is a bad habit of yours."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And after that, I didn't feel I could ask anything else.`;
   `Sora just stayed close to us, watching.`;

});
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `After a while an intercom rang from the corner of the room.`;

});
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Huh, did someone call?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A123)`"I'm sorry everyone, It seems like You is calling me. I need to go."`;
   Takeshi`"Okay, go for it. We should be able to handle the rest ourselves."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A124)`"Okay. I'll leave the rest to you."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora got close to the intercom, and it looked like she got sucked into the receiver.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I knew she could travel instantly, but still...it was disconcerting.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A125)`"Takeshi? Don't just stand there, on to the next pipe."`;
   Takeshi`"Huh? Oh, okay."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A126)`"First take that blue valve and..."`;
   `The water underfoot hadn't gone down at all. Although the drain pump was moving, the drainage pipe was broken.`;
   Tsugumi(T3A127)`"After that I want you to turn the red valve..."`;
   `We'd fixed a number of pipes, but the sound of escaping steam still hadn't stopped.`;
   Tsugumi(T3A128)`"Alright Coco, wait just a bit."`;
   Coco(T3A129)`"Okay, I'm ready."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A130)`"Takeshi, move the valves in the order I told you. Now."`;
   Takeshi`"......"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A131)`"Hey, you listening Takeshi?"`;
   Takeshi`"Huh? Yeah, alright, alright. I'm sorry. Blue then red, right?"`;
   Tsugumi(T3A132)`"Yeah. Loosen them and then shut them again."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I set to work upon the blue valve in front of me.`;
   `I was supposed to loosen this...`;
   `(Eh? Which way was I supposed to turn this again...?)`;

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
   `I'm supposed to turn this clockwise, yeah...`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I turned the blue valve with all of my strength.`;

});
hideTextbox();
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The sound of rushing air grew louder.`;

});
goto(lbl_00000fde);
let lbl_00000f9f;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   `I'm supposed to turn this counterclockwise, yeah...`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I turned the blue valve with all of my strength.`;

});
hideTextbox();
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The sound of rushing steam grew softer.`;

});
let lbl_00000fde;
showTextbox();
text(() => {
   `Alright, next close the red valve...`;
   `The next valve was nearby.`;

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
   `This one goes clockwise, right...`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I turned the red valve.`;

});
hideTextbox();
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The strength of the steam coming from the pipe weakened.`;

});
goto(lbl_00001086);
let lbl_00001048;
l_made_the_pipe_steam_sounds_louder = 1;
showTextbox();
text(() => {
   `This one goes counterclockwise, right...`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I turned the red valve.`;

});
hideTextbox();
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The strength of the steam coming from the pipe got stronger.`;

});
let lbl_00001086;
showTextbox();
text(() => {
   `(Alright, that does it.)`;
   Takeshi`"Okay!"`;
   Tsugumi(T3A133)`"Coco, hold on just a little longer."`;
   Coco(T3A134)`"Okay."`;

});
playSFX({ name: `SE10_21`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Holding up her left hand to shield her face, Tsugumi operated the welding torch with her right hand.`;
   `The crack in the pipe closed visibly.`;

});
hideTextbox();
stopSFX()
if (l_made_the_pipe_steam_sounds_louder == 0) goto(lbl_00001176);
showTextbox();
text(() => {
   Tsugumi(T3A135)`"Takeshi, go support that pipe, it looks like it's shaking."`;
   `Tsugumi barked the order to me as she was welding.`;
   Takeshi`"Alright! Geez!"`;
   `I reached out to touch the pipe, with the valve I'd just closed.`;

});
hideTextbox();
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Ouch!"`;
   `The pipe was scalding hot, and I pulled my hand back instinctively.`;

});
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A136)`"Huh? That shouldn't be.... Did you turn the valve the right way?"`;
   Takeshi`"Yeah, I think so."`;

});
fgload({ id: 1, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A137)`"That's strange..."`;
   Takeshi`"Well, we're going to have to support this pipe somehow. I'll try to find a cover..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked around.`;
   `And the moment I took my eyes off the pipe.`;

});
hideTextbox();
playSFX({ name: `SE07_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Creak, crackle....crack!!`;
   Takeshi`"What?"`;
   `Turning toward the sound, I could see the pipe swelling rapidly.`;

});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `BOOM!`;
   `The cap burst off, and flew toward my head.`;
   `I pulled back, dodging suddenly.`;
   `The flying metal ricocheted off the floor and came to a stop.`;
   Takeshi`"That was close....WoooAAH!?"`;

});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `BAM!!!`;

});
hideTextbox();
playSFX({ name: `SE07_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `KA-BOOM!!!`;
   `One after another metal pipes bent and then exploded around me, `;
   Takeshi`"Waaagh!"`;
   `I panicked and got the hell out of there.`;
   `But there were stacks of crates and old containers in the direction I tried to escape.`;

});
goto(lbl_0000122b);
let lbl_00001176;
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A138)`"Takeshi, after I've finished attaching this, return the valves to their original positions."`;
   Takeshi`"Okay, gotcha."`;
   `Tsugumi finished welding.`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T3A139)`"The valve! Hurry!"`;
   Takeshi`"Alright! Geez!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I quickly turned the valve back in the other direction.`;
   `I could feel the steam flowing through the valve.`;
   Tsugumi(T3A140)`"Coco, this pipe's done. Go on to the next one."`;
   Coco(T3A141)`"Okay, where is it?"`;
   Tsugumi(T3A142)`"Hmmm...hold on just a second."`;
   `The water underfoot still hadn't gone down at all and was swirling around.`;
   `The air conditioner on the wall was sucking in water and gurgling it out.`;

});
playSFX({ name: `SE07_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `It appeared it had also shorted out.`;
   `I could see blue-white sparks jumping around inside.`;
   `(I hope it doesn't shock me...)`;
   `I was starting to get a little scared.`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `CRACK!`;
   Takeshi`"!?"`;
   `The air conditioner made an awful sound.`;

});
hideTextbox();
playSFX({ name: `SE02_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `And all of a sudden, muddy water started overflowing from the exhaust vent.`;
   `The area around my legs was quickly getting grimy.`;
   Tsugumi(T3A143)`"The drainage is starting to back-flow, be careful!"`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"Wagh!"`;
   `My leg got caught up in the jet of muddy water and I lost my balance.`;
   `I reached out to grab something.`;
   `I caught on to a stack of crates and old containers lying nearby.`;

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
   `CRASH!!`;

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
   `Although the crates caught my weight, they shifted and began spilling over.`;
   `Countless containers and rusty pipes started raining down.`;

});
playSFX({ name: `SE07_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `They passed me and headed on a direct course to hit the wall.`;
   `And in their path was—`;
   Takeshi`"Coco, watch out!!"`;

});
fgload({ id: 1, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A144)`"Wha...?"`;
   Tsugumi(T3A145)`"Get back!!"`;

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
   `Metal was raining down.`;
   `The old pipe broke apart into thousands of pieces.`;

});
playSFX({ name: `SE02_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The containers were splintering.`;

});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `They all struck the surface of the shallow water violently.`;

});
playSFX({ name: `SE06_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The sound of hard, heavy objects falling echoed in the room.`;
   `The whole room quivered.`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `A few pipes along the wall had ruptured and were spewing out water.`;
   `And where Coco had been sitting only a moment earlier... `;

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
   `Tsugumi lay...fallen over.`;
   Coco(T3A146)`"...!!"`;
   `Coco looked around at the spectacle and hugged Pipi to her tightly, her hands trembling.`;
   `Just before the metallic objects had crashed down on Coco's back, Tsugumi had thrust her out of the way.`;
   `She'd protected her...while risking her own life...`;

});
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Tsugumi!!"`;
   Tsugumi(T3A147)`"Agh..."`;
   `A metal shard had dug deeply into Tsugumi's right thigh, and it didn't look like she could move.`;
   `Steam was pouring out of the burst pipes surrounding us.`;
   `And the drainage pump, not doing its job, continued belching out muddy water in large quantities.`;
   Tsugumi(T3A148)`"I guess I messed up."`;
   `Tsugumi grimaced, and clasped her thigh tightly.`;
   `She was losing a lot of blood.`;
   `The murky water was getting redder by the moment...`;
   Takeshi`"Hey, you okay!?"`;
   Tsugumi(T3A149)`"Heh, heh. Does this LOOK okay to you?"`;
   Tsugumi(T3A150)`"Always asking stupid questions."`;
   Takeshi`"S-stop laughing! I'm going to get that stuff off you, just wait!!"`;
   `I hurried through the water to Tsugumi and tried to lift the metal off of her.`;
   `But, no matter how hard I tried, the heavy chunk wouldn't budge.`;
   Takeshi`"Damn it!"`;
   Tsugumi(T3A151)`"Looks like it's no use..."`;
   `In the meantime, the water level had risen from ankle to knee height.`;
   Coco(T3A152)`"Tsugumiii!!"`;
   `Coco crawled over to get closer to Tsugumi.`;
   Tsugumi(T3A153)`"Get away from me!"`;
   `Stung by Tsugumi's cold words, Coco stiffened and stopped.`;
   Tsugumi(T3A154)`"Get out of here, Coco."`;
   Tsugumi(T3A155)`"You too Takeshi, get out while you can..."`;
   Tsugumi(T3A156)`"At this rate, this room's partitions won't last."`;
   Tsugumi(T3A157)`"You'll all die if you stay."`;
   Tsugumi(T3A158)`"So, hurry..."`;
   Tsugumi(T3A159)`"Get out of here."`;
   Coco`"......"`;
   Takeshi`"....But-"`;
   Takeshi`"Stupid idiot!! You think I can just leave you!?"`;
   Tsugumi(T3A160)`"There's nothing you can do, right? I'm stuck here."`;
   Tsugumi(T3A161)`"And with this injury, you can't help me anyway——"`;
   Takeshi`"Shut up!!"`;
   `I roared out.`;
   Takeshi`"I won't let you give up on me now, dammit!"`;
   Takeshi`"Hey Coco! What are you standing there for!?"`;
   Coco(T3A162)`"Wah! Y-yes!?"`;
   Takeshi`"Get on that intercom and contact the others!"`;
   `With all her might Coco moved her trembling legs to get closer to the intercom.`;
   Coco(T3A163)`"It's no use.... It's broken! I pushed the button, but nothing happens!!"`;
   Takeshi`"So run up and tell the others to get over here!"`;
   Coco(T3A164)`"O-okay, I'm going!!"`;
   `Although she looked flustered, Coco nodded and ran off.`;
   `The door to the warehouse closed.`;
   `Soon, water came up to the bottom of the door.`;

});
playSFX({ name: `SE02_11L`, a1: 0, volume: 95 });
bgload({ name: `EV_TU07B`, transition: 0 });
showTextbox();
text(() => {
   Tsugumi`"......"`;
   Takeshi`"......"`;
   `The water continued to rise.`;
   `From her waist down, Tsugumi was almost completely underwater.`;
   `The water level was almost over my knees.`;
   Tsugumi(T3A165)`"What are you trying to prove..."`;
   Tsugumi(T3A166)`"It doesn't mean anything...just leave. I don't want you here."`;
   Takeshi`"I wouldn't be here if there wasn't a reason."`;
   Takeshi`"I can't just leave you here."`;
   Tsugumi(T3A167)`"Why not?"`;
   Takeshi`"I've taken nothing but abuse from you, and you still haven't thanked me properly yet."`;
   Tsugumi(T3A168)`"Oh, really...heh, heh. Well that's reason enough I suppose. "`;
   `Tsugumi laughed weakly.`;
   `Her lips were trembling.`;
   `The murky water was spreading.`;
   Tsugumi(T3A169)`"It's gotten cold in here..."`;
   Takeshi`"Alright Tsugumi...I need you to stay with me, now."`;
   `I chose my words as carefully as possible.`;
   Tsugumi(T3A170)`"I'm perfectly sane."`;
   Takeshi`"You'll be okay. The wound isn't that deep, so don't worry."`;
   Tsugumi(T3A171)`"'You'll be okay'...what makes you think that?"`;
   Tsugumi(T3A172)`"You're the one who's crazy..."`;
   Takeshi`"I'm sorry, it's all my fault. I wasn't paying attention, and you got hurt..."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;

});
bgload({ name: `IMG06A`, transition: 10 });
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The water level was rising up to Tsugumi's head.`;
   `A section of the partitioning had broken and seawater was rushing in.`;
   `The water was ice cold, and seemed like it would freeze us. `;
   `The water volume increased mercilessly.`;
   Tsugumi`"........."`;
   `Her face contorted with pain.`;
   `In agony, she labored for breath.`;
   `There wasn't any time.`;

});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 90 });
showDimOverlay();
showTextbox();
text(() => {
   `Making up my mind, I dove into the water.`;
   `I couldn't open my eyes.`;
   `All I could do was search the bottom using my intuition.`;
   `(aaaaaAAAAGGGH!)`;
   `(DAMN IT!!!)`;
   `Using all of my strength, I heaved up the large mass of metal sticking into Tsugumi's leg.`;
   `Aided slightly by the buoyancy of the water, the metal hunk moved slightly.`;
   `Tsugumi pulled her leg out at once.`;

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
   `I lifted my face out of the water, gulping greedily for air.`;
   `The flooding wouldn't stop.`;
   `The water level was already above my shoulders.`;
   Tsugumi(T3A173)`"You are..."`;
   Tsugumi(T3A174)`"Such a stubborn idiot..."`;
   Takeshi`"Shut up and just keep quiet."`;
   `With her leg injured, there was no way Tsugumi could swim.`;
   `Holding onto her, I headed for the exit.`;
   `But the door was already under water.`;
   Tsugumi(T3A175)`"Look, there's no way you can save me..."`;
   Takeshi`"I told you to keep quiet!"`;
   Tsugumi`"........."`;
   Takeshi`"There's got to be another exit. I'll look for it."`;
   Tsugumi`"........."`;
   Takeshi`"It'll be okay. We'll find a way out of this."`;
   Tsugumi(T3A176)`"There you go again, saying 'It'll be okay'...you're so irresponsible..."`;
   Takeshi`"Would you keep quiet!?"`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   `I probably could have forced open the door if I had tried, but it would have put the second floor in danger of flooding.`;
   `I searched desperately for an emergency exit.`;
   `My legs wouldn't touch the floor.`;
   `I could hardly breathe.`;
   `I was at my limit.`;
   Takeshi`".....!!"`;
   Takeshi`"There's a ladder! In the corner of the room there's a ladder. We can use it to get to the emergency passage."`;
   Takeshi`"We're going to make it Tsugumi!!"`;

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
   `I swam with all my might to get to the ladder.`;
   `With Tsugumi draped over my back, I climbed up the ladder.`;

});
playSFX({ name: `SE00_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I opened the flood hatch at the end of the ladder and pushed Tsugumi through.`;

});
hideTextbox();
playBGM({ num: 10, volume: 100 });
bgload({ name: `BG28A3L`, transition: 20 });
playSFX({ name: `SE00_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Going up immediately behind her, I quickly shut the hatch.`;
   `The sound of the flood, faded away....`;
   `But there wasn't time to rest.`;
   `Tsugumi was still losing blood.`;
   `I took her up on my back and began to run.`;

});
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Damn, which way should I go...?"`;
   `A dead end in the passage had me totally lost.`;

});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A177)`"Takeshi!"`;
   `Sora appeared suddenly in front of me.`;
   Takeshi`"Sora! Tsugumi is...Tsugumi is!!!"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A178)`"I know. I heard everything from Coco."`;
   Sora(T3A179)`"Bring her to the infirmary immediately, You is currently preparing to treat her."`;
   Takeshi`"Alright, I'm on my way! Now, which way do I go?"`;
   Sora(T3A180)`"Return back along this passage, go down the stairs on the right and take the standard passage to..."`;
   Takeshi`"Okay!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG25A3`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   Takeshi`"Tsugumi, Tsugumi!"`;
   Takeshi`"It's okay, it's going to be okay....!"`;
   Tsugumi`"....."`;
   `Tsugumi groaned painfully from her place on my back.`;
   `Even if she thought it was irresponsible of me, I couldn't bring myself to tell her 'It's no use, it's too late.'`;
   `As long as I had even a little hope, I didn't want to throw it away.`;

});
bgload({ name: `BG08A1`, transition: 20 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `I burst into the infirmary.`;
   `I set the injured Tsugumi down on the bed.`;
   `She'd lost so much blood.`;
   `We had to take emergency measures immediately.`;
   Takeshi`"Hey, what are we going to do!?"`;

});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A181)`"Get out of the way!!"`;
   `You, who'd been waiting in the room, pushed me out of the way.`;
   `A tourniquet was taken out from a rack of medical instruments on the wall and fastened around Tsugumi's thigh.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A182)`"This is bad..."`;
   Takeshi`"What's the status? How bad is it?"`;
   Takeshi`"Can't we use that scanner to check it out?"`;
   `I pointed to the L-MRI.`;

});
fgload({ id: 1, name: `YU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A183)`"It seems to be broken."`;
   Sora(T3A184)`"I'll have a look."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora put her hand on Tsugumi. A holographic window appeared in the air.`;
   `A small sensor, or camera started moving on the ceiling.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `YU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A185)`"Well, this is just a bio scan, so I can't tell for certain, but..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A186)`"Her femur is fractured. And it looks like it might be compound."`;
   Sora(T3A187)`"That and the artery is severed. She'll need sutures."`;

});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3A188)`"I've stitched up my finger before. It was with a survival kit, but..."`;

});
fgload({ id: 1, name: `SO18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A189)`"Well, You, do you think you can assist me?"`;
   You(T3A190)`"I'll do my best! Do we have anesthetic?"`;
   Sora(T3A191)`"I'll get it ready. The laser scalpel, forceps and sutures ...everything we need, is already in the room."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sora moved the electric wagon, and used its robotic arm to gather the necessary surgical tools.`;
   `You flipped up Tsugumi's skirt, and started wiping off the wound.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A192)`"Takeshi!!"`;
   You(T3A193)`"Don't stand there! You're in the way!"`;
   `You pointed angrily at the exit.`;
   Takeshi`"Uh, yeah, sorry...take care of her, okay!"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3A194)`"Leave it to me!"`;
   `You looked determined to show us all what she was capable of.`;

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
   `As soon as I left the tense atmosphere of the emergency room, my fatigue hit me.`;
   Takeshi`"*sigh*...."`;
   `I set myself down on a nearby chair.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A195)`"Oh, Takepyon... Is Tsugumi going to be..."`;
   `Coco was holding onto Pipi, but looked as if she was having a hard time relaxing.`;
   Takeshi`"You let them know right away so...she should be fine."`;

});
fgload({ id: 1, name: `CO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A196)`"Really...?"`;
   `Coco's eyes were moist.`;
   `It was hard to tell, but she had probably been crying moments earlier.`;
   `Even still, she tried to smile.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3A197)`"Hey, you think Tsugumi's..."`;
   Coco(T3A198)`"Tsugumi's...gonna be okay, right?"`;
   `Still looking worried, she tilted her head as she asked me.`;
   Takeshi`"Yeah. She'll be okay."`;
   Takeshi`"Absolutely fine...?"`;
   `I closed my hand into a fist...`;
   `And told myself.`;
   `She's going to be okay.`;

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
   `After what seemed like an eternity, You appeared from the infirmary with Sora.`;
   `The surgery was over—`;
   `Tsugumi was going to live.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A199)`"It required a total of 40 stitches and will take two months to heal completely."`;
   Sora(T3A200)`"And it will take her a few more months to be able to walk normally..."`;
   Sora(T3A201)`"Until a rescue team arrives at LeMU, and we can get her out of here, she's going to have to rest."`;
   Takeshi`"Alright. Thanks Sora."`;
   Takeshi`"And...good job, You."`;
   You`"........."`;
   Takeshi`"You? What's wrong?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3A202)`"...What?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3A203)`"Oh...um, nothing, I'm just really tired...you know..."`;
   You(T3A204)`"I've never done an operation like that before..."`;
   `After that You looked down and didn't say much.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A205)`"By the way, it looks like the flooding stopped in the Zweite stock warehouse."`;
   Sora(T3A901)`"All pipelines connecting to the warehouse have been closed as an emergency measure and the whole area has been sealed off from Zweite. `;
   Sora(T3A902)`So, we don't have to worry about the flood damage expanding."`;
   Sora(T3A207)`"That's it then."`;

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
