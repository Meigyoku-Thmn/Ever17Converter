setDialogBoxColor(BLUE);
setSceneTitle({ index: 94 });
g_b0 = 0;
g_b1 = 0;
g_b2 = 0;
bgload({ name: `BG37A1`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Moonlight shone into the sickroom.`;
   waitForClick; clearText; 
});
hideTextbox();
playVoice($`S5A000`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard a voice crying somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The muffled voice kept sniveling and sobbing 
again and again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who...who was it...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who are you...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...didn't know...what I was escaping from...`;
   waitForClick; clearText; 
});
hideTextbox();
playVoice($`S5A001`);
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Waiting for....for what?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I waiting for me?`;
   waitForClick; clearText; marker; appendText; 
   Narr`And where in the world was that?`;
   waitForClick; clearText; marker; appendText; 
   Narr`This was...this was...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then the scene dissolved away.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
g_bf = 0;
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
   marker; appendText; 
   Narr`


`;
   sound(`S5A002`); appendText; delay(0); 
   Narr`                 You ran away!`;
   waitForSound; 
   Narr`
`;
   sound(`S5A003`); appendText; delay(0); 
   Narr`     You left that kid and ran away alone!`;
   waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That voice kept repeating itself in my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wait! Tell me!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what I had run from or to where!`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was I...?`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gradually the scenery around me began to 
change into eerie colors....`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 120 });
closeDimInAndOutAndFilterAnim();
setSceneTitle({ index: 95 });
g_b0 = 5;
g_b1 = 5;
g_b2 = 5;
bgload({ name: `BG09A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
stopBGM();
clock(`2:7`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I woke up and almost leaped out of the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was in the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body was drenched in sweat.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Ouch!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sharp pain shot through my right arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at my right arm and stared confused 
at the cast on my arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know why... `;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 97 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then I remembered. I had broken my arm and was 
resting...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was still foggy from the drugs. A string of 
hazy memories came back to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered the scary dream I had.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it was from the fever and medicine. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's why I had such bizarre dreams.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head and tried to get a better grip 
on my consciousness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the clock on the wall. It was a 
bit past two in the morning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Normally it would be the middle of the night...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somehow it didn't feel like that at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to remember how long we had been 
trapped there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`An extended amount of time in here - where the 
cycles of day and night were meaningless - 
really played with one's sense of time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sat up, taking care to watch out for 
my broken arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Clank.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's pendant was by my left hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like I had fallen asleep with it 
clasped in my hand.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I've gotta return this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slipped off of the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My right arm felt slightly feverish, but 
because the medicine Takeshi had injected 
was probably still working, it didn't hurt 
much.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I still was unable to move it normally.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next to the pillow was a sling for me to hang 
my arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if Takeshi had left it. Or maybe 
You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Either way, I couldn't just let my hurt arm 
swing back and forth as I walked. I put it on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about where Sara might be...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured she might be asleep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where she always slept.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An image of Sara atop the whale floated into 
my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to try there first...`;
   waitForClick; clearText; marker; appendText; 
   Narr`If she weren't there, then I'd try somewhere 
else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still a bit groggy, I left the infirmary.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went down in the elevator and headed for 
the Cosmic Whale.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_14`, a1: 0, volume: 85 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard the sound of splashing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't from the...Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like it came from the pipe room.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder what that is."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`When I entered the room...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`-!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S...Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The moment I saw what was happening, I jumped 
into the water.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After I jumped I remembered that my arm 
was broken, but it was too late.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swam toward Sara doing the best I could with 
my arm.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, grab hold!"`;
   waitForClick; clearText; marker; sound(`S5A004`); appendText; 
   Sara`"Huh? Kid, what're you doing?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just grab hold of me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to grab Sara, but she swam away 
from me.`;
   waitForClick; clearText; marker; sound(`S5A005`); appendText; 
   Sara`"Just leave me alone!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? w-w-wait Sara?"`;
   waitForClick; clearText; marker; sound(`S5A006`); appendText; 
   Sara`"I said, stay away from me - pervert!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Pervert....what?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I noticed something a little bit strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I stretched my legs I could just touch 
the floor.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"Sa...Sara?"`;
   waitForClick; clearText; marker; sound(`S5A007`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, what're you doing?"`;
   waitForClick; clearText; marker; sound(`S5A008`); appendText; 
   Sara`"Just what it looks like."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...I don't know what it looks like. That's 
why I asked."`;
   waitForClick; clearText; marker; sound(`S5A009`); appendText; 
   Sara`"I'm practicing swimming."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Practicing...swimming?"`;
   waitForClick; clearText; marker; sound(`S5A010`); appendText; 
   Sara`"Yes. Just what it looks like?"`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   appendText; delay(0); 
   Narr`             (As if I would know!?)`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`         (Flailing around like that...)`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`    (Anyone would think you were drowning!)`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was the comeback I launched in my mind. 
But what came out of my mouth was...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...I see...well, geez..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Only that stupid line.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A011`); appendText; 
   Sara`"Well, since you've seen me, I'll tell you 
I guess."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A012`); appendText; 
   Sara`"I actually don't know how to swim."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she said this, Sara continued flapping 
about madly in the water as if she were 
sinking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A013`); appendText; 
   Sara`"I thought we have all this time...and I 
found a swimsuit in the changing room."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Distracted, I hadn't noticed...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But when she told me I did for the first time. 
Sara was decked out like a LeMU employee in a 
one-piece swimsuit.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I wondered why I hadn't noticed...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I blushed with embarrassment.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But still...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Watching Sara's movements, it would have been 
more of a stretch to imagine her swimming than 
drowning.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Besides, the medicine was still affecting me...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was making up all kinds of excuses.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But Sara didn't notice my confusion, 
and kept at it.`;
   waitForClick; clearText; marker; sound(`S5A014`); appendText; 
   Sara`"So I thought that I would try to get in a 
little swim practice."`;
   waitForClick; clearText; marker; sound(`S5A015`); appendText; 
   Sara`"I mean, the water here isn't all that cold."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now that she mentioned it, I realized the 
water was warmer than in the corridors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I imagined the heat from the pipes had warmed 
it.`;
   waitForClick; clearText; marker; sound(`S5A016`); appendText; 
   Sara`"So I was practicing swimming all alone."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I thought you were a ninja? Ninja can..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A017`); appendText; 
   Sara`"Well, swimming is the only skill 
I'm not good at..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; marker; sound(`S5A018`); appendText; 
   Sara`"Just between you and me..."`;
   waitForClick; clearText; marker; sound(`S5A019`); appendText; 
   Sara`"Unfortunately, my swimming was so bad that 
I wasn't promoted to a master."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is that right...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A020`); appendText; 
   Sara`"Ah, hee, hee..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W...what?"`;
   waitForClick; clearText; marker; sound(`S5A021`); appendText; 
   Sara`"Hee, hee. Kid, you take everything so 
seriously. Nin! Nin! Ninja!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...so...that was a joke!"`;
   waitForClick; clearText; marker; sound(`S5A022`); appendText; 
   Sara`"Sure it was. Me? A ninja?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"B-but..."`;
   waitForClick; clearText; marker; sound(`S5A023`); appendText; 
   Sara`"A, ha, ha, but it's true that I can't swim."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A024`); appendText; 
   Sara`"And being in this situation and not being 
able to swim...it makes me nervous."`;
   waitForClick; clearText; marker; sound(`S5A025`); appendText; 
   Sara`"I think I'm probably the only one here who 
can't swim."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A026`); appendText; 
   Sara`"You can swim right, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't thought about it, but I thought I'd 
been swimming alright a minute ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That meant that I could swim.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah...I can swim."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A027`); appendText; 
   Sara`"That's perfect! Will you teach me?"`;
   waitForClick; 
});
choice(
   `Uh, I don't think so...`
   `I suppose...`
);
switch (choice) {
   case 0: goto(lbl_00000444);
   case 1: goto(lbl_000004d6);
}
let lbl_00000444;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Uh, I don't think so..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A028`); appendText; 
   Sara`"Oh, why not?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, my arm is no good like this..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My broken arm actually felt like it was on 
fire - probably because I had strained it 
trying to swim.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A029`); appendText; 
   Sara`"That's okay. You can just watch and tell me 
what I'm doing wrong."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But I know you won't listen to anything 
I say..."`;
   waitForClick; clearText; marker; sound(`S5A030`); appendText; 
   Sara`"Sure I will! I'll listen!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Really?"`;
   waitForClick; clearText; marker; sound(`S5A031`); appendText; 
   Sara`"For sure. I promise!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I bet your fingers are crossed..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A032`); appendText; 
   Sara`"Oh, there you go again!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara splashed water at me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm just kidding..."`;
   waitForClick; clearText; marker; sound(`S5A033`); appendText; 
   Sara`"Now you've made me mad. I can't believe you'd 
say that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you don't want me to teach you how to 
swim?"`;
   waitForClick; clearText; marker; sound(`S5A034`); appendText; 
   Sara`"Aw...you're tricky!"`;
   waitForClick; clearText; marker; sound(`S5A035`); appendText; 
   Sara`"I think you've got samurai in you, so you 
better fight fair!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm not samurai and I'm not fighting about 
anything."`;
   waitForClick; clearText; marker; sound(`S5A036`); appendText; 
   Sara`"Ohhh! You're so difficult!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Difficult...?"`;
   waitForClick; clearText; marker; sound(`S5A037`); appendText; 
   Sara`"Forget it! That's it - you're 
teaching me to swim."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey it's not all up to you."`;
   waitForClick; clearText; marker; sound(`S5A038`); appendText; 
   Sara`"I didn't decide it. It's fate. Inevitable and 
decided by the stars!" `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A039`); appendText; 
   Sara`"It's settled!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey quit making up my mind for me!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A040`); appendText; 
   Sara`"You sure whine a lot for a guy!"`;
   waitForClick; clearText; marker; sound(`S5A041`); appendText; 
   Sara`"When something is decided, you accept it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So when exactly was this decided?"`;
   waitForClick; clearText; marker; sound(`S5A042`); appendText; 
   Sara`"EXACTLY right now. I decided, so it's 
decided. Kid, you're gonna teach me to swim!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think there was any point to 
continuing the argument.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright. Fine. I'll teach you."`;
   waitForClick; clearText; marker; sound(`S5A043`); appendText; 
   Sara`"It would've been easier if you had said that 
in the first place!"`;
   waitForClick; clearText; 
});
goto(lbl_0000052f);
let lbl_000004d6;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I suppose..."`;
   waitForClick; clearText; marker; sound(`S5A044`); appendText; 
   Sara`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, I'm already soaked to the bone... 
I might as well teach you a little."`;
   waitForClick; clearText; marker; sound(`S5A045`); appendText; 
   Sara`"You mean it? Alright!"`;
   waitForClick; clearText; marker; sound(`S5A046`); appendText; 
   Sara`"Wow. You're being surprisingly nice, 
aren't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No I'm not."`;
   waitForClick; clearText; marker; sound(`S5A047`); appendText; 
   Sara`"Oh! I know what it is."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W-what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A048`); appendText; 
   Sara`"It's because I look so good in this swimsuit! 
Better keep your hands off!" `;
   waitForClick; clearText; marker; appendText; 
   Kid`"I, d-don't know what you are talking about!"`;
   waitForClick; clearText; marker; sound(`S5A049`); appendText; 
   Sara`"Oh! See! I can tell I'm right 'cause you're 
getting all worked up!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Fine! I won't teach you anything then!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A050`); appendText; 
   Sara`"Oh. No. Wait! Pleaaaaaaasssee..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S5A051`); appendText; 
   Sara`"I won't tease you anymore."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Promise?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A052`); appendText; 
   Sara`"Yeah. I promise."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm."`;
   waitForClick; clearText; marker; sound(`S5A053`); appendText; 
   Sara`"I said I promise! I swear to God, to Buddha! 
And anyone else who'll listen!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well...alright."`;
   waitForClick; clearText; marker; sound(`S5A054`); appendText; 
   Sara`"Really? You know I love you, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anyway...I should be going..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S5A055`); appendText; 
   Sara`"Ohhhhh, I'm kidding! Come back here!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara flapped her arms about making even more 
spray.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, alright. I'll teach you, okay?"`;
   waitForClick; clearText; marker; sound(`S5A056`); appendText; 
   Sara`"Yeah!"`;
   waitForClick; clearText; marker; sound(`S5A057`); appendText; 
   Sara`"I was so hoping that you would say that!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I said stop that...!"`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"Sara, you've gotta relax more!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just be natural like."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to strain my voice to be heard over 
Sara's splashing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had gotten out of the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With my right arm in a sling, there were only 
so many ways to teach swimming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just watched what she was doing and hollered 
out advice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...no matter what I said...she still looked 
clumsy.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If you keep that up, you'll never learn to 
swim!"`;
   waitForClick; clearText; marker; sound(`S5A058`); appendText; 
   Sara`"Well, what am I s'posed to do? Pant, pant."`;
   waitForClick; clearText; marker; sound(`S5A059`); appendText; 
   Sara`"I'm doing my best to do just like you said."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You can't swim if you're so tense!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You need to be smoother..."`;
   waitForClick; clearText; marker; sound(`S5A060`); appendText; 
   Sara`"Like this?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_14`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splish, splash, splish, splash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`She only whirled the water into a bigger froth 
with more spray.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Whoa! S-Sara, slow down!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shouted instructions as I avoided the spray 
showering down around me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are you doing that on purpose?"`;
   waitForClick; clearText; marker; sound(`S5A061`); appendText; 
   Sara`"Why would I?"`;
   waitForClick; clearText; marker; sound(`S5A062`); appendText; 
   Sara`"Whaddya expect me to do?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You've gotta move more slowly...gentle 
like..."`;
   waitForClick; clearText; marker; sound(`S5A063`); appendText; 
   Sara`"How am I supposed to know what you mean 
by gentle? What else can I do?"`;
   waitForClick; clearText; marker; sound(`S5A064`); appendText; 
   Sara`"You're no good at teaching!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That ticked me off.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"Oh, I know."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A065`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, you don't need to learn to swim, 
do you?"`;
   waitForClick; clearText; marker; sound(`S5A066`); appendText; 
   Sara`"Of course I do!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm. Really?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A067`); appendText; 
   Sara`"W-whaddya mean?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Listen, Sara."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If you REALLY want to learn to swim..."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Then you ought to listen to what I say."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A068`); appendText; 
   Sara`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If you can't listen to what I say..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Then I'll be going."`;
   waitForClick; clearText; marker; sound(`S5A069`); appendText; 
   Sara`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you want me to teach you to swim?"`;
   waitForClick; clearText; marker; sound(`S5A070`); appendText; 
   Sara`"...Yes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So is there anything you want to say to me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A071`); appendText; 
   Sara`"Mmmmm...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara glared at me menacingly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If not, then..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pretended I was about to leave.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A072`); appendText; 
   Sara`"Uh, I'm sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? Did you say something?"`;
   waitForClick; clearText; marker; sound(`S5A073`); appendText; 
   Sara`"I said, I'm sorry!"`;
   waitForClick; clearText; marker; sound(`S5A074`); appendText; 
   Sara`"Now just teach me without being mean."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A075`); appendText; 
   Sara`"P-W-E-T-T-Y  P-W-E-A-S-E!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't talk like a baby!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A076`); appendText; 
   Sara`"A wittle bit is fine...no?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A077`); appendText; 
   Sara`"Besides, I think I look pretty good 
in a swimsuit."`;
   waitForClick; clearText; marker; sound(`S5A078`); appendText; 
   Sara`"You should be happy just to be around me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Not even a little."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`

`;
   appendText; 
   Narr`Truthfully though, Sara was something in a 
swimsuit.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But I couldn't tell her that.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I didn't want her to get bigheaded.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Now why should I be so happy about seeing 
you in a swimsuit?"`;
   waitForClick; clearText; marker; sound(`S5A079`); appendText; 
   Sara`"Oh! You're such a jerk."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Sara started kicking and showered me with 
water.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Whoa! Stop that right now!"`;
   waitForClick; clearText; marker; sound(`S5A080`); appendText; 
   Sara`"Then you tell the truth! You like me 
in a swimsuit, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why would I? You in a swimsuit...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was blushing, completely giving away my 
feelings.`;
   waitForClick; clearText; 
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
   marker; sound(`S5A081`); appendText; 
   Sara`"Oh! Look! You're getting red."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A082`); appendText; 
   Sara`"See! You do like seeing me!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're not listening to me!"`;
   waitForClick; clearText; marker; sound(`S5A083`); appendText; 
   Sara`"You're a guy."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's that supposed to mean?"`;
   waitForClick; clearText; marker; sound(`S5A084`); appendText; 
   Sara`"Well, any healthy guy in his right mind would 
like to be with a beautiful girl in a bathing 
suit."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not like that."`;
   waitForClick; clearText; marker; sound(`S5A085`); appendText; 
   Sara`"You're saying that even though you want to 
sneak a better look."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I said I don't!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I've had enough. I'm leaving!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was embarrassed because she'd seen through 
me. I really meant to leave the room.`;
   waitForClick; clearText; marker; sound(`S5A086`); appendText; 
   Sara`"Aiiiieeee!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard Sara scream behind me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly looked behind me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara? Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if her leg had cramped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sprinted to the water's edge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Splash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Water suddenly sprayed in my eyes, blinding me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next thing I knew I had slipped and was 
spinning in the air.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_05`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crasplash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The following instant I was in the water.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Aaagghhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It all happened so quickly that I swallowed a 
ton of water. And some went up my nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My nose stung.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I desperately fought to get to the surface.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG20B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Phwaw! Sara!"`;
   waitForClick; clearText; marker; sound(`S5A087`); appendText; 
   Sara`"Whaaaaaaat is it?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA10A`, transition: 20 });
playBGM({ num: 18, volume: 97 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara, pretending that nothing had happened, 
had resumed her swim practice.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Cough, sputter...Sara, you're mean!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I approached Sara.`;
   waitForClick; clearText; marker; sound(`S5A088`); appendText; 
   Sara`"Paaa...A,HA,HA,Haaaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W-what?"`;
   waitForClick; clearText; marker; sound(`S5A089`); appendText; 
   Sara`"You fall for EVERYTHING so easily! 
Hee, hee...."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S-Sara!"`;
   waitForClick; clearText; marker; sound(`S5A090`); appendText; 
   Sara`"It would seem you are still wet behind the 
ears, Kid."`;
   waitForClick; clearText; marker; sound(`S5A091`); appendText; 
   Sara`"Paaa...A,HA,HA,Haaaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Seeing Sara laughing with such enthusiasm, I 
realized that getting any angrier was 
pointless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, for some reason I started to laugh.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Hee....Kya, Ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; sound(`S5A092`); appendText; 
   Sara`"A, Ha, ha, ha, ha, ha!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ha, ha, ha, ha, ha, ha, ha, ha!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I laughed for a while.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"Anyway..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Once my fit of laughter was done, I got out of 
the water.`;
   waitForClick; clearText; marker; sound(`S5A093`); appendText; 
   Sara`"Uh, Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara called out to me shyly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So, should we start?"`;
   waitForClick; clearText; marker; sound(`S5A094`); appendText; 
   Sara`"Uh...yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A095`); appendText; 
   Sara`"Okay wise teacher! Please fill me in with 
swimming knowledge!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You know I'm pretty strict. You think you can 
handle it?"`;
   waitForClick; clearText; marker; sound(`S5A096`); appendText; 
   Sara`"Yes, sir!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay. Then let's get started."`;
   waitForClick; clearText; marker; sound(`S5A097`); appendText; 
   Sara`"Okay."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_SA10A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Listen. I think with you, Sara, your body 
gets tight because you think you can't swim."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you have to relax more."`;
   waitForClick; clearText; marker; sound(`S5A098`); appendText; 
   Sara`"But...I'm trying to do it just the way you 
say..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, but you're so stiff. Like a scarecrow 
or you're made of wood or something..." `;
   waitForClick; clearText; marker; appendText; 
   Kid`"You need to let your legs flow freely...like 
a fish maybe."`;
   waitForClick; clearText; marker; sound(`S5A099`); appendText; 
   Sara`"A fish... Alright then, I'm a fish now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay, Sara! You need to get pumped!"`;
   waitForClick; clearText; marker; sound(`S5A100`); appendText; 
   Sara`"I just can't picture what you mean."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, if you can't imagine a fish, then how 
about a dolphin or whale...anyway, you have 
to be relaxed and move freely."`;
   waitForClick; clearText; marker; sound(`S5A101`); appendText; 
   Sara`"Uuuuh..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. You're still too stiff! Relax more."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just let your feet go!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow teaching her to swim had become fun. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was fun to see Sara, who was always in 
control of things, in the opposite position.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; marker; sound(`S5A102`); appendText; 
   Sara`"Mmmmmmm."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I waited for Sara to emerge from the changing 
room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I played with her pendant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking at it without the flame or the 
lighter, it was just a mirror.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran my finger around the edge of the pendant.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I thought about what Sara had said in the 
compression chamber.`;
   waitForClick; clearText; marker; sound(`S4A090`); appendText; 
   Sara`"Both of my parents are gone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara had looked so sad as she'd said it.`;
   waitForClick; clearText; 
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
   marker; sound(`S5A103`); appendText; 
   Sara`"Sorry I took so long."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A104`); appendText; 
   Sara`"What's wrong? Why the glum face?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, it's nothing."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But I brought this...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A105`); appendText; 
   Sara`"Oh you brought it for me."`;
   waitForClick; clearText; marker; sound(`S5A106`); appendText; 
   Sara`"Sorry you had to stick around teaching me 
until the end."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're the one that made me stay..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mumbled this.`;
   waitForClick; clearText; marker; sound(`S5A107`); appendText; 
   Sara`"Huh? What did you say?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, nothing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A108`); appendText; 
   Sara`"Well, anyway, thanks a lot..."`;
   waitForClick; clearText; marker; sound(`S5A109`); appendText; 
   Sara`"And thanks for hanging out until the end."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was taken aback. I was waiting for some 
witty comeback.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sara was sincerely saying thanks.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W-wow. You're being surprisingly nice 
to me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A110`); appendText; 
   Sara`"Yeah, well I'm really grateful."`;
   waitForClick; clearText; marker; sound(`S5A111`); appendText; 
   Sara`"Because I finally learned to swim by myself."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A112`); appendText; 
   Sara`"Only a little bit, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A113`); appendText; 
   Sara`"But it was fun. I was happy you were so 
serious about it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I got a little bit embarrassed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow, watching Sara struggle with something 
when she was used to always having her way, 
well, it was kind of fun.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had taught her how to swim correctly, but I 
did have an urge to be a bit of a bully about 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I never thought that she would come out 
and say 'Thank you'...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A114`); appendText; 
   Sara`"I really mean it. Thanks, Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y-yeah. But don't let it go to your head, 
because you can't really call what you were 
doing swimming."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was embarrassed, and reflexively went into 
mean mode.`;
   waitForClick; clearText; marker; sound(`S5A115`); appendText; 
   Sara`"I know. If we have another chance, I hope 
you'll teach me again."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S-sure."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A116`); appendText; 
   Sara`"Next time, I'll really learn to swim."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. You just need a little more practice."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A117`); appendText; 
   Sara`"Teach me again. Nin! Nin! Ninja!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A, ha, ha. Sure."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A118`); appendText; 
   Sara`"Somehow, I'm tired out..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she spoke, Sara took the pendant and put 
it on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she took it in her hand and stared at it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A119`); appendText; 
   Sara`"I'll bet, if my brother was around, it would 
be kinda like this..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara mumbled it, sounding lonely.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your brother?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A120`); appendText; 
   Sara`"Yes. I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A121`); appendText; 
   Sara`"I had an older brother..."`;
   waitForClick; clearText; marker; sound(`S5A122`); appendText; 
   Sara`"He was fun, strong and I adored him..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A123`); appendText; 
   Sara`"But when we were little, we got separated..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A124`); appendText; 
   Sara`"But he promised me..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Promised you?"`;
   waitForClick; clearText; marker; sound(`S5A125`); appendText; 
   Sara`"Yeah, he promised."`;
   waitForClick; clearText; marker; sound(`S5A126`); appendText; 
   Sara`"He promised that he would come get me no 
matter what..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is that right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A127`); appendText; 
   Sara`"Yup..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A128`); appendText; 
   Sara`"So...I'm waiting for him."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A129`); appendText; 
   Sara`"Waiting for him to come save me...always..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's words, brought back a vision I had 
seen. `;
   waitForClick; clearText; 
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
   marker; appendText; sound(`S3B105`); appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`Yeah, I promise.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3B106`); appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`To wait like a good girl.
`;
   appendText; delay(0); 
   Narr`          Until you come for me...`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3B107`); appendText; delay(0); 
   Narr`        `;
   nextPage(00); 
   Narr`I'll wait...like a good girl...`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3B108`); appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`I'll wait....forever...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I desperately tried to shake off the vision...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The next morning I overslept.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I thought I might be in trouble with 
everyone...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But it seemed like I wasn't the only one.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The late start pushed our breakfast time back 
later than always.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG21B1`, transition: 26 });
hideTextbox();
AVL_Mode();
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`8:37`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We wanted a change of pace, to do something 
fun, so we spread out a blanket in the park's 
rest area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The blanket was from a shop on the same floor. 
It had LeMU's Myumyun label printed on it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora couldn't eat, but she sat with us, 
smiling just the same.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if drawn by the scent, Tsugumi appeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if she didn't notice or didn't care, 
Tsugumi parked herself on Myumyun's face. 
She started munching a sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, Takeshi started complaining, 
but Tsugumi just ignored him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and Tsugumi didn't look at each other.
It seemed like they were ignoring each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently they still weren't getting along.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But everybody tried to make the best of it, 
eating, chatting and having fun.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `YU02BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A075`); appendText; 
   Sara`"Rock, paper, scissors!"`;
   waitForClick; clearText; marker; sound(`Y5A076`); appendText; 
   Sara`"Ready go!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I lost again!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A077`); appendText; 
   You`"Kid, you're terrible at this. What is that? 
Sixteen losses in a row?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Weird..."`;
   waitForClick; clearText; marker; sound(`Y5A078`); appendText; 
   You`"You're too nice. You have to just throw out 
what you feel - rock, paper or scissors."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A079`); appendText; 
   Sara`"He's the gullible type." `;
   waitForClick; clearText; marker; appendText; 
   Kid`"I am not. I'm trying to win."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A080`); appendText; 
   You`"Ready go!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Dang it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just kept losing.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA07ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A081`); appendText; 
   You`"Could be that with your amnesia your ability 
to make decisions isn't so good right now."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A082`); appendText; 
   You`"Don't get to caught up with the trivial 
things that you can't control."`;
   waitForClick; clearText; marker; sound(`Y5A083`); appendText; 
   You`"You need to be strong. Make up your own mind. 
Or you'll just end up following everybody else."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A084`); appendText; 
   You`"That being as it is..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A085`); appendText; 
   Sara`"Time for the LOSER'S PENALTY!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU02BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A086`); appendText; 
   You`"Hand over your sandwich."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Silently, I held out my sandwich.`;
   waitForClick; clearText; marker; sound(`Y5A087`); appendText; 
   Sara`"All righty!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She squeezed a ton of mustard on to my 
sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The penalty was mustard. And my sandwich was 
already drenched in the stuff.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mouth felt like it was on fire before I 
even took a bite.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Maybe thanks to that silly exchange, I was 
able to get through the whole thing without 
thinking about it too much.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, someone cut across my field of 
vision.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was walking toward Takeshi. She 
extended her hand.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A088`); appendText; 
   Takeshi`"Huh? What's with the hand?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`Y5A089`); appendText; 
   Takeshi`"You're like a dog. Shake girl."`;
   waitForClick; clearText; marker; sound(`Y5A090`); appendText; 
   Takeshi`"And you'll probably say 'don't make fun of 
me!'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A091`); appendText; 
   Tsugumi`"You're really dumb, you know that?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y5A092`); appendText; 
   Sora`"Are you trying to say that you want another 
helping?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi nodded at Sora's extra explanation. `;
   waitForClick; clearText; marker; appendText; 
   Narr`She had already wolfed down her first one.`;
   waitForClick; clearText; marker; sound(`Y5A093`); appendText; 
   Takeshi`"Hey...you've gotta lot of nerve...you only 
show your face at meal time and now you're 
demanding seconds..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A094`); appendText; 
   Takeshi`"Well, I suppose..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A095`); appendText; 
   Tsugumi`"So do you have more or not?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A096`); appendText; 
   Takeshi`"I do. I thought you might want more so 
I made a SPECIAL one for you."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Special?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a bad feeling about the whole thing.`;
   waitForClick; clearText; marker; sound(`Y5A097`); appendText; 
   Takeshi`"Eat this. And no leftovers."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took the sandwich without saying 
anything.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi stared at Tsugumi as she took the wrap 
off of the sandwich.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A098`); appendText; 
   Tsugumi`"...What?"`;
   waitForClick; clearText; marker; sound(`Y5A099`); appendText; 
   Takeshi`"Nothing. It's just that you're so beautiful. 
I can't take my eyes off of you even when 
you're just removing a sandwich wrapper..."`;
   waitForClick; clearText; marker; sound(`Y5A100`); appendText; 
   Tsugumi`"You're stupidity is terminal."`;
   waitForClick; clearText; marker; sound(`Y5A101`); appendText; 
   Tsugumi`"Maybe if you died 50 times it would help."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought Takeshi would get angry.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he was just grinning as he watched Tsugumi 
start in on her sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was definitely not right here. 
I sucked in my breath and watched.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi bit into the sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Munch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chomp. Chew.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A102`); appendText; 
   Tsugumi`"Hmmm?"`;
   waitForClick; clearText; marker; sound(`Y5A103`); appendText; 
   Takeshi`"Hee, heee."`;
   waitForClick; clearText; marker; sound(`Y5A104`); appendText; 
   Takeshi`"Fwaaa, ha, ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"..."`;
   waitForClick; clearText; marker; sound(`Y5A105`); appendText; 
   Takeshi`"It's got quite a flavor, huh? That 
sandwich...ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi laughed so hard he cried.`;
   waitForClick; clearText; marker; sound(`Y5A106`); appendText; 
   Takeshi`"It's packed with mustard, Tabasco, pepper, 
sage, nutmeg, cinnamon, mint and a dose 
of curry powder..."`;
   waitForClick; clearText; marker; sound(`Y5A107`); appendText; 
   Takeshi`"For good measure I added a dose of 
mayonnaise, ketchup, sugar, salt, soy sauce, 
vinegar and vanilla..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A108`); appendText; 
   Takeshi`"And...what else? Oh, I forget..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A109`); appendText; 
   Takeshi`"Anyway, I threw in every ingredient and spice 
that I could find. It's my secret 34 
ingredient sauce."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"..."`;
   waitForClick; clearText; marker; sound(`Y5A110`); appendText; 
   You`"H-hey! That's just too cruel!"`;
   waitForClick; clearText; marker; sound(`Y5A111`); appendText; 
   Sara`"Yeah...!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's going too far, Takeshi!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A112`); appendText; 
   Takeshi`"Shut up! I'm the cook here."`;
   waitForClick; clearText; marker; sound(`Y5A113`); appendText; 
   Sora`"Tsugumi...I highly recommend inducing 
vomiting immediately...!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y5A114`); appendText; 
   Sora`"Get water quickly! N-no...we'll need medicine 
first...!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A115`); appendText; 
   Takeshi`"She'll be fine. She'll get the runs, 
but she won't die."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's not something you should do to a girl."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went to grab Takeshi with my left hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A116`); appendText; 
   Tsugumi`"Wait. I'm fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi mumbled this, stopping us.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A117`); appendText; 
   Takeshi`"Huh, well aren't you tough!"`;
   waitForClick; clearText; marker; sound(`Y5A118`); appendText; 
   Tsugumi`"I'm perfectly fine."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A119`); appendText; 
   Takeshi`"But it still tastes terrible, right? Right? 
Tell the truth."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A120`); appendText; 
   Tsugumi`"I'm totally fine..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`Y5A121`); appendText; 
   Tsugumi`"It tastes kind of like pizza."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"..............."`;
   waitForClick; clearText; marker; appendText; 
   Sora`".................."`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What?`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A122`); appendText; 
   Takeshi`"What did you just say? What's it taste like?"`;
   waitForClick; clearText; marker; sound(`Y5A123`); appendText; 
   Tsugumi`"Pizza."`;
   waitForClick; clearText; marker; sound(`Y5A124`); appendText; 
   Takeshi`"Are you serious?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi nodded.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`Y5A125`); appendText; 
   Tsugumi`"Munch, munch..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A126`); appendText; 
   Takeshi`"Hey...let me see that! That can't be!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADM`, x: 128, useAnim: true });
removeFG({ id: 2, useAnim: true });
playSFX({ name: `SE02_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi went to grab the sandwich, but Tsugumi 
was too quick for him. Not only that, Takeshi 
caught his foot and fell to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that instant, Tsugumi polished off the 
sandwich.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A127`); appendText; 
   Tsugumi`"Thanks for the sandwich."`;
   waitForClick; clearText; marker; sound(`Y5A128`); appendText; 
   Tsugumi`"You made it specially for me, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`So the event ended with Tsugumi turning the 
tables on Takeshi.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I ended up cleaning up afterward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I separated the cans and sandwich wrappers and 
put them in garbage bags.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sara helped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said he was going to start getting 
ready for lunch and headed to the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora said she had to do some maintenance on 
LeMMIH and left for the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi disappeared to somewhere unknown.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But something happened when I was picking up 
garbage.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   sound(`T5B003`); appendText; delay(0); 
   Narr`                  Hello there`;
   waitForSound; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `YU07BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A129`); appendText; 
   You`"What? What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nothing..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Did somebody just call out?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU06BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A130`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; sound(`Y5A131`); appendText; 
   Sara`"Nobody said anything."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Really? Must be my imagination..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A132`); appendText; 
   Sara`"I'll bet you're just trying to find a way to 
get out of helping."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm not. It's not that at all."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A133`); appendText; 
   You`"You hearing your mystery voices again?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, I..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A134`); appendText; 
   You`"Please, don't do that again. Get a hold of 
yourself already."`;
   waitForClick; clearText; marker; sound(`Y5A135`); appendText; 
   You`"I know you're tired, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We started picking up garbage again.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We finally finished with the trash, folded the 
blanket and were done cleaning up.`;
   waitForClick; clearText; 
});
hideTextbox();
multifgload2({ id1: 1, id2: 2, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`Y5A136`); appendText; 
   You`"Now we'll just sweep the area."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A137`); appendText; 
   You`"Mayo. Can you do me a favor and get me a 
broom and dustpan? I think they are at 
the kiosk."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A138`); appendText; 
   Sara`"Roger that!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara set out for the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I was just thinking. This must be a nightmare 
for the people that clean this place."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A139`); appendText; 
   You`"It would be if 'people' had to do it."`;
   waitForClick; clearText; marker; sound(`Y5A140`); appendText; 
   You`"But LeMMIH usually uses a cleaning robot that 
automatically cleans the whole complex."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wow."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A141`); appendText; 
   You`"Well, what with the accident and all, I 
imagine the robot is a rusted pile of junk 
metal at the bottom of the ocean right 
about now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'll bet."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
stopBGM();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   sound(`T5B017`); appendText; delay(0); 
   Narr`               Heave ho, heave ho`;
   waitForSound; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(...What?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...I was hearing voices again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A142`); appendText; 
   You`"Thinking about it, I guess that LeMU is just 
one massive pile of scrap metal."`;
   waitForClick; clearText; marker; sound(`Y5A143`); appendText; 
   You`"I suppose it's just of matter of how it's 
destroyed..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A144`); appendText; 
   You`"What? What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Um..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A145`); appendText; 
   You`"You're not...not again?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y5A146`); appendText; 
   You`"Oh...alright. You've done enough. Just go to 
the infirmary or somewhere and rest."`;
   waitForClick; clearText; marker; sound(`Y5A147`); appendText; 
   You`"You've got a serious condition of 
something..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure I'd heard something...`;
   waitForClick; clearText; marker; appendText; 
   Narr`This time, I was sure it wasn't my imagination.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   sound(`T5B019`); appendText; delay(0); 
   Narr`                    `;
   nextPage(00); 
   Narr`Carving.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   appendText; 
   Narr`

`;
   sound(`T5B020`); appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`Chiseling away...`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(See, I really can hear something.)`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   sound(`T5B021`); appendText; delay(0); 
   Narr`     `;
   nextPage(00); 
   Narr`Cutting scars into this stone statue.`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(...Stone statue?)`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked around the four stone statues at the 
edge of the open area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there....`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO19C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Atop the pedestal of a stone statue was a girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was standing there next to the figure as 
if clinging to the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh! It's that girl...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the girl that I had seen and who had 
then vanished on the first day.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, You! Right there!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A148`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look! Over on that statue!"`;
   waitForClick; clearText; marker; sound(`Y5A149`); appendText; 
   You`"What about the statue?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look! That stone statue! There's a girl 
there! See?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A150`); appendText; 
   You`"Huh? I don't see anybody."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Not there! Over there!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, forget it! I'll go call to her!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A151`); appendText; 
   You`"Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sprinted toward the stone statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What could the girl be doing up there?)`;
   waitForClick; clearText; marker; sound(`T5B023`); appendText; 
   //??
   Unk`"Well, it's because..."`;
   waitForClick; clearText; marker; sound(`T5B024`); appendText; 
   //??
   Unk`"I was feeling lonesome."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Lonesome?`;
   waitForClick; clearText; marker; sound(`T5B025`); appendText; 
   //??
   Unk`"And anyway, I was..."`;
   waitForClick; clearText; marker; sound(`T5B026`); appendText; 
   //??
   Unk`"...feeling sad..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sad?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What is she talking about?)`;
   waitForClick; clearText; marker; sound(`T5B043`); appendText; 
   //??
   Unk`"And next..."`;
   waitForClick; clearText; marker; sound(`T5B044`); appendText; 
   //??
   Unk`"Uh oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then the girl lost her balance, falling 
from her awkward place on the pedestal.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO19D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"L...look out!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran toward her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water caught on my feet and sprayed 
everywhere as I ran all out to where she was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Will I make it?)`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I closed my eyes and mustered all of my power 
and sprinted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I threw out my free left hand to where the 
girl would be falling to catch her.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't feel anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought maybe I hadn't reached her in time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scared, I opened my eyes.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 0 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(...What?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no one in my arms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or even around me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the water sloshing about gently around me.`;
   waitForClick; clearText; marker; sound(`Y5A152`); appendText; 
   You`"Hey, are you alright? It looks like you took 
a pretty nasty spill..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked above me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course there was no one on the pedestal 
supporting the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without saying anything, I got up and went 
behind the statue.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05F`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There were scratches in the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were deep notches that looked like they 
had been carved there by something hard and 
sharp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were the shape of people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Really simple looking like stick people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the end of each stick was a little round 
face...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were six in all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking closer, I saw that next to the people 
figures were two carvings of animals that 
I'd never seen.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked up at the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The statue was pointing diagonal and 
up...toward the east.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A153`); appendText; 
   Sara`"Hey, what are you two doing?"`;
   waitForClick; clearText; marker; sound(`Y5A154`); appendText; 
   You`"That's a good question..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ignored them and gently touched the carvings 
on the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without thinking I blurted out - `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Watch your step, okay?"`;
   waitForClick; clearText; 
});
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   sound(`T5B048`); appendText; delay(0); 
   Narr`                      `;
   nextPage(00); 
   Narr`Okay`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That answer could have been my imagination 
that time...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Time passed...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We all split up, roamed around freely doing 
what we wanted to do.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Some wandered the complex, some tried to open 
up communications with the outside, some tried 
to think of ways to escape...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But no one gave up and everyone was working on 
ways to get out of our difficult situation.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But it all was it vain. We made no 
breakthroughs...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The evening of the fifth rolled around.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG26A3L`, transition: 26 });
hideTextbox();
AVL_Mode();
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`16:22`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wandered aimlessly around LeMU by myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Honestly, I had not been able to forget what 
Sara had said to me the day before, or more 
accurately that morning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't seem to clear my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At breakfast, Sara was her same old self...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that a little walk might make for a 
change of mood...`;
   waitForClick; clearText; 
});
bgload({ name: `BG23A1`, transition: 20 });
bgload({ name: `BG24A1`, transition: 20 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next thing that I knew, I was heading for 
the Cosmic Whale...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the EI elevator.`;
   waitForClick; clearText; 
});
bgload({ name: `BG24A2`, transition: 20 });
playSFX({ name: `SE00_00`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG23B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I rode down to the third floor that was 
flooded with water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no guarantee that Sara would be 
there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned my head, inspecting the area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...It was just then that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw 'her' again!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw her small figure cutting across the 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was that girl!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I chased after her.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3L`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her skirt shook back and forth as she walked 
further and further away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was almost as if she were trying to get 
away from me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! Wait a minute!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She might not have heard me. She didn't show 
any sign of stopping.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what it was all about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This girl that kept appearing out of nowhere 
and then disappearing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This girl that didn't register on LeMMIH's 
bio scan.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, she had registered once...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`'Life readings: 7'`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But the more I thought about it, the stranger 
everything seemed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She only appeared in front of me and we hardly 
communicated...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Whatever. I knew thinking about it wouldn't 
help.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was something that I could solve by asking 
her directly.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She headed into the Cosmic Whale Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed in soon after her.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG05A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't see her anywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Instead, I saw Sara sitting in the same place 
we had sat earlier, on the whale.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was singing softly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A130`); appendText; 
   Sara`"Moon sprite shouldering a long bow."`;
   waitForSound; clearText; marker; sound(`S5A131`); appendText; 
   Sara`"Waiting inside a dream."`;
   waitForSound; clearText; marker; sound(`S5A132`); appendText; 
   Sara`"Tonight a story by moonlight."`;
   waitForSound; clearText; marker; sound(`S5A133`); appendText; 
   Sara`"Hoping the wait will be short."`;
   waitForSound; clearText; marker; sound(`S5A134`); appendText; 
   Sara`"Sleeping curled and snug."`;
   waitForSound; clearText; marker; sound(`S5A135`); appendText; 
   Sara`"Sleeping in mother's arms."`;
   waitForSound; clearText; marker; appendText; 
   Narr`Her voice echoed quietly as if it were seeping 
into the night sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow it sounded faintly sad and lonely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't make myself call out to Sara...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`My eyes opened to the jarring sound of metal 
screaming under strain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if it was because of my broken 
arm, or the swimming with Sara...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I felt sluggish and feverish, so I took 
some medicine and went to bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Vibrations shook through LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder if something happened."`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`By the time I had gotten out of the infirmary, 
the shaking had stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that if I went to the Security 
Office I might learn what happened.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"Tsugumi, what happened?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A136`); appendText; 
   Tsugumi`"I don't know. I just got here myself."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said it coolly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then Sora appeared in the room.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A137`); appendText; 
   Sora`"So you two are here."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora, did something happen?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A138`); appendText; 
   Sora`"Yes. Water breached the Cosmic Whale Room..." `;
   waitForClick; clearText; marker; sound(`S5A139`); appendText; 
   Tsugumi`"Water breached it?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A140`); appendText; 
   Sora`"Yes. The room's wall collapsed under the 
water pressure and started flooding."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are we...alright?"`;
   waitForClick; clearText; marker; sound(`S5A141`); appendText; 
   Sora`"The doors to the Cosmic Whale have been 
sealed so there will be no effect on other 
areas."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about everyone else?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A142`); appendText; 
   Sora`"You and Takeshi are in the Control Room."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You and Takeshi...what about Sara?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A143`); appendText; 
   Sora`"Sara...her last confirmed location is in a 
corridor near the Cosmic Whale."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 128, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Corridor?"`;
   waitForClick; clearText; marker; sound(`S5A144`); appendText; 
   Sora`"Sensors in that area are not functioning at 
full capacity...so I have not been able to 
verify this."`;
   waitForClick; clearText; marker; sound(`S5A145`); appendText; 
   Sora`"Presently it is completely cut off."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about Sara?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A146`); appendText; 
   Sora`"I am unable to confirmed her location 
anywhere else in LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No way! Then she was in that room!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I couldn't stand staying in that room and ran 
outside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi followed on my heels.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
bgload({ name: `BG23B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi and I went down to the area housing 
the Cosmic Whale Room.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora, can you open the doors to the room?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `SO05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A147`); appendText; 
   Sora`"That is impossible."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A148`); appendText; 
   Sora`"I am sorry..... If I open these doors down, 
this sector will flood as well."`;
   waitForClick; clearText; marker; sound(`S5A149`); appendText; 
   Sora`"If the Generator Room floods, then we will be 
powerless. I cannot do that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about Sara? Sara!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A150`); appendText; 
   Tsugumi`"Calm down."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A151`); appendText; 
   Tsugumi`"Sora, are the emergency corridors around here 
still functioning? Is there anyway to get to 
the room through them?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A152`); appendText; 
   Sora`"I will check..... Yes. There is a corridor 
directly above the Cosmic Whale."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A153`); appendText; 
   Sora`"However, it is not possible to enter Cosmic 
Whale from there. That area is completely 
flooded."`;
   waitForClick; clearText; marker; sound(`S5A154`); appendText; 
   Tsugumi`"But we could enter it by diving, right?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S5A155`); appendText; 
   Sora`"Yes, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'll go. We've got to save Sara!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU07ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A156`); appendText; 
   Tsugumi`"With that broken arm? What're you gonna do?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"B-but..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A157`); appendText; 
   Tsugumi`"You'll start drowning and in the end I'll 
have to go save you, too."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A158`); appendText; 
   Tsugumi`"I'll go."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"But Tsugumi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A159`); appendText; 
   Tsugumi`"You're injured. So keep quiet."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A160`); appendText; 
   Tsugumi`"Sora, where is the nearest entrance to a 
corridor that'll get me there?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S5A161`); appendText; 
   Sora`"Use the connecting staircase out of here and 
to the left."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi started running before Sara was done 
speaking.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1L`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I chased after Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi, why...?"`;
   waitForClick; clearText; marker; sound(`S5A162`); appendText; 
   Tsugumi`"...There's no other choice."`;
   waitForClick; clearText; marker; sound(`S5A163`); appendText; 
   Tsugumi`"We're in this...together."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi sprinted the emergency stairs and 
climbed to the emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed right behind her.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I got to the corridor, Tsugumi was 
running for the Cosmic Whale Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly ran after her.`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A1L`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi had turned the corner, had already 
opened the hatch to the Whale Room and was 
peering in.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi! Wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi glanced at me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S5A164`); appendText; 
   Tsugumi`"Wait here."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_05`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, Tsugumi leaped through hatch.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora! Is Tsugumi okay?"`;
   waitForClick; clearText; marker; sound(`S5A165`); appendText; 
   Sora`"I don't know. Now we can only trust and wait 
for her."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Sora's voice echoed around me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was speaking through a different set of 
emergency speakers and her voice crackled and 
mixed with static.`;
   waitForClick; clearText; marker; sound(`S5A166`); appendText; 
   Sora`"You and Takeshi said that they will wait for 
you in the infirmary."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked in the emergency hatch again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside, the hatch was brimming with cold 
water. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Frustrated and feeling powerless because 
I could only wait, I tried to be patient.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi, please...find Sara..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Time passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It might not have really been that long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But at that time it felt like an eternity 
to me.`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
bgload({ name: `EV_SA08A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi came bursting out of the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On her back she was carrying Sara...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S-Sara!"`;
   waitForClick; clearText; marker; sound(`S5A167`); appendText; 
   Tsugumi`"Haaaaa.*Pant* Let's get her out of the water."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I forgot the pain in my arm and yanked Sara up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was like ice - cold and hard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In her firmly clenched fist was the pendant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi put her hand on the back of her neck.`;
   waitForClick; clearText; marker; sound(`S5A168`); appendText; 
   Tsugumi`"There's...no pulse."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No! Sara..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It can't be!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara! Sara! Wake up! Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook Sara's cold body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi tried to calm me down and spoke.`;
   waitForClick; clearText; marker; sound(`S5A169`); appendText; 
   Tsugumi`"Anyway, let's get her to the infirmary."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We carried her to the infirmary and lay her 
on an examination table.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi immediately started giving her a heart 
massage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and You were fiddling with the 
machines around the examination table 
trying to learn more about Sara's status.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi got out the defibrillator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A beep signaled that they were charged and 
Takeshi placed two pads on Sara's chest.`;
   waitForClick; clearText; 
});
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Whaap!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's body jumped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi put her hand on Sara neck and shook 
her head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She went right back to massaging her heart.`;
   waitForClick; clearText; marker; sound(`S5A170`); appendText; 
   Takeshi`"Damn. One more time."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The beep echoed again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then the electric pulse again. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's face was drained of color and her lips 
were blue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her body was stiff and unresponsive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was watch the three of them 
busily work to save her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing in the drawers of memory 
accessible to me, telling me how to act in 
this situation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Images of time I had spent with Sara until now 
flashed through my mind and the voices in the 
room barely reached me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally...Tsugumi relaxed her hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With a look of grief she moved away from Sara. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi also put the defibrillator back on the 
table. `;
   waitForClick; clearText; marker; sound(`S5A171`); appendText; 
   You`"No..."`;
   waitForClick; clearText; marker; sound(`S5A172`); appendText; 
   Takeshi`"Damn...why..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What...happened?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, why are you all stopping?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey. Why do you all have those looks on 
your faces?"`;
   waitForClick; clearText; marker; sound(`S5A173`); appendText; 
   You`"....Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It can't...be!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara! Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara! Wake up! Wake up! Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started trying to copy Tsugumi's heart 
massage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The three of them watched with sad looks on 
their faces.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why...why do you all want to give up?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara isn't going to die! She can't die here!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I continued to pump her chest frantically.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA01A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA03A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sara! Open your eyes!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA11B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Open your eyes!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA09A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S5A174`); appendText; 
   You`"Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You put her hand on my shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I shook her hand off and continued pushing 
on Sara's chest.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA05A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Don't die!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Open your eyes!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Saraaaaa!"`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`


`;
   sound(`S5A175`); appendText; delay(0); 
   Narr`              Why do you care now?`;
   waitForSound; 
   Narr`
`;
   sound(`S5A176`); appendText; delay(0); 
   Narr`    You were the one that ran away alone...`;
   waitForSound; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard a voice.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, I didn't run away!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wanted to help you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put more power into the hand I was using to 
push on her chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her ribs bent under the strain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I kept pumping.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I told you, Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara! I told you I would come...to help you!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I told you...I'd come to help you, didn't I?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I prayed for Sara's heart to start beating!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said you'd wait like a good girl..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said you'd wait, didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed a little harder.`;
   waitForClick; clearText; 
});
stopBGM();
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Cough.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A little water came out of Sara's mouth.`;
   waitForClick; clearText; marker; sound(`S5A177`); appendText; 
   Sara`"Cough..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She started breathing faintly and more water 
came out of her mouth.`;
   waitForClick; clearText; marker; sound(`S5A178`); appendText; 
   Sara`"Cough, cough..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara! Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook Sara desperately.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA09B`, transition: 0 });
playBGM({ num: 19, volume: 94 });
showTextbox();
text(() => {
   marker; sound(`S5A179`); appendText; 
   Sara`"Ugh....ooooooh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's eyes opened slightly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, Sara!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That instant the tension in the atmosphere of 
the infirmary eased.`;
   waitForClick; clearText; marker; sound(`S5A180`); appendText; 
   Sara`"Oh...uh...I..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, thank goodness...Sara...Sara..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
stopBGM();
g_b3 = 0;
jump(`SS6A`);
