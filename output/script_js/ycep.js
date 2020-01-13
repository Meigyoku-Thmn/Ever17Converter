removeBG({ mode: WHITE, transition: 0 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setSceneTitle({ index: 125 });
l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   appendText; delay(0); 
   Narr`             `;
   nextPage(00); 
   Narr`——May 7, 2034 (Sun)`;
   nextPage(01); waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`Time——11:17 a.m.`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimOverlay();
playBGM({ num: 18, volume: 100 });
monoColorOverlay({ interval: 0, color: BLACK });
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`'——Takeshi Kuranari——'`;
   nextPage(01); waitForClick; 
});
setKomoreType(0);
showKomoreAnim();
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
playSFX({ name: `SE09_01L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
setDialogBoxColor(GREEN);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was in the center of a world of blue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Headed back to the mainland...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nobody on the boat besides us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Me, Hokuto, Tsugumi, Yubiseiharukana, Sora, 
Coco, Kaburaki, Chami, Pipi......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Oh, and two girls called 
Yubisei'aki'kana Tanaka and Sara Matsunaga.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Altogether nine people and two animals.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slipped a short distance away from 
everyone, and leaned over the deck 
railing to look out at the expanse of ocean 
before me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The May sun sparkled on the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Above, high above, stretched a clear
blue sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fresh, new sky looked so glossy and vivid 
that it might spill down to earth at any 
moment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was all that was reflected in my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The straight line of the horizon stretched 
into the distance, dividing the sea from the 
heavens.`;
   waitForClick; clearText; marker; sound(`EOP000`); appendText; 
   Takeshi`"So tranquil......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I murmured to myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A solitary seagull traced a gentle arc in the 
sky as the wind carried it away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wind, full of the smell of the ocean, 
gently blew by me.`;
   waitForClick; clearText; marker; sound(`EOP001`); appendText; 
   Takeshi`"So peaceful..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt as if I were dreaming...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything that I saw in the scene before me 
was exactly as it had been six days earlier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Six days earlier......`;
   waitForClick; clearText; marker; appendText; 
   Narr`For me, it had only been six days.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not even a week had passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had got separated from my friends that day...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And ended up waiting by myself for an 
elevator...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...after surviving for six days, I had been 
sucked 17 years into the future......`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `HO02ADL`, name2: `SA09ADL`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP000`); appendText; 
   Sara`"Hey, Dad! Dadddy!"`;
   waitForClick; clearText; marker; sound(`CEP001`); appendText; 
   Hokuto`"Daaaad! Dad!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I found out that I had a 16 year old daughter 
and son...`;
   waitForClick; clearText; marker; appendText; 
   Narr`—It was a dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Yeah, that's right, I must be dreaming!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(If I'm not dreaming, there's no way this 
could be happening!)`;
   waitForClick; clearText; marker; sound(`CEP002`); appendText; 
   Sara`"Hey! Daaaad! Listen!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl called Sara pulled up close to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl was wearing a high-school uniform, 
I'd never her seen before. She suddenly 
pulled up close and pressed her cheek against 
my arm.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADL`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP003`); appendText; 
   Sara`"Hey, look! Look at this..."`;
   waitForClick; clearText; marker; sound(`CEP004`); appendText; 
   Sara`"You know? I've been watching you ever since 
I was a little, baby girl."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara stuck out a pendant with a mirror 
attached to it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the mirror side, there was nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`CEP005`); appendText; 
   Takeshi`"Oh, really..."`;
   waitForClick; clearText; marker; sound(`CEP006`); appendText; 
   Takeshi`"I don't really understand, but that's okay, 
daughter of mine!"`;
   waitForClick; clearText; marker; sound(`CEP007`); appendText; 
   Takeshi`"I can't believe how tall you've gotten!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADL`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying this I stroked her hair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Since I had come this far, I decided there 
was no reason to hold back. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Besides, all of this was a dream...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And if I had a daughter this cute, what did 
it matter anyway?`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no reason to resist the whole 
situation.... And as I was thinking that...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO03ADL`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP008`); appendText; 
   Hokuto`"Hey! Dad, no fair!"`;
   waitForClick; clearText; marker; sound(`CEP009`); appendText; 
   Hokuto`"And you kept telling me 'Don't call me dad!'"`;
   waitForClick; clearText; marker; sound(`CEP010`); appendText; 
   Hokuto`"How come you act all dad-like to Sara!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADL`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP011`); appendText; 
   Sara`"Hey, Dad? Daaaaad?"`;
   waitForClick; clearText; marker; sound(`CEP012`); appendText; 
   Sara`"I want to go to Ninja Town for fun someday 
soon."`;
   waitForClick; clearText; marker; sound(`CEP013`); appendText; 
   Takeshi`"Ninja Town, eh....?"`;
   waitForClick; clearText; marker; sound(`CEP014`); appendText; 
   Takeshi`"Why not? Sounds good to me."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `HO04ADL`, name2: `SA02ADL`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP015`); appendText; 
   Hokuto`"Hey! Stop ignoring me!"`;
   waitForClick; clearText; marker; sound(`CEP016`); appendText; 
   Hokuto`"How come you listen to everything Sara 
says!!?"`;
   waitForClick; clearText; marker; sound(`CEP017`); appendText; 
   Hokuto`"Why don't you listen to a thing I say?"`;
   waitForClick; clearText; marker; sound(`CEP018`); appendText; 
   Hokuto`"Well Dad? Why not?"`;
   waitForClick; clearText; marker; sound(`CEP019`); appendText; 
   Takeshi`"...I'm not ignoring you."`;
   waitForClick; clearText; marker; sound(`CEP020`); appendText; 
   Takeshi`"I just don't want to answer those kinds of 
questions..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO03ADL`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP021`); appendText; 
   Hokuto`"What do you mean, 'those kind of questions?'"`;
   waitForClick; clearText; marker; sound(`CEP022`); appendText; 
   Takeshi`"Those kind."`;
   waitForClick; clearText; marker; sound(`CEP023`); appendText; 
   Takeshi`"I don't answer meaningless questions."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgloadCrop({ name: `BG10A1`, transition: 26, x: 800, y: 125, hx: -400, hy: 300 });
setDialogBoxColor(GRAY);
closeKomoreAnim();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`'——Tsugumi Komachi——'`;
   nextPage(01); waitForClick; 
});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`CEP023`); appendText; 
   Takeshi`"I don't answer meaningless questions."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear his words coming from a 
distance, the same words I used to say 17 
years ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In order to protect myself from the strong, 
May sunshine, I had stayed inside the boat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see the three of them through the 
window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was on the deck over by the railing, 
talking to the two kids.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I don't answer meaningless questions.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's why I always kept quiet whenever he 
had asked me something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was so much I wanted to talk about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to tell him about every single day 
that had passed these long 17 years.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But for the moment...`;
   waitForClick; clearText; marker; appendText; 
   Narr`For the moment, watching him innocently 
playing with the children...was... enough for 
me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything that had happened up until that 
point was meaningless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was there...right in front of me...and the 
two children were there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing more I could have hoped for`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had found happiness - I was immersed in it, 
drowning in it, intoxicated by it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was truly how I felt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to me that all of the days filled 
with struggle and sadness, had been for that 
day, that moment...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokuto and Sara were on both sides of him, 
and even when he tried to throw them off, 
they clung to him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I absently petted Chami, who was riding on my 
shoulder, as I watched the scene before me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Him—Takeshi Kuranari`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgload({ name: `EV_TU16B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; sound(`C7A152`); appendText; 
   Takeshi`"So live!"`;
   waitForClick; clearText; marker; sound(`C7A153`); appendText; 
   Takeshi`"As long as you're alive, live!"`;
   waitForClick; clearText; marker; sound(`C7A154`); appendText; 
   Takeshi`"Don't worry..."`;
   waitForClick; clearText; marker; sound(`C7A155`); appendText; 
   Takeshi`"I-"`;
   waitForClick; clearText; marker; sound(`C7A156`); appendText; 
   Takeshi`"I'm not going to die."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgloadCrop({ name: `BG10A1`, transition: 26, x: 800, y: 125, hx: -400, hy: 300 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And after saying that, he jumped from our 
'taxi,' that stupid man.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stupid, man...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...he had kept his promise.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So there was something I had to tell him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Going outside...wrapped in my '100 percent UV 
protective clothing,' I...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
setKomoreType(0);
showKomoreAnim();
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I walked over to where he was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason my legs were shaking and my 
heart was beating so hard it felt like it 
would burst.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Being careful that he wouldn't notice the deep 
breaths I was taking, I went and stood in 
front of him.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP024`); appendText; 
   Tsugumi`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`CEP025`); appendText; 
   Tsugumi`"Welcome home."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly, he pulled me close.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Into his strong arms, and solid chest...`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body was wrapped in a heat, which 
threatened to melt me, and for one moment my 
heart had stopped beating.`;
   waitForClick; clearText; marker; sound(`CEP026`); appendText; 
   Takeshi`"Hey, I'm back, Tsugumi."`;
   waitForClick; clearText; marker; sound(`CEP027`); appendText; 
   Takeshi`"Sorry...for taking so long..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He whispered...`;
   waitForClick; clearText; marker; sound(`CEP028`); appendText; 
   Takeshi`"You know..."`;
   waitForClick; clearText; marker; sound(`CEP029`); appendText; 
   Takeshi`"You are as cute as ever..."`;
   waitForClick; clearText; marker; sound(`CEP030`); appendText; 
   Tsugumi`"What? Eh? Really? St-stop it...I..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP031`); appendText; 
   Takeshi`"I can't help it, you're so adorable."`;
   waitForClick; clearText; marker; sound(`CEP032`); appendText; 
   Tsugumi`"What's with you all of the sudden..."`;
   waitForClick; clearText; marker; sound(`CEP033`); appendText; 
   Takeshi`"You're so cute, I could just eat you up."`;
   waitForClick; clearText; marker; sound(`CEP034`); appendText; 
   Tsugumi`"S-stop it...what...are you talking about...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP035`); appendText; 
   Takeshi`"Uh-huh, you sure are charming."`;
   waitForClick; clearText; marker; sound(`CEP036`); appendText; 
   Takeshi`"I suppose that's why they call you 
Chami...it's a good name."`;
   waitForClick; clearText; marker; sound(`CEP037`); appendText; 
   Tsugumi`"...What!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I forcefully pried myself away from Takeshi's 
chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His eyes were leveled at my shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked over to see what he was staring at.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami was busy grooming himself with jerky 
movements using both of his front paws...`;
   waitForClick; clearText; marker; sound(`CEP038`); appendText; 
   Tsugumi`"I can't believe it..."`;
   waitForClick; clearText; marker; sound(`CEP039`); appendText; 
   Tsugumi`"You are such a jerk, Takeshi!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`             `;
   nextPage(00); 
   Narr`'——Sara Matsunaga——'`;
   nextPage(01); waitForClick; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `HO15ADL`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`CEP039`); appendText; 
   Tsugumi`"You are such a jerk, Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mama let out a yell, and turning 
around...went, back inside the boat, tail 
wagging.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She moved unexpectedly, and Chami, who had 
been riding on her shoulder, lost his balance 
and fell to the deck.`;
   waitForClick; clearText; marker; sound(`CEP040`); appendText; 
   Takeshi`"Hey, Tsugumi, what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dad went chasing after mom.`;
   waitForClick; clearText; marker; appendText; 
   Narr`—BAM—Wham!! Bang! Crash! Craaaaaash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A series of frightful sounds ensued.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked over on the other side of the 
window, and could see mama wildly 
brandishing the head of the costume 
she'd been wearing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd had on one of the lemur (fox-monkey) 
costumes, in order to stay out of the sun.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see father's back as he was 
desperately trying to calm mother down...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Hokuto and I looked at each other and started 
laughing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And Chami...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was calmly acting as if nothing had 
happened, and just continued cleaning himself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I leaned down to put Chami in my palm and 
stood back up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mom had already told me about this little 
hamster's ordeal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I thought about how Chami had lived 
through the same circumstances we had, it 
made my heart warm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel the beating of his tiny heart in 
my palm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`*thump* *thump* His heartbeat was tiny, but 
consistent...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It goes without saying, but I thought to 
myself—'Chami is living each moment to the 
fullest.'`;
   waitForClick; clearText; marker; sound(`CEP041`); appendText; 
   Sara`"Hey? What do you think is going to happen to 
us after this?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP042`); appendText; 
   Hokuto`"What do you mean...?"`;
   waitForClick; clearText; marker; sound(`CEP043`); appendText; 
   Sara`"With Leiblich..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP044`); appendText; 
   Sara`"You don't think Leiblich will come after us 
do you...?"`;
   waitForClick; clearText; marker; sound(`CEP045`); appendText; 
   //You'haru'
   You_haru_`"We'll be alright, Sara....Don't worry, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Someone was talking to us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking around, I saw...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `HO03ADM`, name2: `YH01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP046`); appendText; 
   Sara`"Oh. Hi Nakkyu...no wait, uh..."`;
   waitForClick; clearText; marker; sound(`CEP047`); appendText; 
   Sara`"Ms. Tanaka—Yubiseiharukana, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ms. Tanaka nodded slightly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Hokuto asked Ms. Tanaka -`;
   waitForClick; clearText; marker; sound(`CEP048`); appendText; 
   Hokuto`"What do you mean we'll be alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YH11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP049`); appendText; 
   //You'haru'
   You_haru_`"What I mean is..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And saying that, she took out the newspaper 
that had been tucked into her pocket, and 
handed it to my brother.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He opened it up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nestled up against his shoulder and looked 
at the front page headline.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Leiblich Pharmaceutical, responsible for 
outbreak of Tief Blau virus!?'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'Compulsory investigation to begin in a day or 
two.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was learned that the Tief Blau virus (TB), 
which has ravaged the world since 2017,`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`was manufactured by the Frankfurt-based 
pharmaceutical giant Leiblich Pharmaceutical`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`when a whistleblower from the Japanese-German 
joint-managed research facility came forward 
earlier this week.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Spurred by these allegations, the Metropolitan 
Police Department is expected to open a 
criminal investigation`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`that will focus on Leiblich's branch offices 
as well as related research facilities.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Leiblich Pharmaceutical has for some time been 
conducting research and development of TB for 
the purpose of manufacturing a biological 
weapon.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`An outbreak of the virus is rumored to have 
occurred in their research facility around 
May 1, 2017.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Leiblich not only sought to cover up the 
accident, but also continued research into TB 
without the authorization of the Ministry of 
Health under conditions of extreme secrecy, 
according to the whistleblower.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The location of the company's research 
institute has not yet been confirmed.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Numerous other doubts involving Leiblich, 
including charges that it wrongfully detained 
citizens for the purpose of human 
experiments, have been raised and are to be 
investigated.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In order to fully uncover the facts behind 
these allegations and reported incident, the 
Metropolitan Police Department is requesting 
cooperation from authorities in Germany, where 
Leiblich's head office is located.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
dimOff_ac = 0;
closeDimOverlay();
fgload({ id: 2, name: `YH01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP050`); appendText; 
   //You'haru'
   You_haru_`"Leiblich has a lot of influence, even 
political clout at the national level.. so 
laying the groundwork for this was really 
tough, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ms. Tanaka took out an old marker, and 
scratched it against her cheek.`;
   waitForClick; clearText; marker; sound(`CEP051`); appendText; 
   Hokuto`"So...the whistleblower mentioned in this 
article is..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YH12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP052`); appendText; 
   //You'haru'
   You_haru_`"That's right, it was me."`;
   waitForClick; clearText; marker; sound(`CEP053`); appendText; 
   //You'haru'
   You_haru_`"Actually, I leaked this to the police and 
the press quite a long time ago."`;
   waitForClick; clearText; marker; sound(`CEP054`); appendText; 
   //You'haru'
   You_haru_`"But, there was a lot of behind the scenes 
maneuvering..."`;
   waitForClick; clearText; marker; sound(`CEP055`); appendText; 
   //You'haru'
   You_haru_`"So I told them, 'What ever happens, DON'T 
move before May 7th!'"`;
   waitForClick; clearText; marker; sound(`CEP056`); appendText; 
   Sara`"You mean in order to rescue dad, and that 
girl Coco?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YH01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP057`); appendText; 
   //You'haru'
   You_haru_`"That's right."`;
   waitForClick; clearText; marker; sound(`CEP058`); appendText; 
   Sara`"Well...uh..."`;
   waitForClick; clearText; marker; sound(`CEP059`); appendText; 
   Sara`"That means they won't come after us! And 
we're free!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `HO02ADM`, name2: `YH01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP060`); appendText; 
   //You'haru'
   You_haru_`"Yep."`;
   waitForClick; clearText; marker; sound(`CEP061`); appendText; 
   //You'haru'
   You_haru_`"So, there's nothing to worry about, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ms. Tanaka smiled kindly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18ADM`, name2: `YH01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP062`); appendText; 
   //You'aki'
   You_aki_`"'There's nothing to worry about'? How can 
you say that?"`;
   waitForClick; clearText; marker; sound(`CEP063`); appendText; 
   //You'aki'
   You_aki_`"Do you have any clue who you're talking to?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YH13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP064`); appendText; 
   //You'haru'
   You_haru_`"You..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP065`); appendText; 
   //You'aki'
   You_aki_`"Do you have any idea how...how hard a time 
that Mayo's been through...have you stopped 
to think about that, mother!?"`;
   waitForClick; clearText; marker; appendText; 
   //You'haru'
   You_haru_`"........."`;
   waitForClick; clearText; marker; appendText; 
   Hokuto`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP066`); appendText; 
   //You'aki'
   You_aki_`"Come here mom...for a second."`;
   waitForClick; clearText; marker; sound(`CEP067`); appendText; 
   //You'aki'
   You_aki_`"I have something to tell you."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`'——Yubiseiharukana Tanaka——'`;
   nextPage(01); waitForClick; 
});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`CEP067`); appendText; 
   //You'aki'
   You_aki_`"I have something to tell you."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And saying that, my daughter tugged firmly on 
my arm and led me over to a corner of the deck.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP068`); appendText; 
   //You'haru'
   You_haru_`"What do you want to talk about?"`;
   waitForClick; clearText; marker; sound(`CEP069`); appendText; 
   //You'aki'
   You_aki_`"You already know, right?"`;
   waitForClick; clearText; marker; sound(`CEP070`); appendText; 
   //You'aki'
   You_aki_`"In 2025, you started working at LeMU. To 
conduct research into the third eye..."`;
   waitForClick; clearText; marker; sound(`CEP071`); appendText; 
   //You'aki'
   You_aki_`"I mean, in order to save the real Takeshi 
Kuranari, and that girl called Coco..."`;
   waitForClick; clearText; marker; appendText; 
   //You'haru'
   You_haru_`"........."`;
   waitForClick; clearText; marker; sound(`CEP072`); appendText; 
   //You'aki'
   You_aki_`"So, why?"`;
   waitForClick; clearText; marker; sound(`CEP073`); appendText; 
   //You'aki'
   You_aki_`"If you were working at LeMU, you could have 
found a way to rescue Mayo, who's been locked 
up at Leiblich's facility all this time."`;
   waitForClick; clearText; marker; sound(`CEP074`); appendText; 
   //You'aki'
   You_aki_`"You could have reunited Tsugumi and her kids, 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP075`); appendText; 
   //You'aki'
   You_aki_`"So, why didn't..."`;
   waitForClick; clearText; marker; sound(`CEP076`); appendText; 
   //You'haru'
   You_haru_`"Well..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had to be done to save Takeshi, and Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We didn't dare to change history.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because I had made a promise to Blick Winkel 
in 2017...`;
   waitForClick; clearText; marker; sound(`CEP077`); appendText; 
   //You'aki'
   You_aki_`"So...you aren't going to tell me anything, 
are you?"`;
   waitForClick; clearText; marker; sound(`CEP078`); appendText; 
   //You'aki'
   You_aki_`"It's always like this.... You always decide 
everything..."`;
   waitForClick; clearText; marker; sound(`CEP079`); appendText; 
   //You'haru'
   You_haru_`"Even if you couldn't trust me enough to 
explain things before all of this happened..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP080`); appendText; 
   //You'aki'
   You_aki_`"You didn't have to lie to me!"`;
   waitForClick; clearText; marker; sound(`CEP081`); appendText; 
   //You'aki'
   You_aki_`"You've lied to me these 18 years!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Yes, I have...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(And there is nothing I can say to 
apologize...)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP082`); appendText; 
   //You'aki'
   You_aki_`"So, I don't want you to lie to me...or hide 
anything...I want to know everything..."`;
   waitForClick; clearText; marker; sound(`CEP083`); appendText; 
   //You'aki'
   You_aki_`"There are still things you haven't told me 
yet, right?"`;
   waitForClick; clearText; marker; sound(`CEP084`); appendText; 
   //You'aki'
   You_aki_`"Like who my real dad and mom were..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP085`); appendText; 
   //You'aki'
   You_aki_`"Tell, me... please..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
closeKomoreAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't hesitate.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I told her about her father, Yoichi, and 
mother, Yukie...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I told her the truth - all of it.`;
   waitForClick; clearText; 
});
showFilter2();
unSkippableDelay(1);
bgload({ name: `BG34A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`——May 6, 2017`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because Coco was sick, we had all headed to 
the IBF research lab.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While Takeshi, the young Kaburaki and Tsugumi 
were searching around the research facility, 
I stayed behind in the examination room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and the researcher were lying in the 
capsule pods.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The researcher, who was fighting to stay 
conscious as the virus consumed his body, 
told me this - `;
   waitForClick; clearText; marker; sound(`CEP086`); appendText; 
   Researcher`"...You...I never dreamed...that we would meet 
again...in a place like this..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's right, he was my father - Y.T. - Yoichi 
Tanaka.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As he was lying there in agony, he explained 
to me what had happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.................`;
   waitForClick; clearText; marker; appendText; 
   Narr`2000 A.D.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My father was a researcher on the LeMMIH 
development project. One day, by accident, he 
discovered that Leiblich was developing the 
TB Virus.`;
   waitForClick; clearText; marker; appendText; 
   Narr`TB is a potent virus, which has an 
exceedingly high mortality rate, and Leiblich 
was planning to sell it to military buyers 
around the world.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Father, whose sense of justice was stronger 
than anyone I have ever known, appealed to 
the company to stop development of the 
virus immediately.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But of course they refused...That being the 
case, my father made up his mind...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He hacked into the highly protected company 
database, collected evidence, and prepared to 
leak the information to the press.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Leiblich found out before he could make his 
move and put him in a situation he could not 
escape.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They threatened my father, telling him: 
'Should you escape from here, your wife and 
child will probably die...in an 'unfortunate' 
car accident.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`And to my mother, Yukie, Leiblich said...`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Your husband is missing, after a highly 
tragic accident.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When making his rounds on the LeMU premises he 
slipped and fell into the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We are doing everything we can to search the 
surrounding waters, but his remains still 
have not been located.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mother believed them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the summer of my first year.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.......................................`;
   waitForClick; clearText; marker; appendText; 
   Narr`Time passed and it was the year 2017.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My father, who had been maintaining the 
computer system for IBF, was caught up in the 
TB outbreak.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As all of the researchers fled, one-by-one, my 
father stayed in IBF...because he was worried 
about me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My father knew I was working at LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And my father...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Right in front of my eyes...`;
   waitForClick; clearText; marker; appendText; 
   Narr`After enduring one disaster after another and 
gasping in pain...`;
   waitForClick; clearText; marker; appendText; 
   Narr`While clawing at his throat...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He struggled until the end to say...`;
   waitForClick; clearText; marker; sound(`C6A086`); appendText; 
   Researcher`"...My daughter..."`;
   waitForClick; clearText; marker; sound(`C6A087`); appendText; 
   Researcher`"Daughter...take care...of her..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`His last words...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
setKomoreType(0);
showKomoreAnim();
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
fgload({ id: 1, name: `YU13ADL`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   //You'aki'
   You_aki_`"............"`;
   waitForClick; clearText; marker; sound(`CEP087`); appendText; 
   //You'haru'
   You_haru_`"Because of that accident, the TB virus broke 
out, causing terrible suffering all over the 
world..."`;
   waitForClick; clearText; marker; sound(`CEP088`); appendText; 
   //You'haru'
   You_haru_`"But...Leiblich Pharmaceutical, concealed 
everything. The truth about the virus, the 
research facility - everything - was locked away."`;
   waitForClick; clearText; 
});
hideTextbox();
closeKomoreAnim();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And the press only reported that it was 'A 
deadly virus of unknown origin.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even the experts had no idea where the 
disease really came from.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`However, the incubation period was very 
short, so even though the death rate was 
high, in many cases the carrier died before 
infecting others.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`So while the TB virus spread rapidly for a 
time, by 2019, two years after the accident, 
the pace and scale of the disease's 
destruction gradually waned.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But that doesn't mean there weren't victims.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The number of people that the virus killed 
is said to have reached several tens of 
thousands.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One of them was my mother, Yukie.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was 15 years ago, that my mother caught 
TB and it robbed her of her life.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`My sadness, anger and hatred, all came 
together then.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I swore that I would get revenge on 
Leiblich...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I infiltrated LeMU, and at the same time 
started formulating a plan to rescue Takeshi 
and Coco, who were trapped in the research 
facility.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And the person who helped me to do that was 
Ryogo Kaburaki.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We have spent every moment for the last 17 
years preparing for this.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Yes...it was the only thing that I've lived 
for up until now.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`To make Leiblich pay for taking my mother and 
father from me and to save 
my friends Takeshi and Coco.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And in order to do that, we needed to 
discover the third eye - Blick Winkel.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Without his help, there was nothing we could 
do...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`There was no other way that we, who were 
living in this dimension, could go back in 
time...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`.................................`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was how the whole plan had been set in 
motion.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`All toward May 1, 2034.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
setKomoreType(0);
showKomoreAnim();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After finishing my explanation, I let out a 
big sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Biting on the nail of her thumb, my daughter 
looked up at the sky`;
   waitForClick; clearText; marker; sound(`CEP089`); appendText; 
   //You'haru'
   You_haru_`"See, look at that face....I knew you wouldn't 
believe me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She looked at me.`;
   waitForClick; clearText; marker; sound(`CEP090`); appendText; 
   //You'haru'
   You_haru_`"But, then again...who would...?"`;
   waitForClick; clearText; marker; sound(`CEP091`); appendText; 
   //You'haru'
   You_haru_`"But...it doesn't change the fact that it's 
the truth..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out to stroke her hair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stared at me blankly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking just like I did 17 years ago...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Reckless, full of fire, pure - to the point of 
being dangerous - and unable to control her 
emotions.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her innocent eyes...had seen none of the evil 
and corruption in this world.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking into her eyes, I could read 
everything she was thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wasn't mad. She wasn't unhappy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just afraid to accept the truth...she didn't 
know how to handle it...and was scared and 
embarrassed by that fact.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I reached out and held her closely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'There's no need for you to say anything' - I 
thought this quietly to myself.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP092`); appendText; 
   //You'aki'
   You_aki_`"Mom..."`;
   waitForClick; clearText; marker; sound(`CEP093`); appendText; 
   //You'aki'
   You_aki_`"I...understand what you're trying to tell 
me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She whispered this quietly in my ear.`;
   waitForClick; clearText; marker; sound(`CEP094`); appendText; 
   //You'aki'
   You_aki_`"But...there's something I have to know."`;
   waitForClick; clearText; marker; sound(`CEP095`); appendText; 
   //You'haru'
   You_haru_`"What?"`;
   waitForClick; clearText; marker; sound(`CEP096`); appendText; 
   //You'aki'
   You_aki_`"What do I mean to you?"`;
   waitForClick; clearText; marker; sound(`CEP097`); appendText; 
   //You'haru'
   You_haru_`"Ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed without thinking and replied... `;
   waitForClick; clearText; marker; sound(`CEP098`); appendText; 
   //You'haru'
   You_haru_`"You are everything to me."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
fgload({ id: 1, name: `YH02ADL`, x: 320, useAnim: true });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`'——Yubiseiakikana Tanaka——'`;
   nextPage(01); waitForClick; 
});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`CEP098`); appendText; 
   //You'haru'
   You_haru_`"You are everything to me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mom said these words to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had wanted her to tell me, 'you are my 
daughter,' but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, for some reason I didn't bother me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Another voice inside my head murmured.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Shouldn't you be furious?' and 'You should 
slap her across the face'..`;
   waitForClick; clearText; marker; appendText; 
   Narr`But for some reason I couldn't get angry.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I relaxed against my mother, who held me 
tightly, and I could only feel dizzy from her 
warmth...`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of my normal reactions, such as lashing 
out like a wild animal and my sudden mood 
swings...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The warmth of her hug, took all of that away...`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Mom..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`When it came down to it, I still thought of 
her as my mother.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was an instinctive 'itch,' that 
transcended my basic reason....It was beyond 
my ability to control...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, no matter what anyone said, the 
woman in front of me was my mother.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wasn't much of a mother, but to me she 
was the only mother I had.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And that's all there was too it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At that moment it occurred to me? I only 
differed from other people in the way that I 
was born.`;
   waitForClick; clearText; marker; appendText; 
   Narr`..............`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had been told since I was a little girl 
that there are lots of things in this world 
that are hard to believe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In junior high and high school, all of my 
friends loved to talk about all kinds of 
strange things.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Psychic phenomena, supernatural powers, UFOs, 
UMAs, super-ancient civilizations, urban 
myths, curses, fortune-telling, miracles, 
mysteries....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I had dismissed all of these things 
as girlish fantasy...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But something...had now changed slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mean, my existence itself was something 
hard to explain...`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I thought about the fact that I myself 
'this girl called You,' was somewhat of a 
mystic entity...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then ectoplasm, cattle mutilations, Rip Van 
Winkle, The Lemurian Civilization...`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of these seemed like normal, everyday 
things.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even the 'Third Eye'...`;
   waitForClick; clearText; marker; appendText; 
   Narr`................`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And while those thoughts drifted through my 
head, my mother quietly went inside of the 
boat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Left by myself in the corner of the deck, I 
basked in the lingering warmth that remained 
on my skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The boat slowly rocked back and forth as it 
cut through the waves.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smell of the ocean quietly wafted by 
carried by the sea breeze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon....`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP099`); appendText; 
   Hokuto`"Oh, hey, You...you been here all along? I've 
been looking for you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid, Hokuto came walking over to me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP100`); appendText; 
   Hokuto`"Actually, there was something that I wanted 
to ask you..."`;
   waitForClick; clearText; marker; sound(`CEP101`); appendText; 
   //You'aki'
   You_aki_`"Ask me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokuto nodded deeply and said.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `HO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP102`); appendText; 
   Hokuto`"I've been thinking I want to study 
archaeology when I go to college..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
setDialogBoxColor(BLUE);
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`'——Hokuto——'`;
   nextPage(01); waitForClick; 
});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`CEP102`); appendText; 
   Hokuto`"I've been thinking I want to study 
archaeology when I go to college..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I told to You what had been on my mind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP103`); appendText; 
   //You'aki'
   You_aki_`"Eh? Why that again...?"`;
   waitForClick; clearText; marker; sound(`CEP104`); appendText; 
   Hokuto`"Well, because I want to study more about the 
third eye."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Huh!? What are you stupid!? There's no such 
thing as the third eye!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought for sure that she would come back 
with something like that, so I was caught off 
guard by her reply.`;
   waitForClick; clearText; marker; sound(`CEP105`); appendText; 
   //You'aki'
   You_aki_`"And? What did you want to ask me about?"`;
   waitForClick; clearText; marker; sound(`CEP106`); appendText; 
   Hokuto`"Ah, uh, well..."`;
   waitForClick; clearText; marker; sound(`CEP107`); appendText; 
   Hokuto`"I've already made up my mind that I'm going 
to study archaeology, but..."`;
   waitForClick; clearText; marker; sound(`CEP108`); appendText; 
   Hokuto`"Still...I don't really know that much about 
it..."`;
   waitForClick; clearText; marker; sound(`CEP109`); appendText; 
   Hokuto`"Like what kinds of things I should do to 
prepare, or if there are any books you know 
that are good primers on the subject."`;
   waitForClick; clearText; marker; sound(`CEP110`); appendText; 
   Hokuto`"So I was hoping that you could give me some 
advice..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP111`); appendText; 
   //You'aki'
   You_aki_`"Well, I don't know what kind of advice I can 
give."`;
   waitForClick; clearText; marker; sound(`CEP112`); appendText; 
   //You'aki'
   You_aki_`"I only just started college, and I've only 
really taken my 'reqs.' so..."`;
   waitForClick; clearText; marker; sound(`CEP113`); appendText; 
   Hokuto`"'Reqs.?'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP114`); appendText; 
   //You'aki'
   You_aki_`"Required classes."`;
   waitForClick; clearText; marker; sound(`CEP115`); appendText; 
   //You'aki'
   You_aki_`"In order to major in archaeology, you've got 
to be a junior."`;
   waitForClick; clearText; marker; sound(`CEP116`); appendText; 
   Hokuto`"Oh..."`;
   waitForClick; clearText; marker; sound(`CEP117`); appendText; 
   //You'aki'
   You_aki_`"I'm sorry but I really can't tell you 
anything..."`;
   waitForClick; clearText; marker; sound(`CEP118`); appendText; 
   //You'aki'
   You_aki_`"Oh, but maybe there is one thing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP119`); appendText; 
   //You'aki'
   You_aki_`"You should probably study something else."`;
   waitForClick; clearText; marker; sound(`CEP120`); appendText; 
   Hokuto`"Huh? Why?"`;
   waitForClick; clearText; marker; sound(`CEP121`); appendText; 
   //You'aki'
   You_aki_`"Archaeology is WAY more boring than you are 
probably thinking."`;
   waitForClick; clearText; marker; sound(`CEP122`); appendText; 
   //You'aki'
   You_aki_`"It's a lot different than what they show in 
the movies."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP123`); appendText; 
   //You'aki'
   You_aki_`"And besides, you know what?"`;
   waitForClick; clearText; marker; sound(`CEP124`); appendText; 
   //You'aki'
   You_aki_`"If you want to study about the third eye, 
you are better off attacking it from the 
direction of philosophy or psychology."`;
   waitForClick; clearText; marker; sound(`CEP125`); appendText; 
   //You'aki'
   You_aki_`"Besides, archaeology is a subject that 
studies HUMAN history."`;
   waitForClick; clearText; marker; sound(`CEP126`); appendText; 
   Hokuto`"But...it's okay! I've already made up my 
mind!"`;
   waitForClick; clearText; marker; sound(`CEP127`); appendText; 
   Hokuto`"I've been thinking I could approach the 
study of the third eye from angle of human 
history."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP128`); appendText; 
   //You'aki'
   You_aki_`"There you go, being difficult as always."`;
   waitForClick; clearText; marker; sound(`CEP129`); appendText; 
   //You'aki'
   You_aki_`"I think the real reason you want to study 
it, is so that you can be in the same field 
as me."`;
   waitForClick; clearText; marker; sound(`CEP130`); appendText; 
   //You'aki'
   You_aki_`"I mean it's obvious that you like me..."`;
   waitForClick; clearText; marker; sound(`CEP131`); appendText; 
   Hokuto`"Yeah, you're probably right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I told her point-blank how I felt.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And it seemed like my reply caught her 
off-guard.`;
   waitForClick; clearText; marker; sound(`CEP132`); appendText; 
   Hokuto`"Part of me feels like choosing to study 
archaeology was already half-decided by 
destiny... so I don't have a choice."`;
   waitForClick; clearText; marker; sound(`CEP133`); appendText; 
   //You'aki'
   You_aki_`"By destiny?"`;
   waitForClick; clearText; marker; sound(`CEP134`); appendText; 
   Hokuto`"Yeah."`;
   waitForClick; clearText; marker; sound(`CEP135`); appendText; 
   Hokuto`"In another space-time continuum, I'm 
destined to walk that path in the future."`;
   waitForClick; clearText; marker; sound(`CEP136`); appendText; 
   //You'aki'
   You_aki_`"...huh?"`;
   waitForClick; clearText; marker; sound(`CEP137`); appendText; 
   Hokuto`"I don't think you'll understand it, no 
matter how much I explain it anyway."`;
   waitForClick; clearText; marker; sound(`CEP138`); appendText; 
   Hokuto`"But I know what I saw."`;
   waitForClick; clearText; marker; sound(`CEP139`); appendText; 
   Hokuto`"In that future, you and I were going out, 
and..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP140`); appendText; 
   //You'aki'
   You_aki_`"...What!?"`;
   waitForClick; clearText; marker; sound(`CEP141`); appendText; 
   Hokuto`"So I'm pretty sure that in this time, you 
and I are destined to be together as well."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP142`); appendText; 
   //You'aki'
   You_aki_`"H-h-h-hey, wait a second Kid! You're getting 
ahead of yourself here!"`;
   waitForClick; clearText; marker; sound(`CEP143`); appendText; 
   //You'aki'
   You_aki_`"I don't know much about fate but...things 
like that are decided with both people's 
consent. AFTER that happens you start going 
out."`;
   waitForClick; clearText; marker; sound(`CEP144`); appendText; 
   Hokuto`"Yeah...Okay, I'll say it right now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP145`); appendText; 
   //You'aki'
   You_aki_`"N-now!?"`;
   waitForClick; clearText; marker; sound(`CEP146`); appendText; 
   Hokuto`"Yeah..."`;
   waitForClick; clearText; marker; sound(`CEP147`); appendText; 
   Hokuto`"Yubiseiakikana..."`;
   waitForClick; clearText; marker; sound(`CEP148`); appendText; 
   Hokuto`"Would you go out with me?"`;
   waitForClick; clearText; marker; sound(`CEP149`); appendText; 
   Hokuto`"Because, I'm crazy about you."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
setDialogBoxColor(GRAY);
removeFG({ id: 1, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`             `;
   nextPage(00); 
   Narr`'——Ryogo Kaburaki——'`;
   nextPage(01); waitForClick; 
});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Because, I'm crazy about you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was 2017... I was still 15.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was stuck in LeMU, in a total state of 
confusion, with no memory, and had even 
forgotten my name, Ryogo Kaburaki.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was 15 years old —all I wanted at that 
time was stability.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Young as I was, I was overcome with amnesia, 
and even doubts as to whether my existence 
would fade away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the midst of my chaos, it was her innocent 
smile that helped thaw my frozen heart.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I fell for her right away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I had to do was see her smile, that's all 
it took, and my fear disappeared, blown away 
like leaves falling off a tree in autumn.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although I was still uncertain about who I 
was, her uniqueness helped me turn my eyes 
away from the turmoil inside of me to the 
world around me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perhaps it was because of my uncertainty.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suppose that I might have been grasping for 
my identity through the love that I felt for 
her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was an empty shell at that time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Flowing into that void was her simple, pure 
smile, innocence and her total lack of 
artifice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From that point on - for six days - she was in my 
thoughts constantly. I found myself looking 
at her all the time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have the courage to tell her. But it 
was enough for me just to see her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's how fond I was of her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I loved her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco Yagami...`;
   waitForClick; clearText; marker; appendText; 
   Narr`..................................`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then May 6th, the fateful day arrived.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had come down with TB, and when the rescue 
team found me, I had lost consciousness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`By the time I found out that Coco had been 
left behind in the research facility, a few 
days had already passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When You (Yubiseiharukana) told me what had 
happened, I was shocked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And at the same time I thought 'I've got to 
go save her!' I didn't even wait for You to 
finish the rest of her story, I just ran 
outside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You caught up with me, and started telling me 
about things about the third eye, the fourth 
dimension, the past and future, but none of 
it made sense.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"17 years from now, you have to go back to 
LeMU. You'll return as Takeshi Kuranari."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Unless we can trick Blick Winkel, wake him 
up and bring him to our world, we'll never 
save Coco and Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'So please...help me?' —that was what You 
asked of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It took a few more months for me to become 
fully convinced.`;
   waitForClick; clearText; marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I wanted to do was save Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If she'd be alright, I didn't mind the danger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if I was despised, blamed, criticized, 
even ridiculed, none of that mattered to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...just wanted...to see...Coco's smile 
again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, there was Takeshi to consider as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I respected him greatly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'He was brave enough to sacrifice his life to 
save the woman that he loved.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a 15-year-old like me, Takeshi was a role 
model.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swore that I would save Coco and Takeshi, 
no matter what it took.`;
   waitForClick; clearText; marker; appendText; 
   Narr`..................................`;
   waitForClick; clearText; marker; appendText; 
   Narr`17 years later—`;
   waitForClick; clearText; marker; appendText; 
   Narr`For 17 years, You and I had spent every 
minute, every second putting our plan in 
motion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes...I had lived for this day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just six days....Coco and I had only spent 
six days together. `;
   waitForClick; clearText; marker; appendText; 
   Narr`But in those 17 years, not a moment went by 
that I didn't think about her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Because I love her—"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was the only reason I had been able to 
fool everyone.`;
   waitForClick; clearText; marker; sound(`CEP150`); appendText; 
   Coco`"Heeey, Kiddo, Kiddo, Kiddo."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My heart leaped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was calling to me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't turn around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood there frozen, even forgetting to 
breathe.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP151`); appendText; 
   Coco`"Hey! What are you doing here all by 
yourself!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco rapped me on the head, and peeked around 
at my face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP152`); appendText; 
   Coco`"Come on and join everyone! It's no fun by 
yourself, right?"`;
   waitForClick; clearText; marker; sound(`CEP153`); appendText; 
   Kaburaki`"I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP154`); appendText; 
   Coco`"Huh? You're not...worried about something are 
you?"`;
   waitForClick; clearText; marker; appendText; 
   Kaburaki`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP155`); appendText; 
   Coco`"Are you feeling bad that you lied to 
everyone?"`;
   waitForClick; clearText; marker; appendText; 
   Kaburaki`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP156`); appendText; 
   Coco`"You don't have to worry about that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP157`); appendText; 
   Coco`"Besides, if you hadn't been able to trick 
Blick Winkel, Takepyon and me wouldn't be 
here right now."`;
   waitForClick; clearText; marker; sound(`CEP158`); appendText; 
   Coco`"We owe you our lives, right?"`;
   waitForClick; clearText; marker; sound(`CEP159`); appendText; 
   Coco`"You don't have to explain a thing..."`;
   waitForClick; clearText; marker; sound(`CEP160`); appendText; 
   Coco`"We're all grateful to you. Nobody here blames 
you."`;
   waitForClick; clearText; marker; sound(`CEP161`); appendText; 
   Kaburaki`"You really think so?"`;
   waitForClick; clearText; marker; sound(`CEP162`); appendText; 
   Coco`"Of course I do."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP163`); appendText; 
   Coco`"Okay? So, come on!"`;
   waitForClick; clearText; marker; sound(`CEP164`); appendText; 
   Coco`"Everybody's waiting to hear your voice, 
kiddo."`;
   waitForClick; clearText; marker; sound(`CEP165`); appendText; 
   Coco`"Waiting and waiting and waiting..."`;
   waitForClick; clearText; marker; sound(`CEP166`); appendText; 
   Coco`"And after that we're going to celebrate."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was laughing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smile that I had waited 17 years to see 
was shining right in front of me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`            '——Sora Akanegasaki——'`;
   nextPage(01); waitForClick; 
});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The smile that I had waited 17 years to see 
was shining right in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It made me dizzy to look at it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An electronic rhythm pulsed through my 
body - the excessive voltage throwing my logic 
circuits out of order.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a pain that I had experienced before.`;
   waitForClick; clearText; marker; sound(`CEP167`); appendText; 
   Takeshi`"Hey, Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`CEP168`); appendText; 
   Takeshi`"Hey, Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP169`); appendText; 
   Takeshi`"Hey! Are you listening to me?"`;
   waitForClick; clearText; marker; sound(`CEP170`); appendText; 
   Sora`"...Huh?...Um, what were you talking about 
again?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP171`); appendText; 
   Takeshi`"This here...Pipi."`;
   waitForClick; clearText; marker; sound(`CEP172`); appendText; 
   Takeshi`"He stopped moving all of a sudden. I just 
thought maybe you could take a look at him."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi lifted up Pipi, and stuck him out in 
front of me.`;
   waitForClick; clearText; marker; sound(`CEP173`); appendText; 
   Sora`"All of a sudden you say? Any reason you can 
think of...?"`;
   waitForClick; clearText; marker; sound(`CEP174`); appendText; 
   Takeshi`"Uumm, maybe."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP175`); appendText; 
   Takeshi`"Tsugumi? She started thrashing around in the 
cabin, and..."`;
   waitForClick; clearText; marker; sound(`CEP176`); appendText; 
   Takeshi`"I tried to pin her down, but she threw me 
off...."`;
   waitForClick; clearText; marker; sound(`CEP177`); appendText; 
   Takeshi`"And when I went down, this little guy 
happened to be there, and..."`;
   waitForClick; clearText; marker; sound(`CEP178`); appendText; 
   Sora`"I landed right on top of him. Maybe that's 
what could've caused it?"`;
   waitForClick; clearText; marker; sound(`CEP179`); appendText; 
   Takeshi`"Yup. After that, he stopped moving..."`;
   waitForClick; clearText; marker; sound(`CEP180`); appendText; 
   Sora`"Let me take a look."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took Pipi from Takeshi, and started a 
diagnostic on him.`;
   waitForClick; clearText; marker; sound(`CEP181`); appendText; 
   Sora`"That's strange...I don't see anything wrong 
with him."`;
   waitForClick; clearText; marker; sound(`CEP182`); appendText; 
   Sora`"Maybe his battery ran out?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP183`); appendText; 
   Takeshi`"Whew, what a relief."`;
   waitForClick; clearText; marker; sound(`CEP184`); appendText; 
   Takeshi`"If they thought I'd broken him, Coco, You, 
and her daughter would've been furious at me."`;
   waitForClick; clearText; marker; sound(`CEP185`); appendText; 
   Sora`"Well I would've been too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Upset that he hadn't included me, I 
continued...`;
   waitForClick; clearText; marker; sound(`CEP186`); appendText; 
   Sora`"I'm fond of Pipi too, you know."`;
   waitForClick; clearText; marker; sound(`CEP187`); appendText; 
   Sora`"I don't even think 'fond' describes it. You 
might say Pipi and I are connected on a 
deeper level."`;
   waitForClick; clearText; marker; sound(`CEP188`); appendText; 
   Sora`"17 years ago..."`;
   waitForClick; clearText; marker; sound(`CEP189`); appendText; 
   Sora`"If Pipi hadn't picked up my terabyte disk, I 
wouldn't be here right now."`;
   waitForClick; clearText; marker; sound(`CEP190`); appendText; 
   Sora`"And after Pipi got to the surface, 
You...Yubiseiharukana, that is..."`;
   waitForClick; clearText; marker; sound(`CEP191`); appendText; 
   Sora`"Took the data off the disk, and copied it to 
the body you see now..."`;
   waitForClick; clearText; marker; sound(`CEP192`); appendText; 
   Sora`"That is the reason I was able to maintain the 
records of what happened to all of you, 17 
years ago."`;
   waitForClick; clearText; marker; sound(`CEP193`); appendText; 
   Sora`"After that, You took in Pipi...and from that 
time on he's been a member of the Tanaka 
family."`;
   waitForClick; clearText; marker; sound(`CEP194`); appendText; 
   Sora`"In other words, Pipi is an irreplaceable 
part of all of our lives."`;
   waitForClick; clearText; marker; sound(`CEP195`); appendText; 
   Sora`"I thought I'd already told you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP196`); appendText; 
   Takeshi`"Uh, yeah, that's right, now that you mention 
it..."`;
   waitForClick; clearText; marker; sound(`CEP197`); appendText; 
   Takeshi`"But come on, you don't have to get so 
serious about it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP198`); appendText; 
   Takeshi`"Besides, Pipi isn't broken...so what's the 
big deal?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi laughed pleasantly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Ah, I...I can't fight it)`;
   waitForClick; clearText; marker; appendText; 
   Narr`His smile always disarmed me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was as bright as the sun, and powerfully 
magnetic, he could charm me effortlessly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It isn't fair...that smile should be 
outlawed, Takeshi.)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP199`); appendText; 
   Takeshi`"By the way, Sora? Can I ask you something?"`;
   waitForClick; clearText; marker; sound(`CEP200`); appendText; 
   Sora`"W-what is it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked away, and tried desperately to regain 
control of my wildly racing mind, so that he 
would not see through to my true feelings.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP201`); appendText; 
   Takeshi`"I hope you don't think it's rude of me to 
ask this, but..."`;
   waitForClick; clearText; marker; sound(`CEP202`); appendText; 
   Takeshi`"Um...er...uh...?"`;
   waitForClick; clearText; marker; sound(`CEP203`); appendText; 
   Takeshi`"It's about your body."`;
   waitForClick; clearText; marker; sound(`CEP204`); appendText; 
   Sora`"My body?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP205`); appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`CEP206`); appendText; 
   Takeshi`"As far as I can tell, you look totally 
human, your skin..."`;
   waitForClick; clearText; marker; sound(`CEP207`); appendText; 
   Takeshi`"The way you move, your appearance, 
everything, is so natural..."`;
   waitForClick; clearText; marker; sound(`CEP208`); appendText; 
   Sora`"Ha, ha, ha, that isn't rude at all."`;
   waitForClick; clearText; marker; sound(`CEP209`); appendText; 
   Sora`"Actually, that's a compliment, isn't it? 
Thank you."`;
   waitForClick; clearText; marker; sound(`CEP210`); appendText; 
   Sora`"And...was that your question?"`;
   waitForClick; clearText; marker; sound(`CEP211`); appendText; 
   Takeshi`"Uh, no...I mean...I was wondering how your 
body is put together is all..."`;
   waitForClick; clearText; marker; sound(`CEP212`); appendText; 
   Sora`"Is it strange to you?"`;
   waitForClick; clearText; marker; sound(`CEP213`); appendText; 
   Takeshi`"Yeah, a bit."`;
   waitForClick; clearText; marker; sound(`CEP214`); appendText; 
   Takeshi`"And at the same time...I'm happy."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP215`); appendText; 
   Takeshi`"I mean...I can actually touch you now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As he said that, Takeshi put his hand on my 
cheek.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It burned...A lump, hot and boiling, ran from 
my stomach to my brain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My generator was burning too much energy, 
frying my processor...my logic 
circuits...shut down.`;
   waitForClick; clearText; marker; sound(`CEP216`); appendText; 
   Sora`"T-T-T-Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding Pipi firmly to my chest, I grabbed 
onto Takeshi's palm with my free hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Ah...Ah...We're actually touching each 
other...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(We can touch each other...really touch each 
other...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had waited these 17 years for just this 
moment.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP217`); appendText; 
   Takeshi`"W-what's wrong Sora? Have you been drinking 
or something? Your face is all red?"`;
   waitForClick; clearText; marker; sound(`CEP218`); appendText; 
   Sora`"Professor Kuranari..."`;
   waitForClick; clearText; marker; sound(`CEP219`); appendText; 
   Takeshi`"Wh-what is it Ms. Akanegasaki..."`;
   waitForClick; clearText; marker; sound(`CEP220`); appendText; 
   Sora`"There are so many strange things in this 
world, don't you think?"`;
   waitForClick; clearText; marker; sound(`CEP221`); appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`CEP222`); appendText; 
   Sora`"You asked about my body, didn't you 
professor?"`;
   waitForClick; clearText; marker; sound(`CEP223`); appendText; 
   Sora`"You wondered how I came to have this body, 
didn't you?"`;
   waitForClick; clearText; marker; sound(`CEP224`); appendText; 
   Takeshi`"Y-yeah..."`;
   waitForClick; clearText; marker; sound(`CEP225`); appendText; 
   Sora`"There is only one answer."`;
   waitForClick; clearText; marker; sound(`CEP226`); appendText; 
   Sora`"It was a miracle."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP227`); appendText; 
   Takeshi`"Miracle?"`;
   waitForClick; clearText; marker; sound(`CEP228`); appendText; 
   Sora`"Yes - a miracle from the goddess Aphrodite."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked straight into my eyes and 
blinked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He opened his eyes wide with a start and 
said...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP229`); appendText; 
   Takeshi`"Pygmalion..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slowly, quietly nodded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then—`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP230`); appendText; 
   Coco`"Hellooooo!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`In came the girl with boundless energy, Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I quickly let go of Takeshi's hand.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TA15ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP231`); appendText; 
   Coco`"Hey, hey? Have any of you seen Pipi?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP232`); appendText; 
   Coco`"Er, wait a sec, you're holding him Sora!"`;
   waitForClick; clearText; marker; sound(`CEP233`); appendText; 
   Sora`"Yes...But it looks like Pipi ran out of 
batteries."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And saying that I handed Pipi over to Coco.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`CEP234`); appendText; 
   Coco`"Out of batteries? That can't be!"`;
   waitForClick; clearText; marker; sound(`CEP235`); appendText; 
   Coco`"I just finished charging him a minute ago."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco held Pipi between both her hands and 
started shaking him left to right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He wasn't rechargeable kinetically, so that 
shouldn't have done anything for him, but...`;
   waitForClick; clearText; marker; sound(`CEP236`); appendText; 
   Sora`"?Ah!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `CO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I exclaimed this without thinking as I 
realized something .`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Takeshi both turned to stare at me.`;
   waitForClick; clearText; marker; sound(`CEP237`); appendText; 
   Sora`"I figured it out. The reason, I mean."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP238`); appendText; 
   Takeshi`"The reason?"`;
   waitForClick; clearText; marker; sound(`CEP239`); appendText; 
   Sora`"His switch."`;
   waitForClick; clearText; marker; sound(`CEP240`); appendText; 
   Sora`"I think you just need to turn on his switch."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `CO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco lifted Pipi up above her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a button in his navel.`;
   waitForClick; clearText; marker; sound(`CEP241`); appendText; 
   Sora`"Are you ready? Here I go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stuck out my finger and zeroed in on his 
bellybutton.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; marker; sound(`CEP242`); appendText; 
   Sora`"Keep it simple!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I firmly pushed the button. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Whiiiiiiiiiiiiiiiiiiiiiirr...`;
   waitForClick; clearText; marker; appendText; 
   Narr`His motor started to run, and I could hear 
the faint sound of something oscillating.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi's eyes came to life.`;
   waitForClick; clearText; marker; sound(`PIPI_14`); appendText; 
   Pipi`"Wow! Bow wow wow! Woof woof!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP243`); appendText; 
   Coco`"Ha, ha! Sora, thank you!"`;
   waitForClick; clearText; marker; sound(`CEP244`); appendText; 
   Sora`"Don't mention it. All I did was push a 
button."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP245`); appendText; 
   Takeshi`"Ha, ha, ha! A ha, ha, ha, ha, ha!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi broke out in laughter.`;
   waitForClick; clearText; marker; sound(`CEP246`); appendText; 
   Takeshi`"Hey...Sora you remembered?"`;
   waitForClick; clearText; marker; sound(`CEP247`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I smiled from the bottom of my heart, and 
nodded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The world is full of strange and wonderful 
things.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Isn't it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`"The discussion about Pygmalion... and 'keep 
it simple'..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Neither of those should have been on my 
terabyte disk...`;
   waitForClick; clearText; marker; appendText; 
   Narr`..................................`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`PIPI_09`); appendText; 
   Pipi`"Woof! Woof! Wow! Bow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi leapt from Coco's arms.`;
   waitForClick; clearText; marker; sound(`PIPI_13`); appendText; 
   Pipi`"Woof! Wow! Wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And wagging his tail fitfully, he raced 
across the deck.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`CEP248`); appendText; 
   Coco`"Hey! Wait, waaaaiiit! Pipiii!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Making a racket, Coco chased after him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The deck was overflowing with quiet sunlight 
and cheerful laughter.`;
   waitForClick; clearText; 
});
bgload({ name: `IMG05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking up, there was the sky...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The blue sky that continued without end, 
stretching out in all directions.`;
   waitForClick; clearText; marker; sound(`PIPI_11`); appendText; 
   Pipi`"Woof! Woof woof! Woof!"`;
   waitForClick; clearText; marker; sound(`CEP249`); appendText; 
   Coco`"Piipiii! Hey you, wait a second you 
little...!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
hideTextbox();
NVL_Mode();
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`              `;
   nextPage(00); 
   Narr`'——Coco Yagami——'`;
   nextPage(01); waitForClick; 
});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`PIPI_11`); appendText; 
   Pipi`"Woof! Woof woof! Woof!"`;
   waitForClick; clearText; marker; sound(`CEP249`); appendText; 
   Coco`"Piipiii! Hey you, wait a second you 
little...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was chasing after Pipi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know why, but that's what I was doing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably just something fun to do.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi ran across the surface of the deck, like 
he was flying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi stopped.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`PIPI_16`); appendText; 
   Pipi`"Bow wow wow! Woof! Wow wow wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just when I thought he wasn't running 
anymore, he looked up to the sky and started 
barking at something.`;
   waitForClick; clearText; marker; sound(`CEP250`); appendText; 
   Coco`"Huh? Is there a bird or something?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted him up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still he wouldn't stop barking, so I followed 
his gaze and looked up into the sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there was...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
closeKomoreAnim();
bgload({ name: `EV_CO15A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`CEP251`); appendText; 
   Coco`"Oh! It's you! Brother!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Right in front of my eyes floated the outline 
of my brother, who I loved dearly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, it wasn't something I HAD seen...rather 
I'm seeing it right now.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Right now at this moment, Coco is looking at 
you.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She cries out suddenly with an elated 
expression.`;
   waitForClick; clearText; 
});
tweenZoom({ x: 200, y: 250, hx: 400, hy: 300, duration: 180 });
bgloadCrop({ name: `EV_CO15A`, transition: 26, x: 200, y: 250, hx: 400, hy: 300 });
showTextbox();
text(() => {
   marker; sound(`CEP252`); appendText; 
   Coco`"Heeey! Everyone! Come over here!"`;
   waitForClick; clearText; marker; sound(`CEP253`); appendText; 
   Coco`"Come here! Quickly! Quickleeeey!"`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_CO15B`, transition: 20, x: 200, y: 250, hx: 400, hy: 300 });
tweenZoom({ x: 43, y: 50, hx: 450, hy: 337, duration: 90 });
bgloadCrop({ name: `EV_CO15B`, transition: 26, x: 43, y: 50, hx: 450, hy: 337 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The first people to arrive are Hokutan and 
Tsugumi.`;
   waitForClick; clearText; marker; sound(`CEP254`); appendText; 
   Hokuto`"What's wrong?"`;
   waitForClick; clearText; marker; sound(`CEP255`); appendText; 
   Tsugumi`"Did something happen?"`;
   waitForClick; clearText; marker; sound(`CEP256`); appendText; 
   Coco`"Look there! See, over there!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco points at you.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wanted to tell everyone that you've 
arrived.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi takes off her hat, and squints her 
eyes against the sunlight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokutan is...`;
   waitForClick; clearText; marker; sound(`CEP257`); appendText; 
   Hokuto`"Hey! It's true! You've come back!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A smile covers his whole face, and he jumps 
around as if he will start to dance.`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_CO15C`, transition: 20, x: 43, y: 50, hx: 450, hy: 337 });
tweenZoom({ x: 312, y: 162, hx: 450, hy: 337, duration: 90 });
bgloadCrop({ name: `EV_CO15C`, transition: 26, x: 312, y: 162, hx: 450, hy: 337 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next Takepyon shows up.`;
   waitForClick; clearText; marker; sound(`CEP258`); appendText; 
   Takeshi`"Huh? What's going on?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mayo jumps up...`;
   waitForClick; clearText; marker; sound(`CEP259`); appendText; 
   Sara`"Aaaii!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Up on Takepyon's back...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And soon everyone shows up one-by-one.`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_CO15D`, transition: 20, x: 312, y: 162, hx: 450, hy: 337 });
unlockCG($`EV_CO15D`);
tweenZoom({ x: 400, y: 0, hx: 400, hy: 300, duration: 90 });
bgloadCrop({ name: `EV_CO15D`, transition: 26, x: 400, y: 0, hx: 400, hy: 300 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora...Nakkyu's daughter...`;
   waitForClick; clearText; marker; sound(`CEP260`); appendText; 
   Sora`"W-what's going on, You?"`;
   waitForClick; clearText; marker; sound(`CEP261`); appendText; 
   //You'aki'
   You_aki_`"Just come on! Hurry!"`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_CO15E`, transition: 20, x: 400, y: 0, hx: 400, hy: 300 });
tweenZoom({ x: 0, y: 0, hx: 400, hy: 300, duration: 120 });
bgloadCrop({ name: `EV_CO15E`, transition: 26, x: 0, y: 0, hx: 400, hy: 300 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And Nakkyu...Kiddo...`;
   waitForClick; clearText; marker; sound(`CEP262`); appendText; 
   //You'haru'
   You_haru_`"It's him...?"`;
   waitForClick; clearText; marker; sound(`CEP263`); appendText; 
   Kaburaki`"Yeah..."`;
   waitForClick; clearText; 
});
tweenZoom({ x: 0, y: 0, hx: 800, hy: 600, duration: 120 });
bgloadCrop({ name: `EV_CO15E`, transition: 26, x: 0, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The boat is suddenly crowded with excitement.`;
   waitForClick; clearText; marker; sound(`CEP264`); appendText; 
   Coco`"Hey! Broooother! Broooother!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco is waving her arms wildly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hoping...praying...`;
   waitForClick; clearText; marker; sound(`CEP265`); appendText; 
   Narr`'Please let my thoughts reach my brother...'`;
   waitForClick; clearText; marker; sound(`CEP266`); appendText; 
   Narr`'And please, let me meet with him again, 
someday...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Right then—`;
   waitForClick; clearText; marker; appendText; 
   Narr`I, Coco, was looking at my brother.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO15F`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Right then—`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was looking at the world where Coco existed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking down on it with both of my eyes...I 
was sure of it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`If the moon is only there because of your 
belief that it will be there when you look 
for it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then it was possible that I am here, and they 
are here, only because we believe that that 
we are.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The world is here now...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I am here looking at the world...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I am here looking at myself, looking at the 
world...`;
   waitForClick; clearText; marker; appendText; 
   Narr`How far do I go?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I don't know the answer...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there are some things I am sure of.`;
   waitForClick; clearText; 
});
hideTextbox();
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   appendText; delay(0); 
   Narr`               `;
   nextPage(00); 
   Narr`'I am seeing now.'`;
   nextPage(01); waitForClick; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; delay(0); 
   Narr`             `;
   nextPage(00); 
   Narr`'I am being seen now.'`;
   nextPage(01); waitForClick; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; delay(0); 
   Narr`             `;
   nextPage(00); 
   Narr`'You are seeing now.'`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   appendText; nextPage(00); 
   Narr`               'And you are...'`;
   nextPage(01); waitForClick; 
   Narr`
`;
   appendText; nextPage(00); 
   Narr`        'Surely being seen by someone.'`;
   nextPage(01); waitForClick; 
});
monoColorOverlay({ interval: 24, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   appendText; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG_ENDE`, transition: 26 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
delay({ interval: 180 });
monoColorOverlay({ interval: 36, color: BLACK });
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
AVL_Mode();
unlockCG($`POST12`);
g__coco_ep_reach = 1;
g_coco_ep_reach = 1;
sys_fe = 1;
l_29 = 1;
l_2a = 1;
l_2b = 1;
l_2c = 1;
l_2d = 1;
l_2e = 1;
l_2f = 1;
if (l_sc2f_clear == 0) goto(lbl_0000118d);
unlockCG($`POST06`);
if (g_1d != 0) goto(lbl_000011b2);
let lbl_0000118d;
unlockCG($`POST11`);
if (g_1d != 0) goto(lbl_000011b2);
let lbl_000011b2;
unlockCG($`POST17`);
