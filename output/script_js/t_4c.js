l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
setDialogBoxColor(GREEN);
if (l_sora_flag == 0) goto(lbl_00000273);
bgload({ name: `BG07B1`, transition: 20 });
playBGM({ num: 1, volume: 100 });
setSceneTitle({ index: 26 });
clock(`18:24`);
showTextbox();
text(() => {
   marker; appendText; 
   `Several hours had passed since Sora's outburst`;
   waitForClick; clearText; marker; appendText; 
   `You, Coco and the Kid had finished their meal 
and moved to the rest area, where they were 
relaxing and letting their food digest.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, then...."`;
   waitForClick; clearText; marker; appendText; 
   `I had almost finished tidying up the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hee hee hee...!"`;
   waitForClick; clearText; marker; appendText; 
   `I pulled out the object I had secretly hidden 
behind the warmer.`;
   waitForClick; clearText; marker; appendText; 
   `Actually, there had been one sausage left at 
the back of the refrigerator.`;
   waitForClick; clearText; marker; appendText; 
   `There were no hot dog buns, 
so I stuffed the sausage into a bread roll.`;
   waitForClick; clearText; marker; appendText; 
   `I slapped on ketchup and mustard and took a 
big bite.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mmm...mm...this is so good...!"`;
   waitForClick; clearText; marker; appendText; 
   `My mouth filled with the juicy flavor as I 
bit down.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mmmm....meat.....mmm...yum...."`;
   waitForClick; clearText; marker; appendText; 
   `Fried chicken sandwiches were good, but not 
every meal every single day.`;
   waitForClick; clearText; marker; appendText; 
   `I hid in the back of the kiosk and devoured 
the sausage.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T4C000`); appendText; 
   Sora`"Oh, Takeshi, there you are."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mmmf?!"`;
   waitForClick; clearText; marker; appendText; 
   `Surprised by Sora's voice, I choked on a 
piece of sausage.`;
   waitForClick; clearText; marker; appendText; 
   `Sora appeared in front of me.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"......!? ......!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C001`); appendText; 
   Sora`"Takeshi? Are you all right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"-------------------agh!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A, ahgh... *cough* *cough*..."`;
   waitForClick; clearText; marker; appendText; 
   `Blinking and struggling, I finally managed to 
swallow the chunk of meat.`;
   waitForClick; clearText; marker; appendText; 
   `I swallowed the rest of the sausage in one 
bite to remove the evidence.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I struggled to control my breathing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C002`); appendText; 
   Sora`"What is it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Not a word about what you just saw, okay?"`;
   waitForClick; clearText; marker; sound(`T4C003`); appendText; 
   Sora`"Y-yes...alright. I understand."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C004`); appendText; 
   Sora`"But what were you doing? Were you eating 
something?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, well if you don't know, it doesn't 
matter."`;
   waitForClick; clearText; marker; sound(`T4C005`); appendText; 
   Sora`"???"`;
   waitForClick; clearText; marker; appendText; 
   `As usual, Sora feigned ignorance.`;
   waitForClick; clearText; marker; appendText; 
   `It looked like she didn't remember my love 
psychology lecture.`;
   waitForClick; clearText; marker; appendText; 
   `It was just as well.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C006`); appendText; 
   Sora`"By the way...I just had a talk with Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, really?"`;
   waitForClick; clearText; marker; appendText; 
   `Surprised, I blinked.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You were able to talk with Tsugumi?"`;
   waitForClick; clearText; marker; sound(`T4C007`); appendText; 
   Sora`"Yes. She returned to the infirmary, so I 
went to see her her."`;
   waitForClick; clearText; marker; sound(`T4C008`); appendText; 
   Sora`"Tsugumi was actually the one to speak first."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh?"`;
   waitForClick; clearText; marker; sound(`T4C009`); appendText; 
   Sora`"Yes. She said she was sorry for going too 
far and smashing the medical equipment."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A-apologized? Tsugumi!?"`;
   waitForClick; clearText; marker; sound(`T4C010`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   `I was surprised.`;
   waitForClick; clearText; marker; appendText; 
   `No, I was really surprised.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C011`); appendText; 
   Sora`"And then she asked me a really strange 
question."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A strange question?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What'd she ask?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C012`); appendText; 
   Sora`"Well...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C013`); appendText; 
   Sora`"She said, 'What do you know about my past?'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C014`); appendText; 
   Sora`"I didn't know what to say..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C015`); appendText; 
   Sora`"I told her I didn't know anything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C016`); appendText; 
   Sora`"...because I didn't know anything."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh...oh...."`;
   waitForClick; clearText; marker; appendText; 
   `It WAS a strange question.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where's Tsugumi now?"`;
   waitForClick; clearText; marker; appendText; 
   `I said this trying to restrain my sense of 
urgency.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C017`); appendText; 
   Sora`"She nodded at my answer and went to bed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`Bed?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She went back to the infirmary and went to 
bed?"`;
   waitForClick; clearText; marker; sound(`T4C018`); appendText; 
   Sora`"Well, yes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you sure? Is that where she is now?"`;
   waitForClick; clearText; marker; sound(`T4C019`); appendText; 
   Sora`"Yes, probably."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Probably, huh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Can you check to make sure Tsugumi isn't 
wandering around instead of taking it easy?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I nodded, but Sora looked troubled.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's wrong? All it takes is a quick scan."`;
   waitForClick; clearText; marker; sound(`T4C020`); appendText; 
   Sora`"Yes, well..."`;
   waitForClick; clearText; marker; sound(`T4C021`); appendText; 
   Sora`"Takeshi, I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C022`); appendText; 
   Sora`"I don't like to scan with the sensors unless 
it's an emergency."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`T4C023`); appendText; 
   Sora`"There are times when even you want to be 
alone, right Takeshi?"`;
   waitForClick; clearText; marker; sound(`T4C024`); appendText; 
   Sora`"And times when you want to talk about 
something secret, or be alone with 
somebody...?"`;
   waitForClick; clearText; marker; sound(`T4C025`); appendText; 
   Sora`"I want to protect people's privacy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C026`); appendText; 
   Sora`"If I scan, then I know everything."`;
   waitForClick; clearText; marker; appendText; 
   `Sora's smile was slightly uncomfortable.`;
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
   `Sora went to check on LeMMIH, and I went to 
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
   `Several hours went by.`;
   waitForClick; clearText; marker; appendText; 
   `In the end, I hung around in LeMU by myself 
and just killed some time.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't see Tsugumi during that time.`;
   waitForClick; clearText; marker; appendText; 
   `I decided to have an early dinner...`;
   waitForClick; clearText; marker; appendText; 
   `You, Coco and the Kid had finished their meal 
and moved to the rest area, where they were 
relaxing and letting their food digest.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, then...."`;
   waitForClick; clearText; marker; appendText; 
   `I had almost finished tidying up the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hee hee hee...!"`;
   waitForClick; clearText; marker; appendText; 
   `I pulled out the object I had secretly hidden 
behind the warmer.`;
   waitForClick; clearText; marker; appendText; 
   `Actually, there had been one sausage left at 
the back of the refrigerator.`;
   waitForClick; clearText; marker; appendText; 
   `There were no hot dog buns, 
so I stuffed the sausage into a bread roll.`;
   waitForClick; clearText; marker; appendText; 
   `I slapped on the ketchup and mustard and took 
a big bite.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mmm...mm...this is so good...!"`;
   waitForClick; clearText; marker; appendText; 
   `My mouth filled with the juicy flavor as I 
bit down.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mmmm....meat..... mmm... yum...."`;
   waitForClick; clearText; marker; appendText; 
   `Fried chicken sandwiches were good, but not 
every meal, every single day.`;
   waitForClick; clearText; marker; appendText; 
   `I hid in the back of the kiosk and devoured 
the sausage.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T4C027`); appendText; 
   Coco`"Oh, Takeshi, there you are."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mmmf?!"`;
   waitForClick; clearText; marker; appendText; 
   `Surprised by Coco's voice, I choked on a 
piece of sausage.`;
   waitForClick; clearText; marker; appendText; 
   `Coco appeared in front of me.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 9, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"......!? ......!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C028`); appendText; 
   Coco`"Takeshi? Are you all right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"-------------------agh!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A, ahgh...*cough* *cough*..."`;
   waitForClick; clearText; marker; appendText; 
   `Blinking and struggling, I finally managed to 
swallow the chunk of meat.`;
   waitForClick; clearText; marker; appendText; 
   `I swallowed the rest of the sausage in one 
bite to remove the evidence.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I struggled to control my breathing.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Coco..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C029`); appendText; 
   Coco`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Not a word about what you just saw, okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C030`); appendText; 
   Coco`"Um, okay sure, but..."`;
   waitForClick; clearText; marker; sound(`T4C031`); appendText; 
   Coco`"Takepyon, you didn't eat your sandwich 
before."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C032`); appendText; 
   Coco`"Oh, I see. You were saving it to eat later?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, yeah. That's it."`;
   waitForClick; clearText; marker; sound(`T4C033`); appendText; 
   Coco`"That was all? Oh, good."`;
   waitForClick; clearText; marker; sound(`T4C034`); appendText; 
   Coco`"I was worried about you. I thought you'd 
lost your appetite."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, I'm fine. I ate."`;
   waitForClick; clearText; marker; appendText; 
   `I scratched my head.`;
   waitForClick; clearText; marker; appendText; 
   `(Sorry, Coco...I was selfishly eating a 
sausage all by myself. Please forgive me....)`;
   waitForClick; clearText; marker; appendText; 
   `Inside, I apologized silently to her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C035`); appendText; 
   Coco`Oh, that reminds me...`;
   waitForClick; clearText; marker; sound(`T4C036`); appendText; 
   Coco`"Takepyon. Takepyon! I talked to Sora."`;
   waitForClick; clearText; marker; sound(`T4C037`); appendText; 
   Coco`"And guess what? Sora said she spoke to 
Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, really?"`;
   waitForClick; clearText; marker; appendText; 
   `Surprised, I blinked.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She spoke to Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C038`); appendText; 
   Coco`"Yeah. When she went back to the infirmary."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really..."`;
   waitForClick; clearText; marker; sound(`T4C039`); appendText; 
   Coco`"And when Tsugumi ran into Sora in the 
infirmary."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C040`); appendText; 
   Coco`"She apologized for going all crazy and 
smashing the stuff. She even cleaned up the 
mess."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A-apologized? Tsugumi!?"`;
   waitForClick; clearText; marker; sound(`T4C041`); appendText; 
   Coco`"Yup. That's what I heard."`;
   waitForClick; clearText; marker; appendText; 
   `I was surprised.`;
   waitForClick; clearText; marker; appendText; 
   `No, I was really surprised.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What else? Did you hear anything else?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C042`); appendText; 
   Coco`"Anything else? Umm.....well..."`;
   waitForClick; clearText; marker; sound(`T4C043`); appendText; 
   Coco`"Sora said Tsugumi was asking questions and 
stuff."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Asking questions?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C044`); appendText; 
   Coco`"Yeah, she asked her a really silly question."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A strange...question?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What'd she ask?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C045`); appendText; 
   Coco`"Um, what was it?... Oh, yeah!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C046`); appendText; 
   Coco`"'What do you know about my past?'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C047`); appendText; 
   Coco`"Or something like that...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C048`); appendText; 
   Coco`"Sora said she didn't know anything."`;
   waitForClick; clearText; marker; sound(`T4C049`); appendText; 
   Coco`"I guess Tsugumi was satisfied."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is that it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C050`); appendText; 
   Coco`"Yup, that's it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh."`;
   waitForClick; clearText; marker; sound(`T4C051`); appendText; 
   Coco`"Come to think about it, that is kind of a 
silly question."`;
   waitForClick; clearText; marker; appendText; 
   `Yes...it was very weird.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Coco, where's Tsugumi now?"`;
   waitForClick; clearText; marker; appendText; 
   `I said this trying to restrain my sense of 
urgency.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C052`); appendText; 
   Coco`"I think she's still in the infirmary."`;
   waitForClick; clearText; marker; sound(`T4C053`); appendText; 
   Coco`"She went to bed. At least that's what Sora 
said."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Bed?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She went back to the infirmary and went to 
bed?"`;
   waitForClick; clearText; marker; sound(`T4C054`); appendText; 
   Coco`"Yeah, I think."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you sure? Is that where she is now?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C055`); appendText; 
   Coco`"Uuum, probably."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Probably, huh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All right, then. I think I'll go and check 
on her."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What is it? What, Coco? Is there something 
on my face?"`;
   waitForClick; clearText; marker; appendText; 
   `For some reason, Coco was staring at my face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She laughed quietly.`;
   waitForClick; clearText; marker; sound(`T4C056`); appendText; 
   Coco`"You like Tsugumi, don't you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-you gotta be kidding me! There's no way!"`;
   waitForClick; clearText; marker; sound(`T4C057`); appendText; 
   Coco`"Really? I wonder?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C058`); appendText; 
   Coco`"It seems to me like it's written aaAAaall 
over your face."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?!"`;
   waitForClick; clearText; marker; appendText; 
   `Flustered, I rubbed at my face.`;
   waitForClick; clearText; marker; appendText; 
   `Nothing came off on my hands.`;
   waitForClick; clearText; marker; appendText; 
   `At least nobody had been writing on my face 
again...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Coco, watching me, had a smile as bright as 
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
   `I left Coco and went to the second floor 
infirmary.`;
   waitForClick; clearText; 
});
let lbl_000004f7;
showTextbox();
text(() => {
   marker; appendText; 
   `I hope she's resting properly...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Heeey, Tsugumi, can I come in?"`;
   waitForClick; clearText; marker; appendText; 
   `I spoke into the intercom and opened the door.`;
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
   `The infirmary was quiet again.`;
   waitForClick; clearText; marker; appendText; 
   `All the smashed equipment had been tidied up.`;
   waitForClick; clearText; marker; appendText; 
   `Sure enough...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi was there.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, you really are in bed!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't believe it!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Perhaps sensing my presence, Tsugumi opened 
her eyes.`;
   waitForClick; clearText; marker; sound(`T4C059`); appendText; 
   Tsugumi`"What? Could you keep it down....?"`;
   waitForClick; clearText; marker; appendText; 
   `Her voice was normal.`;
   waitForClick; clearText; marker; sound(`T4C060`); appendText; 
   Tsugumi`"Am I not supposed to here or something?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No! No, not at all!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I was just surprised, that's all."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C061`); appendText; 
   Tsugumi`"Surprised?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Um, yeah, surprised."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You came back."`;
   waitForClick; clearText; marker; sound(`T4C062`); appendText; 
   Tsugumi`"Yeah...well...."`;
   waitForClick; clearText; marker; sound(`T4C063`); appendText; 
   Tsugumi`"I had to come back from that sector. There 
was nowhere to go."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, that's not what I.... Ah, no, never 
mind."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, I'm glad you're back."`;
   waitForClick; clearText; marker; sound(`T4C064`); appendText; 
   Tsugumi`"Glad...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah. Glad. Relieved?"`;
   waitForClick; clearText; marker; sound(`T4C065`); appendText; 
   Tsugumi`"....Oh, really."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi looked at me intently.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `As she spoke, she lay back down and slowly 
closed her eyes.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C066`); appendText; 
   Tsugumi`"Keep your voice down, okay?"`;
   waitForClick; clearText; marker; sound(`T4C067`); appendText; 
   Tsugumi`"My head hurts a little. Noise makes it worse."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh? Yeah, I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, you hungry?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You want me to make you a sandwich?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T4C068`); appendText; 
   Tsugumi`"Yes, please..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay. I'll go get you one."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait right here. I'll be back soon, okay? So 
don't move."`;
   waitForClick; clearText; marker; appendText; 
   `I tried not to make any noise as I left.`;
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
   `As soon as I got out of the infirmary I 
sprinted to the third floor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `The kiosk had been cleaned up, but I turned 
the fryer back on and heated up the chicken.`;
   waitForClick; clearText; marker; appendText; 
   `I hurried, but worked carefully.`;
   waitForClick; clearText; marker; appendText; 
   `I heated the bread and browned it slightly.`;
   waitForClick; clearText; marker; appendText; 
   `I spread on the special sauce, and chose the 
best piece of lettuce.`;
   waitForClick; clearText; marker; appendText; 
   `Hurriedly wrapping the hot sandwich, I left 
the kiosk.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I sprinted back to the infirmary. I had been 
away less than ten minutes.`;
   waitForClick; clearText; marker; appendText; 
   `She was probably sick of waiting.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I punched the open button until the door 
opened.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sorry I took so long..."`;
   waitForClick; clearText; marker; appendText; 
   `I called out softly as I approached the quiet 
bed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I took more trouble with this than usual.  
It's a masterpiece."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Eat it before it gets cold..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   `Maybe she was asleep.`;
   waitForClick; clearText; marker; appendText; 
   `I approached the bed, but there was no answer.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Tsugumiiii..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsugumi, here's your food."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A delicious sandwich, get it while it's 
hot..."`;
   waitForClick; clearText; marker; appendText; 
   `I called softly, but there was no response.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"TSUGUMI!!!!"`;
   waitForClick; clearText; marker; appendText; 
   `I tried yelling.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I said, HERE'S YOUR FOOD!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you going to eat it? Say something!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `GRAB!!`;
   waitForClick; clearText; marker; appendText; 
   `I pulled back the blanket on the bed.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10E`, transition: 20 });
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   `The bed was still slightly warm...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She's gone!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I told her not to move!"`;
   waitForClick; clearText; marker; appendText; 
   `I let out a deep sigh.`;
   waitForClick; clearText; marker; appendText; 
   `I held my head in my hands.`;
   waitForClick; clearText; marker; appendText; 
   `I resisted the urge to throw the sandwich 
against the wall.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where on earth did that stupid girl run off 
to...?"`;
   waitForClick; clearText; marker; appendText; 
   `Without thinking about it, I stamped my foot.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Crunch!`;
   waitForClick; clearText; marker; appendText; 
   `I felt something hard under my shoe.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh......?"`;
   waitForClick; clearText; marker; appendText; 
   `I lifted my foot and looked down.`;
   waitForClick; clearText; marker; appendText; 
   `Whatever I had stepped on was pulverized 
under my feet.`;
   waitForClick; clearText; marker; appendText; 
   `The small pieces smelled faintly.`;
   waitForClick; clearText; marker; appendText; 
   `I bent down, and spread them out on my hand.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Looks like nuts..."`;
   waitForClick; clearText; marker; appendText; 
   `Glancing under the bed, I found a rolled-up 
sheet stuffed underneath.`;
   waitForClick; clearText; marker; appendText; 
   `I pulled it out.`;
   waitForClick; clearText; marker; appendText; 
   `I found a bag, which had probably contained 
the nuts, and an empty box.`;
   waitForClick; clearText; marker; appendText; 
   `They looked like souvenirs bought at some shop.`;
   waitForClick; clearText; marker; appendText; 
   `(Where these here when we searched the place?)`;
   waitForClick; clearText; marker; appendText; 
   `Had Tsugumi smuggled them in?`;
   waitForClick; clearText; marker; appendText; 
   `(Was she eating them in secret...?)`;
   waitForClick; clearText; marker; appendText; 
   `No, that explanation didn't feel quite right.`;
   waitForClick; clearText; marker; appendText; 
   `(Ah ...)`;
   waitForClick; clearText; marker; appendText; 
   `I thought the nuts were crushed because I had 
stepped on them....`;
   waitForClick; clearText; marker; appendText; 
   `But, there was also a large amount of powder 
under the bed.  Someone had deliberately 
crushed the nuts.`;
   waitForClick; clearText; marker; appendText; 
   `I pulled the box out from under the bed, and 
glanced inside.`;
   waitForClick; clearText; marker; appendText; 
   `A section of the lid had been torn off, and 
the box was filled with cotton, with a soft 
hollow in the center.`;
   waitForClick; clearText; marker; appendText; 
   `It looked like the nest of some small animal.`;
   waitForClick; clearText; 
});
if (l_went_outside_as_sora_suggests_in_3rd_day == 0) goto(lbl_00000719);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hmmmm..."`;
   waitForClick; clearText; marker; appendText; 
   `I considered the evidence..`;
   waitForClick; clearText; marker; appendText; 
   `The cotton in the box, and the scattered 
pieces of nut..`;
   waitForClick; clearText; marker; appendText; 
   `(Did Tsugumi have some kind of pet?)`;
   waitForClick; clearText; marker; appendText; 
   `It seemed a reasonable conclusion.`;
   waitForClick; clearText; marker; appendText; 
   `In that case...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe she's gone looking for her pet?"`;
   waitForClick; clearText; marker; appendText; 
   `But where exactly?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I couldn't ask Sora..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I called Sora from the infirmary terminal, 
but she didn't appear.`;
   waitForClick; clearText; 
});
goto(lbl_00000731);
let lbl_00000719;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Maybe...?!"`;
   waitForClick; clearText; marker; appendText; 
   `Now that I thought about it, I remembered 
having seen a rat running out of the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   `(So, was Tsugumi keeping a rat in here...?)`;
   waitForClick; clearText; marker; appendText; 
   `The evidence would seem to point to that.`;
   waitForClick; clearText; marker; appendText; 
   `In that case...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`Has she gone looking for her pet?`;
   waitForClick; clearText; marker; appendText; 
   `But, where exactly?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe I should ask Sora."`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I called Sora from the infirmary terminal.`;
   waitForClick; clearText; marker; appendText; 
   `But she didn't appear.`;
   waitForClick; clearText; marker; appendText; 
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
   `I looked at the map of LeMU on the monitor, 
but could detect no signs of life.`;
   waitForClick; clearText; marker; appendText; 
   `Where in the vicinity would LeMMIH's would 
there be a large terminal functioning?`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course - the Security Office!"`;
   waitForClick; clearText; marker; appendText; 
   `If I went there I would probably learn 
something.`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I left the infirmary and turned left down a 
corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `When I arrived at the Security Office, I 
opened the door and flew inside.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `There was somebody already there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi was sitting in a chair in front of the 
console.`;
   waitForClick; clearText; marker; appendText; 
   `She was engrossed in something and didn't 
notice me come in.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `She was doing something at the console.`;
   waitForClick; clearText; marker; appendText; 
   `On the screen was a zoomed-in section of a map.`;
   waitForClick; clearText; marker; appendText; 
   `A strange point of light was moving across the 
enlarged section of the map.`;
   waitForClick; clearText; marker; appendText; 
   `The light indicated a sign of life. `;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `She hit the key.`;
   waitForClick; clearText; marker; appendText; 
   `One portion of the screen changed, and the 
remote camera zoomed in on whatever was 
reacting.`;
   waitForClick; clearText; marker; appendText; 
   `A living creature was visible on the monitor.`;
   waitForClick; clearText; marker; sound(`T4C069`); appendText; 
   Tsugumi`"Phew...".`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi breathed a sigh of relief.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A rat."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `At the sound of my whisper, Tsugumi swung 
around.`;
   waitForClick; clearText; marker; appendText; 
   `She blinked.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's a rat, isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`".........."`;
   waitForClick; clearText; marker; appendText; 
   `A grey rat was running along a pipe.`;
   waitForClick; clearText; marker; appendText; 
   `The map showed the isolated sector on the 
third floor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is it that rat you're looking for?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C070`); appendText; 
   Tsugumi`"...Of, of course not!"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was obviously flustered.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I looked under your bed and saw the box."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There were nuts everywhere..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `She looked away.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't have to answer if you don't want 
to."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, I wonder how that dirty rodent get 
here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C071`); appendText; 
   Tsugumi`"DIRTY RODENT!?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's voice was suddenly hysterical.`;
   waitForClick; clearText; marker; appendText; 
   `I was a little taken aback.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's not a rat?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C072`); appendText; 
   Tsugumi`"It's a Djungarian hamster!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C073`); appendText; 
   Tsugumi`"...I think...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Reeally...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, so that's what it's called, a Djungarian, 
huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're pretty knowledgeable, Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C074`); appendText; 
   Tsugumi`"...E-everybody knows what they're called...".`;
   waitForClick; clearText; marker; appendText; 
   `Her chest puffed out slightly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So you were looking for that rat?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C075`); appendText; 
   Tsugumi`"No!"`;
   waitForClick; clearText; marker; sound(`T4C076`); appendText; 
   Tsugumi`"I told you it's not a rat!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, sorry, uh, not rat, but hamster."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You were looking for the hamster?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi seemed to nod her head, reluctantly.`;
   waitForClick; clearText; marker; appendText; 
   `The movement was so small I wasn't even sure 
if she had made it.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi looked back at the monitor.`;
   waitForClick; clearText; marker; sound(`T4C077`); appendText; 
   Tsugumi`"He probably traveled through some pipe."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Pipe?"`;
   waitForClick; clearText; marker; sound(`T4C078`); appendText; 
   Tsugumi`"The pipes with the electric cables, or the 
power sockets."`;
   waitForClick; clearText; marker; appendText; 
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
   `Her finger traced the map.`;
   waitForClick; clearText; marker; appendText; 
   `Nobody could walk to where the hamster was.`;
   waitForClick; clearText; marker; appendText; 
   `The top right of the screen showed an area 
under water.  It seemed there was one room 
still empty.`;
   waitForClick; clearText; marker; appendText; 
   `It was even further away than the isolated 
area on the third floor.`;
   waitForClick; clearText; marker; appendText; 
   `It wasn't very clear on this map, but there 
was one emergency corridor in the sector.`;
   waitForClick; clearText; marker; appendText; 
   `(Hmmmm...)`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I committed LeMU's map to memory...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Geez. I guess I'll just have to..."`;
   waitForClick; clearText; marker; appendText; 
   `I grabbed a plastic bag from the trashcan, and 
headed for the exit.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C079`); appendText; 
   Tsugumi`"Where do you think you're going?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Where do you think I'm going? I'm going to 
go get him."`;
   waitForClick; clearText; marker; sound(`T4C080`); appendText; 
   Tsugumi`"Who?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That funny looking hamster."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C081`); appendText; 
   Tsugumi`"There's no way you'll make it!"`;
   waitForClick; clearText; marker; sound(`T4C082`); appendText; 
   Tsugumi`There's a section underwater between here and 
there!`;
   waitForClick; clearText; marker; sound(`T4C083`); appendText; 
   Tsugumi`"And no human could fit through the pipe!"`;
   waitForClick; clearText; marker; appendText; 
   `I ignored her and left the Security Office.`;
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
   `I began to walk toward the place I had in mind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C084`); appendText; 
   Tsugumi`"Wait!"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi caught up with me, and grabbed my arm.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What now?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If I don't get going, Mr. Hamster is going 
to move to another place."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C085`); appendText; 
   Tsugumi`"How do you plan to get in there?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How else? ...Swim."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C086`); appendText; 
   Tsugumi`"Huh!?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's hand relaxed.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Still in her grip, I kept moving.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi came with me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C087`); appendText; 
   Tsugumi`"W-Wait!"`;
   waitForClick; clearText; marker; sound(`T4C088`); appendText; 
   Tsugumi`"Are you out of your mind?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm going through with this."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C089`); appendText; 
   Tsugumi`"That's the reason why I think you are stupid."`;
   waitForClick; clearText; marker; sound(`T4C090`); appendText; 
   Tsugumi`"If you open those flood gates, you'll be 
overwhelmed by the seawater - the pressure is 
6 atmospheres!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't have to worry about that."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `MAP04A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"The hamster's in an area directly connected 
to the flooded emergency corridor."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The water in that area is 1 atmosphere of 
pressure. So, the flooded corridor should be 
about the same."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Besides, the flood gates on either side of 
the corridor are firmly shut."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That corridor is completely isolated from the 
outside seawater."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"The entrance on the other side is open."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If I use the flooded corridor beneath the 
room, I can get into the next area...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why don't you go back and check the map?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG23A1`, transition: 20 });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C091`); appendText; 
   Tsugumi`"But..."`;
   waitForClick; clearText; marker; sound(`T4C092`); appendText; 
   Tsugumi`"How far do you think it is to get to the 
area?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"153 feet."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I made sure to check it before."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C093`); appendText; 
   Tsugumi`"Yeah, but 153 feet is a long way..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It'll be all right."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've swam to one end and back of a 25 meter 
pool underwater, once..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I kicked off the far wall coming back, but 
still..."`;
   waitForClick; clearText; marker; appendText; 
   `I waved my hands to dismiss it. Tsugumi's 
expression hardened.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C094`); appendText; 
   Tsugumi`"You..."`;
   waitForClick; clearText; marker; sound(`T4C095`); appendText; 
   Tsugumi`"You are crazy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C096`); appendText; 
   Tsugumi`"Are you trying to kill yourself?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi breathed in sharply.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll be all right."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's all right, I won't die. I promise I'll 
come back."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C097`); appendText; 
   Tsugumi`"Why are you doing this?"`;
   waitForClick; clearText; marker; sound(`T4C098`); appendText; 
   Tsugumi`"Why are you doing this for one little 
hamster?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What else can I do?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We're all in this together."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe you're not one of us...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But any pet you have is one of us."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In Japan, people with the same goal are 
called friends..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C099`); appendText; 
   Tsugumi`"......You're an idiot."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That doesn't bother me."`;
   waitForClick; clearText; marker; appendText; 
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
   `We took EI down to the 3rd floor.`;
   waitForClick; clearText; marker; appendText; 
   `From there we walked along the corridor to the 
isolated sector.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, you may as well eat this."`;
   waitForClick; clearText; marker; appendText; 
   `The fried chicken sandwich was still in my 
hand. I shoved it at Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Here, before it gets cold."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi's face showed no reaction as she 
silently accepted the sandwich.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi slowly unwrapped the sandwich.`;
   waitForClick; clearText; marker; appendText; 
   `She cautiously sniffed it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C100`); appendText; 
   Tsugumi`"*MUNCH*"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi suddenly took a huge bite.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C101`); appendText; 
   Tsugumi`"Mmm  ...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C102`); appendText; 
   Tsugumi`"Mmmff....nnn..."`;
   waitForClick; clearText; marker; appendText; 
   `She ate it fast.`;
   waitForClick; clearText; marker; appendText; 
   `The sandwich disappeared before my eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C103`); appendText; 
   Tsugumi`"......Whew."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How was it? Good, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi didn't reply, but balled up the 
sandwich wrapping paper and threw it back at 
me.`;
   waitForClick; clearText; marker; appendText; 
   `But seeing how happily she ate, I didn't need 
words to know how she felt.`;
   waitForClick; clearText; marker; appendText; 
   `I was pleased.`;
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
   `We arrived at the pipe room.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `We searched the floor and opened the hatch of 
the manhole that led to the emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   `We peered inside.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `A tube of about two feet in diameter 
stretched down below us.`;
   waitForClick; clearText; marker; appendText; 
   `A simple ladder was fixed on one side of the 
tube. About six feet down we could see the 
submerged emergency light shining.`;
   waitForClick; clearText; marker; appendText; 
   `We could find no signs as we peered through 
the hatch that the water was backflowing.`;
   waitForClick; clearText; marker; appendText; 
   `That meant that the water pressure inside the 
corridor was balanced against the pressure 
around us.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wonder if there's something I can use to 
guide me back?"`;
   waitForClick; clearText; marker; appendText; 
   `Fortunately, there was a rope with a hook on 
it, which looked as if it were a lifeline for 
the maintenance crew. I decided to hold on to 
it when I went in.`;
   waitForClick; clearText; marker; appendText; 
   `Checking that the rope was long enough, I 
tied it firmly to a pipe nearby.`;
   waitForClick; clearText; marker; appendText; 
   `If I tied it to the hook where I came out, 
then it should be easy to return.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright then..."`;
   waitForClick; clearText; marker; appendText; 
   `I did some light stretching exercises to warm 
up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C104`); appendText; 
   Tsugumi`"Wait!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C105`); appendText; 
   Tsugumi`"I should...go instead."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi stared me square in the face.`;
   waitForClick; clearText; 
});
if (l_tsugumi_flag == 0) goto(lbl_00001018);
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C106`); appendText; 
   Tsugumi`"Don't get me wrong."`;
   waitForClick; clearText; marker; sound(`T4C107`); appendText; 
   Tsugumi`"I just don't want to watch you pull this 
hypocritical stunt is all."`;
   waitForClick; clearText; marker; sound(`T4C108`); appendText; 
   Tsugumi`"I don't want to see you kill yourself 
because you believe this hypocrisy."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How can you say that?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's not a nice thing to say!"`;
   waitForClick; clearText; marker; appendText; 
   `I laughed at her as I loosened my limbs and 
body.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll be fine. You go back to the Security 
Office."`;
   waitForClick; clearText; marker; sound(`T4C109`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When I get through to the other side, you 
can tell me where the hamster is."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We won't be able to locate him without 
LeMMIH, will we?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So unless someone who can operate LeMMIH 
stays behind, it won't work."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C110`); appendText; 
   Tsugumi`"But..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, then. It's settled."`;
   waitForClick; clearText; marker; appendText; 
   `I finished warming up and adjusted the voice 
converter in my ear.`;
   waitForClick; clearText; marker; appendText; 
   `Sora had told me that the earphone was 
pressure-resistant, but hadn't said anything 
about whether it was waterproof.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"See you later!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I ruffled Tsugumi's hair and started down the 
ladder.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 24, volume: 100 });
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG06A`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   `My toes reached the bottom of the ladder.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I let go of the ladder and leapt into the 
emergency corridor.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `(Wow, it's COLD!...!)`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `It was like swimming in ice water.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `The water here was much colder than the water 
higher up.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I had greatly miscalculated.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `And that wasn't the only thing I'd 
miscalculated.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `Inside the corridor was pitch dark.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I tried to use my PDA backlight.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I could see that there were parallel walls on 
either side and this part of the corridor was 
straight.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `But that was all I could see.  I knew nothing 
of what was beyond that.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `At that point, my PDA batteries ran out.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `(OH, crap.... No using this for a while...)`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `There was nothing for it but to grope my way 
forward.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `How far had I swum? How much further did I 
need to go?`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I had no way of guessing.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I didn't even know if I was swimming in the 
right direction.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `I just kept swimming in the darkness.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `It was terrifying.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `As my breath got tighter, I could feel the 
fear spreading through my body.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `(I might just die here.)`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `As afraid as I was, I was able to consider 
dying quite calmly.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I was caught in the illusion that I was 
sinking, farther and farther down.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The darkness penetrated to my very core.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `The shadow of death crept through my whole 
body...`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `Eroding my every cell...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `(I can't...last...much longer...)`;
   delay(30); waitForClick; 
   `
`;
   
});
setKomoreType(1);
showKomoreAnim();
showTextbox();
text(() => {
   appendText; 
   `Just as my fear reached its peak, I glimpsed 
a spot of light.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `The exit!`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `Was it 30 feet? Or 60 maybe??`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `My vision was cloudy and I couldn't judge the 
distance.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I was reaching my limit. No, I had probably 
already exceeded it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   `The light was shining beyond the darkness.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `My body was screaming as my cramping fingers 
stretched out to the light.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `A little further, just a little further, the 
light is right - `;
   delay(30); waitForClick; 
   `
`;
   
});
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   appendText; 
   `- there!`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `My hand grabbed the ladder.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I wasted no time in fixing the rope on the 
hook.`;
   delay(30); waitForClick; 
   `
`;
   appendText; 
   `I pulled myself upwards.`;
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
eff_41 = 21;
eff_42 = 9;
eff_50 = 0;
showDimInAndOutAnim();
playSFX({ name: `SE00_09`, a1: 0, volume: 95 });
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I scaled the ladder as quickly as I could, 
and burst out into the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"GGga.....ha......nnggaah....."`;
   waitForClick; clearText; marker; appendText; 
   `I breathed deeply, in and out.`;
   waitForClick; clearText; marker; appendText; 
   `I coughed and spat.`;
   waitForClick; clearText; marker; appendText; 
   `I felt like I was going to cough the darkness 
right out my lungs.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh.... ugh....."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `But, contrary to my expectations - `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".....gagh...."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_28`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `What erupted from my mouth was 
the semi-liquid remains of my hotdog.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I was a little cold, but I shook my head to 
clear it and continued my search for the 
hamster.`;
   waitForClick; clearText; marker; appendText; 
   `The flood doors on either side of the 
corridor were shut tight.`;
   waitForClick; clearText; marker; appendText; 
   `There was only one other door.`;
   waitForClick; clearText; marker; appendText; 
   `I went through.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Mr. Hamster!"`;
   waitForClick; clearText; marker; appendText; 
   `That probably wasn't its name, but never 
mind...`;
   waitForClick; clearText; marker; appendText; 
   `It was better than yelling, 'Mr. Djungarian!'`;
   waitForClick; clearText; marker; sound(`T4C111`); appendText; 
   Tsugumi`"Takeshi, are you all right?"`;
   waitForClick; clearText; marker; appendText; 
   `I heard Tsugumi's voice come out through a 
speaker somewhere in the room.`;
   waitForClick; clearText; marker; sound(`T4C112`); appendText; 
   Tsugumi`"I'm picking up your sound on the monitor. If 
you can hear me, answer."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, Tsugumi, I can hear you."`;
   waitForClick; clearText; marker; sound(`T4C113`); appendText; 
   Tsugumi`"What can you see?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The room is pitch dark. I can't see a thing. 
Either the lights are broken, or there's not 
enough power."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"My trusty PDA is out of power..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I should have brought some fireflies with me."`;
   waitForClick; clearText; marker; sound(`T4C114`); appendText; 
   Tsugumi`"Did you say something?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nothing. If you pick up the hamster's 
location, let me know."`;
   waitForClick; clearText; marker; sound(`T4C115`); appendText; 
   Tsugumi`"Okay..."`;
   waitForClick; clearText; marker; sound(`T4C116`); appendText; 
   Tsugumi`"Go straight ahead, about 10 feet."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"1, 2, 3...okay!"`;
   waitForClick; clearText; marker; sound(`T4C117`); appendText; 
   Tsugumi`"Turn right 40 degrees."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Forty degrees? What kind of angle is THAT?"`;
   waitForClick; clearText; marker; sound(`T4C118`); appendText; 
   Tsugumi`"Hey, you just turned left, not right!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you sure? The other way?"`;
   waitForClick; clearText; marker; sound(`T4C119`); appendText; 
   Tsugumi`"Are you sure you're okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It was just the wrong direction. I'm fine. 
Look, I'm facing the right direction now."`;
   waitForClick; clearText; marker; sound(`T4C120`); appendText; 
   Tsugumi`"Oooh- !"`;
   waitForClick; clearText; marker; sound(`T4C121`); appendText; 
   Tsugumi`"Go straight ahead another 12 feet - there's 
a step there, be careful."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? How can I be careful in the dark?!... 
Wagh!"`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........"`;
   waitForClick; clearText; marker; sound(`T4C122`); appendText; 
   Tsugumi`"What happened?"`;
   waitForClick; clearText; marker; sound(`T4C123`); appendText; 
   Tsugumi`"Takeshi? Takeshi? Are you all right?"`;
   waitForClick; clearText; marker; sound(`T4C124`); appendText; 
   Tsugumi`"Hey! Talk to me! Takeshi!"`;
   waitForClick; clearText; marker; sound(`T4C125`); appendText; 
   Tsugumi`"Ta-Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh....."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's all right, I'm alive."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Can you let me know how high the steps are 
going to be? I didn't realize I'd be smashing 
my knee against it."`;
   waitForClick; clearText; marker; sound(`T4C126`); appendText; 
   Tsugumi`"...I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, okay, go on. Is Mr. Hamster still 
here? He hasn't run away?"`;
   waitForClick; clearText; marker; sound(`T4C127`); appendText; 
   Tsugumi`"He's still there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, navigate me."`;
   waitForClick; clearText; marker; sound(`T4C128`); appendText; 
   Tsugumi`"Alright."`;
   waitForClick; clearText; marker; appendText; 
   `On I went like that...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, I've got you!"`;
   waitForClick; clearText; marker; appendText; 
   `I successfully trapped the hamster in the 
plastic bag.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm on my way back. Wait for me in the pipe 
room."`;
   waitForClick; clearText; marker; sound(`T4C129`); appendText; 
   Tsugumi`"All right."`;
   waitForClick; clearText; 
});
eff_41 = 21;
eff_42 = 9;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I went out into the light of the corridor, and 
checked the hamster.`;
   waitForClick; clearText; marker; appendText; 
   `Okay. He was quiet, but seemed healthy.`;
   waitForClick; clearText; marker; appendText; 
   `I blew more air into the bag, and tied the 
mouth of it shut tight.`;
   waitForClick; clearText; marker; appendText; 
   `Tired as I was, could I get back the way I 
had come?`;
   waitForClick; clearText; marker; appendText; 
   `I hesitated, but unless I went back it was all 
pointless.`;
   waitForClick; clearText; marker; appendText; 
   `If I followed the rope, I should be able to 
get back faster than I had come.`;
   waitForClick; clearText; marker; appendText; 
   `I tied the bag to my waist, took a deep 
breath, and jumped into the water.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
stopBGM();
delay({ interval: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Faagh?!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG20B1`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I climbed up the pipe ladder and stuck my 
head out of the hatch.`;
   waitForClick; clearText; marker; appendText; 
   `I had made it back safely to the area I had 
started from.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Honey, I'm hooome!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi was waiting beside the hatch.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Look what the cat dragged in... me. Well, 
here I am. I'm back."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C130`); appendText; 
   Tsugumi`"W-welcome back.".`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `I closed the hatch and stood up.`;
   waitForClick; clearText; marker; appendText; 
   `I opened the plastic bag at my waist, and 
took out the hamster.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C131`); appendText; 
   Tsugumi`Ah - `;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi grabbed the hamster.`;
   waitForClick; clearText; marker; appendText; 
   `Lovingly, she stroked his damp fur.`;
   waitForClick; clearText; marker; sound(`T4C132`); appendText; 
   Tsugumi`"Thank you..."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi whispered her gratitude without 
looking at me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's his real name?"`;
   waitForClick; clearText; marker; appendText; 
   `I looked at the hamster.`;
   waitForClick; clearText; marker; sound(`T4C133`); appendText; 
   Tsugumi`"...now don't laugh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay. I won't."`;
   waitForClick; clearText; marker; sound(`T4C134`); appendText; 
   Tsugumi`"You promise?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`I promise.`;
   waitForClick; clearText; marker; sound(`T4C135`); appendText; 
   Tsugumi`"His name's Chami."`;
   waitForClick; clearText; marker; sound(`T4C136`); appendText; 
   Tsugumi`"Chami. Because he's charming."`;
   waitForClick; clearText; marker; appendText; 
   `............`;
   waitForClick; clearText; marker; appendText; 
   `Chami.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's cute. What a good name!"`;
   waitForClick; clearText; marker; appendText; 
   `How....cute.`;
   waitForClick; clearText; marker; appendText; 
   `That was what I thought.`;
   waitForClick; clearText; marker; appendText; 
   `I did my best to stifle my laughter.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C137`); appendText; 
   Tsugumi`"Hey! You promised not to laugh!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not laughing!"`;
   waitForClick; clearText; marker; appendText; 
   `I tried to keep a straight face...`;
   waitForClick; clearText; marker; appendText; 
   `But the corners of my mouth started to twitch.`;
   waitForClick; clearText; marker; appendText; 
   `Chami. `;
   waitForClick; clearText; marker; appendText; 
   `Charming Chami. Well....`;
   waitForClick; clearText; marker; appendText; 
   `'Chami-poo, Chami-poo it's din-din time.'`;
   waitForClick; clearText; marker; appendText; 
   `I could just imagine Tsugumi baby-talking to 
it.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Chami-poo, Chami-poo."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mffff, Ha ha ha...."`;
   waitForClick; clearText; marker; sound(`T4C138`); appendText; 
   Tsugumi`"Aaaargh!"`;
   waitForClick; clearText; marker; sound(`T4C139`); appendText; 
   Tsugumi`"That's why I didn't want to tell you!"`;
   waitForClick; clearText; marker; appendText; 
   `Sullen, Tsugumi was red-faced...`;
   waitForClick; clearText; marker; appendText; 
   `...but she held out the bath towel she had 
behind her back.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, thanks."`;
   waitForClick; clearText; marker; appendText; 
   `I took the towel and wiped myself down.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Phew..."`;
   waitForClick; clearText; marker; appendText; 
   `I breathed deeply, feeling reborn, as I 
glanced at Tsugumi's face.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `She was playing with the hamster in her hand, 
and her cheeks were bright.`;
   waitForClick; clearText; marker; appendText; 
   `She looked so happy...`;
   waitForClick; clearText; marker; appendText; 
   `It was the first time I'd ever seen her smile.`;
   waitForClick; clearText; 
});
hideTextbox();
goto(lbl_00001345);
let lbl_00001018;
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C140`); appendText; 
   Tsugumi`"Don't get me wrong."`;
   waitForClick; clearText; marker; sound(`T4C141`); appendText; 
   Tsugumi`"I didn't purposely try to get you to do 
something that I knew you couldn't do."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C142`); appendText; 
   Tsugumi`"I'm not like you. I'm not stupid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C143`); appendText; 
   Tsugumi`"You and I are different up here."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi tapped her head.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C144`); appendText; 
   Tsugumi`"I'm going."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's your problem? I can't believe you're 
being like that at a time like this...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's not a nice thing to say!"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll be fine. You go back to the Security 
Office."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When I get through to the other side, you 
can tell me where the hamster is."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We won't be able to locate him without 
LeMMIH, will we?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3A107`); appendText; 
   Tsugumi`"Hmmm, yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmm, yeah, is it? Why don't you use that 
superior intellect of yours to think of 
something?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Unless someone who can operate LeMMIH stays 
behind, it won't work."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C146`); appendText; 
   Tsugumi`"Ha ha ha..."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi laughed.`;
   waitForClick; clearText; marker; sound(`T4C147`); appendText; 
   Tsugumi`"Alright."`;
   waitForClick; clearText; marker; sound(`T4C148`); appendText; 
   Tsugumi`"I've learned from you - I'll show you what I 
can do with a little courage and guts."`;
   waitForClick; clearText; marker; appendText; 
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
   `Ooomph.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ugh...uh."`;
   waitForClick; clearText; marker; appendText; 
   `She punched me.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi punched me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"——! ?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C149`); appendText; 
   Tsugumi`"See you later..."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi took the rope hook and went down the 
ladder.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Before long she disappeared from view.`;
   waitForClick; clearText; marker; appendText; 
   `The rope stretched into the water.`;
   waitForClick; clearText; marker; appendText; 
   `Holding my stomach, I sunk to my knees.`;
   waitForClick; clearText; marker; appendText; 
   `She'd got me with a solid body blow and I 
couldn't stand up.`;
   waitForClick; clearText; marker; appendText; 
   `She really hit hard.`;
   waitForClick; clearText; marker; appendText; 
   `(I can't believe her...)`;
   waitForClick; clearText; marker; appendText; 
   `I seemed to remember getting punched like 
that...by someone wearing a mascot costume....`;
   waitForClick; clearText; marker; appendText; 
   `(Was that Tsugumi!?...ughg...)`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `I was suddenly dizzy.`;
   waitForClick; clearText; marker; appendText; 
   `My stomach was in agony.`;
   waitForClick; clearText; marker; appendText; 
   `Not where I'd been punched...`;
   waitForClick; clearText; marker; appendText; 
   `I was suffering from a totally different pain.`;
   waitForClick; clearText; marker; appendText; 
   `I reached for the pipe and tried to stand up.`;
   waitForClick; clearText; marker; appendText; 
   `But my hand grasped at thin air.`;
   waitForClick; clearText; marker; appendText; 
   `My vision clouded.`;
   waitForClick; clearText; marker; appendText; 
   `I coughed and spat.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`".....gagh...."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_28`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `What erupted from my mouth was 
the semi-liquid remains of my hotdog.`;
   waitForClick; clearText; marker; appendText; 
   `(Wha-what the......?)`;
   waitForClick; clearText; marker; appendText; 
   `I felt a chill as I lost consciousness...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 0 });
dimOff_ac = 1;
closeDimOverlay();
delay({ interval: 120 });
bgload({ name: `BG20B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `When I regained consciousness, I was lying 
half in a pool of water.`;
   waitForClick; clearText; marker; appendText; 
   `(Where am...I?)`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `(Oh, it's the pipe room...)`;
   waitForClick; clearText; marker; appendText; 
   `(What happened to Tsugumi...?)`;
   waitForClick; clearText; marker; appendText; 
   `In front of me, I could see the rope 
disappearing into the hatch.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's right! She's looking for the hamster!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I have to get to the Security Office! 
Tsugumi will need navigation!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU09AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C150`); appendText; 
   Tsugumi`"...You're too late."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sorry, I'll be right there."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C151`); appendText; 
   Tsugumi`"I've already been there and back."`;
   waitForClick; clearText; marker; appendText; 
   `With startled look on her face, Tsugumi 
peered out of the hatch.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `She pulled up the rope as she stood up and 
closed the hatch.`;
   waitForClick; clearText; marker; appendText; 
   `I slowly got off the floor.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ho-how'd it go, Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C152`); appendText; 
   Tsugumi`"I found him. He was in the corner of the 
room. But I couldn't catch him."`;
   waitForClick; clearText; marker; sound(`T4C153`); appendText; 
   Tsugumi`"I think he ran this way."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   `I hoped we could catch him.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just let me check, then..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What does this hamster look like?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C154`); appendText; 
   Tsugumi`"He's just a normal Djungarian."`;
   waitForClick; clearText; marker; sound(`T4C155`); appendText; 
   Tsugumi`Grey color, black stripe on his back, small 
enough to sit in the palm of your hand...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmmm...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Like that?"`;
   waitForClick; clearText; marker; appendText; 
   `I pointed at a small rodent running along a 
nearby pipe.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C156`); appendText; 
   Tsugumi`"...Huh?"`;
   waitForClick; clearText; marker; sound(`T4C157`); appendText; 
   Tsugumi`"Takeshi ..."- `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C158`); appendText; 
   Tsugumi`"...Grab him!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   `Seeing the rodent, Tsugumi's eyes got huge.`;
   waitForClick; clearText; marker; appendText; 
   `I had no idea what to say.`;
   waitForClick; clearText; marker; appendText; 
   `The small furry animal noticed Tsugumi and me 
and froze, his eyes fixed on us.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, then."`;
   waitForClick; clearText; marker; appendText; 
   `I reached out my hand.`;
   waitForClick; clearText; marker; appendText; 
   `Gotcha.`;
   waitForClick; clearText; marker; appendText; 
   `(What? Just like that?)`;
   waitForClick; clearText; marker; appendText; 
   `I didn't think I'd catch him so quickly.`;
   waitForClick; clearText; marker; appendText; 
   `The stunned hamster lay quietly in my hand.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Woah! Nice catch!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C159`); appendText; 
   Tsugumi`"Aaagh!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C160`); appendText; 
   Tsugumi`"No! Be careful! Don't squeeze him so hard!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Tsugumi snatched the "rat" from my hand.`;
   waitForClick; clearText; marker; appendText; 
   `She stroked it gently as if she were 
consoling it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C161`); appendText; 
   Tsugumi`"Did it hurt? I'm sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh? What?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is that really a rat? I mean, what are you 
doing with that thing in the first place!?"`;
   waitForClick; clearText; marker; appendText; 
   `I was taken aback.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C162`); appendText; 
   Tsugumi`"No!"`;
   waitForClick; clearText; marker; sound(`T4C163`); appendText; 
   Tsugumi`"I keep telling you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C164`); appendText; 
   Tsugumi`"This is not a rat, it's Chami!"`;
   waitForClick; clearText; marker; sound(`T4C165`); appendText; 
   Tsugumi`"He's a Djungarian hamster."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi spat the words out. She pouted as she 
glared at me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, he's not a rat, he's Chami."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Chami?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That hamster's name is Chami?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C166`); appendText; 
   Tsugumi`"I didn't say that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C167`); appendText; 
   Tsugumi`"I never said that..."`;
   waitForClick; clearText; marker; appendText; 
   `Embarrassed, she bowed her head.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I, uh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, that is what you were looking for?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `She nodded silently.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, well, great..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That was lucky, wasn't it!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, we've caught him."`;
   waitForClick; clearText; marker; sound(`T4C168`); appendText; 
   Tsugumi`"Yeah.....ah....um....."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C169`); appendText; 
   Tsugumi`"Takeshi, I ...thank you...I guess."`;
   waitForClick; clearText; marker; appendText; 
   `Her voice was quiet and expressionless.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Ouch!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `She knocked me down and bolted from the room.`;
   waitForClick; clearText; marker; appendText; 
   `She was soaking wet, and still clutching Chami.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   `(What is with that chick...?)`;
   waitForClick; clearText; marker; appendText; 
   `I had wanted to tell her how glad I was that 
she was okay.`;
   waitForClick; clearText; marker; appendText; 
   `It seemed I had missed my chance.`;
   waitForClick; clearText; marker; appendText; 
   `Stunned, I listened to her footsteps grow 
fainter.`;
   waitForClick; clearText; 
});
let lbl_00001345;
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
delay({ interval: 120 });
if (l_sora_flag != 0) goto(lbl_00001385);
delay({ interval: 30 });
l_choice = 0;
jump(`T_5A`);
let lbl_00001385;
bgload({ name: `BG06A1`, transition: 20 });
playBGM({ num: 2, volume: 100 });
setSceneTitle({ index: 28 });
clock(`23:6`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"...So, that's what happened."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C170`); appendText; 
   Sora`"Oh, I see...."`;
   waitForClick; clearText; marker; appendText; 
   `Several hours had elapsed since the hunt for 
Chami.`;
   waitForClick; clearText; marker; appendText; 
   `I had asked to Sora to come with me to the 
souvenir kiosk on the second floor.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C171`); appendText; 
   Sora`"Isn't it great the Tsugumi found her friend?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ahh, yeah."`;
   waitForClick; clearText; marker; appendText; 
   `Her friend, huh.....well, as far as Tsugumi 
was concerned, it was her friend.`;
   waitForClick; clearText; marker; sound(`T4C172`); appendText; 
   Sora`"Anyway, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T4C173`); appendText; 
   Sora`"Weren't we going to search this kiosk for 
food?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, was that right?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `It was quiet all around.`;
   waitForClick; clearText; marker; appendText; 
   `There was no one around.`;
   waitForClick; clearText; marker; appendText; 
   `You, the Kid and Coco were in the Conference 
Room preparing for bed.`;
   waitForClick; clearText; marker; appendText; 
   `Tsugumi was probably asleep in the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We looked pretty thoroughly last time and 
didn't find anything..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C174`); appendText; 
   Sora`"But, there are nuts and cookies here. I saw 
them right away. Look."`;
   waitForClick; clearText; marker; appendText; 
   `Sora pointed to the packets in the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, really?"`;
   waitForClick; clearText; marker; appendText; 
   `There was a mountain of packets just like the 
one I had found under the bed in the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I guess we were all half-asleep when we 
looked last time."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, we don't need to worry about food for 
the time being."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C175`); appendText; 
   Sora`"We can keep eating the fried chicken 
sandwiches, can't we?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yes, there are plenty.  I don't know what the 
expiration date on them is, but there should 
be enough for two or three more days."`;
   waitForClick; clearText; marker; sound(`T4C176`); appendText; 
   Sora`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah...".`;
   waitForClick; clearText; marker; appendText; 
   `We kept talking for a while.`;
   waitForClick; clearText; marker; appendText; 
   `It was an ordinary conversation with no fixed 
theme and nothing to do with the topic of 
escape.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wonder what the weather is like up there..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C177`); appendText; 
   Sora`"I have no way of knowing what the 
situation's like up on the surface..."`;
   waitForClick; clearText; marker; sound(`T4C178`); appendText; 
   Sora`"...But judging from what it's like 
underwater, it's quite calm. It's unlikely to 
get worse any time soon."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's reassuring..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C179`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Half the meaning was probably lost.`;
   waitForClick; clearText; marker; appendText; 
   `I thought that perhaps this conversation 
could be an opportunity.`;
   waitForClick; clearText; marker; appendText; 
   `I searched for the right words.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Listen, Sora."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I want to talk about something serious."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C180`); appendText; 
   Sora`"You do too, Takeshi?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C181`); appendText; 
   Sora`"Actually...so do I."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"R-really?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, after you.... Ladies first."`;
   waitForClick; clearText; marker; sound(`T4C182`); appendText; 
   Sora`"No, Takeshi, you go first."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"To tell you the truth, I'm a little 
embarrassed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C183`); appendText; 
   Sora`"So am I..."`;
   waitForClick; 
});
choice(
   `Okay, I'll go first`,
   `You go first`,
   `Let's both say it at the same time`,
);
switch (l_choice) {
   case 0: goto(lbl_000014df);
   case 1: goto(lbl_000014ff);
   case 2: goto(lbl_0000151f);
}
let lbl_000014df;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Okay, I'll go first..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's about the lecture today."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The 'Love Psychology' lecture."`;
   waitForClick; clearText; marker; appendText; 
   `I scratched my head as I spoke.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Did you forget it already...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C184`); appendText; 
   Sora`"No..."`;
   waitForClick; clearText; marker; sound(`T4C185`); appendText; 
   Sora`"I was thinking about it, too."`;
   waitForClick; clearText; marker; appendText; 
   `Sora's cheeks were bright red.`;
   waitForClick; clearText; 
});
goto(lbl_00001546);
let lbl_000014ff;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"What did you want to say?"`;
   waitForClick; clearText; marker; sound(`T4C186`); appendText; 
   Sora`"Me first...?"`;
   waitForClick; clearText; marker; sound(`T4C187`); appendText; 
   Sora`"Well, um...."`;
   waitForClick; clearText; marker; sound(`T4C188`); appendText; 
   Sora`"It's about today's lecture..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C189`); appendText; 
   Sora`"Love Psychology..."`;
   waitForClick; clearText; marker; appendText; 
   `Sora's cheeks were bright red.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's what I wanted to talk about, too."`;
   waitForClick; clearText; marker; appendText; 
   `I was probably a little red, too.`;
   waitForClick; clearText; 
});
goto(lbl_00001546);
let lbl_0000151f;
l_sora_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Then let's both speak at the same time."`;
   waitForClick; clearText; marker; sound(`T4C190`); appendText; 
   Sora`"Alright."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, together then.  Three, two, one, go!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's about the lecture today."`;
   waitForClick; clearText; marker; sound(`T4C191`); appendText; 
   Sora`"...It's about the lecture today."`;
   waitForClick; clearText; marker; appendText; 
   `Ah, I had spoken a moment sooner.`;
   waitForClick; clearText; marker; appendText; 
   `...Well, okay.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C192`); appendText; 
   Sora`"Love Psychology...".`;
   waitForClick; clearText; marker; appendText; 
   `Sora's cheeks were bright red.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah, yes, that..."`;
   waitForClick; clearText; marker; appendText; 
   `I was probably a little red, too.`;
   waitForClick; clearText; 
});
let lbl_00001546;
showTextbox();
text(() => {
   marker; sound(`T4C193`); appendText; 
   Sora`"Tee, hee..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `We were reflected on the glass of the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   `Sora twinkled as she spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C194`); appendText; 
   Sora`"I...wanted to speak about the lecture."`;
   waitForClick; clearText; marker; sound(`T4C195`); appendText; 
   Sora`"Coco was afraid of me, and You seemed mad 
about something..."`;
   waitForClick; clearText; marker; sound(`T4C196`); appendText; 
   Sora`"But what you said wasn't wrong...at least I 
don't think so."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm, neither do I..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I think my examples may have been a little 
extreme, but I think my basic message was 
right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C197`); appendText; 
   Sora`"Yeah?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah."`;
   waitForClick; clearText; marker; sound(`T4C198`); appendText; 
   Sora`"Professor..."`;
   waitForClick; clearText; marker; sound(`T4C199`); appendText; 
   Sora`"I would like you to finish the lecture..."`;
   waitForClick; clearText; marker; sound(`T4C200`); appendText; 
   Sora`"Teach me everything."`;
   waitForClick; clearText; marker; sound(`T4C201`); appendText; 
   Sora`"Teach me what I don't know."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All right then, Miss Anagesaki."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `The lecture resumed.`;
   waitForClick; clearText; marker; appendText; 
   `After hour study.`;
   waitForClick; clearText; marker; appendText; 
   `She was the only one participating in my 
lecture. No one else was listening.`;
   waitForClick; clearText; marker; appendText; 
   `It was a lecture for one-on-one.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All right then, Sora, we're going to get 
back to the basics."`;
   waitForClick; clearText; marker; appendText; 
   `I played it up a little.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C202`); appendText; 
   Sora`"Professor! I have a question!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mm, what is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C203`); appendText; 
   Sora`"You weren't acting like this earlier today!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ahem!"`;
   waitForClick; clearText; marker; appendText; 
   `I pretended to clear my throat.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The professor is practicing speaking like a 
professor!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let's not worry about how to talk!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The way you're talking is fine.  There are 
gentlemen who prefer gentle voices."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I went into the kiosk alone.`;
   waitForClick; clearText; marker; appendText; 
   `Inside the kiosk, which had not been used 
since the second flood, was strewn with 
colorful stationery and merchandise.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C204`); appendText; 
   Sora`"Professor, what should I do?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just stand there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C205`); appendText; 
   Sora`"All right."`;
   waitForClick; clearText; marker; appendText; 
   `Sora was waiting just outside the kiosk.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE08_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `I jumped over the counter.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   `I brushed aside the stuff that was lying 
around, and went over to the window.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE08_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Alright then, Sora."`;
   waitForClick; clearText; marker; sound(`T4C206`); appendText; 
   Sora`"Yes? What is it professor?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Come a little closer."`;
   waitForClick; clearText; marker; appendText; 
   `From inside the kiosk, I beckoned to Sora.`;
   waitForClick; clearText; marker; appendText; 
   `Sora approached the glass.`;
   waitForClick; clearText; marker; appendText; 
   `She stopped about a yard away.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C207`); appendText; 
   Sora`"Takeshi, if I go any closer the RSD image 
will...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't be so unromantic, you'll spoil the 
mood."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C208`); appendText; 
   Sora`"But I'll probably start to look flat."`;
   waitForClick; clearText; marker; appendText; 
   `Embarrassed, she bowed her head.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's alright, it doesn't matter."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Repeat after me: 'It's alright!'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T4C209`); appendText; 
   Sora`"I-it's all right..."`;
   waitForClick; clearText; marker; appendText; 
   `Blushing furiously, Sora timidly approached 
the window.`;
   waitForClick; clearText; marker; appendText; 
   `Slowly, one step at a time.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's it."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Before long...`;
   waitForClick; clearText; marker; appendText; 
   `Sora and I faced each other through the thin 
sheet of glass.`;
   waitForClick; clearText; marker; sound(`T4C210`); appendText; 
   Sora`"Here I am."`;
   waitForClick; clearText; marker; sound(`T4C211`); appendText; 
   Sora`"Um, do I look strange, professor?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't worry."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I told you it was all right, didn't I?"`;
   waitForClick; clearText; marker; appendText; 
   `Her image was warping a little, but it was 
nothing serious.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All right then, practice."`;
   waitForClick; clearText; marker; sound(`T4C212`); appendText; 
   Sora`"Uh. Um, I'm a little nervous..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well don't let me make you nervous."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Relax, relax. Okay, repeat."`;
   waitForClick; clearText; marker; sound(`T4C213`); appendText; 
   Sora`"Relax, relax..."`;
   waitForClick; clearText; marker; appendText; 
   `In my hand I held a marker pen that I had 
picked up off the floor.`;
   waitForClick; clearText; marker; appendText; 
   `I was a red, water-based pen.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All right then. You know, I thought you were 
a traditional Japanese girl."`;
   waitForClick; clearText; marker; sound(`T4C214`); appendText; 
   Sora`"R-really?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mm. Pure and sincere. Lovely."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But I felt that as a 24-year-old you were 
lacking a little something."`;
   waitForClick; clearText; marker; sound(`T4C215`); appendText; 
   Sora`"What...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Color...The look of a grown woman."`;
   waitForClick; clearText; marker; appendText; 
   `Sora was standing on the other side of the 
spotless glass.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I took the cap off the pen, and traced the 
line of Sora's lips.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The fastest way to give you color ? "`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"-is with make-up!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"With conservative make-up like yours, you 
won't even attract doctors or lawyers!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your make-up has to be more...feminine."`;
   waitForClick; clearText; marker; sound(`T4C216`); appendText; 
   Sora`"Professor..."`;
   waitForClick; clearText; marker; sound(`T4C217`); appendText; 
   Sora`"I don't understand what you mean."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A picture is worth a thousand words."`;
   waitForClick; clearText; marker; appendText; 
   `I carefully drew her lipstick.`;
   waitForClick; clearText; marker; sound(`T4C218`); appendText; 
   Sora`"That tickles."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stand still."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is difficult."`;
   waitForClick; clearText; marker; sound(`T4C219`); appendText; 
   Sora`"I'm not moving!"`;
   waitForClick; clearText; marker; appendText; 
   `Maybe my hand wasn't used to the angle, 
anyway, it was shaking a little.`;
   waitForClick; clearText; marker; appendText; 
   `I drew her eyeline, gave her mascara and 
rouge and colored in her eyebrows.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Alright, you're done!"`;
   waitForClick; clearText; marker; appendText; 
   `Finished!`;
   waitForClick; clearText; marker; appendText; 
   `What a work of art.`;
   waitForClick; clearText; marker; appendText; 
   `If I would give it a title...`;
   waitForClick; clearText; marker; appendText; 
   `I'd call it...`;
   waitForClick; clearText; marker; appendText; 
   `Yes, I'd call it....`;
   waitForClick; clearText; marker; appendText; 
   `'Butterfly of the Night.'`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C220`); appendText; 
   Sora`"Uh, Professor..."`;
   waitForClick; clearText; marker; sound(`T4C221`); appendText; 
   Sora`"Is...this feminine make-up?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Um, well...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Not quite..."`;
   waitForClick; clearText; marker; sound(`T4C222`); appendText; 
   Sora`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Um...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's actually..."`;
   waitForClick; clearText; marker; appendText; 
   `Over the top.`;
   waitForClick; clearText; marker; appendText; 
   `REALLY over the top.`;
   waitForClick; clearText; marker; appendText; 
   `It was a complete failure.`;
   waitForClick; clearText; marker; appendText; 
   `It looked like a child's scribbling.`;
   waitForClick; clearText; marker; sound(`T4C223`); appendText; 
   Sora`"I've never looked like this! This is a 
change!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've never seen anything, uh, you like 
this..."`;
   waitForClick; clearText; marker; sound(`T4C224`); appendText; 
   Sora`"I think I like it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wouldn't be so sure about that."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You really think so...?"`;
   waitForClick; clearText; marker; sound(`T4C225`); appendText; 
   Sora`"What? You don't...like it?"`;
   waitForClick; clearText; marker; sound(`T4C226`); appendText; 
   Sora`"...I didn't think you would."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Miss Anagesaki?..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Aaaargh!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's all wrong!!"`;
   waitForClick; clearText; marker; appendText; 
   `I tried to rub the lipstick off with my hand.`;
   waitForClick; clearText; marker; appendText; 
   `But it wouldn't come off.`;
   waitForClick; clearText; marker; appendText; 
   `The more I tried to wipe it off, the more the 
lipstick spread on her face.`;
   waitForClick; clearText; marker; sound(`T4C227`); appendText; 
   Sora`"Professor!"`;
   waitForClick; clearText; marker; sound(`T4C228`); appendText; 
   Sora`"Is this feminine make-up?"`;
   waitForClick; clearText; marker; appendText; 
   `All around Sora's mouth was stained red.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Miss Anagesaki..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Not exactly."`;
   waitForClick; clearText; marker; appendText; 
   `Without meaning to, I laughed.`;
   waitForClick; clearText; marker; sound(`T4C229`); appendText; 
   Sora`"P-Professor?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mm...mhhh...haaa....haaaa..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm sorry...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But it's certainly a change. Haaa, haaa!"`;
   waitForClick; clearText; marker; appendText; 
   `I was apologizing, but I couldn't stop 
laughing.`;
   waitForClick; clearText; marker; sound(`T4C230`); appendText; 
   Sora`"Ooohh! Professor!"`;
   waitForClick; clearText; marker; sound(`T4C231`); appendText; 
   Sora`"Stop playing with my face!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Then Sora started to laugh as well.`;
   waitForClick; clearText; marker; sound(`T4C232`); appendText; 
   Sora`"Tee hee hee..."`;
   waitForClick; clearText; marker; sound(`T4C233`); appendText; 
   Sora`"Ha ha ha...!"`;
   waitForClick; clearText; marker; appendText; 
   `We both collapsed laughing.`;
   waitForClick; clearText; marker; appendText; 
   `The sound of our laughter filled the silence 
of the nighttime kiosk.`;
   waitForClick; clearText; marker; appendText; 
   `It had been ages since I had laughed like that.`;
   waitForClick; clearText; marker; appendText; 
   `And after we had laughed for a while...`;
   waitForClick; clearText; marker; appendText; 
   `Sora moved over to the next window.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO02A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T4C234`); appendText; 
   Sora`"Please do it properly this time."`;
   waitForClick; clearText; marker; appendText; 
   `Sora's face became serious.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright. Okay, then...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright. This time I promise you perfect 
feminine beauty..."`;
   waitForClick; clearText; marker; appendText; 
   `I picked up the pen again and faced the glass.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........"`;
   waitForClick; clearText; marker; appendText; 
   `I faced it, but....`;
   waitForClick; clearText; marker; sound(`T4C235`); appendText; 
   Sora`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Nothing..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   `I didn't draw anything with the pen.`;
   waitForClick; clearText; marker; appendText; 
   `I stared deep into Sora's eyes through the 
glass.`;
   waitForClick; clearText; marker; sound(`T4C236`); appendText; 
   Sora`"Ta...ke....shi?"`;
   waitForClick; clearText; marker; appendText; 
   `Her glossy lips were forming my name.`;
   waitForClick; clearText; marker; sound(`T4C237`); appendText; 
   Sora`"Uummmm....."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Let's not do this."`;
   waitForClick; clearText; marker; sound(`T4C238`); appendText; 
   Sora`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't need makeup..."`;
   waitForClick; clearText; marker; appendText; 
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
   Sora`"Professor..."`;
   waitForClick; clearText; marker; sound(`T4C240`); appendText; 
   Sora`"Don't tease me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not teasing you, I mean it."`;
   waitForClick; clearText; marker; sound(`T4C241`); appendText; 
   Sora`"Don't say that, professor."`;
   waitForClick; clearText; marker; appendText; 
   `I could see Sora blushing.`;
   waitForClick; clearText; marker; sound(`T4C242`); appendText; 
   Sora`"If you say that, professor, I'll start to 
take you seriously."`;
   waitForClick; clearText; marker; appendText; 
   `She bowed her head, her eyes searching around.`;
   waitForClick; clearText; marker; sound(`T4C243`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No more playing teacher."`;
   waitForClick; clearText; marker; sound(`T4C244`); appendText; 
   Sora`"Professor?"`;
   waitForClick; clearText; marker; sound(`T4C245`); appendText; 
   Sora`"Uh....Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   `Sora slowly raised her head and looked me in 
the eyes.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your hands..."`;
   waitForClick; clearText; marker; sound(`T4C246`); appendText; 
   Sora`"Hmmm?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Put your hands here."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO03A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `I put my hands against the glass.`;
   waitForClick; clearText; marker; appendText; 
   `Sora placed her hands where mine were.`;
   waitForClick; clearText; marker; appendText; 
   `Right against left, left against right.`;
   waitForClick; clearText; marker; appendText; 
   `Separated only by a pane of glass, our hands 
were touching.`;
   waitForClick; clearText; marker; appendText; 
   `It felt strange.`;
   waitForClick; clearText; marker; appendText; 
   `What should be a barrier between us was 
actually the only thing joining us.`;
   waitForClick; clearText; marker; appendText; 
   `Without something between us, we couldn't 
touch.`;
   waitForClick; clearText; marker; appendText; 
   `But on either side of this glass, we were 
able to confirm the existence of the other.`;
   waitForClick; clearText; marker; appendText; 
   `It felt as if my hands were touching Sora's 
body.`;
   waitForClick; clearText; marker; appendText; 
   `Sora's face was there in front of me, mere 
inches from me.`;
   waitForClick; clearText; marker; appendText; 
   `We were so close I could hear her breathing.`;
   waitForClick; clearText; marker; appendText; 
   `I thought that I could probably even take her 
in my arms.`;
   waitForClick; clearText; marker; sound(`T4C247`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T4C248`); appendText; 
   Sora`"May I ask you something?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Go ahead..."`;
   waitForClick; clearText; marker; sound(`T4C249`); appendText; 
   Sora`"I feel warm..."`;
   waitForClick; clearText; marker; sound(`T4C250`); appendText; 
   Sora`"I feel really warm..."`;
   waitForClick; clearText; marker; sound(`T4C251`); appendText; 
   Sora`"From my fingers...and in my heart..."`;
   waitForClick; clearText; marker; sound(`T4C252`); appendText; 
   Sora`"What's happening...?"`;
   waitForClick; clearText; marker; sound(`T4C253`); appendText; 
   Sora`"Why do you think....?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   `I couldn't answer.`;
   waitForClick; clearText; marker; appendText; 
   `Sora's eyes glistened with tears as she 
stared at me.`;
   waitForClick; clearText; marker; appendText; 
   `The glass in the window was shaking.`;
   waitForClick; clearText; marker; appendText; 
   `Sora's warmth spread to my hand.`;
   waitForClick; clearText; marker; appendText; 
   `But it was just an illusion.`;
   waitForClick; clearText; marker; appendText; 
   `If I closed my eyes, Sora disappeared.`;
   waitForClick; clearText; marker; appendText; 
   `But in my hand I could feel the warmth like 
sunshine.`;
   waitForClick; clearText; marker; appendText; 
   `Even if the warmth was just an illusion...`;
   waitForClick; clearText; marker; appendText; 
   `Sora existed there and then. Of that I was 
certain.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`T_5A`);
