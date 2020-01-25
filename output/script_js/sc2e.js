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
   `Suddenly, I was enveloped in darkness.`;
   `Plunged into darkness without a ray of light. I heard the tinny sound of a can being kicked.`;
   `The low sound felt as though it were penetrating my body, shaking me to my core.`;
   `Something...like an empty shell reverberating and echoing within itself.`;
   `There was no sign that the sound would stop.`;
   `Rather, they seemed to be getting stronger and stronger.`;
   `A crack ran down the outer husk.`;
   `It began to spread like the strands of a web, and soon covered the entire shell.`;
   `Pieces began to fall away.`;
   `Dropping...to the floor...`;
   `What I had glanced through the fragmented shell...was darkness...`;
   `The particles of light scattered throughout the darkness began to attract to each other and congeal.`;
   `The light formed a vague image.`;
   `The image came flying into view...`;
   `A fragment of a scene familiar to me.`;

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
   `Kabing!`;

});
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clatter, clatter, clatter...`;
   Takeshi(S2C259)`"Hey! Who kicked that?"`;

});
fgload({ id: 1, name: `YU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2C337)`"I have no idea, but..."`;

});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C338)`"Now is our chance!"`;

});
fgload({ id: 2, name: `SO03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2C339)`"Do...do you think we should...?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `As everyone spoke, they scattered like baby spiders in the wind.`;
   `I was the only one left in the Conference Room...`;

});
hideTextbox();
setNumberOfFlash(2);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   Kid`"Huh?"`;
   Kid`"'Me!?'"`;
   `A chill shot up my back.`;

});
hideTextbox();
hideTextbox();
NVL_Mode();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `
${noWait}`;
   `${center}${nextPage(0)}I...I...I...${nextPage(1)}`;
   `${center}${nextPage(0)}I...am here...${nextPage(1)}`;
   `${center}${nextPage(0)}I have been here...forever...${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Still, I had this odd sense that something was not quite right.`;
   `I felt that until just a while before, I was not really myself.`;
   `'A me that is not me.'`;
   `'A me that is not me.' Who...could...that be?`;
   `I wondered why these doubts were creeping into my mind.`;
   `I didn't know the reason.`;
   `But for some reason I was consumed by the feeling that I was floating in space.`;
   `A feeling that was accompanied with a limitless terror.`;
   `It was like I had been transported into some unknown world before I even realized it....`;
   `...That was how I felt.`;
   `Suddenly, I felt dizzy.`;
   `My consciousness felt that it would flee if I did not latch firmly on to it.`;
   `I tried to do this as I calmly, carefully analyzed the situation.`;
   `I started with what I knew...`;
   `It seemed that we were all playing kick the can in the dark.`;
   `And thinking back on the fact that Takeshi and everyone had run away, it seemed clear that I was it. `;
   `No, wait...`;
   `All I could think was 'who cared about the game now?'`;
   `I thought it was more important to find out the cause of this strange feeling.`;
   `In the first place, I wondered why I was there in the first place?`;
   `What had I been doing?`;
   `While I had questions, there was a part of me that felt it made total sense for me to be there.`;
   Kid`"*sigh*...This is bad..."`;
   Kid`"I have no idea what the deal is with anything..."`;
   `My mind was fuzzy. I was not going to be able to push ahead with any logical thinking.`;
   `I decided to...`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `...give up.`;
   Kid`"First, I'll go look for everyone."`;

});
bgload({ name: `BG26B4R`, transition: 10 });
showTextbox();
text(() => {
   `I left the Conference Room and started my search.`;
   `Strangely, my doubts and sense of unease lessened with time. `;
   `I calmly went about devoting myself to being 'it'.`;

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
   `In the darkness almost completely devoid of light, I went place to place looking for everyone.`;
   `You, Takeshi, Sora, Sara, Tsugumi...it didn't take me long to find all of them.`;
   `Once we were all gathered back in the Conference Room we had the following talk.`;

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
   Takeshi(S2C351)`"Geez. He slaughtered us."`;
   Sora(S2C352)`"That was twice as fast as Takeshi."`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C354)`"Wow. I can't believe you guessed everybody so well in the dark."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2C355)`"Nakkyu...what are you talking about?"`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2C356)`"Oh, Mayo, you don't know? This kid..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `You put her hand on my head and said something to Sara.`;
   `Takeshi was making a fuss next to me so I couldn't hear what she said.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADS`, name2: `KB14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2C357)`"Hey, Tsugumi! Give it up. Why don't you just come out and admit you were playing too?"`;

});
fgload({ id: 1, name: `TU18ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2C345)`"I wasn't playing."`;
   `Tsugumi said it as if her patience was nearly gone.`;

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
   `And that was the end of our game.`;
   `The evening continued quietly...`;

});
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG09A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`23:45`);
showTextbox();
text(() => {
   `The day had seen no major developments.`;
   `There was nothing else for us to do so we decided to go to bed.`;
   `There were four legitimate beds in the dry areas.`;
   `There was one in the compression chamber, two in the infirmary and an examination table there as well.`;
   `Tsugumi was AWOL, Sora didn't need sleep, so there were exactly four of us.`;
   `Takeshi had been relegated to the compression chamber as a potential danger to the women.`;
   `You and Sara had said that since they were vulnerable young women they would take the two beds.`;
   `So I...got stuck on the hard examination table.`;

});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `Now...`;
   `With the clamor having quieted down and finding myself alone, I stared at the ceiling and started to reflect on things.`;
   `Enough time had passed since I had that eerie feeling of things being not right. Now my mind was clear.`;
   `I was able easily to reel in the thread of my memory.`;
   `The date was May 2.`;
   `It was the second day we had been trapped in LeMU.`;
   `Our second day here was almost over.`;
   `I reflected on the happenings of the two days.`;

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
   `On May 1...`;
   `${noWait}`;
   `I had awoken in the infirmary without my memory.`;
   `I didn't know my name, age, address, or even why I was here.`;
   `The person who had looked after me had been You.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Trapped in LeMU, You and I had wandered through the complex searching for an exit.`;
   `We were caught up in a sudden rush of water and barely escaped death. Then we found Sara and rescued her from the elevator...`;
   `Oh, and I remembered that I had blurted out something crazy...`;
   fadeClearPage();
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
ADV_Mode();
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `SA05ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Kid`"I just want to make sure one more time..."`;
   Kid`"Sara, there was really no one was riding in the elevator except for you?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S006)`"Uh..."`;
   Kid`"So there was somebody?"`;
   Sara(C1S007)`"N-no...there wasn't, but..."`;
   Kid`"But...?"`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S008)`"Why...?"`;
   Sara(C1S009)`"...How...how do you know?"`;
   Sara(C1S010)`"My..."`;
   Sara(C1S011)`"My...name..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S012)`"What? Oh, that's right. We haven't told you Mayo's real name..."`;

});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S013)`"Hey! I asked you why!"`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S018)`"How do you know me?"`;
   Sara(C1S019)`"Who..."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S020)`"...Who are you?"`;
   `She grilled me about how I knew. But I had no answer.`;
   `Still, I knew her name was Sara Matsunaga.`;
   `Even though I knew it, I still didn't know how I knew it.`;
   `The word 'Sara ' just unconsciously popped out of my mouth.`;

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
   `After that...`;
   `I met with Tsugumi, Sora, Takeshi to contemplate escape routes.`;
   `We noticed that LeMMIH's bio scan was displaying bizarre numbers for the number of people in LeMU.`;
   `I had another experience similar to the one with Sara.`;
   fadeClearPage();
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
ADV_Mode();
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Kid`"Wait! That's not right! It's definitely weird!"`;
   Kid`"There are only five people that didn't escape in time!"`;
   Kid`"But the bio scan is showing six."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S119)`"Huh? Why do you say there are five people?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S120)`"Sora, Tsugumi, Takeshi, the Kid, Nakkyu...and me."`;
   Sara(C1S121)`"That's six."`;
   Kid`"No. Sara...that's wrong..."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"The thing is, Sora is..."`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Sora is..."`;
   Kid`"She's not really here."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S122)`"She's not here...?"`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S123)`"What're you talking about, Kid?"`;
   Kid`"Sora is...she's an RSD-generated image."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S124)`"W-what?"`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S125)`"RSD!?"`;
   Kid`"It's a system that uses semiconductor lasers to project an image directly onto a person's retina."`;
   Kid`"In other words, the Sora that we are seeing is just an image."`;
   `Sara and Takeshi's jaws dropped and they blinked again and again.`;
   `Being an employee of LeMU, I figured that You had known this from the start. She didn't look surprised, but just gazed off into the distance.`;
   `As for Sora...`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S126)`"Yes. It is exactly as the Kid states."`;
   Sora(C1S127)`"I am not flesh and blood."`;
   Sora(C1S128)`"I have no form...I am merely an image."`;
   Sora(C1S129)`"My thoughts and personality are all controlled by an AI program."`;
   `Sora answered without looking surprised.`;
   `But the whole situation was staggering.`;
   `Because no one had told me the fact that Sora was an RSD-generated image...`;

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
   `These were inexplicable, recurring phenomena...premonitions.`;
   `${noWait}`;
   `And there was an even more unbelievable scene that I had stumbled upon.`;
   fadeClearPage();
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
ADV_Mode();
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `In the medical compression chamber I met with a ghost-like young girl.`;
   Kid`"It's..al-alright..."`;
   Kid`"Don't worry...everything is alright..."`;
   Kid`"Anyway, let's go where everybody else is!"`;
   //Young Girl
   Young_Girl(C1S296)`"Everybody?"`;
   Kid`"Yeah, it's not just me."`;
   Kid`"There are lots of other people..."`;
   //Young Girl
   Young_Girl(C1S297)`"Help?...Did you come to help?"`;
   Kid`"Y-yeah...that's right."`;

});
bgload({ name: `EV_CO03B`, transition: 20 });
showTextbox();
text(() => {
   //Young Girl
   Young_Girl(C1S298)`"But...it's probably impossible..."`;
   Kid`"Huh?"`;
   //Young Girl
   Young_Girl(C1S299)`"There is...no way out anymore..."`;
   `Then I suddenly said.`;
   Kid`"Let's go!"`;

});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   //Young Girl
   Young_Girl(C1S316)`"...Uh...where?"`;
   Kid`"Anywhere. Let's just get out of here."`;
   //Young Girl
   Young_Girl(C1S317)`"Why...?"`;
   Kid`"Coco, because if we stay here, then we'll probably..."`;
   `I sucked in my breath.`;
   `I knew something there was no reason I should have known...`;
   `I didn't know why, but I knew her name.`;
   `Coco Yagami.`;
   `And then the moment I took my eyes off of her, Coco disappeared without a sound.`;

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
   `I lost sight of her in the compression chamber where we had spent the night.`;
   `I saw her again the next day - or only hours before I had laid down and started thinking this all out.`;
   `After a sudden blackout, we went to fix the generator.`;
   fadeClearPage();
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
ADV_Mode();
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `I met up with Coco again in the dim light in front of the Generator Room... `;
   Coco(C2S173)`"Moon sprite shouldering a long bow."${waitVoice}${noWait}`;
   Coco(C2S174)`"Waiting inside a dream."${waitVoice}${noWait}`;
   Coco(C2S175)`"Tonight a story by moonlight."${waitVoice}${noWait}`;
   Coco(C2S176)`"Hoping the wait will be short."${waitVoice}${noWait}`;
   Coco(C2S177)`"Sleeping curled and snug."${waitVoice}${noWait}`;
   Coco(C2S178)`"Sleeping in mother's arms."${waitVoice}${noWait}`;
   `I didn't know why she was singing a lullaby. `;
   `Before I could ask her, she started talking.`;
   Coco(C2S179)`"I was waiting for you."`;
   Coco(C2S180)`"I waited and waited...for you to come..."`;
   Coco(C2S181)`"I was waiting...all alone like a moon sprite..."`;
   Kid`"T-then you should have come to me..."`;
   Coco(C2S182)`"I couldn't..."`;
   Coco(C2S183)`"That's...impossible..."`;
   Kid`"Why...?"`;
   Coco(C2S184)`"Because you wouldn't take me with you..."`;
   Kid`"...What?"`;
   Coco(C2S185)`"Will you take me to where everybody is?"`;
   Kid`"Of course I will! Let's go together right now!"`;
   `Just as I said that...`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Splash!`;
   `A wall of water exploded from near Coco's feet.`;

});
showFog2();
showTextbox();
text(() => {
   `Droplets of water scattered everywhere like mist...`;
   Coco(C2S186)`"Farewell."`;

});
bgload({ name: `BG18B2`, transition: 10 });
showTextbox();
text(() => {
   `Coco disappeared in the spray.`;

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
   `And then night came and we decided to play kick the can in the dark.`;
   `Takeshi was 'it' again and again, but finally my turn came.`;
   `I had found everyone, one after another, in the dark...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `When only Tsugumi was left, the sound of the can being kicked rang out through the Conference Room...`;
   `And just that moment I had felt that something was not right.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG09A2`, transition: 26 });
hideTextbox();
ADV_Mode();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   Kid`"But it's only been two days and so much has happened..."`;
   Kid`"Just being trapped here is an unusual state of affairs..."`;
   `The premonitions...and the ghost-like girl...`;
   `And besides that...`;
   `You's father had gone missing, and Tsugumi - well she was just plain rude - Sora was only an image and Sara...`;
   `Sara...well...what was with Sara?`;
   `Something about her stuck in my mind.`;
   `But...oh, whatever.`;
   `Anyway, the events of the past two days had been like a roller coaster.`;
   `Just too many things had happened...`;
   `It was like they said about water mills - they worked best in a fast stream but stopped when there was a flood.`;
   `The way I felt was like that. I couldn't get my mind around the intense rush of events, doubts and questions that had forced themselves on me.`;
   `They were beyond what I could digest.`;
   `I wondered what I could do about it.`;
   `My body knew what the best thing to do was.`;
   `Sleep. I needed to rest my mind.`;
   `And with that I was rapidly assaulted by fatigue and whisked off to slumberland.`;
   `..........`;
   `.......`;
   `....`;
   `But I was only briefly able to enjoy my visit.`;

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
