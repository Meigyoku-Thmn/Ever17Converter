setDialogBoxColor(BLUE);
setSceneTitle({ index: 98 });
varop(`(28 0a a4) b0 := (00) 0`);
varop(`(28 0a a4) b1 := (00) 0`);
varop(`(28 0a a4) b2 := (00) 0`);
removeBG({ mode: BLACK, transition: 01 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard a song coming from somewhere...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a soft, but somehow lonely voice 
singing.`;
   waitForClick; clearText; 
});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   sound(`S6A000`); appendText; delay(0); 
   Narr`      `;
   nextPage(00); 
   Narr`Moon sprite shouldering a long bow.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A001`); appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`Waiting inside a dream.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A002`); appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`Tonight a story by moonlight.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A009`); appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`Hoping the wait will be short.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A004`); appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`Sleeping curled and snug.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A005`); appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`Sleeping in mother's arms.`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   sound(`S6A006`); appendText; delay(0); 
   Narr`    `;
   nextPage(00); 
   Narr`Water sprite lifting a pair of paddles.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A007`); appendText; delay(0); 
   Narr`            `;
   nextPage(00); 
   Narr`Waiting inside a dream.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A008`); appendText; delay(0); 
   Narr`          `;
   nextPage(00); 
   Narr`Tonight the whirlpool demon, 
`;
   appendText; delay(0); 
   Narr`               waiting for a boat`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A009`); appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`Hoping the wait will be short.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A010`); appendText; delay(0); 
   Narr`          `;
   nextPage(00); 
   Narr`Rock, rock, rocked to sleep.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S6A011`); appendText; delay(0); 
   Narr`     `;
   nextPage(00); 
   Narr`Sleeping, sleeping held by the ocean.`;
   nextPage(01); waitForSound; nextPage(04); 
});
hideTextbox();
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 6`);
varop(`(28 0a a4) b2 := (00) 6`);
chapterCutin({ name: `00000000` });
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
hideTextbox();
AVL_Mode();
showDimOverlay();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`10:26`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I awoke with a nostalgic feeling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I found myself on a narrow bed in the 
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking up at the white ceiling, I gently 
nodded off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My memories slowly came back to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Flooding in the Cosmic Whale and saving Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara coming back to life...`;
   waitForClick; clearText; marker; appendText; 
   Narr`My fever worsening and then my collapsing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked over to the bed next to mine.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was asleep on the bed next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her breathing was regular and her cheeks 
flushed a healthy pink.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Feeling a bit relieved, I let myself half-doze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From far away I could hear faint voices.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They seemed to come from an incredible 
distance, and were all jumbled together, 
but they sounded like Tsugumi and Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Their voices echoed slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The words were too faint for me to make out 
what they were saying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were talking about Hammel or Harmeln 
something. Words that I thought I had heard 
before, but the sounds quickly changed in my 
mind to meaningless garble.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a while the voices stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Out of habit, I touched my pinky to the thumb 
of my left hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt a bit strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my left hand and stared at the thumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was strange, out of place.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The blurriness of my vision suddenly came into 
focus.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The scar was gone!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why? How could it be gone?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly sat up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stared over my left hand again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The scar was nowhere to be found.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure there had been a scar there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered noticing it when I had opened the 
elevator to rescue Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had it just been a figment of my imagination?`;
   waitForClick; clearText; marker; appendText; 
   Narr`No...I was sure it hadn't been. I was positive 
there had been a scar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...why had the scar suddenly vanished?`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sense of loss flooded through me making me 
feel like I had a gaping hole in my heart.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sensed that I had lost something critically 
important, but I was unsure of what.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was how I felt.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora! Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Forgetting that Sara was sleeping, I shouted 
out for Sora.`;
   waitForClick; clearText; marker; sound(`S6A012`); appendText; 
   Sora`"Yes, Kid. What is it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's voice answered me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora...did you do something to me?"`;
   waitForClick; clearText; marker; sound(`S6A013`); appendText; 
   Sora`"Something...what do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't pretend you don't know! There was 
a...scar on my left hand!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...it's gone now!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A014`); appendText; 
   Sora`"Oh, so that is what you mean."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora appeared in the entrance to the room.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you talking about?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S6A015`); appendText; 
   Sora`"While you were sleeping I extracted it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Extracted what?"`;
   waitForClick; clearText; marker; sound(`S6A016`); appendText; 
   Sora`"Perhaps you should come over here."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I approached the examination table as Sora 
suggested.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A017`); appendText; 
   Sora`"This."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora pointed to a small shard suspended by a 
manipulator arm above the examination table.`;
   waitForClick; clearText; marker; sound(`S6A018`); appendText; 
   Sora`"This was embedded in your thumb, so 
I extracted it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What...gave you the right to do that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It could have been a clue leading to my past!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I let loose on Sora without thinking.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S6A019`); appendText; 
   Sora`"Yes, you are exactly right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A020`); appendText; 
   Sora`"However, no good can come of leaving a 
foreign object in your body to fester."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A021`); appendText; 
   Sora`"More importantly..."`;
   waitForClick; clearText; marker; sound(`S6A022`); appendText; 
   Sora`"Kid, do you recall seeing this fragment 
before?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No! How could I?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't make sense to me why Sora would 
ask such a thing.`;
   waitForClick; clearText; marker; sound(`S6A023`); appendText; 
   Sora`"This fragment has an image recorded on it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora continued speaking calmly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"An image?"`;
   waitForClick; clearText; marker; sound(`S6A024`); appendText; 
   Sora`"Would you like to see it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pinched the shard that had been buried in my 
thumb between my fingers.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"T-this...?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET02C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It had the same holographic image as in Sara's 
pendant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a picture of a man, floating there.`;
   waitForClick; clearText; marker; sound(`S6A025`); appendText; 
   Sora`"Can you see it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, I can see it..." `;
   waitForClick; clearText; marker; sound(`S6A026`); appendText; 
   Sora`"This hologram was designed so that it only 
can be seen when viewed with light of a 
certain wavelength."`;
   waitForClick; clearText; marker; sound(`S6A027`); appendText; 
   Sora`"Right now I am using LeMMIH to shine the 
proper light on it."`;
   waitForClick; clearText; marker; sound(`S6A028`); appendText; 
   Sora`"I could not confirm the date of manufacture 
of this hologram, but it is undoubtedly very 
old."`;
   waitForClick; clearText; marker; sound(`S6A029`); appendText; 
   Sora`"Its makeup is fundamentally different from 
the ones being sold at the LeMU's kiosks."`;
   waitForClick; clearText; marker; sound(`S6A030`); appendText; 
   Sora`"In the past, holograms were recorded using an 
interference pattern made from an object beam 
and a reference beam."`;
   waitForClick; clearText; marker; sound(`S6A031`); appendText; 
   Sora`"Put simply, the object beam is the light 
reflected off of the object."`;
   waitForClick; clearText; marker; sound(`S6A032`); appendText; 
   Sora`"The reference beam is the light that 
interferes with the object beam. 
Do you understand?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora continued on without giving me time 
to think.`;
   waitForClick; clearText; marker; sound(`S6A033`); appendText; 
   Sora`"And now comes the important part..."`;
   waitForClick; clearText; marker; sound(`S6A034`); appendText; 
   Sora`"In order to make this hologram appear..."`;
   waitForClick; clearText; marker; sound(`S6A035`); appendText; 
   Sora`"Light, which is the same wavelength as the 
reference beam used to record the image, 
must be shined upon it."`;
   waitForClick; clearText; marker; sound(`S6A036`); appendText; 
   Sora`"So, to sum up, it is like this."`;
   waitForClick; clearText; marker; sound(`S6A037`); appendText; 
   Sora`"The image on this fragmented hologram was 
recorded using light that was a certain 
wavelength."`;
   waitForClick; clearText; marker; sound(`S6A038`); appendText; 
   Sora`"And in order to see the image you must shine 
light of the same wavelength on it."`;
   waitForClick; clearText; marker; sound(`S6A039`); appendText; 
   Sora`"It also cannot be seen under fluorescent 
light."`;
   waitForClick; clearText; marker; sound(`S6A040`); appendText; 
   Sora`"You must use light generated by 
a heat-emitting light source, such as sunlight 
or the flame of a lighter."`;
   waitForClick; clearText; marker; sound(`S6A041`); appendText; 
   Sora`"And..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora continued her explanation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said the special wavelength of light was 
infrared and around 850 nm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And that ordinary people couldn't see infrared 
light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She went on to say that if a person were able 
to see infrared they would even be able to see 
in the dark.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that they could only see objects that 
emitted heat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Put another way, objects that gave off heat 
also emitted infrared rays.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And if you could see infrared rays, then you 
could tell the temperature of something 
without having to touch it...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A042`); appendText; 
   Sora`"You would not be able to see this image 
unless you can see infrared light."`;
   waitForClick; clearText; marker; sound(`S6A043`); appendText; 
   Sora`"The fact that you can see this image means 
that you can see infrared light, Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...what about Sara? Does that mean that 
Sara can, too?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A044`); appendText; 
   Sora`"Yes. Both of you have a very unique ability 
to see infrared light."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking back on it, that probably explained 
why Takeshi and You couldn't see the image in 
the pendant.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...why was this hologram in my finger...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I trembled as I said this.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's the same image as in Sara's pendant..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are you saying that the missing piece of that 
pendant has been in my thumb?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A045`); appendText; 
   Sora`"That is the only conceivable explanation."`;
   waitForClick; clearText; marker; sound(`S6A046`); appendText; 
   Sora`"The surface and shape of the fragment match 
the pendant perfectly."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...why...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A047`); appendText; 
   Sora`"That...Kid..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S6A048`); appendText; 
   Sora`"Is because you and Sara are siblings."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It can't be..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S6A049`); appendText; 
   Sora`"It is the same reason that you both have the 
ability to see infrared light."`;
   waitForClick; clearText; marker; sound(`S6A050`); appendText; 
   Sora`"It is probably because you both carry the 
same genes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...no...no..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A051`); appendText; 
   Sora`"Kid. Why wouldn't that make you happy?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A052`); appendText; 
   Sora`"You have found a blood relative."`;
   waitForClick; clearText; marker; sound(`S6A053`); appendText; 
   Sora`"Is there any better way possible to recover 
your memory?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...no..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held my head and crouched down.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A054`); appendText; 
   Sora`"In either case, it is a fact and you should 
accept it."`;
   waitForClick; clearText; marker; sound(`S6A055`); appendText; 
   Sora`"While you two were asleep I performed a DNA 
analysis on both of you."`;
   waitForClick; clearText; marker; sound(`S6A056`); appendText; 
   Sora`"The results are indicated on the display."`;
   waitForClick; clearText; marker; sound(`S6A057`); appendText; 
   Sora`"The probability that you are brother and 
sister is...nearly 100 percent."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No...no...no...no...no...no... 
no...no...no...no...no...no...!"`;
   waitForClick; clearText; 
});
varop(`(28 0a a2) 41 := (00) 7`);
varop(`(28 0a a2) 42 := (00) 8`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly, the wall to my memory that I had 
tried so hard to destroy, but I had been 
unable to breach, crumbled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a dam that was holding back the overflow 
of my memory, it burst, unleashing a torrent 
of images that flooded into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uggghhh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Memories of my life, in no apparent order, 
flashed across my mind like random slides 
appearing on a screen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From one to the next they floated up and 
vanished.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind couldn't handle the flood of memories.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
closeDimInAndOutAndFilterAnim();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then came the darkness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard a lullaby coming from somewhere...`;
   waitForClick; clearText; 
});
hideTextbox();
playVoice($`S6A006`);
delay({ interval: 25 });
playVoice($`S6A007`);
delay({ interval: 68 });
playVoice($`S6A008`);
delay({ interval: 65 });
playVoice($`S6A009`);
delay({ interval: 56 });
playVoice($`S6A010`);
delay({ interval: 12 });
playVoice($`S6A011`);
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
setSceneTitle({ index: 99 });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I groggily opened my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was lying on a hard bed.`;
   waitForClick; clearText; 
});
hideTextbox();
playVoice($`S6A058`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I heard a voice crying from outside.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA14A`, transition: 20 });
playBGM({ num: 22, volume: 97 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was a girl surrounded by a group of 
bullies in an open space.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kids were being cruel, jeering her and 
making fun of her in only the way that kids 
can.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran up to Sara.`;
   waitForClick; clearText; 
});
hideTextbox();
playVoice($`S6A059`);
playVoice($`S6A060`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The bullies scattered like baby spiders 
in the wind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara said that her precious pendant 
had been broken.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara clutched the pendant firmly in her hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I bent over to pick up the fragment from it.`;
   waitForClick; clearText; 
});
hideTextbox();
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I felt a sudden shock from behind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was plunged forward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With a sharp pain the shard was buried in my 
thumb.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA14B`, transition: 10 });
playVoice($`S6A061`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The kids that always bullied Sara had 
encircled us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The laughter and howls of our tormentors 
echoed around us.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You bullies! How could you do this to Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Forgetting myself, I lunged at the mob of kids.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 30 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They beat me mercilessly, and as I lay on the 
ground in that open space I faced skyward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Satisfied with what they had done to me, the 
bullies had left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara came and held out her hands to me.`;
   waitForClick; clearText; marker; sound(`S6A062`); appendText; 
   Sara`"You are so brave, brother."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled as she said it.`;
   waitForClick; clearText; 
});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`              `;
   nextPage(00); 
   Narr`Even though I lost.`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Blood continued to drip from my finger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not wanting to worry Sara I pretended that 
everything was fine, and dismissed it as 
nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't say anything to our teacher.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't go to the doctor. I just silently 
endured the pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to me that to tell someone of it 
would that mean I had lost.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In time, the wound closed up...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then one day, a nice lady in a suit came.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She told us there was a place we could go 
where things would be better.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying this the lady held out her hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could see things that other people
couldn't.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At first we thought our abilities were normal, 
but everyone had shunned us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lady said she wanted to study us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to go along with the idea.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our caretakers at the orphanage where lived 
happy see us leave, because they thought 
we were troublemakers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We fell right into their trap.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG37A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They locked us in a small hospital room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Day in and day out we were marched from that 
room to the research institute.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At night moonlight would stream in from the 
lone window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only things I remember are the Leiblich 
logos on the doors we passed every day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the white frocks of the research employees.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And every night, the voice of Sara crying in 
the room next to me...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One day, there was something in the air that 
was different from other days.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were taken from our rooms and led to a 
research office in a different area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`People who I'd never seen before took me away.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgloadCrop({ name: `EV_SA14C`, transition: 26, x: 90, y: 67, hx: 620, hy: 472 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara alone was left there.`;
   waitForClick; clearText; marker; sound(`S6A063`); appendText; 
   Sara`"Brother!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could hear Sara's screams.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook off the adult hands and ran to where 
Sara was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The researchers tried to block my path.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; marker; sound(`S6A064`); appendText; 
   Sara`"Brother!"`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_SA14C`, transition: 20, x: 72, y: 58, hx: 680, hy: 510 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sara! Wait for me!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'll come back for you. I promise, I will 
come find you!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Be a good girl and wait for me!"`;
   waitForClick; clearText; 
});
bgloadCrop({ name: `EV_SA14C`, transition: 20, x: 17, y: 16, hx: 740, hy: 555 });
showTextbox();
text(() => {
   marker; sound(`S6A065`); appendText; 
   Sara`"I'll be good and wait for you..."`;
   waitForClick; clearText; marker; sound(`S6A066`); appendText; 
   Sara`"But come for sure. You come to get me for 
sure. Okay?"`;
   waitForClick; clearText; marker; sound(`S6A067`); appendText; 
   Sara`"I'll wait...I'll wait forever!"`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `EV_SA14C`, transition: 20 });
monoColorOverlay({ interval: 18, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`I had promised.`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`That was how things were.`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`Back then I had promised.`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`         `;
   nextPage(00); 
   Narr`I had promised to go get her.`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`              `;
   nextPage(00); 
   Narr`But...I hadn't gone.`;
   nextPage(01); delay(60); 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 `;
   nextPage(00); 
   Narr`I couldn't go.`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was moved to another facility and, after a 
while, I was taken to a new home.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My foster parents were good people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were good to me if I didn't get out of 
line.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...they had sold their souls to and were 
controlled by Leiblich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I passed my time under their forgiving but 
ever present eyes not being able to search 
for Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, there were times when I did my best 
to find leads to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't even know where the research 
facility was and something would always get 
in my way and after a while I couldn't search 
anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just hadn't been able to help Sara with 
my limited powers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...no matter what excuses I came up with 
the result was the same.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had abandoned Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the isolated clinic room into which the 
cold moonlight shined.`;
   waitForClick; clearText; 
});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`        `;
   nextPage(00); 
   Narr`I couldn't keep...my promise...`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_SA14C`, transition: 26 });
hideTextbox();
AVL_Mode();
showDimOverlay();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even now, Sara was on the other side 
of the door....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew that she was still waiting for me in 
that miserable little room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still believing in me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as I had promised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sense of guilt I felt overpowered me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It left me with an agonizing sense of 
hopelessness. `;
   waitForClick; clearText; marker; appendText; 
   Narr`And utter despair. `;
   waitForClick; clearText; 
});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`

`;
   appendText; delay(0); 
   Narr`         There was nothing I could do!`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`        I didn't have any other choice!`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`          What else could I have done?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
stopBGM();
delay({ interval: 60 });
bgload({ name: `BG09A1`, transition: 26 });
hideTextbox();
AVL_Mode();
playBGM({ num: 13, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`12:4`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I opened my eyes, I was lying on a bed in 
the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if someone had brought me there 
or I had dragged myself unconsciously.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at my watch without thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not much time had passed since I had 
passed out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Laying on the bed, I looked up at the ceiling 
and thought about the events leading up to 
this point.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The reason I had known that it was too hot 
inside the Generator Room was my infrared 
vision.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the 'moonlight' coming from the inverter 
unit had the been the same thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness I had mistaken the heat from 
the inverter as moonlight. `;
   waitForClick; clearText; marker; appendText; 
   Narr`And the shock that I felt when I met Sara 
made sense, too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were siblings after all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Probably, even without my memory, in the back 
of my mind I had known.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's why...the first time I had seen Sara...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And why had she grasped my thumb in the 
darkness?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why had she sung that lullaby that time?`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG10A1`, transition: 26 });
fgload({ id: 1, name: `SA05ADL`, x: 320, useAnim: false });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; sound(`S4A079`); appendText; 
   Sara`"You really don't know?" `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S4A080`); appendText; 
   Sara`"Oh I see...that's right..."`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It seemed to me that Sara had probably noticed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That we were brother and sister...`;
   waitForClick; clearText; marker; appendText; 
   Narr`So...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I raised myself up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was still asleep in the bed next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood next to Sara's pillow and stared down 
at her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My memory was still a little jumbled, but 
there was no mistaking that face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Little Sara had grown to be 16.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had to be her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure it was Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sister that I had made a promise to find, 
but then broke...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt so guilty and ashamed. I couldn't 
look at Sara's face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard just being there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to say to Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What excuses could I make to her?`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter what I said to her, it would all 
ring hollow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to get out of there before Sara 
woke up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked toward the door.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`S6A068`); appendText; 
   Sara`"Bro...ther...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With her voice, my legs stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have the courage to turn around.`;
   waitForClick; clearText; marker; sound(`S6A069`); appendText; 
   Sara`"You...you are my brother, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara continued talking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Each of her words was like a stab in the heart.`;
   waitForClick; clearText; marker; sound(`S6A070`); appendText; 
   Sara`"Brother?"`;
   waitForClick; clearText; 
});
playBGM({ num: 15, volume: 97 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spit out the words without thinking.`;
   waitForClick; clearText; marker; sound(`S6A071`); appendText; 
   Sara`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're wrong...about me."`;
   waitForClick; clearText; marker; sound(`S6A072`); appendText; 
   Sara`"That...can't be."`;
   waitForClick; clearText; marker; sound(`S6A073`); appendText; 
   Sara`"You are my brother, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sensed that Sara was about to get up from 
the bed so I tried to leave.`;
   waitForClick; clearText; marker; sound(`S6A074`); appendText; 
   Sara`"Wait!"`;
   waitForClick; clearText; marker; sound(`S6A075`); appendText; 
   Sara`"Brother, wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice sounded just like when she had cried 
out to me when she was a child, and I froze, 
unable to move.`;
   waitForClick; clearText; marker; sound(`S6A076`); appendText; 
   Sara`"You are my brother.... You are, aren't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara grabbed my shoulders.`;
   waitForClick; clearText; marker; sound(`S6A077`); appendText; 
   Sara`"Hey, why don't you say something? Look at me!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara circled around in front of me, all the 
time holding my shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't bear to look Sara in the face 
and turned away.`;
   waitForClick; clearText; marker; sound(`S6A078`); appendText; 
   Sara`"Hey. Why won't you look at me?"`;
   waitForClick; clearText; marker; sound(`S6A079`); appendText; 
   Sara`"Hey, look at me."`;
   waitForClick; clearText; marker; sound(`S6A080`); appendText; 
   Sara`"I said, look at me!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, no, no!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook off Sara's hands.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A081`); appendText; 
   Sara`"Aaah!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara threw her arms around me hugging me 
tightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's eyes stared directly at me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A082`); appendText; 
   Sara`"Why? Why are you denying me?"`;
   waitForClick; clearText; marker; sound(`S6A083`); appendText; 
   Sara`"You are my brother, right? You are, aren't 
you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, no. I'm..."`;
   waitForClick; clearText; marker; sound(`S6A084`); appendText; 
   Sara`"Why not? I know you are!"`;
   waitForClick; clearText; marker; sound(`S6A085`); appendText; 
   Sara`"You're my brother...my brother!"`;
   waitForClick; clearText; marker; sound(`S6A086`); appendText; 
   Sara`"I waited for you. I waited and waited!"`;
   waitForClick; clearText; marker; sound(`S6A087`); appendText; 
   Sara`"I waited forever for you to come!"`;
   waitForClick; clearText; marker; sound(`S6A088`); appendText; 
   Sara`"Brother..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara fell to the ground, and I said nothing 
to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just ran out of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's right, I ran away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran from Sara and from my past...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 90 });
bgload({ name: `BG14A1`, transition: 26 });
playBGM({ num: 16, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I squatted in the small room in the back of 
the warehouse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was just keep running away from 
Sara and my past.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was such a coward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Overcome by the memories that had come rushing 
back to me, I had run away from my sister...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't even accept my own weakness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I denied myself. It was less scary than 
acknowledging what I had done.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...I...I was such a coward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had I known this would happen...I would have 
never wanted my memory back...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Things were better when I didn't remember 
anything...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Crouched there in the corner, I was paralyzed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't face Sara...my own sister...all I 
could do was watch the time pass by.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My memory had been completely restored, apart 
from recent events.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I knew my age, address and phone number...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I also remembered my foster mother and father.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Still...there was just one crucial thing that 
I couldn't remember.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                  That was...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                   My name...`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`               What was my name?`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`               What was I called?`;
   waitForClick; 
   Narr`
`;
   appendText; delay(0); 
   Narr`                 I didn't know.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Why was that the only thing that I couldn't 
remember?`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as I couldn't remember that, I felt 
incomplete.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if the essence of my existence were 
concentrated into my name.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as I couldn't remember my name, 
I couldn't feel complete.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was how I felt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how much else I remembered, that one 
point escaped me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I thought back...about what it was that 
had made me lose my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The massive guilt I felt toward Sara...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if that was why I had repressed 
my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was too much about that theory that 
didn't make sense.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had lost my memory before meeting Sara...and 
before the accident at LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I couldn't remember what I was doing just 
before then, or why I had come to LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It might have been that I had seen Sara at 
LeMU... and then it had happened...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But something didn't seem right about that 
either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't imagine why only my name and recent 
events would not come back to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had already remembered Sara...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It would make sense for me to remember 
everything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what kind of amnesia...it 
might be...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
delay({ interval: 180 });
setSceneTitle({ index: 100 });
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
bgload({ name: `BG14A1`, transition: 26 });
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c1_0_6`);
varop(`(28 0a a2) 3d := (00) 1`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c2_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:31`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A sudden sound and shaking made me look up.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next instant, warning alarms started 
shrieking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All around me the squeal of straining metal 
echoed from the structure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The shaking continued on and off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`W-what...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran out of the room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Water?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I noticed something strange as I emerged in 
the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Water was flowing in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't believe that water could have 
reached here.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A089`); appendText; 
   You`"Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You, what is this? Did something happen?"`;
   waitForClick; clearText; marker; sound(`S6A090`); appendText; 
   You`"I'll explain later. For now just hurry over 
here."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W-what?"`;
   waitForClick; clearText; marker; sound(`S6A091`); appendText; 
   You`"I found a way out!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where?"`;
   waitForClick; clearText; marker; sound(`S6A092`); appendText; 
   You`"I'll explain it later. Just hurry up!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With those words of encouragement, You started 
running.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopSFX()
closeShakeScreenAnim();
bgload({ name: `BG25B3`, transition: 26 });
playBGM({ num: 10, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She turned the corner heading for stairs 
leading to an emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about everybody else?"`;
   waitForClick; clearText; marker; sound(`S6A093`); appendText; 
   You`"Takeshi is going to get Mayo. Tsugumi is 
already at the emergency corridor."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We dashed toward the stairs to the emergency 
corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And climbed to the emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi, Tsugumi and Sara were already 
gathered there.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADS`, name2: `KB05ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A094`); appendText; 
   Takeshi`"Hurry, we don't have much time."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What happened?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A095`); appendText; 
   Takeshi`"Just hurry."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, he started running ahead of 
everyone else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi followed suit.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A096`); appendText; 
   You`"Listen. LeMU is already starting to collapse."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You pushed my back, encouraging me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started running.`;
   waitForClick; clearText; marker; sound(`S6A097`); appendText; 
   You`"We were finally able to make contact with 
the surface and now the emergency stairs 
are accessible."`;
   waitForClick; clearText; marker; sound(`S6A098`); appendText; 
   You`"But if we don't hurry, they're 
going to flood."`;
   waitForClick; clearText; marker; sound(`S6A099`); appendText; 
   You`"So just hurry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You explained the situation from behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed Takeshi and Tsugumi as we sprinted 
the distance of the emergency stairs.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We soon reached the stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Tsugumi were already climbing.`;
   waitForClick; clearText; marker; sound(`S6A100`); appendText; 
   Takeshi`"Hurry! This way!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's voice rang down from above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran following the sound of their footsteps.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we were trying to escape, LeMU began to 
shake and screech as metal clashed with metal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But we just kept climbing, moving toward the 
top.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the sound of everyone's labored breathing 
and running footsteps on stairs echoed 
throughout the emergency stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; sound(`S6A101`); appendText; 
   Takeshi`"Just a little more! We're almost there!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi shouted up ahead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's voice was full of hope.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was then that we realized it.`;
   waitForClick; clearText; marker; sound(`S6A102`); appendText; 
   You`"Mayo...Mayo...Mayo isn't here!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shouted it.`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S6A103`); appendText; 
   Takeshi`"What'd you say?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stopped and looked back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stood on the stairs, stunned and looking 
downward.`;
   waitForClick; clearText; marker; sound(`S6A104`); appendText; 
   You`"What happened? She was right behind me!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A105`); appendText; 
   Takeshi`"What happened?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and the others came down the stairs.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A106`); appendText; 
   You`"Takeshi, Mayo...Mayo isn't here!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A107`); appendText; 
   Takeshi`"Geez...Didn't you check to see that 
she was behind you?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S6A108`); appendText; 
   You`"She was right behind me from the start!"`;
   waitForClick; clearText; marker; sound(`S6A109`); appendText; 
   You`"Part way up I got so into climbing..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
stopBGM();
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
bgload({ name: `BG29A2`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setNumberOfFlash(2);
setFlashRGBColor(0, 0, 0);
triggerFlash();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The stairs shook violently and there was a 
large sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the same time, the lights that dimly lit 
the stairs went out.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A110`); appendText; 
   Takeshi`"Damn! A blackout. We can't go back now."`;
   waitForClick; clearText; marker; sound(`S6A111`); appendText; 
   Takeshi`"If we double back, everyone's a goner!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A112`); appendText; 
   You`"But!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'll go."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S6A113`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'll go back. Everybody keep going."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Without waiting for a reply, I started rushing 
down the stairs I had just climbed.`;
   waitForClick; clearText; marker; sound(`S6A114`); appendText; 
   Takeshi`"Hey, Kid!"`;
   waitForClick; clearText; marker; sound(`S6A115`); appendText; 
   You`"It's impossible! It's already starting to 
flood. What do you think you're going to do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Their voices rang out behind me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Swim!"`;
   waitForClick; clearText; marker; sound(`S6A116`); appendText; 
   You`"It's pitch black below!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No problem!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can see!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could actually see the different parts of 
the stairs by their different temperatures.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the first time that I had ever been 
thankful for my unusual vision.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
bgload({ name: `BG28A4L`, transition: 26 });
playBGM({ num: 12, volume: 97 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went down the stairs and came out at Zweite 
stock's emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like the emergency power had 
already died.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where Sara might be.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought frantically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If she had turned back partway then she 
probably wouldn't have made it to Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't be sure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If she had gone all the way down to Dritte 
stock...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...then I would never make it in time if I 
looked around Zweite stock first.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to do...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to decided whether I would start 
looking on Dritte stock or from Zweite stock...`;
   waitForClick; 
});
choice(
   `Start with Dritte stock`
   `Start with Zweite stock`
);
switch (choice) {
   case 0: goto(lbl_00000b9c);
   case 1: goto(lbl_00000d2c);
}
let lbl_00000b9c;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to start searching from Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured the water pressure would be higher 
there and the flooding more serious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If she were in Dritte stock, then I'd have to 
start there to have any hope of finding her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I headed down the stairs to Dritte stock.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
bgload({ name: `BG27A4`, transition: 26 });
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 3d := (00) 2`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 6`);
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Reaching the emergency corridor, I arrived at 
Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If Sara were here, where would she be...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Conference Room or the Control Room?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or could she have been at one of the 
attractions?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have much time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Peering down through the emergency hatch, I 
realized that the flooding had already 
progressed a lot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed best to check each room from the 
emergency corridor rather than going all 
the way down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if Sara really were on this floor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But having come so far, I knew there was no 
going back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran through the emergency corridor.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG28A4R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I exited on the emergency corridor furthest 
outside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Opening the emergency hatch to each room, 
I peeked inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If Sara were there, I'd be able to see her 
body heat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked in the Conference Room and the 
Control Room, but there was no sign of her 
there. The water only continued to rise.`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A2R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The doors beyond the elevator hall didn't open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I frantically ran down the emergency corridor 
moving from one attraction to the next.`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A4L`, transition: 20 });
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I checked the rest area and then looked down 
into the Lemurian Ruins, but Sara wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe she wasn't on this floor...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of the water grew louder and the 
shaking of the structure stronger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I didn't hurry, I wouldn't make it back to 
Zweite Stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew I had to hurry to the emergency stairs.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A2`, transition: 20 });
stopSFX()
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sprinted the stairs and up to Zweite Stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had lost a lot of time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to hurry.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally I arrived back at Zweite Stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU was shaking terribly and the area below 
the emergency hatch had already filled with 
water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like water was about to flood into 
the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I plunged into the water.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 2, color: BLACK });
stopSFX()
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
closeShakeScreenAnim();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Swimming desperately to the Security Office, I 
forgot the pain in my arm and looked inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was able to steal a breath using the air at 
the top of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where could...Sara...be...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I dove into the water again and swam for the 
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The infirmary door was open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked inside.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...Sara!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's body stood out white in the dark water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This room also had a pocket of air near 
the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was just barely floating there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I floated to the surface.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SSBD`);
let lbl_00000d2c;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No, I thought Sara was somewhere in 
Zweite Stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know why but I was sure of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was probably somewhere in Zweite Stock...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew it might be a meaningless hunch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But maybe it was our sibling bond talking 
to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I had the same blood in our veins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was my thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably my imagination, but it was all 
I had to bet on.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 03 });
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I opened the emergency hatch and saw that 
water had already covered three-quarters of 
the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without hesitating, I threw myself in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water flowed unpredictably, with 
whirlpools forming here and there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I endured the pain in my right arm and swam 
desperately.`;
   waitForClick; clearText; marker; appendText; 
   Narr`First I looked in the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no source of heat that looked 
like Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From there I made for the warehouse, 
but Sara wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I checked the merry-go-round, but she 
wasn't there either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ahead of me was the elevator hall. Again, 
no Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swam back up the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Water had completely covered the entrance 
to the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took a breath and dove under water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand on the door and peered inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there...`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 01 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...was Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's body heat made her stand out brightly 
against the cool, surrounding darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went into the infirmary and floated to the 
surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked surprised when I broke through 
to the surface.`;
   waitForClick; clearText; marker; sound(`S6A117`); appendText; 
   Sara`"Kid...I mean brother."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara....you're alright."`;
   waitForClick; clearText; marker; sound(`S6A118`); appendText; 
   Sara`"Why are you...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I promised, didn't I?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I told you that I come find you, didn't I?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 90 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SS7A`);
