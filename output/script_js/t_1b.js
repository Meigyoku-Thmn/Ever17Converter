if (l_choice == 1) goto(lbl_00000291);
if (l_choice == 2) goto(lbl_00000426);
l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
setDialogBoxColor(GREEN);
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG26A1R`, transition: 0 });
setSceneTitle({ index: 5 });
clock(`16:13`);
showTextbox();
text(() => {
   `There were still fish flopping around on the 
floor, but the water had receded a while 
earlier.`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1A034)`"This sector has been confirmed drained free 
of water..."`;
   //Park staff
   Park_staff(T1A035)`"However, 30 percent of the facility is 
already..."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1A036)`"Believed to be submerged or completely 
flooded..."`;
   Takeshi`"Hey, wait just a second..."`;
   Takeshi`"I thought we were going to escape UP!?"`;
   Takeshi`"If we go down...!"`;
   Takeshi`"Hey! What are we supposed to do now?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU17AWM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A037)`"There's no point arguing about this."`;
   //Park staff
   Park_staff(T1A038)`"I'm sorry, but..."`;
   `The employee looked extremely sorry and was 
bowing.`;

});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1A039)`"It is my responsibility."`;

});
choice(
   `That's right! The person in charge is who!`,
   `It's not your fault`,
   `That's not important right now...`,
);
switch (l_choice) {
   case 0: goto(lbl_0000016f);
   case 1: goto(lbl_000001bd);
   case 2: goto(lbl_000001dc);
}
let lbl_0000016f;
showTextbox();
text(() => {
   Takeshi`"That's right! Get me the person in charge!"`;
   Takeshi`"It's no good blaming someone that works here 
like you, but..."`;
   Takeshi`"How could this happen? I want an explanation!"`;
   Takeshi`"I came here with my friends and just missed 
taking the elevator..."`;
   Takeshi`"I don't believe this...!"`;

});
fgload({ id: 1, name: `TU08AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A040)`"Take it easy..."`;
   Takeshi`"You be quiet..."`;

});
fgload({ id: 1, name: `TU04AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A041)`"Stop it!"`;
   `The girl was glaring at me intensely.`;

});
fgload({ id: 1, name: `TU08AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Girl(T1A042)`"Why don't you just be quiet..."`;
   `Her icy, threatening voice overwhelmed me.`;
   Takeshi`"Al-alright."`;

});
goto(lbl_0000021b);
let lbl_000001bd;
l_sora_point += 2;
l_said_it_is_not_soras_fault = 1;
showTextbox();
text(() => {
   Takeshi`"It's not your fault."`;
   Takeshi`"I don't think that this is any one person's 
fault."`;
   Takeshi`"But why has this happened?"`;
   Takeshi`"That's...the issue."`;
   Takeshi`"Sorry. I'm just a little aggravated. I 
didn't mean to take it out on you..."`;
   //Park staff
   Park_staff(T1A043)`"It's okay..."`;

});
goto(lbl_0000021b);
let lbl_000001dc;
l_tsugumi_point += 1;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"No, relax...yeah, let's all relax..."`;
   Takeshi`"I'm glad to be safe, but more important than 
that right now is who are you guys?"`;
   Takeshi`"The chick in black ran like something 
bionic..."`;
   Takeshi`"When the glass broke, that attendant was 
right next to it. But she took off at warp 
speed..."`;
   Takeshi`"What's up with that?"`;
   Takeshi`"And don't tell me that this is part of the 
this theme park atmosphere?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU05AWM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Girl`"........."`;
   //Park staff
   Park_staff`"........."`;
   `Neither of them tried to answer.`;

});
let lbl_0000021b;
showTextbox();
text(() => {
   `The fish on the floor were still jumping 
around.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1A044)`"I'm really, really sorry..."`;
   `The park employee was bowing so low that her 
head approached the floor.`;
   `For some reason her clothes were completely 
dry.`;

});
removeFG({ id: 1, useAnim: true });
if (g_coco_route_unlock == 0) goto(lbl_00000279);
l_is_coco_route = 1;
l_choice = 0;
jump(`TC1A`);
let lbl_00000279;
showTextbox();
text(() => {
   Girl(T1B000)`"It doesn't do us any good just standing 
around here, can you show us the way?"`;
   //Park staff
   Park_staff(T1B001)`"Certainly. There is a relatively safe place 
nearby. I will take you there..."`;
   `(RELATIVELY safe...?)`;
   `That was about the same as saying that 
everywhere else was dangerous.`;

});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `We turned around and started heading back the 
corridor we'd been washed down.`;
   `I looked at a panel and finally realized that 
we were in Zweite stock—basement level two.`;

});
let lbl_00000291;
bgload({ name: `BG02A1`, transition: 20 });
showTextbox();
text(() => {
   `We went in a nearby attraction.`;
   Takeshi`"So are we the only folks here?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B002)`"I do not know. I am currently investigating."`;
   `Yeah, right, 'Investigating what?' I thought 
as we walked...`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B003)`"Ah!"`;
   Takeshi`"What is it?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B004)`"Three other people are approaching."`;
   Takeshi`"...What?"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
playBGM({ num: 3, volume: 100 });
clock(`16:41`);
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B005)`"*Sigh*"`;
   //Park staff
   Park_staff(T1B006)`"For a while I wondered what was going to 
happen to us, but..."`;
   `It was one of the female employees that 
I'd met once before.`;

});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B007)`"I'm glad we survived..."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B008)`"Hey, aren't you..."`;
   `The girl finally noticed us.`;
   Takeshi`"I didn't think there'd be anybody else here."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B009)`"Yeah. How are you?"`;
   Takeshi`"Bout as good as I look, I suppose."`;
   //Park staff
   Park_staff(T1B010)`"Seems like you had a rough time of it, too..."`;
   Takeshi`"Hey, lucky guess..."`;
   `Relaxing a bit, I returned her smile.`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `YU15BDS`, name2: `KA03ADS`, name3: `CO01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `There were two people behind the girl.`;
   `One of them was the girl who I thought was 
named Coco.`;

});
fgload({ id: 4, name: `CO02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `When our eyes met, Coco grinned.`;
   Coco(T1B011)`"Oh, we meet again."`;
   Takeshi`"It's been a while."`;
   Takeshi`"It doesn't have to be right now, but Coco, 
will you tell me a joke later? I'm really in 
the mood for one."`;

});
fgload({ id: 4, name: `CO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B012)`"Sure. No problem, I'll think of one."`;
   `She nodded brightly.`;

});
showTextbox();
text(() => {
   Kid(T1B013)`"......"`;
   `The other person was the kid I helped to the 
infirmary.`;
   `His expression looked darker somehow.`;
   `If he'd become super upbeat all of the 
sudden that would have been weird too, but...`;
   `For some reason it bothered me.`;
   Takeshi`"Is something wrong with him? He doesn't look 
so hot."`;

});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B014)`"Oh, he's, a bit..."`;
   `The attendant hesitated.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B015)`"By the way..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B016)`"Hey, Sora, do you have any idea what 
our situation is?"`;
   `The girl attendant addressed the question to 
the staff member in the dress.`;

});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B017)`"Well, the communication lines are down.... 
I've been investigating ways to restore our 
connection, but is going to take some time."`;
   `The attendant called Sora said this.`;

});
let lbl_00000426;
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B018)`"In that case, let's go to the Central 
Control Room. We can monitor things in detail 
from there, right?"`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B019)`"That sounds good. I wish I were more 
useful..."`;
   //Park staff
   Park_staff(T1B020)`"Don't worry about it, Sora."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `With that, the girl addressed me again.`;
   //Park staff
   Park_staff(T1B021)`"We're going down to Dritte stock - the third 
floor underwater."`;
   //Park staff
   Park_staff(T1B022)`"You're coming, right?"`;
   Takeshi`"Y-yeah. I'll go."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   `We took an emergency corridor behind one of 
the attractions.`;
   `It looked like there were a number of these 
narrow corridors above and below other 
corridors and rooms.`;
   `I figured that they were probably used as 
shortcuts by employees as well.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B023)`"My name's You."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B024)`"You Tanaka. My real name is really a lot 
longer, but just call me You. What's your 
name?"`;
   Takeshi`"I'm Takeshi."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B025)`"Takeshi Kuranari."`;
   Takeshi`"Good to know you, You."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl`"........."`;
   `The whole time the girl in the dark clothes 
silently watched our exchange.`;

});
bgload({ name: `BG27A3`, transition: 20 });
playSFX({ name: `SE01_07`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We went down the stairs together.`;
   `Me, Coco, You, Sora, the Kid, the girl in 
black - six of us total...`;

});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   `We arrived at Dritte stock, the third floor 
underwater.`;

});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   `We used the ladder in the emergency corridor 
to descend to another corridor and turned 
around the corner.`;

});
bgload({ name: `BG26A1R`, transition: 20 });
bgload({ name: `BG15A1`, transition: 20 });
clock(`17:6`);
showTextbox();
text(() => {
   `'Control Room'`;
   `It seemed that this was the Central Control 
Room.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A3`, transition: 20 });
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADS`, name2: `YU11BDS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T1B026)`"What do you think? Can you learn anything 
from the computers here?"`;
   Sora(T1B027)`"Let's see. It looks like directly accessing 
it would be the fastest route."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora faced the monitor and held up both hands.`;

});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Instantly the content of the screen began to 
change, with a number of windows opening, 
closing and searches for data underway.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey...you can operate these computers 
without even touching them?"`;
   Takeshi`"I've got the latest cell phone and it's 
gotta touch panel."`;
   Takeshi`"And it's got a kinetic-recharge function..."`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B028)`"What's that?"`;
   Takeshi`"Huh? Oh, it means that even if the battery 
dies, if you walk around with it or shake it, 
it will recharge itself. It takes a while 
though."`;
   `I took my PDA from my pocket and lent it to 
Coco.`;

});
fgload({ id: 1, name: `CO15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B029)`"Like this?"`;
   `Coco took the PDA and shook it using short 
movements like she was shaking maracas.`;
   Takeshi`"Yeah, like that."`;
   `The lamp that had indicated the battery was 
dead lit up.`;

});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B030)`"Oh, you're right."`;
   Takeshi`"The harder you shake it, the more it lights 
up."`;
   `The lamp flickered.`;
   `I didn't know if she was having fun or what, 
but Coco kept up her maraca act for a while.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `It looked like the PDA wasn't broken. All I 
had to do was wait and it would probably work 
again.`;
   `It seemed the professional diving waterproof 
specifications it had boasted were actually 
true.`;
   Sora`"........"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Sora typed quietly on the keyboard.`;
   `(What?)`;
   `She was typing the keyboard, but....`;
   `It looked like her hands weren't even 
touching the keyboard. I figured that was my 
imagination.`;

});
hideTextbox();
stopSFX()
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B031)`"...I've learned something."`;
   `Sora said it in businesslike manner. She 
seemed done with the computer.`;
   `Everyone looked at her.`;
   Sora(T1B032)`"Everyone, please be calm."`;
   `As she said that, I notice she looked a 
little pale.`;
   `The room went quiet as the focus shifted to 
her.`;

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
   Sora(T1B033)`"First, the first floor, Erste boden..."`;
   Sora(T1B034)`"The whole floor is flooded, except for one 
segment of stairs,"`;
   You(T1B035)`"Flooded? The whole first floor?"`;
   Sora(T1B036)`"Yeah. All of the partitions have dropped and 
it isn't possible to get through any of its 
corridors"`;
   Girl(T1B037)`"In other words...there's no way up."`;
   Sora(T1B038)`"That is correct."`;
   Takeshi`"..."`;
   Sora(T1B039)`"And as for Zweite stock and Dritte stock..."`;
   Sora(T1B040)`"The watertight doors did not close in time 
and Sector 3 is completely flooded."`;

});
bgload({ name: `MAP03A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T1B041)`"All other sectors on the other floors are 
currently fine."`;
   Sora(T1B042)`"However, some rooms do have water from the 
flood we just experienced."`;
   Sora(T1B043)`"Currently the bilge pumps are functioning, 
but it will take a lot of time for the water 
to completely drain."`;
   You(T1B044)`"Bilge pumps?"`;
   Coco(T1B045)`"Does that mean that we have electricity?"`;
   Sora(T1B046)`"Let's see..."`;
   Sora(T1B901)`"Some parts of the electric system, including 
the elevator are not functioning.`;
   Sora(T1B902)`The cause of this is unclear, 
but it would seem that circuit damage 
in each section is playing a role."`;
   Sora(T1B048)`"That is another reason that I was not able 
to survey the situation adequately before."`;
   `(What does she mean 'she' wasn't able to...?)`;
   `Something about her words nagged at my mind, 
but I listened to the rest of what she had to 
say.`;
   Sora(T1B049)`"However the generator is functioning 
normally and supplying power."`;
   Sora(T1B050)`"So as long as the generator is operating as 
well as the circuitry, the water should be 
cleared with time."`;
   Sora(T1B051)`"Incidentally, the internal air pressure of 
the complex is 1 atmosphere."`;
   Sora(T1B052)`"The air is 22 percent oxygen, 75 percent 
nitrogen, 3 percent helium and the 
temperatures is 24 degrees Celsius..."`;
   Girl(T1B053)`"So, what you're basically saying is, we're 
safe for a while, right?"`;
   Sora(T1B054)`"I'm sorry. That is correct..."`;
   Sora(T1B055)`"Everyone, we will be forced to wait 
inside the complex for a while."`;

});
bgload({ name: `BG16A1`, transition: 20 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"For a while? How long is that?"`;
   Sora(T1B056)`"Until help comes."`;
   Sora(T1B057)`"I am continuously sending out a request for 
assistance. However..."`;
   Sora(T1B058)`"Right now there is no guarantee that it will 
reach anyone."`;
   Sora(T1B059)`"All communication lines to Insel null, 
including the emergency ones, have been 
physically severed and are unusable."`;
   Sora(T1B060)`"I have also been attempting to make contact 
via a seafloor cable network, using sonar..."`;
   Sora(T1B061)`"Right now I cannot estimate when the network 
will be back online."`;
   Takeshi`"So we're like little kids lost smack in the 
middle of the ocean and nobody can hear our 
SOS..."`;
   Sora(T1B062)`"Exactly."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Those were the cold, hard facts we had to face.`;
   `There was every reason for everyone to get 
depressed.`;
   `I sighed....`;

});
hideTextbox();
stopBGM();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B063)`"Alright! We've got to stay in good spirits!"`;
   `One of the group was determined to dispel the 
gloomy atmosphere.`;
   `You spoke so fast it was almost scary.`;
   You(T1B064)`"I'm a first year student at Kyumeikan Girl's 
College and I work here part-time. My name is 
Yubiseiharukana Tanaka. I will be your guide 
until the rescue team comes."`;
   You(T1B065)`"Rap-tap-tap-tap Ta-da!"`;
   Takeshi`"...Hey, wait, wait! What did you just say?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B066)`"I'm a freshman at Kyumeikan Girl's College."`;
   You(T1B067)`"I work here part-time and only over the 
holidays."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B068)`"Well, I'm kind of new to this whole tour 
thing, but I will be leading the tour..."`;
   Takeshi`"No, no. After that."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B069)`"Huh? You mean my name?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B070)`"Yubiseiharukana Tanaka."`;
   Takeshi`"Yubise...what?"`;
   You(T1B071)`"Yubiseiharukana Tanaka."`;
   Takeshi`"I can't get my tongue around that."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B072)`"That's why I said you can call me You. The 
long name is a pain, isn't it?"`;
   Coco(T1B073)`"Hey, I have a question?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Another gloom destroyer appeared...`;
   You(T1B074)`"What might that be?"`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B075)`"Can I call you Nakkyu?"`;

});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B076)`"Yes, please do. And what is your name?"`;
   Coco(T1B077)`"Coco Yagami!!"`;
   Coco(T1B078)`"And this is Pipi!"`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   `Her pet dog appeared from nowhere.`;
   `Boy was she full of energy. Leave it to 
elementary school kids...`;

});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B079)`"And how old are you?"`;
   Coco(T1B080)`"I'm in ninth grade."`;
   Takeshi`"Wh-what?"`;

});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B081)`"What? What's the matter?"`;
   Takeshi`"No...it's nothing..."`;
   `I thought it that surprises never cease.`;

});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B082)`"Okay, nice to meet you, Coco and Pipi!"`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B083)`"Thank you!"`;
   Pipi(PIPI_01)`"Woof!"`;

});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B084)`"What a cute dog!"`;
   Pipi(PIPI_04)`"Bow-wow!"`;

});
fgload({ id: 2, name: `YU12BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B085)`"And so smart, too!"`;
   Coco(T1B086)`"I think so, too."`;
   `I wondered if maybe there wasn't enough 
oxygen in the room...`;
   `I was getting a headache....`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Girl`"..."`;
   `The girl in the black clothes gave our upbeat 
companions a cool stare.`;
   `You noticed the look.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02BDM`, name2: `TU15ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B087)`"Uh, and how about you over there?"`;
   Takeshi`"Huh? Why're you asking me?"`;

});
fgload({ id: 1, name: `YU08BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B088)`"...Aren't you together?"`;
   Takeshi`"Stupid. What are you talking about?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B089)`"Hmmmm....."`;
   Takeshi`"What's that supposed to mean?"`;

});
fgload({ id: 2, name: `TU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B090)`"Tsugumi."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `I realized the girl had spoken.`;
   Tsugumi(T1B091)`"Tsugumi Komachi."`;
   `It was just loud enough to make out what she 
was saying.`;

});
fgload({ id: 2, name: `TU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B092)`"That's my name..."`;

});
fgload({ id: 1, name: `YU16BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B093)`"Hi Tsugumi! Nice to meet you!"`;

});
fgload({ id: 2, name: `TU18ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `She turned her back. You shrugged slightly.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I thought Tsugumi might have been embarrassed.`;
   `There was something kinda cute about her.`;
   `(Tsugumi, Tsugumi...)`;
   `(I think that's a bird's name...)`;
   `I remembered her tugging me along in the 
aquarium and running like the wind.`;

});
choice(
   `Thanks for helping back there`,
   `What are you mad about?`,
);
switch (l_choice) {
   case 0: goto(lbl_000009d6);
   case 1: goto(lbl_00000a0d);
}
let lbl_000009d6;
showTextbox();
text(() => {
   Takeshi`"Hey, Tsugumi...thanks for helping back there."`;
   `I walked over to her and said this.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B094)`"What are you talking about?"`;
   Takeshi`"You saved me in the aquarium, right?"`;
   Tsugumi(T1B095)`"I didn't mean to save you."`;
   Tsugumi(T1B096)`"You were in the way."`;
   Takeshi`"...What?"`;
   Tsugumi(T1B097)`"If you had tumbled there, you would have 
been in the way."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B098)`"I mean you were an obstacle."`;
   `Tsugumi looked annoyed as she said this.`;

});
goto(lbl_00000a40);
let lbl_00000a0d;
showTextbox();
text(() => {
   Takeshi`"What are you so mad about?"`;
   `I walked over to her and said this.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B099)`"This is how I am. Normally."`;
   Takeshi`"I won't ask you to pretend to be happy..."`;
   Takeshi`"But how about being a little more friendly? 
We're going to have to put up with each other 
until we get outta here."`;
   Tsugumi(T1B100)`"Why?"`;
   Tsugumi(T1B101)`"I don't know any of you. We just happen to 
all be here together."`;
   Tsugumi(T1B102)`"That's right we don't have any connection to 
each other..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B103)`"We're just an unlucky gathering of strangers."`;
   `Tsugumi looked annoyed.`;

});
let lbl_00000a40;
showTextbox();
text(() => {
   `(This chick's intense! And scary...!)`;
   `In my mind, I retracted my earlier thoughts 
about her being cute.`;
   `Tsugumi and I glared at each other for a while.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `YU08BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B104)`"Hey, hey! You two! Let's get along now!"`;
   `You jumped in between us.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I walked away from Tsugumi and she looked 
away from me.`;

});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B105)`"Sora, it's your turn to introduce yourself."`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `You, who was totally in control of the 
situation, turned to Sora who was working on 
the computer.`;
   Sora(T1B106)`"Oh, you mean me?"`;
   `Sora took her hands from the machine and came 
towards us as if she were gliding.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B107)`"Pardon me for the belated introduction. I am 
Sora Akanegasaki. I am a system engineer in 
LeMU's Development Division."`;
   Sora(T1B108)`"Actually...I am the assistant chief."`;

});
choice(
   `...I thought that was something else.`,
   `Assistant chief, huh?`,
);
switch (l_choice) {
   case 0: goto(lbl_00000adc);
   case 1: goto(lbl_00000aed);
}
let lbl_00000adc;
showTextbox();
text(() => {
   `(...Wow?)`;
   `But something struck me as strange.`;
   `Actually, it had been bothering me since 
before...`;
   `'Basically...the assistant chief.'`;
   `She spoke about herself as if she were 
someone else.`;
   `'I was not able to gauge the situation.'`;
   `She spoke as if the problems in the system 
were her own.`;
   `'Please do excuse me.'`;
   `(System engineer...I wonder if she talks like 
that because of her job?)`;
   `That was what I thought...but I held my tongue.`;
   Takeshi`"...I'm Takeshi Kuranari. I'm 20 years old 
and a junior in college. Thanks."`;
   Sora(T1B109)`"Takeshi, nice to meet you."`;
   Coco(T1B110)`"Yeah, it sure is!"`;

});
removeFG({ id: 1, useAnim: true });
goto(lbl_00000bb7);
let lbl_00000aed;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"Assistant chief...so you're pretty 
high up then?"`;
   Sora(T1B111)`"Only in name, I'm really just an 
assistant. It's no big deal."`;
   Takeshi`"But, hey, Sora weren't you up at the gate 
above ground?"`;
   Takeshi`"You were giving some kind of explanation at 
the entrance, right? I only heard half of it, 
but..."`;

});
removeFG({ id: 1, useAnim: true });
if (l_coco_point != 0) goto(lbl_00000b59);
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B112)`"Oh, you might be right. Are you the girl from 
before?"`;

});
fgload({ id: 1, name: `SO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B113)`"That's right. So you noticed...."`;

});
goto(lbl_00000b7c);
let lbl_00000b59;
multifgload2({ id1: 1, id2: 2, name1: `SO02ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
goto(lbl_00000b7c);
let lbl_00000b7c;
showTextbox();
text(() => {
   Sora(T1B114)`"We are short of people here. From time to 
time I do that kind of work."`;
   `Sora smiled.`;
   Takeshi`"Uh, I'm Takeshi Kuranari."`;
   Takeshi`"I'm 20. I'm a junior at university."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B115)`"Nice to meet you!"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B116)`"Yes. Nice to meet you."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
let lbl_00000bb7;
setFGRenderOrder(4, 1, 2);
multifgload3({ name1: `YU16BDS`, name2: `SO01ADS`, name3: `CO12ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T1B117)`"Yup. Mucho gusto."`;
   `Everyone laughed cheerfully.`;
   Tsugumi(T1B118)`"...Dumb."`;
   `Everybody laughed except Tsugumi that is...`;
   `It took a little effort, but the atmosphere 
finally loosened up.`;
   `You started gathering us up.`;
   You(T1B119)`"Okay now everyone!"`;

});
fgload({ id: 1, name: `YU15BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B120)`"Now that we have just started having so much 
fun, it's time to say good-bye—"`;

});
fgload({ id: 4, name: `CO06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B121)`"Uh, Nakkyu! Wait a second!"`;
   Coco(T1B122)`"We haven't asked somebody's name yet."`;
   `Coco pointed to the corner of the room.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B123)`"Uh, do you mean me...?"`;
   Pipi(PIPI_00)`"Woof."`;
   `We'd completely forgotten him.`;
   `He'd been quiet the whole time, trying to 
stay out of the way and mostly kept to the 
corner of the room.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   `You looked at the boy and it looked like her 
face stiffened a little.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B124)`"So let's ask..."`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B126)`"What is your name?"`;
   `Coco tilted her head as she asked him the 
question.`;

});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Kid(T1B127)`"I..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B128)`"My..."`;
   Kid`"........."`;
   `He looked down.`;
   `I couldn't figure what he was waiting for....`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid(T1B129)`"I..."`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B130)`"Who am I...?"`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(2, 4, 1);
multifgload3({ name1: `SO06ADS`, name2: `CO06ADS`, name3: `TU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Tsugumi(T1B131)`"Huh?"`;
   Takeshi`"What?"`;
   Coco(T1B132)`"Huh?"`;
   Sora(T1B133)`"...?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B134)`"I can't remember..."`;
   Kid(T1B135)`"My...name..."`;
   Takeshi`"Maybe you've got amnesia."`;

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
   `Retrograde: ${wait(30)}`;

});
showTextbox();
text(() => {
   `Amnesia:${wait(30)}`;
   `Refers to memories lost for a certain period 
of time. It is more common with new memories 
than with old memories.${wait(30)}`;
   `During the period of memory loss, if the 
person has no memories at all, it is called 
'complete amnesia,' but in instances in which 
some memories can be recalled it is called 
'partial amnesia.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Generally, amnesia results from trauma to the 
head, epileptic seizures, mental diseases and 
disorders that manifest themselves as memory 
impairments.${wait(30)}`;
   `When a person has trouble recollecting events 
prior to the impairment, this is called 
retrograde amnesia. An instance in which 
memory impairment is significant and 
continues after consciousness is restored is 
known as 'anterograde amnesia.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Amnesia caused by inherent mental factors is 
referred to as 'organic amnesia,' while that 
induced by psychological stress is typically 
known as 'psychogenic amnesia,' 'hysterical 
amnesia' being the most typical example.${wait(30)}`;
   `This is an affliction in which the victim 
often cannot recall knowledge relating to his 
or her personal history, such as one's name, 
history family or friends...${wait(30)}`;
   `And is often a reaction to incidents too hard 
to endure, which incite an unconscious desire 
to escape, forget or repress these 
experiences or events.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Symptoms do not manifest in any particular way 
physically, and a person's brain functioning 
remains normal.${wait(30)}`;
   `People found wandering in this state are 
often taken in or seek help from authorities, 
such as the police.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Young people in their 20s under severe 
psychological stress, such as those facing 
domestic violence or academic problems, 
marriage or financial difficulties, are the 
most typical victims. However, this illness 
can be used as a cover for criminal 
activities and it can be difficult to detect 
the difference.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `This is especially seen in individuals with 
demonstrative personalities or pathological 
tendencies to lie.${wait(30)}`;
   `Normally in a few days or months, or with the 
help of hypnosis or shock therapy, the 
memories should return.${wait(30)}`;
   `Complete amnesia can be spurred by retrograde 
life amnesia. Memories are usually restored 
gradually beginning with older ones and 
treatment methods include psychiatric care, 
and hypnosis both narcotic and naturally 
induced.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO17ADS`, name2: `KA03ADS`, name3: `YU13BDS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi`"Amnesia?"`;
   You(T1B136)`"That's right...he can't remember anything."`;
   Sora(T1B137)`"Did you suffer a concussion?"`;
   Sora(T1B138)`"You might have bumped your head severely 
somewhere."`;
   Takeshi`"Yeah, you coulda taken a tumble...like when 
trying to escape."`;
   Tsugumi(T1B139)`"Hmmph..."`;
   `Tsugumi had let loose a nasty snort when I 
said 'tumble'.`;
   Kid(T1B140)`"I don't know...I don't remember anything."`;
   Kid(T1B141)`"Hey. Where is this?"`;
   You(T1B142)`"We are in LeMU, a marine theme park."`;
   Kid(T1B143)`"La...my...?"`;

});
fgload({ id: 2, name: `KA13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The kid glanced at Coco.`;
   `He tilted his head.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Coco was playing rock, paper, scissors with 
her dog, Pipi....`;

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
   `We moved to a room with a kiosk in it.`;
   `Thankfully at least the electric drink 
dispenser was working.`;
   `Each person poured the drink they wanted in a 
paper cup.`;

});
setFGRenderOrder(1, 2, 4);
multifgload3({ name1: `CO01ADS`, name2: `YU02BDS`, name3: `SO01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T1B144)`"For now, let's just make a toast and a 
prayer to everyone's safety!"`;

});
fgload({ id: 1, name: `CO02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B145)`"Cheers!"`;
   Takeshi`"Okay then. Cheers."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B146)`"C-cheers."`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `TU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `The string of events leading to the sudden 
toast went something like this - `;
   `'Hey, kid, don't you know anything about 
before?'`;
   `'Not even something personal about yourself?'`;
   `'What do I know...Oh!'`;
   `'I know...I'm kinda thirsty.'`;
   `That was the reason.`;
   `But reason aside, we needed a breather, so the 
timing was good.`;
   Takeshi`"Hey, Sora, what about you? Don't you wanna 
drink?"`;
   `Sora was standing stiffly.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B147)`"Uh, no thanks. I'm not thirsty."`;
   Takeshi`"Well, how about taking a load off? You been 
standing the whole time."`;
   Sora(T1B148)`"I'm fine. But thanks for your concern."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sure...I thought.`;
   `Sora seemed older than me. She seemed polite 
and serious.`;
   `She seemed the typical, Japanese woman.`;
   `'Prim and proper' could be one way of 
describing Sora.`;
   `I looked around at my surroundings.`;
   `You was next to the kid and chatting with him.`;
   `Sometimes he would laugh or shake his head 
weakly.`;
   `I could overhear bits of their conversation. 
They were talking about his memory.`;
   You(T1B149)`"It's not that out of the ordinary."`;
   You(T1B150)`"You'll be fine. It'll fix itself in time."`;
   `It looked like the two of them were drinking 
orange juice.`;
   `Tsugumi was a way off from everyone and 
looking into the distance.`;
   `I had no idea what she was drinking.`;
   `I didn't have any idea what she was thinking 
either.`;
   `After agonizing over whether to drink apple 
juice or cocoa, Coco finally decided on both.`;
   `But she proceeded to forget about her drink 
immediately and Coco took a hold of Pipi's 
front legs and started dancing around.`;
   `It was a cute scene...`;
   `After things had calmed down, You and everyone 
gathered in front of the kiosk.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B151)`"For a while, it looks like we are going to 
have to spend sometime in LeMU. So there are 
a few things I would like to go over."`;
   You(T1B152)`"First is what has happened."`;
   You(T1B153)`"Next is what we should do now."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `SO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B154)`"You, would you mind if I addressed the first 
of those topics?"`;
   You(T1B155)`"Please do, Sora."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sora stood in front of everyone and held out 
her arms.`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Suddenly, a holographic window materialized 
in the air.`;
   `I had no idea how the whole system worked, 
but I figured that it was the same one they 
had used at the entrance to the park.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B156)`"I will explain..."`;
   `And this is what she said...`;

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
   `12:45 p.m.${wait(30)}`;
   `Suddenly a blackout occurred - cause unknown.${wait(30)}`;
   `Next, the emergency alarms began ringing - 
the cause of this was also unknown.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `12:54 p.m.${wait(30)}`;
   `The Insel null elevator shifted to its 
emergency power source and an evacuation 
order was issued for the entire complex. 
Employees and visitors evacuated the premises. `;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `At this point, some people panicked and in the 
confusion opened the emergency corridor to the 
outside without going through decompression. 
It is highly probable that they are 
experiencing serious decompression sickness 
at this moment.${wait(30)}`;
   `The emergency corridor to the outside was 
left open for several minutes.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `1:03 p.m.${wait(30)}`;
   `The opening of the emergency corridor, 
disrupted the air pressure balance inside the 
complex and the devices responsible for 
adjusting the air pressure encountered 
problems. The complex started automatically 
pulling in air from the outside.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `As a result, the mixture of gas in the complex 
designed to maintain 6 atmospheres of air 
pressure escaped.${wait(30)}`;
   `Apparently helium, which is lighter that 
oxygen or nitrogen, leaked out first. ${wait(30)}`;
   `Air pressure in the complex dropped to 1 
atmosphere, the same as the level outside.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `2:39 p.m.${wait(30)}`;
   `The major power source came back on line. 
LeMMIH, the computer system responsible for 
overseeing LeMU rebooted and reset the air 
pressure adjustment mechanism. The air 
ventilation ducts were closed.${wait(30)}`;
   `However, LeMU was built to saturation diving 
specifications, meaning that as long as the 
internal air pressure was the same level or 
higher than the outside water pressure, it 
was designed not to collapse.${wait(30)}`;
   `Which meant...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `3:55 p.m.${wait(30)}`;
   `When the internal air pressure dropped to 1 
atmosphere, it became impossible for the 
external partitions to withstand the external 
water pressure, causing the glass to crack 
under the pressure, thus resulting in flooding.${wait(30)}`;
   `Subsequently, to minimize the damage from the 
flooding, the emergency watertight doors had 
automatically shut.${wait(30)}`;
   `Which brought us up to speed.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
bgload({ name: `BG07A1`, transition: 20 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `....`;
   Sora(T1B157)`"I would like to be able to gauge the current 
situation more accurately...however, some 
monitors and sensors are still not 
functioning normally."`;
   Sora(T1B158)`"As a result, I can't obtain accurate data... 
and can only provide an outline of the 
situation..."`;
   Takeshi`"Hey, sorry to ask you the same question 
again, but..."`;
   Takeshi`"The first floor...above us is flooded, yeah?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B159)`"Correct. I have requested confirmation from 
our complex management system, LeMMIH, and it 
has been confirmed."`;
   Takeshi`"So we can't get outta here."`;
   Sora(T1B160)`"Currently, the top priority is requesting 
assistance so I am doing my utmost to get the 
communications system back online. I must 
request your patience..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora bowed her head.`;
   `I was feeling depressed again.`;
   `I didn't want to admit it, but we were in deep 
trouble.`;

});
hideTextbox();
stopBGM();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B161)`"Well, all we can do for now is just wait for 
help. Right?"`;
   Takeshi`"You just keep trying to make everyone feel 
better, don't you?"`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B162)`"Oh, I'm sorry. Would you prefer my dark, 
despondent, we're doomed approach?"`;
   Takeshi`"That's not what I'm saying..."`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B163)`"Anyway, how about another drink?"`;
   `You came out with a huge industrial sized 
bottle and held it up comically.`;
   Takeshi`"I just can't get over how cheerful you are, 
given how totally screwed we are."`;
   `I complained again without thinking.`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B164)`"I said that's not it at all. I'm like this 
precisely BECAUSE of the situation."`;
   `You said this with a bit of a sulk.`;
   Takeshi`"Yeah, you're right...sorry."`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B165)`"There's no need to apologize. Here you go."`;

});
playSFX({ name: `SE10_14`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Gulp, gulp, gulp....`;
   `She filled my cup to the brim with juice.`;
   Takeshi`"Hey, hey..."`;

});
playSFX({ name: `SE10_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sluuuuuuuurp.`;
   `But most of it was just bubbles.`;
   Takeshi`"This is good!"`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B166)`"Isn't it?"`;

});
playSFX({ name: `SE10_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sluuuuuuuurp.`;
   Takeshi`"Thanks for the juice."`;

});
showTextbox();
text(() => {
   You(T1B167)`"Anytime. And it's on the house."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You shouldered the massive bottle and took it 
back inside the shop.`;
   `Carrying it she teetered like a penguin, 
which was funny because it really didn't suit 
her.`;
   `(Geez, she's a funny one...)`;
   `I laughed without thinking.`;

});
fgload({ id: 1, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi was leaning against the shop wall and 
staring after You.`;
   `Her face was expressionless.`;
   `I wondered what she was thinking....`;
   `I had no idea.`;
   Takeshi`"Even if we are going to wait for help..."`;
   Takeshi`"We can't just sit on our butts doing nothing. 
Right?"`;
   `I casually tried to strike up a conversation 
with Tsugumi.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B168)`"You..."`;
   Tsugumi(T1B169)`"You act like you're all serious, but there's 
really nothing going on in that head of yours 
is there?"`;
   Takeshi`"What? That's not true!"`;
   Takeshi`"I'm thinking. I'm always thinking."`;
   Takeshi`"Yeah. I was just thinking of a way to keep 
us from getting bored..."`;
   `I rattled off the first thing that jumped to 
mind.`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B170)`"...Sure. Whatever."`;
   `Tsugumi gave me an annoyed look.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She seemed exasperated....`;
   `I didn't want her to expect anything from me, 
but her attitude was frustrating.`;
   Takeshi`"Arrghh..."`;
   Takeshi`"Hey! Alright everyone listen up."`;
   `I had an idea.`;
   `I called to everybody.`;

});
fgload({ id: 2, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B171)`"Huh?"`;

});
fgload({ id: 1, name: `CO06ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B172)`"What?"`;

});
fgload({ id: 4, name: `SO03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B173)`"What's the matter, Takeshi, all of the 
sudden?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B174)`"What? What? What happened?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B175)`"...?"`;
   `Everybody gathered around.`;
   Takeshi`"We're not gonna accomplish anything just 
spending time like this, right?"`;
   Takeshi`"So I just thought, why don't we all split up 
and look around the complex?"`;

});
multifgload2({ id1: 2, id2: 4, name1: `KA03ADS`, name2: `SO07ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B176)`"Why? Don't you think that staying in one 
place would be safer?"`;
   Takeshi`"No. I think we should check to see if 
'staying in one place' and doing nothing is 
really the safest thing to do."`;
   Takeshi`"You know, walk around, see what we can find 
and scope out any dangers..."`;
   Takeshi`"If we find some, we can tell everyone to 
watch out for them or do something to get rid 
of them."`;
   Takeshi`"And we can see if there is a safer 
place...and then we could all gather there."`;
   Sora(T1B177)`"But Takeshi..."`;
   Takeshi`"It's not like the rescue squad is about to 
burst in the door."`;
   Takeshi`"So if we're going to have to be here in LeMU 
for half a day or a day or so, then..."`;
   Takeshi`"We should find out what kinda place this is 
and get to know it like our own house."`;

});
fgload({ id: 4, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B178)`"In that case, I can provide you with an 
abundance of information..."`;
   Takeshi`"No that's not what I mean. Listen. Sora, you 
have to look after the communications 
network, right?"`;
   Takeshi`"You were just talking about how some sensors 
or monitors weren't working right and you 
can't get a full sense of the current 
situation."`;

});
fgload({ id: 1, name: `YU02BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B179)`"Oh, I see."`;
   `You clapped her hands together.`;

});
fgload({ id: 2, name: `KA13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T1B180)`"So, while Sora is trying to send an SOS, we 
should use our own two legs to see what kind 
of a situation we're in."`;

});
fgload({ id: 1, name: `YU15BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B181)`"How about it? Sora, that would be easier on 
you wouldn't it?"`;

});
multifgload2({ id1: 2, id2: 4, name1: `KA01ADS`, name2: `SO13ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B182)`"Yes...I suppose it would. But...there are 
still the dangers..."`;
   `It seemed that Sora was unsure.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B183)`"Alright, I'll go then.".`;

});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi suddenly laughed.`;
   `It looked like she were laughing, but her lips 
curled nastily.`;
   Takeshi`"Hey, Tsugumi! Where are you going?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T1B184)`"We are going to split up and check things 
out, right?"`;
   `Tsugumi's expression was blank again.`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Turning around she headed for the entrance to 
the emergency corridor.`;
   Takeshi`"Hey, you can't just..."`;
   Takeshi`"Come back here! Hey idiot!"`;

});
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `She was already out of sight.`;
   `Her shoes clacked on the metal stairs as she 
climbed.`;

});
hideTextbox();
stopSFX()
setFGRenderOrder(2, 1, 4);
multifgload3({ name1: `YU03BDS`, name2: `SO03ADS`, name3: `CO03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T1B185)`"Tsugumi's gone. What are we going to do?"`;
   Sora(T1B186)`"I'm worried..."`;
   `Sora's brow furrowed and her expression 
stiffened.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B187)`"I think it's alright."`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU06BDS`, name2: `CO06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `The kid had broken his silence and I was a 
little surprised.`;
   Kid(T1B188)`"It's like Takeshi says. It doesn't do us any 
good to just stay here..."`;
   `He continued without pausing.`;
   Kid(T1B189)`"Tsugumi just went to the second floor. I'll 
bet she is just going to look around there."`;
   Kid(T1B190)`"So why don't we look around the third floor?"`;

});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T1B191)`"Hmmm..."`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU15BDS`, name2: `CO11ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B192)`"Alright then. I'm in."`;

});
fgload({ id: 4, name: `CO12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T1B193)`"Okay. Let's do that then."`;
   Takeshi`"Sounds like a plan..."`;
   `I gave a big nod.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B194)`"I guess there is nothing I can do to stop 
you. Please, be careful everyone."`;
   `Sora finally nodded slightly.`;
   `Once everyone's minds were set, things picked 
up.`;

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
   `Sora said she was going back to the Control 
Room to get data, so went our separate ways.`;
   `You, Coco and the kid, and I went to search 
around the complex.`;

});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `We decided to check the normal corridors and 
the emergency corridors above and below them 
on the third floor.`;
   `Splitting into pairs where the corridor 
forked, we agreed to meet back at the fork 
when we had checked the corridor ahead...`;
   `We did that over and over.`;

});
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   `We walked every corridor that we could walk 
down.`;
   `I wondered if water was leaking anywhere.`;
   `I figured that the water pressure would send 
water spurting through any crack it could find.`;

});
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   `Also, I thought there might be other people 
that had been left behind.`;
   `According to Sora, the system had told her 
that there were six people in the complex. 
Still, there was no guarantee that was right.`;
   `I thought that if we found somebody else, it 
might change our situation.`;

});
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG25A1`, transition: 20 });
showTextbox();
text(() => {
   `There could also have been a corridor that the 
broken sensors weren't picking up.`;
   `I hoped there might be a door to the surface 
that we simply were unaware of...I couldn't 
throw away that shred of hope.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `While we were out searching, Sora continued 
to try to get into contact with LeMU's 
central computer, LeMMIH, and gather more 
information.`;
   `Sora had said that she wanted to establish a 
means of communicating with the outside.`;

});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG07A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `We returned to in front of the kiosk. Sora had 
arrived first and was waiting.`;
   `But Tsugumi was nowhere to be seen.`;
   You(T1B195)`"Tsugumi hasn't come back."`;
   Takeshi`"We can't just let her run loose...I wonder 
where she is."`;
   Sora(T1B196)`"Shall I check?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG15A1`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
clock(`18:29`);
showTextbox();
text(() => {
   `We all went into the Central Control Room.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B197)`"We checked the life reading scan of people 
inside the complex. Even if Tsugumi were 
moving around, she should still appear in the 
results of this scan."`;
   Sora(T1B198)`"That is of course if she is in the complex..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(And if she is alive...)`;
   `I managed to keep that thought from coming 
out of my mouth.`;
   `It only took a moment for a map of LeMU and 
data from the sensors to appear.`;
   `There was one fuzzy light on the second floor.`;
   Sora(T1B199)`"That would be Tsugumi..."`;
   `There were a number of lights in a room on 
the third floor. I figured that was the 
Control Room where we were.`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B200)`"Oh!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18BDM`, name2: `KA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T1B201)`"What is it?"`;

});
hideTextbox();
playBGM({ num: 16, volume: 100 });
fgload({ id: 2, name: `KA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B202)`"Hey, isn't that strange?"`;
   Kid(T1B203)`"Look..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The kid pointed at a corner of the monitor.`;
   `It indicated a single digit number.`;

});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 6'`;
   Kid(T1B204)`"Watch it closely..."`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 5'`;

});
bgload({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 7'`;

});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 6'`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   `5...`;

});
bgload_keepFg({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   Append`7...`;

});
bgload_keepFg({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   Append`6...`;

});
bgload_keepFg({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   Append`5...`;

});
bgload_keepFg({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   Append`7...`;

});
bgload_keepFg({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   Append`6...`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   Sora(T1B205)`"Oh, my. You're right.... I wonder what it 
could be..."`;

});
bgload({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   `Sora fiddled with the console, but the 
numbers on the monitor continued to fluctuate.`;

});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   `The number changed every few seconds.`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   `But even while the life scan numbers changed, 
no new lights appeared or disappeared.`;

});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `KA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B206)`"Maybe..."`;
   Kid(T1B207)`"Maybe there is somebody besides us in LeMU."`;
   Kid(T1B208)`"If the number really is supposed to be 
'7'..." `;
   You(T1B209)`"That's what it would mean."`;
   Kid(T1B210)`"Don't you think we should go look for that 
person?"`;

});
fgload({ id: 2, name: `KA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B211)`"I mean...they could be in trouble. We have 
to help them!"`;
   Takeshi`"Hang on, kid. Calm down."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `For a while all of our eyes were glued to the 
changing numbers.`;
   `Watching them change was unsettling....`;
   `Finally - `;

});
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 6'`;
   `The monitor settled on the number six.`;
   `The light on the second floor was moving 
around slowly.`;
   `The five lights on the third floor were all 
in one room, unmoving.`;

});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `KA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B212)`"Perhaps it...was just because of a 
malfunctioning sensor. The cause is unclear. 
Would you like to see what else we can find 
out?"`;
   Takeshi`"Nah. Tsugumi's on the second floor and there 
are five of us here..."`;
   Takeshi`"So that number '6' is probably right. Don't 
you think?"`;
   Kid(T1B213)`"But..."`;
   Takeshi`"Well, I figure if we go look around a little 
more, we'll find out soon enough."`;
   Kid`"........."`;
   You(T1B214)`"...Yeah."`;
   Takeshi`"Alright then."`;
   Takeshi`"So, do you all wanna head to the second 
floor...?"`;
   `I thought it was best if we actually took in 
the situation with our own eyes. `;

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
   `We climbed to the top of the long emergency 
stairs together.`;
   `In the end, we didn't find anybody else on 
the third floor.`;
   `We didn't see any routes that looked like 
they might lead out either.`;
   `Sora had told us there was no schedule for the 
communications system to be back online.`;
   `We could look at the information displayed on 
some of the LeMMIH terminals, which were set 
in some attractions and in the corridors, but 
we couldn't operate them in any way.`;
   `The cause for this was unclear, too.`;
   `The fact that there were no leaks on that 
floor was our one saving grace.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_1C`);
