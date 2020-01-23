l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
setDialogBoxColor(GREEN);
setSceneTitle({ index: 20 });
chapterCutin({ name: `00000000` });
bgload({ name: `BG17A2`, transition: 20 });
clock(`1:36`);
showTextbox();
text(() => {
   `Midnight snuck up on me.`;
   `Everyone was already fast asleep. Some were 
snoring.`;
   `For us, the situation wasn't getting any 
better; but at least it wasn't getting any 
worse.`;
   `It was better that we just sleep to prepare 
for what might come....`;
   `...If only I could...`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"I can't sleep."`;
   `If anyone were awake they would see me bright-`;
   `eyed and bushy-tailed.`;
   `How could I be so tired but not be able to 
sleep?`;
   `I started wondering about my body.  `;
   `(Oh well...)`;
   `I took a walk to get my mind off of things.`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
playSFX({ name: `SE01_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Splash....`;
   `I saw the corridor was covered in water as I 
quietly slipped out of the room.`;
   Takeshi`"It's freezing!"`;
   `The ocean water flowing into the room was 
colder than usual, maybe because it was 
evening.`;
   `(Damn, now I'm even more awake...)`;
   `I continued down the road, my heavily soaked 
shoes weighing me down with each step...`;

});
bgload({ name: `BG26B1R`, transition: 20 });
showTextbox();
text(() => {
   `Only the sound of my damp shoes echoed through 
the night.`;
   `I didn't encounter a soul as I walked down the 
corridor.`;
   `Nobody had come to get us...`;
   `...but I decide not to let it get me down.`;
   `We were still alive. We had survived up until 
now, and we would live for the foreseeable 
future.`;
   `I thought to myself that anyone who had made 
it this far would survive.`;
   `(Yeah...)`;
   `(We'll make it...)`;
   `As I nodded to myself, I turned a corner in 
the corridor.`;

});
bgload({ name: `BG30B1`, transition: 20 });
showTextbox();
text(() => {
   `Was this a dead end?`;
   `It seemed like I had reached the end of the 
floor. `;
   `I turned around and headed back along the 
passageway.`;

});
bgload({ name: `BG26B1L`, transition: 20 });
stopBGM();
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Sora(T4A000)`"Oh good! There you are, Takeshi! I was 
looking for you."`;
   Takeshi`"........."`;
   Sora(T4A001)`"Hey, what's wrong?"`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A002)`"Hello?"`;
   Takeshi`"...Oh!"`;
   Takeshi`"Sora..."`;
   Sora(T4A003)`"Yes?"`;
   Takeshi`"...don't scare me like that, Sora."`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   `I was surprised.`;
   `For an instant I had stood there frozen.`;
   `Because the moment Sora had appeared around 
that corner, she and I had been face-to-face.`;
   `We were so close, it seemed like our noses 
overlapped.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Realizing this, I took three steps backward.`;
   `I could feel my heart pounding.`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A004)`"Oh, I'm so sorry. I didn't mean to get so 
close to you."`;
   `Sora's cheeks turned a soft red.`;
   Sora(T4A005)`"Oh, did I look strange...? I..."`;
   Takeshi`"No, no. Don't worry about it. You're 
beautiful, as always."`;
   Sora(T4A006)`"Oh, well, thank you."`;
   Sora(T4A007)`"It is just...I'm a little embarrassed."`;
   `Huh? I felt like I'd just blurted out 
something ridiculous...?`;
   `But Sora had smiled when I said it, so maybe 
it was okay.`;
   `I tried to calm myself down.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A008)`"Well, anyway. Everyone is still sound asleep, 
so I haven't told anyone but..."`;
   `As she said that her face suddenly changed.`;
   Takeshi`"Huh? What?"`;
   Sora(T4A009)`"A little while ago, Tsugumi was tossing and 
turning in bed. So I dispatched the medical 
wagon to keep her still."`;
   Takeshi`"...Really?"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A010)`"Yes, I was surprised. She was seriously hurt, 
you know...And still..."`;
   Takeshi`"Hey, she should wake up soon, don't you 
think?"`;
   Sora(T4A011)`"Yes, I think she may soon regain 
consciousness..."`;
   Takeshi`"Well, she shouldn't be tossing and turning 
like that. She'll reopen her wounds."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A012)`"Yes, actually that is why..."`;
   Takeshi`"Hey! We can't let that happen!"`;
   Takeshi`"That's it. I'll go and check on her!"`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A013)`"Takeshi..!"`;

});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I just left her standing there, calling after 
me.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `I flew up the stairs as fast as I could and 
sprinted down the corridor.`;

});
bgload({ name: `BG08A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `I arrived in front of the infirmary on the 
second floor.`;
   `I poked the button to open the door, but it 
seemed to take forever.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `The door opened slowly and quietly.`;
   `Tsugumi was lying there on a bed in the back 
of the room.`;
   `I walked slowly over to her...`;
   `...and sat down on the bed next to hers.`;
   `I could hear a computer working over at the 
other end of the room, collecting data on her 
pulse and blood pressure.`;
   `The data told us the most important thing—
she was still alive.`;
   `However...`;

});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   `...Tsugumi was still unconscious.`;
   `Had she really turned in her sleep?`;
   `Or would she continue to sleep like this...?`;
   `At that moment, her fingers began to twitch.`;
   Takeshi`"Ah..."`;
   `Her eyes opened.`;
   `Ii wondered what should I do?`;
   `What I should say?`;
   `Where to begin?`;

});
bgload({ name: `EV_TU10B`, transition: 0 });
stopBGM();
clock(`1:42`);
showTextbox();
text(() => {
   `But she awoke before I could decide.`;
   Takeshi`"Uhh.... Good morning..."`;
   `That was all I could say.`;
   `I hadn't thought of what to say beyond that.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(T4A014)`"...What time is it now?"`;
   Takeshi`"I'm not sure..."`;
   `I pulled my PDA from my pocket and checked the 
time.`;
   Takeshi`"It's May 4, 1:42 a.m."`;
   Tsugumi(T4A015)`"Really..."`;
   `Tsugumi appeared weak as she slightly moved 
her body.`;
   Takeshi`"How are you feeling?"`;
   Tsugumi(T4A016)`"That's a stupid question..."`;
   Takeshi`"I'm just asking. Tell me how you're 
feeling."`;
   Tsugumi(T4A017)`"Awful. My whole body...hurts."`;
   Tsugumi(T4A018)`"I feel terrible."`;
   Takeshi`"Oh..."`;
   `Tsugumi lifted her hand up to her face, 
opening and closing it slowly.`;
   `She still couldn't move much.`;
   Takeshi`"How's the injury? Does it hurt? You may still 
be under a bit of anesthesia."`;
   Tsugumi(T4A019)`"...Injury?"`;
   Tsugumi(T4A020)`"Anesthesia...?"`;
   Takeshi`"Hey..."`;
   Takeshi`"You didn't forget did you?"`;
   `Tsugumi's eyes wandered about the room.`;
   `To the ceiling...`;
   `And the sheets...`;
   `The cast on her leg...`;
   Tsugumi(T4A021)`"Oh, right. I remember."`;
   Tsugumi(T4A022)`"I remember now. I..."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   `Tsugumi tried to get up, but, noticing the 
various IV cords snaking up her arm, she 
frowned.`;
   `She was alive.`;
   `She was injured, but still breathing.`;
   `Her life had been saved, and for that I was 
grateful.`;
   `But...it was my fault...I was the one who 
caused her injury...`;

});
choice(
   `I'm sorry. I apologize`,
   `I didn't say anything`,
);
switch (l_choice) {
   case 0: goto(lbl_00000306);
   case 1: goto(lbl_0000032d);
}
let lbl_00000306;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"I'm... I'm sorry."`;
   `I wanted to tell her how I felt.`;
   Tsugumi(T4A023)`"...Why are you apologizing?"`;
   Takeshi`"It was my fault you were injured."`;
   Takeshi`"Because I was careless, you ended up getting 
hurt..."`;
   Takeshi`"It was my fault..."`;
   Takeshi`"...That's why I'm sorry."`;
   Tsugumi`"........."`;
   Takeshi`"And what's more, you protected Coco."`;
   Takeshi`"You made sure she didn't get hurt."`;
   Takeshi`"I don't know how to thank you."`;
   `I lowered my head.`;

});
bgload({ name: `EV_TU10C`, transition: 10 });
showTextbox();
text(() => {
   `But Tsugumi's face soured...`;
   `...She was glaring at me.`;
   Tsugumi(T4A024)`"Don't misunderstand."`;
   Tsugumi(T4A025)`"I was injured, but it wasn't because I 
sacrificed myself for Coco's safety."`;

});
goto(lbl_00000345);
let lbl_0000032d;
showTextbox();
text(() => {
   `I didn't know how to respond to that.`;
   `I had saved Tsugumi.`;
   `And yet I had caused Tsugumi to get hurt.`;
   `From here on, I just didn't know what to say.`;
   `All I could do was stare blankly, silently.`;
   `I then bowed my head. There was nothing else I 
could do.`;
   Tsugumi(T4A026)`"...What?"`;
   Tsugumi(T4A027)`"What is it...?"`;
   `I raised my head.`;

});
bgload({ name: `EV_TU10C`, transition: 10 });
showTextbox();
text(() => {
   `Tsugumi was glaring at me again.`;
   Tsugumi(T4A028)`"You don't understand."`;
   Tsugumi(T4A029)`"I don't care at all about this injury..."`;
   Tsugumi(T4A030)`"Do you want to say it's your fault?"`;
   Tsugumi(T4A031)`"Don't be conceited."`;

});
let lbl_00000345;
showTextbox();
text(() => {
   `Tsugumi sighed heavily.`;
   Tsugumi(T4A032)`"It's just that..."`;
   Tsugumi(T4A033)`"...It's just that...I wanted to die."`;
   Takeshi`"...What?"`;
   Tsugumi(T4A034)`"How come you had to save me?"`;
   Tsugumi(T4A035)`"If you left me alone..."`;
   Tsugumi(T4A036)`"...I could have finally died."`;
   Takeshi`"What?..."`;

});
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `I jumped up from the bed, shaking my fist 
furiously.`;
   Takeshi`"What the hell did you just say!?"`;
   Takeshi`"You!"`;
   Takeshi`"What do you mean, 'You could have finally 
died!?'"`;
   Tsugumi(T4A037)`"That's what I said, right?"`;
   Tsugumi(T4A038)`"I...I wanted to die."`;
   `Tsugumi gazed at me, narrowing her eyes. She 
was quiet.`;
   `I gazed back.`;
   `I could tell by the look in her eye that she 
wasn't joking.`;

});
if (l_tsugumi_point > 9) goto(lbl_0000038e);
if (l_went_outside_as_sora_suggests_in_3rd_day == 0) goto(lbl_0000038e);
goto(lbl_00000539);
let lbl_0000038e;
l_tsugumi_flag = 1;
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `And because of that I couldn't forgive her.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
playSFX({ name: `SE05_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bam! I slammed my fists on the bed violently.`;
   Takeshi`"Tsugumi, you stupid little..."`;
   Takeshi`"How dare you say that so lightly!"`;
   `I looked straight at her and screamed.`;
   Takeshi`"When you die, it's game over. You understand 
that, right?"`;
   Takeshi`"Have you forgotten about us? What we're 
facing here?"`;
   `Now it was me glaring at Tsugumi.`;
   `It wasn't as if she had actually done 
something wrong.`;
   `But that didn't mean I could forgive her for 
saying that.`;
   Tsugumi`"........."`;

});
bgload({ name: `EV_TU10B`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T4A039)`"...Humph."`;
   `She snorted.`;
   Tsugumi(T4A040)`"You don't understand, Takeshi."`;
   Tsugumi(T4A041)`"Life is a nightmare."`;
   Tsugumi(T4A042)`"This world - it's littered with ugliness."`;
   Takeshi`"Cut your poetic garbage!"`;

});
playSFX({ name: `SE05_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Wham!`;
   `Again I pummeled the bed with my fists.`;
   Takeshi`"Life! It's the most important thing in this 
world!"`;
   Takeshi`"It's a miracle, life is. "`;
   Tsugumi(T4A043)`"You're wrong! This is no miracle!"`;
   Tsugumi(T4A044)`"In this ever expanding universe..."`;
   Tsugumi(T4A045)`"...Continuing infinitely...this phenomenon 
called 'life' is no miracle."`;
   Tsugumi(T4A046)`"It's unnatural."`;
   Tsugumi(T4A047)`"And it's an accident that we awoke in this 
disgusting world."`;
   Takeshi`"Wrong. You are wrong, Tsugumi."`;
   `I hesitated for a moment.`;
   Takeshi`"You are unbelievably wrong."`;
   Tsugumi(T4A048)`"Where am I wrong?"`;
   Tsugumi(T4A049)`"Come on. Tell me where I'm mistaken..."`;
   `All emotion left her face. She spoke plainly 
and precisely.`;
   Tsugumi(T4A050)`"Life is just a cluster of empty desires."`;
   Tsugumi(T4A051)`"We build our lives on the corpses of others."`;
   Tsugumi(T4A052)`"We kill cows, pigs, birds, fish and 
plants..."`;
   Tsugumi(T4A053)`"...and if we don't, we die."`;
   Tsugumi(T4A054)`"Our appetites are whetted by the slaughtering 
of others."`;
   Tsugumi(T4A055)`"Our desire for sleep only proves our 
laziness."`;
   Tsugumi(T4A056)`"Our sexual desires are expressed through 
obscenity and sin."`;
   Tsugumi(T4A057)`"All the things that keep us alive—the 
things that drive us—are filthy."`;
   Tsugumi(T4A058)`"We can't live without them."`;
   Tsugumi(T4A059)`"There is no such thing as a life of purity."`;
   Tsugumi(T4A060)`"Ultimately..."`;
   Tsugumi(T4A061)`"...from the moment we are born, we are 
already corrupted."`;
   Takeshi`"And that is why you want to die?"`;
   Tsugumi(T4A062)`"Yes."`;
   `I became quiet, contemplating what Tsugumi 
just said.`;
   Takeshi`"...Heh."`;
   `This time is was me laughing.`;
   Takeshi`"I thought you were smarter than that...but I 
guess I overrated you."`;
   Tsugumi`"........."`;
   Takeshi`"You do have a point, and I think you are 
partly right."`;
   Takeshi`"I'll admit it."`;
   Takeshi`"In order for us to live, it's true that we 
must commit some atrocities."`;
   Takeshi`"Sometimes people do terrible, despicable 
things."`;
   Takeshi`"But do you really think 'living' is a sin?"`;
   Takeshi`"Thinking life is a sin, is the result of 
arrogant values."`;
   Takeshi`"You don't really think it's a crime for a 
bird to snatch fruit from a tree, do you?"`;
   Takeshi`"Does a tiger feel guilt for eating its prey?"`;
   Takeshi`"Is it really a terrible thing to join 
together and create new life?"`;
   Takeshi`"Everything that is necessary to continue 
living, is not only right, I believe it is 
sacred."`;
   Takeshi`"The birds, the tigers, the ants, even the 
grass..."`;
   Takeshi`"...they all work so hard to live. It's a 
beautiful thing."`;
   Tsugumi`"........."`;
   Takeshi`"And to love the lives of others, is just as 
important as loving yourself."`;
   Takeshi`"You have to realize that, don't you?"`;

});
bgload({ name: `EV_TU10C`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T4A063)`"It's ridiculous."`;
   `Tsugumi frowned.`;
   Takeshi`"Stop pretending to be so cold!"`;
   `I wanted to kick the bed over, yet I resisted 
somehow.`;
   Takeshi`"Alright, so why did you protect Coco?"`;
   Takeshi`"Why did you sacrifice yourself to save Coco?"`;
   Tsugumi`"........."`;
   Takeshi`"I don't know exactly what happened back 
there, but I do know that you are avoiding 
the truth."`;
   Takeshi`"You are desperately trying to deny life."`;
   Takeshi`"Everyone's desires are born out of life, you 
only want to believe they are wrong to prove 
your selfish point."`;
   Takeshi`"You are holding on obstinately, living while 
all you want to do is die..."`;
   Takeshi`"Your logic is completely backwards!"`;
   Takeshi`"Life should be unconditionally embraced."`;
   Takeshi`"Everyone lives for the sake of living."`;
   Takeshi`"By definition, living beings must have life."`;
   Takeshi`"If love is beautiful, then so is life."`;
   Tsugumi`"........."`;
   Tsugumi(T4A064)`"You don't understand a thing."`;
   Takeshi`"Yeah, I don't understand."`;
   Takeshi`"We've known each other for what? Just three 
days."`;
   Takeshi`"I don't know a THING about you..."`;
   Takeshi`"...but I know for sure that what I'm saying 
is 100 percent true."`;
   Takeshi`"So..."`;
   Takeshi`"Don't say that you want to die."`;

});
bgload({ name: `EV_TU10B`, transition: 10 });
showTextbox();
text(() => {
   `(I won't let you say it.)`;
   `I bit my lip as I stared at Tsugumi.`;
   `I had told Tsugumi exactly how I felt. No 
holding back, no regrets.`;
   `(I don't want her to say it anymore.)`;
   `I didn't even want to have to say those things.`;
   `(You survived for a reason, Tsugumi. Don't say 
you want to throw that away.)`;

});
bgload({ name: `EV_TU10C`, transition: 10 });
stopBGM();
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
bgload({ name: `EV_TU10D`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T4A065)`"*sigh*"`;
   `Tsugumi let all of the tension slip from her 
shoulders. Her eyes suddenly lit up. `;
   Tsugumi(T4A066)`"Yeah..."`;
   Tsugumi(T4A067)`"I get it..."`;
   `What, had I finally gotten through to her?...I 
couldn't help but smile.`;
   `A smile appeared on her lips...`;
   `She glanced up at me and muttered something...`;
   Tsugumi(T4A068)`"I understand perfectly."`;

});
removeBG({ mode: BLACK, transition: 3 });
showTextbox();
text(() => {
   Tsugumi(T4A069)`"You...you're a total hypocrite."`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A070)`"Takeshi! What happened? Where is Tsugumi?"`;
   `Sora was waiting just outside the door with a 
worried expression on her face.`;
   Takeshi`"........."`;
   Takeshi`"She's alive."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A071)`"Really?"`;
   Takeshi`"But she wishes she were dead."`;
   Sora(T4A072)`"T-Takeshi! Did she really tell you that?"`;
   Takeshi`"Yup. It's true."`;
   Takeshi`"It's unfortunate, but she didn't get what 
she wanted. Death."`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A073)`"But, but...you don't have to..."`;
   `Sora's voice quivered as she spoke.`;
   Takeshi`"You know, I should have never even helped 
save..."`;

});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A074)`"Takeshi!"`;
   Sora(T4A075)`"Please stop this..."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A076)`"You should not say...things like that..."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A077)`"It is awful. I am so disappointed in you..."`;
   Takeshi`"........."`;
   Sora`"........."`;
   Takeshi`"I'm sorry. Now you're upset, Sora."`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   Takeshi`"I'm not myself right now..."`;
   Takeshi`"I'm heading back to bed, even though I know I 
can't sleep."`;
   `I raised my hand weakly and parted with Sora.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora stood by the entrance to the medical 
room, frozen, without movement.`;

});
goto(lbl_00000964);
let lbl_00000539;
l_sora_flag = 1;
showTextbox();
text(() => {
   Takeshi`"I got it!"`;
   `Turned away from Tsugumi I blurted out 
something.`;
   Takeshi`"Well then, Tsugumi, how come you helped 
Coco?"`;
   Takeshi`"No, better yet, how come you went to repair 
the warehouse?"`;

});
bgload({ name: `EV_TU10B`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"You WANTED to die?"`;
   Takeshi`"Well, then you didn't really have to worry 
about us, now did you?"`;
   Takeshi`"You shouldn't have cared at all if we'd all 
died...?"`;
   Takeshi`"Right? Or wrong?"`;
   Tsugumi`"........."`;
   `Tsugumi's mouth didn't move, neither did 
the rest of her body. She just laid there.`;
   Takeshi`"You know, I'm glad I saved you..."`;
   Takeshi`"...but..."`;
   Takeshi`"...I just stopped..."`;
   Takeshi`"...thinking that saving you was a good idea."`;
   `After that, I had nothing more to say.`;
   `I rose to my feet and left the room.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 2, volume: 100 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
setSceneTitle({ index: 21 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A078)`"Takeshi! What happened? Where is Tsugumi?"`;
   `Again Sora was waiting for me. She looked 
concerned.`;
   Takeshi`"Oh her? Yeah, she's fine."`;
   Takeshi`"She's pretty quiet..."`;
   Takeshi`"I'm no doctor, but I think she'll be back on 
her feet soon enough."`;
   Takeshi`"Besides, she doesn't look like she's dying... 
I think we can all relax."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A079)`"What, uh...um...?"`;
   `Sora simply blinked at me.`;
   `And then her eyes narrowed sadly.`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A080)`"Y-you shouldn't talk like that, Takeshi."`;
   Takeshi`"Huh?"`;
   Sora(T4A081)`"Tsugumi is very hurt, Takeshi. She needs to 
rest more than anything, you know?"`;
   Takeshi`"Ah, uh...was that right?"`;
   `I had almost forgotten.`;
   `No matter how badly she had treated me, 
Tsugumi would still be bedridden for months 
recovering.`;
   Takeshi`"You're right. I'm sorry. That came out a 
little harsh."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A082)`"You had a fight with Tsugumi, didn't you?"`;
   `Her body stiffened as she asked. `;
   Takeshi`"No, I wouldn't say that."`;
   Takeshi`"I was just disappointed with her."`;
   Sora(T4A083)`"Disappointed?"`;
   Takeshi`"Yeah..."`;
   `There was no way I could tell Sora that what 
Tsugumi had just said to me.`;
   `I still couldn't accept that she would say 
such a thing.`;
   Takeshi`"Ah, never mind. Just forget it."`;
   Takeshi`"It's just that, I guess I'm still upset at 
myself. It was my fault Tsugumi got hurt."`;
   Takeshi`"You know, I just don't know what to say...she 
can...she can be...Ahh, dammit!"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A084)`"Takeshi, please do not worry about it."`;
   `Sora smiled softly.`;

});
if (l_said_it_is_not_soras_fault == 0) goto(lbl_00000630);
showTextbox();
text(() => {
   Sora(T4A085)`"It was no one's fault that Tsugumi got 
injured."`;
   Sora(T4A086)`"The situation here at LeMU is not anyone's 
fault."`;
   Sora(T4A087)`"It was you who told me that."`;

});
goto(lbl_00000635);
let lbl_00000630;
showTextbox();
text(() => {
   Sora(T4A088)`"Don't worry..."`;
   Sora(T4A089)`"Tsugumi's wound will be fine. She just needs 
time to heal."`;

});
let lbl_00000635;
showTextbox();
text(() => {
   Sora(T4A090)`"Takeshi, I am not sure what Tsugumi told 
you..."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A091)`"...all I know is that you saved her. And for 
that, I am grateful..."`;
   Sora(T4A092)`"...I am just...so happy...that she was 
saved."`;
   `Sora produced a bright smile.`;
   Takeshi`"Ahhh...yeah, I suppose. I suppose I should be 
happy, huh?"`;
   Takeshi`"Yeah... Ha, ha, ha..."`;
   `I couldn't help but laugh along with her. It 
broke the tension.`;
   `I embarrassedly scratched the tip of my nose.`;
   Takeshi`"You know, Tsugumi was in a really bad 
mood for some reason."`;
   Takeshi`"Maybe she just didn't want to see my face."`;
   Takeshi`"Yeah, that was probably it."`;
   `First she got hurt, then the operations...`;
   `She must have been upset about that...`;
   `Maybe that was all there was to it.`;
   `Even if it wasn't that...I didn't want this to 
drag on forever.`;
   `I had helped Tsugumi, and she was recovering. 
It was simple as that.`;
   `I was happy with that. `;
   `And there was Sora smiling in front of me...`;
   Takeshi`"Hey, Sora, are you busy right now?"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A093)`"What? No, not really, but..."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A094)`"Takeshi, are you sure you do not need more 
rest?"`;
   Takeshi`"No, I'm fine. I already tried to sleep but I 
couldn't, which why I went for a walk."`;
   Takeshi`"Let's make our way over to the Dolphin 
Carousel. We can talk."`;
   `I turned to her and slowly reached out my open 
hand.`;
   Sora(T4A095)`"Right!"`;
   `Sora brought her hand up and placed it on mine.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG02A1`, transition: 20 });
clock(`2:18`);
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   `And then...`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   `...we were off, riding the dolphins on the 
merry-go-round.`;
   `Sora turned on the power to the 
merry-go-round, and got on before quickly 
taking off.`;
   `I rode on the dolphin next to her.`;
   `The ride pulsated with vibrant colors as it 
revolved around the space.`;
   `I hadn't ridden a carousel since my childhood, 
but I didn't feel strange about it.`;
   `In fact, it was fun.`;
   `My heart skipped a few beats.`;
   Takeshi`"Thank you."`;
   Sora(T4A096)`"I'm sorry?"`;
   Takeshi`"Thank you, Sora, for your help."`;
   Sora(T4A097)`"My help?"`;
   Takeshi`"Just keep it at that—thank you."`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A098)`"No, no, I...I should be the one thanking you. 
You have helped me so much."`;
   Sora(T4A099)`"Tsugumi, Tanaka, Coco, the Kid...I am in debt 
to everyone."`;
   Takeshi`"In debt?"`;
   Sora(T4A100)`"Lately, I have been..."`;
   Sora(T4A101)`"I feel like I've gained an new 
perspective on human life."`;
   Sora(T4A102)`"Everyone holds their ground. They fight and 
try to figure out ways to survive."`;
   Sora(T4A103)`"In all the time that I have spent here at 
LeMU, I had not ever really been with people."`;
   Takeshi`"Yeah..."`;

});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A104)`"It was..."`;
   Sora(T4A105)`"...this microcosm, day after day of the same 
scenery. Nothing changed, nothing happened."`;
   Sora(T4A106)`"I did not care what happened to the people 
here."`;
   Sora(T4A107)`"But now I am grateful I have met with this 
opportunity."`;
   Sora(T4A108)`"And I am happy that even at this moment..."`;
   Sora(T4A109)`"Despite what happened and this dour 
situation, people are still striving to live."`;
   Sora(T4A110)`"Come on everybody! Believe in tomorrow, 
so you can live today..."`;
   Takeshi`"Yeah...."`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A111)`"Oh, I'm sorry."`;
   `Sora shrugged, embarrassed.`;
   Sora(T4A112)`"I am always saying things I should not. I 
didn't mean to gush..."`;
   Sora(T4A113)`"I'm sorry. Really. It was really lacking 
refinement...I..."`;
   Takeshi`"No, no. It's fine."`;
   `I laughed it off, waving my hand to show her 
it didn't matter. `;
   Takeshi`"You never saw LeMU when it was empty."`;
   Takeshi`"From the time you came to LeMU and started 
working, there have always been people." `;
   Takeshi`"It's natural that there were things you 
didn't know, that you had doubts, and made 
mistakes..."`;
   Sora(T4A114)`"I suppose you are right...."`;
   Takeshi`"So don't worry about it."`;
   Sora(T4A115)`"It would be great if we could ensure that 
everybody has an escape route, but even the 
communications are still..."`;
   Takeshi`"That's alright. I know it's difficult. 
We're not expecting the impossible."`;
   Takeshi`"We haven't even found a safe route out of 
here..." `;
   Takeshi`"Rather than us looking for an escape route 
haphazardly, I think it would be best to wait 
for help."`;
   Sora(T4A116)`"Yes...I think you're right."`;
   `Sora let out a soft sigh and smiled.`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A117)`"So Takeshi, if you do make it out of here, 
what it is that you want to do first?"`;
   Takeshi`"Hmmm..."`;
   Takeshi`"Well, I know that I want to eat something 
other than a kiosk sandwich."`;
   Takeshi`"There's a great restaurant close to my 
home."`;
   Takeshi`"It's run by a nice old lady. She gets along 
with everybody."`;
   Takeshi`"She's got a round face kind of like a  
classic car..."`;
   Sora(T4A118)`"A classic car...?"`;
   Sora(T4A119)`"Do you mean like a VW Beetle?"`;
   Takeshi`"Right, right. Just like that Beetle."`;
   Takeshi`"That Ms. Beetle makes a mean bowl of miso 
ramen."`;
   Takeshi`"I wonder how she's doing right now..."`;
   Sora(T4A120)`"Ha, ha, ha... You are funny."`;
   Sora(T4A121)`"You get out of this place and the first 
person you want to see is an old woman."`;
   Takeshi`"Oh? Is that weird?"`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A122)`"No...not really."`;
   Sora(T4A123)`"Isn't there a girl waiting for you back 
home?"`;

});
choice(
   `Yes`,
   `No`,
);
switch (l_choice) {
   case 0: goto(lbl_00000778);
   case 1: goto(lbl_00000781);
}
let lbl_00000778;
showTextbox();
text(() => {
   Takeshi`"I guess you could say that..."`;
   Takeshi`"Well, I guess you could say there WAS one.."`;
   Takeshi`"But being trapped here makes that all seems 
like another time, another place."`;
   Takeshi`"More like a dream than reality."`;
   Takeshi`"My reality here is consumed by how to survive 
this whole mess."`;

});
goto(lbl_00000786);
let lbl_00000781;
showTextbox();
text(() => {
   Takeshi`"So yeah...to answer your question - no one is 
waiting for me out there."`;
   Takeshi`"We broke up a long time ago."`;
   Takeshi`"And it was a clean break if you know what I 
mean."`;

});
let lbl_00000786;
showTextbox();
text(() => {
   Sora(T4A124)`"I see. You've been in love before."`;
   Takeshi`"I wouldn't put it that way."`;
   Takeshi`"Hmmm...well, our relationship wasn't your 
perfect love story..."`;
   Takeshi`"...but I have been in love."`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A125)`"Wow, that's great, Takeshi."`;
   `Sora smiled slightly.`;
   Takeshi`"Hey, stop teasing me. You're making me 
embarrassed."`;
   Sora(T4A126)`"But it's really fantastic!"`;
   Takeshi`"........."`;
   `I'm pretty sure my face was as red as a boiled 
crab by then.`;
   `And imagining it only made it worse that's for 
sure...`;

});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A127)`"Well...I've never been..."`;
   Takeshi`"What?"`;
   Sora(T4A128)`"I've never..."`;
   Takeshi`"Never what?"`;
   Sora(T4A129)`"Never had that experience..."`;
   Takeshi`"What experience?"`;
   Sora`"........."`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A130)`"Tell me this - what is love?"`;
   `Sora suddenly put on a serious face.`;
   Sora(T4A131)`"I want to know..."`;
   Sora(T4A132)`"What...is love?"`;
   Sora(T4A133)`"Tell me its how, its method, its meaning, its 
purpose..."`;
   Sora(T4A134)`"Why do you love?"`;
   Sora(T4A135)`"How does one go about loving?"`;
   `Sora was firing off one question after 
another..`;
   `And they didn't seem to me like easy questions 
to answer.`;
   Sora(T4A136)`"Takeshi, you are someone who has loved."`;
   `Uh, here it comes...`;
   Sora(T4A137)`"What is love..."`;
   Sora(T4A138)`"What is love. Can you explain it and help me 
understand it?"`;

});
choice(
   `I can explain it`,
   `I can't explain it`,
);
switch (l_choice) {
   case 0: goto(lbl_000007e7);
   case 1: goto(lbl_00000862);
}
let lbl_000007e7;
showTextbox();
text(() => {
   Takeshi`"Alright, here comes an explanation!"`;
   `I agreed to give explaining it a shot..`;
   Takeshi`"Okay! What definitions does your database 
give for love?"`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A139)`"You better not be preparing a punch line 
about tennis..." `;
   Takeshi`"What? Am I that transparent?"`;
   Sora(T4A140)`"Yes. That's about as much of a cliche 
as you can get.."`;
   Takeshi`"You're pretty hard to please...hmmm...."`;
   `I took a deep breath.`;
   Takeshi`"Okay, let's try this again!"`;
   Takeshi`"Right now the score is love-15."`;
   Sora(T4A141)`"I thought I said no tennis jokes."`;
   Takeshi`"What? You were serious?"`;
   Takeshi`"Very impressive, your A.I."`;
   Sora(T4A142)`"Yes. That's about as much of a cliche 
as you can get.."`;
   Takeshi`"Alright, get ready..."`;
   Takeshi`"OK. Give me another meaning for love!"`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A143)`"As in an 'act' or a 'feeling?'"`;
   Takeshi`"........."`;
   Takeshi`"Yes, that's right."`;
   Sora(T4A144)`"'Act,' as in doing something, correct?"`;
   Takeshi`"........."`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A145)`"Hmmm..."`;
   Sora(T4A146)`"Those are all of the definitions that I have 
in my database."`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A147)`"Takeshi, can you please answer my original 
question?"`;
   Takeshi`"Okay. There's one more meaning for love. Give 
me a second to explain it."`;
   Takeshi`"Think think think think."`;
   Takeshi`"Can you give me a minute to think?"`;
   Sora(T4A148)`"Yes. One minute."`;
   `I took a deep breath.`;
   `My heart was pounding.`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A149)`"One minute has expired."`;
   Takeshi`"What? Already!?"`;
   Takeshi`"Sorry, gimme five more minutes."`;
   Takeshi`"No, no. I need ten minutes. Please? No, no. I 
need more time. Much more time!"`;
   `There was just no simple way to explain it to 
her.`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A150)`"Really...? Fine then."`;
   `Sora waited impatiently.`;

});
goto(lbl_00000897);
let lbl_00000862;
showTextbox();
text(() => {
   Takeshi`"Ummmm...let's see..."`;
   Sora(T4A151)`"Yes?"`;
   `I tried to buy myself time by lengthening 
sounds as if I had an answer on the tip of my 
tongue.`;
   Takeshi`"Uhhhhhhhhh......"`;
   `Love.`;
   `What was love?`;
   `I've never really thought that seriously about 
it.`;
   `Wasn't there some other way I could describe 
it?`;

});
showTextbox();
text(() => {
   Takeshi`"Ummmmmmmmmmmm......"`;
   `No, come on! Think!`;
   `Think already!`;
   `What was love?`;
   Takeshi`"Wellllllll......"`;
   `How could I explain love to someone that has 
never experienced it?`;
   `Love...`;
   `What is love...?`;

});
showTextbox();
text(() => {
   Takeshi`"Uhhhhhhhhh......"`;
   Takeshi`"Ummmmmmmmm......"`;
   `Damn.`;
   `I was running out of air...`;
   Takeshi`"Wellllllll......"`;
   `I gave up.`;
   `No more air left.`;
   Takeshi`"Pant...pant..."`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A152)`"??"`;
   `My brain couldn't work properly with such 
little oxygen.`;
   Takeshi`"Phew...hew...phew..."`;
   Sora(T4A153)`"What's the matter, Takeshi?"`;
   `For no reason my heart started beating wildly 
again.`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A154)`"Don't try too hard, Takeshi. You're falling 
apart."`;
   `Sora stood up straight.`;

});
let lbl_00000897;
showTextbox();
text(() => {
   Sora(T4A155)`"Alright. I will try to answer my own 
question."`;
   Sora(T4A156)`"Let me express my notion of 'love'."`;
   `Sora began to speak.`;
   Sora(T4A157)`"Let us imagine a flower..."`;
   Sora(T4A158)`"...Can a flower love?"`;
   Sora(T4A159)`"It seems to me it cannot."`;
   Sora(T4A160)`"At least from the perspective of human 
beings, flowers don't act in any way that can 
be viewed as love."`;
   Sora(T4A161)`"What about animals? Do they love?"`;
   Sora(T4A162)`"They may love, they may not. "`;
   Sora(T4A163)`"Some animals seem to act out of love. We have 
observed this to an extent."`;
   Sora(T4A164)`"But perhaps animals do not understand the 
true meaning of love."`;
   Sora(T4A165)`"It's unclear whether it is the same as the 
human definition of love."`;
   Sora(T4A166)`"Do humans love?"`;
   Sora(T4A167)`"Yes, I believe so."`;
   Sora(T4A168)`"Love is...."`;
   Sora(T4A169)`"Love is one of those mysterious things that 
people are programmed to do."`;
   Sora(T4A170)`"One of its functions is reproduction..."`;
   Sora(T4A171)`"...but that appears to be a function 
independent of love."`;
   Takeshi`"Stop!"`;
   `But Sora continued to speak, so I cupped my 
hand over her mouth.`;
   Sora(T4A172)`".......??"`;
   `I put my hand over her mouth, but I couldn't 
feel her lips.`;

});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Hey, hey! Hold up. Slow down!"`;
   `I couldn't tell if her lips were warm or not.`;
   Sora`"........."`;
   `It somehow felt as if something were there, 
but then again, maybe it was my imagination.`;
   `I felt, trying to see if there were some sort 
of warm feeling.`;
   Takeshi`"Let's see... let me tell you what I think."`;
   Takeshi`"Why does a rose bloom?"`;
   Takeshi`"Why does a canary sing?"`;
   Sora`"........."`;
   `Sora just stood there blinking at me.`;
   `Her eyes were fixed on me.`;
   Takeshi`"Love is not rational."`;
   Takeshi`"It's not something you try to explain through 
logic."`;
   Takeshi`"It's something that is planted in the depths 
of your heart and steadily blossoms into 
something beautiful."`;
   Takeshi`"If something goes wrong, the flower might 
wilt and die.."`;
   Takeshi`"But if the love is true, it may bear amazing 
fruit."`;
   Takeshi`"There is no rhyme nor reason to the process 
of love."`;
   Takeshi`"Even if you do find reason in it, love isn't 
an emotion that you can control easily."`;
   Takeshi`"Love is something that visits like 
wakefulness after a slumber."`;
   Takeshi`"Just as we awake in the morning to begin our 
day..."`;
   Takeshi`"...we are put on this earth for the purpose 
of love."`;
   Takeshi`"To live is to love."`;
   Takeshi`"To ask what is the meaning of love, is to ask 
what is the meaning of life."`;
   `I slowly removed my hand from her lips.`;
   `My hand was slightly sweaty and warm.`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Sora, what do you think of my explanation?"`;
   Takeshi`"I might have borrowed bits and pieces from 
elsewhere, but I don't think it is all wrong."`;
   Takeshi`"No...actually, I believe it is right."`;
   Takeshi`"Did you understand what I said, Sora?"`;
   `Sora nodded silently.`;

});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A173)`"Roses are born to blossom."`;
   Sora(T4A174)`"Canaries are born to sing."`;
   Sora(T4A175)`"Humans are born to love."`;
   Sora(T4A176)`"I think that is a beautiful way of thinking."`;
   `A smile appeared on her lips.`;
   Sora(T4A177)`"However, even if a rose is born to bloom, I 
don't believe that a rose knows this."`;
   Sora(T4A178)`"And I don't believe a canary believes its 
purpose to sing."`;

});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A179)`"But from the eyes of a human, it might appear 
that the only purpose of a rose is to blossom."`;
   Sora(T4A180)`"Similarly, from the eyes of a human, it might 
appear that the only purpose of a canary is to 
sing."`;

});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4A181)`"It would appear that humans are probably the 
same."`;
   Sora(T4A182)`"I imagine that many people don't believe that 
they are living for the purpose of loving."`;
   Sora(T4A183)`"But from my perspective..."`;
   Sora(T4A184)`"...I believe they are mistaken. It would seem 
to me that people only live to love."`;
   Sora(T4A185)`"It could be that is how things are."`;
   `The movements of the dolphins gradually began 
to slow.`;
   `The music faded to a stop as the Dolphin 
Carousel continued to slow.`;

});
bgload({ name: `BG02A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Oh? Is this it...?"`;
   `I dismounted the dolphin and stood on the 
carousel.`;
   Takeshi`"I wish we could've ridden just a little bit 
longer..."`;
   Takeshi`"But that was fun. Let's come ride these 
dolphins again sometime."`;
   Takeshi`"That was a pretty deep conversation we just 
had...Sora?"`;
   Sora`"........."`;
   `Sora was still riding her dolphin, not moving.`;
   Takeshi`"What's wrong, Sora?"`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   `Sora looked up absently.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `But there was nothing in the air where she was 
looking.`;
   `Only the sprawling, dome-line ceiling of the 
Dolphin Carousel extending in all directions.`;
   Takeshi`"Sora...?"`;
   Sora(T4A186)`"Hey, Takeshi..."`;
   `Sora was looking up into the empty sky.`;
   Sora(T4A187)`"Why was I created?"`;
   Sora(T4A188)`"What is my purpose?"`;
   `With the music stopped, the room was quiet.`;
   `Different colored lights played off of the 
merry-go-round.`;
   `The light reflected a hint of sadness off of 
Sora's face.`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `SO09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4A189)`"I was just..."`;
   Sora(T4A190)`"...curious about it."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora laughed as if nothing had happened, got 
off her dolphin and came and stood next to me.`;
   `I didn't know what to say.`;
   `What was her purpose?`;
   `At that point, I just couldn't find an answer 
to that question.`;
   `All I could do was turn my back to the 
dolphins and head toward the dark exit...`;
   `...As I did I looked to the ceiling...`;
   `...and there was no sky.`;

});
let lbl_00000964;
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
l_choice = 0;
jump(`T_4B`);
