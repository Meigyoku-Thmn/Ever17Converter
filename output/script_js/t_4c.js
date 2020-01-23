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
   `Several hours had passed since Sora's outburst`;
   `You, Coco and the Kid had finished their meal 
and moved to the rest area, where they were 
relaxing and letting their food digest.`;
   Takeshi`"Okay, then...."`;
   `I had almost finished tidying up the kiosk.`;
   Takeshi`"Hee hee hee...!"`;
   `I pulled out the object I had secretly hidden 
behind the warmer.`;
   `Actually, there had been one sausage left at 
the back of the refrigerator.`;
   `There were no hot dog buns, 
so I stuffed the sausage into a bread roll.`;
   `I slapped on ketchup and mustard and took a 
big bite.`;
   Takeshi`"Mmm...mm...this is so good...!"`;
   `My mouth filled with the juicy flavor as I 
bit down.`;
   Takeshi`"Mmmm....meat.....mmm...yum...."`;
   `Fried chicken sandwiches were good, but not 
every meal every single day.`;
   `I hid in the back of the kiosk and devoured 
the sausage.`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Sora(T4C000)`"Oh, Takeshi, there you are."`;
   Takeshi`"Mmmf?!"`;
   `Surprised by Sora's voice, I choked on a 
piece of sausage.`;
   `Sora appeared in front of me.`;

});
hideTextbox();
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"......!? ......!!"`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C001)`"Takeshi? Are you all right?"`;
   Takeshi`"-------------------agh!!"`;
   Takeshi`"A, ahgh... *cough* *cough*..."`;
   `Blinking and struggling, I finally managed to 
swallow the chunk of meat.`;
   `I swallowed the rest of the sausage in one 
bite to remove the evidence.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I struggled to control my breathing.`;
   Takeshi`"Sora..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C002)`"What is it?"`;
   Takeshi`"Not a word about what you just saw, okay?"`;
   Sora(T4C003)`"Y-yes...alright. I understand."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C004)`"But what were you doing? Were you eating 
something?"`;
   Takeshi`"Oh, well if you don't know, it doesn't 
matter."`;
   Sora(T4C005)`"???"`;
   `As usual, Sora feigned ignorance.`;
   `It looked like she didn't remember my love 
psychology lecture.`;
   `It was just as well.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C006)`"By the way...I just had a talk with Tsugumi."`;
   Takeshi`"Oh, really?"`;
   `Surprised, I blinked.`;
   Takeshi`"You were able to talk with Tsugumi?"`;
   Sora(T4C007)`"Yes. She returned to the infirmary, so I 
went to see her her."`;
   Sora(T4C008)`"Tsugumi was actually the one to speak first."`;
   Takeshi`"Oh?"`;
   Sora(T4C009)`"Yes. She said she was sorry for going too 
far and smashing the medical equipment."`;
   Takeshi`"A-apologized? Tsugumi!?"`;
   Sora(T4C010)`"Yes."`;
   `I was surprised.`;
   `No, I was really surprised.`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C011)`"And then she asked me a really strange 
question."`;
   Takeshi`"A strange question?"`;
   Takeshi`"What'd she ask?"`;

});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C012)`"Well...."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C013)`"She said, 'What do you know about my past?'"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C014)`"I didn't know what to say..."`;
   Takeshi`"And?"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C015)`"I told her I didn't know anything."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C016)`"...because I didn't know anything."`;
   Takeshi`"Oh...oh...."`;
   `It WAS a strange question.`;
   Takeshi`"Where's Tsugumi now?"`;
   `I said this trying to restrain my sense of 
urgency.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C017)`"She nodded at my answer and went to bed."`;
   Takeshi`Bed?`;
   Takeshi`"She went back to the infirmary and went to 
bed?"`;
   Sora(T4C018)`"Well, yes."`;
   Takeshi`"Are you sure? Is that where she is now?"`;
   Sora(T4C019)`"Yes, probably."`;
   Takeshi`"Probably, huh..."`;
   Takeshi`"Can you check to make sure Tsugumi isn't 
wandering around instead of taking it easy?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I nodded, but Sora looked troubled.`;
   Takeshi`"What's wrong? All it takes is a quick scan."`;
   Sora(T4C020)`"Yes, well..."`;
   Sora(T4C021)`"Takeshi, I..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C022)`"I don't like to scan with the sensors unless 
it's an emergency."`;
   Takeshi`"What?"`;
   Sora(T4C023)`"There are times when even you want to be 
alone, right Takeshi?"`;
   Sora(T4C024)`"And times when you want to talk about 
something secret, or be alone with 
somebody...?"`;
   Sora(T4C025)`"I want to protect people's privacy."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C026)`"If I scan, then I know everything."`;
   `Sora's smile was slightly uncomfortable.`;

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
   `Sora went to check on LeMMIH, and I went to 
the second floor infirmary.`;

});
goto(lbl_000004f7);
let lbl_00000273;
bgload({ name: `BG07B1`, transition: 20 });
playBGM({ num: 1, volume: 100 });
setSceneTitle({ index: 26 });
clock(`18:24`);
showTextbox();
text(() => {
   `Several hours went by.`;
   `In the end, I hung around in LeMU by myself 
and just killed some time.`;
   `I didn't see Tsugumi during that time.`;
   `I decided to have an early dinner...`;
   `You, Coco and the Kid had finished their meal 
and moved to the rest area, where they were 
relaxing and letting their food digest.`;
   Takeshi`"Okay, then...."`;
   `I had almost finished tidying up the kiosk.`;
   Takeshi`"Hee hee hee...!"`;
   `I pulled out the object I had secretly hidden 
behind the warmer.`;
   `Actually, there had been one sausage left at 
the back of the refrigerator.`;
   `There were no hot dog buns, 
so I stuffed the sausage into a bread roll.`;
   `I slapped on the ketchup and mustard and took 
a big bite.`;
   Takeshi`"Mmm...mm...this is so good...!"`;
   `My mouth filled with the juicy flavor as I 
bit down.`;
   Takeshi`"Mmmm....meat..... mmm... yum...."`;
   `Fried chicken sandwiches were good, but not 
every meal, every single day.`;
   `I hid in the back of the kiosk and devoured 
the sausage.`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Coco(T4C027)`"Oh, Takeshi, there you are."`;
   Takeshi`"Mmmf?!"`;
   `Surprised by Coco's voice, I choked on a 
piece of sausage.`;
   `Coco appeared in front of me.`;

});
hideTextbox();
playBGM({ num: 9, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"......!? ......!!"`;

});
fgload({ id: 1, name: `CO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C028)`"Takeshi? Are you all right?"`;
   Takeshi`"-------------------agh!!"`;
   Takeshi`"A, ahgh...*cough* *cough*..."`;
   `Blinking and struggling, I finally managed to 
swallow the chunk of meat.`;
   `I swallowed the rest of the sausage in one 
bite to remove the evidence.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I struggled to control my breathing.`;
   Takeshi`"Coco..."`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C029)`"What?"`;
   Takeshi`"Not a word about what you just saw, okay?"`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C030)`"Um, okay sure, but..."`;
   Coco(T4C031)`"Takepyon, you didn't eat your sandwich 
before."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C032)`"Oh, I see. You were saving it to eat later?"`;
   Takeshi`"Ah, yeah. That's it."`;
   Coco(T4C033)`"That was all? Oh, good."`;
   Coco(T4C034)`"I was worried about you. I thought you'd 
lost your appetite."`;
   Takeshi`"No, I'm fine. I ate."`;
   `I scratched my head.`;
   `(Sorry, Coco...I was selfishly eating a 
sausage all by myself. Please forgive me....)`;
   `Inside, I apologized silently to her.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C035)`Oh, that reminds me...`;
   Coco(T4C036)`"Takepyon. Takepyon! I talked to Sora."`;
   Coco(T4C037)`"And guess what? Sora said she spoke to 
Tsugumi."`;
   Takeshi`"Oh, really?"`;
   `Surprised, I blinked.`;
   Takeshi`"She spoke to Tsugumi?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C038)`"Yeah. When she went back to the infirmary."`;
   Takeshi`"Really..."`;
   Coco(T4C039)`"And when Tsugumi ran into Sora in the 
infirmary."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C040)`"She apologized for going all crazy and 
smashing the stuff. She even cleaned up the 
mess."`;
   Takeshi`"A-apologized? Tsugumi!?"`;
   Coco(T4C041)`"Yup. That's what I heard."`;
   `I was surprised.`;
   `No, I was really surprised.`;
   Takeshi`"What else? Did you hear anything else?"`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C042)`"Anything else? Umm.....well..."`;
   Coco(T4C043)`"Sora said Tsugumi was asking questions and 
stuff."`;
   Takeshi`"Asking questions?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C044)`"Yeah, she asked her a really silly question."`;
   Takeshi`"A strange...question?"`;
   Takeshi`"What'd she ask?"`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C045)`"Um, what was it?... Oh, yeah!"`;

});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C046)`"'What do you know about my past?'"`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C047)`"Or something like that...."`;
   Takeshi`"And?"`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C048)`"Sora said she didn't know anything."`;
   Coco(T4C049)`"I guess Tsugumi was satisfied."`;
   Takeshi`"........."`;
   Coco`"........."`;
   Takeshi`"Is that it?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C050)`"Yup, that's it."`;
   Takeshi`"Oh."`;
   Coco(T4C051)`"Come to think about it, that is kind of a 
silly question."`;
   `Yes...it was very weird.`;
   Takeshi`"Coco, where's Tsugumi now?"`;
   `I said this trying to restrain my sense of 
urgency.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C052)`"I think she's still in the infirmary."`;
   Coco(T4C053)`"She went to bed. At least that's what Sora 
said."`;
   Takeshi`"Bed?"`;
   Takeshi`"She went back to the infirmary and went to 
bed?"`;
   Coco(T4C054)`"Yeah, I think."`;
   Takeshi`"Are you sure? Is that where she is now?"`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C055)`"Uuum, probably."`;
   Takeshi`"Probably, huh..."`;
   Takeshi`"All right, then. I think I'll go and check 
on her."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco`"........."`;
   Takeshi`"What is it? What, Coco? Is there something 
on my face?"`;
   `For some reason, Coco was staring at my face.`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She laughed quietly.`;
   Coco(T4C056)`"You like Tsugumi, don't you?"`;
   Takeshi`"...Huh?"`;
   Takeshi`"Y-you gotta be kidding me! There's no way!"`;
   Coco(T4C057)`"Really? I wonder?"`;

});
fgload({ id: 1, name: `CO11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T4C058)`"It seems to me like it's written aaAAaall 
over your face."`;
   Takeshi`"Huh?!"`;
   `Flustered, I rubbed at my face.`;
   `Nothing came off on my hands.`;
   `At least nobody had been writing on my face 
again...`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Coco, watching me, had a smile as bright as 
the sun.`;

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
   `I left Coco and went to the second floor 
infirmary.`;

});
let lbl_000004f7;
showTextbox();
text(() => {
   `I hope she's resting properly...`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Takeshi`"Heeey, Tsugumi, can I come in?"`;
   `I spoke into the intercom and opened the door.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
playBGM({ num: 19, volume: 100 });
setSceneTitle({ index: 27 });
clock(`19:1`);
showTextbox();
text(() => {
   `The infirmary was quiet again.`;
   `All the smashed equipment had been tidied up.`;
   `Sure enough...`;

});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   `Tsugumi was there.`;
   Takeshi`"Oh, you really are in bed!"`;
   Takeshi`"I don't believe it!"`;

});
bgload({ name: `EV_TU10B`, transition: 20 });
showTextbox();
text(() => {
   `Perhaps sensing my presence, Tsugumi opened 
her eyes.`;
   Tsugumi(T4C059)`"What? Could you keep it down....?"`;
   `Her voice was normal.`;
   Tsugumi(T4C060)`"Am I not supposed to here or something?"`;
   Takeshi`"No! No, not at all!"`;
   Takeshi`"I was just surprised, that's all."`;

});
bgload({ name: `EV_TU10C`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T4C061)`"Surprised?"`;
   Takeshi`"Um, yeah, surprised."`;
   Takeshi`"You came back."`;
   Tsugumi(T4C062)`"Yeah...well...."`;
   Tsugumi(T4C063)`"I had to come back from that sector. There 
was nowhere to go."`;
   Takeshi`"Hey, that's not what I.... Ah, no, never 
mind."`;
   Takeshi`"Anyway, I'm glad you're back."`;
   Tsugumi(T4C064)`"Glad...?"`;
   Takeshi`"Yeah. Glad. Relieved?"`;
   Tsugumi(T4C065)`"....Oh, really."`;
   `Tsugumi looked at me intently.`;

});
bgload({ name: `EV_TU10B`, transition: 20 });
showTextbox();
text(() => {
   `As she spoke, she lay back down and slowly 
closed her eyes.`;

});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T4C066)`"Keep your voice down, okay?"`;
   Tsugumi(T4C067)`"My head hurts a little. Noise makes it worse."`;
   Takeshi`"Oh? Yeah, I'm sorry."`;
   Takeshi`"Hey, you hungry?"`;
   Tsugumi`"........."`;
   Takeshi`"You want me to make you a sandwich?"`;
   Tsugumi`"........."`;
   Tsugumi(T4C068)`"Yes, please..."`;
   Takeshi`"Okay. I'll go get you one."`;
   Takeshi`"Wait right here. I'll be back soon, okay? So 
don't move."`;
   `I tried not to make any noise as I left.`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `As soon as I got out of the infirmary I 
sprinted to the third floor.`;

});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `The kiosk had been cleaned up, but I turned 
the fryer back on and heated up the chicken.`;
   `I hurried, but worked carefully.`;
   `I heated the bread and browned it slightly.`;
   `I spread on the special sauce, and chose the 
best piece of lettuce.`;
   `Hurriedly wrapping the hot sandwich, I left 
the kiosk.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   `I sprinted back to the infirmary. I had been 
away less than ten minutes.`;
   `She was probably sick of waiting.`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I punched the open button until the door 
opened.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Sorry I took so long..."`;
   `I called out softly as I approached the quiet 
bed.`;
   Takeshi`"I took more trouble with this than usual.  
It's a masterpiece."`;
   Takeshi`"Eat it before it gets cold..."`;
   Takeshi`"Huh?"`;
   `Maybe she was asleep.`;
   `I approached the bed, but there was no answer.`;
   Takeshi`"Hey, Tsugumiiii..."`;
   Takeshi`"Tsugumi, here's your food."`;
   Takeshi`"A delicious sandwich, get it while it's 
hot..."`;
   `I called softly, but there was no response.`;
   Takeshi`"TSUGUMI!!!!"`;
   `I tried yelling.`;
   Takeshi`"I said, HERE'S YOUR FOOD!"`;
   Takeshi`"Are you going to eat it? Say something!"`;
   Takeshi`"........."`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `GRAB!!`;
   `I pulled back the blanket on the bed.`;

});
bgload({ name: `EV_TU10E`, transition: 20 });
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   `Tsugumi wasn't there.`;
   `The bed was still slightly warm...`;
   Takeshi`"She's gone!"`;
   Takeshi`"I told her not to move!"`;
   `I let out a deep sigh.`;
   `I held my head in my hands.`;
   `I resisted the urge to throw the sandwich 
against the wall.`;
   Takeshi`"Where on earth did that stupid girl run off 
to...?"`;
   `Without thinking about it, I stamped my foot.`;

});
playSFX({ name: `SE01_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Crunch!`;
   `I felt something hard under my shoe.`;
   Takeshi`"Huh......?"`;
   `I lifted my foot and looked down.`;
   `Whatever I had stepped on was pulverized 
under my feet.`;
   `The small pieces smelled faintly.`;
   `I bent down, and spread them out on my hand.`;
   Takeshi`"...Looks like nuts..."`;
   `Glancing under the bed, I found a rolled-up 
sheet stuffed underneath.`;
   `I pulled it out.`;
   `I found a bag, which had probably contained 
the nuts, and an empty box.`;
   `They looked like souvenirs bought at some shop.`;
   `(Where these here when we searched the place?)`;
   `Had Tsugumi smuggled them in?`;
   `(Was she eating them in secret...?)`;
   `No, that explanation didn't feel quite right.`;
   `(Ah ...)`;
   `I thought the nuts were crushed because I had 
stepped on them....`;
   `But, there was also a large amount of powder 
under the bed.  Someone had deliberately 
crushed the nuts.`;
   `I pulled the box out from under the bed, and 
glanced inside.`;
   `A section of the lid had been torn off, and 
the box was filled with cotton, with a soft 
hollow in the center.`;
   `It looked like the nest of some small animal.`;

});
if (l_went_outside_as_sora_suggests_in_3rd_day == 0) goto(lbl_00000719);
showTextbox();
text(() => {
   Takeshi`"Hmmmm..."`;
   `I considered the evidence..`;
   `The cotton in the box, and the scattered 
pieces of nut..`;
   `(Did Tsugumi have some kind of pet?)`;
   `It seemed a reasonable conclusion.`;
   `In that case...`;
   Takeshi`"Maybe she's gone looking for her pet?"`;
   `But where exactly?`;
   Takeshi`"I couldn't ask Sora..."`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `I called Sora from the infirmary terminal, 
but she didn't appear.`;

});
goto(lbl_00000731);
let lbl_00000719;
showTextbox();
text(() => {
   Takeshi`"Maybe...?!"`;
   `Now that I thought about it, I remembered 
having seen a rat running out of the infirmary.`;
   `(So, was Tsugumi keeping a rat in here...?)`;
   `The evidence would seem to point to that.`;
   `In that case...`;
   Takeshi`Has she gone looking for her pet?`;
   `But, where exactly?`;
   Takeshi`"Maybe I should ask Sora."`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `I called Sora from the infirmary terminal.`;
   `But she didn't appear.`;
   Takeshi`"Huh? Is this broken?"`;

});
let lbl_00000731;
hideTextbox();
bgload({ name: `MAP3F_A1`, transition: 30 });
delay({ interval: 90 });
showTextbox();
text(() => {
   `I looked at the map of LeMU on the monitor, 
but could detect no signs of life.`;
   `Where in the vicinity would LeMMIH's would 
there be a large terminal functioning?`;
   Takeshi`"Of course - the Security Office!"`;
   `If I went there I would probably learn 
something.`;

});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   `I left the infirmary and turned left down a 
corridor.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `When I arrived at the Security Office, I 
opened the door and flew inside.`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `There was somebody already there.`;

});
fgload({ id: 1, name: `TU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi was sitting in a chair in front of the 
console.`;
   `She was engrossed in something and didn't 
notice me come in.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She was doing something at the console.`;
   `On the screen was a zoomed-in section of a map.`;
   `A strange point of light was moving across the 
enlarged section of the map.`;
   `The light indicated a sign of life. `;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She hit the key.`;
   `One portion of the screen changed, and the 
remote camera zoomed in on whatever was 
reacting.`;
   `A living creature was visible on the monitor.`;
   Tsugumi(T4C069)`"Phew...".`;
   `Tsugumi breathed a sigh of relief.`;
   Takeshi`"A rat."`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `At the sound of my whisper, Tsugumi swung 
around.`;
   `She blinked.`;
   Takeshi`"It's a rat, isn't it?"`;
   Tsugumi`".........."`;
   `A grey rat was running along a pipe.`;
   `The map showed the isolated sector on the 
third floor.`;
   Takeshi`"Is it that rat you're looking for?"`;

});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C070)`"...Of, of course not!"`;
   `Tsugumi was obviously flustered.`;
   Takeshi`"I looked under your bed and saw the box."`;
   Takeshi`"There were nuts everywhere..."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `She looked away.`;
   Takeshi`"You don't have to answer if you don't want 
to."`;
   Takeshi`"Anyway, I wonder how that dirty rodent get 
here?"`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C071)`"DIRTY RODENT!?"`;
   `Tsugumi's voice was suddenly hysterical.`;
   `I was a little taken aback.`;
   Takeshi`"It's not a rat?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C072)`"It's a Djungarian hamster!"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C073)`"...I think...."`;
   Takeshi`"Reeally...."`;
   Takeshi`"Oh, so that's what it's called, a Djungarian, 
huh...?"`;
   Takeshi`"You're pretty knowledgeable, Tsugumi."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C074)`"...E-everybody knows what they're called...".`;
   `Her chest puffed out slightly.`;
   Takeshi`"So you were looking for that rat?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C075)`"No!"`;
   Tsugumi(T4C076)`"I told you it's not a rat!"`;
   Takeshi`"Oh, sorry, uh, not rat, but hamster."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"You were looking for the hamster?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi seemed to nod her head, reluctantly.`;
   `The movement was so small I wasn't even sure 
if she had made it.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi looked back at the monitor.`;
   Tsugumi(T4C077)`"He probably traveled through some pipe."`;
   Takeshi`"Pipe?"`;
   Tsugumi(T4C078)`"The pipes with the electric cables, or the 
power sockets."`;
   Takeshi`"Oh, I see."`;

});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 19 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   `Her finger traced the map.`;
   `Nobody could walk to where the hamster was.`;
   `The top right of the screen showed an area 
under water.  It seemed there was one room 
still empty.`;
   `It was even further away than the isolated 
area on the third floor.`;
   `It wasn't very clear on this map, but there 
was one emergency corridor in the sector.`;
   `(Hmmmm...)`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `I committed LeMU's map to memory...`;
   Takeshi`"Geez. I guess I'll just have to..."`;
   `I grabbed a plastic bag from the trashcan, and 
headed for the exit.`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C079)`"Where do you think you're going?"`;
   Takeshi`"Where do you think I'm going? I'm going to 
go get him."`;
   Tsugumi(T4C080)`"Who?"`;
   Takeshi`"That funny looking hamster."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C081)`"There's no way you'll make it!"`;
   Tsugumi(T4C082)`There's a section underwater between here and 
there!`;
   Tsugumi(T4C083)`"And no human could fit through the pipe!"`;
   `I ignored her and left the Security Office.`;

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
   `I began to walk toward the place I had in mind.`;

});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C084)`"Wait!"`;
   `Tsugumi caught up with me, and grabbed my arm.`;
   Takeshi`"What now?"`;
   Takeshi`"If I don't get going, Mr. Hamster is going 
to move to another place."`;

});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C085)`"How do you plan to get in there?"`;
   Takeshi`"How else? ...Swim."`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C086)`"Huh!?"`;
   `Tsugumi's hand relaxed.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Still in her grip, I kept moving.`;
   `Tsugumi came with me.`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C087)`"W-Wait!"`;
   Tsugumi(T4C088)`"Are you out of your mind?"`;
   Takeshi`"I'm going through with this."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C089)`"That's the reason why I think you are stupid."`;
   Tsugumi(T4C090)`"If you open those flood gates, you'll be 
overwhelmed by the seawater - the pressure is 
6 atmospheres!"`;
   Takeshi`"You don't have to worry about that."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `MAP04A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"The hamster's in an area directly connected 
to the flooded emergency corridor."`;
   Takeshi`"The water in that area is 1 atmosphere of 
pressure. So, the flooded corridor should be 
about the same."`;
   Takeshi`"Besides, the flood gates on either side of 
the corridor are firmly shut."`;
   Takeshi`"That corridor is completely isolated from the 
outside seawater."`;

});
showTextbox();
text(() => {
   Takeshi`"The entrance on the other side is open."`;
   Takeshi`"If I use the flooded corridor beneath the 
room, I can get into the next area...."`;
   Takeshi`"Why don't you go back and check the map?"`;

});
bgload({ name: `BG23A1`, transition: 20 });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C091)`"But..."`;
   Tsugumi(T4C092)`"How far do you think it is to get to the 
area?"`;
   Takeshi`"153 feet."`;
   Takeshi`"I made sure to check it before."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C093)`"Yeah, but 153 feet is a long way..."`;
   Takeshi`"It'll be all right."`;
   Takeshi`"I've swam to one end and back of a 25 meter 
pool underwater, once..."`;
   Takeshi`"I kicked off the far wall coming back, but 
still..."`;
   `I waved my hands to dismiss it. Tsugumi's 
expression hardened.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C094)`"You..."`;
   Tsugumi(T4C095)`"You are crazy."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C096)`"Are you trying to kill yourself?"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi breathed in sharply.`;
   Takeshi`"I'll be all right."`;
   Takeshi`"It's all right, I won't die. I promise I'll 
come back."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C097)`"Why are you doing this?"`;
   Tsugumi(T4C098)`"Why are you doing this for one little 
hamster?"`;
   Takeshi`"What else can I do?"`;
   Takeshi`"We're all in this together."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"Maybe you're not one of us...."`;
   Takeshi`"But any pet you have is one of us."`;
   Takeshi`"In Japan, people with the same goal are 
called friends..."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C099)`"......You're an idiot."`;
   Takeshi`"That doesn't bother me."`;
   Takeshi`"I'd rather be a cheerful idiot than some 
warped genius."`;

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
   `We took EI down to the 3rd floor.`;
   `From there we walked along the corridor to the 
isolated sector.`;

});
bgload({ name: `BG25B3`, transition: 20 });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"Anyway, you may as well eat this."`;
   `The fried chicken sandwich was still in my 
hand. I shoved it at Tsugumi.`;
   Takeshi`"Here, before it gets cold."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi's face showed no reaction as she 
silently accepted the sandwich.`;
   `Tsugumi slowly unwrapped the sandwich.`;
   `She cautiously sniffed it.`;

});
fgload({ id: 1, name: `TU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C100)`"*MUNCH*"`;
   `Tsugumi suddenly took a huge bite.`;

});
fgload({ id: 1, name: `TU11ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C101)`"Mmm  ...."`;

});
fgload({ id: 1, name: `TU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C102)`"Mmmff....nnn..."`;
   `She ate it fast.`;
   `The sandwich disappeared before my eyes.`;

});
fgload({ id: 1, name: `TU12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C103)`"......Whew."`;
   Takeshi`"How was it? Good, huh?"`;

});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi didn't reply, but balled up the 
sandwich wrapping paper and threw it back at 
me.`;
   `But seeing how happily she ate, I didn't need 
words to know how she felt.`;
   `I was pleased.`;

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
   `We arrived at the pipe room.`;

});
playSFX({ name: `SE00_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `We searched the floor and opened the hatch of 
the manhole that led to the emergency corridor.`;
   `We peered inside.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `A tube of about two feet in diameter 
stretched down below us.`;
   `A simple ladder was fixed on one side of the 
tube. About six feet down we could see the 
submerged emergency light shining.`;
   `We could find no signs as we peered through 
the hatch that the water was backflowing.`;
   `That meant that the water pressure inside the 
corridor was balanced against the pressure 
around us.`;
   Takeshi`"I wonder if there's something I can use to 
guide me back?"`;
   `Fortunately, there was a rope with a hook on 
it, which looked as if it were a lifeline for 
the maintenance crew. I decided to hold on to 
it when I went in.`;
   `Checking that the rope was long enough, I 
tied it firmly to a pipe nearby.`;
   `If I tied it to the hook where I came out, 
then it should be easy to return.`;
   Takeshi`"Alright then..."`;
   `I did some light stretching exercises to warm 
up.`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C104)`"Wait!"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C105)`"I should...go instead."`;
   Takeshi`"Huh?"`;
   `Tsugumi stared me square in the face.`;

});
if (l_tsugumi_flag == 0) goto(lbl_00001018);
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C106)`"Don't get me wrong."`;
   Tsugumi(T4C107)`"I just don't want to watch you pull this 
hypocritical stunt is all."`;
   Tsugumi(T4C108)`"I don't want to see you kill yourself 
because you believe this hypocrisy."`;
   Takeshi`"How can you say that?"`;
   Takeshi`"That's not a nice thing to say!"`;
   `I laughed at her as I loosened my limbs and 
body.`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Takeshi`"I'll be fine. You go back to the Security 
Office."`;
   Tsugumi(T4C109)`"What?"`;
   Takeshi`"When I get through to the other side, you 
can tell me where the hamster is."`;
   Takeshi`"We won't be able to locate him without 
LeMMIH, will we?"`;
   Takeshi`"So unless someone who can operate LeMMIH 
stays behind, it won't work."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C110)`"But..."`;
   Takeshi`"Okay, then. It's settled."`;
   `I finished warming up and adjusted the voice 
converter in my ear.`;
   `Sora had told me that the earphone was 
pressure-resistant, but hadn't said anything 
about whether it was waterproof.`;
   Takeshi`"See you later!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I ruffled Tsugumi's hair and started down the 
ladder.`;

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
   `My toes reached the bottom of the ladder.${wait(30)}`;
   `I let go of the ladder and leapt into the 
emergency corridor.`;
   fadeClearPage();
});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `(Wow, it's COLD!...!)${wait(30)}`;
   `It was like swimming in ice water.${wait(30)}`;
   `The water here was much colder than the water 
higher up.${wait(30)}`;
   `I had greatly miscalculated.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `And that wasn't the only thing I'd 
miscalculated.${wait(30)}`;
   `Inside the corridor was pitch dark.${wait(30)}`;
   `I tried to use my PDA backlight.${wait(30)}`;
   `I could see that there were parallel walls on 
either side and this part of the corridor was 
straight.${wait(30)}`;
   `But that was all I could see.  I knew nothing 
of what was beyond that.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `At that point, my PDA batteries ran out.${wait(30)}`;
   `(OH, crap.... No using this for a while...)${wait(30)}`;
   `There was nothing for it but to grope my way 
forward.${wait(30)}`;
   `How far had I swum? How much further did I 
need to go?${wait(30)}`;
   `I had no way of guessing.${wait(30)}`;
   `I didn't even know if I was swimming in the 
right direction.`;
   fadeClearPage();
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `I just kept swimming in the darkness.${wait(30)}`;
   `It was terrifying.${wait(30)}`;
   `As my breath got tighter, I could feel the 
fear spreading through my body.${wait(30)}`;
   `(I might just die here.)${wait(30)}`;
   `As afraid as I was, I was able to consider 
dying quite calmly.${wait(30)}`;
   `I was caught in the illusion that I was 
sinking, farther and farther down.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The darkness penetrated to my very core.${wait(30)}`;
   `The shadow of death crept through my whole 
body...${wait(30)}`;
   `Eroding my every cell...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `(I can't...last...much longer...)${wait(30)}`;

});
setKomoreType(1);
showKomoreAnim();
showTextbox();
text(() => {
   `Just as my fear reached its peak, I glimpsed 
a spot of light.${wait(30)}`;
   `The exit!${wait(30)}`;
   `Was it 30 feet? Or 60 maybe??${wait(30)}`;
   `My vision was cloudy and I couldn't judge the 
distance.${wait(30)}`;
   `I was reaching my limit. No, I had probably 
already exceeded it.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The light was shining beyond the darkness.${wait(30)}`;
   `My body was screaming as my cramping fingers 
stretched out to the light.${wait(30)}`;
   `A little further, just a little further, the 
light is right - ${wait(30)}`;

});
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `- there!${wait(30)}`;
   `My hand grabbed the ladder.${wait(30)}`;
   `I wasted no time in fixing the rope on the 
hook.${wait(30)}`;
   `I pulled myself upwards.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
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
   `I scaled the ladder as quickly as I could, 
and burst out into the corridor.`;
   Takeshi`"GGga.....ha......nnggaah....."`;
   `I breathed deeply, in and out.`;
   `I coughed and spat.`;
   `I felt like I was going to cough the darkness 
right out my lungs.`;
   Takeshi`"Uh.... ugh....."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `But, contrary to my expectations - `;
   Takeshi`".....gagh...."`;

});
hideTextbox();
playSFX({ name: `SE10_28`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `What erupted from my mouth was 
the semi-liquid remains of my hotdog.`;

});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   `I was a little cold, but I shook my head to 
clear it and continued my search for the 
hamster.`;
   `The flood doors on either side of the 
corridor were shut tight.`;
   `There was only one other door.`;
   `I went through.`;
   Takeshi`"Hey, Mr. Hamster!"`;
   `That probably wasn't its name, but never 
mind...`;
   `It was better than yelling, 'Mr. Djungarian!'`;
   Tsugumi(T4C111)`"Takeshi, are you all right?"`;
   `I heard Tsugumi's voice come out through a 
speaker somewhere in the room.`;
   Tsugumi(T4C112)`"I'm picking up your sound on the monitor. If 
you can hear me, answer."`;
   Takeshi`"Okay, Tsugumi, I can hear you."`;
   Tsugumi(T4C113)`"What can you see?"`;
   Takeshi`"The room is pitch dark. I can't see a thing. 
Either the lights are broken, or there's not 
enough power."`;
   Takeshi`"My trusty PDA is out of power..."`;
   Takeshi`"I should have brought some fireflies with me."`;
   Tsugumi(T4C114)`"Did you say something?"`;
   Takeshi`"Nothing. If you pick up the hamster's 
location, let me know."`;
   Tsugumi(T4C115)`"Okay..."`;
   Tsugumi(T4C116)`"Go straight ahead, about 10 feet."`;
   Takeshi`"1, 2, 3...okay!"`;
   Tsugumi(T4C117)`"Turn right 40 degrees."`;
   Takeshi`"Forty degrees? What kind of angle is THAT?"`;
   Tsugumi(T4C118)`"Hey, you just turned left, not right!"`;
   Takeshi`"Are you sure? The other way?"`;
   Tsugumi(T4C119)`"Are you sure you're okay?"`;
   Takeshi`"It was just the wrong direction. I'm fine. 
Look, I'm facing the right direction now."`;
   Tsugumi(T4C120)`"Oooh- !"`;
   Tsugumi(T4C121)`"Go straight ahead another 12 feet - there's 
a step there, be careful."`;
   Takeshi`"What? How can I be careful in the dark?!... 
Wagh!"`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"........"`;
   Tsugumi(T4C122)`"What happened?"`;
   Tsugumi(T4C123)`"Takeshi? Takeshi? Are you all right?"`;
   Tsugumi(T4C124)`"Hey! Talk to me! Takeshi!"`;
   Tsugumi(T4C125)`"Ta-Takeshi?"`;
   Takeshi`"Uh....."`;
   Takeshi`"It's all right, I'm alive."`;
   Takeshi`"Can you let me know how high the steps are 
going to be? I didn't realize I'd be smashing 
my knee against it."`;
   Tsugumi(T4C126)`"...I'm sorry."`;
   Takeshi`"Okay, okay, go on. Is Mr. Hamster still 
here? He hasn't run away?"`;
   Tsugumi(T4C127)`"He's still there."`;
   Takeshi`"Okay, navigate me."`;
   Tsugumi(T4C128)`"Alright."`;
   `On I went like that...`;
   Takeshi`"Alright, I've got you!"`;
   `I successfully trapped the hamster in the 
plastic bag.`;
   Takeshi`"I'm on my way back. Wait for me in the pipe 
room."`;
   Tsugumi(T4C129)`"All right."`;

});
eff_41 = 21;
eff_42 = 9;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   `I went out into the light of the corridor, and 
checked the hamster.`;
   `Okay. He was quiet, but seemed healthy.`;
   `I blew more air into the bag, and tied the 
mouth of it shut tight.`;
   `Tired as I was, could I get back the way I 
had come?`;
   `I hesitated, but unless I went back it was all 
pointless.`;
   `If I followed the rope, I should be able to 
get back faster than I had come.`;
   `I tied the bag to my waist, took a deep 
breath, and jumped into the water.`;

});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
stopBGM();
delay({ interval: 90 });
showTextbox();
text(() => {
   Takeshi`"Faagh?!"`;

});
bgload({ name: `BG20B1`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `I climbed up the pipe ladder and stuck my 
head out of the hatch.`;
   `I had made it back safely to the area I had 
started from.`;
   Takeshi`"Honey, I'm hooome!"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi was waiting beside the hatch.`;
   Takeshi`"Look what the cat dragged in... me. Well, 
here I am. I'm back."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C130)`"W-welcome back.".`;

});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `I closed the hatch and stood up.`;
   `I opened the plastic bag at my waist, and 
took out the hamster.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T4C131)`Ah - `;
   `Tsugumi grabbed the hamster.`;
   `Lovingly, she stroked his damp fur.`;
   Tsugumi(T4C132)`"Thank you..."`;
   `Tsugumi whispered her gratitude without 
looking at me.`;
   Takeshi`"What's his real name?"`;
   `I looked at the hamster.`;
   Tsugumi(T4C133)`"...now don't laugh?"`;
   Takeshi`"Okay. I won't."`;
   Tsugumi(T4C134)`"You promise?"`;
   Takeshi`I promise.`;
   Tsugumi(T4C135)`"His name's Chami."`;
   Tsugumi(T4C136)`"Chami. Because he's charming."`;
   `............`;
   `Chami.`;
   Takeshi`"That's cute. What a good name!"`;
   `How....cute.`;
   `That was what I thought.`;
   `I did my best to stifle my laughter.`;

});
bgload({ name: `EV_TU02B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T4C137)`"Hey! You promised not to laugh!"`;
   Takeshi`"I'm not laughing!"`;
   `I tried to keep a straight face...`;
   `But the corners of my mouth started to twitch.`;
   `Chami. `;
   `Charming Chami. Well....`;
   `'Chami-poo, Chami-poo it's din-din time.'`;
   `I could just imagine Tsugumi baby-talking to 
it.`;
   Takeshi`"Chami-poo, Chami-poo."`;
   Takeshi`"Mffff, Ha ha ha...."`;
   Tsugumi(T4C138)`"Aaaargh!"`;
   Tsugumi(T4C139)`"That's why I didn't want to tell you!"`;
   `Sullen, Tsugumi was red-faced...`;
   `...but she held out the bath towel she had 
behind her back.`;
   Takeshi`"Oh, thanks."`;
   `I took the towel and wiped myself down.`;
   Takeshi`"Phew..."`;
   `I breathed deeply, feeling reborn, as I 
glanced at Tsugumi's face.`;

});
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   `She was playing with the hamster in her hand, 
and her cheeks were bright.`;
   `She looked so happy...`;
   `It was the first time I'd ever seen her smile.`;

});
hideTextbox();
goto(lbl_00001345);
let lbl_00001018;
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C140)`"Don't get me wrong."`;
   Tsugumi(T4C141)`"I didn't purposely try to get you to do 
something that I knew you couldn't do."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C142)`"I'm not like you. I'm not stupid."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C143)`"You and I are different up here."`;
   `Tsugumi tapped her head.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C144)`"I'm going."`;
   Takeshi`"What's your problem? I can't believe you're 
being like that at a time like this...."`;
   Takeshi`"That's not a nice thing to say!"`;
   Tsugumi`"........."`;
   Takeshi`"I'll be fine. You go back to the Security 
Office."`;
   Takeshi`"When I get through to the other side, you 
can tell me where the hamster is."`;
   Takeshi`"We won't be able to locate him without 
LeMMIH, will we?"`;

});
showTextbox();
text(() => {
   Tsugumi(T3A107)`"Hmmm, yeah..."`;
   Takeshi`"Hmmm, yeah, is it? Why don't you use that 
superior intellect of yours to think of 
something?"`;
   Takeshi`"Unless someone who can operate LeMMIH stays 
behind, it won't work."`;

});
fgload({ id: 1, name: `TU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C146)`"Ha ha ha..."`;
   `Tsugumi laughed.`;
   Tsugumi(T4C147)`"Alright."`;
   Tsugumi(T4C148)`"I've learned from you - I'll show you what I 
can do with a little courage and guts."`;
   Takeshi`"Now, wait just a - !"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_02`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Ooomph.`;
   Takeshi`"Ugh...uh."`;
   `She punched me.`;
   `Tsugumi punched me.`;
   Takeshi`"——! ?"`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C149)`"See you later..."`;
   `Tsugumi took the rope hook and went down the 
ladder.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Before long she disappeared from view.`;
   `The rope stretched into the water.`;
   `Holding my stomach, I sunk to my knees.`;
   `She'd got me with a solid body blow and I 
couldn't stand up.`;
   `She really hit hard.`;
   `(I can't believe her...)`;
   `I seemed to remember getting punched like 
that...by someone wearing a mascot costume....`;
   `(Was that Tsugumi!?...ughg...)`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `I was suddenly dizzy.`;
   `My stomach was in agony.`;
   `Not where I'd been punched...`;
   `I was suffering from a totally different pain.`;
   `I reached for the pipe and tried to stand up.`;
   `But my hand grasped at thin air.`;
   `My vision clouded.`;
   `I coughed and spat.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`".....gagh...."`;

});
hideTextbox();
playSFX({ name: `SE10_28`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `What erupted from my mouth was 
the semi-liquid remains of my hotdog.`;
   `(Wha-what the......?)`;
   `I felt a chill as I lost consciousness...`;

});
removeBG({ mode: BLACK, transition: 0 });
dimOff_ac = 1;
closeDimOverlay();
delay({ interval: 120 });
bgload({ name: `BG20B1`, transition: 20 });
showTextbox();
text(() => {
   `When I regained consciousness, I was lying 
half in a pool of water.`;
   `(Where am...I?)`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
showTextbox();
text(() => {
   `(Oh, it's the pipe room...)`;
   `(What happened to Tsugumi...?)`;
   `In front of me, I could see the rope 
disappearing into the hatch.`;
   Takeshi`"That's right! She's looking for the hamster!"`;
   Takeshi`"I have to get to the Security Office! 
Tsugumi will need navigation!"`;

});
fgload({ id: 1, name: `TU09AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C150)`"...You're too late."`;
   Takeshi`"Sorry, I'll be right there."`;
   Takeshi`"Huh? What?"`;

});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C151)`"I've already been there and back."`;
   `With startled look on her face, Tsugumi 
peered out of the hatch.`;

});
hideTextbox();
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She pulled up the rope as she stood up and 
closed the hatch.`;
   `I slowly got off the floor.`;
   Takeshi`"Ho-how'd it go, Tsugumi?"`;

});
fgload({ id: 1, name: `TU03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C152)`"I found him. He was in the corner of the 
room. But I couldn't catch him."`;
   Tsugumi(T4C153)`"I think he ran this way."`;
   Takeshi`"Oh..."`;
   `I hoped we could catch him.`;
   Takeshi`"Just let me check, then..."`;
   Takeshi`"What does this hamster look like?"`;

});
fgload({ id: 1, name: `TU01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C154)`"He's just a normal Djungarian."`;
   Tsugumi(T4C155)`Grey color, black stripe on his back, small 
enough to sit in the palm of your hand...`;
   Takeshi`"Hmmmm...."`;
   Takeshi`"Like that?"`;
   `I pointed at a small rodent running along a 
nearby pipe.`;

});
fgload({ id: 1, name: `TU06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C156)`"...Huh?"`;
   Tsugumi(T4C157)`"Takeshi ..."- `;

});
fgload({ id: 1, name: `TU07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C158)`"...Grab him!"`;
   Takeshi`"What?"`;
   `Seeing the rodent, Tsugumi's eyes got huge.`;
   `I had no idea what to say.`;
   `The small furry animal noticed Tsugumi and me 
and froze, his eyes fixed on us.`;
   Takeshi`"Well, then."`;
   `I reached out my hand.`;
   `Gotcha.`;
   `(What? Just like that?)`;
   `I didn't think I'd catch him so quickly.`;
   `The stunned hamster lay quietly in my hand.`;
   Takeshi`"Woah! Nice catch!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU06AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C159)`"Aaagh!"`;

});
fgload({ id: 1, name: `TU04AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C160)`"No! Be careful! Don't squeeze him so hard!"`;
   Takeshi`"What?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi snatched the "rat" from my hand.`;
   `She stroked it gently as if she were 
consoling it.`;

});
fgload({ id: 1, name: `TU02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C161)`"Did it hurt? I'm sorry..."`;
   Takeshi`"Huh? What?"`;
   Takeshi`"Is that really a rat? I mean, what are you 
doing with that thing in the first place!?"`;
   `I was taken aback.`;

});
fgload({ id: 1, name: `TU08AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C162)`"No!"`;
   Tsugumi(T4C163)`"I keep telling you!"`;

});
fgload({ id: 1, name: `TU04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C164)`"This is not a rat, it's Chami!"`;
   Tsugumi(T4C165)`"He's a Djungarian hamster."`;
   Tsugumi`"........."`;
   `Tsugumi spat the words out. She pouted as she 
glared at me.`;
   Takeshi`"Okay, he's not a rat, he's Chami."`;
   Takeshi`"...Chami?"`;
   Takeshi`"That hamster's name is Chami?"`;

});
fgload({ id: 1, name: `TU18AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C166)`"I didn't say that."`;

});
fgload({ id: 1, name: `TU05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C167)`"I never said that..."`;
   `Embarrassed, she bowed her head.`;
   Tsugumi`"........."`;
   Takeshi`"I, uh..."`;
   Takeshi`"Anyway, that is what you were looking for?"`;

});
fgload({ id: 1, name: `TU17AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `She nodded silently.`;
   Takeshi`"Okay, well, great..."`;
   Takeshi`"That was lucky, wasn't it!"`;
   Takeshi`"Anyway, we've caught him."`;
   Tsugumi(T4C168)`"Yeah.....ah....um....."`;

});
fgload({ id: 1, name: `TU15AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T4C169)`"Takeshi, I ...thank you...I guess."`;
   `Her voice was quiet and expressionless.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_06`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   Takeshi`"Ouch!"`;

});
playSFX({ name: `SE01_06`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `She knocked me down and bolted from the room.`;
   `She was soaking wet, and still clutching Chami.`;

});
playSFX({ name: `SE00_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `(What is with that chick...?)`;
   `I had wanted to tell her how glad I was that 
she was okay.`;
   `It seemed I had missed my chance.`;
   `Stunned, I listened to her footsteps grow 
fainter.`;

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
   Takeshi`"...So, that's what happened."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C170)`"Oh, I see...."`;
   `Several hours had elapsed since the hunt for 
Chami.`;
   `I had asked to Sora to come with me to the 
souvenir kiosk on the second floor.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C171)`"Isn't it great the Tsugumi found her friend?"`;
   Takeshi`"Ahh, yeah."`;
   `Her friend, huh.....well, as far as Tsugumi 
was concerned, it was her friend.`;
   Sora(T4C172)`"Anyway, Takeshi..."`;
   Sora(T4C173)`"Weren't we going to search this kiosk for 
food?"`;
   Takeshi`"Uh, was that right?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `It was quiet all around.`;
   `There was no one around.`;
   `You, the Kid and Coco were in the Conference 
Room preparing for bed.`;
   `Tsugumi was probably asleep in the infirmary.`;
   Takeshi`"We looked pretty thoroughly last time and 
didn't find anything..."`;

});
fgload({ id: 1, name: `SO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C174)`"But, there are nuts and cookies here. I saw 
them right away. Look."`;
   `Sora pointed to the packets in the kiosk.`;
   Takeshi`"Oh, really?"`;
   `There was a mountain of packets just like the 
one I had found under the bed in the infirmary.`;
   Takeshi`"I guess we were all half-asleep when we 
looked last time."`;
   Takeshi`"Well, we don't need to worry about food for 
the time being."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C175)`"We can keep eating the fried chicken 
sandwiches, can't we?"`;
   Takeshi`"Yes, there are plenty.  I don't know what the 
expiration date on them is, but there should 
be enough for two or three more days."`;
   Sora(T4C176)`"Oh..."`;
   Takeshi`"Yeah...".`;
   `We kept talking for a while.`;
   `It was an ordinary conversation with no fixed 
theme and nothing to do with the topic of 
escape.`;
   Takeshi`"I wonder what the weather is like up there..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C177)`"I have no way of knowing what the 
situation's like up on the surface..."`;
   Sora(T4C178)`"...But judging from what it's like 
underwater, it's quite calm. It's unlikely to 
get worse any time soon."`;
   Takeshi`"That's reassuring..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C179)`"Yes..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Half the meaning was probably lost.`;
   `I thought that perhaps this conversation 
could be an opportunity.`;
   `I searched for the right words.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"Listen, Sora."`;
   Takeshi`"I want to talk about something serious."`;

});
fgload({ id: 1, name: `SO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C180)`"You do too, Takeshi?"`;

});
hideTextbox();
playBGM({ num: 8, volume: 100 });
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C181)`"Actually...so do I."`;
   Takeshi`"R-really?"`;
   Takeshi`"Okay, after you.... Ladies first."`;
   Sora(T4C182)`"No, Takeshi, you go first."`;
   Takeshi`"To tell you the truth, I'm a little 
embarrassed."`;

});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C183)`"So am I..."`;

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
   Takeshi`"Okay, I'll go first..."`;
   Takeshi`"It's about the lecture today."`;
   Takeshi`"The 'Love Psychology' lecture."`;
   `I scratched my head as I spoke.`;
   Takeshi`"Did you forget it already...?"`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C184)`"No..."`;
   Sora(T4C185)`"I was thinking about it, too."`;
   `Sora's cheeks were bright red.`;

});
goto(lbl_00001546);
let lbl_000014ff;
showTextbox();
text(() => {
   Takeshi`"What did you want to say?"`;
   Sora(T4C186)`"Me first...?"`;
   Sora(T4C187)`"Well, um...."`;
   Sora(T4C188)`"It's about today's lecture..."`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C189)`"Love Psychology..."`;
   `Sora's cheeks were bright red.`;
   Takeshi`"Ah...."`;
   Takeshi`"That's what I wanted to talk about, too."`;
   `I was probably a little red, too.`;

});
goto(lbl_00001546);
let lbl_0000151f;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"Then let's both speak at the same time."`;
   Sora(T4C190)`"Alright."`;
   Takeshi`"Okay, together then.  Three, two, one, go!"`;
   Takeshi`"It's about the lecture today."`;
   Sora(T4C191)`"...It's about the lecture today."`;
   `Ah, I had spoken a moment sooner.`;
   `...Well, okay.`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C192)`"Love Psychology...".`;
   `Sora's cheeks were bright red.`;
   Takeshi`"Ah, yes, that..."`;
   `I was probably a little red, too.`;

});
let lbl_00001546;
showTextbox();
text(() => {
   Sora(T4C193)`"Tee, hee..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We were reflected on the glass of the kiosk.`;
   `Sora twinkled as she spoke.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C194)`"I...wanted to speak about the lecture."`;
   Sora(T4C195)`"Coco was afraid of me, and You seemed mad 
about something..."`;
   Sora(T4C196)`"But what you said wasn't wrong...at least I 
don't think so."`;
   Takeshi`"Hmm, neither do I..."`;
   Takeshi`"I think my examples may have been a little 
extreme, but I think my basic message was 
right."`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C197)`"Yeah?"`;
   Takeshi`"Yeah."`;
   Sora(T4C198)`"Professor..."`;
   Sora(T4C199)`"I would like you to finish the lecture..."`;
   Sora(T4C200)`"Teach me everything."`;
   Sora(T4C201)`"Teach me what I don't know."`;
   Takeshi`"All right then, Miss Anagesaki."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The lecture resumed.`;
   `After hour study.`;
   `She was the only one participating in my 
lecture. No one else was listening.`;
   `It was a lecture for one-on-one.`;
   Takeshi`"All right then, Sora, we're going to get 
back to the basics."`;
   `I played it up a little.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C202)`"Professor! I have a question!"`;
   Takeshi`"Mm, what is it?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C203)`"You weren't acting like this earlier today!"`;
   Takeshi`"Ahem!"`;
   `I pretended to clear my throat.`;
   Takeshi`"The professor is practicing speaking like a 
professor!"`;
   Takeshi`"Let's not worry about how to talk!"`;
   Takeshi`"The way you're talking is fine.  There are 
gentlemen who prefer gentle voices."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I went into the kiosk alone.`;
   `Inside the kiosk, which had not been used 
since the second flood, was strewn with 
colorful stationery and merchandise.`;

});
fgload({ id: 1, name: `SO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C204)`"Professor, what should I do?"`;
   Takeshi`"Just stand there."`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C205)`"All right."`;
   `Sora was waiting just outside the kiosk.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE08_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I jumped over the counter.`;

});
playSFX({ name: `SE10_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I brushed aside the stuff that was lying 
around, and went over to the window.`;

});
playSFX({ name: `SE08_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Alright then, Sora."`;
   Sora(T4C206)`"Yes? What is it professor?"`;
   Takeshi`"Come a little closer."`;
   `From inside the kiosk, I beckoned to Sora.`;
   `Sora approached the glass.`;
   `She stopped about a yard away.`;

});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C207)`"Takeshi, if I go any closer the RSD image 
will...."`;
   Takeshi`"Don't be so unromantic, you'll spoil the 
mood."`;

});
fgload({ id: 1, name: `SO09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C208)`"But I'll probably start to look flat."`;
   `Embarrassed, she bowed her head.`;
   Takeshi`"It's alright, it doesn't matter."`;
   Sora`"......."`;
   Takeshi`"Repeat after me: 'It's alright!'"`;

});
fgload({ id: 1, name: `SO08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T4C209)`"I-it's all right..."`;
   `Blushing furiously, Sora timidly approached 
the window.`;
   `Slowly, one step at a time.`;
   Takeshi`"That's it."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Before long...`;
   `Sora and I faced each other through the thin 
sheet of glass.`;
   Sora(T4C210)`"Here I am."`;
   Sora(T4C211)`"Um, do I look strange, professor?"`;
   Takeshi`"Don't worry."`;
   Takeshi`"I told you it was all right, didn't I?"`;
   `Her image was warping a little, but it was 
nothing serious.`;
   Takeshi`"All right then, practice."`;
   Sora(T4C212)`"Uh. Um, I'm a little nervous..."`;
   Takeshi`"Well don't let me make you nervous."`;
   Takeshi`"Relax, relax. Okay, repeat."`;
   Sora(T4C213)`"Relax, relax..."`;
   `In my hand I held a marker pen that I had 
picked up off the floor.`;
   `I was a red, water-based pen.`;
   Takeshi`"All right then. You know, I thought you were 
a traditional Japanese girl."`;
   Sora(T4C214)`"R-really?"`;
   Takeshi`"Mm. Pure and sincere. Lovely."`;
   Takeshi`"But I felt that as a 24-year-old you were 
lacking a little something."`;
   Sora(T4C215)`"What...?"`;
   Takeshi`"Color...The look of a grown woman."`;
   `Sora was standing on the other side of the 
spotless glass.`;

});
bgload({ name: `EV_SO02A`, transition: 20 });
showTextbox();
text(() => {
   `I took the cap off the pen, and traced the 
line of Sora's lips.`;
   Takeshi`"The fastest way to give you color ? "`;
   Takeshi`"-is with make-up!"`;
   Takeshi`"With conservative make-up like yours, you 
won't even attract doctors or lawyers!"`;
   Takeshi`"Your make-up has to be more...feminine."`;
   Sora(T4C216)`"Professor..."`;
   Sora(T4C217)`"I don't understand what you mean."`;
   Takeshi`"A picture is worth a thousand words."`;
   `I carefully drew her lipstick.`;
   Sora(T4C218)`"That tickles."`;
   Takeshi`"Stand still."`;
   Takeshi`"This is difficult."`;
   Sora(T4C219)`"I'm not moving!"`;
   `Maybe my hand wasn't used to the angle, 
anyway, it was shaking a little.`;
   `I drew her eyeline, gave her mascara and 
rouge and colored in her eyebrows.`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   Takeshi`"Alright, you're done!"`;
   `Finished!`;
   `What a work of art.`;
   `If I would give it a title...`;
   `I'd call it...`;
   `Yes, I'd call it....`;
   `'Butterfly of the Night.'`;

});
bgload({ name: `EV_SO02B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4C220)`"Uh, Professor..."`;
   Sora(T4C221)`"Is...this feminine make-up?"`;
   Takeshi`"Um, well...."`;
   Takeshi`"Not quite..."`;
   Sora(T4C222)`"Huh?"`;
   Takeshi`"Um...."`;
   Takeshi`"It's actually..."`;
   `Over the top.`;
   `REALLY over the top.`;
   `It was a complete failure.`;
   `It looked like a child's scribbling.`;
   Sora(T4C223)`"I've never looked like this! This is a 
change!"`;
   Takeshi`"I've never seen anything, uh, you like 
this..."`;
   Sora(T4C224)`"I think I like it."`;
   Takeshi`"I wouldn't be so sure about that."`;
   Takeshi`"You really think so...?"`;
   Sora(T4C225)`"What? You don't...like it?"`;
   Sora(T4C226)`"...I didn't think you would."`;
   Takeshi`"What do you mean?"`;
   Sora`"........."`;
   Takeshi`"...Miss Anagesaki?..."`;
   Sora`"........."`;

});
bgload({ name: `EV_SO02C`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Aaaargh!"`;
   Takeshi`"It's all wrong!!"`;
   `I tried to rub the lipstick off with my hand.`;
   `But it wouldn't come off.`;
   `The more I tried to wipe it off, the more the 
lipstick spread on her face.`;
   Sora(T4C227)`"Professor!"`;
   Sora(T4C228)`"Is this feminine make-up?"`;
   `All around Sora's mouth was stained red.`;
   Takeshi`"Miss Anagesaki..."`;
   Takeshi`"Not exactly."`;
   `Without meaning to, I laughed.`;
   Sora(T4C229)`"P-Professor?"`;
   Takeshi`"Mm...mhhh...haaa....haaaa..."`;
   Takeshi`"I'm sorry...."`;
   Takeshi`"But it's certainly a change. Haaa, haaa!"`;
   `I was apologizing, but I couldn't stop 
laughing.`;
   Sora(T4C230)`"Ooohh! Professor!"`;
   Sora(T4C231)`"Stop playing with my face!"`;

});
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   `Then Sora started to laugh as well.`;
   Sora(T4C232)`"Tee hee hee..."`;
   Sora(T4C233)`"Ha ha ha...!"`;
   `We both collapsed laughing.`;
   `The sound of our laughter filled the silence 
of the nighttime kiosk.`;
   `It had been ages since I had laughed like that.`;
   `And after we had laughed for a while...`;
   `Sora moved over to the next window.`;

});
bgload({ name: `EV_SO02A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4C234)`"Please do it properly this time."`;
   `Sora's face became serious.`;
   Takeshi`"Alright. Okay, then...."`;
   Takeshi`"Alright. This time I promise you perfect 
feminine beauty..."`;
   `I picked up the pen again and faced the glass.`;
   Takeshi`"........"`;
   `I faced it, but....`;
   Sora(T4C235)`"What's wrong?"`;
   Takeshi`"Nothing..."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `I didn't draw anything with the pen.`;
   `I stared deep into Sora's eyes through the 
glass.`;
   Sora(T4C236)`"Ta...ke....shi?"`;
   `Her glossy lips were forming my name.`;
   Sora(T4C237)`"Uummmm....."`;
   Takeshi`"Let's not do this."`;
   Sora(T4C238)`"Huh?"`;
   Takeshi`"You don't need makeup..."`;
   Takeshi`"You don't need makeup, Sora, you're already 
beautiful."`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   Sora(T4C239)`"Professor..."`;
   Sora(T4C240)`"Don't tease me."`;
   Takeshi`"I'm not teasing you, I mean it."`;
   Sora(T4C241)`"Don't say that, professor."`;
   `I could see Sora blushing.`;
   Sora(T4C242)`"If you say that, professor, I'll start to 
take you seriously."`;
   `She bowed her head, her eyes searching around.`;
   Sora(T4C243)`"I..."`;
   Takeshi`"No more playing teacher."`;
   Sora(T4C244)`"Professor?"`;
   Sora(T4C245)`"Uh....Takeshi?"`;
   `Sora slowly raised her head and looked me in 
the eyes.`;
   Takeshi`"Sora..."`;
   Takeshi`"Your hands..."`;
   Sora(T4C246)`"Hmmm?"`;
   Takeshi`"Put your hands here."`;

});
bgload({ name: `EV_SO03A`, transition: 20 });
showTextbox();
text(() => {
   `I put my hands against the glass.`;
   `Sora placed her hands where mine were.`;
   `Right against left, left against right.`;
   `Separated only by a pane of glass, our hands 
were touching.`;
   `It felt strange.`;
   `What should be a barrier between us was 
actually the only thing joining us.`;
   `Without something between us, we couldn't 
touch.`;
   `But on either side of this glass, we were 
able to confirm the existence of the other.`;
   `It felt as if my hands were touching Sora's 
body.`;
   `Sora's face was there in front of me, mere 
inches from me.`;
   `We were so close I could hear her breathing.`;
   `I thought that I could probably even take her 
in my arms.`;
   Sora(T4C247)`"Takeshi..."`;
   Sora(T4C248)`"May I ask you something?"`;
   Takeshi`"Go ahead..."`;
   Sora(T4C249)`"I feel warm..."`;
   Sora(T4C250)`"I feel really warm..."`;
   Sora(T4C251)`"From my fingers...and in my heart..."`;
   Sora(T4C252)`"What's happening...?"`;
   Sora(T4C253)`"Why do you think....?"`;
   Takeshi`"........."`;
   `I couldn't answer.`;
   `Sora's eyes glistened with tears as she 
stared at me.`;
   `The glass in the window was shaking.`;
   `Sora's warmth spread to my hand.`;
   `But it was just an illusion.`;
   `If I closed my eyes, Sora disappeared.`;
   `But in my hand I could feel the warmth like 
sunshine.`;
   `Even if the warmth was just an illusion...`;
   `Sora existed there and then. Of that I was 
certain.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`T_5A`);
