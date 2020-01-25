setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
setSceneTitle({ index: 103 });
removeBG({ mode: BLACK, transition: 0 });
playSFX({ name: `SE09_01L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `I heard a low, mechanical sound from far away.`;
   `The breeze passed through the trees leaves making them rustle. `;
   `The same wind gently caressed my cheeks. `;
   `...............`;
   `Wind?`;
   `Rustling leaves?`;
   `I opened my eyes slowly.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgloadCrop({ name: `BG39A3`, transition: 26, x: 0, y: 0, hx: 0, hy: 0 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   `I didn't know where I was for a moment.`;
   `Had there been a place like this in LeMU?`;

});
bgload({ name: `IMG05C`, transition: 10 });
showTextbox();
text(() => {
   `I looked up.`;
   `There was no ceiling.`;
   `There was just a sprawling, starry sky.`;
   `It was not like a fake sky like in the Cosmic Whale Room, but a sky that felt broad and infinite.`;

});
bgload({ name: `BG39A3`, transition: 10 });
showTextbox();
text(() => {
   `I was....on the ground.`;
   `More precisely, I was on the floating island, Insel null.`;
   `Yes, I had...no, we had swam to it...`;
   `The nearly 100 feet from Zweite stock to the surface...`;
   `Somehow, I had climbed into the emergency entrance of Insel null holding Sara, unconscious in my arms.`;
   `I remembered checking to see if Sara was alright.`;
   `After that, I probably fainted from fatigue and a lack of oxygen.`;
   `I awoke up with a start, looked around and was relieved to see Sara lying down next to me.`;
   `Her chest rose and fell faintly. I could hear the regular sound of her breathing.`;
   `I looked around again.`;
   `I checked around the edge of Insel null, which was a lush park.`;
   `I could see the administration center, hotel and a tower of light behind the trees.`;
   `It was still dark, so it didn't seem I'd been unconscious very long.`;
   `Maybe about an hour or so...`;
   `I was...impressed that we had been able to swim all the way to the surface...`;
   `I went over it again in my head.`;
   `Suddenly, a conversation in the Control Room with Sara came to my mind.`;

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
   Sora(S1C046)`"Please imagine a 15-story building."`;
   Sora(S1C047)`"Or five three-story school buildings stacked vertically upon each other."`;
   Kid`"Five schools stacked..."`;
   Kid`"No way. I couldn't swim that."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C048)`"Well, then how about a ten-story building?"`;
   Sora(S1C049)`"A depth of 100 feet...that is the depth of Zweite stock."`;
   Kid`"100 feet..."`;

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
   `How had I responded to Sora...?`;

});
if (l_thought_you_can_swim_34_meters_regardless_water_pressure != 0) goto(lbl_000001cb);
showTextbox();
text(() => {
   `I remembered. I had said it was impossible.`;
   `Sora said I was being rational.`;

});
goto(lbl_000001d0);
let lbl_000001cb;
showTextbox();
text(() => {
   `Hadn't I said that I thought I could swim it?`;
   `Sora talked about the pressure and said it was impossible...`;

});
let lbl_000001d0;
showTextbox();
text(() => {
   `But...`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `
${noWait}`;
   `           Even Sora could be wrong.`;
   `${noWait}`;
   `         We were able to swim it, Sora.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `...That reminded me...I wondered what had happened to Sora.`;
   `Has she suffered the equivalent of death from the blackout...?`;
   `${noWait}`;
   `No. Sora was RSD-generated.`;
   `She wasn't human.`;
   `She couldn't die.`;
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
   `I knew that, but I had been with her for such a long time.`;
   `And Sora was...how could I describe it? She was so...human...`;
   `I felt a blunt sense of sadness - as if I had lost a close friend.`;

});
stopSFX()
showTextbox();
text(() => {
   Sara(SEP000)`"Uh, ummmm..."`;
   `Sara's voice pulled me back to reality.`;
   `This was not the time to be thinking about such things.`;
   Kid`"Sara...Sara?"`;
   `I shook Sara's shoulder gently.`;
   Sara(SEP001)`"Uh, ummm, ah..."`;
   `Sara opened her eyes slightly.`;
   Sara(SEP002)`"B...bro?"`;
   `Soon her eyes opened widely.`;
   `Sara hurriedly sat up.`;

});
hideTextbox();
playBGM({ num: 20, volume: 100 });
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP003)`"Where are we...?"`;
   `Sara didn't seem to understand the situation.`;
   Kid`"Sara, this is Insel null."`;

});
fgload({ id: 1, name: `SA08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP004)`"So...so we..."`;
   Kid`"We're safe now. We made it."`;
   Kid`"Over 100 feet from Zweite stock..."`;

});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP005)`"Are we...still alive...?"`;
   Kid`"Yes. We are alive. You are and I am, too."`;

});
fgload({ id: 1, name: `SA09AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP006)`"We did it! We did it!"`;
   Kid`"Yeah, Sara. We did it. We survived."`;
   Sara(SEP007)`"Yeah...Thank you, brother."`;
   Kid`"I told you to trust me."`;

});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP008)`"Yes, you did."`;
   `Sara smiled.`;

});
fgload({ id: 1, name: `SA06AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She suddenly put her hand on her chest.`;
   `She was probably touching the pendant under her shirt, checking to make sure it was still there.`;

});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Looking relieved, she pulled the pendant out and grasped it in her hand.`;
   Sara(SEP009)`"Thank you..."`;
   `Sara whispered softly.`;
   `I knew that the pendant was an irreplaceable lucky charm for Sara.`;
   `Her face suddenly clouded over as she spoke.`;

});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP010)`"Hey, brother...what about Nakkyu, Takeshi and the others?"`;
   Kid`"I think they are alright."`;
   Kid`"By the time I turned back, they'd already climbed fairly high."`;
   Kid`"If they kept going, they should've reached the surface."`;

});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP011)`"Really? That's good to hear."`;
   `Sara looked relieved.`;

});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP012)`"We can't stay here forever..."`;
   `We had made it to the surface safely, but Sara didn't look very well.`;
   `Was she worried about being taken back to Leiblich after all?`;
   Kid`"Hey, Sara..."`;

});
fgload({ id: 1, name: `SA08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP013)`"What?"`;
   Kid`"Let's just keep running. Let's run away."`;
   Sara(SEP014)`"Run away?"`;
   Kid`"Yes. From them...I mean, from Leiblich."`;

});
fgload({ id: 1, name: `SA10AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP015)`"No...it's impossible..."`;
   Kid`"It is possible."`;
   Sara(SEP016)`"How can you say that?"`;
   Sara(SEP017)`"You know about them, right?"`;
   Kid`"Think about it, Sara."`;
   Kid`"This island has to be in utter chaos."`;
   Kid`"Right? LeMU flooded and the whole complex is totally destroyed..."`;
   Kid`"And since You and the others got out, this place should be in major confusion, right?"`;

});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP018)`"Y..yeah, I suppose..."`;
   Kid`"They'll be telling everyone how we were left behind in LeMU."`;
   Kid`"And for You and the others it's the truth."`;
   Kid`"If Leiblich has their doubts and tries to look into them, that's as far as they can investigate."`;

});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP019)`"Right..."`;
   Kid`"So right now, everyone - including Leiblich people ? will be turning their attention to LeMU and looking under the ocean."`;
   Kid`"They might actually think that we are already dead..."`;
   Sara(SEP020)`"Yes, that's true!"`;
   Kid`"So..."`;
   Kid`"Now is..."`;

});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP021)`"It's our chance, isn't it?"`;
   Kid`"Right now. Now is the chance we've been waiting for."`;

});
fgload({ id: 1, name: `SA09AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP022)`"You are so incredible, brother!"`;
   Kid`"We're already here, so it is impossible for them to find us in LeMU."`;
   Kid`"And if they don't find us in LeMU..."`;
   Kid`"They will expand their search for us to the sea around this area."`;

});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP023)`"Right."`;
   Kid`"They might suspect that we died and the current carried us off somewhere..."`;
   Sara(SEP024)`"In the meantime, if we hide somewhere, they shouldn't be able to follow us, right?"`;
   Kid`"Yeah, I'm not sure if we can pull it all off that easily..."`;
   Kid`"But we'll still have plenty of head start before they figure out the truth."`;

});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP025)`"Yeah, right!"`;

});
fgload({ id: 1, name: `SA03AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP026)`"Oh...but..."`;
   `Suddenly, Sara looked down.`;
   Sara(SEP027)`"But...how are we going to escape from this island?"`;
   Kid`"What?"`;
   Sara(SEP028)`"I mean, we can't escape without a way off of this island, right?"`;
   Kid`"Yeah...that's..."`;

});
fgload({ id: 1, name: `SA01AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP029)`"That's?"`;
   `Sara looked at me as if she was full of confidence in me.`;
   Kid`"Uh...ah...well..."`;
   `She had me. I hadn't thought about that.`;
   `I thought we would be alright if could just make it to the surface....`;
   Sara`"..."`;
   `I desperately tried to think of something.`;
   Kid`"I know! I've got it!"`;
   Kid`"There should be all kinds of people around right now that aren't normally here, like construction workers and technical staff."`;
   Kid`"So, ships and helicopters should come and go frequently."`;
   Kid`"First of all...we find some clothes and change."`;
   Kid`"Especially your uniform...it really stands out." `;
   Sara(SEP030)`"Oh...you're right."`;
   `Sara looked herself over again.`;
   Kid`"And...if we can't get aboard a helicopter, then we can sneak onto some ship and get to some port..."`;
   Kid`"And after that we're going to be all right!"`;

});
fgload({ id: 1, name: `SA02AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(SEP031)`"You really are great! You really thought this through."`;
   Kid`"Uh...no...well, er, sure."`;
   `Sara's was innocently happy.`;
   `I thought to myself that I could fight to protect her smile with my life.`;
   `I thought that would be my mission.`;
   Kid`"Let's go, Sara."`;

});
bgload({ name: `EV_SA15A`, transition: 20 });
showTextbox();
text(() => {
   `I held out my left hand to Sara.`;
   `Sara reached out to me hesitantly.`;
   `I held her hand tight and squeezed it tight.`;
   `The warmth of her soft hand spread to mine.`;
   `For an instant, the memory of Sara holding my thumb flashed across my mind.`;
   `That fragment in my hand...that shard had helped me retrieve my memory and rediscover the bond between Sara and me.`;
   Kid`"Let's go, Sara."`;
   Sara(SEP032)`"Okay, brother."`;
   Kid`"We're going to be free!"`;
   Sara(SEP033)`"Free..."`;
   Kid`"Yes, free!"`;
   Sara(SEP034)`"Yeah!"`;
   `I would never leave Sara again.`;
   `I would protect Sara no matter what.`;
   `We started running...`;
   `Toward freedom...`;

});
removeBG({ mode: BLACK, transition: 0 });
delay({ interval: 90 });
stopBGM();
delay({ interval: 120 });
g_sara_gd_cleared = 1;
unlockCG($`POST05`);
unlockCG($`POST07`);
l__sara_ep__cleared = 1;
if (g_you_gd_cleared == 0) goto(lbl_00000482);
unlockCG($`POST02`);
let lbl_00000482;
l_choice = 1;
jump(`Y_ED`);
