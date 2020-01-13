setDialogBoxColor(BLUE);
g_b0 = 5;
g_b1 = 7;
g_b2 = 0;
setSceneTitle({ index: 103 });
removeBG({ mode: BLACK, transition: 0 });
playSFX({ name: `SE09_01L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard a low, mechanical sound from far away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The breeze passed through the trees leaves 
making them rustle. `;
   waitForClick; clearText; marker; appendText; 
   Narr`The same wind gently caressed my cheeks. `;
   waitForClick; clearText; marker; appendText; 
   Narr`...............`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wind?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rustling leaves?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened my eyes slowly.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgloadCrop({ name: `BG39A3`, transition: 26, x: 0, y: 0, hx: 0, hy: 0 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't know where I was for a moment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had there been a place like this in LeMU?`;
   waitForClick; clearText; 
});
bgload({ name: `IMG05C`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was just a sprawling, starry sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was not like a fake sky like in the Cosmic 
Whale Room, but a sky that felt broad and 
infinite.`;
   waitForClick; clearText; 
});
bgload({ name: `BG39A3`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was....on the ground.`;
   waitForClick; clearText; marker; appendText; 
   Narr`More precisely, I was on the floating island, 
Insel null.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes, I had...no, we had swam to it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The nearly 100 feet from Zweite stock to the 
surface...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow, I had climbed into the emergency 
entrance of Insel null holding Sara, 
unconscious in my arms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered checking to see if Sara was 
alright.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that, I probably fainted from fatigue 
and a lack of oxygen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I awoke up with a start, looked around and was 
relieved to see Sara lying down next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her chest rose and fell faintly. I could hear 
the regular sound of her breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked around the edge of Insel null, which 
was a lush park.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see the administration center, hotel 
and a tower of light behind the trees.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was still dark, so it didn't seem I'd been 
unconscious very long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe about an hour or so...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was...impressed that we had been able to 
swim all the way to the surface...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went over it again in my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, a conversation in the Control Room 
with Sara came to my mind.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
stopSFX()
bgload({ name: `BG16A1`, transition: 26 });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: false });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; sound(`S1C046`); appendText; 
   Sora`"Please imagine a 15-story building."`;
   waitForClick; clearText; marker; sound(`S1C047`); appendText; 
   Sora`"Or five three-story school buildings 
stacked vertically upon each other."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Five schools stacked..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No way. I couldn't swim that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C048`); appendText; 
   Sora`"Well, then how about a ten-story building?"`;
   waitForClick; clearText; marker; sound(`S1C049`); appendText; 
   Sora`"A depth of 100 feet...that is the 
depth of Zweite stock."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"100 feet..."`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG39A3`, transition: 26 });
playSFX({ name: `SE09_01L`, a1: 0, volume: 95 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`How had I responded to Sora...?`;
   waitForClick; clearText; 
});
goto(lbl_000001cb).if(g_e0 != 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I remembered. I had said it was impossible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora said I was being rational.`;
   waitForClick; clearText; 
});
goto(lbl_000001d0);
let lbl_000001cb;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Hadn't I said that I thought I could swim it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora talked about the pressure and said it was 
impossible...`;
   waitForClick; clearText; 
});
let lbl_000001d0;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But...`;
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
   Narr`           Even Sora could be wrong.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`         We were able to swim it, Sora.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...That reminded me...I wondered what had 
happened to Sora.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Has she suffered the equivalent of death from 
the blackout...?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; 
   Narr`No. Sora was RSD-generated.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She wasn't human.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She couldn't die.`;
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
   Narr`I knew that, but I had been with her for such 
a long time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And Sora was...how could I describe it? 
She was so...human...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a blunt sense of sadness - as if I had 
lost a close friend.`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; sound(`SEP000`); appendText; 
   Sara`"Uh, ummmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's voice pulled me back to reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This was not the time to be thinking about 
such things.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara...Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook Sara's shoulder gently.`;
   waitForClick; clearText; marker; sound(`SEP001`); appendText; 
   Sara`"Uh, ummm, ah..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara opened her eyes slightly.`;
   waitForClick; clearText; marker; sound(`SEP002`); appendText; 
   Sara`"B...bro?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon her eyes opened widely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara hurriedly sat up.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 20, volume: 100 });
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP003`); appendText; 
   Sara`"Where are we...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara didn't seem to understand the situation.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, this is Insel null."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP004`); appendText; 
   Sara`"So...so we..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We're safe now. We made it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Over 100 feet from Zweite stock..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP005`); appendText; 
   Sara`"Are we...still alive...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yes. We are alive. You are and I am, too."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP006`); appendText; 
   Sara`"We did it! We did it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, Sara. We did it. We survived."`;
   waitForClick; clearText; marker; sound(`SEP007`); appendText; 
   Sara`"Yeah...Thank you, brother."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I told you to trust me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP008`); appendText; 
   Sara`"Yes, you did."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara smiled.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She suddenly put her hand on her chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was probably touching the pendant under 
her shirt, checking to make sure it was still 
there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking relieved, she pulled the pendant out 
and grasped it in her hand.`;
   waitForClick; clearText; marker; sound(`SEP009`); appendText; 
   Sara`"Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara whispered softly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew that the pendant was an irreplaceable 
lucky charm for Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face suddenly clouded over as she spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP010`); appendText; 
   Sara`"Hey, brother...what about Nakkyu, Takeshi and 
the others?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think they are alright."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"By the time I turned back, they'd already 
climbed fairly high."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If they kept going, they should've reached 
the surface."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP011`); appendText; 
   Sara`"Really? That's good to hear."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked relieved.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP012`); appendText; 
   Sara`"We can't stay here forever..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had made it to the surface safely, but Sara 
didn't look very well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was she worried about being taken back to 
Leiblich after all?`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, Sara..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP013`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Let's just keep running. Let's run away."`;
   waitForClick; clearText; marker; sound(`SEP014`); appendText; 
   Sara`"Run away?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yes. From them...I mean, from Leiblich."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA10AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP015`); appendText; 
   Sara`"No...it's impossible..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It is possible."`;
   waitForClick; clearText; marker; sound(`SEP016`); appendText; 
   Sara`"How can you say that?"`;
   waitForClick; clearText; marker; sound(`SEP017`); appendText; 
   Sara`"You know about them, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Think about it, Sara."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This island has to be in utter chaos."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Right? LeMU flooded and the whole complex is 
totally destroyed..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And since You and the others got out, this 
place should be in major confusion, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP018`); appendText; 
   Sara`"Y..yeah, I suppose..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They'll be telling everyone how we were left 
behind in LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And for You and the others it's the truth."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If Leiblich has their doubts and tries to 
look into them, that's as far as they can 
investigate."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP019`); appendText; 
   Sara`"Right..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So right now, everyone - including Leiblich 
people ? will be turning their attention to 
LeMU and looking under the ocean."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They might actually think that we are already 
dead..."`;
   waitForClick; clearText; marker; sound(`SEP020`); appendText; 
   Sara`"Yes, that's true!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Now is..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP021`); appendText; 
   Sara`"It's our chance, isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Right now. Now is the chance we've been 
waiting for."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP022`); appendText; 
   Sara`"You are so incredible, brother!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We're already here, so it is impossible for 
them to find us in LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And if they don't find us in LeMU..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They will expand their search for us to the 
sea around this area."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP023`); appendText; 
   Sara`"Right."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They might suspect that we died and the 
current carried us off somewhere..."`;
   waitForClick; clearText; marker; sound(`SEP024`); appendText; 
   Sara`"In the meantime, if we hide somewhere, they 
shouldn't be able to follow us, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, I'm not sure if we can pull it all off 
that easily..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But we'll still have plenty of head start 
before they figure out the truth."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP025`); appendText; 
   Sara`"Yeah, right!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP026`); appendText; 
   Sara`"Oh...but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, Sara looked down.`;
   waitForClick; clearText; marker; sound(`SEP027`); appendText; 
   Sara`"But...how are we going to escape from this 
island?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`SEP028`); appendText; 
   Sara`"I mean, we can't escape without a way off of 
this island, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah...that's..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP029`); appendText; 
   Sara`"That's?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked at me as if she was full of 
confidence in me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...ah...well..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had me. I hadn't thought about that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought we would be alright if could just 
make it to the surface....`;
   waitForClick; clearText; marker; appendText; 
   Sara`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I desperately tried to think of something.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know! I've got it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There should be all kinds of people around 
right now that aren't normally here, like 
construction workers and technical staff."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So, ships and helicopters should come and go 
frequently."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"First of all...we find some clothes and 
change."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Especially your uniform...it really stands 
out." `;
   waitForClick; clearText; marker; sound(`SEP030`); appendText; 
   Sara`"Oh...you're right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked herself over again.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And...if we can't get aboard a helicopter, 
then we can sneak onto some ship and get to 
some port..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And after that we're going to be all right!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`SEP031`); appendText; 
   Sara`"You really are great! You really thought this 
through."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...no...well, er, sure."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's was innocently happy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought to myself that I could fight to 
protect her smile with my life.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that would be my mission.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Let's go, Sara."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA15A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I held out my left hand to Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara reached out to me hesitantly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held her hand tight and squeezed it tight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The warmth of her soft hand spread to mine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For an instant, the memory of Sara holding my 
thumb flashed across my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That fragment in my hand...that shard had 
helped me retrieve my memory and rediscover 
the bond between Sara and me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Let's go, Sara."`;
   waitForClick; clearText; marker; sound(`SEP032`); appendText; 
   Sara`"Okay, brother."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We're going to be free!"`;
   waitForClick; clearText; marker; sound(`SEP033`); appendText; 
   Sara`"Free..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yes, free!"`;
   waitForClick; clearText; marker; sound(`SEP034`); appendText; 
   Sara`"Yeah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I would never leave Sara again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I would protect Sara no matter what.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We started running...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Toward freedom...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 0 });
delay({ interval: 90 });
stopBGM();
delay({ interval: 120 });
g_17 = 1;
unlockCG($`POST05`);
unlockCG($`POST07`);
g_28 = 1;
goto(lbl_00000482).if(g_14 == 0);
unlockCG($`POST02`);
let lbl_00000482;
g_b3 = 1;
jump(`Y_ED`);
