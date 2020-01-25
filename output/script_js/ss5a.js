setDialogBoxColor(BLUE);
setSceneTitle({ index: 94 });
l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
bgload({ name: `BG37A1`, transition: 10 });
showTextbox();
text(() => {
   `Moonlight shone into the sickroom.`;

});
hideTextbox();
playVoice($`S5A000`);
showTextbox();
text(() => {
   `I heard a voice crying somewhere.`;
   `The muffled voice kept sniveling and sobbing again and again.`;
   `Who...who was it...?`;
   `Who are you...?`;
   `I...didn't know...what I was escaping from...`;

});
hideTextbox();
playVoice($`S5A001`);
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `Waiting for....for what?`;
   `Was I waiting for me?`;
   `And where in the world was that?`;
   `This was...this was...`;
   `Just then the scene dissolved away.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
l_accumulator = 0;
showDimOverlay();
bgload({ name: `IMG04A`, transition: 26 });
eff_41 = 38;
eff_42 = 7;
eff_50 = rgb(0,0,64);
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S5A002)}


${noWait}`;
   Append(S5A003)`${center}You ran away!${waitVoice} ${noWait}`;
   Append`${center}You left that kid and ran away alone!${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `That voice kept repeating itself in my head.`;
   `Wait! Tell me!`;
   `I didn't know what I had run from or to where!`;
   `What was I...?`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `Gradually the scenery around me began to change into eerie colors....`;

});
hideTextbox();
delay({ interval: 60 });
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 120 });
closeDimInAndOutAndFilterAnim();
setSceneTitle({ index: 95 });
l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
bgload({ name: `BG09A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
stopBGM();
clock(`2:7`);
showTextbox();
text(() => {
   `I woke up and almost leaped out of the bed.`;
   `I was in the infirmary.`;
   `My body was drenched in sweat.`;

});
showTextbox();
text(() => {
   `Ouch!`;
   `A sharp pain shot through my right arm.`;
   `I looked at my right arm and stared confused at the cast on my arm.`;
   `I didn't know why... `;

});
hideTextbox();
playBGM({ num: 3, volume: 97 });
showTextbox();
text(() => {
   `Then I remembered. I had broken my arm and was resting...`;
   `I was still foggy from the drugs. A string of hazy memories came back to me.`;
   `I remembered the scary dream I had.`;
   `I thought it was from the fever and medicine. `;
   `I was sure of it.`;
   `That's why I had such bizarre dreams.`;
   `I shook my head and tried to get a better grip on my consciousness.`;
   `I looked at the clock on the wall. It was a bit past two in the morning.`;
   `Normally it would be the middle of the night...`;
   `But somehow it didn't feel like that at all.`;
   `I tried to remember how long we had been trapped there...`;
   `An extended amount of time in here - where the cycles of day and night were meaningless - really played with one's sense of time.`;
   `I sat up, taking care to watch out for my broken arm.`;
   `Clank.`;
   `Sara's pendant was by my left hand.`;
   `It looked like I had fallen asleep with it clasped in my hand.`;
   Kid`"I've gotta return this."`;
   `I slipped off of the bed.`;
   `My right arm felt slightly feverish, but because the medicine Takeshi had injected was probably still working, it didn't hurt much.`;
   `But I still was unable to move it normally.`;
   `Next to the pillow was a sling for me to hang my arm.`;
   `I wondered if Takeshi had left it. Or maybe You.`;
   `Either way, I couldn't just let my hurt arm swing back and forth as I walked. I put it on.`;
   `I thought about where Sara might be...`;
   `I figured she might be asleep.`;
   `I wondered where she always slept.`;
   `An image of Sara atop the whale floated into my mind.`;
   `I decided to try there first...`;
   `If she weren't there, then I'd try somewhere else.`;
   `Still a bit groggy, I left the infirmary.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I went down in the elevator and headed for the Cosmic Whale.`;

});
playSFX({ name: `SE02_14`, a1: 0, volume: 85 });
showTextbox();
text(() => {
   `I heard the sound of splashing.`;
   `It wasn't from the...Generator Room.`;
   `It sounded like it came from the pipe room.`;
   Kid`"I wonder what that is."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `When I entered the room...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_SA07A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
stopBGM();
showTextbox();
text(() => {
   `-!`;
   Kid`"S...Sara!"`;
   `The moment I saw what was happening, I jumped into the water.`;

});
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `After I jumped I remembered that my arm was broken, but it was too late.`;
   `I swam toward Sara doing the best I could with my arm.`;
   Kid`"Sara, grab hold!"`;
   Sara(S5A004)`"Huh? Kid, what're you doing?"`;
   Kid`"Just grab hold of me!"`;
   `I tried to grab Sara, but she swam away from me.`;
   Sara(S5A005)`"Just leave me alone!"`;
   Kid`"Huh? w-w-wait Sara?"`;
   Sara(S5A006)`"I said, stay away from me - pervert!"`;
   Kid`"Pervert....what?"`;
   `Then I noticed something a little bit strange.`;
   `If I stretched my legs I could just touch the floor.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
playBGM({ num: 6, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid`"Sa...Sara?"`;
   Sara(S5A007)`"What?"`;
   Kid`"Uh, what're you doing?"`;
   Sara(S5A008)`"Just what it looks like."`;
   Kid`"...I don't know what it looks like. That's why I asked."`;
   Sara(S5A009)`"I'm practicing swimming."`;
   Kid`"Practicing...swimming?"`;
   Sara(S5A010)`"Yes. Just what it looks like?"`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `

${noWait}`;
   `${center}(As if I would know!?)`;
   `${center}(Flailing around like that...)`;
   `${center}(Anyone would think you were drowning!)`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `That was the comeback I launched in my mind. But what came out of my mouth was...`;
   Kid`"Oh...I see...well, geez..."`;
   `...Only that stupid line.`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A011)`"Well, since you've seen me, I'll tell you I guess."`;

});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A012)`"I actually don't know how to swim."`;
   `As she said this, Sara continued flapping about madly in the water as if she were sinking.`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A013)`"I thought we have all this time...and I found a swimsuit in the changing room."`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Distracted, I hadn't noticed...`;
   `But when she told me I did for the first time. Sara was decked out like a LeMU employee in a one-piece swimsuit.`;
   `I wondered why I hadn't noticed...`;
   `I blushed with embarrassment.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `But still...`;
   `Watching Sara's movements, it would have been more of a stretch to imagine her swimming than drowning.`;
   `Besides, the medicine was still affecting me...`;
   `I was making up all kinds of excuses.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `But Sara didn't notice my confusion, and kept at it.`;
   Sara(S5A014)`"So I thought that I would try to get in a little swim practice."`;
   Sara(S5A015)`"I mean, the water here isn't all that cold."`;
   `Now that she mentioned it, I realized the water was warmer than in the corridors.`;
   `I imagined the heat from the pipes had warmed it.`;
   Sara(S5A016)`"So I was practicing swimming all alone."`;
   Kid`"I thought you were a ninja? Ninja can..."`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A017)`"Well, swimming is the only skill I'm not good at..."`;
   Kid`"I see..."`;
   Sara(S5A018)`"Just between you and me..."`;
   Sara(S5A019)`"Unfortunately, my swimming was so bad that I wasn't promoted to a master."`;
   Kid`"Is that right...?"`;

});
fgload({ id: 1, name: `SA09BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A020)`"Ah, hee, hee..."`;
   Kid`"W...what?"`;
   Sara(S5A021)`"Hee, hee. Kid, you take everything so seriously. Nin! Nin! Ninja!"`;
   Kid`"Oh...so...that was a joke!"`;
   Sara(S5A022)`"Sure it was. Me? A ninja?"`;
   Kid`"B-but..."`;
   Sara(S5A023)`"A, ha, ha, but it's true that I can't swim."`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A024)`"And being in this situation and not being able to swim...it makes me nervous."`;
   Sara(S5A025)`"I think I'm probably the only one here who can't swim."`;

});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A026)`"You can swim right, Kid?"`;
   Kid`"I..."`;
   `I hadn't thought about it, but I thought I'd been swimming alright a minute ago.`;
   `That meant that I could swim.`;
   Kid`"Yeah...I can swim."`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A027)`"That's perfect! Will you teach me?"`;

});
choice(
   `Uh, I don't think so...`,
   `I suppose...`,
);
switch (l_choice) {
   case 0: goto(lbl_00000444);
   case 1: goto(lbl_000004d6);
}
let lbl_00000444;
showTextbox();
text(() => {
   Kid`"Uh, I don't think so..."`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A028)`"Oh, why not?"`;
   Kid`"Well, my arm is no good like this..."`;
   `My broken arm actually felt like it was on fire - probably because I had strained it trying to swim.`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A029)`"That's okay. You can just watch and tell me what I'm doing wrong."`;
   Kid`"But I know you won't listen to anything I say..."`;
   Sara(S5A030)`"Sure I will! I'll listen!"`;
   Kid`"Really?"`;
   Sara(S5A031)`"For sure. I promise!"`;
   Kid`"I bet your fingers are crossed..."`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A032)`"Oh, there you go again!"`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Sara splashed water at me.`;
   Kid`"I'm just kidding..."`;
   Sara(S5A033)`"Now you've made me mad. I can't believe you'd say that."`;
   Kid`"So you don't want me to teach you how to swim?"`;
   Sara(S5A034)`"Aw...you're tricky!"`;
   Sara(S5A035)`"I think you've got samurai in you, so you better fight fair!"`;
   Kid`"I'm not samurai and I'm not fighting about anything."`;
   Sara(S5A036)`"Ohhh! You're so difficult!"`;
   Kid`"Difficult...?"`;
   Sara(S5A037)`"Forget it! That's it - you're teaching me to swim."`;
   Kid`"Hey it's not all up to you."`;
   Sara(S5A038)`"I didn't decide it. It's fate. Inevitable and decided by the stars!" `;
   Kid`"Uh..."`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A039)`"It's settled!"`;
   Kid`"Hey quit making up my mind for me!"`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A040)`"You sure whine a lot for a guy!"`;
   Sara(S5A041)`"When something is decided, you accept it."`;
   Kid`"So when exactly was this decided?"`;
   Sara(S5A042)`"EXACTLY right now. I decided, so it's decided. Kid, you're gonna teach me to swim!"`;
   `I didn't think there was any point to continuing the argument.`;
   Kid`"Alright. Fine. I'll teach you."`;
   Sara(S5A043)`"It would've been easier if you had said that in the first place!"`;

});
goto(lbl_0000052f);
let lbl_000004d6;
showTextbox();
text(() => {
   Kid`"I suppose..."`;
   Sara(S5A044)`"Huh?"`;
   Kid`"Well, I'm already soaked to the bone... I might as well teach you a little."`;
   Sara(S5A045)`"You mean it? Alright!"`;
   Sara(S5A046)`"Wow. You're being surprisingly nice, aren't you?"`;
   Kid`"No I'm not."`;
   Sara(S5A047)`"Oh! I know what it is."`;
   Kid`"W-what?"`;

});
fgload({ id: 1, name: `SA09BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A048)`"It's because I look so good in this swimsuit! Better keep your hands off!" `;
   Kid`"I, d-don't know what you are talking about!"`;
   Sara(S5A049)`"Oh! See! I can tell I'm right 'cause you're getting all worked up!"`;

});
showTextbox();
text(() => {
   Kid`"Fine! I won't teach you anything then!"`;

});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A050)`"Oh. No. Wait! Pleaaaaaaasssee..."`;
   Kid`"........."`;
   Sara(S5A051)`"I won't tease you anymore."`;

});
showTextbox();
text(() => {
   Kid`"Promise?"`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A052)`"Yeah. I promise."`;
   Kid`"Hmmm."`;
   Sara(S5A053)`"I said I promise! I swear to God, to Buddha! And anyone else who'll listen!"`;
   Kid`"Well...alright."`;
   Sara(S5A054)`"Really? You know I love you, right?"`;
   Kid`"........."`;
   Sara`"........."`;
   Kid`"Anyway...I should be going..."`;

});
showTextbox();
text(() => {
   Sara(S5A055)`"Ohhhhh, I'm kidding! Come back here!"`;
   `Sara flapped her arms about making even more spray.`;
   Kid`"Oh, alright. I'll teach you, okay?"`;
   Sara(S5A056)`"Yeah!"`;
   Sara(S5A057)`"I was so hoping that you would say that!"`;
   Kid`"I said stop that...!"`;

});
let lbl_0000052f;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 30 });
bgload({ name: `EV_SA10A`, transition: 26 });
playBGM({ num: 18, volume: 100 });
playSFX({ name: `SE02_14`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   Kid`"Sara, you've gotta relax more!"`;
   Kid`"Just be natural like."`;
   Kid`"Sara!"`;
   `I had to strain my voice to be heard over Sara's splashing.`;
   `I had gotten out of the water.`;
   `With my right arm in a sling, there were only so many ways to teach swimming.`;
   `I just watched what she was doing and hollered out advice.`;
   `But...no matter what I said...she still looked clumsy.`;
   Kid`"If you keep that up, you'll never learn to swim!"`;
   Sara(S5A058)`"Well, what am I s'posed to do? Pant, pant."`;
   Sara(S5A059)`"I'm doing my best to do just like you said."`;
   Kid`"I see..."`;
   Kid`"You can't swim if you're so tense!"`;
   Kid`"You need to be smoother..."`;
   Sara(S5A060)`"Like this?"`;

});
playSFX({ name: `SE02_14`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splish, splash, splish, splash!`;
   `She only whirled the water into a bigger froth with more spray.`;
   Kid`"Whoa! S-Sara, slow down!"`;
   `I shouted instructions as I avoided the spray showering down around me.`;
   Kid`"Are you doing that on purpose?"`;
   Sara(S5A061)`"Why would I?"`;
   Sara(S5A062)`"Whaddya expect me to do?"`;
   Kid`"You've gotta move more slowly...gentle like..."`;
   Sara(S5A063)`"How am I supposed to know what you mean by gentle? What else can I do?"`;
   Sara(S5A064)`"You're no good at teaching!"`;
   `That ticked me off.`;

});
stopSFX()
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Kid`"Oh, I know."`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A065)`"What?"`;
   Kid`"Sara, you don't need to learn to swim, do you?"`;
   Sara(S5A066)`"Of course I do!"`;
   Kid`"Hmmm. Really?"`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A067)`"W-whaddya mean?"`;
   Kid`"Listen, Sara."`;
   Kid`"If you REALLY want to learn to swim..."`;
   Sara`"........."`;
   Kid`"Then you ought to listen to what I say."`;

});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A068)`"Oh..."`;
   Kid`"If you can't listen to what I say..."`;
   Kid`"Then I'll be going."`;
   Sara(S5A069)`"Oh..."`;
   Kid`"Do you want me to teach you to swim?"`;
   Sara(S5A070)`"...Yes."`;
   Kid`"So is there anything you want to say to me?"`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A071)`"Mmmmm...."`;
   `Sara glared at me menacingly.`;
   Kid`"If not, then..."`;
   `I pretended I was about to leave.`;

});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A072)`"Uh, I'm sorry..."`;
   Kid`"What? Did you say something?"`;
   Sara(S5A073)`"I said, I'm sorry!"`;
   Sara(S5A074)`"Now just teach me without being mean."`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A075)`"P-W-E-T-T-Y  P-W-E-A-S-E!"`;
   Kid`"Don't talk like a baby!"`;

});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A076)`"A wittle bit is fine...no?"`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A077)`"Besides, I think I look pretty good in a swimsuit."`;
   Sara(S5A078)`"You should be happy just to be around me."`;
   Kid`"...Not even a little."`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `
${noWait}`;
   `Truthfully though, Sara was something in a swimsuit.`;
   `But I couldn't tell her that.`;
   `I didn't want her to get bigheaded.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"Now why should I be so happy about seeing you in a swimsuit?"`;
   Sara(S5A079)`"Oh! You're such a jerk."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_SA10A`, transition: 20 });
playSFX({ name: `SE02_14`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `Sara started kicking and showered me with water.`;
   Kid`"Whoa! Stop that right now!"`;
   Sara(S5A080)`"Then you tell the truth! You like me in a swimsuit, right?"`;
   Kid`"Why would I? You in a swimsuit...?"`;
   `I was blushing, completely giving away my feelings.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
stopSFX()
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Sara(S5A081)`"Oh! Look! You're getting red."`;

});
fgload({ id: 1, name: `SA09BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A082)`"See! You do like seeing me!"`;
   Kid`"You're not listening to me!"`;
   Sara(S5A083)`"You're a guy."`;
   Kid`"What's that supposed to mean?"`;
   Sara(S5A084)`"Well, any healthy guy in his right mind would like to be with a beautiful girl in a bathing suit."`;
   Kid`"It's not like that."`;
   Sara(S5A085)`"You're saying that even though you want to sneak a better look."`;
   Kid`"I said I don't!"`;
   Kid`"I've had enough. I'm leaving!"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `I was embarrassed because she'd seen through me. I really meant to leave the room.`;
   Sara(S5A086)`"Aiiiieeee!"`;
   `I heard Sara scream behind me.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Kid`"Sara?"`;
   `I hurriedly looked behind me.`;
   Kid`"Sara? Sara?"`;
   Kid`"What's the matter?"`;
   `I wondered if her leg had cramped.`;
   `I sprinted to the water's edge.`;
   `And then...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash!`;
   `Water suddenly sprayed in my eyes, blinding me.`;
   `The next thing I knew I had slipped and was spinning in the air.`;

});
playSFX({ name: `SE02_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Crasplash!`;
   `The following instant I was in the water.`;
   Kid`"Aaagghhh!"`;
   `It all happened so quickly that I swallowed a ton of water. And some went up my nose.`;
   `My nose stung.`;
   `I desperately fought to get to the surface.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Kid`"Phwaw! Sara!"`;
   Sara(S5A087)`"Whaaaaaaat is it?"`;

});
bgload({ name: `EV_SA10A`, transition: 20 });
playBGM({ num: 18, volume: 97 });
showTextbox();
text(() => {
   `Sara, pretending that nothing had happened, had resumed her swim practice.`;
   Kid`"Cough, sputter...Sara, you're mean!"`;
   `I approached Sara.`;
   Sara(S5A088)`"Paaa...A,HA,HA,Haaaaaa!"`;
   Kid`"W-what?"`;
   Sara(S5A089)`"You fall for EVERYTHING so easily! Hee, hee...."`;
   Kid`"S-Sara!"`;
   Sara(S5A090)`"It would seem you are still wet behind the ears, Kid."`;
   Sara(S5A091)`"Paaa...A,HA,HA,Haaaaaa!"`;
   `Seeing Sara laughing with such enthusiasm, I realized that getting any angrier was pointless.`;
   `Actually, for some reason I started to laugh.`;
   Kid`"...Hee....Kya, Ha, ha, ha, ha..."`;
   Sara(S5A092)`"A, Ha, ha, ha, ha, ha!"`;
   Kid`"Ha, ha, ha, ha, ha, ha, ha, ha!"`;
   `Sara and I laughed for a while.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Kid`"Anyway..."`;
   `Once my fit of laughter was done, I got out of the water.`;
   Sara(S5A093)`"Uh, Kid..."`;
   `Sara called out to me shyly.`;
   Kid`"So, should we start?"`;
   Sara(S5A094)`"Uh...yeah."`;

});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A095)`"Okay wise teacher! Please fill me in with swimming knowledge!"`;
   Kid`"You know I'm pretty strict. You think you can handle it?"`;
   Sara(S5A096)`"Yes, sir!"`;
   Kid`"Okay. Then let's get started."`;
   Sara(S5A097)`"Okay."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_SA10A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Kid`"Listen. I think with you, Sara, your body gets tight because you think you can't swim."`;
   Kid`"So you have to relax more."`;
   Sara(S5A098)`"But...I'm trying to do it just the way you say..."`;
   Kid`"Yeah, but you're so stiff. Like a scarecrow or you're made of wood or something..." `;
   Kid`"You need to let your legs flow freely...like a fish maybe."`;
   Sara(S5A099)`"A fish... Alright then, I'm a fish now."`;
   Kid`"Okay, Sara! You need to get pumped!"`;
   Sara(S5A100)`"I just can't picture what you mean."`;
   Kid`"Well, if you can't imagine a fish, then how about a dolphin or whale...anyway, you have to be relaxed and move freely."`;
   Sara(S5A101)`"Uuuuh..."`;
   Kid`"No. You're still too stiff! Relax more."`;
   Kid`"Just let your feet go!"`;
   `Somehow teaching her to swim had become fun. `;
   `It was fun to see Sara, who was always in control of things, in the opposite position.`;
   Kid`"Sara!"`;
   Sara(S5A102)`"Mmmmmmm."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 60 });
bgload({ name: `BG11A1`, transition: 26 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`3:40`);
showTextbox();
text(() => {
   `I waited for Sara to emerge from the changing room.`;
   `I played with her pendant.`;
   `Looking at it without the flame or the lighter, it was just a mirror.`;
   `I ran my finger around the edge of the pendant.`;

});
monoColorOverlay({ interval: 18, color: WHITE });
bgload({ name: `BG10A1`, transition: 26 });
fgload({ id: 1, name: `SA17ADL`, x: 320, useAnim: false });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
delay({ interval: 1 });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `I thought about what Sara had said in the compression chamber.`;
   Sara(S4A090)`"Both of my parents are gone."`;
   `Sara had looked so sad as she'd said it.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Sara(S5A103)`"Sorry I took so long."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A104)`"What's wrong? Why the glum face?"`;
   Kid`"Oh, it's nothing."`;
   Kid`"But I brought this...."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A105)`"Oh you brought it for me."`;
   Sara(S5A106)`"Sorry you had to stick around teaching me until the end."`;
   Kid`"You're the one that made me stay..."`;
   `I mumbled this.`;
   Sara(S5A107)`"Huh? What did you say?"`;
   Kid`"Oh, nothing."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A108)`"Well, anyway, thanks a lot..."`;
   Sara(S5A109)`"And thanks for hanging out until the end."`;
   Kid`"What?"`;
   `I was taken aback. I was waiting for some witty comeback.`;
   `But Sara was sincerely saying thanks.`;
   Kid`"W-wow. You're being surprisingly nice to me..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A110)`"Yeah, well I'm really grateful."`;
   Sara(S5A111)`"Because I finally learned to swim by myself."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A112)`"Only a little bit, but..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A113)`"But it was fun. I was happy you were so serious about it..."`;
   Kid`"Sara..."`;
   `I got a little bit embarrassed.`;
   `Somehow, watching Sara struggle with something when she was used to always having her way, well, it was kind of fun.`;
   `I had taught her how to swim correctly, but I did have an urge to be a bit of a bully about it.`;
   `Still, I never thought that she would come out and say 'Thank you'...`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A114)`"I really mean it. Thanks, Kid."`;
   Kid`"Y-yeah. But don't let it go to your head, because you can't really call what you were doing swimming."`;
   `I was embarrassed, and reflexively went into mean mode.`;
   Sara(S5A115)`"I know. If we have another chance, I hope you'll teach me again."`;
   Kid`"S-sure."`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A116)`"Next time, I'll really learn to swim."`;
   Kid`"Yeah. You just need a little more practice."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A117)`"Teach me again. Nin! Nin! Ninja!"`;
   Kid`"A, ha, ha. Sure."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A118)`"Somehow, I'm tired out..."`;
   `As she spoke, Sara took the pendant and put it on.`;
   `Then she took it in her hand and stared at it.`;

});
fgload({ id: 1, name: `SA17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A119)`"I'll bet, if my brother was around, it would be kinda like this..."`;
   `Sara mumbled it, sounding lonely.`;
   Kid`"Your brother?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A120)`"Yes. I..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A121)`"I had an older brother..."`;
   Sara(S5A122)`"He was fun, strong and I adored him..."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A123)`"But when we were little, we got separated..."`;
   Kid`"I see..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A124)`"But he promised me..."`;
   Kid`"Promised you?"`;
   Sara(S5A125)`"Yeah, he promised."`;
   Sara(S5A126)`"He promised that he would come get me no matter what..."`;
   Kid`"Is that right?"`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A127)`"Yup..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A128)`"So...I'm waiting for him."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A129)`"Waiting for him to come save me...always..."`;
   `Sara's words, brought back a vision I had seen. `;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `${voice(S3B105)}${noWait}`;
   Append(S3B106)`${center}${nextPage(0)}Yeah, I promise.${nextPage(1)}${waitVoice} ${noWait}`;
   `${center}${nextPage(0)}To wait like a good girl. ${noWait}`;
   `${voice(S3B107)}${center}Until you come for me...${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S3B108)}${center}${nextPage(0)}I'll wait...like a good girl...${nextPage(1)}${waitVoice} ${noWait}`;
   `${center}${nextPage(0)}I'll wait....forever...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `I desperately tried to shake off the vision...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
delay({ interval: 90 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 96 });
chapterCutin({ name: `00000000` });
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `EV_SO11D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
playSFX({ name: `SE09_01L`, a1: 0, volume: 90 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `The next morning I overslept.`;
   `I thought I might be in trouble with everyone...`;
   `But it seemed like I wasn't the only one.`;
   `The late start pushed our breakfast time back later than always.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG21B1`, transition: 26 });
hideTextbox();
ADV_Mode();
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`8:37`);
showTextbox();
text(() => {
   `We wanted a change of pace, to do something fun, so we spread out a blanket in the park's rest area.`;
   `The blanket was from a shop on the same floor. It had LeMU's Myumyun label printed on it.`;
   `Sora couldn't eat, but she sat with us, smiling just the same.`;
   `As if drawn by the scent, Tsugumi appeared.`;
   `As if she didn't notice or didn't care, Tsugumi parked herself on Myumyun's face. She started munching a sandwich.`;
   `Of course, Takeshi started complaining, but Tsugumi just ignored him.`;
   `Sara and Tsugumi didn't look at each other. It seemed like they were ignoring each other.`;
   `Apparently they still weren't getting along.`;
   `But everybody tried to make the best of it, eating, chatting and having fun.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `YU02BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A075)`"Rock, paper, scissors!"`;
   Sara(Y5A076)`"Ready go!"`;
   Kid`"I lost again!"`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A077)`"Kid, you're terrible at this. What is that? Sixteen losses in a row?"`;
   Kid`"Weird..."`;
   You(Y5A078)`"You're too nice. You have to just throw out what you feel - rock, paper or scissors."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A079)`"He's the gullible type." `;
   Kid`"I am not. I'm trying to win."`;

});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A080)`"Ready go!"`;
   Kid`"Dang it!"`;
   `I just kept losing.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA07ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A081)`"Could be that with your amnesia your ability to make decisions isn't so good right now."`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A082)`"Don't get to caught up with the trivial things that you can't control."`;
   You(Y5A083)`"You need to be strong. Make up your own mind. Or you'll just end up following everybody else."`;
   Kid`"I know..."`;

});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A084)`"That being as it is..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A085)`"Time for the LOSER'S PENALTY!"`;

});
fgload({ id: 2, name: `YU02BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A086)`"Hand over your sandwich."`;
   Kid`"........."`;
   `Silently, I held out my sandwich.`;
   Sara(Y5A087)`"All righty!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `She squeezed a ton of mustard on to my sandwich.`;
   `The penalty was mustard. And my sandwich was already drenched in the stuff.`;
   `My mouth felt like it was on fire before I even took a bite.`;
   `...Maybe thanks to that silly exchange, I was able to get through the whole thing without thinking about it too much.`;
   `Suddenly, someone cut across my field of vision.`;
   `It was Tsugumi.`;
   `Tsugumi was walking toward Takeshi. She extended her hand.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A088)`"Huh? What's with the hand?"`;
   Tsugumi`"........."`;
   Takeshi(Y5A089)`"You're like a dog. Shake girl."`;
   Takeshi(Y5A090)`"And you'll probably say 'don't make fun of me!'"`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A091)`"You're really dumb, you know that?"`;

});
showTextbox();
text(() => {
   Sora(Y5A092)`"Are you trying to say that you want another helping?"`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi nodded at Sora's extra explanation. `;
   `She had already wolfed down her first one.`;
   Takeshi(Y5A093)`"Hey...you've gotta lot of nerve...you only show your face at meal time and now you're demanding seconds..."`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A094)`"Well, I suppose..."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A095)`"So do you have more or not?"`;

});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A096)`"I do. I thought you might want more so I made a SPECIAL one for you."`;

});
showTextbox();
text(() => {
   Kid`"Special?"`;
   `I had a bad feeling about the whole thing.`;
   Takeshi(Y5A097)`"Eat this. And no leftovers."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi took the sandwich without saying anything.`;
   Takeshi`"............"`;
   `Takeshi stared at Tsugumi as she took the wrap off of the sandwich.`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A098)`"...What?"`;
   Takeshi(Y5A099)`"Nothing. It's just that you're so beautiful. I can't take my eyes off of you even when you're just removing a sandwich wrapper..."`;
   Tsugumi(Y5A100)`"You're stupidity is terminal."`;
   Tsugumi(Y5A101)`"Maybe if you died 50 times it would help."`;

});
showTextbox();
text(() => {
   Takeshi`"..."`;

});
showTextbox();
text(() => {
   `I thought Takeshi would get angry.`;
   `But he was just grinning as he watched Tsugumi start in on her sandwich.`;
   `Something was definitely not right here. I sucked in my breath and watched.`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi bit into the sandwich.`;
   `Munch.`;
   `Chomp. Chew.`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A102)`"Hmmm?"`;
   Takeshi(Y5A103)`"Hee, heee."`;
   Takeshi(Y5A104)`"Fwaaa, ha, ha, ha, ha, ha..."`;
   Tsugumi`"..."`;
   Takeshi(Y5A105)`"It's got quite a flavor, huh? That sandwich...ha, ha, ha..."`;
   `Takeshi laughed so hard he cried.`;
   Takeshi(Y5A106)`"It's packed with mustard, Tabasco, pepper, sage, nutmeg, cinnamon, mint and a dose of curry powder..."`;
   Takeshi(Y5A107)`"For good measure I added a dose of mayonnaise, ketchup, sugar, salt, soy sauce, vinegar and vanilla..."`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A108)`"And...what else? Oh, I forget..."`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A109)`"Anyway, I threw in every ingredient and spice that I could find. It's my secret 34 ingredient sauce."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"..."`;
   You(Y5A110)`"H-hey! That's just too cruel!"`;
   Sara(Y5A111)`"Yeah...!"`;
   Kid`"That's going too far, Takeshi!"`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A112)`"Shut up! I'm the cook here."`;
   Sora(Y5A113)`"Tsugumi...I highly recommend inducing vomiting immediately...!"`;

});
showTextbox();
text(() => {
   Sora(Y5A114)`"Get water quickly! N-no...we'll need medicine first...!"`;

});
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A115)`"She'll be fine. She'll get the runs, but she won't die."`;
   Kid`"That's not something you should do to a girl."`;
   `I went to grab Takeshi with my left hand.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A116)`"Wait. I'm fine."`;
   `Tsugumi mumbled this, stopping us.`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A117)`"Huh, well aren't you tough!"`;
   Tsugumi(Y5A118)`"I'm perfectly fine."`;

});
fgload({ id: 2, name: `KB02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A119)`"But it still tastes terrible, right? Right? Tell the truth."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A120)`"I'm totally fine..."`;

});
stopBGM();
showTextbox();
text(() => {
   Tsugumi(Y5A121)`"It tastes kind of like pizza."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Takeshi`"........."`;
   You`"........."`;
   Sara`"..............."`;
   Sora`".................."`;

});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `What?`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A122)`"What did you just say? What's it taste like?"`;
   Tsugumi(Y5A123)`"Pizza."`;
   Takeshi(Y5A124)`"Are you serious?"`;
   `Tsugumi nodded.`;

});
showTextbox();
text(() => {
   Takeshi`"........."`;
   Tsugumi(Y5A125)`"Munch, munch..."`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A126)`"Hey...let me see that! That can't be!"`;

});
fgload({ id: 1, name: `TU02ADM`, x: 128, useAnim: true });
removeFG({ id: 2, useAnim: true });
playSFX({ name: `SE02_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Takeshi went to grab the sandwich, but Tsugumi was too quick for him. Not only that, Takeshi caught his foot and fell to the floor.`;
   `In that instant, Tsugumi polished off the sandwich.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A127)`"Thanks for the sandwich."`;
   Tsugumi(Y5A128)`"You made it specially for me, right?"`;
   Takeshi`"............"`;
   `So the event ended with Tsugumi turning the tables on Takeshi.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 90 });
bgload({ name: `BG21B1`, transition: 26 });
playBGM({ num: 2, volume: 97 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`9:19`);
showTextbox();
text(() => {
   `I ended up cleaning up afterward.`;
   `I separated the cans and sandwich wrappers and put them in garbage bags.`;
   `You and Sara helped.`;
   `Takeshi said he was going to start getting ready for lunch and headed to the kiosk.`;
   `Sora said she had to do some maintenance on LeMMIH and left for the Control Room.`;
   `Tsugumi disappeared to somewhere unknown.`;
   `....`;
   `But something happened when I was picking up garbage.`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(T5B003)}
${noWait}`;
   Append`${center}Hello there${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"Huh?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A129)`"What? What's the matter?"`;
   Kid`"Nothing..."`;
   Kid`"Did somebody just call out?"`;

});
fgload({ id: 2, name: `YU06BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A130)`"What?"`;
   Sara(Y5A131)`"Nobody said anything."`;
   Kid`"Really? Must be my imagination..."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A132)`"I'll bet you're just trying to find a way to get out of helping."`;
   Kid`"I'm not. It's not that at all."`;

});
fgload({ id: 2, name: `YU03BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A133)`"You hearing your mystery voices again?"`;
   Kid`"Well, I..."`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A134)`"Please, don't do that again. Get a hold of yourself already."`;
   You(Y5A135)`"I know you're tired, but..."`;
   Kid`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We started picking up garbage again.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `We finally finished with the trash, folded the blanket and were done cleaning up.`;

});
hideTextbox();
multifgload2({ id1: 1, id2: 2, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(Y5A136)`"Now we'll just sweep the area."`;

});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A137)`"Mayo. Can you do me a favor and get me a broom and dustpan? I think they are at the kiosk."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A138)`"Roger that!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sara set out for the kiosk.`;
   Kid`"I was just thinking. This must be a nightmare for the people that clean this place."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A139)`"It would be if 'people' had to do it."`;
   You(Y5A140)`"But LeMMIH usually uses a cleaning robot that automatically cleans the whole complex."`;
   Kid`"Wow."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A141)`"Well, what with the accident and all, I imagine the robot is a rusted pile of junk metal at the bottom of the ocean right about now."`;
   Kid`"I'll bet."`;

});
hideTextbox();
showDimOverlay();
stopBGM();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(T5B017)}
${noWait}`;
   Append`${center}Heave ho, heave ho${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `(...What?)`;
   `I...I was hearing voices again.`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A142)`"Thinking about it, I guess that LeMU is just one massive pile of scrap metal."`;
   You(Y5A143)`"I suppose it's just of matter of how it's destroyed..."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A144)`"What? What's the matter?"`;
   Kid`"Um..."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A145)`"You're not...not again?"`;
   Kid`"........."`;
   You(Y5A146)`"Oh...alright. You've done enough. Just go to the infirmary or somewhere and rest."`;
   You(Y5A147)`"You've got a serious condition of something..."`;
   `I was sure I'd heard something...`;
   `This time, I was sure it wasn't my imagination.`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(T5B019)}
${noWait}`;
   Append`${center}${nextPage(0)}Carving.${nextPage(1)}${waitVoice}${noWait}`;
   `${voice(T5B020)}

${noWait}`;
   Append`${center}${nextPage(0)}Chiseling away...${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `(See, I really can hear something.)`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(T5B021)}



${noWait}`;
   Append`${center}${nextPage(0)}Cutting scars into this stone statue.${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `(...Stone statue?)`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked around the four stone statues at the edge of the open area.`;
   `And there....`;

});
bgload({ name: `EV_CO19C`, transition: 20 });
showTextbox();
text(() => {
   `Atop the pedestal of a stone statue was a girl.`;
   `She was standing there next to the figure as if clinging to the statue.`;
   `(Oh! It's that girl...)`;
   `It was the girl that I had seen and who had then vanished on the first day.`;
   Kid`"Look, You! Right there!"`;

});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A148)`"Huh?"`;
   Kid`"Look! Over on that statue!"`;
   You(Y5A149)`"What about the statue?"`;
   Kid`"Look! That stone statue! There's a girl there! See?"`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A150)`"Huh? I don't see anybody."`;
   Kid`"Not there! Over there!"`;
   Kid`"Oh, forget it! I'll go call to her!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(Y5A151)`"Kid!"`;
   `I sprinted toward the stone statue.`;
   `(What could the girl be doing up there?)`;
   //??
   Unk(T5B023)`"Well, it's because..."`;
   //??
   Unk(T5B024)`"I was feeling lonesome."`;
   `Lonesome?`;
   //??
   Unk(T5B025)`"And anyway, I was..."`;
   //??
   Unk(T5B026)`"...feeling sad..."`;
   `Sad?`;
   `(What is she talking about?)`;
   //??
   Unk(T5B043)`"And next..."`;
   //??
   Unk(T5B044)`"Uh oh!"`;
   `Just then the girl lost her balance, falling from her awkward place on the pedestal.`;

});
bgload({ name: `EV_CO19D`, transition: 20 });
showTextbox();
text(() => {
   Kid`"L...look out!"`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I ran toward her.`;
   `The water caught on my feet and sprayed everywhere as I ran all out to where she was.`;
   `(Will I make it?)`;

});
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
stopBGM();
showTextbox();
text(() => {
   `I closed my eyes and mustered all of my power and sprinted.`;
   `I threw out my free left hand to where the girl would be falling to catch her.`;

});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash!`;
   `.........`;
   `.........`;
   `.........`;
   `I didn't feel anything.`;
   `I thought maybe I hadn't reached her in time.`;
   `Scared, I opened my eyes.`;

});
bgload({ name: `BG21B1`, transition: 0 });
stopSFX()
showTextbox();
text(() => {
   `(...What?)`;
   `There was no one in my arms.`;
   `Or even around me.`;
   `Only the water sloshing about gently around me.`;
   You(Y5A152)`"Hey, are you alright? It looks like you took a pretty nasty spill..."`;
   Kid`"........."`;

});
bgload({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   `I looked above me.`;
   `Of course there was no one on the pedestal supporting the statue.`;
   `Without saying anything, I got up and went behind the statue.`;

});
bgload({ name: `IT05F`, transition: 20 });
showTextbox();
text(() => {
   `There were scratches in the statue.`;
   `They were deep notches that looked like they had been carved there by something hard and sharp.`;
   `They were the shape of people.`;
   `Really simple looking like stick people.`;
   `At the end of each stick was a little round face...`;
   `There were six in all.`;
   `Looking closer, I saw that next to the people figures were two carvings of animals that I'd never seen.`;

});
bgload({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   `I looked up at the statue.`;
   `The statue was pointing diagonal and up...toward the east.`;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   Sara(Y5A153)`"Hey, what are you two doing?"`;
   You(Y5A154)`"That's a good question..."`;
   `I ignored them and gently touched the carvings on the statue.`;
   `Without thinking I blurted out - `;
   Kid`"Watch your step, okay?"`;

});
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   `${voice(T5B048)}


${noWait}`;
   Append`${center}${nextPage(0)}Okay${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `That answer could have been my imagination that time...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
delay({ interval: 30 });
setSceneTitle({ index: 97 });
bgload({ name: `EV_SA13D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
playSFX({ name: `SE09_01L`, a1: 0, volume: 90 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   `Time passed...`;
   `We all split up, roamed around freely doing what we wanted to do.`;
   `Some wandered the complex, some tried to open up communications with the outside, some tried to think of ways to escape...`;
   `But no one gave up and everyone was working on ways to get out of our difficult situation.`;
   `But it all was it vain. We made no breakthroughs...`;
   `The evening of the fifth rolled around.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG26A3L`, transition: 26 });
hideTextbox();
ADV_Mode();
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`16:22`);
showTextbox();
text(() => {
   `I...`;
   `I wandered aimlessly around LeMU by myself.`;
   `Honestly, I had not been able to forget what Sara had said to me the day before, or more accurately that morning.`;
   `I couldn't seem to clear my mind.`;
   `At breakfast, Sara was her same old self...`;
   `I thought that a little walk might make for a change of mood...`;

});
bgload({ name: `BG23A1`, transition: 20 });
bgload({ name: `BG24A1`, transition: 20 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The next thing that I knew, I was heading for the Cosmic Whale...`;
   `I took the EI elevator.`;

});
bgload({ name: `BG24A2`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG23B1`, transition: 20 });
showTextbox();
text(() => {
   `I rode down to the third floor that was flooded with water.`;
   `There was no guarantee that Sara would be there...`;
   `I turned my head, inspecting the area.`;
   `...It was just then that...`;
   `I saw 'her' again!`;
   Kid`"Hey!"`;
   `I saw her small figure cutting across the corridor.`;
   `I was sure of it.`;
   `It was that girl!`;
   `I chased after her.`;

});
bgload({ name: `BG26B3L`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Her skirt shook back and forth as she walked further and further away.`;
   `It was almost as if she were trying to get away from me.`;
   Kid`"Hey! Wait a minute!"`;
   `She might not have heard me. She didn't show any sign of stopping.`;
   `I wondered what it was all about.`;
   `This girl that kept appearing out of nowhere and then disappearing.`;
   `This girl that didn't register on LeMMIH's bio scan.`;
   `No, she had registered once...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
stopSFX()
bgload({ name: `IT04E`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `'Life readings: 7'`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `But the more I thought about it, the stranger everything seemed.`;
   `She only appeared in front of me and we hardly communicated...`;
   `Whatever. I knew thinking about it wouldn't help.`;
   `It was something that I could solve by asking her directly.`;

});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   `She headed into the Cosmic Whale Room.`;
   `I followed in soon after her.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG05A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `I didn't see her anywhere.`;
   `Instead, I saw Sara sitting in the same place we had sat earlier, on the whale.`;
   `Sara was singing softly.`;

});
fgload({ id: 1, name: `SA17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S5A130)`"Moon sprite shouldering a long bow."${waitVoice}${noWait}`;
   Sara(S5A131)`"Waiting inside a dream."${waitVoice}${noWait}`;
   Sara(S5A132)`"Tonight a story by moonlight."${waitVoice}${noWait}`;
   Sara(S5A133)`"Hoping the wait will be short."${waitVoice}${noWait}`;
   Sara(S5A134)`"Sleeping curled and snug."${waitVoice}${noWait}`;
   Sara(S5A135)`"Sleeping in mother's arms."${waitVoice}${noWait}`;
   `Her voice echoed quietly as if it were seeping into the night sky.`;
   `Somehow it sounded faintly sad and lonely.`;
   `I couldn't make myself call out to Sara...`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
delay({ interval: 120 });
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`20:19`);
showTextbox();
text(() => {
   `My eyes opened to the jarring sound of metal screaming under strain.`;
   `I didn't know if it was because of my broken arm, or the swimming with Sara...`;
   `But I felt sluggish and feverish, so I took some medicine and went to bed.`;
   `Vibrations shook through LeMU.`;
   Kid`"I wonder if something happened."`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `By the time I had gotten out of the infirmary, the shaking had stopped.`;
   `I thought that if I went to the Security Office I might learn what happened.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: false });
playBGM({ num: 12, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Kid`"Tsugumi, what happened?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A136)`"I don't know. I just got here myself."`;
   `Tsugumi said it coolly.`;
   `Then Sora appeared in the room.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A137)`"So you two are here."`;
   Kid`"Sora, did something happen?"`;

});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A138)`"Yes. Water breached the Cosmic Whale Room..." `;
   Tsugumi(S5A139)`"Water breached it?"`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A140)`"Yes. The room's wall collapsed under the water pressure and started flooding."`;
   Kid`"Are we...alright?"`;
   Sora(S5A141)`"The doors to the Cosmic Whale have been sealed so there will be no effect on other areas."`;
   Kid`"What about everyone else?"`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A142)`"You and Takeshi are in the Control Room."`;
   Kid`"You and Takeshi...what about Sara?"`;

});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A143)`"Sara...her last confirmed location is in a corridor near the Cosmic Whale."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 128, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Corridor?"`;
   Sora(S5A144)`"Sensors in that area are not functioning at full capacity...so I have not been able to verify this."`;
   Sora(S5A145)`"Presently it is completely cut off."`;
   Kid`"What about Sara?"`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A146)`"I am unable to confirmed her location anywhere else in LeMU."`;
   Kid`"No way! Then she was in that room!"`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I couldn't stand staying in that room and ran outside.`;
   `Tsugumi followed on my heels.`;

});
hideTextbox();
stopSFX()
bgload({ name: `BG23B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `Tsugumi and I went down to the area housing the Cosmic Whale Room.`;
   Kid`"Sora, can you open the doors to the room?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `SO05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A147)`"That is impossible."`;
   Kid`"But..."`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A148)`"I am sorry..... If I open these doors down, this sector will flood as well."`;
   Sora(S5A149)`"If the Generator Room floods, then we will be powerless. I cannot do that."`;
   Kid`"What about Sara? Sara!"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A150)`"Calm down."`;
   Kid`"Tsugumi..."`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A151)`"Sora, are the emergency corridors around here still functioning? Is there anyway to get to the room through them?"`;

});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A152)`"I will check..... Yes. There is a corridor directly above the Cosmic Whale."`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S5A153)`"However, it is not possible to enter Cosmic Whale from there. That area is completely flooded."`;
   Tsugumi(S5A154)`"But we could enter it by diving, right?"`;

});
showTextbox();
text(() => {
   Sora(S5A155)`"Yes, but..."`;
   Kid`"I'll go. We've got to save Sara!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU07ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A156)`"With that broken arm? What're you gonna do?"`;
   Kid`"B-but..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A157)`"You'll start drowning and in the end I'll have to go save you, too."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A158)`"I'll go."`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"But Tsugumi..."`;

});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A159)`"You're injured. So keep quiet."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A160)`"Sora, where is the nearest entrance to a corridor that'll get me there?"`;

});
showTextbox();
text(() => {
   Sora(S5A161)`"Use the connecting staircase out of here and to the left."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi started running before Sara was done speaking.`;

});
bgload({ name: `BG26B1L`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I chased after Tsugumi.`;
   Kid`"Tsugumi, why...?"`;
   Tsugumi(S5A162)`"...There's no other choice."`;
   Tsugumi(S5A163)`"We're in this...together."`;
   Kid`"Tsugumi..."`;
   `Tsugumi sprinted the emergency stairs and climbed to the emergency corridor.`;
   `I followed right behind her.`;

});
bgload({ name: `BG27A3`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `When I got to the corridor, Tsugumi was running for the Cosmic Whale Room.`;
   `I hurriedly ran after her.`;

});
bgload({ name: `BG28A1L`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `Tsugumi had turned the corner, had already opened the hatch to the Whale Room and was peering in.`;
   Kid`"Tsugumi! Wait!"`;
   `Tsugumi glanced at me.`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S5A164)`"Wait here."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_05`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Saying that, Tsugumi leaped through hatch.`;
   Kid`"Tsugumi!"`;
   Kid`"Sora! Is Tsugumi okay?"`;
   Sora(S5A165)`"I don't know. Now we can only trust and wait for her."`;
   `Only Sora's voice echoed around me.`;
   `She was speaking through a different set of emergency speakers and her voice crackled and mixed with static.`;
   Sora(S5A166)`"You and Takeshi said that they will wait for you in the infirmary."`;
   Kid`"Okay..."`;
   `I looked in the emergency hatch again.`;
   `Inside, the hatch was brimming with cold water. `;
   `Frustrated and feeling powerless because I could only wait, I tried to be patient.`;
   Kid`"Tsugumi, please...find Sara..."`;
   Kid`"Sara..."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
showTextbox();
text(() => {
   `Time passed.`;
   `It might not have really been that long.`;
   `But at that time it felt like an eternity to me.`;

});
hideTextbox();
delay({ interval: 60 });
bgload({ name: `EV_SA08A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Tsugumi came bursting out of the water.`;
   `On her back she was carrying Sara...`;
   Kid`"S-Sara!"`;
   Tsugumi(S5A167)`"Haaaaa.*Pant* Let's get her out of the water."`;
   Kid`"Okay."`;
   `I forgot the pain in my arm and yanked Sara up.`;
   `Sara was like ice - cold and hard.`;
   `In her firmly clenched fist was the pendant.`;
   `Tsugumi put her hand on the back of her neck.`;
   Tsugumi(S5A168)`"There's...no pulse."`;
   Kid`"No! Sara..."`;
   Kid`"It can't be!"`;
   Kid`"Sara! Sara! Wake up! Sara!"`;
   `I shook Sara's cold body.`;
   `Tsugumi tried to calm me down and spoke.`;
   Tsugumi(S5A169)`"Anyway, let's get her to the infirmary."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `EV_SA09A`, transition: 26 });
playBGM({ num: 15, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `We carried her to the infirmary and lay her on an examination table.`;
   `Tsugumi immediately started giving her a heart massage.`;
   `Takeshi and You were fiddling with the machines around the examination table trying to learn more about Sara's status.`;
   `Takeshi got out the defibrillator.`;
   `A beep signaled that they were charged and Takeshi placed two pads on Sara's chest.`;

});
shakeScreen();
showTextbox();
text(() => {
   `Whaap!`;
   `Sara's body jumped.`;
   `Tsugumi put her hand on Sara neck and shook her head.`;
   `She went right back to massaging her heart.`;
   Takeshi(S5A170)`"Damn. One more time."`;
   `The beep echoed again.`;
   `And then the electric pulse again. `;
   `Sara's face was drained of color and her lips were blue.`;
   `Her body was stiff and unresponsive.`;
   `All I could do was watch the three of them busily work to save her.`;
   `There was nothing in the drawers of memory accessible to me, telling me how to act in this situation.`;
   `Images of time I had spent with Sara until now flashed through my mind and the voices in the room barely reached me.`;
   `Finally...Tsugumi relaxed her hands.`;
   `With a look of grief she moved away from Sara. `;
   `Takeshi also put the defibrillator back on the table. `;
   You(S5A171)`"No..."`;
   Takeshi(S5A172)`"Damn...why..."`;
   Kid`"What...happened?"`;
   Kid`"Hey, why are you all stopping?"`;
   Kid`"Hey. Why do you all have those looks on your faces?"`;
   You(S5A173)`"....Kid."`;
   Kid`"It can't...be!"`;
   Kid`"Sara! Sara!"`;
   Kid`"Sara! Wake up! Wake up! Sara!"`;
   `I started trying to copy Tsugumi's heart massage.`;
   `The three of them watched with sad looks on their faces.`;
   Kid`"Why...why do you all want to give up?"`;
   Kid`"Sara isn't going to die! She can't die here!"`;
   `I continued to pump her chest frantically.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA01A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   Kid`"Sara!"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA03A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   Kid`"Sara! Open your eyes!"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA11B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   Kid`"Open your eyes!"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA09A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   You(S5A174)`"Kid..."`;
   `You put her hand on my shoulder.`;
   `But I shook her hand off and continued pushing on Sara's chest.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA05A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   Kid`"Don't die!"`;
   Kid`"Open your eyes!"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   Kid`"Saraaaaa!"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA09A`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `${voice(S5A175)}


${noWait}`;
   Append(S5A176)`${center}Why do you care now?${waitVoice} ${noWait}`;
   Append`${center}You were the one that ran away alone...${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I heard a voice.`;
   Kid`"No, I didn't run away!"`;
   Kid`"I wanted to help you!"`;
   `I put more power into the hand I was using to push on her chest.`;
   `Her ribs bent under the strain.`;
   `Still, I kept pumping.`;
   Kid`"I told you, Sara!"`;
   Kid`"Sara! I told you I would come...to help you!"`;
   Kid`"I told you...I'd come to help you, didn't I?"`;
   `I prayed for Sara's heart to start beating!`;
   Kid`"Sara!"`;
   Kid`"You said you'd wait like a good girl..."`;
   Kid`"You said you'd wait, didn't you?"`;
   `I pushed a little harder.`;

});
stopBGM();
shakeScreen();
showTextbox();
text(() => {
   `Cough.`;
   `A little water came out of Sara's mouth.`;
   Sara(S5A177)`"Cough..."`;
   `She started breathing faintly and more water came out of her mouth.`;
   Sara(S5A178)`"Cough, cough..."`;
   Kid`"Sara! Sara!"`;
   `I shook Sara desperately.`;

});
bgload({ name: `EV_SA09B`, transition: 0 });
playBGM({ num: 19, volume: 94 });
showTextbox();
text(() => {
   Sara(S5A179)`"Ugh....ooooooh..."`;
   `Sara's eyes opened slightly.`;
   Kid`"Oh, Sara!"`;
   `That instant the tension in the atmosphere of the infirmary eased.`;
   Sara(S5A180)`"Oh...uh...I..."`;
   Kid`"Oh, thank goodness...Sara...Sara..."`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
stopBGM();
l_choice = 0;
jump(`SS6A`);
