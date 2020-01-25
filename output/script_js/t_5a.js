l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
setDialogBoxColor(GREEN);
playBGM({ num: 24, volume: 100 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG06A`, transition: 10 });
if (l_sora_flag != 0) goto(lbl_000000d3);
setSceneTitle({ index: 29 });
goto(lbl_000000e1);
let lbl_000000d3;
setSceneTitle({ index: 30 });
let lbl_000000e1;
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Darkness spread out before my eyes.${wait(30)}`;
   `Without limit it spread. Nothingness.${wait(30)}`;
   `The void was endless.${wait(30)}`;
   `And I was in the middle of it.${wait(30)}`;
   `I could find nothing by which to judge distance.${wait(30)}`;
   `I searched for light, but couldn't even see the movement of my body.`;
   fadeClearPage();
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `There was nothing below my feet.${wait(30)}`;
   `Nothing held me up.${wait(30)}`;
   `And so I fell.${wait(30)}`;
   `I fell.${wait(30)}`;
   `Deeper and deeper, I sank into the void.${wait(30)}`;
   `Further and further.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `IMG04A`, transition: 20 });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `No, that wasn't it...${wait(30)}`;
   `It seemed to me, rather, that the darkness was coming toward me.${wait(30)}`;
   `It approached me at a terrifying speed.${wait(30)}`;
   `But there was no sound.${wait(30)}`;
   `Yet it was creeping closer and closer.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `And finally it...${wait(30)}`;
   `It penetrated me.${wait(30)}`;
   `There was no way for me to shake it off.${wait(30)}`;
   `It seeped completely into me.${wait(30)}`;
   `It was strange, but there was no feel to it.${wait(30)}`;
   `The blackness invaded and settled inside me.${wait(30)}`;
   `It overtook me, never to part again.`;
   fadeClearPage();
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `(Agh, I'm becoming the darkness.)${wait(30)}`;
   `(The darkness is becoming me.)${wait(30)}`;
   `(My body, becoming the darkness itself...)${wait(30)}`;
   `The void was endless, it had no ceiling.${wait(30)}`;
   `Nothing existed to cover it.${wait(30)}`;
   `It was an abyss.`;
   fadeClearPage();
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimOverlay();
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `Everything was buried in the pitch black.${wait(30)}`;
   `And the dark of the night was crushing me.${wait(30)}`;
   `That is how...${wait(30)}`;
   `Everyone dies.${wait(30)}`;
   `I was dying.${wait(30)}`;
   `I was dead.${wait(30)}`;
   `Death.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
delay({ interval: 90 });
stopBGM();
bgload({ name: `BG17A2`, transition: 20 });
clock(`3:17`);
showTextbox();
text(() => {
   `When I awoke, my shirt was soaked with sweat.`;
   `What an awful way to start the day.`;
   `I pulled out my PDA to check the time.`;
   `It read 3:18 a.m.`;
   `But all drowsiness had left me.`;
   `Attempting sleep again would have been a waste of time. I thought I'd only have another nightmare.`;
   `Nearby I could hear soft breathing.`;
   `Coco and Pipi were nestled together comfortably, asleep.`;
   `Trying not to wake them, I opened the Conference Room door and sneaked out.`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 95 });
removeBG({ mode: BLACK, transition: 2 });
chapterCutin({ name: `00000000` });
bgload({ name: `BG25B3`, transition: 20 });
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   `Outside, the hallway seemed endless...`;
   `For a moment, I had the illusion it went on forever.`;
   `(Stop being stupid...)`;
   `Without hesitation I stepped into the cold water filling the hallway.`;
   `I realized how oddly accustomed I'd grown to this spectacle, this strange situation.`;
   `This daily routine.`;
   `Being continually enclosed by walls.`;
   `Walls that, in a matter of time, were doomed to come crashing down.`;
   `(Where will I be when it happens...?)`;
   `...I decided not to think too deeply about it.`;
   `I had already decided not to think about things like that...`;

});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `Climbing the emergency stairway, I headed toward Zweite stock.`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   `Reaching the infirmary, I pushed the button to open the door.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
bgload({ name: `EV_TU10E`, transition: 20 });
showTextbox();
text(() => {
   `(She's not here...)`;
   `The bed was empty.`;
   `The spilled nuts were gone.`;
   `I wondered if Tsugumi had cleaned them up, or was it someone else....`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `In the meantime, no one was in the room.`;
   `Reaching out to the LeMMIH terminal, I touched the screen.`;
   `No reaction. The monitor lights were out.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `I walked toward the Security Office. I thought that maybe the terminal there would be online.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `Opening the door, I hesitated at the smell.`;
   `As always, the room smelled like smoke.`;
   `I tried the terminal.`;
   `The screen read 'Periodic Maintenance in Progress.'`;
   `The message continued.`;
   `'LeMMIH: Full System Periodic Maintenance Program in Operation.'`;
   `'Until completion, portions of LeMMIH functions are inaccessible.'`;
   `'Estimated completion time: 6 a.m.'`;
   `'While under maintenance, automatic control systems throughout the compound will be partially off-line. However, facilities and attractions will operate normally.'`;
   `'Note: Since all sensors and recording systems operations will be checked during maintenance, function may be erratic.'`;
   `'Therefore, it will not be possible to access data through the terminals.'`;
   `'WARNING : This maintenance program should not be aborted except in cases of emergency. If aborted, there is the danger of making the LeMMIH system unstable...'`;
   `'...Therefore, please refrain from accessing LeMMIH until after maintenance completion.'`;
   `'Thank you for your cooperation.'`;
   `'Additional note :'`;
   `'Until the maintenance completes, I will be unavailable. Everybody should be asleep at this time anyway, right?'`;
   `'I informed everyone about this operation at dinnertime, but in case any of you forgot what I said, I am leaving this message...'`;
   `'That is all, good night.—Sora'`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `(Well, how about that?)`;
   `(Geez, Sora. I guess you forgot to tell me about this.)`;
   `(Or then again maybe I just wasn't listening...)`;
   `I was probably busy eyeing that extra piece of sausage in the refrigerator. `;
   `Trying not to be seen by the others, as I hid the sausage...`;
   `And later, cooked it up...`;
   `I'd been gloating over it until being caught, and then...`;
   `Certainly not expecting to be throwing it up only a half an hour later...`;
   `(Was I stupid or what...?)`;
   `I was lucky it wasn't worse. Oddly enough, I hadn't felt hungry since...`;

});
bgload({ name: `BG22A3`, transition: 20 });
showTextbox();
text(() => {
   `Anyway, having no particular place to go, I found myself in front of an elevator.`;

});
choice(
   `Push the button`,
   `Don't push the button`,
);
switch (l_choice) {
   case 0: goto(lbl_000002f5);
   case 1: goto(lbl_0000031f);
}
let lbl_000002f5;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   `With no clear reason in mind, I pushed the elevator call button.`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Click, click...`;
   `All it did was make a noise. The elevator showed no sign of budging.`;
   `But of course.`;
   `All of the elevators in this section of the compound had been shut down.`;

});
goto(lbl_00000324);
let lbl_0000031f;
showTextbox();
text(() => {
   `Absentmindedly, I stared at the elevator call button.`;
   `At that moment, the button was truly meaningless.`;
   `Still, I thought about reaching out to push it again, but decided against it.`;

});
let lbl_00000324;
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Tsugumi(T5A000)`"Hi."`;
   `Hearing a voice from behind me, I turned my head.`;
   `And there was Tsugumi standing quietly.`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A001)`"Hey, what were you up to?"`;
   Tsugumi(T5A002)`"There's no point waiting around. That elevator's not coming."`;
   Takeshi`"........."`;
   `I didn't have an answer to give.`;
   Tsugumi(T5A003)`"Takeshi, what's the matter?"`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A004)`"Are you deaf?"`;
   Takeshi`"Heh, heh..."`;
   `I couldn't help but laugh.`;
   Tsugumi(T5A005)`"Come on, what's going on...?"`;
   Takeshi`"Ha, ha, ha..."`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A006)`"What's so funny?"`;
   `Tsugumi seemed slightly disturbed.`;
   Takeshi`"It's...nothing. No special reason."`;
   Takeshi`"It's just that, well, I thought your question was pointless."`;

});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `At first, Tsugumi started to frown...`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But then she laughed back at me.`;
   Tsugumi(T5A007)`"You've started to catch on, haven't you?"`;
   Takeshi`"I suppose..."`;
   Takeshi`"I was just out for a little walk. What have you been doing?"`;
   Takeshi`"Ah, that's okay, you don't have to answer."`;

});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A008)`"In that case, don't ask..."`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Turning her eyes away, Tsugumi frowned slightly.`;
   `Looking at the floor she seemed lost in thought.`;
   `After a moment she lifted her eyes and spoke.`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A009)`"Say Takeshi, do you know what 'Qualle' is?"`;
   Takeshi`"Qualle?"`;
   Tsugumi(T5A010)`"That's right, Qualle."`;

});
choice(
   `I don't know`,
   `I know`,
);
switch (l_choice) {
   case 0: goto(lbl_00000413);
   case 1: goto(lbl_00000433);
}
let lbl_00000413;
showTextbox();
text(() => {
   Takeshi`"I don't know."`;
   Takeshi`"Actually, I think I knew, but then I forgot."`;
   Tsugumi(T5A011)`"Right..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A012)`"Okay, I'll tell you."`;
   Tsugumi(T5A013)`"Qualle is..."`;
   Tsugumi(T5A014)`"...the Jellyfish Gondola ride."`;
   Tsugumi(T5A015)`"And it's located just behind this elevator room."`;
   Takeshi`"Hooo, is that so?"`;

});
goto(lbl_0000044f);
let lbl_00000433;
showTextbox();
text(() => {
   Takeshi`"Yeah I know what it is."`;
   Takeshi`"It's the Jellyfish Gondola attraction."`;
   Takeshi`"...right?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A016)`"Yeah."`;
   Takeshi`"So, what about it?"`;
   Tsugumi(T5A017)`"Well, Qualle is just behind this elevator room."`;
   Takeshi`"Yeah, come to think about it, you're right."`;

});
let lbl_0000044f;
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"........."`;
   `And then we both fell silent.`;
   `Tsugumi started to giggle and gave me a hard look. `;
   `We both knew what we were going to do next.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   `With Tsugumi in the lead, we headed for the Qualle entrance.`;
   Takeshi`"Say, how do you make this thing work?"`;

});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A018)`"Go figure."`;
   Takeshi`"'Go figure'? Come on, tell me."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A019)`"It's already turned on, dummy, just get in and it'll go."`;
   Takeshi`"That's it?"`;
   Tsugumi(T5A020)`"Look, I tried it out already, so I'm pretty sure."`;
   Takeshi`"Hmm, well, if you say so..."`;
   Takeshi`"...wait a second! You've already tried it?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A021)`"Well, yeah...I tested it."`;
   `Tsugumi's face looked troubled, as if she'd been caught at something.`;
   Takeshi`"You're saying you rode it alone?"`;
   Tsugumi(T5A022)`"...well, not exactly alone."`;
   Takeshi`"So, who was with you?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A023)`"It's not 'who' I was with..."`;
   Tsugumi(T5A024)`"You see, well...I was with Chami..."`;
   Takeshi`"You mean your hamster?"`;

});
fgload({ id: 1, name: `TU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A025)`"Well, yeah..."`;
   Takeshi`"In other words, one adult and one 'critter'."`;
   Tsugumi(T5A026)`"Yeah."`;
   Takeshi`"You rode Qualle with Chami?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A027)`"Yes...Don't make me repeat myself."`;
   Takeshi`"Well, then how was it? Fun?"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A028)`"Chami fell asleep. I guess he was bored."`;
   Tsugumi(T5A029)`"But as for me..."`;
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A030)`"Who cares?"`;
   Tsugumi(T5A031)`"It's a meaningless question."`;
   `Tsugumi hadn't said much, which was a lot more than usual.`;
   Takeshi`"Hmm..."`;
   Takeshi`"In other words, you were lonely, huh...?"`;
   Takeshi`"If I was there, I could have cheered you up."`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A032)`"What do you mean, 'Cheer me up'?"`;
   Takeshi`"Well, you know...you've been through a lot..."`;
   Takeshi`"And I thought, maybe the two of us together would..."`;

});
fgload({ id: 1, name: `TU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A034)`"Yeah, right..."`;
   `But then suddenly, Tsugumi's expression lost its tension.`;

});
showTextbox();
text(() => {
   Tsugumi(T2B004)`"Heh, heh..."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A035)`"Heh, heh, heh.... Ha, ha, ha..."`;
   `All of a sudden she let out a laugh.`;
   Takeshi`"Hey...what's going on with you...?"`;
   Takeshi`"Did I say something stupid?"`;

});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A036)`"Nah, not really."`;
   Tsugumi(T5A037)`"It's nothing important."`;

});
fgload({ id: 1, name: `TU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5A038)`"It's just that...I needed to laugh..."`;

});
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And then suddenly, her expression hardened again.`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But then again, I thought...`;
   `That a slight smile still remained on her face.`;
   Tsugumi(T5A039)`"Let's go."`;
   Takeshi`"Okay, if you say so..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeFG({ id: 1, useAnim: false });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   `Together we got inside the ride.`;
   `Immediately after the hatch closed, the gondola began to move forward smoothly.`;
   `It was just as Tsugumi had said.`;
   `The jellyfish shaped gondola picked up speed, and headed toward the outskirts of Zweite stock.`;
   `The corrugated tube carrying the gondola wrapped its way along the perimeter of the floor.`;
   `Floating comfortably inside the tube, the gondola skirted its way along.`;

});
bgload({ name: `BG36A1`, transition: 20 });
if (l_tsugumi_flag == 0) goto(lbl_0000064a);
showTextbox();
text(() => {
   Tsugumi(T5A040)`"I've been wanting to talk to you."`;
   Takeshi`"About what?"`;
   Tsugumi(T5A041)`"Well, some things I need to say..."`;
   Tsugumi(T5A042)`"Things to say...things I need to let you know..."`;
   Tsugumi(T5A043)`"And I figured, no one could interrupt us here."`;
   Takeshi`"It must really be something important..."`;
   Takeshi`"Something serious...?"`;
   Tsugumi(T5A044)`"Well, yeah...at least for me it is."`;
   `Having her approach me to talk was unusual.`;
   `Tsugumi fixed her eyes firmly on mine.`;
   `Her eyes were serious.`;
   `With no sign of mischief in them.`;
   `Whatever the consequences, I had to listen...`;
   Tsugumi(T5A045)`"Twelve years ago..."`;
   Tsugumi(T5A046)`"In August of 2005."`;
   Tsugumi(T5A047)`"On a summer day..."`;
   Tsugumi(T5A048)`"I was infected."`;
   Tsugumi(T5A049)`"...I was infected with a virus..."`;
   Tsugumi(T5A050)`"Yes, 2005. Twelve years ago."`;
   Tsugumi(T5A051)`"I was only 12 years old at the time..."`;
   Takeshi`"A virus?"`;
   Tsugumi(T5A052)`"Yeah."`;
   Takeshi`"And are you still...infected?"`;
   Tsugumi(T5A053)`"Yeah."`;
   Tsugumi(T5A054)`"I'm a carrier..."`;
   Takeshi`"...a carrier? What? Wait a second!"`;
   Takeshi`"Come on! Wait a just a second here!"`;
   Takeshi`"You mean to tell me...twelve years ago, at age 12?"`;
   Tsugumi(T5A055)`"That's what I'm saying."`;
   Takeshi`"Twelve years ago, at age 12...means your age now is..."`;
   Tsugumi(T5A056)`"That's right, I'm 23."`;
   Tsugumi(T5A057)`"I'll be 24 in another two months."`;
   Tsugumi(T5A058)`"You see...I was born 24 years ago. In July 1993."`;
   `I scrutinized Tsugumi's face.`;
   `There was no way she looked 23.`;
   `But then again, I knew she wasn't lying.`;
   `We had never touched upon the subject of her age.`;
   `But I had assumed her to be a "high school student" at the most. `;
   Takeshi`"23 years old..."`;
   `I muttered to myself.`;
   `To think...she was three years older than me...`;
   Tsugumi(T5A059)`"Takeshi, where are you?"`;
   `She suddenly changed the topic.`;

});
goto(lbl_0000064f);
let lbl_0000064a;
showTextbox();
text(() => {
   Tsugumi(T5A060)`"There's something I've been meaning to ask you."`;
   Takeshi`"What is it...?"`;
   Tsugumi(T5A061)`"Well, it's something I wanted to ask...something I wanted to confirm..."`;
   `It was strange that Tsugumi would have something she wanted to say just to me.`;
   `Her behavior seemed extremely odd.`;
   Tsugumi(T5A062)`"It's strange, but..."`;
   Tsugumi(T5A063)`"It's strange, but it seems that..."`;
   Tsugumi(T5A064)`"Like I'm beginning to lose it..."`;
   Tsugumi(T5A065)`"Like I'm going crazy..."`;
   Takeshi`"Huh...?"`;
   Tsugumi(T5A066)`"So tell me, where are you?"`;
   `Out of nowhere she asked me again.`;

});
let lbl_0000064f;
showTextbox();
text(() => {
   Takeshi`"What do you mean, 'where?' I'm right here."`;
   Tsugumi(T5A067)`"Yeah but, where is here?"`;
   Takeshi`"You know, here is 'here,' right?"`;
   `I beat the palm of my hand against my chest.`;
   Tsugumi(T5A068)`"Have you ever cut you finger nails?"`;
   Takeshi`"What's up with you all of a sudden?"`;
   `Tsugumi leaned over urgently, right in front of my face.`;
   `In her eyes I could see something, like a distant light.`;
   `I could just glimpse the tip of her tongue, wet and smooth.`;
   Tsugumi(T5A069)`"Just answer, okay..."`;
   Tsugumi(T5A070)`"Have you ever cut your finger nails?"`;
   Takeshi`"Of course I have."`;
   Tsugumi(T5A071)`"Well then, is the nail that's been cut away still you?"`;
   Takeshi`"What do you mean?"`;
   Tsugumi(T5A072)`"I mean, are you there in the nail?"`;
   Takeshi`"No...I guess once it's gone from my body, it's not me anymore."`;
   Tsugumi(T5A073)`"How about hair?"`;
   Takeshi`"The same goes for hair."`;
   Tsugumi(T5A074)`"In that case, this hair here is you right? But if I pull it out..."`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"Ouch!"`;
   `I reflexively put my hand to my head.`;
   `Tsugumi had yanked out a couple strands.`;
   Tsugumi(T5A075)`"This isn't you?"`;
   `Tsugumi held the hair up, waving it around.`;
   Takeshi`"Hmm...that's tough."`;
   Takeshi`"It isn't me but..."`;
   Takeshi`"I guess you could call it, 'ex-me.'"`;
   Tsugumi(T5A076)`"Okay then...What if I ripped your arm off?"`;
   Takeshi`"You gotta be kidding!"`;
   `Tsugumi grabbed my arm.`;

});
bgload({ name: `EV_TU08A`, transition: 20 });
showTextbox();
text(() => {
   `And before I could react, I was drawn into her body.`;
   `Although she wasn't abnormally strong, I found it impossible to resist her.`;
   `It was a natural, flowing movement.`;
   `Inside the white gondola...`;
   `...Tsugumi's body covered mine.`;
   `I could feel her breath.`;
   `I could feel her pulse.`;
   `I could feel the warmth of her body.`;
   `I could smell her scent.`;
   `The smell of musk...`;
   `It made me slightly dizzy...`;
   Tsugumi(T5A077)`"Well? If I ripped your arm off?"`;
   `Gazing intensely at me, Tsugumi continued shooting me questions.`;
   Takeshi`"........."`;
   Tsugumi(T5A078)`"Would you be there, in the arm?"`;
   Takeshi`"No, I suppose I wouldn't be there."`;

});
bgload({ name: `EV_TU08B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T5A079)`"Okay, then what if I took off your leg?"`;
   Tsugumi(T5A080)`"Or if I cut your torso away?"`;
   Tsugumi(T5A081)`"Or even if I took out your brain?"`;
   `Still gazing at me, she moved her hands and put them on my neck.`;
   `It felt like I was being hunted.`;
   `The illusion was intense.`;
   `She looked straight at me.`;
   `I couldn't shake myself away from her gaze.`;
   `I peered deeply into her eyes.`;
   `I felt like I was being sucked inside her.`;
   `...Those eyes, full of that distant light.`;
   `I wondered where the light originated from...`;
   Tsugumi(T5A082)`"Tell me, Takeshi, where are you?"`;
   Takeshi`"I'm..."`;
   Takeshi`"...where am I?"`;

});
hideTextbox();
monoColorOverlay({ interval: 2, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG04A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Me...Takeshi Kuranari. Since the moment I was born I had existed as one person. One continuous, linear, cohesive individual.${wait(30)}`;
   `There was no doubt about that fact.${wait(30)}`;
   `The 'me' as a baby in the photo album, the 'me' running around in elementary school and finally, the 'me' sitting there...they were all the same organism called 'Kuranari Takeshi.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `So where exactly did the entity called 'me' exist?${wait(30)}`;
   `In the past, people thought the soul existed in a person's heart.${wait(30)}`;
   `Descartes believed the soul inhabited the pineal gland in the brain.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The brain.${wait(30)}`;
   `I wondered briefly if I existed only in my memories?${wait(30)}`;
   `But if that were the truth, then if I lost my memory like the Kid, wouldn't that mean I was no longer 'Kuranari Takeshi?'${wait(30)}`;
   `Thoughts? Senses? Emotions? Sensations? Character? Values?${wait(30)}`;
   `All of those things were nothing but functions of the organ called the brain.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `For one thing, the 'me' that ran around in elementary school was composed of different molecules than the 'me' there.${wait(30)}`;
   `From purely a material point of view, my younger 'me' was entirely different than my older 'me.'${wait(30)}`;
   `Cells die and are replaced daily.${wait(30)}`;
   `Every cell that is replaced will also die.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `They say the cells in the entire human body are completely replaced every three to five years.${wait(30)}`;
   `By comparison, a rock would be composed of the exact same molecules five years before, or five years hence. ${wait(30)}`;
   `But a human body was different.${wait(30)}`;
   `The cells of 'me' five years ago were not the same as the cells of 'me' then.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Even so, the 'me' of five years before and the 'me' then were definitely the same.${wait(30)}`;
   `Then, just what was it that defined 'me'?${wait(30)}`;
   `And where did that 'me' exist...?`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
if (l_tsugumi_flag == 0) goto(lbl_000007a8);
bgload({ name: `EV_TU08A`, transition: 10 });
showTextbox();
text(() => {
   `Tsugumi took her hand off of my neck. I breathed easier.`;
   Tsugumi(T5A083)`"You see. Your existence has no substance."`;
   Tsugumi(T5A084)`"All you are is a concept."`;
   Takeshi`"A concept?"`;
   Tsugumi(T5A085)`"You are just a packet of information...'software'."`;
   Tsugumi(T5A086)`"The information written on a CD has no physical body, right?"`;
   Tsugumi(T5A087)`"The CD itself is just plastic, a hard mass of polycarbonate."`;
   Tsugumi(T5A088)`"But that mass has nothing to do with the information it holds."`;
   Tsugumi(T5A089)`"Information can't have a physical body, that's impossible."`;
   Tsugumi(T5A090)`"Information does not have shape or substance."`;
   Tsugumi(T5A091)`"The embodiment of information only takes place through its application."`;
   Tsugumi(T5A092)`"However, the embodied information itself has no actual body."`;
   Tsugumi(T5A093)`"The essence of information is the information itself..."`;
   Takeshi`"........."`;
   Tsugumi(T5A094)`"Takeshi, it's the same for you."`;
   Tsugumi(T5A095)`"There is no physical substance to your 'essence.'"`;
   Tsugumi(T5A096)`"Instead, the human called 'Takeshi Kuranari' is no more than a concept, information, software."`;
   Tsugumi(T5A097)`"And that essence is realized only through your body, the hardware."`;
   Tsugumi(T5A098)`"That's it. Your body is just the hardware."`;
   Tsugumi(T5A099)`"It's just a device in which the entity of 'you' is embodied."`;
   Takeshi`"...I see. Hmm."`;
   Takeshi`"Okay, okay. I understand you perfectly."`;
   Takeshi`"No, actually I hardly understand you at all...but if what you say is true..."`;
   Takeshi`"Then what?"`;
   Takeshi`"What does that have to do with what you were talking about?"`;
   Tsugumi(T5A100)`"Twelve years ago, I was infected with a virus."`;
   Takeshi`"Yeah, you said that."`;
   Tsugumi(T5A101)`"Because of that virus...the virus..."`;
   Tsugumi(T5A102)`"It rewrote my genetic code."`;
   Takeshi`"What? Your genetic code?"`;
   Tsugumi(T5A103)`"Cells in peoples body are replaced daily."`;
   Tsugumi(T5A104)`"They are reborn, and then die."`;
   Tsugumi(T5A105)`"Normally, the human body is totally replaced with new cells within five years."`;
   Tsugumi(T5A106)`"When I was twelve, the cells in my body were infected. And from that moment on, they divided and replaced themselves."`;
   Tsugumi(T5A107)`"Five years later, all cells had been replaced."`;
   Tsugumi(T5A108)`"In five years, every cell that made up my body had been genetically altered."`;
   Takeshi`".........?"`;
   Tsugumi(T5A109)`"And when the last of the cells had died..."`;
   Tsugumi(T5A110)`"...the last trace of my 12-year-old self disappeared."`;
   Tsugumi(T5A111)`"In that moment the old me died."`;
   Tsugumi(T5A112)`"The old me died, but the new me became a body that never dies."`;
   Takeshi`"A body that never dies...?"`;
   Tsugumi(T5A113)`"My immune system and my metabolic rate were remarkably improved..."`;
   Tsugumi(T5A114)`"My telomeres began to regenerate themselves..."`;
   Tsugumi(T5A115)`"That's right..."`;
   Tsugumi(T5A116)`"I will never grow old, and never die."`;
   Tsugumi(T5A117)`"My physical growth stopped at that moment in time."`;
   Tsugumi(T5A118)`"I'll never grow older than 17."`;
   Takeshi`"........."`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `"'Highly improved immune system and increased metabolic efficiency'"`;
   `"'Telomeres that continue to rejuvenate'"`;
   `Well, if what she said was to be believed....`;
   `Tsugumi's body would never die on its own.`;
   `As long as her body had the energy to continue, it would not die.`;
   `As long as she continued to have the will to live, her body would be sustained forever.`;
   `Semi-eternal life.`;
   `But, was such a thing even conceivable?`;
   `The concept of never growing old, never dying - was it possible?`;
   `Why do living creatures age? ...Essentially, it is to protect against exhaustion and deterioration of function.`;
   `The life cycle needs aging so it can have succession and renewal through subsequent generations.`;

});
bgload({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   `I couldn't help but laugh.`;
   Takeshi`"Ha..."`;
   Takeshi`"Ha, ha, ha..."`;
   Takeshi`"That's a good story. But no way...!"`;
   Takeshi`"But I guess it's a good joke, pretty solid."`;
   Tsugumi(T5A119)`"Yeah...I guess your right."`;
   `Tsugumi snickered at my words.`;
   Tsugumi(T5A120)`"Yep, it's just a little joke."`;
   Tsugumi(T5A121)`"I thought you might fall for it, but I guess not."`;
   Takeshi`"What else would you expect? Crazy talk like that."`;
   Tsugumi(T5A122)`"Well, Takeshi..."`;
   Tsugumi(T5A123)`"I guess you're not so stupid after all."`;

});
bgload({ name: `EV_TU03A`, transition: 0 });
showTextbox();
text(() => {
   `Tsugumi got up slowly.`;
   `Her disheveled clothes showed just a peek of her legs.`;
   `And a glimpse of her sleek thighs.`;
   `Her clean satin skin.`;
   `...and a scar.`;
   Takeshi`"What the...?"`;
   Tsugumi(T5A124)`"What's the matter?"`;
   Tsugumi(T5A125)`"Takeshi...what are you looking at?"`;
   `Your right thigh, at the scar...`;
   Tsugumi(T5A126)`"Do you want a closer look?"`;
   Takeshi`"Well...yeah...no..."`;
   Tsugumi(T5A127)`"Shall I show you...?"`;
   Takeshi`"No, really..."`;
   Takeshi`"It's okay..."`;
   `Sure enough, it was a scar.`;
   `However...`;
   `It looked like something that had healed years ago, just a scar where once several stitches closed a wound.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 90 });
goto(lbl_000009a9);
let lbl_000007a8;
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   `All this time, Tsugumi continued to hold my neck with her hands.`;
   `Little by little, she began to apply more pressure.`;
   `After a time, it became difficult to breath.`;
   `My mind began to fog over.`;
   `I was slowly drifting toward chaos...`;

});
hideTextbox();
playBGM({ num: 24, volume: 100 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `EV_TU08B`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T5A128)`"You see. Your existence has no substance."`;
   Tsugumi(T5A129)`"All you are is a concept."`;
   Takeshi`".........?"`;
   Tsugumi(T5A130)`"You are just a packet of information...'software'."`;
   Tsugumi(T5A131)`"The information written on a CD has no physical body, right?"`;
   Tsugumi(T5A132)`"The CD itself is just plastic, a hard mass of polycarbonate."`;
   Tsugumi(T5A133)`"But that mass has nothing to do with the information it holds."`;
   Tsugumi(T5A134)`"Information can't have a physical body, that's impossible."`;
   Tsugumi(T5A135)`"Information does not have shape or substance."`;
   Tsugumi(T5A136)`"The embodiment of information only takes place through it application."`;
   Tsugumi(T5A137)`"However, the embodied information itself has no actual body."`;
   Tsugumi(T5A138)`"The essence of information is the information itself..."`;
   Takeshi`"..."`;
   Tsugumi(T5A139)`"Takeshi, it's the same for you."`;
   Tsugumi(T5A140)`"There is no physical substance to the essence of Takeshi."`;
   Tsugumi(T5A141)`"Instead, the human called 'Takeshi Kuranari' is no more than a concept, information, software."`;
   Tsugumi(T5A142)`"And that essence is realized only through your body, the hardware."`;
   Tsugumi(T5A143)`"That's it. Your body is just the hardware."`;
   Tsugumi(T5A144)`"It's just a device in which the entity of you is embodied."`;
   Takeshi`"Why...do...you...?"`;
   `I spit out the words with difficulty.`;
   Takeshi`"How...come...you...are...?"`;
   `Was I making any sense to her? I couldn't tell.`;
   Tsugumi`"..."`;
   `The weight of Tsugumi's whole body was on my neck.`;
   Tsugumi(T5A145)`"I can't..."`;
   Takeshi`"..."`;
   Tsugumi(T5A146)`"I can't..."`;
   Tsugumi(T5A147)`"I just can't..."`;
   `For an instant, her grip loosened slightly.`;

});
bgload({ name: `EV_TU08C`, transition: 0 });
showTextbox();
text(() => {
   Tsugumi(T5A148)`"I can never escape."`;
   Tsugumi(T5A149)`"I'm bound eternally to this horrid body."`;
   Tsugumi(T5A150)`"My soul is forever in chains."`;
   Takeshi`"........."`;
   `Tsugumi became teary eyed.`;
   `So that was the light deep in her eyes...tears.`;
   Tsugumi(T5A151)`"Hey? Takeshi...?"`;
   Tsugumi(T5A152)`"Would... you kill me?"`;
   `Half lying on her side, she grabbed my wrists.`;
   `She tried to force my hands to her own neck.`;
   Tsugumi(T5A153)`"Please...?"`;
   Tsugumi(T5A154)`"Kill me?"`;
   Takeshi`"W...what are you talking about!?"`;
   `I broke away from her grasp.`;
   Takeshi`"Why are you talking like this...?"`;
   Tsugumi(T5A155)`"Yeah, I get it..."`;
   `Tsugumi muttered, her voice shaking.`;
   `And her gaze drifted off.`;
   Tsugumi(T5A156)`"You're just a coward..."`;
   Tsugumi(T5A157)`"...Just a gutless man..."`;
   Tsugumi(T5A158)`"In fact, you're not even a 'man.'"`;
   Takeshi`"That's got nothing to do with this!"`;
   Tsugumi(T5A159)`"Come on, please..."`;
   Tsugumi(T5A160)`"Kill me...!"`;
   Tsugumi(T5A161)`"Can't you do it?"`;
   Takeshi`"Are you crazy!"`;
   Takeshi`"There's no way I could do such a thing!!"`;
   Tsugumi(T5A162)`"Why not? Why can't you...?"`;
   Takeshi`"Of course I can't! I..."`;
   Takeshi`"...I don't need a reason!"`;
   Takeshi`"I don't want to..."`;
   Takeshi`"Why do you want to die so badly, anyway?"`;
   Takeshi`"Why do you need someone to kill you!"`;
   Tsugumi(T5A163)`"Please. It's because..."`;
   Takeshi`"Forget it!"`;
   Tsugumi(T5A164)`"Are you really so unwilling...?"`;
   Takeshi`"You're damn right I'm unwilling."`;
   Tsugumi(T5A165)`"Well, in that case..."`;
   Tsugumi(T5A166)`"In that case, I know..."`;
   Tsugumi(T5A167)`"I will kill you instead."`;

});
hideTextbox();
playSFX({ name: `SE05_07`, a1: 0, volume: 100 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_c2_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 6;
openShakeScreenAnim();
showTextbox();
text(() => {
   `With all her strength Tsugumi slammed me to the floor and started choking me.`;
   Takeshi`"Gah."`;

});
closeShakeScreenAnim();
showTextbox();
text(() => {
   Tsugumi(T5A168)`"I'll give you the gift of death! And then I'll..."`;
   Takeshi`"Argh......!!"`;

});
hideTextbox();
playSFX({ name: `SE05_11`, a1: 0, volume: 95 });
shakeScreen();
showTextbox();
text(() => {
   `With all her strength, she slammed me down.`;

});
hideTextbox();
playSFX({ name: `SE05_11`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Slammed me down.`;

});
hideTextbox();
playSFX({ name: `SE05_03`, a1: 0, volume: 95 });
shakeScreenHard();
showTextbox();
text(() => {
   `And slammed me down.`;

});
hideTextbox();
playSFX({ name: `SE05_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Again and again.`;
   Takeshi`"Stop...it......"`;

});
playSFX({ name: `SE05_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I would die, if she kept it up.`;
   `No, I WAS dying.`;

});
playSFX({ name: `SE05_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `(If she doesn't stop, I'm a goner...)`;

});
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
removeBG({ mode: RED, transition: 3 });
closeDimInAndOutAndFilterAnim();
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG04A`, transition: 10 });
showTextbox();
text(() => {
   `Attempting to force her off, I scratched her.`;
   `Something red started to drip from her lips.`;
   `It was blood.`;
   `She's bleeding.`;
   `Blood mixed with tears.`;
   `Suddenly her shadow loomed over me.`;
   `I couldn't see a thing.`;
   `And then her mouth closed on mine.`;
   `Our lips pressed hard together.`;
   `My mouth was filled with the taste of her blood...and tears...`;

});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   `............`;
   `........................`;
   Tsugumi(T5A169)`"I'll kill you..."`;
   Tsugumi(T5A170)`"I will...I'll kill you..."`;
   Tsugumi(T5A171)`"...oh, oh..."`;
   Tsugumi(T5A172)`"No!..."`;
   Tsugumi(T5A173)`"Don't leave me alone..."`;
   Tsugumi(T5A174)`"No, please don't leave me alone..."`;
   Tsugumi(T5A175)`"Please...Takeshi..."`;
   Tsugumi(T5A176)`"Please."`;
   `Darkness surrounded me.`;
   `Or, maybe I wasn't there at all...`;
   `A darkness without awareness...I heard only the slight rustle of clothing, and Tsugumi's sigh.`;
   `Hearing that sound, I felt a craziness swell up inside me.`;
   `Two shadows overlapped to become one. `;
   `And I plunged into the chaos, further and further and became one.`;
   `........................`;
   `............`;

});
hideTextbox();
stopBGM();
delay({ interval: 120 });
let lbl_000009a9;
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
clock(`6:34`);
showTextbox();
text(() => {
   `Afterwards, I went straight back to the Conference Room.`;
   `Both my mind and body were exhausted...`;
   `Even though little remained of the night, I slept soundly.`;
   `When I awoke, I felt refreshed and fully recharged.`;
   `Apparently, no one had noticed my disappearance during the night.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T5A177)`"Good morning everybody."`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU01BDS`, name2: `CO02ADS`, name3: `KA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T5A178)`"Good morning!"`;
   Coco(T5A179)`"Good...morning, Sora!!"`;
   Kid(T5A180)`"Morning!"`;
   Takeshi`"Yeah, hi there, Sora."`;
   `A little later than usual, Sora presented herself in the Conference Room.`;
   You(T5A181)`"So how about it Sora? How did the maintenance go?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T5A182)`"Well, yes..."`;
   Sora(T5A183)`"The system is in sound condition. Although, there would be no way to repair any mechanical damage if it were to occur."`;
   Sora(T5A184)`"The scheduled maintenance program checked out. I can assure you that the entire compound is functioning normally."`;
   You(T5A185)`"Well, that's good to hear."`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T5A186)`"After carefully assessing the situation, I have found a slight noise in my thought processor..."`;
   Sora(T5A187)`"Normal function will not be compromised, so no modifications are necessary."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T5A188)`"Hey, Sora, what does that mean?"`;

});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T5A189)`"Well, Coco. It means that..."`;
   Sora(T5A190)`"You see, sometimes certain customers want to play pranks on me. They tell lies, or try to confuse me."`;
   Sora(T5A191)`"And because of that, my memories or programmed responses get a little out of alignment. It tends to cause issues in my thought processing."`;
   Sora(T5A192)`"Sometimes older data gets mixed with newer information, making it difficult to determine which is correct."`;
   Sora(T5A193)`"When this problem becomes severe, it's necessary to fiddle with the system and overwrite the problematic data."`;

});
fgload({ id: 2, name: `SO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T5A194)`"However, at this time, nothing too drastic has occurred, so please don't worry."`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T5A195)`"Okay."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T5A196)`"Other than that...I have yet to complete a full check of the sensor data which was recorded throughout the compound while you all were sleeping."`;
   Sora(T5A197)`"I doubt any new leakage has occurred...but I will report back to you, once I've checked the sensor data."`;
   Kid(T5A198)`"Thanks, Sora. We're counting on you."`;
   Sora(T5A199)`"Yes, leave it to me."`;
   Sora(T5A200)`"By the way, thanks to the maintenance program, the LeMMIH terminal response has greatly improved."`;
   Sora(T5A201)`"There was a slight problem concerning LeMMIH traffic, but it has been resolved. Terminal communication functions were optimized to adjust to LeMU's current status."`;
   Kid(T5A202)`"Hmm..."`;
   Takeshi`"Hey Sora, what do you mean by 'traffic'? I'd like to know more about what exactly has was tweaked in the terminals."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"......"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T5A203)`"Alright everyone, why don't we go to breakfast?"`;
   `"W...What?"`;
   `(Is it me, or did she just totally ignore my question?)`;
   `...Oh well...`;
   `Perhaps she just couldn't hear me.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Everybody relocated to the chicken sandwich shop.`;

});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `And as always, I cooked up breakfast for everyone.`;
   `Looking at their faces as they ate, I suddenly felt relieved.`;
   `The faces of You, Coco, and the Kid seemed so happy...`;
   `Sora just stood by quietly watching them enjoy the meal.`;
   `However...`;
   `Tsugumi was nowhere to be seen.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_5B`);
