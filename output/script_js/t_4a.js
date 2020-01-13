varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 4`);
varop(`(28 0a a4) b2 := (00) 4`);
setDialogBoxColor(GREEN);
setSceneTitle({ index: 20 });
chapterCutin({ name: `00000000` });
bgload({ name: `BG17A2`, transition: 20 });
clock(`1:36`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Midnight snuck up on me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was already fast asleep. Some were 
snoring.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For us, the situation wasn't getting any 
better; but at least it wasn't getting any 
worse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was better that we just sleep to prepare 
for what might come....`;
   waitForClick; clearText; marker; appendText; 
   Narr`...If only I could...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I can't sleep."`;
   waitForClick; clearText; marker; appendText; 
   Narr`If anyone were awake they would see me bright-`;
   waitForClick; clearText; marker; appendText; 
   Narr`eyed and bushy-tailed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How could I be so tired but not be able to 
sleep?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started wondering about my body.  `;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh well...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took a walk to get my mind off of things.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
playSFX({ name: `SE01_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw the corridor was covered in water as I 
quietly slipped out of the room.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's freezing!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ocean water flowing into the room was 
colder than usual, maybe because it was 
evening.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Damn, now I'm even more awake...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I continued down the road, my heavily soaked 
shoes weighing me down with each step...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Only the sound of my damp shoes echoed through 
the night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't encounter a soul as I walked down the 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody had come to get us...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...but I decide not to let it get me down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were still alive. We had survived up until 
now, and we would live for the foreseeable 
future.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought to myself that anyone who had made 
it this far would survive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Yeah...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(We'll make it...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I nodded to myself, I turned a corner in 
the corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Was this a dead end?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like I had reached the end of the 
floor. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned around and headed back along the 
passageway.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1L`, transition: 20 });
stopBGM();
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T4A000`); appendText; 
   Sora`"Oh good! There you are, Takeshi! I was 
looking for you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T4A001`); appendText; 
   Sora`"Hey, what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A002`); appendText; 
   Sora`"Hello?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Oh!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; sound(`T4A003`); appendText; 
   Sora`"Yes?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...don't scare me like that, Sora."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For an instant I had stood there frozen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because the moment Sora had appeared around 
that corner, she and I had been face-to-face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were so close, it seemed like our noses 
overlapped.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Realizing this, I took three steps backward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel my heart pounding.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A004`); appendText; 
   Sora`"Oh, I'm so sorry. I didn't mean to get so 
close to you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's cheeks turned a soft red.`;
   waitForClick; clearText; marker; sound(`T4A005`); appendText; 
   Sora`"Oh, did I look strange...? I..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no. Don't worry about it. You're 
beautiful, as always."`;
   waitForClick; clearText; marker; sound(`T4A006`); appendText; 
   Sora`"Oh, well, thank you."`;
   waitForClick; clearText; marker; sound(`T4A007`); appendText; 
   Sora`"It is just...I'm a little embarrassed."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Huh? I felt like I'd just blurted out 
something ridiculous...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora had smiled when I said it, so maybe 
it was okay.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to calm myself down.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A008`); appendText; 
   Sora`"Well, anyway. Everyone is still sound asleep, 
so I haven't told anyone but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she said that her face suddenly changed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? What?"`;
   waitForClick; clearText; marker; sound(`T4A009`); appendText; 
   Sora`"A little while ago, Tsugumi was tossing and 
turning in bed. So I dispatched the medical 
wagon to keep her still."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Really?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A010`); appendText; 
   Sora`"Yes, I was surprised. She was seriously hurt, 
you know...And still..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, she should wake up soon, don't you 
think?"`;
   waitForClick; clearText; marker; sound(`T4A011`); appendText; 
   Sora`"Yes, I think she may soon regain 
consciousness..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, she shouldn't be tossing and turning 
like that. She'll reopen her wounds."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A012`); appendText; 
   Sora`"Yes, actually that is why..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! We can't let that happen!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's it. I'll go and check on her!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A013`); appendText; 
   Sora`"Takeshi..!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I just left her standing there, calling after 
me.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopSFX()
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I flew up the stairs as fast as I could and 
sprinted down the corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG08A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I arrived in front of the infirmary on the 
second floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I poked the button to open the door, but it 
seemed to take forever.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door opened slowly and quietly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was lying there on a bed in the back 
of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked slowly over to her...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...and sat down on the bed next to hers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear a computer working over at the 
other end of the room, collecting data on her 
pulse and blood pressure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The data told us the most important thing—
she was still alive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...Tsugumi was still unconscious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had she really turned in her sleep?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or would she continue to sleep like this...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`At that moment, her fingers began to twitch.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes opened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ii wondered what should I do?`;
   waitForClick; clearText; marker; appendText; 
   Narr`What I should say?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where to begin?`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 00 });
stopBGM();
clock(`1:42`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But she awoke before I could decide.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uhh.... Good morning..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was all I could say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't thought of what to say beyond that.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T4A014`); appendText; 
   Tsugumi`"...What time is it now?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not sure..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled my PDA from my pocket and checked the 
time.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's May 4, 1:42 a.m."`;
   waitForClick; clearText; marker; sound(`T4A015`); appendText; 
   Tsugumi`"Really..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi appeared weak as she slightly moved 
her body.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How are you feeling?"`;
   waitForClick; clearText; marker; sound(`T4A016`); appendText; 
   Tsugumi`"That's a stupid question..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm just asking. Tell me how you're 
feeling."`;
   waitForClick; clearText; marker; sound(`T4A017`); appendText; 
   Tsugumi`"Awful. My whole body...hurts."`;
   waitForClick; clearText; marker; sound(`T4A018`); appendText; 
   Tsugumi`"I feel terrible."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi lifted her hand up to her face, 
opening and closing it slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She still couldn't move much.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How's the injury? Does it hurt? You may still 
be under a bit of anesthesia."`;
   waitForClick; clearText; marker; sound(`T4A019`); appendText; 
   Tsugumi`"...Injury?"`;
   waitForClick; clearText; marker; sound(`T4A020`); appendText; 
   Tsugumi`"Anesthesia...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You didn't forget did you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's eyes wandered about the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To the ceiling...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the sheets...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cast on her leg...`;
   waitForClick; clearText; marker; sound(`T4A021`); appendText; 
   Tsugumi`"Oh, right. I remember."`;
   waitForClick; clearText; marker; sound(`T4A022`); appendText; 
   Tsugumi`"I remember now. I..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi tried to get up, but, noticing the 
various IV cords snaking up her arm, she 
frowned.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was alive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was injured, but still breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her life had been saved, and for that I was 
grateful.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...it was my fault...I was the one who 
caused her injury...`;
   waitForClick; 
});
choice(
   `I'm sorry. I apologize`
   `I didn't say anything`
);
switch (choice) {
   case 0: goto(lbl_00000306);
   case 1: goto(lbl_0000032d);
}
let lbl_00000306;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I'm... I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to tell her how I felt.`;
   waitForClick; clearText; marker; sound(`T4A023`); appendText; 
   Tsugumi`"...Why are you apologizing?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It was my fault you were injured."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Because I was careless, you ended up getting 
hurt..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It was my fault..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...That's why I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And what's more, you protected Coco."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You made sure she didn't get hurt."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't know how to thank you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lowered my head.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10C`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But Tsugumi's face soured...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...She was glaring at me.`;
   waitForClick; clearText; marker; sound(`T4A024`); appendText; 
   Tsugumi`"Don't misunderstand."`;
   waitForClick; clearText; marker; sound(`T4A025`); appendText; 
   Tsugumi`"I was injured, but it wasn't because I 
sacrificed myself for Coco's safety."`;
   waitForClick; clearText; 
});
goto(lbl_00000345);
let lbl_0000032d;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't know how to respond to that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had saved Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And yet I had caused Tsugumi to get hurt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From here on, I just didn't know what to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was stare blankly, silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I then bowed my head. There was nothing else I 
could do.`;
   waitForClick; clearText; marker; sound(`T4A026`); appendText; 
   Tsugumi`"...What?"`;
   waitForClick; clearText; marker; sound(`T4A027`); appendText; 
   Tsugumi`"What is it...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I raised my head.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10C`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was glaring at me again.`;
   waitForClick; clearText; marker; sound(`T4A028`); appendText; 
   Tsugumi`"You don't understand."`;
   waitForClick; clearText; marker; sound(`T4A029`); appendText; 
   Tsugumi`"I don't care at all about this injury..."`;
   waitForClick; clearText; marker; sound(`T4A030`); appendText; 
   Tsugumi`"Do you want to say it's your fault?"`;
   waitForClick; clearText; marker; sound(`T4A031`); appendText; 
   Tsugumi`"Don't be conceited."`;
   waitForClick; clearText; 
});
let lbl_00000345;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi sighed heavily.`;
   waitForClick; clearText; marker; sound(`T4A032`); appendText; 
   Tsugumi`"It's just that..."`;
   waitForClick; clearText; marker; sound(`T4A033`); appendText; 
   Tsugumi`"...It's just that...I wanted to die."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...What?"`;
   waitForClick; clearText; marker; sound(`T4A034`); appendText; 
   Tsugumi`"How come you had to save me?"`;
   waitForClick; clearText; marker; sound(`T4A035`); appendText; 
   Tsugumi`"If you left me alone..."`;
   waitForClick; clearText; marker; sound(`T4A036`); appendText; 
   Tsugumi`"...I could have finally died."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I jumped up from the bed, shaking my fist 
furiously.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the hell did you just say!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean, 'You could have finally 
died!?'"`;
   waitForClick; clearText; marker; sound(`T4A037`); appendText; 
   Tsugumi`"That's what I said, right?"`;
   waitForClick; clearText; marker; sound(`T4A038`); appendText; 
   Tsugumi`"I...I wanted to die."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi gazed at me, narrowing her eyes. She 
was quiet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gazed back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could tell by the look in her eye that she 
wasn't joking.`;
   waitForClick; clearText; 
});
goto(lbl_0000038e).if(var_b7 > 9);
goto(lbl_0000038e).if(var_ec == 0);
goto(lbl_00000539);
let lbl_0000038e;
varop(`(28 0a a4) d9 := (00) 1`);
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And because of that I couldn't forgive her.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
playSFX({ name: `SE05_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam! I slammed my fists on the bed violently.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi, you stupid little..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How dare you say that so lightly!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked straight at her and screamed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When you die, it's game over. You understand 
that, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Have you forgotten about us? What we're 
facing here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now it was me glaring at Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't as if she had actually done 
something wrong.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that didn't mean I could forgive her for 
saying that.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T4A039`); appendText; 
   Tsugumi`"...Humph."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She snorted.`;
   waitForClick; clearText; marker; sound(`T4A040`); appendText; 
   Tsugumi`"You don't understand, Takeshi."`;
   waitForClick; clearText; marker; sound(`T4A041`); appendText; 
   Tsugumi`"Life is a nightmare."`;
   waitForClick; clearText; marker; sound(`T4A042`); appendText; 
   Tsugumi`"This world - it's littered with ugliness."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Cut your poetic garbage!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Wham!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Again I pummeled the bed with my fists.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Life! It's the most important thing in this 
world!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's a miracle, life is. "`;
   waitForClick; clearText; marker; sound(`T4A043`); appendText; 
   Tsugumi`"You're wrong! This is no miracle!"`;
   waitForClick; clearText; marker; sound(`T4A044`); appendText; 
   Tsugumi`"In this ever expanding universe..."`;
   waitForClick; clearText; marker; sound(`T4A045`); appendText; 
   Tsugumi`"...Continuing infinitely...this phenomenon 
called 'life' is no miracle."`;
   waitForClick; clearText; marker; sound(`T4A046`); appendText; 
   Tsugumi`"It's unnatural."`;
   waitForClick; clearText; marker; sound(`T4A047`); appendText; 
   Tsugumi`"And it's an accident that we awoke in this 
disgusting world."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wrong. You are wrong, Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hesitated for a moment.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You are unbelievably wrong."`;
   waitForClick; clearText; marker; sound(`T4A048`); appendText; 
   Tsugumi`"Where am I wrong?"`;
   waitForClick; clearText; marker; sound(`T4A049`); appendText; 
   Tsugumi`"Come on. Tell me where I'm mistaken..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`All emotion left her face. She spoke plainly 
and precisely.`;
   waitForClick; clearText; marker; sound(`T4A050`); appendText; 
   Tsugumi`"Life is just a cluster of empty desires."`;
   waitForClick; clearText; marker; sound(`T4A051`); appendText; 
   Tsugumi`"We build our lives on the corpses of others."`;
   waitForClick; clearText; marker; sound(`T4A052`); appendText; 
   Tsugumi`"We kill cows, pigs, birds, fish and 
plants..."`;
   waitForClick; clearText; marker; sound(`T4A053`); appendText; 
   Tsugumi`"...and if we don't, we die."`;
   waitForClick; clearText; marker; sound(`T4A054`); appendText; 
   Tsugumi`"Our appetites are whetted by the slaughtering 
of others."`;
   waitForClick; clearText; marker; sound(`T4A055`); appendText; 
   Tsugumi`"Our desire for sleep only proves our 
laziness."`;
   waitForClick; clearText; marker; sound(`T4A056`); appendText; 
   Tsugumi`"Our sexual desires are expressed through 
obscenity and sin."`;
   waitForClick; clearText; marker; sound(`T4A057`); appendText; 
   Tsugumi`"All the things that keep us alive—the 
things that drive us—are filthy."`;
   waitForClick; clearText; marker; sound(`T4A058`); appendText; 
   Tsugumi`"We can't live without them."`;
   waitForClick; clearText; marker; sound(`T4A059`); appendText; 
   Tsugumi`"There is no such thing as a life of purity."`;
   waitForClick; clearText; marker; sound(`T4A060`); appendText; 
   Tsugumi`"Ultimately..."`;
   waitForClick; clearText; marker; sound(`T4A061`); appendText; 
   Tsugumi`"...from the moment we are born, we are 
already corrupted."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And that is why you want to die?"`;
   waitForClick; clearText; marker; sound(`T4A062`); appendText; 
   Tsugumi`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I became quiet, contemplating what Tsugumi 
just said.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Heh."`;
   waitForClick; clearText; marker; appendText; 
   Narr`This time is was me laughing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I thought you were smarter than that...but I 
guess I overrated you."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You do have a point, and I think you are 
partly right."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll admit it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In order for us to live, it's true that we 
must commit some atrocities."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sometimes people do terrible, despicable 
things."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But do you really think 'living' is a sin?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Thinking life is a sin, is the result of 
arrogant values."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't really think it's a crime for a 
bird to snatch fruit from a tree, do you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Does a tiger feel guilt for eating its prey?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is it really a terrible thing to join 
together and create new life?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Everything that is necessary to continue 
living, is not only right, I believe it is 
sacred."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The birds, the tigers, the ants, even the 
grass..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...they all work so hard to live. It's a 
beautiful thing."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And to love the lives of others, is just as 
important as loving yourself."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You have to realize that, don't you?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10C`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T4A063`); appendText; 
   Tsugumi`"It's ridiculous."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi frowned.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop pretending to be so cold!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to kick the bed over, yet I resisted 
somehow.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, so why did you protect Coco?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why did you sacrifice yourself to save Coco?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't know exactly what happened back 
there, but I do know that you are avoiding 
the truth."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You are desperately trying to deny life."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Everyone's desires are born out of life, you 
only want to believe they are wrong to prove 
your selfish point."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You are holding on obstinately, living while 
all you want to do is die..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your logic is completely backwards!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Life should be unconditionally embraced."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Everyone lives for the sake of living."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"By definition, living beings must have life."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If love is beautiful, then so is life."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T4A064`); appendText; 
   Tsugumi`"You don't understand a thing."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I don't understand."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We've known each other for what? Just three 
days."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't know a THING about you..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...but I know for sure that what I'm saying 
is 100 percent true."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't say that you want to die."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(I won't let you say it.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I bit my lip as I stared at Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had told Tsugumi exactly how I felt. No 
holding back, no regrets.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I don't want her to say it anymore.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't even want to have to say those things.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(You survived for a reason, Tsugumi. Don't say 
you want to throw that away.)`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10C`, transition: 10 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10D`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T4A065`); appendText; 
   Tsugumi`"*sigh*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi let all of the tension slip from her 
shoulders. Her eyes suddenly lit up. `;
   waitForClick; clearText; marker; sound(`T4A066`); appendText; 
   Tsugumi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`T4A067`); appendText; 
   Tsugumi`"I get it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`What, had I finally gotten through to her?...I 
couldn't help but smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A smile appeared on her lips...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She glanced up at me and muttered something...`;
   waitForClick; clearText; marker; sound(`T4A068`); appendText; 
   Tsugumi`"I understand perfectly."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 03 });
showTextbox();
text(() => {
   marker; sound(`T4A069`); appendText; 
   Tsugumi`"You...you're a total hypocrite."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A070`); appendText; 
   Sora`"Takeshi! What happened? Where is Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was waiting just outside the door with a 
worried expression on her face.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She's alive."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A071`); appendText; 
   Sora`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But she wishes she were dead."`;
   waitForClick; clearText; marker; sound(`T4A072`); appendText; 
   Sora`"T-Takeshi! Did she really tell you that?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yup. It's true."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's unfortunate, but she didn't get what 
she wanted. Death."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A073`); appendText; 
   Sora`"But, but...you don't have to..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's voice quivered as she spoke.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You know, I should have never even helped 
save..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A074`); appendText; 
   Sora`"Takeshi!"`;
   waitForClick; clearText; marker; sound(`T4A075`); appendText; 
   Sora`"Please stop this..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A076`); appendText; 
   Sora`"You should not say...things like that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A077`); appendText; 
   Sora`"It is awful. I am so disappointed in you..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm sorry. Now you're upset, Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not myself right now..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm heading back to bed, even though I know I 
can't sleep."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I raised my hand weakly and parted with Sora.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora stood by the entrance to the medical 
room, frozen, without movement.`;
   waitForClick; clearText; 
});
goto(lbl_00000964);
let lbl_00000539;
varop(`(28 0a a4) da := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I got it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Turned away from Tsugumi I blurted out 
something.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well then, Tsugumi, how come you helped 
Coco?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, better yet, how come you went to repair 
the warehouse?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You WANTED to die?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, then you didn't really have to worry 
about us, now did you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You shouldn't have cared at all if we'd all 
died...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Right? Or wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's mouth didn't move, neither did 
the rest of her body. She just laid there.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You know, I'm glad I saved you..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...I just stopped..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...thinking that saving you was a good idea."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that, I had nothing more to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rose to my feet and left the room.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 2, volume: 100 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
setSceneTitle({ index: 21 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A078`); appendText; 
   Sora`"Takeshi! What happened? Where is Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Again Sora was waiting for me. She looked 
concerned.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh her? Yeah, she's fine."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She's pretty quiet..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm no doctor, but I think she'll be back on 
her feet soon enough."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Besides, she doesn't look like she's dying... 
I think we can all relax."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A079`); appendText; 
   Sora`"What, uh...um...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora simply blinked at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then her eyes narrowed sadly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A080`); appendText; 
   Sora`"Y-you shouldn't talk like that, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T4A081`); appendText; 
   Sora`"Tsugumi is very hurt, Takeshi. She needs to 
rest more than anything, you know?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, uh...was that right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had almost forgotten.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how badly she had treated me, 
Tsugumi would still be bedridden for months 
recovering.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're right. I'm sorry. That came out a 
little harsh."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A082`); appendText; 
   Sora`"You had a fight with Tsugumi, didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her body stiffened as she asked. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I wouldn't say that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I was just disappointed with her."`;
   waitForClick; clearText; marker; sound(`T4A083`); appendText; 
   Sora`"Disappointed?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way I could tell Sora that what 
Tsugumi had just said to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still couldn't accept that she would say 
such a thing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, never mind. Just forget it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's just that, I guess I'm still upset at 
myself. It was my fault Tsugumi got hurt."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You know, I just don't know what to say...she 
can...she can be...Ahh, dammit!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A084`); appendText; 
   Sora`"Takeshi, please do not worry about it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled softly.`;
   waitForClick; clearText; 
});
goto(lbl_00000630).if(var_e8 == 0);
showTextbox();
text(() => {
   marker; sound(`T4A085`); appendText; 
   Sora`"It was no one's fault that Tsugumi got 
injured."`;
   waitForClick; clearText; marker; sound(`T4A086`); appendText; 
   Sora`"The situation here at LeMU is not anyone's 
fault."`;
   waitForClick; clearText; marker; sound(`T4A087`); appendText; 
   Sora`"It was you who told me that."`;
   waitForClick; clearText; 
});
goto(lbl_00000635);
let lbl_00000630;
showTextbox();
text(() => {
   marker; sound(`T4A088`); appendText; 
   Sora`"Don't worry..."`;
   waitForClick; clearText; marker; sound(`T4A089`); appendText; 
   Sora`"Tsugumi's wound will be fine. She just needs 
time to heal."`;
   waitForClick; clearText; 
});
let lbl_00000635;
showTextbox();
text(() => {
   marker; sound(`T4A090`); appendText; 
   Sora`"Takeshi, I am not sure what Tsugumi told 
you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A091`); appendText; 
   Sora`"...all I know is that you saved her. And for 
that, I am grateful..."`;
   waitForClick; clearText; marker; sound(`T4A092`); appendText; 
   Sora`"...I am just...so happy...that she was 
saved."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora produced a bright smile.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ahhh...yeah, I suppose. I suppose I should be 
happy, huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah... Ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't help but laugh along with her. It 
broke the tension.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I embarrassedly scratched the tip of my nose.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You know, Tsugumi was in a really bad 
mood for some reason."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe she just didn't want to see my face."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, that was probably it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`First she got hurt, then the operations...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She must have been upset about that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe that was all there was to it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if it wasn't that...I didn't want this to 
drag on forever.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had helped Tsugumi, and she was recovering. 
It was simple as that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was happy with that. `;
   waitForClick; clearText; marker; appendText; 
   Narr`And there was Sora smiling in front of me...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora, are you busy right now?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A093`); appendText; 
   Sora`"What? No, not really, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A094`); appendText; 
   Sora`"Takeshi, are you sure you do not need more 
rest?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I'm fine. I already tried to sleep but I 
couldn't, which why I went for a walk."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let's make our way over to the Dolphin 
Carousel. We can talk."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned to her and slowly reached out my open 
hand.`;
   waitForClick; clearText; marker; sound(`T4A095`); appendText; 
   Sora`"Right!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora brought her hand up and placed it on mine.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...we were off, riding the dolphins on the 
merry-go-round.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora turned on the power to the 
merry-go-round, and got on before quickly 
taking off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rode on the dolphin next to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ride pulsated with vibrant colors as it 
revolved around the space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't ridden a carousel since my childhood, 
but I didn't feel strange about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In fact, it was fun.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My heart skipped a few beats.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Thank you."`;
   waitForClick; clearText; marker; sound(`T4A096`); appendText; 
   Sora`"I'm sorry?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Thank you, Sora, for your help."`;
   waitForClick; clearText; marker; sound(`T4A097`); appendText; 
   Sora`"My help?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just keep it at that—thank you."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A098`); appendText; 
   Sora`"No, no, I...I should be the one thanking you. 
You have helped me so much."`;
   waitForClick; clearText; marker; sound(`T4A099`); appendText; 
   Sora`"Tsugumi, Tanaka, Coco, the Kid...I am in debt 
to everyone."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In debt?"`;
   waitForClick; clearText; marker; sound(`T4A100`); appendText; 
   Sora`"Lately, I have been..."`;
   waitForClick; clearText; marker; sound(`T4A101`); appendText; 
   Sora`"I feel like I've gained an new 
perspective on human life."`;
   waitForClick; clearText; marker; sound(`T4A102`); appendText; 
   Sora`"Everyone holds their ground. They fight and 
try to figure out ways to survive."`;
   waitForClick; clearText; marker; sound(`T4A103`); appendText; 
   Sora`"In all the time that I have spent here at 
LeMU, I had not ever really been with people."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A104`); appendText; 
   Sora`"It was..."`;
   waitForClick; clearText; marker; sound(`T4A105`); appendText; 
   Sora`"...this microcosm, day after day of the same 
scenery. Nothing changed, nothing happened."`;
   waitForClick; clearText; marker; sound(`T4A106`); appendText; 
   Sora`"I did not care what happened to the people 
here."`;
   waitForClick; clearText; marker; sound(`T4A107`); appendText; 
   Sora`"But now I am grateful I have met with this 
opportunity."`;
   waitForClick; clearText; marker; sound(`T4A108`); appendText; 
   Sora`"And I am happy that even at this moment..."`;
   waitForClick; clearText; marker; sound(`T4A109`); appendText; 
   Sora`"Despite what happened and this dour 
situation, people are still striving to live."`;
   waitForClick; clearText; marker; sound(`T4A110`); appendText; 
   Sora`"Come on everybody! Believe in tomorrow, 
so you can live today..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah...."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A111`); appendText; 
   Sora`"Oh, I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora shrugged, embarrassed.`;
   waitForClick; clearText; marker; sound(`T4A112`); appendText; 
   Sora`"I am always saying things I should not. I 
didn't mean to gush..."`;
   waitForClick; clearText; marker; sound(`T4A113`); appendText; 
   Sora`"I'm sorry. Really. It was really lacking 
refinement...I..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no. It's fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed it off, waving my hand to show her 
it didn't matter. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You never saw LeMU when it was empty."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"From the time you came to LeMU and started 
working, there have always been people." `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's natural that there were things you 
didn't know, that you had doubts, and made 
mistakes..."`;
   waitForClick; clearText; marker; sound(`T4A114`); appendText; 
   Sora`"I suppose you are right...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So don't worry about it."`;
   waitForClick; clearText; marker; sound(`T4A115`); appendText; 
   Sora`"It would be great if we could ensure that 
everybody has an escape route, but even the 
communications are still..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's alright. I know it's difficult. 
We're not expecting the impossible."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We haven't even found a safe route out of 
here..." `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Rather than us looking for an escape route 
haphazardly, I think it would be best to wait 
for help."`;
   waitForClick; clearText; marker; sound(`T4A116`); appendText; 
   Sora`"Yes...I think you're right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora let out a soft sigh and smiled.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A117`); appendText; 
   Sora`"So Takeshi, if you do make it out of here, 
what it is that you want to do first?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I know that I want to eat something 
other than a kiosk sandwich."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's a great restaurant close to my 
home."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's run by a nice old lady. She gets along 
with everybody."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She's got a round face kind of like a  
classic car..."`;
   waitForClick; clearText; marker; sound(`T4A118`); appendText; 
   Sora`"A classic car...?"`;
   waitForClick; clearText; marker; sound(`T4A119`); appendText; 
   Sora`"Do you mean like a VW Beetle?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Right, right. Just like that Beetle."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That Ms. Beetle makes a mean bowl of miso 
ramen."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wonder how she's doing right now..."`;
   waitForClick; clearText; marker; sound(`T4A120`); appendText; 
   Sora`"Ha, ha, ha... You are funny."`;
   waitForClick; clearText; marker; sound(`T4A121`); appendText; 
   Sora`"You get out of this place and the first 
person you want to see is an old woman."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh? Is that weird?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A122`); appendText; 
   Sora`"No...not really."`;
   waitForClick; clearText; marker; sound(`T4A123`); appendText; 
   Sora`"Isn't there a girl waiting for you back 
home?"`;
   waitForClick; 
});
choice(
   `Yes`
   `No`
);
switch (choice) {
   case 0: goto(lbl_00000778);
   case 1: goto(lbl_00000781);
}
let lbl_00000778;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I guess you could say that..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I guess you could say there WAS one.."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But being trapped here makes that all seems 
like another time, another place."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"More like a dream than reality."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"My reality here is consumed by how to survive 
this whole mess."`;
   waitForClick; clearText; 
});
goto(lbl_00000786);
let lbl_00000781;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"So yeah...to answer your question - no one is 
waiting for me out there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We broke up a long time ago."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And it was a clean break if you know what I 
mean."`;
   waitForClick; clearText; 
});
let lbl_00000786;
showTextbox();
text(() => {
   marker; sound(`T4A124`); appendText; 
   Sora`"I see. You've been in love before."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wouldn't put it that way."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm...well, our relationship wasn't your 
perfect love story..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...but I have been in love."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A125`); appendText; 
   Sora`"Wow, that's great, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled slightly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, stop teasing me. You're making me 
embarrassed."`;
   waitForClick; clearText; marker; sound(`T4A126`); appendText; 
   Sora`"But it's really fantastic!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'm pretty sure my face was as red as a boiled 
crab by then.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And imagining it only made it worse that's for 
sure...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A127`); appendText; 
   Sora`"Well...I've never been..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`T4A128`); appendText; 
   Sora`"I've never..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Never what?"`;
   waitForClick; clearText; marker; sound(`T4A129`); appendText; 
   Sora`"Never had that experience..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What experience?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A130`); appendText; 
   Sora`"Tell me this - what is love?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora suddenly put on a serious face.`;
   waitForClick; clearText; marker; sound(`T4A131`); appendText; 
   Sora`"I want to know..."`;
   waitForClick; clearText; marker; sound(`T4A132`); appendText; 
   Sora`"What...is love?"`;
   waitForClick; clearText; marker; sound(`T4A133`); appendText; 
   Sora`"Tell me its how, its method, its meaning, its 
purpose..."`;
   waitForClick; clearText; marker; sound(`T4A134`); appendText; 
   Sora`"Why do you love?"`;
   waitForClick; clearText; marker; sound(`T4A135`); appendText; 
   Sora`"How does one go about loving?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was firing off one question after 
another..`;
   waitForClick; clearText; marker; appendText; 
   Narr`And they didn't seem to me like easy questions 
to answer.`;
   waitForClick; clearText; marker; sound(`T4A136`); appendText; 
   Sora`"Takeshi, you are someone who has loved."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Uh, here it comes...`;
   waitForClick; clearText; marker; sound(`T4A137`); appendText; 
   Sora`"What is love..."`;
   waitForClick; clearText; marker; sound(`T4A138`); appendText; 
   Sora`"What is love. Can you explain it and help me 
understand it?"`;
   waitForClick; 
});
choice(
   `I can explain it`
   `I can't explain it`
);
switch (choice) {
   case 0: goto(lbl_000007e7);
   case 1: goto(lbl_00000862);
}
let lbl_000007e7;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Alright, here comes an explanation!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I agreed to give explaining it a shot..`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay! What definitions does your database 
give for love?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A139`); appendText; 
   Sora`"You better not be preparing a punch line 
about tennis..." `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? Am I that transparent?"`;
   waitForClick; clearText; marker; sound(`T4A140`); appendText; 
   Sora`"Yes. That's about as much of a cliche 
as you can get.."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're pretty hard to please...hmmm...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took a deep breath.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, let's try this again!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Right now the score is love-15."`;
   waitForClick; clearText; marker; sound(`T4A141`); appendText; 
   Sora`"I thought I said no tennis jokes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? You were serious?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Very impressive, your A.I."`;
   waitForClick; clearText; marker; sound(`T4A142`); appendText; 
   Sora`"Yes. That's about as much of a cliche 
as you can get.."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, get ready..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"OK. Give me another meaning for love!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A143`); appendText; 
   Sora`"As in an 'act' or a 'feeling?'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yes, that's right."`;
   waitForClick; clearText; marker; sound(`T4A144`); appendText; 
   Sora`"'Act,' as in doing something, correct?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A145`); appendText; 
   Sora`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`T4A146`); appendText; 
   Sora`"Those are all of the definitions that I have 
in my database."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A147`); appendText; 
   Sora`"Takeshi, can you please answer my original 
question?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay. There's one more meaning for love. Give 
me a second to explain it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Think think think think."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Can you give me a minute to think?"`;
   waitForClick; clearText; marker; sound(`T4A148`); appendText; 
   Sora`"Yes. One minute."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took a deep breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My heart was pounding.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A149`); appendText; 
   Sora`"One minute has expired."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? Already!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sorry, gimme five more minutes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no. I need ten minutes. Please? No, no. I 
need more time. Much more time!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was just no simple way to explain it to 
her.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A150`); appendText; 
   Sora`"Really...? Fine then."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora waited impatiently.`;
   waitForClick; clearText; 
});
goto(lbl_00000897);
let lbl_00000862;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ummmm...let's see..."`;
   waitForClick; clearText; marker; sound(`T4A151`); appendText; 
   Sora`"Yes?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to buy myself time by lengthening 
sounds as if I had an answer on the tip of my 
tongue.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uhhhhhhhhh......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Love.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was love?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I've never really thought that seriously about 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wasn't there some other way I could describe 
it?`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ummmmmmmmmmmm......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, come on! Think!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Think already!`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was love?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wellllllll......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`How could I explain love to someone that has 
never experienced it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Love...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What is love...?`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Uhhhhhhhhh......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ummmmmmmmm......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Damn.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was running out of air...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wellllllll......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No more air left.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Pant...pant..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A152`); appendText; 
   Sora`"??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My brain couldn't work properly with such 
little oxygen.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Phew...hew...phew..."`;
   waitForClick; clearText; marker; sound(`T4A153`); appendText; 
   Sora`"What's the matter, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`For no reason my heart started beating wildly 
again.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A154`); appendText; 
   Sora`"Don't try too hard, Takeshi. You're falling 
apart."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora stood up straight.`;
   waitForClick; clearText; 
});
let lbl_00000897;
showTextbox();
text(() => {
   marker; sound(`T4A155`); appendText; 
   Sora`"Alright. I will try to answer my own 
question."`;
   waitForClick; clearText; marker; sound(`T4A156`); appendText; 
   Sora`"Let me express my notion of 'love'."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora began to speak.`;
   waitForClick; clearText; marker; sound(`T4A157`); appendText; 
   Sora`"Let us imagine a flower..."`;
   waitForClick; clearText; marker; sound(`T4A158`); appendText; 
   Sora`"...Can a flower love?"`;
   waitForClick; clearText; marker; sound(`T4A159`); appendText; 
   Sora`"It seems to me it cannot."`;
   waitForClick; clearText; marker; sound(`T4A160`); appendText; 
   Sora`"At least from the perspective of human 
beings, flowers don't act in any way that can 
be viewed as love."`;
   waitForClick; clearText; marker; sound(`T4A161`); appendText; 
   Sora`"What about animals? Do they love?"`;
   waitForClick; clearText; marker; sound(`T4A162`); appendText; 
   Sora`"They may love, they may not. "`;
   waitForClick; clearText; marker; sound(`T4A163`); appendText; 
   Sora`"Some animals seem to act out of love. We have 
observed this to an extent."`;
   waitForClick; clearText; marker; sound(`T4A164`); appendText; 
   Sora`"But perhaps animals do not understand the 
true meaning of love."`;
   waitForClick; clearText; marker; sound(`T4A165`); appendText; 
   Sora`"It's unclear whether it is the same as the 
human definition of love."`;
   waitForClick; clearText; marker; sound(`T4A166`); appendText; 
   Sora`"Do humans love?"`;
   waitForClick; clearText; marker; sound(`T4A167`); appendText; 
   Sora`"Yes, I believe so."`;
   waitForClick; clearText; marker; sound(`T4A168`); appendText; 
   Sora`"Love is...."`;
   waitForClick; clearText; marker; sound(`T4A169`); appendText; 
   Sora`"Love is one of those mysterious things that 
people are programmed to do."`;
   waitForClick; clearText; marker; sound(`T4A170`); appendText; 
   Sora`"One of its functions is reproduction..."`;
   waitForClick; clearText; marker; sound(`T4A171`); appendText; 
   Sora`"...but that appears to be a function 
independent of love."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora continued to speak, so I cupped my 
hand over her mouth.`;
   waitForClick; clearText; marker; sound(`T4A172`); appendText; 
   Sora`".......??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand over her mouth, but I couldn't 
feel her lips.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey, hey! Hold up. Slow down!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't tell if her lips were warm or not.`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It somehow felt as if something were there, 
but then again, maybe it was my imagination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt, trying to see if there were some sort 
of warm feeling.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let's see... let me tell you what I think."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why does a rose bloom?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why does a canary sing?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora just stood there blinking at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes were fixed on me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Love is not rational."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's not something you try to explain through 
logic."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's something that is planted in the depths 
of your heart and steadily blossoms into 
something beautiful."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If something goes wrong, the flower might 
wilt and die.."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But if the love is true, it may bear amazing 
fruit."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There is no rhyme nor reason to the process 
of love."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Even if you do find reason in it, love isn't 
an emotion that you can control easily."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Love is something that visits like 
wakefulness after a slumber."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just as we awake in the morning to begin our 
day..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...we are put on this earth for the purpose 
of love."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"To live is to love."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"To ask what is the meaning of love, is to ask 
what is the meaning of life."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slowly removed my hand from her lips.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My hand was slightly sweaty and warm.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora, what do you think of my explanation?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I might have borrowed bits and pieces from 
elsewhere, but I don't think it is all wrong."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No...actually, I believe it is right."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Did you understand what I said, Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora nodded silently.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A173`); appendText; 
   Sora`"Roses are born to blossom."`;
   waitForClick; clearText; marker; sound(`T4A174`); appendText; 
   Sora`"Canaries are born to sing."`;
   waitForClick; clearText; marker; sound(`T4A175`); appendText; 
   Sora`"Humans are born to love."`;
   waitForClick; clearText; marker; sound(`T4A176`); appendText; 
   Sora`"I think that is a beautiful way of thinking."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A smile appeared on her lips.`;
   waitForClick; clearText; marker; sound(`T4A177`); appendText; 
   Sora`"However, even if a rose is born to bloom, I 
don't believe that a rose knows this."`;
   waitForClick; clearText; marker; sound(`T4A178`); appendText; 
   Sora`"And I don't believe a canary believes its 
purpose to sing."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A179`); appendText; 
   Sora`"But from the eyes of a human, it might appear 
that the only purpose of a rose is to blossom."`;
   waitForClick; clearText; marker; sound(`T4A180`); appendText; 
   Sora`"Similarly, from the eyes of a human, it might 
appear that the only purpose of a canary is to 
sing."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO01C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4A181`); appendText; 
   Sora`"It would appear that humans are probably the 
same."`;
   waitForClick; clearText; marker; sound(`T4A182`); appendText; 
   Sora`"I imagine that many people don't believe that 
they are living for the purpose of loving."`;
   waitForClick; clearText; marker; sound(`T4A183`); appendText; 
   Sora`"But from my perspective..."`;
   waitForClick; clearText; marker; sound(`T4A184`); appendText; 
   Sora`"...I believe they are mistaken. It would seem 
to me that people only live to love."`;
   waitForClick; clearText; marker; sound(`T4A185`); appendText; 
   Sora`"It could be that is how things are."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The movements of the dolphins gradually began 
to slow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The music faded to a stop as the Dolphin 
Carousel continued to slow.`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Oh? Is this it...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I dismounted the dolphin and stood on the 
carousel.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wish we could've ridden just a little bit 
longer..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But that was fun. Let's come ride these 
dolphins again sometime."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That was a pretty deep conversation we just 
had...Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was still riding her dolphin, not moving.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's wrong, Sora?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked up absently.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But there was nothing in the air where she was 
looking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the sprawling, dome-line ceiling of the 
Dolphin Carousel extending in all directions.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora...?"`;
   waitForClick; clearText; marker; sound(`T4A186`); appendText; 
   Sora`"Hey, Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was looking up into the empty sky.`;
   waitForClick; clearText; marker; sound(`T4A187`); appendText; 
   Sora`"Why was I created?"`;
   waitForClick; clearText; marker; sound(`T4A188`); appendText; 
   Sora`"What is my purpose?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With the music stopped, the room was quiet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Different colored lights played off of the 
merry-go-round.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light reflected a hint of sadness off of 
Sora's face.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4A189`); appendText; 
   Sora`"I was just..."`;
   waitForClick; clearText; marker; sound(`T4A190`); appendText; 
   Sora`"...curious about it."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora laughed as if nothing had happened, got 
off her dolphin and came and stood next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was her purpose?`;
   waitForClick; clearText; marker; appendText; 
   Narr`At that point, I just couldn't find an answer 
to that question.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was turn my back to the 
dolphins and head toward the dark exit...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...As I did I looked to the ceiling...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...and there was no sky.`;
   waitForClick; clearText; 
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
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_4B`);
