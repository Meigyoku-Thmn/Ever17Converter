playBGM({ num: 3, volume: 100 });
bgload({ name: `BG26B3L`, transition: 20 });
setDialogBoxColor(GREEN);
setSceneTitle({ index: 14 });
clock(`22:2`);
showTextbox();
text(() => {
   `It was nighttime.`;
   `But from the center of the ocean it was only slightly darker than before.`;
   `Fortunately, the damage to LeMU hadn't worsened.`;
   `We had a light dinner at the chicken sandwich shop and gathered in the Conference Room.`;

});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   You(T2C240)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Kid(T2C241)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Tsugumi(T2C242)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   Sora(T2C243)`"Yaaaaaaaaaaaaaaaaawwwwwwn."`;
   `My yawn spread from one person to the next.`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C244)`"Still..."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C245)`"Everybody looks so sleepy..."`;
   Takeshi`"Well.... There's really nothing to do either."`;
   `The only person that seemed completely awake was Coco. `;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Everyone else was slouched in chairs, just spacing out.`;
   `There was no impending danger. No new developments.`;
   `The situation we were in remained unchanged, and it somehow felt as though time had stopped.`;

});
showTextbox();
text(() => {
   You(T2C246)`"Takeshi, you're such a slob..."`;
   `You said this, in a tired sounding voice.`;

});
showTextbox();
text(() => {
   You(T2C247)`"And stop dawdling..."`;
   Takeshi`"Look, there's no reason to go wandering around the complex now, right?"`;
   Takeshi`"We're just...going have to wait for help to come anyway, right?"`;
   You(T2C248)`"Yeah...I suppose..."`;
   You(T2C249)`"Alright...I'm off for a little bit..."`;
   `Twisting her neck around, You stood up.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C250)`"Hey, Nakkyu, where are you going?"`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C251)`"Nowhere in particular. Just a walk..."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C252)`"I've got to move around or I'll get tired..."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C253)`"Oh! I know, let's run a race!"`;
   `Coco's eyes lit up.`;
   You(T2C254)`"A race...?"`;

});
fgload({ id: 2, name: `CO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C255)`"You don't want to...?"`;
   You(T2C256)`"No, I didn't say that."`;
   `You made a face, but she didn't seem to be in a bad mood.`;

});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C257)`"Then, then, how about tag!?"`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C258)`"Alright. I'm in."`;
   You(T2C259)`"But tag with two people doesn't sound very fun."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setFGRenderOrder(1, 2, 4);
multifgload3({ name1: `YU15ADS`, name2: `CO15ADS`, name3: `KA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Kid(T2C260)`"Want me to play?"`;
   `The Kid stood up.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADS`, name2: `CO11ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C261)`"May I participate as well?"`;
   `Sora approached Coco and the others.`;

});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C262)`"Yeah! Let's play together."`;
   Sora(T2C263)`"Yes, let's."`;

});
fgload({ id: 4, name: `KA12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C264)`"Alright! I'm gonna win!"`;
   `I couldn't tell why, but everyone was excited to play.`;
   `I supposed everyone was bored....`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C265)`"Hey, where do you wanna play?"`;

});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C266)`"Hmmm. How about...in this room?"`;
   `Coco looked around the Conference Room.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   `I surveyed it, too.`;
   `Tsugumi sat alone with an annoyed expression on her face.`;

});
fgload({ id: 1, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C267)`"*Sigh*"`;
   Tsugumi(T2C268)`"You never shut up..."`;
   `She lazily stood from her chair and walked briskly to the corner of the room...`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_06`, a1: 0, volume: 100 });
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   `And flipped off the light switch.`;
   `Tsugumi returned to her original seat and again sat down slowly.`;

});
bgload({ name: `EV_TU06B`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Wh-what are you thinking? It's dark."`;
   Tsugumi(T2C269)`"It was too bright for me to concentrate."`;
   Tsugumi(T2C270)`"Some people want to rest..."`;
   Takeshi`"Well, that doesn't mean you just go turning off the lights!"`;
   Takeshi`"Just because YOU want to rest..."`;
   Tsugumi(T2C271)`"What about you?"`;
   Takeshi`"Huh?"`;
   Tsugumi(T2C272)`"Don't you want to rest...?"`;
   Takeshi`"No, I...I'm..."`;
   Kid(T2C273)`"Oh, yeah. Hey Takeshi, you wanna play tag?"`;
   `(Tag, huh...?)`;

});
choice(
   `I'll pass`,
   `I'm in`,
);
switch (l_choice) {
   case 0: goto(lbl_000002fd);
   case 1: goto(lbl_00000327);
}
let lbl_000002fd;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"Nah...I think I'll pass."`;
   Takeshi`"I wanna rest like Tsugumi said...I think I'll hold off for now."`;
   Takeshi`"Once you get older like me, tag takes its toll on your body."`;
   You(T2C274)`"Hmph. Older, huh...?"`;
   You(T2C275)`"Well, you must be older than you look."`;
   Takeshi`"...What?"`;
   You(T2C276)`"Yeah, and besides Takeshi doesn't seem too sharp anyways."`;
   You(T2C277)`"I'll bet he'd be caught right away."`;

});
playSFX({ name: `SE05_08`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Takeshi`"You don't know what you're talkin' 'bout!"`;
   `I stood up menacingly.`;
   You(T2C278)`"Oh, does that mean Takeshi wants to plaaaay now?"`;
   Coco(T2C279)`"Come on, Takepyon It'll be fun!"`;
   Takeshi`"Wait a sec! I didn't say that I'm playin'!"`;
   Kid(T2C280)`"Oh, you're not going to play?"`;
   You(T2C281)`"Surrendering without a fight? Sounds like a chicken to me."`;
   Takeshi`"...OH! Alright! I'll play your dumb game!"`;
   `I was overruled by the majority.`;
   `Well, I figured it was better than sitting there doing nothing....`;
   `I was playing, but I wasn't happy about it.`;

});
goto(lbl_00000342);
let lbl_00000327;
showTextbox();
text(() => {
   `It all sounded childish to me...`;
   Takeshi`"Well I suppose..."`;
   Takeshi`"Just sitting around here doing nothing would get kinda boring..."`;

});
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Alright! I'm in!"`;
   `I stood up enthusiastically.`;
   You(T2C282)`"Oh, does that mean Takeshi wants to plaaaay?"`;
   Coco(T2C283)`"Roger that!"`;

});
let lbl_00000342;
bgload({ name: `EV_TU06A`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi glanced at me out of the corner of her eye and then looked away.`;
   Kid(T2C284)`"...Shall we leave the lights off?"`;
   `The Kid whispered this to me.`;
   Takeshi`"The emergency lights are on, but it's kinda dark. You okay with that?"`;
   Kid(T2C285)`"Let's go with what Tsugumi thinks."`;
   Takeshi`"But this doesn't seem like tag at all..."`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG17A2`, transition: 20 });
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C286)`"Eenie, meenie, miney, mo!"`;
   Coco(T2C287)`"Give me a flashlight to go!"`;

});
hideTextbox();
playBGM({ num: 9, volume: 100 });
showTextbox();
text(() => {
   `Coco pulled out a flashlight as she recited the rhyme.`;

});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `SO15ADS`, name2: `CO01ADS`, name3: `KA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T2C288)`"Yeah. Well, kick the can is pretty cool. Don't you think?"`;
   `Coco lit up her face with the flashlight from under her chin trying to get everyone to agree.`;
   Takeshi`"Kick the can?"`;
   Sora(T2C289)`"What is kick the can?"`;
   Coco(T2C290)`"Um...it's...um..."`;
   Coco(T2C291)`"You pick someone to be it in a dark place. Then everyone hides..."`;
   Takeshi`"Hey, that's just hide and seek tag."`;

});
fgload({ id: 2, name: `CO04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C292)`"No it's not! Listen!"`;
   Takeshi`"Oh, sorry..."`;

});
fgload({ id: 2, name: `CO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C293)`"The person that's 'it' puts a can somewhere in the room..."`;
   Coco(T2C294)`"And the people that hide try to kick the can before the person that's 'it' finds them."`;
   Coco(T2C295)`"If a person kicks the can, then he or she wins."`;
   Coco(T2C296)`"If the person that's 'it' finds somebody and steps on the can calling out his or her name..."`;
   Coco(T2C297)`"Then the found person can't kick the can anymore and loses."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU16ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C298)`"Oh, so that's a kind of hide and seek, right?"`;
   Takeshi`"Oh, well everybody knows how to play that."`;

});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C299)`"No, it's kick the can."`;

});
fgload({ id: 1, name: `YU15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C300)`"That's a glorified kind of hide and seek."`;

});
fgload({ id: 2, name: `CO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C301)`"It's kick the can!"`;

});
fgload({ id: 2, name: `CO04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C302)`"KICK THE CAN!!"`;
   Takeshi`"Anyway, who cares about the name? Let's play."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C303)`"...Geez."`;
   `As we were getting all pumped for the game, Tsugumi let out a sigh.`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C304)`"You are SO noisy..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi quietly stood up and walked to the far exit, leaving the room.`;

});
multifgload3({ name1: `YU17ADS`, name2: `CO01ADS`, name3: `KA07ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Kid(T2C305)`"Is Tsugumi mad?"`;
   Takeshi`"Who knows? Anyway..."`;
   Takeshi`"She'll come back after a while. You'll see."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `After that...`;
   `We decided who was 'it' using rock, paper, scissors.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   Coco(T2C306)`"Ready go!"`;
   Coco(T2C307)`"Ready go!"`;
   Coco(T2C308)`"Ready go!"`;
   Takeshi`"Damn. I lost!"`;

});
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `YU02ADS`, name2: `CO02ADS`, name3: `SO02ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T2C309)`"Alright. So Takeshi is 'it' first."`;
   Coco(T2C310)`"Oh goodie!"`;
   Sora(T2C311)`"Good luck."`;
   `Everyone was grinning at me. Damn.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C312)`"Here you go, Takeshi."`;
   `The Kid handed me the empty can.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C313)`"But...hiding anywhere is okay, as long as it's on this third floor. Okay, let's hide."`;
   You(T2C314)`"Ready..."`;
   Takeshi`"W-wait a sec!"`;
   `I held up a hand hurriedly stopping You from sending everyone off.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"You, what did you just say?"`;
   You(T2C315)`"Let's hide."`;
   Takeshi`"No. Before that."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C316)`"You can hide anywhere on this third floor."`;
   Takeshi`"...Are you serious?"`;
   Takeshi`"Not just the Conference Room?"`;
   You(T2C317)`"This room is too small. And there aren't that many places to hide."`;
   Takeshi`"But the WHOLE third floor?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C318)`"Oh, of course, the areas you can't walk from here are off limits. And the emergency corridors and stairs are no good either."`;
   Takeshi`"That's still too big."`;
   Takeshi`"It's not fair to the person that's 'it'. While he's looking, he's sure to get it from somebody else..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C319)`"I think it's fine."`;
   Takeshi`"It's not fine. The game won't work. This is a MAJOR problem."`;
   You(T2C320)`"Gosh. You sure complain a lot."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C321)`"Well, he would certainly appear to be at a disadvantage..."`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C322)`"I will dim the lights on the third floor...but in return I will make it so that sounds carry better."`;
   Sora(T2C323)`"If sounds carry, then you can hear when someone moves across a corridor with water. That will give the person who is 'it' an advantage."`;
   Sora(T2C324)`"And I will make it so that you know when people are moving. I will synthesize footsteps and dispatch the data to voice converters."`;
   Takeshi`"Alright. Please do."`;

});
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C325)`"Oh, but...what should I do if I should get to the can first?"`;
   Kid(T2C326)`"Huh? Oh..."`;
   Takeshi`"That's right. You can't kick the can!"`;
   `We'd only just noticed. If we played tag, we just would have had to ban Sora from jumping about as an image...`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C327)`"Then you can be with me, Sora."`;
   Coco(T2C328)`"We'll make it so that Sora and I have to be within a yard of each other when we hide or when we are 'it'."`;
   Coco(T2C329)`"So I can kick the can..."`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C330)`"Okay? Let's try it this way."`;

});
fgload({ id: 2, name: `SO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C331)`"Okay. Thanks."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `On top of that we made Sora promise not to use the bio scan or LeMU to monitor the location of anyone.`;
   Kid(T2C332)`"Yeah, that makes it fair then."`;
   You(T2C333)`"Alright. All set."`;
   `It looked like everyone was ready.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   `I took the can, closed my eyes and counted to one hundred in the Conference Room.`;
   `During that time the others had scattered out around the floor.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG17A2`, transition: 20 });
clock(`22:19`);
showTextbox();
text(() => {
   Takeshi`"One hundred..."`;
   `I opened my eyes.`;
   `I put the can by my feet.`;
   `I looked around in the dim light. There was no one around.`;
   `(I guess I'll have to go look...)`;
   `I faced the nearby door.`;
   `The sound of my shoes on the ground reverberated as a deep sound. It sounded unnatural.`;
   `It was kind of like I imagined sonar would sound.`;
   `(I see.... So this is what Sora means by making the sound bigger...)`;
   `I felt like I was in a submarine.`;
   `I thought I'd best be careful of my footsteps to make sure they weren't heard by the others.`;

});
bgload({ name: `BG26B4R`, transition: 20 });
showTextbox();
text(() => {
   `All of the lights were off, but the doors opened automatically.`;
   `First, I thought I would head for the...`;

});
l_counter = 0;
choice(
   `Central Control Room`,
   `Elevator hall`,
);
switch (l_choice) {
   case 0: goto(lbl_0000071e);
   case 1: goto(lbl_00000807);
}
let lbl_0000071e;
showTextbox();
text(() => {
   `I decided to hit the Control Room.`;

});
let lbl_00000723;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG15B2`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A2`, transition: 20 });
showTextbox();
text(() => {
   `The monitors in the room were off and the room only dimly lit.`;
   `The computers weren't moving.`;
   `I peeked into the lockers and under the desks, but no one was there.`;
   `Well...I figured no one would want to hide in a place that would be cramped and hard to get out of.`;
   `I gave up looking any more thoroughly and left the room.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B4L`, transition: 20 });
if (l_counter == 0) goto(lbl_000007f3);
showTextbox();
text(() => {
   `I thought about where I should go next....`;

});
goto(lbl_000008c0);
let lbl_000007f3;
l_counter = 1;
showTextbox();
text(() => {
   `The elevator hall was one idea.`;

});
goto(lbl_0000080c);
let lbl_00000807;
showTextbox();
text(() => {
   `But the elevator wasn't moving.`;
   `I was sure no one would be there....`;
   `But wait...that might be exactly what some one was hoping I would think.`;

});
let lbl_0000080c;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 12 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG22B2`, transition: 20 });
showTextbox();
text(() => {
   `I entered the elevator hall.`;
   `But there was really no place for anyone to hide.`;
   `I checked along the walls, but there wasn't anyone there.`;
   `All of the elevators were stopped and there was no sign of anything moving.`;
   `(Maybe I should ignore this area...)`;

});
bgload({ name: `BG26B4L`, transition: 20 });
if (l_counter == 0) goto(lbl_000008ac);
showTextbox();
text(() => {
   `Thinking about where to go next...`;

});
goto(lbl_000008c0);
let lbl_000008ac;
l_counter = 1;
showTextbox();
text(() => {
   `I thought the Central Control Room might be good.`;

});
goto(lbl_00000723);
let lbl_000008c0;
hideTextbox();
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Oh!"`;
   `Just then I heard a sound.`;
   `Someone was running along the corridor.`;
   `The footsteps were heading toward the Conference Room from the Lemurian Ruins.`;
   Takeshi`"Oh no!"`;
   `I rushed back the way I'd come.`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Who is that?"`;
   Kid(T2C334)`"Ooops!"`;
   `When I shouted, the moving person flinched.`;

});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The person I found at the corner was the Kid.`;
   `I didn't know if he had given up because I ran after him, but he had stopped in the corridor.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C335)`"Oh, no. You caught me... Am I the first one?"`;
   Takeshi`"Yup."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C336)`"Dang. That means if you catch everyone, then I'm 'it' next?"`;
   Takeshi`"I reckon so."`;
   Kid(T2C337)`"I wonder if someone will show up to help me."`;
   Takeshi`"........."`;
   Kid`"........."`;
   Takeshi`"........."`;
   Kid(T2C338)`"Takeshi, if you don't go step on the can, then I'll go kick it."`;
   Takeshi`"You sure know your kick-the-can rules."`;

});
hideTextbox();
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   You(T2C339)`"Whack!"`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `YU10ADL`, x: 320, useAnim: true });
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
shakeScreen();
showTextbox();
text(() => {
   `"Crash!!"`;

});
hideTextbox();
closeMapIndicatorAnim();
showTextbox();
text(() => {
   Takeshi`"Umpphh!"`;

});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `"Splash!"`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `Suddenly You came flying from the side and completely cold-cocked me with a jumping chop to the neck.`;

});
playSFX({ name: `SE10_17`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Gurgle, gurgle..."`;
   `My head went underwater.`;
   `My mouth filled with salt water.`;

});
fgload({ id: 1, name: `YU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C340)`"NYA,HA,HA,HA!"`;
   `You was pointing at me in the water and cackling crazily.`;
   Takeshi`"Cough, cough...pwahh!"`;

});
hideTextbox();
stopSFX()
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Floundering about in the water, I stood up.`;
   Takeshi`"H-hey, you!!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C341)`"Hee, hee...I won this battle!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Hey you. Wait!"`;

});
playSFX({ name: `SE01_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   You(T2C342)`"Wait for you to catch me? No thanks!"`;
   Takeshi`"Hey you! I'll get you back for that! Just you wait!"`;
   `I took off in a mad dash after You.`;
   `You disappeared into the Conference Room.`;
   `She tried to close the door before I got there, but I made it in first.`;

});
bgload({ name: `BG17A2`, transition: 20 });
stopSFX()
fgload({ id: 1, name: `YU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I was lucky!`;
   `You couldn't find the can and was wandering about.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I ran by You...`;

});
hideTextbox();
playSFX({ name: `SE10_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I caught sight of the can and slid into it!`;
   `I put the can under my foot and declared.`;
   Takeshi`"I found You! I stomped on the can!"`;
   `Soon after that the Kid came in.`;
   Takeshi`"I found the Kid! I stomped on the can!"`;
   `...I continued my declaration.`;
   Takeshi`"Ha, ha, ha! Did you really think you could outwit me?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU04ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2C343)`"Takeshi you cheat! You changed the place of the can!"`;
   Takeshi`"Nobody said where we had to put the can, right? Besides, you smacked me so I figure we're even."`;
   You(T2C344)`"Alright, alright. Whatever. Anyway, so I'm the first person you caught?"`;
   Takeshi`"You got it."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T2C345)`"Well, that plan was sure a failure..."`;
   Takeshi`"...Huh? What plan?"`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `As they were talking, the sound of splashing footsteps could be heard approaching the door...`;

});
hideTextbox();
multifgload2({ id1: 1, id2: 2, name1: `SO01ADS`, name2: `CO02ADS`, x1: 176, x2: 464, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   Coco(T2C346)`"Heeellllloooo!"`;
   Takeshi`"I found Sora and Coco and Pipi."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I stepped on the can.`;

});
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO15ADS`, name2: `CO15ADS`, name3: `YU11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Sora(T2C347)`"Oh, did you get beaten here, You?"`;
   You(T2C348)`"Things didn't quite work out as planned."`;
   Coco(T2C349)`"Nakkyu, don't you think you jumped the gun just a little bit?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KA01ADS`, name2: `CO11ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C350)`"You said we would all charge together."`;
   Pipi(PIPI_00)`"Wooof."`;
   Takeshi`"So that was your plan..."`;

});
multifgload2({ id1: 2, id2: 4, name1: `CO01ADS`, name2: `YU01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2C351)`"Yeah. I thought if we all went for the can at once, you wouldn't be able to stop us."`;
   Takeshi`"That's pretty tricky."`;

});
fgload({ id: 4, name: `YU08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T2C352)`"You really think so?"`;
   `You laughed mischievously and with a hint of embarrassment.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   `We gathered in the center of the room.`;
   Takeshi`"Well, finding all of you was easier than I thought..."`;
   Takeshi`"First of all, mob-style kicking of the can is definitely outlawed."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C353)`"Huh? Why?"`;
   Takeshi`"You think I can stop you if you all come attack at once?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C354)`"Impossible."`;
   Takeshi`"That's why. It takes all the fun out of it."`;
   Takeshi`"Timing your rush, just right, for when the person who is 'it' goes searching...all of that would disappear from the game."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C355)`"Well, alright..."`;
   `You reluctantly agreed to be 'it' the next time.`;
   `I thought that maybe she was used to hand-to-hand, full-contact battles of kick the can.`;

});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO01ADS`, name2: `CO01ADS`, name3: `KA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"Alright. Everybody good with that?"`;
   `Everyone - Sora, Coco, Kid and Pipi - nodded.`;
   Takeshi`"Okay then. You is 'it' next."`;
   Takeshi`"The can is over there, so you get it. Put it where you want and count..."`;

});
hideTextbox();
stopBGM();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Kabing!`;

});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clatter, clatter, clatter...`;
   `The sound of a can being kicked rang out in the darkness.`;
   `The can went rolling powerfully toward the corridor.`;
   Takeshi`"Hey! Who kicked that?"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C356)`"It wasn't me!"`;

});
hideTextbox();
fgload({ id: 1, name: `YU16ADM`, x: 320, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As soon as she got this out of her mouth, You started to run away.`;
   Takeshi`"You scoundrel...!"`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `Everyone scattered like scared butterflies.`;

});
playSFX({ name: `SE01_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The splashing sound of footsteps echoed as they receded down the corridor.`;
   Takeshi`"........."`;
   Takeshi`"Geez. This means I gotta be 'it' again!"`;
   `No one responded.`;
   `I looked around the room.`;
   `No one was left.`;
   `(...Huh?)`;
   `(I wonder if...Tsugumi kicked the can.)`;
   `No matter what she said, Tsugumi was probably playing on the sly.`;
   `(She should've said so then...geez...)`;
   `(Oh well...)`;
   Takeshi`"Alright. I'm counting to a hundred. O-n-e..."`;
   Takeshi`"T-e-n, e-l-e-v-e-n, o-n-e-h-u-n-d-r-e-d..."`;
   Takeshi`"Here I go."`;

});
bgload({ name: `BG25B4`, transition: 20 });
clock(`22:28`);
showTextbox();
text(() => {
   `(I'm gonna get all of you....)`;
   `I thought about where I should start looking.`;

});
l_selection_0_available = 1;
l_selection_1_available = 1;
l_selection_2_available = 1;
l_counter = 0;
let lbl_00000d74;
choice(
   cond(l_selection_0_available != 0)`Lemurian Ruins`,
   cond(l_selection_1_available != 0)`Rest area`,
   cond(l_selection_2_available != 0)`Chicken sandwich stand`,
);
switch (l_choice) {
   case 0: goto(lbl_00000d9e);
   case 1: goto(lbl_00000f0a);
   case 2: goto(lbl_0000118e);
}
let lbl_00000d9e;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 2 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG04B2`, transition: 20 });
l_selection_0_available = 0;
showTextbox();
text(() => {
   `I stood in front of the Lemurian Ruins.`;
   `The lights inside the attraction were off.`;
   `Apparently the inside was like a maze.`;
   `(I wonder if somebody's hiding in the maze...)`;
   `I thought about going in, but inside was even darker than the room.`;
   `Even if I did go in, coming back out would have been a royal pain.`;
   `Getting out of there looked a lot more difficult than going in....`;
   `I figured it was silly to take the risk and go look in there.`;
   `I took a look around the perimeter and didn't see anyone.`;
   `I strained to listen.`;
   `I didn't hear anything....`;

});
hideTextbox();
stopBGM();
playBGM({ num: 5, volume: 100 });
delay({ interval: 30 });
showTextbox();
text(() => {
   Takeshi`"Whoa!"`;
   `Suddenly, I heard music from within the attraction.`;
   `I thought it might be the attraction's song.`;
   `Mixed in with that noise, I was sure that I heard someone running....`;
   Takeshi`"You! Stop!"`;
   `I ran to head off the exit in the direction I thought the footsteps were heading.`;

});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"I knew it..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C357)`"Hey, how'd you know it was me?"`;
   Takeshi`"It's the same trick you used to scare me with the dolphin merry-go-round before. I don't fall for the same trick twice."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C358)`"Oh, that's right! I forgot I'd already done that..."`;
   Takeshi`"You're not going to try to tackle me now that I've got you are you?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C359)`"Ah, you knew I was going to do that too? Dang. A, ha ha..."`;
   Takeshi`"I can read you like a book!"`;
   `She was the kind of person that was mostly transparent once you knew what they were about.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C360)`"Alright. You got me. I give up."`;
   `You held up her hands. I reckoned she knew she couldn't squeeze by me.`;
   `She'd given up on getting to the can.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She walked behind me with her hands in the air.`;

});
showTextbox();
text(() => {
   `
      <I found You. I stepped on the can>`;

});
hideTextbox();
stopBGM();
playBGM({ num: 13, volume: 100 });
if (l_counter == 0) goto(lbl_00000ee8);
goto(lbl_000012d0);
let lbl_00000ee8;
l_counter = 1;
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   `I thought I'd check some other rooms.`;

});
goto(lbl_00000d74);
let lbl_00000f0a;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 13 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG21B2`, transition: 20 });
l_selection_1_available = 0;
showTextbox();
text(() => {
   `I visited the rest area.`;
   `I soon noticed that there was someone there.`;

});
playSFX({ name: `SE01_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I could hear the sound of someone walking through water.`;
   `As I got closer, the direction of the footsteps changed.`;
   `It was someone short and moving slowly...`;
   `It was a battle of patience....`;

});
playSFX({ name: `SE01_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Splash, splash...`;
   `My opponent's feet made a dash for the exit.`;
   `I circled around to the side again and again to block off the person.`;

});
playSFX({ name: `SE01_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The footsteps gradually moved away from the exit into a corner.`;
   `I moved a little bit closer.`;
   `I had a hunch whoever it was would make a break for it....`;
   `I moved to head them off and prepared to trip them by catching his or her leg!`;

});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splaaaaaash!`;
   `I heard someone fall spectacularly.`;
   Takeshi`"Hey, I dunno who you are, but are you alright?"`;
   //??
   Anon`"........."`;
   `I thought I was near where the person had stumbled.`;
   `But it was dark and I couldn't see much.`;
   Takeshi`"I wonder if this might work..."`;
   `I took my PDA from my pocket and set the monitor backlight on maximum brightness.`;
   `But it was weak and nothing compared to a flashlight.`;
   `I thought it might be brighter, but it was dim and didn't amount to much.`;

});
hideTextbox();
eff_4f = 34;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   Takeshi`"Oooops!"`;
   `My hand slipped. My PDA looked like it was headed for the water.`;

});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   `I snatched it right before it hit the water's surface.`;
   Takeshi`"...Huh?"`;
   `I glimpsed something reflected on the water's surface, moving...`;
   `Just about the biggest 'fish' I'd ever seen started sliding away in the water....`;
   Takeshi`"Well, if it isn't the Kid." `;

});
playSFX({ name: `SE01_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I scooped up a handful of seawater from around my feet and dumped it on his head.`;
   Kid(T2C361)`"Oh no! You found me!"`;

});
hideTextbox();
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
fgload({ id: 1, name: `KA06AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Splaaaaaash!`;
   `As soon as the Kid stood up, he tried to get away.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C362)`"Ahhhhh...."`;
   `But he had a hood on and...`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `That hood was filled with water...`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Kersplash!`;
   `The weight of the hood dragged him backward as he kicked his legs into the air and plopped backed down in the water on his back.`;
   Kid`"........."`;
   Takeshi`"........."`;
   Kid(T2C363)`"Hey, this feels pretty good."`;
   `The Kid swam a kind of breaststroke in the small pool of water six inches deep.`;
   Takeshi`"Is the water cold?"`;
   Kid(T2C364)`"A bit..."`;
   `He glided along, enjoying himself.`;
   `That was probably what people meant by, "taking to water like a fish."`;
   `In the darkness, he swam to the other side of the room....`;
   Takeshi`"Hey, just so you know, that exit is the long way around."`;

});
fgload({ id: 1, name: `KA07AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C365)`"Huh? Read my mind?"`;
   `The Kid gave up and stood.`;

});
fgload({ id: 1, name: `KA02AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C366)`"I thought you wouldn't see me if I were in the water."`;
   `He laughed as he said it.`;
   Takeshi`"Keeping me on my toes. You're like a ninja or something."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `KA01AWS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C367)`"Nin! Nin! Ninja!"`;
   `The Kid took some kind of ninja pose.`;
   Takeshi`"........."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `He jumped in the water again and swam some more.`;

});
showTextbox();
text(() => {
   `
    <I found the Kid, I stepped on the can.>`;

});
if (l_counter == 0) goto(lbl_0000116c);
goto(lbl_000012d0);
let lbl_0000116c;
l_counter = 1;
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   `I thought I'd check some other rooms.`;

});
goto(lbl_00000d74);
let lbl_0000118e;
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 9 });
openMapCommentAnim();
delay({ interval: 120 });
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG07B2`, transition: 20 });
l_selection_2_available = 0;
showTextbox();
text(() => {
   `I arrived at the chicken sandwich shop.`;
   `The area was dark, but it still smelled delicious.`;
   `(Dang, I'm hungry...)`;
   `(Maybe I'll just stop for a bite...)`;
   `I reached for some of the sandwiches packaged and lined up on the counter.`;
   `I took off the wrapping and took a bite.`;
   Takeshi`"Ouch...that's hard!"`;
   Takeshi`"Oh...it's a plastic sample..."`;
   `I had taken a bite of a wax sample and it was tasteless.`;
   `There was no way I was eating that.`;
   `(Oh well...)`;
   `I went around to the back of the shop and went inside.`;
   `I thought I'd make myself a chicken sandwich.`;
   `The light inside the shop dim.... `;
   `But since I'd been appointed chairman of the breakfast committee this morning I knew exactly where the food and cooking equipment was.`;
   `I stooped over to open the fridge by my feet.`;
   Takeshi`"There should still be loads of food in here..."`;
   Takeshi`"Huh?"`;
   `Something was there sticking out beside the fridge.`;
   `A hand.`;
   `It was a pair of white hands. I'd seen them before.`;
   `Above them was a face I'd seen before.`;
   `She was staring around nervously.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Hey...what're you doing?"`;

});
hideTextbox();
playBGM({ num: 8, volume: 100 });
bgload({ name: `EV_SO08A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T2C368)`"Eh? Kyaaaaaaaa!"`;
   `I guess she hadn't noticed me. `;
   `Looking up and seeing me she stiffened.`;
   `She seemed flustered, her mouth agape and eyes looking around desperately.`;
   Takeshi`"........."`;
   Sora`"........."`;
   Takeshi`"........."`;
   Sora(T2C369)`"Uhhhh....I um....."`;

});
bgload({ name: `EV_SO08B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T2C370)`"W-welcome...to our restaurant!"`;
   Takeshi`"Huh?"`;
   `Bent over awkwardly, Sora shifted gears and suddenly shot me a smile.`;
   Sora(T2C371)`"Oh, another customer? What'll you have?"`;
   Sora(T2C372)`"What can I get you today?"`;
   Takeshi`"I'll take a chicken sandwich."`;
   Takeshi`"But I'm pretty sure that's all you've got anyway..."`;
   Sora(T2C373)`"Oh? Is that right...I'll get right on it."`;
   Takeshi`"........."`;
   Sora(T2C374)`"Uh...and would you like a drink with that?"`;
   Takeshi`"........."`;
   Sora(T2C375)`"...Let's see..."`;
   Takeshi`"Sora, I'm amazed that you were obeying the rules of the game so strictly."`;
   Takeshi`"I thought maybe you'd vanished somewhere or gone off where I couldn't find you."`;

});
bgload({ name: `EV_SO08C`, transition: 20 });
showTextbox();
text(() => {
   Sora(T2C376)`"But that would ruin the game wouldn't it? I play by the rules."`;
   Takeshi`"I know...but still."`;
   Takeshi`"If you're going to the trouble to hide, you should try to hide a little better."`;
   `Sora had simply squatted down and covered her head.`;
   Sora(T2C377)`"Is that right? I didn't think I would be that easy to find..."`;
   Sora(T2C378)`"Well, since you've found me there's not much I can do about it."`;
   `I took some bread out of the fridge for a sandwich.`;
   Takeshi`"Munch, munch..."`;
   Sora(T2C379)`"Takeshi, I'm not out until you step on the can."`;
   Takeshi`"Yeah, I know."`;

});
bgload({ name: `EV_SO08B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T2C380)`"Don't you think this is not the time to be eating bread...?"`;
   Takeshi`"No, it's okay."`;
   Takeshi`"With you here it means that Coco is around here also, right?"`;
   Sora(T2C381)`"Uh, yes."`;
   Takeshi`"Don't worry. I'll hound her out after I finish this."`;
   Takeshi`"Right, Coco?"`;

});
playSFX({ name: `SE10_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bang, bang! I pounded on the stainless steel kitchen counter.`;
   Coco`"........."`;
   Takeshi`"I know you're hiding in the back of the shop already."`;
   Coco`"........."`;
   Takeshi`"Well, if that's where you wanna be, that's fine..."`;
   Takeshi`"If you aren't there, then tell me."`;
   Coco(T2C382)`"I'm not!"`;
   Sora(T2C383)`"Coco you silly, if you talk, he will find you."`;
   Coco(T2C384)`"Huh?"`;
   Takeshi`"Girl, you fell for the oldest trick in the book."`;
   Coco(T2C385)`".....Ooooops."`;
   `Coco and Pipi came out from under the counter together.`;

});
showTextbox();
text(() => {
   `
         <I found Sora, Coco and Pipi.              I stepped on the can.>`;

});
hideTextbox();
stopBGM();
playBGM({ num: 13, volume: 100 });
if (l_counter == 0) goto(lbl_000012ae);
goto(lbl_000012d0);
let lbl_000012ae;
l_counter = 1;
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   `Again, I thought I'd check some other rooms.`;

});
goto(lbl_00000d74);
let lbl_000012d0;
l_selection_0_available = 0;
l_selection_1_available = 0;
l_selection_2_available = 0;
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `In that way I rounded up everyone, stepped on the can and ended the game.`;
   `Only Tsugumi was left....`;

});
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Whhhhaaaaat?"`;
   `I looked around outside of the room and was surprised.`;

});
bgload({ name: `EV_TU06A`, transition: 20 });
showTextbox();
text(() => {
   `Tsugumi was sitting calmly in a chair waiting.`;
   Takeshi`"I found TSUGUMI!"`;

});
bgload({ name: `EV_TU06B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T2C386)`"....Eh?"`;
   Takeshi`"Don't play dumb with me."`;
   Tsugumi(T2C387)`"I have no idea what you're talking about."`;
   Takeshi`"Heh, heh. I know better than that. You're playing dumb. I know it."`;
   Tsugumi(T2C388)`"Dumb?"`;
   Takeshi`"You're the one that kicked the can, right?"`;
   Tsugumi(T2C389)`"Can?"`;
   Tsugumi(T2C390)`"What...are you talking about?"`;

});
bgload({ name: `BG17A2`, transition: 20 });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi stood up.`;
   `I jumped. If Tsugumi kicked the can first, I thought I'd lose.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I frantically ran to where the can was.`;
   Takeshi`"I found Tsugumi!"`;
   Takeshi`"I stepped on the can."`;
   Takeshi`"Huh? What's...?"`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C391)`"Geez..."`;
   Tsugumi(T2C392)`"What're you doing, Takeshi...?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Huh?????????????"`;
   `My foot was searching for the can, but found only space.`;
   Takeshi`"The can is gone!"`;
   `I squinted scouring the area around me.`;
   `The can shined in the emergency lights visible dimly in a corner of the room.`;
   Takeshi`"Hey! Once you've been caught, it's against the rules to kick the can!"`;
   `I shouted this into the darkness, but everyone had already run away.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 3, volume: 100 });
bgload({ name: `IMG01A`, transition: 20 });
showTextbox();
text(() => {
   `There was nothing I could do. I was 'it' again. I had to go search.`;
   `The Kid, You, Coco, Pipi, Sora....`;
   `I knew they couldn't have gone far and thought I'd find them quickly.`;
   `Tsugumi stayed around in the Conference Room. It didn't look like she felt like going anywhere.`;
   `Just to be safe, I got everyone and stepped on the can again.`;
   `The next time nobody kicked the can....`;

});
bgload({ name: `BG17A2`, transition: 20 });
clock(`23:8`);
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"This time the Kid is 'it.'"`;
   Kid(T2C393)`"Alright. So I count to one hundred, right?"`;
   `The Kid took the can and sat in the chair with his face down.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C394)`"Alright, here I go..."`;
   Kid(T2C395)`"O-n-e, t-w-o, t-h-r-e-e..."`;
   `We left the Conference Room running around the floor.`;

});
bgload({ name: `BG26B4R`, transition: 20 });
playSFX({ name: `SE01_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Coco, Pipi and Sora vanished down the corridor amidst the sound of splashing.`;

});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You approached me.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C396)`"Takeshi, whaddya say we work together?"`;
   Takeshi`"Huh? Ganging up is against the rules. I think I'll pass."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C397)`"Don't be so stubborn..."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG25B4`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Why did you approach me?"`;
   You(T2C398)`"We just happened to be going in the same direction. That's all."`;
   Takeshi`"I see..."`;
   You(T2C399)`"I wonder if here would be safe."`;
   Takeshi`"The bathroom could be against the rules. It's not a good idea."`;

});
bgload({ name: `BG25B2`, transition: 20 });
fgload({ id: 1, name: `YU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C400)`"...Oh...and this way's a dead end, huh?"`;
   Takeshi`"Let's go back."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"I wonder if we still have time..."`;
   `I strained by ears to listen.`;
   Kid(T2C401)`"...t-h-i-r-t-y-f-o-u-r, t-h-i-r-t-y-f-i-v-e..."`;
   `I could faintly hear the Kid counting.`;
   Takeshi`"It seems like we've still got some time."`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG25B4`, transition: 20 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C402)`"I think it would have been more fun if we had made the emergency corridors part of the game."`;
   Takeshi`"That would make searching a hassle."`;
   You(T2C403)`"But there are only a few routes to the Conference Room so it's kind of boring..."`;
   Takeshi`"Well, that's because you run around so loudly that anyone can hear you coming a mile away."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C404)`"Oh thanks a lot..."`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C405)`"Hey, wait! Be quiet."`;
   Kid(T2C406)`"...f-i-f-t-y-o-n-e, f-i-f-t-y-t-w-o..."`;
   `We could still hear counting.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Let's find somewhere to hide."`;
   You(T2C407)`"Yeah."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG04B2`, transition: 20 });
showTextbox();
text(() => {
   `We ended up at the Lemurian Ruins.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T2C408)`"You wanna go in the ruins?"`;
   Takeshi`"The maze? Getting out will probably be a pain, but..."`;
   You(T2C409)`"Don't say that..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You pushed me toward the entrance of the ruins.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `I peered into the attraction.`;
   `But inside was dark as if it had been painted pitch black. I couldn't tell anything.`;
   You(T2C410)`"Oh, that might be too dark..."`;
   You(T2C411)`"The lights and emergency lights are both off."`;
   `I strained looking into the darkness.`;
   `It looked as if the darkness went on forever.`;
   Takeshi`"Heading in there like this would be reckless.... Huh?"`;
   `Something moved in the darkness.`;

});
bgload({ name: `BG04B2`, transition: 20 });
showTextbox();
text(() => {
   `A person appeared from the ruins.`;

});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"You were in there, Tsugumi?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C412)`"Yes. I took a look around."`;
   Tsugumi(T2C413)`"It's completely dark. You best not go in."`;
   Takeshi`"Completely dark, huh...?"`;
   Tsugumi`"........."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07ADS`, name2: `TU17ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi left us.`;
   `Looking tired, Tsugumi kicked the water under her feet lightly.`;

});
playSFX({ name: `SE04_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `And I heard the sound of something click in her hand...`;
   `It was a sound I'd heard before...`;
   Takeshi`"Tsugumi, did you take the flashlight?"`;

});
fgload({ id: 1, name: `YU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(T2C414)`"It'd be impossible to walk inside without it."`;
   Takeshi`"........."`;
   Coco(T2C415)`"HEY! HEY!"`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Coco came running and splashing up with Sora in tow.`;

});
hideTextbox();
stopSFX()
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `CO15ADS`, name2: `YU11ADS`, name3: `SO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T2C416)`"So this is where everybody was?"`;
   You(T2C417)`"Hey."`;
   Takeshi`"It's Coco and Sara. Welcome."`;
   Takeshi`"...But if we're supposed to be hiding, clumping up like this isn't too bright, is it?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO05ADS`, name2: `YU08ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C418)`"Oh, you're right..."`;

});
fgload({ id: 1, name: `CO01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C419)`"But he's probably just finishing counting to one hundred."`;

});
fgload({ id: 4, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C420)`"You're right."`;
   Tsugumi`"........."`;
   Takeshi`"And Tsugumi's playing, too. Right?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C421)`"I'm not playing."`;

});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T2C422)`"I just happened to be around here."`;
   Tsugumi(T2C423)`"Look, I wish you'd stop talking that way about me."`;
   Takeshi`"Alright, alright."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   //??
   Anon(T2C424)`"...e-i-g-h-t-y-s-e-v-e-n... e-i-g-h-t-y-e-i-g-h-t..."`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C425)`"What are you all doing here? You planning a strategy?"`;
   Takeshi`"No, not exactly..."`;
   Takeshi`"Well, I guess we better scatter and hide."`;

});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C426)`"Yeah."`;
   You`"........."`;
   Sora`"........."`;
   Tsugumi`"........."`;
   Coco`"........."`;
   Takeshi`"Hey, what's the Kid doing here?"`;

});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C427)`"Huh? What are you talking about?"`;
   Takeshi`"........."`;
   Takeshi`"Kid, you're..."`;
   Takeshi`"Did you forget that you're 'it'?"`;

});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C428)`"........."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   //??
   Anon(T2C429)`"...n-i-n-e-t-y-e-i-g-h-t... n-i-n-e-t-y-n-i-n-e..."`;
   Kid(T2C430)`"Hey...whose voice is that?"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 16, volume: 100 });
playSFX({ name: `SE03_11`, a1: 0, volume: 100 });
bgload({ name: `BG04B1`, transition: 20 });
showTextbox();
text(() => {
   `The lights turned on.`;
   Takeshi`"W-who turned the lights on?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C431)`"I did..."`;
   `We were now able to see the area around us.`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU06ADS`, name2: `CO06ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `You, Sora, Coco, Tsugumi, the Kid, me....`;
   `Everyone was accounted for.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C432)`"Everyone appears to be present."`;
   `Sora extended her hand out in the air.`;
   Sora(T2C433)`"The life readings of the complex do not appear to be abnormal."`;
   Sora(T2C434)`"There is nothing moving around Conference Room."`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU03ADS`, name2: `CO06ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You`"........."`;
   Tsugumi`"........."`;
   Coco`"........."`;
   Takeshi`"I don't get it."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C435)`"Who could have been counting?"`;
   Takeshi`"It wasn't you?"`;

});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C436)`"N-no!"`;
   Takeshi`"I thought it sounded like you.... So then who?"`;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T2C437)`"I d-dunno."`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE08_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Kabing!`;

});
if (l_is_coco_route == 0) goto(lbl_000018e4);
if (l_coco_point != 5) goto(lbl_000018e4);
stopBGM();
l_choice = 0;
jump(`SC2E`);
let lbl_000018e4;
multifgload3({ name1: `YU03ADS`, name2: `CO07ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T2C438)`"H-hey..."`;
   Coco(T2C439)`"That was...the can being kicked."`;
   Tsugumi(T2C440)`"Who?"`;
   Kid`"........."`;
   Takeshi`"........."`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `SO11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C441)`"Could it be a ghost?"`;
   `Sora said it with a straight face.`;

});
fgload({ id: 4, name: `SO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C442)`"If it is a ghost, I would like to make its acquaintance..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE01_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splish, splash...`;
   `The sound of someone moving through the water reached us from outside the room.`;
   `And then the empty can came rolling to a stop in front of us.`;

});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clatter, clatter, clatter...`;
   `The can stopped in a shallow area with a hollow metallic sound.`;
   Pipi(PIPI_04)`"Woooooooof!"`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T2C443)`"Hey, Pipi. Where have you been?"`;
   You`"........."`;
   Sora`"........."`;
   Tsugumi`"........."`;
   Coco`"........."`;
   Kid`"........."`;
   Takeshi`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Pipi took the can in his mouth again and ran circles around us.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   `That was the end of kick the can.`;
   `In the end, it remained a mystery who was counting...`;
   `We passed the rest of the night uneventfully...`;
   `It was a peaceful time...`;
   `And I decided to enjoy a satisfying rest.`;

});
removeBG({ mode: BLACK, transition: 1 });
delay({ interval: 150 });
l_choice = 0;
jump(`T_3A`);
