hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
setSceneTitle({ index: 90 });
clock(`1:39`);
showTextbox();
text(() => {
   `Daybreak. The date had changed to Sunday, May 7.`;
   `Since that time, we hadn't slept at all.`;
   `I was starting to feel badly again.`;
   `A headache, dizziness, nausea and coldness felt like they were seeping from deep in the core of my body.`;
   `I suffered from a wave of dull pain and extreme fatigue...I was only half-conscious.`;
   `Exhaustion...I had reached my limit.`;
   `But I tried to keep my energy from being sapped away.`;
   `Surrounded by darkness...and endless fear, we had fought our way this far...`;
   `And there was no sign that things were going to get better.`;
   `Communication lines with the outside were still down.`;
   `And...`;
   `We had yet to find a clue that might lead to escape.`;
   `Slowly You started to get ill, too.`;
   `Her face was pale.`;
   `Her breathing was heavy. Beads of sweat stood out on her forehead.`;
   `She seemed to have a terrible fever.`;
   `I was not the only one suffering mentally and physically. `;
   `There had been signs from the day before.`;
   `But we couldn't do anything about it. The infirmary was already underwater.`;
   `We could only endure the passing of time.`;
   `.........`;
   `.........`;
   `.........`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
bgload({ name: `BG11A1`, transition: 10 });
showTextbox();
text(() => {
   `(Is this it...?)`;
   `(Is this the end...?)`;
   `(Is giving up the only choice...?)`;
   `I looked up, helplessly.`;
   `The ceiling was crusty with cigarette smoke.`;
   `I couldn't see anything else.`;
   `(I am going to die...)`;
   `(There's nothing I can do, just die...)`;
   `That was my conclusion.`;
   `Ha ha...`;
   `Ha ha ha...`;
   `Aha ha ha ha ha.`;
   `I knew then exactly how much strength I had left.`;
   `I felt utterly...hopeless.`;
   `Useless.`;
   `Incompetent.`;
   `Yes, I would die.`;
   `And I was fine with that.`;
   `I didn't care.`;
   `Without a memory, I thought I had been the equivalent of dead to start with....`;
   `Nothing changes. I had nothing to lose.`;
   `It was already decided.`;
   `I remembered what Tsugumi had told me that...`;
   `I would die in seven days.`;
   `Her prediction was true...`;
   `(I don't care...this is the way it should be...)`;
   `I relaxed and looked down.`;
   `And I saw...`;
   `...You.`;
   `She slumped back into a chair and her breathing looked labored.`;

});
showDimOverlay();
removeBG({ mode: WHITE, transition: 2 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(Y4A061)}


${noWait}`;
   Append`${center}${nextPage(0)}Promise?${nextPage(1)}`;
   `${center}${nextPage(0)}Yeah, I promise.${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG11A1`, transition: 20 });
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Suddenly I felt the warmth I'd felt from You's fingers when I'd made my promise again in my fingertips.`;
   `You...`;
   `Yes...if I didn't do anything, You would die, too.`;
   `No...I wouldn't let that happen!`;
   `I don't care if I die, but You...You is...`;
   `Somehow I had to save her.`;
   `Because I had promised.`;
   `Promised....`;
   `(How could I...how...)`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
showTextbox();
text(() => {
   `.........`;
   `.........`;
   `.........`;
   `Then...`;

});
hideTextbox();
stopBGM();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`4:17`);
showTextbox();
text(() => {
   `There was only a short time until the estimated time of implosion.  `;

});
hideTextbox();
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
delay({ interval: 120 });
showTextbox();
text(() => {
   `The Security Office started shaking violently.`;
   `The complex screeched.`;

});
eff_41 = 11;
eff_42 = 8;
eff_50 = 144;
showDimInAndOutAnim();
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Alarms pierced the air with shrill warnings.`;

});
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(YBD000)`"The partition strength limits...have been exceeded."`;
   Sora(YBD001)`"Flooding has started on each floor."`;
   Sora(YBD002)`"Flooding has begun in Sector 4 of Zweite stock...implosion has begun in Sector 5 on the same floor...in Sector 6..."`;
   `Sora reporting the situation in a monotone.`;
   Sora`"......"`;
   Kid`"...What's wrong? What else?" `;

});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(YBD003)`"No, I leave it at that...this report now means nothing..."`;
   Sora(YBD004)`"Flooding has started in this sector, too...it won't be long until damage will appear here."`;
   Kid`"I see......"`;
   Kid`"How long do you think this will hold?"`;
   Sora(YBD005)`"20 to 25 minutes......"`;
   Sora(YBD006)`"But it could implode at any time."`;

});
hideTextbox();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
eff_4f = 120;
eff_3b = 1;
eff_3c = VAR_cc_0_6;
eff_3d = 12;
eff_3e = 2;
eff_3f = VAR_c8_0_6;
eff_40 = 5;
openShakeScreenAnim();
delay({ interval: 30 });
eff_41 = 4;
eff_42 = 12;
eff_50 = 0;
showDimInAndOutAnim();
delay({ interval: 10 });
monoColorOverlay({ interval: 0, color: BLACK });
closeDimInAndOutAndFilterAnim();
setMonoColorOverlayFadeOutDuration(21);
fadeOutMonoColorOverlay();
unSkippableDelay(8);
bgload({ name: `BG11A2`, transition: 20 });
showTextbox();
text(() => {
   `The normal lighting went out and the emergency lighting kicked in.`;
   `I figured that the Generator Room was probably damaged.`;

});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(YBD007)`"I couldn't save you two after all..."`;
   Sora(YBD008)`"I am......really...truly...sorry..."`;
   Sora(YBD009)`"...Truly...."`;
   Kid`"Don't be.... It's not your fault."`;
   Kid`"I think you did a great job."`;
   Sora`"..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I headed over to be beside You.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"You, this place isn't going to hold...let's go."`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `You was completely weakened.`;
   `She looked up powerlessly and nodded slightly.`;
   You(YBD010)`"....Mmm."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I carried You on my back.`;

});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(YBD011)`"Where are you going?"`;
   Kid`"I don't know.... Somewhere where we can gain a little more time."`;
   Kid`"I intend to stake our lives on the possibility that we would be rescued until the very end."`;
   Kid`"I can't think of anything to do other than that..."`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Kid`"I promised her......that I would protect her no matter what."`;
   Sora`"......"`;
   Kid`"Where is the safest place left among the floors?"`;
   Sora(YBD012)`"That would be the Control Room on Dritte stock, or......"`;
   Sora(YBD013)`"But it is only a matter of a few dozen minutes difference."`;
   Kid`"That's enough......"`;
   `I was going to leave the room...but I suddenly stopped.`;
   Kid`"What are you going to do, Sora?"`;
   Sora(YBD014)`"I will not be able to accompany you two any more."`;
   Sora(YBD015)`"Due to flooding, image broadcasting devices in the complex have been significantly damaged."`;
   Sora(YBD016)`"The places I can appear are limited."`;
   Sora(YBD017)`"But at the very least, I want to guide you two to the Control Room via my audio function."`;
   Kid`"Alright. Please do."`;
   Sora(YBD018)`"Yes......"`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG25B4`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `When I left the room, I found water leaking from walls in spots.`;
   `The bulkheads squealed.`;
   Sora(YBD019)`"I will guide you.... I will show you the route to the Control Room which is still safe..."`;

});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 120 });
bgload({ name: `BG26B4R`, transition: 20 });
showTextbox();
text(() => {
   `We went down to the third floor.`;
   `LeMU was still holding.`;
   `The estimated time of implosion that Sora had predicted should have passed long before.`;
   `LeMU kept resisting to the end as if Sora was willing it to protect us.`;
   You(YBD020)`"*Pant*, *pant*, *pant*......"`;
   `You gasped, suffering terribly as I carried her on my back.`;
   Kid`"Be strong. Be patient. It's just a little further..."`;
   `I lied.`;
   `I was a liar.`;
   `A little more patience...and then what?`;
   `There was nothing I could do.`;
   `So I lied....`;
   `....I was a big liar!`;

});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG25B4`, transition: 20 });
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   `We were close to the Control Room......`;
   `And again......I saw it.`;
   `The vision of the little girl....`;
   You(YBD021)`"...What...what's the matter...?"`;
   `She stood across the corridor.`;
   `Her eyes met mine.`;
   `And then a name flashed in my mind, as clear as a bell.`;
   Kid`"...Coco!"`;
   Sora(YBD022)`"Kid, what is the matter?"`;
   `Turning on her heels, Coco ran off in the other direction.`;
   `I chased after her, still carrying You.`;
   Kid`"Cocoooo!"`;
   Sora(YBD023)`"Kid! Please come back! There is...!"`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `I was chasing after her at full speed.`;
   `But the flooding and shaking ground slowed me down.`;
   `From the beginning it was a crazy, reckless idea - to run after her with You on my back.`;
   `......I lost sight of her.`;

});
bgload({ name: `BG30B2`, transition: 20 });
showTextbox();
text(() => {
   `It was a dead end in a narrow corridor in front of a small door.`;
   `Where is this...?`;
   `I thought that maybe she was beyond the door.`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `In that instant I glimpsed something in my head.`;
   `It was a vague, abstract image.`;
   `I wasn't sure...but definitely....`;
   `I felt it. I could see it.`;
   `...That there should be a beam of hope ahead.`;
   `I lowered You and tried to open the door of Himmel.`;
   `But the door wouldn't budge.`;
   Kid`"Sora! Open this door!"`;
   Sora(Y7A131)`"It's impossible. That door is out of my jurisdiction."`;
   `I pounded on the door.`;
   Kid`"I know it...on the other side of this door...!"`;
   Kid`"You will be safe in there! Please! Open this door!!!"`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE02_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash!`;
   `Water spouted fiercely from the corridor wall.`;

});
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c2_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c1_0_6;
eff_40 = 1;
openShakeScreenAnim();
showTextbox();
text(() => {
   `An animal-like growl echoed from faraway. `;
   `The complex pitched violently.`;
   `I saw a massive amount of water...flooding down the corridor ahead.`;
   `It was as if a pitch-black monster were opening its massive mouth to attack.`;
   `I ran frantically to You.`;
   `I felt as if I were moving in slow motion.`;
   `...I won't make it!`;
   `For an instant, time stopped...and then it started again.`;
   `The water swallowed us in a moment.`;

});
removeBG({ mode: BLACK, transition: 2 });
closeShakeScreenAnim();
showTextbox();
text(() => {
   `In the water, my eyes met You's.`;
   `She was trying desperately to reach her hand out.`;
   `I held her hand. You squeezed mine back.`;
   `You mumbled something.`;
   `But the words didn't reach me.`;
   `The words just changed into small bubbles...and vanished in the darkness.`;
   `You slowly closed her eyes.`;
   `(...You?)`;
   `(What? What did you say...?)`;
   `(Of course I want to know...)`;
   `I shook her hand. There was no response.`;
   `(That's not fair......)`;
   `(She is teasing me again...)`;
   `I touched her cheek.`;
   `It was cold.`;
   `(Cold......)`;
   `(Of course...it's because we're in the water......)`;
   `(Ha, ha, ha......it's because we are in this cold water...)`;
   `I squeezed her hand.`;
   `(Hey.)`;
   `(I said, hey......)`;
   `(Hey, You, tell me......)`;
   `She didn't squeeze my hand back.`;
   `She didn't move.`;
   `She didn't tell me anything any more.`;
   `(......)`;
   `(......)`;
   `(......)`;
   `(...It's not true.)`;
   `(No, no, no...it's a lie...)`;
   `(This can't be true......! It has to be a lie...!)`;
   `(This is a lie......!)`;
   `I let go the last breath from my lungs.`;
   `I closed my eyes to avert them from reality.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playBGM({ num: 21, volume: 100 });
bgload({ name: `EV_YU03A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   You(Y4A061)`"Promise?"`;
   Kid`"Yeah, I promise."`;
   You(Y4A062)`"And what if......you break it?"`;
   Kid`"I won't. I'll see that you're safe."`;
   You(Y4A063)`"For sure? There's not even a 1 percent chance you're wrong?"`;
   Kid`"There is not even a 0.00000000000000001 percent possibility."`;
   You`"......"`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   You(Y4A064)`"Talk about promising more than you can deliver..."`;
   You(Y4A065)`"Oh well, I suppose I'll have to trust you."`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 2 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `(I didn't make it......)`;
   `(I couldn't keep my promise......)`;
   `(I couldn't protect her......)`;
   `(I was a liar......)`;
   `(......A damn liar!!!)`;

});
hideTextbox();
delay({ interval: 120 });
monoColorOverlay({ interval: 36, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Just at that moment, I felt a soft, warm light.`;
   `A light?`;
   `A ray of light sliced through the plain dark world.`;
   `The door of Himmel started to open...`;
   `Beyond the door spread a dazzling white world.`;
   `Heaven....`;
   `Heaven...was it an illusion?`;
   `......No, it wasn't.`;
   `This was reality.`;
   `This was undoubtedly the truth of my world.`;
   `I knew that......`;
   `If we went to the place...`;
   `On the other side of the door......`;
   `We could meet again.`;
   `This time I might be able to protect her.`;
   `......You.`;

});
hideTextbox();
stopBGM();
delay({ interval: 60 });
showTextbox();
text(() => {
   `I......`;
   `Quietly......`;
   `Opened my eyes.`;

});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 180 });
g_you_bd_cleared = 1;
g_kid_bd__cleared = 1;
l_ending = `you_bd`;
l_choice = 0;
jump(`Y_ED`);
