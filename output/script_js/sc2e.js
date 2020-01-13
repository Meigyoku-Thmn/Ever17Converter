l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
setSceneTitle({ index: 105 });
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
setDialogBoxColor(GREEN);
removeBG({ mode: BLACK, transition: 62 });
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly, I was enveloped in darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Plunged into darkness without a ray of light. 
I heard the tinny sound of a can being kicked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The low sound felt as though it were 
penetrating my body, shaking me to my core.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something...like an empty shell reverberating 
and echoing within itself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign that the sound would stop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rather, they seemed to be getting 
stronger and stronger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A crack ran down the outer husk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It began to spread like the strands of a web, 
and soon covered the entire shell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pieces began to fall away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dropping...to the floor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What I had glanced through the fragmented 
shell...was darkness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The particles of light scattered throughout 
the darkness began to attract to each other 
and congeal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light formed a vague image.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The image came flying into view...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A fragment of a scene familiar to me.`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
bgload({ name: `BG17A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
playSFX({ name: `SE08_04`, a1: 0, volume: 100 });
multifgload3({ name1: `YU06ADS`, name2: `SO06ADS`, name3: `SA06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Kabing!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clatter, clatter, clatter...`;
   waitForClick; clearText; marker; sound(`S2C259`); appendText; 
   Takeshi`"Hey! Who kicked that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C337`); appendText; 
   You`"I have no idea, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C338`); appendText; 
   Sara`"Now is our chance!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C339`); appendText; 
   Sora`"Do...do you think we should...?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As everyone spoke, they scattered like baby 
spiders in the wind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was the only one left in the Conference 
Room...`;
   waitForClick; clearText; 
});
hideTextbox();
setNumberOfFlash(2);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"'Me!?'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A chill shot up my back.`;
   waitForClick; clearText; 
});
hideTextbox();
hideTextbox();
NVL_Mode();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`

`;
   appendText; delay(0); 
   Narr`                  `;
   nextPage(00); 
   Narr`I...I...I...`;
   nextPage(01); waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`I...am here...`;
   nextPage(01); waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`I have been here...forever...`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Still, I had this odd sense that something 
was not quite right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt that until just a while before, I was 
not really myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'A me that is not me.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'A me that is not me.' Who...could...that be?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered why these doubts were creeping 
into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know the reason.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But for some reason I was consumed by the 
feeling that I was floating in space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A feeling that was accompanied with a 
limitless terror.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like I had been transported into some 
unknown world before I even realized it....`;
   waitForClick; clearText; marker; appendText; 
   Narr`...That was how I felt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, I felt dizzy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My consciousness felt that it would flee if I 
did not latch firmly on to it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to do this as I calmly, carefully 
analyzed the situation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started with what I knew...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that we were all playing kick the 
can in the dark.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And thinking back on the fact that Takeshi and 
everyone had run away, it seemed clear that 
I was it. `;
   waitForClick; clearText; marker; appendText; 
   Narr`No, wait...`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could think was 'who cared about the 
game now?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it was more important to find out 
the cause of this strange feeling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the first place, I wondered why I was 
there in the first place?`;
   waitForClick; clearText; marker; appendText; 
   Narr`What had I been doing?`;
   waitForClick; clearText; marker; appendText; 
   Narr`While I had questions, there was a part of me 
that felt it made total sense for me to be 
there.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"*sigh*...This is bad..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I have no idea what the deal is with 
anything..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind was fuzzy. I was not going to be able 
to push ahead with any logical thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...give up.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"First, I'll go look for everyone."`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4R`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I left the Conference Room and started my 
search.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Strangely, my doubts and sense of unease 
lessened with time. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I calmly went about devoting myself to 
being 'it'.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the darkness almost completely devoid of 
light, I went place to place looking for 
everyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Takeshi, Sora, Sara, Tsugumi...it didn't 
take me long to find all of them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Once we were all gathered back in the 
Conference Room we had the following talk.`;
   waitForClick; clearText; 
});
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG17A2`, transition: 26 });
multifgload3({ name1: `SO07ADS`, name2: `KB03ADS`, name3: `YU05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S2C351`); appendText; 
   Takeshi`"Geez. He slaughtered us."`;
   waitForClick; clearText; marker; sound(`S2C352`); appendText; 
   Sora`"That was twice as fast as Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C354`); appendText; 
   You`"Wow. I can't believe you guessed everybody so 
well in the dark."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C355`); appendText; 
   Sara`"Nakkyu...what are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C356`); appendText; 
   You`"Oh, Mayo, you don't know? This kid..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You put her hand on my head and said something 
to Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was making a fuss next to me so I 
couldn't hear what she said.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADS`, name2: `KB14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C357`); appendText; 
   Takeshi`"Hey, Tsugumi! Give it up. Why don't you just 
come out and admit you were playing too?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2C345`); appendText; 
   Tsugumi`"I wasn't playing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said it as if her patience was nearly 
gone.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 2 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And that was the end of our game.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The evening continued quietly...`;
   waitForClick; clearText; 
});
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG09A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`23:45`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The day had seen no major developments.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing else for us to do so we 
decided to go to bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were four legitimate beds in the dry 
areas.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was one in the compression chamber, two 
in the infirmary and an examination table 
there as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was AWOL, Sora didn't need sleep, so 
there were exactly four of us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi had been relegated to the compression 
chamber as a potential danger to the women.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sara had said that since they were 
vulnerable young women they would take the two 
beds.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I...got stuck on the hard examination table.`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Now...`;
   waitForClick; clearText; marker; appendText; 
   Narr`With the clamor having quieted down and 
finding myself alone, I stared at the ceiling 
and started to reflect on things.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Enough time had passed since I had that eerie 
feeling of things being not right. Now my mind 
was clear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was able easily to reel in the thread of 
my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The date was May 2.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the second day we had been trapped in 
LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our second day here was almost over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reflected on the happenings of the two days.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
bgload({ name: `EV_SO11D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On May 1...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; 
   Narr`I had awoken in the infirmary without 
my memory.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I didn't know my name, age, address, or even 
why I was here.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The person who had looked after me had been 
You.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Trapped in LeMU, You and I had wandered 
through the complex searching for an exit.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We were caught up in a sudden rush of water 
and barely escaped death. Then we found Sara 
and rescued her from the elevator...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Oh, and I remembered that I had blurted out 
something crazy...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG22B1`, transition: 26 });
showFilter2();
unSkippableDelay(1);
hideTextbox();
AVL_Mode();
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `SA05ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I just want to make sure one more time..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, there was really no one was riding 
in the elevator except for you?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S006`); appendText; 
   Sara`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So there was somebody?"`;
   waitForClick; clearText; marker; sound(`C1S007`); appendText; 
   Sara`"N-no...there wasn't, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S008`); appendText; 
   Sara`"Why...?"`;
   waitForClick; clearText; marker; sound(`C1S009`); appendText; 
   Sara`"...How...how do you know?"`;
   waitForClick; clearText; marker; sound(`C1S010`); appendText; 
   Sara`"My..."`;
   waitForClick; clearText; marker; sound(`C1S011`); appendText; 
   Sara`"My...name..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S012`); appendText; 
   You`"What? Oh, that's right. We haven't told you 
Mayo's real name..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S013`); appendText; 
   Sara`"Hey! I asked you why!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S018`); appendText; 
   Sara`"How do you know me?"`;
   waitForClick; clearText; marker; sound(`C1S019`); appendText; 
   Sara`"Who..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S020`); appendText; 
   Sara`"...Who are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She grilled me about how I knew. But I had no 
answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I knew her name was Sara Matsunaga.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even though I knew it, I still didn't know how 
I knew it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The word 'Sara ' just unconsciously popped 
out of my mouth.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `EV_SO11D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I met with Tsugumi, Sora, Takeshi to 
contemplate escape routes.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We noticed that LeMMIH's bio scan was 
displaying bizarre numbers for the 
number of people in LeMU.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had another experience similar to the one 
with Sara.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG16A1`, transition: 26 });
showFilter2();
unSkippableDelay(1);
hideTextbox();
AVL_Mode();
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Wait! That's not right! It's definitely 
weird!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There are only five people that didn't 
escape in time!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But the bio scan is showing six."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S119`); appendText; 
   Sara`"Huh? Why do you say there are five people?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S120`); appendText; 
   Sara`"Sora, Tsugumi, Takeshi, the Kid, 
Nakkyu...and me."`;
   waitForClick; clearText; marker; sound(`C1S121`); appendText; 
   Sara`"That's six."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. Sara...that's wrong..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"The thing is, Sora is..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sora is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She's not really here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S122`); appendText; 
   Sara`"She's not here...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S123`); appendText; 
   Takeshi`"What're you talking about, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora is...she's an RSD-generated image."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S124`); appendText; 
   Sara`"W-what?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S125`); appendText; 
   Takeshi`"RSD!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's a system that uses semiconductor lasers 
to project an image directly onto a 
person's retina."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"In other words, the Sora that we are seeing 
is just an image."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and Takeshi's jaws dropped and they 
blinked again and again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Being an employee of LeMU, I figured that You 
had known this from the start. She didn't 
look surprised, but just gazed off into 
the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As for Sora...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S126`); appendText; 
   Sora`"Yes. It is exactly as the Kid states."`;
   waitForClick; clearText; marker; sound(`C1S127`); appendText; 
   Sora`"I am not flesh and blood."`;
   waitForClick; clearText; marker; sound(`C1S128`); appendText; 
   Sora`"I have no form...I am merely an image."`;
   waitForClick; clearText; marker; sound(`C1S129`); appendText; 
   Sora`"My thoughts and personality are all 
controlled by an AI program."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora answered without looking surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the whole situation was staggering.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because no one had told me the fact that Sora 
was an RSD-generated image...`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `EV_SO11D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`These were inexplicable, recurring 
phenomena...premonitions.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; 
   Narr`And there was an even more unbelievable scene 
that I had stumbled upon.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `EV_CO03A`, transition: 26 });
showFilter2();
unSkippableDelay(1);
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the medical compression chamber I met with 
a ghost-like young girl.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's..al-alright..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't worry...everything is alright..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anyway, let's go where everybody else is!"`;
   waitForClick; clearText; marker; sound(`C1S296`); appendText; 
   //Young Girl
   Young_Girl`"Everybody?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, it's not just me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There are lots of other people..."`;
   waitForClick; clearText; marker; sound(`C1S297`); appendText; 
   //Young Girl
   Young_Girl`"Help?...Did you come to help?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y-yeah...that's right."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C1S298`); appendText; 
   //Young Girl
   Young_Girl`"But...it's probably impossible..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`C1S299`); appendText; 
   //Young Girl
   Young_Girl`"There is...no way out anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I suddenly said.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Let's go!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C1S316`); appendText; 
   //Young Girl
   Young_Girl`"...Uh...where?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anywhere. Let's just get out of here."`;
   waitForClick; clearText; marker; sound(`C1S317`); appendText; 
   //Young Girl
   Young_Girl`"Why...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Coco, because if we stay here, 
then we'll probably..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sucked in my breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew something there was no reason I should 
have known...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know why, but I knew her name.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco Yagami.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then the moment I took my eyes off of her, 
Coco disappeared without a sound.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `EV_SO11D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I lost sight of her in the compression chamber 
where we had spent the night.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I saw her again the next day - or only hours 
before I had laid down and started thinking 
this all out.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`After a sudden blackout, we went to fix the 
generator.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `EV_CO04A`, transition: 26 });
showFilter2();
unSkippableDelay(1);
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I met up with Coco again in the dim light in 
front of the Generator Room... `;
   waitForClick; clearText; marker; sound(`C2S173`); appendText; 
   Coco`"Moon sprite shouldering a long bow."`;
   waitForSound; clearText; marker; sound(`C2S174`); appendText; 
   Coco`"Waiting inside a dream."`;
   waitForSound; clearText; marker; sound(`C2S175`); appendText; 
   Coco`"Tonight a story by moonlight."`;
   waitForSound; clearText; marker; sound(`C2S176`); appendText; 
   Coco`"Hoping the wait will be short."`;
   waitForSound; clearText; marker; sound(`C2S177`); appendText; 
   Coco`"Sleeping curled and snug."`;
   waitForSound; clearText; marker; sound(`C2S178`); appendText; 
   Coco`"Sleeping in mother's arms."`;
   waitForSound; clearText; marker; appendText; 
   Narr`I didn't know why she was singing a lullaby. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Before I could ask her, she started talking.`;
   waitForClick; clearText; marker; sound(`C2S179`); appendText; 
   Coco`"I was waiting for you."`;
   waitForClick; clearText; marker; sound(`C2S180`); appendText; 
   Coco`"I waited and waited...for you to come..."`;
   waitForClick; clearText; marker; sound(`C2S181`); appendText; 
   Coco`"I was waiting...all alone like a moon 
sprite..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"T-then you should have come to me..."`;
   waitForClick; clearText; marker; sound(`C2S182`); appendText; 
   Coco`"I couldn't..."`;
   waitForClick; clearText; marker; sound(`C2S183`); appendText; 
   Coco`"That's...impossible..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why...?"`;
   waitForClick; clearText; marker; sound(`C2S184`); appendText; 
   Coco`"Because you wouldn't take me with you..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...What?"`;
   waitForClick; clearText; marker; sound(`C2S185`); appendText; 
   Coco`"Will you take me to where everybody is?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Of course I will! Let's go together right 
now!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as I said that...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A wall of water exploded from near Coco's feet.`;
   waitForClick; clearText; 
});
showFog2();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Droplets of water scattered everywhere like 
mist...`;
   waitForClick; clearText; marker; sound(`C2S186`); appendText; 
   Coco`"Farewell."`;
   waitForClick; clearText; 
});
bgload({ name: `BG18B2`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco disappeared in the spray.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
closeFog2();
bgload({ name: `EV_SO11D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then night came and we decided to play 
kick the can in the dark.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Takeshi was 'it' again and again, but finally 
my turn came.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had found everyone, one after another, 
in the dark...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When only Tsugumi was left, the sound of the 
can being kicked rang out through the 
Conference Room...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And just that moment I had felt that 
something was not right.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG09A2`, transition: 26 });
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"But it's only been two days and so much has 
happened..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just being trapped here is an unusual state 
of affairs..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The premonitions...and the ghost-like girl...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And besides that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's father had gone missing, and Tsugumi - 
well she was just plain rude - Sora was only 
an image and Sara...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara...well...what was with Sara?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something about her stuck in my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...oh, whatever.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Anyway, the events of the past two days had 
been like a roller coaster.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just too many things had happened...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like they said about water mills - they 
worked best in a fast stream but stopped when 
there was a flood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The way I felt was like that. I couldn't get 
my mind around the intense rush of events, 
doubts and questions that had forced 
themselves on me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were beyond what I could digest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what I could do about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body knew what the best thing to do was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sleep. I needed to rest my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And with that I was rapidly assaulted by 
fatigue and whisked off to slumberland.`;
   waitForClick; clearText; marker; appendText; 
   Narr`..........`;
   waitForClick; clearText; marker; appendText; 
   Narr`.......`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I was only briefly able to enjoy my visit.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 60 });
l_choice = 0;
jump(`SC2F`);
