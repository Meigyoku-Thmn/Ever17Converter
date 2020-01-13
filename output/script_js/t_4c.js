varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 4`);
varop(`(28 0a a4) b2 := (00) 4`);
setDialogBoxColor(GREEN);
goto(lbl_00000273).if(var_da == 0);
bgload({ name: `BG07B1`, transition: 20 });
playBGM({ num: 1, volume: 100 });
setSceneTitle({ index: 26 });
clock(`18:24`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Several hours had passed since Sora's outburst`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Coco and the Kid had finished their meal 
and moved to the rest area, where they were 
relaxing and letting their food digest.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, then...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had almost finished tidying up the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hee hee hee...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled out the object I had secretly hidden 
behind the warmer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, there had been one sausage left at 
the back of the refrigerator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no hot dog buns, 
so I stuffed the sausage into a bread roll.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slapped on ketchup and mustard and took a 
big bite.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mmm...mm...this is so good...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mouth filled with the juicy flavor as I 
bit down.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mmmm....meat.....mmm...yum...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fried chicken sandwiches were good, but not 
every meal every single day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hid in the back of the kiosk and devoured 
the sausage.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T4C000`); appendText; 
   //Sora
   Sora`"Oh, Takeshi, there you are."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mmmf?!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surprised by Sora's voice, I choked on a 
piece of sausage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora appeared in front of me.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"......!? ......!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C001`); appendText; 
   //Sora
   Sora`"Takeshi? Are you all right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"-------------------agh!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A, ahgh... *cough* *cough*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blinking and struggling, I finally managed to 
swallow the chunk of meat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swallowed the rest of the sausage in one 
bite to remove the evidence.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I struggled to control my breathing.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C002`); appendText; 
   //Sora
   Sora`"What is it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not a word about what you just saw, okay?"`;
   waitForClick; clearText; marker; sound(`T4C003`); appendText; 
   //Sora
   Sora`"Y-yes...alright. I understand."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C004`); appendText; 
   //Sora
   Sora`"But what were you doing? Were you eating 
something?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, well if you don't know, it doesn't 
matter."`;
   waitForClick; clearText; marker; sound(`T4C005`); appendText; 
   //Sora
   Sora`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As usual, Sora feigned ignorance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she didn't remember my love 
psychology lecture.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just as well.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C006`); appendText; 
   //Sora
   Sora`"By the way...I just had a talk with Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, really?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surprised, I blinked.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You were able to talk with Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T4C007`); appendText; 
   //Sora
   Sora`"Yes. She returned to the infirmary, so I 
went to see her her."`;
   waitForClick; clearText; marker; sound(`T4C008`); appendText; 
   //Sora
   Sora`"Tsugumi was actually the one to speak first."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh?"`;
   waitForClick; clearText; marker; sound(`T4C009`); appendText; 
   //Sora
   Sora`"Yes. She said she was sorry for going too 
far and smashing the medical equipment."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A-apologized? Tsugumi!?"`;
   waitForClick; clearText; marker; sound(`T4C010`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, I was really surprised.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C011`); appendText; 
   //Sora
   Sora`"And then she asked me a really strange 
question."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A strange question?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What'd she ask?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C012`); appendText; 
   //Sora
   Sora`"Well...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C013`); appendText; 
   //Sora
   Sora`"She said, 'What do you know about my past?'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C014`); appendText; 
   //Sora
   Sora`"I didn't know what to say..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C015`); appendText; 
   //Sora
   Sora`"I told her I didn't know anything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C016`); appendText; 
   //Sora
   Sora`"...because I didn't know anything."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh...oh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It WAS a strange question.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where's Tsugumi now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said this trying to restrain my sense of 
urgency.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C017`); appendText; 
   //Sora
   Sora`"She nodded at my answer and went to bed."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`Bed?`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She went back to the infirmary and went to 
bed?"`;
   waitForClick; clearText; marker; sound(`T4C018`); appendText; 
   //Sora
   Sora`"Well, yes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Are you sure? Is that where she is now?"`;
   waitForClick; clearText; marker; sound(`T4C019`); appendText; 
   //Sora
   Sora`"Yes, probably."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Probably, huh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can you check to make sure Tsugumi isn't 
wandering around instead of taking it easy?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I nodded, but Sora looked troubled.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's wrong? All it takes is a quick scan."`;
   waitForClick; clearText; marker; sound(`T4C020`); appendText; 
   //Sora
   Sora`"Yes, well..."`;
   waitForClick; clearText; marker; sound(`T4C021`); appendText; 
   //Sora
   Sora`"Takeshi, I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C022`); appendText; 
   //Sora
   Sora`"I don't like to scan with the sensors unless 
it's an emergency."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`T4C023`); appendText; 
   //Sora
   Sora`"There are times when even you want to be 
alone, right Takeshi?"`;
   waitForClick; clearText; marker; sound(`T4C024`); appendText; 
   //Sora
   Sora`"And times when you want to talk about 
something secret, or be alone with 
somebody...?"`;
   waitForClick; clearText; marker; sound(`T4C025`); appendText; 
   //Sora
   Sora`"I want to protect people's privacy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C026`); appendText; 
   //Sora
   Sora`"If I scan, then I know everything."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's smile was slightly uncomfortable.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora went to check on LeMMIH, and I went to 
the second floor infirmary.`;
   waitForClick; clearText; 
});
goto(lbl_000004f7);
let lbl_00000273;
bgload({ name: `BG07B1`, transition: 20 });
playBGM({ num: 1, volume: 100 });
setSceneTitle({ index: 26 });
clock(`18:24`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Several hours went by.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, I hung around in LeMU by myself 
and just killed some time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't see Tsugumi during that time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to have an early dinner...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Coco and the Kid had finished their meal 
and moved to the rest area, where they were 
relaxing and letting their food digest.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, then...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had almost finished tidying up the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hee hee hee...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled out the object I had secretly hidden 
behind the warmer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, there had been one sausage left at 
the back of the refrigerator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no hot dog buns, 
so I stuffed the sausage into a bread roll.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slapped on the ketchup and mustard and took 
a big bite.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mmm...mm...this is so good...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mouth filled with the juicy flavor as I 
bit down.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mmmm....meat..... mmm... yum...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fried chicken sandwiches were good, but not 
every meal, every single day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hid in the back of the kiosk and devoured 
the sausage.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T4C027`); appendText; 
   //Coco
   Coco`"Oh, Takeshi, there you are."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mmmf?!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surprised by Coco's voice, I choked on a 
piece of sausage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco appeared in front of me.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 9, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"......!? ......!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C028`); appendText; 
   //Coco
   Coco`"Takeshi? Are you all right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"-------------------agh!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A, ahgh...*cough* *cough*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blinking and struggling, I finally managed to 
swallow the chunk of meat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I swallowed the rest of the sausage in one 
bite to remove the evidence.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I struggled to control my breathing.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C029`); appendText; 
   //Coco
   Coco`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not a word about what you just saw, okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C030`); appendText; 
   //Coco
   Coco`"Um, okay sure, but..."`;
   waitForClick; clearText; marker; sound(`T4C031`); appendText; 
   //Coco
   Coco`"Takepyon, you didn't eat your sandwich 
before."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C032`); appendText; 
   //Coco
   Coco`"Oh, I see. You were saving it to eat later?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, yeah. That's it."`;
   waitForClick; clearText; marker; sound(`T4C033`); appendText; 
   //Coco
   Coco`"That was all? Oh, good."`;
   waitForClick; clearText; marker; sound(`T4C034`); appendText; 
   //Coco
   Coco`"I was worried about you. I thought you'd 
lost your appetite."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, I'm fine. I ate."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scratched my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Sorry, Coco...I was selfishly eating a 
sausage all by myself. Please forgive me....)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside, I apologized silently to her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C035`); appendText; 
   //Coco
   Coco`Oh, that reminds me...`;
   waitForClick; clearText; marker; sound(`T4C036`); appendText; 
   //Coco
   Coco`"Takepyon. Takepyon! I talked to Sora."`;
   waitForClick; clearText; marker; sound(`T4C037`); appendText; 
   //Coco
   Coco`"And guess what? Sora said she spoke to 
Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, really?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surprised, I blinked.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She spoke to Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C038`); appendText; 
   //Coco
   Coco`"Yeah. When she went back to the infirmary."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Really..."`;
   waitForClick; clearText; marker; sound(`T4C039`); appendText; 
   //Coco
   Coco`"And when Tsugumi ran into Sora in the 
infirmary."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C040`); appendText; 
   //Coco
   Coco`"She apologized for going all crazy and 
smashing the stuff. She even cleaned up the 
mess."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A-apologized? Tsugumi!?"`;
   waitForClick; clearText; marker; sound(`T4C041`); appendText; 
   //Coco
   Coco`"Yup. That's what I heard."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was surprised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, I was really surprised.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What else? Did you hear anything else?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C042`); appendText; 
   //Coco
   Coco`"Anything else? Umm.....well..."`;
   waitForClick; clearText; marker; sound(`T4C043`); appendText; 
   //Coco
   Coco`"Sora said Tsugumi was asking questions and 
stuff."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Asking questions?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C044`); appendText; 
   //Coco
   Coco`"Yeah, she asked her a really silly question."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A strange...question?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What'd she ask?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C045`); appendText; 
   //Coco
   Coco`"Um, what was it?... Oh, yeah!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C046`); appendText; 
   //Coco
   Coco`"'What do you know about my past?'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C047`); appendText; 
   //Coco
   Coco`"Or something like that...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C048`); appendText; 
   //Coco
   Coco`"Sora said she didn't know anything."`;
   waitForClick; clearText; marker; sound(`T4C049`); appendText; 
   //Coco
   Coco`"I guess Tsugumi was satisfied."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is that it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C050`); appendText; 
   //Coco
   Coco`"Yup, that's it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh."`;
   waitForClick; clearText; marker; sound(`T4C051`); appendText; 
   //Coco
   Coco`"Come to think about it, that is kind of a 
silly question."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes...it was very weird.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco, where's Tsugumi now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said this trying to restrain my sense of 
urgency.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C052`); appendText; 
   //Coco
   Coco`"I think she's still in the infirmary."`;
   waitForClick; clearText; marker; sound(`T4C053`); appendText; 
   //Coco
   Coco`"She went to bed. At least that's what Sora 
said."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Bed?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She went back to the infirmary and went to 
bed?"`;
   waitForClick; clearText; marker; sound(`T4C054`); appendText; 
   //Coco
   Coco`"Yeah, I think."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Are you sure? Is that where she is now?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C055`); appendText; 
   //Coco
   Coco`"Uuum, probably."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Probably, huh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"All right, then. I think I'll go and check 
on her."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What is it? What, Coco? Is there something 
on my face?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason, Coco was staring at my face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She laughed quietly.`;
   waitForClick; clearText; marker; sound(`T4C056`); appendText; 
   //Coco
   Coco`"You like Tsugumi, don't you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Y-you gotta be kidding me! There's no way!"`;
   waitForClick; clearText; marker; sound(`T4C057`); appendText; 
   //Coco
   Coco`"Really? I wonder?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C058`); appendText; 
   //Coco
   Coco`"It seems to me like it's written aaAAaall 
over your face."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Flustered, I rubbed at my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nothing came off on my hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least nobody had been writing on my face 
again...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco, watching me, had a smile as bright as 
the sun.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I left Coco and went to the second floor 
infirmary.`;
   waitForClick; clearText; 
});
let lbl_000004f7;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I hope she's resting properly...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Heeey, Tsugumi, can I come in?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spoke into the intercom and opened the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
playBGM({ num: 19, volume: 100 });
setSceneTitle({ index: 27 });
clock(`19:1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The infirmary was quiet again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All the smashed equipment had been tidied up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sure enough...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was there.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, you really are in bed!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't believe it!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Perhaps sensing my presence, Tsugumi opened 
her eyes.`;
   waitForClick; clearText; marker; sound(`T4C059`); appendText; 
   //Tsugumi
   Tsugumi`"What? Could you keep it down....?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice was normal.`;
   waitForClick; clearText; marker; sound(`T4C060`); appendText; 
   //Tsugumi
   Tsugumi`"Am I not supposed to here or something?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No! No, not at all!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I was just surprised, that's all."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C061`); appendText; 
   //Tsugumi
   Tsugumi`"Surprised?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Um, yeah, surprised."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You came back."`;
   waitForClick; clearText; marker; sound(`T4C062`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah...well...."`;
   waitForClick; clearText; marker; sound(`T4C063`); appendText; 
   //Tsugumi
   Tsugumi`"I had to come back from that sector. There 
was nowhere to go."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, that's not what I.... Ah, no, never 
mind."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, I'm glad you're back."`;
   waitForClick; clearText; marker; sound(`T4C064`); appendText; 
   //Tsugumi
   Tsugumi`"Glad...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. Glad. Relieved?"`;
   waitForClick; clearText; marker; sound(`T4C065`); appendText; 
   //Tsugumi
   Tsugumi`"....Oh, really."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked at me intently.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As she spoke, she lay back down and slowly 
closed her eyes.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C066`); appendText; 
   //Tsugumi
   Tsugumi`"Keep your voice down, okay?"`;
   waitForClick; clearText; marker; sound(`T4C067`); appendText; 
   //Tsugumi
   Tsugumi`"My head hurts a little. Noise makes it worse."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh? Yeah, I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, you hungry?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You want me to make you a sandwich?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T4C068`); appendText; 
   //Tsugumi
   Tsugumi`"Yes, please..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay. I'll go get you one."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wait right here. I'll be back soon, okay? So 
don't move."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried not to make any noise as I left.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as I got out of the infirmary I 
sprinted to the third floor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The kiosk had been cleaned up, but I turned 
the fryer back on and heated up the chicken.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurried, but worked carefully.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heated the bread and browned it slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spread on the special sauce, and chose the 
best piece of lettuce.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hurriedly wrapping the hot sandwich, I left 
the kiosk.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sprinted back to the infirmary. I had been 
away less than ten minutes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was probably sick of waiting.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I punched the open button until the door 
opened.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Sorry I took so long..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out softly as I approached the quiet 
bed.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I took more trouble with this than usual.  
It's a masterpiece."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Eat it before it gets cold..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she was asleep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I approached the bed, but there was no answer.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Tsugumiiii..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi, here's your food."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A delicious sandwich, get it while it's 
hot..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called softly, but there was no response.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"TSUGUMI!!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried yelling.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I said, HERE'S YOUR FOOD!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Are you going to eat it? Say something!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`GRAB!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled back the blanket on the bed.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10E`, transition: 20 });
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The bed was still slightly warm...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She's gone!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I told her not to move!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I let out a deep sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held my head in my hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I resisted the urge to throw the sandwich 
against the wall.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where on earth did that stupid girl run off 
to...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without thinking about it, I stamped my foot.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crunch!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt something hard under my shoe.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh......?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my foot and looked down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Whatever I had stepped on was pulverized 
under my feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The small pieces smelled faintly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I bent down, and spread them out on my hand.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Looks like nuts..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Glancing under the bed, I found a rolled-up 
sheet stuffed underneath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled it out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I found a bag, which had probably contained 
the nuts, and an empty box.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They looked like souvenirs bought at some shop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where these here when we searched the place?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had Tsugumi smuggled them in?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Was she eating them in secret...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, that explanation didn't feel quite right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Ah ...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought the nuts were crushed because I had 
stepped on them....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, there was also a large amount of powder 
under the bed.  Someone had deliberately 
crushed the nuts.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled the box out from under the bed, and 
glanced inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A section of the lid had been torn off, and 
the box was filled with cotton, with a soft 
hollow in the center.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like the nest of some small animal.`;
   waitForClick; clearText; 
});
goto(lbl_00000719).if(var_ec == 0);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hmmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I considered the evidence..`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cotton in the box, and the scattered 
pieces of nut..`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Did Tsugumi have some kind of pet?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed a reasonable conclusion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that case...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe she's gone looking for her pet?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`But where exactly?`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I couldn't ask Sora..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I called Sora from the infirmary terminal, 
but she didn't appear.`;
   waitForClick; clearText; 
});
goto(lbl_00000731);
let lbl_00000719;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Maybe...?!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now that I thought about it, I remembered 
having seen a rat running out of the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(So, was Tsugumi keeping a rat in here...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The evidence would seem to point to that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that case...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`Has she gone looking for her pet?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, where exactly?`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe I should ask Sora."`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I called Sora from the infirmary terminal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she didn't appear.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Is this broken?"`;
   waitForClick; clearText; 
});
let lbl_00000731;
hideTextbox();
bgload({ name: `MAP3F_A1`, transition: 30 });
delay({ interval: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked at the map of LeMU on the monitor, 
but could detect no signs of life.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where in the vicinity would LeMMIH's would 
there be a large terminal functioning?`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Of course - the Security Office!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I went there I would probably learn 
something.`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 02 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I left the infirmary and turned left down a 
corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I arrived at the Security Office, I 
opened the door and flew inside.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was somebody already there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was sitting in a chair in front of the 
console.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was engrossed in something and didn't 
notice me come in.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was doing something at the console.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the screen was a zoomed-in section of a map.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A strange point of light was moving across the 
enlarged section of the map.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light indicated a sign of life. `;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She hit the key.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One portion of the screen changed, and the 
remote camera zoomed in on whatever was 
reacting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A living creature was visible on the monitor.`;
   waitForClick; clearText; marker; sound(`T4C069`); appendText; 
   //Tsugumi
   Tsugumi`"Phew...".`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi breathed a sigh of relief.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A rat."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At the sound of my whisper, Tsugumi swung 
around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She blinked.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's a rat, isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`".........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A grey rat was running along a pipe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The map showed the isolated sector on the 
third floor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is it that rat you're looking for?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C070`); appendText; 
   //Tsugumi
   Tsugumi`"...Of, of course not!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was obviously flustered.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I looked under your bed and saw the box."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There were nuts everywhere..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked away.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't have to answer if you don't want 
to."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, I wonder how that dirty rodent get 
here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C071`); appendText; 
   //Tsugumi
   Tsugumi`"DIRTY RODENT!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's voice was suddenly hysterical.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was a little taken aback.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's not a rat?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C072`); appendText; 
   //Tsugumi
   Tsugumi`"It's a Djungarian hamster!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C073`); appendText; 
   //Tsugumi
   Tsugumi`"...I think...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Reeally...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, so that's what it's called, a Djungarian, 
huh...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're pretty knowledgeable, Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C074`); appendText; 
   //Tsugumi
   Tsugumi`"...E-everybody knows what they're called...".`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her chest puffed out slightly.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you were looking for that rat?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C075`); appendText; 
   //Tsugumi
   Tsugumi`"No!"`;
   waitForClick; clearText; marker; sound(`T4C076`); appendText; 
   //Tsugumi
   Tsugumi`"I told you it's not a rat!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, sorry, uh, not rat, but hamster."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You were looking for the hamster?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi seemed to nod her head, reluctantly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The movement was so small I wasn't even sure 
if she had made it.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi looked back at the monitor.`;
   waitForClick; clearText; marker; sound(`T4C077`); appendText; 
   //Tsugumi
   Tsugumi`"He probably traveled through some pipe."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Pipe?"`;
   waitForClick; clearText; marker; sound(`T4C078`); appendText; 
   //Tsugumi
   Tsugumi`"The pipes with the electric cables, or the 
power sockets."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, I see."`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 19 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her finger traced the map.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody could walk to where the hamster was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The top right of the screen showed an area 
under water.  It seemed there was one room 
still empty.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was even further away than the isolated 
area on the third floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't very clear on this map, but there 
was one emergency corridor in the sector.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmmm...)`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I committed LeMU's map to memory...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Geez. I guess I'll just have to..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed a plastic bag from the trashcan, and 
headed for the exit.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C079`); appendText; 
   //Tsugumi
   Tsugumi`"Where do you think you're going?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where do you think I'm going? I'm going to 
go get him."`;
   waitForClick; clearText; marker; sound(`T4C080`); appendText; 
   //Tsugumi
   Tsugumi`"Who?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That funny looking hamster."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C081`); appendText; 
   //Tsugumi
   Tsugumi`"There's no way you'll make it!"`;
   waitForClick; clearText; marker; sound(`T4C082`); appendText; 
   //Tsugumi
   Tsugumi`There's a section underwater between here and 
there!`;
   waitForClick; clearText; marker; sound(`T4C083`); appendText; 
   //Tsugumi
   Tsugumi`"And no human could fit through the pipe!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ignored her and left the Security Office.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I began to walk toward the place I had in mind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C084`); appendText; 
   //Tsugumi
   Tsugumi`"Wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi caught up with me, and grabbed my arm.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What now?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If I don't get going, Mr. Hamster is going 
to move to another place."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C085`); appendText; 
   //Tsugumi
   Tsugumi`"How do you plan to get in there?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How else? ...Swim."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C086`); appendText; 
   //Tsugumi
   Tsugumi`"Huh!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's hand relaxed.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Still in her grip, I kept moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi came with me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C087`); appendText; 
   //Tsugumi
   Tsugumi`"W-Wait!"`;
   waitForClick; clearText; marker; sound(`T4C088`); appendText; 
   //Tsugumi
   Tsugumi`"Are you out of your mind?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm going through with this."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C089`); appendText; 
   //Tsugumi
   Tsugumi`"That's the reason why I think you are stupid."`;
   waitForClick; clearText; marker; sound(`T4C090`); appendText; 
   //Tsugumi
   Tsugumi`"If you open those flood gates, you'll be 
overwhelmed by the seawater - the pressure is 
6 atmospheres!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't have to worry about that."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `MAP04A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"The hamster's in an area directly connected 
to the flooded emergency corridor."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The water in that area is 1 atmosphere of 
pressure. So, the flooded corridor should be 
about the same."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Besides, the flood gates on either side of 
the corridor are firmly shut."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That corridor is completely isolated from the 
outside seawater."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"The entrance on the other side is open."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If I use the flooded corridor beneath the 
room, I can get into the next area...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why don't you go back and check the map?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG23A1`, transition: 20 });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C091`); appendText; 
   //Tsugumi
   Tsugumi`"But..."`;
   waitForClick; clearText; marker; sound(`T4C092`); appendText; 
   //Tsugumi
   Tsugumi`"How far do you think it is to get to the 
area?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"153 feet."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I made sure to check it before."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C093`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah, but 153 feet is a long way..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It'll be all right."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I've swam to one end and back of a 25 meter 
pool underwater, once..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I kicked off the far wall coming back, but 
still..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I waved my hands to dismiss it. Tsugumi's 
expression hardened.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C094`); appendText; 
   //Tsugumi
   Tsugumi`"You..."`;
   waitForClick; clearText; marker; sound(`T4C095`); appendText; 
   //Tsugumi
   Tsugumi`"You are crazy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C096`); appendText; 
   //Tsugumi
   Tsugumi`"Are you trying to kill yourself?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi breathed in sharply.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'll be all right."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's all right, I won't die. I promise I'll 
come back."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C097`); appendText; 
   //Tsugumi
   Tsugumi`"Why are you doing this?"`;
   waitForClick; clearText; marker; sound(`T4C098`); appendText; 
   //Tsugumi
   Tsugumi`"Why are you doing this for one little 
hamster?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What else can I do?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We're all in this together."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe you're not one of us...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But any pet you have is one of us."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"In Japan, people with the same goal are 
called friends..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C099`); appendText; 
   //Tsugumi
   Tsugumi`"......You're an idiot."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That doesn't bother me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'd rather be a cheerful idiot than some 
warped genius."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We took EI down to the 3rd floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From there we walked along the corridor to the 
isolated sector.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, you may as well eat this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fried chicken sandwich was still in my 
hand. I shoved it at Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Here, before it gets cold."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's face showed no reaction as she 
silently accepted the sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi slowly unwrapped the sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She cautiously sniffed it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C100`); appendText; 
   //Tsugumi
   Tsugumi`"*MUNCH*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi suddenly took a huge bite.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C101`); appendText; 
   //Tsugumi
   Tsugumi`"Mmm  ...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C102`); appendText; 
   //Tsugumi
   Tsugumi`"Mmmff....nnn..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She ate it fast.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sandwich disappeared before my eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C103`); appendText; 
   //Tsugumi
   Tsugumi`"......Whew."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How was it? Good, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi didn't reply, but balled up the 
sandwich wrapping paper and threw it back at 
me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But seeing how happily she ate, I didn't need 
words to know how she felt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was pleased.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG20B1`, transition: 20 });
clock(`19:29`);
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We arrived at the pipe room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We searched the floor and opened the hatch of 
the manhole that led to the emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We peered inside.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A tube of about two feet in diameter 
stretched down below us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A simple ladder was fixed on one side of the 
tube. About six feet down we could see the 
submerged emergency light shining.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could find no signs as we peered through 
the hatch that the water was backflowing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That meant that the water pressure inside the 
corridor was balanced against the pressure 
around us.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder if there's something I can use to 
guide me back?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fortunately, there was a rope with a hook on 
it, which looked as if it were a lifeline for 
the maintenance crew. I decided to hold on to 
it when I went in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Checking that the rope was long enough, I 
tied it firmly to a pipe nearby.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I tied it to the hook where I came out, 
then it should be easy to return.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright then..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I did some light stretching exercises to warm 
up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C104`); appendText; 
   //Tsugumi
   Tsugumi`"Wait!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C105`); appendText; 
   //Tsugumi
   Tsugumi`"I should...go instead."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stared me square in the face.`;
   waitForClick; clearText; 
});
goto(lbl_00001018).if(var_d9 == 0);
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C106`); appendText; 
   //Tsugumi
   Tsugumi`"Don't get me wrong."`;
   waitForClick; clearText; marker; sound(`T4C107`); appendText; 
   //Tsugumi
   Tsugumi`"I just don't want to watch you pull this 
hypocritical stunt is all."`;
   waitForClick; clearText; marker; sound(`T4C108`); appendText; 
   //Tsugumi
   Tsugumi`"I don't want to see you kill yourself 
because you believe this hypocrisy."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"How can you say that?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not a nice thing to say!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I laughed at her as I loosened my limbs and 
body.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'll be fine. You go back to the Security 
Office."`;
   waitForClick; clearText; marker; sound(`T4C109`); appendText; 
   //Tsugumi
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"When I get through to the other side, you 
can tell me where the hamster is."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We won't be able to locate him without 
LeMMIH, will we?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So unless someone who can operate LeMMIH 
stays behind, it won't work."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C110`); appendText; 
   //Tsugumi
   Tsugumi`"But..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, then. It's settled."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I finished warming up and adjusted the voice 
converter in my ear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had told me that the earphone was 
pressure-resistant, but hadn't said anything 
about whether it was waterproof.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"See you later!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ruffled Tsugumi's hair and started down the 
ladder.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
playBGM({ num: 24, volume: 100 });
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
bgload({ name: `IMG06A`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My toes reached the bottom of the ladder.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I let go of the ladder and leapt into the 
emergency corridor.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Wow, it's COLD!...!)`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was like swimming in ice water.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The water here was much colder than the water 
higher up.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had greatly miscalculated.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And that wasn't the only thing I'd 
miscalculated.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Inside the corridor was pitch dark.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I tried to use my PDA backlight.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I could see that there were parallel walls on 
either side and this part of the corridor was 
straight.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But that was all I could see.  I knew nothing 
of what was beyond that.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At that point, my PDA batteries ran out.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`(OH, crap.... No using this for a while...)`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`There was nothing for it but to grope my way 
forward.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`How far had I swum? How much further did I 
need to go?`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had no way of guessing.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I didn't even know if I was swimming in the 
right direction.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I just kept swimming in the darkness.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was terrifying.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`As my breath got tighter, I could feel the 
fear spreading through my body.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`(I might just die here.)`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`As afraid as I was, I was able to consider 
dying quite calmly.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was caught in the illusion that I was 
sinking, farther and farther down.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The darkness penetrated to my very core.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The shadow of death crept through my whole 
body...`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Eroding my every cell...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(I can't...last...much longer...)`;
   delay(30); waitForClick; 
   Narr`
`;
   
});
setKomoreType(1);
showKomoreAnim();
showTextbox();
text(() => {
   appendText; 
   Narr`Just as my fear reached its peak, I glimpsed 
a spot of light.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The exit!`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Was it 30 feet? Or 60 maybe??`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`My vision was cloudy and I couldn't judge the 
distance.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was reaching my limit. No, I had probably 
already exceeded it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The light was shining beyond the darkness.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`My body was screaming as my cramping fingers 
stretched out to the light.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A little further, just a little further, the 
light is right - `;
   delay(30); waitForClick; 
   Narr`
`;
   
});
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   appendText; 
   Narr`- there!`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`My hand grabbed the ladder.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I wasted no time in fixing the rope on the 
hook.`;
   delay(30); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I pulled myself upwards.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
AVL_Mode();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
closeKomoreAnim();
closeDimInAndOutAndFilterAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
varop(`(28 0a a2) 41 := (00) 21`);
varop(`(28 0a a2) 42 := (00) 9`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
playSFX({ name: `SE00_09`, a1: 0, volume: 95 });
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I scaled the ladder as quickly as I could, 
and burst out into the corridor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"GGga.....ha......nnggaah....."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I breathed deeply, in and out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I coughed and spat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I was going to cough the darkness 
right out my lungs.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh.... ugh....."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But, contrary to my expectations - `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".....gagh...."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_28`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What erupted from my mouth was 
the semi-liquid remains of my hotdog.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
closeDimInAndOutAndFilterAnim();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was a little cold, but I shook my head to 
clear it and continued my search for the 
hamster.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flood doors on either side of the 
corridor were shut tight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was only one other door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went through.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Mr. Hamster!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That probably wasn't its name, but never 
mind...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was better than yelling, 'Mr. Djungarian!'`;
   waitForClick; clearText; marker; sound(`T4C111`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, are you all right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard Tsugumi's voice come out through a 
speaker somewhere in the room.`;
   waitForClick; clearText; marker; sound(`T4C112`); appendText; 
   //Tsugumi
   Tsugumi`"I'm picking up your sound on the monitor. If 
you can hear me, answer."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, Tsugumi, I can hear you."`;
   waitForClick; clearText; marker; sound(`T4C113`); appendText; 
   //Tsugumi
   Tsugumi`"What can you see?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The room is pitch dark. I can't see a thing. 
Either the lights are broken, or there's not 
enough power."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"My trusty PDA is out of power..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I should have brought some fireflies with me."`;
   waitForClick; clearText; marker; sound(`T4C114`); appendText; 
   //Tsugumi
   Tsugumi`"Did you say something?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nothing. If you pick up the hamster's 
location, let me know."`;
   waitForClick; clearText; marker; sound(`T4C115`); appendText; 
   //Tsugumi
   Tsugumi`"Okay..."`;
   waitForClick; clearText; marker; sound(`T4C116`); appendText; 
   //Tsugumi
   Tsugumi`"Go straight ahead, about 10 feet."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"1, 2, 3...okay!"`;
   waitForClick; clearText; marker; sound(`T4C117`); appendText; 
   //Tsugumi
   Tsugumi`"Turn right 40 degrees."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Forty degrees? What kind of angle is THAT?"`;
   waitForClick; clearText; marker; sound(`T4C118`); appendText; 
   //Tsugumi
   Tsugumi`"Hey, you just turned left, not right!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Are you sure? The other way?"`;
   waitForClick; clearText; marker; sound(`T4C119`); appendText; 
   //Tsugumi
   Tsugumi`"Are you sure you're okay?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It was just the wrong direction. I'm fine. 
Look, I'm facing the right direction now."`;
   waitForClick; clearText; marker; sound(`T4C120`); appendText; 
   //Tsugumi
   Tsugumi`"Oooh- !"`;
   waitForClick; clearText; marker; sound(`T4C121`); appendText; 
   //Tsugumi
   Tsugumi`"Go straight ahead another 12 feet - there's 
a step there, be careful."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What? How can I be careful in the dark?!... 
Wagh!"`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........"`;
   waitForClick; clearText; marker; sound(`T4C122`); appendText; 
   //Tsugumi
   Tsugumi`"What happened?"`;
   waitForClick; clearText; marker; sound(`T4C123`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi? Takeshi? Are you all right?"`;
   waitForClick; clearText; marker; sound(`T4C124`); appendText; 
   //Tsugumi
   Tsugumi`"Hey! Talk to me! Takeshi!"`;
   waitForClick; clearText; marker; sound(`T4C125`); appendText; 
   //Tsugumi
   Tsugumi`"Ta-Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh....."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's all right, I'm alive."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can you let me know how high the steps are 
going to be? I didn't realize I'd be smashing 
my knee against it."`;
   waitForClick; clearText; marker; sound(`T4C126`); appendText; 
   //Tsugumi
   Tsugumi`"...I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, okay, go on. Is Mr. Hamster still 
here? He hasn't run away?"`;
   waitForClick; clearText; marker; sound(`T4C127`); appendText; 
   //Tsugumi
   Tsugumi`"He's still there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, navigate me."`;
   waitForClick; clearText; marker; sound(`T4C128`); appendText; 
   //Tsugumi
   Tsugumi`"Alright."`;
   waitForClick; clearText; marker; appendText; 
   Narr`On I went like that...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, I've got you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I successfully trapped the hamster in the 
plastic bag.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm on my way back. Wait for me in the pipe 
room."`;
   waitForClick; clearText; marker; sound(`T4C129`); appendText; 
   //Tsugumi
   Tsugumi`"All right."`;
   waitForClick; clearText; 
});
varop(`(28 0a a2) 41 := (00) 21`);
varop(`(28 0a a2) 42 := (00) 9`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went out into the light of the corridor, and 
checked the hamster.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Okay. He was quiet, but seemed healthy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I blew more air into the bag, and tied the 
mouth of it shut tight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tired as I was, could I get back the way I 
had come?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hesitated, but unless I went back it was all 
pointless.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I followed the rope, I should be able to 
get back faster than I had come.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tied the bag to my waist, took a deep 
breath, and jumped into the water.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
closeDimInAndOutAndFilterAnim();
stopBGM();
delay({ interval: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Faagh?!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG20B1`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I climbed up the pipe ladder and stuck my 
head out of the hatch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had made it back safely to the area I had 
started from.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Honey, I'm hooome!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was waiting beside the hatch.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Look what the cat dragged in... me. Well, 
here I am. I'm back."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C130`); appendText; 
   //Tsugumi
   Tsugumi`"W-welcome back.".`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I closed the hatch and stood up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened the plastic bag at my waist, and 
took out the hamster.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C131`); appendText; 
   //Tsugumi
   Tsugumi`Ah - `;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi grabbed the hamster.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Lovingly, she stroked his damp fur.`;
   waitForClick; clearText; marker; sound(`T4C132`); appendText; 
   //Tsugumi
   Tsugumi`"Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi whispered her gratitude without 
looking at me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's his real name?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the hamster.`;
   waitForClick; clearText; marker; sound(`T4C133`); appendText; 
   //Tsugumi
   Tsugumi`"...now don't laugh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay. I won't."`;
   waitForClick; clearText; marker; sound(`T4C134`); appendText; 
   //Tsugumi
   Tsugumi`"You promise?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`I promise.`;
   waitForClick; clearText; marker; sound(`T4C135`); appendText; 
   //Tsugumi
   Tsugumi`"His name's Chami."`;
   waitForClick; clearText; marker; sound(`T4C136`); appendText; 
   //Tsugumi
   Tsugumi`"Chami. Because he's charming."`;
   waitForClick; clearText; marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's cute. What a good name!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`How....cute.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I did my best to stifle my laughter.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C137`); appendText; 
   //Tsugumi
   Tsugumi`"Hey! You promised not to laugh!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm not laughing!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to keep a straight face...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the corners of my mouth started to twitch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Charming Chami. Well....`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Chami-poo, Chami-poo it's din-din time.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could just imagine Tsugumi baby-talking to 
it.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Chami-poo, Chami-poo."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mffff, Ha ha ha...."`;
   waitForClick; clearText; marker; sound(`T4C138`); appendText; 
   //Tsugumi
   Tsugumi`"Aaaargh!"`;
   waitForClick; clearText; marker; sound(`T4C139`); appendText; 
   //Tsugumi
   Tsugumi`"That's why I didn't want to tell you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sullen, Tsugumi was red-faced...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...but she held out the bath towel she had 
behind her back.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, thanks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the towel and wiped myself down.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Phew..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I breathed deeply, feeling reborn, as I 
glanced at Tsugumi's face.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was playing with the hamster in her hand, 
and her cheeks were bright.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked so happy...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the first time I'd ever seen her smile.`;
   waitForClick; clearText; 
});
hideTextbox();
goto(lbl_00001345);
let lbl_00001018;
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C140`); appendText; 
   //Tsugumi
   Tsugumi`"Don't get me wrong."`;
   waitForClick; clearText; marker; sound(`T4C141`); appendText; 
   //Tsugumi
   Tsugumi`"I didn't purposely try to get you to do 
something that I knew you couldn't do."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C142`); appendText; 
   //Tsugumi
   Tsugumi`"I'm not like you. I'm not stupid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C143`); appendText; 
   //Tsugumi
   Tsugumi`"You and I are different up here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi tapped her head.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C144`); appendText; 
   //Tsugumi
   Tsugumi`"I'm going."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's your problem? I can't believe you're 
being like that at a time like this...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not a nice thing to say!"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'll be fine. You go back to the Security 
Office."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"When I get through to the other side, you 
can tell me where the hamster is."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We won't be able to locate him without 
LeMMIH, will we?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A107`); appendText; 
   //Tsugumi
   Tsugumi`"Hmmm, yeah..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmmm, yeah, is it? Why don't you use that 
superior intellect of yours to think of 
something?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Unless someone who can operate LeMMIH stays 
behind, it won't work."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C146`); appendText; 
   //Tsugumi
   Tsugumi`"Ha ha ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi laughed.`;
   waitForClick; clearText; marker; sound(`T4C147`); appendText; 
   //Tsugumi
   Tsugumi`"Alright."`;
   waitForClick; clearText; marker; sound(`T4C148`); appendText; 
   //Tsugumi
   Tsugumi`"I've learned from you - I'll show you what I 
can do with a little courage and guts."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Now, wait just a - !"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_02`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Ooomph.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ugh...uh."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She punched me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi punched me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"——! ?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C149`); appendText; 
   //Tsugumi
   Tsugumi`"See you later..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took the rope hook and went down the 
ladder.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Before long she disappeared from view.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The rope stretched into the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding my stomach, I sunk to my knees.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd got me with a solid body blow and I 
couldn't stand up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She really hit hard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I can't believe her...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I seemed to remember getting punched like 
that...by someone wearing a mascot costume....`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Was that Tsugumi!?...ughg...)`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was suddenly dizzy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My stomach was in agony.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not where I'd been punched...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was suffering from a totally different pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached for the pipe and tried to stand up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But my hand grasped at thin air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My vision clouded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I coughed and spat.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`".....gagh...."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_28`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What erupted from my mouth was 
the semi-liquid remains of my hotdog.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Wha-what the......?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a chill as I lost consciousness...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 00 });
varop(`(28 0a a0) ac := (00) 1`);
closeDimOverlay();
delay({ interval: 120 });
bgload({ name: `BG20B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I regained consciousness, I was lying 
half in a pool of water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where am...I?)`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Oh, it's the pipe room...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What happened to Tsugumi...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`In front of me, I could see the rope 
disappearing into the hatch.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's right! She's looking for the hamster!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I have to get to the Security Office! 
Tsugumi will need navigation!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU09AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C150`); appendText; 
   //Tsugumi
   Tsugumi`"...You're too late."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sorry, I'll be right there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C151`); appendText; 
   //Tsugumi
   Tsugumi`"I've already been there and back."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With startled look on her face, Tsugumi 
peered out of the hatch.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She pulled up the rope as she stood up and 
closed the hatch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slowly got off the floor.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ho-how'd it go, Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C152`); appendText; 
   //Tsugumi
   Tsugumi`"I found him. He was in the corner of the 
room. But I couldn't catch him."`;
   waitForClick; clearText; marker; sound(`T4C153`); appendText; 
   //Tsugumi
   Tsugumi`"I think he ran this way."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hoped we could catch him.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Just let me check, then..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What does this hamster look like?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C154`); appendText; 
   //Tsugumi
   Tsugumi`"He's just a normal Djungarian."`;
   waitForClick; clearText; marker; sound(`T4C155`); appendText; 
   //Tsugumi
   Tsugumi`Grey color, black stripe on his back, small 
enough to sit in the palm of your hand...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmmmm...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Like that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed at a small rodent running along a 
nearby pipe.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C156`); appendText; 
   //Tsugumi
   Tsugumi`"...Huh?"`;
   waitForClick; clearText; marker; sound(`T4C157`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi ..."- `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C158`); appendText; 
   //Tsugumi
   Tsugumi`"...Grab him!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Seeing the rodent, Tsugumi's eyes got huge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea what to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The small furry animal noticed Tsugumi and me 
and froze, his eyes fixed on us.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, then."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Gotcha.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What? Just like that?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think I'd catch him so quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The stunned hamster lay quietly in my hand.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Woah! Nice catch!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C159`); appendText; 
   //Tsugumi
   Tsugumi`"Aaagh!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C160`); appendText; 
   //Tsugumi
   Tsugumi`"No! Be careful! Don't squeeze him so hard!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi snatched the "rat" from my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stroked it gently as if she were 
consoling it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C161`); appendText; 
   //Tsugumi
   Tsugumi`"Did it hurt? I'm sorry..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is that really a rat? I mean, what are you 
doing with that thing in the first place!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was taken aback.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C162`); appendText; 
   //Tsugumi
   Tsugumi`"No!"`;
   waitForClick; clearText; marker; sound(`T4C163`); appendText; 
   //Tsugumi
   Tsugumi`"I keep telling you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C164`); appendText; 
   //Tsugumi
   Tsugumi`"This is not a rat, it's Chami!"`;
   waitForClick; clearText; marker; sound(`T4C165`); appendText; 
   //Tsugumi
   Tsugumi`"He's a Djungarian hamster."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi spat the words out. She pouted as she 
glared at me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, he's not a rat, he's Chami."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Chami?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That hamster's name is Chami?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C166`); appendText; 
   //Tsugumi
   Tsugumi`"I didn't say that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C167`); appendText; 
   //Tsugumi
   Tsugumi`"I never said that..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Embarrassed, she bowed her head.`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I, uh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, that is what you were looking for?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She nodded silently.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, well, great..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That was lucky, wasn't it!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Anyway, we've caught him."`;
   waitForClick; clearText; marker; sound(`T4C168`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah.....ah....um....."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C169`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, I ...thank you...I guess."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice was quiet and expressionless.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Ouch!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She knocked me down and bolted from the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was soaking wet, and still clutching Chami.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(What is with that chick...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had wanted to tell her how glad I was that 
she was okay.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed I had missed my chance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stunned, I listened to her footsteps grow 
fainter.`;
   waitForClick; clearText; 
});
let lbl_00001345;
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
delay({ interval: 120 });
goto(lbl_00001385).if(var_da != 0);
delay({ interval: 30 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_5A`);
let lbl_00001385;
bgload({ name: `BG06A1`, transition: 20 });
playBGM({ num: 2, volume: 100 });
setSceneTitle({ index: 28 });
clock(`23:6`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"...So, that's what happened."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C170`); appendText; 
   //Sora
   Sora`"Oh, I see...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Several hours had elapsed since the hunt for 
Chami.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had asked to Sora to come with me to the 
souvenir kiosk on the second floor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C171`); appendText; 
   //Sora
   Sora`"Isn't it great the Tsugumi found her friend?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ahh, yeah."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her friend, huh.....well, as far as Tsugumi 
was concerned, it was her friend.`;
   waitForClick; clearText; marker; sound(`T4C172`); appendText; 
   //Sora
   Sora`"Anyway, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T4C173`); appendText; 
   //Sora
   Sora`"Weren't we going to search this kiosk for 
food?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh, was that right?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was quiet all around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no one around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, the Kid and Coco were in the Conference 
Room preparing for bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was probably asleep in the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We looked pretty thoroughly last time and 
didn't find anything..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C174`); appendText; 
   //Sora
   Sora`"But, there are nuts and cookies here. I saw 
them right away. Look."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora pointed to the packets in the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, really?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a mountain of packets just like the 
one I had found under the bed in the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I guess we were all half-asleep when we 
looked last time."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, we don't need to worry about food for 
the time being."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C175`); appendText; 
   //Sora
   Sora`"We can keep eating the fried chicken 
sandwiches, can't we?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yes, there are plenty.  I don't know what the 
expiration date on them is, but there should 
be enough for two or three more days."`;
   waitForClick; clearText; marker; sound(`T4C176`); appendText; 
   //Sora
   Sora`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah...".`;
   waitForClick; clearText; marker; appendText; 
   Narr`We kept talking for a while.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was an ordinary conversation with no fixed 
theme and nothing to do with the topic of 
escape.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wonder what the weather is like up there..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C177`); appendText; 
   //Sora
   Sora`"I have no way of knowing what the 
situation's like up on the surface..."`;
   waitForClick; clearText; marker; sound(`T4C178`); appendText; 
   //Sora
   Sora`"...But judging from what it's like 
underwater, it's quite calm. It's unlikely to 
get worse any time soon."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's reassuring..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C179`); appendText; 
   //Sora
   Sora`"Yes..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Half the meaning was probably lost.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that perhaps this conversation 
could be an opportunity.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I searched for the right words.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Listen, Sora."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I want to talk about something serious."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C180`); appendText; 
   //Sora
   Sora`"You do too, Takeshi?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C181`); appendText; 
   //Sora
   Sora`"Actually...so do I."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"R-really?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, after you.... Ladies first."`;
   waitForClick; clearText; marker; sound(`T4C182`); appendText; 
   //Sora
   Sora`"No, Takeshi, you go first."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"To tell you the truth, I'm a little 
embarrassed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C183`); appendText; 
   //Sora
   Sora`"So am I..."`;
   waitForClick; 
});
choice(
   `Okay, I'll go first`
   `You go first`
   `Let's both say it at the same time`
);
switch (choice) {
   case 0: goto(lbl_000014df);
   case 1: goto(lbl_000014ff);
   case 2: goto(lbl_0000151f);
}
let lbl_000014df;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Okay, I'll go first..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's about the lecture today."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The 'Love Psychology' lecture."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scratched my head as I spoke.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Did you forget it already...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C184`); appendText; 
   //Sora
   Sora`"No..."`;
   waitForClick; clearText; marker; sound(`T4C185`); appendText; 
   //Sora
   Sora`"I was thinking about it, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's cheeks were bright red.`;
   waitForClick; clearText; 
});
goto(lbl_00001546);
let lbl_000014ff;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What did you want to say?"`;
   waitForClick; clearText; marker; sound(`T4C186`); appendText; 
   //Sora
   Sora`"Me first...?"`;
   waitForClick; clearText; marker; sound(`T4C187`); appendText; 
   //Sora
   Sora`"Well, um...."`;
   waitForClick; clearText; marker; sound(`T4C188`); appendText; 
   //Sora
   Sora`"It's about today's lecture..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C189`); appendText; 
   //Sora
   Sora`"Love Psychology..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's cheeks were bright red.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's what I wanted to talk about, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was probably a little red, too.`;
   waitForClick; clearText; 
});
goto(lbl_00001546);
let lbl_0000151f;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Then let's both speak at the same time."`;
   waitForClick; clearText; marker; sound(`T4C190`); appendText; 
   //Sora
   Sora`"Alright."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, together then.  Three, two, one, go!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's about the lecture today."`;
   waitForClick; clearText; marker; sound(`T4C191`); appendText; 
   //Sora
   Sora`"...It's about the lecture today."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ah, I had spoken a moment sooner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Well, okay.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C192`); appendText; 
   //Sora
   Sora`"Love Psychology...".`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's cheeks were bright red.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, yes, that..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was probably a little red, too.`;
   waitForClick; clearText; 
});
let lbl_00001546;
showTextbox();
text(() => {
   marker; sound(`T4C193`); appendText; 
   //Sora
   Sora`"Tee, hee..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were reflected on the glass of the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora twinkled as she spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C194`); appendText; 
   //Sora
   Sora`"I...wanted to speak about the lecture."`;
   waitForClick; clearText; marker; sound(`T4C195`); appendText; 
   //Sora
   Sora`"Coco was afraid of me, and You seemed mad 
about something..."`;
   waitForClick; clearText; marker; sound(`T4C196`); appendText; 
   //Sora
   Sora`"But what you said wasn't wrong...at least I 
don't think so."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmm, neither do I..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I think my examples may have been a little 
extreme, but I think my basic message was 
right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C197`); appendText; 
   //Sora
   Sora`"Yeah?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah."`;
   waitForClick; clearText; marker; sound(`T4C198`); appendText; 
   //Sora
   Sora`"Professor..."`;
   waitForClick; clearText; marker; sound(`T4C199`); appendText; 
   //Sora
   Sora`"I would like you to finish the lecture..."`;
   waitForClick; clearText; marker; sound(`T4C200`); appendText; 
   //Sora
   Sora`"Teach me everything."`;
   waitForClick; clearText; marker; sound(`T4C201`); appendText; 
   //Sora
   Sora`"Teach me what I don't know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"All right then, Miss Anagesaki."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lecture resumed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After hour study.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was the only one participating in my 
lecture. No one else was listening.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a lecture for one-on-one.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"All right then, Sora, we're going to get 
back to the basics."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I played it up a little.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C202`); appendText; 
   //Sora
   Sora`"Professor! I have a question!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mm, what is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C203`); appendText; 
   //Sora
   Sora`"You weren't acting like this earlier today!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ahem!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pretended to clear my throat.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The professor is practicing speaking like a 
professor!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's not worry about how to talk!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The way you're talking is fine.  There are 
gentlemen who prefer gentle voices."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went into the kiosk alone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside the kiosk, which had not been used 
since the second flood, was strewn with 
colorful stationery and merchandise.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C204`); appendText; 
   //Sora
   Sora`"Professor, what should I do?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Just stand there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C205`); appendText; 
   //Sora
   Sora`"All right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was waiting just outside the kiosk.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE08_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I jumped over the counter.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I brushed aside the stuff that was lying 
around, and went over to the window.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright then, Sora."`;
   waitForClick; clearText; marker; sound(`T4C206`); appendText; 
   //Sora
   Sora`"Yes? What is it professor?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Come a little closer."`;
   waitForClick; clearText; marker; appendText; 
   Narr`From inside the kiosk, I beckoned to Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora approached the glass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stopped about a yard away.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C207`); appendText; 
   //Sora
   Sora`"Takeshi, if I go any closer the RSD image 
will...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't be so unromantic, you'll spoil the 
mood."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C208`); appendText; 
   //Sora
   Sora`"But I'll probably start to look flat."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Embarrassed, she bowed her head.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's alright, it doesn't matter."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"......."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Repeat after me: 'It's alright!'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C209`); appendText; 
   //Sora
   Sora`"I-it's all right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blushing furiously, Sora timidly approached 
the window.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Slowly, one step at a time.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's it."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Before long...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora and I faced each other through the thin 
sheet of glass.`;
   waitForClick; clearText; marker; sound(`T4C210`); appendText; 
   //Sora
   Sora`"Here I am."`;
   waitForClick; clearText; marker; sound(`T4C211`); appendText; 
   //Sora
   Sora`"Um, do I look strange, professor?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't worry."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I told you it was all right, didn't I?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her image was warping a little, but it was 
nothing serious.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"All right then, practice."`;
   waitForClick; clearText; marker; sound(`T4C212`); appendText; 
   //Sora
   Sora`"Uh. Um, I'm a little nervous..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well don't let me make you nervous."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Relax, relax. Okay, repeat."`;
   waitForClick; clearText; marker; sound(`T4C213`); appendText; 
   //Sora
   Sora`"Relax, relax..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In my hand I held a marker pen that I had 
picked up off the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was a red, water-based pen.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"All right then. You know, I thought you were 
a traditional Japanese girl."`;
   waitForClick; clearText; marker; sound(`T4C214`); appendText; 
   //Sora
   Sora`"R-really?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mm. Pure and sincere. Lovely."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But I felt that as a 24-year-old you were 
lacking a little something."`;
   waitForClick; clearText; marker; sound(`T4C215`); appendText; 
   //Sora
   Sora`"What...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Color...The look of a grown woman."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was standing on the other side of the 
spotless glass.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took the cap off the pen, and traced the 
line of Sora's lips.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The fastest way to give you color ? "`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"-is with make-up!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"With conservative make-up like yours, you 
won't even attract doctors or lawyers!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Your make-up has to be more...feminine."`;
   waitForClick; clearText; marker; sound(`T4C216`); appendText; 
   //Sora
   Sora`"Professor..."`;
   waitForClick; clearText; marker; sound(`T4C217`); appendText; 
   //Sora
   Sora`"I don't understand what you mean."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A picture is worth a thousand words."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I carefully drew her lipstick.`;
   waitForClick; clearText; marker; sound(`T4C218`); appendText; 
   //Sora
   Sora`"That tickles."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stand still."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This is difficult."`;
   waitForClick; clearText; marker; sound(`T4C219`); appendText; 
   //Sora
   Sora`"I'm not moving!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe my hand wasn't used to the angle, 
anyway, it was shaking a little.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I drew her eyeline, gave her mascara and 
rouge and colored in her eyebrows.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Alright, you're done!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finished!`;
   waitForClick; clearText; marker; appendText; 
   Narr`What a work of art.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I would give it a title...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd call it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes, I'd call it....`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Butterfly of the Night.'`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C220`); appendText; 
   //Sora
   Sora`"Uh, Professor..."`;
   waitForClick; clearText; marker; sound(`T4C221`); appendText; 
   //Sora
   Sora`"Is...this feminine make-up?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Um, well...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not quite..."`;
   waitForClick; clearText; marker; sound(`T4C222`); appendText; 
   //Sora
   Sora`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Um...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's actually..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Over the top.`;
   waitForClick; clearText; marker; appendText; 
   Narr`REALLY over the top.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a complete failure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like a child's scribbling.`;
   waitForClick; clearText; marker; sound(`T4C223`); appendText; 
   //Sora
   Sora`"I've never looked like this! This is a 
change!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I've never seen anything, uh, you like 
this..."`;
   waitForClick; clearText; marker; sound(`T4C224`); appendText; 
   //Sora
   Sora`"I think I like it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I wouldn't be so sure about that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You really think so...?"`;
   waitForClick; clearText; marker; sound(`T4C225`); appendText; 
   //Sora
   Sora`"What? You don't...like it?"`;
   waitForClick; clearText; marker; sound(`T4C226`); appendText; 
   //Sora
   Sora`"...I didn't think you would."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Miss Anagesaki?..."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Aaaargh!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's all wrong!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to rub the lipstick off with my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it wouldn't come off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The more I tried to wipe it off, the more the 
lipstick spread on her face.`;
   waitForClick; clearText; marker; sound(`T4C227`); appendText; 
   //Sora
   Sora`"Professor!"`;
   waitForClick; clearText; marker; sound(`T4C228`); appendText; 
   //Sora
   Sora`"Is this feminine make-up?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All around Sora's mouth was stained red.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Miss Anagesaki..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not exactly."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without meaning to, I laughed.`;
   waitForClick; clearText; marker; sound(`T4C229`); appendText; 
   //Sora
   Sora`"P-Professor?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mm...mhhh...haaa....haaaa..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But it's certainly a change. Haaa, haaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was apologizing, but I couldn't stop 
laughing.`;
   waitForClick; clearText; marker; sound(`T4C230`); appendText; 
   //Sora
   Sora`"Ooohh! Professor!"`;
   waitForClick; clearText; marker; sound(`T4C231`); appendText; 
   //Sora
   Sora`"Stop playing with my face!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then Sora started to laugh as well.`;
   waitForClick; clearText; marker; sound(`T4C232`); appendText; 
   //Sora
   Sora`"Tee hee hee..."`;
   waitForClick; clearText; marker; sound(`T4C233`); appendText; 
   //Sora
   Sora`"Ha ha ha...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We both collapsed laughing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of our laughter filled the silence 
of the nighttime kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been ages since I had laughed like that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And after we had laughed for a while...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora moved over to the next window.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C234`); appendText; 
   //Sora
   Sora`"Please do it properly this time."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's face became serious.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. Okay, then...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. This time I promise you perfect 
feminine beauty..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I picked up the pen again and faced the glass.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I faced it, but....`;
   waitForClick; clearText; marker; sound(`T4C235`); appendText; 
   //Sora
   Sora`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nothing..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't draw anything with the pen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stared deep into Sora's eyes through the 
glass.`;
   waitForClick; clearText; marker; sound(`T4C236`); appendText; 
   //Sora
   Sora`"Ta...ke....shi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her glossy lips were forming my name.`;
   waitForClick; clearText; marker; sound(`T4C237`); appendText; 
   //Sora
   Sora`"Uummmm....."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's not do this."`;
   waitForClick; clearText; marker; sound(`T4C238`); appendText; 
   //Sora
   Sora`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't need makeup..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't need makeup, Sora, you're already 
beautiful."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C239`); appendText; 
   //Sora
   Sora`"Professor..."`;
   waitForClick; clearText; marker; sound(`T4C240`); appendText; 
   //Sora
   Sora`"Don't tease me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm not teasing you, I mean it."`;
   waitForClick; clearText; marker; sound(`T4C241`); appendText; 
   //Sora
   Sora`"Don't say that, professor."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see Sora blushing.`;
   waitForClick; clearText; marker; sound(`T4C242`); appendText; 
   //Sora
   Sora`"If you say that, professor, I'll start to 
take you seriously."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She bowed her head, her eyes searching around.`;
   waitForClick; clearText; marker; sound(`T4C243`); appendText; 
   //Sora
   Sora`"I..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No more playing teacher."`;
   waitForClick; clearText; marker; sound(`T4C244`); appendText; 
   //Sora
   Sora`"Professor?"`;
   waitForClick; clearText; marker; sound(`T4C245`); appendText; 
   //Sora
   Sora`"Uh....Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora slowly raised her head and looked me in 
the eyes.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Your hands..."`;
   waitForClick; clearText; marker; sound(`T4C246`); appendText; 
   //Sora
   Sora`"Hmmm?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Put your hands here."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO03A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I put my hands against the glass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora placed her hands where mine were.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Right against left, left against right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Separated only by a pane of glass, our hands 
were touching.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What should be a barrier between us was 
actually the only thing joining us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without something between us, we couldn't 
touch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But on either side of this glass, we were 
able to confirm the existence of the other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt as if my hands were touching Sora's 
body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's face was there in front of me, mere 
inches from me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were so close I could hear her breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that I could probably even take her 
in my arms.`;
   waitForClick; clearText; marker; sound(`T4C247`); appendText; 
   //Sora
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T4C248`); appendText; 
   //Sora
   Sora`"May I ask you something?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Go ahead..."`;
   waitForClick; clearText; marker; sound(`T4C249`); appendText; 
   //Sora
   Sora`"I feel warm..."`;
   waitForClick; clearText; marker; sound(`T4C250`); appendText; 
   //Sora
   Sora`"I feel really warm..."`;
   waitForClick; clearText; marker; sound(`T4C251`); appendText; 
   //Sora
   Sora`"From my fingers...and in my heart..."`;
   waitForClick; clearText; marker; sound(`T4C252`); appendText; 
   //Sora
   Sora`"What's happening...?"`;
   waitForClick; clearText; marker; sound(`T4C253`); appendText; 
   //Sora
   Sora`"Why do you think....?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's eyes glistened with tears as she 
stared at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The glass in the window was shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's warmth spread to my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was just an illusion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I closed my eyes, Sora disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But in my hand I could feel the warmth like 
sunshine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if the warmth was just an illusion...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora existed there and then. Of that I was 
certain.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 150 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_5A`);
